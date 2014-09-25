define({
	id: 'it',
	name: 'Italiano',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: ','
		},
		faults: {
            101: 'File non trovato.',
            102: 'Il portafoglio non è stato creato.',
            103: "Il file del portafoglio è corrotto. Ripristina il portafoglio dal backup che dovresti aver effettuato quando l'hai creato o vi hai aggiunto un indirizzo.",
            104: "La password inserita non è corretta. Si spera tu riesca a ricordare la password corretta in quanto non c'è modo di recuperarla!",
            106: "Per poter utilizzare un portafoglio è necessario aprirlo. Per accertarsi che l'utente sia autorizzato ad accedervi, è necessario fornire la password del portafoglio.",
            107: 'Il portafoglio non contiene questo indirizzo',
            108: "L'indirizzo non può essere eliminato. Probabilmente perché contiene qualche NEM oppure perché è l'indirizzo principale.",
            109: 'Esiste già un portafoglio con questo nome. Scegli un nome differente.',
            110: 'Esiste già un portafoglio contenete questo indirizzo.',
            202: 'Impossibile cifrare il testo: non è nota la chiave pubblica del destinatario',
            305: 'Il server NIS non è in esecuzione',
            306: "E' occorso un errore imprevisto; riprova ad effettuare l'operazione. Se il problema persiste chiedi supporto alla comunità NEM",
            400: 'Manca qualche parametro obbligatorio',
            404: 'Strategia di avvio non valida',
            500: 'Errore nella scrittura del file di configurazione',
            600: 'NCC richiede che il server NIS sia avviato per poter inviare e ricevere transazioni nella rete NEM. Usa la voce "Avvia il nodo locale" nel menu di NCC.',
            601: 'Il nodo NIS locale è già avviato; non è possibile avviarlo nuovamente.',
            700: "L'indirizzo indicato non soddisfa i criteri minimi per generare blocchi. Per poter generare blocchi è necessario disporre di almeno 1000 NEM",
            701: 'Il termine massimo indicato è nel passato. Dovrebbe invece essere nelle prossime 24 ore.',
            702: 'Il termine massimo indicato è troppo lontano nel futuro. Dovrebbe invece essere nelle prossime 24 ore.',
            703: "L'indirizzo non dispone di abbastanza fondi per inviare la quantità di NEM indicata.",
            704: 'Il messaggio inserito è troppo grande per essere spedito tramite la rete NEM. Riduci la dimensione del testo.',
            705: 'La firma della transazione è già presente nel database delle transazioni non ancora confermate.',
            706: 'Errore nella verifica della firma della transazione.',
            707: 'La marca temporale della transazione è troppo lontana nel passato.',
            708: 'La marca temporale della transazione è troppo lontana nel futuro.',
            709: 'Indirizzo sconosciuto. Un indirizzo deve comparire in almeno una transazione (come mittente o come destinatario) per essere noto alla rete.',
            901: 'Errore nella modalità fuori rete.'
        },
        common: {
        	success: 'Operazione completata', //title of the Success message modals
        	nisStatus: {
        		nccUnavailable: 'NCC non disponibile',
        		unavailable: 'NIS non disponibile',
        		notBooted: 'NIS richiede di essere avviato. Apri il tuo portafoglio ed avvia il nodo locale.',
        		synchronizing: 'Sincronizzazione NIS in corso. Al blocco {{1}}, {{2}} indietro.',
                daysBehind: {
                    0: 'meno di un giorno',
                    1: 'un giorno',
                    many: '{{1}} giorni'
                },
        		synchronized: 'NIS è sinronizzato!'
        	}
        },
		modals: {
			error: {
				title: 'Errore!',
				caption: 'ERRORE {{1}}'
			},
			confirmDefault: {
				yes: 'Sì',
				no: 'No'
			},
			sendNem: {
				title: 'Invia NEM',
				labelDesc: 'Questo indirizzo è denominato {{1}}',
				nullLabelDesc: "Questo indirizzo non ha un nome associato",
				amount: 'Importo',
				recipient: "Indirizzo del destinatario",
				message: 'Messaggio',
				encrypt: 'Cifra il mesaggio',
				fee: 'Commissioni',
				dueBy: 'Termine massimo',
				resetFee: 'Commissioni minime',
				hours: 'ore',
				password: 'Password',
				send: 'Invia',
				sending: 'Invio in corso...',
				successMessage: 'Transazione inserita con successo!'
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
				// this might be block or transaction ID
				id: 'Identificativo',
				// this might be block or transaction Hash
				hash: 'Firma',
				type: 'Tipo di transazione',
				pending: 'In attesa',
				outgoing: 'In uscita',
				incoming: 'In ingresso',
				self: 'A te stesso',
				sender: 'Mittente',
				recipient: 'Destinatario',
				message: 'Messaggio',
				noMessage: 'Nessun messaggio',
				encrypted: 'Il messaggio è cifrato',
				time: 'Marca temporale',
				confirmations: 'Conferme',
				amount: 'Importo',
				fee: 'Commissioni'
			},
			bootLocalNode: {
				title: 'Avvia nodo locale',
				account: 'Indirizzo con cui avviare il nodo',
				noLabel: '<span class="null">&lt;Senza nome&gt;</span>',
				wallet: 'Portafoglio',
				node: 'Nome del nodo',
				boot: 'Avvia',
				booting: 'Avvio in corso...'
			},
			notBootedWarning: {
				title: 'Nodo non avviato!',
				message: 'Il nodo locale va avviato prima di poter inviare NEM!'
			},
			closeWallet: {
				title: 'Chiudi portafoglio',
				message: 'Sicuro di voler chiudere il portafoglio e tornare alla pagina iniziale?'
			},
			createAccount: {
				title: 'Creazione nuovo indirizzo',
				label: 'Nome privato',
				wallet: 'Portafoglio',
				password: "Password del portafoglio",
				successMessage: "L'indirizzo {{1}} {{#2}}({{2}}){{/2}} è stato creato!",
				create: 'Crea'
			},
			addAccount: {
				title: 'Aggiunta indirizzo esistente',
				privateKey: "Chiave privata",
				wallet: 'Portafoglio',
				password: "Password del portafoglio",
				successMessage: "L'indirizzo {{1}} {{#2}}({{2}}){{/2}} è stato aggiunto al portafoglio!",
				add: 'Aggiungi',
				label: 'Nome'
			},
			setPrimary: {
				title: 'Selezione indirizzo principale',
				account: 'Indirizzo da rendere principale',
				noLabel: '<span class="null">&lt;Senza nome&gt;</span>',
				wallet: 'Portafoglio',
				password: "Password del portafoglio",
				successMessage: "L'indirizzo {{1}} {{#2}}({{2}}){{/2}} è il principale",
				set: 'Imposta come principale',
			},
			changeWalletName: {
				title: 'Modifica nome del portafoglio',
				wallet: 'Nome attuale del portafoglio',
				newName: 'Nuovo nome del portafoglio',
				password: "Password del portafoglio",
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
				title: "Modifica nome dell'indirizzo",
				label: "Nome dell'indirizzo",
				wallet: 'Portafoglio',
				password: "Password del portafoglio",
				successMessage: "L'indirizzo {{1}} è ora denominato {{2}}",
				change: 'Modifica'
			},
			removeAccount: {
				title: 'Cancellazione indirizzo',
				wallet: 'Portafoglio',
				password: "Password del portafoglio",
				warning: "Assicurati che l'indirizzo non contenga alcun NEM prima di eliminarlo oppure questi saranno definitivamente persi.",
				successMessage: "L'indirizzo {{1}} {{#2}}({{2}}){{/2}} è stato eliminato!",
				remove: 'Elimina'
			},
			nisUnavailable: {
				title: 'NIS non disponibile',
				message: 'Disconnesso da NIS, in attesa di connessione'
			},
			shutdown: {
				title: 'Arresto NCC',
				message: 'Sei sicuro di voler arrestare NEM Community Client?'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Il portafoglio è stato importato!',
			nav: {
				start: 'Vai',
				about: 'Informazioni su NEM',
				help: 'Aiuto'
			},
			main: {
				leftTitle: 'Nuovo utente <em>NEM</em>?',
				leftButton: 'Crea nuovo portafoglio',
				walletNamePlh: 'Nome del portafoglio',
				passwordPlh: 'Password',
				create: 'Crea',
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
						description: 'La <em>sicurezza</em> è molto importante per NEM per evitare il furto di monete e titoli.'
					},
					{
						title: 'NCC protegge il tuo portafoglio',
						description: 'La <em>sicurezza</em> è molto importante per NEM per evitare il furto di monete e titoli.'
					}
				]
			},
			about: {
				sections: [
					{
						title: 'Come funziona NCC?',
						paragraphs: [
							"<strong>NCC</strong> gestisce l'accesso ai tuoi titoli e monete come un portafoglio tradizionale. Puoi:",
							"<strong>NCC</strong> necessita di un server <strong>NIS</strong> per operare. La norma è averne uno locale (installato contestualmente ad <strong>NCC</strong>)",
							"Puoi anche configurare l'accesso ad un server <strong>NIS</strong> remoto."
						],
						listItems: [
							'Gestire diversi portafogli',
							'Gestire diversi indirizzi per portafoglio'
						]
					},
					{
						title: "Cos'è &#42;NIS?",
						paragraphs: [
							'Fa funzionare la rete <strong>NEM</strong>.',
							'Più server <strong>NIS</strong> esistono più la rete è sicura',
							'<strong>NIS</strong> è il punto di accesso alla rete <strong>NEM</strong>.'
						],
						legend: "<strong>&#42;NIS</strong> è l'acronimo di <strong>NEM Infrastructure Server</strong>"
					}
				]
			},
			footer: {
				copyright: '&copy; Copyright 2014. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Circa {{1}} giorni fa',
			lastAccessJustNow: 'Proprio ora',
			lastAccessTooltip: "L'ultimo accesso è stato {{1}}",
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
				addAccount: 'Aggiungi indirizzo esistente',
				changeAccountLabel: "Modifica nome dell'indirizzo",
				setPrimary: 'Seleziona indirizzo principale',
				removeAccount: 'Elimina indirizzo',
				clientInfo: 'Informazioni sul programma',
				closeWallet: 'Chiudi portafoglio',
				closeProgram: 'Arresta NCC',
				copyClipboard: 'copia indirizzo negli appunti'
			},
			nav: [
				"Vista d'insieme",
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
			bootNodeWarning: "E' necessario avviare un nodo locale per poter utilizzare a pieno le funzionalità di NCC."
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
				description: "importanza dell'indirizzo nella rete NEM"
			},
			transactions: {
				title: 'Transazioni recenti',
				sendNem: 'Invia NEM',
				balance: 'Bilancio attuale',
				syncStatus: '(al blocco {{1}}{{#2}} : circa {{3}} giorni indietro{{/2}})',
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
				types: {
					pending: 'Transazione in attesa',
					outgoing: 'Transazione in uscita',
					incoming: 'Transazione in ingresso',
					self: 'Transazione verso te stesso',
				},
				noMessage: 'Nessun messaggio',
				encrypted: 'Messaggio cifrato',
				view: 'Visualizza',
				pending: 'In attesa',
				seeAll: 'Visualizza tutte le transazioni',
				noTransactions: 'Ancora nessuna transazione'
			},
			nemValue: {
				title: 'Statistiche sul valore dei NEM'
			},
			messages: {
				titleTooltip: 'Messaggi'
			},
			news: {
				titleTooltip: 'Notizie'
			},
			notAvailable: 'Non disponibile nella versione alfa'
		},
		transactions: {
			title: 'Transazioni',
			sendNem: 'Invia NEM',
			balance: 'Bilancio attuale',
			filters: {
				confirmed: 'Confermate',
				unconfirmed: 'Non confermate',
				incoming: 'In ingresso',
				outgoing: 'In uscita',
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
				types: {
					pending: 'Transazione in attesa',
					outgoing: 'Transazione in uscita',
					incoming: 'Transazione in ingresso',
					self: 'Transazione verso te stesso',
				},
				noMessage: 'Nessun messaggio',
				encrypted: 'Messaggio cifrato',
				view: 'Visualizza',
				pending: 'In attesa',
				noTransactions: 'Ancora nessuna transazione',
				loading: 'Caricamento ulteriori transazioni...'
			}
		},
		harvestedBlocks: {
			title: 'Blocchi generati',
			feeEarned: 'Commissioni guadagnate nella generazione degli ultimi 25 blocchi',
			table: {
				columns: [
					'Numero',
					'Orario',
					'Firma del blocco',
					'Commissioni'
				],
				noBlocks: 'Nessun blocco generato ',
				loadMore: 'Vedi blocchi precedenti'
			},
			harvesting: {
				unknown: 'Stato sconosciuto',
				start: 'Avvia generazione blocchi',
				harvesting: 'Generazione blocchi in corso',
				stop: 'Ferma generazione blocchi'
			}
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
