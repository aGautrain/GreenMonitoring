La partie serveur du projet qui permet de rendre disponible les données.
Le framework sails.js a permis d'accélérer la phase de conception qui au final
n'a consisté qu'en la définition de l'API Records :
	- définition du modèle
	- ajout de deux méthodes au contrôleur, une par entité observable (température/humidité)
	
Les fichiers intéressants sont donc :
/api/controllers/RecordsController.js
/api/models/RecordsModel.js

La connexion au serveur MongoDB est à paramétrer dans le fichier :
/config/connections.js