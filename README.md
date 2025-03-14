# CYNA Web 🌐

Bienvenue sur **CYNA Web**, une application web moderne et intuitive construite avec Next.js, TypeScript, Tailwind CSS et une gestion optimisée de l'état et des requêtes API.

---

## 📖 À propos du projet

CYNA Web permet à ses utilisateurs de gérer leurs informations personnelles, de consulter un dashboard interactif, et de gérer leurs abonnements à divers produits. L'application est conçue pour offrir une expérience utilisateur fluide grâce à des composants réutilisables et un routing efficace.

## 🚀 Fonctionnalités principales

- **Authentification utilisateur** (connexion, inscription, gestion de session)
- **Dashboard dynamique** avec des informations en temps réel
- **Gestion des abonnements** : s'abonner/se désabonner facilement
- **Interface responsive et intuitive** avec Tailwind CSS et Framer Motion

## 🛠️ Technologies utilisées

- **Next.js** pour le rendu SSR performant
- **Tailwind CSS** pour un design élégant et adaptatif
- **Framer Motion** pour des animations fluides
- **Context API** et hooks personnalisés pour la gestion de l'état

## 📁 Structure du projet

```
mesdcu-web/
├── app/
│   ├── dashboard/
│   ├── login/
│   ├── register/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── context/
│   └── authContext.js
├── hooks/
│   ├── useDashboard.js
│   ├── useGetMe.js
│   ├── useLogin.js
│   ├── useProducts.js
│   ├── useRegister.js
│   ├── useSubscribe.js
│   └── useUnsubscribe.js
├── public/
└── package.json
```

## ⚙️ Installation

Clonez le dépôt et installez les dépendances :

```bash
git clone
cd mesdcu-web
npm install
```

## 🚦 Lancer le projet

Lancez l'application en local :

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir l'application.

## 🧑‍💻 Développement

- Utilisez les hooks personnalisés (`useLogin`, `useDashboard`, etc.) pour interagir avec l'API.
- Gérez l'état global via `authContext`.

## 🤝 Contribution

Toute contribution est la bienvenue !

1. Forkez le projet
2. Créez votre branche (`git checkout -b nouvelle-fonctionnalite`)
3. Commitez vos modifications (`git commit -m 'Ajout fonctionnalité géniale'`)
4. Poussez votre branche (`git push origin nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request 🎉
