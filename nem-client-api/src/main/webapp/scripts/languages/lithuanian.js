define({
	id: 'lt',
	name: 'Lietuviškai',
	texts: {
		preferences: {
			thousandSeparator: ' ',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Piniginės byla neegzistuoja.',
			102: 'Piniginė nesukurta.',
			103: 'Piniginės byla yra sugadinta. Prašome atstatyti Jūsų piniginę iš atsarginės kopijos, kurią Jūs turėjote susikurti, kai kūrėte naują piniginę arba pridėjote naują sąskaitą į ją.',
			104: 'Pateiktas slaptažodis netinka. Tikėkimes Jūs galite atsiminti teisingą slaptažodį. Jei jį praradote, jis negali būti atkurtas!',
			105: 'Piniginės slaptažodis nepateiktas.',
			106: 'Prieš pradedant darbą su pinigine, ji turi būti atidaryta. Norint atidaryti piniginę, Jūs turite įvesti piniginės slaptažodį.',
			107: 'Piniginėje nėra šios sąskaitos',
			108: 'Sąskaita negali būti pašalinta. Panašu, kad sąskaitoje yra daugiau kaip 0 XEM arba ši sąskaita yra Jūsų pagrindinė sąskaita.',
			109: 'Jau egzistuoja piniginė su tokiu pavadinimu. Prašome pasirinkti kitą piniginės pavadinimą.',
			110: 'Piniginėje jau yra ši sąskaita.',
			111: 'Piniginės pavadinimas yra direktorija.',
			112: 'Piniginės bylos plėtinys yra neteisingas.',
			113: 'Piniginė negali būti pašalinta.',
			121: 'Adresų knygos byla neegzistuoja.',
			122: 'Adresų knyga nesukurta/',
			123: 'Adresų knygos byla yra sugadinta. Prašome atstatyti ją iš atsarginės kopijos.',
			124: 'Įvestas adresų knygos slaptažodis neteisingas.',
			125: 'Neįvestas adresų knygos slaptažodis.',
			127: 'Adresų knygoje nėrą šio adreso.',
			128: 'Pateiktas adresas yra neteisingas.',
			129: 'Kita adresų knyga su tokiu pavadinimu jau egzistuoja. Prašome pasirinkti kitą adresų knygos pavadinimą.',
			130: 'Adresų knygoje jau yra šis adresas.',
			131: 'Adresų knygos pavadinimas yra direktorija.',
			132: 'Adresų knygos bylos plėtinys yra neteisingas.',
			133: 'Adresų knyga negali būti ištrinta.',
			202: 'Nėra viešojo rakto',
			203: 'The account cannot be converted because not all cosignatories are known. They either need to be in the same wallet or have made at least one transaction.',
			305: 'NEM Infrastruktūros serveris (NIS) nepaleistas.\n\nBandykite paleisti iš naujo NEM programą.\n\nJei Jūs naudojate nuotolinį NIS, pasitikrinkite ar nepadarėte rašybos klaidų arba naudokite kitą nuotolinį NIS.',
			306: 'Įvyko klaida, kurios kūrėjai nenumatė. Atsiprašome, bet gal paleidimas iš naujo padės. Kitu atveju, praneškite apie tai NEM NIS/NCC bendruomenei',
			400: 'Trūksta kai kurių parametrų',
			401: 'Ši operacija negali būti atlikta, nes jos metu, Jūsų privatus raktas gali būti atskleistas, siunčian jį į NIS',
			404: 'Užklausos duomenys nerasti.',
			500: 'Nepavyko užsaugoti konfigūracijos bylos',
			600: 'NCC reikia, kad NIS serveris būtų paleistas, norint atlikti siuntimo ir gavimo transakcijas. Prašome naudoti NCC meniu ir paleisti vietinį prieigos tašką.',
			601: 'NIS prieigos taškas jau paleistas. Antrą kartą jį paleisti neįmanoma.',
			602: 'Beceik pasiruošta. NEM Infrastruktūros serveris šiuo metu apdoroja blokus. Piniginė pilnai funkcionuos, kai duomenų bazė bus pilnai užkrauta.',
			699: 'Pasiektas maksimalus galimų \'kasėjų\' kiekis serveryje.',
			700: 'Pateikta sąskaita neatitinka pagrindinių kriterijų, norint \'kasti\'. Pagrinde, tai susiję su XEM kiekiu Jūsų sąskaitoje. \'Kasimas\' prasideda tik turint ne mažiau 10000 XEM.',
			701: 'Pateiktas galutinis terminas yra praeityje. Galutinis terminas turi būti 1 dienos bėgyje.',
			702: 'Pateiktas galutinis terminas yra per toli ateityje. Galutinis terminas turi būti ne daugiau kaip viena diena.',
			703: 'Your account does not have the right balance to make this transaction.',
			704: 'Pateikta žinutė yra per didelė, kad ją išsiųsti. Prašome sutrumpinti žinutę, kurią Jūs norite išsiųsti.',
			705: 'Transakcijos \'hash\' jau yra duomenų bazėje arba nepatvirtintų transakcijų sąraše.',
			706: 'Transakcijos parašas negali būti patikrintas.',
			707: 'Transakcijos laiko žymė yra per toli praeityje.',
			708: 'Transakcijos laiko žymė yra per toli ateityje.',
			709: 'Sąskaita nežinoma. Sąskaita turi turėti bent vieną transakciją (siuntimo ar gavimo), kad būtų žinoma tinkle.',
			710: 'Transakcija buvo atmesta, nes transakcijų kiekis bloke viršijo leistiną kiekį. Didesnis transakcijos mokestis padidina šansus, kad transakcija būtų priimta.',
			730: 'Importance transfer transaction (delegated harvesting) conflicts with existing transaction.',
			731: 'Delegated harvesting account has non zero balance and cannot be used.',
			732: '\'Svarbumo\' perkėlimas atmestas. Jau yra atliekama \'svarbumo\' perkėlimo operacija.',
			733: 'Delegated harvesting is already active.',
			734: 'Delegated harvesting is NOT active. Cannot deactivate.',
			740: 'Transakcija neleidžiama multisig sąskaitai.',
			741: 'Multisig parašo transakcija atmesta. Esama sąskaita neturi parašo teisės multisig sąskaitai. ',
			742: 'Multisig parašo transakcija atmesta. Susijusi multisig transakcija yra nežinoma NEM tinklui.',
			743: 'Multisig sąskaitos modifikacija atmesta. Viena iš pridėtų sąskaitų jau turi parašo teisę.',
			901: 'Įvyko klaida nustatant offline režimą.',
			1000: 'Jūsų pateikti privatus ir viešas raktai neatitinka.',
			1001: 'Jūsų pateiktas viešas raktas ir adresas neatitinka.',
			1002: 'Šis adresas neegzistuoja tinkle.'
		},
		common: {
			success: 'Pavyko',
			unknown: 'Statusas nežinomas',
			unknownMessage: 'Ncc did not get response in a timely manner. Transaction might have been sent to the network.<br /><br />Please, check transactions before attempting to make it again.',
			appStatus: {
				nccUnknown: 'NCC statusas nežinomas',
				nccUnavailable: 'NCC nėra paleistas',
				nccStarting: 'NCC startuoja...',
				nisUnknown: 'NIS statusas nežinomas',
				nisUnavailable: 'NIS nėra paleistas',
				nisStarting: 'NIS startuoja...',
				notBooted: 'NIS turi būti užkrautas. Prašome atsidaryti Jūsų piniginę ir paleisti vietinį prieigos tašką atsidariusiame dialogo lange arba sukonfigūruokite automatinį paleidimą nustatymuose.',
				loading: 'Apdorojami blokai iš duomenų bazės, esama bloke:',
				booting: 'NIS kraunasi...',
				nisInfoNotAvailable: 'NIS informacijos kolkas nėra. Bandoma išgauti informaciją apie NIS...',
				synchronizing: 'NIS sinchronizuojasi. Dabartinis blokas yra {{1}}, liko dar {{2}} .',
				daysBehind: {
					0: 'mažiau kaip 1 diena',
					1: '1 diena',
					many: '{{1}} dienos'
				},
				synchronized: 'NIS susisinchronizavęs!',
				noRemoteNisAvailable: 'Nuotolinis NIS nerastas tinkle, atsijungti nuo interneto?'
			},
			addressBook: 'Adresų knyga.',
			password: 'Slaptažodis',
			passwordValidation: 'Slaptažodis negali būti tuščias.',
			address: 'Adresas',
			privateLabel: 'Privati žymė',
			publicLabel: 'Vieša žymė',
			noCharge: 'Šiai sąskaitai <b>NEBUS</b> taikomi jokie mokesčiai, juos padengs multisig sąskaita',
			fee: 'Mokestis',
			justUse: 'Tik naudokite.',
			dueBy: 'Galioja',
			hours: 'valandų',
			hoursDue: 'Liko valandų',
			hoursDueExplanation: 'If the transaction isn\'t included by the deadline, it is rejected.',
			closeButton: 'Close'
		},
		transactionTypes: [
			'PERVEDIMO TRANSAKCIJA',
			'\'SVARBUMO\' PERKĖLIMAS',
			'MULTISIG SĄSKAITOS MODIFIKACIJA',
			'MULTISIG TRANSAKCIJA'
		],
		transactionDirections: {
			pending: 'Atliekama transakcija',
			outgoing: 'Išeinanti transakcija',
			incoming: 'Įeinanti transakcija',
			self: 'Transakcija sau',
			importance: '\'Svarbumo\' perkėlimas',
			modification: 'Multisig modifikacija'
		},
		modals: {
			error: {
				title: 'Oops!',
				caption: 'KLAIDA {{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Taip',
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
				title: 'Nustatymai',
				language: {
					label: 'Kalba'
				},
				remoteServer: {
					tabTitle: 'Nuotolinis serveris',
					protocol: 'Protokolas',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Portas',
					defaultPort: 'Naudokite portą pagal nutylėjimą.'
				},
				autoBoot: {
					tabTitle: 'Automatinis užkrovimas',
					name: 'Prieigos taško pavadinimas',
					account: 'Sąskaita',
					primaryAccount: 'Pagrindinė sąskaita',
					auto: 'Automatiškai užkrauti, kai piniginė atidaryta'
				},
				save: 'Išsaugoti',
				saveSuccess: 'Nustatymai sėkmingai išsaugoti'
			},
			multisig: {
				title: 'Paversti sąskaitą į multisig',
				multisigAccount: 'Multisig saskaita',
				cosignatories: 'Parašų turėtojų adresai',
				labelDesc: 'Ši sąskaita pavadinta kaip {{1}}',
				nullLabelDesc: 'Ši sąskaita neturi pavadinimo',
				addCosignatory: '+ Pridėti parašo teisų turėtoją',
				cancel: 'Nutraukti',
				convert: 'Paversti',
				fee: 'Mokestis',
				feeValidation: 'Mokestis negali būti mažesnis už minimalų',
				useMinimumFee: 'Naudoti minimalų mokestį',
				txConfirm: {
					title: 'Patvirtinkita pavertimą į mulstisig sąskaitą',
					total: 'Viso',

				},
				warning: 'Multisig sąskaita yra parašo teisės turėtojų sąraše. Tai \'užrakins\' Jūsų pinigus joje. Tikriausia Jūs <b>NENORITE</b> to daryti.'
			},
			signMultisig: {
				title: 'Pasirašyti multisig transakciją',
				original: {
					from: 'Multisig sąskaita.',
					to: 'Gavėjas',
					amount: 'Suma',
					fee: 'Vidinis mokestis',
					deadline: 'Termino pabaiga'
				},
				multisigFees: 'Multisig mokesčiai',
				multisigTotal: 'Iš viso',
				sender: 'Parašo teisės turėtojas',
				fee: 'Mokestis',
				feeValidation: 'Mokestis negali būti mažesnis negu minimalus.',
				useMinimumFee: 'Naudoti minimalu mokestį',
				password: 'Slaptažodis',
				passwordValidation: 'Slaptažodis negali būti tuščias',
				send: 'Siųsti',
				cancel: 'Nutraukti',
				sending: 'Siunčiama...',
				successMessage: 'Transakcija atlikta sėkmingai!',
				txConfirm: {
					title: 'Patvirtinti multisig transakciją',
					message: 'Žinutė',
					encrypted: 'Žinutė šifruota',
					noMessage: 'Žinutes nėra',

				}
			},
			sendNem: {
				title: 'Siųsti XEM',
				sender: 'Siuntėjas',
				thisAccount: 'Ši sąskaita',
				labelDesc: 'Ši sąskaita pavadinta kaip {{1}}',
				nullLabelDesc: 'Ši sąskaita neturi pavadinimo',
				amount: 'Suma',
				recipient: 'Gavėjo sąskaita',
				recipientValidation: 'Sąskaitos adresas be brūkšnių turi būti iš 40 simbolių.',
				message: 'Žinutė',
				encrypt: 'Užšifruoti žinutę',
				fee: 'Mokestis',
				multisigFee: 'Multisig fee',
				feeValidation: 'Mokestis turi būti ne mažesnis kaip minimalus.',
				useMinimumFee: 'Naudoti minimalų mokestį.',
				password: 'Slaptažodis',
				passwordValidation: 'Slaptažodis negali būti tuščias.',
				send: 'Siųsti',
				cancel: 'Nutraukti',
				sending: 'Siunčiama...',
				successMessage: 'Transakcija išsiųsta sėkmingai!',
				txConfirm: {
					title: 'Patvirtinti transakciją',
					amount: 'Suma',
					to: 'Į',
					total: 'Viso',
					message: 'Žinutė',
					encrypted: 'Žinutė šifruota',
					noMessage: 'Žinutės nėra',
					cancel: 'Nutraukti',
					confirm: 'Patvirtinti',
					sending: 'Siunčiama...'
				},
				notBootedWarning: {
					title: 'Vietinis prieigos taškas neužkrautas',
					message: 'Norint siųsti XEM, vietinis prieigos taškas turi būti paleistas!'
				},
				bootingWarning: {
					title: 'Vietinis prieigos taškas užkrautas',
					message: 'Norint atlikti transakciją palaukite kol tinklo taškas bus pilnai paleistas.'
				},
				loadingWarning: {
					title: 'Apdorojama duomenų bazė'
				}
			},
			clientInfo: {
				title: 'Kliento informacija',
				ncc: 'NEM Community Client - NCC',
				signer: 'Parašo turėtojas',
				remoteServer: 'Nuotolinis serveris',
				local: 'Vietinis',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Susisinchronizavęs',
				notSync: 'Nesusisinchronizavęs',
				notConnected: 'Neprisijungta prie NEM Cloud',
				loading: 'Kraunasi...'
			},
			transactionDetails: {
				title: 'Transakcijos duomenys',
				id: 'ID',
				hash: 'Hash',
				type: 'Transakcijos tipas',
				direction: 'Transakcijos kryptis',
				pending: 'Kol kas vyksta',
				outgoing: 'Išeinanti',
				incoming: 'Įeinanti',
				self: 'Sau',
				sender: 'Siuntėjas',
				multisigAccount: 'Multisig sąskaita',
				issuer: 'Emitentas',
				recipient: 'Gavėjas',
				remote: 'Nuotolinis',
				multisigMessage: 'Parašai yra',
				message: 'Žinutė',
				noMessage: 'Nėra žinutės',
				encrypted: 'Žinutė yra užšifruota',
				time: 'Laiko žymė',
				confirmations: 'Patvirtinimai',
				confirmationsUnknown: 'Nežinoma',
				amount: 'Suma',
				fee: 'Mokestis',
				innerFee: 'Vidinis mokestis',
				multisigFees: 'Multisig mokesčiai',
				cosignatory: 'Parašo teisės turėtojas'
			},
			accountDetails: {
				title: 'Sąskaitos informacija',
				address: 'Adresas',
				label: 'Pavadinimas',
				noLabel: 'Nėra pavadinimo',
				add: 'Pridėti į adresų knygą',
				remove: 'Išimti iš adresų knygos',
				balance: 'Balansas',
				vested: 'Efektyvus',
				importance: '\'Svarbumas\'',
				publicKey: 'Viešasis raktas',
				noPublicKey: 'Nėra viešojo rakto',
				harvestedBlocks: '\'Iškasti\' blokai',
				close: 'Uždaryti'
			},
			bootLocalNode: {
				title: 'Užkrauti vietinį prieigos tašką',
				account: 'Vietinio prieigos taško sąskaita',
				noLabel: '<span class=\'null\'>&lt;Nėra pavadinimo&gt;</span>',
				wallet: 'Piniginė',
				node: 'Prieigos taško pavadinimas',
				boot: 'Užkrauti',
				booting: 'Kraunasi...',
				warning: 'Prieigos taško pranešimas',
				warningText: 'You\'re trying to boot a node <u>{{2}}</u><br/><br/>Booting remote node is currently impossible from within NCC.',
				warningStatement: 'You have auto-boot set to true and you\'re using remote node {{3}}.<br/><br/>Booting remote node is currently impossible from within NCC',
				warningQuestion: 'Ar esate tikras, kad norite paleisti prieigos tašką <u>{{3}}</u> naudodami privatųjį raktą, priklausantį sąskaitai {{1}} ({{2}} XEM)?<br><br>Šiuo atveju, Jūs atskleisite sąskaitos <span class=\"sublabelWarning\">private key</span> prieigos taškui: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Uždaryti piniginę',
				message: 'Ar tikrai norite uždaryti piniginę ir grįžti į pagrindinį puslapį?'
			},
			createAccount: {
				title: 'Sukurti naują sąskaitą',
				label: 'Nuosavas pavadinimas',
				wallet: 'Piniginė',
				password: 'Piniginės slaptažodis',
				successMessage: 'Sąskaita {{1}} {{#2}}({{2}}){{/2}} sukurta!',
				create: 'Sukurti'
			},
			showPrivateKey: {
				title: 'Show Account\'s PRIVATE Key',
				message: 'This will display account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',
				publicKey: 'Viešasis raktas',
				privateKey: 'Privatus raktas',
				show: 'Show the key'
			},
			showRemotePrivateKey: {
				title: 'Show Remote Account\'s PRIVATE Key',
				message: 'This will display remote account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',

			},
			addAccount: {
				title: 'Pridėti egzistuojančią sąskaitą',
				privateKey: 'Sąskaitos privatus raktas',
				wallet: 'Piniginė',
				password: 'Piniginės slaptažodis',
				successMessage: 'Sąskaita {{1}} {{#2}}({{2}}){{/2}} įtraukta į piniginę!',
				add: 'Pridėti',
				label: 'Pavadinimas'
			},
			setPrimary: {
				title: 'Nustatyti pagrindinę sąskaitą',
				account: 'Sąskaita, kuri turi būti nustatyta kaip pagrindinė',
				noLabel: '<span class=\'null\'>&lt;Nėra pavadinimo&gt;</span>',
				wallet: 'Piniginė',
				password: 'Piniginės slaptažodis',
				successMessage: 'Sąskaita {{1}} {{#2}}({{2}}){{/2}} nustatyta kaip pagrindinė!',
				set: 'Nustatyta kaip pagrindinė'
			},
			changeWalletName: {
				title: 'Pakeisti piniginės pavadinimą',
				wallet: 'Dabartinis piniginės pavadinimas',
				newName: 'Naujas piniginės pavadinimas',
				password: 'Piniginės slaptažodis',
				successMessage: 'Piniginės pavadinimas pakeistas sėkmingai iš <em>{{1}}</em> į <em>{{2}}</em>',
				change: 'Pakeisti'
			},
			changeWalletPassword: {
				title: 'Pakeisti piniginės slaptažodį',
				wallet: 'Piniginė',
				password: 'Dabartinis slaptažodis',
				newPassword: 'Naujas slaptažodis',
				confirmPassword: 'Patvirtinti naują slaptažodį',
				successMessage: 'Piniginės slaptažodis pakeistas sėkmingai',
				change: 'Pakeisti',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: 'Jūsų įvestas naujas slaptažodis ir jo patvirtinimas neatitinka. Prašome įsitikinti, kad naują slaptažodį įvedėte teisingai.'
			},
			changeAccountLabel: {
				title: 'Pakeisti sąskaitos pavadinimą',
				label: 'Sąskaitos pavadinimas',
				wallet: 'Piniginė',
				password: 'Piniginės slaptažodis',
				successMessage: 'Sąskaita {{1}} dabar pavadinta kaip {{2}}',
				change: 'Pakeisti'
			},
			removeAccount: {
				title: 'Panaikinti sąskaitą',
				account: 'Sąskaita',
				label: 'Sąskaitos pavadinimas',
				wallet: 'Piniginė',
				password: 'Piniginės slaptažodis',
				warning: 'Prašome įsitikinti, kad Jūsų sąskaitoje nėra NEM prieš ją panaikinant. Panaikinus sąskaitą, Jūs prarasite joje turėtus XEM visam laikui.',
				successMessage: 'Sąskaita {{1}} {{#2}}({{2}}){{/2}} panaikinta!',
				remove: 'Panaikinti'
			},
			nisUnavailable: {
				title: 'NIS nepaleistas',
				message: 'Atsijungta nuo NIS, laukiama prisijungimo'
			},
			shutdown: {
				title: 'Uždaryti programą',
				message: 'Ar tikrai norite uždaryti NEM Community Client?'
			},
			activateRemote: {
				title: 'Activate Delegated Harvesting',
				wallet: 'Piniginė',
				account: 'Sąskaita',
				password: 'Piniginės slaptažodis',
				activate: 'Aktyvuoti',
				warning: 'Warning',
				warningText: 'Activation will take 6 hours (360 blocks). Activation will NOT start harvesting automatically.'
			},
			deactivateRemote: {
				title: 'Deactivate Delegated Harvesting',
				wallet: 'Piniginė',
				account: 'Sąskaita',
				password: 'Piniginės slaptažodis',
				deactivate: 'Deaktyvuoti',
				warning: 'Warning',
				warningText: 'Deactivation will take 6 hours (360 blocks).'
			},
			startRemote: {
				title: 'Start Delegated Harvesting',
				wallet: 'Piniginė',
				account: 'Sąskaita',
				password: 'Piniginės slaptažodis',
				start: 'Pradėti'
			},
			stopRemote: {
				title: 'Stop Delegated Harvesting',
				wallet: 'Piniginė',
				account: 'Sąskaita',
				password: 'Piniginės slaptažodis',
				stop: 'Stabdyti'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer. To prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away."
			},
			addContact: {
				title: 'Pridėti kontaktą',
				add: 'Pridėti'
			},
			editContact: {
				title: 'Redaguoti kontaktą',
				saveChanges: 'Išsaugoti pakeitimus'
			},
			removeContact: {
				title: 'Pašalinti kontaktą',
				remove: 'Pašalinti'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Piniginė importuota sėkmingai!',
			nav: {
				start: 'Pradžiamokslis',
				about: 'Apie NEM',
				settings: 'Nustatymai'
			},
			main: {
				leftTitle: 'Esate pirmą kartą <em>NEM</em>?',
				leftButton: 'Sukurti nauja piniginę',
				walletNamePlh: 'Sukurkite piniginės pavadinimą',
				passwordPlh: 'Slaptažodis',
				confirmPasswordPlh: 'Patvirtinti slaptažodį',
				create: 'Sukurti',
				creating: 'Kuriama...',
				rightTitle: 'Esate <em>NEM</em>eris?',
				rightButton: 'Atidaryti savo piniginę',
				openButton: 'Atidaryti',
				walletsFound: 'Rąstos <strong>{{1}}</strong> <em>piniginės</em>',
				copyright: 'Fotografas <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC šifruoja Jūsų piniginę',
						description: '<em>Saugumas</em> yra labai svarbus, tam kad išvengti XEM vagysčių &amp; assets.'
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
						title: 'Kaip veikia NCC?',
						paragraphs: [
							'<strong>NCC</strong> leidžia Jums prieiti prie savo XEM ir aktyvų. Jūs galite',
							'<strong>NCC</strong> reikia prieigos prie <strong>NIS</strong> serverio, kad veiktų. Paprastai reikia, kad vietinis serveris būtų aktyvus (jis instaliuojamas kartu su <strong>NCC</strong>)',
							'Jūs taip pat galite susikonfigūruoti prieigą prie nuotolinio <strong>NIS</strong> serverio.'
						],
						listItems: [
							'Turėti keletą piniginių',
							'Turėti keletą sąskaitų piniginėje'
						]
					},
					{
						title: 'Kas yra &#42;NIS?',
						paragraphs: [
							'Šis komponentas reikalingas, kad veiktų <strong>NEM</strong> \'debesis\'.',
							'The more <strong>NIS</strong> there are in the network, the better the security.,',
							'<strong>NIS</strong> yra prieigos taškas į <strong>NEM</strong> \'debesi\'.'
						],
						legend: '<strong>&#42;NIS</strong> iššifruojamas kaip <strong>NEM Infrastruktūros Serveris</strong>'
					}
				]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: '{{1}} dienos prieš tai',
			lastAccessJustNow: 'Dabar',
			lastAccessTooltip: 'Paskutinį kartą buvo prisijungta {{1}}',
			primary: 'Pagrindinė',
			primaryShort: 'P',
			noLabel: '<Nėra pavadinimo>',
			copiedToClipboard: 'Paspauskite, norėdami nukopijuoti adresą į atmintį',
			actions: {
				refreshInfo: 'Atnaujinti informaciją',
				bootLocalNode: 'Paleisti vietinį prieigos tašką',
				changeWalletName: 'Pakeisti piniginės pavadinimą',
				changeWalletPassword: 'Pakeisti piniginės slaptažodį',
				mergeWallets: 'Apjungti pinigines',
				exportWallet: 'Eksportuoti piniginę',
				createAccount: 'Sukurti naują sąskaitą',
				createRealAccountData: 'Sukurti realios sąskaitos duomenis',
				verifyRealAccountData: 'Tikrinti realios sąskaitos duomenis',
				showPrivateKey: 'Show Account\'s PRIVATE key',
				showRemotePrivateKey: 'Show Remote Account\'s PRIVATE key',
				viewDetails: 'View Account Details',
				addAccount: 'Pridėti egzistuojančią sąskaitą',
				changeAccountLabel: 'Pakeisti sąskaitos pavadinimą',
				setPrimary: 'Nustatyti kaip pagrindinę sąskaitą',
				removeAccount: 'Pašalinti sąskaita',
				clientInfo: 'Programos informacija',
				closeWallet: 'Uždaryti piniginę',
				closeProgram: 'Uždaryti programą',
				copyClipboard: 'Kopijuoti adresą į laikinąją atmintį',
				copyDisabled: 'Copying an address requires flash',
				convertMultisig: 'Paversti kitą sąskaitą į multisig'
			},
			nav: [
				'Skydelis',
				'Žinutės',
				'Kontaktai',
				'Transakcijos',
				'\'Iškasti\' blokai',
				'Aktyvų birža',
				'Naujienos',
				'Aplikacijos',
				'Sąskaitos',
				'Nustatymai',
				'Uždaryti programą'
			],
			bootNodeWarning: 'Norint naudotis NCC pilnai, vietinis prieigos taškas turi būti paleistas.'
		},
		dashboard: {
			assets: {
				title: 'Jūsų aktyvai'
			},
			importance: {
				title: 'Svarbumo tinkle procentas',
				unknown: 'Statusas nežinomas',
				start: 'Pradėti \'kasti\'',
				harvesting: '\'Kasimas\' vyksta',
				stop: 'Nutraukti \'kasimą\'',
				description: 'Sąskaitos svarbumas NEM \'debesyje\'',
				remoteHarvest: {
					activate: 'Activate delegated harvesting',
					activating: 'Activating delegated harvesting...',
					active: 'Delegated harvesting is active',
					deactivate: 'Deactivate delegated harvesting',
					deactivating: 'Deactivating delegated harvesting...',
					startRemoteHarvesting: 'Start delegated harvesting',
					remotelyHarvesting: 'Nuotolinis \'kasimas\' vyksta',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			},
			transactions: {
				title: 'Paskutinės transakcijos',
				sendNem: 'Siųsti XEM',
				signMultisig: 'SIGN',
				balance: 'Turimas balansas',
				loading: 'Loading balance',
				accountCosignatories: 'Multisig sąskaita.',
				accountCosignatoriesView: 'view cosignatories',
				vestedBalance: '\'Kasantis\' balansas',
				syncStatus: '(blokas {{1}}{{#2}} : po {{3}} dienu{{/2}})',
				notSynced: 'might be inaccurate, NIS not synchronized yet',
				unknown: 'nežinomas',
				columns: [
					'',
					'Laikas',
					'Siuntėjas/Gavėjas',
					'Žinutė',
					'',
					'Informacija',
					'Patvirtinimai',
					'Mokestis',
					'Suma'
				],
				noMessage: 'Žinutės nera',
				encrypted: 'Žinutė šifruota',
				view: 'Peržiūrėti',
				confirmationsUnknown: 'Nežinoma',
				pending: 'Atliekama',
				seeAll: 'Peržiūreti visas transakcijas',
				noTransactions: 'Nėra dar atlikta jokių transakcijų'
			},
			nemValue: {
				title: 'XEM vertės statistika'
			},
			messages: {
				titleTooltip: 'Žinutės'
			},
			news: {
				titleTooltip: 'Naujienos'
			},
			notAvailable: 'Dar nėra šioje alpha versijoje'
		},
		transactions: {
			title: 'Transakcijos',
			sendNem: 'Siųsti XEM',
			balance: 'Turimas balansas',
			filters: {
				confirmed: 'Patvirtintos',
				unconfirmed: 'Nepatvirtintos',
				incoming: 'Įeinančios',
				outgoing: 'Išeinančios'
			},
			table: {
				columns: [
					'',
					'Laikas',
					'Siuntėjas/Gavėjas',
					'Žinutė',
					'',
					'Informacija',
					'Patvirtinimai',
					'Mokestis',
					'Suma'
				],
				noMessage: 'Nėra žinutės',
				encrypted: 'Žinutė šifruota',
				view: 'Peržiūrėti',
				confirmationsUnknown: 'Nežinoma',
				pending: 'Vykdoma',
				noTransactions: 'Nėra atliktų transakcijų',
				loading: 'Krauna daugiau transakcijų...'
			}
		},
		harvestedBlocks: {
			title: 'Iškasti blokai',
			feeEarned: 'Iš paskutinių 25 \'iškastų\' blokų gauti mokesciai',
			unknown: 'Nežinoma',
			table: {
				columns: [
					'Bloko numeris',
					'Laikas',
					'Bloko sudėtingumas',
					'Mokestis'
				],
				noBlocks: 'Nėra \'iškastų\' blokų ',
				loading: 'Kraunama daugiau \'iškastų\' blokų'
			},
			harvesting: {
				unknown: 'Statusas nežinomas',
				start: 'Pradėti \'kasti\'',
				harvesting: '\'Kasimas\' vyksta',
				stop: 'Stabdyti \'kasimą\'',
				remoteHarvest: {
					startRemoteHarvesting: 'Start delegated harvesting',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			}
		},
		addressBook: {
			title: 'Adresų knyga',
			addContact: 'Pridėti kontaktą',
			table: {
				columns: [
					'Sąskaitos adresas',
					'Privati žymė',
					'Vieša žymė'
				],
				noContacts: 'Nėra kontaktų adresų knygoje'
			},
			noLabel: 'Nera žymės',
			sendNem: 'Siųsti XEM',
			edit: 'Redaguoti',
			remove: 'Pašalinti'
		},
		settings: {
			title: 'Nustatymai',
			settings: [
				{
					name: 'Kalba'
				}
			],
			save: 'Išsaugoti pakeitimus',
			saveSuccess: 'Nustatymai išsaugoti sėkmingai'
		}
	}
});
