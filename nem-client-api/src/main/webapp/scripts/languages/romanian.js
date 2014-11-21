define({
	id: "ro",
	name: "Română",
	texts: {
		preferences: {
			thousandSeparator: " ",
			decimalSeparator: "."
		},
		faults: {
			101: "Fișerul nu a fost găsit.",
			102: "Portofelul nu a fost creat.",
			103: "Fișerul portofelului este corupt. Te rog recuperează portofelul dintr-un backup făcut anterior.",
			104: "Parola introdusă nu este corectă. Sper că îți poți aminti parola corectă. Parola nu poate fi recuperata odată ce e pierdută!",
			106: "Înainte să poți lucra cu portofelul trebuie să fie deschis. Pentru a fi sigur că esti eligibil de a accesa portofelul, trebuie să introduci parola portofelului.",
			107: "Portofelul nu conține acest cont.",
			108: "Contul nu poate fi înlăturat. Cel mai probabil fie pentru că acest cont are un sold mai mare decât 0 NEM sau contul pe care încerci să îl înlături este contul primar.",
			109: "Un alt portofel cu același nume există deja. Te rog alegeți un alt nume pentru portofel.",
			110: "Portofelul conține acest cont deja.",
			202: "Mesajul encriptat nu poate fi trimis pentru că destinatarul nu are nici o tranzacție efectuată.",
			305: "NEM Infrastructure Server nu este disponibil.",
			306: "A apărut o eroare care nu a fost anticipată de echipa de dezvoltare. Ne cerem scuze, o reîncercare ar putea ajuta. În caz contrar, te rog raportează problema în comunitatea NEM NIS/NCC.",
			400: "Un parametru lipsește sau este invalid.",
			401: 'This operation cannot be completed because it might leak a private key by sending it to a remote NIS.',
			404: "Resursele căutate nu au fost găsite.",
			500: "Salvarea fișerului de configurație a eșuat.",
			600: "NCC necesită ca serverul NIS să fie pornit pentru trimiterea și primirea tranzacțiilor din NEM cloud. Te rog folosește opțiunea din meniul NCC pentru pornirea nodului local.",
			601: "Nodul NIS este deja pornit. O a doua încercare de a porni nodul NIS nu este posibilă.",
			700: "Contul furnizat nu satisface criteriul de bază pentru recoltare. În mod special, problema are legatură cu suma de NEM disponibilă în cont. Recoltarea poate începe cu minim 1000 NEM.",
			701: "Data scadentă furnizată este din trecut. Scadența trebuie introdusă cu o perioadă de grație de o zi.",
			702: "Data scadentă introdusă este prea îndepărtată în viitor. Scadența trebuie introdusă cu o perioadă de grație de o zi.",
			703: "Contul tău nu dispune de soldul necesar pentru a putea trimite suma introdusă de NEM.",
			704: "Textul din mesajul introdus este prea mare pentru a putea fi trimis prin NEM. Te rog încercă să reduci lungimea mesajului pe care dorești să îl trimiți.",
			705: "Hashul tranzacției există deja în baza de date sau în lista de tranzacții neconfirmate.",
			706: "Semnătura tranzacției nu a putut fi verificată.",
			707: "Data si ora tranzacției sunt prea îndepărtate în trecut.",
			708: "Data si ora tranzacției sunt prea îndepărtate în viitor.",
			709: "Contul este necunoscut. Un cont trebuie să facă parte din măcar o tranzacție (expeditor sau destinatar) pentru a fi cunoscut în rețea.",
			901: "O eroare a apărut la setarea nodului offline.",
			1000: "Cheia privată și cheia publică care au fost introduse nu se potrivesc.",
			1001: "Cheia publică și adresa care au fost introduse nu se potrivesc.",
			1002: 'The address does not belong to the main network.'
		},
		common: {
			success: "Succes",
			appStatus: {
				nccUnknown: "Statusul NCC este necunoscut",
				nccUnavailable: "NCC nu este disponibil",
				nccStarting: "NCC pornește...",
				nisUnknown: "Statusul NIS este necunoscut",
				nisUnavailable: "NIS nu este disponibil",
				nisStarting: "NIS pornește...",
				notBooted: "NIS are necesită să fie pornit. Te rog deschide portofelul și pornește un nod local prin fereastra care apare sau configurează setarea de auto-pornire.",
				booting: "NIS se pornește...",
				nisInfoNotAvailable: "Informația NIS nu este disponibilă încă. Se încearcă a prelua informația NIS...",
				synchronizing: "NIS se sincronizează. La block-ul {{1}}, est. {{2}} zile în urmă.",
				daysBehind: {
					0: "Mai puțin de 1 zi în urmă",
					1: "1 zi",
					many: "{{1}} zile"
				},
				synchronized: "NIS este sincronizat!"
			}
		},
		modals: {
			error: {
				title: "Oops!",
				caption: "ERROARE {{1}}"
			},
			confirmDefault: {
				yes: "Da",
				no: "Nu"
			},
			settings: {
				title: "Setări",
				language: {
					label: "Limbă"
				},
				remoteServer: {
					tabTitle: "Remote Server",
					protocol: "Protocol",
					protocolOptions: {
						http: "HTTP"
					},
					host: "Gazdă",
					port: "Port"
				},
				autoBoot: {
					tabTitle: "Auto-pornire",
					name: "Numele nodului",
					account: "Cont",
					primaryAccount: "Primar Cont",
					auto: "Pornește automat când un portofel a fost deschis"
				},
				save: "Salvează",
				saveSuccess: "Setările au fost salvate cu succes"
			},
			sendNem: {
				title: "Trimite NEM",
				labelDesc: "Eticheta contului este <strong>{{1}}</strong>",
				nullLabelDesc: "Acest cont nu are o etichetă",
				amount: "Sumă",
				recipient: "Contul destinatarului",
				recipientValidation: 'Account addresses must be 40 character long excluding dashes',
				message: "Mesaj",
				encrypt: "Mesaj encriptat",
				fee: "Taxă",
				feeValidation: 'Fee must not be less than the minimum fee',
				dueBy: "Expiră in",
				useMinimumFee: 'Use minimum fee',
				hours: "ore",
				password: "Parola",
				send: "Trimite",
				cancel: 'Cancel',
				sending: "Se trimite...",
				successMessage: "Tranzacția a fost efectuată cu succes!",
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
					title: "Nodul nu a fost pornit!",
					message: "Un nod local trebuie să fie pornit pentru a putea trimite NEM!"
				},
				bootingWarning: {
					title: 'Node is being booted',
					message: 'Please wait until booting process is done to send your transaction.'
				}
			},
			clientInfo: {
				title: "Client info",
				ncc: "NEM Community Client - NCC",
				signer: "Semnat",
				remoteServer: "Remote Server",
				local: "Local",
				nis: "NEM Infrastructure Server - NIS",
				sync: "Sincronizat",
				notSync: "Nesincronizat",
				notConnected: "Neconectat la NEM Cloud",
				loading: "Se încarcă..."
			},
			transactionDetails: {
				title: "Detalii tranzacție",
				id: "ID",
				hash: "Hash",
				type: "Tipul de tranzacție",
				pending: "În așteptare",
				outgoing: "De trimis",
				incoming: "De primit",
				self: "Sine",
				sender: "Expeditor",
				recipient: "Destinatar",
				message: "Mesaj",
				noMessage: "Nici un mesaj",
				encrypted: "Mesajul este encriptat",
				time: "Data și ora",
				confirmations: "Confirmări",
				confirmationsUnknown: 'Unknown',
				amount: "Sumă",
				fee: "Taxă"
			},
			bootLocalNode: {
				title: "Pornește nodul local",
				account: "Cont pentru a porni nodul local",
				noLabel: "<span class=\"null\"><Fără etichetă></span>",
				wallet: "Portofel",
				node: "Numele nodului",
				boot: "Pornește",
				booting: "Se pornește..."
			},
			closeWallet: {
				title: "Închide portofelul",
				message: "Ești sigur că dorești să închizi portofelul și să te intorci la pagina de început?"
			},
			createAccount: {
				title: "Crează portofel nou",
				label: "Etichetă privată",
				wallet: "Portofel",
				password: "Parola portofelului",
				successMessage: "Contul {{1}} {{#2}}({{2}}){{/2}} a fost creat!",
				create: "Crează"
			},
			createRealAccountData: {
				title: "Crează date reale de cont",
				message: "Datele de mai jos sunt pentru contul real de după lansarea NEM. Salvează adresa, cheia publică, si cel mai important, cheia privată intr-un loc sigur. Dacă pierzi cheia privată, contul tău împreună cu toți NEM reali vor fi pierduți pentru TOTDEAUNA!",
				address: "Adresa",
				publicKey: "Cheia publică",
				privateKey: "Cheia privată",
				confirm: {
					title: "Salvează cheia privată",
					message: "Ești sigur că cheia ta privată a fost salvată într-un loc sigur?"
				},
				recheck: {
					title: "Verifică cheia privată salvată din nou",
					message: "Te rog introdu cheia privată pe care ai primit-o pentru a verifica daca ai salvat-o pe cea bună. Daca cheia ta privată este deja pierdută, probabil ca ar fi bine sa creezi una nouă.",
					correct: {
						title: "Foarte bine!",
						message: "Se pare ca ai salvat cheia privată corectă. Te rog ai grije să o ți întotdeauna sigură și securizată."
					},
					incorrect: {
						title: "Hmm...",
						message: "Cheia privată pe care ai introdus-o nu este corecta! Vrei să introduci din nou cheia privată sau să vizualizezi datele contului inițial?",
						tryAgain: "Încearcă să introduci din nou",
						seeOriginal: "Vizualizează datele contului inițial"
					},
					recheck: "Verificat"
				},
				ok: "OK"
			},
			verifyRealAccountData: {
				title: "Verifică datele contului real",
				message: "Reintrodu adresa salvată, cheia publică și cheia privată pentru a verifica daca se potrivesc",
				address: "Adresa",
				publicKey: "Cheia publică",
				privateKey: "Cheia privată",
				dataMatched: "Totul pare în ordine, adresa introdusă, cheia publică, și cheia privată se potrivesc.",
				verify: "Verifică"
			},
			addAccount: {
				title: "Adaugă un cont existent",
				privateKey: "Cheia privată a contului",
				wallet: "Portofel",
				password: "Parola portofelului",
				successMessage: "Contul {{1}} {{#2}}({{2}}){{/2}} a fost adăugat în portofel!",
				add: "Adaugă",
				label: "Etichetă"
			},
			setPrimary: {
				title: "Stabilește cont primar",
				account: "Cont pentru a fi stabilit ca primar",
				noLabel: "<span class=\"null\"><Fără etichetă></span>",
				wallet: "Portofel",
				password: "Parola portofelului",
				successMessage: "Contul {{1}} {{#2}}({{2}}){{/2}} a fost stabilit ca primar!",
				set: "Stabilește ca primar"
			},
			changeWalletName: {
				title: "Schimbă numele portofelului",
				wallet: "Numele actual al portofelului",
				newName: "Numele nou al portofelului",
				password: "Parola portofelului",
				successMessage: "Numele portofelului a fost schimbat cu succes de la <em>{{1}}</em> la <em>{{2}}</em>",
				change: "Schimbă"
			},
			changeWalletPassword: {
				title: "Schimbă parola portofelului",
				wallet: "Portofel",
				password: "Parola actuală",
				newPassword: "Parola nouă",
				confirmPassword: "Confirmă parola nouă",
				successMessage: "Parola portofelului a fost schimbată cu succes",
				change: "Schimbă",
				passwordNotMatchTitle: "Oops!",
				passwordNotMatchMessage: "Parola introdusă si confirmarea parolei nu se potrivesc. Te rog asigură-te că introduci noua parolă corect."
			},
			changeAccountLabel: {
				title: "Schimbă eticheta contului",
				label: "Eticheta contului",
				wallet: "Portofel",
				password: "Parola contului",
				successMessage: "Contul {{1}} este etichetat {{2}}",
				change: "Schimbă"
			},
			removeAccount: {
				title: "Înlătură contul",
				wallet: "Portofel",
				password: "Parola portofelului",
				warning: "Te rog să asigură-te că contul tău nu mai are nici un NEM în el înainte să îl înlături, în caz contrar aceștia vor fi pierduți pentru totdeauna.",
				successMessage: "Contul {{1}} {{#2}}({{2}}){{/2}} a fost înlăturat!",
				remove: "Înlătură"
			},
			nisUnavailable: {
				title: "NIS indisponibil",
				message: "Deconectat de la NIS, se așteaptă conexiunea"
			},
			shutdown: {
				title: "Închide programul",
				message: "Ești sigur că dorești să închizi NEM Community Client?"
			},
			activateRemote: {
				title: "Activează recoltarea de la distanță",
				wallet: "Portofel",
				account: "Cont",
				hoursDue: "Scadență",
				password: "Parola portofelului",
				activate: "Activează"
			},
			deactivateRemote: {
				title: "Dezactivează recoltarea de la distanță",
				wallet: "Portofel",
				account: "Cont",
				hoursDue: "Scadență",
				password: "Parola portofelului",
				deactivate: "Dezactivează"
			},
			startRemote: {
				title: "Pornește recoltarea de la distanță",
				wallet: "Portofel",
				account: "Cont",
				password: "Parola portofelului",
				start: "Pornește"
			},
			stopRemote: {
				title: "Oprește recoltarea de la distanță",
				wallet: "Portofel",
				account: "Cont",
				password: "Parola portofelului",
				stop: "Oprește"
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer.\n\nTo prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away.",
			}
		},
		landing: {
			logo: "images/nem_logo.png",
			importSuccess: "Portofelul a fost importat cu succes!",
			nav: {
				start: "Primii<strong>Pași</strong>",
				about: "Despre <strong>NEM</strong>",
				settings: "<strong>Setări</strong>"
			},
			main: {
				leftTitle: "Nou în <em>NEM</em>?",
				leftButton: "Crează portofel nou",
				walletNamePlh: "Numele portofelului tău",
				passwordPlh: "Parola",
				create: "Crează",
				rightTitle: "Ești deja un <em>NEM</em>bru?",
				rightButton: "Deschide portofelul",
				openButton: "Deschide",
				walletsFound: "<strong>{{1}}</strong> <em>portofelul</em> a fost găsit",
				copyright: "Fotografie de <em>Cas Cornelissen</em>"
			},
			carousel: {
				items: [{
					title: "NCC îți encripteaza portofelul",
					description: "<em>Securitatea</em> este foarte importantă în NEM pentru a evita furtul de monede NEM &amp; active."
				}, {
					title: "NCC îți encripteaza portofelul",
					description: "<em>Securitatea</em> este foarte importantă în NEM pentru a evita furtul de monede NEM &amp; active."
				}]
			},
			about: {
				sections: [{
					title: "Cum funcționează NCC?",
					paragraphs: [
						"<strong>NCC</strong> facilitează accesul către activele și monedele tale la fel ca portofelele tradiționale. Ai voie",
						"<strong>NCC</strong> necesită acces către <strong>NIS</strong> server pentru a putea funcționa. Standardul este să ai un nod local activ (este instalat împreună cu <strong>NCC</strong>)",
						"Poți deasemeni să configurezi accesul către un remote <strong>NIS</strong>."
					],
					listItems: [
						"Ai multiple portofele",
						"Definește multiple conturi pentru a fi introduse într-un portofel"
					]
				}, {
					title: "Ce este &#42;NIS?",
					paragraphs: [
						"Acest component este responsabil de a ține <strong>NEM</strong> cloud-ul activ.",
						"Cu cât mai mult <strong>NIS</strong> cu atât mai bună securitate.",
						"<strong>NIS</strong> este punctul de acces către <strong>NEM</strong> cloud."
					],
					legend: "<strong>&#42;NIS</strong> înseamnă <strong>NEM Infrastructure Server</strong>"
				}]
			},
			footer: {
				copyright: "&copy; Copyright 2014. NEM Community Client."
			}
		},
		wallet: {
			logo: "images/nem_logo.png",
			lastAccess: "Aproximativ cu {{1}} zile în urmă",
			lastAccessJustNow: "Chiar acum",
			lastAccessTooltip: "Ultima accesare a fost {{1}}",
			primary: "primar",
			primaryShort: "P",
			noLabel: "<Fără etichetă>",
			copiedToClipboard: "Adresa a fost copiată în clipboard!",
			actions: {
				refreshInfo: "Actualizează informația",
				bootLocalNode: "Pornește nodul local",
				changeWalletName: "Schimbă numele portofelului",
				changeWalletPassword: "Schimbă parola portofelului",
				mergeWallets: "Unește portofele",
				exportWallet: "Exportă portofelul",
				createAccount: "Crează cont nou",
				createRealAccountData: "Crează date reale de cont",
				verifyRealAccountData: "Verifică datele contului real",
				addAccount: "Adaugă un nou cont existent",
				changeAccountLabel: "Schimbă eticheta contului",
				setPrimary: "Stabilște ca cont primar",
				removeAccount: "Înlătură cont",
				clientInfo: "Client Info",
				closeWallet: "Închide portofelul",
				closeProgram: "Închide programul",
				copyClipboard: "Copiază adresa în clipboard"
			},
			nav: [
				"Panou principal",
				"Mesaje",
				"Contacte",
				"Tranzacții",
				"Blocuri recoltate",
				"Bursă",
				"Știri",
				"Aplicații",
				"Conturi",
				"Setări",
				"Închide program"
			],
			bootNodeWarning: "Un nod local trebuie să fie pornit pentru a putea folosi proprietățile NCC."
		},
		dashboard: {
			assets: {
				title: "Activele tale"
			},
			importance: {
				title: "Scorul importanței",
				unknown: "Status necunoscut",
				start: "Începe recoltarea",
				harvesting: "Se recoltează",
				stop: "Oprește recoltarea",
				description: "Importanța contului pentru NEM cloud",
				remoteHarvest: {
					activate: "Activează recoltarea de la distanță",
					activating: "Se activează recoltarea de la distanță...",
					active: "Recoltarea de la distanță este activă",
					deactivate: "Dezactivează recoltarea de la distanță",
					deactivating: "Se dezactivează recoltarea de la distanță...",
					startRemoteHarvesting: "Pornește recoltarea de la distanță",
					remotelyHarvesting: "Se recoltează de la distanță",
					stopRemoteHarvesting: "Oprește recoltarea de la distanță"
				}
			},
			transactions: {
				title: "Tranzacții recente",
				sendNem: "Trimite NEM",
				balance: "Sold actual",
				syncStatus: "(la block-ul {{1}}{{#2}} : est. {{3}} zile în urmă{{/2}})",
				unknown: "necunoscut",
				columns: [
					"",
					"Timp",
					"Expeditor/Destinatar",
					"Mesaj",
					"",
					"Detalii",
					"Confirmări",
					"Taxă",
					"Sumă"
				],
				types: {
					pending: "Tranzacție în așteptare",
					outgoing: "Tranzacție de trimis",
					incoming: "Tranzacție de primit",
					self: "Tranzacție proprie"
				},
				noMessage: "Fără mesaj",
				encrypted: "Mesajul este encriptat",
				view: "Vizualizează",
				confirmationsUnknown: 'Unknown',
				pending: "În așteptare",
				seeAll: "Vizualizează toate tranzacțiile",
				noTransactions: "Nu a fost efectuată nici o tranzacție până acum"
			},
			nemValue: {
				title: "Statistici despre valoarea NEM"
			},
			messages: {
				titleTooltip: "Mesaje"
			},
			news: {
				titleTooltip: "Știri"
			},
			notAvailable: "Nu este încă disponibil în versiunea beta"
		},
		transactions: {
			title: "Tranzacții",
			sendNem: "Trimite NEM",
			balance: "Sold actual",
			filters: {
				confirmed: "Confirmat",
				unconfirmed: "Neconfirmat",
				incoming: "De primit",
				outgoing: "De trimis"
			},
			table: {
				columns: [
					"",
					"Timp",
					"Expeditor/Destinatar",
					"Mesaj",
					"",
					"Detalii",
					"Confirmări",
					"Taxă",
					"Sumă"
				],
				types: {
					pending: "Tranzacție în așteptare",
					outgoing: "Tranzacție de trimis",
					incoming: "Tranzacție de primit",
					self: "Tranzacție proprie"
				},
				noMessage: "Fără mesaj",
				encrypted: "Mesajul este encriptat",
				view: "Vizualizează",
				confirmationsUnknown: 'Unknown',
				pending: "În așteptare",
				noTransactions: "Nu a fost efectuată nici o tranzacție până acum",
				loading: "Se încarcă mai multe tranzacții..."
			}
		},
		harvestedBlocks: {
			title: "Block-uri recoltate",
			feeEarned: "Taxe câștigate din ultimele 25 de blockuri recoltate",
			unknown: 'Unknown',
			table: {
				columns: [
					"Block",
					"Timp",
					"Block hash",
					"Taxă"
				],
				noBlocks: "Niciun block nu a fost recoltat încă",
				loading: "Se încarcă mai multe blocuri recoltate"
			},
			harvesting: {
				unknown: "Status necunoscut",
				start: "Începe recoltarea",
				harvesting: "Se recoltează",
				stop: "Oprește recoltarea",
				remoteHarvest: {
					startRemoteHarvesting: 'Start remote harvesting',
					stopRemoteHarvesting: 'Stop remote harvesting'
				}
			}
		},
		settings: {
			title: "Setări",
			settings: [{
				name: "Limbă"
			}],
			save: "Salvează schimbările",
			saveSuccess: "Setările au fost salvate cu succes"
		}
	}
});