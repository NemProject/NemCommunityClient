define({
	id: 'cn',
	name: '中文（简体）',
	texts: {
		preferences: {
			thousandSeparator: ',',
			decimalSeparator: '.'
		},
		faults: {
			101: '未找到文件。',
			102: '尚未建立钱包。',
			103: '钱包文件已损坏。如果您的钱包存在备份，请使用备份恢复你的账户，或添加一个新账户。',
			104: '该密码不正确，请认真回忆密码，如该密码丢失将造成无法复原！',
			105: '未输入钱包密码。',
			106: '使用钱包需先正常开启，您必须提供正确密码才能打开钱包。',
			107: '钱包内无此账户。',
			108: '无法删除该账户。可能的原因是，该账户存在余额或该帐户是主帐户。',
			109: '具有相同名称的另一个钱包已经存在。请选择一个其它的钱包名。',
			110: '钱包里已经包含了此帐户。',
			111: '钱包名与目录名重名。',
			112: '钱包文件插件已损坏。',
			113: '无法删除钱包。',
			121: '地址簿文件不存在。',
			122: '地址簿尚未创建。',
			123: '地址簿文件已损坏，请从备份恢复地址簿。',
			124: '您提供的地址簿密码有误。',
			125: '未输入地址簿密码。',
			127: '地址簿中不含此地址。',
			128: '您提供的地址不正确。',
			129: '同名地址簿已存在，请选择一个新的地址簿名。',
			130: '地址簿中已包含此地址。',
			131: '地址簿名与目录重名。',
			132: '地址簿插件文件错误。',
			133: '此地址簿无法删除。',
			202: '该公钥不存在。',
			203: '账户无法转换，可能存在未激活的共同签署人账号。需要完成一笔交互以激活账户。',
			305: 'NEM基础设施服务 (NIS)不可用。\n\n请尝试重启NEM软件。\n\n如果您在使用远程NIS，请确认NIS端口开放，连接未受局域网限制。',
			306: '对不起，一个开发团队没有预见到的错误发生了。请尝试重试，若问题未解决，请在NEM NIS/NCC社区内提交该问题。',
			400: '缺失某些参数。',
			401: '抱歉，不允许执行该操作，本能地钱包登陆远程NIS存在私钥丢失风险！',
			404: '您请求的资源无法找到。',
			500: '保存配置文件失败。',
			600: 'NCC需要连接至已启用的NIS服务启动以从NEM云发送和接收交易数据，请使用NCC菜单项启动本地节点。',
			601: 'NIS节点已启用，无法重复启用。',
			602: 'NEM基础设施服务（NIS）当前正在加载数据，数据完全加载后钱包将可用。',
			699: '此服务器已达最大收获人数。',
			700: '所提供的帐户不满足收获的基本要求。主要原因可能是金额不足，账户中至少有10000 vested XEM才能开始收获。',
			901: '设置离线模式发生错误。',
			1000: '您所提供的密钥公钥与私钥不对应。',
			1001: '您所提供的公钥和地址不对应。',
			1002: '网络中无法找到改地址。',
			1203: '所提供的截止日期过早。必须输入1天以内的日期作为截止日期。',
			1204: '所提供的截止日期过晚。必须输入1天以内的日期作为截止日期。',
			1205: '您的账户余额不足，无法发起该交互。',
			1206: '提供消息的文本太大，无法通过XEM发送。请减少消息的长度。',
			1207: '数据库或交易清单中已经存在此交易的hash值。',
			1208: '无法验证本次交易的签名。',
			1209: '此交易ID的时间戳不合法，时间过早。',
			1210: '此交易ID的时间戳不合法，时间过晚。',
			1219: '交互缓存耗尽，交互被拒绝。网络繁忙时高手续费优先处理。 ',
			1262: '申请委托收获的账户具有非0余额，无法开启。',
			1263: '重要性传输被拒绝，已有等待中重要性传输操作。 ',
			1264: '委托收获已激活。',
			1265: '委托收获未被激活，无法取消激活。',
			1266: '重要性传输交互 (委托收获) 与现有交互冲突。',
			1271: '多重签名签名交互被拒绝。当前账户不是此多重签名交互的合法共同签署人账号。',
			1273: '多重签名签名交互被拒绝。相关多重签名交互在NEM网络中未公知。',
			1274: '多重签名账号不可发起交互。',
			1275: '多重签名账户变更被拒绝。一个待加入账号已是共同签署人。',
			1321: '该帐户未知。一个帐户需要至少完成一个交易（作为发件人或收件人）才能被网络公知。',

		},
		common: {
			success: '成功',
			unknown: '未知状态',
			unknownMessage: 'NCC未按时获得回复。交互可能已经发送到网络中。 <br /><br />请在重新创建交互前检查确认。',
			appStatus: {
				nccUnknown: 'NCC 状态未知',
				nccUnavailable: 'NCC 不可用',
				nccStarting: 'NCC 开始启用…',
				nisUnknown: 'NIS 状态未知',
				nisUnavailable: 'NIS 不可用',
				nisStarting: 'NIS 开始启用…',
				notBooted: '需要启用NIS。请打开你的钱包，通过弹出的对话框启用一个本地节点，或设置自动启用。',
				loading: '正在数据库中加载区块, 现区块号: ',
				booting: '正在启用 NIS...',
				nisInfoNotAvailable: '收不到NIS信息，正尝试接收NIS信息...',
				synchronizing: 'NIS 在和服务器执行同步. 现位于 {{1}}, 大约落后 {{2}} 。',
				daysBehind: {
					0: '少于一天',
					1: '一天',
					many: '{{1}} 天'
				},
				synchronized: 'NIS已完成同步!',
				noRemoteNisAvailable: '在相应地址未发现NIS网络，互联网已断开？'
			},
			addressBook: '地址簿',
			password: '密码',
			passwordValidation: '密码不可为空',
			address: '地址',
			privateLabel: '个人标签',
			publicLabel: '公共标签',
			noCharge: '当前账号<b>不会</b>支付相关费用，费用由多重签名账号支付。',
			fee: '费用',
			multisigFee: '多重签名费用',
			useMinimumFee: '支付最小费用',
			feeValidation: '无效费用值，必须填入等于或高于最小费用的值。',
			justUse: 'Just use',
			dueBy: '限期',
			minutes: 'minute(s)',
			hours: '小时数',
			hoursDue: '到期小时数',
			hoursDueExplanation: '如果交互未在截止时间之前完成，它会被拒绝。',
			closeButton: '关闭',
			cancelButton: '取消',
			sendButton: '发送',
			account: '帐户',
			thisAccount: '本账户',
			warning: '警告',
			newBuild: '新版本',
			newBuildNumber: '新版本{{1}} 已发布可下载， 点击 <a class="hyperlink--default", href="http://blog.nem.io">blog.nem.io</a> 查看。',

		},
		transactionTypes: {
			20: '传输交互',
			21: '重要性传输',
			22: '多重签名账户变更',
			23: '部署命名空间',
			24: '马赛克创建',
			25: '马赛克提供',
			40: '多重签名',
			50: '多重签名交互',
			51: '多重签名交互',
			52: '多重签名交互',
			53: '多重签名交互',
			54: '多重签名交互',
			55: '多重签名交互',

		},
		transactionDirections: {
			pending: '等待中交互',
			outgoing: '发送交互',
			incoming: '接受交互',
			self: '自我交互',
			importance: '重要性交互',
			modification: '多重签名账户协同变更',
			provision: '部署命名空间',
			mosaicCreation: '马赛克创建',
			mosaicSupply: '马赛克提供'
		},
		modals: {
			error: {
				title: '哎呀!',
				caption: '错误 {{1}}'
			},
			yikes: {
				title: '异常!',
				caption: '信息码 {{1}}'
			},
			confirmDefault: {
				yes: '是',
				no: '否'
			},
			initialTy: {
				title: "欢迎来到NEM",
				content: "<c>Sbhaqrq ba gur fgebat cevapvcyrf bs rtnyvgnevna naq rdhnyvgl va qvfgevohgvba, gur Arj Rpbabzl Zbirzrag, ARZ, unf abj svanyyl pbzr gb sehvgvba nsgre pybfr gb 14 zbaguf bs vagrafvir qrirybczrag. Va nqqvgvba gb 5 pber qrirybcref naq 7 pber znexrgref, jr unir n ubfg bs pbzzhavgl zrzoref jub unir urycrq hf va bar jnl be nabgure, jvgubhg jubz, guvf jbhyq arire unir pbzr gbtrgure fb jryy nf orvat bar bs gur srj pelcgb vavgvngvirf jvgu fhpu n ovt grnz. Fcrpvny zragvba vf tvira gb gur sbyybjvat:</c><ue/><c><o>Grpuavpny naq Znexrgvat vachg:</o><oe/> Nzl, naqzr, nirentrwbr, OenvaBsZnffrf, qmnezhfpu, RSSI, Rynan82, rexxv, servtrvfg, unccl4209, vafgnpnfu, wnqrqwnpx, XrivaYv, XxbgArz, xbbernz, Xelfgb, Ybv Gena, ylxn, zvkznfgre, ZeCbegZna, arzovg, akxbvy, bjba, Cnagure03, curebzbar, erabgrat.yv, evtry, FnhyTenl, funjayrnel, fbyvk, fgbar, guvyba, haibvqcy, munaxnvjra, mbngn87, 守望者, 攻陳τч酨鈊, 清风, 福泽天下</c><ue/><c><o>APP Hfre Vagresnpr genafyngvba:</o><oe/>ncrk, obrfgva, Punbf514, QVZXNMQF, svypurs, servtrvfg, Thyvire, vnzvavgabj06, Wnarn4cqn, xhccnynugv, Ypuneyrf, znegvfznegvf, zrff-yrybhpu, Cnenan, evtry, Funja, Fcvqre, 楊 輝彦</c><c><oe/>Va nqqvgvba gb gur nobir 67 grnz zrzoref, jr nyfb unir bgure zrzoref jub  pbagevohgrq, jurgure va grpuavpny, znexrgvat be fgerff grfgvat gur flfgrz qhevat gur nycun naq orgn cunfr. Jr jbhyq yvxr gb nqqvgvbanyyl gunax nyy gubfr vaqvivqhnyf abg yvfgrq urer naq gur terngre ARZ pbzzhavgl orpnhfr jvgubhg gurz, jr jbhyq unir abg rire pbzr fb sne.</c><ue/><c>Naq zbfg vzcbegnagyl<oe/><o>Gunax LBH!</o><oe/><oe/>Arj Rpbabzl fgnegf jvgu LBH!</c>"
			},
			initialBackup: {
				title: "欢迎来到NEM",
				content: "您可在点击右上方的菜单创建钱包备份。"
			},
			settings: {
				title: '设置',
				language: {
					label: '语言'
				},
				remoteServer: {
					tabTitle: '远程服务器',
					protocol: '协议',
					protocolOptions: {
						http: 'HTTP'
					},
					host: '主机名',
					port: '端口',
					defaultPort: '使用默认端口'
				},
				autoBoot: {
					tabTitle: '自动启用',
					name: '节点名',
					primaryAccount: '主帐户',
					auto: '开启钱包时自动启用'
				},
				save: '保存',
				saveSuccess: '设置保存成功'
			},
			signToken: {
				title: "用账户签署一个串码",
				label: "串码 (地址, 字符串, 任何东西)",
				signature: "签署码",
				sign: "签署"
			},
			multisig: {
				title: '转换为多重签名账号',
				multisigAccount: '多重签名账号',
				cosignatories: '共同签署人地址',
				labelDesc: '账户标签为 {{1}}',
				nullLabelDesc: '该账户未设置标签',
				addCosignatory: '+ 添加共同签署人',
				convert: '转换',
				txConfirm: {
					title: '确认转换至多重签名账户',
					total: '总额',

				},
				warning: '多重签名账户本身不可以作为共同签署人。这样做会把账户彻底锁死无法发出交互。估计您<b>不会</b>想要这么做。',
				minCosignatoriesDefaultLabel: '使用默认签署人数量',
				minCosignatoriesRelativeLabel: '关联变更',
				minCosignatoriesLabel: '最少共签人数量',
				minCosignatoriesZero: '使用零将会需要 所有共签人签名',
				minCosignatoriesOverflow: '指定人数大于所有共签人数'
			},
			signMultisig: {
				title: '签署多重签名交互',
				original: {
					from: '多重签名账户',
					to: '接收人',
					amount: '量',
					fee: '内部费用',
					deadline: '期限'
				},
				multisigFees: '多重签名费用',
				multisigTotal: '总额',
				sender: '共同签署人',
				passwordValidation: '密码不可为空',
				sending: '发送中...',
				txConfirm: {
					title: '确认多重签名交互',
					message: '信息',
					encrypted: '信息已加密',
					noMessage: '无信息',

				}
			},
			sendNem: {
				title: '发送 XEM',
				sender: '发送人',
				thisAccount: '本账户',
				labelDesc: '此账户标记为 {{1}}',
				nullLabelDesc: '此帐户没有标记',
				amount: '金额',
				recipient: '收件人账号',
				recipientValidation: '账户地址长度必须为40个字符（含符号）',
				message: '信息',
				encrypt: '加密',
				sending: '正在发送...',
				successMessage: '您的交互已经成功发送! <br><br>交互hash: {{1}}',
				txConfirm: {
					title: '确认交易',
					amount: '金额',
					to: '收件人',
					total: '总价',
					message: '信息',
					encrypted: '信息已加密',
					noMessage: '未发送信息',
					confirm: '确认',
					sending: '正在发送中...'
				},
				notBootedWarning: {
					title: '节点还没有启用!',
					message: '本地节点需要被启用后才能发送XEM!'
				},
				bootingWarning: {
					title: '正在启用节点',
					message: '请等待节点启用完成后再发起交互。'
				},
				loadingWarning: {
					title: '正在加载数据库'
				}
			},
			clientInfo: {
				title: '客户端信息',
				ncc: 'NEM 社区客户端 - NCC',
				signer: '签名者',
				remoteServer: '远程服务器',
				local: '本地',
				nis: 'NEM 基础设施服务器 - NIS',
				sync: '完成同步',
				notSync: '未完成同步',
				notConnected: '未连接 NEM 云',
				loading: '加载中...'
			},
			transactionDetails: {
				title: '交易详情',
				id: 'ID',
				hash: 'Hash',
				type: '交易类型',
				direction: '交互方向',
				pending: '待定',
				outgoing: '发送',
				incoming: '接收',
				self: '本人',
				sender: '发件人',
				multisigAccount: '多重签名账户',
				issuer: '发起人',
				recipient: '收件人',
				remote: '远程',
				multisigMessage: '已存签名',
				message: '信息',
				noMessage: '无信息',
				encrypted: '已加密',
				time: '时间戳',
				confirmations: '确认',
				confirmationsUnknown: '未知',
				amount: '金额',
				innerFee: '内部费用',
				multisigFees: '多重签名费用',
				cosignatory: '共同签署人',
				namespace: '命名空间',
				rentalFee: '租金费用',
				mosaicName: '马赛克名称',
				mosaicQuantity: '马赛克数量',
-				mosaicLevy: '马赛克税金',
				description: '描述',
				propertiesLabel: '属性',
				properties: {
					divisibility: '可分性',
					quantity: '最大数量',
					mutablequantity: '可变数量',
					transferable: '可传输性'
				},
				supplyType: '供给类型',
				supplyAmount: '供给量'
			},
			accountDetails: {
				title: '账户细节',
				label: '标签',
				noLabel: '无标签',
				add: '添加到地址簿',
				remove: '从地址簿删除',
				balance: '余额',
				vested: "vested",
				importance: '重要性',
				publicKey: '公钥',
				noPublicKey: '无公钥',
				harvestedBlocks: '已收获块'
			},
			bootLocalNode: {
				title: '启用本地节点',
				account: '节点启用帐号',
				noLabel: '<span class=\'null\'>&lt;没有标识&gt;</span>',
				wallet: '钱包',
				node: '节点名称',
				boot: '启用',
				booting: '正在启用...',
				warning: '启用节点警告',
				warningText: '您正在试图启用一个远程节点<u>{{2}}</u><br/><br/>从NCC启用远程节点当前无法实现。',
				warningStatement: '您已设置自动启用，且正在使用远程节点：{{3}}。<br/><br/>从NCC启用远程节点当前无法实现。',
				warningQuestion: '您确定要使用账户{{1}} ({{2}}） XEM 的私钥启用节点<u>{{3}}</u>?<br><br>这会对 <u>{{3}}</u>这台NIS暴露您的 <span class="sublabelWarning">私钥</span>。'
			},
			closeWallet: {
				title: '关闭钱包',
				message: '您确定要关闭钱包并返回到登陆页面?'
			},
			createAccount: {
				title: '创建新帐号',
				label: '标识',
				wallet: '钱包',
				successMessage: '帐号 {{1}} {{#2}}({{2}}){{/2}} 已创建!',
				create: '创建'
			},
			showPrivateKey: {
				title: '显示账户私钥',
				message: '该操作会将账户私钥明文显示在屏幕中，请谨慎操作。如果您的电脑中有病毒软件，私钥将有可能被盗。您确认这么做吗?',
				publicKey: '公钥',
				privateKey: '私钥',
				show: '显示私钥'
			},
			showRemotePrivateKey: {
				title: '显示远程账号的私钥',
				message: '该操作会把远程账户的私钥输出在屏幕中，如果执行中有恶意软件存在，该操作有暴露私钥的风险，您确认要这样做吗？',

			},
			addAccount: {
				title: '添加一个现有帐户',
				privateKey: '帐户的私钥',
				wallet: '钱包',
				successMessage: '帐户 {{1}} {{#2}}({{2}}){{/2}} 已被添加到钱包!',
				add: '添加',
				label: '标识'
			},
			setPrimary: {
				title: '设置主账户',
				account: '帐户被设置为主账户',
				noLabel: '<span class=\'null\'>&lt;无标识&gt;</span>',
				wallet: '钱包',
				successMessage: '帐户 {{1}} {{#2}}({{2}}){{/2}} 被设置为主账户!',
				set: '设置为主账户'
			},
			changeWalletName: {
				title: '修改钱包名',
				wallet: '当前钱包名',
				newName: '新钱包名',
				successMessage: '钱包名称已成功从<em>{{1}}</em>变更为<em>{{2}}</em>',
				change: '修改'
			},
			changeWalletPassword: {
				title: '修改钱包密码',
				wallet: '钱包',
				password: '当前密码',
				newPassword: '新密码',
				confirmPassword: '确认新密码',
				successMessage: '钱包密码已经修改成功',
				change: '修改',
				passwordNotMatchTitle: '糟!',
				passwordNotMatchMessage: '您输入的密码不正确，请务必正确输入您的密码'
			},
			changeAccountLabel: {
				title: '更改帐户标识',
				label: '帐户标识',
				wallet: '帐户',
				successMessage: '帐户{{1}}现在的标识是{{2}}',
				change: '修改'
			},
			removeAccount: {
				title: '删除帐户',
				label: '帐户标识',
				wallet: '钱包',
				warning: '在你删除帐户前请确保您的帐户无剩余MEM，一经删除余额将无法恢复',
				successMessage: '帐户 {{1}} {{#2}}({{2}}){{/2}} 被删除了!',
				remove: '删除'
			},
			nisUnavailable: {
				title: 'NIS 不可用',
				message: 'NIS连接不可用。'
			},
			shutdown: {
				title: '关闭程序',
				message: '您确定要关闭NEM社区客户端?'
			},
			activateDelegated: {
				title: 'Activate Delegated Harvesting',
				wallet: '钱包',
				activate: '激活',
				warningText: '激活会花费6小时的时间 (360块)。激活操作并不会开启收获。',
				delegatedAccount: '委托账户公钥',
				builtIn: '钱包内建',

			},
			deactivateDelegated: {
				title: '取消激活委托收获',
				wallet: '钱包',
				deactivate: '停止激活',
				warningText: '解除激活会花费约6小时的时间 (360块)。'
			},
			startRemote: {
				title: '开启委托收获',
				wallet: '钱包',
				start: '开始'
			},
			stopRemote: {
				title: '停止委托收获',
				wallet: '钱包',
				stop: '停止'
			},
			logoutWarning: {
				leavePage: "您正在退出钱包。请注意能登陆本机的用户仍然可以访问该钱包，为确保无人可登录钱包，请在关闭浏览器之前点击右上方的下拉菜单执行\"关闭钱包\"菜单项。"
			},
			addContact: {
				title: '新增联系人',
				add: '新增'
			},
			editContact: {
				title: '编辑联系人',
				saveChanges: '保存修改'
			},
			removeContact: {
				title: '删除联系人',
				remove: '删除'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: '钱包已成功导入!',
			nav: {
				start: '已经 开始',
				about: '关于NEM',
				settings: '设置'
			},
			main: {
				leftTitle: '<em>NEM</em>新手?',
				leftButton: '创建新钱包',
				walletNamePlh: '您钱包的名称',
				passwordPlh: '密码',
				confirmPasswordPlh: '确认密码',
				create: '创建',
				creating: '创建中...',
				rightTitle: '已经是<em>NEM</em>用户?',
				rightButton: '打开您的钱包',
				openButton: '打开',
				walletsFound: '发现 <strong>{{1}}</strong> <em>钱包</em>',
				copyright: '由<em>Cas Cornelissen</em>摄制'
			},
			carousel: {
				items: [
					{
						title: 'NCC 加密你的钱包',
						description: '为避免XEM被盗，加密是<em>安全</em>的有效保证 &amp;。'
					},
					{
						title: '远程NEM基础设施服务',
						description: '使用一个远程NIS服务，您可以避免从零开始同步块链。',

					},
					{
						title: '委托收获',
						description: '使用委托收获，您可以在远程节点上执行收获!',

					},
					{
						title: '多重签名交互',
						description: '使用块链内置的多重签名交互保障您的XEM和资产安全。',

					},
					{
						title: '多语言支持',
						description: 'NEM用户界面支持多语言，请查看“设置"。'
					},
					{
						title: '有任何问题或反馈？',
						description: '<a href="http://forum.ournem.com">forum.ournem.com</a> | #ournem on freenode.org | Telegram',

					}
				]
			},
			about: {
				sections: [
					{
						title: 'NCC是如何工作的?',
						paragraphs: [
							'<strong>NCC</strong> 让您使用XEM时就如使用一个传统的钱包一样。',
							'<strong>NCC</strong>打开使用前需要您连接到<strong>NIS</strong> 服务器。 您可以本地同时安装<strong>NCC</strong>服务和<strong>NIS</strong>服务。',
							'也可以访问一个远程<strong>NIS</strong>。'
						],
						listItems: [
							'拥有多个钱包',
							'在一个钱包里定义多个帐户'
						]
					},
					{
						title: '什么是&#42;NIS?',
						paragraphs: [
							'负责保持<strong>NEM</strong>云存活.',
							'网络中存在越多的<strong>NIS</strong>节点，NEM的安全性就越高,',
							'<strong>NIS</strong> 是 <strong>NEM</strong> 云的接入点。'
						],
						legend: '<strong>&#42;NIS</strong> 是 <strong>NEM基础架构服务</strong>的缩写'
					}
				]
			},
			footer: {
				copyright: '&copy; 版权所有 2015. NEM 社区客户端。'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: '大约 {{1}} 天前',
			lastAccessJustNow: '当前',
			lastAccessTooltip: '上次访问时间 {{1}}',
			primary: '主账户',
			primaryShort: 'P',
			noLabel: '<无标识>',
			copiedToClipboard: '已复制地址到剪贴板!',
			actions: {
				refreshInfo: '刷新信息',
				bootLocalNode: '启用本地节点',
				changeWalletName: '修改钱包名称',
				changeWalletPassword: '修改钱包密码',
				mergeWallets: '合并钱包',
				exportWallet: '输出钱包',
				createAccount: '创建新帐号',
				createRealAccountData: '创建真实账户信息',
				verifyRealAccountData: '确认真实账户信息',
				showPrivateKey: '显示账户私钥',
				showRemotePrivateKey: '显示远程账户私钥',
				viewDetails: '查看账户细节',
				addAccount: '添加一个现有帐户',
				changeAccountLabel: '更改帐户标识',
				setPrimary: '设为主帐户',
				removeAccount: '删除帐户',
				clientInfo: '客户信息',
				closeWallet: '关闭钱包',
				closeProgram: '关闭程序',
				copyClipboard: '复制地址至剪贴板',
				copyDisabled: '复制地址需要flash支持',
				convertMultisig: '转换其他账户到多重签名'
			},
			nav: [
				'仪表板',
				'消息',
				'联系人',
				'交易',
				'收获的区块',
				'资产交换',
				'新闻',
				'应用',
				'帐户',
				'设置',
				'关闭程序',
				'命名空间和马赛克'
			],
			bootNodeWarning: '启用本地节点后，才能充分使用NCC的功能。'
		},
		dashboard: {
			assets: {
				title: '你的资产'
			},
			importance: {
				title: '重要性',
				unknown: '未知状态',
				start: '开始收获',
				harvesting: '正在收获',
				stop: '停止收获',
				description: 'NEM帐户重要性(PoI)',
				remoteHarvest: {
					title: '委托收获',
					activate: '激活委托收获',
					activating: '正在激活委托收获...',
					active: '委托收获已激活',
					deactivate: '取消激活委托收获',
					deactivating: '委托收获激活取消中...',
					startRemoteHarvesting: '开启委托收获',
					remotelyHarvesting: '远程收获',
					stopRemoteHarvesting: '停止委托收获',
					multisigInfo: '对一个账户激活或反激活委托收货需在一个共同签署人账户执行。',

				}
			},
			transactions: {
				title: '最近的交易',
				sendNem: '发送XEM',
				signMultisig: '签署',
				balance: '目前余额',
				loading: '加载中的余额',
				accountCosignatories: '多重签名账户',
				accountCosignatoriesView: '查看共同签署人',
				vestedBalance: '账户当前余额',
				syncStatus: '(现区块{{1}}{{#2}} : 估计{{3}}落后{{/2}})',
				notSynced: 'NIS可能尚未完成同步。',
				unknown: '未知',
				columns: [
					'',
					'时间',
					'发送人/收件人',
					'信息',
					'',
					'细节',
					'确认',
					'费用',
					'金额'
				],
				noMessage: '无信息',
				encrypted: '消息被加密',
				view: '查看',
				confirmationsUnknown: '未知',
				pending: '待定',
				seeAll: '查看所有交易',
				noTransactions: '无交易'
			},
			nemValue: {
				title: 'XEM 价值统计'
			},
			messages: {
				titleTooltip: '留言'
			},
			news: {
				titleTooltip: '新闻'
			},
			notAvailable: 'beta版本尚未开放该功能'
		},
		transactions: {
			title: '交易',
			sendNem: '发送 XEM',
			balance: '目前余额',
			filters: {
				confirmed: '已确认交易',
				unconfirmed: '未确认交易',
				incoming: '接受中',
				outgoing: '发送中'
			},
			table: {
				columns: [
					'',
					'时间',
					'发送人/接收人',
					'留言',
					'',
					'细节',
					'确认',
					'费用',
					'金额'
				],
				noMessage: '无留言',
				encrypted: '消息被加密',
				view: '查看',
				confirmationsUnknown: '未知',
				pending: '待定中',
				noTransactions: '无交易',
				loading: '载入更多的交易...'
			}
		},
			namespacesmosaics: {
-			title: '命名空间和马赛克',
-			newNamespace: '新建命名空间',
-			newMosaic: '新建马赛克',
-			balance: '目前余额',
-			filters: {
-				displayAll: '显示全部',
-				displayMineonly: '只显示本账户所属',
-				filterNamespace: '筛选命名空间:',
-				filterMosaic: '筛选马赛克:'
-			},
-			table: {
-				columns: [
-					'',
-					'命名空间和马赛克',
-					'创建',
-					'过期时间 (est.)'
-				],
-				loading: '命名空间和马赛克加载中...',
-				subNamespace: '子命名空间'
-			}
-		},
		harvestedBlocks: {
			title: '收获区块',
			feeEarned: '最新挖出的25个区块的报酬',
			unknown: '未知',
			table: {
				columns: [
					'高',
					'时间',
					'块难度',
					'费用'
				],
				noBlocks: '不存在已收获区块',
				loading: '查看更多'
			},
			harvesting: {
				unknown: '未知状态',
				start: '开始收获',
				harvesting: '正在收获',
				stop: '停止收获',
				remoteHarvest: {
					startRemoteHarvesting: '开启委托收获',
					stopRemoteHarvesting: '停止委托收获'
				}
			}
		},
		addressBook: {
			title: '地址簿',
			addContact: '添加联系人',
			table: {
				columns: [
					'账户地址',
					'个人标签',
					'公共标签'
				],
				noContacts: '您的地址簿中无联系人'
			},
			noLabel: '无标签',
			sendNem: '发送XEM',
			edit: '编辑',
			remove: '删除'
		},
		settings: {
			title: '设置',
			settings: [
				{
					name: '语言'
				}
			],
			save: '保存更改',
			saveSuccess: '设置已保存成功'
		}
	}
});
