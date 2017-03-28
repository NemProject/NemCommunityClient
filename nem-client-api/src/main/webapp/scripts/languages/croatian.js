define({
	id: 'hr',
	name: 'Hrvatski',
	texts: {
		preferences: {
			thousandSeparator: ' ',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Datoteka ne postoji.',
			102: 'Novčanik nije stvoren.',
			103: 'Datoteka novčanika je oštećena. Molim Vas povratite novčanik iz sigurnosne kopije.',
			104: 'Unešena lozinka je netočna. Nadam se da se možete sjetiti točne lozinke jer izgubljenu lozinku je nemoguće povratiti!',
			105: 'Lozinka novčanika nije unešena.',
			106: 'Novčanik mora biti otvoren da biste ga mogli koristiti. Morate unijeti lozinku za novčanik da biste bili sigurni da ste ovlašteni za korištenje istog.',
			107: 'Novčanik ne sadrži taj račun.',
			108: 'Nemoguće je ukloniti račun jer je iznos na njemu veći od 0 XEM-a ili jer pokušavate ukloniti primarni račun.',
			109: 'Drugi novčanik sa istim nazivom već postoji. Molim Vas izaberite drugi naziv za novčanik.',
			110: 'Novčanik već sadrži taj račun.',
			111: 'Naziv novčanika je direktorij',
			112: 'Nastavak datoteke novčanika je netočan.  ',
			113: 'Novčanik se ne može ukloniti.',
			121: 'Datoteka adresara ne postoji.',
			122: 'Adresar nije bio stvoren',
			123: 'Datoteka adresara je oštećena. Molimo vas povratite datoteku adresara iz sigurnosne kopije.',
			124: 'Unesena lozinka je neidpravna.',
			125: 'Nije unesena lozinka adresara',
			127: 'Adresa u adresaru nije pronađena.',
			128: 'Unešena adresa nije ispravna.',
			129: 'Adresar s takvim nazivom već postoji. Molim vas izaberite drugi naziv adresara.',
			130: 'Adresar već sadrži takvu adresu.',
			131: 'Naziv adresara je datoteka',
			132: 'Nastavak naziva datoteke adresara je netočan.',
			133: 'Adresar nije mogao biti izbrisan.',
			202: 'Šifrirana se poruka nije mogla poslati jer primatelj nije nikad napravio niti jednu transakciju.',
			203: 'Račun ne može biti izmjenjen zbog tog što sve potpisnici nisu poznati. Svi potpisnici se moraju nalaziti u istom novčaniku ili moraju imati barem jednu obavljenu transakciju.',
			305: 'NEM infrastrukturni poslužitelj (NIS) nije dostupan. Pokušajte ponovo pokrenuti NEM program. U slučaju da koristite udaljeni NIS, provjerite postavke poslužitelja za ispis grešaka ili koristite drugi udaljeni NIS.',
			306: 'Došlo je do pogreške koju razvojni tim nije predvidio. Ispričavamo se zbog toga. Novi pokušaj bi mogao pomoći, u suprotnom molim Vas pošaljite upit NEM NIS/NCC zajednici.',
			400: 'Neki parametar nedostaje ili je nevažeći.',
			401: 'Ova operacije nije mogla biti sprovedena zato što bi moglo doći do otkrivanja privatnog kluča slanjem na NIS.',
			404: 'Zatraženi resurs nije mogao biti pronađen.',
			500: 'Došlo je do pogreške koju razvojni tim nije predvidio. Ispričavamo se zbog toga. Ponovno pokretanje programa bi moglo pomoći u suprotnom molimo vas da grešku prijavite NEM NIS/NCC zajednicom.',
			600: 'Prije slanja i primanje transakcija sa NEM oblaka, NIS poslužitelj mora biti pokrenut. Molim Vas da u NCC izborniku koristite stavku za pokretanje lokalnog čvora.',
			601: 'NIS čvor je već pokrenut. Sljedeći pokušaj za pokretanje NIS čvora nije moguć.',
			602: 'Skoro spreman. NEM infrastrukturni poslužitelj trenutno učitava blokove. Novčanik će biti funkcionalan nakon što se baza u potpunosti učita.',
			699: 'Dostignut je najveći dopušteni broj žetveoca na poslužitelju.',
			700: 'Navedeni račun ne ispunjava osnovne kriterije za ubiranje blokova. Za ubiranje blokova račun mora sadržavati najmanje iznos od 10000 osiguran XEM-a.',
			901: 'Došlo je do pogreške kod postavljanja u izvanmrežni način rada.',
			1000: 'Privatni i javni ključ koji ste unijeli se ne poklapaju.',
			1001: 'Javni ključ i adresa koju ste unijeli se ne poklapaju.',
			1002: 'Adresa ne pripada glavnoj mreži.',
			1203: 'Datum isteka je u prošlosti. Datum isteka mora biti u roku od jednog dana.',
			1204: 'Datum isteka je predaleko u budućnosti. Datum isteka mora biti u roku od jednog dana.',
			1205: 'Vaš račun ne sadrži ispravan iznos za izvršavanje te transakcije.',
			1206: 'Tekst u poruci je predugačak. Molim Vas, probajte smanjiti dužinu teksta u Vašoj poruci ako ju želite slati.',
			1207: 'Šifra transakcije već postoji u bazi podataka ili u listi nepotvrđenih transakcija.',
			1208: 'Potpis transakcije nije mogao biti provjeren.',
			1209: 'Vremenska oznaka transakcije je predaleko u prošlosti.',
			1210: 'Vremenska oznaka transakcije je predaleko u budućnosti.',
			1219: 'Transakcija je odbačena. Veća naknada povećava šansu za prihvaćanje transakcije.',
			1262: 'Račun se ne može koristiti jer je iznos na računu za povjereno ubiranje je veći od nule.',
			1263: 'Prijenos važnosti odbijen. Operacija prijenosa važnosti se već nalazi na čekanju.',
			1264: 'Povjereno ubiranje je već aktivno.',
			1265: 'Povjereno ubiranje nije aktivno. Nemoguće ga je deaktivirati.',
			1266: 'Transakcija prijenosa važnosti (povjereno ubiranje) je u suprotnosti sa postojećom transakcijom.',
			1271: 'Transakcija potpisa je odbačena. Ovaj račun nije potpisnik višepotpisničkog računa.',
			1273: 'Višepotpisnička transkacija je odbačena. Transakcija nije prepoznata u NEM mreži',
			1274: 'Transakcija nije dozvoljena u višepotpisničkom računu.',
			1275: 'Promjena višepotpisničkog računa je odbačena. Jedan od dodanih računa je već potpisnik.',
			1321: 'Račun je nepoznat. Račun se mora pojaviti barem u jednoj transakciji (pošiljatelja ili primatelja) da bi bio prepoznat u mreži.',

		},
		common: {
			success: 'Uspjeh',
			unknown: 'Nepoznat status',
			unknownMessage: 'Ncc nije dobio odgovor u razumnom roku. Moguće je da je transakcija poslana na mrežu.<br /><br />Molim vas, provjerite transakciju prije ponovnog pokušaja.',
			appStatus: {
				nccUnknown: 'NCC status je nepoznat',
				nccUnavailable: 'NCC je nedostupan',
				nccStarting: 'NCC se pokreće...',
				nisUnknown: 'NIS status je nepoznat',
				nisUnavailable: 'NIS je nedostupan',
				nisStarting: 'NIS se pokreće...',
				notBooted: 'NIS mora biti pokrenut. Molim vas otvorite vaš novčanik i pokrenite lokalni čvor preko skočnog prozora ili podesite postavke automatsko pokretanje.',
				loading: 'Učitavanje blokova iz baze, na bloku: ',
				booting: 'Pokrećem NIS...',
				nisInfoNotAvailable: 'NIS informacije nisu još dostupne. Pokušavam prikupiti informacije NIS-a...',
				synchronizing: 'NIS usklađivanje. Na bloku {{1}}, otprilike {{2}} u zaostatku.',
				daysBehind: {
					0: 'manje od 1 dan',
					1: '1 dan',
					many: '{{1}} dana'
				},
				synchronized: 'NIS je usklađen!',
				noRemoteNisAvailable: 'Nije pronađen niti jedan udaljeni NIS (server), odspojen od interneta?'
			},
			addressBook: 'Adresar',
			password: 'Lozinka',
			passwordValidation: 'Lozinka ne smije biti prazna',
			address: 'Adresa',
			privateLabel: 'Privatna oznaka',
			publicLabel: 'Javna oznaka',
			noCharge: 'Naknada <b>neće</b> biti naplaćena sa trenutnog računa. Višepotpisnički račun to pokriva.',
			fee: 'Naknada',
			multisigFee: 'Višepotpisnička naknada',
			useMinimumFee: 'Koristi najmanju naknadu',
			feeValidation: 'Naknada nemože biti manja od najniže naknade',
			justUse: 'Samo u koristi',
			dueBy: 'Trajanje',
			minutes: 'minute(s)',
			hours: 'sat(i)',
			hoursDue: 'Vremensko razdoblje (sati)',
			hoursDueExplanation: 'Transakcija se odbacuje ako nije uključena u vremenski rok.',
			closeButton: 'Zatvori',
			cancelButton: 'Odustani',
			sendButton: 'Šalji',
			account: 'Račun',
			thisAccount: 'Ovaj račun',
			warning: 'Upozorenje',
			newBuild: 'NEW BUILD',
			newBuildNumber: 'There is new build {{1}} available for download. Check <a class="hyperlink--default", href="http://blog.nem.io">blog.nem.io</a> for details',

		},
		transactionTypes: {
			20: 'TRANSAKCIJA PRIJENOSA',
			21: 'PRIJENOS VAŽNOSTI',
			22: 'PROMJENA MULTISIG RAČUNA',
			23: 'PROVISION NAMESPACE',
			24: 'MOSAIC CREATION',
			25: 'MOSAIC SUPPLY',
			40: 'MULTISIG SIGNATURE',
			50: 'VIŠEPOTPISNIČKA TRANSAKCIJA',
			51: 'VIŠEPOTPISNIČKA TRANSAKCIJA',
			52: 'VIŠEPOTPISNIČKA TRANSAKCIJA',
			53: 'VIŠEPOTPISNIČKA TRANSAKCIJA',
			54: 'VIŠEPOTPISNIČKA TRANSAKCIJA',
			55: 'VIŠEPOTPISNIČKA TRANSAKCIJA',

		},
		transactionDirections: {
			pending: 'Transakcija na čekanju',
			outgoing: 'Odlazna transakcija',
			incoming: 'Dolazna transakcija',
			self: 'Vlastita transakcija',
			importance: 'Transakcija važnosti',
			modification: 'Skupne izmjene više potpisa',
			provision: 'Provision Namespace',
			mosaicCreation: 'Mosaic Creation',
			mosaicSupply: 'Mosaic Supply'
		},
		modals: {
			error: {
				title: 'Oops!',
				caption: 'GREŠKA {{1}}'
			},
			yikes: {
				title: 'Greška!',
				caption: 'info kod {{1}}'
			},
			confirmDefault: {
				yes: 'Da',
				no: 'Ne'
			},
			initialBackup: {
				title: "Welcome to NEM",
				content: "You can create wallet backup from menu in upper right corner."
			},
			settings: {
				title: 'Postavke',
				language: {
					label: 'Jezik'
				},
				remoteServer: {
					tabTitle: 'Udaljeni poslužitelj',
					protocol: 'Protokol',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Port',
					defaultPort: 'Koristi zadani port'
				},
				autoBoot: {
					tabTitle: 'Automatsko pokretanje',
					name: 'Naziv čvora',
					primaryAccount: 'Primarni račun',
					auto: 'Samostalno pokretanje prilikom otvaranja novčanika'
				},
				save: 'Spremi',
				saveSuccess: 'Postavke su uspješno spremljene'
			},
			signToken: {
				title: "Sign a token using account",
				label: "Token (url, string, anything)",
				signature: "Signed token",
				sign: "Sign"
			},
			multisig: {
				title: 'Pretvori račun u višepotpisnički',
				multisigAccount: 'Višepotpisnički račun',
				cosignatories: 'Adrese supotpisnika',
				labelDesc: 'Ovaj račun je označen kao {{1}}',
				nullLabelDesc: 'Ovaj račun nema oznake',
				addCosignatory: '+ Dodaj potpisnika',
				convert: 'Pretvori',
				txConfirm: {
					title: 'Potvrdi pretvaranje u Multisig račun',
					total: 'Ukupno',

				},
				warning: 'Višepotpisnički račun se nalazi u listi supotpisnika što može imati za posljedicu zaključavanje računa i zabranu pristupa sredstvima na istom. Vjerojatno <b>NE</b> želite to učiniti.',
				minCosignatoriesDefaultLabel: 'Use default cosignatories number',
				minCosignatoriesRelativeLabel: 'relative change',
				minCosignatoriesLabel: 'Minimum number of cosignatories',
				minCosignatoriesZero: 'Using zero would cause all cosignatories to be required',
				minCosignatoriesOverflow: 'Specified number is larger than number of cosignatories'
			},
			signMultisig: {
				title: 'Potpiši višepotpisničku transakciju',
				original: {
					from: 'Višepotpisnički račun',
					to: 'Primatelj',
					amount: 'Količina',
					fee: 'Interna naknada',
					deadline: 'Rok'
				},
				multisigFees: 'Višepotpisničke naknade',
				multisigTotal: 'Ukupno',
				sender: 'Potpisnik',
				passwordValidation: 'Lozinka ne smije biti prazna',
				sending: 'Slanje...',
				txConfirm: {
					title: 'Potvrdi Multisig transakciju',
					message: 'Poruka',
					encrypted: 'Poruak je šifrirana',
					noMessage: 'Nema poruke',

				}
			},
			sendNem: {
				title: 'Slanje XEM-a',
				sender: 'Pošiljatelj',
				thisAccount: 'Ovaj račun',
				labelDesc: 'Ovaj račun je označen kao {{1}}',
				nullLabelDesc: 'Ovaj račun nema oznake',
				amount: 'Iznos',
				recipient: 'Račun primatelja',
				recipientValidation: 'Adresa računa mora sadržavati 40 karaktera bez crtica',
				message: 'Poruka',
				encrypt: 'Šifriraj poruku',
				sending: 'Slanje...',
				successMessage: 'Your transaction has been sent successfully! <br><br>Transaction hash: {{1}}',
				txConfirm: {
					title: 'Potvrdi transakciju',
					amount: 'Iznos',
					to: 'Na',
					total: 'Ukupno',
					message: 'Poruka',
					encrypted: 'Poruka je šifrirana',
					noMessage: 'Nema poruke',
					confirm: 'Potvrdi',
					sending: 'Šaljem...'
				},
				notBootedWarning: {
					title: 'Čvor nije pokrenut',
					message: 'Za slanje XEM-a lokalni čvor mora biti pokrenut. '
				},
				bootingWarning: {
					title: 'Čvor se pokreće',
					message: 'Molimo vas pričekajte prije slanja transakcije da se proces pokretanja čvora završi.'
				},
				loadingWarning: {
					title: 'Učitavanje baze'
				}
			},
			clientInfo: {
				title: 'Informacije klijenta',
				ncc: 'NEM Community Client - NCC',
				signer: 'Potpisnik',
				remoteServer: 'Udaljeni poslužitelj',
				local: 'Lokalno',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Usklađen',
				notSync: 'Nije usklađen',
				notConnected: 'Nije spojen na NEM oblak',
				loading: 'Učitavanje...'
			},
			mosaicDetails: 'Mosaic Details',
			transactionDetails: {
				title: 'Detalji transakcije',
				id: 'ID',
				hash: 'Hash',
				type: 'Tip transakcije',
				direction: 'Smjer transakcije',
				pending: 'U tijeku',
				outgoing: 'Odlazno',
				incoming: 'Dolazno',
				self: 'Vlastito',
				sender: 'Pošiljatelj',
				multisigAccount: 'Višepotpisnički račun',
				issuer: 'Izdavatelj',
				recipient: 'Primatelj',
				remote: 'Udaljeno',
				multisigMessage: 'Potpisi prisutni',
				message: 'Poruka',
				noMessage: 'Nema poruka',
				encrypted: 'Poruka je šifrirana',
				time: 'Vremenski zapis',
				confirmations: 'Potvrde',
				confirmationsUnknown: 'Nepoznato',
				amount: 'Iznos',
				multiplier: 'Multiplier',
				innerFee: 'Interna naknada',
				multisigFees: 'Višepotpisničke naknade',
				cosignatory: 'Potpisnik',
				namespace: 'Namespace',
				rentalFee: 'Rental fee',
				mosaicName: 'Mosaic Name',
				mosaicQuantity: 'Mosaic quantity',
				mosaicLevy: 'Mosaic levy',
				description: 'Description',
				propertiesLabel: 'Properties',
				properties: {
					divisibility: 'Divisibility',
					initialSupply: 'Initial supply',
					supplyMutable: 'Is supply mutable',
					transferable: 'Is transferable'
				},
				supplyType: 'Supply type',
				supplyAmount: 'Supply amount',

			},
			accountDetails: {
				title: 'Detalji računa',
				label: 'Oznaka',
				noLabel: 'Nema oznake',
				add: 'Dodaj u adresar',
				remove: 'Ukloni iz adresara',
				balance: 'Stanje',
				vested: 'osiguran',
				importance: 'Važnost',
				publicKey: 'Javni ključ',
				noPublicKey: 'Nema javnog ključa',
				harvestedBlocks: 'Harvested blocks'
			},
			bootLocalNode: {
				title: 'Pokreni lokalni čvor',
				account: 'Račun za pokretanje lokalnog čvora',
				noLabel: '<span class=\'null\'>&lt;Nema oznake&gt;</span>',
				wallet: 'Novčanik',
				node: 'Naziv čvora',
				boot: 'Pokreni',
				booting: 'Pokretanje...',
				warning: 'Upozorenje o pokretanju čvora',
				warningText: 'Pokušavate pokrenuti čvor <u>{{2}}</u><br/><br/>Pokretanje udaljenog čvora korištenjem NCC-a je trenutno nemoguće.',
				warningStatement: 'Vi koristite udaljeni čvor dok je automatsko pokretanje uključeno{{3}}.<br/><br/>Pokretanje udaljenog čvora korištenjem NCC-a je trenutno nemoguće.',
				warningQuestion: 'Jeste li sigurni da želite pokrenuti čvor <u>{{3}}</u> korištenjem privatnog ključa računa {{1}} ({{2}} XEM)?<br><br>To će otkriti <span class=\"sublabelWarning\">privatni ključ</span> tog računa čvoru: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Zatvori novčanik',
				message: 'Jeste li sigurni da želite zatvoriti novčanik i vratiti se na početnu stranicu?'
			},
			createAccount: {
				title: 'Stvori novi račun',
				label: 'Privatna oznaka',
				wallet: 'Novčanik',
				successMessage: 'Račun {{1}} {{#2}}({{2}}){{/2}} je uspješno stvoren!',
				create: 'Stvori'
			},
			showPrivateKey: {
				title: 'Prikaži PRIVATNI ključ računa',
				message: 'Ovo će vaš privatni ključ računa prikazati na ekranu kao tekst. Ovo može biti opasna operacija u slučaju da je vaš sustav zaražen zločudnim programom. Jeste li sigurni da to želite?',
				publicKey: 'Javni ključ',
				privateKey: 'Privatni ključ',
				show: 'Prikaži ključ'
			},
			showRemotePrivateKey: {
				title: 'Prikaži PRIVATNI ključ udaljenog računa.',
				message: 'Ovo će privatni ključ udaljenog računa prikazati na ekranu kao tekst. Ovo može biti opasna operacija u slučaju da je vaš sustav zaražen zločudnim programom. Jeste li sigurni da to želite?',

			},
			addAccount: {
				title: 'Dodaj postojeći račun',
				privateKey: 'Privatni ključ računa',
				wallet: 'Novčanik',
				successMessage: 'Račun {{1}} {{#2}}({{2}}){{/2}} je uspješno dodan u novčanik!',
				add: 'Dodaj',
				label: 'Oznaka'
			},
			setPrimary: {
				title: 'Postavi primarni račun',
				account: 'Račun koji će biti postavljen kao primarni',
				noLabel: '<span class=\'null\'>&lt;Nema oznake&gt;</span>',
				wallet: 'Novčanik',
				successMessage: 'Račun {{1}} {{#2}}({{2}}){{/2}} je postavljen kao primarni!',
				set: 'Postavi kao primarni'
			},
			changeWalletName: {
				title: 'Izmijeni naziv novčanika',
				wallet: 'Trenutni naziv novčanika',
				newName: 'Novi naziv novčanika',
				successMessage: 'Naziv novčanika je uspješno izmijenjen iz <em>{{1}}</em> u <em>{{2}}</em>',
				change: 'Izmijeni'
			},
			changeWalletPassword: {
				title: 'Izmijeni lozinku novčanika',
				wallet: 'Novčanik',
				password: 'Trenutna lozinka',
				newPassword: 'Nova lozinka',
				confirmPassword: 'Potvrdi novu lozinku',
				successMessage: 'Lozinka novčanika je uspješno izmijenjena',
				change: 'Izmijeni',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: 'Unesena lozinka i potvrda lozinke se ne podudaraju. Molimo Vas da upišete novu lozinku ispravno.'
			},
			exportWalletLight: {
				title: 'Export for lightwallet',
				export: 'Export'
			},
			changeAccountLabel: {
				title: 'Izmijeni oznaku računa',
				label: 'Oznaka računa',
				wallet: 'Novčanik',
				successMessage: 'Račun {{1}} je sad označen kao {{2}}',
				change: 'Izmijeni'
			},
			removeAccount: {
				title: 'Ukloni račun',
				label: 'Oznaka računa',
				wallet: 'Pridruženi novčanik',
				warning: 'Molim Vas da prije uklanjanja računa provjerite da isti ne sadrži XEM ili će iznos biti izgubljen zauvijek nakon uklanjanja računa.',
				successMessage: 'Račun {{1}} {{#2}}({{2}}){{/2}} je uspješno uklonjen!',
				remove: 'Ukloni'
			},
			nisUnavailable: {
				title: 'NIS nedostupan',
				message: 'Odspojen od NIS-a, čekanje na vezu'
			},
			shutdown: {
				title: 'Zatvori program',
				message: 'Jeste li sigurni za želite zatvoriti NEM Community Client?'
			},
			activateDelegated: {
				title: 'Aktiviraj povjereno ubiranje',
				wallet: 'Novčanik',
				activate: 'Pokreni',
				warningText: 'Za aktivaciju je potrebno 6 sati (360 blokova). Aktivacija neće automatski započeti ubiranje.',
				delegatedAccount: 'Delegated account public key',
				builtIn: 'built into the wallet',

			},
			deactivateDelegated: {
				title: 'Prekini povjereno ubiranje',
				wallet: 'Novčanik',
				deactivate: 'Deaktiviraj',
				warningText: 'Deaktivacija će trajati 6 sati (360 blokova).'
			},
			startRemote: {
				title: 'Pokreni povjereno ubiranje',
				wallet: 'Novčanik',
				start: 'Start'
			},
			stopRemote: {
				title: 'Prekini povjereno ubiranje',
				wallet: 'Novčanik',
				stop: 'Stop'
			},
			logoutWarning: {
				leavePage: 'Napuštate vaš novčanik. Zapamtite da ako napuštate novčanik na takav način drugi korisnici na ovo računalu će još biti u mogućnosti pristupiti vašem navčaniku. Kako bi to spriječili odjavite se korištenjem opcije u \"Zatvori novčanik\" iz padajućeg menija desno na vrhu.'
			},
			addContact: {
				title: 'Dodaj kontakt',
				add: 'Dodaj'
			},
			editContact: {
				title: 'Uredi kontakt',
				saveChanges: 'Spremi promjene'
			},
			removeContact: {
				title: 'Ukloni kontakt',
				remove: 'Ukloni'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Novčanik je uspješno uvezen!',
			nav: {
				start: 'Početak',
				about: 'O NEM',
				settings: 'Postavke'
			},
			main: {
				leftTitle: 'Novi <em>NEM</em> korisnik?',
				leftButton: 'Stvori novi novčanik',
				walletNamePlh: 'Naziv Vašeg novčanika',
				passwordPlh: 'Lozinka',
				confirmPasswordPlh: 'Potvrdi lozinku',
				create: 'Stvori',
				creating: 'Stvaranje...',
				rightTitle: 'Već si <em>NEM</em>ber?',
				rightButton: 'Otvori novčanik',
				openButton: 'Otvori',
				walletsFound: 'Pronađeno <strong>{{1}}</strong> <em>novčanik(a)</em>',
				copyright: 'Fotografiju ustupio  <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC šifrira vaš novčanik',
						description: '<em>Sigurnost</em> je za NEM  jako važna za sprječavanje krađe XEM novčića &amp; udjela.'
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
						title: 'Kako radi NCC?',
						paragraphs: [
							'<strong>NCC</strong> pruža pristup Vašim udjelima i XEM novčićima kao što to čini običan novčanik. Možete',
							'<strong>NCC</strong> zahtijeva pristup na <strong>NIS</strong> poslužitelj kako bi mogao funkcionirati. Standardno je imati aktivan lokalni poslužitelj (instalira se zajedno sa <strong>NCC</strong>-om)',
							'Moguće je također podesiti pristup na udaljeni <strong>NIS</strong> poslužitelj.'
						],
						listItems: [
							'Koristiti više novčanika',
							'Definirati više računa koji će biti uključeni u novčanik'
						]
					},
					{
						title: 'Što je to &#42;NIS?',
						paragraphs: [
							'Ova komponenta je odgovorna za održavanje <strong>NEM</strong> oblaka.',
							'Sigurnost je bolja što je više <strong>NIS</strong> poslužitelja u mreži.,',
							'<strong>NIS</strong> je pristupna točka <strong>NEM</strong> oblaku.'
						],
						legend: '<strong>&#42;NIS</strong> je oznaka za <strong>NEM Infrastructure Server</strong>'
					}
				]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Otprilike prije {{1}} dan(a)',
			lastAccessJustNow: 'Upravo sad',
			lastAccessTooltip: 'Zadnji pristup na {{1}}',
			primary: 'primarni',
			primaryShort: 'P',
			noLabel: '<Nema oznake>',
			copiedToClipboard: 'Adresa je kopirana u međuspremnik!',
			actions: {
				refreshInfo: 'Osvježi informacije',
				bootLocalNode: 'Pokreni lokalni čvor',
				changeWalletName: 'Izmijeni naziv novčanika',
				changeWalletPassword: 'Izmijeni lozinku novčanika',
				mergeWallets: 'Spoji novčanike',
				exportWallet: 'Izvezi novčanike',
				exportWalletLight: 'Export for Lightwallet',
				createAccount: 'Stvori novi račun',
				createRealAccountData: 'Stvori podatke za stvarni račun',
				verifyRealAccountData: 'Provjeri podatke za stvarnog računa',
				showPrivateKey: 'Prikaži PRIVATNI ključ računa',
				showRemotePrivateKey: 'Prikaži PRIVATNI ključ udaljenog računa',
				viewDetails: 'Prikaži detalje o računu',
				addAccount: 'Dodaj postojeći račun',
				changeAccountLabel: 'Izmijeni oznaku računa',
				setPrimary: 'Postavi kao primarni račun',
				removeAccount: 'Ukloni račun',
				clientInfo: 'Informacije klijenta',
				closeWallet: 'Zatvori novčanik',
				closeProgram: 'Zatvori  program',
				copyClipboard: 'Kopiraj adresu u međuspremnik',
				copyDisabled: 'Kopiranje zahtijeva instalirani \"flash\"',
				convertMultisig: 'Prebaci drugi račun u višepotpisnički'
			},
			nav: [
				'Kontrolna ploča',
				'Poruke',
				'Adresar',
				'Transakcije',
				'Ubrani blokovi',
				'Razmjena udjela',
				'Novosti',
				'Aplikacije',
				'Računi',
				'Postavke',
				'Zatvori program',
				'Namespaces & Mosaics'
			],
			bootNodeWarning: 'Lokalni čvor mora biti pokrenut prije nego što u potpunosti  možete iskoristiti sva NCC svojstva.'
		},
		dashboard: {
			assets: {
				title: 'Your Mosaics'
			},
			importance: {
				title: 'Razina važnosti',
				unknown: 'Nepoznat status',
				start: 'Pokreni ubiranje',
				harvesting: 'Ubiranje',
				stop: 'Prekini ubiranje',
				description: 'Važnost računa u NEM oblaku',
				remoteHarvest: {
					title: 'Delegated harvesting',
					activate: 'Aktiviraj povjereno ubiranje',
					activating: 'Aktivacija povjerenog ubiranja...',
					active: 'Povjereno ubiranje je aktivno',
					deactivate: 'Deaktiviraj povjereno ubiranje',
					deactivating: 'Deaktivacija povjerenog ubiranja...',
					startRemoteHarvesting: 'Pokreni povjereno ubiranje',
					remotelyHarvesting: 'Udaljeno ubiranje',
					stopRemoteHarvesting: 'Prekini povjereno ubiranje',
					multisigInfo: 'Activation or deactivation of a delegated harvesting for a multisig account must be done from one of cosignatory accounts',

				}
			},
			transactions: {
				title: 'Nedavne transakcije',
				sendNem: 'Šalji XEM',
				signMultisig: 'POTPIŠI',
				balance: 'Trenutno stanje',
				loading: 'Učitavanje stanja',
				accountCosignatories: 'Višepotpisnički račun',
				accountCosignatoriesView: 'prikaži potpisnike',
				vestedBalance: 'Osigurani iznos',
				syncStatus: '(na bloku {{1}}{{#2}} : otprilike {{3}} dan(a) u zaostatku {{/2}})',
				notSynced: 'može biti netočno, NIS još nije usklađen',
				unknown: 'nepoznato',
				columns: [
					'',
					'Vrijeme',
					'Pošiljatelj/Primatelj',
					'Poruka',
					'',
					'Detalji',
					'Potvrde',
					'Naknada',
					'Iznos'
				],
				noMessage: 'Nema poruke',
				encrypted: 'Poruka je šifrirana',
				view: 'Pregled',
				confirmationsUnknown: 'Nepoznato',
				pending: 'U tijeku',
				seeAll: 'Pogledaj sve transakcije',
				noTransactions: 'Niti jedna transakcija nije još izvršena'
			},
			nemValue: {
				title: 'XEM statistika vrijednosti'
			},
			messages: {
				titleTooltip: 'Poruke'
			},
			news: {
				titleTooltip: 'Novosti'
			},
			notAvailable: 'Nije još dostupno u beta izdanju'
		},
		transactions: {
			title: 'Transakcije',
			sendNem: 'Šalji XEM',
			balance: 'Trenutno stanje',
			filters: {
				confirmed: 'Potvrđene',
				unconfirmed: 'Nepotvrđene',
				incoming: 'Dolazne',
				outgoing: 'Odlazne'
			},
			table: {
				columns: [
					'',
					'Vrijeme',
					'Pošiljatelj/Primatelj',
					'Poruka',
					'',
					'Detalji',
					'Potvrde',
					'Naknada',
					'Iznos'
				],
				noMessage: 'Nema poruke',
				encrypted: 'Poruka je šifrirana',
				view: 'Pregled',
				confirmationsUnknown: 'Nepoznato',
				pending: 'U tijeku',
				noTransactions: 'Još nema izvršenih transakcija',
				loading: 'Učitavanje više transakcija...'
			}
		},
		namespacesmosaics: {
			title: 'Namespaces & Mosaics',
			newNamespace: 'New Namespace',
			newMosaic: 'New Mosaic',
			balance: 'Trenutno stanje',
			filters: {
				displayAll: 'Display all',
				displayMineonly: 'Display mine only',
				filterNamespace: 'Filter Namespace:',
				filterMosaic: 'Filter Mosaic:'
			},
			table: {
				columns: [
					'Owner',
					'Namespace & Mosaic',
					'Creation',
					'Expiration (est.)'
				],
				loading: 'Loading Namespaces & Mosaics...',
				subNamespace: 'sub-namespace'
			}
		},
		harvestedBlocks: {
			title: 'Ubrani blokovi',
			feeEarned: 'Zarađene naknade od zadnjih 25 ubranih blokova',
			unknown: 'Nepoznato',
			table: {
				columns: [
					'Visina',
					'Vrijeme',
					'Težina bloka',
					'Naknada'
				],
				noBlocks: 'Nema ubranih blokova',
				loading: 'Učitavam više ubranih blokova'
			},
			harvesting: {
				unknown: 'Nepoznat status',
				start: 'Pokreni ubiranje',
				harvesting: 'Ubiranje',
				stop: 'Prekini ubiranje',
				remoteHarvest: {
					startRemoteHarvesting: 'Pokreni povjerno ubiranje',
					stopRemoteHarvesting: 'Prekini povjerno ubiranje'
				}
			}
		},
		addressBook: {
			title: 'Adresar',
			addContact: 'Dodaj kontak',
			table: {
				columns: [
					'Adresa računa',
					'Privatna oznaka',
					'Javna oznaka'
				],
				noContacts: 'Nema unešenih kontakata u vašem adresaru'
			},
			noLabel: 'Bez oznake',
			sendNem: 'Šalji XEM',
			edit: 'Uredi',
			remove: 'Ukloni'
		},
		settings: {
			title: 'Postavke',
			settings: [
				{
					name: 'Jezik'
				}
			],
			save: 'Spremi izmjene',
			saveSuccess: 'Postavke su uspješno spremljene'
		}
	}
});
