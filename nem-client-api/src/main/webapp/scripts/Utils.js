"use strict";

define(function() {
    var Utils = {
        config: {
            addressCharacters: 40,
            fractionalDigits: 2,
            txesPerPage: 25,
            blocksPerPage: 25,
            defaultLanguage: 'en',
            STATUS_UNKNOWN: 0,
            STATUS_STOPPED: 1,
            STATUS_STARTING: 2,
            STATUS_RUNNING: 3,
            STATUS_BOOTING: 4,
            STATUS_BOOTED: 5,
            STATUS_SYNCHRONIZED: 6
        },
        getUrlParam: function(name) {
            var qStr = location.search.substring(1, location.search.length);
            var queries = qStr.split('&');
            var temp, key, value;
            for (var i = 0; i < queries.length; i++) {
                temp = queries[i].split('=');
                if (temp[0] && temp[1]) {
                    key = decodeURIComponent(temp[0]);
                    value = decodeURIComponent(temp[1]);
                    if (key === name) {
                        return value;
                    }
                }
            }
        },
        toQueryString: function(params) {
            var queryString = [];
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    queryString.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
                }
            }
            if (queryString.length === 0) {
                return '';
            } else {
                return '?' + queryString.join('&');
            }
        },
        queryStringToJson: function (qStr) {
            if (qStr === '')
                return '';
            var pairs = (qStr || location.search).slice(1).split('&');
            var result = {};
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i].split('=');
                if (pair[0]) {
                    result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || null);
                }
            }
            return result;
        },
        escapeRegExp: function(str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        },
        htmlDecode: function(str) {
            var txt = document.createElement('textarea');
            txt.innerHTML = str;
            return txt.value;
        },
        updateNewer: function(newArr, currentArr, comparedProp) {
            if (currentArr && currentArr[0] && newArr && newArr[0]) {
                var comparedValue = newArr[newArr.length - 1][comparedProp];
                
                for (var i = currentArr.length - 1; i >= 0; i--) {
                    if (currentArr[i][comparedProp] === comparedValue) {
                        break;
                    }
                }

                if (i === 0) {
                    return {
                        updatedArray: newArr,
                        noConnection: true
                    };
                } else {
                    var nonDup = currentArr.slice(i + 1);
                    var updatedArray = newArr.concat(nonDup);
                    return {
                        updatedArray: updatedArray,
                        noConnection: false
                    };
                }
            } else {
                return {
                    updatedArray: newArr,
                    noConnection: true
                };
            }
        },
        toggleOn: function(instance, id) {
            var keypath = 'active.' + id;
            if (!instance.get(keypath)) {
                instance.set(keypath, true);
                var firstTime = true;
                var self = Utils;
                $(document).on('click.' + id, function(ev) {
                    if (firstTime) {
                        firstTime = false;
                        return;
                    }
                    self.toggleOff(instance, id);
                });
            }
        },
        toggleOff: function(instance, id) {
            instance.set('active.' + id, false);
            $(document).off('click.' + id);
        },

        // FORMAT & CONVERSON
        restoreAddress: function(address) {
            return address.replace(/\-/g, '');
        },
        formatAddress: function(address) {
            var segments = address.substring(0, Utils.config.addressCharacters).match(/.{1,6}/g) || [];
            return segments.join('-').toUpperCase();
        },
        addThousandSeparators: function(num) {
            return num.toString(10).replace(/\B(?=(\d{3})+(?!\d))/g, ncc.get('texts.preferences.thousandSeparator'));
        },
        minDigits: function(num, digits) {
            num = num.toString(10);
            while (num.length < digits) {
                num = '0' + num;
            }
            return num;
        },
        toNem: function(mNem) {
            return mNem / 1000000;
        },
        toMNem: function(nem) {
            // clever workaround to deal with JavaScript loss of precision bugs
            // by using strings for multiplication
            // the largest integer that can be stored in a java numeric type (64-bit floating point)
            // is Math.pow(2, 53) > 8 * Math.pow(10, 15)
            // [ Math.pow(2, 53) - 1 < Math.pow(2, 53) == Math.pow(2, 53) + 1 ]
            // NOTE: this only works because nem is assumed to be a string

            // determine the number of trailing zeros to add based on the index of the decimal
            var decimalIndex = nem.indexOf('.');
            var power = 6 - (-1 === decimalIndex ? 0 : nem.length - decimalIndex - 1);
            var trailingZeros = new Array(power + 1).join('0');
            return parseInt(nem.replace('.', '') + trailingZeros);
        },
        formatCurrency: function(amount, dimTrailings, noLimitFractionalPart, noFixedDecimalPlaces) { // amount is in mNEM
            var nem = Math.floor(Utils.toNem(amount));
            var integerPart = Utils.addThousandSeparators(nem);
            var mNem = Math.floor(amount % 1000000);

            if (noFixedDecimalPlaces) {
                // Remove trailing zeroes
                while (mNem > 0 && mNem % 10 === 0) {
                    mNem = mNem / 10;
                }
            }

            var decimalPart = mNem.toString(10);
            if (!noLimitFractionalPart) {
                decimalPart = decimalPart.substring(0, Utils.config.fractionalDigits);
                while (decimalPart.length < Utils.config.fractionalDigits) {
                    decimalPart += '0';
                }
            }

            if (dimTrailings) {                
                var cutPos = decimalPart.length - 1;
                while (decimalPart.charAt(cutPos) === '0') {
                    cutPos--;
                }
                cutPos++;

                var clearPart = decimalPart.substring(0, cutPos);
                var dimmedPart = decimalPart.substring(cutPos, decimalPart.length);
                if (dimmedPart) {
                    if (clearPart) {
                        return integerPart + ncc.get('texts.preferences.decimalSeparator') + clearPart + '<span class="dimmed">' + dimmedPart + '</span>';
                    } else {
                        return integerPart + '<span class="dimmed">' + ncc.get('texts.preferences.decimalSeparator') + dimmedPart + '</span>';
                    }
                }
            }

            return integerPart + ((noFixedDecimalPlaces && !mNem) ? '' : (ncc.get('texts.preferences.decimalSeparator') + decimalPart));
        },
        // @param {string} amount
        convertCurrencyFormat: function(amount, oldThousandSeparator, newThousandSeparator, oldDecimalSeparator, newDecimalSeparator) {
            if (oldThousandSeparator) {
                var thousandSeparatorRegex = new RegExp(Utils.escapeRegExp(oldThousandSeparator), 'g');
                amount = amount.replace(thousandSeparatorRegex, newThousandSeparator);
            }

            if (oldDecimalSeparator) {
                var decimalSeparatorRegex = new RegExp(Utils.escapeRegExp(oldDecimalSeparator), 'g');
                amount = amount.replace(decimalSeparatorRegex, newDecimalSeparator);
            }

            return amount;
        },
        convertCurrencyToStandard: function(amount) {
            return Utils.convertCurrencyFormat(amount, ncc.get('texts.preferences.thousandSeparator'), '', ncc.get('texts.preferences.decimalSeparator'), '.');
        },
        toDate: function(ms) {
            return new Date(ms);
        },
        formatDate: (function() {
            var shortMonths = {
                1: 'Jan',
                2: 'Feb',
                3: 'Mar',
                4: 'Apr',
                5: 'May',
                6: 'Jun',
                7: 'Jul',
                8: 'Aug',
                9: 'Sep',
                10: 'Oct',
                11: 'Nov',
                12: 'Dec',
            };
            return function(date, format) {
                if (typeof date === 'number') {
                    date = Utils.toDate(date);

                    var month = date.getMonth() + 1;
                    var day = date.getDate();
                    var year = date.getFullYear();
                    var hour = date.getHours();
                    var min = date.getMinutes();
                    var sec = date.getSeconds();

                    switch (format) {
                    case 'MM/dd/yy hh:mm:ss':
                        month = Utils.minDigits(month, 2);
                        day = Utils.minDigits(day, 2);
                        year = year.toString(10);
                        year = year.substring(year.length - 2, year.length);
                        hour = Utils.minDigits(hour, 2);
                        min = Utils.minDigits(min, 2);
                        sec = Utils.minDigits(sec, 2);
                        return month + '/' + day + '/' + year + ' ' + hour + ':' + min + ':' + sec;
                    case 'M dd, yyyy':
                        month = shortMonths[month];
                        day = Utils.minDigits(day, 2);
                        return month + ' ' + day + ', ' + year;
                    case 'M dd, yyyy hh:mm:ss':
                        month = shortMonths[month];
                        day = Utils.minDigits(day, 2);
                        hour = Utils.minDigits(hour, 2);
                        min = Utils.minDigits(min, 2);
                        sec = Utils.minDigits(sec, 2);
                        return month + ' ' + day + ', ' + year + ' ' + hour + ':' + min + ':' + sec;
                    }
                } else {
                    return date;
                }
            };
        })(),
        generateMask: function(type) {
            var oldVal;
            return function(e) {
                var target = e.target;
                var currentVal = target.value;
                // If the keypress doesn't change the textbox value then i don't give a sh!t.
                if (currentVal === oldVal) { 
                    return;
                }

                var caretToEnd = currentVal.length - target.selectionEnd;
                var newVal = oldVal;

                switch (type) {
                    case 'nem':
                        var decimalSeparator = ncc.get('texts.preferences.decimalSeparator');

                        // Remove illegal characters
                        var dsRegex = new RegExp('[^0-9' + Utils.escapeRegExp(decimalSeparator) + ']', 'g');
                        currentVal = currentVal.replace(dsRegex, '');
                        // Remove leading zeroes
                        while (currentVal.length > 1 && currentVal[0] === '0' && currentVal[1] !== decimalSeparator) {
                            currentVal = currentVal.substring(1, currentVal.length);
                        }
                        // Remove redundant decimal separators
                        var matchedOnce = false;
                        var i = 0;
                        while (i < currentVal.length) {
                            if (currentVal[i] === decimalSeparator) {
                                if (!matchedOnce) {
                                    matchedOnce = true;
                                } else {
                                    currentVal = currentVal.substring(0, i) + currentVal.substring(i + 1);
                                    i--; // not going forward
                                }
                            }
                            i++;
                        }

                        var dotPos = currentVal.indexOf(decimalSeparator);
                        if (dotPos === -1) {
                            dotPos = currentVal.length;
                        }
                        var intPart = currentVal.substring(0, dotPos);
                        var decimalPart = currentVal.substring(dotPos, currentVal.length);

                        intPart = Utils.addThousandSeparators(intPart);
                        // Limit to maximum 6 decimal digits
                        decimalPart = decimalPart.substring(0, decimalSeparator.length + 6); 
                        newVal = intPart + decimalPart;
                        break;
                    case 'address':
                        // Remove all illegal characters
                        var rawAddress = currentVal.replace(/[^0-9a-zA-Z]/g, '');
                        var newVal = Utils.formatAddress(rawAddress);
                        break;
                }

                target.value = oldVal = newVal;
                ncc.updateModel();
                var caret = newVal.length - caretToEnd;
                target.setSelectionRange(caret, caret);
            };
        },
        daysPassed: function(begin) {
            var now = new Date().getTime();
            var timespan = now - begin;
            var day = 1000*60*60*24;
            var days = timespan / day;
            var roundedDays = Math.round(days);
            return {
                days: days,
                roundedDays: roundedDays
            };
        },

        // PROCESSING
        processTransaction: function(tx) {
            tx.isIncoming = tx.direction === 1 || tx.direction === 0;
            tx.isOutgoing = tx.direction === 2;
            tx.isSelf = tx.direction === 3;
            tx.formattedSender = Utils.formatAddress(tx.sender);
            tx.formattedRecipient = Utils.formatAddress(tx.recipient);
            tx.formattedFee = Utils.formatCurrency(tx.fee, true);
            tx.formattedAmount = Utils.formatCurrency(tx.amount, true);
            tx.formattedFullFee = Utils.formatCurrency(tx.fee, false, true, true);
            tx.formattedFullAmount = Utils.formatCurrency(tx.amount, false, true, true);
            tx.formattedDate = Utils.formatDate(tx.timeStamp, 'M dd, yyyy hh:mm:ss');
            return tx;
        },
        processTransactions: function(transactions) {
            if (transactions) {
                for (var i = 0; i < transactions.length; i++) {
                    Utils.processTransaction(transactions[i]);
                }
            }
            return transactions;
        },
        processHarvestedBlock: function(block) {
            if (!block.message) block.message = 'Block #' + block.height;
            if (!block.hash) block.hash = block.blockHash.data;
            if (!block.timeStamp && block.fee !== 0) block.timeStamp = block.timeStamp;
            if (!block.fee && block.fee !== 0) block.fee = block.totalFee;

            block.formattedTime = Utils.formatDate(block.timeStamp, 'M dd, yyyy hh:mm:ss');
            block.formattedFee = Utils.formatCurrency(block.fee, true);
            return block;
        },
        processHarvestedBlocks: function(blocks) {
            for (var i = 0; i < blocks.length; i++) {
                Utils.processHarvestedBlock(blocks[i]);
            }
            return blocks;
        },
        processAccount: function(account) {
            account.formattedAddress = Utils.formatAddress(account.address);

            if (account.transactions) {
                account.transactions = Utils.processTransactions(account.transactions);
            }

            return account;
        },
        processWallet: function(wallet) {
            wallet.lastRefreshDate = Utils.toDate(wallet.lastRefresh).toString();
            wallet.daysPassed = Utils.daysPassed(wallet.lastRefresh);

            Utils.processAccount(wallet.primaryAccount);
            for (var i = 0; i < wallet.otherAccounts.length; i++) {
                Utils.processAccount(wallet.otherAccounts[i]);
            }

            return wallet;
        }
    };
    return Utils;
});