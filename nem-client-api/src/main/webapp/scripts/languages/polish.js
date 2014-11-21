define({
	id: 'pl',
	name: 'Polski',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Plik nie odnaleziony.',
			102: 'Portfel nie został utworzony.',
			103: 'Plik portfela jest uszkodzony. Odzyskaj portfel używając backupu, który powinieneś zrobić podczas tworzenia portfela.',
			104: 'Podane hasło jest nieprawidłowe. Miejmy nadzieję, że przypomnisz sobie właściwe hasło. Raz zgubione, nie może zostać odtworzone!',
			106: 'Zanim zaczniesz używać portfela, musisz go otworzyć. Aby go otworzyć, musisz podać hasło do tego portfela.',
			107: 'Poftfel nie zawiera tego konta.',
			108: 'Konto nie może zostać usunięte. Prawdopodobnie dlatego, że bilans konta jest większy niż 0 NEM lub jest to konto główne.',
			109: 'Inny portfel z tą samą nazwą już istnieje. Proszę wybrać inną nazwę dla portfela.',
			110: 'Portfel zawiera już to konto.',
			202: 'Zaszyfrowana wiadomość nie może zostać wysłana ponieważ odbiorca nie wykonał jeszcze żadnej transakcji.',
			305: 'Serwer Infrastruktury NEM jest niedostępny.',
			306: 'Wystąpił błąd, którego deweloperzy nie przewidzieli. Przepraszamy, ponowna próba może rozwiązać problem. W innym wypadku proszę zwrócić się o pomoc do deweloperów NEM NIS/NCC.',
			400: 'Brakujący lub niewłaściwy parametr.',
			401: 'Ta operacja nie może zostać wykonana ponieważ może to spowodować wyciek klucza prywatnego poprzez wysłanie go do zdalnego NIS.',
			404: 'Żądany zasób nie został odnaleziony.',
			500: 'Wystąpił błąd, którego deweloperzy nie przewidzieli. Przepraszamy, ponowna próba może rozwiązać problem. W innym wypadku proszę zwrócić się o pomoc do deweloperów NEM NIS/NCC.',
			600: 'NCC wymaga uruchomienia serwera NIS aby wysyłać i przyjmować transakcje z chmury NEM. Użyj menu NCC aby uruchomić lokalny węzeł.',
			601: 'Węzeł NIS jest już uruchomiony. Nie można uruchomić go po raz drugi.',
			700: 'Konto nie spełnia podstawowych wymagań do zbierania bloków. Głównie jest to związane z ilością NEM na koncie. Zbieranie wymaga minimum 1000 NEM na koncie.',
			701: 'Podany termin jest w przeszłości. Termin musi się zawierać w okresie jednego dnia.',
			702: 'Podany termin jest zbyt daleko w przyszłości. Termin musi się zawierać w okresie jednego dnia.',
			703: 'Nie masz wystarczających środków na koncie aby dokonać transakcji.',
			704: 'Wiadomość jest zbyt długa. Spróbuj ją skrócić.',
			705: 'Skrót (hash) transakcji istnieje już w bazie danych lub na liście niepotwierdzonych transakcji.',
			706: 'Sygnatura transakcji nie mogła zostać zweryfikowana.',
			707: 'Sygnatura czasowa transakcji jest zbyt daleko w przeszłości.',
			708: 'Sygnatura czasowa transakcji jest zbyt daleko w przyszłości.',
			709: 'Konto nieznane. Konto musi wziąć udział w przynajmniej jednej transakcji (wychodzącej lub przychodzącej) aby było znane sieci.',
			901: 'Wystąpił błąd podczas przechodzenia w tryb offline.',
			1000: 'Klucz prywatny i klucz publiczny nie pasują do siebie.',
			1001: 'Klucz publiczny i adres nie pasują do siebie..',
			1002: 'Adres nie należy do sieci głównej.'
		},
		common: {
			success: 'Sukces', //title of the Success message modals
			appStatus: {
				nccUnknown: 'Status NCC jest nieznany',
				nccUnavailable: 'NCC jest niedostępny',
				nccStarting: 'NCC uruchamia się...',
				nisUnknown: 'Status NIS jest nieznany',
				nisUnavailable: 'NIS jest niedostępny',
				nisStarting: 'NIS uruchamia się...',
				notBooted: 'NIS wymaga uruchomienia. Proszę otworzyć portfel i uruchomić lokalny węzeł poprzez okno dialogowe lub skonfigurować ustawienia automatycznego uruchamiania.',
				booting: 'Uruchamianie NIS...',
				nisInfoNotAvailable: 'Info o NIS jest jeszcze niedostępne. Próba uzyskania info o NIS...',
				synchronizing: 'NIS synchronizuje się. Blok {{1}}, ok. {{2}} opóźnienia.',
				daysBehind: {
					0: 'mniej niż 1 dzień',
					1: '1 dzień',
					many: '{{1}} dni'
				},
				synchronized: 'NIS jest zsynchronizowany!'
			}
		},
		modals: {
			error: {
				title: 'Oops!',
				caption: 'BŁĄD {{1}}'
			},
			confirmDefault: {
				yes: 'Tak',
				no: 'Nie'
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
					port: 'Port'
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
			sendNem: {
				title: 'Wyślij NEM',
				labelDesc: 'To konto jest oznaczone jako {{1}}',
				nullLabelDesc: "To konto nie ma etykiety",
				amount: 'Ilość',
				recipient: "Konto odbiorcy",
				recipientValidation: 'Adresy kont muszą mieć 40 znaków (nie licząc myślników)',
				message: 'Wiadomość',
				encrypt: 'Zaszyfruj wiadomość',
				fee: 'Opłata',
				feeValidation: 'Opłata nie może być niższa, niż minimalna opłata',
				dueBy: 'Ważne przez',
				useMinimumFee: 'Użyj minimalnej opłaty',
				hours: 'godzin',
				password: 'Hasło',
				passwordValidation: 'Password must not be blank',
				send: 'Wyślij',
				cancel: 'Anuluj',
				sending: 'Wysyłanie...',
				successMessage: 'Transakcja została zrealizowana!',
				txConfirm: {
					title: 'Potwierdź transakcję',
					amount: 'Ilość',
					to: 'Do',
					fee: 'Opłata',
					dueBy: 'Ważne przez',
					hours: 'godzin(y)',
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
					message: 'Lokalny węzeł musi być uruchomiony zanim będzie można wysyłać NEM!'
				},
				bootingWarning: {
					title: 'Węzeł uruchamia się.',
					message: 'Zaczekaj, aż proces uruchamiania zakończy się, aby wysłać transakcję.'
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
				pending: 'Oczekujące',
				outgoing: 'Wychodzące',
				incoming: 'Przychodzące',
				self: 'Wewnętrzne',
				sender: 'Nadawca',
				recipient: 'Odbiorca',
				message: 'Wiadomość',
				noMessage: 'Brak wiadomości',
				encrypted: 'Wiadomość jest zaszyfrowana',
				time: 'Data',
				confirmations: 'Potwierdzenia',
				confirmationsUnknown: 'Nieznana',
				amount: 'Ilość',
				fee: 'Opłata'
			},
			bootLocalNode: {
				title: 'Uruchom lokalny węzeł',
				account: 'Konto do uruchomienia lokalnego węzła',
				noLabel: '<span class="null">&lt;Brak etykiety&gt;</span>',
				wallet: 'Portfel',
				node: 'Nazwa węzła',
				boot: 'Uruchom',
				booting: 'Uruchamianie...'
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
			createRealAccountData: {
				title: 'Utwórz prawdziwe konto',
				message: 'Poniższe dane są dla Twojego prawdziwego konta po premierze NEM. Zapisz adres, klucz publiczny, a co najważniejsze prywatny klucz w bezpiecznym miejscu. Jeśli stracisz klucz prywatny, Twoje konto i wszystkie monety NEM zostaną utracone NA ZAWSZE!',
				address: 'Adres',
				publicKey: 'Klucz publiczny',
				privateKey: 'Klucz prywatny',
				confirm: {
					title: 'Zapisz klucz prywatny',
					message: 'Czy na pewno twój klucz prywatny został zapisany w bezpiecznym miejscu?'
				},
				recheck: {
					title: 'Sprawdź ponownie swój zapisany  klucz prywatny',
					message: "Proszę wprowadź ponownie swój klucz prywatny, który właśnie otrzymałeś aby sprawdzić, czy jest poprawny. Jeśli klucz prywatny jest błędny, możesz utworzyć nowy.",
					correct: {
						title: 'Świetnie!',
						message: 'Zdaje się, że Twój klucz prywatny jest prawidłowy. Trzymaj go w bezpiecznym miejscu!'
					},
					incorrect: {
						title: 'Hmm...',
						message: "Klucz prywatny, który właśnie wpisałeś jest nieprawidłowy! Proszę, sprawdź go i wpisz ponownie.",
						tryAgain: 'Spróbuj wpisać ponownie',
						seeOriginal: 'Zobacz oryginalne dane'
					},
					recheck: 'Sprawdź'
				},
				ok: 'OK'
			},
			verifyRealAccountData: {
				title: 'Sprawdzenie poprawności prawdziwego konta',
				message: 'Wpisz ponownie zapisany adres, klucz publiczny i prywatny poniżej, by sprawdzić, czy pasują do siebie.',
				address: 'Adres',
				publicKey: 'Klucz publiczny',
				privateKey: 'Klucz prywatny',
				dataMatched: 'Wszystko w porządku, adres, klucz puliczny i prywatny pasują do siebie.',
				verify: 'Weryfikacja'
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
				set: 'Ustaw jako podstawowe',
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
				label: 'Etykieta konta',
				wallet: 'Portfel',
				password: "Hasło portfela",
				successMessage: 'Konto {{1}} ma teraz etykietę {{2}}',
				change: 'Zmień'
			},
			removeAccount: {
				title: 'Usuń konto',
				wallet: 'Portfel',
				password: "Hasło portfela",
				warning: 'Upewnij się, że Twoje konto nie zawiera już NEM, gdyż znikną na zawsze.',
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
				title: 'Aktywuj zdalne zbieranie bloków',
				wallet: 'Portfel',
				account: 'Konto',
				hoursDue: 'Wykonaj w ciągu (godziny)',
				password: "Hasło portfela",
				activate: 'Aktywuj'
			},
			deactivateRemote: {
				title: 'Deaktywuj zdalne zbieranie bloków',
				wallet: 'Portfel',
				account: 'Konto',
				hoursDue: 'Wykonaj w ciągu (godziny)',
				password: "Hasło portfela",
				deactivate: 'Deaktywuj'
			},
			startRemote: {
				title: 'Rozpocznij zdalne zbieranie bloków',
				wallet: 'Portfel',
				account: 'Konto',
				password: "Hasło portfela",
				start: 'Start'
			},
			stopRemote: {
				title: 'Zatrzymaj zdalne zbieranie bloków',
				wallet: 'Portfel',
				account: 'Konto',
				password: "Hasło portfela",
				stop: 'Stop'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer.\n\nTo prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away.",
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Portfel został zaimportowany!',
			nav: {
				start: 'Getting Started',
				about: 'O NEM',
				settings: 'Ustawienia'
			},
			main: {
				leftTitle: 'Nowy w <em>NEM</em>?',
				leftButton: 'Stwórz nowy portfel',
				walletNamePlh: 'Nazwa Twojego portfela',
				passwordPlh: 'Hasło',
				create: 'Stwórz',
				rightTitle: 'Uczestnik <em>NEM</em>?',
				rightButton: 'Otwórz swój portfel',
				openButton: 'Otwórz',
				walletsFound: 'Znaleziono <strong>{{1}}</strong> <em>portfeli</em>',
				copyright: 'Zdjęcie: <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [{
					title: 'NCC szyfruje Twój portfel',
					description: '<em>Bezpieczeństwo</em> jest bardzo ważne aby uniknąć kradzieży monet NEM i aktywów.'
				}, {
					title: 'NCC szyfruje Twój portfel',
					description: '<em>Bezpieczeństwo</em> jest bardzo ważne aby uniknąć kradzieży monet NEM i aktywów..'
				}]
			},
			about: {
				sections: [{
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
				}, {
					title: 'Czym jest &#42;NIS?',
					paragraphs: [
						'Ten komponent jest odpowiedzialny za podtrzymywanie chmury <strong>NEM</strong> .',
						'Im więcej uruchomionych <strong>NIS</strong> tym większe bezpieczeństwo.',
						'<strong>NIS</strong> jest punktem dostępu do chmury <strong>NEM</strong> .'
					],
					legend: '<strong>&#42;NIS</strong> to skrót od <strong>NEM Infrastructure Server</strong>'
				}]
			},
			footer: {
				copyright: '&copy; Copyright 2014. NEM Community Client.'
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
				exportWallet: 'Exportuj Portfel',
				createAccount: 'Stwórz Nowe Konto',
				createRealAccountData: 'Utwórz prawdziwe konto',
				verifyRealAccountData: 'Weryfikacja prawdziwego konta',
				addAccount: 'Dodaj Istniejące Konto',
				changeAccountLabel: 'Zmień Etykietę Konta',
				setPrimary: 'Ustaw jako Konto Podstawowe',
				removeAccount: 'Usuń Konto',
				clientInfo: 'Info o kliencie',
				closeWallet: 'Zamknij Portfel',
				closeProgram: 'Zamknij Program',
				copyClipboard: 'Kopiuj adres do schowka'
			},
			nav: [
				'Dashboard',
				'Wiadomości',
				'Kontakty',
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
					activate: 'Aktywuj zdalne zbieranie bloków',
					activating: 'Aktywowanie zdalnego zbierania bloków...',
					active: 'Zdalne zbieranie jest aktywne',
					deactivate: 'Wyłącz zdalne zbieranie bloków',
					deactivating: 'Wyłączanie zdalnego zbierania bloków...',
					startRemoteHarvesting: 'Rozpocznij zdalne zbieranie bloków',
					remotelyHarvesting: 'Zdalne zbieranie bloków',
					stopRemoteHarvesting: 'Zatrzymaj zdalne zbieranie bloków'
				}
			},
			transactions: {
				title: 'Ostatnie Transakcje',
				sendNem: 'Wyślij NEM',
				balance: 'Stan Konta',
				syncStatus: '(blok {{1}}{{#2}} : ok. {{3}} dni opóźnienia{{/2}})',
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
				types: {
					pending: 'Transakcja oczekująca',
					outgoing: 'Transakcja wychodząca',
					incoming: 'Transakcja przychodząca',
					self: 'Transakcja wewnętrzna',
				},
				noMessage: 'Brak wiadomości',
				encrypted: 'Wiadomość jest zaszyfrowana',
				view: 'Zobacz',
				confirmationsUnknown: 'Nieznana',
				pending: 'Oczekuje',
				seeAll: 'Zobacz wszystkie transakcje',
				noTransactions: 'Nie wykonano żadnych transakcji'
			},
			nemValue: {
				title: 'Statystyki wartości NEM'
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
			sendNem: 'Wyślij NEM',
			balance: 'Stan Konta',
			filters: {
				confirmed: 'Potwierdzone',
				unconfirmed: 'Niepotwierdzone',
				incoming: 'Przychodzące',
				outgoing: 'Wychodzące',
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
				types: {
					pending: 'Transakcja oczekująca',
					outgoing: 'Transakcja wychodząca',
					incoming: 'Transakcja przychodząca',
					self: 'Transakcja wewnętrzna',
				},
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
			unknown: 'Unknown',
			table: {
				columns: [
					'Wysokość',
					'Czas',
					'Hash bloku',
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
					startRemoteHarvesting: 'Zacznij zdalne zbieranie',
					stopRemoteHarvesting: 'Zakończ zdalne zbieranie'
				}
			}
		},
		settings: {
			title: 'Ustawienia',
			settings: [{
				name: 'Język'
			}],
			save: 'Zapisz zmiany',
			saveSuccess: 'Ustawienia zostały zapisane'
		}
	}
});
