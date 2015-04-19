define({
	id: 'pt',
	name: 'Português',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'A carteira não existe.',
			102: 'A carteira não foi criada.',
			103: 'O arquivo da carteira está corrompido. Por favor, recupere-o de um back-up que você deveria ter feito.',
			104: 'A senha fornecida para essa carteira não está correta.',
			105: 'Não foi fornecido nenhuma senha para a carteira.',
			106: 'Antes que você possa utilizar essa carteira, você terá que abri-lá. Para assegurar que você tem acesso a essa carteira, você terá que fornecer a senha dessa carteira.',
			107: 'A carteira não contém essa conta.',
			108: 'A conta não pode ser removida. Provavelmente ela tem saldo maior que 0 XEMs ou é a conta primária.',
			109: 'Já existe uma conta com o mesmo nome. Por favor, escolha outro.',
			110: 'A carteira já contém essa conta.',
			111: 'O nome da carteira é um diretório.',
			112: 'A extensão do arquivo da carteira está incorreto.',
			113: 'A carteira não pode ser deletada.',
			121: 'O arquivo de contatos não existe.',
			122: 'O arquivo de contatos não foi criado.',
			123: 'O arquivo de contatos está corrompido. Por favor, recupere-o de um back-up que você deveria ter feito.',
			124: 'A senha para o arquivo de contatos não incorreta.',
			125: 'Não foi fornecido nenhuma senha para o arquivo de contatos.',
			127: 'Não existe esse endereço nos arquivos.',
			128: 'O endereço fornecido não é válido.',
			129: 'Outro arquivo de contatos já existe com esse nome. Por favor, escolha outro nome para esse arquivo.',
			130: 'Já existe esse contato nos arquivos.',
			131: 'O nome do arquivo de contatos é um diretório.',
			132: 'A extensão do arquivo de contatos está incorreta.',
			133: 'Não foi possível deletar o arquivo de contatos.',
			202: 'Não é possível enviar mensagem, porque o destinatário ainda não possui chave pública.',
			203: 'A conta não pode ser convertida em MultiSig, pois nem todos os consignatários são conhecidos. Eles ainda precisarão estarem na mesma carteira ou terem realizado pelo menos uma transação.',
			305: 'O NIS não está disponível. Tente reiniciar o cliente Nem. Se você estiver utilizando um NIS remoto, verifique se a configuração do hospedeiro e procure por erros de digitação ou utiliize outro NIS remoto.',
			306: 'Ocorreu um erro desconhecido. Talvez uma nova nova tentativa ou reiniciar o cliente/servidor dê certo; caso contrário, informe aos desenvolvedores do NEM no fórum oficial forum.ournem.com.',
			400: 'Está faltando algum parâmetro ou os dados estão incorretos.',
			401: 'Esta operação não pode ser completada, ela pode expor a chave privada enviando-a para um NIS remoto.',
			404: 'O arquivo solicitado não foi encontrado..',
			500: 'Ocorreu um erro desconhecido. Por favor, reinicie o programa, caso não resolva, contate os desenvolvedores através do fórum forum.ournem.com.',
			600: 'NCC requer que o NIS seja inicializado. Por favor, vá em cliente NCC para inicializar o nó local via menu superior direito.',
			601: 'O NIS já foi inicializado.',
			602: 'Quase pronto. O cliente NEM está carregando os blocos. A carteira se tornará funcional quando tiver o banco de dados completamente carregado.',
			699: 'O número de máximo de colheitadores no servidor foi atingido.',
			700: 'Falha na colheita. Geralmente esse problema está relacionado com o saldo de NEMs na conta. Para colheitar são necessários,  pelo menos, 10000 XEMs.',
			701: 'O prazo final fornecido está no passado. O prazo limite deve estar dentro do período de um dia.',
			702: 'O prazo final fornecido está no futuro. O prazo limite deve estar dentro do período de um dia.',
			703: 'A sua conta não tem o saldo suficiente para realizar essa transação.',
			704: 'Texto muito longo. Por favor, reduza o tamanho da mensagem.',
			705: 'O Hash de transação já existe no banco de dados, na lista de transações não confirmadas.',
			706: 'A assinatura da transação não pôde ser verificada.',
			707: 'A data da ID de transação está muito no passado.',
			708: 'A data da ID de transação está muito no futuro.',
			709: 'Conta desconhecida, Por favor, faça uma transação para conseguir uma chave pública.',
			710: 'A transação foi rejeitada pois o cache está muito cheio. Aumentando a taxa de transação, aumenta a possibilidade dessa transação  ser aceita.',
			730: 'Transação de transferência de importância (Colheita delegada) conflita com uma transação existente.',
			731: 'A conta de colheita segura não possue saldo igual a zero e não pode ser utilizada.',
			732: 'Transferencia de importância foi rejeitada. Já existe uma operação de transferencia de importancia em andamento.',
			733: 'Colheita delegada já está ativa.',
			734: 'Colheita delegada NÃO está ativa e não pode ser desativada.',
			740: 'Não é permitido transação para contas Multisig.',
			741: 'Assinatura Multisig rejeitada. A conta atual não é uma conta consignatária de uma conta tipo Multisig.',
			742: 'Assinatura de transação de conta Multisig rejeitada. Transaçao Multisig associada não é reconhecida pela rede Nem.',
			743: 'Modificação de conta do tipo Multisig foi rejeitada. Uma das contas adicionadas já é consignatária.',
			901: 'Erro na configuração do modo off-line.',
			1000: 'Chave privada e pública não combinam.',
			1001: 'Chave publica e endereço não combinam.',
			1002: 'O endereço não pertence a rede principal de peers.'
		},
		common: {
			success: 'Successo',
			unknown: 'Status desconhecido',
			unknownMessage: 'Ncc não conseguiu resposta em tempo hábil. A transacção pode ter sido enviada para a rede.<br /><br />Por favor, cheque as transações antes de tentar de novo.',
			appStatus: {
				nccUnknown: 'Estado do NCC desconhecido',
				nccUnavailable: 'NCC não inicializado',
				nccStarting: 'NCC está inicializando...',
				nisUnknown: 'Estado do NIS desconhecido',
				nisUnavailable: 'NIS não inicializado',
				nisStarting: 'NIS está inicializando...',
				notBooted: 'NIS requere inicialização. Por favor, abra a carteira para ativar o auto-boot ou inicialize o nó manualmente.',
				loading: 'Carregando blocos do banco de dados, no bloco: ',
				booting: 'NIS inicializando...',
				nisInfoNotAvailable: 'Informações do NIS não disponível. Recuperando informações...',
				synchronizing: 'NIS está sincronizando com o bloco {{1}}, encontrado {{2}} atrás.',
				daysBehind: {
					0: 'Menos de um dia',
					1: '1 dia',
					many: '{{1}} dias'
				},
				synchronized: 'NIS está sincronizado!!',
				noRemoteNisAvailable: 'Não foi encontrado servidor NIS na rede. Você está conectado à internet?'
			},
			addressBook: 'Arquivo de contatos',
			password: 'Senha',
			passwordValidation: 'A senha não pode ser em branco ou vazia',
			address: 'Endereço',
			privateLabel: 'Identificação',
			publicLabel: 'Identificação pública',
			noCharge: 'A conta atual <b>NÃO</b> pode receber taxas de transações, uma conta do tipo Multisig a acoberta',
			fee: 'Taxa',
			justUse: 'Usar apenas',
			dueBy: 'Tempo de espera',
			hours: 'hora(s)',
			hoursDue: 'Tempo para desativar',
			hoursDueExplanation: 'Se a transação não estiver incluida até a data limite, ela será rejeitada.',
			closeButton: 'Close'
		},
		transactionTypes: [
			'TRANSAÇÕES DE VALORES',
			'ITRANSFERENCIAS DE IMPORTANCIA',
			'MODIFICAÇÃO DE UMA CONTA MULTISIG',
			'TRANSAÇÃO MULTISIG'
		],
		transactionDirections: {
			pending: 'Pendente',
			outgoing: 'Enviada',
			incoming: 'Recebida',
			self: 'Enviada para si mesmo',
			importance: 'Transação de importância',
			modification: 'Agregação de modificação Multisig'
		},
		modals: {
			error: {
				title: 'Oopa!',
				caption: 'ERRO {{1}}'
			},
			yikes: {
				title: 'Eita vidona!!!!!',
				caption: 'Codigo de informação {{1}}'
			},
			confirmDefault: {
				yes: 'Sim',
				no: 'Não'
			},
			initialTy: {
				title: "Seja BEM VINDO ao Nem",
				content: "<c>Sbhaqrq ba gur fgebat cevapvcyrf bs rtnyvgnevna naq rdhnyvgl va qvfgevohgvba, gur Arj Rpbabzl Zbirzrag, ARZ, unf abj svanyyl pbzr gb sehvgvba nsgre pybfr gb 14 zbaguf bs vagrafvir qrirybczrag. Va nqqvgvba gb 5 pber qrirybcref naq 7 pber znexrgref, jr unir n ubfg bs pbzzhavgl zrzoref jub unir urycrq hf va bar jnl be nabgure, jvgubhg jubz, guvf jbhyq arire unir pbzr gbtrgure fb jryy nf orvat bar bs gur srj pelcgb vavgvngvirf jvgu fhpu n ovt grnz. Fcrpvny zragvba vf tvira gb gur sbyybjvat:</c><ue/><c><o>Grpuavpny naq Znexrgvat vachg:</o><oe/> Nzl, naqzr, nirentrwbr, OenvaBsZnffrf, qmnezhfpu, RSSI, Rynan82, rexxv, servtrvfg, unccl4209, vafgnpnfu, wnqrqwnpx, XrivaYv, XxbgArz, xbbernz, Xelfgb, Ybv Gena, ylxn, zvkznfgre, ZeCbegZna, arzovg, akxbvy, bjba, Cnagure03, curebzbar, erabgrat.yv, evtry, FnhyTenl, funjayrnel, fbyvk, fgbar, guvyba, haibvqcy, munaxnvjra, mbngn87, 守望者, 攻陳τч酨鈊, 清风, 福泽天下</c><ue/><c><o>APP Hfre Vagresnpr genafyngvba:</o><oe/>ncrk, obrfgva, Punbf514, QVZXNMQF, svypurs, servtrvfg, Thyvire, vnzvavgabj06, Wnarn4cqn, xhccnynugv, Ypuneyrf, znegvfznegvf, zrff-yrybhpu, Cnenan, evtry, Funja, Fcvqre, 楊 輝彦</c><c><oe/>Va nqqvgvba gb gur nobir 67 grnz zrzoref, jr nyfb unir bgure zrzoref jub  pbagevohgrq, jurgure va grpuavpny, znexrgvat be fgerff grfgvat gur flfgrz qhevat gur nycun naq orgn cunfr. Jr jbhyq yvxr gb nqqvgvbanyyl gunax nyy gubfr vaqvivqhnyf abg yvfgrq urer naq gur terngre ARZ pbzzhavgl orpnhfr jvgubhg gurz, jr jbhyq unir abg rire pbzr fb sne.</c><ue/><c>Naq zbfg vzcbegnagyl<oe/><o>Gunax LBH!</o><oe/><oe/>Arj Rpbabzl fgnegf jvgu LBH!</c>"
			},
			initialBackup: {
				title: "Seja BEM VINDO ao Nem",
				content: "Você pode criar um arquivo de back-up no menu a sua extrema direita, no lado superior da tela. Para sua segurança, realize um back-up!"
			},
			settings: {
				title: 'Configurações',
				language: {
					label: 'Idioma'
				},
				remoteServer: {
					tabTitle: 'Servidor remoto',
					protocol: 'Protocolo',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Endereço Host',
					port: 'Porta',
					defaultPort: 'Usar a porta padrão.'
				},
				autoBoot: {
					tabTitle: 'Inicialização automática',
					name: 'Nome do nó',
					account: 'Carteira',
					primaryAccount: 'Conta primária',
					auto: 'Inicialização automática quando abrir a carteira'
				},
				save: 'Salvar',
				saveSuccess: 'As configurações foram salvas!'
			},
			multisig: {
				title: 'Converter conta para Multisig',
				multisigAccount: 'Conta Multisig',
				cosignatories: 'Endereços dos consignatários',
				labelDesc: 'Esta conta está identificada como {{1}}',
				nullLabelDesc: 'Esta conta não tem uma identificação',
				addCosignatory: '+ Adicinar um consignatário',
				cancel: 'Cancelar',
				convert: 'Converter',
				fee: 'Taxa',
				feeValidation: 'A taxa de transação não deve ser inferior a taxa mínima',
				useMinimumFee: 'Usar taxa minima',
				txConfirm: {
					title: 'Confirmar Conversão para conta Multisig',
					total: 'Total',

				},
				warning: 'A conta do tipo Multisig está na lista dos consignatários. Isso resultará no corte de acesso ao dinheiro da conta. Muito provavelmente você <b>NÃO QUER</b> fazer isso.'
			},
			signMultisig: {
				title: 'Assinar transação Multisig',
				original: {
					from: 'Conta Multisig',
					to: 'Destinatário',
					amount: 'Quantidade',
					fee: 'Taxa',
					deadline: 'Prazo final'
				},
				multisigFees: 'Taxas Multisig',
				multisigTotal: 'Total',
				sender: 'Cosignatário',
				fee: 'Taxa',
				feeValidation: 'A taxa de transação não deve ser inferior a taxa mínima',
				useMinimumFee: 'Usar taxa minima',
				password: 'Senha',
				passwordValidation: 'A senha não deve ser vazia',
				send: 'Enviar',
				cancel: 'Cancelar',
				sending: 'Enviando...',
				successMessage: 'A transação foi enviada!',
				txConfirm: {
					title: 'Confirmar transação Multisig',
					message: 'Mensagem',
					encrypted: 'Mensagem criptografada',
					noMessage: 'Sem mensagem',

				}
			},
			sendNem: {
				title: 'Enviar XEM',
				sender: 'Remetente',
				thisAccount: 'Esta conta',
				labelDesc: 'Esta conta está identificada como {{1}}',
				nullLabelDesc: 'Esta conta não tem uma identificação',
				amount: 'Total',
				recipient: 'Destinatário',
				recipientValidation: 'Endereços de contas devem ter pelo menos 40 caracteres, excluindo o caractere - .',
				message: 'Mensagem',
				encrypt: 'Criptografar mensagem',
				fee: 'Taxa',
				multisigFee: 'Taxa Multisig',
				feeValidation: 'A taxa de transação não deve ser inferior a taxa mínima',
				useMinimumFee: 'Usar taxa minima',
				password: 'Senha',
				passwordValidation: 'A senha não deve ser vazia',
				send: 'Enviar',
				cancel: 'Cancelar',
				sending: 'Enviando...',
				successMessage: 'A transação foi enviada!',
				txConfirm: {
					title: 'Confirmar Transação',
					amount: 'Quantidade',
					to: 'Para',
					total: 'Total',
					message: 'Mensagem',
					encrypted: 'Mensagem está criptografada',
					noMessage: 'Sem mensagem',
					cancel: 'Cancelar',
					confirm: 'Confirmar',
					sending: 'Enviando...'
				},
				notBootedWarning: {
					title: 'O nó não foi inicializado!',
					message: 'O nó local precisa ser inicializado para poder realizar transações!'
				},
				bootingWarning: {
					title: 'O Nó está sendo inicializado',
					message: 'Por favor, espere até o nó inicializar completamente para poder enviar sua transação.'
				},
				loadingWarning: {
					title: 'Carregando blocos'
				}
			},
			clientInfo: {
				title: 'Informações do programa',
				ncc: 'NEM Community Client - NCC',
				signer: 'Signatário',
				remoteServer: 'Servidor Remoto',
				local: 'Local',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Sincronizado',
				notSync: 'Não sincronizado',
				notConnected: 'Desconectado da nuvem de peers',
				loading: 'Carregando...'
			},
			transactionDetails: {
				title: 'Detalhes da transação',
				id: 'ID',
				hash: 'Hash',
				type: 'Tipo de transação',
				direction: 'Direção da transação',
				pending: 'Pendente',
				outgoing: 'Enviado',
				incoming: 'Recebido',
				self: 'Enviado para si mesmo',
				sender: 'Remetente',
				multisigAccount: 'Conta Multisig',
				issuer: 'Emissor',
				recipient: 'Destinatário',
				remote: 'Remoto',
				multisigMessage: 'Assinatura atual',
				message: 'Mensagem',
				noMessage: 'Sem mensagem',
				encrypted: 'Mensagem Criptografada',
				time: 'Data e hora',
				confirmations: 'Confirmações',
				confirmationsUnknown: 'Desconhecida(o)',
				amount: 'Quantidade',
				fee: 'Taxa',
				innerFee: 'Taxas internas',
				multisigFees: 'Taxas Multisig',
				cosignatory: 'Cosignatário'
			},
			accountDetails: {
				title: 'Account details',
				address: 'Endereço',
				label: 'Identificação',
				noLabel: 'Sem identificação',
				add: 'Adicionar ao arquivo de contatos',
				remove: 'Remover do arquivo de contatos',
				balance: 'Balanço',
				vested: 'Adquirido',
				importance: 'Importancia',
				publicKey: 'Chave Publica',
				noPublicKey: 'Sem chave públida',
				harvestedBlocks: 'Blocos colheitados',
				close: 'Fechar'
			},
			bootLocalNode: {
				title: 'Inicializar nó local',
				account: 'Conta do nó local',
				noLabel: '<span class=\'null\'>&lt;Sem identificação&gt;</span>',
				wallet: 'Nome da Carteira',
				node: 'Nome para o nó',
				boot: 'Inicializar',
				booting: 'Inicializando...',
				warning: 'Aviso de inicialização',
				warningText: 'Você está tentando inicializar um nó <u>{{2}}</u><br/><br/>Inicializar um nó remoto é atualmente impossível com esse NCC.',
				warningStatement: 'Seu auto-inicializar está indicando verdadeiro e você está utilizando um nó remoto {{3}}.<br/><br/>Inicializar um nó remoto é atualmente impossível com esse NCC',
				warningQuestion: 'Você tem certeza que quer inicializar o nó <u>{{3}}</u> usando a chave privada da conta  {{1}} ({{2}} XEM)?<br><br> Isto revelará a <span class="sublabelWarning">chave privada</span> dessa conta  para o nó: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Fechar carteira',
				message: 'Confirmar o fechamento da carteira e o retorno à página inicial?'
			},
			createAccount: {
				title: 'Criar nova conta',
				label: 'Identificação',
				wallet: 'Carteira',
				password: 'Senha',
				successMessage: 'A conta {{1}} {{#2}}({{2}}){{/2}} foi criada! Por favor, guarde uma cópia em um local seguro.',
				create: 'Criar'
			},
			showPrivateKey: {
				title: 'Mostrar a chave PRIVADA da conta',
				message: 'Será exibido a chave privada dessa conta na tela, como texto. \nNo caso do seu sistema ter algum tipo de Malware, essa operação pode ser muito perigosa. \nVocê realmente tem certeza que quer exibir a chave privada?',
				publicKey: 'Chave Pública',
				privateKey: 'Chave Privada',
				show: 'Mostrar a chave'
			},
			showRemotePrivateKey: {
				title: 'Mostrar a chave PRIVADA da conta remota',
			message: 'Será exibido a chave privada da conta remota na tela, como texto. No caso de qualquer tipo de infecção digital presente no sistema, essa ação poderá  ser perigosa. Você tem certeza que você quer mesmo fazer isso?',

			},
			addAccount: {
				title: 'Adicionar uma Carteira existente',
				privateKey: 'Chave privada',
				wallet: 'Carteira',
				password: 'Senha',
				successMessage: 'A conta {{1}} {{#2}}({{2}}){{/2}} foi criada! Por favor, realize um backup e guarde-o em local seguro!',
				add: 'Criar',
				label: 'Identificação'
			},
			setPrimary: {
				title: 'Definir como conta primária',
				account: 'Conta que será definida como primária',
				noLabel: '<span class=\'null\'>&lt;Sem identificação&gt;</span>',
				wallet: 'Carteira',
				password: 'Senha',
				successMessage: 'Conta {{1}} {{#2}}({{2}}){{/2}} foi definida como primária!',
				set: 'Definir como conta primária'
			},
			changeWalletName: {
				title: 'Renomear Carteira',
				wallet: 'Nome atual',
				newName: 'Novo nome',
				password: 'Senha',
				successMessage: 'O nome <em>{{1}}</em> foi alterado para <em>{{2}}</em>',
				change: 'Renomear'
			},
			changeWalletPassword: {
				title: 'Trocar a senha',
				wallet: 'Nome da carteira',
				password: 'Senha atual',
				newPassword: 'Nova senha',
				confirmPassword: 'Confirmar nova senha',
				successMessage: 'Nova senha definida',
				change: 'Trocar',
				passwordNotMatchTitle: 'Oopa!',
				passwordNotMatchMessage: 'As senhas não conferem. Por favor, tente novamente.'
			},
			changeAccountLabel: {
				title: 'Trocar identificação da conta',
				label: 'Nova identificação',
				wallet: 'Carteira',
				password: 'Senha',
				successMessage: 'A Identificação {{1}} foi alterada para {{2}}',
				change: 'Trocar'
			},
			removeAccount: {
				title: 'Remover conta',
				account: 'Conta',
				label: 'Nova identificação',
				wallet: 'Carteira',
				password: 'Senha',
				warning: 'Esta operacao não pode ser desfeita.',
				successMessage: 'A conta {{1}} {{#2}}({{2}}){{/2}} foi removida!',
				remove: 'Remover'
			},
			nisUnavailable: {
				title: 'NIS não está disponível',
				message: 'NIS não está respondendo, aguardando conexão'
			},
			shutdown: {
				title: 'Fechar programa',
				message: 'Tem certeza que quer fechar o programa (NCC)?'
			},
			activateRemote: {
				title: 'Ativar colheita delegada',
				wallet: 'Carteira',
				account: 'Conta',
				password: 'Senha',
				activate: 'Ativar',
				warning: 'Aviso',
				warningText: 'A ativação leverá 6 houras (360 blocos). A ativação não vaiiniciar automaticamente a colheita.'
			},
			deactivateRemote: {
				title: 'Desativar colheita delegada',
				wallet: 'Carteira',
				account: 'Conta',
				password: 'Senha',
				deactivate: 'Desativar',
				warning: 'Aviso',
				warningText: 'A Desativação levará 6 houras (360 blocos).'
			},
			startRemote: {
				title: 'Começar colheita delegada',
				wallet: 'Carteira',
				account: 'Conta',
				password: 'Senha',
				start: 'Iniciar'
			},
			stopRemote: {
				title: 'Parar colheita delegada',
				wallet: 'Carteira',
				account: 'Conta',
				password: 'Senha',
				stop: 'Parar'
			},
			logoutWarning: {
				leavePage: "Você está saindo da carteira. \nSe você deixá-la assim, outras pessoas ainda poderão acessá-lá por esse computador. Para sair da conta, por favor, clique em \'Fechar carteira\' no menu superior direito, antes de você fechar a aba de seu navegador"
			},
			addContact: {
				title: 'Adicionar contato',
				add: 'Criar'
			},
			editContact: {
				title: 'Editar contato',
				saveChanges: 'Salvar modificações'
			},
			removeContact: {
				title: 'Remover contato',
				remove: 'Remover'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Carteira importada!',
			nav: {
				start: 'Início',
				about: 'Sobre NEM',
				settings: 'Configurações'
			},
			main: {
				leftTitle: 'Primeira vez?<br>Crie uma carteira <em>NEM</em>!',
				leftButton: 'Criar nova carteira',
				walletNamePlh: 'Nome para a carteira',
				passwordPlh: 'Senha',
				confirmPasswordPlh: 'Confirmar senha',
				create: 'Criar',
				creating: 'Criando...',
				rightTitle: 'Já possui uma carteira?',
				rightButton: 'Abrir carteira existente',
				openButton: 'Abrir',
				walletsFound: 'Encontrada(s) <strong>{{1}}</strong> <em>carteira(s)</em>',
				copyright: 'Fotografado por <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'Como o NCC funciona?',
						description: '<em>Segurança</em> baseada em forte criptografia para evitar roubo de moedas &amp; ativos.'
					},
					{
						title: 'NEM infraestrutura de servidores remotos',
						description: 'Utilizando um NIS remotor, você não precisa sicronizar o blockchain na inicialização.',

					},
					{
						title: 'Colheita Delegada',
						description: 'Com a colheita delegada, você pode colheitar de servidores NIS remotos!',

					},
					{
						title: 'Transações de multi assinatura',
						description: 'Assegure seu Xem e seus investimentos via transações de multi assinaturas do blockchain.',

					},
					{
						title: 'Suporte a sua Linguagem nativa',
						description: 'A interface do usuário do NEM suporta multiplas linguagens. Veja em "Opções".'
					},
					{
						title: 'Voce tem alguma pergunta ou quer realizar um feedback ?',
						description: '<a href="http://forum.ournem.com">forum.ournem.com</a> | #ournem no freenode.org | Telegram',

					}
				]
			},
			about: {
				sections: [
					{
						title: 'Como o NCC funciona?',
						paragraphs: [
							'<strong>NCC</strong> providencia acesso aos seus ativos e moedas como uma carteira de moeda digital tradicional faz. Você pode',
							'<strong>NCC</strong> requerer acesso a um servidor <strong>NIS</strong> para operar. O padrão é ter um servidor local ativo (está instalado junto com o <strong>NCC</strong>)',
							'Você também pode configurar acesso a um servidor remoto <strong>NIS</strong>.'
						],
						listItems: [
							'Tenha múltiplas carteiras',
							'Defina múltiplas carteiras para serem incluídas em uma carteira'
						]
					},
					{
						title: 'O que é &#42;NIS?',
						paragraphs: [
							'Este componente é responsável por manter a nuvem <strong>NEM</strong> viva.',
							'Quanto mais servidores<strong>NIS</strong>, melhor será a segurança da rede.',
							'<strong>NIS</strong> é o ponto de acesso a nuvem <strong>NEM</strong> de servidores.'
						],
						legend: '<strong>&#42;NIS</strong> significa <strong>NEM Infraestrutura de Servidores</strong>'
					}
				]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Aproximadamente {{1}} dia(s) atrás',
			lastAccessJustNow: 'Agora a pouco',
			lastAccessTooltip: 'Ultimo acesso em {{1}}',
			primary: 'primário',
			primaryShort: '1º',
			noLabel: '<Sem identificação>',
			copiedToClipboard: 'Endereço copiado para a área de transfêrencia!',
			actions: {
				refreshInfo: 'Atualizar informações',
				bootLocalNode: 'Inicializar nó',
				changeWalletName: 'Trocar o nome da carteira',
				changeWalletPassword: 'Trocar a senha da carteira',
				mergeWallets: 'Mesclar carteiras',
				exportWallet: 'Exportar carteira',
				createAccount: 'Criar uma nova Conta',
				createRealAccountData: 'Criar dados da conta real',
				verifyRealAccountData: 'Verificar dados da conta Verdadeira',
				showPrivateKey: 'Mostrar a chave PRIVADA da conta',
				showRemotePrivateKey: 'Mostrar a chave PRIVADA da conta Remota',
				viewDetails: 'Ver detalhes da conta',
				addAccount: 'Adicionar uma conta existente',
				changeAccountLabel: 'Renomear carteira',
				setPrimary: 'Definir como conta primária',
				removeAccount: 'Remover Conta',
				clientInfo: 'Informações do Programa',
				closeWallet: 'Fechar carteira',
				closeProgram: 'Fechar programa',
				copyClipboard: 'Copiar para a área de transferência',
				copyDisabled: 'Para copiar um endereço, é necessári oter o Adobre Flash instalado.',
				convertMultisig: 'Converter outra conta para o tipo Multisig'
			},
			nav: [
				'Painel Administrativo',
				'Mensagens',
				'Arquivo de contatos',
				'Transações',
				'Blocos colhidos',
				'Exchange de ativos',
				'Novidades',
				'Aplicações',
				'Contas',
				'Configurações',
				'Fechar programa'
			],
			bootNodeWarning: 'Um nó local precisa ser inicializado para poder utilizar o NIS.'
		},
		dashboard: {
			assets: {
				title: 'Seus ativos'
			},
			importance: {
				title: 'Pontuação de importância',
				unknown: 'Status desconhecido',
				start: 'Começar colheita local',
				harvesting: 'colheitando',
				stop: 'Parar colheita local',
				description: 'Importância para a nuvem de peers',
				remoteHarvest: {
					activate: 'Ativar colheita delegada',
					activating: 'Ativando a colheita delegada...',
					active: 'A colheita delegada está ativa',
					deactivate: 'Desativar a colheita delegada',
					deactivating: 'Desativando a colheita delegada...',
					startRemoteHarvesting: 'Iniciar a colheita delegada',
					remotelyHarvesting: 'Colheitando remotamente!',
					stopRemoteHarvesting: 'Parar a colheita delegada'
				}
			},
			transactions: {
				title: 'Transações recentes',
				sendNem: 'Enviar XEM',
				signMultisig: 'ASSINAR',
				balance: 'Saldo atual',
				loading: 'Carregando balanço',
				accountCosignatories: 'Conta Multisig',
				accountCosignatoriesView: 'ver cosignatários',
				vestedBalance: 'Quantidade investida',
				syncStatus: '(no bloco {{1}}{{#2}} : encontrado a {{3}} dias atrás{{/2}})',
				notSynced: 'Pode estar impreciso, NIS aind não está sincronizado',
				unknown: 'Desconhecido',
				columns: [
					'',
					'Data',
					'Destinatário',
					'Mensagem',
					'',
					'Detalhes',
					'Confirmações',
					'Taxa',
					'Quantidade'
				],
				noMessage: 'Sem mensagem',
				encrypted: 'Mensagem criptografada',
				view: 'Detalhes',
				confirmationsUnknown: 'Desconhecido(a)',
				pending: 'Pendente',
				seeAll: 'Ver todas as transações',
				noTransactions: 'Nenhuma transação realizada ainda.'
			},
			nemValue: {
				title: 'Estatísticas desta carteira'
			},
			messages: {
				titleTooltip: 'Mensagens'
			},
			news: {
				titleTooltip: 'Novidades'
			},
			notAvailable: 'Não disponível na versão Alfa'
		},
		transactions: {
			title: 'Transações',
			sendNem: 'Enviar XEM',
			balance: 'Saldo',
			filters: {
				confirmed: 'Confirmadas',
				unconfirmed: 'Não confirmadas',
				incoming: 'Recebidas',
				outgoing: 'Enviadas'
			},
			table: {
				columns: [
					'',
					'Tempo',
					'Remetente/Destinatário',
					'Mensagem',
					'',
					'Detalhes',
					'Confirmações',
					'Taxa',
					'Quantidade'
				],
				noMessage: 'Sem mensagem',
				encrypted: 'Mensagem criptografada',
				view: 'Detalhes',
				confirmationsUnknown: 'Desconhecido(a)',
				pending: 'Pendente',
				noTransactions: 'Nenhuma transação realizada.',
				loading: 'Carregando mais transações...'
			}
		},
		harvestedBlocks: {
			title: 'Blocos colhidos',
			feeEarned: 'Taxas ganhas com a colheita dos últimos 25 blocos',
			unknown: '...',
			table: {
				columns: [
					'Altura do bloco',
					'Hora',
					'Dificuldade do bloco',
					'Taxa'
				],
				noBlocks: 'Não há blocos colhidos',
				loading: 'Ver blocos colhidos anteriormente'
			},
			harvesting: {
				unknown: 'Status desconhecido',
				start: 'Iniciar a colheita',
				harvesting: 'Colheitando',
				stop: 'Parar de colheitar',
				remoteHarvest: {
					startRemoteHarvesting: 'Iniciar a colheita delegada',
					stopRemoteHarvesting: 'Parar a colheita delegada'
				}
			}
		},
		addressBook: {
			title: 'Lista de contatos',
			addContact: 'Adicinar contatos',
			table: {
				columns: [
					'Endereço do contato',
					'Identificação privada',
					'Identificação pública'
				],
				noContacts: 'Não existem contatos na sua lista de contatos...'
			},
			noLabel: 'Sem identificação',
			sendNem: 'Enviar XEM',
			edit: 'Editar',
			remove: 'Remover'
		},
		settings: {
			title: 'Opções',
			settings: [
				{
					name: 'Idioma'
				}
			],
			save: 'Salvar modificações',
			saveSuccess: 'Modificações salvas'
		}
	}
});
