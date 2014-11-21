define({
	id: "hr",
	name: "hrvatski",
	texts: {
		preferences: {
			thousandSeparator: " ",
			decimalSeparator: "."
		},
		faults: {
			101: "Datoteka nije pronađena.",
			102: "Novčanik nije stvoren.",
			103: "Datoteka novčanika je oštećena. Molim Vas povratite novčanik iz sigurnosne kopije koju ste trebali napraviti prilikom stvaranja novčanika ili dodavanja računa.",
			104: "Unesena lozinka je netočna. Nadam se da se možete sjetiti točne lozinke jer izgubljenu lozinku je nemoguće povratiti!",
			106: "Novčanik mora biti otvoren da biste ga mogli koristiti. Morate unijeti lozinku za novčanik da biste bili sigurni da ste ovlašteni za korištenje istog.",
			107: "Novčanik ne sadrži taj račun.",
			108: "Nemoguće je ukloniti račun jer je iznos na njemu veći od 0 NEM-ova ili jer pokušavate ukloniti primarni račun.",
			109: "Drugi novčanik sa istim nazivom već postoji. Molim Vas izaberite drugi naziv za novčanik.",
			110: "Novčanik već sadrži taj račun.",
			202: "Šifrirana se poruka nije mogla poslati jer primatelj nije nikad napravio niti jednu transakciju.",
			305: "NEM infrastrukturni poslužitelj nije dostupan.",
			306: "Došlo je do pogreške koju razvojni tim nije predvidio. Ispričavamo se zbog toga. Novi pokušaj bi mogao pomoći, u suprotnom molim Vas pošaljite upit NEM NIS/NCC zajednici.",
			400: "Neki parametar nedostaje ili je nevažeći.",
			401: "Ova operacije nije mogla biti sprovedena zato što bi moglo doći do otkrivanja privatnog kluča slanjem na NIS.",
			404: "Zatraženi resurs nije mogao biti pronađen.",
			500: "Došlo je do pogreške koju razvojni tim nije predvidio. Ispričavamo se zbog toga. Ponovno pokretanje programa bi moglo pomoći u suprotnom molimo vas da grešku prijavite NEM NIS/NCC zajednicom.",
			600: "Za slanje i primanje transakcija sa NEM oblaka, NCC zahtijeva da NIS poslužitelj bude pokrenut. Molim Vas da u NCC izborniku koristite stavku za pokretanje lokalnog čvora.",
			601: "NIS čvor je već pokrenut. Sljedeći pokušaj za pokretanje NIS čvora nije moguć.",
			700: "Navedeni račun ne ispunjava osnovne kriterije za ubiranje blokova. Za ubiranje blokova račun mora sadržavati najmanje 1000 NEM-ova.",
			701: "Datum isteka je u prošlosti. Datum isteka mora biti u roku od jednog dana.",
			702: "Datum isteka je predaleko u budućnosti. Datum isteka mora biti u roku od jednog dana.",
			703: "Stanje na Vašem računu nije dovoljno za slanje određenog iznosa NEMa.",
			704: "Tekst u poruci je predugačak. Molim Vas, probajte smanjiti dužinu teksta u Vašoj poruci ako ju želite slati.",
			705: "Šifra transakcije već postoji u bazi podataka ili u listi nepotvrđenih transakcija.",
			706: "Potpis transakcije nije mogao biti provjeren.",
			707: "Vremenska oznaka transakcije je predaleko u prošlosti.",
			708: "Vremenska oznaka transakcije je predaleko u budućnosti.",
			709: "Račun je nepoznat. Račun se mora pojaviti barem u jednoj transakciji (pošiljatelja ili primatelja) da bi bio prepoznat u mreži.",
			901: "Došlo je do pogreške kod postavljanja u izvanmrežni način rada.",
			1000: "Privatni i javni ključ koji ste unijeli se ne poklapaju.",
			1001: "Javni ključ i adresa koju ste unijeli se ne poklapaju.",
			1002: "Adresa ne pripada glavnoj mreži."
		},
		common: {
			success: "Uspjeh",
			appStatus: {
				nccUnknown: "NCC status je nepoznat",
				nccUnavailable: "NCC je nedostupan",
				nccStarting: "NCC se pokreće...",
				nisUnknown: "NIS status je nepoznat",
				nisUnavailable: "NIS je nedostupan",
				nisStarting: "NIS se pokreće...",
				notBooted: "NIS mora biti pokrenut. Molim vas otvorite vaš novčanik i pokrenite lokalni čvor preko skočnog prozora ili podesite postavke automatsko pokretanje.",
				booting: "Pokrećem NIS...",
				nisInfoNotAvailable: "NIS informacije nisu još dostupne. Pokušavam prikupiti informacije NIS-a...",
				synchronizing: "NIS sinkronizacija. Na bloku {{1}}, otprilike {{2}} u zaostatku.",
				daysBehind: {
					0: "manje od 1 dan",
					1: "1 dan",
					many: "{{1}} dana"
				},
				synchronized: "NIS je sinkroniziran!"
			}
		},
		modals: {
			error: {
				title: "Oops!",
				caption: "GREŠKA {{1}}"
			},
			confirmDefault: {
				yes: "Da",
				no: "Ne"
			},
			settings: {
				title: "Postavke",
				language: {
					label: "Jezik"
				},
				remoteServer: {
					tabTitle: "Udaljeni poslužitelj",
					protocol: "Protokol",
					protocolOptions: {
						http: "HTTP"
					},
					host: "Host",
					port: "Port"
				},
				autoBoot: {
					tabTitle: "Automatsko pokretanje",
					name: "Naziv čvora",
					account: "Račun",
					primaryAccount: "Primarni račun",
					auto: "Samostalno pokretanje prilikom otvaranja novčanika"
				},
				save: "Spremi",
				saveSuccess: "Postavke su uspješno spremljene"
			},
			sendNem: {
				title: "Slanje NEMa",
				labelDesc: "Ovaj račun je označen kao {{1}}",
				nullLabelDesc: "Ovaj račun nema oznake",
				amount: "Iznos",
				recipient: "Račun primatelja",
				recipientValidation: 'Account addresses must be 40 character long excluding dashes',
				message: "Poruka",
				encrypt: "Šifriraj poruku",
				fee: "Naknada",
				feeValidation: 'Fee must not be less than the minimum fee',
				dueBy: "zbog",
				useMinimumFee: 'Use minimum fee',
				hours: "sati",
				password: "Lozinka",
				send: "Šalji",
				cancel: 'Cancel',
				sending: "Slanje...",
				successMessage: "Transakcija je uspješno provedena!",
				txConfirm: {
					title: "Potvrdi transakciju",
					amount: "Iznos",
					to: "Na",
					fee: "Naknada",
					dueBy: "Zbog",
					hours: "sat(i)",
					total: "Ukupno",
					message: "Poruka",
					encrypted: "Poruka je šifrirana",
					noMessage: "Nema poruke",
					cancel: "Odustani",
					confirm: "Potvrdi",
					sending: "Šaljem..."
				},
				notBootedWarning: {
					title: "Čvor nije pokrenut",
					message: "Za slanje NEM-a lokalni čvor mora biti prije pokrenut. "
				},
				bootingWarning: {
					title: "Čvor se pokreće",
					message: "Molimo vas pričekajte prije slanja transakcije da se proces pokretanja čvora završi."
				}
			},
			clientInfo: {
				title: "Informacije klijenta",
				ncc: "NEM Community Client - NCC",
				signer: "Potpisnik",
				remoteServer: "Udaljeni poslužitelj",
				local: "Lokalno",
				nis: "NEM Infrastructure Server - NIS",
				sync: "Sinkroniziran",
				notSync: "Nije sinkroniziran",
				notConnected: "Nije spojen na NEM oblak",
				loading: "Učitavanje..."
			},
			transactionDetails: {
				title: "Detalji transakcije",
				id: "ID",
				hash: "Hash",
				type: "Tip transakcije",
				pending: "U tijeku",
				outgoing: "Odlazno",
				incoming: "Dolazno",
				self: "Self",
				sender: "Pošiljatelj",
				recipient: "Primatelj",
				message: "Poruka",
				noMessage: "Nema poruka",
				encrypted: "Poruka je šifrirana",
				time: "Vremenski zapis",
				confirmations: "Potvrde",
				confirmationsUnknown: 'Unknown',
				amount: "Iznos",
				fee: "Naknada"
			},
			bootLocalNode: {
				title: "Pokreni lokalni čvor",
				account: "Račun za pokretanje lokalnog čvora",
				noLabel: "<span class=\"null\">&lt;Nema oznake&gt;</span>",
				wallet: "Novčanik",
				node: "Naziv čvora",
				boot: "Pokreni",
				booting: "Pokretanje..."
			},
			closeWallet: {
				title: "Zatvori novčanik",
				message: "Jeste li sigurni da želite zatvoriti novčanik i vratiti se na početnu stranicu?"
			},
			createAccount: {
				title: "Stvori novi račun",
				label: "Privatna oznaka",
				wallet: "Novčanik",
				password: "Lozinka novčanika",
				successMessage: "Račun {{1}} {{#2}}({{2}}){{/2}} je uspješno stvoren!",
				create: "Stvori"
			},
			createRealAccountData: {
				title: "Stvori stvarni račun",
				message: "Dolje navedeni podaci su za vaš stvarni račun nakon što se NEM pokrene. Spremite adresu javni i privatni ključ negdje na sigurno. Ako izgubite privatni ključ vaš račun i svi stvarni NEM-ovi bit će izgubljeni ZAUVIJEK!",
				address: "Adresa",
				publicKey: "Javni ključ",
				privateKey: "Privatni ključ",
				confirm: {
					title: "Spremi privatni ključ",
					message: "Jeste li sigurni da je vaš privatni ključ spremljen na sigurno mjesto?"
				},
				recheck: {
					title: "Ponovno provjerite vaš spremljeni privatni ključ",
					message: "Molim vas unesite privatni ključ koji vam je nedavno dodijeljen kako bi provjerili da ste ga ispravno premili. Ako ste već izgubili privatni ključ, možda želite stvoriti novi?",
					correct: {
						title: "Lijepo!",
						message: "Čini se da imate spremljen ispravan privatni ključ. Molimo zapamtite da privatni ključ uvijek čuvate na sigurnom."
					},
					incorrect: {
						title: "Hmm...",
						message: "Privatni ključ koji ste unijeli nije ispravan. Da li želite ponovo pokušati unijeti privatni ključ ili pregledati originalne podatke računa?",
						tryAgain: "Pokušajte ponoviti unos",
						seeOriginal: "Pogledaj originalne podatke"
					},
					recheck: "Provjeri"
				},
				ok: "OK"
			},
			verifyRealAccountData: {
				title: "Provjeri stvarne podatke računa",
				message: "Ponovno unesite spremljenu adresu, javni i privatnji ključ radi provjere ispravnosti",
				address: "Adresa",
				publicKey: "Javni ključ",
				privateKey: "Privatni ključ",
				dataMatched: "Sve izgleda uredu, adresa, javni i privatni ključ koji ste unijeli se poklapaju.",
				verify: "Provjeri"
			},
			addAccount: {
				title: "Dodaj postojeći račun",
				privateKey: "Privatni ključ računa",
				wallet: "Novčanik",
				password: "Lozinka novčanika",
				successMessage: "Račun {{1}} {{#2}}({{2}}){{/2}} je uspješno dodan u novčanik!",
				add: "Dodaj",
				label: "Oznaka"
			},
			setPrimary: {
				title: "Postavi primarni račun",
				account: "Račun koji će biti postavljen kao primarni",
				noLabel: "<span class=\"null\">&lt;Nema oznake&gt;</span>",
				wallet: "Novčanik",
				password: "Lozinka novčanika",
				successMessage: "Račun {{1}} {{#2}}({{2}}){{/2}} je postavljen kao primarni!",
				set: "Postavi kao primarni"
			},
			changeWalletName: {
				title: "Izmijeni naziv novčanika",
				wallet: "Trenutni naziv novčanika",
				newName: "Novi naziv novčanika",
				password: "Lozinka novčanika",
				successMessage: "Naziv novčanika je uspješno izmijenjen iz <em>{{1}}</em> u <em>{{2}}</em>",
				change: "Izmijeni"
			},
			changeWalletPassword: {
				title: "Izmijeni lozinku novčanika",
				wallet: "Novčanik",
				password: "Trenutna lozinka",
				newPassword: "Nova lozinka",
				confirmPassword: "Potvrdi novu lozinku",
				successMessage: "Lozinka novčanika je uspješno izmijenjena",
				change: "Izmijeni",
				passwordNotMatchTitle: "Oops!",
				passwordNotMatchMessage: "Unesena lozinka i potvrda lozinke se ne podudaraju. Molimo Vas da upišete novu lozinku ispravno."
			},
			changeAccountLabel: {
				title: "Izmijeni oznaku računa",
				label: "Oznaka računa",
				wallet: "Novčanik",
				password: "Lozinka novčanika",
				successMessage: "Račun {{1}} je sad označen kao {{2}}",
				change: "Izmijeni"
			},
			removeAccount: {
				title: "Ukloni račun",
				wallet: "Novčanik",
				password: "Lozinka novčanika",
				warning: "Molim Vas da prije uklanjanja računa provjerite da isti ne sadrži NEM ili će biti izgubljen zauvijek nakon uklanjanja računa.",
				successMessage: "Račun {{1}} {{#2}}({{2}}){{/2}} je uspješno uklonjen!",
				remove: "Ukloni"
			},
			nisUnavailable: {
				title: "NIS nedostupan",
				message: "Odspojen od NIS-a, čekanje na vezu"
			},
			shutdown: {
				title: "Zatvori program",
				message: "Jeste li sigurni za želite zatvoriti NEM Community Client?"
			},
			activateRemote: {
				title: "Aktiviraj udaljeno ubiranje",
				wallet: "Novčanik",
				account: "Račun",
				hoursDue: "Hours due",
				password: "Lozinka novčanika",
				activate: "Pokreni"
			},
			deactivateRemote: {
				title: "Deaktiviraj udaljeno ubiranje",
				wallet: "Novčanik",
				account: "Račun",
				hoursDue: "Hours due",
				password: "Lozinka novčanika",
				deactivate: "Deaktiviraj"
			},
			startRemote: {
				title: "Započni udaljeno ubiranje",
				wallet: "Novčanik",
				account: "Račun",
				password: "Lozinka novčanika",
				start: "Start"
			},
			stopRemote: {
				title: "Zaustavi udaljeno ubiranje",
				wallet: "Novčanik",
				account: "Račun",
				password: "Lozinka novčanika",
				stop: "Stop"
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer.\n\nTo prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away.",
			}
		},
		landing: {
			logo: "images/nem_logo.png",
			importSuccess: "Novčanik je uspješno uvezen!",
			nav: {
				start: "Početak",
				about: "O NEM",
				settings: "Postavke"
			},
			main: {
				leftTitle: "Novi <em>NEM</em> korisnik?",
				leftButton: "Stvori novi novčanik",
				walletNamePlh: "Naziv Vašeg novčanika",
				passwordPlh: "Lozinka",
				create: "Stvori",
				rightTitle: "Već si <em>NEM</em>ber?",
				rightButton: "Otvori novčanik",
				openButton: "Otvori",
				walletsFound: "Pronađeno <strong>{{1}}</strong> <em>novčanik(a)</em>",
				copyright: "Fotografiju ustupio  <em>Cas Cornelissen</em>"
			},
			carousel: {
				items: [{
					title: "NCC šifrira vaš novčanik",
					description: "<em>Sigurnost</em> je za NEM  jako važna za sprječavanje krađe NEM novčića &amp; udjela."
				}, {
					title: "NCC šifrira vaš novčanik",
					description: "<em>Sigurnost</em> je za NEM jako važna za sprječavanje krađe NEM novčića &amp; udjela."
				}]
			},
			about: {
				sections: [{
					title: "Kako radi NCC?",
					paragraphs: [
						"<strong>NCC</strong> pruža pristup Vašim udjelima i NEM novčićima kao što to čini tradicionalni novčanik. Možete",
						"<strong>NCC</strong> zahtijeva pristup na <strong>NIS</strong> poslužitelj kako bi mogao funkcionirati. Standardno je imati aktivan lokalni poslužitelj (instalira se zajedno sa <strong>NCC</strong>-om)",
						"Moguće je također podesiti pristup na udaljeni <strong>NIS</strong> poslužitelj."
					],
					listItems: [
						"Koristiti više novčanika",
						"Definirati više računa koji će biti uključeni u novčanik"
					]
				}, {
					title: "Što je to &#42;NIS?",
					paragraphs: [
						"Ova komponenta je odgovorna za održavanje <strong>NEM</strong> oblaka.",
						"Što je više <strong>NIS</strong> poslužitelja to je bolja sigurnost.",
						"<strong>NIS</strong> je pristupna točka <strong>NEM</strong> oblaku."
					],
					legend: "<strong>&#42;NIS</strong> je oznaka za <strong>NEM Infrastructure Server</strong>"
				}]
			},
			footer: {
				copyright: "&copy; Copyright 2014. NEM Community Client."
			}
		},
		wallet: {
			logo: "images/nem_logo.png",
			lastAccess: "Otprilike prije {{1}} dan(a)",
			lastAccessJustNow: "Upravo sad",
			lastAccessTooltip: "Zadnji pristup na {{1}}",
			primary: "primarni",
			primaryShort: "P",
			noLabel: "<Nema oznake>",
			copiedToClipboard: "Adresa je kopirana u međuspremnik!",
			actions: {
				refreshInfo: "Osvježi informacije",
				bootLocalNode: "Pokreni lokalni čvor",
				changeWalletName: "Izmijeni naziv novčanika",
				changeWalletPassword: "Izmijeni lozinku novčanika",
				mergeWallets: "Spoji novčanike",
				exportWallet: "Izvezi novčanike",
				createAccount: "Stvori novi račun",
				createRealAccountData: "Stvori podatke za stvarni račun",
				verifyRealAccountData: "Provjeri podatke za stvarnog računa",
				addAccount: "Dodaj postojeći račun",
				changeAccountLabel: "Izmijeni oznaku računa",
				setPrimary: "Postavi kao primarni račun",
				removeAccount: "Ukloni račun",
				clientInfo: "Informacije klijenta",
				closeWallet: "Zatvori novčanik",
				closeProgram: "Zatvori  program",
				copyClipboard: "Kopiraj adresu u međuspremnik"
			},
			nav: [
				"Kontrolna ploča",
				"Poruke",
				"Kontakti",
				"Transakcije",
				"Ubrani blokovi",
				"Razmjena udjela",
				"Novosti",
				"Aplikacije",
				"Računi",
				"Postavke",
				"Zatvori program"
			],
			bootNodeWarning: "Lokalni čvor mora biti pokrenut prije nego što u potpunosti  možete iskoristiti sva NCC svojstva."
		},
		dashboard: {
			assets: {
				title: "Vaši udjeli"
			},
			importance: {
				title: "Razina važnosti",
				unknown: "Nepoznat status",
				start: "Pokreni ubiranje",
				harvesting: "Ubiranje",
				stop: "Prekini ubiranje",
				description: "Važnost računa u NEM oblaku",
				remoteHarvest: {
					activate: "Aktiviraj udaljeno ubiranje",
					activating: "Aktivacija...",
					active: "Udaljeno ubiranje je aktivno",
					deactivate: "Deaktiviraj udaljeno ubiranje",
					deactivating: "Deaktivacija...",
					startRemoteHarvesting: "Započni udaljeno ubiranje",
					remotelyHarvesting: "Udaljeno ubiranje",
					stopRemoteHarvesting: "Prekini udaljeno ubiranje"
				}
			},
			transactions: {
				title: "Nedavne transakcije",
				sendNem: "Šalji NEM",
				balance: "Trenutno stanje",
				syncStatus: "(na bloku {{1}}{{#2}} : otprilike {{3}} dan(a) u zaostatku {{/2}})",
				unknown: "nepoznato",
				columns: [
					"",
					"Vrijeme",
					"Pošiljatelj/Primatelj",
					"Poruka",
					"",
					"Detalji",
					"Potvrde",
					"Naknada",
					"Iznos"
				],
				types: {
					pending: "Transakcija u tijeku",
					outgoing: "Odlazna transakcija",
					incoming: "Dolazna transakcija",
					self: "Vlastita transakcija"
				},
				noMessage: "Nema poruke",
				encrypted: "Poruka je šifrirana",
				view: "Pregled",
				confirmationsUnknown: 'Unknown',
				pending: "U tijeku",
				seeAll: "Pogledaj sve transakcije",
				noTransactions: "Niti jedna transakcija nije još izvršena"
			},
			nemValue: {
				title: "NEM statistika vrijednosti"
			},
			messages: {
				titleTooltip: "Poruke"
			},
			news: {
				titleTooltip: "Novosti"
			},
			notAvailable: "Nije još dostupno u beta izdanju"
		},
		transactions: {
			title: "Transakcije",
			sendNem: "Šalji NEM",
			balance: "Trenutno stanje",
			filters: {
				confirmed: "Potvrđene",
				unconfirmed: "Nepotvrđene",
				incoming: "Dolazne",
				outgoing: "Odlazne"
			},
			table: {
				columns: [
					"",
					"Vrijeme",
					"Pošiljatelj/Primatelj",
					"poruke",
					"",
					"Detalji",
					"Potvrde",
					"Naknada",
					"Iznos"
				],
				types: {
					pending: "Transakcija u tijeku",
					outgoing: "Odlazna transakcija",
					incoming: "Dolazna transakcija",
					self: "Vlastita transakcija"
				},
				noMessage: "Nema poruke",
				encrypted: "Poruka je šifrirana",
				view: "Pregled",
				confirmationsUnknown: 'Unknown',
				pending: "U tijeku",
				noTransactions: "Još nema izvršenih transakcija",
				loading: "Učitavanje više transakcija..."
			}
		},
		harvestedBlocks: {
			title: "Ubrani blokovi",
			feeEarned: "Zarađene naknade od zadnjih 25 ubranih blokova",
			unknown: 'Unknown',
			table: {
				columns: [
					"Visina",
					"Vrijeme",
					"Šifra bloka",
					"Naknada"
				],
				noBlocks: "Nema ubranih blokova",
				loading: "Učitavam više ubranih blokova"
			},
			harvesting: {
				unknown: "Nepoznat status",
				start: "Pokreni ubiranje",
				harvesting: "Ubiranje",
				stop: "Prekini ubiranje",
				remoteHarvest: {
					startRemoteHarvesting: 'Start remote harvesting',
					stopRemoteHarvesting: 'Stop remote harvesting'
				}
			}
		},
		settings: {
			title: "Postavke",
			settings: [{
				name: "Jezik"
			}],
			save: "Spremi izmjene",
			saveSuccess: "Postavke su uspješno spremljene"
		}
	}
});