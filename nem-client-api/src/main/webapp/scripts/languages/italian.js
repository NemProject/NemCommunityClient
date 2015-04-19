define({
	id: 'it',
	name: 'Italiano',
	texts: {
		preferences: {
			thousandSeparator: ' ',
			decimalSeparator: ','
		},
		faults: {
			101: 'The wallet file does not exist.',
			102: 'Il portafoglio non è stato creato.',
			103: 'Il file del portafoglio è corrotto. Ripristina il portafoglio da un backup.',
			104: 'La password inserita non è corretta per questo portafoglio.',
			105: 'Non è stata inserita la password per il portafoglio.',
			106: 'Per poter utilizzare un portafoglio è necessario aprirlo. Per accertarsi che l\'utente sia autorizzato ad accedervi, è necessario fornire la password del portafoglio.',
			107: 'Il portafoglio non contiene questo indirizzo',
			108: 'L\'indirizzo non può essere eliminato. Probabilmente perché contiene qualche XEM oppure perché è l\'indirizzo principale.',
			109: 'Esiste già un portafoglio con questo nome. Scegli un nome differente.',
			110: 'Esiste già un portafoglio contenete questo indirizzo.',
			111: 'Esiste già una cartella con questo nome.',
			112: 'L\'estensione del nome del file del portafoglio non è corretta.',
			113: 'Il portafoglio non può essere eliminato.',
			121: 'Il file della rubrica non esite.',
			122: 'L\'indirizzo non è stato creato.',
			123: 'Il file della rubrica è corrotto. Recuperalo da un backup.',
			124: 'La password fornita per la rubrica non è corretta.',
			125: 'Nessuna password fornita per la rubrica.',
			127: 'La rubrica non contiene questo indirizzo.',
			128: 'L\'indirizzo specificato non è valido.',
			129: 'Esiste già una rubrica con lo stesso nome. Scegli un nuovo nome per la rubrica.',
			130: 'La rubrica contiene già questo indirizzo.',
			131: 'Esiste già una cartella con questo nome.',
			132: 'L\'estensione del nome del file della rubrica non è corretta.',
			133: 'La rubrica non può essere eliminata.',
			202: 'Impossibile cifrare il testo: non è nota la chiave pubblica del destinatario',
			203: 'The account cannot be converted because not all cosignatories are known. They either need to be in the same wallet or have made at least one transaction.',
			305: 'The NEM Infrastructure Server (NIS) is not available.\n\nTry to restart the NEM software.\n\nIf you are using a remote NIS, check your configured host for typing errors or use another remote NIS.',
			306: 'E\' occorso un errore imprevisto; riprova ad effettuare l\'operazione. Se il problema persiste chiedi supporto alla comunità NEM',
			400: 'Manca qualche parametro obbligatorio',
			401: 'L\'operazione non può essere completata perché è insicuro trasmettere la chiave privata ad un server remoto',
			404: 'Strategia di avvio non valida',
			500: 'E\' occorso un errore imprevisto; riprova ad effettuare l\'operazione. Se il problema persiste chiedi supporto alla comunità NEM',
			600: 'NCC richiede che il server NIS sia avviato per poter inviare e ricevere transazioni nella rete NEM. Usa la voce \'Avvia il nodo locale\' nel menu di NCC.',
			601: 'Il nodo NIS locale è già avviato; non è possibile avviarlo nuovamente.',
			602: 'Almost ready. NEM Infrastructure Server is currently loading blocks. Wallet will be functional when db is fully loaded.',
			699: 'E\' stato raggiunto il numero massimo di indirizzi che generano blocchi.',
			700: 'L\'indirizzo indicato non soddisfa i criteri minimi per generare blocchi. Per poter generare blocchi è necessario disporre di almeno 10000 XEM',
			701: 'Il termine massimo indicato è nel passato. Dovrebbe invece essere nelle prossime 24 ore.',
			702: 'Il termine massimo indicato è troppo lontano nel futuro. Dovrebbe invece essere nelle prossime 24 ore.',
			703: 'Your account does not have the right balance to make this transaction.',
			704: 'Il messaggio inserito è troppo grande. Riduci la dimensione del testo.',
			705: 'La firma della transazione è già presente nel database delle transazioni non ancora confermate.',
			706: 'Errore nella verifica della firma della transazione.',
			707: 'La marca temporale della transazione è troppo lontana nel passato.',
			708: 'La marca temporale della transazione è troppo lontana nel futuro.',
			709: 'Indirizzo sconosciuto. Un indirizzo deve comparire in almeno una transazione (come mittente o come destinatario) per essere noto alla rete.',
			710: 'La transazione è stata annullata in quanto la lista delle transazioni in attesa è piena. Commissioni maggiori possono migliorare la probabilità che la transazione venga accettata.',
			730: 'Importance transfer transaction (delegated harvesting) conflicts with existing transaction.',
			731: 'Delegated harvesting account has non zero balance and cannot be used.',
			732: 'Trasferimento di importanza annullato. C\'è già una transazione di questo tipo in corso.',
			733: 'Delegated harvesting is already active.',
			734: 'Delegated harvesting is NOT active. Cannot deactivate.',
			740: 'Tipo di transazione non consentita per indirizzi a firma multipla.',
			741: 'Transazione rifiutata. L\'indirizzo non è uno dei cofirmatari.',
			742: 'Transazione rifiutata. La definizione dei cofirmatari non è nota alla rete NEM.',
			743: 'Modifica rifiutata. Uno dei cofirmatari da aggiungere è già un cofirmatario.',
			901: 'Errore nella modalità fuori rete.',
			1000: 'Mancata corrispondenza tra chiave privata e chiave pubblica.',
			1001: 'Mancata corrispondenza tra chiave pubblica ed indirizzo.',
			1002: 'L\'indirizzo non appartiene alla rete NEM principale'
		},
		common: {
			success: 'Operazione completata',
			unknown: 'Stato sconosciuto',
			unknownMessage: 'Ncc did not get response in a timely manner. Transaction might have been sent to the network.<br /><br />Please, check transactions before attempting to make it again.',
			appStatus: {
				nccUnknown: 'Lo stato di NCC è ignoto',
				nccUnavailable: 'NCC non disponibile',
				nccStarting: 'NCC sta partendo...',
				nisUnknown: 'Lo stato di NIS è ignoto',
				nisUnavailable: 'NIS non disponibile',
				nisStarting: 'NIS sta partendo...',
				notBooted: 'NIS deve essere avviato. Apri il tuo portafoglio ed avvia il nodo locale attraverso la finestra di dialogo oppure configura l\'auto-avvio.',
				loading: 'Lettura dei blocchi dal database, al blocco:',
				booting: 'Avvio di NIS in corso...',
				nisInfoNotAvailable: 'Verifica dello stato di NIS...',
				synchronizing: 'Sincronizzazione NIS in corso. Al blocco {{1}}, {{2}} indietro.',
				daysBehind: {
					0: 'meno di un giorno',
					1: 'un giorno',
					many: '{{1}} giorni'
				},
				synchronized: 'NIS è sincronizzato!',
				noRemoteNisAvailable: 'NIS remoto non trovato, forse sei disconnesso da Internet?'
			},
			addressBook: 'Rubrica',
			password: 'Password',
			passwordValidation: 'La password non può essere vuota',
			address: 'Indirizzo',
			privateLabel: 'Nome privato',
			publicLabel: 'Nome pubblico',
			noCharge: 'L\'indirizzo <b>NON</b> deve pagare commissioni, verranno coperte dall\'indirizzo cointestato.',
			fee: 'Commissioni',
			justUse: 'Just use',
			dueBy: 'Tempo massimo',
			hours: 'ore',
			hoursDue: 'Tempo massimo (ore)',
			hoursDueExplanation: 'If the transaction isn\'t included by the deadline, it is rejected.',
			closeButton: 'Close'
		},
		transactionTypes: [
			'TRASFERIMENTO FONDI',
			'TRASFERIMENTO IMPORTANZA',
			'MODIFICA INDIRIZZO MULTIFIRMATO',
			'TRANSAZIONE MULTIFIRMA'
		],
		transactionDirections: {
			pending: 'Transazione in attesa',
			outgoing: 'Transazione in uscita',
			incoming: 'Transazione in entrata',
			self: 'Transazione a te stesso',
			importance: 'Trasferimento di importanza',
			modification: 'Modifica cofirmatari'
		},
		modals: {
			error: {
				title: 'Errore!',
				caption: 'ERRORE {{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Sì',
				no: 'No'
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
				title: 'Impostazioni',
				language: {
					label: 'Lingua'
				},
				remoteServer: {
					tabTitle: 'Server remoto',
					protocol: 'Protocollo',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Nome del server',
					port: 'Porta',
					defaultPort: 'Use default port.'
				},
				autoBoot: {
					tabTitle: 'Auto-avvio',
					name: 'Nome del nodo',
					account: 'Indirizzo',
					primaryAccount: 'Indirizzo principale',
					auto: 'Auto avvia quando il portafoglio viene aperto'
				},
				save: 'Salva',
				saveSuccess: 'Impostazioni salvate con successo'
			},
			multisig: {
				title: 'Trasforma indirizzo in indirizzo multifirma',
				multisigAccount: 'Indirizzo multifirma',
				cosignatories: 'Indirizzi dei cofirmatari',
				labelDesc: 'Questo indirizzo è denominato {{1}}',
				nullLabelDesc: 'Questo indirizzo non ha un nome',
				addCosignatory: '+ Aggiungi cofirmatario',
				cancel: 'Annulla',
				convert: 'Trasforma',
				fee: 'Commissioni',
				feeValidation: 'Le commissioni non devono essere inferiori al minimo previsto',
				useMinimumFee: 'Utilizza commissioni minime',
				txConfirm: {
					title: 'Conferma la trasformazione in indirizzo multifirma',
					total: 'Totale',

				},
				warning: 'L\'indirizzo multifirma è nella lista dei cofirmatari. Questo porterebbe all\'impossibilità di accesso ai fondi. Probabilmente <b>non è</b> questo quello che vuoi.'
			},
			signMultisig: {
				title: 'Aggiungi firma alla trasazione multifirma',
				original: {
					from: 'Indirizzo multifirma',
					to: 'Destinatario',
					amount: 'Importo',
					fee: 'Commissioni interne',
					deadline: 'Tempo massimo'
				},
				multisigFees: 'Commissioni per multifirma',
				multisigTotal: 'Totale',
				sender: 'Cofirmatario',
				fee: 'Commissioni',
				feeValidation: 'Le commissioni non devono essere inferiori al minimo previsto',
				useMinimumFee: 'Utilizza commissioni minime',
				password: 'Password',
				passwordValidation: 'La password non può essere vuota',
				send: 'Invia',
				cancel: 'Annulla',
				sending: 'Invio in corso...',
				successMessage: 'Transazione inserita con successo!',
				txConfirm: {
					title: 'Conferma transazione multifirma',
					message: 'Messaggio',
					encrypted: 'Il messaggio è cifrato',
					noMessage: 'Nessun messaggio',

				}
			},
			sendNem: {
				title: 'Invia XEM',
				sender: 'Mittente',
				thisAccount: 'Questo indirizzo',
				labelDesc: 'Questo indirizzo è denominato {{1}}',
				nullLabelDesc: 'Questo indirizzo non ha un nome associato',
				amount: 'Importo',
				recipient: 'Indirizzo del destinatario',
				recipientValidation: 'L\'indirizzo deve essere composto di 40 caratteri trattini esclusi',
				message: 'Messaggio',
				encrypt: 'Cifra il mesaggio',
				fee: 'Commissioni',
				multisigFee: 'Commissione multifirma',
				feeValidation: 'Le commissioni non possono essere inferiori al minimo previsto',
				useMinimumFee: 'Usa commissioni minime',
				password: 'Password',
				passwordValidation: 'La password non può essere vuota',
				send: 'Invia',
				cancel: 'Annulla',
				sending: 'Invio in corso...',
				successMessage: 'Transazione inserita con successo!',
				txConfirm: {
					title: 'Conferma transazione',
					amount: 'Importo',
					to: 'A',
					total: 'Totale',
					message: 'Messaggio',
					encrypted: 'Cifra messaggio',
					noMessage: 'Nessun messaggio',
					cancel: 'Annulla',
					confirm: 'Conferma',
					sending: 'Invio in corso...'
				},
				notBootedWarning: {
					title: 'NIS non è stato avviato!',
					message: 'NIS deve essere avviato prima che tu passa inviare NEM!'
				},
				bootingWarning: {
					title: 'Avvio NIS in corso',
					message: 'Attendi finché NIS non è avviato prima di effettuare una transazione'
				},
				loadingWarning: {
					title: 'Caricamento dal database in corso'
				}
			},
			clientInfo: {
				title: 'Informazioni sul programma',
				ncc: 'NEM Community Client - NCC',
				signer: 'Firmatario',
				remoteServer: 'Server remoto',
				local: 'Locale',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Sincronizzato',
				notSync: 'Non sincronizzato',
				notConnected: 'Non connesso alla rete NEM',
				loading: 'Caricamento...'
			},
			transactionDetails: {
				title: 'Informazioni sulla transazione',
				id: 'Identificativo',
				hash: 'Firma',
				type: 'Tipo di transazione',
				direction: 'Direzione della transazione',
				pending: 'In attesa',
				outgoing: 'In uscita',
				incoming: 'In ingresso',
				self: 'A te stesso',
				sender: 'Mittente',
				multisigAccount: 'Indirizzo multifirma',
				issuer: 'Mittente',
				recipient: 'Destinatario',
				remote: 'Remoto',
				multisigMessage: 'Firme presenti',
				message: 'Messaggio',
				noMessage: 'Nessun messaggio',
				encrypted: 'Il messaggio è cifrato',
				time: 'Marca temporale',
				confirmations: 'Conferme',
				confirmationsUnknown: 'Sconosciuto',
				amount: 'Importo',
				fee: 'Commissioni',
				innerFee: 'Commissioni interne',
				multisigFees: 'Commissioni multifirma',
				cosignatory: 'Cofirmatario'
			},
			accountDetails: {
				title: 'Informazioni sull\'indirizzo',
				address: 'Indirizzo',
				label: 'Nome',
				noLabel: 'Nessun nome',
				add: 'Aggiungi alla rubrica',
				remove: 'Rimuovi dalla rubrica',
				balance: 'Bilancio',
				vested: 'vested',
				importance: 'Importanza',
				publicKey: 'Chiave pubblica',
				noPublicKey: 'Nessuna chiave pubblica',
				harvestedBlocks: 'Blocchi generati',
				close: 'Chiudi'
			},
			bootLocalNode: {
				title: 'Avvia nodo locale',
				account: 'Indirizzo con cui avviare il nodo',
				noLabel: '<span class=\'null\'>&lt;Senza nome&gt;</span>',
				wallet: 'Portafoglio',
				node: 'Nome del nodo',
				boot: 'Avvia',
				booting: 'Avvio in corso...',
				warning: 'Boot node warning',
				warningText: 'You\'re trying to boot a node <u>{{2}}</u><br/><br/>Booting remote node is currently impossible from within NCC.',
				warningStatement: 'You have auto-boot set to true and you\'re using remote node {{3}}.<br/><br/>Booting remote node is currently impossible from within NCC',
				warningQuestion: 'Are you sure you want to boot node <u>{{3}}</u> using private key of account {{1}} ({{2}} XEM)?<br><br>This will reveal this account\'s <span class="sublabelWarning">private key</span> to node: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Chiudi portafoglio',
				message: 'Sicuro di voler chiudere il portafoglio e tornare alla pagina iniziale?'
			},
			createAccount: {
				title: 'Creazione nuovo indirizzo',
				label: 'Nome privato',
				wallet: 'Portafoglio',
				password: 'Password del portafoglio',
				successMessage: 'L\'indirizzo {{1}} {{#2}}({{2}}){{/2}} è stato creato!',
				create: 'Crea'
			},
			showPrivateKey: {
				title: 'Show Account\'s PRIVATE Key',
				message: 'This will display account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',
				publicKey: 'Chiave pubblica',
				privateKey: 'Chiave privata',
				show: 'Show the key'
			},
			showRemotePrivateKey: {
				title: 'Show Remote Account\'s PRIVATE Key',
				message: 'This will display remote account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',

			},
			addAccount: {
				title: 'Aggiunta indirizzo esistente',
				privateKey: 'Chiave privata',
				wallet: 'Portafoglio',
				password: 'Password del portafoglio',
				successMessage: 'L\'indirizzo {{1}} {{#2}}({{2}}){{/2}} è stato aggiunto al portafoglio!',
				add: 'Aggiungi',
				label: 'Nome'
			},
			setPrimary: {
				title: 'Selezione indirizzo principale',
				account: 'Indirizzo da rendere principale',
				noLabel: '<span class=\'null\'>&lt;Senza nome&gt;</span>',
				wallet: 'Portafoglio',
				password: 'Password del portafoglio',
				successMessage: 'L\'indirizzo {{1}} {{#2}}({{2}}){{/2}} è il principale',
				set: 'Imposta come principale'
			},
			changeWalletName: {
				title: 'Modifica nome del portafoglio',
				wallet: 'Nome attuale del portafoglio',
				newName: 'Nuovo nome del portafoglio',
				password: 'Password del portafoglio',
				successMessage: 'Il portafoglio è stato rinominato da <em>{{1}}</em> in <em>{{2}}</em>',
				change: 'Modifica'
			},
			changeWalletPassword: {
				title: 'Modifica password del portafoglio',
				wallet: 'Portafoglio',
				password: 'Password attuale',
				newPassword: 'Nuova password',
				confirmPassword: 'Conferma nuova password',
				successMessage: 'La password del portafoglio è stata modificata con successo',
				change: 'Modifica',
				passwordNotMatchTitle: 'Errore!',
				passwordNotMatchMessage: 'Le password inserite non corrispondono. Assicurati di scriverle correttamente'
			},
			changeAccountLabel: {
				title: 'Modifica nome dell\'indirizzo',
				label: 'Nome dell\'indirizzo',
				wallet: 'Portafoglio',
				password: 'Password del portafoglio',
				successMessage: 'L\'indirizzo {{1}} è ora denominato {{2}}',
				change: 'Modifica'
			},
			removeAccount: {
				title: 'Cancellazione indirizzo',
				account: 'Indirizzo',
				label: 'Nome dell\'indirizzo',
				wallet: 'Portafoglio',
				password: 'Password del portafoglio',
				warning: 'Assicurati che l\'indirizzo non contenga alcun NEM prima di eliminarlo oppure questi saranno definitivamente persi.',
				successMessage: 'L\'indirizzo {{1}} {{#2}}({{2}}){{/2}} è stato eliminato!',
				remove: 'Elimina'
			},
			nisUnavailable: {
				title: 'NIS non disponibile',
				message: 'Disconnesso da NIS, in attesa di connessione'
			},
			shutdown: {
				title: 'Arresto NCC',
				message: 'Sei sicuro di voler arrestare NEM Community Client?'
			},
			activateRemote: {
				title: 'Activate Delegated Harvesting',
				wallet: 'Portafoglio',
				account: 'Indirizzo',
				password: 'Password del portafoglio',
				activate: 'Attiva',
				warning: 'Warning',
				warningText: 'Activation will take 6 hours (360 blocks). Activation will NOT start harvesting automatically.'
			},
			deactivateRemote: {
				title: 'Deactivate Delegated Harvesting',
				wallet: 'Portafoglio',
				account: 'Indirizzo',
				password: 'Password del portafoglio',
				deactivate: 'Disattiva',
				warning: 'Warning',
				warningText: 'Deactivation will take 6 hours (360 blocks).'
			},
			startRemote: {
				title: 'Start Delegated Harvesting',
				wallet: 'Portafoglio',
				account: 'Indirizzo',
				password: 'Password del portafoglio',
				start: 'Avvia'
			},
			stopRemote: {
				title: 'Stop Delegated Harvesting',
				wallet: 'Portafoglio',
				account: 'Indirizzo',
				password: 'Password del portafoglio',
				stop: 'Ferma'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer. To prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away."
			},
			addContact: {
				title: 'Aggiungi contatto',
				add: 'Aggiungi'
			},
			editContact: {
				title: 'Modifica contatto',
				saveChanges: 'Salva le modifiche'
			},
			removeContact: {
				title: 'Elimina contatto',
				remove: 'Elimina'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Il portafoglio è stato importato!',
			nav: {
				start: 'Vai',
				about: 'Informazioni su NEM',
				settings: 'Impostazioni'
			},
			main: {
				leftTitle: 'Nuovo utente <em>NEM</em>?',
				leftButton: 'Crea nuovo portafoglio',
				walletNamePlh: 'Nome del portafoglio',
				passwordPlh: 'Password',
				confirmPasswordPlh: 'Conferma password',
				create: 'Crea',
				creating: 'Creazione in corso...',
				rightTitle: 'Già utente <em>NEM</em>?',
				rightButton: 'Apri il portafoglio',
				openButton: 'Apri',
				walletsFound: 'Trovati <strong>{{1}}</strong> <em>portafogli</em>',
				copyright: 'Grafica di <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC protegge il tuo portafoglio',
						description: 'La <em>sicurezza</em> è molto importante per XEM per evitare il furto di monete e titoli.'
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
						title: 'Come funziona NCC?',
						paragraphs: [
							'<strong>NCC</strong> gestisce l\'accesso ai tuoi titoli e monete come un portafoglio tradizionale. Puoi:',
							'<strong>NCC</strong> necessita di un server <strong>NIS</strong> per operare. La norma è averne uno locale (installato contestualmente ad <strong>NCC</strong>)',
							'Puoi anche configurare l\'accesso ad un server <strong>NIS</strong> remoto.'
						],
						listItems: [
							'Gestire diversi portafogli',
							'Gestire diversi indirizzi per portafoglio'
						]
					},
					{
						title: 'Cos\'è &#42;NIS?',
						paragraphs: [
							'Fa funzionare la rete <strong>NEM</strong>.',
							'The more <strong>NIS</strong> there are in the network, the better the security.,',
							'<strong>NIS</strong> è il punto di accesso alla rete <strong>NEM</strong>.'
						],
						legend: '<strong>&#42;NIS</strong> è l\'acronimo di <strong>NEM Infrastructure Server</strong>'
					}
				]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Circa {{1}} giorni fa',
			lastAccessJustNow: 'Proprio ora',
			lastAccessTooltip: 'L\'ultimo accesso è stato {{1}}',
			primary: 'principale',
			primaryShort: 'P',
			noLabel: '<Senza nome>',
			copiedToClipboard: 'Indirizzo copiato negli appunti!',
			actions: {
				refreshInfo: 'Aggiorna informazioni',
				bootLocalNode: 'Avvia nodo locale',
				changeWalletName: 'Modifica nome del portafoglio',
				changeWalletPassword: 'Modifica password del portafoglio',
				mergeWallets: 'Unisci portafogli',
				exportWallet: 'Esporta portafoglio',
				createAccount: 'Crea nuovo indirizzo',
				createRealAccountData: 'Crea indirizzo reale',
				verifyRealAccountData: 'Verifica indirizzo reale',
				showPrivateKey: 'Show Account\'s PRIVATE key',
				showRemotePrivateKey: 'Show Remote Account\'s PRIVATE key',
				viewDetails: 'View Account Details',
				addAccount: 'Aggiungi indirizzo esistente',
				changeAccountLabel: 'Modifica nome dell\'indirizzo',
				setPrimary: 'Seleziona indirizzo principale',
				removeAccount: 'Elimina indirizzo',
				clientInfo: 'Informazioni sul programma',
				closeWallet: 'Chiudi portafoglio',
				closeProgram: 'Arresta NCC',
				copyClipboard: 'Copia indirizzo negli appunti',
				copyDisabled: 'Copying an address requires flash',
				convertMultisig: 'Convert other account to multisig'
			},
			nav: [
				'Vista d\'insieme',
				'Messaggi',
				'Contatti',
				'Transazioni',
				'Blocchi generati',
				'Borsa',
				'Notizie',
				'Applicazioni',
				'Indirizzi',
				'Impostazioni',
				'Arresta NCC'
			],
			bootNodeWarning: 'E\' necessario avviare un nodo locale per poter utilizzare a pieno le funzionalità di NCC.'
		},
		dashboard: {
			assets: {
				title: 'I tuoi titoli'
			},
			importance: {
				title: 'Livello di importanza',
				unknown: 'Stato sconosciuto',
				start: 'Avvia generazione blocchi',
				harvesting: 'Generazione blocchi in corso',
				stop: 'Ferma generazione blocchi',
				description: 'importanza dell\'indirizzo nella rete NEM',
				remoteHarvest: {
					activate: 'Activate delegated harvesting',
					activating: 'Activating delegated harvesting...',
					active: 'Delegated harvesting is active',
					deactivate: 'Deactivate delegated harvesting',
					deactivating: 'Deactivating delegated harvesting...',
					startRemoteHarvesting: 'Start delegated harvesting',
					remotelyHarvesting: 'Generazione blocchi sicura in corso',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			},
			transactions: {
				title: 'Transazioni recenti',
				sendNem: 'Invia XEM',
				signMultisig: 'FIRMA',
				balance: 'Bilancio attuale',
				loading: 'Loading balance',
				accountCosignatories: 'Indirizzo multifirma',
				accountCosignatoriesView: 'view cosignatories',
				vestedBalance: 'Bilancio vested',
				syncStatus: '(al blocco {{1}}{{#2}} : circa {{3}} giorni indietro{{/2}})',
				notSynced: 'might be inaccurate, NIS not synchronized yet',
				unknown: 'sconosciuto',
				columns: [
					'',
					'Orario',
					'Mittente/destinatario',
					'Messaggio',
					'',
					'Dettagli',
					'Conferme',
					'Commissioni',
					'Importo'
				],
				noMessage: 'Nessun messaggio',
				encrypted: 'Messaggio cifrato',
				view: 'Visualizza',
				confirmationsUnknown: 'Sconosciuto',
				pending: 'In attesa',
				seeAll: 'Visualizza tutte le transazioni',
				noTransactions: 'Ancora nessuna transazione'
			},
			nemValue: {
				title: 'Statistiche sul valore dei XEM'
			},
			messages: {
				titleTooltip: 'Messaggi'
			},
			news: {
				titleTooltip: 'Notizie'
			},
			notAvailable: 'Non disponibile nella versione beta'
		},
		transactions: {
			title: 'Transazioni',
			sendNem: 'Invia XEM',
			balance: 'Bilancio attuale',
			filters: {
				confirmed: 'Confermate',
				unconfirmed: 'Non confermate',
				incoming: 'In ingresso',
				outgoing: 'In uscita'
			},
			table: {
				columns: [
					'',
					'Orario',
					'Mittente/destinatario',
					'Messaggio',
					'',
					'Dettagli',
					'Conferme',
					'Commissioni',
					'Importo'
				],
				noMessage: 'Nessun messaggio',
				encrypted: 'Messaggio cifrato',
				view: 'Visualizza',
				confirmationsUnknown: 'Sconoscito',
				pending: 'In attesa',
				noTransactions: 'Ancora nessuna transazione',
				loading: 'Caricamento ulteriori transazioni...'
			}
		},
		harvestedBlocks: {
			title: 'Blocchi generati',
			feeEarned: 'Commissioni guadagnate nella generazione degli ultimi 25 blocchi',
			unknown: 'Sconosciuto',
			table: {
				columns: [
					'Numero',
					'Orario',
					'Block difficulty',
					'Commissioni'
				],
				noBlocks: 'Nessun blocco generato ',
				loading: 'Caricamento blocchi precedenti...'
			},
			harvesting: {
				unknown: 'Stato sconosciuto',
				start: 'Avvia generazione blocchi',
				harvesting: 'Generazione blocchi in corso',
				stop: 'Ferma generazione blocchi',
				remoteHarvest: {
					startRemoteHarvesting: 'Start delegated harvesting',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			}
		},
		addressBook: {
			title: 'Contatti',
			addContact: 'Aggiungi contatto',
			table: {
				columns: [
					'Indirizzo',
					'Nome privato',
					'Nome pubblico'
				],
				noContacts: 'Nessun contatto nella tua rubrica'
			},
			noLabel: 'Nessun nome',
			sendNem: 'Invia XEM',
			edit: 'Modifica',
			remove: 'Elimina'
		},
		settings: {
			title: 'Impostazioni',
			settings: [
				{
					name: 'Lingua'
				}
			],
			save: 'Salva modifiche',
			saveSuccess: 'Le impostazioni sono state salvate'
		}
	}
});
