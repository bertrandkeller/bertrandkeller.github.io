---
title: Comment les frameworks ont détruit la performance Web ?
image: 
categories:
- Low-Tech
---

Au cours des dernières années, il semble que les performances du Web aient baissé.

> En effet, avec de nombreux sites utilisant désormais des frameworks tels que React et Vue, les SPA devenant monnaie courante et les demandes de développement étant nombreuses, la page Web moyenne est désormais de plus grande en plus grande, les pages de 2 à 3 Mo étant plus courantes que jamais.
**@cheatmaster30** - [Putting devs before users: how frameworks destroyed web performance](https://uxdesign.cc/putting-devs-before-users-how-frameworks-destroyed-web-performance-6b2c2a506aab)

## Le poids des pages

Vous voyez ce n’est pas que moi qui le dit. On parle de faire des économies d'énergie, de baisser notre empreinte… Nous faisons des manifestations dans la rue, nous nous glorifions d’accords internationaux… et pourtant le poids des pages web augmentent.

![Http Archive page weight 2010 2019](/assets/http-archive-page-weight-2010-2019.png)

## Notre culture

Les économies d'énergie dans le développement web ne font pas partie de la culture. Plus précisément ce qui ne fait pas partie de la culture, c’est la sobriété.

Le web permet des choses extraordinaires. Il a été créé pour échanger des papiers universitaires et participer à une coopération entre chercheurs afin (de manière idéale) de participer à un monde meilleur. Chose qui se produit encore aujourd’hui avec la possibilité de pouvoir éditer son propre site ou de se former en ligne.

Seulement, il y a eu une modification de la typologie des équipes de développement ces dernières années. je n’ai pas de preuves irréfutables à ce sujet, je ne suis pas non plus chercheur sur le sujet. Mais entre 2010 et 2019, la popularité des langages s’est modifiée ; notamment concernant Javascript.

### Les chiffres

![Popularité des langages informatiques janvier 2011](/assets/langage-populaire-janvier-2011.png)

En Janvier 2011, JavaScript concernait 7% des questions sur Stack Overflow. À côté de ce langage nous avions du C#, du Java, du PHP et du Python.

![Popularité des langages informatiques novembre 2018](/assets/langage-populaire-novembre-2018.png)

En Janvier 2018, la popularité de JavaScript concernait 10% des questions sur Stack Overflow. Il semble que C# et Java aient été défavorisés au profit de Python et R (métier de Data Scientist). Et que Java et PHP aient été défavorisés au profit de JavaScript.

### La tendance possible

Mon analyse ne peut être que partielle, car le développement web ne concerne qu’une part minime du développement en général. Cependant, vu la décrue de PHP et de Java, je pense qu’une partie de ce qu'on appelait des développeurs Back (à l’époque) est passé dans du développement Front aujourd‘hui.

Et s’il ne sont pas passés au développement Front, ils sont devenus directeurs techniques d’équipes et dirigent des développeurs Front (qui ne sont qu’une équipe de développement parmi les autres équipes de développement).

## Le problème

Il est possible qu’on a fait passé la culture informatique des logiciels (qui s'exécute directement sur des machines) sur le web. Le web qui est un concept tout autre sur lequel on charge des contenus à travers le réseau.

> De plus, dans de nombreux cas, le choix du langage lui-même a été choisi parce qu'il est «cool» plutôt que parce qu'il est adapté au projet..
**@cheatmaster30** - [Putting devs before users: how frameworks destroyed web performance](https://uxdesign.cc/putting-devs-before-users-how-frameworks-destroyed-web-performance-6b2c2a506aab)

Que ce soit dans les entreprises, dans les écoles… on n’apprend pas à faire du web mais du logiciel dans des navigateurs ; des applications, des jeux dans le navigateur.

L’objectif est de numériser pour contrôler, pouvoir "scaler" et livrer vite. Car il faut mettre une culture de la livraison dans les entreprises et non pas une culture de la qualité.

Pour aller vite et loin, on anticipe un maximum et on équipe le projet d‘outils qui ne sont pas indispensables. Comme on ne connaît pas forcément bien le web, on se base sur des Frameworks populaires qui, a priori, intègrent la gestion de cas d’usage liés au web.

Cette manière de faire mène à de la monoculture et à des pages trop lourdes par rapport au besoin réel des usagers. Voilà pourquoi, les frameworks ont détruit la performance Web.


