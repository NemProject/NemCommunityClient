define({
	id: 'UA',
	name: 'Український',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'The wallet file does not exist.',
			102: 'Гаманець не був створений.',
			103: 'Wallet file is corrupt. Please recover your wallet from a backup.',
			104: 'The provided password for the wallet is not correct.',
			105: 'No password was provided for the wallet.',
			106: 'Перш ніж ви зможете працювати з гаманцем, він повинен бути відкритий. Щоб переконатися, що ви авторизованi на доступ до файлу гаманця, ви повинні ввести пароль гаманця.',
			107: 'Гаманець не містить цей акаунт.',
			108: 'Акаунт не може бути видалений. Швидше за все тому, що баланс рахунку все ще перевищує 0 XEM, або акаунт, який ви намагаєтеся видалити є основним.',
			109: 'Гаманець з таким ім\'ям вже існує. Будь ласка, виберіть інше ім\'я гаманця.',
			110: 'Гаманець вже містить цей акаунт.',
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
			202: 'Зашифроване повідомлення не може бути відправлено, так як одержувач ніколи не здійснював жодної транзакції.',
			203: 'The account cannot be converted because not all cosignatories are known. They either need to be in the same wallet or have made at least one transaction.',
			305: 'The NEM Infrastructure Server (NIS) is not available.\n\nTry to restart the NEM software.\n\nIf you are using a remote NIS, check your configured host for typing errors or use another remote NIS.',
			306: 'Сталася помилка, не передбачувана командою розробникiв. Вибачте за це, та повторiть спробу ще раз. В іншому випадку, будь ласка, відкрийте питання у співтовариствi NEM NIS/NCC.',
			400: 'Деякі параметри відсутні, або недійснi.',
			401: 'This operation cannot be completed because it might leak a private key by sending it to a remote NIS.',
			404: 'Запитаний ресурс не знайдено.',
			500: 'Не вдалося зберегти файл налаштувань.',
			600: 'NCC вимагає запущений сервер NIS для надсилання та отримання транзакцiй з NEM cloud. Будь ласка скористайтеся меню NCC для запуску локального вузла.',
			601: 'Сервер NIS вже запущено. Завантажити NIS вдруге неможливо.',
			602: 'Almost ready. NEM Infrastructure Server is currently loading blocks. Wallet will be functional when db is fully loaded.',
			699: 'Maximum number of harvesters allowed on server has been reached.',
			700: ' Акаунт не відповідає основним критеріям для початку харвестiнгу. Для початку генерації блоків на рахунку має бути щонайменьше 10000 XEM.',
			701: 'Встановленний крайній термін вже в минулому. Термін повинен бути в рамках 1-денного періоду.',
			702: 'Встановленний крайній термін занадто далеко в майбутньому. Термін повинен бути в рамках 1-денного періоду.',
			703: 'Your account does not have the right balance to make this transaction.',
			704: 'Вказане текстове повiдомлення занадто велике, щоб бути вiдправленим через мережу NEM. Будь ласка, спробуйте зменшити довжину повідомлення, яке потрібно відправити.',
			705: 'Хеш тразакції вже існує в базі даних або в списку непідтверджених операцій.',
			706: 'Підпис тразакції не може бути перевірений.',
			707: 'Мітка часу транзакції занадто далеко в минулому.',
			708: 'Мітка часу транзакції занадто далеко в майбутньому.',
			709: 'Рахунок невідомий мережi. Рахунок повинен бути частиною щонайменше однієї угоди (відправником або одержувачєм), щоб стати відомим в мережі.',
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
			901: 'При переході в автономний режим сталася помилка.',
			1000: 'The private key and the public key you have provided mismatch.',
			1001: 'The public key and the address you have provided mismatch.',
			1002: 'The address does not belong to the main network.'
		},
		common: {
			success: 'Успiшно',
			unknown: 'Статус невiдомий',
			unknownMessage: 'Ncc did not get response in a timely manner. Transaction might have been sent to the network.<br /><br />Please, check transactions before attempting to make it again.',
			appStatus: {
				nccUnknown: 'NCC status is unknown',
				nccUnavailable: 'NCC не досяжний',
				nccStarting: 'NCC is starting...',
				nisUnknown: 'NIS status is unknown',
				nisUnavailable: 'NIS не досяжний',
				nisStarting: 'NIS is starting...',
				notBooted: 'NIS requires to be booted. Please open your wallet and boot a local node via the popup dialog or configure the auto-boot setting.',
				loading: 'Loading blocks from db, at block: ',
				booting: 'Booting NIS...',
				nisInfoNotAvailable: 'NIS info is not avaiable yet. Trying to retrieve NIS info...',
				synchronizing: 'NIS синхронізується. Блок {{1}}, приблизно. {{2}} днiв.',
				daysBehind: {
					0: 'less than 1 day',
					1: '1 day',
					many: '{{1}} days'
				},
				synchronized: 'NIS is synchronized!',
				noRemoteNisAvailable: 'No remote NIS found in the network, disconnected from internet?'
			},
			addressBook: 'Address book',
			password: 'Пароль',
			passwordValidation: 'Password must not be blank',
			address: 'Address',
			privateLabel: 'Приватна позначка',
			publicLabel: 'Public label',
			noCharge: 'Current account will <b>NOT</b> be charged any fees, multisig account covers them',
			fee: 'Комiсiя',
			justUse: 'Just use',
			dueBy: 'Due by',
			hours: 'hour(s)',
			hoursDue: 'Hours due',
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
			pending: 'Очiкуючи транзакцiї',
			outgoing: 'Вихiднi транзакцiї',
			incoming: 'Вхiднi транзакцiї',
			self: 'Транзакцiї самому собi',
			importance: 'Importance transaction',
			modification: 'Aggregate Modification of Multisig'
		},
		modals: {
			error: {
				title: 'От халепа!',
				caption: 'Помилка {{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Так',
				no: 'Нi'
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
					primaryAccount: 'Primary Account',
					auto: 'Auto boot when a wallet is opened'
				},
				save: 'Save',
				saveSuccess: 'Settings have been saved successfully'
			},
			multisig: {
				title: 'Convert account to multisig',
				multisigAccount: 'Multisig account',
				cosignatories: 'Cosignatories\' addresses',
				labelDesc: 'Цей акаунт позначений як {{1}}',
				nullLabelDesc: 'Цей акаунт не має позначки',
				addCosignatory: '+ Add Cosignatory',
				cancel: 'Cancel',
				convert: 'Convert',
				fee: 'Комiсiя',
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
					to: 'Одержувач',
					amount: 'Кiлькiсть',
					fee: 'Inner Fee',
					deadline: 'Deadline'
				},
				multisigFees: 'Multisig Fees',
				multisigTotal: 'Total',
				sender: 'Cosignatory',
				fee: 'Комiсiя',
				feeValidation: 'Fee must not be less than the minimum fee',
				useMinimumFee: 'Use minimum fee',
				password: 'Пароль',
				passwordValidation: 'Password must not be blank',
				send: 'Вiдправити',
				cancel: 'Cancel',
				sending: 'Sending...',
				successMessage: 'Транзакцiя пройшла успішно!',
				txConfirm: {
					title: 'Confirm Multisig Transaction',
					message: 'Повiдомлення',
					encrypted: 'Зашифроване повiдомлення',
					noMessage: 'Без повiдомлень',

				}
			},
			sendNem: {
				title: 'Відправити XEM',
				sender: 'Вiдправник',
				thisAccount: 'This account',
				labelDesc: 'Цей акаунт позначений як {{1}}',
				nullLabelDesc: 'Цей акаунт не має позначки',
				amount: 'Кiлькiсть',
				recipient: 'Акаунт одержувача',
				recipientValidation: 'Account addresses must be 40 character long excluding dashes',
				message: 'Повiдомлення',
				encrypt: 'Зашифрованне повiдомлення',
				fee: 'Комісія',
				multisigFee: 'Multisig fee',
				feeValidation: 'Fee must not be less than the minimum fee',
				useMinimumFee: 'Use minimum fee',
				password: 'Парольна фраза',
				passwordValidation: 'Password must not be blank',
				send: 'Вiдправити',
				cancel: 'Cancel',
				sending: 'Вiдправлення...',
				successMessage: 'Транзакцiя пройшла успішно!',
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
					title: 'Локальний вузол не був запущений!',
					message: 'Перед тим, як ви зможете вiдправляти XEM, треба завантажити локальний вузол!'
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
				title: 'Iнформацiя',
				ncc: 'NEM Community Client - NCC',
				signer: 'Пiдписувач',
				remoteServer: 'Віддалений сервер',
				local: 'Локальний',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Синхронiзований',
				notSync: 'Не синхронiзований',
				notConnected: 'не підключений до NEM Cloud',
				loading: 'Завантаження...'
			},
			transactionDetails: {
				title: 'Деталi транзакцiї',
				id: 'Блок або ідентифікаційний код транзакцiї',
				hash: 'Хеш транзакцiї',
				type: 'Тип транзакцiї',
				direction: 'Transaction Direction',
				pending: 'В очiкуваннi',
				outgoing: 'Вихiдна',
				incoming: 'Вхiдна',
				self: 'Собi',
				sender: 'Вiдправник',
				multisigAccount: 'Multisig Account',
				issuer: 'Issuer',
				recipient: 'Одержувач',
				remote: 'Remote',
				multisigMessage: 'Signatures present',
				message: 'Повiдомлення',
				noMessage: 'Без повiдомлення',
				encrypted: 'Повiдомлення зашифроване',
				time: 'Час',
				confirmations: 'Пiдтверджень',
				confirmationsUnknown: 'Unknown',
				amount: 'Кiлькiсть',
				fee: 'Комісія',
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
				title: 'Завантажити локальний вузол',
				account: 'Акаунт, з якого буде завантажено локальний вузол',
				noLabel: '<span class=\"null\">&lt;Без позначки&gt;</span>',
				wallet: 'Гаманець',
				node: 'Iм\'я локального вузла',
				boot: 'Завантажити',
				booting: 'Завантаження...',
				warning: 'Boot node warning',
				warningText: 'You\'re trying to boot a node <u>{{2}}</u><br/><br/>Booting remote node is currently impossible from within NCC.',
				warningStatement: 'You have auto-boot set to true and you\'re using remote node {{3}}.<br/><br/>Booting remote node is currently impossible from within NCC',
				warningQuestion: 'Are you sure you want to boot node <u>{{3}}</u> using private key of account {{1}} ({{2}} XEM)?<br><br>This will reveal this account\'s <span class="sublabelWarning">private key</span> to node: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Закрити гаманець',
				message: 'Ви впевнені, що хочете закрити свій гаманець і повернутися до початкової сторінки?'
			},
			createAccount: {
				title: 'Створити новий акаунт',
				label: 'Приватна позначка',
				wallet: 'Гаманець',
				password: 'Пароль файлу гаманця',
				successMessage: 'Акаунт {{1}} {{#2}}({{2}}){{/2}} був успiшно створений!',
				create: 'Створити'
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
				title: 'Додати існуючій акаунт',
				privateKey: 'Приватний ключ акаунта',
				wallet: 'Гаманець',
				password: 'Пароль файлу гаманця',
				successMessage: 'Акаунт {{1}} {{#2}}({{2}}){{/2}} було успiшно додано до гаманця!',
				add: 'Додати',
				label: 'Позначка'
			},
			setPrimary: {
				title: 'Встановити основний акаунт',
				account: 'Акаунт буде встановлено як основний',
				noLabel: '<span class=\"null\">&lt;Без позначки&gt;</span>',
				wallet: 'Гаманець',
				password: 'Пароль файлу гаманця',
				successMessage: 'Акаунт {{1}} {{#2}}({{2}}){{/2}} був встановлений як основний!',
				set: 'Встановити як основний'
			},
			changeWalletName: {
				title: 'Змiнити iм\'я гаманця',
				wallet: 'Поточне iм\'я гаманця',
				newName: 'Нове iм\'я гаманця',
				password: 'Пароль файлу гаманця',
				successMessage: 'Iм\'я гаманця було успiшно змiнено з <em>{{1}}</em> на <em>{{2}}</em>',
				change: 'Змiнити'
			},
			changeWalletPassword: {
				title: 'Змiнити пароль гаманця',
				wallet: 'Гаманець',
				password: 'Дiючий пароль',
				newPassword: 'Новий пароль',
				confirmPassword: 'Підтвердiть новий пароль',
				successMessage: 'Пароль гаманця успiшно змiнено',
				change: 'Змiнити',
				passwordNotMatchTitle: 'ой лишенько!',
				passwordNotMatchMessage: 'Ваш введений пароль і підтвердження пароля не збігаються. Будь ласка, будьте уважнiше!'
			},
			changeAccountLabel: {
				title: 'Змiнити позначку акаунта',
				label: 'Позначка акаунта',
				wallet: 'Гаманець',
				password: 'Пароль файлу гаманця',
				successMessage: 'Акаунт {{1}} тепер позначений як {{2}}',
				change: 'Змiнити'
			},
			removeAccount: {
				title: 'Видалити акаунт',
				account: 'Account',
				label: 'Позначка акаунта',
				wallet: 'Гаманець',
				password: 'Пароль файлу гаманця',
				warning: 'Будь ласка переконайтеся, що на вашому рахунку не залишилося коштiв. В іншому випадку вони будуть втраченi назавжди.',
				successMessage: 'Акаунт {{1}} {{#2}}({{2}}){{/2}} видалено!',
				remove: 'Видалити'
			},
			nisUnavailable: {
				title: 'NIS недосяжний',
				message: 'Від\'єднаний вiд NIS, очікування з\'єднання'
			},
			shutdown: {
				title: 'Закрити програму',
				message: 'Ви впевнені, що хочете закрити клiент NEM?'
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
				add: 'Додати'
			},
			editContact: {
				title: 'Edit contact',
				saveChanges: 'Зберегти зміни'
			},
			removeContact: {
				title: 'Remove contact',
				remove: 'Видалити'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Гаманець був успішно імпортований!',
			nav: {
				start: 'Приступаемо до роботи',
				about: 'Про NEM',
				settings: 'Settings'
			},
			main: {
				leftTitle: 'Новий у мережi <em>NEM</em>?',
				leftButton: 'Створити новий гаманець',
				walletNamePlh: 'Iм\'я гаманця',
				passwordPlh: 'Пароль',
				confirmPasswordPlh: 'Confirm password',
				create: 'Створити',
				creating: 'Creating...',
				rightTitle: 'Вже зареестрованi у мережi <em>NEM</em>?',
				rightButton: 'Вiдкрити мiй гаманець',
				openButton: 'Вiдкрити',
				walletsFound: 'Знайдено <strong>{{1}}</strong> <em>гаманцiв</em>',
				copyright: 'Фото <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC шифрує ваш гаманець',
						description: '<em>Безпека</em> дуже важлива для запобігання крадіжки XEM монет &amp; активiв.'
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
						title: 'Як працює NCC?',
						paragraphs: [
							'<strong>NCC</strong> надає доступ до ваших активів і XEM монет як традиційний гаманець. ви можете:',
							'Для корректної роботи <strong>NCC</strong> вимагає доступу до сервера <strong>NIS</strong>. зазвичай вiн запускається автоматично (встановлюється разом з <strong>NCC</strong>)',
							'Ви також можете налаштувати віддалений доступ до сервера <strong>NIS</strong>.'
						],
						listItems: [
							'Мати декiлька гаманцiв',
							'Визначити кiлька акаунтiв, якi будуть включенi в гаманець'
						]
					},
					{
						title: 'Що таке &#42;NIS?',
						paragraphs: [
							'Цей компонент вiдповiдає за підтримання працездатностi <strong>NEM</strong> cloud.',
							'The more <strong>NIS</strong> there are in the network, the better the security.,',
							'<strong>NIS</strong> є точкою доступу до <strong>NEM</strong> cloud.'
						],
						legend: '<strong>&#42;NIS</strong> розшифровується як <strong>NEM Infrastructure Server</strong>'
					}
				]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Приблизно {{1}} днiв тому',
			lastAccessJustNow: 'Щойно',
			lastAccessTooltip: 'В останне заходили {{1}}',
			primary: 'Головний',
			primaryShort: 'Г',
			noLabel: '<Без позначки>',
			copiedToClipboard: 'Скопійовано!',
			actions: {
				refreshInfo: 'Оновити iнформацiю',
				bootLocalNode: 'Завантажити локальний вузол',
				changeWalletName: 'Змiнити iм\'я гаманця',
				changeWalletPassword: 'Змiнити пароль гаманця',
				mergeWallets: 'Об\'єднати гаманцi',
				exportWallet: 'Експортувати гаманець',
				createAccount: 'Створити новий акаунт',
				createRealAccountData: 'Create real account data',
				verifyRealAccountData: 'Verify real account data',
				showPrivateKey: 'Show Account\'s PRIVATE key',
				showRemotePrivateKey: 'Show Remote Account\'s PRIVATE key',
				viewDetails: 'View Account Details',
				addAccount: 'Додати існуючий акаунт',
				changeAccountLabel: 'Змiнити позначку акаунта',
				setPrimary: 'Встановити основний акаунт',
				removeAccount: 'Видалити акаунт',
				clientInfo: 'Iнформацiя',
				closeWallet: 'Закрити гаманець',
				closeProgram: 'Закрити програму',
				copyClipboard: 'Cкопіювати адресу в буфер обміну',
				copyDisabled: 'Copying an address requires flash',
				convertMultisig: 'Convert other account to multisig'
			},
			nav: [
				'Головна сторiнка',
				'Повiдомлення',
				'Address Book',
				'Транзакцiї',
				'Сгенерованi блоки',
				'Бiржа активiв',
				'Новини',
				'Додатки',
				'Акаунти',
				'Налаштування',
				'Закрити програму'
			],
			bootNodeWarning: 'Локальний вузол повинен бути завантажений, перш ніж ви можете повною мірою використовувати можливості NCC.'
		},
		dashboard: {
			assets: {
				title: 'Вашi активи'
			},
			importance: {
				title: 'Оцінка важливостi',
				unknown: 'Статус невiдомий',
				start: 'Почати харвестiнг (генерацiю блокiв)',
				harvesting: 'Харвестiнг',
				stop: 'Зупинити харвестiнг',
				description: 'Важливість акаунта для NEM cloud',
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
				title: 'Останні транзакцiї',
				sendNem: 'Вiдправити XEM',
				signMultisig: 'SIGN',
				balance: 'Поточний баланс',
				loading: 'Loading balance',
				accountCosignatories: 'Multisig account',
				accountCosignatoriesView: 'view cosignatories',
				vestedBalance: 'Vested Balance',
				syncStatus: '(Блок {{1}}{{#2}} : прибл. {{3}} днів тому{{/2}})',
				notSynced: 'might be inaccurate, NIS not synchronized yet',
				unknown: 'Невiдомо',
				columns: [
					'',
					'Час',
					'Вiдправник/Отримувач',
					'Повiдомлення',
					'',
					'Деталi',
					'Підтвердженнь',
					'Комiсiя',
					'Кiлькiсть'
				],
				noMessage: 'Без повiдомлень',
				encrypted: 'Зашифроване повiдомлення',
				view: 'Переглянути',
				confirmationsUnknown: 'Unknown',
				pending: 'В очiкуваннi',
				seeAll: 'Переглянути всi транзакцiї',
				noTransactions: 'Не було здiйснено жодної транзакцiї'
			},
			nemValue: {
				title: 'Статистика XEM'
			},
			messages: {
				titleTooltip: 'Повiдомлення'
			},
			news: {
				titleTooltip: 'Новини'
			},
			notAvailable: 'Не доступно в альфа-версії'
		},
		transactions: {
			title: 'Транзакцiї',
			sendNem: 'Відправити XEM',
			balance: 'Поточний баланс',
			filters: {
				confirmed: 'Confirmed',
				unconfirmed: 'Unconfirmed',
				incoming: 'Вхiднi',
				outgoing: 'Вихiднi'
			},
			table: {
				columns: [
					'',
					'Час',
					'Вiдправник/Отримувач',
					'Повiдомлення',
					'',
					'Деталi',
					'Підтвердженнь',
					'Комiсiя',
					'Кiлькiсть'
				],
				noMessage: 'Без повiдомлень',
				encrypted: 'Зашифроване повiдомлення',
				view: 'Переглянути',
				confirmationsUnknown: 'Unknown',
				pending: 'В очiкуваннi',
				noTransactions: 'Не було здiйснено жодної транзакцiї',
				loading: 'Завантаження транзакцiй...'
			}
		},
		harvestedBlocks: {
			title: 'Сгенерованi блоки',
			feeEarned: 'Комісійні, отримані за останні 25 сгенерованих блоків',
			unknown: 'Unknown',
			table: {
				columns: [
					'Порядковий номер',
					'Час',
					'Block difficulty',
					'Комiсiя'
				],
				noBlocks: 'Немає сгенерованих блокiв ',
				loading: 'Переглянути попереднi сгенерованi блоки'
			},
			harvesting: {
				unknown: 'Статус невiдомий',
				start: 'Почати харвестiнг (генерацiю блокiв)',
				harvesting: 'Харвестiнг',
				stop: 'Зупинити харвестiнг',
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
			sendNem: 'Відправити XEM',
			edit: 'Edit',
			remove: 'Видалити'
		},
		settings: {
			title: 'Налаштування',
			settings: [
				{
					name: 'Мова'
				}
			],
			save: 'Зберегти зміни',
			saveSuccess: 'Налаштування були успiшно збереженi'
		}
	}
});
