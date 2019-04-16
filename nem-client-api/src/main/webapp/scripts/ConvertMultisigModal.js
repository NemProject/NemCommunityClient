"use strict";

define(['NccModal', 'Utils', 'TransactionType', 'handlebars', 'typeahead'], function(NccModal, Utils, TransactionType, Handlebars) {
	return NccModal.extend({
	    data: {
            isFeeAutofilled: true,
            dueBy: 1
        },
        computed: {
            hoursDue: function() {
                return this.get('dueBy') | 0;
            },
            fee: {
                get: function() {
                    return Utils.format.nem.getNemValue(Utils.format.nem.stringToNem(this.get('formattedFee')));
                },
                set: function(fee) {
                    this.set('formattedFee', Utils.format.nem.formatNemAmount(fee));
                    this.update('fee'); // so that stupid Ractive trigger fee observers
                }
            },
            multisigFee: {
                get: function() {
                    return Utils.format.nem.getNemValue(Utils.format.nem.stringToNem(this.get('formattedMultisigFee')));
                },
                set: function(fee) {
                    this.set('formattedMultisigFee', Utils.format.nem.formatNemAmount(fee));
                    this.update('multisigFee'); // so that stupid Ractive trigger fee observers
                }
            },
            minCosignatoriesNumber: {
                get: function() {
                    return parseInt(this.get('minCosignatories'), 10);
                }
            },
            feeValid: function() {
                return this.get('fee') >= this.get('minimumFee');
            },
            feeError: function() {
                return !this.get('feeValid') && this.get('feeChanged');
            },
            formattedMinimumFee: function() {
                return Utils.format.nem.formatNemAmount(this.get('minimumFee'));
            },
            passwordValid: function() {
                return !!this.get('password');
            },
            passwordError: function() {
                return !this.get('passwordValid') && this.get('passwordChanged');
            },
            minCosignatoriesError: function() {
                return this.get('minCosignatoriesOverflow');
            },
            formValid: function() {
                return this.get('feeValid') && this.get('passwordValid') && this.get('multisigAccount') && this.get('cosignatoriesValid') && !this.get('minCosignatoriesError');
            }
        },
        resetFee: function(options) {
            var requestData = {
                wallet: ncc.get('wallet.wallet'),
                multisig: ncc.get('activeAccount.address'),
                cosignatories: this.get('cosignatories')
                    .filter(function(e){ return (!!e.address); })
                    .map(function(e){ return {'address':e.address}}),
                minCosignatories: {'relativeChange': this.get('minCosignatoriesNumber') },
                hoursDue: this.get('hoursDue')
            };
            var self = this;

            ncc.postRequest('wallet/account/modification/validate', requestData,
                function(data) {
                    self.set('minimumFee', data.fee);
                    self.set('multisigFee', data.multisigFee);
                },
                {
                    altFailCb: function(faultId, error) {
                    }
                }, options.silent
            );
        },
        getExistingMinCosigs: function() {
            var c = this.get('cosignatories');
            var existing = c.filter(function(a){return a.deleted === false || a.deleted === true;}).length;
            if (this.get('multisigAccount') && this.get('multisigAccount').isMultisig && this.get('multisigAccount').minCosignatories) {
                existing = this.get('multisigAccount').minCosignatories;
            }
            return existing;
        },
        resetMinCosignatories: function() {
            if (this.get('useDefaultMinCosignatories')) {
                var existing = this.getExistingMinCosigs();
                var c = this.get('cosignatories');
                var removed = c.filter(function(a){return a.deleted === true;}).length;
                var added = c.filter(function(a){ return a.deleted === undefined && a.address.length === 40;}).length;

                if (this.get('multisigAccount') && this.get('multisigAccount').isMultisig) {
                    if (this.get('multisigAccount').minCosignatories) {
                        this.set('minCosignatories', existing + added - removed);
                        this.set('minCosignatoriesRelative', added - removed);

                    } else {
                        this.set('minCosignatories', existing + added - removed);
                        this.set('minCosignatoriesRelative', 0);
                    }
                } else {
                    this.set('minCosignatories', added);
                    this.set('minCosignatoriesRelative', 0);
                }
            }
        },
		addCosignatory: function() {
            this.get('cosignatories').push({
                formattedAddress:'',
                readOnly:false,
                canRemoveRow: true
            });
            var $cosignatory = $('.js-cosignatory').last();

            var self = this;
            $cosignatory.on('paste keyup blur focus', function(e) {
                self.resetMinCosignatories();
            });
            $cosignatory
                .typeahead(this.typeaheadSettings, this.typeaheadData)
                .bind('typeahead:selected', function(ev, suggestion) {
                    self.resetMinCosignatories();
                })
                .bind('typeahead:autocompleted', function(ev, suggestion) {
                    self.resetMinCosignatories();
                })
                .bind('typeahead:closed', function(ev, suggestion) {
                    self.resetMinCosignatories();
                });
            $cosignatory.focus();
            this.resetMinCosignatories();
        },
        removeCosignatory: function(index) {
            this.get('cosignatories').splice(index, 1);
            this.resetMinCosignatories();
        },
        deleteCosignatory: function(index) {
            var e = this.get('cosignatories')[index];
            e['deleted'] = !e['deleted'];
            this.update('cosignatories'); // trigger cosignatories observers

            this.resetMinCosignatories();
        },
        resetCosignatories: function() {
            var multisigAccount = this.get('multisigAccount');
            if (multisigAccount && multisigAccount.isMultisig) {
                var cosigs = multisigAccount.cosignatories.map(function(a){
                    return {
                        formattedAddress: Utils.format.address.format(a.address),
                        readOnly: true,
                        canRemoveRow: false,
                        canDeleteCosig: true,
                        deleted: false
                    };
                });
                this.set('cosignatories', cosigs);

            } else {
                var activeFormattedAddress = Utils.format.address.format(ncc.get('activeAccount.address'));
                this.set('cosignatories', [{
                    formattedAddress:activeFormattedAddress,
                    readOnly: false,
                    canRemoveRow: false
                }]);
            }

            // add empty
            this.addCosignatory();

            // since we've changed val(), we need a typeahead hack
            $('.js-cosignatory').each(function(i){
                $(this).typeahead('val', $(this).val());
            });
        },
        resetDefaultData: function(retrieveAccountData) {
            // get all non-multisig from the wallet
            var usableAccounts = ncc.get('allAccounts').filter(function(a){ return !a.isMultisig; });
            // and get multisig of a current account
            var multisigsOfCurrent = [];
            var wallet = ncc.get('wallet');

			// refresh because in the meantime the current account cosignatories could have changed
            if (retrieveAccountData) {
                Utils.updateAccount();
            }

            ncc.get('activeAccount').multisigAccounts.forEach(function(a){
                if (a.address in wallet.allMultisigAccounts) {
                    var acct = wallet.allMultisigAccounts[a.address];
                    var t = {
                        address: acct.address,
                        isMultisig: true,
                        cosignatories: acct.cosignatories,
                        minCosignatories: a.multisigInfo.minCosignatories
                    };
                    multisigsOfCurrent.push(t);
                }
            });

            this.set('activeAccount', ncc.get('activeAccount'));
            this.set('allAccounts', usableAccounts.concat(multisigsOfCurrent));
            this.set('privateLabels', ncc.get('privateLabels'));
            this.resetCosignatories();

            this.set('cosignatoriesValid', false);
            this.set('warningShown', false);
            this.set('multisigAccount', '');
            this.set('fee', 0);
            this.set('multisigFee', 0);
            this.set('minimumFee', 0);
            this.set('dueBy', '1');
            this.set('password', '');
            this.set('useMinimumFee', true);
            this.set('useDefaultMinCosignatories', true);
            this.set('minCosignatories', 0);
            this.set('minCosignatoriesRelative', 0);

            this.set('feeChanged', false);
            this.set('passwordChanged', true);
            this.resetFee({ silent: true });
        },
        sendTransaction: function() {
            var requestData = {
                wallet: ncc.get('wallet.wallet'),
                type: TransactionType.Aggregate_Modification,
                account: this.get('multisigAccount').address,
                password: this.get('password'),

                existingCosignatories: this.get('cosignatories')
                    .filter(function(e){ return (!!e.address) && (e.deleted === false || e.deleted === true); })
                    .map(function(e){ return {'address':e.address}}),

                removedCosignatories: this.get('cosignatories')
                    .filter(function(e){ return (!!e.address) && (e.deleted === true); })
                    .map(function(e){ return {'address':e.address}}),

                addedCosignatories: this.get('cosignatories')
                    .filter(function(e){ return (!!e.address)  && (e.deleted === undefined); })
                    .map(function(e){ return {'address':e.address}}),

                minCosignatories: {'relativeChange': this.get('minCosignatoriesNumber') },

                fee: this.get('fee'),
                multisigFee: 0,
                hoursDue: this.get('hoursDue')
            };
            if (this.get('multisigAccount').isMultisig) {
                var relativeChange = 0;
                if (this.get('minCosignatoriesRelative') !== 0) {
                    relativeChange = this.get('minCosignatoriesRelative');
                }

                requestData.type = TransactionType.Multisig_Aggregate_Modification;
                requestData.issuer =  ncc.get('activeAccount').address;
                requestData.minCosignatories = {'relativeChange': relativeChange };
                requestData.multisigFee = this.get('multisigFee');
            }

            if (! this.get('isAfterMofNFork')) {
                delete requestData['minCosignatories'];
            }

            var txConfirm = ncc.getModal('modificationConfirm');
            txConfirm.set('TransactionType', TransactionType);
            txConfirm.set('txData', this.get());
            txConfirm.set('requestData', requestData);

            txConfirm.open();
        },
        doCosignatoryCheck: function() {
            var multisigAccount = this.get('multisigAccount');
            var cosignatories = this.get('cosignatories');


            this.set('cosignatoriesValid', true);
            for (var i=0; i<cosignatories.length; ++i) {
            	// TODO 20150711 J-G: could you use Utils.valid.address()?
                if (cosignatories[i].address.length !== 0 && cosignatories[i].address.length !== 40) {
                    this.set('cosignatoriesValid', false);
                    this.set('cosignatories['+i+'].error', true);
                } else {
                    this.set('cosignatories['+i+'].error', false);
                }
            }

            if (this.get('cosignatoriesValid') === true) {
                for (var i=0; i<cosignatories.length; ++i) {
                    if ((cosignatories[i].address === multisigAccount.address)) {
                        this.set('cosignatoriesValid', false);
                        this.set('cosignatories['+i+'].error', true);
                    } else {
                        this.set('cosignatories['+i+'].error', false);
                    }
                }
                if (this.get('warningShown') === false && this.get('cosignatoriesValid') === false) {
                    ncc.showMessage(ncc.get('texts.modals.multisig.title'), ncc.get('texts.modals.multisig.warning'));
                    this.set('warningShown', true);
                }
            }
        },
        typeaheadSettings: {
            hint: false,
            highlight: true
        },
        typeaheadData: {
            name: 'address-book',
            source: Utils.typeahead.addressBookMatcher,
            displayKey: 'formattedAddress',
            templates: {
                suggestion: Handlebars.compile('<span class="abSuggestion-label">{{privateLabel}}</span>')
            }
        },
        onrender: function() {
            this._super();
            var self = this;

            this.resetDefaultData(true);

            this.observe({
                'cosignatories': (function() {
                    var t;
                    return function(objs) {
                        // that's bit dumb ;p
                        for (var i = 0; i<objs.length; ++i) {
                            self.set('cosignatories['+i+'].address', Utils.format.address.restore(objs[i].formattedAddress));
                        }
                        clearTimeout(t);
                        t = setTimeout(function() {
                            self.resetFee({ silent: true });
                        }, 500);

                        self.doCosignatoryCheck();
                    }
                })()
            },
            {
                init: true
            });
            this.observe({
                minCosignatories: function() {
                    var c = this.get('cosignatories');

                    // this sux, it relies on the fact that observer for cosignatories will be fired before this one :/
                    var existing = self.getExistingMinCosigs();
                    var removed = c.filter(function(a){return a.deleted === true;}).length;
                    var added = c.filter(function(a){ return a.deleted === undefined && a.address.length;}).length;

                    var existingCosigs = c.filter(function(a){return a.deleted === false || a.deleted === true;}).length;
                    if (parseInt(this.get('minCosignatories'), 10) > (existingCosigs-removed+added)) {
                        this.set('minCosignatoriesOverflow', true);
                    } else {
                         this.set('minCosignatoriesOverflow', false);
                    }

                    if (! this.get('useDefaultMinCosignatories')) {
                        var newMin = this.get('minCosignatoriesNumber');
                        if (this.get('multisigAccount') && this.get('multisigAccount').isMultisig) {
                            this.set('minCosignatoriesRelative', newMin - this.get('multisigAccount').minCosignatories);
                        } else {
                            this.set('minCosignatoriesRelative', newMin);
                        }
                    }
                },
                useDefaultMinCosignatories: function() {
                    self.resetMinCosignatories();
                },
                useMinimumFee: function(useMinimumFee) {
                    if (useMinimumFee) {
                        this.set('fee', this.get('minimumFee'));
                    }
                },
                minimumFee: function(minimumFee) {
                    if (this.get('useMinimumFee')) {
                        this.set('fee', minimumFee);
                    }
                }
            });
            this.observe({
                fee: function() {
                    this.set('feeChanged', true);
                },
                password: function() {
                    this.set('passwordChanged', true);
                },
                multisigAccount: function() {
                    this.resetCosignatories();
                    this.doCosignatoryCheck();
                }
            },
            {
                init: false
            });
            this.on({
                sendFormKeypress: function(e) {
                    if (e.original.keyCode === 13 && this.get('formValid')) {
                        this.sendTransaction();
                    }
                },
                modalOpened: function() {
                    $('.js-cosignatory').last().focus();
                    this.resetDefaultData(true);
                },
                modalClosed: function() {
                    this.resetDefaultData(false);
                }
            });

            var $dueBy = $('.js-multisig-dueBy-textbox');
            $dueBy.on('keypress', function(e) { Utils.mask.keypress(e, 'number', self) });
            $dueBy.on('paste', function(e) { Utils.mask.paste(e, 'number', self); });
            $dueBy.on('keydown', function(e) { Utils.mask.keydown(e, 'number', self); });

            var $minCosignatories = $('.js-multisig-mincosignatories-textbox');
            $minCosignatories.on('keypress', function(e) { Utils.mask.keypress(e, 'number', self) });
            $minCosignatories.on('paste', function(e) { Utils.mask.paste(e, 'number', self); });
            $minCosignatories.on('keydown', function(e) { Utils.mask.keydown(e, 'number', self); });

            var $fee = $('.js-multisig-fee-textbox');
            var feeTxb = $fee[0];
            $fee.on('keypress', function(e) { Utils.mask.keypress(e, 'nem', self); });
            $fee.on('paste', function(e) { Utils.mask.paste(e, 'nem', self); });
            $fee.on('keydown', function(e) { Utils.mask.keydown(e, 'nem', self); });

            this.listeners.push(ncc.observe({
                'texts.preferences.thousandSeparator': function(newProp, oldProp) {
                    feeTxb.value = Utils.format.nem.reformat(feeTxb.value, oldProp, newProp);
                },
                'texts.preferences.decimalSeparator': function(newProp, oldProp) {
                    feeTxb.value = Utils.format.nem.reformat(feeTxb.value, null, null, oldProp, newProp);
                }
            }));
        }
	});
});
