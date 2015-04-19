define({
	id: 'CZ',
	name: 'Česky',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Soubor se nenašel.',
			102: 'Peňeženka nebyla vytvořená',
			103: 'Soubor peněženky je poškozen. Prosím obnovte soubor ze zálohy, kterou jste měli udělat při jejím vytváření nebo při přidání účtu.',
			104: 'Poskytnuté heslo není správné. Doufáme, že správné heslo máte. Ztracené heslo se totiž nedá obnovit',
			105: 'No password was provided for the wallet.',
			106: 'Před použitím peněženky, ji musíte odemknout. Na ujištění, že jste oprávněn používat peněženku, je třeba poskytnout heslo.',
			107: 'Peněženka neobsahuje daný účet',
			108: 'Účet není možné odstranit. Pravděpodobně obsahuje zůstatek větší než 0 Nemů, nebo je účet, který chcete odstranit hlavní.',
			109: 'Jiná peněženka se stejným názvem již existuje. Prosím, vyberte jiný název.',
			110: 'Peněženka již daný účet obsahuje.',
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
			202: 'Šifrovanou zprávu nelze doručit, protože příjemce ještě neuskutečnil žádný převod',
			203: 'The account cannot be converted because not all cosignatories are known. They either need to be in the same wallet or have made at least one transaction.',
			305: 'The NEM Infrastructure Server (NIS) is not available.\n\nTry to restart the NEM software.\n\nIf you are using a remote NIS, check your configured host for typing errors or use another remote NIS.',
			306: 'Došlo k neočekávané chybě. Litujeme, opětovný pokus by mohl pomoci. V případě, že se problém nevyřešil, obratte se s ním na NEM NIS / NCC komunitu.',
			400: 'Některá hodnota chybí, nebo je neplatná.',
			401: 'This operation cannot be completed because it might leak a private key by sending it to a remote NIS.',
			404: 'Požadovaný zdroj nebyl nalezen.',
			500: 'Uložení konfiguračního souboru selhalo.',
			600: 'Pro posílání a přijímání převodů, potřebuje NCC, server NIS. Ten se musí nabútovat z cloudu NEM. Prosím použijte vstupní menu NCC na bútování lokálního uzlu.',
			601: 'Tento uzel je již nabútován. Další pokus bútovat NIS není možný.',
			602: 'Almost ready. NEM Infrastructure Server is currently loading blocks. Wallet will be functional when db is fully loaded.',
			699: 'Maximum number of harvesters allowed on server has been reached.',
			700: 'Daný účet nesplňuje základní kritéria pro zahájení sklizně. Většinou se tento problém týká nedostatečního množství Nemů na účtu. Sklizeň začíná s minimální hodnotou 10000 NEM.',
			701: 'Zadaný termín se nachází v minulosti. Termín musí být zadán do období 1 den.',
			702: 'Zadaný termín se nachází v příliš daleké budoucnosti. Termín musí být zadán do období 1 den.',
			703: 'Your account does not have the right balance to make this transaction.',
			704: 'Množství textu vaší zprávy převyšuje limit zpráv posílaných přes NEM. Prosím, pokuste se snížit množství textu ve zprávě, kterou chcete odeslat.',
			705: 'Hash převodu již existuje v databáze, alebo v zozname nepotvrzených převodů.',
			706: 'Podpis převodu nemůže být ověřen.',
			707: 'Časový údaj převodu se nachází v příliš daleké minulosti.',
			708: 'Časový údaj převodu se nachází v příliš daleké budoucnosti.',
			709: 'Účet je neznámý. Účet musí být součástí alespoň jednoho převodu (odesílatel nebo příjemce), aby mohl být rozpoznán síťov.',
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
			901: 'Při nastavování offline módu se vyskytla chyba.',
			1000: 'The private key and the public key you have provided mismatch.',
			1001: 'The public key and the address you have provided mismatch.',
			1002: 'The address does not belong to the main network.'
		},
		common: {
			success: 'Úspěch',
			unknown: 'Neznámý status',
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
			fee: 'Poplatek',
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
				caption: 'CHYBA {{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Ano',
				no: 'Ne'
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
				cosignatories: 'Cosignatories\' addresses',
				labelDesc: 'This account is labeled as {{1}}',
				nullLabelDesc: 'This account doesn\'t have a label',
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
				title: 'Odeslat NEM',
				sender: 'Sender',
				thisAccount: 'This account',
				labelDesc: 'Název tohto účtu je <strong>{{1}}</strong>',
				nullLabelDesc: 'Tento účet nemá název',
				amount: 'Množství',
				recipient: 'Účet příjemce',
				recipientValidation: 'Account addresses must be 40 characters long excluding dashes',
				message: 'Zpráva',
				encrypt: 'Šifrována zpráva',
				fee: 'Poplatek',
				multisigFee: 'Multisig fee',
				feeValidation: 'Fee must not be less than the minimum fee',
				useMinimumFee: 'Use minimum fee',
				password: 'Heslo',
				passwordValidation: 'Password must not be blank',
				send: 'Odeslat',
				cancel: 'Cancel',
				sending: 'Odesílání...',
				successMessage: 'Převod bol vykonán úspěšne!',
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
					message: 'A local node needs to be booted before you can send NEM!'
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
				signer: 'Signatár',
				remoteServer: 'Vzdálený server',
				local: 'Lokální',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Synchronizovaný',
				notSync: 'Nesynchronizovaný',
				notConnected: 'Nepřipojený ku Cloudu NEM',
				loading: 'Načítá se...'
			},
			transactionDetails: {
				title: 'Detaily převodu',
				id: 'ID',
				hash: 'Hash',
				type: 'Typ převodu',
				direction: 'Transaction Direction',
				pending: 'Probíhá',
				outgoing: 'Odchází',
				incoming: 'Přichází',
				self: 'Ja',
				sender: 'Odesílatel',
				multisigAccount: 'Multisig Account',
				issuer: 'Issuer',
				recipient: 'Příjemce',
				remote: 'Remote',
				multisigMessage: 'Signatures present',
				message: 'Zpráva',
				noMessage: 'Žádný zprávy',
				encrypted: 'Zpráva je šifrována',
				time: 'Časový údaj',
				confirmations: 'Potvrzení',
				confirmationsUnknown: 'Unknown',
				amount: 'Množství',
				fee: 'Poplatek',
				innerFee: 'Inner Fee',
				multisigFees: 'Multisig Fees',
				cosignatory: 'Cosignatory'
			},
			accountDetails: {
				title: 'Account details',
				address: 'Address',
				label: 'Label',
				noLabel: 'No label',
				add: 'Add to address book',
				remove: 'Remove from address book',
				balance: 'Balance',
				vested: 'vested',
				importance: 'Importance',
				publicKey: 'Public key',
				noPublicKey: 'No public key',
				harvestedBlocks: 'Harvested blocks',
				close: 'Close'
			},
			bootLocalNode: {
				title: 'Bútovat lokální uzel',
				account: 'Účet na bútování lokálního uzla',
				noLabel: '<span class=\'null\'>&lt;Žádný název&gt;</span>',
				wallet: 'Peněženka',
				node: 'Název uzla',
				boot: 'Bútovat',
				booting: 'Bútování...',
				warning: 'Boot node warning',
				warningText: 'You\'re trying to boot a node <u>{{2}}</u><br/><br/>Booting remote node is currently impossible from within NCC.',
				warningStatement: 'You have auto-boot set to true and you\'re using remote node {{3}}.<br/><br/>Booting remote node is currently impossible from within NCC',
				warningQuestion: 'Are you sure you want to boot node <u>{{3}}</u> using private key of account {{1}} ({{2}} XEM)?<br><br>This will reveal this account\'s <span class="sublabelWarning">private key</span> to node: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Zavřít peněženku',
				message: 'Opravdu chcete zavřít peněženku a vrátit se na úvodní stranu?'
			},
			createAccount: {
				title: 'Vytvořit nový účet',
				label: 'Soukromý název',
				wallet: 'Peněženka',
				password: 'Heslo peněženky',
				successMessage: 'Účet {{1}} {{#2}}({{2}}){{/2}} byl vytvořen!',
				create: 'Vytvořit'
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
				title: 'Přidat již existujíci účet',
				privateKey: 'Soukromý klíč k účtu',
				wallet: 'Peněženka',
				password: 'Heslo peněženky',
				successMessage: 'Účet {{1}} {{#2}}({{2}}){{/2}} byl přidán!',
				add: 'Přidať',
				label: 'Název'
			},
			setPrimary: {
				title: 'Vybrat hlavní účet',
				account: 'Vybrat účet jako hlavní',
				noLabel: '<span class=\'null\'>&lt;Žiadny název&gt;</span>',
				wallet: 'Peněženka',
				password: 'Heslo peněženky',
				successMessage: 'Účet {{1}} {{#2}}({{2}}){{/2}} byl nastaven jako hlavní!',
				set: 'Nastavit jako hlavní'
			},
			changeWalletName: {
				title: 'Změna názvu peněženky',
				wallet: 'Současný název peněženky',
				newName: 'Nový název peněženky',
				password: 'Heslo peněženky',
				successMessage: 'Název peněženky byl úspěšně změněn z <em>{{1}}</em> na <em>{{2}}</em>',
				change: 'Změniť'
			},
			changeWalletPassword: {
				title: 'Změna hesla peněženky',
				wallet: 'Peněženka',
				password: 'Současné heslo',
				newPassword: 'Nové heslo',
				confirmPassword: 'Potvrdit nové heslo',
				successMessage: 'Heslo peněženky bylo úspěšně změněno',
				change: 'Změniť',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: 'Zadané heslo a heslo potvrzení se neshodují. Prosím, ujistěte se, že jste nové heslo napsali správně.'
			},
			changeAccountLabel: {
				title: 'Změnit název účtu ',
				label: 'Název účtu',
				wallet: 'Peněženka',
				password: 'Heslo peněženky',
				successMessage: 'Účet {{1}} se nyní jmenuje {{2}}',
				change: 'Změnit'
			},
			removeAccount: {
				title: 'Odstranit účet',
				account: 'Account',
				label: 'Název účtu',
				wallet: 'Peněženka',
				password: 'Heslo peněženky',
				warning: 'Prosím ujistěte se, že na vašem účtu již nejsou žádné NEMů, jinak budou ztraceny navždy.',
				successMessage: 'Účet {{1}} {{#2}}({{2}}){{/2}} byl odstranen!',
				remove: 'Odstranit'
			},
			nisUnavailable: {
				title: 'NIS nedostupný',
				message: 'Odpojen z NIS, čeká na spojení'
			},
			shutdown: {
				title: 'Zavřít program',
				message: 'Opravdu chcete zavřít NEM Community Client?'
			},
			activateRemote: {
				title: 'Activate Delegated Harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: 'Wallet\'s password',
				activate: 'Activate',
				warning: 'Warning',
				warningText: 'Activation will take 6 hours (360 blocks). Activation will NOT start harvesting automatically.'
			},
			deactivateRemote: {
				title: 'Deactivate Delegated Harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: 'Wallet\'s password',
				deactivate: 'Deactivate',
				warning: 'Warning',
				warningText: 'Deactivation will take 6 hours (360 blocks).'
			},
			startRemote: {
				title: 'Start Delegated Harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: 'Wallet\'s password',
				start: 'Start'
			},
			stopRemote: {
				title: 'Stop Delegated Harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: 'Wallet\'s password',
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
			importSuccess: 'Peněženka byla úspěšně importována!',
			nav: {
				start: 'První<strong>kroky</strong>',
				about: 'Info o <strong>NEM</strong>',
				settings: 'Settings'
			},
			main: {
				leftTitle: 'Nový v <em>NEM</em>?',
				leftButton: 'Vytvořit novou peněženku',
				walletNamePlh: 'Název vaší peněženky',
				passwordPlh: 'Heslo',
				confirmPasswordPlh: 'Confirm password',
				create: 'Vytvořit',
				creating: 'Creating...',
				rightTitle: 'Již jste <em>NEM</em>ber?',
				rightButton: 'Otevřít vaší peněženku',
				openButton: 'Otevřít',
				walletsFound: 'Nalezené<strong>{{1}}</strong> <em>peněženky</em>',
				copyright: 'Photography by <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC šifruje vaši peněženku',
						description: '<em>Bezpečnost</em> je velmi důležitá, vyhnete se tak krádeži vašich NEMů &amp; aktiv.'
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
						title: 'Jak NCC funguje?',
						paragraphs: [
							'<strong>NCC</strong> poskytuje přístup k vašim aktivům a NEMúm tak jako klasická peněženka. Můžete',
							'<strong>NCC</strong> potřebuje prítsup k serveru<strong>NIS</strong>. Za normálních okolností máte aktivní lokální server (je nainstalován spolu s <strong>NCC</strong>)',
							'Můžete nakonfigurovat také přístup ke vzdálenému serveru <strong>NIS</strong>.'
						],
						listItems: [
							'Mít několik peněženek',
							'Nastavit peněženku tak, aby obsahovala více účtů'
						]
					},
					{
						title: 'Co je &#42;NIS?',
						paragraphs: [
							'Tato součást je zodpovědná za udržování cloudu <strong> NEM </ strong> živého.',
							'The more <strong>NIS</strong> there are in the network, the better the security.,',
							'<strong>NIS</strong> je přístupová brána do <strong>NEM</strong> cloudu.'
						],
						legend: '<strong>&#42;NIS</strong> je skratka <strong>NEM Infrastructure Server</strong>'
					}
				]
			},
			footer: {
				copyright: '&copy; Copyright 2014. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Asi před {{1}} dny',
			lastAccessJustNow: 'Právě teď',
			lastAccessTooltip: 'Poslední přihlášení {{1}}',
			primary: 'Hlavní',
			primaryShort: 'H',
			noLabel: '<Žádný název>',
			copiedToClipboard: 'Adresa byla zkopírována!',
			actions: {
				refreshInfo: 'Obnovit Info',
				bootLocalNode: 'Bútovat lokální uzel',
				changeWalletName: 'Změnit název peněženky',
				changeWalletPassword: 'Změnit heslo peněženky',
				mergeWallets: 'Sloučit peněženky',
				exportWallet: 'Exportovat peněženku',
				createAccount: 'Vytvořit nový účet',
				createRealAccountData: 'Create Real Account Data',
				verifyRealAccountData: 'Verify Real Account Data',
				showPrivateKey: 'Show Account\'s PRIVATE key',
				showRemotePrivateKey: 'Show Remote Account\'s PRIVATE key',
				viewDetails: 'View Account Details',
				addAccount: 'Přidat již existujíci účet',
				changeAccountLabel: 'Změnit název účtu',
				setPrimary: 'Nastavit jako hlavní účet',
				removeAccount: 'Odstranit účet',
				clientInfo: 'Client Info',
				closeWallet: 'Zavřít peněženku',
				closeProgram: 'Zavřít program',
				copyClipboard: 'Copy Address to Clipboard',
				copyDisabled: 'Copying an address requires flash',
				convertMultisig: 'Convert other account to multisig'
			},
			nav: [
				'Nástěnka',
				'Zprávy',
				'Kontakty',
				'Převody',
				'Sklizené bloky',
				'Burza aktiv',
				'Novinky',
				'Aplikace',
				'Účty',
				'Nastavení',
				'Zavřít program'
			],
			bootNodeWarning: 'Pokud chcete plně využívat možnosti NCC, musíte nejprve nabútovat lokální uzel.'
		},
		dashboard: {
			assets: {
				title: 'Vaše aktiva'
			},
			importance: {
				title: 'Významové skóre',
				unknown: 'Neznámý status',
				start: 'Začít sklizeň',
				harvesting: 'Sklizeň',
				stop: 'Zastavit žatvu',
				description: 'Význam účtu pro cloud NEMu',
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
				title: 'Nedávné převody',
				sendNem: 'Odeslat NEM',
				signMultisig: 'SIGN',
				balance: 'Současný zostatek',
				loading: 'Loading balance',
				accountCosignatories: 'Multisig account',
				accountCosignatoriesView: 'view cosignatories',
				vestedBalance: 'Vested Balance',
				syncStatus: '(Blok {{1}}{{#2}} : asi {{3}} dny pozadu{{/2}})',
				notSynced: 'might be inaccurate, NIS not synchronized yet',
				unknown: 'Neznámy',
				columns: [
					'',
					'Čas',
					'Odesílatel/Příjemce',
					'Zpráva',
					'',
					'Detaily',
					'Potvrzení',
					'Poplatek',
					'Množství'
				],
				noMessage: 'Žádná zpráva',
				encrypted: 'Zpráva je šifrována',
				view: 'Zobrazit',
				confirmationsUnknown: 'Unknown',
				pending: 'Probíhá',
				seeAll: 'Zobrazit všechny převody',
				noTransactions: 'Zatím nebyly provedený žádný převody'
			},
			nemValue: {
				title: 'Štatistiky hodnoty NEM'
			},
			messages: {
				titleTooltip: 'Zprávy'
			},
			news: {
				titleTooltip: 'Novinky'
			},
			notAvailable: 'V alfa verzi není dostupné'
		},
		transactions: {
			title: 'Převody',
			sendNem: 'Odeslat NEM',
			balance: 'Současný zostatek',
			filters: {
				confirmed: 'Confirmed',
				unconfirmed: 'Unconfirmed',
				incoming: 'Přichází',
				outgoing: 'Odchází'
			},
			table: {
				columns: [
					'',
					'Čas',
					'Odesílatel/Příjemce',
					'Zpráva',
					'',
					'Detaily',
					'Potvrzení',
					'Poplatek',
					'Množství'
				],
				noMessage: 'Žádná zpráva',
				encrypted: 'Zpráva je šifrována',
				view: 'Zobrazit',
				confirmationsUnknown: 'Unknown',
				pending: 'Probíhá',
				noTransactions: 'Zatím nebyly provedený žádné převody',
				loading: 'Načítání dalších převodů...'
			}
		},
		harvestedBlocks: {
			title: 'Sklizené bloky',
			feeEarned: 'Poplatky sklizené z posledních 25 bloků',
			unknown: 'Unknown',
			table: {
				columns: [
					'Blok',
					'Čas',
					'Block difficulty',
					'Poplatek'
				],
				noBlocks: 'Žádné sklizené bloky ',
				loading: 'Loading more harvested blocks'
			},
			harvesting: {
				unknown: 'Neznámý status',
				start: 'Začít sklizeň',
				harvesting: 'Sklizeň',
				stop: 'Zastavit sklizeň',
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
			sendNem: 'Send NEM',
			edit: 'Edit',
			remove: 'Remove'
		},
		settings: {
			title: 'Nastavení',
			settings: [
				{
					name: 'Jazyk'
				}
			],
			save: 'Uložit změny',
			saveSuccess: 'Nastavení byly úspěšně uloženy'
		}
	}
});
