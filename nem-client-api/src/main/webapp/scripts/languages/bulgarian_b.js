define({
	id: 'bg',
	name: 'Български',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Файлът на портфейла не съществува',
			102: 'Портфейлът не е създаден.',
			103: 'Файлът на портфейла е повреден.Моля възстановете файла от копие което сте запазили при създаването на портфейла.',
			104: 'Въведената парола е грешна.',
			105: 'Не е предоставена парола за портфейла.',
			106: 'Преди да започнете работа с портфейла се убедете че той е отворен. За да получите достъп до портфейла въведете паролата за този портфейл.',
			107: 'Портфейла не съдържа този акаунт.',
			108: 'Акаунта не може да бъде премахнат. По всяка вероятност това е така защото акаунта има баланс повече от 0 XEM или акаунта ,който се опитвате да премахнете е главен акаунт. ',
			109: 'Друг портфейл със същото име вече съществува. Моля  изберете друго име на портфейла.',
			110: 'Портфейла вече съдържа този акаунт.',
			111: 'Името на портфейла е директория.',
			112: 'Типът на файла на портфейла е некоректен.',
			113: 'Портфейла не може да бъде изтрит.',
			121: 'Адрес бук файла не съществува.',
			122: 'Адрес букът не беше създаден.',
			123: 'Адрес бук файлът е повреден.Моля възстановете вашият адрес бук от резервното копие.',
			124: 'Предоставената парола на адрес бука не е правилна.',
			125: 'Не е предоставена парола на адрес бука.',
			127: 'Адрес бука не съдържа този адрес.',
			128: 'Предоставения адрес е невалиден',
			129: 'Друг адрес бук със същото име вече съществува.Моля изберете друго име на адрес бука.',
			130: 'Адрес бука вече съдържа този адрес.',
			131: 'Името на адрес бука е директория.',
			132: 'Типът на адрес бук файла е некоректен.',
			133: 'Адрес букът не може да бъде изтрит.',
			202: 'Криптирано съобщение не може да бъде изпратено понеже получателя до сега не е извършил нито една транзакция и няма публичен ключ.',
			203: 'Акаунта не може да бъде преобразуван защото не са известни всички косигнатури.Те трябва да са или в същия портфейл или да са направили поне една транзакция.',
			305: 'NEM Infrastructure Server е недостъпен.Опитайте да рестартирате NEM програмата.Ако ползвате отдалечен NIS,проверете вашият конфигуриран хост за правописни грешки или ползвайте друг отдалечен NIS.',
			306: 'Възникна непредвидена грешка.Извиняваме се за това ,опитайте отново може това да помогне.В противен случай се обърнете за помощ към NEM NIS/NCC community.',
			400: 'Някой параметри липсват или са некоректни.',
			401: 'Тази операция не може да бъде завършена защото може да компрометира частният ви ключ като го изпрати до отдалечения NIS',
			404: 'Търсеният ресурс не може да бъде намерен.',
			500: 'Възникна грешка, която не е предвидена от разработчиците. Извиняваме се за това, може би повторен опит може да помогне. В противен случай се обърнете за помощ към NEM NIS/NCC community.',
			600: 'За получаване и изпращане на транзакции NEM Infrastructure Server (NIS) сървъра трябва да бъде рестартиран.Моля използвайте менюто на NCC за рестартиране на локалния възел.',
			601: 'NEM Infrastructure Server (NIS) възела е вече стартиран.',
			602: 'Почти е готово. NEM Infrastructure Server понастоящем зарежда блоковете.\nПортфейла ще функционира когато db се зареди напълно.',
			699: 'Максималния брой на генериращите адреси позволени от сървъра беше превишен.',
			700: 'Предоставения акаунт не удовлетворява основните критерии за генерация.Основно това е свързано с количеството XEM в сметката.Генерацията започва поне с 10000 XEM.',
			701: 'Предоставеният срок е в миналото. Срокът трябва да бъде предоставен в рамките на 1-дневен период.',
			702: 'Предоставеният срок е твърде далеч в бъдещето. Срокът трябва да бъде в рамките на еднодневен период от време.',
			703: 'Вашият акаунт няма правилния баланс за да се извърши тази транзакция. ',
			704: 'Предоставеното съобщение е прекалено голямо за да бъде изпратено.Моля опитайте да съкратите дължината на съобщението ,което искате да изпратите.',
			705: 'Транзакцията вече съществува в базата данни или в листа на непотвърдените транзакции.',
			706: 'Подписът на сделката не може да бъде проверен.',
			707: 'Времевата отметка на транзакцията е много далеч в миналото.',
			708: 'Времевата отметка на транзакцията е много далеч в бъдещето.',
			709: 'Неизвестен акаунт. Акаунта трябва да е част от поне една транзакция (входяща или изходяща) за да бъде разпознат от мрежата.',
			710: 'Транзакцията беше отхвърлена защото кеша на транзакциите е препълнен.По голямата такса увеличава шанса транзакцията да бъде приета.',
			730: 'Важната трансфер транзакция (делегирано генериране)е в конфликт със съществуващата транзакция.',
			731: 'Делегирания генериращ акаунт няма нулев баланс и не може да бъде използван.',
			732: 'Важният трансфер е отхвърлен.Вече съществува чакаща важна трансфер операция.',
			733: 'Делегираното генериране е вече активно.',
			734: 'Делегираното генериране НЕ е активно.Не може да се деактивира.',
			740: 'Транзакцията не е позволена за мултисигнатурен акаунт.',
			741: 'Мултисигнатурния подпис на транзакцията е отхвърлен.Този акаунт не е косигнатурен на мултисигнатурния акаунт.',
			742: 'Мултисигнатурния подпис на транзакцията е отхвърлен.Асоциираната мултисигнатурна транзакция е неизвестна за NEM мрежата.',
			743: 'Модификацията на мултисигнатурния акаунт е отхвърлена.Един от добавените акаунти е вече косигнатурен.',
			901: 'Възникна грешка при преминаване в режим офлайн.',
			1000: 'Частният ключ и публичният ключ ,който въведохте са разменени.',
			1001: 'Публичният ключ и адресът ,който въведохте са разменени.',
			1002: 'Адресът не принадлежи към основната мрежа'
		},
		common: {
			success: 'Успешно',
			unknown: 'Неизвестен статус',
			unknownMessage: 'Ncc не може да получи отговор по временни причини. Транзакцията може да е изпратена в мрежата.<br /><br />Моля проверете транзакцията преди да опитате да я извършите отново.',
			appStatus: {
				nccUnknown: 'NCC статуса е неизвестен',
				nccUnavailable: 'NCC е недостъпен',
				nccStarting: 'NCC стартира...',
				nisUnknown: 'NIS статуса е неизвестен',
				nisUnavailable: 'NIS е недостъпен',
				nisStarting: 'NIS стартира...',
				notBooted: 'NIS трябва да бъде презареден. Моля отворете портфейла и презаредете локалния възел чрез изплуващия прозорец или конфигурирайте ауто зареждащите настройки',
				loading: 'Зареждане на блоковете от db до блок: ',
				booting: 'Зарежда NIS...',
				nisInfoNotAvailable: 'NIS инфо не е все още на разположение.Опитвам се да получа отново NIS инфо...',
				synchronizing: 'NIS се синхронизира. В блок {{1}}, около {{2}} назад.',
				daysBehind: {
					0: 'по малко от 1 ден',
					1: '1 ден',
					many: '{{1}} дни'
				},
				synchronized: 'NIS е синхронизиран!',
				noRemoteNisAvailable: 'Не е намерен отдалечен NIS в мрежата,изключен от интернет?'
			},
			addressBook: 'Адрес бук',
			password: 'Парола',
			passwordValidation: 'Паролата не трябва да е празна',
			address: 'Адрес',
			privateLabel: 'Частна маркировка',
			publicLabel: 'Публична маркировка',
			noCharge: 'Този акаунт <b>Няма</b> да бъде обложен с никакви такси, мултисигнатурният акаунт ги покрива.',
			fee: 'Такса',
			justUse: 'Просто използвайте',
			dueBy: 'Време до края',
			hours: 'час(а)',
			hoursDue: 'Време до края (часове)',
			hoursDueExplanation: 'Ако транзакцията не се включи до времето оставащо до края и тя ще бъде отхвърлена.',
			closeButton: 'Затвори'
		},
		transactionTypes: [
			'ПРЕХВЪРЛИ ТРАНЗАКЦИЯТА',
			'ВАЖНО ПРЕХВЪРЛЯНЕ',
			'МОДИФИКАЦИЯ НА МУЛТИСИГНАТУРНИЯ АКАУНТ',
			'МУЛТИСИГНАТУРНА ТРАНЗАКЦИЯ'
		],
		transactionDirections: {
			pending: 'Чакаща транзакция',
			outgoing: 'Изходяща транзакция',
			incoming: 'Входяща транзакция',
			self: 'Собственна транзакция',
			importance: 'Важна транзакция',
			modification: 'Сумарна Модификация на Мултисигнатурата'
		},
		modals: {
			error: {
				title: 'Oops!',
				caption: 'Грешка {{1}}'
			},
			yikes: {
				title: 'Олеле!',
				caption: 'Инфо код {{1}}'
			},
			confirmDefault: {
				yes: 'Да',
				no: 'Не'
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
				title: 'Настройки',
				language: {
					label: 'Език'
				},
				remoteServer: {
					tabTitle: 'Отдалечен сървър',
					protocol: 'Протокол',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Хост',
					port: 'Порт',
					defaultPort: 'Използвайте порта по подразбиране.'
				},
				autoBoot: {
					tabTitle: 'Авто зареждане',
					name: 'Име на възела',
					account: 'Акаунт',
					primaryAccount: 'Главен Акаунт',
					auto: 'Авто зареждане когато се отвори портфейла'
				},
				save: 'Запази',
				saveSuccess: 'Настройките бяха успешно запазени'
			},
			multisig: {
				title: 'Превърни акаунта в мултисигнатурен',
				multisigAccount: 'Мултисигнатурен акаунт',
				cosignatories: 'Косигнатурни адреси',
				labelDesc: 'Този акаунт е маркиран като {{1}}',
				nullLabelDesc: 'Този акаунт няма маркировка',
				addCosignatory: '+ Добави косигнатура',
				cancel: 'Отмени',
				convert: 'Конвертирай',
				fee: 'Такса',
				feeValidation: 'Таксата трябва да бъде не по малка от минималната',
				useMinimumFee: 'Ползвай минимална такса',
				txConfirm: {
					title: 'Потвърди Преобразуването в Мултисигнатурен Акаунт',
					total: 'Общо',

				},
				warning: 'Мултисигнатурния акаунт е в списъка на косигнатурите.Това ще предизвика блокиране на акаунта и прекъсване досъпа до фонда му.Вие навярно <b>НЕ ИСКАТЕ </b> да направите това.'
			},
			signMultisig: {
				title: 'Подпиши мултисигнатурна транзакция',
				original: {
					from: 'Мултисигнатурен акаунт',
					to: 'Получател',
					amount: 'Сума',
					fee: 'Вътрешна такса',
					deadline: 'Краен срок'
				},
				multisigFees: 'Мултисигнатурна такса',
				multisigTotal: 'Общо',
				sender: 'Косигнатура',
				fee: 'Такса',
				feeValidation: 'Таксата не трябва да бъде по малка от минималната',
				useMinimumFee: 'Ползвай минимална такса',
				password: 'Парола',
				passwordValidation: 'Паролата не може да бъде празна',
				send: 'Изпрати',
				cancel: 'Отмени',
				sending: 'Изпращам...',
				successMessage: 'Транзакцията беше изпратена успешно!',
				txConfirm: {
					title: 'Потвърди Мултисигнатурната Транзакция',
					message: 'Съобщение',
					encrypted: 'Съобщението е криптирано',
					noMessage: 'Няма съобщение',

				}
			},
			sendNem: {
				title: 'Изпрати XEM',
				sender: 'Изпращач',
				thisAccount: 'Този акаунт',
				labelDesc: 'Този акаунт е маркиран като {{1}}',
				nullLabelDesc: 'Този акаунт не е маркиран',
				amount: 'Сума',
				recipient: 'Акаунт на Получателя',
				recipientValidation: 'Акаунт адреса трябва да е 40 символа дълъг като се изключат тиретата',
				message: 'Съобщение',
				encrypt: 'Криптирано съобщение',
				fee: 'Такса',
				multisigFee: 'Мултисигнатурна такса',
				feeValidation: 'Таксата не трябва да бъде по малка от минималната такса',
				useMinimumFee: 'Ползвай минималната такса',
				password: 'Парола',
				passwordValidation: 'Паролата не трябва да е празна',
				send: 'Изпрати',
				cancel: 'Отказ',
				sending: 'Изпращам...',
				successMessage: 'Транзакцията беше изпратена успешно!',
				txConfirm: {
					title: 'Потвърдете транзакцията',
					amount: 'Сума',
					to: 'До',
					total: 'Общо',
					message: 'Съобщение',
					encrypted: 'Съобщението е криптирано',
					noMessage: 'Без съобщение',
					cancel: 'Отмени',
					confirm: 'Потвърди',
					sending: 'Изпращам...'
				},
				notBootedWarning: {
					title: 'Възелът не бе стартиран!',
					message: 'Локалният възел трябва да бъде стартиран преди да можете да изпратите XEM'
				},
				bootingWarning: {
					title: 'Възелът се стартира',
					message: 'Моля почакайте докато възелът се стартира за да изпратите вашата транзакция.'
				},
				loadingWarning: {
					title: 'Зареждане на db'
				}
			},
			clientInfo: {
				title: 'Клиент инфо',
				ncc: 'NEM Community Client - NCC',
				signer: 'Притежател на подписа',
				remoteServer: 'Отдалечен сървър',
				local: 'Локален',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Синхронизиран',
				notSync: 'Не синхронизиран',
				notConnected: 'Не съединен с NEM облака',
				loading: 'Зареждане...'
			},
			transactionDetails: {
				title: 'Детайли на транзакцията',
				id: 'ID',
				hash: 'Hash',
				type: 'Тип на транзакцията',
				direction: 'Посока на Транзакцията',
				pending: 'В очакване',
				outgoing: 'Изходящи',
				incoming: 'Входящи',
				self: 'Собственна',
				sender: 'Изпращач',
				multisigAccount: 'Мултисигнатурен Акаунт',
				issuer: 'Емитент',
				recipient: 'Получател',
				remote: 'Отдалечен',
				multisigMessage: 'Сигнатури на лице',
				message: 'Съобщение',
				noMessage: 'Няма съобщение',
				encrypted: 'Съобщението е криптирано',
				time: 'Време на създаване',
				confirmations: 'Потвърждения',
				confirmationsUnknown: 'Неизвестни',
				amount: 'Сума',
				fee: 'Такса',
				innerFee: 'Вътрешна такса',
				multisigFees: 'Мултисигнатурни такси',
				cosignatory: 'Косигнатура'
			},
			accountDetails: {
				title: 'Детайли на акаунта',
				address: 'Адрес',
				label: 'Маркировка',
				noLabel: 'Без маркировка',
				add: 'Прибави в адрес бука',
				remove: 'Премахни от адрес бука',
				balance: 'Баланс',
				vested: 'утвърдени',
				importance: 'Важност',
				publicKey: 'Публичен ключ',
				noPublicKey: 'Няма публичен ключ',
				harvestedBlocks: 'Генерирани блокове',
				close: 'Затвори'
			},
			bootLocalNode: {
				title: 'Стартирайте локалния възел.',
				account: 'Акаунт за стартиране на локалния възел.',
				noLabel: '<span class=\"null\">&lt;Не маркиран&gt;</span>',
				wallet: 'Портфейл',
				node: 'Име на локалния възел',
				boot: 'Старт',
				booting: 'Стартиране...',
				warning: 'Предупреждение за зареждането на възела',
				warningText: 'Вие се опитвате да рестартирате възела <u>{{2}}</u><br/><br/>Рестартирането на отдалечен възел е по принцип невъзможно от NCC.',
				warningStatement: 'Вие имате аутостартиране зададено ,като истина ,а ползвате отдалечен възел {{3}}.<br/><br/>Рестартирането на отдалечен възел е по принцип невъзможно от NCC.',
				warningQuestion: 'Сигурни ли сте ,че искате да заредите възела <u>{{3}}</u> ползвайки частния ключ на акаунта {{1}} ({{2}} XEM)?<br><br>Това ще разкрие на този акаунт <span class=\"sublabelWarning\">частния ключ</span> във възела: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Затваряне на портфейла',
				message: 'Сигурни ли сте че искате да затворите портфейла и да се върнете на главната страница?'
			},
			createAccount: {
				title: 'Създайте нов акаунт',
				label: 'Частна маркировка',
				wallet: 'Портфейл',
				password: 'Парола на портфейла',
				successMessage: 'Акаунтът {{1}} {{#2}}({{2}}){{/2}} беше създаден!',
				create: 'Създай'
			},
			showPrivateKey: {
				title: 'Покажи ЧАСТНИЯТ Ключ на акаунта',
				message: 'Това ще покаже частният ключ на акаунта на екрана ,като текст.В предвид ,че може да имате някъкъв малуер в системата това може да бъде опасна операция.Сигурни ли сте че искате да го направите?',
				publicKey: 'Публичен ключ',
				privateKey: 'Частен ключ',
				show: 'Покажи ключа'
			},
			showRemotePrivateKey: {
				title: 'Покажи ЧАСТНИЯТ Ключ на Отдалечения Акаунт',
				message: 'Това ще покаже частният ключ на отдалечения акаунт на екрана ,като текст.В предвид ,че може да имате някъкъв малуер в системата това може да бъде опасна операция.Сигурни ли сте че искате да го направите?',

			},
			addAccount: {
				title: 'Добавете съществуващ акаунт',
				privateKey: 'Частен ключ на акаунта',
				wallet: 'Портфейл',
				password: 'Парола на портфейла',
				successMessage: 'Акаунтът {{1}} {{#2}}({{2}}){{/2}} беше добавен към портфейла!',
				add: 'Добави',
				label: 'Маркировка'
			},
			setPrimary: {
				title: 'Задаване като главен акаунт',
				account: 'Задайте като главен акаунт',
				noLabel: '<span class=\"null\">&lt;Без маркировка&gt;</span>',
				wallet: 'Портфейл',
				password: 'Парола на портфейла',
				successMessage: 'Акаунтът {{1}} {{#2}}({{2}}){{/2}} беше зададен като главен!',
				set: 'Задай като главен'
			},
			changeWalletName: {
				title: 'Сменете името на портфейла',
				wallet: 'Настоящо име на портфейла',
				newName: 'Ново име на портфейла',
				password: 'Парола на портфейла',
				successMessage: 'Името на портфейла е успешно сменено от <em>{{1}}</em> на <em>{{2}}</em>',
				change: 'Смени'
			},
			changeWalletPassword: {
				title: 'Сменете паролата на портфейла',
				wallet: 'Портфейл',
				password: 'Текуща парола',
				newPassword: 'Нова парола',
				confirmPassword: 'Повторете новата парола',
				successMessage: 'Паролата на портфейла беше успешно сменена',
				change: 'Смени',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: 'Въведената от вас парола и потвърдената парола не съвпадат.Моля убедете се ,че правилно сте написали новата парола.'
			},
			changeAccountLabel: {
				title: 'Сменете маркировката на акаунта',
				label: 'Маркировка на акаунта',
				wallet: 'Портфейл',
				password: 'Парола на портфейла',
				successMessage: 'Акаунтът {{1}} сега е маркиран като {{2}}',
				change: 'Смени'
			},
			removeAccount: {
				title: 'Премахнете акаунта',
				account: 'Акаунт',
				label: 'Маркировка на акаунта',
				wallet: 'Свързан портфейл',
				password: 'Парола на портфейла',
				warning: 'Моля уверете се че нямате XEM в акаунта преди да го премахнете иначе те ще бъдат изгубени завинаги.',
				successMessage: 'Акаунтът {{1}} {{#2}}({{2}}){{/2}} беше премахнат!',
				remove: 'Премахни'
			},
			nisUnavailable: {
				title: 'NIS е недостъпен',
				message: 'NIS е прекъснат,очакване на включване'
			},
			shutdown: {
				title: 'Затворете програмата',
				message: 'Сигурни ли сте че искате да затворите NEM Community Client?'
			},
			activateRemote: {
				title: 'Активирайте Делегираното Генериране',
				wallet: 'Портфейл',
				account: 'Акаунт',
				password: 'Парола на портфейла',
				activate: 'Активирай',
				warning: 'Предупреждение',
				warningText: 'Активирането ще отнеме 6 часа (360 блока). Активирането НЯМА да стартира генерирането автоматично.'
			},
			deactivateRemote: {
				title: 'Деактивирай Делегираното Генериране',
				wallet: 'Портфейл',
				account: 'Акаунт',
				password: 'Парола на портфейла',
				deactivate: 'Деактивирай',
				warning: 'Предупреждение',
				warningText: 'Деактивирането ще отнеме 6 часа (360 блока).'
			},
			startRemote: {
				title: 'Старт на Делегираното Генериране',
				wallet: 'Портфейл',
				account: 'Акаунт',
				password: 'Парола на портфейла',
				start: 'Старт'
			},
			stopRemote: {
				title: 'Стоп на Делегираното Генериране',
				wallet: 'Портфейл',
				account: 'Акаунт',
				password: 'Парола на портфейла',
				stop: 'Стоп'
			},
			logoutWarning: {
				leavePage: 'Вие напускате вашия портфейл.Запомнете ,че напускайки вашият портфейл по този начин ,някой друг може да има досъп до вашия портфейл от този компютър.За да не се случи това моля излезте от портфейла си ползвайки \"Затвори портфейла\" от падащото меню в горния десен ъгъл преди да затворите таба на браузъра или да станете от компютъра.'
			},
			addContact: {
				title: 'Добави контакт',
				add: 'Добави'
			},
			editContact: {
				title: 'Редактирай контакта',
				saveChanges: 'Запази промените'
			},
			removeContact: {
				title: 'Премахни контакта',
				remove: 'Премахни'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Портфейлът беше успешно импортнат!',
			nav: {
				start: 'Първи стъпки',
				about: 'Относно NEM',
				settings: 'Настройки'
			},
			main: {
				leftTitle: 'Нов за <em>NEM</em>?',
				leftButton: 'Създай нов портфейл',
				walletNamePlh: 'Име на вашия портфейл',
				passwordPlh: 'Парола',
				confirmPasswordPlh: 'Потвърдете паролата',
				create: 'Създай',
				creating: 'Създаване...',
				rightTitle: 'Вече сте <em>NEM</em>ber?',
				rightButton: 'Отворете вашия портфейл',
				openButton: 'Отвори',
				walletsFound: 'Намерени <strong>{{1}}</strong> <em>Портфейл(и)</em>',
				copyright: 'Фотография от <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC криптира твоя портфейл',
						description: '<em>Сигурността на портфейла </em> е най важна за предотвратяването на кражба на XEM монети и активи.'
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
						title: 'Как работи NCC?',
						paragraphs: [
							'<strong>NCC</strong> предоставя достъп до вашите активи и XEM като обикновен портфейл.Вие можете',
							'<strong>NCC</strong> изисква достъп до <strong>NIS</strong> сървър за да може да работи.Стандартно е да има локален сървър и той трябва да е активен(той се инсталира заедно <strong>NCC</strong>)',
							'Вие също може да конфигурирате достъп до отдалечен <strong>NIS</strong>.'
						],
						listItems: [
							'Да имате няколко портфейла',
							'Да дефинирате няколко акаунта да се съдържат в един портфейл.'
						]
					},
					{
						title: 'Какво е &#42;NIS?',
						paragraphs: [
							'Този компонент отговаря за функционирането на <strong>NEM</strong> облака.',
							'Колкото повече <strong>NIS</strong> има в мрежата толкова по добра е сигурността и.,',
							'<strong>NIS</strong> това е точката за достъп за <strong>NEM</strong> облака.'
						],
						legend: '<strong>&#42;NIS</strong> се разшифрова <strong>NEM Infrastructure Server</strong>'
					}
				]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Около {{1}} дни назад',
			lastAccessJustNow: 'Точно сега',
			lastAccessTooltip: 'Последният достъп е бил {{1}}',
			primary: 'Главен',
			primaryShort: 'Г',
			noLabel: '<Без маркировка>',
			copiedToClipboard: 'Адресът беше копиран в клипборда!',
			actions: {
				refreshInfo: 'Обновяване на информацията',
				bootLocalNode: 'Стартиране на локалния възел',
				changeWalletName: 'Промяна името на портфейла',
				changeWalletPassword: 'Промяна паролата на портфейла',
				mergeWallets: 'Обединяване на портфейли',
				exportWallet: 'Експорт на портфейла',
				createAccount: 'Създаване на нов акаунт',
				createRealAccountData: 'Създайте данните на реалния акаунт',
				verifyRealAccountData: 'Проверете данните на реалния акаунт',
				showPrivateKey: 'Покажи ЧАСТНИЯТ ключ на акаунта',
				showRemotePrivateKey: 'Покажи ЧАСТНИЯТ ключ на отдалечения акаунт',
				viewDetails: 'Виж Детайлите на Акаунта',
				addAccount: 'Добавяне на съществуващ акаунт',
				changeAccountLabel: 'Промяна на маркировката на акаунта',
				setPrimary: 'Задай като главен акаунт',
				removeAccount: 'Премахни акаунта',
				clientInfo: 'Информация за клиента',
				closeWallet: 'Затвори портфейла',
				closeProgram: 'Затвори програмата',
				copyClipboard: 'Копирай адреса в клипборда',
				copyDisabled: 'Копирането на аддрес изисква флаш',
				convertMultisig: 'Превърни друг акаунт в мултисигнатурен'
			},
			nav: [
				'Панел за управление',
				'Съобщения',
				'Адрес Бук',
				'Транзакции',
				'Генерирани блокове',
				'Обмен на активи',
				'Новини',
				'Приложения',
				'Акаунти',
				'Настройки',
				'Затворете програмата'
			],
			bootNodeWarning: 'За пълното функциониране на NCC е нужно локалният възел да се рестартира.'
		},
		dashboard: {
			assets: {
				title: 'Вашите активи'
			},
			importance: {
				title: 'Важен резултат',
				unknown: 'Неизвестен статус',
				start: 'Старт на локалното генериране',
				harvesting: 'Генериране',
				stop: 'Стоп на локалното генериране',
				description: 'Важност на акаунта за NEM облака',
				remoteHarvest: {
					activate: 'Активирайте делегираното генериране',
					activating: 'Активиране делегираното генериране...',
					active: 'Делегираното генериране е активно',
					deactivate: 'Деактивирайте делегираното генериране',
					deactivating: 'Деактивиране делегираното генериране...',
					startRemoteHarvesting: 'Старт на делегираното генериране',
					remotelyHarvesting: 'Отдалечено генериране',
					stopRemoteHarvesting: 'Стоп на делегираното генериране'
				}
			},
			transactions: {
				title: 'Скорошни транзакции',
				sendNem: 'Изпрати XEM',
				signMultisig: 'Подпиши',
				balance: 'Текущ баланс',
				loading: 'Зареждане баланса',
				accountCosignatories: 'Мултисигнатурен акаунт',
				accountCosignatoriesView: 'виж косигнатурите',
				vestedBalance: 'Утвърден Баланс',
				syncStatus: '( Блок {{1}}{{#2}} : около {{3}} дена на зад {{/2}})',
				notSynced: 'може да е неточен, NIS не е синхронизиран все още',
				unknown: 'неизвестно',
				columns: [
					'',
					'Време',
					'Изпращач/Получател',
					'Съобщение',
					'',
					'Детайли',
					'Потвърждения',
					'Такса',
					'Сума'
				],
				noMessage: 'Няма съобщение',
				encrypted: 'Съобщението е криптирано',
				view: 'Преглед',
				confirmationsUnknown: 'Неизвестни',
				pending: 'В очакване',
				seeAll: 'Виж всички транзакции',
				noTransactions: 'Не е направена нито една транзакция все още'
			},
			nemValue: {
				title: 'XEM статистически стойности'
			},
			messages: {
				titleTooltip: 'Съобщения'
			},
			news: {
				titleTooltip: 'Новини'
			},
			notAvailable: 'Още е недостъпно в бета версията'
		},
		transactions: {
			title: 'Транзакции',
			sendNem: 'Изпрати XEM',
			balance: 'Текущ баланс',
			filters: {
				confirmed: 'Потвърдени',
				unconfirmed: 'Непотвърдени',
				incoming: 'Входящи',
				outgoing: 'Изходящи'
			},
			table: {
				columns: [
					'',
					'Време',
					'Изпращач/Получател',
					'Съобщение',
					'',
					'Детайли',
					'Потвърждения',
					'Такса',
					'Сума'
				],
				noMessage: 'Няма съобщение',
				encrypted: 'Съобщението е криптирано',
				view: 'Преглед',
				confirmationsUnknown: 'Неизвестни',
				pending: 'В очакване',
				noTransactions: 'Не е направена нито една транзакция все още',
				loading: 'Зареждане на още транзакции...'
			}
		},
		harvestedBlocks: {
			title: 'Генерирани блокове',
			feeEarned: 'Такси събрани от последните 25 генерирани блока',
			unknown: 'Неизвестно',
			table: {
				columns: [
					'Височина',
					'Време',
					'Блок трудност',
					'Такса'
				],
				noBlocks: 'Няма генерирани блокове все още',
				loading: 'Зареждане на още генерирани блокове'
			},
			harvesting: {
				unknown: 'Неизвестен статус',
				start: 'Старт на локалното генериране ',
				harvesting: 'Генериране',
				stop: 'Стоп на локалното генериране',
				remoteHarvest: {
					startRemoteHarvesting: 'Старт на делегираното генериране',
					stopRemoteHarvesting: 'Стоп на делегираното генериране'
				}
			}
		},
		addressBook: {
			title: 'Адрес бук',
			addContact: 'Добави контакт',
			table: {
				columns: [
					'Адрес на акаунта',
					'Частна маркировка',
					'Публична маркировка'
				],
				noContacts: 'Няма контакти във Вашия адрес бук'
			},
			noLabel: 'Няма маркировка',
			sendNem: 'Изпрати XEM',
			edit: 'Редактирай',
			remove: 'Премахни'
		},
		settings: {
			title: 'Настройки',
			settings: [
				{
					name: 'Език'
				}
			],
			save: 'Запази промените',
			saveSuccess: 'Настройките бяха успешно запазени'
		}
	}
});
