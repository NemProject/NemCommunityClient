define({
	id: 'fr',
	name: 'Français',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
            101: "Fichier non trouvé.",
            102: "Le portefeuille a été créé.",
            103: "Le portefeuille est corrompu. S'il vous plait, récupérez votre portefeuille à partir de la copie de sauvegarde que vous avez faite lors de la création de votre portefeuille or lorsque vous y avez ajouté un compte.",
            104: "Le mot de passe est incorrect. En espérant que vous pourrez vous en rappeler. Les mots de passe ne peuvent pas être récupérés s'ils sont perdus!",
            106: "Avant de pouvoir utiliser un portefeuille, il doit être ouvert. Pour s'assurer que vous autoriser à accéder à ce portefeuille, vous devez fournir le mot de passe pour ce portefeuille.",
            107: "Ce portefeuille ne contient pas ce compte.",
            108: "Ce compte ne peut pas être retiré. Ce problème se produit généralement si vous tentez de retirer un compte avec une balance supérieure à 0 NEMs ou s'il s'agit de votre compte primaire.",
            109: "Un autre portefeuille avec le même nom existe déjà. S'il vous plait, veuillez choisir un nom différent.",
            110: "Le portefeuille contient déjà ce compte.",
            202: "Un message chiffré ne peut être envoyé si le destinataire n'a jamais effectué de transaction auparavant.",
            305: "Le serveur d'infrastructure NEM n'est pas disponible.",
            306: "Une erreur que l'équipe de développement n'avait pas anticipée s'est produite. Nous vous présentons nos excuses et nous espérons qu'un nouvel essai va régler ce problème. Sinon, ouvrez un billet d'incident auprès de la communauté NIS/NCC de NEM.",
            400: "Certains paramètres sont manquants ou invalides.",
            404: "La ressource que vous avez demandé ne peut être trouvée.",
            500: "Une erreur que l'équipe de développement n'avait pas anticipée s'est produite. Nous vous présentons nos excuses et nous espérons qu'un nouvel essai va régler ce problème. Sinon, ouvrez un billet d'incident auprès de la communauté NIS/NCC de NEM.",
            600: "NCC requiert que le serveur NIS soit démarré pour pouvoir envoyer et recevoir des transactions vers le nuage NEM. S'il vous plait, utilisez le menu NCC pour démarrer le noeud local.",
            601: "Le noeud NIS est déjà démarré. Une deuxième tentative de démarrage du noeud est impossible.",
            700: "Le compte fourni ne satisfait pas les critères de base pour la récolte. C'est généralement lié à la quantité de NEM dans le compte. Le compte doit avoir au minimum 1000 NEM pour que la récolte débute.",
            701: "La date limite fournie est dans le passé. La date limite doit être dans un délai dune journée.",
            702: "La date limite fournie est trop dans le futur. La date limite doit être dans un délai dune journée.",
            703: "Votre compte n'a pas une balance suffisante pour envoyer le nombre nombre de NEMs indiqué.",
            704: "Le message que vous avez inscrit est trop long pour être envoyé via NEM. Essayez de réduire la taille du message que vous tentez d'expédier.",
            705: "Le hachage de transaction existe déjà dans la base de données ou dans la liste des transactions non confirmées.",
            706: "La signature de la transaction n'a pas pu être vérifiée.",
            707: "L'horodatage de la transaction trop loin dans le passé.",
            708: "TL'horodatage de la transaction trop loin dans le futur.",
            709: "Ce compte est inconnu. Un compte à besoin de faire partie d'au moins une transaction (comme expéditeur ou destinataire) pour être connue du réseau.",
            901: "Il y a une erreur lors de la mise en place du mode déconnecté."
        },
        common: {
        	success: 'Succès', //title of the Success message modals
        	nisStatus: {
        		nccUnavailable: 'NCC is not available',
        		unavailable: 'NIS est introuvable',
        		notBooted: "NIS à besoin d'être démarré. S'il vous plait, ouvrir votre portefeuille et démarrer le noeud local via la boîte de dialogue contextuelle.",
        		synchronizing: 'NIS est en cours de synchronisation. Présentement au bloc {{1}}, est. {{2}} en retard.',
        		daysBehind: {
        			0: "moins d'une journée",
        			1: 'une journée',
        			many: '{{1}} jours'
        		},
        		synchronized: 'NIS est synchronisé!'
        	}
        },
		modals: {
			error: {
				title: 'Oops!',
				caption: 'ERREUR {{1}}'
			},
			confirmDefault: {
				yes: 'Oui',
				no: 'Non'
			},
			sendNem: {
				title: 'Envoyez des NEMs',
				labelDesc: 'Ce compte est étiqueté comme {{1}}',
				nullLabelDesc: "Ce compte n'est pas étiqueté",
				amount: 'Montant',
				recipient: "Compte du destinataire",
				message: 'Message',
				encrypt: 'Chiffrez le message',
				fee: 'Frais',
				dueBy: 'Expire dans',
				resetFee: 'Rétablir les frais minimum',
				hours: 'heures',
				password: 'Mot de passe',
				send: 'Envoyez',
				sending: 'Envoi...',
				successMessage: 'La transaction a été envoyé avec succès!'
			},
			clientInfo: {
				title: 'Information sur le Client',
				ncc: 'NEM Community Client - NCC',
				signer: 'Signataire',
				remoteServer: 'Serveur distant',
				local: 'Local',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Synchronisé',
				notSync: 'Pas synchronisé',
				notConnected: 'Pas connecté au Nuage NEM',
				loading: 'Chargement...'
			},
			transactionDetails: {
				title: 'Détails de la transaction',
				// this might be block or transaction ID
				id: 'ID',
				// this might be block or transaction Hash
				hash: 'Hash',
				type: 'Type de transaction',
				pending: 'En attente',
				outgoing: 'Sortant',
				incoming: 'Entrant',
				self: 'Sois même',
				sender: 'Expéditeur',
				recipient: 'Destinataire',
				message: 'Message',
				noMessage: 'Aucun message',
				encrypted: 'Le Message est chiffré',
				time: 'Horodatage',
				confirmations: 'Confirmations',
				amount: 'Montant',
				fee: 'Frais'
			},
			bootLocalNode: {
				title: 'Démarrage du noeud local',
				account: 'Compte pour démarrarer le noeud local',
				noLabel: '<span class="null">&lt;Aucune étiquette&gt;</span>',
				wallet: 'Portefeuille',
				node: 'Nom du noeud',
				boot: 'Démarrez',
				booting: 'Démarrage...'
			},
			notBootedWarning: {
				title: "Le noeud n'a pas été démarré!",
				message: "Un noeud local à besoin d'être démarré avant de pouvoir envoyer des NEMs!"
			},
			closeWallet: {
				title: 'Fermeture de portefeuille',
				message: "Êtes-vous sûr de vouloir fermer ce portefeuille et retourner à la page d'accueil?"
			},
			createAccount: {
				title: 'Créer un nouveau compte',
				label: 'Étiquette privé',
				wallet: 'Portefeuille',
				password: "Mot de passe du portefeuille",
				successMessage: 'Le compte {{1}} {{#2}}({{2}}){{/2}} à été créé!',
				create: 'Créer'
			},
			addAccount: {
				title: 'Ajouter un compte existant',
				privateKey: "Clé privé du compte",
				wallet: 'Portefeuille',
				password: "Mot de passe du portefeuille",
				successMessage: "Le compte {{1}} {{#2}}({{2}}){{/2}} à été ajouté à votre portefeuille!",
				add: 'Ajouter',
				label: 'Étiquette'
			},
			setPrimary: {
				title: 'Définir votre compte principal',
				account: 'Le compte a été défini comme votre compte principal',
				noLabel: '<span class="null">&lt;Aucune étiquette&gt;</span>',
				wallet: 'Portefeuille',
				password: "Mot de passe du portefeuille",
				successMessage: 'Le compte {{1}} {{#2}}({{2}}){{/2}} a été défini comme votre compte principal!',
				set: 'Définir comme compte principal',
			},
			changeWalletName: {
				title: 'Changez le nom du portefeuille',
				wallet: 'Nom actuel du portefeuille',
				newName: 'Nouveau nom du portefeuille',
				password: "Mot de passe du portefeuille",
				successMessage: 'Le nom du portefeuille a été changé avec succès de <em>{{1}}</em> à <em>{{2}}</em>',
				change: 'Changer'
			},
			changeWalletPassword: {
				title: 'Changer le mot de passe du portefeuille',
				wallet: 'Portefeuille',
				password: 'Mot de passe actuel du portefeuille',
				newPassword: 'Nouveau mot de passe',
				confirmPassword: 'Confirmer le nouveau mot de passe',
				successMessage: 'Le mot de passe du portefeuille a été changé avec succès',
				change: 'Changer',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: "Le mot de passe et le mot de passe de confirmation ne sont pas pareils. S'il vous plait, assurez-vous de taper votre nouveau mot de passe correctement."
			},
			changeAccountLabel: {
				title: "Changer l'étiquette du compte",
				label: 'Étiquette du compte',
				wallet: 'Portefeuille',
				password: "Mot de passe du portefeuille",
				successMessage: 'Le compte {{1}} est maintenant étiquetté comme {{2}}',
				change: 'Changer'
			},
			removeAccount: {
				title: 'Retirer un compte',
				wallet: 'Portefeuille',
				password: "Mot de passe du portefeuille",
				warning: "S'il vous plait, assurez-vous que ce compte ne contient plus de NEMs avant de le retirer, sinon les NEMs qu'il contient seront perdus pour toujours.",
				successMessage: 'Le compte {{1}} {{#2}}({{2}}){{/2}} à été retiré!',
				remove: 'Retirer'
			},
			nisUnavailable: {
				title: 'NIS est non disponible',
				message: 'Déconnecté de NIS, en attente de connexion'
			},
			shutdown: {
				title: "Fermeture de l'application",
				message: "Êtes-vous certain de vouloir fermer l'application NEM Community Client?"
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Le portefeuille a été importé avec succès!',
			nav: {
				start: 'Commencer',
				about: 'À propos de NEM',
				help: 'Aide'
			},
			main: {
				leftTitle: 'Nouveau dans <em>NEM</em>?',
				leftButton: 'Créer un nouveau portefeuille ',
				walletNamePlh: 'Nom de votre portefeuille',
				passwordPlh: 'Mot de passe',
				create: 'Créer',
				rightTitle: 'Déjà un <em>NEM</em>bre?',
				rightButton: 'Ouvrir votre portefeuille',
				openButton: 'Ouvrir',
				walletsFound: '<strong>{{1}}</strong> <em>portefeuille(s) trouvé(s)</em>',
				copyright: 'Photographie par <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC chiffre votre portefeuille',
						description: 'La <em>sécurité</em> est très importante pour éviter le vols de vos pièces NEMs &amp; actifs.'
					},
					{
						title: 'NCC chiffre votre portefeuille',
						description: 'La <em>sécurité</em> est très importante pour éviter le vols de vos pièces NEMs &amp; actifs.'
					}
				]
			},
			about: {
				sections: [
					{
						title: 'Comment NCC fonctionne?',
						paragraphs: [
							'<strong>NCC</strong>offre un accès à vos actifs et vos NEMs comme un portefeuille traditionnel le ferait.',
							"<strong>NCC</strong> requiert l'accès à un serveur <strong>NIS</strong> pour pouvoir être fonctionnelle. Le standard est d'avoir un serveur local actif (est installé ensemble avec <strong>NCC</strong>)",
							'Vous pouvez aussi configurer un accès à un serveur <strong>NIS</strong> distant.'
						],
						listItems: [
							'Multiples portefeuilles',
							'Définir de multiple compte à être inclus dans votre portefeuille'
						]
					},
					{
						title: "Qu'est-ce que le &#42;NIS?",
						paragraphs: [
							'Cette composante est responsable de garder le nuage <strong>NEM</strong> vivant.',
							'Plus il y a de <strong>NIS</strong> meilleure est la sécurité.',
							"<strong>NIS</strong> est le point d'accès au nuage <strong>NEM</strong>."
						],
						legend: "<strong>&#42;NIS</strong> signifie <strong>Serveur d'infrastructure NEM (NEM Infrastructure Server)</strong>"
					}
				]
			},
			footer: {
				copyright: '&copy; Copyright 2014. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Il y a approximativement {{1}} jours',
			lastAccessJustNow: 'Juste maintenant',
			lastAccessTooltip: 'Dernier accès {{1}}',
			primary: 'primaire',
			primaryShort: 'P',
			noLabel: "<Pas d'étiquette>",
			copiedToClipboard: "L'adresse a été copié dans le presse papier!",
			actions: {
				refreshInfo: 'Actualiser les informations',
				bootLocalNode: 'Démarré le noeud local',
				changeWalletName: 'Changer le nom du portefeuille',
				changeWalletPassword: 'Changer le mot de passe du portefeuille',
				mergeWallets: 'Fusionner des portefeuilles',
				exportWallet: 'Exporter un portefeuille',
				createAccount: 'Créer un nouveau compte',
				addAccount: 'Ajouter un compte existant',
				changeAccountLabel: "Modifier l'étiquette du compte",
				setPrimary: 'Définir comme compte primaire',
				removeAccount: 'Retirer le compte',
				clientInfo: 'Information sur le Client',
				closeWallet: 'Fermer le portefeuille',
				closeProgram: "Fermer l'application",
				copyClipboard: "Copier l'adresse dans le presse-papier"
			},
			nav: [
				"Tableau de bord",
				"Messages",
				"Contacts",
				"Transactions",
				"Blocs récoltés",
				"Bourse d'actif",
				"Nouvelles",
				"Applications",
				"Comptes",
				"Paramètres",
				"Fermer l'application"
			],
			bootNodeWarning: "Un noeud local doit être démarré avant de pouvoir utiliser pleinement les fonctionnalités de NCC."
		},
		dashboard: {
			assets: {
				title: 'Vos actifs'
			},
			importance: {
				title: "Score d'importance",
				unknown: 'statut inconnu',
				start: 'Lancer la récolte',
				harvesting: 'Récolte',
				stop: 'Arrêter la récolte',
				description: 'importance de compte dans le nuage NEM'
			},
			transactions: {
				title: 'Transactions récentes',
				sendNem: 'Envoyer des NEMs',
				balance: 'Balance courante',
				syncStatus: '(au blocs {{1}}{{#2}} : est. {{3}} jours en retard{{/2}})',
				unknown: 'inconnu',
				columns: [
					'',
					'Temps',
					'Expéditeur/Destinataire',
					'Message',
					'',
					'Détails',
					'Confirmations',
					'Frais',
					'Montant'
				],
				types: {
					pending: 'Transaction en attente',
					outgoing: 'Transaction sortante',
					incoming: 'Transaction entrante',
					self: 'Transaction vers sois même',
				},
				noMessage: 'Pas de message',
				encrypted: 'Le message est chiffé',
				view: 'Voir',
				pending: 'En attente',
				seeAll: 'Voir toutes les transactions',
				noTransactions: "Aucune transaction n'a encore été effectuée"
			},
			nemValue: {
				title: 'Statistiques sur la valeur de NEM'
			},
			messages: {
				titleTooltip: 'Messages'
			},
			news: {
				titleTooltip: 'Nouvelles'
			},
			notAvailable: 'Pas encore disponible en version alpha'
		},
		transactions: {
			title: 'Transactions',
			sendNem: 'Envoyer des NEMs',
			balance: 'Balance courante',
			filters: {
				all: 'Toutes les transactionss',
				pending: 'En attent',
				incoming: 'Entrante',
				outgoing: 'Sortante',
			},
			table: {
				columns: [
					'',
					'Temps',
					'Expéditeur/Destinataire',
					'Message',
					'',
					'Détails',
					'Confirmations',
					'Frais',
					'Montant'
				],
				types: {
					pending: 'Transaction en attente',
					outgoing: 'Transaction sortante',
					incoming: 'Transaction entrante',
					self: 'Transaction vers sois même',
				},
				noMessage: 'Pas de message',
				encrypted: 'Le message est chiffé',
				view: 'Voir',
				pending: 'En attente',
				noTransactions: "Aucune transaction n'a encore été effectuée",
				loading: 'Chargement de transactions supplémentaire...'
			}
		},
		harvestedBlocks: {
			title: 'Blocs récoltés',
			feeEarned: 'Honoraires perçus pour les 25 derniers blocs récoltés',
			table: {
				columns: [
					'Hauteur',
					'Temps',
					'Hachage du bloc',
					'Honoraires'
				],
				noBlocks: 'Aucun blocs récoltés ',
				loadMore: 'Voir les blocs récoltés plus âgées'
			},
			harvesting: {
				unknown: 'Statut inconnu',
				start: 'Lancer la récolte',
				harvesting: 'Récolte',
				stop: 'Arrêter la récolte'
			}
		},
		settings: {
			title: 'Paramètres',
			settings: [
				{
					name: 'Langue'
				}
			],
			save: 'Enregistrer les modifications',
			saveSuccess: '`Les paramètres ont été enregistrés avec succès'
		}
	}
});
