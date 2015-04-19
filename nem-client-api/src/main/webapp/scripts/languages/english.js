define({
	id: 'en',
	name: 'English',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'The wallet file does not exist.',
			102: 'Wallet has not been created.',
			103: 'Wallet file is corrupt. Please recover your wallet from a backup.',
			104: 'The provided password for the wallet is not correct.',
			105: 'No password was provided for the wallet.',
			106: 'Before you can work with a wallet, it has to be opened. To ensure that you are eligible for accessing the wallet, you have to provide the password for that wallet.',
			107: 'Wallet does not contain this account.',
			108: 'The account cannot be removed. Most likely because the account still has a balance greater than 0 XEM or the account you are trying to remove is the primary account.',
			109: 'Another wallet with the same name exists already. Please choose an other wallet name.',
			110: 'Wallet already contains this account.',
			111: 'The wallet name is a directory.',
			112: 'The extension of the wallet file is incorrect.',
			113: 'The wallet could not be deleted.',
			121: 'The address book file does not exist.',
			122: 'Address book has not been created.',
			123: 'Address book file is corrupt. Please recover your address book from a backup.',
			124: 'The provided password for the address book is not correct.',
			125: 'No password was provided for the address book.',
			127: 'Address book does not contain this address.',
			128: 'The address provided is not valid.',
			129: 'Another address book with the same name exists already. Please choose an other address book name.',
			130: 'Address book already contains this address.',
			131: 'The address book name is a directory.',
			132: 'The extension of the address book file is incorrect.',
			133: 'The address book could not be deleted.',
			202: 'An encrypted message cannot be sent because the recipient has never made a transaction before.',
			203: 'The account cannot be converted because not all cosignatories are known. They either need to be in the same wallet or have made at least one transaction.',
			305: 'The NEM Infrastructure Server (NIS) is not available. Try to restart the NEM software. If you are using a remote NIS, check your configured host for typing errors or use another remote NIS.',
			306: 'An error occurred that the development team did not have foreseen. Apologies for this, maybe a retry might help. Otherwise, please open up an issue within the NEM NIS/NCC community.',
			400: 'Some parameter is missing or invalid.',
			401: 'This operation cannot be completed because it might leak a private key by sending it to a remote NIS.',
			404: 'The requested resource could not be found.',
			500: 'An error occurred that the development team did not have foreseen. Apologies for this, maybe a retry might help. Otherwise, please open up an issue within the NEM NIS/NCC community.',
			600: 'Before sending and receiving transactions, the NEM Infrastructure Server (NIS) needs to be booted. Please use the NCC menu entry for booting the local node.',
			601: 'The NEM Infrastructure Server (NIS) is already booted.',
			602: 'Almost ready. NEM Infrastructure Server is currently loading blocks. Wallet will be functional when db is fully loaded.',
			699: 'Maximum number of harvesters allowed on server has been reached.',
			700: 'The provided account does not satisfy the basic criteria for harvesting. Mainly it is related to the amount of XEM within the account. Harvesting starts with at least 10000 XEM.',
			701: 'The provided deadline is in the past. The deadline must be provided within a 1 day period.',
			702: 'The provided deadline is too far in the future. The deadline must be within one day time period.',
			703: 'Your account does not have the right balance to make this transaction.',
			704: 'The provided message text is too large to be sent. Please try to reduce the length of the message.',
			705: 'The transaction hash already exists in the database or in the list of unconfirmed transactions.',
			706: 'The signature of the transaction could not be verified.',
			707: 'The time stamp of the transaction is too far in the past.',
			708: 'The time stamp of the transaction is too far in the future.',
			709: 'The account is unknown. An account needs to be part of at least one transaction (sender or recipient) to be known to the network.',
			710: 'The transaction was rejected because the transaction cache is too full. A higher fee improves the chance that the transaction gets accepted.',
			730: 'Importance transfer transaction (delegated harvesting) conflicts with existing transaction.',
			731: 'Delegated harvesting account has non zero balance and cannot be used.',
			732: 'Importance transfer rejected. There is already pending importance transfer operation.',
			733: 'Delegated harvesting is already active.',
			734: 'Delegated harvesting is NOT active. Cannot deactivate.',
			740: 'Transaction is not allowed for multisig account.',
			741: 'Multisig signature transaction rejected. Current account is not a cosignatory of a multisig account.',
			742: 'Multisig signature transaction rejected. Associated multisig transaction is not known to NEM network',
			743: 'Multisig account modification rejected. One of added accounts is already a cosignatory.',
			901: 'There was an error setting up offline mode.',
			1000: 'The private key and the public key you have provided mismatch.',
			1001: 'The public key and the address you have provided mismatch.',
			1002: 'The address does not belong to the main network.'
		},
		common: {
			success: 'Success',
			unknown: 'Unknown status',
			unknownMessage: 'Ncc did not get response in a timely manner. Transaction might have been sent to the network.<br /><br />Please, check transactions before attempting to make it again.',
			appStatus: {
				nccUnknown: 'NCC status is unknown',
				nccUnavailable: 'NCC is not available',
				nccStarting: 'NCC is starting...',
				nisUnknown: 'NIS status is unknown',
				nisUnavailable: 'NIS is not available',
				nisStarting: 'NIS is starting...',
				notBooted: 'NIS needs to be booted. Please open your wallet and boot a local node via the popup dialog or configure the auto-boot setting.',
				loading: 'Loading blocks from db, at block: ',
				booting: 'Booting NIS...',
				nisInfoNotAvailable: 'NIS info is not available yet. Trying to retrieve NIS info...',
				synchronizing: 'NIS is synchronizing. At block {{1}}, est. {{2}} behind.',
				daysBehind: {
					0: 'less than 1 day',
					1: '1 day',
					many: '{{1}} days'
				},
				synchronized: 'NIS is synchronized!',
				noRemoteNisAvailable: 'No remote NIS found in the network, disconnected from internet?'
			},
			addressBook: 'Address book',
			password: 'Password',
			passwordValidation: 'Password must not be blank',
			address: 'Address',
			privateLabel: 'Private label',
			publicLabel: 'Public label',
			noCharge: 'Current account will <b>NOT</b> be charged any fees, multisig account covers them',
			fee: 'Fee',
			justUse: 'Just use',
			dueBy: 'Due by',
			hours: 'hour(s)',
			hoursDue: 'Due by (hours)',
			hoursDueExplanation: 'If the transaction isn\'t included by the deadline, it is rejected.',
			closeButton: 'Close'
		},
		transactionTypes: [
			'TRANSFER TRANSACTION',
			'IMPORTANCE TRANSFER',
			'MODIFICATION OF MULTISIG ACCOUNT',
			'MULTISIG TRANSACTION'
		],
		transactionDirections: {
			pending: 'Pending transaction',
			outgoing: 'Outgoing transaction',
			incoming: 'Incoming transaction',
			self: 'Self transaction',
			importance: 'Importance transaction',
			modification: 'Aggregate Modification of Multisig'
		},
		modals: {
			error: {
				title: 'Oops!',
				caption: 'ERROR {{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Yes',
				no: 'No'
			},
			initialTy: {
			    title: "WELCOME to NEM",
			    content: "<c>Sbhaqrq ba gur fgebat cevapvcyrf bs rtnyvgnevna naq rdhnyvgl va qvfgevohgvba, gur Arj Rpbabzl Zbirzrag, ARZ, unf abj svanyyl pbzr gb sehvgvba nsgre pybfr gb 14 zbaguf bs vagrafvir qrirybczrag. Va nqqvgvba gb 5 pber qrirybcref naq 7 pber znexrgref, jr unir n ubfg bs pbzzhavgl zrzoref jub unir urycrq hf va bar jnl be nabgure, jvgubhg jubz, guvf jbhyq arire unir pbzr gbtrgure fb jryy nf orvat bar bs gur srj pelcgb vavgvngvirf jvgu fhpu n ovt grnz. Fcrpvny zragvba vf tvira gb gur sbyybjvat:</c><ue/><c><o>Grpuavpny naq Znexrgvat vachg:</o><oe/> Nzl, naqzr, nirentrwbr, OenvaBsZnffrf, qmnezhfpu, RSSI, Rynan82, rexxv, servtrvfg, unccl4209, vafgnpnfu, wnqrqwnpx, XrivaYv, XxbgArz, xbbernz, Xelfgb, Ybv Gena, ylxn, zvkznfgre, ZeCbegZna, arzovg, akxbvy, bjba, Cnagure03, curebzbar, erabgrat.yv, evtry, FnhyTenl, funjayrnel, fbyvk, fgbar, guvyba, haibvqcy, munaxnvjra, mbngn87, 守望者, 攻陳τч酨鈊, 清风, 福泽天下</c><ue/><c><o>APP Hfre Vagresnpr genafyngvba:</o><oe/>ncrk, obrfgva, Punbf514, QVZXNMQF, svypurs, servtrvfg, Thyvire, vnzvavgabj06, Wnarn4cqn, xhccnynugv, Ypuneyrf, znegvfznegvf, zrff-yrybhpu, Cnenan, evtry, Funja, Fcvqre, 楊 輝彦</c><c><oe/>Va nqqvgvba gb gur nobir 67 grnz zrzoref, jr nyfb unir bgure zrzoref jub  pbagevohgrq, jurgure va grpuavpny, znexrgvat be fgerff grfgvat gur flfgrz qhevat gur nycun naq orgn cunfr. Jr jbhyq yvxr gb nqqvgvbanyyl gunax nyy gubfr vaqvivqhnyf abg yvfgrq urer naq gur terngre ARZ pbzzhavgl orpnhfr jvgubhg gurz, jr jbhyq unir abg rire pbzr fb sne.</c><ue/><c>Naq zbfg vzcbegnagyl<oe/><o>Gunax LBH!</o><oe/><oe/>Arj Rpbabzl fgnegf jvgu LBH!</c>"
			},
			initialBackup: {
			    title: "Welcome to NEM",
			    content: "You can create wallet backup from menu in upper right corner."
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
					port: 'Port',
					defaultPort: 'Use default port.'
				},
				autoBoot: {
					tabTitle: 'Auto-boot',
					name: 'Node name',
					account: 'Account',
					primaryAccount: 'Primary account',
					auto: 'Auto boot when a wallet is opened'
				},
				save: 'Save',
				saveSuccess: 'Settings have been saved successfully'
			},
			multisig: {
				title: 'Convert account to multisig',
				multisigAccount: 'Multisig account',
				cosignatories: "Cosignatories' addresses",
				labelDesc: 'This account is labeled as {{1}}',
				nullLabelDesc: "This account doesn't have a label",
				addCosignatory: '+ Add Cosignatory',
				cancel: 'Cancel',
				convert: 'Convert',
				fee: 'Fee',
				feeValidation: 'Fee must not be less than the minimum fee',
				useMinimumFee: 'Use minimum fee',
				txConfirm: {
					title: 'Confirm Conversion to Multisig Account',
					total: 'Total',

				},
				warning: 'Multisig account is on the list of cosignatories. This will result in locking down the account cutting off access to the fund. Most likely you <b>DO NOT</b> want to do that.'
			},
			signMultisig: {
				title: 'Sign multisig transaction',
				original: {
					from: 'Multisig account',
					to: 'Recipient',
					amount: 'Amount',
					fee: 'Inner Fee',
					deadline: 'Deadline'
				},
				multisigFees: 'Multisig Fees',
				multisigTotal: 'Total',
				sender: 'Cosignatory',
				fee: 'Fee',
				feeValidation: 'Fee must not be less than the minimum fee',
				useMinimumFee: 'Use minimum fee',
				password: 'Password',
				passwordValidation: 'Password must not be blank',
				send: 'Send',
				cancel: 'Cancel',
				sending: 'Sending...',
				successMessage: 'Transaction has been sent successfully!',
				txConfirm: {
					title: 'Confirm Multisig Transaction',
					message: 'Message',
					encrypted: 'Message is encrypted',
					noMessage: 'No message',

				}
			},
			sendNem: {
				title: 'Send XEM',
				sender: 'Sender',
				thisAccount: 'This account',
				labelDesc: 'This account is labeled as {{1}}',
				nullLabelDesc: "This account doesn't have a label",
				amount: 'Amount',
				recipient: "Recipient's account",
				recipientValidation: 'Account addresses must be 40 characters long excluding dashes',
				message: 'Message',
				encrypt: 'Encrypt message',
				fee: 'Fee',
				multisigFee: 'Multisig fee',
				feeValidation: 'Fee must not be less than the minimum fee',
				useMinimumFee: 'Use minimum fee',
				password: 'Password',
				passwordValidation: 'Password must not be blank',
				send: 'Send',
				cancel: 'Cancel',
				sending: 'Sending...',
				successMessage: 'Transaction has been sent successfully!',
				txConfirm: {
					title: 'Confirm Transaction',
					amount: 'Amount',
					to: 'To',
					total: 'Total',
					message: 'Message',
					encrypted: 'Message is encrypted',
					noMessage: 'No message',
					cancel: 'Cancel',
					confirm: 'Confirm',
					sending: 'Sending...'
				},
				notBootedWarning: {
					title: 'Node has not been booted!',
					message: 'A local node needs to be booted before you can send XEM!'
				},
				bootingWarning: {
					title: 'Node is being booted',
					message: 'Please wait until booting process is done to send your transaction.'
				},
				loadingWarning: {
					title: 'Loading db'
				}
			},
			clientInfo: {
				title: 'Client info',
				ncc: 'NEM Community Client - NCC',
				signer: 'Signer',
				remoteServer: 'Remote Server',
				local: 'Local',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Synchronized',
				notSync: 'Not synchronized',
				notConnected: 'Not connected to NEM Cloud',
				loading: 'Loading...'
			},
			transactionDetails: {
				title: 'Transaction Details',
				id: 'ID',
				hash: 'Hash',
				type: 'Transaction Type',
				direction: 'Transaction Direction',
				pending: 'Pending',
				outgoing: 'Outgoing',
				incoming: 'Incoming',
				self: 'Self',
				sender: 'Sender',
				multisigAccount: 'Multisig Account',
				issuer: 'Issuer',
				recipient: 'Recipient',
				remote: 'Remote',
				multisigMessage: 'Signatures present',
				message: 'Message',
				noMessage: 'No message',
				encrypted: 'Message is encrypted',
				time: 'Timestamp',
				confirmations: 'Confirmations',
				confirmationsUnknown: 'Unknown',
				amount: 'Amount',
				fee: 'Fee',
				innerFee: 'Inner Fee',
				multisigFees: 'Multisig Fees',
				cosignatory: 'Cosignatory'
			},
			accountDetails: {
				title: "Account details",
				address: "Address",
				label: "Label",
				noLabel: "No label",
				add: "Add to address book",
				remove: "Remove from address book",
				balance: "Balance",
				vested: "vested",
				importance: "Importance",
				publicKey: "Public key",
				noPublicKey: "No public key",
				harvestedBlocks: "Harvested blocks",
				close: "Close"
			},
			bootLocalNode: {
				title: 'Boot local node',
				account: 'Account to boot local node',
				noLabel: '<span class="null">&lt;No label&gt;</span>',
				wallet: 'Wallet',
				node: 'Node name',
				boot: 'Boot',
				booting: 'Booting...',
				warning: 'Boot node warning',
				warningText: 'You\'re trying to boot a node <u>{{2}}</u><br/><br/>Booting remote node is currently impossible from within NCC.',
				warningStatement: 'You have auto-boot set to true and you\'re using remote node {{3}}.<br/><br/>Booting remote node is currently impossible from within NCC',
				warningQuestion: 'Are you sure you want to boot node <u>{{3}}</u> using private key of account {{1}} ({{2}} XEM)?<br><br>This will reveal this account\'s <span class="sublabelWarning">private key</span> to node: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Close Wallet',
				message: 'Are you sure you want to close your wallet and return to landing page?'
			},
			createAccount: {
				title: 'Create New Account',
				label: 'Private label',
				wallet: 'Wallet',
				password: "Wallet's password",
				successMessage: 'Account {{1}} {{#2}}({{2}}){{/2}} has been created!',
				create: 'Create'
			},
			showPrivateKey: {
			    title: 'Show Account\'s PRIVATE Key',
			    message: 'This will display account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',
				publicKey: 'Public key',
				privateKey: 'Private key',
			    show: 'Show the key'
			},
			showRemotePrivateKey: {
			    title: 'Show Remote Account\'s PRIVATE Key',
			    message: 'This will display remote account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',
			},
			addAccount: {
				title: 'Add an Existing Account',
				privateKey: "Account's Private Key",
				wallet: 'Wallet',
				password: "Wallet's password",
				successMessage: 'Account {{1}} {{#2}}({{2}}){{/2}} has been added to wallet!',
				add: 'Add',
				label: 'Label'
			},
			setPrimary: {
				title: 'Set Primary Account',
				account: 'Account to be set as primary',
				noLabel: '<span class="null">&lt;No label&gt;</span>',
				wallet: 'Wallet',
				password: "Wallet's password",
				successMessage: 'Account {{1}} {{#2}}({{2}}){{/2}} has been set as primary!',
				set: 'Set as primary'
			},
			changeWalletName: {
				title: 'Change Wallet Name',
				wallet: 'Current wallet name',
				newName: 'New wallet name',
				password: "Wallet's password",
				successMessage: 'Wallet name has been successfully changed from <em>{{1}}</em> to <em>{{2}}</em>',
				change: 'Change'
			},
			changeWalletPassword: {
				title: 'Change Wallet Password',
				wallet: 'Wallet',
				password: 'Current password',
				newPassword: 'New password',
				confirmPassword: 'Confirm new password',
				successMessage: 'Wallet password has been successfully changed',
				change: 'Change',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: 'Your entered password and password confirmation do not match. Please be sure you type your new password correctly.'
			},
			changeAccountLabel: {
				title: 'Change Account Label',
				label: 'Account label',
				wallet: 'Wallet',
				password: "Wallet's password",
				successMessage: 'Account {{1}} is now labeled as {{2}}',
				change: 'Change'
			},
			removeAccount: {
				title: 'Remove Account',
				account: 'Account',
				label: 'Account label',
				wallet: 'Associated wallet',
				password: "Wallet's password",
				warning: 'Please ensure that your account has no XEM left before you remove it, or they would be lost forever.',
				successMessage: 'Account {{1}} {{#2}}({{2}}){{/2}} has been removed!',
				remove: 'Remove'
			},
			nisUnavailable: {
				title: 'NIS unavailable',
				message: 'Disconnected from NIS, waiting for connection'
			},
			shutdown: {
				title: 'Close Program',
				message: 'Are you sure you want to close NEM Community Client?'
			},
			activateRemote: {
				title: 'Activate Delegated Harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: "Wallet's password",
				activate: 'Activate',
				warning: 'Warning',
				warningText: 'Activation will take 6 hours (360 blocks). Activation will NOT start harvesting automatically.'
			},
			deactivateRemote: {
				title: 'Deactivate Delegated Harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: "Wallet's password",
				deactivate: 'Deactivate',
				warning: 'Warning',
                warningText: 'Deactivation will take 6 hours (360 blocks).'
			},
			startRemote: {
				title: 'Start Delegated Harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: "Wallet's password",
				start: 'Start'
			},
			stopRemote: {
				title: 'Stop Delegated Harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: "Wallet's password",
				stop: 'Stop'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer. To prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away."
			},
			addContact: {
				title: 'Add contact',
				add: 'Add'
			},
			editContact: {
				title: 'Edit contact',
				saveChanges: 'Save changes'
			},
			removeContact: {
				title: 'Remove contact',
				remove: 'Remove'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Wallet has been sucessfully imported!',
			nav: {
				start: 'Getting Started',
				about: 'About NEM',
				settings: 'Settings'
			},
			main: {
				leftTitle: 'New to <em>NEM</em>?',
				leftButton: 'Create new wallet',
				walletNamePlh: 'Name of your wallet',
				passwordPlh: 'Password',
				confirmPasswordPlh: 'Confirm password',
				create: 'Create',
				creating: 'Creating...',
				rightTitle: 'Already a <em>NEM</em>ber?',
				rightButton: 'Open your wallet',
				openButton: 'Open',
				walletsFound: 'Found <strong>{{1}}</strong> <em>wallet(s)</em>',
				copyright: 'Photography by <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC encrypts your wallet',
						description: '<em>Wallet security</em> is very important to avoid the theft of XEM &amp; assets.'
					},
					{
						title: 'Remote NEM Infrastructure Server',
						description: 'By using a remote NIS you don\'t have to synchronise the blockchain at start-up.',
					},
                    {
                        title: 'Delegated harvesting',
                        description: 'With delegated harvesting you can harvest on remote NIS nodes!',
                    },
                    {
                        title: 'Multisignature transactions',
                        description: 'Secure your XEM and assets via in-blockchain multi-signature transactions.',
                    },
                    {
                        title: 'Native language support',
                        description: 'NEM user interface supports multiple languages. See "Settings".'
                    },
                    {
                        title: 'Got any questions or feedback ?',
                        description: '<a href="http://forum.ournem.com">forum.ournem.com</a> | #ournem on freenode.org | Telegram',
                    }
				]
			},
			about: {
				sections: [
					{
						title: 'How does NCC work?',
						paragraphs: [
							'<strong>NCC</strong> provides access to your assets and XEM like a traditional wallet. You may',
							'<strong>NCC</strong> requires access to a <strong>NIS</strong> server in order to operate. Standard is to have a local server active (it is installed together with the <strong>NCC</strong>)',
							'You may also configure an access to a remote <strong>NIS</strong>.'
						],
						listItems: [
							'Have multiple wallets',
							'Define multiple accounts to be included in a wallet'
						]
					},
					{
						title: 'What is &#42;NIS?',
						paragraphs: [
							'This component is responsible for keeping the <strong>NEM</strong> cloud alive.',
							'The more <strong>NIS</strong> there are in the network, the better the security.,',
							'<strong>NIS</strong> is the access point into the <strong>NEM</strong> cloud.'
						],
						legend: '<strong>&#42;NIS</strong> stands for <strong>NEM Infrastructure Server</strong>'
					}
				]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'About {{1}} days ago',
			lastAccessJustNow: 'Just now',
			lastAccessTooltip: 'Last access was {{1}}',
			primary: 'primary',
			primaryShort: 'P',
			noLabel: '<No label>',
			copiedToClipboard: 'Address has been copied to clipboard!',
			actions: {
				refreshInfo: 'Refresh Info',
				bootLocalNode: 'Boot Local Node',
				changeWalletName: 'Change Wallet Name',
				changeWalletPassword: 'Change Wallet Password',
				mergeWallets: 'Merge Wallets',
				exportWallet: 'Export Wallet',
				createAccount: 'Create New Account',
				createRealAccountData: 'Create Real Account Data',
				verifyRealAccountData: 'Verify Real Account Data',
				showPrivateKey: 'Show Account\'s PRIVATE key',
				showRemotePrivateKey: 'Show Remote Account\'s PRIVATE key',
				viewDetails: 'View Account Details',
				addAccount: 'Add an Existing Account',
				changeAccountLabel: 'Change Account Label',
				setPrimary: 'Set as Primary Account',
				removeAccount: 'Remove Account',
				clientInfo: 'Client Info',
				closeWallet: 'Close Wallet',
				closeProgram: 'Close Program',
				copyClipboard: 'Copy Address to Clipboard',
				copyDisabled: 'Copying an address requires flash',
				convertMultisig: 'Convert other account to multisig'
			},
			nav: [
				'Dashboard',
				'Messages',
				'Address Book',
				'Transactions',
				'Harvested blocks',
				'Asset Exchange',
				'News',
				'Applications',
				'Accounts',
				'Settings',
				'Close Program'
			],
			bootNodeWarning: "A local node needs to be booted before you can fully utilize NCC's features."
		},
		dashboard: {
			assets: {
				title: 'Your Assets'
			},
			importance: {
				title: 'Importance Score',
				unknown: 'Unknown status',
				start: 'Start local harvesting',
				harvesting: 'Harvesting',
				stop: 'Stop local harvesting',
				description: 'Importance of account to the NEM cloud',
				remoteHarvest: {
					activate: 'Activate delegated harvesting',
					activating: 'Activating delegated harvesting...',
					active: 'Delegated harvesting is active',
					deactivate: 'Deactivate delegated harvesting',
					deactivating: 'Deactivating delegated harvesting...',
					startRemoteHarvesting: 'Start delegated harvesting',
					remotelyHarvesting: 'Remotely harvesting',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			},
			transactions: {
				title: 'Recent Transactions',
				sendNem: 'Send XEM',
				signMultisig: 'SIGN',
				balance: 'Current Balance',
				loading: 'Loading balance',
				accountCosignatories: 'Multisig account',
				accountCosignatoriesView: 'view cosignatories',
				vestedBalance: 'Vested Balance',
				syncStatus: '(at block {{1}}{{#2}} : est. {{3}} days behind{{/2}})',
				notSynced: 'might be inaccurate, NIS not synchronized yet',
				unknown: 'unknown',
				columns: [
					'',
					'Time',
					'Sender/Recipient',
					'Message',
					'',
					'Details',
					'Confirmations',
					'Fee',
					'Amount'
				],
				noMessage: 'No message',
				encrypted: 'Message is encrypted',
				view: 'View',
				confirmationsUnknown: 'Unknown',
				pending: 'Pending',
				seeAll: 'See all transactions',
				noTransactions: 'No transactions have been performed yet'
			},
			nemValue: {
				title: 'XEM value statistics'
			},
			messages: {
				titleTooltip: 'Messages'
			},
			news: {
				titleTooltip: 'News'
			},
			notAvailable: 'Not yet available in beta release'
		},
		transactions: {
			title: 'Transactions',
			sendNem: 'Send XEM',
			balance: 'Current Balance',
			filters: {
				confirmed: 'Confirmed',
				unconfirmed: 'Unconfirmed',
				incoming: 'Incoming',
				outgoing: 'Outgoing'
			},
			table: {
				columns: [
					'',
					'Time',
					'Sender/Recipient',
					'Message',
					'',
					'Details',
					'Confirmations',
					'Fee',
					'Amount'
				],
				noMessage: 'No message',
				encrypted: 'Message is encrypted',
				view: 'View',
				confirmationsUnknown: 'Unknown',
				pending: 'Pending',
				noTransactions: 'No transactions have been performed yet',
				loading: 'Loading more transactions...'
			}
		},
		harvestedBlocks: {
			title: 'Harvested Blocks',
			feeEarned: 'Fees earned from the last 25 harvested blocks',
			unknown: 'Unknown',
			table: {
				columns: [
					'Height',
					'Time',
					'Block difficulty',
					'Fee'
				],
				noBlocks: 'No blocks have been harvested yet',
				loading: 'Loading more harvested blocks'
			},
			harvesting: {
				unknown: 'Unknown status',
				start: 'Start local harvesting',
				harvesting: 'Harvesting',
				stop: 'Stop local harvesting',
				remoteHarvest: {
					startRemoteHarvesting: 'Start delegated harvesting',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			}
		},
		addressBook: {
			title: 'Address book',
			addContact: 'Add contact',
			table: {
				columns: [
					'Account address',
					'Private Label',
					'Public Label'
				],
				noContacts: 'There is no contacts in your address book'
			},
			noLabel: 'No label',
			sendNem: 'Send XEM',
			edit: 'Edit',
			remove: 'Remove'
		},
		settings: {
			title: 'Settings',
			settings: [
				{
					name: 'Language'
				}
			],
			save: 'Save changes',
			saveSuccess: 'Settings have been saved successfully'
		}
	}
});
