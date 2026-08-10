# 🚚 LogiTrack — Frontend

LogiTrack est une application web de **gestion logistique** développée avec **React 19** et **Vite**.

Le frontend permet de gérer les **clients, produits et commandes** et communique avec une API REST développée avec **Spring Boot**.

---

## 🛠️ Technologies

* React 19
* Vite
* JavaScript ES6+
* React Router DOM
* Axios
* React Hook Form
* Yup
* Material UI (MUI)
* Docker
* Git / GitHub

---

## 📂 Structure du projet

```text
src/
├── assets/
├── clients/
├── commandes/
├── components/
├── contexts/
├── pages/
├── produits/
├── routes/
├── services/
└── validation/
```

---

## 🔐 Authentification

L'application contient :

* Inscription
* Connexion
* Déconnexion
* Authentification avec JWT
* Gestion de la session utilisateur
* Récupération du rôle
* Redirection vers le Dashboard

Après la connexion, le JWT est enregistré côté client et utilisé pour authentifier les requêtes.

---

## 🔑 Axios Interceptors

Une configuration Axios centralisée permet de :

* récupérer automatiquement le JWT ;
* ajouter le token dans le header `Authorization` ;
* gérer les erreurs HTTP.

Les erreurs principales prises en charge sont :

```text
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error
```

En cas de `401`, la session est supprimée et l'utilisateur est redirigé vers `/login`.

---

## 🛡️ Protection des routes

Les routes privées sont protégées afin qu'un utilisateur non authentifié ne puisse pas accéder aux pages internes.

Exemples :

```text
/dashboard
/clients
/products
/orders
```

Un système de **Role Guard** permet également de contrôler l'accès selon le rôle de l'utilisateur.

---

## 📊 Dashboard

Le Dashboard permet d'afficher les principales informations de l'application :

* Nombre de clients
* Nombre de produits
* Nombre de commandes
* Informations sur les commandes
* Produits avec stock faible

---

## 👥 Gestion des clients

Fonctionnalités développées :

* Affichage des clients
* Recherche
* Ajout
* Modification
* Suppression
* Consultation des détails
* Pagination

---

## 📦 Gestion des produits

Fonctionnalités développées :

* Affichage des produits
* Recherche
* Ajout
* Modification
* Suppression
* Consultation des détails
* Recherche par catégorie
* Filtrage par prix
* Gestion du stock
* Pagination

---

## 🛒 Gestion des commandes

Fonctionnalités développées :

* Affichage des commandes
* Consultation des détails
* Création d'une commande
* Gestion des produits d'une commande
* Modification du statut
* Recherche des commandes d'un client
* Filtrage par statut

### Statuts

```text
EN_ATTENTE
EXPEDIEE
LIVREE
```

---

## 📄 Pagination et recherche

Les données sont consommées depuis les endpoints paginés de l'API.

Fonctionnalités :

* Changement de page
* Choix du nombre d'éléments
* Affichage du nombre total
* Recherche
* Tri
* Filtrage

---

## 📝 Validation

Les formulaires utilisent :

```text
React Hook Form
+
Yup
```

pour contrôler et valider les données avant leur envoi à l'API.

---

## 🔗 Communication avec le Backend

Le frontend communique avec l'API REST Spring Boot grâce à Axios.

URL utilisée en développement :

```text
http://localhost:8080/api
```

Exemples d'opérations :

```text
Authentication
    ↓
Clients
    ↓
Produits
    ↓
Commandes
```

Le backend utilise une base de données **MySQL** pour stocker les données de l'application.

Architecture :

```text
React
  │
  │ Axios / REST API
  ▼
Spring Boot
  │
  │ JPA / Hibernate
  ▼
MySQL
```

---

## 🐳 Docker

Le projet contient un `Dockerfile` permettant de lancer le frontend dans un conteneur Docker.

### Construire l'image

```bash
docker build -t logitrack-frontend .
```

### Lancer le conteneur

```bash
docker run -d -p 5173:5173 --name logitrack-frontend logitrack-frontend
```

Application :

```text
http://localhost:5173
```

---

## ▶️ Installation

Cloner le projet :

```bash
git clone https://github.com/HibaHAJAJI/LogiTrack_Frontend.git
```

Accéder au projet :

```bash
cd LogiTrack_Frontend
```

Installer les dépendances :

```bash
npm install
```

Lancer le projet :

```bash
npm run dev
```

---

## 🏗️ Build

Créer le build de production :

```bash
npm run build
```

---

## 🔗 Repository

https://github.com/HibaHAJAJI/LogiTrack_Frontend

---

## 👩‍💻 Auteur

**Hiba HAJAJI**

Junior Full-Stack Developer

Technologies :

```text
React
JavaScript
Spring Boot
Java
MySQL
JWT
REST API
Docker
Git / GitHub
```

---

## 📄 Projet

Projet réalisé dans le cadre d'un projet académique de développement d'une application de gestion logistique.
