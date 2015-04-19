define({
	id: 'es',
	name: 'Spanish',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'The wallet file does not exist.',
			102: 'El monedero no ha sido creado.',
			103: 'Wallet file is corrupt. Please recover your wallet from a backup.',
			104: 'The provided password for the wallet is not correct.',
			105: 'No password was provided for the wallet.',
			106: 'Antes de que puedas comenzar a usar un monedero, este debe abrirse. Debes de proveer la contraseña para asegurar que eres elegible para accesar el monedero.',
			107: 'El monedero no contiene esta cuenta.',
			108: 'La cuenta no puede ser removida. Probablemente se debe a que la cuenta aún tiene un balance mayor de 0 XEM o a que la cuenta que estás tratando de remover es la cuenta primaria.',
			109: 'Ya existe un monedero con el mismo nombre. Por favor, elija otro nombre de monedero.',
			110: 'Wallet already contains this account.',
			111: 'The wallet name is a directory.',
			112: 'The extension of the wallet file is incorrect.',
			113: 'The wallet could not be deleted.',
			121: 'The address book file does not exist.',
			122: 'Address book has not been created.',
			123: 'Address book file is corrupt. Please recover your address book from a backup.',
			124: 'The provided password for the address book is not correct.',
			125: 'No password was provided for the address book.',
			127: 'Address book does not contain this address.',
			128: 'The address provided is not valid.',
			129: 'Another address book with the same name exists already. Please choose an other address book name.',
			130: 'Address book already contains this address.',
			131: 'The address book name is a directory.',
			132: 'The extension of the address book file is incorrect.',
			133: 'The address book could not be deleted.',
			202: 'Enviar una transacción encriptada no es posible debido a que el destinatario nunca ha realizado una transacción.',
			203: 'The account cannot be converted because not all cosignatories are known. They either need to be in the same wallet or have made at least one transaction.',
			305: 'The NEM Infrastructure Server (NIS) is not available.\n\nTry to restart the NEM software.\n\nIf you are using a remote NIS, check your configured host for typing errors or use another remote NIS.',
			306: 'Un error imprevisto ha ocurrido. Pedimos disculpas por este problema. Tal vez re-intentar ayude a resolver el problema. De otra ma nera',
			400: 'Algún parametro requerido no ha sido especificado o es inválido.',
			401: 'This operation cannot be completed because it might leak a private key by sending it to a remote NIS.',
			404: 'El recurso solicitado no se ha encontrado.',
			500: 'Error al guardar archivo de configuración.',
			600: 'NCC requiere la iniciación de un servidor NIS para enviar y recibir transacciones de la nube NEM. Por favor, use las opciones de menu NCC para iniciar un servidor NIS local.',
			601: 'El nodo NIS ya ha sido iniciado. No es válido intentar iniciar el nodo NIS ya estando iniciado.',
			602: 'Almost ready. NEM Infrastructure Server is currently loading blocks. Wallet will be functional when db is fully loaded.',
			699: 'Maximum number of harvesters allowed on server has been reached.',
			700: 'La cuenta especificada no satisface los criterios básicos para recolectar. Normalmente este problema está relacionado al balance de la cuenta. Al menos 10000 XEM son necesarios para participar en el proceso de recolecta.',
			701: 'La fecha limite especificada esta en el pasado. La fecha limite especificada debe de estar dentro del periodo de un dia.',
			702: 'La fecha limite especificada esta muy lejos en el futuro. La fecha limite especificada debe de estar dentro del periodo de un dia.',
			703: 'Your account does not have the right balance to make this transaction.',
			704: 'El texto especificado es muy largo para ser enviado via NEM. Por favor, intente reducir el tamaño del mensaje que desea enviar.',
			705: 'The transaction hash already exists in the database or the list of unconfirmed transactions.',
			706: 'La firma de la transacción no pudo ser verificada.',
			707: 'La marca de tiempo de la transacción esta muy lejos en el pasado.',
			708: 'La marca de tiempo de la transacción esta muy lejos en el futuro.',
			709: 'La cuenta es desconocida. Una cuenta necesita ser parte de al menos una transacción (ya sea emisor o destinatario) para ser conocida en la red.',
			710: 'The transaction was rejected because the transaction cache is too full. A higher fee improves the chance that the transaction gets accepted.',
			730: 'Importance transfer transaction (delegated harvesting) conflicts with existing transaction.',
			731: 'Delegated harvesting account has non zero balance and cannot be used.',
			732: 'Importance transfer rejected. There is already pending importance transfer operation.',
			733: 'Delegated harvesting is already active.',
			734: 'Delegated harvesting is NOT active. Cannot deactivate.',
			740: 'Transaction is not allowed for multisig account.',
			741: 'Multisig signature transaction rejected. Current account is not a cosignatory of a multisig account.',
			742: 'Multisig signature transaction rejected. Associated multisig transaction is not known to NEM network',
			743: 'Multisig account modification rejected. One of added accounts is already a cosignatory.',
			901: 'Error al intentar establecer modo fuera de linea.',
			1000: 'La clave publica y la clave privada especificada no combinan.',
			1001: 'La clave publica y la direccion especificada no combinan.',
			1002: 'La direccion no pertenece a la red principal.'
		},
		common: {
			success: 'Exito',
			unknown: 'Estado desconocido',
			unknownMessage: 'Ncc did not get response in a timely manner. Transaction might have been sent to the network.<br /><br />Please, check transactions before attempting to make it again.',
			appStatus: {
				nccUnknown: 'El estado de NCC es desconocido',
				nccUnavailable: 'NCC no está disponible',
				nccStarting: 'NCC está iniciando...',
				nisUnknown: 'El estado de NIS es desconocido',
				nisUnavailable: 'NIS no está disponible',
				nisStarting: 'NIS esta iniciando...',
				notBooted: 'NIS requiere ser iniciado. Por favor, abra su monedero e inicie un nodo local manualmente o active la opción de Auto-iniciación.',
				loading: 'Loading blocks from db, at block: ',
				booting: 'Iniciando NIS...',
				nisInfoNotAvailable: 'Informacion de NIS no esta disponible. Intentando recuperar información de NIS...',
				synchronizing: 'NIS está sincronizando. En el bloque {{1}}: aproximadamente {{2}} día(s) atras.',
				daysBehind: {
					0: 'menos de 1 dia',
					1: '1 dia',
					many: '{{1}} dias'
				},
				synchronized: 'NIS está sincronizado!',
				noRemoteNisAvailable: 'No remote NIS found in the network, disconnected from internet?'
			},
			addressBook: 'Address book',
			password: 'Contraseña',
			passwordValidation: 'La contraseña no debe ser vacía',
			address: 'Dirección',
			privateLabel: 'Etiqueta privada',
			publicLabel: 'Public label',
			noCharge: 'Current account will <b>NOT</b> be charged any fees, multisig account covers them',
			fee: 'Tarifa',
			justUse: 'Just use',
			dueBy: 'Debido por',
			hours: 'hora(s)',
			hoursDue: 'Debido por',
			hoursDueExplanation: 'If the transaction isn\'t included by the deadline, it is rejected.',
			closeButton: 'Close'
		},
		transactionTypes: [
			'TRANSFER TRANSACTION',
			'IMPORTANCE TRANSFER',
			'MODIFICATION OF MULTISIG ACCOUNT',
			'MULTISIG TRANSACTION'
		],
		transactionDirections: {
			pending: 'Transacción pendiente',
			outgoing: 'Transacción saliente',
			incoming: 'Transacción entrante',
			self: 'Transacción a si mismo',
			importance: 'Importance transaction',
			modification: 'Aggregate Modification of Multisig'
		},
		modals: {
			error: {
				title: 'Oops!',
				caption: 'ERROR {{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Si',
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
				title: 'Configuración',
				language: {
					label: 'Idioma'
				},
				remoteServer: {
					tabTitle: 'Servidor Remoto',
					protocol: 'Protocolo',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Dirección de Host',
					port: 'Puerto',
					defaultPort: 'Use default port.'
				},
				autoBoot: {
					tabTitle: 'Auto-iniciación',
					name: 'Nombre de nodo',
					account: 'Cuenta',
					primaryAccount: 'Cuenta Primaria',
					auto: 'Iniciación automatica al abrir una cartera'
				},
				save: 'Guardar',
				saveSuccess: 'La configuración ha sido actualizada con exito'
			},
			multisig: {
				title: 'Convert account to multisig',
				multisigAccount: 'Multisig account',
				cosignatories: 'Cosignatories\' addresses',
				labelDesc: 'Esta cuenta está etiquetada como {{1}}',
				nullLabelDesc: 'Esta cuenta no está etiquetada.',
				addCosignatory: '+ Add Cosignatory',
				cancel: 'Cancelar',
				convert: 'Convert',
				fee: 'Tarifa',
				feeValidation: 'Tarifa no debe ser inferior a la tarifa mínima',
				useMinimumFee: 'Usar tarifa mínima',
				txConfirm: {
					title: 'Confirm Conversion to Multisig Account',
					total: 'Total',

				},
				warning: 'Multisig account is on the list of cosignatories. This will result in locking down the account cutting off access to the fund. Most likely you <b>DO NOT</b> want to do that.'
			},
			signMultisig: {
				title: 'Sign multisig transaction',
				original: {
					from: 'Multisig account',
					to: 'Cuenta de destinatario',
					amount: 'Cantidad',
					fee: 'Inner Fee',
					deadline: 'Deadline'
				},
				multisigFees: 'Multisig Fees',
				multisigTotal: 'Total',
				sender: 'Cosignatory',
				fee: 'Tarifa',
				feeValidation: 'Tarifa no debe ser inferior a la tarifa mínima',
				useMinimumFee: 'Usar tarifa mínima',
				password: 'Contraseña',
				passwordValidation: 'La contraseña no debe ser vacía',
				send: 'Enviar',
				cancel: 'Cancelar',
				sending: 'Enviando...',
				successMessage: '¡La transacción ha sido enviada exitosamente!',
				txConfirm: {
					title: 'Confirm Multisig Transaction',
					message: 'Mensaje',
					encrypted: 'Mensaje esta encriptado',
					noMessage: 'Sin mensaje',

				}
			},
			sendNem: {
				title: 'Enviar XEM',
				sender: 'Emisor',
				thisAccount: 'This account',
				labelDesc: 'Esta cuenta está etiquetada como {{1}}',
				nullLabelDesc: 'Esta cuenta no está etiquetada.',
				amount: 'Cantidad',
				recipient: 'Cuenta de destinatario',
				recipientValidation: 'Direcciones de cuentas son de 40 caracteres de largo, excluyendo guiones.',
				message: 'Mensaje',
				encrypt: 'Encriptar mensaje',
				fee: 'Tarifa',
				multisigFee: 'Multisig fee',
				feeValidation: 'Tarifa no debe ser inferior a la tarifa mínima',
				useMinimumFee: 'Usar tarifa mínima',
				password: 'Contraseña',
				passwordValidation: 'La contraseña no debe ser vacía',
				send: 'Enviar',
				cancel: 'Cancelar',
				sending: 'Enviando...',
				successMessage: '¡La transacción ha sido enviada exitosamente!',
				txConfirm: {
					title: 'Confirmar Transacción',
					amount: 'Cantidad',
					to: 'Para',
					total: 'Total',
					message: 'Mensaje',
					encrypted: 'Mensaje está encriptado',
					noMessage: 'Sin mensaje',
					cancel: 'Cancelar',
					confirm: 'Confirmar',
					sending: 'Enviando...'
				},
				notBootedWarning: {
					title: 'Nodo no ha sido iniciado!',
					message: 'Un nodo local necesita ser iniciado para poder realizar transacciones!'
				},
				bootingWarning: {
					title: 'Nodo esta iniciando',
					message: 'Por favor, espere a que el proceso de iniciacion finalize para enviar su transaccion.'
				},
				loadingWarning: {
					title: 'Loading db'
				}
			},
			clientInfo: {
				title: 'Información de cliente',
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
				direction: 'Transaction Direction',
				pending: 'Pendiente',
				outgoing: 'Saliente',
				incoming: 'Entrante',
				self: 'Self',
				sender: 'Emisor',
				multisigAccount: 'Multisig Account',
				issuer: 'Issuer',
				recipient: 'Cuenta de destinatario',
				remote: 'Remote',
				multisigMessage: 'Signatures present',
				message: 'Mensaje',
				noMessage: 'Sin mensaje',
				encrypted: 'Mensaje está encriptado.',
				time: 'Marca de tiempo',
				confirmations: 'Confirmaciones',
				confirmationsUnknown: 'Desconocido',
				amount: 'Cantidad',
				fee: 'Tarifa',
				innerFee: 'Inner Fee',
				multisigFees: 'Multisig Fees',
				cosignatory: 'Cosignatory'
			},
			accountDetails: {
				title: 'Account details',
				address: 'Address',
				label: 'Label',
				noLabel: 'No label',
				add: 'Add to address book',
				remove: 'Remove from address book',
				balance: 'Balance',
				vested: 'vested',
				importance: 'Importance',
				publicKey: 'Public key',
				noPublicKey: 'No public key',
				harvestedBlocks: 'Harvested blocks',
				close: 'Close'
			},
			bootLocalNode: {
				title: 'Iniciar nodo local',
				account: 'Cuenta para iniciar nodo local',
				noLabel: '<span class="null">&lt;Sin etiqueta&gt;</span>',
				wallet: 'Monedero',
				node: 'Nombre de nodo',
				boot: 'Iniciar',
				booting: 'Iniciando...',
				warning: 'Boot node warning',
				warningText: 'You\'re trying to boot a node <u>{{2}}</u><br/><br/>Booting remote node is currently impossible from within NCC.',
				warningStatement: 'You have auto-boot set to true and you\'re using remote node {{3}}.<br/><br/>Booting remote node is currently impossible from within NCC',
				warningQuestion: 'Are you sure you want to boot node <u>{{3}}</u> using private key of account {{1}} ({{2}} XEM)?<br><br>This will reveal this account\'s <span class="sublabelWarning">private key</span> to node: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Cerrar monedero',
				message: 'Está seguro que desea cerrar el monedero y volver a la pagina de inicio?'
			},
			createAccount: {
				title: 'Crear cuenta nueva',
				label: 'Etiqueta privada',
				wallet: 'Monedero',
				password: 'Contraseña de monedero',
				successMessage: 'Cuenta {{1}} {{#2}}({{2}}){{/2}} ha sido creada!',
				create: 'Crear'
			},
			showPrivateKey: {
				title: 'Show Account\'s PRIVATE Key',
				message: 'This will display account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',
				publicKey: 'Clave publica',
				privateKey: 'Clave privada',
				show: 'Show the key'
			},
			showRemotePrivateKey: {
				title: 'Show Remote Account\'s PRIVATE Key',
				message: 'This will display remote account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',

			},
			addAccount: {
				title: 'Añadir cuenta existente',
				privateKey: 'Clave privada de la cuenta',
				wallet: 'Monedero',
				password: 'Contraseña de monedero',
				successMessage: 'Cuenta {{1}} {{#2}}({{2}}){{/2}} ha sido añadida al monedero!',
				add: 'Añadir',
				label: 'Etiqueta'
			},
			setPrimary: {
				title: 'Definir cuenta primaria',
				account: 'Cuenta a ser definida como primaria',
				noLabel: '<span class="null">&lt;Sin etiqueta&gt;</span>',
				wallet: 'Monedero',
				password: 'Contraseña de monedero',
				successMessage: 'Cuenta {{1}} {{#2}}({{2}}){{/2}} ha sido definida como cuenta primaria!',
				set: 'Definir como primaria'
			},
			changeWalletName: {
				title: 'Cambiar nombre de monedero',
				wallet: 'Nombre actual de monedero',
				newName: 'Nuevo nombre de monedero',
				password: 'Contraseña de monedero',
				successMessage: 'El nombre de monedero ha sido cambiado con exito de <em>{{1}}</em> a <em>{{2}}</em>',
				change: 'Cambiar'
			},
			changeWalletPassword: {
				title: 'Cambiar contraseña de monedero',
				wallet: 'Monedero',
				password: 'Contraseña actual',
				newPassword: 'Nueva contraseña',
				confirmPassword: 'Confirmar nueva contraseña',
				successMessage: 'La contraseña de monedero ha sido actualizada con exito.',
				change: 'Cambiar',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: 'La nueva contraseña especificada no coincide con la contraseña de confirmación. Por favor, asegurese de especificar la nueva contraseña correctamente.'
			},
			changeAccountLabel: {
				title: 'Cambiar etiqueta de cuenta',
				label: 'Etiqueta de cuenta',
				wallet: 'Monedero',
				password: 'Contraseña de monedero',
				successMessage: 'Cuenta {{1}} ahora esta etiquetada como {{2}}',
				change: 'Cambiar'
			},
			removeAccount: {
				title: 'Remover cuenta',
				account: 'Cuenta',
				label: 'Etiqueta de cuenta',
				wallet: 'Monedero',
				password: 'Contraseña de monedero',
				warning: 'Por favor, asegúrese que la cuenta que desea remover no contiene XEMs, ya que estos se perderian para siempre al removerla.',
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
				title: 'Activate Delegated Harvesting',
				wallet: 'Monedero',
				account: 'Cuenta',
				password: 'Contraseña de monedero',
				activate: 'Activar',
				warning: 'Warning',
				warningText: 'Activation will take 6 hours (360 blocks). Activation will NOT start harvesting automatically.'
			},
			deactivateRemote: {
				title: 'Deactivate Delegated Harvesting',
				wallet: 'Monedero',
				account: 'Cuenta',
				password: 'Contraseña de monedero',
				deactivate: 'Desactivar',
				warning: 'Warning',
				warningText: 'Deactivation will take 6 hours (360 blocks).'
			},
			startRemote: {
				title: 'Start Delegated Harvesting',
				wallet: 'Monedero',
				account: 'Cuenta',
				password: 'Contraseña de monedero',
				start: 'Comenzar'
			},
			stopRemote: {
				title: 'Stop Delegated Harvesting',
				wallet: 'Monedero',
				account: 'Cuenta',
				password: 'Contraseña de monedero',
				stop: 'Detener'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer. To prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away."
			},
			addContact: {
				title: 'Add contact',
				add: 'Añadir'
			},
			editContact: {
				title: 'Edit contact',
				saveChanges: 'Guardar cambios'
			},
			removeContact: {
				title: 'Remove contact',
				remove: 'Remover'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'El monedero ha sido importado exitosamente!',
			nav: {
				start: 'Comienze aquí',
				about: 'Acerca de NEM',
				settings: 'Configuracion'
			},
			main: {
				leftTitle: 'Nuevo en <em>NEM</em>?',
				leftButton: 'Crear nuevo monedero',
				walletNamePlh: 'Nombre de su monedero',
				passwordPlh: 'Contraseña',
				confirmPasswordPlh: 'Confirm password',
				create: 'Crear',
				creating: 'Creating...',
				rightTitle: 'Ya es miembro de <em>NEM</em>?',
				rightButton: 'Abrir su monedero',
				openButton: 'Abrir',
				walletsFound: 'Se encontro <strong>{{1}}</strong> <em>monedero(s)</em>',
				copyright: 'Fotografía por <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC encripta su monedero',
						description: 'La <em>seguridad</em> es bien importante para evitar robo de monedas XEM y/o activos.'
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
						title: 'Como funciona NCC?',
						paragraphs: [
							'<strong>NCC</strong> te provee acceso a tus activos y XEMs como cualquier monedero tradicional. Usted puede',
							'<strong>NCC</strong> requiere acceso a un servidor <strong>NIS</strong> para poder operar. La convención es tener un servidor NIS local activo (instalado junto a <strong>NCC</strong>)',
							'Usted también puede configurar acceso a un servidor <strong>NIS</strong> remoto'
						],
						listItems: [
							'Have multiple wallets',
							'Define multiple accounts to be included in a wallet'
						]
					},
					{
						title: 'Qué es &#42;NIS?',
						paragraphs: [
							'Este componente es responsable de mantener la nube <strong>NEM</strong> con vida',
							'The more <strong>NIS</strong> there are in the network, the better the security.,',
							'<strong>NIS</strong> es el punto de acceso a la nube <strong>NEM</strong>'
						],
						legend: '<strong>&#42;NIS</strong> significa <strong>Servidor de Infraestructura NEM</strong>'
					}
				]
			},
			footer: {
				copyright: '&copy; Copyright 2015. Cliente de Comunidad NEM.'
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
				changeWalletPassword: 'Cambiar contraseña de monedero',
				mergeWallets: 'Fusionar monederos',
				exportWallet: 'Exportar monedero',
				createAccount: 'Crear cuenta nueva',
				createRealAccountData: 'Crear datos de cuenta real',
				verifyRealAccountData: 'Verificar datos de cuenta real',
				showPrivateKey: 'Show Account\'s PRIVATE key',
				showRemotePrivateKey: 'Show Remote Account\'s PRIVATE key',
				viewDetails: 'View Account Details',
				addAccount: 'Añadir cuenta existente',
				changeAccountLabel: 'Cambiar etiqueta de cuenta',
				setPrimary: 'Definir como cuenta primaria',
				removeAccount: 'Remover cuenta',
				clientInfo: 'Informacion de cliente',
				closeWallet: 'Cerrar monedero',
				closeProgram: 'Cerrar programa',
				copyClipboard: 'Copiar dirección al portapapeles',
				copyDisabled: 'Copying an address requires flash',
				convertMultisig: 'Convert other account to multisig'
			},
			nav: [
				'Panel de información',
				'Mensajes',
				'Address Book',
				'Transacciones',
				'Bloques recolectados',
				'Intercambio de activos',
				'Noticias',
				'Aplicaciones',
				'Cuentas',
				'Configuración',
				'Cerrar programa'
			],
			bootNodeWarning: 'Se necesita iniciar un nodo local antes de poder utilizar todas las características de NCC.'
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
					activate: 'Activate delegated harvesting',
					activating: 'Activating delegated harvesting...',
					active: 'Delegated harvesting is active',
					deactivate: 'Deactivate delegated harvesting',
					deactivating: 'Deactivating delegated harvesting...',
					startRemoteHarvesting: 'Start delegated harvesting',
					remotelyHarvesting: 'Remotely harvesting',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			},
			transactions: {
				title: 'Transacciones recientes',
				sendNem: 'Enviar XEM',
				signMultisig: 'SIGN',
				balance: 'Saldo actual',
				loading: 'Loading balance',
				accountCosignatories: 'Multisig account',
				accountCosignatoriesView: 'view cosignatories',
				vestedBalance: 'Vested Balance',
				syncStatus: '(En el bloque {{1}}{{#2}}: aproximadamente {{3}} dia(s) atras{{/2}})',
				notSynced: 'might be inaccurate, NIS not synchronized yet',
				unknown: 'desconocido',
				columns: [
					'',
					'Tiempo',
					'Emisor/Destinatario',
					'Mensaje',
					'',
					'Detalles',
					'Confirmaciones',
					'Tarifa',
					'Cantidad'
				],
				noMessage: 'Sin mensaje',
				encrypted: 'Mensaje esta encriptado',
				view: 'Ver',
				confirmationsUnknown: 'Desconocido',
				pending: 'Pendiente',
				seeAll: 'Ver todas las transacciones',
				noTransactions: 'Aun no se ha ejecutado ninguna transacción'
			},
			nemValue: {
				title: 'Valores de estadísticas de XEM'
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
			sendNem: 'Enviar XEM',
			balance: 'Balance actual',
			filters: {
				confirmed: 'Confirmadas',
				unconfirmed: 'Sin confirmar',
				incoming: 'Entrantes',
				outgoing: 'Salientes'
			},
			table: {
				columns: [
					'',
					'Tiempo',
					'Emisor/Destinatario',
					'Mensaje',
					'',
					'Detalles',
					'Confirmaciones',
					'Tarifa',
					'Cantidad'
				],
				noMessage: 'Sin mensaje',
				encrypted: 'Mensaje esta encriptado',
				view: 'Ver',
				confirmationsUnknown: 'Desconocido',
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
					'Altura',
					'Tiempo',
					'Block difficulty',
					'Tarifa'
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
					'Account address',
					'Private Label',
					'Public Label'
				],
				noContacts: 'There is no contacts in your address book'
			},
			noLabel: 'No label',
			sendNem: 'Enviar XEM',
			edit: 'Edit',
			remove: 'Remover'
		},
		settings: {
			title: 'Configuración',
			settings: [
				{
					name: 'Idioma'
				}
			],
			save: 'Guardar cambios',
			saveSuccess: 'La configuración ha sido actualizada con exito'
		}
	}
});
