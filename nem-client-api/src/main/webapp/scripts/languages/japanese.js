define({
	id: 'jp',
	name: '日本語',
	texts: {
		preferences: {
			thousandSeparator: ' ',
			decimalSeparator: '.'
		},
		faults: {
			101: 'The wallet file does not exist.',
			102: 'ウォレットが作成できませんでした。',
			103: 'Wallet file is corrupt. Please recover your wallet from a backup.',
			104: 'The provided password for the wallet is not correct.',
			105: 'No password was provided for the wallet.',
			106: 'ウォレットを開く前に、ウォレットのロックを解いてください. ウォレットにパスワードを入力することでアクセスすることができます。',
			107: 'ウォレットにはこのアカウントはありません。',
			108: 'このアカウントは削除することができません。おそらく、アカウント残高がゼロではないか、そのアカウントがプライマリーアカウント（削除不可なアカウント）だからです。',
			109: '同名のウォレットがすでに存在します。他の名前にしてください。',
			110: 'ウォレットにはこのアカウントはもうすでに存在しています。',
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
			202: '相手が送金及びメッセージを送信されていない為、このメッセージを暗号化して送れない。',
			203: 'The account cannot be converted because not all cosignatories are known. They either need to be in the same wallet or have made at least one transaction.',
			305: 'The NEM Infrastructure Server (NIS) is not available.\n\nTry to restart the NEM software.\n\nIf you are using a remote NIS, check your configured host for typing errors or use another remote NIS.',
			306: '開発者が考えられなかったエラーが発生しまして、申し訳ありません。もう一度実行して、問題が再び発生したら場合、NIS/NCCのサイトにエラーリポートを書いてください。',
			400: 'パラメーターがないか間違っている。',
			401: 'This operation cannot be completed because it might leak a private key by sending it to a remote NIS.',
			404: 'リクエストされたリソースが見つかれなかった。',
			500: 'Failed to save configuration file.',
			600: 'NCCはNISサーバーがNEMクラウドからトランザクション(取引)履歴を送受信するために起動しておく必要があります。ローカルノードを起動するためにNCCメニューエントリを使用してください。',
			601: 'NISノードはすでに起動しています。NISは複数起動することができません。',
			602: 'Almost ready. NEM Infrastructure Server is currently loading blocks. Wallet will be functional when db is fully loaded.',
			699: 'Maximum number of harvesters allowed on server has been reached.',
			700: '入力されたアカウントがハーベストのための基準を満たしていません。その基準はそのアカウントにあるXEMの量が関係しています。ハーベストは少なくとも10000XEMから始めることができます。',
			701: '提供期限が過ぎています。期限は1日の間です。',
			702: '提供期限はまだ先です。期間は1日の間です。',
			703: 'Your account does not have the right balance to make this transaction.',
			704: '入力されたメッセージテキストは、NEMを経由して送信するには長すぎます。メッセージを短くしてください。',
			705: 'その取引のハッシュはすでにデータベースの未検証取引の中に存在しています。',
			706: 'トランザクション(取引)の電子署名の正当性を確認できませんでした。',
			707: 'トランザクション(取引)IDのタイムスタンプが古すすぎます。',
			708: 'トランザクション(取引)のタイムスタンプが先すぎます',
			709: '不明なアカウントです。アカウントはNEMクラウド内で共有されている少なくとも1つのトランザクション(取引)に記載されている必要がある。(送信側、受信側どちらでも良い)',
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
			901: 'オフラインモードに変換する際にエラーが発生しました。',
			1000: '入力したプライベートキーとパブリックキーは合っていません。',
			1001: '入力したパブリックキーとNEMアドレスは合っていません。',
			1002: 'The address does not belong to the main network.'
		},
		common: {
			success: '成功!',
			unknown: '不明な状態',
			unknownMessage: 'Ncc did not get response in a timely manner. Transaction might have been sent to the network.<br /><br />Please, check transactions before attempting to make it again.',
			appStatus: {
				nccUnknown: 'NCCは状態不明',
				nccUnavailable: 'NCCは無効',
				nccStarting: 'NCC開始中・・・',
				nisUnknown: 'NISは状態不明',
				nisUnavailable: 'NISは無効',
				nisStarting: 'NIS開始中',
				notBooted: 'NISを起動する必要があります。ウオレットを開き、ポップアップダイアログでローカルノードを起動し、またはローカルノードの自動起動設定を行って下さい。',
				loading: 'Loading blocks from db, at block: ',
				booting: 'NIS起動中・・・',
				nisInfoNotAvailable: 'NIS情報はまだ取得不可能。NIS情報を取得しようとしています・・・',
				synchronizing: 'NISはブロック{{1}}を同期中で、約{{2}}個ブロックを遅れています。',
				daysBehind: {
					0: '１日以下',
					1: '１日',
					many: '{{1}}日'
				},
				synchronized: 'NISは同期されました！',
				noRemoteNisAvailable: 'No remote NIS found in the network, disconnected from internet?'
			},
			addressBook: 'Address book',
			password: 'パスワード',
			passwordValidation: 'Password must not be blank',
			address: 'アドレス',
			privateLabel: 'プライベートラベル',
			publicLabel: 'Public label',
			noCharge: 'Current account will <b>NOT</b> be charged any fees, multisig account covers them',
			fee: '手数料',
			justUse: 'Just use',
			dueBy: 'Due by',
			hours: 'hour(s)',
			hoursDue: 'Due by (hours)',
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
			pending: '未処理（未検証）の取引',
			outgoing: '出金',
			incoming: '入金',
			self: 'セルフトランザクション',
			importance: 'Importance transaction',
			modification: 'Aggregate Modification of Multisig'
		},
		modals: {
			error: {
				title: 'おっと…',
				caption: 'エラー{{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'はい',
				no: 'いいえ'
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
				title: '設定',
				language: {
					label: '言語'
				},
				remoteServer: {
					tabTitle: 'リモートサーバー',
					protocol: 'プロトコル',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'ホスト名',
					port: 'ポート番号',
					defaultPort: 'Use default port.'
				},
				autoBoot: {
					tabTitle: '自動起動',
					name: 'ノード名',
					account: 'アカウント',
					primaryAccount: '主要アカウント',
					auto: 'ウォレットを開く時に自動起動'
				},
				save: '保存',
				saveSuccess: '設定は保存されました。'
			},
			multisig: {
				title: 'Convert account to multisig',
				multisigAccount: 'Multisig account',
				cosignatories: 'Cosignatories\' addresses',
				labelDesc: 'このアカウントのラベルは {{1}}',
				nullLabelDesc: 'このアカウントにラベルはありません。',
				addCosignatory: '+ Add Cosignatory',
				cancel: 'Cancel',
				convert: 'Convert',
				fee: '手数料',
				feeValidation: 'Fee must not be less than the minimum fee',
				useMinimumFee: 'Use minimum fee',
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
					to: '受取先',
					amount: '残高',
					fee: 'Inner Fee',
					deadline: 'Deadline'
				},
				multisigFees: 'Multisig Fees',
				multisigTotal: 'Total',
				sender: 'Cosignatory',
				fee: '手数料',
				feeValidation: 'Fee must not be less than the minimum fee',
				useMinimumFee: 'Use minimum fee',
				password: 'パスワード',
				passwordValidation: 'Password must not be blank',
				send: '送る',
				cancel: 'Cancel',
				sending: 'Sending...',
				successMessage: '送信に成功しました!!',
				txConfirm: {
					title: 'Confirm Multisig Transaction',
					message: 'メッセージ',
					encrypted: 'メッセージを暗号させた',
					noMessage: 'メッセージなし',

				}
			},
			sendNem: {
				title: 'XEMを送信する',
				sender: '送信元',
				thisAccount: 'This account',
				labelDesc: 'このアカウントのラベルは {{1}}',
				nullLabelDesc: 'このアカウントにラベルはありません。',
				amount: '金額',
				recipient: '相手のアカウント',
				recipientValidation: 'Account addresses must be 40 character long excluding dashes',
				message: 'メッセージ',
				encrypt: 'メッセージを暗号化する。',
				fee: '手数料',
				multisigFee: 'Multisig fee',
				feeValidation: 'Fee must not be less than the minimum fee',
				useMinimumFee: 'Use minimum fee',
				password: 'パスワード',
				passwordValidation: 'Password must not be blank',
				send: '送る',
				cancel: 'Cancel',
				sending: '送信中…',
				successMessage: '送信に成功しました!!',
				txConfirm: {
					title: 'Confirm Transaction',
					amount: 'Amount',
					to: 'To',
					total: 'Total',
					message: 'Message',
					encrypted: 'Message is encrypted',
					noMessage: 'No message',
					cancel: 'Cancel',
					confirm: 'Confirm',
					sending: 'Sending...'
				},
				notBootedWarning: {
					title: 'ノードが起動していません!',
					message: 'NEMを送信する前に、ローカルノードを起動する必要があります。'
				},
				bootingWarning: {
					title: 'ノードは起動中',
					message: 'Please wait until booting process is done to send your transaction.'
				},
				loadingWarning: {
					title: 'Loading db'
				}
			},
			clientInfo: {
				title: 'クライアント情報',
				ncc: 'NEM Community Client - NCC',
				signer: '著名者',
				remoteServer: 'リモートサーバー',
				local: 'ローカル',
				nis: 'NEM Infrastructure Server - NIS',
				sync: '同期完了',
				notSync: '同期されていません',
				notConnected: 'NEMクラウドに繋がっていません',
				loading: '読み込み中…'
			},
			transactionDetails: {
				title: 'トランザクション(取引)の詳細',
				id: 'ID',
				hash: 'ハッシュ',
				type: 'トランザクションのタイプ',
				direction: 'トランザクションの方向',
				pending: '処理中',
				outgoing: '送金',
				incoming: '入金',
				self: '自分',
				sender: '送信元',
				multisigAccount: '複数調印のみアカウント',
				issuer: 'Issuer',
				recipient: '受取先',
				remote: 'Remote',
				multisigMessage: '調印あり',
				message: 'メッセージ',
				noMessage: 'メッセージなし',
				encrypted: '暗号化されたメッセージ',
				time: 'タイムスタンプ',
				confirmations: '承認数',
				confirmationsUnknown: '承認数不明',
				amount: '量',
				fee: '手数料',
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
				title: 'ローカルノードを起動する',
				account: 'ローカルノードを起動するためのアカウント',
				noLabel: '<span class=\"null\">&lt;ラベルなし&gt;</span>',
				wallet: 'ウォレット',
				node: 'ノード名前',
				boot: '起動',
				booting: '起動中…',
				warning: 'Boot node warning',
				warningText: 'You\'re trying to boot a node <u>{{2}}</u><br/><br/>Booting remote node is currently impossible from within NCC.',
				warningStatement: 'You have auto-boot set to true and you\'re using remote node {{3}}.<br/><br/>Booting remote node is currently impossible from within NCC',
				warningQuestion: 'Are you sure you want to boot node <u>{{3}}</u> using private key of account {{1}} ({{2}} XEM)?<br><br>This will reveal this account\'s <span class="sublabelWarning">private key</span> to node: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'ウォレットを閉じます',
				message: 'ウォレットを終了して、最初のページに戻りますがよろしいですか？'
			},
			createAccount: {
				title: '新しいアカウントを作成する',
				label: 'プライベートラベル',
				wallet: 'ウォレット',
				password: 'ウォレットのパスワード',
				successMessage: 'アカウント: {{1}} {{#2}}({{2}}){{/2}} が作成されました。',
				create: '作成'
			},
			showPrivateKey: {
				title: 'Show Account\'s PRIVATE Key',
				message: 'This will display account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',
				publicKey: 'パブリックキー',
				privateKey: 'プライベートキー',
				show: 'Show the key'
			},
			showRemotePrivateKey: {
				title: 'Show Remote Account\'s PRIVATE Key',
				message: 'This will display remote account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',

			},
			addAccount: {
				title: '既存のアカウントを追加します。',
				privateKey: 'アカウントのプライベートキー',
				wallet: 'ウォレット',
				password: 'ウォレットパスワード',
				successMessage: 'アカウント: {{1}} {{#2}}({{2}}){{/2}} はウォレットに追加されました!',
				add: '追加',
				label: 'プライベートラベル'
			},
			setPrimary: {
				title: 'プライマリーアカウントを設定',
				account: 'プライマリーとして設定するアカウント',
				noLabel: '<span class=\"null\">&lt;ラベルなし&gt;</span>',
				wallet: 'ウォレット',
				password: 'ウォレットのパスワード',
				successMessage: 'アカウント: {{1}} {{#2}}({{2}}){{/2}} はプライマリーに設定されました!',
				set: 'プライマリに設定'
			},
			changeWalletName: {
				title: 'ウォレットの名前の変更する',
				wallet: '現在のウォレットの名前',
				newName: '新しいウォレットの名前',
				password: 'ウォレットのパスワード',
				successMessage: 'ウォレットの名前が <em>{{1}}</em> から <em>{{2}}</em> に変更されました。',
				change: '変更'
			},
			changeWalletPassword: {
				title: 'ウォレットパスワードを変更する',
				wallet: 'ウォレット',
				password: '現在のパスワード',
				newPassword: '新しいパスワード',
				confirmPassword: '新しいパスワードの再入力',
				successMessage: 'ウォレットパスワードを変更しました。',
				change: '変更',
				passwordNotMatchTitle: 'おっと…',
				passwordNotMatchMessage: 'あなたが入力したパスワードが一致しません。 パスワードを再入力してください。'
			},
			changeAccountLabel: {
				title: 'アカウントのラベルを変更する',
				label: 'アカウントラベル',
				wallet: 'ウォレット',
				password: 'ウォレットのパスワード',
				successMessage: 'アカウント: {{1}} は {{2}} に変更されました。',
				change: '変更'
			},
			removeAccount: {
				title: 'アカウントを削除',
				account: 'アカウント',
				label: 'アカウントラベル',
				wallet: 'ウォレット',
				password: 'ウォレットのパスワード',
				warning: 'アカウントを削除する前にXEMが残っていないか確認してください。削除が完了したら、一旦削除したXEMは復元できません。',
				successMessage: 'アカウント: {{1}} {{#2}}({{2}}){{/2}} は削除されました。',
				remove: '削除'
			},
			nisUnavailable: {
				title: 'NISを使用できません。',
				message: 'NISから切断されました。接続を待っています。'
			},
			shutdown: {
				title: 'ウォレットを終了',
				message: 'NEM Community Clientを閉じますか。'
			},
			activateRemote: {
				title: 'Activate Delegated Harvesting',
				wallet: 'ウォレット',
				account: 'アカウント',
				password: 'ウォレットのパスワード',
				activate: 'Activate',
				warning: 'Warning',
				warningText: 'Activation will take 6 hours (360 blocks). Activation will NOT start harvesting automatically.'
			},
			deactivateRemote: {
				title: 'Deactivate Delegated Harvesting',
				wallet: 'ウォレット',
				account: 'アカウント',
				password: 'ウォレットのパスワード',
				deactivate: 'Deactivate',
				warning: 'Warning',
				warningText: 'Deactivation will take 6 hours (360 blocks).'
			},
			startRemote: {
				title: 'Start Delegated Harvesting',
				wallet: 'ウォレット',
				account: 'アカウント',
				password: 'ウォレットのパスワード',
				start: '開始'
			},
			stopRemote: {
				title: 'Stop Delegated Harvesting',
				wallet: 'ウォレット',
				account: 'アカウント',
				password: 'ウォレットのパスワード',
				stop: '停止'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer. To prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away."
			},
			addContact: {
				title: '新規連絡先',
				add: '追加'
			},
			editContact: {
				title: '連絡先を編集',
				saveChanges: '変更を保存する'
			},
			removeContact: {
				title: '連絡先を削除',
				remove: '削除'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'ウォレットのインポートに成功しました。',
			nav: {
				start: '始め方',
				about: 'NEMについて',
				settings: '設定'
			},
			main: {
				leftTitle: '<em>NEM</em>は初めてですか?',
				leftButton: '新しいウォレットを作成する',
				walletNamePlh: 'あなたのウォレットの名前',
				passwordPlh: 'パスワード',
				confirmPasswordPlh: 'Confirm password',
				create: '作成',
				creating: 'Creating...',
				rightTitle: 'すでに<em>NEM</em>のアカウントを持っていますか?',
				rightButton: 'ウォレットを開く',
				openButton: '開く',
				walletsFound: ' <em>ウォレット:</em><strong>{{1}}</strong> が見つかりました。',
				copyright: '撮影者：<em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'あなたのウォレットをNCC暗号化する。',
						description: '<em>セキュリティ</em> はあなたのXEMの資産を盗難から守る上で非常に&amp;重要です。 '
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
						title: 'どの様にNCCは動いている?',
						paragraphs: [
							'<strong>NCC</strong> では一般的なウォレットでのNEMやその他の財産へのアクセスができるようになります。',
							'<strong>NCC</strong> サーバーは動作するために <strong>NIS</strong> サーバーへの接続を必要とします。標準ではローカルサーバーを起動します。 (ローカルサーバーは<strong>NCC</strong>と一緒にインストールされています。)',
							'また、遠隔で<strong>NIS</strong>へのアクセスを作成することもできます。.'
						],
						listItems: [
							'複数のウォレットを持っている',
							'複数のウォレットのアカウントを決める'
						]
					},
					{
						title: '&#42;NISとは?',
						paragraphs: [
							'このコンポーネント(NEMの部品の1つ) は<strong>NEM</strong> クラウドを維持するものです。',
							'The more <strong>NIS</strong> there are in the network, the better the security.,',
							'<strong>NIS</strong> は <strong>NEM</strong> クラウドにアクセスする際の中継所となります。'
						],
						legend: '<strong>&#42;NIS</strong> は <strong>NEM のインフラとして機能しています。</strong>'
					}
				]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: '約 {{1}} 日前',
			lastAccessJustNow: '現在',
			lastAccessTooltip: '最後のアクセスは {{1}}',
			primary: '主なウォレット',
			primaryShort: '主',
			noLabel: '<ラベルなし>',
			copiedToClipboard: 'アドレスがクリップボードにコピーされました。',
			actions: {
				refreshInfo: '更新する',
				bootLocalNode: 'ローカルノードを起動する',
				changeWalletName: 'ウォレットの名前を変更する',
				changeWalletPassword: 'ウォレットパスワードを変更する',
				mergeWallets: 'ウォレットを統合する',
				exportWallet: 'ウォレットをバックアップする',
				createAccount: '新しいアカウントを作成する',
				createRealAccountData: '実際のアカウントデータを作成する',
				verifyRealAccountData: '実際のアカウントデータを確認する',
				showPrivateKey: 'Show Account\'s PRIVATE key',
				showRemotePrivateKey: 'Show Remote Account\'s PRIVATE key',
				viewDetails: 'View Account Details',
				addAccount: '既存のアカウントを追加する',
				changeAccountLabel: 'アカウントラベルを変更する',
				setPrimary: 'プライマリーアカウントに設定する',
				removeAccount: 'アカウントを削除する',
				clientInfo: 'クライアント情報',
				closeWallet: 'ウォレットを閉じる',
				closeProgram: '終了する',
				copyClipboard: 'アドレスをクリップボードにコピーする',
				copyDisabled: 'Copying an address requires flash',
				convertMultisig: 'Convert other account to multisig'
			},
			nav: [
				'ダッシュボード',
				'メッセージ',
				'Address Book',
				'トランザクション(取引)',
				'ハーベストされたブロック',
				'残高のやりとり',
				'ニュース',
				'アプリケーション',
				'アカウント',
				'設定',
				'終了する'
			],
			bootNodeWarning: 'NCCの全ての機能を利用するためには、ローカルノードを起動する必要があります。'
		},
		dashboard: {
			assets: {
				title: 'あなたの残高'
			},
			importance: {
				title: '重要なスコア',
				unknown: '不明な状態',
				start: 'ハーベスティングを開始する',
				harvesting: 'ハーベスティング中…',
				stop: 'ハーベスティングを中断する',
				description: 'NEMクラウドのアカウントの重要性',
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
				title: '直近の取引',
				sendNem: 'XEMの送金',
				signMultisig: '調印する',
				balance: '現在の残高',
				loading: 'Loading balance',
				accountCosignatories: 'Multisig account',
				accountCosignatoriesView: 'view cosignatories',
				vestedBalance: 'Vested Balance',
				syncStatus: '(現在同期しているブロック: {{1}}{{#2}} 推定で {{3}} 日前の取引{{/2}})',
				notSynced: 'might be inaccurate, NIS not synchronized yet',
				unknown: '不明',
				columns: [
					'',
					'時間',
					'送信者/受信者',
					'メッセージ',
					'',
					'詳細',
					'承認数',
					'手数料',
					'残高'
				],
				noMessage: 'メッセージはありません',
				encrypted: 'メッセージは暗号化されています。',
				view: '表示',
				confirmationsUnknown: '不明',
				pending: '未処理（未検証）',
				seeAll: 'すべてのトランザクション(取引)を見る',
				noTransactions: 'まだ取引は行われていません。'
			},
			nemValue: {
				title: 'XEMの統計'
			},
			messages: {
				titleTooltip: 'メッセージ'
			},
			news: {
				titleTooltip: 'ニュース'
			},
			notAvailable: 'ベータ版ではまだ利用できません。'
		},
		transactions: {
			title: '取引',
			sendNem: 'XEMを送金する',
			balance: '現在の残高',
			filters: {
				confirmed: '検証済',
				unconfirmed: '未検証',
				incoming: '入金',
				outgoing: '出金'
			},
			table: {
				columns: [
					'',
					'時間',
					'送信者/受信者',
					'メッセージ',
					'',
					'詳細',
					'承認数',
					'手数料',
					'残高'
				],
				noMessage: 'メッセージなし',
				encrypted: 'メッセージを暗号させた',
				view: '提示',
				confirmationsUnknown: '不明',
				pending: '未定',
				noTransactions: 'まだ取引は行われていません。',
				loading: '過去のトランザクションを見る'
			}
		},
		harvestedBlocks: {
			title: 'ハーベストされたブロック',
			feeEarned: '現在のブロックから25ブロック前から発生する収入',
			unknown: '不明',
			table: {
				columns: [
					'ブロック番号',
					'時間',
					'Block difficulty',
					'手数料'
				],
				noBlocks: 'ハーベストされたブロックではありません。 ',
				loading: 'ハーベストされたブロックをロード中・・・'
			},
			harvesting: {
				unknown: '不明な状態',
				start: 'ハーベスティングを開始する',
				harvesting: 'ハーベスティング',
				stop: 'ハーベスティングを停止する',
				remoteHarvest: {
					startRemoteHarvesting: 'Start delegated harvesting',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			}
		},
		addressBook: {
			title: '連絡先',
			addContact: '新規連絡先',
			table: {
				columns: [
					'NEMアドレス',
					'非公開ラベル',
					'一般公開ラベル'
				],
				noContacts: '連絡先無し'
			},
			noLabel: 'ラベル無し',
			sendNem: 'XEMを送金する',
			edit: '編集',
			remove: '削除'
		},
		settings: {
			title: '設定',
			settings: [
				{
					name: '言語'
				}
			],
			save: '変更を保存する',
			saveSuccess: '変更の保存に成功しました'
		}
	}
});
