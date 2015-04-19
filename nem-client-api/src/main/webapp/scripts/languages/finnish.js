define({
	id: 'fi',
	name: 'suomi',
	texts: {
		preferences: {
			thousandSeparator: ' ',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Lompakkotiedostoa ei löydy.',
			102: 'Lompakkoa ei ole luotu.',
			103: 'Lompakkotiedosto on vaurioitunut. Palauta lompakkotiedosto varmuuskopiosta.',
			104: 'Syöttämäsi salasana ei ole oikea.',
			105: 'Et syöttänyt salasanaa.',
			106: 'Jos haluat käyttää lompakkoa, se pitää avata. Avataksesi lompakon, on sinulla oltava salasana.',
			107: 'Lompakko ei sisällä tätä tiliä.',
			108: 'Tiliä ei voida poistaa. Tämä johtuu todennäköisesti siitä, että tilin saldo on suurempi kuin 0 XEM, tai yrität poistaa ensisijaista tiliä.',
			109: 'Samanniminen lompakko on jo olemassa. Valitse lompakolle toinen nimi.',
			110: 'Lompakko sisältää jo tämän tilin.',
			111: 'Lompakon nimi on hakemisto.',
			112: 'Lompakkotiedoston laajennus on väärä.',
			113: 'Lompakkoa ei voitu poistaa.',
			121: 'Osoitekijatiedostoa ei ole.',
			122: 'Osoitekirjaa ei ole luotu.',
			123: 'Osoitekirjatiedosto on viallinen, palauta se varmuuskopiosta.',
			124: 'Syöttämäsi osoitekirjan salasana on väärä.',
			125: 'Et syöttänyt osoitekirjan salasanaa.',
			127: 'Osoitekirja ei sisällä tätä osoitetta.',
			128: 'Osoite ei ole oikea.',
			129: 'Samalla nimellä oleva osoitekija on jo olemassa. Valitse osoitekirjalle toinen nimi.',
			130: 'Osoitekirja sisältää jo antamasi osoitteen.',
			131: 'Osoitekirjan nimi on hakemisto.',
			132: 'Osoitekirjan laajennustiedosto on väärä.',
			133: 'Osoitekirjaa ei voida poistaa.',
			202: 'Salattua viestiä ei voida lähettää, koska vastaanottaja ei ole tehnyt koskaan tilisiirtoa.',
			203: 'Tiliä ei voida muuntaa, koska kaikki allekirjoituskumppanit eivät ole tunnettuja. Heidän täytyy kuulua samaan lompakkoon tai vähintään yksi siirto täytyy olla tehtynä.',
			305: 'NIS ei ole käytettävissä. Yritä käynnistää NEM-sovellus uudelleen. Mikäli yrität käyttää NIS-palvelua etänä, tarkista kirjoitusvirheet (host), tai käytä toista etä-NIS -palvelua.',
			306: 'Esiintyi ongelma, jota kehitystiimi ei ole tavannut aikaisemmin. Pahoittelemme tilannetta, yritä uudelleen. Muussa tapauksessa avaa uusi keskustelu NEM:n keskustelualueella NIS/NCC -kohdassa.',
			400: 'Jotkut parametrit puuttuvat tai ovat viallisia.',
			401: 'Tätä toimintoa ei voida saattaa loppuun, koska muutoin on mahdollista että \'private key\' näkyy ulkopuolisille, mikäli se lähetetään etä-NIS -palveluun.',
			404: 'Lähdettä ei löydy.',
			500: 'Esiintyi ongelma, jota kehitystiimi ei ole tavannut aikaisemmin. Pahoittelemme tilannetta, yritä uudelleen. Muussa tapauksessa avaa uusi keskustelu NEM:n keskustelualueella NIS/NCC -kohdassa.',
			600: 'NCC vaatii NIS-palvelimen uudelleenkäynnistyksen, jotta siirtoja voidaan suorittaa NEM cloud palvelusta. Käytä NCC:n menua käynnistääksesi Local noden uudelleen.',
			601: 'NIS on jo käynnistetty uudelleen.',
			602: 'Melkein valmista. NIS lataa lohkoja. Lompakko on käytettävissä, kun tietokanta on täysin ladattu.',
			699: 'Louhijoiden maksimimäärä palvelimella on saavutettu.',
			700: 'Louhintaa ei voida aloittaa. Toiminto on mahdollista, kun tilisi saldo on vähintään 10000 XEM.',
			701: 'Aikaraja on ylitetty. Aikaraja on oltava yhden päivän sisällä.',
			702: 'Valittu aikaraja on liian kaukana tulevaisuudessa. Aikaraja täytyy olla yhden päivän sisällä.',
			703: 'Tilisi saldo ei ole oikea tälle siirrolle.',
			704: 'Teksti on liian pitkä lähetettäväksi siirron mukana. Yritä lyhentää viestiä.',
			705: 'Hash on jo tietokannassa tai siirtoja on vahvistamatta.',
			706: 'Siirron allekirjoitusta ei voida varmistaa.',
			707: 'Siirron aikamerkintä on liian kaukana menneisyydessä.',
			708: 'Siirron aikamerkintä on liian kaukana tulevaisuudessa.',
			709: 'Tili on tuntematon. Tilin täytyy olla tehnyt ainakin yksi siirto (joko lähettäjänä tai vastaanottajana), jotta se voidaan tunnistaa verkossa.',
			710: 'Siirtoa ei hyväksytty, koska siirtojen välimuisti on täynnä. Korkeampi palkkio parantaaa mahdollisuutta siirron hyväksymiseen.',
			730: 'Merkityksen siirto (valtuutettu louhinta) on ristiriidassa olemassa olevan siirron kanssa.',
			731: 'Valtuutetulla louhintatilillä ei ole saldoa, joten sitä ei voida käyttää.',
			732: 'Siirtoa ei hyväksytty, viivästynyt siirto on vielä käynnissä.',
			733: 'Valtuutettu louhinta on jo käytössä.',
			734: 'Ei voida deaktivoida, koska valtuutettu louhinta ei ole käytössä.',
			740: 'Siirtoa ei sallita multisig-tilille.',
			741: 'Multisig allekirjoitettu siirto hylättiin. Nykyinen tili ei ole multisig-tilin allekirjoittaja.',
			742: 'Multisig allekirjoitettu siirto hylättiin. Allekirjoittajakumppania ei tunneta NEM verkossa.',
			743: 'Multisig-tilin muutos hylätty. Yksi lisätty tili on jo allekirjoittaja.',
			901: 'Offline-moden käynnistyksessä tapahtui virhe.',
			1000: 'Private key ja public key eivät vastaa toisiaan.',
			1001: 'Public key ja osoite eivät vastaa toisiaan.',
			1002: 'Osoite ei kuulu varsinaiseen verkkoon.'
		},
		common: {
			success: 'Onnistui',
			unknown: 'Tuntematon tila',
			unknownMessage: 'NCC ei saanut vastausta oikeassa ajassa. Siirto saattoi kuitenkin onnistua.<br /><br />Tarkista siirrot ennen kuin yrität siirtoa uudelleen.',
			appStatus: {
				nccUnknown: 'NCC:n tila on tuntematon.',
				nccUnavailable: 'NCC ei ole käytettävissä.',
				nccStarting: 'NCC on käynnistymässä...',
				nisUnknown: 'NIS:n tila on tuntematon',
				nisUnavailable: 'NIS ei ole käytettävissä',
				nisStarting: 'NIS on käynnistymässä...',
				notBooted: 'NIS on käynnistettävä uudelleen. Avaa lompakkosi ja käynnistä local node uudelleen popup-valikosta, jotta voit muuttaa auto-boot asetuksia.',
				loading: 'Ladataan lohkoja tietokannasta, lohkossa:',
				booting: 'NIS on käynnistymässä uudelleen...',
				nisInfoNotAvailable: 'NIS info ei ole vielä käytettävissä. Yritetään hakea NIS infoa...',
				synchronizing: 'NIS:n synkronointi on käynnissä. Lohko {{1}}, {{2}} takana.',
				daysBehind: {
					0: 'Vähemmän, kuin yksi päivä.',
					1: 'Yksi päivä',
					many: '{{1}} päivää'
				},
				synchronized: 'NIS on synkronoitu!',
				noRemoteNisAvailable: 'NIS ei löydy verkosta, tarkista internet-yhteys?'
			},
			addressBook: 'Osoitekirja',
			password: 'Salasana',
			passwordValidation: 'Salasana ei voi olla tyhjä',
			address: 'Osoite',
			privateLabel: 'Yksityinen merkintä',
			publicLabel: 'Julkinen merkintä',
			noCharge: 'Olemassa olevaa tiliä <b>ei</b> veloiteta, se katetaan multisig-tililtä.',
			fee: 'Palkkio',
			justUse: 'Käytä',
			dueBy: 'Maksettava',
			hours: 'Tunnit',
			hoursDue: 'Erääntyy (tunneissa)',
			hoursDueExplanation: 'Siirto hylätään, jos sitä ei tehdä ennen erääntymistä.',
			closeButton: 'Sulje'
		},
		transactionTypes: [
			'SIIRTO LÄHETYS',
			'IMPORTANCE LÄHETYS',
			'MULTISIG TILIN MUOKKAUS',
			'MULTISIG SIIRTO'
		],
		transactionDirections: {
			pending: 'Vireillä oleva siirto',
			outgoing: 'Lähtevä siirto',
			incoming: 'Tuleva siirto',
			self: 'Siirto itselle',
			importance: 'Importance siirto',
			modification: 'Multisig-tilin muokkaus'
		},
		modals: {
			error: {
				title: 'Hups!',
				caption: 'Virhe {{1}}'
			},
			yikes: {
				title: 'Ou nou!',
				caption: 'Koodin tieto {{1}}'
			},
			confirmDefault: {
				yes: 'Kyllä',
				no: 'Ei'
			},
			initialTy: {
				title: "TERVETULOA NEM:iin",
				content: "<c>Sbhaqrq ba gur fgebat cevapvcyrf bs rtnyvgnevna naq rdhnyvgl va qvfgevohgvba, gur Arj Rpbabzl Zbirzrag, ARZ, unf abj svanyyl pbzr gb sehvgvba nsgre pybfr gb 14 zbaguf bs vagrafvir qrirybczrag. Va nqqvgvba gb 5 pber qrirybcref naq 7 pber znexrgref, jr unir n ubfg bs pbzzhavgl zrzoref jub unir urycrq hf va bar jnl be nabgure, jvgubhg jubz, guvf jbhyq arire unir pbzr gbtrgure fb jryy nf orvat bar bs gur srj pelcgb vavgvngvirf jvgu fhpu n ovt grnz. Fcrpvny zragvba vf tvira gb gur sbyybjvat:</c><ue/><c><o>Grpuavpny naq Znexrgvat vachg:</o><oe/> Nzl, naqzr, nirentrwbr, OenvaBsZnffrf, qmnezhfpu, RSSI, Rynan82, rexxv, servtrvfg, unccl4209, vafgnpnfu, wnqrqwnpx, XrivaYv, XxbgArz, xbbernz, Xelfgb, Ybv Gena, ylxn, zvkznfgre, ZeCbegZna, arzovg, akxbvy, bjba, Cnagure03, curebzbar, erabgrat.yv, evtry, FnhyTenl, funjayrnel, fbyvk, fgbar, guvyba, haibvqcy, munaxnvjra, mbngn87, 守望者, 攻陳τч酨鈊, 清风, 福泽天下</c><ue/><c><o>APP Hfre Vagresnpr genafyngvba:</o><oe/>ncrk, obrfgva, Punbf514, QVZXNMQF, svypurs, servtrvfg, Thyvire, vnzvavgabj06, Wnarn4cqn, xhccnynugv, Ypuneyrf, znegvfznegvf, zrff-yrybhpu, Cnenan, evtry, Funja, Fcvqre, 楊 輝彦</c><c><oe/>Va nqqvgvba gb gur nobir 67 grnz zrzoref, jr nyfb unir bgure zrzoref jub  pbagevohgrq, jurgure va grpuavpny, znexrgvat be fgerff grfgvat gur flfgrz qhevat gur nycun naq orgn cunfr. Jr jbhyq yvxr gb nqqvgvbanyyl gunax nyy gubfr vaqvivqhnyf abg yvfgrq urer naq gur terngre ARZ pbzzhavgl orpnhfr jvgubhg gurz, jr jbhyq unir abg rire pbzr fb sne.</c><ue/><c>Naq zbfg vzcbegnagyl<oe/><o>Gunax LBH!</o><oe/><oe/>Arj Rpbabzl fgnegf jvgu LBH!</c>"
			},
			initialBackup: {
				title: "Tervetuloa NEM:iin",
				content: "Voit tehdä lompakostasi varmuuskopion oikean ylänurkan valikossa."
			},
			settings: {
				title: 'Asetukset',
				language: {
					label: 'Kieli'
				},
				remoteServer: {
					tabTitle: 'Etäpalvelin',
					protocol: 'Protokolla',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Port',
					defaultPort: 'Käytä oletusporttia.'
				},
				autoBoot: {
					tabTitle: 'Auto-boot',
					name: 'Noden nimi',
					account: 'Tili',
					primaryAccount: 'Ensisijainen tili',
					auto: 'Automaattinen uudelleenkäynnistys, kun lompakko on avattu'
				},
				save: 'Tallenna',
				saveSuccess: 'Asetukset on tallennettu onnistuneesti'
			},
			multisig: {
				title: 'Muunna tili multisig-tiliksi',
				multisigAccount: 'Multisig-tili',
				cosignatories: 'Allekijoittajien osoitteet',
				labelDesc: 'Tämä tili on nimetty {{1}}',
				nullLabelDesc: 'Tällä tilillä ei ole nimeä',
				addCosignatory: '+ Lisää allekirjoittaja',
				cancel: 'Peruuta',
				convert: 'Muunna',
				fee: 'Palkkio',
				feeValidation: 'Palkkio ei voi olla minimipalkkiota pienempi',
				useMinimumFee: 'Käytä minimipalkkiota',
				txConfirm: {
					title: 'Vahvista multisig-tilin muunto',
					total: 'Yhteensä',

				},
				warning: 'Multisig-tili on allekirjoittajien listalla. Tämä aiheuttaa tilin lukkiutumisen ja estää pääsyn varoihin. Todennäköisesti <b>ET</b> halua tehdä sitä!'
			},
			signMultisig: {
				title: 'Allekirjoita multisig-siirto',
				original: {
					from: 'Multisig-tili',
					to: 'Vastaanottaja',
					amount: 'Summa',
					fee: 'Sisäinen veloitus',
					deadline: 'Määräaika'
				},
				multisigFees: 'Multisig-palkkiot',
				multisigTotal: 'Yhteensä',
				sender: 'Allekirjoittaja',
				fee: 'Palkkio',
				feeValidation: 'Palkkio ei voi olla minimipalkkiota pienempi',
				useMinimumFee: 'Käytä minimipalkkiota',
				password: 'Salasana',
				passwordValidation: 'Salasanakenttä ei voi olla tyhjä',
				send: 'Lähetä',
				cancel: 'Peruuta',
				sending: 'Lähetetään...',
				successMessage: 'Siirto on suoritettu onnistuneesti!',
				txConfirm: {
					title: 'Vahvista multisig-siirto',
					message: 'Viesti',
					encrypted: 'Viesti on salattu',
					noMessage: 'Ei viestiä',

				}
			},
			sendNem: {
				title: 'Lähetä XEM',
				sender: 'Lähettäjä',
				thisAccount: 'Tämä tili',
				labelDesc: 'Tämä tili on nimetty {{1}}',
				nullLabelDesc: 'Tällä tilillä ei ole nimeä',
				amount: 'Summa',
				recipient: 'Vastaanottajan tili',
				recipientValidation: 'Tilin osoite on oltava 40 merkkiä pitkä (viivoja ei lasketa merkeiksi)',
				message: 'Viesti',
				encrypt: 'Salaa viesti',
				fee: 'Palkkio',
				multisigFee: 'Multisig-palkkio',
				feeValidation: 'Palkkio ei voi olla minimipalkkiota pienempi.',
				useMinimumFee: 'Käytä minimipalkkiota',
				password: 'Salasana',
				passwordValidation: 'Salasanakenttä ei voi olla tyhjä',
				send: 'Lähetä',
				cancel: 'Peruuta',
				sending: 'Lähetetään...',
				successMessage: 'Siirto on lähetetty onnistuneesti!',
				txConfirm: {
					title: 'Vahvista siirto',
					amount: 'Summa',
					to: 'Vastaanottaja',
					total: 'Kokonaissumma',
					message: 'Viesti',
					encrypted: 'Viesti on salattu',
					noMessage: 'Ei viestiä',
					cancel: 'Peruuta',
					confirm: 'Vahvista',
					sending: 'Lähetetään...'
				},
				notBootedWarning: {
					title: 'Nodea ei ole käynnistetty uudelleen!',
					message: 'Local node on käynnistettävä uudelleen, jotta XEM voidaan lähettää!'
				},
				bootingWarning: {
					title: 'Node on käynnistymässä uudelleen',
					message: 'Odota, että uudelleenkäynnistys on valmis, ennen kuin teet siirtoja.'
				},
				loadingWarning: {
					title: 'Ladataan tietokantaa'
				}
			},
			clientInfo: {
				title: 'Client info',
				ncc: 'NEM Community Client - NCC',
				signer: 'Allekirjoittaja',
				remoteServer: 'Etäpalvelin',
				local: 'Paikallinen',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Synkronoitu',
				notSync: 'Ei synkronoitu',
				notConnected: 'Ei yhteydessä NEM Cloud -palveluun',
				loading: 'Ladataan...'
			},
			transactionDetails: {
				title: 'Siirron tiedot',
				id: 'ID',
				hash: 'Hash',
				type: 'Siirron tyyppi',
				direction: 'Siirron suunta',
				pending: 'Vireillä oleva',
				outgoing: 'Lähtevä',
				incoming: 'Saapuva',
				self: 'Itse',
				sender: 'Lähettäjä',
				multisigAccount: 'Multisig-tili',
				issuer: 'Myöntäjä',
				recipient: 'Vastaanottaja',
				remote: 'Etä',
				multisigMessage: 'Olemassaolevat allekirjoitukset',
				message: 'Viesti',
				noMessage: 'Ei viestiä',
				encrypted: 'Viesti on salattu',
				time: 'Aikamerkintä',
				confirmations: 'Vahvistuksia',
				confirmationsUnknown: 'Tuntemaon',
				amount: 'Summa',
				fee: 'Palkkio',
				innerFee: 'Sisäinen palkkio',
				multisigFees: 'Multisig-palkkio',
				cosignatory: 'Allekirjoittaja'
			},
			accountDetails: {
				title: 'Tilin tiedot',
				address: 'Osoite',
				label: 'Merkki',
				noLabel: 'Ei merkkiä',
				add: 'Lisää osoitekirjaan',
				remove: 'Poista osoitekirjasta',
				balance: 'Saldo',
				vested: 'Louhittu',
				importance: 'Merkitys',
				publicKey: 'Julkinen avain',
				noPublicKey: 'Ei julkista avainta',
				harvestedBlocks: 'Louhitut lohkot',
				close: 'Sulje'
			},
			bootLocalNode: {
				title: 'Käynnistä local node uudelleen',
				account: 'Tili, jolta local node käynnistetään uudelleen',
				noLabel: '<span class=\'null\'>&lt;Ei nimeä&gt;</span>',
				wallet: 'Lompakko',
				node: 'Noden nimi',
				boot: 'Käynnistä uudelleen',
				booting: 'Käynnistymässä uudelleen...',
				warning: 'Boot node -varoitus',
				warningText: 'Yrität käynnistää noden uudelleen <u>{{2}}</u><br/><br/>Noden käynnistäminen uudelleen ei ole tällä hetkellä mahdollista etänä NCC:stä.',
				warningStatement: 'Sinulla on asetuksissa päällä noden uudelleen käynnistäminen automaattisesti, vaikka olet yhdistänyt nodeen etänä {{3}}.<br/><br/>Noden käynnistäminen uudelleen ei ole tällä hetkellä mahdollista etänä NCC:stä',
				warningQuestion: 'Oletko varma, että haluat käynnistää noden uudelleen <u>{{3}}</u> käyttämällä private keytä tilille {{1}} ({{2}} XEM)?<br><br>tämä paljastaa<span class=\"varoitus\">private keyn</span>  nodelle: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Sulje lompakko',
				message: 'Oletko varma, että haluat sulkea lompakon ja palata aloitussivulle?'
			},
			createAccount: {
				title: 'Luo uusi lompakko',
				label: 'Yksityinen merkintä',
				wallet: 'Lompakko',
				password: 'Lompakon salasana',
				successMessage: 'Tili {{1}} {{#2}}({{2}}){{/2}} on luotu!',
				create: 'Luo'
			},
			showPrivateKey: {
				title: 'Näytä tilin PRIVATE Key',
				message: 'Tämä näyttää tilin private keyn tekstinä näytöllä. Tämä voi olla vaarallinen operaation, jos tietokoneellasi on haittaohjelmia. Jatketaanko tästä huolimatta?',
				publicKey: 'Public key',
				privateKey: 'Private key',
				show: 'Näytä avain'
			},
			showRemotePrivateKey: {
				title: 'Näytä etätilin PRIVATE Key',
				message: 'Tämä näyttää tilin private keyn tekstinä näytöllä. Tämä voi olla vaarallinen operaation, jos tietokoneellasi on haittaohjelmia. Jatketaanko tästä huolimatta?',

			},
			addAccount: {
				title: 'Lisää olemassaoleva tili',
				privateKey: 'Tilin Private Key',
				wallet: 'Lompakko',
				password: 'Lompakon salasana',
				successMessage: 'Tili {{1}} {{#2}}({{2}}){{/2}} on lisätty lompakkoon!',
				add: 'Lisää',
				label: 'Merkki'
			},
			setPrimary: {
				title: 'Aseta ensisijainen tili',
				account: 'Tili on asetettu ensisijaiseksi',
				noLabel: '<span class=\'null\'>&lt;Ei merkkiä&gt;</span>',
				wallet: 'Lompakko',
				password: 'Lompakon salasana',
				successMessage: 'Tili {{1}} {{#2}}({{2}}){{/2}} on asetettu ensisijaiseksi!',
				set: 'Aseta ensisijaiseksi'
			},
			changeWalletName: {
				title: 'Vaihda lompakon nimi',
				wallet: 'Nykyisen lompakon nimi',
				newName: 'Uusi lompakon nimi',
				password: 'Lompakon salasana',
				successMessage: 'Lompakon nimi on vaihdetttu onnistuneesti<em>{{1}}</em> - <em>{{2}}</em>',
				change: 'Vaihda'
			},
			changeWalletPassword: {
				title: 'Vaihda lompakon salasana',
				wallet: 'Lompakko',
				password: 'Nykyinen salasana',
				newPassword: 'Uusi salasana',
				confirmPassword: 'Vahvista uusi salasana',
				successMessage: 'Lompakon salasana on vaihdettu onnistuneesti',
				change: 'Vaihda',
				passwordNotMatchTitle: 'Hups!',
				passwordNotMatchMessage: 'Syöttämäsi salasana ja salasanan vahvistus eivät vastaa toisiaan. Varmista, että syötät uuden salasanasi oikein.'
			},
			changeAccountLabel: {
				title: 'Vaihda tilin nimi',
				label: 'Tilin nimi',
				wallet: 'Lompakko',
				password: 'Lompakon salasana',
				successMessage: 'Tili {{1}} on nimetty {{2}}',
				change: 'Vaihda'
			},
			removeAccount: {
				title: 'Poista tili',
				account: 'Tili',
				label: 'Tilin nimi',
				wallet: 'Lompakko',
				password: 'Lompakon salasana',
				warning: 'Varmista, että tilisi on tyhjä ennen kuin poistat sen, tai muuten menetät kaikki tilille jääneet XEM:t.',
				successMessage: 'Tili {{1}} {{#2}}({{2}}){{/2}} on poistettu',
				remove: 'Poista'
			},
			nisUnavailable: {
				title: 'NIS ei ole käytettävissä',
				message: 'Yhteys NIS:iin katkaistu, odotetaan yhteyttä'
			},
			shutdown: {
				title: 'Sulje ohjelma',
				message: 'Haluatko varmasti sulkea NEM Community Client -sovelluksen?'
			},
			activateRemote: {
				title: 'Aktivoi valtuutettu louhinta',
				wallet: 'Lompakko',
				account: 'Tili',
				password: 'Lompakon salasana',
				activate: 'Aktivoi',
				warning: 'Varoitus',
				warningText: 'Aktivointi kestää 6 tuntia (360 lohkoa). Aktivointi EI aloita louhintaa automaattisesti.'
			},
			deactivateRemote: {
				title: 'Deaktivoi valtuutettu louhinta',
				wallet: 'Lompakko',
				account: 'Tili',
				password: 'Lompakon salasana',
				deactivate: 'Katkaise yhteys',
				warning: 'Varoitus',
				warningText: 'Deaktivointi kestää 6 tuntia (360 lohkoa).'
			},
			startRemote: {
				title: 'Käynnistä valtuutettu louhinta',
				wallet: 'Lompakko',
				account: 'Tili',
				password: 'Lompakon salasana',
				start: 'Käynnistä'
			},
			stopRemote: {
				title: 'Lopeta valtuutettu louhinta',
				wallet: 'Lompakko',
				account: 'Tili',
				password: 'Lompakon salasana',
				stop: 'Pysäytä'
			},
			logoutWarning: {
				leavePage: "Olet poistumassa lompakostasi. Muista, että muut tämän tietokoneen käyttäjät voivat päästä lompakkoosi, jos poistut lompakostasi tällä tavalla. Jos haluat estää muiden pääsyn lompakkoosi, valitse \"Sulje lompakko\" oikean ylänurkan valikosta ennen kuin suljet lompakkosivun."
			},
			addContact: {
				title: 'Lisää yhteystieto',
				add: 'Lisää'
			},
			editContact: {
				title: 'Muokkaa yhteystietoa',
				saveChanges: 'Tallenna muutokset'
			},
			removeContact: {
				title: 'Poista yhteystieto',
				remove: 'Poista'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Lompakko on tuotu onnistuneesti!',
			nav: {
				start: 'Aloitussivu',
				about: 'NEM ',
				settings: 'Asetukset'
			},
			main: {
				leftTitle: 'Uusi <em>NEM-käyttäjä</em>?',
				leftButton: 'Luo uusi lompakko',
				walletNamePlh: 'Lompakkosi nimi',
				passwordPlh: 'Salasana',
				confirmPasswordPlh: 'Vahvista salasana',
				create: 'Luo',
				creating: 'Luodaan...',
				rightTitle: 'Oletko jo <em>NEM</em>-tilin käyttäjä?',
				rightButton: 'Avaa lompakkosi',
				openButton: 'Avaa',
				walletsFound: 'Löydetty <strong>{{1}}</strong> <em>Lompakko(a)</em>',
				copyright: 'Valokuvaaja <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC salaa lompakkosi',
						description: '<em>Lompakon turvallisuus</em> on erittäin tärkeää varkauksien välttämiseksi.'
					},
					{
						title: 'Etä-NIS-palvelin',
						description: 'Käyttämällä etä-NIS-palvelinta sinun ei tarvitse synkronoida lohkoketjua käynnistyksen yhteydessä.',

					},
					{
						title: 'Valtuutettu louhinta',
						description: 'Valtuutetulla louhinnalla voit louhia etä-NIS-palvelinten kautta!',

					},
					{
						title: 'Usean allekirjoituksen siirrot',
						description: 'Turvaa XEM-valuuttasi ja muu omaisuutesi usean allekirjoituksen siirroilla lohkoketjussa.',

					},
					{
						title: 'Kielten tuki',
						description: 'NEM:n käyttöliittymä tukee monia eri kieliä. Katso "Asetukset".'
					},
					{
						title: 'Onko sinulla lisää kysyttävää tai muuta palautetta?',
						description: '<a href="http://forum.ournem.com">forum.ournem.com</a> | #ournem on freenode.org | Telegram',

					}
				]
			},
			about: {
				sections: [
					{
						title: 'Miten NCC toimii?',
						paragraphs: [
							'<strong>NCC</strong> luo yhteyden assetteihisi ja XEM-tilillesi samalla tapaa kuin perinteinen lompakko:',
							'<strong>NCC</strong> vaatii yhteyden <strong>NIS</strong>-palvelimeen ollakseen toimintavalmis. Normaalisti paikallinen palvelin on aktiivinen, kun se on asennettu <strong>NCC</strong>-palvelun kanssa.',
							'Voit myös konfiguroida pääsyn <strong>NIS</strong>-etäpalvelimelle.'
						],
						listItems: [
							'Sinulla voi olla useita lompakoita',
							'Voit määrittää useita tilejä lompakkoosi'
						]
					},
					{
						title: 'Mikä on &#42;NIS?',
						paragraphs: [
							'Tämä komponentti pitää <strong>NEM</strong> cloud-palvelun käynnissä.',
							'The more <strong>NIS</strong> there are in the network, the better the security.,',
							'<strong>NIS</strong> on yhdyspiste <strong>NEM</strong>-cloudiin.'
						],
						legend: '<strong>&#42;NIS</strong> tulee sanoista <strong>NEM Infrastructure Server</strong>'
					}
				]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Noin {{1}} päivää sitten',
			lastAccessJustNow: 'Juuri nyt',
			lastAccessTooltip: 'Viimeinen kirjautuminen oli {{1}}',
			primary: 'Ensisijainen',
			primaryShort: 'E',
			noLabel: '<Ei merkkiä>',
			copiedToClipboard: 'Osoite on kopioitu leikepöydälle!',
			actions: {
				refreshInfo: 'Päivitä Info',
				bootLocalNode: 'Käynnistä Local Node uudelleen',
				changeWalletName: 'Vaihda lompakon nimi',
				changeWalletPassword: 'Vaihda lompakon salasana',
				mergeWallets: 'Yhdistä lompakot',
				exportWallet: 'Vie lompakko',
				createAccount: 'Luo uusi lompakko',
				createRealAccountData: 'Luo real account data',
				verifyRealAccountData: 'Tarkista real account data',
				showPrivateKey: 'Näytä tilin PRIVATE key',
				showRemotePrivateKey: 'Näytä etätilin PRIVATE key',
				viewDetails: 'Näytä tilin tarkemmat tiedot',
				addAccount: 'Lisää olemassaoleva tili',
				changeAccountLabel: 'Vahda tilin nimi',
				setPrimary: 'Aseta ensisijainen tili',
				removeAccount: 'Poista tili',
				clientInfo: 'Client Info',
				closeWallet: 'Sulje lomakko',
				closeProgram: 'Sulje ohjelma',
				copyClipboard: 'Kopioi osoite leikepöydälle',
				copyDisabled: 'Osoitteen kopiointi vaatii toimiakseen flashia',
				convertMultisig: 'Muunna toinen tili multisig-tiliksi'
			},
			nav: [
				'Valikko',
				'Viesti',
				'Osoitekirja',
				'Siirrot',
				'Louhitut lohkot',
				'Asset-vaihdanta',
				'Uutiset',
				'Sovellukset',
				'Tilit',
				'Asetukset',
				'Sulje ohjelma'
			],
			bootNodeWarning: 'Local node täytyy käynnistää uudelleen, jotta saat kaikki NCC:n ominaisuudet käyttöösi.'
		},
		dashboard: {
			assets: {
				title: 'Assettisi'
			},
			importance: {
				title: 'Merkitys',
				unknown: 'Tuntematon tila',
				start: 'Aloita paikallinen louhinta',
				harvesting: 'Louhinta ',
				stop: 'Lopeta paikallinen louhinta',
				description: 'Tilin merkitys NEM-cloud -palvelussa',
				remoteHarvest: {
					activate: 'Aktivoi valtuutettu louhinta',
					activating: 'Aktivoidaan valtuutettua louhintaa...',
					active: 'Valtuutettu louhinta on aktiivinen',
					deactivate: 'Deaktivoi valtuutettu louhinta',
					deactivating: 'Deaktivoidaan valtuutettua louhintaa...',
					startRemoteHarvesting: 'Aloita valtuutettu louhinta',
					remotelyHarvesting: 'Etälouhinta',
					stopRemoteHarvesting: 'Lopeta valtuutettu louhinta'
				}
			},
			transactions: {
				title: 'Viimeisimmät siirrot',
				sendNem: 'Lähetä XEM',
				signMultisig: 'ALLEKIRJOITA',
				balance: 'Saldo',
				loading: 'Ladataan saldoa',
				accountCosignatories: 'Multisig-tili',
				accountCosignatoriesView: 'Näytä allekirjoittajakumppanit',
				vestedBalance: 'Louhittu saldo',
				syncStatus: '(lohko {{1}}{{#2}} : {{3}} päivää takana{{/2}})',
				notSynced: 'Saattaa olla epätarkka, NIS ei ole vielä ajan tasalla',
				unknown: 'Tuntematon',
				columns: [
					'',
					'Aika',
					'Lähettäjä/Vastaanottaja',
					'Viesti',
					'',
					'Tiedot',
					'Vahvistukset',
					'Palkkio',
					'Summa'
				],
				noMessage: 'Ei viestiä',
				encrypted: 'Viesti on salattu',
				view: 'Näytä',
				confirmationsUnknown: 'Tuntematon',
				pending: 'Vireillä oleva',
				seeAll: 'Näytä kaikki siirrot',
				noTransactions: 'Siirtoja ei ole vielä tehty'
			},
			nemValue: {
				title: 'XEM:n arvon statistiikka'
			},
			messages: {
				titleTooltip: 'Viestit'
			},
			news: {
				titleTooltip: 'Uutiset'
			},
			notAvailable: 'Ei vielä saatavilla beta-versiossa'
		},
		transactions: {
			title: 'Siirrot',
			sendNem: 'Lähetä XEM',
			balance: 'Saldo',
			filters: {
				confirmed: 'Vahvistettu',
				unconfirmed: 'Vahvistamaton',
				incoming: 'Saapuva',
				outgoing: 'Lähtevä'
			},
			table: {
				columns: [
					'',
					'Aika',
					'Lähettäjä/Vastaanottaja',
					'Viesti',
					'',
					'Tiedot',
					'Vahvistuksia',
					'Palkkio',
					'Summa'
				],
				noMessage: 'Ei viestiä',
				encrypted: 'Viesti on salattu',
				view: 'Näytä',
				confirmationsUnknown: 'Tuntematon',
				pending: 'Vireillä oleva',
				noTransactions: 'Siirtoja ei ole vielä tehty',
				loading: 'Lataa lisää siirtoja...'
			}
		},
		harvestedBlocks: {
			title: 'Louhitut lohkot',
			feeEarned: 'Ansaittuja palkkioita 25 viimeisestä louhitusta lohkosta',
			unknown: 'Tuntematon',
			table: {
				columns: [
					'Korkeus',
					'Aika',
					'Lohkon vaikeus',
					'Palkkio'
				],
				noBlocks: 'Yhtään lohkoa ei ole vielä louhittu',
				loading: 'Ladataan lisää louhittuja lohkoja'
			},
			harvesting: {
				unknown: 'Tuntematon tila',
				start: 'Aloita paikallinen louhinta',
				harvesting: 'Louhinta ',
				stop: 'Lopeta paikallinen louhinta ',
				remoteHarvest: {
					startRemoteHarvesting: 'Aloita valtuutettu louhinta',
					stopRemoteHarvesting: 'Lopeta valtuutettu louhinta'
				}
			}
		},
		addressBook: {
			title: 'Osoitekirja',
			addContact: 'Lisää yhteystieto',
			table: {
				columns: [
					'Tilin osoite',
					'Yksityinen merkintä',
					'Julkinen merkintä'
				],
				noContacts: 'Osoitekirjassasi ei ole yhteystietoja'
			},
			noLabel: 'Ei merkkiä',
			sendNem: 'Lähetä XEM',
			edit: 'Muokkaa',
			remove: 'Poista'
		},
		settings: {
			title: 'Asetukset',
			settings: [
				{
					name: 'Kieli'
				}
			],
			save: 'Tallenna muutokset',
			saveSuccess: 'Asetukset on tallennettu onnistuneesti'
		}
	}
});
