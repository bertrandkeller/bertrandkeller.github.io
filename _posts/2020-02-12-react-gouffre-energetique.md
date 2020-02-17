---
title: ReactJs gouffre énergétique ?
categories:
-   Low-Tech
---

Je relaie pour vous une série d'articles ou REACTtion à propos de la biblitothèque React.js ; React.js dont le but est de faciliter la création d'application web monopage (WebApp), via la création de composants dépendant d’un état et générant une page (ou portion) HTML à chaque changement d'état.


## L’utilisation de React.js

La technologie React.js est une innovation intéressante pour la réalisation d'interfaces de type Application Web. Elle permet de mettre en ligne des pages web (outils) dans lesquels il est possible de réaliser des actions sans avoir à recharger la page.

N’est-ce pas formidable ? Pouvoir accéder à une application en utilisant un navigateur web ? Cela permet de construire un grand web universel auquel peut accéder toute personne munie d'un seul et même terminal.

A condition de pouvoir s'en acheter une. Et d’avoir un bon forfait. Et aussi un bon processeur et de la RAM et la bonne version d’OS… sinon ça rame un peu… mais bon sinon c’est plutôt pas mal.

En gros React.js, c’est un peu le futur ou tout le web deviendrait applicatif. La technologie que tout le monde doit adopter pour proposer "numériser" ses services.

Ainsi, qu’observe-t-on ? La plus grande partie des offres d’emplois dans le développement Front concernent React.js. Les entreprises ne cherchent pas des développeurs, mais des développeurs React. Indépendamment des compétences du développeur ou de sa capacité à progresser.

En procédant de la sorte, premièrement on embauche n’importe qui du moment qu'il se déclare développeur React (manque de développeurs sur le marché) et, comme on a des développeurs qui connaissent React (plus que Javascript), on construit n’importe quel projet avec React (même si la technologie n’est pas adaptée).

> Au lieu d'apprendre les meilleures pratiques, nous enseignons aux développeurs à faire ce qui est le plus simple et à laisser le cadre gérer tout ce truc dégueulasse pour vous.
  C’est ce que beaucoup de développeurs appellent « bonne abstraction ».
  Mais cela signifie également que les développeurs sont impuissants sans leurs outils et ne reconnaissent pas quand l’outil fait la mauvaise chose.  
  __Chris Ferdinandi__

## Les problèmes de React.js

Personnellement, je n’ai jamais critiqué une technologie et plutôt pris la position de réfléchir à l’utilisation de la technologie adaptée. Sur les questions d’impact énergétique, React consomme beaucoup trop de bande passante, temps processeurs… pour je défende la techno pour la réalisation de pages de contenus.

### L'Hydratation

L'hydratation Javascript fait référence au processus côté client (navigateur) au cours duquel du code JavaScript reprend le HTML statique envoyé par le serveur et le transforme en DOM dynamique qui peut réagir aux modifications des données côté client (navigateur).

Autrement dit, cela permet de charger des zones de contenus que quand elles apparaissent à l‘utilisateur dans la fenêtre du navigateur (On ne charge pas toute la page, on gagne en performance). On pré-génére du HTML vide et on le remplit petit à petit.

Que dit Jeremy :

> Le code HTML pré-généré n'est pas fonctionnel. Il a toujours besoin d'un chargement complet de JavaScript avant de pouvoir faire quoi que ce soit. Le processus réel est le suivant: exécuter React sur le serveur; envoyer du code HTML pré-généré à l'utilisateur; puis renvoyez tout mais cette fois en JavaScript, fourni avec la bibliothèque React entière.  
__Jeremy Keith__

En gros, on rend inutilisable des éléments, dit natifs, comme un bouton tant que le JavaScript n’est pas entièrement chargé. Pas pratique.

Lire [Hydration](https://adactio.com/journal/16404) de Jeremy Keith.

### Charger du JavaScript est lourd

Charger du JavaScript dans un navigateur, c’est chargé un fichier, mais aussi l’interpréter ensuite. Pour faire cela, la navigateur utilise de la ressource processeur et donc de la batterie.

On estime qu’il faut doubler le poids en Kb d’un fichier JavaScript (par rapport à celui d'une image) car il doit être appelé puis chargé en mémoire puis être rendu. Pendant ce temps le processeur carbure et interprète.

Pourtant certains défenseurs de React prétendent que JavaScript, c’est pas grave, car c’est moins lourd que de charger une image.

Andy Bell n‘est pas content :

<div class="center">
	{% twitter https://twitter.com/hankchizljaw/status/1224972729373405185 %}
</div>

Lire aussi [Honesty is the best policy](https://hankchizljaw.com/wrote/honesty-is-the-best-policy/) d’Andy Bell.


### Mettre du HTML et de la CSS dans des fichiers JS

Avec React, on met du HTML et de la CSS dans du JavaScript. On a pas mal de controverses sur le sujet.

Pour faire simple. Mettre du HTML et de la CSS dans du JavaScript, pourquoi pas. Ça correspond à un besoin des WebApps, cela simplifie pas mal de choses au niveau pour la rédaction de composants, de performance et de gestion de régression de code.

Mais ça n'a pas que des avantages, et c'est aussi faire oublier le principe génial de la programmation déclarative dans lequel on annonce ce qu'on veut et la navigateur fait le reste.

> HTML est une abstraction déclarative inclue dans le moteur d'affichage d’un navigateur Web. Le navigateur s’occupe du "comment", vous n’avez donc qu’à vous soucier du "quoi". Vous pouvez profiter de la vie en écrivant du HTML déclaratif parce que les gens de Mozilla, de Google ou d'Apple ont écrit le code impératif pour vous.  
__Mike Turley__

Lire [Why JavaScript is Eating HTML](https://css-tricks.com/why-javascript-is-eating-html/) de Mike Turley.

Quand vous faites du code déclaratif, il est contenu dans un fichier texte tout simple qui ne demande rien à personne. Mais quand vous mettez du HTML et de la CSS dans du code impératif (Un code qui ne dit pas quoi faire mais comment faire), il devient totalement dépendant du fonctionnement du code impératif.

Le HTML et la CSS ne sont plus vraiment sources de la vérité, ils dépendent d’états qui sont gérés par le code JavaScript.

Ça donne quoi selon Shane Jones :

{% twitter https://twitter.com/shanejones/status/1228272744162381825 %}


En gros, le HTML et la CSS sont chargé en mémoire et plus ou moins recalculé en permanence. A moins de savoir bien maîtrisé React mais d’après ce que j’entends peu de gens savent le faire.

## Conclusion

Est-ce que React est mauvais ? Non. Est-ce que React va être remplacé par des technos plus mûres ? Peut-être.

React est très pratique pour réaliser des WebApps, des applications. Les applications sont des interfaces métiers permettant de réaliser des tâches plus ou moins complexes. Il est donc presque normal de devoir ou pouvoir charger du code métier un peu plus lourd avec des éléments structurels optimisés et cela sans trop faire baisser les performances.

Nous voulons faire baisser nos consommations d’énergie et donc réduire l’empreinte de nos outils informatiques. Dans une logique GreenIT l’idée est d‘utiliser la technique la plus adaptée. Une application web, tout comme un bout de papier ou un simple SMS.

Le monde du développement informatique (par culte du cargo) a tendance, selon ce que je perçois, à mettre en place de WebApps quand un simple code HTML suffit. A utiliser React quand une simple générateur de sites statiques fait le taf en 10 fois moins cher et 10 fois plus rapide. Tout cela au service, non pas du produit, non pas de l’utilisateur, mais du développeur (lire [Putting devs before users: how frameworks destroyed web performance](https://uxdesign.cc/putting-devs-before-users-how-frameworks-destroyed-web-performance-6b2c2a506aab)).

C’est peut-être pour ça que tant de personnes réagissent en ce moment sur la consommation énergivore de React. Et c’est pour ça qu'on augmente la consommation d’énergie lié au numérique plutôt que de la faire baisser.
