define({
	id: "lt",
	name: "Lietuviškai",
	texts: {
		preferences: {
			thousandSeparator: " ",
			decimalSeparator: "."
		},
		faults: {
			101: "Byla nerasta.",
			102: "Piniginė nesukurta.",
			103: "Piniginės byla yra sugadinta. Prašome atstatyti Jūsų piniginę iš atsarginės kopijos, kurią Jūs turėjote susikurti, kai kūrėte naują piniginę arba pridėjote naują sąskaitą į ją.",
			104: "Pateiktas slaptažodis netinka. Tikėkimes Jūs galite atsiminti teisingą slaptažodį. Jei jį praradote, jis negali būti atkurtas!",
			106: "Prieš pradedant darbą su pinigine, ji turi būti atidaryta. Norint atidaryti piniginę, Jūs turite įvesti piniginės slaptažodį.",
			107: "Piniginėje nėra šios sąskaitos",
			108: "Sąskaita negali būti pašalinta. Panašu, kad sąskaitoje yra daugiau kaip 0 NEM arba ši sąskaita yra Jūsų pagrindinė sąskaita.",
			109: "Jau egzistuoja piniginė su tokiu pavadinimu. Prašome pasirinkti kitą piniginės pavadinimą.",
			110: "Pinigiėeje jau yra ši sąskaita.",
			202: "Nėra viešojo rakto",
			305: "NEM Infrastruktūros serveris negalimas",
			306: "Įvyko klaida, kurios kūrėjai nenumatė. Atsiprašome, bet gal paleidimas iš naujo padės. Kitu atveju, praneškite apie tai NEM NIS/NCC bendruomenei",
			400: "Trūksta kai kurių parametrų",
			401: 'This operation cannot be completed because it might leak a private key by sending it to a remote NIS.',
			404: "Netinkama Boot strategy reikšmė",
			500: "Nepavyko užsaugoti konfigūracijos bylos",
			600: "NCC reikia, kad NIS serveris būtų paleistas, norint atlikti siuntimo ir gavimo transakcijas. Prašome naudoti NCC meniu ir paleisti vietinį prieigos tašką.",
			601: "NIS prieigos taškas jau paleistas. Antrą kartą jį paleisti neįmanoma.",
			700: "Pateikta sąskaita neatitinka pagrindinių kriterijų, norint \"kasti\". Pagrinde, tai susiję su NEM kiekiu Jūsų sąskaitoje. \"Kasimas\" prasideda tik turint ne mažiau 1,000 NEM.",
			701: "Pateiktas galutinis terminas yra praeityje. Galutinis terminas turi būti 1 dienos bėgyje.",
			702: "Pateiktas galutinis terminas yra per toli ateityje. Galutinis terminas turi būti ne daugiau kaip viena diena.",
			703: "Jūsų sąskaitoje neužtenka lėšų, kad išsiųsti nurodytą NEM sumą.",
			704: "Pateikta žinutė yra per didelė, kad ją išsiųsti. Prašome sutrumpinti žinutę, kurią Jūs norite išsiųsti.",
			705: "Transakcijos \"hash\" jau yra duomenų bazėje arba nepatvirtintų transakcijų sąraše.",
			706: "Transakcijos parašas negali būti patikrintas.",
			707: "Transakcijos laiko žymė yra per toli praeityje.",
			708: "Transakcijos laiko žymė yra per toli ateityje.",
			709: "Sąskaita nežinoma. Sąskaita turi turėti bent vieną transakciją (siuntimo ar gavimo), kad būtų žinoma tinkle.",
			901: "Įvyko klaida nustatant offline režimą.",
			1000: "Jūsų pateikti privatus ir viešas raktai neatitinka.",
			1001: "Jūsų pateiktas viešas raktas ir adresas neatitinka.",
			1002: 'The address does not belong to the main network.'
		},
		common: {
			success: "Pavyko",
			appStatus: {
				nccUnknown: "NCC statusas nežinomas",
				nccUnavailable: "NCC nėra paleistas",
				nccStarting: "NCC startuoja...",
				nisUnknown: "NIS statusas nežinomas",
				nisUnavailable: "NIS nėra paleistas",
				nisStarting: "NIS startuoja...",
				notBooted: "NIS turi būti užkrautas. Prašome atsidaryti Jūsų piniginę ir paleisti vietinį prieigos tašką atsidariusiame dialogo lange arba sukonfigūruokite automatinį paleidimą nustatymuose.",
				booting: "NIS kraunasi...",
				nisInfoNotAvailable: "NIS informacijos kolkas nėra. Bandoma išgauti informaciją apie NIS...",
				synchronizing: "NIS sinchronizuojasi. Dabartinis blokas yra {{1}}, liko dar {{2}} .",
				daysBehind: {
					0: "mažiau kaip 1 diena",
					1: "1 diena",
					many: "{{1}} dienos"
				},
				synchronized: "NIS susisinchronizavęs!"
			}
		},
		modals: {
			error: {
				title: "Oops!",
				caption: "KLAIDA {{1}}"
			},
			confirmDefault: {
				yes: "Taip",
				no: "Ne"
			},
			settings: {
				title: "Nustatymai",
				language: {
					label: "Kalba"
				},
				remoteServer: {
					tabTitle: "Nuotolinis serveris",
					protocol: "Protokolas",
					protocolOptions: {
						http: "HTTP"
					},
					host: "Host",
					port: "Portas"
				},
				autoBoot: {
					tabTitle: "Automatinis užkrovimas",
					name: "Prieigos taško pavadinimas",
					account: "Sąskaita",
					primaryAccount: "Pagrindinė sąskaita",
					auto: "Automatiškai užkrauti, kai piniginė atidaryta"
				},
				save: "Išsaugoti",
				saveSuccess: "Nustatymai sėkmingai išsaugoti"
			},
			sendNem: {
				title: "Siųsti NEM",
				labelDesc: "Ši sąskaita pavadinta kaip {{1}}",
				nullLabelDesc: "Ši sąskaita neturi pavadinimo",
				amount: "Suma",
				recipient: "Gavėjo sąskaita",
				recipientValidation: 'Account addresses must be 40 character long excluding dashes',
				message: "Žinutė",
				encrypt: "Užšifruoti žinutę",
				fee: "Mokestis",
				feeValidation: 'Fee must not be less than the minimum fee',
				dueBy: "Galiojimo trukmė",
				useMinimumFee: 'Use minimum fee',
				hours: "valandos",
				password: "Slaptažodis",
				send: "Siųsti",
				cancel: 'Cancel',
				sending: "Siunčiama...",
				successMessage: "Transakcija išsiųsta sėkmingai!",
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
					title: "Prieigos taškas nepaleistas!",
					message: "Norint siųsti NEM, vietinis prieigos taškas turi būti paleistas!"
				},
				bootingWarning: {
					title: 'Node is being booted',
					message: 'Please wait until booting process is done to send your transaction.'
				}
			},
			clientInfo: {
				title: "Kliento informacija",
				ncc: "NEM Community Client - NCC",
				signer: "Parašo turėtojas",
				remoteServer: "Nuotolinis serveris",
				local: "Vietinis",
				nis: "NEM Infrastructure Server - NIS",
				sync: "Susisinchronizavęs",
				notSync: "Nesusisinchronizavęs",
				notConnected: "Neprisijungta prie NEM Cloud",
				loading: "Kraunasi..."
			},
			transactionDetails: {
				title: "Transakcijos duomenys",
				id: "ID",
				hash: "Hash",
				type: "Transakcijos tipas",
				pending: "Kol kas vyksta",
				outgoing: "Išeinanti",
				incoming: "Įeinanti",
				self: "Sau",
				sender: "Siuntėjas",
				recipient: "Gavėjas",
				message: "Žinutė",
				noMessage: "Nėra žinutės",
				encrypted: "Žinutė yra užšifruota",
				time: "Laiko žymė",
				confirmations: "Patvirtinimai",
				confirmationsUnknown: 'Unknown',
				amount: "Suma",
				fee: "Mokestis"
			},
			bootLocalNode: {
				title: "Užkrauti vietinį prieigos tašką",
				account: "Vietinio prieigos taško sąskaita",
				noLabel: "<span class=\"null\">&lt;Nėra pavadinimo&gt;</span>",
				wallet: "Piniginė",
				node: "Prieigos taško pavadinimas",
				boot: "Užkrauti",
				booting: "Kraunasi..."
			},
			closeWallet: {
				title: "Uždaryti piniginę",
				message: "Ar tikrai norite uždaryti piniginę ir grįžti į pagrindinį puslapį?"
			},
			createAccount: {
				title: "Sukurti naują sąskaitą",
				label: "Nuosavas pavadinimas",
				wallet: "Piniginė",
				password: "Piniginės slaptažodis",
				successMessage: "Sąskaita {{1}} {{#2}}({{2}}){{/2}} sukurta!",
				create: "Sukurti"
			},
			createRealAccountData: {
				title: "Sukurti realios sąskaitos duomenis",
				message: "Žemiau esantys duomenys yra skirti Jūsų realiai sąskaitai, kuri veiks, kai NEM pilnai startuos. Išsisaugokite adresą, viešąjį raktą ir svarbiausiai- privatų raktą. Jei Jūs prarasite privatų raktą, Jūs prarasite tikrąją sąskaitą ir visus joje esančius NEM VISAM LAIKUI!",
				address: "Adresas",
				publicKey: "Viešasis raktas",
				privateKey: "Privatus raktas",
				confirm: {
					title: "Išsaugoti privatųjį raktą",
					message: "Ar Jūs tikrai esate įsitikinęs, kad Jūsų viešasis raktas išsaugotas saugiai?"
				},
				recheck: {
					title: "Dar kartą patikrinkite Jūsų išsaugotą privatų raktą",
					message: "Prašome dar kartą įvesti Jums suteiktą privatų raktą, norint patikrinti ar tikrai esate išsaugojęs tikrąjį raktą. Jeigu Jūsų privatus raktas jau yra prarastas, jūs galbūt norite sukurti naują.",
					correct: {
						title: "Puiku!",
						message: "Atrodo Jūs išsaugojote teisingą privatų raktą. Saugokite savo raktą!"
					},
					incorrect: {
						title: "Hmm...",
						message: "Įvestas privatus raktas yra neteisingas! Pasitikrinkite dar kartą ir įveskite iš naujo.",
						tryAgain: "Pabandykita įvesti dar kartą",
						seeOriginal: "Peržiūrėti originalius duomenis"
					},
					recheck: "Tikrinti"
				},
				ok: "Gerai"
			},
			verifyRealAccountData: {
				title: "Patikrinti realios sąskaitos duomenis",
				message: "Įveskite dar kartą Jūsų išsaugotą adresą, viešąjį ir privatų raktus norėdami patikrinti ar jie teisingi.",
				address: "Adresas",
				publicKey: "Viešasis raktas",
				privateKey: "Privatus raktas",
				dataMatched: "Viskas atrodo gerai, Jūsų įvesti adresas, viešasis raktas ir privatus raktas teisingi.",
				verify: "Tikrinti"
			},
			addAccount: {
				title: "Pridėti egzistuojančią sąskaitą",
				privateKey: "Sąskaitos privatus raktas",
				wallet: "Piniginė",
				password: "Piniginės slaptažodis",
				successMessage: "Sąskaita {{1}} {{#2}}({{2}}){{/2}} įtraukta į piniginę!",
				add: "Pridėti",
				label: "Pavadinimas"
			},
			setPrimary: {
				title: "Nustatyti pagrindinę sąskaitą",
				account: "Sąskaita, kuri turi būti nustatyta kaip pagrindinė",
				noLabel: "<span class=\"null\">&lt;Nėra pavadinimo&gt;</span>",
				wallet: "Piniginė",
				password: "Piniginės slaptažodis",
				successMessage: "Sąskaita {{1}} {{#2}}({{2}}){{/2}} nustatyta kaip pagrindinė!",
				set: "Nustatyta kaip pagrindinė"
			},
			changeWalletName: {
				title: "Pakeisti piniginės pavadinimą",
				wallet: "Dabartinis piniginės pavadinimas",
				newName: "Naujas piniginės pavadinimas",
				password: "Piniginės slaptažodis",
				successMessage: "Piniginės pavadinimas pakeistas sėkmingai iš <em>{{1}}</em> į <em>{{2}}</em>",
				change: "Pakeisti"
			},
			changeWalletPassword: {
				title: "Pakeisti piniginės slaptažodį",
				wallet: "Piniginė",
				password: "Dabartinis slaptažodis",
				newPassword: "Naujas slaptažodis",
				confirmPassword: "Patvirtinti naują slaptažodį",
				successMessage: "Piniginės slaptažodis pakeistas sėkmingai",
				change: "Pakeisti",
				passwordNotMatchTitle: "Oops!",
				passwordNotMatchMessage: "Jūsų įvestas naujas slaptažodis ir jo patvirtinimas neatitinka. Prašome įsitikinti, kad naują slaptažodį įvedėte teisingai."
			},
			changeAccountLabel: {
				title: "Pakeisti sąskaitos pavadinimą",
				label: "Sąskaitos pavadinimas",
				wallet: "Piniginė",
				password: "Piniginės slaptažodis",
				successMessage: "Sąskaita {{1}} dabar pavadinta kaip {{2}}",
				change: "Pakeisti"
			},
			removeAccount: {
				title: "Panaikinti sąskaitą",
				wallet: "Piniginė",
				password: "Piniginės slaptažodis",
				warning: "Prašome įsitikinti, kad Jūsų sąskaitoje nėra NEM prieš ją panaikinant. Panaikinus sąskaitą, Jūs prarasite joje turėtus NEM visam laikui.",
				successMessage: "Sąskaita {{1}} {{#2}}({{2}}){{/2}} panaikinta!",
				remove: "Panaikinti"
			},
			nisUnavailable: {
				title: "NIS nepaleistas",
				message: "Atsijungta nuo NIS, laukiama prisijungimo"
			},
			shutdown: {
				title: "Uždaryti programą",
				message: "Ar tikrai norite uždaryti NEM Community Client?"
			},
			activateRemote: {
				title: "Aktyvuoti nuotolinį \"kasimą\"",
				wallet: "Piniginė",
				account: "Sąskaita",
				hoursDue: "Liko valandų",
				password: "Piniginės slaptažodis",
				activate: "Aktyvuoti"
			},
			deactivateRemote: {
				title: "Deaktyvuoti nuotolinį \"kasimą\"",
				wallet: "Piniginė",
				account: "Sąskaita",
				hoursDue: "Liko valandų",
				password: "Piniginės slaptažodis",
				deactivate: "Deaktyvuoti"
			},
			startRemote: {
				title: "Pradėti nuotolinį \"kasimą\"",
				wallet: "Piniginė",
				account: "Sąskaita",
				password: "Piniginės slaptažodis",
				start: "Pradėti"
			},
			stopRemote: {
				title: "Stabdyti nuotolinį \"kasimą\"",
				wallet: "Piniginė",
				account: "Sąskaita",
				password: "Piniginės slaptažodis",
				stop: "Stabdyti"
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer.\n\nTo prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away.",
			}
		},
		landing: {
			logo: "images/nem_logo.png",
			importSuccess: "Piniginė importuota sėkmingai!",
			nav: {
				start: "Pradžiamokslis",
				about: "Apie NEM",
				settings: "Nustatymai"
			},
			main: {
				leftTitle: "Esate pirmą kartą <em>NEM</em>?",
				leftButton: "Sukurti nauja piniginę",
				walletNamePlh: "Sukurkite piniginės pavadinimą",
				passwordPlh: "Slaptažodis",
				create: "Sukurti",
				rightTitle: "Esate <em>NEM</em>eris?",
				rightButton: "Atidaryti savo piniginę",
				openButton: "Atidaryti",
				walletsFound: "Rąstos <strong>{{1}}</strong> <em>piniginės</em>",
				copyright: "Fotografas <em>Cas Cornelissen</em>"
			},
			carousel: {
				items: [{
					title: "NCC šifruoja Jūsų piniginę",
					description: "<em>Saugumas</em> yra labai svarbus, tam kad išvengti NEM vagysčių &amp; assets."
				}, {
					title: "NCC šifruoja Jūsų piniginę",
					description: "<em>Saugumas</em> yra labai svarbus, tam kad išvengti NEM vagysčių &amp; assets."
				}]
			},
			about: {
				sections: [{
					title: "Kaip veikia NCC?",
					paragraphs: [
						"<strong>NCC</strong> leidžia Jums prieiti prie savo NEM ir aktyvų. Jūs galite",
						"<strong>NCC</strong> reikia prieigos prie <strong>NIS</strong> serverio, kad veiktų. Paprastai reikia, kad vietinis serveris būtų aktyvus (jis instaliuojamas kartu su <strong>NCC</strong>)",
						"Jūs taip pat galite susikonfigūruoti prieigą prie nuotolinio <strong>NIS</strong> serverio."
					],
					listItems: [
						"Turėti keletą piniginių",
						"Turėti keletą sąskaitų piniginėje"
					]
				}, {
					title: "Kas yra &#42;NIS?",
					paragraphs: [
						"Šis komponentas reikalingas, kad veiktų <strong>NEM</strong> \"debesis\".",
						"Kuo daugiau yra veikiancių <strong>NIS</strong>, tuo geresnis saugumas.",
						"<strong>NIS</strong> yra prieigos taškas į <strong>NEM</strong> \"debesi\"."
					],
					legend: "<strong>&#42;NIS</strong> iššifruojamas kaip <strong>NEM Infrastruktūros Serveris</strong>"
				}]
			},
			footer: {
				copyright: "&copy; Copyright 2014. NEM Community Client."
			}
		},
		wallet: {
			logo: "images/nem_logo.png",
			lastAccess: "{{1}} dienos prieš tai",
			lastAccessJustNow: "Dabar",
			lastAccessTooltip: "Paskutinį kartą buvo prisijungta {{1}}",
			primary: "Pagrindinė",
			primaryShort: "P",
			noLabel: "<Nėra pavadinimo>",
			copiedToClipboard: "Paspauskite, norėdami nukopijuoti adresą į atmintį",
			actions: {
				refreshInfo: "Atnaujinti informaciją",
				bootLocalNode: "Paleisti vietinį prieigos tašką",
				changeWalletName: "Pakeisti piniginės pavadinimą",
				changeWalletPassword: "Pakeisti piniginės slaptažodį",
				mergeWallets: "Apjungti pinigines",
				exportWallet: "Eksportuoti piniginę",
				createAccount: "Sukurti naują sąskaitą",
				createRealAccountData: "Sukurti realios sąskaitos duomenis",
				verifyRealAccountData: "Tikrinti realios sąskaitos duomenis",
				addAccount: "Pridėti egzistuojančią sąskaitą",
				changeAccountLabel: "Pakeisti sąskaitos pavadinimą",
				setPrimary: "Nustatyti kaip pagrindinę sąskaitą",
				removeAccount: "Pašalinti sąskaita",
				clientInfo: "Programos informacija",
				closeWallet: "Uždaryti piniginę",
				closeProgram: "Uždaryti programą",
				copyClipboard: "Kopijuoti adresą į laikinąją atmintį"
			},
			nav: [
				"Skydelis",
				"Žinutės",
				"Kontaktai",
				"Transakcijos",
				"\"Iškasti\" blokai",
				"Aktyvų birža",
				"Naujienos",
				"Aplikacijos",
				"Sąskaitos",
				"Nustatymai",
				"Uždaryti programą"
			],
			bootNodeWarning: "Norint naudotis NCC pilnai, vietinis prieigos taškas turi būti paleistas."
		},
		dashboard: {
			assets: {
				title: "Jūsų aktyvai"
			},
			importance: {
				title: "Svarbumo tinkle procentas",
				unknown: "Statusas nežinomas",
				start: "Pradėti \"kasti\"",
				harvesting: "\"Kasimas\" vyksta",
				stop: "Nutraukti \"kasimą\"",
				description: "Sąskaitos svarbumas NEM \"debesyje\"",
				remoteHarvest: {
					activate: "Aktyvuoti nuotolinį \"kasimą\"",
					activating: "Aktyvuojamas nuotolinis \"kasimas\"...",
					active: "Nuotolinis \"kasimas\" aktyvuotas",
					deactivate: "Deaktyvuoti nuotolinį \"kasimą\"",
					deactivating: "Nuotolinis \"kasimas\" deaktyvuojamas...",
					startRemoteHarvesting: "Pradėti nuotolinį \"kasimą\"",
					remotelyHarvesting: "Nuotolinis \"kasimas\" vyksta",
					stopRemoteHarvesting: "Stabdyti nuotolinį \"kasimą\""
				}
			},
			transactions: {
				title: "Paskutinės transakcijos",
				sendNem: "Siųsti NEM",
				balance: "Turimas balansas",
				syncStatus: "(blokas {{1}}{{#2}} : po {{3}} dienu{{/2}})",
				unknown: "nežinomas",
				columns: [
					"",
					"Laikas",
					"Siuntėjas/Gavėjas",
					"Žinutė",
					"",
					"Informacija",
					"Patvirtinimai",
					"Mokestis",
					"Suma"
				],
				types: {
					pending: "Atliekama transakcija",
					outgoing: "Išeinanti transakcija",
					incoming: "Įeinanti transakcija",
					self: "Transakcija sau"
				},
				noMessage: "Žinutės nera",
				encrypted: "Žinutė šifruota",
				view: "Peržiūrėti",
				confirmationsUnknown: 'Unknown',
				pending: "Atliekama",
				seeAll: "Peržiūreti visas transakcijas",
				noTransactions: "Nėra dar atlikta jokių transakcijų"
			},
			nemValue: {
				title: "NEM vertės statistika"
			},
			messages: {
				titleTooltip: "Žinutės"
			},
			news: {
				titleTooltip: "Naujienos"
			},
			notAvailable: "Dar nėra šioje alpha versijoje"
		},
		transactions: {
			title: "Transakcijos",
			sendNem: "Siųsti NEM",
			balance: "Turimas balansas",
			filters: {
				confirmed: "Patvirtintos",
				unconfirmed: "Nepatvirtintos",
				incoming: "Įeinancios",
				outgoing: "Išeinancios"
			},
			table: {
				columns: [
					"",
					"Laikas",
					"Siuntėjas/Gavėjas",
					"Žinutė",
					"",
					"Informacija",
					"Patvirtinimai",
					"Mokestis",
					"Suma"
				],
				types: {
					pending: "Vykdoma transakcija",
					outgoing: "Išeinanti transakcija",
					incoming: "Įeinanti transakcija",
					self: "Transakcija sau"
				},
				noMessage: "Nėra žinutės",
				encrypted: "Žinutė šifruota",
				view: "Peržiūrėti",
				confirmationsUnknown: 'Unknown',
				pending: "Vykdoma",
				noTransactions: "Nėra atliktų transakcijų",
				loading: "Krauna daugiau transakcijų..."
			}
		},
		harvestedBlocks: {
			title: "Iškasti blokai",
			feeEarned: "Iš paskutinių 25 \"iškastų\" blokų gauti mokesciai",
			unknown: 'Unknown',
			table: {
				columns: [
					"Bloko numeris",
					"Laikas",
					"Bloko \"hash\"",
					"Mokestis"
				],
				noBlocks: "Nėra \"iškastų\" blokų ",
				loading: "Kraunama daugiau \"iškastų\" blokų"
			},
			harvesting: {
				unknown: "Statusas nežinomas",
				start: "Pradėti \"kasti\"",
				harvesting: "\"Kasimas\" vyksta",
				stop: "Stabdyti \"kasimą\"",
				remoteHarvest: {
					startRemoteHarvesting: 'Start remote harvesting',
					stopRemoteHarvesting: 'Stop remote harvesting'
				}
			}
		},
		settings: {
			title: "Nustatymai",
			settings: [{
				name: "Kalba"
			}],
			save: "Išsaugoti pakeitimus",
			saveSuccess: "Nustatymai išsaugoti sėkmingai"
		}
	}
});