define({
	id: 'cn_trad',
	name: '中文（繁體）',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: '未找到文件。',
			102: '錢包尚未建立。',
			103: '錢包文件已損壞。請您建立新的錢包，或著請使用備份找回你的賬戶。',
			104: '你的密碼不正確。如果密碼遺失將無法復原！',
			106: '在使用一个錢包之前，它必須被打開。您必須提供正確密碼才可以打開錢包。',
			107: '錢包不含該賬戶。',
			108: '該賬戶不能被删除。因为該賬戶有大於0MEM的餘額或您要删除的賬戶是主賬戶。',
			109: '相同名稱的已經存在。請輸入其它的錢包名。',
			110: 'Wallet already contains this account.',
			202: '没有公鑰。',
			305: 'NEM 預設伺服器无法使用。',
			306: '对不起，發生一个未知的錯誤，請重試。否則，請在NEM NIS/NCC社區內提交您的問題。',
			400: '遺失某些参數。',
			401: 'This operation cannot be completed because it might leak a private key by sending it to a remote NIS.',
			404: '啟動策略值無效。',
			500: '保存配置文件失敗。',
			600: 'NCC需要啟動NIS伺服器以執行 NEM Cloud 發送和接收交易資料。請使用NCC選單來啟動本地節點。',
			601: 'NIS節點已啟動。無法啟動第二个NIS節點。',
			700: '所提供的賬戶無法满足收割的（條件）基本標準。必須至少有10.000 NEMs才能開始收割。',
			701: '所提供的截止日期已过期。截止日期必須在1天之内提供。',
			702: '所提供的截止日期超過有效期限。截止時間必須在一天之內。',
			703: '您的賬戶没有正确的金額以提供您要發送的NEM額。',
			704: '提供的消息文本超過容許上限，無法通过NEM發送。請减少要發送消息的內容。',
			705: '資料庫，或未確認交易列表，已經存在此交易的散列值。',
			706: '無法驗證本次交易的簽名。',
			707: '此交易的ID已失效。',
			708: '此交易的ID時間戳超過有效期限。',
			709: '未知的賬戶。一个賬戶需要至少執行一个交易（作為發件人或收件人）才能在網路公開。',
			901: 'There was an error setting up offline mode.',
			1000: "The private key and the public key you have provided mismatch.",
			1001: 'The public key and the address you have provided mismatch.',
			1002: 'The address does not belong to the main network.'
		},
		common: {
			success: '成功', //title of the Success message modals
			appStatus: {
				nccUnknown: 'NCC status is unknown',
				nccUnavailable: 'NCC is not available',
				nccStarting: 'NCC is starting...',
				nisUnknown: 'NIS status is unknown',
				nisUnavailable: 'NIS is not available',
				nisStarting: 'NIS is starting...',
				notBooted: 'NIS requires to be booted. Please open your wallet and boot a local node via the popup dialog or configure the auto-boot setting.',
				booting: 'Booting NIS...',
				nisInfoNotAvailable: 'NIS info is not avaiable yet. Trying to retrieve NIS info...',
				synchronizing: 'NIS is synchronizing. At block {{1}}, est. {{2}} behind.',
				daysBehind: {
					0: 'less than 1 day',
					1: '1 day',
					many: '{{1}} days'
				},
				synchronized: 'NIS is synchronized!'
			}
		},
		modals: {
			error: {
				title: '哎呀!',
				caption: '錯誤 {{1}}'
			},
			confirmDefault: {
				yes: '是',
				no: '不'
			},
			settings: {
				title: 'Settings',
				language: {
					label: 'Language'
				},
				remoteServer: {
					tabTitle: 'Remote Server',
					protocol: 'Protocol',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Port'
				},
				autoBoot: {
					tabTitle: 'Auto-boot',
					name: 'Node name',
					account: 'Account',
					primaryAccount: 'Primary Account',
					auto: 'Auto boot when a wallet is opened'
				},
				save: 'Save',
				saveSuccess: 'Settings have been saved successfully'
			},
			sendNem: {
				title: '發送 NEM',
				labelDesc: '此賬戶被標記為 <strong>{{1}}</strong>',
				nullLabelDesc: "此賬戶没有標記",
				amount: '金額',
				recipient: "收件人賬號",
				recipientValidation: 'Account addresses must be 40 character long excluding dashes',
				message: '信息',
				encrypt: '加密信息',
				fee: '費',
				feeValidation: 'Fee must not be less than the minimum fee',
				dueBy: '限期（小時）',
				useMinimumFee: 'Use minimum fee',
				hours: 'hours',
				password: '密碼',
				passwordValidation: 'Password must not be blank',
				send: '發送',
				cancel: 'Cancel',
				sending: '發送...',
				successMessage: '交易成功!',
				txConfirm: {
					title: 'Confirm Transaction',
					amount: 'Amount',
					to: 'To',
					fee: 'Fee',
					dueBy: 'Due by',
					hours: 'hour(s)',
					total: 'Total',
					message: 'Message',
					encrypted: 'Message is encrypted',
					noMessage: 'No message',
					cancel: 'Cancel',
					confirm: 'Confirm',
					sending: 'Sending...'
				},
				notBootedWarning: {
					title: '節點尚未啟動!',
					message: '請先啟動本地節點才能發送NEM!'
				},
				bootingWarning: {
					title: 'Node is being booted',
					message: 'Please wait until booting process is done to send your transaction.'
				}
			},
			clientInfo: {
				title: '客戶信息',
				ncc: 'NEM 社區客戶端 - NCC',
				signer: '簽名者',
				remoteServer: '遠端伺服器',
				local: '本地',
				nis: 'NEM 基础設施服务器 - NIS',
				sync: '完成同步',
				notSync: '同步失敗',
				notConnected: '没有連接 NEM Cloud',
				loading: '加載中…'
			},
			transactionDetails: {
				title: '交易詳情',
				id: 'ID',
				hash: 'Hash',
				type: '交易類型',
				pending: '待定',
				outgoing: '傳出',
				incoming: '接入',
				self: '本人',
				sender: '發件人',
				recipient: '收件人',
				message: '信息',
				noMessage: '没信息',
				encrypted: '信息被加密',
				time: '時間戳',
				confirmations: '確認',
				confirmationsUnknown: 'Unknown',
				amount: '金額',
				fee: '費'
			},
			bootLocalNode: {
				title: '啟動本地節點',
				account: '啟動本地節點的帳號',
				noLabel: '<span class="null">&lt;没有標識&gt;</span>',
				wallet: '錢包',
				node: '節點名稱',
				boot: '啟動',
				booting: '啟動...'
			},
			closeWallet: {
				title: '關閉錢包',
				message: '您确定要關閉錢包并返回到登陸頁面?'
			},
			createAccount: {
				title: '創建新賬號',
				label: '私人標識',
				wallet: '錢包',
				password: '錢包的密碼',
				successMessage: '賬號 {{1}} {{#2}}({{2}}){{/2}} 已創建!',
				create: '創建'
			},
			createRealAccountData: {
				title: 'Create real account data',
				message: 'The below data is for your real account after NEM launches. Save the the address, the public key, and most importantly the private key somewhere safe. If you lose the private key, your account and all your real NEMs will be lost FOREVER!',
				address: 'Address',
				publicKey: 'Public key',
				privateKey: 'Private key',
				confirm: {
					title: 'Save the private key',
					message: 'Are you sure your private key has been saved into a safe place?'
				},
				recheck: {
					title: 'Re-check your saved private key',
					message: "Please re-enter your private key you've just been provided to check if you have the correct one saved. If your private key is already lost, you may want to create a new one.",
					correct: {
						title: 'Nice!',
						message: 'You seem to have your correct private key saved. Please remember to always keep it safe and secured!'
					},
					incorrect: {
						title: 'Hmm...',
						message: "The private key you've just entered is not correct! Do you want to try to enter private key again or come back to see the original account data?",
						tryAgain: 'Try to enter again',
						seeOriginal: 'See the original data'
					},
					recheck: 'Check'
				},
				ok: 'OK'
			},
			verifyRealAccountData: {
				title: 'Verify real account data',
				message: 'Re-enter your saved address, public key and private key below to check if they match',
				address: 'Address',
				publicKey: 'Public key',
				privateKey: 'Private key',
				dataMatched: 'Everything seems good, your entered address, public key, and private key match.',
				verify: 'Verify'
			},
			addAccount: {
				title: '添加一个現有賬號',
				privateKey: '賬號的私鑰',
				wallet: '錢包',
				password: "錢包的密碼",
				successMessage: '賬號 {{1}} {{#2}}({{2}}){{/2}} 已被添加到錢包!',
				add: '添加',
				label: '標識'
			},
			setPrimary: {
				title: '設置主賬號',
				account: '賬號被設置為主賬戶',
				noLabel: '<span class="null">&lt;物標識&gt;</span>',
				wallet: '錢包',
				password: "錢包的密碼",
				successMessage: '賬戶 {{1}} {{#2}}({{2}}){{/2}} 被設置為主賬戶!',
				set: '設置為主賬戶',
			},
			changeWalletName: {
				title: '改錢包名',
				wallet: '当前錢包名',
				newName: '新錢包名',
				password: "錢包密碼",
				successMessage: '錢包名称已變更成功從<em>{{1}}</em>到<em>{{2}}</em>',
				change: '改'
			},
			changeWalletPassword: {
				title: '改錢包密碼',
				wallet: '錢包',
				password: '当前密碼',
				newPassword: '新密碼',
				confirmPassword: '確認新密碼',
				successMessage: '錢包密碼已經修改成功',
				change: '改',
				passwordNotMatchTitle: '糟!',
				passwordNotMatchMessage: '您输入的密碼和確認密碼不吻合。請正確输入您的新密碼'
			},
			changeAccountLabel: {
				title: '更改賬戶標識',
				label: '賬戶標識',
				wallet: '賬戶',
				password: "錢包密碼",
				successMessage: '賬戶{{1}}現在的標識是{{2}}',
				change: '改'
			},
			removeAccount: {
				title: '删除賬戶',
				wallet: '钱包',
				password: "錢包密碼",
				warning: '在你删除賬戶前請確認您的賬戶的MEM為零，否則会被永遠失去了',
				successMessage: '賬戶 {{1}} {{#2}}({{2}}){{/2}} 被删除了!',
				remove: '删除'
			},
			nisUnavailable: {
				title: 'NIS 不可用',
				message: '從NIS断開連，等待連接'
			},
			shutdown: {
				title: '關閉程序',
				message: '您確定要關閉NEM社區客戶端?'
			},
			activateRemote: {
				title: 'Activate Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				hoursDue: 'Due by (hours)',
				password: "Wallet's password",
				activate: 'Activate'
			},
			deactivateRemote: {
				title: 'Deactivate Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				hoursDue: 'Due by (hours)',
				password: "Wallet's password",
				deactivate: 'Deactivate'
			},
			startRemote: {
				title: 'Start Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: "Wallet's password",
				start: 'Start'
			},
			stopRemote: {
				title: 'Stop Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: "Wallet's password",
				stop: 'Stop'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer.\n\nTo prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away.",
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: '導入錢包成功!',
			nav: {
				start: '已经 <strong>開始</strong>',
				about: '關於 <strong>NEM</strong>',
				settings: 'Settings'
			},
			main: {
				leftTitle: '<em>NEM</em>新手?',
				leftButton: '創建新錢包',
				walletNamePlh: '錢包的名稱',
				passwordPlh: '密碼',
				create: '建立',
				rightTitle: '已經是<em>NEM</em>玩家?',
				rightButton: '打開你的錢包',
				openButton: '打開',
				walletsFound: '發現 <strong>{{1}}</strong> <em>錢包</em>',
				copyright: '由<em>Cas Cornelissen</em>摄影'
			},
			carousel: {
				items: [{
					title: 'NCC 加密你的錢包',
					description: '為避免NEM被盗 <em>安全</em> 是非常重要的 &amp;。'
				}, {
					title: 'NCC 加密你的錢包',
					description: '為避免NEM被盗 <em>安全</em> 是非常重要的 &amp;。'
				}]
			},
			about: {
				sections: [{
					title: 'NCC是如何工作的?',
					paragraphs: [
						'<strong>NCC</strong> 就如使用一般的錢包一樣使用NEMs。',
						'<strong>NCC</strong> 你可以使用一个<strong>NIS</strong> 伺服器。 一般是使用一个本地的伺服器 (和<strong>NCC</strong>一起安裝)',
						'您也可以連接一个遠端<strong>NIS</strong>。'
					],
					listItems: [
						'有多个錢包',
						'在一个錢包裡定里定義多个賬戶'
					]
				}, {
					title: '什么是&#42;NIS?',
					paragraphs: [
						'負責保持<strong>NEM</strong>雲活着.',
						'越多<strong>NIS</strong>服务器安全性越好。',
						'<strong>NIS</strong> 是進入 <strong>NEM</strong> 雲的入口。'
					],
					legend: '<strong>&#42;NIS</strong> 是 <strong>NEM Infrastructure Server</strong>的縮寫'
				}]
			},
			footer: {
				copyright: '&copy; 版權所有 2014. NEM 社區客户端。'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: '大約 {{1}} 天前',
			lastAccessJustNow: '就現在',
			lastAccessTooltip: '上次訪問是 {{1}}',
			primary: '主賬戶',
			primaryShort: 'P',
			noLabel: '<No label>',
			copiedToClipboard: '地址已複製!',
			actions: {
				refreshInfo: '信息已重新整理',
				bootLocalNode: '啟動本地節點',
				changeWalletName: '更改錢包名稱',
				changeWalletPassword: '更改錢包密碼',
				mergeWallets: '合并錢包',
				exportWallet: '匯出錢包',
				createAccount: '建立新賬號',
				createRealAccountData: 'Create real account data',
				verifyRealAccountData: 'Verify real account data',
				addAccount: '匯入一个現有賬號',
				changeAccountLabel: '更改賬戶標識',
				setPrimary: '設為主賬戶',
				removeAccount: '删除賬戶',
				clientInfo: '客戶訊息',
				closeWallet: '關閉錢包',
				closeProgram: '關閉程序',
				copyClipboard: 'Copy address to clipboard'
			},
			nav: [
				'儀表板',
				'消息',
				'聯繫人',
				'交易',
				'收獲的礦塊',
				'資產交换',
				'新聞',
				'應用',
				'賬戶',
				'設置',
				'關閉程序'
			],
			bootNodeWarning: '一个本地節點需要啟動後才能充分利用NCC的功能。'
		},
		dashboard: {
			assets: {
				title: '你的資產'
			},
			importance: {
				title: '重要分',
				unknown: '未知狀態',
				start: '開始收割',
				harvesting: '正在收割',
				stop: '停止收割',
				description: 'NEM雲賬戶的重要',
				remoteHarvest: {
					activate: 'Activate remote harvesting',
					activating: 'Activating remote harvesting...',
					active: 'Remote harvesting is active',
					deactivate: 'Deactivate remote harvesting',
					deactivating: 'Deactivating remote harvesting...',
					startRemoteHarvesting: 'Start remote harvesting',
					remotelyHarvesting: 'Remotely harvesting',
					stopRemoteHarvesting: 'Stop remote harvesting'
				}
			},
			transactions: {
				title: '最近的交易',
				sendNem: '發送NEM',
				balance: '目前余額',
				syncStatus: '(礦塊{{1}}{{#2}} : 估計{{3}}落後{{/2}}天)',
				unknown: 'unknown',
				columns: [
					'',
					'時間',
					'發送人/收件人',
					'留言',
					'',
					'細名',
					'確認',
					'費',
					'金額'
				],
				types: {
					pending: '交易待處理中',
					outgoing: '交易發送中',
					incoming: '交易接收中',
					self: '自我交易',
				},
				noMessage: '無信息',
				encrypted: '消息被加密',
				view: '查看',
				confirmationsUnknown: 'Unknown',
				pending: '待定',
				seeAll: '查看所有交易',
				noTransactions: '無交易'
			},
			nemValue: {
				title: 'NEM 值統計'
			},
			messages: {
				titleTooltip: '留言'
			},
			news: {
				titleTooltip: '新聞'
			},
			notAvailable: 'alpha版本尚未公布'
		},
		transactions: {
			title: '交易',
			sendNem: '發送 NEM',
			balance: '目前余額',
			filters: {
				confirmed: 'Confirmed',
				unconfirmed: 'Unconfirmed',
				incoming: '接受中',
				outgoing: '發送中',
			},
			table: {
				columns: [
					'',
					'時間',
					'發送人/接收人',
					'留言',
					'',
					'細節',
					'確認',
					'費',
					'金額'
				],
				types: {
					pending: '交易待處理中',
					outgoing: '交易發送中',
					incoming: '交易接收中',
					self: '自我交易',
				},
				noMessage: '無留言',
				encrypted: '消息被加密',
				view: '查看',
				confirmationsUnknown: 'Unknown',
				pending: '待定中',
				noTransactions: '無交易',
				loading: '載入更多的交易...'
			}
		},
		harvestedBlocks: {
			title: '收獲廣塊',
			feeEarned: '從上25塊收獲的報酬',
			unknown: 'Unknown',
			table: {
				columns: [
					'高',
					'時間',
					'礦塊列散值',
					'費'
				],
				noBlocks: '無收獲礦塊',
				loading: 'Loading more harvested blocks'
			},
			harvesting: {
				unknown: '未知狀態',
				start: '開始收割',
				harvesting: '正在收割',
				stop: '停止收割',
				remoteHarvest: {
					startRemoteHarvesting: 'Start remote harvesting',
					stopRemoteHarvesting: 'Stop remote harvesting'
				}
			}
		},
		settings: {
			title: '設定',
			settings: [{
				name: '語言'
			}],
			save: '保存更改',
			saveSuccess: '設置已保存成功'
		}
	}
});