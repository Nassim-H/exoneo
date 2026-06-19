# Cabinet Exoneo – Documentation du projet

## Présentation

Site vitrine développé avec :

* Next.js
* TypeScript
* Tailwind CSS
* Vercel (hébergement)

Le site est déployé automatiquement à chaque modification du dépôt GitHub.

## Accès

Le propriétaire du projet doit disposer des accès suivants :

### GitHub

Contient le code source du projet.

### Vercel

Gère l'hébergement et les déploiements.

### Domaine

Le nom de domaine doit appartenir au client.

### Google Search Console

Permet le suivi SEO et l'indexation du site.

### Google Analytics

Permet le suivi des visiteurs.

## Installation du projet

### Cloner le dépôt

```bash
git clone <URL_DU_REPO>
```

### Installer les dépendances

```bash
npm install
```

### Lancer le projet en local

```bash
npm run dev
```

Le site sera accessible sur :

```txt
http://localhost:3000
```

## Build de production

Créer le build :

```bash
npm run build
```

Lancer le build :

```bash
npm start
```

## Déploiement

Le projet est connecté à Vercel.

Chaque push sur la branche principale déclenche automatiquement :

1. Build du projet.
2. Déploiement.
3. Mise en ligne.

Aucune intervention manuelle n'est nécessaire.

## Variables d'environnement

Les variables sont configurées dans :

```txt
Vercel > Settings > Environment Variables
```

Exemples :

```env
NEXT_PUBLIC_SITE_URL=
RESEND_API_KEY=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

Les clés sensibles ne doivent jamais être stockées dans le code.

## Structure du projet

```txt
app/
components/
lib/
public/
styles/
```

## Images

Les images sont stockées dans :

```txt
public/
```

Exemples :

```txt
public/images/
public/logos/
```

## Modification du contenu

### FAQ

Fichier :

```txt
À compléter
```

### Témoignages

Fichier :

```txt
À compléter
```

### Logos partenaires

Dossier :

```txt
public/logos
```

### Métadonnées SEO

Fichier :

```txt
app/layout.tsx
```

Contient :

* title
* description
* Open Graph
* réseaux sociaux

### robots.txt

Fichier :

```txt
public/robots.txt
```

### sitemap.xml

Fichier :

```txt
public/sitemap.xml
```

## Dépendances principales

* Next.js
* React
* TypeScript
* Tailwind CSS
* Framer Motion

## Procédure pour modifier le site

1. Modifier les fichiers souhaités.
2. Vérifier le résultat localement :

```bash
npm run dev
```

3. Sauvegarder les changements :

```bash
git add .
git commit -m "Description des modifications"
```

4. Envoyer les modifications :

```bash
git push
```

5. Attendre le déploiement automatique sur Vercel.

## Sauvegarde

Le code source est disponible sur GitHub.

Il est recommandé d'effectuer des sauvegardes régulières.

## Reprise du projet par un autre développeur

Le projet peut être repris par n'importe quel développeur maîtrisant :

* Next.js
* React
* TypeScript
* Tailwind CSS

Toutes les ressources nécessaires appartiennent au client :

* code source ;
* hébergement ;
* nom de domaine ;
* outils SEO et statistiques.

Le client reste propriétaire de l'ensemble du projet.

## Maintenance

La livraison du site correspond à sa version initiale.

Les modifications futures, nouvelles fonctionnalités ou évolutions feront l'objet d'une prestation distincte.

## Contact

Développeur :

Nom :

Email :

Téléphone :

Date de livraison :

Version :

1.0
