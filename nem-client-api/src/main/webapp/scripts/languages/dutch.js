define({
	id: 'nl',
	name: 'Nederlands',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Wallet bestaat niet.',
			102: 'Wallet is niet aangemaakt.',
			103: 'Wallet is corrupt. Herstel de wallet met een backup die als het goed is wel is gemaakt.',
			104: 'Opgegeven wachtwoord is niet correct.',
			105: 'Geen wachtwoord opgegeven voor de wallet.',
			106: 'Voordat je met je wallet kan beginnen, moet hij worden geopend. Om er zeker van te zijn dat jij de rechtmatige eigenaar bent, moet je het wachtwoord opgeven.',
			107: 'Accountnummer komt niet voor in de wallet.',
			108: 'De account kan niet worden verwijderd. Waarschijnlijk komt dit omdat er nog XEM in zit. Het kan ook zijn dat de account de primaire account is van de wallet.',
			109: 'Een andere wallet met dezelfde naam bestaat al, kies een andere wallet-naam.',
			110: 'Account komt al voor in de wallet.',
			111: 'De naam van de wallet is een mapnaam.',
			112: 'De bestandextensie van de wallet is niet correct.',
			113: 'De wallet kon niet worden verwijderd.',
			121: 'Het adresboek bestand bestaat niet.',
			122: 'Adresboek is niet aangemaakt. ',
			123: 'Het adresboekbestand is helaas corrupt. Herstel het bestand van een backup.',
			124: 'Het opgegeven wachtwoord van het adresboekbestand is niet correct.',
			125: 'Geen wachtwoord was opgegeven voor het adresboek.',
			127: 'Het opgegeven adres komt niet voor in het Adresboek.',
			128: 'Het opgegeven adres is niet valide.',
			129: 'Een adresboek met dezelfde naam bestaat reeds, kies een andere naam.',
			130: 'Adres komt al voor in het adresboek.',
			131: 'Het adresboek is een mapnaam.',
			132: 'De extensie van het adresboekbestand is niet correct.',
			133: 'Het adresboek kon niet worden verwijderd.',
			202: 'Een beveiligd bericht kan niet worden verstuurd naar de ontvanger omdat hij of zij nog nooit een transactie heeft gemaakt met dit accountnummer.',
			203: 'The account cannot be converted because not all cosignatories are known. They either need to be in the same wallet or have made at least one transaction.',
			305: 'The NEM Infrastructure Server (NIS) is not available.\n\nTry to restart the NEM software.\n\nIf you are using a remote NIS, check your configured host for typing errors or use another remote NIS.',
			306: 'Een fout is opgetreden wat het ontwikkelteam niet heeft voorzien. Onze verontschuldiging hiervoor, misschien helpt het om nog een keer te proberen. Als dat ook niet lukt is het wijs om een ticket te openen binnen de NEM NIS/NCC community.',
			400: 'Een parameter is missend of niet goed.',
			401: 'Deze actie is niet toegestaan, omdat er een privé sleutel naar een remote NIS kan worden verstuurd.',
			404: 'De opgevraagde bron kom niet worden gevonden..',
			500: 'Een fout is opgetreden wat het ontwikkelteam niet heeft voorzien. Onze verontschuldiging hiervoor, misschien helpt het om nog een keer te proberen. Als dat ook niet lukt is het wijs om een ticket te openen binnen de NEM NIS/NCC community.',
			600: 'Voor de NCC (Nem Community Client) is het vereist om de NIS (Network Infrastructure Server) het starten voor het verzenden en ontvangen van transacties van de NEM cloud. Gebruik de NCC menu optie om lokaal te starten.',
			601: 'De NIS node is al gestart. Een tweede poging om te starten is niet mogelijk.',
			602: 'Almost ready. NEM Infrastructure Server is currently loading blocks. Wallet will be functional when db is fully loaded.',
			699: 'Maximaal aantal harvesters toegestaan op deze server is reeds bereikt.',
			700: 'De opgegeven account voldoet niet aan de basis criteria om te harvesten/oogsten. Waarschijnlijk heeft dat te maken met het aantal XEM wat zich in de account bevindt. Harvesten begint bij tenminste 10000 XEM.',
			701: 'De termijn ligt in het verleden en kan alleen geldig zijn binnen een periode van 1 dag.',
			702: 'De termijn ligt te ver in de toekomst en kan alleen geldig zijn binnen een periode van 1 dag.',
			703: 'Your account does not have the right balance to make this transaction.',
			704: 'De tekst is te groot om het te verzenden via NEM. Reduceer de tekst en probeer opnieuw te verzenden.',
			705: 'De hash van de transactie bestaat al in de database van onbevestigde transacties.',
			706: 'De handtekening van de transactie kon niet worden geverifieerd.',
			707: 'De timestamp van de transactie ligt te ver in het verleden.',
			708: 'De timestamp van de transactie ligt te ver in de toekomst.',
			709: 'Het accountnummer is onbekend.  Een account wordt pas bekend op het netwerk als deze deel heeft uitgemaakt van een transactie als verzender of ontvanger.',
			710: 'De transactie is geweigerd omdat de transactie cache vol zit. Een hogere toeslag bevordert de kans dat de transactie wordt geaccepteerd.',
			730: 'Importance transfer transaction (delegated harvesting) conflicts with existing transaction.',
			731: 'Delegated harvesting account has non zero balance and cannot be used.',
			732: 'Prioriteits transfer geweigerd. Er is al een wachtende  prioriteits transfer.',
			733: 'Delegated harvesting is already active.',
			734: 'Delegated harvesting is NOT active. Cannot deactivate.',
			740: 'Transactie niet toegestaan voor de multisig account.',
			741: 'Multisig handtekening transactie geweigerd. Geselecteerde account is geen handtekeninghouder van een multisig account.',
			742: 'Multisig handtekenaar transactie geweigerd. Geassocieerde multisig transactie niet bekend bij het NEM netwerk.',
			743: 'Multisig account aanpassing geweigerd. Een van de toegevoegde accounts is al een handtekeninghouder.',
			901: 'Er is een fout opgetreden bij het instellen van de offline modus.',
			1000: 'De privésleutel en publiekesleutel komen niet overeen.',
			1001: 'De publiekesleutel en het adres komen niet overeen.',
			1002: 'Het adres klopt niet en hoort niet bij het netwerk.'
		},
		common: {
			success: 'Gelukt!',
			unknown: 'Onbekende status',
			unknownMessage: 'Ncc did not get response in a timely manner. Transaction might have been sent to the network.<br /><br />Please, check transactions before attempting to make it again.',
			appStatus: {
				nccUnknown: 'NCC status is onbekend',
				nccUnavailable: 'NCC is niet beschikbaar',
				nccStarting: 'NCC is aan het starten...',
				nisUnknown: 'NIS status is onbekend',
				nisUnavailable: 'NIS is niet beschikbaar',
				nisStarting: 'NIS is aan het starten...',
				notBooted: 'Het is vereist om NIS te (her)starten. Open een wallet en start een lokale bij het popup dialoog.',
				loading: 'Aan het laden van blocks van database, nu bij block: ',
				booting: 'Starten van de NIS...',
				nisInfoNotAvailable: 'NIS info is nog niet beschikbaar. Nu aan het ophalen van NIS info...',
				synchronizing: 'NIS is aan het synchronizeren. Bij block {{1}}, ong. {{2}} achter.',
				daysBehind: {
					0: 'minder dan 1 dag',
					1: '1 dag',
					many: '{{1}} dagen'
				},
				synchronized: 'NIS is gesynchroniseerd!',
				noRemoteNisAvailable: 'Geen remote NIS gevonden in the network, misschien is er geen internet connectie?'
			},
			addressBook: 'Adresboek',
			password: 'Wachtwoord',
			passwordValidation: 'Wachtwoord moet worden ingevuld',
			address: 'Adres',
			privateLabel: 'Privé label',
			publicLabel: 'Public label',
			noCharge: 'Over de Huidige account zullen <b>GEEN</b> toeslagkosten komen, dit wordt afgehandeld met multisig accounts',
			fee: 'Toeslag',
			justUse: 'Gewoon gebruiken',
			dueBy: 'Verzenden voor',
			hours: 'uur',
			hoursDue: 'Binnen (uren)',
			hoursDueExplanation: 'If the transaction isn\'t included by the deadline, it is rejected.',
			closeButton: 'Close'
		},
		transactionTypes: [
			'NORMALE TRANSACTIE',
			'IMPORTANCE TRANSACTIER',
			'AANPASSING VAN EEN MULTISIG ACCOUNT',
			'MULTISIG TRANSACTIE'
		],
		transactionDirections: {
			pending: 'Wachtende transactie',
			outgoing: 'Uitgaande transactie',
			incoming: 'Inkomende transactie',
			self: 'Eigen transactie',
			importance: 'Prioriteits transactie',
			modification: '(Geaggregeerde) aanpassing van Multisig'
		},
		modals: {
			error: {
				title: 'Oeps!',
				caption: 'ERROR {{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Ja',
				no: 'Nee'
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
				title: 'Instellingen',
				language: {
					label: 'Taal'
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
					tabTitle: 'Auto-start',
					name: 'Node naam',
					account: 'Account',
					primaryAccount: 'Primaire account',
					auto: 'Auto starten als een wallet is geopend'
				},
				save: 'Opslaan',
				saveSuccess: 'Instelling zijn met succes opgeslagen'
			},
			multisig: {
				title: 'Converteer een account naar een multisig account',
				multisigAccount: 'Multisig account',
				cosignatories: 'Handtekeninghouder\' adressen',
				labelDesc: 'Deze account is als {{1}} gelabeld',
				nullLabelDesc: 'Deze account heeft geen label',
				addCosignatory: '+ Handtekeninghouder\'toevoegen',
				cancel: 'Annuleer',
				convert: 'Converteer',
				fee: 'Toeslag',
				feeValidation: 'Toeslag mag niet lager zijn dan het minimum',
				useMinimumFee: 'Gebruik minimale toeslag',
				txConfirm: {
					title: 'Bevestig Conversie naar Multisig Account',
					total: 'Totaal',

				},
				warning: 'Multisig account is on the list of cosignatories. This will result in locking down the account cutting off access to the fund. Most likely you <b>DO NOT</b> want to do that.'
			},
			signMultisig: {
				title: 'Signeer multisig transactie',
				original: {
					from: 'Multisig account',
					to: 'Ontvanger',
					amount: 'Bedrag',
					fee: 'Toeslag',
					deadline: 'Deadline'
				},
				multisigFees: 'Multisig toeslagen',
				multisigTotal: 'Totaal',
				sender: 'Handtekeninghouder',
				fee: 'Toeslag',
				feeValidation: 'Toeslag mag niet lager zijn dan het minimum',
				useMinimumFee: 'Gebruik minimale toeslag',
				password: 'Wachtwoord',
				passwordValidation: 'Wachwoord moet worden ingevuld',
				send: 'Verstuur',
				cancel: 'Annuleer',
				sending: 'Verzenden...',
				successMessage: 'Transactie is verzonden!',
				txConfirm: {
					title: 'Bevestig Multisig Transactie',
					message: 'Bericht',
					encrypted: 'Bericht is versleuteld',
					noMessage: 'Geen bericht',

				}
			},
			sendNem: {
				title: 'XEM versturen',
				sender: 'Afzender',
				thisAccount: 'Deze account',
				labelDesc: 'Deze account is als {{1}} gelabeld',
				nullLabelDesc: 'Deze account heeft geen label',
				amount: 'Bedrag',
				recipient: 'Account van ontvanger',
				recipientValidation: 'Accounten moeten een lengte hebben van 40 karakters en/of spaties',
				message: 'Bericht',
				encrypt: 'Beveilig bericht',
				fee: 'Toeslag',
				multisigFee: 'Multisig toeslag',
				feeValidation: 'Toeslag mag niet lager zijn dan het minimum',
				useMinimumFee: 'Gebruik minimale toeslag',
				password: 'Wachtwoord',
				passwordValidation: 'Wachtwoord moet worden ingevuld',
				send: 'Verstuur',
				cancel: 'Afbreken',
				sending: 'Versturen...',
				successMessage: 'Transactie is verzonden!',
				txConfirm: {
					title: 'Bevestig transactie',
					amount: 'Hoeveelheid',
					to: 'Naar',
					total: 'Totaal',
					message: 'Bericht',
					encrypted: 'Bericht is geencrypt',
					noMessage: 'Geen bericht',
					cancel: 'Annuleer',
					confirm: 'Bevestig',
					sending: 'Verzenden...'
				},
				notBootedWarning: {
					title: 'Node is niet gestart!',
					message: 'Een lokale node moet eerst gestart worden om XEM te versturen!'
				},
				bootingWarning: {
					title: 'Node wordt opgestart',
					message: 'Even wachten a.u.b. tot het opstartproces klaar is om je transactie te verzenden.'
				},
				loadingWarning: {
					title: 'Aan het laden van database'
				}
			},
			clientInfo: {
				title: 'Client informatie',
				ncc: 'NEM Community Client - NCC',
				signer: 'signer',
				remoteServer: 'Remote Server',
				local: 'Lokale Server',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Gesynchroniseerd',
				notSync: 'Niet gesynchroniseerd',
				notConnected: 'Kan geen verbinding maken met de NEM Cloud',
				loading: 'Laden...'
			},
			transactionDetails: {
				title: 'Transactie details',
				id: 'ID',
				hash: 'Hash',
				type: 'Type transactie',
				direction: 'Transaction Direction',
				pending: 'Wachten',
				outgoing: 'Uitgaand',
				incoming: 'Inkomend',
				self: 'Zelf',
				sender: 'Afzender',
				multisigAccount: 'Multisig Account',
				issuer: 'Uitgever',
				recipient: 'Ontvanger',
				remote: 'Remote',
				multisigMessage: 'Signatures present',
				message: 'Bericht',
				noMessage: 'Geen bericht',
				encrypted: 'Bericht is beveiligd',
				time: 'Timestamp',
				confirmations: 'Confirmaties',
				confirmationsUnknown: 'Onbekend',
				amount: 'Bedrag',
				fee: 'Toeslag',
				innerFee: 'Inner Fee',
				multisigFees: 'Multisig toeslagen',
				cosignatory: 'Handtekeninghouder'
			},
			accountDetails: {
				title: 'Account details',
				address: 'Adres',
				label: 'Label',
				noLabel: 'Geen label',
				add: 'Toevoegen to het adresboek',
				remove: 'Verwijderen van adresboek',
				balance: 'Balans',
				vested: 'vested',
				importance: 'Belangrijks waardering',
				publicKey: 'Publieke sleutel',
				noPublicKey: 'Geen publieke sleutel',
				harvestedBlocks: 'Geharvestede blocks',
				close: 'Sluiten'
			},
			bootLocalNode: {
				title: 'Start lokale node',
				account: 'Account voor het starten van de lokale node',
				noLabel: '<span class="null">&lt;Geen label&gt;</span>',
				wallet: 'Wallet',
				node: 'Node naam',
				boot: 'Start',
				booting: 'Starten...',
				warning: 'Boot node warning',
				warningText: 'You\'re trying to boot a node <u>{{2}}</u><br/><br/>Booting remote node is currently impossible from within NCC.',
				warningStatement: 'You have auto-boot set to true and you\'re using remote node {{3}}.<br/><br/>Booting remote node is currently impossible from within NCC',
				warningQuestion: 'Are you sure you want to boot node <u>{{3}}</u> using private key of account {{1}} ({{2}} XEM)?<br><br>This will reveal this account\'s <span class="sublabelWarning">private key</span> to node: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Wallet sluiten',
				message: 'Weet je het zeker om terug te keren naar de openingspagina?'
			},
			createAccount: {
				title: 'Nieuwe account aanmaken',
				label: 'Privé label',
				wallet: 'Wallet',
				password: 'Wallet wachtwoord',
				successMessage: 'Account {{1}} {{#2}}({{2}}){{/2}} is aangemaakt.!',
				create: 'Aanmaken'
			},
			showPrivateKey: {
				title: 'Show Account\'s PRIVATE Key',
				message: 'This will display account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',
				publicKey: 'Publieke sleutel',
				privateKey: 'Prive sleutel',
				show: 'Show the key'
			},
			showRemotePrivateKey: {
				title: 'Show Remote Account\'s PRIVATE Key',
				message: 'This will display remote account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',

			},
			addAccount: {
				title: 'Voeg een bestaande account toe',
				privateKey: 'Privésleutel van account',
				wallet: 'Wallet',
				password: 'Wallet wachtwoord',
				successMessage: 'Account {{1}} {{#2}}({{2}}){{/2}} is toegevoegd aan wallet!',
				add: 'Voeg toe',
				label: 'Label'
			},
			setPrimary: {
				title: 'Primaire account instellen',
				account: 'Account die primair wordt ingesteld.',
				noLabel: '<span class="null">&lt;Geen label&gt;</span>',
				wallet: 'Wallet',
				password: 'Wallet wachtwoord',
				successMessage: 'Account {{1}} {{#2}}({{2}}){{/2}} als primair ingesteld!',
				set: 'Stel primaire account in'
			},
			changeWalletName: {
				title: 'Verander naam van wallet',
				wallet: 'Huidige wallet naam',
				newName: 'Nieuwe wallet naam',
				password: 'Wallet wachtwoord',
				successMessage: 'Naam van wallet is gewijzigd van <em>{{1}}</em> naar <em>{{2}}</em>',
				change: 'Change'
			},
			changeWalletPassword: {
				title: 'Verander het Wallet wachtwoord ',
				wallet: 'Wallet',
				password: 'Huidig wachtwoord',
				newPassword: 'Nieuw wachtwoord',
				confirmPassword: 'Bevestig nieuw wachtwoord',
				successMessage: 'Wallet wachtwoord is aangepast.',
				change: 'Aanpassen',
				passwordNotMatchTitle: 'Oeps!',
				passwordNotMatchMessage: 'Het wachtwoord komt niet overeen.'
			},
			changeAccountLabel: {
				title: 'Verander het label van de account',
				label: 'Account label',
				wallet: 'Wallet',
				password: 'Wallet wachtwoord',
				successMessage: 'Account {{1}} is gelabeld als {{2}}',
				change: 'Aanpassen'
			},
			removeAccount: {
				title: 'Account verwijderen',
				account: 'Account',
				label: 'Account label',
				wallet: 'Wallet',
				password: 'Wallet wachtwoord',
				warning: 'Let op! Wees er zeker van dat er geen XEM saldo opstaat. Eventueel saldo wordt voor altijd verwijderd.',
				successMessage: 'Account {{1}} {{#2}}({{2}}){{/2}} is verwijderd!',
				remove: 'Verwijderen'
			},
			nisUnavailable: {
				title: 'NIS niet beschikbaar',
				message: 'NIS connectie onderbroken, wachten op verbinding'
			},
			shutdown: {
				title: 'Afsluiten',
				message: 'Weet je zeker dat je de NEM Community Client wil afsluiten?'
			},
			activateRemote: {
				title: 'Activate Delegated Harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: 'Wallet wachtwoord',
				activate: 'Activeren',
				warning: 'Warning',
				warningText: 'Activation will take 6 hours (360 blocks). Activation will NOT start harvesting automatically.'
			},
			deactivateRemote: {
				title: 'Deactivate Delegated Harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: 'Wallet wachtwoord',
				deactivate: 'Deactiveer',
				warning: 'Warning',
				warningText: 'Deactivation will take 6 hours (360 blocks).'
			},
			startRemote: {
				title: 'Start Delegated Harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: 'Wallet wachtwoord',
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
				add: 'Voeg toe'
			},
			editContact: {
				title: 'Edit contact',
				saveChanges: 'Opslaan'
			},
			removeContact: {
				title: 'Remove contact',
				remove: 'Verwijderen'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Wallet is met succes geimporteerd!',
			nav: {
				start: 'Aan de slag',
				about: 'Over NEM',
				settings: 'Instellingen'
			},
			main: {
				leftTitle: 'Nieuw bij <em>NEM</em>?',
				leftButton: 'Maak een nieuwe wallet',
				walletNamePlh: 'Naam van de wallet',
				passwordPlh: 'Wachtwoord',
				confirmPasswordPlh: 'Confirm password',
				create: 'Aanmaken',
				creating: 'Aanmaken...',
				rightTitle: 'Al een <em>NEM</em>ber?',
				rightButton: 'Open je wallet',
				openButton: 'Open',
				walletsFound: '<strong>{{1}}</strong> <em>wallets gevonden</em>',
				copyright: 'Fotografie door <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC beveiligt je wallet',
						description: '<em>Veiligheid</em> is heel belangrijk voor NEM om diefstal van XEM&amp; assets te voorkomen.'
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
						title: 'Hoe werkt NCC?',
						paragraphs: [
							'<strong>NCC</strong> zorgt voor toegang tot je Assets en XEM zoals een traditionele Wallet, of portomonnee, dat doet.',
							'<strong>NCC</strong> heeft toegang to de <strong>NIS</strong> server nodig om te kunnen werken. Standaard is een lokale service actief. Deze wordt geinstalleerd met de community client (NCC)',
							'Je kan NCC ook configureren om toegang te krijgen tot een remote <strong>NIS</strong>.'
						],
						listItems: [
							'Meerdere accounten',
							'Definieer meerdere accountingen in een wallet'
						]
					},
					{
						title: 'Wat is &#42;NIS?',
						paragraphs: [
							'Dit component is verantwoordelijk om de <strong>NEM</strong> cloud in de lucht te houden.',
							'The more <strong>NIS</strong> there are in the network, the better the security.,',
							'<strong>NIS</strong> is het toegangspunt voor de <strong>NEM</strong> cloud.'
						],
						legend: '<strong>&#42;NIS</strong> staat voor <strong>NEM Infrastructure Server</strong>'
					}
				]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Ongeveer {{1}} dagen geleden',
			lastAccessJustNow: 'Zojuist',
			lastAccessTooltip: 'Laatste toegang was {{1}}',
			primary: 'Primaire',
			primaryShort: 'P',
			noLabel: '<Geen label>',
			copiedToClipboard: 'Account is gekopieerd naar het clipboard!',
			actions: {
				refreshInfo: 'Ververs informatie',
				bootLocalNode: 'Start Lokale Node',
				changeWalletName: 'Verander naam  van Wallet',
				changeWalletPassword: 'Verander Wallet Wachtwoord',
				mergeWallets: 'Wallets samenvoegen',
				exportWallet: 'Exporteer Wallet',
				createAccount: 'Maak een nieuwe Account',
				createRealAccountData: 'Maak echte Account (wanneer NEM live is!)',
				verifyRealAccountData: 'Verify real account data',
				showPrivateKey: 'Show Account\'s PRIVATE key',
				showRemotePrivateKey: 'Show Remote Account\'s PRIVATE key',
				viewDetails: 'View Account Details',
				addAccount: 'Voor een Bestaande Account toe',
				changeAccountLabel: 'Verander het label van de Account',
				setPrimary: 'Stel in als Primaire Account',
				removeAccount: 'Verwijder account',
				clientInfo: 'Client Informatie',
				closeWallet: 'Sluit Wallet',
				closeProgram: 'Programma Afsluiten',
				copyClipboard: 'Kopieer accountnummer naar het clipboard.',
				copyDisabled: 'Copying an address requires flash',
				convertMultisig: 'Converteer andere account naar multisig'
			},
			nav: [
				'Dashboard',
				'Berichten',
				'Addresboek',
				'Transacties',
				'Geharveste Blocks',
				'Asset Exchange',
				'Nieuws',
				'Applicaties',
				'Accounts',
				'Instellingen',
				'Afsluiten'
			],
			bootNodeWarning: 'Een lokale node moet gestart zijn om alle functionaliteiten van NCC te gebruiken.'
		},
		dashboard: {
			assets: {
				title: 'Je Assets'
			},
			importance: {
				title: 'Score',
				unknown: 'Onbekende status',
				start: 'Start harvesten',
				harvesting: 'Harvesten',
				stop: 'Stop harvesten',
				description: 'Status-score van deze account op  to the NEM cloud',
				remoteHarvest: {
					activate: 'Activate delegated harvesting',
					activating: 'Activating delegated harvesting...',
					active: 'Delegated harvesting is active',
					deactivate: 'Deactivate delegated harvesting',
					deactivating: 'Deactivating delegated harvesting...',
					startRemoteHarvesting: 'Start delegated harvesting',
					remotelyHarvesting: 'Harvesten op afstand',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			},
			transactions: {
				title: 'Recente Transacties',
				sendNem: 'Verstuur XEM',
				signMultisig: 'SIGN',
				balance: 'Huidige balans',
				loading: 'Loading balance',
				accountCosignatories: 'Multisig account',
				accountCosignatoriesView: 'view cosignatories',
				vestedBalance: 'Vested Balance',
				syncStatus: '(bij block {{1}}{{#2}} : ong. {{3}} dagen achter{{/2}})',
				notSynced: 'might be inaccurate, NIS not synchronized yet',
				unknown: 'onbekend',
				columns: [
					'',
					'Tijd',
					'Afzender/Ontvanger',
					'Bericht',
					'',
					'Details',
					'Confirmaties',
					'Toeslag',
					'Bedrag'
				],
				noMessage: 'Geen bericht',
				encrypted: 'Bericht is beveiligd',
				view: 'Bekijk',
				confirmationsUnknown: 'Onbekend',
				pending: 'Wachtend',
				seeAll: 'Bekijk alle transacties',
				noTransactions: 'Nog geen transacties zijn uitgevoerd'
			},
			nemValue: {
				title: 'XEM statistieken'
			},
			messages: {
				titleTooltip: 'Berichten'
			},
			news: {
				titleTooltip: 'Nieuws'
			},
			notAvailable: 'Nog niet beschikbaar in deze release'
		},
		transactions: {
			title: 'Transacties',
			sendNem: 'Verstuur XEM',
			balance: 'Huidige Balans',
			filters: {
				confirmed: 'Bevestigd',
				unconfirmed: 'Onbevestigd',
				incoming: 'Inkomend',
				outgoing: 'Uitgaand'
			},
			table: {
				columns: [
					'',
					'Tijd',
					'Afzender/Ontvanger',
					'Bericht',
					'',
					'Details',
					'Confirmaties',
					'Toeslag',
					'Bedrag'
				],
				noMessage: 'Geen bericht',
				encrypted: 'Bericht is versleuteld',
				view: 'Bekijk',
				confirmationsUnknown: 'Onbekend',
				pending: 'Wachtend',
				noTransactions: 'Nog geen transacties zijn uitgevoerd',
				loading: 'Meer transacties laden...'
			}
		},
		harvestedBlocks: {
			title: 'Geharveste Blocks',
			feeEarned: 'Toeslagen verdiend van de laatste 25 geharveste blocks',
			unknown: 'Unknown',
			table: {
				columns: [
					'Blockhoogte',
					'Tijd',
					'Block difficulty',
					'Toeslag'
				],
				noBlocks: 'Geen geharveste blocks ',
				loading: 'Bekijk oudere blocks die geharvest zijn'
			},
			harvesting: {
				unknown: 'Onbekende status',
				start: 'Start harvesten',
				harvesting: 'Harvesten',
				stop: 'Stop harvesten',
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
					'Account adres',
					'Prive Label',
					'Publieke Label'
				],
				noContacts: 'Er staan geen contacten in je adresboek'
			},
			noLabel: 'Geen label',
			sendNem: 'Verstuur XEM',
			edit: 'Edit',
			remove: 'Verwijderen'
		},
		settings: {
			title: 'Instellingen',
			settings: [
				{
					name: 'Taal'
				}
			],
			save: 'Opslaan',
			saveSuccess: 'Instellingen zijn opgeslagen'
		}
	}
});
