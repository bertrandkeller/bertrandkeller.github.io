---
title: Outils pour l'écriture riche - Ovide/Tiddlywiki/Odyssey
---

Certains groupes de personnes ou communautés peuvent avoir besoin de structures de contenus différentes. Voici 3 outils un peu originaux.

## Ovide

Ovide est basé sur [https://peritext.github.io/](peritext)

> Ovide est un outil expérimental d'écriture et d'édition. Il est fait pour permettre des activités de publication savante polymorphiques et ancrées dans un contexte documentaire et médiatique riche.

Voilà tout est dit, mais ça n’explique pas qu'est-ce que le truc a de plus que les autres ?

Il semble avoir été créé pour aider les personnes du monde universitaire à se créer des corpus documentaires qu'ils peuvent compléter/publier/analyser.

De ce que j'ai compris, dans un schéma documentaire classique, on a une bibliothèque d'éléments d'un côté et un documents de l'autre ; ce document liste une partie des éléments de cette bibliothèque.

Avec Peritext, on insère une phase intermédiaire de contextualisation. C'est un dire un conteneur (un graphique + un texte + une image). Ce conteneur peut être inséré dans une page, mais avec un paramètre d'affichage en fonction de l'endroit où on désire l'afficher (ils appellent ça un contexte de formatage).

Comme ça, quand le document de la bibliothèque est complété, il met à jour l'ensemble de tous les documents qui l'utilise.

<video controls="">
    <source src="https://peritext.github.io/assets/sneak-peak.mp4" type="video/mp4">
</video>
<br>

Découvrir [Ovide](https://peritext.github.io/ovide/).

## TiddlyWiki

> TiddlyWiki est un bloc-notes non linéaire unique permettant de capturer, d'organiser et de partager des informations complexes.

Pour le coup, le concept est déroutant. Le contenu est intégré dans une seule page HTML. Dans cette page HTML, on a des éléments de contenu (des tiddlers) complètement indépendants ; ces éléments de contenus sont "formatables" (typés) afin d'afficher correspondre aux informations qu'on souhaite traiter.

Chaque tiddlers peut être lié aux autres par des liens. Apparemment unidirectionnels.

Ensuite, il est possible de faire des groupements de tiddlers en appliquant une (ou plusieurs) catégories.

<div class="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/KtCUr83XgyE" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>

Cet outil est conçu pour l’édition de notes/idées. Il correspond à une d'organisation de la pensée où chaque tiddler est une idée.

Le but est de consulter ses idées et de pouvoir les ordonner en fonction du besoin.

Découvrir [Tiddlywiki](https://tiddlywiki.com/).

## Odyssey

> Un moyen simple pour les journalistes, les concepteurs, et créateurs pour tisser des histoires interactives.

Odyssey est vraiment dédié à la rédaction d’histoires itinérantes. Nous avons un grand document rédigé sous un format qui ressemble à du MarkDown.

Dans ce grand document, on a des éléments qui commencent par un titre (ici : Your first odyssey.js story) ; un élément comprend des métadonnées pour paramétrer l'affichage sur la carte ; en dessous un descriptif (texte, image, vidéo).


```HTML
#Your first odyssey.js story
'''
- center: [37.7620, -122.4385]
- zoom: 9
L.marker([37.7620, -122.4385]).actions.addRemove(S.map)
O.Actions.Sleep(1000)
'''

Move the map around and save the position by clicking on "ADD > Move map to the current position". As you can see, now we are highlighting San Francisco.

Then add here the description for your slide so it's shown on the left side box.
```

À partir du même document rédactionnel, il est possible de décliner 2 affichages différents : slide et scroll.

Dans leur example, on a une carte du monde, mais on doit aussi pouvoir faire des parcours plus restreints.

Découvrir [Odyssey](http://cartodb.github.io/odyssey.js/).
