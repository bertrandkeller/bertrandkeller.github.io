# Apprendre Hugo

### Préambule

Voici, une proposition d’exercices pour apprendre à utiliser `goHugo`. Il ne s'agit pas d’un tutoriel où vous seriez guidé pas à pas.

Le cours est structuré sous forme d’exercices qui listent des actions à réaliser pour utiliser ce générateur de site statique. Il est par nature imparfait et n’est pas à suivre à la lettre.

Les cours peuvent être suivis pour réaliser un site exemple ou mettre en ligne son propre site. Les réponses sont dans l’**action/recherche** que vous allez effectuer. **Action** en écrivant du code par vous même. **Recherche** en allant chercher des ressources vous permettant de réaliser ces tâches.

Et **Moi** ? Vous pouvez vous passer de moi, mais vous pouvez aussi solliciter mon aide pour vous corriger et vous faire des corrections, des points théoriques…

En fonction de la prestation, de votre niveau et de votre besoin spécifique, vous pouvez solliciter une aide rémunérée. Débutant ou confirmé, il y a toujours des choses à apprendre pour lancer le site mais aussi pour en faire une machine de guerre.

### Prérequis

On lancera des lignes de commande dans le terminal de sa machine pour développer en local. Pour cela se référer à la documentation.

## Mettre en place un site en Hugo

### Préambule

Pour utiliser Hugo, il est nécessaire d’installer un executable sur sa machine. L'installation dépend de son système d’exploitation mais reste sans grande complexité par rapport à d’autres GSS.

### Exercice

1.  Installer Hugo (dernière version) :: <https://gohugo.io/getting-started/installing/>
2.  Créer un site en ligne de commande :: <https://gohugo.io/getting-started/quick-start/>
3.  Configurer `config.toml` :: <https://gohugo.io/getting-started/configuration/>
    -   Modifier les paramètres déjà créés
    -   Configurer la langue par défaut
    -   Ajouter des paramètres supplémentaires :: ex. description


### Aide pour le code

```
baseURL = "http://adresse.de.votre.site/"
languageCode = "fr-fr"
DefaultContentLanguage = "fr"
title = "le nom de votre site"

[params]
   mon_param_a_moi = "machin"
```

_Le site n’est pas encore fonctionnel. Le lancement de la compilation du site ne va rien donner. Il n’y a ni contenu, ni gabarits pour générer la moindre page._

### Arborescence

```
├── hugo/                 // Le nom du projet
   ├── archetypes/        // Configuration pour la création de contenu automatisée (on mettra de côté cette partie pour la suite)
   ├── content/           // Tout le contenu du site est stocké ici
   ├── layouts/           // Vos modèles de page spécifiques au site
   ├── static/            // Les fichiers statiques spécifiques au site
   └── config.toml        // Le fichier de configuration d’Hugo
```

## Créer un thème

### Préambule

Pour profiter d’une mise en page du contenu, il est nécessaire de créer des gabarits HTML. Ces gabarits peuvent être directement stockés à la racine du répertoire de travail dans `layouts`. Mais il est préférable d'utiliser un thème pour déclarer tout ce qui est générique (réutilisable pour un autre projet) et ensuite surcharger, si besoin, dans les répertoires à la racine `layouts` (pour tout ce qui est particulier).

### Exercice

1.  Aller dans le répertoire `themes`
    -   Créer un répertoire :: avec le Nom de votre thème
    -   Créer le fichier `theme.toml`
2.  Configurer
    -   Configurer `theme.toml` (<https://github.com/gohugoio/gohugoioTheme/blob/master/theme.toml>) :: se trouvant dans le répertoire du thème.
    -   Appeler le thème dans `config.toml` :: se trouvant à la racine du projet
3.  Créer les répertoires suivants
    -   `static` :: stocker les fichiers statiques appelés par les gabarit du thème (fichiers générés par défaut)
    -   `assets` :: stocker les fichiers nécessaires au fonctionnement du thème (fichiers non généré par défaut)
    -   `layouts` :: gabarits pour le fonctionnement du site
4.  Peupler les répertoires de fichiers statiques
    -   `static` :: avec un logo par exemple
    -   `assets` :: un fichier css, un fichier js
5.  Créer les fichiers gabarits de base :
    -   Créer un répertoire `_default` dans `layouts` et créer un fichier `baseof.html` dans `_default` :: ce sera le template parents de tous les templates
    -   Créer un fichier `index.html` à la racine de `layouts` :: ce sera le gabarits utilisé pour la page d‘accueil

### Aide pour le code

**baseof.html**
```
<html>
  <body>
    <main>
    {{ block "main" . }}   // Définition d’un `block` de contenu
    {{- end -}}
    </main>
  </body>
</html>
```

### Arborescence

```
└── hugo/                 // Le nom du projet
   ├── content/           // Tout le contenu du site est stocké ici
   ├── layouts/           // Vos modèles de page spécifiques au site
      ├── _default/       // Répertoire pour les gabarits de base (nom réservé)
      |  └── baseof.html  // Gabarits de base pour tous les gabarits (nom réservé)
      ├── home.html       // Gabarit de base la page d’accueil (optionnel si accueil différent)
      └── index.html      // Gabarit de base de toutes les pages (nom réservé)
   ├── static/            // Les fichiers statiques spécifiques au site
   ├── themes/            // Vos thèmes
   |  └── wonderfull/     // Nom de votre thème
   |     ├── assets/      // Les fichiers sources à compiler de votre thème
   |     ├── layouts/     // Vos modèles de page du thème
   |     ├── static/      // Les fichiers statiques de votre thème
   |     |  ├── css/      // Les fichiers CSS compilés
   |     |  ├── img/      // Les images du site.
   |     |  ├── js/       // Les fichiers JS compilés
   |     |  └── svg/      // Les fichiers SVG vont ici
   |     └── theme.toml   // Le fichier de configuration de votre thème
   └── config.toml        // Le fichier de configuration d’Hugo
```

## Créer du contenu pour la page d’accueil

### Préambule

Vous ne voulez pas créer de thème, libre à vous d’en utiliser un tout fait.

> Pour cela visiter le site <https://themes.gohugo.io/>, choisir un thème, télécharger le thème et le placer dans le répertoire `theme` de votre projet (c’est la méthode manuelle, mais il y en a d'autres). Appeler le thème dans `config.toml`.

Dans Hugo la structure de contenu et directement liée à la structure des fichiers du thème.

Il existe une convention nommage entre les 2 répertoires qui permet de déclarer des fichiers de mise en forme pour des types de contenus sans avoir à faire de lien directement dans les fichiers de contenu (appel implicite). Pas besoin d’appeler le gabarit dans les fichiers de contenu, il y a un appel implicite des fichiers du répertoire `layout` en fonction de la position du fichier de contenu dans l’arborescence du contenu (répertoire `content`).

### Exercice

1.  Contenu de la page d’accueil
    -   Créer un fichier `_index.html` dans `content`
        _Les fichiers préfixé avec avec le caractère `_` servent à mettre en forme les listes de contenus. On les placera à la racine d‘une section. Une section sans fichiers `_index.html` n'est pas présente dans la liste des `Section` du site (si on veut lister les sections, ex. pour un menu)._
2.  Entête et Front Matter
    -   Dans `_index.html` créer une entête en YAML avec un `title`
3.  Contenu brut
    -   Mettre du `lorem ipsum` dans la partie contenu ou tout autre type de contenu écrit au format MarkDown
        _Il n’est pas possible de mettre du `HTML`dans un fichier `Markdown` avec Hugo (par défaut). Par exemple pour faire un site avec une seul page. Il faut désactiver un paramètre de sécurité qui empêche un programme ou des utilisateurs non consciencieux d’ajouter du code non sécurisé._
4.  Afficher le contenu
    -   Aller dans `themes/layouts/index.html` et ajouter le code nécessaire à l’affichage.

### Aide pour le code

**_index.html**
```
---
title: Accueil
---

Labore consectetur cupidatat officia dolore ut irure amet occaecat duis sit nostrud.

Do aliquip aliqua ipsum fugiat nulla ut qui mollit anim adipisicing aliqua ullamco eiusmod. Nulla sunt sit cillum mollit adipisicing consequat proident id ullamco esse consequat est eu.

Eiusmod Lorem id non in proident culpa exercitation amet aliqua enim ipsum cupidatat excepteur aliqua. Ad fugiat laborum ad laboris. Nulla sunt cupidatat occaecat proident anim labore do id quis. Et et officia do sint commodo et cupidatat Lorem nulla officia sint ad anim commodo.

```

**themes/layouts/index.html**
```
{{- define "main" -}}      // Contenu à insérer dans le `block` main de `baseof.html`
  <h1>{{ .Title }}</h1>    // Affiche le contenu du contenu de la clef `title` du front matter du fichier correspondant
  {{ .Content }}           // Affiche le contenu du fichier Markdown correspondant
{{- end -}}
```

_Vous pouvez lancer la commande de compilation de hugo soit `hugo` ou `hugo serve` pour le mode serveur (url: <http://localhost:1313/>)_

### Arborescence

```
└── hugo/                 // Le nom du projet
   ├── content/           // Tout le contenu du site est stocké ici
   |  └── _index.html     // Fichier de contenu de la page d’accueil
   ├── layouts/           // Vos modèles de page spécifiques au site
   ├── static/            // Les fichiers statiques spécifiques au site
   ├── themes/            // Vos thèmes
   |  └── wonderfull/     // Nom de votre thème
   |     ├── assets/      // Les fichiers sources à compiler de votre thème
   |     ├── layouts/     // Vos modèles de page du thème
   |     ├── static/      // Les fichiers statiques de votre thème
   |     └── theme.toml   // Le fichier de configuration de votre thème
   └── config.toml        // Le fichier de configuration d’Hugo
```

## Créer du contenu pour une collection

### Préambule

Pour copier un répertoire de contenu prêt à l’emploi, visiter l’url : <https://github.com/gohugoio/hugoBasicExample>.

### Exercice

1.  Fichiers de la collection
    -   Créer un répertoire `post` dans `content`
    -   Créer un fichier `_index.html` dans `content/post`
    -   Créer plusieurs fichiers dans `content/post` avec des entêtes YAML ou TOML
2.  Contenu de la collection
    - Ajouter des entêtes YAML ou TOML à chacun de ces fichiers :: `title`
    - Ajouter des catégories dans entêtes YAML ou TOML des billets
3. Configurer les catégories
    - Aller dans `config.toml` et ajouter le code en exemple

_Un exercice présentera plus en détail comment configurer les catégories_

### Aide pour le code

**config.toml**
```
enableInlineShortcodes = true       // Au cas ou le contenu est copié de <https://github.com/gohugoio/hugoBasicExample>
```

### Arborescence

```
└── hugo/                           // Le nom du projet
   ├── content/                     // Tout le contenu du site est stocké ici
   |  ├── _index.html               // Fichier de contenu de la page d’accueil
   |  └── post/                     // Nom de votre collection
   |     ├── _index.md              // Page listant vos billets de collection
   |     ├── emoji-support.md       // Un billet
   |     ├── markdown-syntax.md     // Un billet
   |     ├── math-typesetting.md    // Un billet
   |     ├── placeholder-text.md    // Un billet
   |     ├── rich-content.md        // Un billet
   ├── themes/                      // Vos thèmes
   |  └── wonderfull/               // Nom de votre thème
   |     └── layouts/               // Vos modèles de page spécifiques au site
   |        ├── _default/           // Répertoire pour les gabarits de base (nom réservé)
   |        |  ├── baseof.html      // Gabarits de base pour tous les gabarits (nom réservé)
   |        ├── home.html           // Gabarit de base la page d’accueil (optionnel si accueil différent)
   |        └── index.html          // Gabarit de base de toutes les pages (nom réservé)
   ├── static/                      // Les fichiers statiques spécifiques au site
   └── config.toml                  // Le fichier de configuration d’Hugo
```

## Réaliser une boucle sur du contenu

### Préambule

Réaliser une boucle de contenu est la notion principale à maîtriser avec un moteur de template. Il permet de créer les pages d’index (ou de listes) listant l’ensemble des pages de détails et de collections.

Pour Hugo les pages (ou fichiers) sont typés (elles ont un type et un genre). On distingue donc les pages (toutes les pages) et les pages régulières (les pages de contenu de genre page - hors catégories, listes…). Sans cette distinction, si on liste les pages d’une section, on liste aussi les pages de listes et il faut les exclure avec une condition (if). Avec cette distinction, on peut lister aisément seulement les pages de contenus ou seulement les pages de listes.

_Il existe 5 genres : `home`, `page`, `section`, `taxonomy` et `taxonomyTerm`. À chaque genre, un nom de gabarits par défaut est disponible_

On peut lister toutes les pages (`.Pages`), ou seulement les pages de contenu (`.RegularPages`) ou encore toutes les pages des sous collections de manière récursive (`.RegularPagesRecursive`). En fonction du contexte, on listera tout le site ou seulement la section voulue.

A ce stade, il faut bien avoir en tête la relation entre la position de la page dans l’arborescence, son nom de fichier et sa présence sans des boucles de d’affichage. La puissance de goHugo réside dans une architecture de fichier stricte et homogène permettant de la manipulation à travers des boucles d‘affichage très performante.

### Exercice

1.  Gabarits de la collection
    -   Créer un fichiers `list.html` dans `layouts/_default`
2.  Boucle sur la collection :: <https://gohugo.io/functions/where/>
    -   Créer une boucle dans le fichier `themes/wonderfull/layouts/_default/list.html` avec `.RegularPages` :: Liste les pages de même niveaux
3.  Boucle sur la collection depuis la page d’accueil
    -   Tester plusieurs boucles dans le fichier `themes/wonderfull/layouts/index.html` avec `.Pages` `.RegularPages`

### Aide pour le code

**themes/wonderfull/layouts/_default/list.html**
```
<ul>
{{ range .RegularPages }} // Liste toutes les pages de contenu de la section (même niveau)
  <li>{{ .Title }}</li>
{{ end }}
</ul>
```

**themes/layouts/index.html**
```
// Liste parmi toutes les pages de premier niveau (racine et premier niveau de section), toutes les pages pour lesquelles la `Section` est égal à post
<ul>
{{ range where .Pages "Section" "post" }}  // Pour afficher seulement la page de liste
  <li>{{ .Title }}</li>
{{ end }}
</ul>
// Liste parmi toutes les pages du site, toutes les pages pour lesquelles la `Section` est égal à post
<ul>
{{ range where .Site.Pages "Section" "post" }} // Pour afficher toutes les pages de la section dont la page de liste
  <li>{{ .Title }}</li>
{{ end }}
</ul>
// Liste parmi toutes les pages du site, toutes les pages de contenu pour lesquelles la `Section` est égal à post
<ul>
{{ range where .Site.RegularPages "Section" "post" }} // Pour afficher la liste des pages de contenus de la section
  <li>{{ .Title }}</li>
{{ end }}
</ul>
```

### Arborescence

```
└── hugo/                           // Le nom du projet
   ├── content/                     // Tout le contenu du site est stocké ici
   |  ├── _index.html               // Fichier de contenu de la page d’accueil
   |  └── post/                     // Nom de votre collection
   |     ├── _index.md              // Page listant vos billets de collection
   |     ├── emoji-support.md       // Un billet
   |     ├── markdown-syntax.md     // Un billet
   |     ├── math-typesetting.md    // Un billet
   |     ├── placeholder-text.md    // Un billet
   |     ├── rich-content.md        // Un billet
   ├── themes/                      // Vos thèmes
   |  └── wonderfull/               // Nom de votre thème
   |     └── layouts/               // Vos modèles de page spécifiques au site
   |        ├── _default/           // Répertoire pour les gabarits de base (nom réservé)
   |        |  ├── baseof.html      // Gabarits de base pour tous les gabarits (nom réservé)
   |        |  ├── list.html        // Gabarits de base pour toutes les listes (fichiers `_index.html`)
   |        |  └── single.html      // Gabarits de base pour tous les fichiers de détail (Billets dans les collections)
   |        ├── home.html           // Gabarit de base la page d’accueil (optionnel si accueil différent)
   |        └── index.html          // Gabarit de base de toutes les pages (nom réservé)
   ├── static/                      // Les fichiers statiques spécifiques au site
   └── config.toml                  // Le fichier de configuration d’Hugo
```

## Créer un menu

### Préambule

Le menu est l‘autre manière d’afficher des listes (ou index) de pages. Le menu reste un élément de navigation tendancieux des systèmes de gestions de contenus. En effet, il n’a rien d'automatique car, que ce soit la liste des liens ou encore l'ordre des liens, il est sujet à un choix arbitraire n'ayant souvent aucun rapport avec la position dans une arborescence, la première lettre du nom du lien, ou la date de création.

Il existe donc plusieurs manières de créer des menus. On devra à mettre en place des paramètres (dans le front matter ou `config.toml`) pour gérer la liste des liens de chaque menu et l’ordre des liens.

### Exercice

1.  Création des pages de contenus
    - Créer des pages de contenu à la racine de `content` ex. `about.md`
2.  Menu : https://gohugo.io/templates/menu-templates/
    -   Configurer la liste des éléments de menu dans le fichier `config.toml`
    -   Afficher le code pour afficher ce menu dans le fichier `themes/wonderfull/layouts/_default/baseof.html`

### Aide pour le code

**config.toml**
```
menu:
  main:
  - identifier: blog
    name: This is the blog section
    title: blog section
    url: /post/
    weight: -110
  - identifier: about
    name: This is the about page
    title: about
    url: /about/
    weight: 110
```

_Il est possible d’ajouter ces bouts de code directement dans le front Matter de la page. C’est plus cohérent de le mettre dans la page, mais certaines modifications du menu demandent d’ouvrir plusieurs fichiers (au lieu d‘un seul dans ce cas)._

**themes/wonderfull/layouts/_default/baseof.html**
```
<ul>
{{ range .Site.Menus.main }}
<li>
    <a href="{{ .URL }}">{{ .Name }}</a>
</li>
{{ end }}
</ul>
```


## Ajouter des Taxonomies

### Préambule

Avec la structure de contenu de Hugo, les pages de catégories sont automatiquement générées. Le fichier `RSS`correspondant aussi.

Il est possible d’ajouter toute type de catégorie désirée dans `config.toml`. Cette catégorie (ou tag) devra correspondre à un paramètre ajouté dans le Front matter des fichiers.

Pour l’affiche de ces pages, il existe un gabarit réservé (`terms.html`)

### Exercice

1.  Création des catégories
    - Configurer le fichier `config.toml`
    - Ajouter des catégories dans les fichiers d‘une collection
2.  Personnalisation de la page d‘une catégorie
    - Modifier le code du gabarit `themes/wonderfull/layouts/_default/taxonomy.html` :: genre `taxonomy`
2.  Personnalisation de la page de liste des catégories
    - Modifier le code du gabarit `themes/wonderfull/layouts/_default/terms.html` :: genre `taxonomyTerm`

### Arborescence

```
└── hugo/                           // Le nom du projet
   ├── content/                     // Tout le contenu du site est stocké ici
   |  ├── _index.html               // Fichier de contenu de la page d’accueil
   |  └── post/                     // Nom de votre collection
   |     ├── _index.md              // Page listant vos billets de collection
   |     ├── emoji-support.md       // Un billet
   |     ├── markdown-syntax.md     // Un billet
   |     ├── math-typesetting.md    // Un billet
   |     ├── placeholder-text.md    // Un billet
   |     ├── rich-content.md        // Un billet
   ├── themes/                      // Vos thèmes
   |  └── wonderfull/               // Nom de votre thème
   |     └── layouts/               // Vos modèles de page spécifiques au site
   |        ├── _default/           // Répertoire pour les gabarits de base (nom réservé)
   |        |  ├── baseof.html      // Gabarits de base pour tous les gabarits (nom réservé)
   |        |  ├── list.html        // Gabarits de base pour toutes les listes (fichiers `_index.html`)
   |        |  ├── taxonomy.html    // Gabarits de base pour toutes les listes de catégories (fichiers `_index.html`)
   |        |  ├── single.html      // Gabarits de base pour tous les fichiers de détail (Billets dans les collections)
   |        |  └── terms.html       // Gabarits de base pour tous les fichiers de catégorie
   |        ├── home.html           // Gabarit de base la page d’accueil (optionnel si accueil différent)
   |        └── index.html          // Gabarit de base de toutes les pages (nom réservé)
   ├── static/                      // Les fichiers statiques spécifiques au site
   └── config.toml                  // Le fichier de configuration d’Hugo
```

## Multilingue

### Préambule

Lire la page <https://github.com/rayjolt/hugo-multilingual-example>

### Exercice

1. Configurer le site pour du multilingue
2. Modifier les menus et les listes
3. Créer un menu pour changer de langue
4. Créer les fichiers de chaînes de caractère pour la traduction


---
1. Scratch
2. Shortcode et Partial
3. Page bundle
4. Hugo Pipe
5. Table of content
---

## Configurer le site pour partage du code avec GIT

### Préambule

Chaque générateur de site statique présente ses particularités. Avant de synchroniser du code avec GIT. Nous allons créer le fichier `.gitignore`

### Exercice

1. `.gitignore`
 - Création du fichier
 - Ajout des règles pour n’envoyer que le nécessaire

## Configurer le site pour un hébergement avec Netlify

### Préambule

`Netlify` est un service qui permet d’héberger et générer facilement des sites statiques. Elle avait mis en place sa notoriété il y a quelques années en permettant de générer facilement n‘importe quel type de site car `Github` ne permettait de générer que des sites avec `Jekyll` (sans plugins spécifiques). D’autres services permettent de faire la même chose, mais sont souvent un peu plus compliqués à mettre en place et à maintenir.

`Netlify` garde sa place dominante car elle a banalisé (rendu gratuit) son principe de déploiement et d’hébergement ultra simple en ajoutant des fonctions intéressantes pour la JAMStack. Nous allons voir quelques une des ces fonctionnalités, mais il faut garder en tête que le monde de `Netlify` n’est pas idyllique et il faut être capable de ne pas en dépendre totalement.

1.  Configuration
2.  Netlify CMS
3.  HTTPS & Domains
4.  Identity
5.  Forms
6.  Plugins

### Exercice

1. Créer une compte sur Netlify
2. Créer un nouveau projet et configurer la commande de compilation du site.
3. Suivre le déploiement
4. Modifier le nom du projet (url)
5. Créer un fichier `netlify.toml` et configurer les commande déploiement
6. Configurer les règles de déploiement des branches.
7. Ajouter des notifications pour suivre l’état des builds

## Configurer le site pour une édition avec Forestry

### Préambule

Forestry est un service d’édition de contenu MarkDown par synchronisation du depôt Git. Il n’y a pas de base de données ou de système découplé. Le service agit directement sur le dépôt (commit) comme si le dépôt était modifié par un utilisateur à travers son éditeur de code.

Forestry se sert de la configuration de GIT (processus éditorial) pour permettre l’édition de contenu. Il propose une interface d’édition avancée du contenu et des entêtes Front Matter des fichiers de contenus. Il est destinée à des rédacteurs plus ou moins occasionnels sur le projet qui n'ont aucune plus value à avoir un accès au code du site.

L’usage de Forestry peut être vraiment intéressant, mais son usage fait retomber dans les travers de l’utilisation d’un CMS. La moindre modification de structure demande une intervention d’un `administrateur` pour mettre à jour les capacités d’éditions. Un bug chez Forestry peut bloquer l’édition.

Pour faciliter la mise en place du back-office et sa maintenance, il existe un fichier de configuration qu'on ajoute à la racine du site.

Voir <https://forestry.io/docs/settings/config-files/> et <https://twitter.com/forestryio/status/1270638409569222656>.

### Exercice

1. Créer un compte
    - Aller sur Forestry.io et synchroniser le dépôt GIT.
2. Configurer :: settings
    - General :: Configuration du site sur le service Forestry.io
    - Collaborators and Teams :: Ajout de compte rédacteur
    - Sidebar :: Limiter les contenus accessibles à l’édition pour les rédacteurs (non admin)
    - Repository :: Accès au répertoire Git synchronisé
    - Media :: Configuration d’un fournisseur externe d’image pour l’intégration dans les contenus
    - Previews :: Configuration de la prévisualisation des modifications avant publication
3. Configurer le Front Matter
    - Sélectionner la page d’accueil : Ajouter des champs ex. Text Field, Textarea, Image…
    - Sélectionner post : Ajouter des champs ex. Sortable List, Repeatable Field Group…
4. Enregistrer et récupérer le contenu par un git pull

### Arborescence

```
└── hugo/                           // Le nom du projet
   ├── .forestry/                   // Rassemble les fichiers de configuration pour Forestry.io
   ├── content/                     // Tout le contenu du site est stocké ici
   |  ├── _index.html               // Fichier de contenu de la page d’accueil
   |  └── post/                     // Nom de votre collection
   |     ├── _index.md              // Page listant vos billets de collection
   |     ├── emoji-support.md       // Un billet
   |     ├── markdown-syntax.md     // Un billet
   |     ├── math-typesetting.md    // Un billet
   |     ├── placeholder-text.md    // Un billet
   |     ├── rich-content.md        // Un billet
   ├── themes/                      // Vos thèmes
   |  └── wonderfull/               // Nom de votre thème
   |     └── layouts/               // Vos modèles de page spécifiques au site
   |        ├── _default/           // Répertoire pour les gabarits de base (nom réservé)
   |        |  ├── baseof.html      // Gabarits de base pour tous les gabarits (nom réservé)
   |        |  ├── list.html        // Gabarits de base pour toutes les listes (fichiers `_index.html`)
   |        |  ├── single.html      // Gabarits de base pour tous les fichiers de détail (Billets dans les collections)
   |        |  └── terms.html       // Gabarits de base pour tous les fichiers de catégorie
   |        ├── home.html           // Gabarit de base la page d’accueil (optionnel si accueil différent)
   |        └── index.html          // Gabarit de base de toutes les pages (nom réservé)
   ├── static/                      // Les fichiers statiques spécifiques au site
   └── config.toml                  // Le fichier de configuration d’Hugo
```

## Modules

<https://www.hugofordevelopers.com/articles/master-hugo-modules-managing-themes-as-modules/>
https://kodify.net/hugo-static-site-tutorials/#themes


Ressources :
https://themes.gohugo.io//theme/hugo-theme-color-your-world/posts/page/2/
https://timmastny.rbind.io/blog/intro-hugo-blogdown-chef/
