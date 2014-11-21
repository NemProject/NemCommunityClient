define({
	id: "pt",
	name: "Português",
	texts: {
		preferences: {
			thousandSeparator: "\u2009",
			decimalSeparator: "."
		},
		faults: {
			101: "Arquivo não encontrado.",
			102: "A carteira não foi criada.",
			103: "O arquivo da carteira está corrompido. Por favor, restaure o backup ou crie outra conta.",
			104: "Senha incorreta. Por favor, insira a senha correta. Não há como recuperá-la se perdida!",
			106: "Antes de começar a usar a carteira NEM, é preciso logar-se. Por favor, forneça a senha de uma carteira ou crie outra.",
			107: "A carteira não contém essa conta.",
			108: "A conta não pode ser removida. Provavelmente ela tem saldo maior que 0 NEMs ou é a conta primária.",
			109: "Já existe uma conta com o mesmo nome. Por favor, escolha outro.",
			110: "A carteira já contém essa conta.",
			202: "Não é possível enviar mensagem, porque o destinatário ainda não possui chave pública.",
			305: "NIS inicializando.",
			306: "Ocorreu um erro desconhecido. Pedimos desculpas por esse problema. Talvez uma nova nova tentativa dê certo; caso contrário, informe aos desenvolvedores da NEM no fórum oficial forum.nemcoin.com.",
			400: "Está faltando algum parâmetro ou os dados são inválidos (letras no lugar de números, por exemplo).",
			401: 'Esta operação não pode ser completada pois ela pode expor a chave privada enviando-a para um NIS remoto.',
			404: "O arquivo solicitado não pode ser encontrado..",
			500: "ocorreu um erro desconhecido. Por favor, reinicie o programa, caso não resolva, contate os desenvolvedores através do fórum forum.nemcoin.com.",
			600: "NCC requer que o NIS seja inicializado. Por favor, vá em cliente NCC para inicializar o nó local via menu.",
			601: "O NIS já foi inicializado.",
			700: "Falha na colheita. Geralmente esse problema está relacionado com o tanto de NEMs na conta. Para colheitar são necessários,  pelo menos, 1000 NEMs.",
			701: "O prazo final fornecido está no passado. O prazo limite deve estar dentro do período de um dia.",
			702: "O prazo final fornecido está no futuro. O prazo limite deve estar dentro do período de um dia.",
			703: "Saldo insuficiente para realizar a transação.",
			704: "Texto muito longo. Por favor, tente reduzir o tamanho da mensagem.",
			705: "O Hash de transação já existe no banco de dados, na lista de transações não confirmadas.",
			706: "A assinatura da transação não pôde ser verificada.",
			707: "A data da ID de transação está muito no passado.",
			708: "A data da ID de transação está muito no futuro.",
			709: "Conta desconhecida, Por favor, faça uma transação para conseguir uma chave pública.",
			901: "Erro na configuração do modo off-line.",
			1000: "A chave privada e a chave pública que você forneceu não combinam. Você digitou certo?.",
			1001: 'A chave publica e o endereço que você forneceu não combinam.',
			1002: 'O endereço não pertence a rede principal de peers.'
		},
		common: {
			success: "Successo",
			appStatus: {
				nccUnknown: "Estado do NCC desconhecido",
				nccUnavailable: "NCC não inicializado",
				nccStarting: "NCC está inicializando...",
				nisUnknown: "Estado do NIS desconhecido",
				nisUnavailable: "NIS não inicializado",
				nisStarting: "NIS está inicializando...",
				notBooted: "NIS requere inicialização. Por favor, abra a carteira para ativar o auto-boot ou inicialize o nó manualmente.",
				booting: "NIS inicializando...",
				nisInfoNotAvailable: "Informações de NIS não disponível. Recuperando informações...",
				synchronizing: "NIS está sincronizando com o bloco {{1}}, encontrado {{2}} atrás.",
				daysBehind: {
					0: "Menos de um dia",
					1: "1 dia",
					many: "{{1}} dias"
				},
				synchronized: "NIS está sincronizado!!"
			}
		},
		modals: {
			error: {
				title: "Oopa!",
				caption: "ERRO {{1}}"
			},
			confirmDefault: {
				yes: "Sim",
				no: "Não"
			},
			settings: {
				title: "Configurações",
				language: {
					label: "Idioma"
				},
				remoteServer: {
					tabTitle: "Servidor remoto",
					protocol: "Protocolo",
					protocolOptions: {
						http: "HTTP"
					},
					host: "Endereço Host",
					port: "Porta"
				},
				autoBoot: {
					tabTitle: "Inicialização automática",
					name: "Nome do nó",
					account: "Carteira",
					primaryAccount: "Conta primária",
					auto: "Inicialização automática quando abrir a carteira"
				},
				save: "Salvar",
				saveSuccess: "As configurações foram salvas!"
			},
			sendNem: {
				title: "Enviar NEM",
				labelDesc: "Esta conta está identificada como {{1}}",
				nullLabelDesc: "Esta conta não tem uma identificação",
				amount: "Total",
				recipient: "Destinatário",
				recipientValidation: 'endereços de contas devem ter pelo menos 40 caracteres, excluindo os sinais de menos.',
				message: "Mensagem",
				encrypt: "Criptografar mensagem",
				fee: "Taxa",
				feeValidation: 'A taxa de transação não deve ser inferior a taxa mínima',
				dueBy: "Devido por",
				useMinimumFee: 'Usar taxa minima',
				hours: "horas",
				password: "Senha",
				send: "Enviar",
				cancel: 'Cancelar',
				sending: "Enviando...",
				successMessage: "A transação foi enviada!",
				txConfirm: {
					title: 'Confirmar Transação',
					amount: 'Quantidade',
					to: 'Para',
					fee: 'Taxa',
					dueBy: 'Devido por',
					hours: 'hora(s)',
					total: 'Total',
					message: 'Mensagem',
					encrypted: 'Mensagem está criptografada',
					noMessage: 'Sem mensagem',
					cancel: 'Cancelar',
					confirm: 'Confirmar',
					sending: 'Enviando...'
				},
				notBootedWarning: {
					title: "O nó não foi inicializado!",
					message: "O nó local precisa ser inicializado para fazer transações!"
				},
				bootingWarning: {
					title: 'O Nó está sendo inicializado',
					message: 'Por favor, espere até o nó inicializar completamente para poder enviar sua transação.'
				}
			},
			clientInfo: {
				title: "Informações do programa",
				ncc: "NEM Community Client - NCC",
				signer: "Signatário",
				remoteServer: "Servidor Remoto",
				local: "Local",
				nis: "NEM Infrastructure Server - NIS",
				sync: "Sincronizado",
				notSync: "Não sincronizado",
				notConnected: "Desconectado da nuvem de peers",
				loading: "Carregando..."
			},
			transactionDetails: {
				title: "Detalhes da transação",
				id: "ID",
				hash: "Hash",
				type: "Tipo de transação",
				pending: "Pendente",
				outgoing: "Enviado",
				incoming: "Recebido",
				self: "Enviado para si mesmo",
				sender: "Remetente",
				recipient: "Destinatário",
				message: "Mensagem",
				noMessage: "Sem mensagem",
				encrypted: "Mensagem Criptografada",
				time: "Data e hora",
				confirmations: "Confirmações",
				confirmationsUnknown: 'Desconhecida(o)',
				amount: "Quantidade",
				fee: "Taxa"
			},
			bootLocalNode: {
				title: "Inicializar nó local",
				account: "Conta do nó local",
				noLabel: "<span class=\"null\">&lt;Sem identificação&gt;</span>",
				wallet: "Nome da Carteira",
				node: "Nome para o nó",
				boot: "Inicializar",
				booting: "Inicializando..."
			},
			closeWallet: {
				title: "Fechar carteira",
				message: "Confirmar o fechamento da carteira e o retorno a página inicial?"
			},
			createAccount: {
				title: "Criar nova conta",
				label: "Identificação",
				wallet: "Carteira",
				password: "Senha",
				successMessage: "A conta {{1}} {{#2}}({{2}}){{/2}} foi criada! Por favor, realize um backup e guarde-o em local seguro.",
				create: "Criar"
			},
			createRealAccountData: {
				title: "Criar dados para sua conta real.",
				message: "Os dados abaixo são para sua conta NEM após o lançamento. Salve o endereço, a chave pública e a chave privada em um lugar SEGURO. Se você perder a sua chave privada, a sua carteira e todas as suas moedas estarão perdidas para SEMPRE!",
				address: "Endereço",
				publicKey: "Chave pública",
				privateKey: "chave privada",
				confirm: {
					title: "Salvar a chave privada",
					message: "Você tem certeza que a sua chave privada foi salva em um local seguro?"
				},
				recheck: {
					title: "Re-checar sua chave privada",
					message: "Por favor, entre novamente com a sua chave privada que acabou de ser fornecida para checarmos se o arquivo foi salvo corretamente. Em caso negativo, por favor, crie uma nova.",
					correct: {
						title: "Beleza!",
						message: "Aparentemente você salvou a chave privada corretamente. Por favor, lembre-se de mantê-la em um local seguro e, se possível, com backups!"
					},
					incorrect: {
						title: "Iche...",
						message: "A chave privada que você forneceu não está correta! Por favor, cheque-a de novo e entre com os dados mais uma vez.",
						tryAgain: 'Tente inserí-la novamente',
						seeOriginal: 'Veja os dados originais'
					},
					recheck: "Checar"
				},
				ok: "OK"
			},
			verifyRealAccountData: {
				title: 'Verificar conta Verdadeira - Versão final',
				message: 'Entre novamente, logo abaixo, com seu endereço, chave pública, chave privada para verificar se está tudo certo.',
				address: 'Endereço',
				publicKey: 'Chave Pública',
				privateKey: 'Chave Privada',
				dataMatched: 'Tudo parece certo! A chave pública, chave privada e endereço que você entrou combinam!',
				verify: 'Verificar'
			},
			addAccount: {
				title: "Adicionar uma Carteira existente",
				privateKey: "Chave privada",
				wallet: "Carteira",
				password: "Senha da carteira",
				successMessage: "A conta {{1}} {{#2}}({{2}}){{/2}} foi criada! Por favor, realize um backup e guarde-o em local seguro!",
				add: "Criar",
				label: "Identificação"
			},
			setPrimary: {
				title: "Definir como conta primária",
				account: "Conta que será definida como primária",
				noLabel: "<span class=\"null\">&lt;Sem identificação&gt;</span>",
				wallet: "Carteira",
				password: "Senha da carteira",
				successMessage: "Conta {{1}} {{#2}}({{2}}){{/2}} foi definida como primária!",
				set: "Definir como conta primária"
			},
			changeWalletName: {
				title: "Trocar o nome da carteira",
				wallet: "Nome atual",
				newName: "Novo nome",
				password: "Senha da carteira",
				successMessage: "O nome <em>{{1}}</em> foi alterado para <em>{{2}}</em>",
				change: "Mudar"
			},
			changeWalletPassword: {
				title: "Trocar a senha da carteira",
				wallet: "Carteira",
				password: "Senha atual",
				newPassword: "Nova senha",
				confirmPassword: "Confirmar nova senha",
				successMessage: "A senha da carteira foi trocada",
				change: "Trocar",
				passwordNotMatchTitle: "Oopa!",
				passwordNotMatchMessage: "As senhas não conferem. Por favor, tente novamente."
			},
			changeAccountLabel: {
				title: "Trocar identificação da conta",
				label: "Nova identificação",
				wallet: "Carteira",
				password: "Senha",
				successMessage: "A Identificação {{1}} foi alterada para {{2}}",
				change: "Trocar"
			},
			removeAccount: {
				title: "Remover conta",
				wallet: "Carteira",
				password: "Senha",
				warning: "Por favor, tenha certeza que não há saldo em sua conta, ou as moedas serão perdidas para sempre.",
				successMessage: "A conta {{1}} {{#2}}({{2}}){{/2}} foi removida!",
				remove: "Remover"
			},
			nisUnavailable: {
				title: "NIS não está disponível",
				message: "NIS não está respondendo, aguardando conexão"
			},
			shutdown: {
				title: "Fechar programa",
				message: "Tem certeza que quer fechar o programa (NEM)?"
			},
			activateRemote: {
				title: "Ativar colheita remota",
				wallet: "Carteira",
				account: "Conta",
				hoursDue: "Devido por",
				password: "Senha da carteira",
				activate: "Ativar"
			},
			deactivateRemote: {
				title: "Desativar colheita remota",
				wallet: "Carteira",
				account: "Conta",
				hoursDue: "Devido por",
				password: "Senha da carteira",
				deactivate: "Desativar"
			},
			startRemote: {
				title: "Iniciar colheita remota",
				wallet: "Carteira",
				account: "Conta",
				password: "Senha da carteira",
				start: "Começar"
			},
			stopRemote: {
				title: "Parar colheita remota",
				wallet: "Carteira",
				account: "Conta",
				password: "Senha da carteira",
				stop: "Parar"
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer.\n\nTo prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away.",
			}
		},
		landing: {
			logo: "images/nem_logo.png",
			importSuccess: "A carteira foi importada!",
			nav: {
				start: "Início",
				about: "Sobre NEM",
				settings: "Configurações"
			},
			main: {
				leftTitle: "Primeira vez?<br>Crie uma carteira <em>NEM</em>!",
				leftButton: "Criar nova carteira",
				walletNamePlh: "Nome para a carteira",
				passwordPlh: "Senha",
				create: "Criar",
				rightTitle: "Já possui uma carteira?",
				rightButton: "Abrir carteira existente",
				openButton: "Abrir",
				walletsFound: "Encontrada(s) <strong>{{1}}</strong> <em>carteira(s)</em>",
				copyright: "Fotografado por <em>Cas Cornelissen</em>"
			},
			carousel: {
				items: [{
					title: "Como o NCC funciona?",
					description: "<em>Segurança</em> baseada em forte criptografia para evitar roubo de moedas &amp; ativos."
				}, {
					title: "NCC encripta sua carteira",
					description: "<em>Segurança</em> baseada em forte criptografia para evitar roubo de moedas &amp; ativos."
				}]
			},
			about: {
				sections: [{
					title: "Como o NCC funciona?",
					paragraphs: [
						"<strong>NCC</strong> providencia acesso aos seus ativos e moedas como uma carteira de moeda digital tradicional faz. Você pode",
						"<strong>NCC</strong> requerer acesso a um servidor <strong>NIS</strong> para operar. O padrão é ter um servidor local ativo (está instalado junto com o <strong>NCC</strong>)",
						"Você também pode configurar acesso a um servidor remoto <strong>NIS</strong>."
					],
					listItems: [
						"Tenha múltiplas carteiras",
						"Defina múltiplas carteiras para serem incluídas em uma carteira"
					]
				}, {
					title: "O que é &#42;NIS?",
					paragraphs: [
						"Este componente é responsável por manter a nuvem <strong>NEM</strong> viva.",
						"Quanto mais <strong>NIS</strong> melhor será a segurança.",
						"<strong>NIS</strong> é o ponto de acesso a nuvem <strong>NEM</strong> de servidores."
					],
					legend: "<strong>&#42;NIS</strong> significa <strong>NEM Infraestrutura de Servidores</strong>"
				}]
			},
			footer: {
				copyright: "&copy; Copyright 2014. NEM Community Client."
			}
		},
		wallet: {
			logo: "images/nem_logo.png",
			lastAccess: "Aproximadamente {{1}} dia(s) atrás",
			lastAccessJustNow: "Agora a pouco",
			lastAccessTooltip: "Ultimo acesso em {{1}}",
			primary: "primário",
			primaryShort: "1º",
			noLabel: "<Sem identificação>",
			copiedToClipboard: "Endereço copiado para a área de transfêrencia!",
			actions: {
				refreshInfo: "Atualizar informações",
				bootLocalNode: "Inicializar nó local",
				changeWalletName: "Trocar o nome da carteira",
				changeWalletPassword: "Trocar a senha da carteira",
				mergeWallets: "Mesclar carteiras",
				exportWallet: "Exportar carteira",
				createAccount: "Criar uma nova Conta",
				createRealAccountData: "Criar dados da conta real",
				verifyRealAccountData: 'Verificar dados da conta Verdadeira',
				addAccount: "Adicionar uma conta existente",
				changeAccountLabel: "Trocar a identificação da carteira",
				setPrimary: "Definir como conta primária",
				removeAccount: "Remover Conta",
				clientInfo: "Informações do cliente",
				closeWallet: "Fechar carteira",
				closeProgram: "Fechar programa",
				copyClipboard: "Copiar para a área de transferência"
			},
			nav: [
				"Painel Administrativo",
				"Mensagens",
				"Contatos",
				"Transações",
				"Blocos colhidos",
				"Exchange de ativos",
				"Novidades",
				"Aplicações",
				"Contas",
				"Configurações",
				"Fechar programa"
			],
			bootNodeWarning: "Um nó local precisa ser inicializado para poder utilizar o NIS."
		},
		dashboard: {
			assets: {
				title: "Seus ativos"
			},
			importance: {
				title: "Pontuação de importância",
				unknown: "Status desconhecido",
				start: "Começar colheita local",
				harvesting: "colheitando",
				stop: "Parar colheita local",
				description: "Importância para a nuvem de peers",
				remoteHarvest: {
					activate: "Ativar colheita remota",
					activating: "Ativando...",
					active: "A colheita remota está ativa!",
					deactivate: "Desativar colheita remota",
					deactivating: "Desativando colheita remota...",
					startRemoteHarvesting: "Inicializar colheita remota",
					remotelyHarvesting: "Colheitando remotamente!",
					stopRemoteHarvesting: "Parar a colheita remota"
				}
			},
			transactions: {
				title: "Transações recentes",
				sendNem: "Enviar NEM",
				balance: "Saldo atual",
				syncStatus: "(no bloco {{1}}{{#2}} : encontrado a {{3}} dias atrás{{/2}})",
				unknown: "Desconhecido",
				columns: [
					"",
					"Data",
					"Destinatário",
					"Mensagem",
					"",
					"Detalhes",
					"Confirmações",
					"Taxa",
					"Quantidade"
				],
				types: {
					pending: "Pendente",
					outgoing: "Enviada",
					incoming: "Recebida",
					self: "Enviada para si mesmo"
				},
				noMessage: "Sem mensagem",
				encrypted: "Mensagem criptografada",
				view: "Ver",
				confirmationsUnknown: 'Desconhecido(a)',
				pending: "Pendente",
				seeAll: "Ver todas as transações",
				noTransactions: "Nenhuma transação realizada ainda."
			},
			nemValue: {
				title: "Estatísticas desta carteira"
			},
			messages: {
				titleTooltip: "Mensagens"
			},
			news: {
				titleTooltip: "Novidades"
			},
			notAvailable: "Não disponível na versão Alfa"
		},
		transactions: {
			title: "Transações",
			sendNem: "Enviar NEM",
			balance: "Saldo",
			filters: {
				confirmed: "Confirmadas",
				unconfirmed: "Não confirmadas",
				incoming: "Recebidas",
				outgoing: "Enviadas"
			},
			table: {
				columns: [
					"",
					"Tempo",
					"Remetente/Destinatário",
					"Mensagem",
					"",
					"Detalhes",
					"Confirmações",
					"Taxa",
					"Quantidade"
				],
				types: {
					pending: "Pendente",
					outgoing: "Enviada",
					incoming: "Recebida",
					self: "Enviada para si mesmo"
				},
				noMessage: "Sem mensagem",
				encrypted: "Mensagem criptografada",
				view: "Ver",
				confirmationsUnknown: 'Desconhecido(a)',
				pending: "Pendente",
				noTransactions: "Nenhuma transação realizada, por enquanto",
				loading: "Carregando mais transações..."
			}
		},
		harvestedBlocks: {
			title: "Blocos colhidos",
			feeEarned: "Taxas ganhas com a colheita dos últimos 25 blocos",
			unknown: 'Unknown',
			table: {
				columns: [
					"Altura do bloco",
					"Hora",
					"Hash do bloco",
					"Taxa"
				],
				noBlocks: "Não há blocos colhidos",
				loading: "Ver blocos colhidos anteriormente"
			},
			harvesting: {
				unknown: "Status desconhecido",
				start: "Iniciar a colheita",
				harvesting: "Colheitando",
				stop: "Parar de colheitar",
				remoteHarvest: {
					startRemoteHarvesting: 'Iniciar colheita remota',
					stopRemoteHarvesting: 'Parar colheita remota'
				}
			}
		},
		settings: {
			title: "Opções",
			settings: [{
				name: "Idioma"
			}],
			save: "Salvar modificações",
			saveSuccess: "As modificações foram salvas"
		}
	}
});