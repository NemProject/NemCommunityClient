define({
	id: 'es',
	name: 'Spanish',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Archivo no encontrado.',
			102: 'El monedero no ha sido creado.',
			103: 'El archivo de monedero está corrupto. Favor recuperar su monedero de una copia de seguridad que debio de haber creado en el momento en que el monedero fue creado o en que agrego una cuenta a este.',
			104: 'La contrase&ntilde;a especificada es inválida. Esperemos que pueda recordar la contrase&ntilde;a correcta. La contrase&ntilde;a no puede ser recuperada si se pierde!',
			106: 'Antes de que puedas comenzar a usar un monedero, este debe abrirse. Debes de proveer la contrase&ntilde;a para asegurar que eres elegible para accesar el monedero.',
			107: 'El monedero no contiene esta cuenta.',
			108: 'La cuenta no puede ser removida. Probablemente se debe a que la cuenta aún tiene un balance mayor de 0 NEMs o a que la cuenta que estás tratando de remover es la cuenta primaria.',
			109: 'Ya existe un monedero con el mismo nombre. Por favor, elija otro nombre de monedero.',
			110: 'Wallet already contains this account.',
			202: 'Enviar una transacción encriptada no es posible debido a que el destinatario nunca ha realizado una transacción.',
			305: 'El Servidor de Infraestructura NEM no está disponible.',
			306: 'Un error imprevisto ha ocurrido. Pedimos disculpas por este problema. Tal vez re-intentar ayude a resolver el problema. De otra ma nera',
			400: 'Algún parametro requerido no ha sido especificado o es inválido.',
			401: 'This operation cannot be completed because it might leak a private key by sending it to a remote NIS.',
			404: 'El recurso solicitado no se ha encontrado.',
			500: 'Error al guardar archivo de configuración.',
			600: 'NCC requiere la iniciación de un servidor NIS para enviar y recibir transacciones de la nube NEM. Por favor, use las opciones de menu NCC para iniciar un servidor NIS local.',
			601: 'El nodo NIS ya ha sido iniciado. No es válido intentar iniciar el nodo NIS ya estando iniciado.',
			700: 'La cuenta especificada no satisface los criterios básicos para recolectar. Normalmente este problema está relacionado al balance de la cuenta. Al menos 1000 NEMs son necesarios para participar en el proceso de recolecta.',
			701: 'La fecha limite especificada esta en el pasado. La fecha limite especificada debe de estar dentro del periodo de un dia.',
			702: 'La fecha limite especificada esta muy lejos en el futuro. La fecha limite especificada debe de estar dentro del periodo de un dia.',
			703: 'La cuenta no tiene balance suficiente para enviar la cantidad especificada de NEMs.',
			704: 'El texto especificado es muy largo para ser enviado via NEM. Por favor, intente reducir el tama&ntilde;o del mensaje que desea enviar.',
			705: 'The transaction hash already exists in the database or the list of unconfirmed transactions.',
			706: 'La firma de la transacción no pudo ser verificada.',
			707: 'La marca de tiempo de la transacción esta muy lejos en el pasado.',
			708: 'La marca de tiempo de la transacción esta muy lejos en el futuro.',
			709: 'La cuenta es desconocida. Una cuenta necesita ser parte de al menos una transacción (ya sea emisor o destinatario) para ser conocida en la red.',
			901: 'There was an error setting up offline mode.',
			1000: "The private key and the public key you have provided mismatch.",
			1001: 'The public key and the address you have provided mismatch.',
			1002: 'The address does not belong to the main network.'
		},
		common: {
			success: 'Success', //title of the Success message modals
			appStatus: {
				nccUnknown: 'NCC status is unknown',
				nccUnavailable: 'NCC no esta disponible',
				nccStarting: 'NCC is starting...',
				nisUnknown: 'NIS status is unknown',
				nisUnavailable: 'NIS no esta disponible',
				nisStarting: 'NIS is starting...',
				notBooted: 'NIS requires to be booted. Please open your wallet and boot a local node via the popup dialog or configure the auto-boot setting.',
				booting: 'Booting NIS...',
				nisInfoNotAvailable: 'NIS info is not avaiable yet. Trying to retrieve NIS info...',
				synchronizing: 'NIS está sincronizando. En el bloque {{1}}: aproximadamente {{2}} día(s) atras.',
				daysBehind: {
					0: 'less than 1 day',
					1: '1 day',
					many: '{{1}} days'
				},
				synchronized: 'NIS is synchronized!'
			}
		},
		modals: {
			error: {
				title: 'Oops!',
				caption: 'ERROR {{1}}'
			},
			confirmDefault: {
				yes: 'Si',
				no: 'No'
			},
			settings: {
				title: 'Settings',
				language: {
					label: 'Language'
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
					tabTitle: 'Auto-boot',
					name: 'Node name',
					account: 'Account',
					primaryAccount: 'Primary Account',
					auto: 'Auto boot when a wallet is opened'
				},
				save: 'Save',
				saveSuccess: 'Settings have been saved successfully'
			},
			sendNem: {
				title: 'Enviar NEM',
				labelDesc: 'Esta cuenta está etiquetada como {{1}}',
				nullLabelDesc: "Esta cuenta no está etiquetada.",
				amount: 'Cantidad',
				recipient: "Cuenta de destinatario",
				recipientValidation: 'Account addresses must be 40 character long excluding dashes',
				message: 'Mensaje',
				encrypt: 'Encriptar mensaje',
				fee: 'Tarifa',
				feeValidation: 'Fee must not be less than the minimum fee',
				dueBy: 'Debido por',
				useMinimumFee: 'Use minimum fee',
				hours: 'horas',
				password: 'Contrase&ntilde;a',
				send: 'Enviar',
				cancel: 'Cancel',
				sending: 'Enviando...',
				successMessage: '&iexcl;La transacción ha sido enviada exitosamente!',
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
					title: 'Nodo no ha sido iniciado!',
					message: 'A local node needs to be booted before you can send NEM!'
				},
				bootingWarning: {
					title: 'Node is being booted',
					message: 'Please wait until booting process is done to send your transaction.'
				}
			},
			clientInfo: {
				title: 'Informacion de cliente',
				ncc: 'Cliente de Comunidad NEM - NCC',
				signer: 'Firmante',
				remoteServer: 'Servidor Remoto',
				local: 'Servidor Local',
				nis: 'Servidor de Infraestructura NEM - NIS',
				sync: 'Sincronizado',
				notSync: 'No esta sincronizado',
				notConnected: 'No esta conectado a la nube NEM',
				loading: 'Cargando...'
			},
			transactionDetails: {
				title: 'Detalles de Transacción',
				id: 'ID',
				hash: 'Hash',
				type: 'Tipo de Transacción',
				pending: 'Pendiente',
				outgoing: 'Saliente',
				incoming: 'Entrante',
				self: 'Self',
				sender: 'Emisor',
				recipient: "Cuenta de destinatario",
				message: 'Mensaje',
				noMessage: 'Sin mensaje',
				encrypted: 'Mensaje está encriptado.',
				time: 'Marca de tiempo',
				confirmations: 'Confirmaciones',
				confirmationsUnknown: 'Unknown',
				amount: 'Cantidad',
				fee: 'Tarifa'
			},
			bootLocalNode: {
				title: 'Inicializar nodo local',
				account: 'Cuenta para inicializar nodo local',
				noLabel: '<span class="null">&lt;Sin etiqueta&gt;</span>',
				wallet: 'Monedero',
				node: 'Nombre de nodo',
				boot: 'Inicializar',
				booting: 'Inicializando...'
			},
			closeWallet: {
				title: 'Cerrar monedero',
				message: 'Está seguro que desea cerrar el monedero y volver a la pagina de inicio?'
			},
			createAccount: {
				title: 'Crear cuenta nueva',
				label: 'Private label',
				wallet: 'Monedero',
				password: "Contrase&ntilde;a de monedero",
				successMessage: 'Cuenta {{1}} {{#2}}({{2}}){{/2}} ha sido creada!',
				create: 'Crear'
			},
			createRealAccountData: {
				title: 'Create real account data',
				message: 'The below data is for your real account after NEM launches. Save the the address, the public key, and most importantly the private key somewhere safe. If you lose the private key, your account and all your real NEMs will be lost FOREVER!',
				address: 'Address',
				publicKey: 'Public key',
				privateKey: 'Private key',
				confirm: {
					title: 'Save the private key',
					message: 'Are you sure your private key has been saved into a safe place?'
				},
				recheck: {
					title: 'Re-check your saved private key',
					message: "Please re-enter your private key you've just been provided to check if you have the correct one saved. If your private key is already lost, you may want to create a new one.",
					correct: {
						title: 'Nice!',
						message: 'You seem to have your correct private key saved. Please remember to always keep it safe and secured!'
					},
					incorrect: {
						title: 'Hmm...',
						message: "The private key you've just entered is not correct! Please double check and enter it once again.",
						tryAgain: 'Try to enter again',
						seeOriginal: 'See the original data'
					},
					recheck: 'Check'
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
				title: 'A&ntilde;adir cuenta existente',
				privateKey: "Clave privada de cuenta",
				wallet: 'Monedero',
				password: "Contrase&ntilde;a de monedero",
				successMessage: 'Cuenta {{1}} {{#2}}({{2}}){{/2}} ha sido a&ntilde;adida al monedero!',
				add: 'A&ntilde;adir',
				label: 'Etiqueta'
			},
			setPrimary: {
				title: 'Definir cuenta primaria',
				account: 'Cuenta a ser definida como primaria',
				noLabel: '<span class="null">&lt;Sin etiqueta&gt;</span>',
				wallet: 'Monedero',
				password: "Contrase&ntilde;a de monedero",
				successMessage: 'Cuenta {{1}} {{#2}}({{2}}){{/2}} ha sido definida como cuenta primaria!',
				set: 'Definir como primaria'
			},
			changeWalletName: {
				title: 'Cambiar nombre de monedero',
				wallet: 'Nombre actual de monedero',
				newName: 'Nuevo nombre de monedero',
				password: "Contrase&ntilde;a de monedero",
				successMessage: 'El nombre de monedero ha sido cambiado exitosamente de <em>{{1}}</em> a <em>{{2}}</em>',
				change: 'Cambiar'
			},
			changeWalletPassword: {
				title: 'Cambiar contrase&ntilde;a de monedero',
				wallet: 'Monedero',
				password: 'Contrase&ntilde;a actual',
				newPassword: 'Nueva contrase&ntilde;a',
				confirmPassword: 'Confirmar nueva contrase&ntilde;a',
				successMessage: 'La contrase&ntilde;a de monedero ha sido cambiada exitosamente.',
				change: 'Cambiar',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: 'La nueva contrase&ntilde;a especificada no coincide con la contrase&ntilde;a de confirmación. Por favor, asegurese de especificar la nueva contrase&ntilde;a correctamente.'
			},
			changeAccountLabel: {
				title: 'Cambiar etiqueta de cuenta',
				label: 'Etiqueta de cuenta',
				wallet: 'Monedero',
				password: "Contrase&ntilde;a de monedero",
				successMessage: 'Cuenta {{1}} ahora esta etiquetada como {{2}}',
				change: 'Cambiar'
			},
			removeAccount: {
				title: 'Remover cuenta',
				wallet: 'Monedero',
				password: "Contrase&ntilde;a de monedero",
				warning: 'Por favor, asegúrese que la cuenta que desea remover no contiene NEMs, ya que estos se perderian para siempre al removerla.',
				successMessage: 'Cuenta {{1}} {{#2}}({{2}}){{/2}} ha sido removida!',
				remove: 'Remover'
			},
			nisUnavailable: {
				title: 'NIS no esta disponible',
				message: 'Desconectado de NIS, esperando conección'
			},
			shutdown: {
				title: 'Cerrar programa',
				message: 'Está seguro que desea cerrar el Cliente de Comunidad NEM?'
			},
			activateRemote: {
				title: 'Activate Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				hoursDue: 'Hours due',
				password: "Wallet's password",
				activate: 'Activate'
			},
			deactivateRemote: {
				title: 'Deactivate Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				hoursDue: 'Hours due',
				password: "Wallet's password",
				deactivate: 'Deactivate'
			},
			startRemote: {
				title: 'Start Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: "Wallet's password",
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
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer.\n\nTo prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away.",
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'El monedero ha sido importado exitosamente!',
			nav: {
				start: 'Comienze aquí',
				about: 'Acerca de NEM',
				settings: 'Settings'
			},
			main: {
				leftTitle: 'Nuevo en <em>NEM</em>?',
				leftButton: 'Crear nuevo monedero',
				walletNamePlh: 'Nombre de su monedero',
				passwordPlh: 'Contrase&ntilde;a',
				create: 'Crear',
				rightTitle: 'Ya es miembro de <em>NEM</em>?',
				rightButton: 'Abrir su monedero',
				openButton: 'Abrir',
				walletsFound: 'Se encontro <strong>{{1}}</strong> <em>monedero(s)</em>',
				copyright: 'Fotografía por <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [{
					title: 'NCC encripta su monedero',
					description: 'La <em>seguridad</em> es bien importante para evitar robo de monedas NEM y/o activos.'
				}, {
					title: 'NCC encripta su monedero',
					description: 'La <em>seguridad</em> es bien importante para evitar robo de monedas NEM y/o activos.'
				}]
			},
			about: {
				sections: [{
					title: 'Como funciona NCC?',
					paragraphs: [
						'<strong>NCC</strong> te provee acceso a tus activos y NEMs como cualquier monedero tradicional. Usted puede',
						'<strong>NCC</strong> requiere acceso a un servidor <strong>NIS</strong> para poder operar. La convención es tener un servidor NIS local activo (instalado junto a <strong>NCC</strong>)',
						'Usted también puede configurar acceso a un servidor <strong>NIS</strong> remoto'
					],
					listItems: [
						'Have multiple wallets',
						'Define multiple accounts to be included in a wallet'
					]
				}, {
					title: 'Qué es &#42;NIS?',
					paragraphs: [
						'Este componente es responsable de mantener la nube <strong>NEM</strong> con vida',
						'Mayor sera la seguridad mientras mas instancias de <strong>NIS</strong> esten conectadas a la nube <strong>NEM</strong>',
						'<strong>NIS</strong> es el punto de acceso a la nube <strong>NEM</strong>'
					],
					legend: '<strong>&#42;NIS</strong> significa <strong>Servidor de Infraestructura NEM</strong>'
				}]
			},
			footer: {
				copyright: '&copy; Copyright 2014. Cliente de Comunidad NEM.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Hace {{1}} dia(s) aproximadamente',
			lastAccessJustNow: 'En estos momentos',
			lastAccessTooltip: 'Último acceso fue en {{1}}',
			primary: 'primario',
			primaryShort: 'P',
			noLabel: '<Sin etiqueta>',
			copiedToClipboard: 'Dirección ha sido copiada al portapapeles!',
			actions: {
				refreshInfo: 'Actualizar informacion',
				bootLocalNode: 'Inicializar nodo local',
				changeWalletName: 'Cambiar nombre de monedero',
				changeWalletPassword: 'Cambiar contrase&ntilde;a de monedero',
				mergeWallets: 'Fusionar monederos',
				exportWallet: 'Exportar monedero',
				createAccount: 'Crear cuenta nueva',
				createRealAccountData: 'Create real account data',
				verifyRealAccountData: 'Verify real account data',
				addAccount: 'A&ntilde;adir cuenta existente',
				changeAccountLabel: 'Cambiar etiqueta de cuenta',
				setPrimary: 'Set como cuenta primaria',
				removeAccount: 'Remover cuenta',
				clientInfo: 'Informacion de cliente',
				closeWallet: 'Cerrar monedero',
				closeProgram: 'Cerrar programa',
				copyClipboard: 'Copy address to clipboard'
			},
			nav: [
				'Dashboard',
				'Messages',
				'Contacts',
				'Transactions',
				'Harvested blocks',
				'Asset Exchange',
				'News',
				'Applications',
				'Accounts',
				'Settings',
				'Close Program'
			],
			bootNodeWarning: "Se necesita iniciar un nodo local antes de poder utilizar todas las características de NCC."
		},
		dashboard: {
			assets: {
				title: 'Tus activos'
			},
			importance: {
				title: 'Puntuación de importancia',
				unknown: 'Estado desconocido',
				start: 'Comenzar recolecta',
				harvesting: 'Recolectando',
				stop: 'Detener recolecta',
				description: 'importancia de la cuenta para la nube NEM',
				remoteHarvest: {
					activate: 'Activate remote harvesting',
					activating: 'Activating...',
					active: 'Remote harvesting is active',
					deactivate: 'Deactivate remote harvesting',
					deactivating: 'Deactivating...',
					startRemoteHarvesting: 'Start remote harvesting',
					remotelyHarvesting: 'Remotely harvesting',
					stopRemoteHarvesting: 'Stop remote harvesting'
				}
			},
			transactions: {
				title: 'Transacciones recientes',
				sendNem: 'Enviar NEM',
				balance: 'Saldo actual',
				syncStatus: '(En el bloque {{1}}{{#2}}: aproximadamente {{3}} dia(s) atras{{/2}})',
				unknown: 'desconocido',
				columns: [
					'',
					'Time',
					'Sender/Recipient',
					'Message',
					'',
					'Details',
					'Confirmations',
					'Fee',
					'Amount'
				],
				types: {
					pending: 'Transacción pendiente',
					outgoing: 'Transacción saliente',
					incoming: 'Transacción entrante',
					self: 'Transacción a sí mismo'
				},
				noMessage: 'Sin mensaje',
				encrypted: 'Mensaje esta encriptado',
				view: 'Ver',
				confirmationsUnknown: 'Unknown',
				pending: 'Pendiente',
				seeAll: 'Ver todas las transacciones',
				noTransactions: 'Aun no se ha ejecutado ninguna transacción'
			},
			nemValue: {
				title: 'Valores de estadísticas de NEM'
			},
			messages: {
				titleTooltip: 'Mensajes'
			},
			news: {
				titleTooltip: 'Noticias'
			},
			notAvailable: 'No disponible en versión alfa'
		},
		transactions: {
			title: 'Transacciones',
			sendNem: 'Enviar NEM',
			balance: 'Balance actual',
			filters: {
				confirmed: 'Confirmed',
				unconfirmed: 'Unconfirmed',
				incoming: 'Entrante',
				outgoing: 'Saliente'
			},
			table: {
				columns: [
					'',
					'Time',
					'Sender/Recipient',
					'Message',
					'',
					'Details',
					'Confirmations',
					'Fee',
					'Amount'
				],
				types: {
					pending: 'Transacción pendiente',
					outgoing: 'Transacción saliente',
					incoming: 'Transacción entrante',
					self: 'Transacción a si mismo'
				},
				noMessage: 'Sin mensaje',
				encrypted: 'Mensaje esta encriptado',
				view: 'Ver',
				confirmationsUnknown: 'Unknown',
				pending: 'Pendiente',
				noTransactions: 'Aun no se ha ejecutado ninguna transacción',
				loading: 'Cargando mas transacciones...'
			}
		},
		harvestedBlocks: {
			title: 'Bloques recolectados',
			feeEarned: 'Comisiones devengadas por los últimos 25 bloques recolectados',
			unknown: 'Unknown',
			table: {
				columns: [
					'Height',
					'Time',
					'Block hash',
					'Fee'
				],
				noBlocks: 'No hay bloques recolectados',
				loading: 'Ver bloques recolectados mas viejos'
			},
			harvesting: {
				unknown: 'Estado desconocido',
				start: 'Comenzar recolecta',
				harvesting: 'Recolectando',
				stop: 'Detener recolecta',
				remoteHarvest: {
					startRemoteHarvesting: 'Start remote harvesting',
					stopRemoteHarvesting: 'Stop remote harvesting'
				}
			}
		},
		settings: {
			title: 'Configuración',
			settings: [{
				name: 'Idioma'
			}],
			save: 'Guardar cambios',
			saveSuccess: 'Settings have been saved successfully'
		}
	}
});
