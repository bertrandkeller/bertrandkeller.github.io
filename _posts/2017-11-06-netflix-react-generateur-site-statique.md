---
title: Netflix abandonne React.js pour ses landing pages
image: https://pbs.twimg.com/media/DNB78-zVAAA88QM.jpg
description: "Netflix vient d'annoncer leur abandon de React.js sur leurs pages d'interface et ils ont vue les performances de chargement s'améliorer de 50%."
---

> By getting rid of React and moving to plain JavaScript, we saw a 50% reduction in our Time to interactive metric.

Jake Archibald nous propose un petit article sur la démarche : [Netflix functions without client-side React, and it's a good thing](https://jakearchibald.com/2017/netflix-and-react/).

**Charger :**

* Charger le HTML & CSS en parallèle.
* Attendre la fin du chargement CSS et les exécuter.
* Afficher, et continuer le rendu en tant que HTML.

**…est toujours plus rapide que de charger :**

* Charger le HTML (très léger).
* Charger le CSS & JS en parallèle.
* Attendre la fin du chargement CSS et les exécuter.
* Attendre la fin du chargement JS et les exécuter.  
(Dans la plupart des cas, les SPAs attendent jusqu'à ce point pour commencer le chargement des données).
* Mettre à jour le DOM et afficher.

Ainsi Netflix est passé de la seconde option à la première. C'est-à-dire que plutôt qu'afficher le contenu en passant par du JS, ils ont simplement préféré afficher de simples pages HTML (pages statiques).

## Le fonctionnement

Les technologies web permettent d'afficher des pages selon différentes manières. Vous pouvez tout aussi bien proposer un chemin de chargement de pages très compliqué et tordu pour les navigateurs web ou alors essayer d'optimiser ce chemin de chargement pour qu'il soit le plus simple possible.

Aujourd'hui avec la multiplicité des FrameWorks JS (React.js, Angular.js, Vue.js…), les développeurs ont tendances à les utiliser pour tous les types d'interfaces. Malheureusement pour des simples pages de contenus (certainement 90% ou 95% des pages du web), le chemin de chargement (option 2 ci-dessus) reste trop compliqué.

> Netflix uses React on the client and server, but they identified that the client-side portion wasn't needed for the first interaction, so they leaned on what the browser can already do, and deferred client-side React.

## Prise de conscience

C'est assez risible pour des intégrateurs comme moi qui militons depuis des années pour une optimistation des pages sans JS inutiles de voir les développeurs de Netflix faire ce revirement.

Depuis plusieurs années, les offres d'embauches de développeurs Front "à tout faire" sont pléthore ; les entreprises donnent la réalisation des interfaces à des développeurs JS qui souvent (mais pas tout le temps) utilisent une techno parce qu'on leur demande alors qu'elle n'est pas forcément justifée.

La volonté d'utiliser des technologies à la mode a détourné certaines équipes de ce que les utilisateurs avaient vraiment besoin.

## Les générateurs de site statique

Encore et toujours je reviens sur les [générateurs de site statique](/generateur-site-statique/) ; pendant que certains se concentrent sur la maintenance de leur plateforme propulsée par du JavaScript d'autres se sont penchés sur des technologies plus simples.

Utiliser du Markdown s'est dégager du temps de réflexion sur les processus d'édition et le développement d'interfaces. Le développement d'applications et la publication de pages web sont 2 métiers différents et complémentaires.

Pour des interfaces performantes, ne pas négliger la présence dans une équipe d'un intégrateur aguerri qui aura à cœur de prendre soin de la stratégie éditoriale de pages web.
