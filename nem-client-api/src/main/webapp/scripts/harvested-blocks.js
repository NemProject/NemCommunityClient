"use strict";

 define(['jquery', 'ncc', 'NccLayout', 'Utils'], function($, ncc, NccLayout, Utils) {
    return $.extend(true, {}, NccLayout, {
        name: 'harvested-blocks',
        url: 'harvested-blocks.html',
        template: 'rv!layout/harvested-blocks',
        parent: 'wallet',
        local: {
        	scrollBottomTolerance: 100
        },
        initOnce: function() {
            /**
             * @param {string} type load type: 'reload' | 'update' | 'append', default is 'reload'
             */
        	ncc.loadHarvestedBlocks = function(type) {
        		var currAccount = ncc.get('activeAccount.address');
        		var requestData = { account: currAccount };
        		var currBlocks = ncc.get('harvestedBlocks.list');
        		if (type === 'append') {
					requestData.hash = (currBlocks && currBlocks.length) ? currBlocks[currBlocks.length - 1].hash : undefined;
                    ncc.set('status.loadingOlderBlocks', true);
				}

				ncc.postRequest('account/harvests', requestData, function(data) {
					var updatedBlocks = Utils.processHarvestedBlocks(data.data);
					var all;
					if (type === 'append' && currBlocks && currBlocks.concat) {
						all = currBlocks.concat(updatedBlocks);
					} else if (type === 'update') {
                        var result = Utils.updateNewer(updatedBlocks, currBlocks, 'hash');
                        all = result.updatedArray;
                        if (result.noConnection) {
                            ncc.set('harvestedBlocks.gotAll', false);
                        }
					} else {
						all = updatedBlocks;
					}

					ncc.set('harvestedBlocks.list', all);
                	if (type !== 'update') {
                        var gotAll = updatedBlocks.length < Utils.config.blocksPerPage;
                		ncc.set('harvestedBlocks.gotAll', gotAll);
                	}
				}, {
                    complete: function() {
                        ncc.set('status.loadingOlderBlocks', false);
                    }
                }, type === 'update');
			};
        },
    	setupEverytime: function() {
    		var local = this.local;

    		local.listeners.push(ncc.observe({
    			'harvestedBlocks.list': function(harvestedBlocks) {
    				var sum = 0;
    				if (harvestedBlocks) {
	    				for (var i = 0; i < Math.min(harvestedBlocks.length, Utils.config.blocksPerPage); i++) {
	    					sum += harvestedBlocks[i].fee;
	    				}
	    			}

	    			ncc.set('harvestedBlocks.feeEarned', sum);
    			}
            }, {
                init: false
            }));
            
            local.listeners.push(ncc.observe({
    			'activeAccount.address': function() {
    				ncc.loadHarvestedBlocks('reload');
    			}
    		}));

            local.listeners.push(ncc.on({
                refreshAccount: function() {
                    ncc.loadHarvestedBlocks('update');
                }
            }));

    		var $win = ncc.global.$window;
			var $doc = ncc.global.$document;
            local.listeners.push(ncc.observe('harvestedBlocks.gotAll', function(gotAll) {
                if (gotAll) {
                    ncc.global.$window.off('scroll.harvestedBlocksInfiniteScrolling');
                } else {
        			$win.on('scroll.harvestedBlocksInfiniteScrolling', function(event) {
        				if (!ncc.get('status.loadingOlderBlocks') && $win.scrollTop() + $win.height() >= $doc.height() - local.scrollBottomTolerance) {
        					ncc.loadHarvestedBlocks('append');
        				}
        			});
                }
            }));
    	},
    	leave: [function() {
    		ncc.global.$window.off('scroll.harvestedBlocksInfiniteScrolling');
    	}]
    });
});
