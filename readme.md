# Kokket - Backend E-commerce

Backend API pour une plateforme e-commerce construite avec Express.js, Sequelize et MySQL.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- **Node.js** (version 14 ou supérieure) - [Télécharger](https://nodejs.org/)
- **npm** (généralement inclus avec Node.js)

## Installation et Lancement

### 1. Cloner ou télécharger le projet

```bash
git clone https://github.com/dilane-ts/e-commerce-backend.git
cd e-commerce-backend
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer la base de données

Créez un fichier `.env` à la racine du projet en copiant le fichier `.env.example` :

```bash
cp .env.example .env
```

Modifiez ensuite le fichier `.env` avec vos identifiants MySQL que vous pouvez generer sur [Panel agh](https://panel.agh.edu.pl) si vous n'avez pas mysql en local:

```env
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=votre_mot_de_passe
MYSQL_DATABASE=e_commerce_db
```

**Notes :**
- `MYSQL_HOST` : L'adresse du serveur MySQL (généralement `localhost` pour une installation locale)
- `MYSQL_PORT` : Le port MySQL (par défaut `3306`)
- `MYSQL_USER` : Votre utilisateur MySQL (par défaut `root`)
- `MYSQL_PASSWORD` : Votre mot de passe MySQL
- `MYSQL_DATABASE` : Le nom de la base de données (sera créée automatiquement)

### 4. Lancer le serveur

```bash
npm start
```

Le serveur devrait maintenant s'exécuter sur `http://127.0.0.1:8080`

Vous devriez voir un message dans la console :
```
Drop and re-sync db
Server running at `http://127.0.0.1:8080`
```

## Structure du Projet

```
project/
├── app/
│   ├── config/
│   │   ├── auth.config.js       # Configuration de l'authentification
│   │   └── db.config.js         # Configuration de la base de données
│   ├── controllers/             # Logique métier des routes
│   ├── models/                  # Modèles Sequelize
│   │   ├── orderItemsModel.js
│   │   ├── orderModel.js
│   │   ├── paymentModel.js
│   │   ├── productImageModel.js
│   │   ├── productModel.js
│   │   ├── productTrackModel.js
│   │   ├── roleModel.js
│   │   ├── userModel.js
│   │   └── index.js
│   └── routes/                  # Définition des routes API
├── server.js                    # Point d'entrée de l'application
├── package.json                 # Dépendances du projet
├── .env.example                 # Modèle de configuration
└── readme.md                    # Ce fichier
```

## Technologies Utilisées

- **Express.js** - Framework web
- **Sequelize** - ORM pour MySQL
- **MySQL2** - Driver MySQL
- **bcrypt** - Chiffrement des mots de passe
- **JWT (jsonwebtoken)** - Authentification par tokens
- **CORS** - Gestion des requêtes cross-origin
- **body-parser** - Parsing des requêtes JSON
- **dotenv** - Gestion des variables d'environnement

## Scripts Disponibles

```bash
# Démarrer le serveur
npm start

# Lancer les tests (à configurer)
npm test
```

## Authentification

L'application utilise JWT (JSON Web Tokens) pour l'authentification. Les rôles disponibles sont :
- `customer` - Client standard
- `admin` - Administrateur

## Dépannage

### Erreur de connexion à la base de données

Si vous voyez une erreur du type `Failed to sync db`, vérifiez :
- MySQL est en cours d'exécution
- Les identifiants dans `.env` sont corrects
- La base de données existe ou sera créée automatiquement
- Le port MySQL (3306 par défaut) est accessible

### Port 8080 déjà utilisé

Si le port 8080 est déjà utilisé par une autre application, vous pouvez modifier le port dans `server.js` :

```javascript
app.listen(8080, () => {  // Changez 8080 en un autre port
    console.log('Server running at `http://127.0.0.1:8080`')
})
```

### Dépendances manquantes

Si vous voyez des erreurs liées aux modules manquants, réinstallez les dépendances :

```bash
rm -rf node_modules package-lock.json
npm install
```

## Support

Pour toute question ou problème, veuillez créer une issue sur [GitHub](https://github.com/dilane-ts/e-commerce-backend/issues)

