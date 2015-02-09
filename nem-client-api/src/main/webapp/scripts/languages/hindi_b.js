define({
	id: 'Hn',
	name: 'हिन्दी (Hindi)',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'वॉलेट फ़ाइल मौजूद नहीं है.',
			102: 'वॉलेट नहीं बनाया गया है.',
			103: 'वॉलेट फ़ाइल अनुपयोगी है. बैकअप फ़ाइल से अपने वॉलेट को ठीक करें.',
			104: 'वॉलेट के लिए प्रदान किया गया पासवर्ड सही नहीं है.',
			105: 'वॉलेट के लिए कोई पासवर्ड प्रदान नहीं किया गया है.',
			106: 'वॉलेट खोलने के बाद हि आप इस्के साथ काम कर सक्ते हैं. वॉलेट का उपयोग करने के लिए आपको पासवर्ड प्रदान  कर्ना हे.',
			107: 'वॉलेट मे अकाउंट शामिल नहीं है.',
			108: 'अकाउंट नहीं हटाया जा सकता हे. यह संभावना है कि अकाउंट खाली नही हे या फिर आप प्राइमरी अकाउंट को हटाने की कोशिश कर रहें हें.',
			109: 'इसी नाम से एक और वॉलेट पहले से ही मौजूद है. एक अन्य नाम चुनें.',
			110: 'अकाउंट पहले से ही इस वॉलेट में हे.',
			111: 'वॉलेट का नाम एक डायरेक्टरी का नाम है.',
			112: 'वॉलेट फाइल का एक्सटेंशन गलत है.',
			113: 'वॉलेट को हटाया नहीं जा सका है.',
			121: 'अड्रेस बुक फ़ाइल मौजूद नहीं है.',
			122: 'अड्रेस बुक नहीं बनाया गया है.',
			123: 'अड्रेस बुक फ़ाइल अनुपयोगी है. एक बैकअप फ़ाइल से अपने अड्रेस बुक की वसूली कीजिए.',
			124: 'अड्रेस बुक के लिए दिया गया पासवर्ड सही नही है.',
			125: 'अड्रेस बुक के लिए कोई पासवर्ड एंटर नही किया गया है.',
			127: 'अड्रेस बुक मे यह अड्रेस शामिल नहीं है.',
			128: 'उपलब्ध कराया गया अड्रेस मान्य नहीं है',
			129: 'ईसी नाम से और एक अड्रेस बुक पहले से ही मौजूद है. एक अन्य नाम का चयन करें.',
			130: 'अड्रेस बुक मे यह अड्रेस पहले से ही शामिल है.',
			131: 'अड्रेस बुक का नाम एक डायरेक्टरी का नाम है.',
			132: 'अड्रेस बुक फाइल का एक्सटेंशन गलत है.',
			133: 'अड्रेस बुक को हटाया नहीं जा सका है.',
			202: 'एन्क्रिप्टेड मेसेज नहीं भेजा जा सकता हे क्योंकि रेसिपईयेंट ने अभी तक एक बार भी XEM का ट्रांजैक्शन नही किया है.',
			305: 'NEM इंफ्रास्ट्रक्चर सर्वर उपलब्ध नहीं है.',
			306: 'एक एरर आ गया हे जिसके बारे में विकास टीम ने नही सोचा था. इस बात के लिए हम माफी चाहते हें, शायद एक बार फिरसे प्रयास करने पर मदद मिल सकती है. अन्यथा, NEM NIS/NCC समुदाय के भीतर एक मुद्दे को खोलने का कष्ट करें.',
			400: 'कुछ पैरामीटर गुम या अवैध है.',
			401: 'यह ऑपरेशन पूरा नहीं किया जा सकता है क्योंकि इससे आपकी Private Key एक Remote NIS को भेजा जाता है(आपकी Private Key इस समय प्रकाशित हो सकती है) जिससे आपके अकाउंट पर खतरा हो सकता है.',
			404: 'अनुरोध किया गया संसाधन नहीं पाया जा सका हे.',
			500: 'एक एरर आ गया हे जिसके बारे में विकास टीम ने नही सोचा था. इस बात के लिए हम माफी चाहते हें, शायद एक बार फिरसे प्रयास करने पर मदद मिल सकती है. अन्यथा, NEM NIS/NCC समुदाय के भीतर एक मुद्दे को खोलने का कष्ट करें.',
			600: 'NCC मे XEM की लेनदेन करने के लिए NIS सर्वर को बूट करने की आवश्यकता हे. लोकल नोड बूट करने के लिए NCC मेनू एंट्री का उपयोग करें.',
			601: 'NIS नोड पहले से बूट हो चुकी हे. NIS बूट करने के लिए एक दूसरा प्रयास संभव नहीं है.',
			602: 'डेटाबेस के पूरी तरह लोड होने तक कोई भी ऑपरेशन नही किया जा सकता है.',
			699: 'सर्वर पर अनुमति हारवेस्टर्स की अधिकतम संख्या तक पहुंच गया है.',
			700: 'प्रदान किया गया अकाउंट हार्वेस्टिंग के लिए बुनियादी मानदंडों को पूरा नहीं करता है. मुख्य रूप से यह अकाउंट के अंदर XEM की राशि से संबंधित है. हार्वेस्टिंग के लिए कम से कम 1000 XEM की ज़रूरत हे और पहले ट्रांजैक्शन के बाद एक दिन की प्रतीक्षा करनी पड़ती है.',
			701: 'प्रदान की गई समय सीमा अतीत में है. समय सीमा 1 दिन की अवधि के अंदर प्रदान की जानी चाहिए.',
			702: 'प्रदान की गई समय सीमा भविष्य में बहुत दूर है. समय सीमा 1 दिन की अवधि के अंदर प्रदान की जानी चाहिए.',
			703: 'आपके अकाउंट में पर्याप्त XEM बैलेंस नही हे.',
			704: 'प्रदान की गई मेसेज टेक्स्ट NEM के माध्यम से भेजने के लिए बहुत बड़ी है. कृपया अपने मेसेज की लंबाई कम करने का प्रयास करें.',
			705: 'ट्रांजैक्शन हैश पहले से ही डेटाबेस या अपुष्ट ट्रांजैक्शन सूची में मौजूद है.',
			706: 'ट्रांजैक्शन हस्ताक्षर का जांच नही किया जा सका है.',
			707: 'ट्रांजैक्शन ID का समय बहुत दूर अतीत में हे.',
			708: 'ट्रांजैक्शन ID का समय बहुत दूर भविष्य में हे.',
			709: 'यह अकाउंट अज्ञात है. नेटवर्क को अकाउंट को पहचानने के लिए अकाउंट में कम से कम एक ट्रांजैक्शन (सेनडर/रेसिपईयेंट) का शामिल होना ज़रूरी होता है.',
			710: 'ट्रांजैक्शन को अस्वीकार कर दिया गया है क्योंकि ट्रांजैक्शन कैश अनुमति से ज़्यादा भर गया है. एक उच्च फ़ीस ट्रांजैक्शन के स्वीकार होने के मौके बेहतर बनाता है.',
			730: 'मौजूदा ट्रांजैक्शन की वजह से इंपॉर्टेन्स ट्रान्सफर ट्रांजैक्शन(सुरक्षित हार्वेस्टिंग) में दिक्कत आ रही है.',
			731: 'सुरक्षित हार्वेस्टिंग अकाउंट में गैर शून्य बैलेंस है, इसलिए इसका उपयोग नहीं किया जा सकता है.',
			732: 'इंपॉर्टेन्स ट्रान्सफर खारिज कर दिया गया है. एक अपूर्ण इंपॉर्टेन्स ट्रान्सफर ऑपरेशन पहले से ही है.',
			733: 'सुरक्षित हार्वेस्टिंग पहले से ही सक्रिय है.',
			734: 'सुरक्षित हार्वेस्टिंग सक्रिय नहीं है.',
			740: 'Multisig अकाउंट के लिए ट्रांजैक्शन की अनुमति नहीं है.',
			741: 'Multisig हस्ताक्षर ट्रांजैक्शन को अस्वीकार कर दिया गया है. यह अकाउंट Multisig अकाउंट की cosignatory नहीं है.',
			742: 'Multisig हस्ताक्षर ट्रांजैक्शन को अस्वीकार कर दिया गया है. एसोसिएटेड Multisig ट्रांजैक्शन NEM नेटवर्क के लिए अज्ञात है.',
			743: 'Multisig अकाउंट परिवर्तन को खारिज कर दिया गया है. जोड़े गये अकाउंट्स में से एक अकाउंट पहले से ही cosignatory है.',
			901: 'ऑफलाइन मोड की स्थापना करने में त्रुटि आई है.',
			1000: 'आपके द्वारा प्रदान की गई Private Key और Public Key मैच नहीं कर रहीं है.',
			1001: 'आपके द्वारा प्रदान की गई Public key और Address मैच नहीं कर रहीं है.',
			1002: 'यह अड्रेस मुख्य NEM नेटवर्क से संबंधित नहीं है.'
		},
		common: {
			success: 'सफलता',
			appStatus: {
				nccUnknown: 'NCC की स्तिति अग्यात है',
				nccUnavailable: 'NCC उपलब्ध नहीं है',
				nccStarting: 'NCC स्टार्ट हो रहा है...',
				nisUnknown: 'NIS की स्तिति अग्यात है',
				nisUnavailable: 'NIS  उपलब्ध नहीं है',
				nisStarting: 'NIS स्टार्ट हो रहा है...',
				notBooted: 'NIS को बूट करने की आवश्यकता हे. कृपया अपना वॉलेट खोलें और लोकल नोड बूट करें. आप ऑटो-बूट सेट्टिंग का भी प्रयोग कर सकतें हैं.',
				loading: 'डेटाबेस से ब्लॉक्स लोड हो रहें हैं, ब्लॉक: ',
				booting: 'NIS को बूट किया जा रहा है...',
				nisInfoNotAvailable: 'NIS की जानकारी अभी तक उपलब्ध नहीं है. जानकारी प्राप्त करने का प्रयास किया जा रहा है. ...',
				synchronizing: 'NIS सिंक्रनाइज़ हो रहा हे. ब्लॉक {{1}}, स्था. {{2}} पीछे.',
				daysBehind: {
					0: '1 दिन से कम',
					1: '1 दिन',
					many: '{{1}} दिन'
				},
				synchronized: 'NIS सिंक्रनाइज़ हो चुकी है!',
				noRemoteNisAvailable: '"रीमोट NIS" नेटवर्क में नहीं पाया गया है. क्या आप इंटरनेट से डिस्कनेक्ट हो गये हैं?'
			},
			addressBook: 'अड्रेस बुक',
			password: 'पासवर्ड',
			passwordValidation: 'पासवर्ड खाली नहीं होना चाहिए.',
			address: 'अड्रेस',
			privateLabel: 'प्राइवेट लेबल',
			publicLabel: 'Public label',
			noCharge: 'करेंट अकाउंट से कोई फ़ीस <b> नहीं </ b > लिया जाएगा. Multisig अकाउंट में उन्हें शामिल किया गया है.',
			justUse: 'महज प्रयोग करें'
		},
		transactionTypes: [
			'TRANSFER TRANSACTION',
			'IMPORTANCE TRANSFER',
			'MODIFICATION OF MULTISIG ACCOUNT',
			'MULTISIG TRANSACTION',
		],
		transactionDirections: {
			pending: 'Pending transaction',
			outgoing: 'Outgoing transaction',
			incoming: 'Incoming transaction',
			self: 'Self transaction',
			importance: 'Importance transaction',
			modification: 'Aggregate Modification of Multisig'
		},
		modals: {
			error: {
				title: 'Oops!',
				caption: 'एरर {{1}}'
			},
			confirmDefault: {
				yes: 'हाँ',
				no: 'नहीं'
			},
			settings: {
				title: 'सेटिंग्स',
				language: {
					label: 'भाषा'
				},
				remoteServer: {
					tabTitle: 'रीमोट सर्वर',
					protocol: 'Protocol',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Port'
				},
				autoBoot: {
					tabTitle: 'ऑटो-बूट',
					name: 'नोड नेम',
					account: 'अकाउंट',
					primaryAccount: 'प्राइमरी अकाउंट',
					auto: 'वॉलेट खोलने पर ऑटो-बूट करें.'
				},
				save: 'Save',
				saveSuccess: 'सेटिंग्स सफलतापूर्वक बचा लिया गया है.'
			},
			multisig: {
				title: 'अकाउंट को Multisig अकाउंट में परिवर्तित करें',
				multisigAccount: 'Multisig अकाउंट',
				cosignatories: "Cosignatories' अड्रेसस",
				labelDesc: 'इस अकाउंट का लेबल {{1}} हे',
				nullLabelDesc: "इस अकाउंट का लेबल मौजूद नही हे",
				addCosignatory: '+ Cosignatory जोड़ें',
				cancel: 'Cancel',
				convert: 'परिवर्तित करें',
				fee: 'फ़ीस',
				feeValidation: 'फ़ीस "न्यूनतम फ़ीस" से कम नहीं होना चाहिए.',
				dueBy: 'Due by',
				useMinimumFee: 'न्यूनतम फ़ीस का प्रयोग करें',
				hours: 'hour(s)',
				txConfirm: {
					title: 'Multisig अकाउंट में परिवर्तन की पुष्टि करें.',
					total: 'Total',
			        },
                        },
			signMultisig: {
				title: 'Sign multisig transaction',
				original: {
					from: 'Multisig अकाउंट',
					to: 'रेसिपईयेंट',
					amount: 'अमाउंट',
					fee: 'इनर फ़ीस',
					deadline: 'समय सीमा'
				},
				multisigFees: 'Multisig फ़ीस',
				multisigTotal: 'Total',
				sender: 'Cosignatory',
				fee: 'फ़ीस',
				feeValidation: 'फ़ीस "न्यूनतम फ़ीस" से कम नहीं होना चाहिए.',
				dueBy: 'Due by',
				useMinimumFee: 'न्यूनतम फ़ीस का प्रयोग करें.',
				hours: 'hour(s)',
				password: 'पासवर्ड',
				passwordValidation: 'पासवर्ड खाली नहीं होना चाहिए.',
				send: 'भेजें',
				cancel: 'Cancel',
				sending: 'भेजा जा रहा है...',
				successMessage: 'ट्रांजैक्शन सफलतापूर्वक भेज दिया गया है',
				txConfirm: {
					title: 'Multisig ट्रांजैक्शन की पुष्टि करें',
					message: 'मेसेज',
					encrypted: 'मेसेज एनक्रिपटेड है',
					noMessage: 'नो मेसेज',
                                },
                        },
			sendNem: {
				title: 'XEM भेजें',
				sender: 'सेनडर',
				thisAccount: 'This account',
				labelDesc: 'इस अकाउंट का लेबल {{1}} हे',
				nullLabelDesc: "इस अकाउंट का लेबल मौजूद नही हे",
				amount: 'रकम',
				recipient: "रेसिपईयेंट अकाउंट",
				recipientValidation: 'अकाउंट अड्रेसस "-" को छोड़कर 40 चरित्र लंबे होना चाहिए',
				message: 'मेसेज',
				encrypt: 'एन्क्रिप्टेड मेसेज',
				fee: 'फ़ीस',
				multisigFee: 'Multisig फ़ीस',
				feeValidation: 'फ़ीस "न्यूनतम फ़ीस" से कम नहीं होना चाहिए.',
				dueBy: 'चुकाने का समय',
				useMinimumFee: 'न्यूनतम फ़ीस का प्रयोग करें.',
				hours: 'घंटे',
				password: 'पासवर्ड',
				passwordValidation: 'पासवर्ड खाली नहीं होना चाहिए.',
				send: 'भेजें',
				cancel: 'Cancel',
				sending: 'भेजा जा रहा है...',
				successMessage: 'ट्रांजैक्शन सफलतापूर्वक भेज दिया गया है',
				txConfirm: {
					title: 'ट्रांजैक्शन की पुष्टि करें',
					amount: 'अमाउंट',
					to: 'To',
					dueBy: 'Due by',
					hours: 'hour(s)',
					total: 'Total',
					message: 'मेसेज',
					encrypted: 'मेसेज एन्क्रिप्टेड है',
					noMessage: 'नो मेसेज',
					cancel: 'Cancel',
					confirm: 'Confirm',
					sending: 'भेजा जा रहा है...'
				},
				notBootedWarning: {
					title: 'लोकल नोड बूट नही हो पाया है!',
					message: 'NEM भेजने के लिए लोकल नोड को बूट करना ज़रूरी है!'
				},
				bootingWarning: {
					title: 'नोड को बूट किया जा रहा है',
					message: 'कृपया ट्रांजैक्शन करने से पहले नोड को बूट होने दें.'
				},
				loadingWarning: {
					title: 'डेटाबेस लोड हो रहा है...'
				}
			},
			clientInfo: {
				title: 'Client info',
				ncc: 'NEM Community Client - NCC',
				signer: 'हस्ताक्षरकर्ता',
				remoteServer: 'रिमोट सर्वर',
				local: 'लोकल',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'सिंक्रनाइज़ हो चुका है',
				notSync: 'सिंक्रनाइज़ नहीं हुआ है',
				notConnected: 'NEM क्लाउड से कनेक्टेड नहीं हे',
				loading: 'Loading...'
			},
			transactionDetails: {
				title: 'ट्रांजैक्शन विवरण',
				id: 'ID',
				hash: 'Hash',
				type: 'ट्रांजैक्शन प्रकार',
				direction: 'Transaction Direction',
				pending: 'Pending',
				outgoing: 'Outgoing',
				incoming: 'Incoming',
				self: 'Self',
				sender: 'Sender',
				multisigAccount: 'Multisig अकाउंट',
				issuer: 'Issuer',
				recipient: 'रेसिपईयेंट',
				remote: 'रीमोट',
				multisigMessage: 'हस्ताक्षर मौजूद',
				message: 'मेसेज',
				noMessage: 'नो मेसेज',
				encrypted: 'मेसेज एन्क्रिप्टेड है',
				time: 'Timestamp',
				confirmations: 'कन्फर्मेशन्स',
				confirmationsUnknown: 'Unknown',
				amount: 'अमाउंट',
				fee: 'फ़ीस',
				innerFee: 'इनर फ़ीस',
				multisigFees: 'Multisig फ़ीस',
				issuer: 'Issuer',
				cosignatory: 'Cosignatory'
			},
			accountDetails: {
				title: "Account details",
				address: "अड्रेस",
				label: "लेबल",
				noLabel: "नो लेबल",
				add: "अड्रेस बुक में जोड़ें",
				remove: "अड्रेस बुक से हटा दें",
				balance: "Balance",
				vested: "vested",
				importance: "Importance",
				publicKey: "Public key",
				noPublicKey: "No public key",
				harvestedBlocks: "हारवेस्टेड ब्लॉक्स",
				close: "Close"
			},
			bootLocalNode: {
				title: 'लोकल नोड बूट कीजिए',
				account: 'लोकल नोड बूट करने वाला अकाउंट',
				noLabel: '<span class="null">&lt;No label&gt;</span>',
				wallet: 'वॉलेट',
				node: 'नोड नाम',
				boot: 'बूट',
				booting: 'बूट हो रहा है...'
			},
			closeWallet: {
				title: 'वॉलेट बंद करें',
				message: 'क्या आप अपने वॉलेट को बंद करके लैंडिंग पेज पर बापस जाना चाहते हैं?'
			},
			createAccount: {
				title: 'नया अकाउंट बनाएँ',
				label: 'निजी लेबल',
				wallet: 'वॉलेट',
				password: "वॉलेट का पासवर्ड",
				successMessage: 'अकाउंट {{1}} {{#2}}({{2}}){{/2}} बना दिया गया है!',
				create: 'बनाएँ'
			},
			createRealAccountData: {
				title: 'असली NEM खाते के लिए डेटा बनाएं',
				message: 'नीचे दिए गए डेटा NEM लॉंच के बाद आपके असली खाते के लिए है. Address, Public key और सबसे महत्वपूर्ण बात यह है कि अपना Private Key कहीं सुरक्षित सहेजें. अगर आप अपना Private Key खो देते हैं, तो आप अपने अकाउंट ओर सभी असली XEM हमेशा के लिए खो देंगे.',
				address: 'Address',
				publicKey: 'Public key',
				privateKey: 'Private key',
				confirm: {
					title: 'Save the private key',
					message: 'आप सुनिश्चित करें कि आपकी Private Key एक सुरक्षित जगह में सहेज लिया गया है!'
				},
				recheck: {
					title: 'अपने saved Private Key को दोबारा चेक करें',
					message: "कृपया अपने saved Private Key को प्रदान करें ताक़ि हम यह चेक कर सकें की आपने सही Private Key को save किया है. अगर आपने अपना Private Key खो दिया है, तो आप एक नया बना सकते हैं.",
					correct: {
						title: 'बढ़िया!',
						message: 'ऐसा लगता है की आपने सही Private Key को save किया है. हमेशा अपने Private Key को सुरक्षित रखें!!'
					},
					incorrect: {
						title: 'Hmm...',
						message: "आपने जो Private Key प्रदान किया है वो सही नही है!! कृपया दोबारा जाँचे और दर्ज करें या फिर असली अकाउंट डेटा जाँचे.",
						tryAgain: 'कृपया दोबारा दर्ज करें.',
						seeOriginal: 'असली अकाउंट डेटा जाँचे.'
					},
					recheck: 'Check'
				},
				ok: 'OK'
			},
			verifyRealAccountData: {
				title: 'असली NEM अकाउंट जाँचे.',
				message: 'सेव किए गये Address, Public Key और Private key को एंटर कीजिए ताकि उन्हें मैच किया जा सके.',
				address: 'Address',
				publicKey: 'Public key',
				privateKey: 'Private key',
				dataMatched: 'सब कुछ ठीक लग रहा है. Address, Public Key और Private key मैच कर रहें हैं.',
				verify: 'जाँचे'
			},
			addAccount: {
				title: 'कोई मौजूदा अकाउंट जोड़ें',
				privateKey: "अकाउंट का Private Key",
				wallet: 'वॉलेट',
				password: "वॉलेट का पासवर्ड",
				successMessage: 'अकाउंट {{1}} {{#2}}({{2}}){{/2}} वॉलेट में जोड़ दिया गया है!',
				add: 'जोड़ें',
				label: 'लेबल'
			},
			setPrimary: {
				title: 'सेट प्राइमरी अकाउंट',
				account: 'प्राइमरी स्थापित होने वाला अकाउंट',
				noLabel: '<span class="null">&lt;No label&gt;</span>',
				wallet: 'वॉलेट',
				password: "वॉलेट का पासवर्ड",
				successMessage: 'अकाउंट {{1}} {{#2}}({{2}}){{/2}} प्राइमरी सेट हो चुका है!',
				set: 'प्राइमरी सेट करें',
                        },
			changeWalletName: {
				title: 'वॉलेट का नाम बदलें',
				wallet: 'मौजूदा वॉलेट का नाम',
				newName: 'नये वॉलेट का नाम',
				password: "वॉलेट का पासवर्ड ",
				successMessage: 'वॉलेट का नाम <em>{{1}}</em> से <em>{{2}}</em> सफलतापूर्वक बदल दिया गया है',
				change: 'बदलें'
			},
			changeWalletPassword: {
				title: 'वॉलेट का पासवर्ड बदलें',
				wallet: 'वॉलेट',
				password: 'मौजूदा पासवर्ड',
				newPassword: 'नया पासवर्ड',
				confirmPassword: 'नए पासवर्ड की पुष्टि करें',
				successMessage: 'वॉलेट के पासवर्ड को सफलतापूर्वक बदल दिया गया है',
				change: 'बदलें',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: 'आपका प्रवेश किया पासवर्ड और पासवर्ड की पुष्टि मेल नहीं खाते हैं. सही ढंग से अपना नया पासवर्ड टाइप करें.'
			},
			changeAccountLabel: {
				title: 'अकाउंट लेबल बदल',
				label: 'अकाउंट लेबल',
				wallet: 'वॉलेट',
				password: "वॉलेट का पासवर्ड",
				successMessage: 'अकाउंट {{1}} अब {{2}} के रूप में चिह्नित है',
				change: 'बदलें'
			},
			removeAccount: {
				title: 'Remove account',
				wallet: 'वॉलेट',
				password: "वॉलेट का पासवर्ड",
				warning: 'कृपया हटाने से पहले यह सुनिश्चित करें कि अकाउंट में कोई भी XEM ना हो, अथवा वे हमेशा के लिए खो जाएँगे.',
				successMessage: 'अकाउंट {{1}} {{# 2}} ({{2}}) {{/ 2}} हटा दिया गया है!',
				remove: 'हटाएँ'
			},
			nisUnavailable: {
				title: 'NIS उपलब्ध नहीं है',
				message: 'NIS से कनेक्शन कट गयी है, कनेक्शन के लिए इंतजार हो रही है'
			},
			shutdown: {
				title: 'Close program',
				message: 'क्या आप NEM समुदाय क्लाइंट को बंद करना चाहते हैं?'
			},
			activateRemote: {
				title: 'रीमोट हार्वेस्टिंग को सक्रिय करें',
				wallet: 'वॉलेट',
				account: 'अकाउंट',
				hoursDue: 'Hours due',
				password: "वॉलेट का पासवर्ड",
				activate: 'सक्रिय करें'
			},
			deactivateRemote: {
				title: 'रीमोट हार्वेस्टिंग को निष्क्रिय करें',
				wallet: 'वॉलेट',
				account: 'अकाउंट',
				hoursDue: 'Hours due',
				password: "वॉलेट का पासवर्ड",
				deactivate: 'निष्क्रिय करें'
			},
			startRemote: {
				title: 'रीमोट हार्वेस्टिंग को शुरु करें',
				wallet: 'वॉलेट',
				account: 'अकाउंट',
				password: "वॉलेट का पासवर्ड",
				start: 'सक्रिय करें'
			},
			stopRemote: {
				title: 'रीमोट हार्वेस्टिंग को निष्क्रिय करें',
				wallet: 'वॉलेट',
				account: 'अकाउंट',
				password: "वॉलेट का पासवर्ड",
				stop: 'निष्क्रिय करें'
			},
			logoutWarning: {
				leavePage: "आप अपने वॉलेट छोड़ के जा रहें हैं. आप इस तरह अपने वॉलेट छोड़ देते हैं तो कोई दूसरा भी इस कंप्यूटर से आपके वॉलेट का उपयोग करने में सक्षम हो सकता है. \n\nइससे बचने के लिए आप ब्राउज़र टैब बंद या कहीं और नेविगेट करने से पहले \"Close wallet\" मेनू आइटम का उपयोग करें.",
                        },
			addContact: {
				title: 'Add contact',
				add: 'जोड़ें'
			},
			editContact: {
				title: 'Edit contact',
				saveChanges: 'Save changes',
                        },
			removeContact: {
				title: 'Remove contact',
				remove: 'हटाएँ',
                        }
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'वॉलेट को सफलतापूर्वक इम्पोर्ट कर दिया गया है!',
			nav: {
				start: 'Getting Started',
				about: 'About NEM',
				settings: 'सेटिंग्स'
			},
			main: {
				leftTitle: 'क्या आप <em>NEM</em> में नएँ हैं?',
				leftButton: 'नया वॉलेट बनाएँ',
				walletNamePlh: 'अपने वॉलेट का नाम',
				passwordPlh: 'पासवर्ड',
				confirmPasswordPlh: 'पासवर्ड की पुष्टि करें',
				create: 'बनाएँ',
				creating: 'बनाया जा रहा है...',
				rightTitle: 'क्या आप पहले से ही एक <em>NEM</em>ber हैं?',
				rightButton: 'अपना वॉलेट खोलें',
				openButton: 'खोलें',
				walletsFound: 'Found <strong>{{1}}</strong> <em>wallets</em>',
				copyright: 'फोटोग्राफ़ी <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [{
						title: 'NCC आपके वॉलेट को एनक्रिप्ट करता है',
						description: 'NEM और असेट्स की चोरी से बचने के लिए <em>सुरक्षा</em> बहुत महत्वपूर्ण है.'
					},{
						title: 'NCC आपके वॉलेट को एनक्रिप्ट करता है',
						description: 'NEM और असेट्स की चोरी से बचने के लिए <em>सुरक्षा</em> बहुत महत्वपूर्ण है.'
					}]
			},
			about: {
				sections: [{
						title: 'NCC कैसे काम करता है?',
						paragraphs: [
							'<strong>NCC</strong> एक पारंपरिक वॉलेट की तरह आपके असेट्स और XEM के लिए एक पहुँच प्रदान करता है.',
							'<strong>NCC</strong> को संचालित रहने के लिए एक <strong>NIS</strong> सर्वर तक पहुँच की आवश्यकता होती है. एक स्थानीय सर्वर को हमेशा सक्रिय रहना होता है(यह <strong>NCC</strong> के साथ इनस्टॉल्ड आता है)',
							'आप एक रिमोट <strong>NIS</strong> भी कॉन्फ़िगर कर सकते हैं.'
						],
						listItems: [
							'मल्टिपल वॉलेट्स',
							'एक वॉलेट में मल्टिपल अकाउंट्स को शामिल करने के लिए अकाउंट्स निर्धारित कीजिए'
						]
					},{
						title: '&#42;NIS क्या है?',
						paragraphs: [
							'यह कॉंपोनेंट <strong>NEM</strong> क्लाउड को जिंदा रखने के लिए जिम्मेदार है.',
							'जितने अधिक <strong>NIS</strong> उतनी बेहतर सुरक्षा.',
							'<strong>NEM</strong> क्लाउड की पहुँच बिंदु <strong>NIS</strong> है.'
						],
						legend: '<strong>&#42;NIS</strong> का मतलब <strong>NEM Infrastructure Server</strong> है'
					}]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: '{{1}} दिन पहले',
			lastAccessJustNow: 'थोड़ी देर पहले',
			lastAccessTooltip: 'पिछला लॉगिन था {{1}}',
			primary: 'प्राइमरी',
			primaryShort: 'P',
			noLabel: '<नो लेबल>',
			copiedToClipboard: 'अड्रेस क्लिपबोर्ड में कॉपी कर दिया गया है!',
			actions: {
				refreshInfo: 'जानकारी ताज़ा करे',
				bootLocalNode: 'लोकल नोड बूट करें',
				changeWalletName: 'वॉलेट का नाम बदलें',
				changeWalletPassword: 'वॉलेट का पासवर्ड बदलें',
				mergeWallets: 'मर्ज वॉलेट्स',
				exportWallet: 'एक्सपोर्ट वॉलेट',
				createAccount: 'नया अकाउंट बनाएँ',
				createRealAccountData: 'नया असली NEM अकाउंट बनाएँ.',
				verifyRealAccountData: 'असली NEM अकाउंट जाँचे.',
				addAccount: 'किसी मौजूदा अकाउंट को जोड़ें',
				changeAccountLabel: 'अकाउंट लेबल बदलें',
				setPrimary: 'प्राइमरी अकाउंट के रूप में सेट करें',
				removeAccount: 'Remove Account',
				clientInfo: 'क्लाइंट इन्फो.',
				closeWallet: 'क्लोज़ वॉलेट',
				closeProgram: 'क्लोज़ प्रोग्राम',
				copyClipboard: 'अड्रेस को क्लिपबोर्ड पर कॉपी करें',
				convertMultisig: 'Multisig अकाउंट में परिवर्तन करें'
			},
			nav: [
				'डैशबोर्ड',
				'मेसेजस',
				'अड्रेस बुक',
				'ट्रॅन्सॅक्षन्स',
				'हारवेस्टेड ब्लॉक्स',
				'असेट एक्सचेंज',
				'समाचार',
				'अप्लिकेशन्स',
				'अकाउंट्स',
				'सेटिंग्स',
				'Close Program'
			],
			bootNodeWarning: "NCC की सुविधाओं का पूरी तरह से उपयोग करने के लिए आपको एक लोकल नोड बूट करना होगा."
		},
		dashboard: {
			assets: {
				title: 'आपके असेट्स'
			},
			importance: {
				title: 'इंपॉर्टेन्स स्कोर',
				unknown: 'अज्ञात स्थिति',
				start: 'स्टार्ट हार्वेस्टिंग',
				harvesting: 'हार्वेस्टिंग',
				stop: 'स्टॉप हार्वेस्टिंग',
				description: 'NEM क्लाउड के लिए अकाउंट का महत्व',
				remoteHarvest: {
					activate: 'रीमोट हार्वेस्टिंग को सक्रिय करें',
					activating: 'सक्रिय हो रहा है...',
					active: 'रीमोट हार्वेस्टिंग सक्रिय है',
					deactivate: 'रीमोट हार्वेस्टिंग को निष्क्रिय करें',
					deactivating: 'निष्क्रिय हो रहा है...',
					startRemoteHarvesting: 'रीमोट हार्वेस्टिंग को शुरु करें',
					remotelyHarvesting: 'रीमोट हार्वेस्टिंग चल रही है',
					stopRemoteHarvesting: 'रीमोट हार्वेस्टिंग को निष्क्रिय करें'
				}
			},
			transactions: {
				title: 'हाल ही में किए गये ट्रॅन्सॅक्षन्स',
				sendNem: 'XEM भेजें',
				signMultisig: 'SIGN',
				balance: 'मौजूदा NEM राशि',
				vestedBalance: 'Vested Balance',
				syncStatus: '(at block {{1}}{{#2}} : est. {{3}} days behind{{/2}})',
				unknown: 'अज्ञात',
				columns: [
					'',
					'समय',
					'सेनडर/रेसिपईयेंट',
					'मेसेज',
					'',
					'विवरण',
					'कन्फर्मेशन्स',
					'फ़ीस',
					'अमाउंट'
				],
				noMessage: 'नो मेसेज',
				encrypted: 'मेसेज एनक्रिपटेड है',
				view: 'जाँचे',
				confirmationsUnknown: 'Unknown',
				pending: 'पेंडिंग',
				seeAll: 'सभी ट्रॅन्सॅक्षन्स',
				noTransactions: 'अभी तक कोई ट्रॅन्सॅक्षन्स नही किया गया है'
			},
			nemValue: {
				title: 'XEM मूल्य आँकड़े'
			},
			messages: {
				titleTooltip: 'मेसेजस'
			},
			news: {
				titleTooltip: 'समाचार'
			},
			notAvailable: 'बीटा रिलीज में अभी तक उपलब्ध नहीं'
		},
		transactions: {
			title: 'ट्रॅन्सॅक्षन्स',
			sendNem: 'XEM भेजें',
			balance: 'मौजूदा NEM राशि',
			filters: {
				confirmed: 'Confirmed',
				unconfirmed: 'Unconfirmed',
				incoming: 'Incoming',
				outgoing: 'Outgoing',
                        },
			table: {
				columns: [
					'',
					'समय',
					'सेनडर/रेसिपईयेंट',
					'मेसेज',
					'',
					'विवरण',
					'कन्फर्मेशन्स',
					'फ़ीस',
					'अमाउंट'
				],
				noMessage: 'नो मेसेज',
				encrypted: 'मेसेज एनक्रिपटेड है',
				view: 'जाँचे',
				confirmationsUnknown: 'Unknown',
				pending: 'Pending',
				noTransactions: 'अभी तक कोई ट्रॅन्सॅक्षन्स नही किया गया है',
				loading: 'Loading...'
			}
		},
		harvestedBlocks: {
			title: 'हारवेस्टेड ब्लॉक्स',
			feeEarned: 'पिछले 25 ब्लॉक्स के हारवेस्टेड फ़ीस',
			unknown: 'Unknown',
			table: {
				columns: [
					'Height',
					'Time',
					'Block hash',
					'Fee'
				],
				noBlocks: 'नो हारवेस्टेड ब्लॉक्स ',
				loading: 'पुराने हारवेस्टेड ब्लॉक्स'
			},
			harvesting: {
				unknown: 'अज्ञात स्थिति',
				start: 'स्टार्ट लोकल हार्वेस्टिंग',
				harvesting: 'हार्वेस्टिंग',
				stop: 'स्टॉप लोकल हार्वेस्टिंग',
				remoteHarvest: {
					startRemoteHarvesting: 'स्टार्ट रीमोट हार्वेस्टिंग',
					stopRemoteHarvesting: 'स्टॉप रीमोट हार्वेस्टिंग'
				}
			}
		},
		addressBook: {
			title: 'अड्रेस बुक',
			addContact: 'Add contact',
			table: {
				columns: [
					'अकाउंट अड्रेस',
					'प्राइवेट लेबल',
					'पब्लिक लेबल'
				],
				noContacts: 'आपके अड्रेस बुक में कोई अड्रेस नहीं है'
			},
			noLabel: 'नो लेबल',
			sendNem: 'XEM भेजें',
			edit: 'Edit',
			remove: 'हटाएँ'
		},
		settings: {
			title: 'सेटिंग्स',
			settings: [{
					name: 'भाषा'
			}],
			save: 'Save changes',
			saveSuccess: 'सेटिंग्स सफलतापूर्वक बचा लिया गया है'
		}
	}
});
