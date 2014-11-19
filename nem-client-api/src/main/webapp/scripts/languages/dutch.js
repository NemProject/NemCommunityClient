define({
	id: 'nl',
	name: 'Nederlands',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Bestand niet gevonden.',
			102: 'Wallet is niet aangemaakt.',
			103: 'Wallet bestand is corrupt. Herstel je wallet van een eerder gemaakte back-up. Tip: back-up je wallet gelijk nadat deze is gegenereerd, of wanneer een account is toegevoegd aan de wallet.',
			104: 'Het ingevoerde wachtwoord is niet juist. Hopelijk kun je het nog herinneren, dit is de enige mogelijkheid om toegang te krijgen tot je wallet.',
			106: 'Voordat je met je wallet kan beginnen, moet hij worden geopend. Om er zeker van te zijn dat jij de rechtmatige eigenaar bent, moet je het wachtwoord opgeven.',
			107: 'Rekeningnummer komt niet voor in de wallet.',
			108: 'De rekening kan niet worden verwijderd. Waarschijnlijk komt dit omdat er nog NEM in zit. Het kan ook zijn dat de rekening de primaire rekening is van de wallet.',
			109: 'Een andere wallet met dezelfde naam bestaat al, kies een andere wallet-naam.',
			110: 'Rekening komt al voor in de wallet.',
			202: 'Een beveiligd bericht kan niet worden verstuurd naar de ontvanger omdat hij of zij nog nooit een transactie heeft gemaakt met dit rekeningnummer.',
			305: 'NEM Infrastructure Server is niet beschikbaar.',
			306: 'Een fout is opgetreden wat het ontwikkelteam niet heeft voorzien. Onze verontschuldiging hiervoor, misschien helpt het om nog een keer te proberen. Als dat ook niet lukt is het wijs om een ticket te openen binnen de NEM NIS/NCC community.',
			400: 'Een parameter is missend of niet goed.',
			401: 'Deze actie is niet toegestaan, omdat er een privé sleutel naar een remote NIS kan worden verstuurd.',
			404: 'De opgevraagde bron kom niet worden gevonden..',
			500: 'Een fout is opgetreden wat het ontwikkelteam niet heeft voorzien. Onze verontschuldiging hiervoor, misschien helpt het om nog een keer te proberen. Als dat ook niet lukt is het wijs om een ticket te openen binnen de NEM NIS/NCC community.',
			600: 'Voor de NCC (Nem Community Client) is het vereist om de NIS (Network Infrastructure Server) het starten voor het verzenden en ontvangen van transacties van de NEM cloud. Gebruik de NCC menu optie om lokaal te starten.',
			601: 'De nis node is al gestart. Een tweede poging om te starten is niet mogelijk.',
			700: 'De opgegeven rekening voldoet niet aan de basis criteria om te harvesten/oogsten. Waarschijnlijk heeft dat te maken met het aantal NEM wat zich in de rekening bevindt. Harvesten begint bij tenminste 1000 NEM.',
			701: 'De termijn ligt in het verleden en kan alleen geldig zijn binnen een periode van 1 dag.',
			702: 'De termijn ligt te ver in de toekomst en kan alleen geldig zijn binnen een periode van 1 dag.',
			703: 'De rekening heeft niet genoeg saldo om het aangegeven aantal NEM te verzenden.',
			704: 'De tekst is te groot om het te verzenden via NEM. Reduceer de tekst en probeer opnieuw te verzenden.',
			705: 'De hash van de transactie bestaat al in de database van onbevestigde transacties.',
			706: 'De handtekening van de transactie kon niet worden geverifieerd.',
			707: 'De timestamp van de transactie ligt te ver in het verleden.',
			708: 'De timestamp van de transactie ligt te ver in de toekomst.',
			709: 'Het rekeningnummer is onbekend.  Een rekening wordt pas bekend op het netwerk als deze deel heeft uitgemaakt van een transactie als verzender of ontvanger.',
			901: 'Er is een fout opgetreden bij het instellen van de offline modus.',
			1000: "The privé sleutel en publieke sleutel komen niet overeen.",
			1001: 'The publieke sleutel en het adres komen niet overeen.',
			1002: 'Het adres klopt niet en hoort niet bij het netwerk.'
		},
		common: {
			success: 'Gelukt!', //title of the Success message modals
			appStatus: {
				nccUnknown: 'NCC status is onbekend',
				nccUnavailable: 'NCC is niet beschikbaar',
				nccStarting: 'NCC is aan het starten...',
				nisUnknown: 'NIS status is onbekend',
				nisUnavailable: 'NIS is niet beschikbaar',
				nisStarting: 'NIS is aan het starten...',
				notBooted: 'Het is vereist om NIS te (her)starten. Open een wallet en start een lokale bij het popup dialoog.',
				booting: 'Starten van de NIS...',
				nisInfoNotAvailable: 'NIS info is not avaiable yet. Trying to retrieve NIS info...',
				synchronizing: 'NIS is aan het synchronizeren. Bij block {{1}}, ong. {{2}} achter.',
				daysBehind: {
					0: 'minder dan 1 dag',
					1: '1 dag',
					many: '{{1}} dagen'
				},
				synchronized: 'NIS is gesynchroniseerd!'
			}
		},
		modals: {
			error: {
				title: 'Oeps!',
				caption: 'ERROR {{1}}'
			},
			confirmDefault: {
				yes: 'Ja',
				no: 'Nee'
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
					port: 'Port'
				},
				autoBoot: {
					tabTitle: 'Auto-start',
					name: 'Node naam',
					account: 'Rekening',
					primaryAccount: 'Primaire rekening',
					auto: 'Auto starten als een wallet is geopend'
				},
				save: 'Opslaan',
				saveSuccess: 'Instelling zijn met succes opgeslagen'
			},
			sendNem: {
				title: 'NEM versturen',
				labelDesc: 'Deze rekening is als {{1}} gelabeld',
				nullLabelDesc: "Deze rekening heeft geen label",
				amount: 'Bedrag',
				recipient: "Rekening van ontvanger",
				recipientValidation: 'Rekeningen moeten een lengte hebben van 40 karakters en dashes',
				message: 'Bericht',
				encrypt: 'Beveilig bericht',
				fee: 'Toeslag',
				feeValidation: 'Toeslag mag niet lager zijn dan het minimum',
				dueBy: 'Overmaken voor',
				useMinimumFee: 'Gebruik minimale toeslag',
				hours: 'Uur',
				password: 'Wachtwoord',
				send: 'Verstuur',
				cancel: 'Afbreken',
				sending: 'Versturen...',
				successMessage: 'Transactie is verzonden!',
				txConfirm: {
					title: 'Bevestig transactie',
					amount: 'Hoeveelheid',
					to: 'Naar',
					fee: 'Toeslag',
					dueBy: 'Verzenden voor',
					hours: 'uur',
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
					message: 'Een lokale node moet eerst gestart worden om NEM te versturen!'
				},
				bootingWarning: {
					title: 'Node wordt opgestart',
					message: 'Even wachten a.u.b. tot het opstartproces klaar is om je transactie te verzenden.'
				}
			},
			clientInfo: {
				title: 'Client informatie',
				ncc: 'NEM Community Client - NCC',
				signer: 'Signer',
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
				pending: 'Wachten',
				outgoing: 'Uitgaand',
				incoming: 'Inkomend',
				self: 'Zelf',
				sender: 'Afzender',
				recipient: 'Ontvanger',
				message: 'Bericht',
				noMessage: 'Geen bericht',
				encrypted: 'Bericht is beveiligd',
				time: 'Timestamp',
				confirmations: 'Confirmaties',
				confirmationsUnknown: 'Onbekend',
				amount: 'Bedrag',
				fee: 'Toeslag'
			},
			bootLocalNode: {
				title: 'Start lokale node',
				account: 'Rekening voor het starten van de lokale node',
				noLabel: '<span class="null">&lt;Geen label&gt;</span>',
				wallet: 'Wallet',
				node: 'Node naam',
				boot: 'Start',
				booting: 'Starten...'
			},
			closeWallet: {
				title: 'Wallet sluiten',
				message: 'Weet je het zeker om terug te keren naar de openingspagina?'
			},
			createAccount: {
				title: 'Nieuwe rekening aanmaken',
				label: 'Privé label',
				wallet: 'Wallet',
				password: "Wallet wachtwoord",
				successMessage: 'Rekening {{1}} {{#2}}({{2}}){{/2}} is aangemaakt.!',
				create: 'Aanmaken'
			},
			createRealAccountData: {
				title: 'Aanmaken ECHTE account',
				message: 'De onderstaande gegevens is bedoeld voor je echte account, nadat NEM live-gang is geweest. Bewaard het adres, publieke sleutel en het belangrijkste: de privé sleutel op een veilige plaats. Als de privé sleutel verloren raakt is het niet meer mogelijk om toegang tot je NEM te krijgen!',
				address: 'Adres',
				publicKey: 'Publiek sleutel key',
				privateKey: 'Privé sleutel',
				confirm: {
					title: 'Bewaar de privé sleutel',
					message: 'Weet je zeker dat de privé sleutel op een veilige plaats is opgeslagen?'
				},
				recheck: {
					title: 'Controleer je opgeslagen privé sleutel',
					message: "Voer de privé sleutel nogmaals voor controle. Als dit niet lukt is het misschien beter om een nieuwe te maken.",
					correct: {
						title: 'Gelukt!',
						message: 'Je hebt de correcte privé sleutel met succes opgeslagen. Vergeet niet om de sleutel altijd veilig te bewaren!'
					},
					incorrect: {
						title: 'Hmm...',
						message: "Helaas, de privé sleutel die je hebt ingevoerd is niet correct! Controleer dit goed en voer het nogmaals in.",
						tryAgain: 'Try to enter again',
						seeOriginal: 'See the original data'
					},
					recheck: 'Controle'
				},
				ok: 'OK'
			},
			verifyRealAccountData: {
				title: 'Verify real account data',
				message: 'Re-enter your saved address, public key and private key below to check if they match',
				address: 'Address',
				publicKey: 'Public key',
				privateKey: 'Private key',
				dataMatched: 'Everything seems good, your entered address, public key, and private key match.',
				verify: 'Verify'
			},
			addAccount: {
				title: 'Voeg een bestaande rekening toe',
				privateKey: "Privésleutel van rekening",
				wallet: 'Wallet',
				password: "Wallet wachtwoord",
				successMessage: 'Rekening {{1}} {{#2}}({{2}}){{/2}} is toegevoegd aan wallet!',
				add: 'Voeg toe',
				label: 'Label'
			},
			setPrimary: {
				title: 'Primaire rekening instellen',
				account: 'Rekening die primair wordt ingesteld.',
				noLabel: '<span class="null">&lt;Geen label&gt;</span>',
				wallet: 'Wallet',
				password: "Wallet wachtwoord",
				successMessage: 'Rekening {{1}} {{#2}}({{2}}){{/2}} als primair ingesteld!',
				set: 'Stel primaire rekening in',
			},
			changeWalletName: {
				title: 'Verander naam van wallet',
				wallet: 'Huidige wallet naam',
				newName: 'Nieuwe wallet naam',
				password: "Wallet wachtwoord",
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
				title: 'Verander het label van de rekening',
				label: 'Rekening label',
				wallet: 'Wallet',
				password: "Wallet wachtwoord",
				successMessage: 'Rekening {{1}} is gelabeld als {{2}}',
				change: 'Aanpassen'
			},
			removeAccount: {
				title: 'Rekening verwijderen',
				wallet: 'Wallet',
				password: "Wallet wachtwoord",
				warning: 'Let op! Wees er zeker van dat er geen NEM saldo opstaat. Eventueel saldo wordt voor altijd verwijderd.',
				successMessage: 'Rekening {{1}} {{#2}}({{2}}){{/2}} is verwijderd!',
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
				title: 'Activeer Remote harvesten',
				wallet: 'Wallet',
				account: 'Account',
				hoursDue: 'Binnen (uren)',
				password: "Wallet wachtwoord",
				activate: 'Activeren'
			},
			deactivateRemote: {
				title: 'Deactiveer Remote harvesten',
				wallet: 'Wallet',
				account: 'Account',
				hoursDue: 'Binnen (uren)',
				password: "Wallet wachtwoord",
				deactivate: 'Deactiveer'
			},
			startRemote: {
				title: 'Start Remote harvesten',
				wallet: 'Wallet',
				account: 'Account',
				password: "Wallet wachtwoord",
				start: 'Start'
			},
			stopRemote: {
				title: 'Stop Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: "Wallet's password",
				stop: 'Stop'
			},
			logoutWarning: {
				leavePage: "Je gaat de wallet verlaten. Onthoud dat op deze manier andere gebruikers op deze computer hier toegang toe kunnen krijgen.\n\nLog uit met het \"Sluit Wallet\" menu item in het dropdown menu rechts-boven voordat je de browser sluit of naar een andere pagina navigeert.",
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
				create: 'Aanmaken',
				rightTitle: 'Al een <em>NEM</em>ber?',
				rightButton: 'Open je wallet',
				openButton: 'Open',
				walletsFound: '<strong>{{1}}</strong> <em>wallets gevonden</em>',
				copyright: 'Fotografie door <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [{
					title: 'NCC beveiligt je wallet',
					description: '<em>Veiligheid</em> is heel belangrijk voor NEM om diefstal van NEM coins&amp; assets te voorkomen.'
				}, {
					title: 'NCC beveiligt je wallet',
					description: '<em>Veiligheid</em> is heel belangrijk voor NEM om diefstal van NEM coins&amp; assets te voorkomen.'
				}]
			},
			about: {
				sections: [{
					title: 'Hoe werkt NCC?',
					paragraphs: [
						'<strong>NCC</strong> zorgt voor toegang tot je Assets en NEMs zoals een traditionele Wallet, of portomonnee, dat doet.',
						'<strong>NCC</strong> heeft toegang to de <strong>NIS</strong> server nodig om te kunnen werken. Standaard is een lokale service actief. Deze wordt geinstalleerd met de community client (NCC)',
						'Je kan NCC ook configureren om toegang te krijgen tot een remote <strong>NIS</strong>.'
					],
					listItems: [
						'Meerdere rekeningen',
						'Definieer meerdere rekeningingen in een wallet'
					]
				}, {
					title: 'Wat is &#42;NIS?',
					paragraphs: [
						'Dit component is verantwoordelijk om de <strong>NEM</strong> cloud in de lucht te houden.',
						'Hoe meer <strong>NIS</strong> servers er zijn, des te veiliger het netwerk is.',
						'<strong>NIS</strong> is het toegangspunt voor de <strong>NEM</strong> cloud.'
					],
					legend: '<strong>&#42;NIS</strong> staat voor <strong>NEM Infrastructure Server</strong>'
				}]
			},
			footer: {
				copyright: '&copy; Copyright 2014. NEM Community Client.'
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
			copiedToClipboard: 'Rekening is gekopieerd naar het clipboard!',
			actions: {
				refreshInfo: 'Ververs informatie',
				bootLocalNode: 'Start Lokale Node',
				changeWalletName: 'Verander naam  van Wallet',
				changeWalletPassword: 'Verander Wallet Wachtwoord',
				mergeWallets: 'Wallets samenvoegen',
				exportWallet: 'Exporteer Wallet',
				createAccount: 'Maak een nieuwe Rekening',
				createRealAccountData: 'Maak echte Rekening (wanneer NEM live is!)',
				verifyRealAccountData: 'Verify real account data',
				addAccount: 'Voor een Bestaande Rekening toe',
				changeAccountLabel: 'Verander het label van de Rekening',
				setPrimary: 'Stel in als Primaire Rekening',
				removeAccount: 'Verwijder rekening',
				clientInfo: 'Client Informatie',
				closeWallet: 'Sluit Wallet',
				closeProgram: 'Programma Afsluiten',
				copyClipboard: 'Kopieer rekeningnummer naar het clipboard.'
			},
			nav: [
				'Dashboard',
				'Berichten',
				'Contacten',
				'Transacties',
				'Geharveste Blocks',
				'Asset Exchange',
				'Nieuws',
				'Applicaties',
				'Rekeningen',
				'Instellingen',
				'Afsluiten'
			],
			bootNodeWarning: "Een lokale node moet gestart zijn om alle functionaliteiten van NCC te gebruiken."
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
				description: 'Status-score van deze rekening op  to the NEM cloud',
				remoteHarvest: {
					activate: 'Activeer remote harvesten',
					activating: 'Activeren van remote harvesten...',
					active: 'Remote harvesten is actief',
					deactivate: 'Deactiveer remote harvesten',
					deactivating: 'Deactiveren van remote harvesten...',
					startRemoteHarvesting: 'Start remote harvesten',
					remotelyHarvesting: 'Harvesten op afstand',
					stopRemoteHarvesting: 'Stop met remote harvesten'
				}
			},
			transactions: {
				title: 'Recente Transacties',
				sendNem: 'Verstuur NEM',
				balance: 'Huidige balans',
				syncStatus: '(bij block {{1}}{{#2}} : ong. {{3}} dagen achter{{/2}})',
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
				types: {
					pending: 'Wachtende transactie',
					outgoing: 'Uitgaande transactie',
					incoming: 'Inkomende transactie',
					self: 'Eigen transactie',
				},
				noMessage: 'Geen bericht',
				encrypted: 'Bericht is beveiligd',
				view: 'Bekijk',
				confirmationsUnknown: 'Onbekend',
				pending: 'Wachtend',
				seeAll: 'Bekijk alle transacties',
				noTransactions: 'Nog geen transacties zijn uitgevoerd'
			},
			nemValue: {
				title: 'NEM statistieken'
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
			sendNem: 'Verstuur NEM',
			balance: 'Huidige Balans',
			filters: {
				confirmed: 'Bevestigd',
				unconfirmed: 'Onbevestigd',
				incoming: 'Inkomend',
				outgoing: 'Uitgaand',
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
				types: {
					pending: 'Wachtende transactie',
					outgoing: 'Uitgaande transactie',
					incoming: 'Inkomende transactie',
					self: 'Eigen transactie',
				},
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
			table: {
				columns: [
					'Blockhoogte',
					'Tijd',
					'Block hash',
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
					startRemoteHarvesting: 'Start remote harvesting',
					stopRemoteHarvesting: 'Stop remote harvesting'
				}
			}
		},
		settings: {
			title: 'Instellingen',
			settings: [{
				name: 'Taal'
			}],
			save: 'Opslaan',
			saveSuccess: 'Instellingen zijn opgeslagen'
		}
	}
});
