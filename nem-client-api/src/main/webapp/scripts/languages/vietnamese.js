define({
	id: 'vi',
	name: 'Tiếng Việt',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: ','
		},
		faults: {
			101: 'The wallet file does not exist.',
			102: 'Ví của bạn chưa được tạo.',
			103: 'Wallet file is corrupt. Please recover your wallet from a backup.',
			104: 'The provided password for the wallet is not correct.',
			105: 'No password was provided for the wallet.',
			106: 'Trước khi bạn có thể làm việc với một chiếc ví, nó phải được mở. Để chắc chắn rằng bạn có quyền truy cập vào ví, bạn phải cung cấp mật khẩu cho ví đó.',
			107: 'Ví không chứa tài khoản này',
			108: 'Tài khoản không thể bị xoá. Có vẻ bởi vì tài khoản vẫn còn số dư lón hơn 0 XEM hoặc tài khoản bạn đang cố gắng xoá là tài khoản chính.',
			109: 'Một ví khác có cùng tên đã tồn tại. Hãy chọn một cái tên khác.',
			110: 'Tài khoản này đã có trong ví rồi.',
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
			202: 'Không thể gửi thông điệp mã hoá bởi vì người nhận chưa từng thực hiện một giao dịch trước đây.',
			203: 'The account cannot be converted because not all cosignatories are known. They either need to be in the same wallet or have made at least one transaction.',
			305: 'The NEM Infrastructure Server (NIS) is not available.\n\nTry to restart the NEM software.\n\nIf you are using a remote NIS, check your configured host for typing errors or use another remote NIS.',
			306: 'Một lỗi nằm ngoài dự tính của nhóm phát triển đã xảy ra. Xin lỗi bạn vì điều này, có thể thử lại sẽ có tác dụng. Nếu không, hãy tạo một issue trong cộng đồng NIS/NCC của NEM.',
			400: 'Một tham số nào đó bị thiếu hoặc không hợp lệ.',
			401: 'Tác vụ này không thể hoàn thành vì khoá bí mật có thể sẽ bị lộ khi được gửi tới một NIS từ xa.',
			404: 'Không tìm thấy tài nguyên được yêu cầu.',
			500: 'Lưu file cấu hình thất bại.',
			600: 'NCC yêu cầu máy chủ NIS phải được boot để gửi và nhận các giao dịch từ NEM cloud. Hãy dùng thực đơn của NCC để boot node cục bộ.',
			601: 'NIS node đã được boot rồi. Không thể boot NIS thêm một lần nữa.',
			602: 'Almost ready. NEM Infrastructure Server is currently loading blocks. Wallet will be functional when db is fully loaded.',
			699: 'Maximum number of harvesters allowed on server has been reached.',
			700: 'Tài khoản được cung cấp không thoả mãn các tiêu chí cơ bản để được thu hoạch. Phần lớn liên quan tới lượng XEM có trong tài khoản. Việc thu hoạch có thể bắt đầu với ít nhất 10000 XEM.',
			701: 'Deadline được cung cấp đã trôi qua.',
			702: 'Deadline được cung cấp quá xa trong tương lai.',
			703: 'Your account does not have the right balance to make this transaction.',
			704: 'Đoạn thông điệp được cung cấp quá lớn để gửi qua NEM. Hãy cố gắng giảm độ dài của thông điệp mà bạn gửi.',
			705: 'Hash của giao dịch đã tồn tại trong cơ sở dữ liệu hoặc trong danh sách những giao dịch chưa được xác nhận.',
			706: 'Không thể xác nhận chữ ký của giao dịch.',
			707: 'Mốc thời gian của giao dịch quá xa trong quá khứ.',
			708: 'Mốc thời gian của giao dịch quá xa về tương lai.',
			709: 'Tài khoản không được biết đến. Một tài khoản cần phải tham gia vào ít nhất một giao dịch (là người gửi hoặc người nhận) để được mạng lưới biết đến.',
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
			901: 'Đã xảy ra lỗi trong lúc cài đặt chế độ offline.',
			1000: 'Khoá bí mật và khoá công khai mà bạn vừa cung cấp không khớp với nhau.',
			1001: 'Khoá công khai và địa chỉ mà bạn vừa cung cấp không khớp với nhau.',
			1002: 'Địa chỉ không thuộc về mạng lưới chính.'
		},
		common: {
			success: 'Thành công',
			unknown: 'Không rõ trạng thái',
			unknownMessage: 'Ncc did not get response in a timely manner. Transaction might have been sent to the network.<br /><br />Please, check transactions before attempting to make it again.',
			appStatus: {
				nccUnknown: 'Không rõ trạng thái của NCC',
				nccUnavailable: 'Mất kết nối với NCC',
				nccStarting: 'NCC đang khởi động...',
				nisUnknown: 'Không rõ trạng thái của NIS',
				nisUnavailable: 'Mất kết nối với NIS',
				nisStarting: 'NIS đang khởi động...',
				notBooted: 'NIS cần phải được boot. Hãy mở ví của bạn và boot node cục bộ bằng hộp thoại hiện ra hoặc đặt cấu hình thiết lập tự động boot.',
				loading: 'Loading blocks from db, at block: ',
				booting: 'Đang boot NIS...',
				nisInfoNotAvailable: 'Thông tin về NIS chưa sẵn sàng. Đang truy xuất thông tin về NIS...',
				synchronizing: 'NIS đang đồng bộ hoá. Đang ở block {{1}}, trễ khoảng {{2}}.',
				daysBehind: {
					0: 'ít hơn 1 ngày',
					1: '1 ngày',
					many: '{{1}} ngày'
				},
				synchronized: 'NIS đã được đồng bộ!',
				noRemoteNisAvailable: 'No remote NIS found in the network, disconnected from internet?'
			},
			addressBook: 'Address book',
			password: 'Mật khẩu',
			passwordValidation: 'Mật khẩu không được để trống',
			address: 'Địa chỉ',
			privateLabel: 'Nhãn cá nhân',
			publicLabel: 'Public label',
			noCharge: 'Current account will <b>NOT</b> be charged any fees, multisig account covers them',
			fee: 'Phí',
			justUse: 'Just use',
			dueBy: 'Hết hạn',
			hours: 'giờ',
			hoursDue: 'Hết hạn sau (giờ)',
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
			pending: 'Giao dịch đang chờ xác nhận',
			outgoing: 'Giao dịch gửi đi',
			incoming: 'Giao dịch gửi đến',
			self: 'Giao dịch tự gửi',
			importance: 'Importance transaction',
			modification: 'Aggregate Modification of Multisig'
		},
		modals: {
			error: {
				title: 'Ui chà!',
				caption: 'LỖI {{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Có',
				no: 'Không'
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
				title: 'Thiết lập',
				language: {
					label: 'Ngôn ngữ'
				},
				remoteServer: {
					tabTitle: 'Server từ xa',
					protocol: 'Giao thức',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Cổng',
					defaultPort: 'Use default port.'
				},
				autoBoot: {
					tabTitle: 'Tự boot node',
					name: 'Tên node',
					account: 'Tài khoản',
					primaryAccount: 'Tài khoản chính',
					auto: 'Tự động boot node khi ví được mở'
				},
				save: 'Lưu',
				saveSuccess: 'Thiết lập đã được lưu thành công'
			},
			multisig: {
				title: 'Convert account to multisig',
				multisigAccount: 'Multisig account',
				cosignatories: 'Cosignatories\' addresses',
				labelDesc: 'Tài khoản này được dán nhãn là {{1}}',
				nullLabelDesc: 'Tài khoản này không được dán nhãn',
				addCosignatory: '+ Add Cosignatory',
				cancel: 'Huỷ',
				convert: 'Convert',
				fee: 'Phí',
				feeValidation: 'Phí không được thấp hơn phí tối thiểu',
				useMinimumFee: 'Sử dụng phí tối thiểu',
				txConfirm: {
					title: 'Confirm Conversion to Multisig Account',
					total: 'Tổng cộng',

				},
				warning: 'Multisig account is on the list of cosignatories. This will result in locking down the account cutting off access to the fund. Most likely you <b>DO NOT</b> want to do that.'
			},
			signMultisig: {
				title: 'Sign multisig transaction',
				original: {
					from: 'Multisig account',
					to: 'Người nhận',
					amount: 'Số lượng',
					fee: 'Inner Fee',
					deadline: 'Deadline'
				},
				multisigFees: 'Multisig Fees',
				multisigTotal: 'Tổng cộng',
				sender: 'Cosignatory',
				fee: 'Phí',
				feeValidation: 'Phí không được thấp hơn phí tối thiểu',
				useMinimumFee: 'Sử dụng phí tối thiểu',
				password: 'Mật khẩu',
				passwordValidation: 'Mật khẩu không được để trống',
				send: 'Gửi',
				cancel: 'Huỷ',
				sending: 'Đang gửi...',
				successMessage: 'Giao dịch đã được gửi đi thành công!',
				txConfirm: {
					title: 'Confirm Multisig Transaction',
					message: 'Thông điệp',
					encrypted: 'Thông điệp được mã hoá',
					noMessage: 'Không có',

				}
			},
			sendNem: {
				title: 'Gửi XEM',
				sender: 'Người gửi',
				thisAccount: 'This account',
				labelDesc: 'Tài khoản này được dán nhãn là {{1}}',
				nullLabelDesc: 'Tài khoản này không được dán nhãn',
				amount: 'Số lượng',
				recipient: 'Người nhận',
				recipientValidation: 'Địa chỉ tài khoản phải có đúng 40 ký tự trừ các dấu gạch ngang',
				message: 'Thông điệp',
				encrypt: 'Mã hoá thông điệp',
				fee: 'Phí',
				multisigFee: 'Multisig fee',
				feeValidation: 'Phí không được thấp hơn phí tối thiểu',
				useMinimumFee: 'Sử dụng phí tối thiểu',
				password: 'Mật khẩu',
				passwordValidation: 'Mật khẩu không được để trống',
				send: 'Gửi',
				cancel: 'Huỷ',
				sending: 'Đang gửi...',
				successMessage: 'Giao dịch đã được gửi đi thành công!',
				txConfirm: {
					title: 'Xác nhận giao dịch',
					amount: 'Số lượng',
					to: 'Tới',
					total: 'Tổng cộng',
					message: 'Thông điệp',
					encrypted: 'Thông điệp được mã hoá',
					noMessage: 'Không có thông điệp',
					cancel: 'Huỷ',
					confirm: 'Xác nhận',
					sending: 'Đang gửi...'
				},
				notBootedWarning: {
					title: 'Node chưa được boot!',
					message: 'Node cục bộ cần phải được boot trước khi bạn có thể gửi XEM đi!'
				},
				bootingWarning: {
					title: 'Node đang được boot',
					message: 'Xin hãy đợi cho quá trình boot hoàn thành để gửi giao dịch của bạn.'
				},
				loadingWarning: {
					title: 'Loading db'
				}
			},
			clientInfo: {
				title: 'Thông tin client',
				ncc: 'NEM Community Client - NCC',
				signer: 'Chữ ký',
				remoteServer: 'Máy chủ từ xa',
				local: 'Cục bộ',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Đồng bộ',
				notSync: 'Không đồng bộ',
				notConnected: 'Không kết nối tới NEM Cloud',
				loading: 'Đang tải...'
			},
			transactionDetails: {
				title: 'Chi tiết giao dịch',
				id: 'ID',
				hash: 'Hash',
				type: 'Loại giao dịch',
				direction: 'Transaction Direction',
				pending: 'Đang chờ xác nhận',
				outgoing: 'Gửi đi',
				incoming: 'Gửi đến',
				self: 'Tự gửi',
				sender: 'Người gửi',
				multisigAccount: 'Multisig Account',
				issuer: 'Issuer',
				recipient: 'Người nhận',
				remote: 'Remote',
				multisigMessage: 'Signatures present',
				message: 'Thông điệp',
				noMessage: 'Không có thông điệp nào',
				encrypted: 'Thông điệp được mã hoá',
				time: 'Mốc thời gian',
				confirmations: 'Số xác nhận',
				confirmationsUnknown: 'Không rõ',
				amount: 'Số lượng',
				fee: 'Phí',
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
				title: 'Boot node cục bộ',
				account: 'Tài khoản để boot node cục bộ',
				noLabel: '<span class=\"null\">&lt;Không có nhãn&gt;</span>',
				wallet: 'Ví',
				node: 'Tên node',
				boot: 'Boot',
				booting: 'Đang boot...',
				warning: 'Boot node warning',
				warningText: 'You\'re trying to boot a node <u>{{2}}</u><br/><br/>Booting remote node is currently impossible from within NCC.',
				warningStatement: 'You have auto-boot set to true and you\'re using remote node {{3}}.<br/><br/>Booting remote node is currently impossible from within NCC',
				warningQuestion: 'Are you sure you want to boot node <u>{{3}}</u> using private key of account {{1}} ({{2}} XEM)?<br><br>This will reveal this account\'s <span class="sublabelWarning">private key</span> to node: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Đóng ví',
				message: 'Bạn có chắc bạn muốn đóng ví của mình và trở về trang chủ?'
			},
			createAccount: {
				title: 'Tạo tài khoản mới',
				label: 'Nhãn cá nhân',
				wallet: 'Ví',
				password: 'Mật khẩu ví',
				successMessage: 'Tài khoản {{1}} {{#2}}({{2}}){{/2}} đã được tạo!',
				create: 'Tạo'
			},
			showPrivateKey: {
				title: 'Show Account\'s PRIVATE Key',
				message: 'This will display account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',
				publicKey: 'Khoá công khai',
				privateKey: 'Khoá bí mật',
				show: 'Show the key'
			},
			showRemotePrivateKey: {
				title: 'Show Remote Account\'s PRIVATE Key',
				message: 'This will display remote account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',

			},
			addAccount: {
				title: 'Thêm tài khoản đã tồn tại',
				privateKey: 'Khoá bí mật',
				wallet: 'Ví',
				password: 'Mật khẩu ví',
				successMessage: 'Tài khoản {{1}} {{#2}}({{2}}){{/2}} đã được thêm vào ví!',
				add: 'Thêm',
				label: 'Nhãn'
			},
			setPrimary: {
				title: 'Đặt tài khoản chính',
				account: 'Tài khoản được đặt làm tài khoản chính',
				noLabel: '<span class=\"null\">&lt;Không có nhãn&gt;</span>',
				wallet: 'Ví',
				password: 'Mật khẩu ví',
				successMessage: 'Tài khoản {{1}} {{#2}}({{2}}){{/2}} đã được đặt làm tài khoản chính!',
				set: 'Đặt làm tài khoản chính'
			},
			changeWalletName: {
				title: 'Đổi tên ví',
				wallet: 'Tên ví hiện tại',
				newName: 'Tên ví mới',
				password: 'Mật khẩu ví',
				successMessage: 'Tên ví đã được đổi thành công từ <em>{{1}}</em> sang <em>{{2}}</em>',
				change: 'Thay đổi'
			},
			changeWalletPassword: {
				title: 'Đổi mật khẩu ví',
				wallet: 'Ví',
				password: 'Mật khẩu hiện tại',
				newPassword: 'Mật khẩu mới',
				confirmPassword: 'Xác nhận mật khẩu mới',
				successMessage: 'Mật khẩu ví đã được thay đổi thành công',
				change: 'Thay đổi',
				passwordNotMatchTitle: 'Ui chà!',
				passwordNotMatchMessage: 'Mật khẩu và mật khẩu xác nhận mà bạn nhập không khớp. Hãy chắc chắn rằng bạn gõ đúng mật khẩu mới.'
			},
			changeAccountLabel: {
				title: 'Đổi nhãn tài khoản',
				label: 'Nhãn tài khoản',
				wallet: 'Ví',
				password: 'Mật khẩu ví',
				successMessage: 'Tài khoản {{1}} giờ đây được dán nhãn là {{2}}',
				change: 'Thay đổi'
			},
			removeAccount: {
				title: 'Xoá tài khoản',
				account: 'Tài khoản',
				label: 'Nhãn tài khoản',
				wallet: 'Ví',
				password: 'Mật khẩu ví',
				warning: 'Please ensure that your account has no XEM left before you remove it, or they would be lost forever.',
				successMessage: 'Tài khoản {{1}} {{#2}}({{2}}){{/2}} đã được xoá!',
				remove: 'Xoá'
			},
			nisUnavailable: {
				title: 'Không thể kết nối với NIS',
				message: 'Mất kết nối từ NIS, đang đợi kết nối'
			},
			shutdown: {
				title: 'Đóng chương trình',
				message: 'Bạn có chắc rằng bạn muốn đóng NEM Community Client không?'
			},
			activateRemote: {
				title: 'Activate Delegated Harvesting',
				wallet: 'Ví',
				account: 'Tài khoản',
				password: 'Mật khẩu ví',
				activate: 'Kích hoạt',
				warning: 'Warning',
				warningText: 'Activation will take 6 hours (360 blocks). Activation will NOT start harvesting automatically.'
			},
			deactivateRemote: {
				title: 'Deactivate Delegated Harvesting',
				wallet: 'Ví',
				account: 'Tài khoản',
				password: 'Mật khẩu ví',
				deactivate: 'Vô hiệu hoá',
				warning: 'Warning',
				warningText: 'Deactivation will take 6 hours (360 blocks).'
			},
			startRemote: {
				title: 'Start Delegated Harvesting',
				wallet: 'Ví',
				account: 'Tài khoản',
				password: 'Mật khẩu ví',
				start: 'Bắt đầu'
			},
			stopRemote: {
				title: 'Stop Delegated Harvesting',
				wallet: 'Ví',
				account: 'Tài khoản',
				password: 'Mật khẩu ví',
				stop: 'Ngừng'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer. To prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away."
			},
			addContact: {
				title: 'Add contact',
				add: 'Thêm'
			},
			editContact: {
				title: 'Edit contact',
				saveChanges: 'Lưu thay đổi'
			},
			removeContact: {
				title: 'Remove contact',
				remove: 'Xoá'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Ví đã được nhập thành công!',
			nav: {
				start: 'Khởi đầu',
				about: 'Về NEM',
				settings: 'Thiết lập'
			},
			main: {
				leftTitle: 'Mới đến với <em>NEM</em>?',
				leftButton: 'Tạo một ví mới',
				walletNamePlh: 'Tên ví của bạn',
				passwordPlh: 'Mật khẩu',
				confirmPasswordPlh: 'Confirm password',
				create: 'Tạo',
				creating: 'Creating...',
				rightTitle: 'Đã là <em>thành viên</em>?',
				rightButton: 'Mở ví của bạn',
				openButton: 'Mở',
				walletsFound: 'Tìm thấy <strong>{{1}}</strong> <em>ví</em>',
				copyright: 'Ảnh chụp bởi <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC mã hoá ví của bạn',
						description: '<em>Bảo mật</em> là rất quan trọng với NEM để ngăn ngừa nạn trộm cắp XEM &amp; tài sản.'
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
						title: 'NCC hoạt động thế nào?',
						paragraphs: [
							'<strong>NCC</strong> cho phép bạn tiếp cận với tài sản và XEM của bạn như một chiếc ví thông thường vẫn làm. Bạn có thể',
							'<strong>NCC</strong> yêu cầu truy cập tới một <strong>NIS</strong> server để có thể hoạt động. Thôgn thường là sẽ có một server chạy trên máy bạn (được cài đặt cùng với <strong>NCC</strong>)',
							'Bạn cũng có thể cấu hình truy cập tới một máy chủ <strong>NIS</strong> từ xa.'
						],
						listItems: [
							'Có nhiều ví cùng lúc',
							'Lập ra nhiều tài khoản chứa trong một chiếc ví'
						]
					},
					{
						title: '&#42;NIS là gì?',
						paragraphs: [
							'Thành phần này chịu trách nhiệm giữ cho <strong>NEM</strong> cloud hoạt động.',
							'The more <strong>NIS</strong> there are in the network, the better the security.,',
							'<strong>NIS</strong> là điểm truy cập tới <strong>NEM</strong> cloud.'
						],
						legend: '<strong>&#42;NIS</strong> là viết tắt của <strong>NEM Infrastructure Server</strong>'
					}
				]
			},
			footer: {
				copyright: '&copy; Quyền tác giả 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Khoảng {{1}} ngày trước',
			lastAccessJustNow: 'Mới đây',
			lastAccessTooltip: 'Truy cập lần cuối từ {{1}}',
			primary: 'chính',
			primaryShort: 'C',
			noLabel: '<Không nhãn>',
			copiedToClipboard: 'Địa chỉ đã được copy vào clipboard!',
			actions: {
				refreshInfo: 'Cập nhật dữ liệu',
				bootLocalNode: 'Boot node cục bộ',
				changeWalletName: 'Đổi tên ví',
				changeWalletPassword: 'Đổi mật khẩu ví',
				mergeWallets: 'Hợp nhất nhiều ví',
				exportWallet: 'Xuất ví',
				createAccount: 'Tạo tài khoản mới',
				createRealAccountData: 'Tạo dữ liệu tài khoản thực',
				verifyRealAccountData: 'Verify real account data',
				showPrivateKey: 'Show Account\'s PRIVATE key',
				showRemotePrivateKey: 'Show Remote Account\'s PRIVATE key',
				viewDetails: 'View Account Details',
				addAccount: 'Thêm tài khoản đã tồn tại',
				changeAccountLabel: 'Đổi nhãn tài khoản',
				setPrimary: 'Đặt làm tài khoản chính',
				removeAccount: 'Xoá tài khoản',
				clientInfo: 'Thông tin client',
				closeWallet: 'Đóng ví',
				closeProgram: 'Đóng chương trình',
				copyClipboard: 'Copy địa chỉ vào clipboard',
				copyDisabled: 'Copying an address requires flash',
				convertMultisig: 'Convert other account to multisig'
			},
			nav: [
				'Bảng tin',
				'Tin nhắn',
				'Address Book',
				'Các giao dịch',
				'Block thu hoạch được',
				'Trao đổi tài sản',
				'Tin tức',
				'Ứng dụng',
				'Các tài khoản',
				'Thiết lập',
				'Đóng chương trình'
			],
			bootNodeWarning: 'Node cần phải được boot trước khi bạn có thể sử dụng đầy đủ các tính năng của NCC'
		},
		dashboard: {
			assets: {
				title: 'Tài sản của bạn'
			},
			importance: {
				title: 'Điểm tầm quan trọng',
				unknown: 'Không rõ trạng thái',
				start: 'Bắt đầu thu hoạch cục bộ',
				harvesting: 'Đang thu hoạch',
				stop: 'Ngừng thu hoạch cục bộ',
				description: 'tầm quan trọng của tài khoản với NEM cloud',
				remoteHarvest: {
					activate: 'Activate delegated harvesting',
					activating: 'Activating delegated harvesting...',
					active: 'Delegated harvesting is active',
					deactivate: 'Deactivate delegated harvesting',
					deactivating: 'Deactivating delegated harvesting...',
					startRemoteHarvesting: 'Start delegated harvesting',
					remotelyHarvesting: 'Đang thu hoạch từ xa',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			},
			transactions: {
				title: 'Các giao dịch gần đây',
				sendNem: 'Gửi XEM',
				signMultisig: 'SIGN',
				balance: 'Số dư hiện tại',
				loading: 'Loading balance',
				accountCosignatories: 'Multisig account',
				accountCosignatoriesView: 'view cosignatories',
				vestedBalance: 'Vested Balance',
				syncStatus: '(tại block {{1}}{{#2}} : chậm khoảng {{3}} ngày{{/2}})',
				notSynced: 'might be inaccurate, NIS not synchronized yet',
				unknown: 'không xác định',
				columns: [
					'',
					'Thời điểm',
					'Người gửi/nhận',
					'Thông điệp',
					'',
					'Chi tiết',
					'Số xác nhận',
					'Phí',
					'Số lượng'
				],
				noMessage: 'Không có',
				encrypted: 'Thông điệp được mã hoá',
				view: 'Xem',
				confirmationsUnknown: 'Không rõ',
				pending: 'Đang chờ xác nhận',
				seeAll: 'Xem tất cả giao dịch',
				noTransactions: 'Chưa có giao dịch nào'
			},
			nemValue: {
				title: 'Thống kê giá trị XEM'
			},
			messages: {
				titleTooltip: 'Tin nhắn'
			},
			news: {
				titleTooltip: 'Tin tức'
			},
			notAvailable: 'Chưa khả dụng trong phiên bản beta'
		},
		transactions: {
			title: 'Các giao dịch',
			sendNem: 'Gửi XEM',
			balance: 'Số dư hiện tại',
			filters: {
				confirmed: 'Đã xác nhận',
				unconfirmed: 'Chưa xác nhận',
				incoming: 'Gửi đến',
				outgoing: 'Gửi đi'
			},
			table: {
				columns: [
					'',
					'Thời điểm',
					'Người gửi/nhận',
					'Thông điệp',
					'',
					'Chi tiết',
					'Số xác nhận',
					'Phí',
					'Số lượng'
				],
				noMessage: 'Không có',
				encrypted: 'Thông điệp được mã hoá',
				view: 'Xem',
				confirmationsUnknown: 'Không rõ',
				pending: 'Đang chờ xác nhận',
				noTransactions: 'Chưa có giao dịch nào',
				loading: 'Đang tải thêm các giao dịch...'
			}
		},
		harvestedBlocks: {
			title: 'Các block thu hoạch được',
			feeEarned: 'Phí giao dịch kiếm được từ 25 block mới nhất',
			unknown: 'Không rõ',
			table: {
				columns: [
					'Chiều cao',
					'Thời điểm',
					'Block difficulty',
					'Phí'
				],
				noBlocks: 'Chưa có block nào được thu hoạch',
				loading: 'Xem các block cũ'
			},
			harvesting: {
				unknown: 'Không rõ trạng thái',
				start: 'Bắt đầu thu hoạch cục bộ',
				harvesting: 'Đang thu hoạch',
				stop: 'Ngừng thu hoạch cục bộ',
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
			sendNem: 'Gửi XEM',
			edit: 'Edit',
			remove: 'Xoá'
		},
		settings: {
			title: 'Thiết lập',
			settings: [
				{
					name: 'Ngôn ngữ'
				}
			],
			save: 'Lưu thay đổi',
			saveSuccess: 'Thiết lập đã được lưu thành công'
		}
	}
});
