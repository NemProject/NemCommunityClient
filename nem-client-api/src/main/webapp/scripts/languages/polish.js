define({
	id: 'pl',
	name: 'Polski',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Plik portfela nie istnieje.',
			102: 'Portfel nie został utworzony.',
			103: 'Plik portfela jest uszkodzony. Proszę odzyskać portfel z kopii zapasowej.',
			104: 'Podane hasło jest niepoprawne.',
			105: 'Nie podano hasła.',
			106: 'Zanim zaczniesz używać portfela, musisz go otworzyć. Aby go otworzyć, musisz podać hasło do tego portfela.',
			107: 'Poftfel nie zawiera tego konta.',
			108: 'Konto nie może zostać usunięte. Prawdopodobnie dlatego, że bilans konta jest większy niż 0 XEM lub jest to konto główne.',
			109: 'Inny portfel z tą samą nazwą już istnieje. Proszę wybrać inną nazwę dla portfela.',
			110: 'Portfel zawiera już to konto.',
			111: 'Nazwa portfela jest katalogiem.',
			112: 'Rozszerzenie pliku portfela jest niepoprawne.',
			113: 'Portfel nie mógł zostać usunięty.',
			121: 'Plik książki adresowej nie istnieje.',
			122: 'Książka adresowa nie została utworzona.',
			123: 'Plik książki adresowej jest uszkodzony. Proszę odzyskać plik z backupu.',
			124: 'Podane hasło do książki adresowej nie jest poprawne.',
			125: 'Nie podano hasła dla książki adresowej.',
			127: 'Książka adresowa nie zawiera tego adresu.',
			128: 'Podany adres nie jest ważny.',
			129: 'Inna książka adresowa z taką samą nazwą już istnieje. Proszę wybrać inną nazwę.',
			130: 'Książka adresowa zawiera już ten adres.',
			131: 'Nazwa książki adresowej jest katalogiem.',
			132: 'Rozszerzenie pliku książki adresowej jest niepoprawne.',
			133: 'Książka adresowa nie mogła zostać usunięta.',
			202: 'Zaszyfrowana wiadomość nie może zostać wysłana ponieważ odbiorca nie wykonał jeszcze żadnej transakcji.',
			203: 'Konto nie może być przekształcone, ponieważ nie wszyscy sygnatariusze są znani. Muszą oni być w tym samym portfelu lub dokonać przynajmniej jednej transakcji.',
			305: 'Serwer infrastruktury NEM (NIS) jest niedostępny.\n\nSpróbuj zrestartować oprogramowanie NEM.\n\nJeśli korzystasz ze zdalnego NIS, sprawdź czy poprawnie wpisałeś numer hosta lub użyj innego zdalnego NIS.',
			306: 'Wystąpił błąd, którego deweloperzy nie przewidzieli. Przepraszamy, ponowna próba może rozwiązać problem. W innym wypadku proszę zwrócić się o pomoc do deweloperów NEM NIS/NCC.',
			400: 'Brakujący lub niewłaściwy parametr.',
			401: 'Ta operacja nie może zostać wykonana ponieważ może to spowodować wyciek klucza prywatnego poprzez wysłanie go do zdalnego NIS.',
			404: 'Żądany zasób nie został odnaleziony.',
			500: 'Wystąpił błąd, którego deweloperzy nie przewidzieli. Przepraszamy, ponowna próba może rozwiązać problem. W innym wypadku proszę zwrócić się o pomoc do deweloperów NEM NIS/NCC.',
			600: 'NCC wymaga uruchomienia serwera NIS aby wysyłać i przyjmować transakcje z chmury NEM. Użyj menu NCC aby uruchomić lokalny węzeł.',
			601: 'Węzeł NIS jest już uruchomiony. Nie można uruchomić go po raz drugi.',
			602: 'Prawie gotowe. Serwer Infrastruktury NEM laduje bloki. Portfel będzie działać, gdy baza danych sie zaladuje.',
			699: 'Maksymalna ilość zbieraczy dozwolona na serwerze została osiągnięta.',
			700: 'Konto nie spełnia podstawowych wymagań do zbierania bloków. Głównie jest to związane z ilością XEM na koncie. Zbieranie wymaga minimum 10000 XEM na koncie.',
			701: 'Podany termin jest w przeszłości. Termin musi się zawierać w okresie jednego dnia.',
			702: 'Podany termin jest zbyt daleko w przyszłości. Termin musi się zawierać w okresie jednego dnia.',
			703: 'Twoje konto nie ma wystarczajacych srodkow aby wykonac ta transakcje.',
			704: 'Wiadomość jest zbyt długa. Spróbuj ją skrócić.',
			705: 'Skrót (hash) transakcji istnieje już w bazie danych lub na liście niepotwierdzonych transakcji.',
			706: 'Sygnatura transakcji nie mogła zostać zweryfikowana.',
			707: 'Sygnatura czasowa transakcji jest zbyt daleko w przeszłości.',
			708: 'Sygnatura czasowa transakcji jest zbyt daleko w przyszłości.',
			709: 'Konto nieznane. Konto musi wziąć udział w przynajmniej jednej transakcji (wychodzącej lub przychodzącej) aby było znane sieci.',
			710: 'Transakcja została odrzucona ponieważ bufor jest przepełniony. Wyzsza opłata transakcyjna zwiększa szanse na zaakceptowanie transakcji.',
			730: 'Transakcja transferu waznosci (delegowane zbieranie) jest w konflikcie z istniejaca transakcja.',
			731: 'Konto delegowanego zbierania ma niezerowe saldo i nie moze byc uzyte.',
			732: 'Przekazanie znaczenia odrzucone. Istnieje już oczekująca operacja przekazania znaczenia.',
			733: 'Delegowane zbieranie jest juz aktywne.',
			734: 'Delegowane zbieranie NIE jest aktywne. Nie mozna deaktywowac.',
			740: 'Transakcja nie jest dozwolona dla konta multisig.',
			741: 'Podpis transkacji multisig odrzucony. Bieżące konto nie jest sygnatariuszem konta multisig.',
			742: 'Podpis transkacji multisig odrzucony. Transakcja nie jest znana sieci NEM',
			743: 'Modyfikacja konta multisig odrzucona. Jedno z dodanych kont jest juz sygnatariuszem.',
			901: 'Wystąpił błąd podczas przechodzenia w tryb offline.',
			1000: 'Klucz prywatny i klucz publiczny nie pasują do siebie.',
			1001: 'Klucz publiczny i adres nie pasują do siebie..',
			1002: 'Adres nie należy do sieci głównej.'
		},
		common: {
			success: 'Sukces',
			unknown: 'Status nieznany',
			unknownMessage: 'Ncc nie dostał odpowiedzi w odpowiednim czasie. Transakcja mogla zostac wyslana do sieci.<br /><br />Prosze, sprawdz transakcje zanim sprobujesz wyslac ponownie.',
			appStatus: {
				nccUnknown: 'Status NCC jest nieznany',
				nccUnavailable: 'NCC jest niedostępny',
				nccStarting: 'NCC uruchamia się...',
				nisUnknown: 'Status NIS jest nieznany',
				nisUnavailable: 'NIS jest niedostępny',
				nisStarting: 'NIS uruchamia się...',
				notBooted: 'NIS wymaga uruchomienia. Proszę otworzyć portfel i uruchomić lokalny węzeł poprzez okno dialogowe lub skonfigurować ustawienia automatycznego uruchamiania.',
				loading: 'Ładowanie bloków z bazy danych, blok: ',
				booting: 'Uruchamianie NIS...',
				nisInfoNotAvailable: 'Info o NIS jest jeszcze niedostępne. Próba uzyskania info o NIS...',
				synchronizing: 'NIS synchronizuje się. Blok {{1}}, ok. {{2}} opóźnienia.',
				daysBehind: {
					0: 'mniej niż 1 dzień',
					1: '1 dzień',
					many: '{{1}} dni'
				},
				synchronized: 'NIS jest zsynchronizowany!',
				noRemoteNisAvailable: 'Nie znaleziono zdalnego NIS w sieci, brak połączenia z internetem?'
			},
			addressBook: 'Książka adresowa',
			password: 'Hasło',
			passwordValidation: 'Hasło nie może być puste',
			address: 'Adres',
			privateLabel: 'Etykieta prywatna',
			publicLabel: 'Etykieta publiczna',
			noCharge: 'Bieżące konto <b>NIE</b> będzie obciążone opłatami, konto multisig je opłaca.',
			fee: 'Opłata',
			justUse: 'Wystarczy użyć',
			dueBy: 'Ważne przez',
			hours: 'godzin(y)',
			hoursDue: 'Wykonaj w ciągu (godziny)',
			hoursDueExplanation: 'Jesli transakcja nie zostanie zalaczona w terminie, zostanie odrzucona.',
			closeButton: 'Zamknij'
		},
		transactionTypes: [
			'TRANSFER TRANSAKCJI',
			'TRANSFER ZNACZENIA',
			'MODYFIKACJA KONTA MULTISIG',
			'TRANSAKCJA MULTISIG'
		],
		transactionDirections: {
			pending: 'Transakcja oczekująca',
			outgoing: 'Transakcja wychodząca',
			incoming: 'Transakcja przychodząca',
			self: 'Transakcja wewnętrzna',
			importance: 'Transakcja ważności',
			modification: 'Zbiorcza Modyfikacja Multisig'
		},
		modals: {
			error: {
				title: 'Oops!',
				caption: 'BŁĄD {{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Tak',
				no: 'Nie'
			},
			initialTy: {
				title: "WITAJ w NEM",
				content: "<c>Sbhaqrq ba gur fgebat cevapvcyrf bs rtnyvgnevna naq rdhnyvgl va qvfgevohgvba, gur Arj Rpbabzl Zbirzrag, ARZ, unf abj svanyyl pbzr gb sehvgvba nsgre pybfr gb 14 zbaguf bs vagrafvir qrirybczrag. Va nqqvgvba gb 5 pber qrirybcref naq 7 pber znexrgref, jr unir n ubfg bs pbzzhavgl zrzoref jub unir urycrq hf va bar jnl be nabgure, jvgubhg jubz, guvf jbhyq arire unir pbzr gbtrgure fb jryy nf orvat bar bs gur srj pelcgb vavgvngvirf jvgu fhpu n ovt grnz. Fcrpvny zragvba vf tvira gb gur sbyybjvat:</c><ue/><c><o>Grpuavpny naq Znexrgvat vachg:</o><oe/> Nzl, naqzr, nirentrwbr, OenvaBsZnffrf, qmnezhfpu, RSSI, Rynan82, rexxv, servtrvfg, unccl4209, vafgnpnfu, wnqrqwnpx, XrivaYv, XxbgArz, xbbernz, Xelfgb, Ybv Gena, ylxn, zvkznfgre, ZeCbegZna, arzovg, akxbvy, bjba, Cnagure03, curebzbar, erabgrat.yv, evtry, FnhyTenl, funjayrnel, fbyvk, fgbar, guvyba, haibvqcy, munaxnvjra, mbngn87, 守望者, 攻陳τч酨鈊, 清风, 福泽天下</c><ue/><c><o>APP Hfre Vagresnpr genafyngvba:</o><oe/>ncrk, obrfgva, Punbf514, QVZXNMQF, svypurs, servtrvfg, Thyvire, vnzvavgabj06, Wnarn4cqn, xhccnynugv, Ypuneyrf, znegvfznegvf, zrff-yrybhpu, Cnenan, evtry, Funja, Fcvqre, 楊 輝彦</c><c><oe/>Va nqqvgvba gb gur nobir 67 grnz zrzoref, jr nyfb unir bgure zrzoref jub  pbagevohgrq, jurgure va grpuavpny, znexrgvat be fgerff grfgvat gur flfgrz qhevat gur nycun naq orgn cunfr. Jr jbhyq yvxr gb nqqvgvbanyyl gunax nyy gubfr vaqvivqhnyf abg yvfgrq urer naq gur terngre ARZ pbzzhavgl orpnhfr jvgubhg gurz, jr jbhyq unir abg rire pbzr fb sne.</c><ue/><c>Naq zbfg vzcbegnagyl<oe/><o>Gunax LBH!</o><oe/><oe/>Arj Rpbabzl fgnegf jvgu LBH!</c>"
			},
			initialBackup: {
				title: "Witaj w NEM",
				content: "Możesz utworzyć kopię zapasową portfela w menu w prawym, górnym rogu."
			},
			settings: {
				title: 'Ustawienia',
				language: {
					label: 'Język'
				},
				remoteServer: {
					tabTitle: 'Zdalny Serwer',
					protocol: 'Protokół',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Port',
					defaultPort: 'Użyj domyślnego portu.'
				},
				autoBoot: {
					tabTitle: 'Auto-uruchamianie',
					name: 'Nazwa węzła',
					account: 'Konto',
					primaryAccount: 'Konto podstawowe',
					auto: 'Uruchom automatycznie przy otwarciu portfela'
				},
				save: 'Zapisz',
				saveSuccess: 'Ustawienia zostały zapisane pomyślnie'
			},
			multisig: {
				title: 'Konwertuj konto na multisig',
				multisigAccount: 'Konto multisig',
				cosignatories: "Adresy sygnatariuszy",
				labelDesc: 'To konto jest oznaczone jako {{1}}',
				nullLabelDesc: "To konto nie ma etykiety",
				addCosignatory: '+ Dodaj sygnatariusza',
				cancel: 'Anuluj',
				convert: 'Konwertuj',
				fee: 'Opłata',
				feeValidation: 'Opłata nie może być niższa, niż minimalna opłata',
				useMinimumFee: 'Użyj minimalnej opłaty',
				txConfirm: {
					title: 'Potwierdź konwersję do Konta Multisig',
					total: 'Suma',

				},
				warning: 'Konto Multisig jest na liscie sygnatariuszy. To spowoduje zablokowanie konta odcinając dostęp do funduszy. Prawdopodobnie <b>NIE CHCESZ</b> tego zrobic.'
			},
			signMultisig: {
				title: 'Podpisz transakcję multisig',
				original: {
					from: 'Konto multisig',
					to: 'Odbiorca',
					amount: 'Ilość',
					fee: 'Wewn. opłata',
					deadline: 'Ostateczna data'
				},
				multisigFees: 'Opłaty Multisig',
				multisigTotal: 'Suma',
				sender: 'Sygnatariusz',
				fee: 'Opłata',
				feeValidation: 'Opłata nie może być niższa, niż minimalna opłata',
				useMinimumFee: 'Użyj minimalnej opłaty',
				password: 'Hasło',
				passwordValidation: 'Hasło nie może być puste',
				send: 'Wyślij',
				cancel: 'Anuluj',
				sending: 'Wysyłanie...',
				successMessage: 'Transakcja została zrealizowana!',
				txConfirm: {
					title: 'Potwierdź Transakcję Multisig',
					message: 'Wiadomość',
					encrypted: 'Wiadomość jest zaszyfrowana',
					noMessage: 'Brak wiadomości',

				}
			},
			sendNem: {
				title: 'Wyślij XEM',
				sender: 'Nadawca',
				thisAccount: 'To konto',
				labelDesc: 'To konto jest oznaczone jako {{1}}',
				nullLabelDesc: "To konto nie ma etykiety",
				amount: 'Ilość',
				recipient: "Konto odbiorcy",
				recipientValidation: 'Adresy kont muszą mieć 40 znaków (nie licząc myślników)',
				message: 'Wiadomość',
				encrypt: 'Zaszyfruj wiadomość',
				fee: 'Opłata',
				multisigFee: 'Opłata multisig',
				feeValidation: 'Opłata nie może być niższa, niż minimalna opłata',
				useMinimumFee: 'Użyj minimalnej opłaty',
				password: 'Hasło',
				passwordValidation: 'Hasło nie może być puste',
				send: 'Wyślij',
				cancel: 'Anuluj',
				sending: 'Wysyłanie...',
				successMessage: 'Transakcja została zrealizowana!',
				txConfirm: {
					title: 'Potwierdź transakcję',
					amount: 'Ilość',
					to: 'Do',
					total: 'Suma',
					message: 'Wiadomość',
					encrypted: 'Wiadomość jest zaszyfrowana',
					noMessage: 'Brak wiadomości',
					cancel: 'Anuluj',
					confirm: 'Potwierdź',
					sending: 'Wysyłanie...'
				},
				notBootedWarning: {
					title: 'Węzeł nie został uruchomiony!',
					message: 'Lokalny węzeł musi być uruchomiony zanim będzie można wysyłać XEM!'
				},
				bootingWarning: {
					title: 'Węzeł uruchamia się.',
					message: 'Zaczekaj, aż proces uruchamiania zakończy się, aby wysłać transakcję.'
				},
				loadingWarning: {
					title: 'Ładowanie bazy danych'
				}
			},
			clientInfo: {
				title: 'Informacje o kliencie',
				ncc: 'Klient Społeczności NEM - NCC',
				signer: 'Podpisujący',
				remoteServer: 'Zdalny Serwer',
				local: 'Lokalny',
				nis: 'Serwer Infrastruktury NEM - NIS',
				sync: 'Zsynchronizowany',
				notSync: 'Niezsynchronizowany',
				notConnected: 'Nie podłączony do chmury NEM',
				loading: 'Ładowanie...'
			},
			transactionDetails: {
				title: 'Szczegóły transakcji',
				id: 'ID',
				hash: 'Skrót (hash)',
				type: 'Typ transakcji',
				direction: 'Rodzaj Transakcji',
				pending: 'Oczekujące',
				outgoing: 'Wychodzące',
				incoming: 'Przychodzące',
				self: 'Wewnętrzne',
				sender: 'Nadawca',
				multisigAccount: 'Konto Multisig',
				issuer: 'Emitent',
				recipient: 'Odbiorca',
				remote: 'Zdalny',
				multisigMessage: 'Obecne podpisy',
				message: 'Wiadomość',
				noMessage: 'Brak wiadomości',
				encrypted: 'Wiadomość jest zaszyfrowana',
				time: 'Data',
				confirmations: 'Potwierdzenia',
				confirmationsUnknown: 'Nieznana',
				amount: 'Ilość',
				fee: 'Opłata',
				innerFee: 'Wewnętrzne opłaty',
				multisigFees: 'Opłaty Multisig',
				cosignatory: 'Sygnatariusz'
			},
			accountDetails: {
				title: "Dane konta",
				address: "Adres",
				label: "Etykieta",
				noLabel: "Brak etykiety",
				add: "Dodaj do książki adresowej",
				remove: "Usuń z książki adresowej",
				balance: "Saldo",
				vested: "usankcjonowane",
				importance: "Znaczenie",
				publicKey: "Klucz publiczny",
				noPublicKey: "Brak klucza publicznego",
				harvestedBlocks: "Zebrane bloki",
				close: "Zamknij"
			},
			bootLocalNode: {
				title: 'Uruchom lokalny węzeł',
				account: 'Konto do uruchomienia lokalnego węzła',
				noLabel: '<span class="null">&lt;Brak etykiety&gt;</span>',
				wallet: 'Portfel',
				node: 'Nazwa węzła',
				boot: 'Uruchom',
				booting: 'Uruchamianie...',
				warning: 'Boot node warning',
				warningText: 'Probujesz uruchomic wezel <u>{{2}}</u><br/><br/>Uruchomienie zdalnego węzła jest obecnie niemożliwe z wewnątrz NCC.',
				warningStatement: 'Masz auto-bootowanie ustawione na true i uzywasz zdalnego wezla {{3}}.<br/><br/>Uruchomienie zdalnego węzła jest obecnie niemożliwe z wewnątrz NCC',
				warningQuestion: 'Czy jestes pewny, ze chcesz uruchomic wezel <u>{{3}}</u> uzywajac klucza prywatnego konta {{1}} ({{2}} XEM)?<br><br>To ujawni <span class="sublabelWarning">klucz prywatny</span> tego konta wezlowi: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Zamknij portfel',
				message: 'Czy jesteś pewny, że chcesz zamknąć portfel i powrócić do strony startowej?'
			},
			createAccount: {
				title: 'Stwórz nowe konto',
				label: 'Etykieta',
				wallet: 'Portfel',
				password: "Hasło portfela",
				successMessage: 'Konto {{1}} {{#2}}({{2}}){{/2}} zostało utworzone!',
				create: 'Utwórz'
			},
			showPrivateKey: {
				title: 'Pokaz klucz PRYWATNY konta',
				message: 'Spowoduje to wyświetlenie klucza prywatnego konta na ekranie, jako tekst. W przypadku jakiegokolwiek szkodliwego oprogramowania obecnego w systemie, może to być niebezpieczne. Czy na pewno chcesz to zrobić?',
				publicKey: 'Klucz publiczny',
				privateKey: 'Klucz prywatny',
				show: 'Pokaz klucz'
			},
			showRemotePrivateKey: {
				title: 'Pokaz klucz PRYWATNY Zdalnego Konta',
				message: 'Spowoduje to wyświetlenie klucza prywatnego zdalnego konta na ekranie, jako tekst. W przypadku jakiegokolwiek szkodliwego oprogramowania obecnego w systemie, może to być niebezpieczne. Czy na pewno chcesz to zrobić?',

			},
			addAccount: {
				title: 'Dodaj istniejące konto',
				privateKey: "Klucz Prywatny Konta",
				wallet: 'Portfel',
				password: "Hasło portfela",
				successMessage: 'Konto {{1}} {{#2}}({{2}}){{/2}} zostało dodane do portfela!',
				add: 'Dodaj',
				label: 'Etykieta'
			},
			setPrimary: {
				title: 'Ustaw Konto Podstawowe',
				account: 'Konto, które będzie ustawione jako Podstawowe',
				noLabel: '<span class="null">&lt;Brak etykiety&gt;</span>',
				wallet: 'Portfel',
				password: "Hasło Portfela",
				successMessage: 'Konto {{1}} {{#2}}({{2}}){{/2}} zostało ustawione jako podstawowe!',
				set: 'Ustaw jako podstawowe'
			},
			changeWalletName: {
				title: 'Zmień nazwę portfela',
				wallet: 'Bieżąca nazwa portfela',
				newName: 'Nowa nazwa portfela',
				password: "Hasło portfela",
				successMessage: 'Nazwa portfela została pomyślnie zmieniona z <em>{{1}}</em> na <em>{{2}}</em>',
				change: 'Zmień'
			},
			changeWalletPassword: {
				title: 'Zmień hasło portfela',
				wallet: 'Portfel',
				password: 'Bieżące hasło',
				newPassword: 'Nowe hasło',
				confirmPassword: 'Potwierdź nowe hasło',
				successMessage: 'Hasło portfela zostało pomyślnie zmienione',
				change: 'Zmień',
				passwordNotMatchTitle: 'Ups!',
				passwordNotMatchMessage: 'Wpisane hasło i potwierdzenie hasła różnią się. Proszę upewnić się, że hasło jest wpisane poprawnie.'
			},
			changeAccountLabel: {
				title: 'Zmień etykietę konta',
				label: 'Etykieta',
				wallet: 'Portfel',
				password: "Hasło portfela",
				successMessage: 'Konto {{1}} ma teraz etykietę {{2}}',
				change: 'Zmień'
			},
			removeAccount: {
				title: 'Usuń konto',
				account: 'Konto',
				label: 'Etykieta',
				wallet: 'Portfel',
				password: "Hasło portfela",
				warning: 'Upewnij się, że Twoje konto nie zawiera już XEM, gdyż znikną na zawsze.',
				successMessage: 'Konto {{1}} {{#2}}({{2}}){{/2}} zostało usunięte!',
				remove: 'Usuń'
			},
			nisUnavailable: {
				title: 'NIS niedostępny',
				message: 'Rozłączony z NIS, oczekiwanie na połączenie'
			},
			shutdown: {
				title: 'Zamknij program',
				message: 'Czy na pewno chcesz zamknąć Klient Społeczności NEM?'
			},
			activateRemote: {
				title: 'Aktywuj Delegowane Zbieranie',
				wallet: 'Portfel',
				account: 'Konto',
				password: "Hasło portfela",
				activate: 'Aktywuj',
				warning: 'Ostrzezenie',
				warningText: 'Aktywacja potrwa 6 godzin (360 blokow). Aktywacja NIE rozpocznie zbierania automatycznie.'
			},
			deactivateRemote: {
				title: 'Deaktywuj Delegowane Zbieranie',
				wallet: 'Portfel',
				account: 'Konto',
				password: "Hasło portfela",
				deactivate: 'Deaktywuj',
				warning: 'Ostrzezenie',
				warningText: 'Deaktywacja potrwa 6 godzin (360 blokow).'
			},
			startRemote: {
				title: 'Rozpocznij Delegowane Zbieranie',
				wallet: 'Portfel',
				account: 'Konto',
				password: "Hasło portfela",
				start: 'Start'
			},
			stopRemote: {
				title: 'Zakoncz Delegowane Zbieranie',
				wallet: 'Portfel',
				account: 'Konto',
				password: "Hasło portfela",
				stop: 'Stop'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer. To prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away."
			},
			addContact: {
				title: 'Dodaj kontakt',
				add: 'Dodaj'
			},
			editContact: {
				title: 'Edytuj kontakt',
				saveChanges: 'Zapisz zmiany'
			},
			removeContact: {
				title: 'Usuń kontakt',
				remove: 'Usuń'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Portfel został zaimportowany!',
			nav: {
				start: 'Zaczynamy',
				about: 'O NEM',
				settings: 'Ustawienia'
			},
			main: {
				leftTitle: 'Nowy w <em>NEM</em>?',
				leftButton: 'Stwórz nowy portfel',
				walletNamePlh: 'Nazwa Twojego portfela',
				passwordPlh: 'Hasło',
				confirmPasswordPlh: 'Potwierdź hasło',
				create: 'Stwórz',
				creating: 'Tworzenie...',
				rightTitle: 'Uczestnik <em>NEM</em>?',
				rightButton: 'Otwórz swój portfel',
				openButton: 'Otwórz',
				walletsFound: 'Znaleziono <strong>{{1}}</strong> <em>portfeli</em>',
				copyright: 'Zdjęcie: <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC szyfruje Twój portfel',
						description: '<em>Bezpieczeństwo</em> jest bardzo ważne aby uniknąć kradzieży monet XEM i aktywów.'
					},
					{
						title: 'Zdalny Serwer Infrastruktury NEM',
						description: 'Uzywajac zdalnego NIS nie musisz synchronizowac lancucha blokow przy starcie.',

					},
					{
						title: 'Delegowane zbieranie',
						description: 'Uzywajac delegowanego zbierania mozesz korzystac ze zdalnego wezla NIS!',

					},
					{
						title: 'Multisignature transactions',
						description: 'Zabezpiecz swoje XEM i aktywa poprzez wbudowane w blockchain transakcje multi-podpisu.',

					},
					{
						title: 'Obsluga jezyka ojczystego',
						description: 'Interfejs użytkownika NEM obsługuje wiele języków. Zobacz "Ustawienia".'
					},
					{
						title: 'Masz pytania lub uwagi?',
						description: '<a href="http://forum.ournem.com">forum.ournem.com</a> | #ournem on freenode.org | Telegram',

					}
				]
			},
			about: {
				sections: [
					{
						title: 'Jak działa NCC?',
						paragraphs: [
							'<strong>NCC</strong> zapewnia dostęp do Twoich aktywów i monet tak jak to robi tradycyjny portfel. Możesz',
							'<strong>NCC</strong> wymaga dostępu do serwera <strong>NIS</strong> aby działać. Standardem jest aktywny lokalny serwer (jest zainstalowany razem z <strong>NCC</strong>)',
							'Możesz też skonfigurować dostęp do zdalnego <strong>NIS</strong>.'
						],
						listItems: [
							'Mieć wiele portfeli',
							'Zdefiniować wiele kont wewnątrz swojego portfela'
						]
					},
					{
						title: 'Czym jest &#42;NIS?',
						paragraphs: [
							'Ten komponent jest odpowiedzialny za podtrzymywanie chmury <strong>NEM</strong> .',
							'Im wiecej <strong>NIS</strong> w sieci, tym wieksze bezpieczenstwo.,',
							'<strong>NIS</strong> jest punktem dostępu do chmury <strong>NEM</strong> .'
						],
						legend: '<strong>&#42;NIS</strong> to skrót od <strong>NEM Infrastructure Server</strong>'
					}
				]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Około {{1}} dni temu',
			lastAccessJustNow: 'Przed chwilą',
			lastAccessTooltip: 'Ostatno uruchomiony {{1}}',
			primary: 'podstawowe',
			primaryShort: 'P',
			noLabel: '<Brak etykiety>',
			copiedToClipboard: 'Adres został skopiowany do schowka!',
			actions: {
				refreshInfo: 'Odśwież Info',
				bootLocalNode: 'Uruchom Lokalny Węzeł',
				changeWalletName: 'Zmień Nazwę Portfela',
				changeWalletPassword: 'Zmień Hasło Portfela',
				mergeWallets: 'Połącz Portfele',
				exportWallet: 'Eksportuj Portfel',
				createAccount: 'Stwórz Nowe Konto',
				createRealAccountData: 'Utwórz prawdziwe konto',
				verifyRealAccountData: 'Weryfikacja prawdziwego konta',
				showPrivateKey: 'Pokaż klucz PRYWATNY konta',
				showRemotePrivateKey: 'Pokaz klucz PRYWATNY zdalnego konta',
				viewDetails: 'Zobacz szczegoly konta',
				addAccount: 'Dodaj Istniejące Konto',
				changeAccountLabel: 'Zmień Etykietę Konta',
				setPrimary: 'Ustaw jako Konto Podstawowe',
				removeAccount: 'Usuń Konto',
				clientInfo: 'Info o kliencie',
				closeWallet: 'Zamknij Portfel',
				closeProgram: 'Zamknij Program',
				copyClipboard: 'Kopiuj adres do schowka',
				copyDisabled: 'Kopiowanie adresu wymaga flasha',
				convertMultisig: 'Konwertuj inne konto na multisig'
			},
			nav: [
				'Dashboard',
				'Wiadomości',
				'Książka adresowa',
				'Transakcje',
				'Zebrane bloki',
				'Giełda aktywów',
				'Aktualności',
				'Aplikacje',
				'Konta',
				'Ustawienia',
				'Zamknij Program'
			],
			bootNodeWarning: "Lokalny węzeł musi zostać uruchomiony zanim będziesz mógł w pełni wykorzystać funkcje NCC."
		},
		dashboard: {
			assets: {
				title: 'Twoje aktywa'
			},
			importance: {
				title: 'Wskaźnik Znaczenia',
				unknown: 'Status nieznany',
				start: 'Rozpocznij zbieranie',
				harvesting: 'Zbieranie bloków',
				stop: 'Zakończ zbieranie bloków',
				description: 'Znaczenie konta dla chmury NEM',
				remoteHarvest: {
					activate: 'Aktywuj delegowane zbieranie',
					activating: 'Aktywowanie delegowanego zbierania...',
					active: 'Delegowane zbieranie jest aktywne',
					deactivate: 'Deaktywuj delegowane zbieranie',
					deactivating: 'Deaktywowanie delegowanego zbierania...',
					startRemoteHarvesting: 'Rozpocznij delegowane zbieranie',
					remotelyHarvesting: 'Zdalne zbieranie bloków',
					stopRemoteHarvesting: 'Zatrzymaj delegowane zbieranie'
				}
			},
			transactions: {
				title: 'Ostatnie Transakcje',
				sendNem: 'Wyślij XEM',
				signMultisig: 'PODPISZ',
				balance: 'Stan Konta',
				loading: 'Ladowanie salda',
				accountCosignatories: 'Konto multisig',
				accountCosignatoriesView: 'zobacz sygnatariuszy',
				vestedBalance: 'Saldo usankcjonowane',
				syncStatus: '(blok {{1}}{{#2}} : ok. {{3}} dni opóźnienia{{/2}})',
				notSynced: 'może być niedokładny, NIS nie jest jeszcze zsynchronizowany',
				unknown: 'nieznany',
				columns: [
					'',
					'Czas',
					'Nadawca/Odbiorca',
					'Wiadomość',
					'',
					'Szczegóły',
					'Potwierdzenia',
					'Opłata',
					'Ilość'
				],
				noMessage: 'Brak wiadomości',
				encrypted: 'Wiadomość jest zaszyfrowana',
				view: 'Zobacz',
				confirmationsUnknown: 'Nieznana',
				pending: 'Oczekuje',
				seeAll: 'Zobacz wszystkie transakcje',
				noTransactions: 'Nie wykonano żadnych transakcji'
			},
			nemValue: {
				title: 'Statystyki wartości XEM'
			},
			messages: {
				titleTooltip: 'Wiadomości'
			},
			news: {
				titleTooltip: 'Aktualności'
			},
			notAvailable: 'Niedostępne'
		},
		transactions: {
			title: 'Transakcje',
			sendNem: 'Wyślij XEM',
			balance: 'Stan Konta',
			filters: {
				confirmed: 'Potwierdzone',
				unconfirmed: 'Niepotwierdzone',
				incoming: 'Przychodzące',
				outgoing: 'Wychodzące'
			},
			table: {
				columns: [
					'',
					'Czas',
					'Nadawca/Odbiorca',
					'Wiadomość',
					'',
					'Szczegóły',
					'Potwierdzenia',
					'Opłata',
					'Ilość'
				],
				noMessage: 'Brak wiadomości',
				encrypted: 'Wiadomość jest zaszyfrowana',
				view: 'Zobacz',
				confirmationsUnknown: 'Nieznana',
				pending: 'Oczekuje',
				noTransactions: 'Nie wykonano jeszcze żadnych transakcji',
				loading: 'Ładowanie kolejnych transakcji...'
			}
		},
		harvestedBlocks: {
			title: 'Zebrane bloki',
			feeEarned: 'Opłaty otrzymane z ostatnich 25 zebranych bloków',
			unknown: 'Nieznany',
			table: {
				columns: [
					'Wysokość',
					'Czas',
					'Trudnosc bloku',
					'Opłata'
				],
				noBlocks: 'Brak zebranych bloków',
				loading: 'Zobacz wcześniej zebrane bloki'
			},
			harvesting: {
				unknown: 'Status nieznany',
				start: 'Rozpocznij zbieranie bloków',
				harvesting: 'Zbieranie',
				stop: 'Zakończ zbieranie bloków',
				remoteHarvest: {
					startRemoteHarvesting: 'Rozpocznij delegowane zbieranie',
					stopRemoteHarvesting: 'Zatrzymaj delegowane zbieranie'
				}
			}
		},
		addressBook: {
			title: 'Książka adresowa',
			addContact: 'Dodaj kontakt',
			table: {
				columns: [
					'Adres konta',
					'Etykieta prywatna',
					'Etykieta publiczna'
				],
				noContacts: 'Nie ma kontaktów w książce adresowej'
			},
			noLabel: 'Brak etykiety',
			sendNem: 'Wyślij XEM',
			edit: 'Edytuj',
			remove: 'Usuń'
		},
		settings: {
			title: 'Ustawienia',
			settings: [
				{
					name: 'Język'
				}
			],
			save: 'Zapisz zmiany',
			saveSuccess: 'Ustawienia zostały zapisane'
		}
	}
});
