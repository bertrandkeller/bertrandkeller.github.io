---
title: Vulnérabilité et résilience d’un système
image: /assets/vulnerabilite-resilience.jpg
description: "Qu’est-ce que la résilience ? Avez vous réellement conscience de la résilience d’un système ?"
categories:
- Low-Tech
---

## Qu'est-ce que la résilience ?

> La résilience désigne originellement la résistance d’un matériau aux chocs ; (le « fait de rebondir », du latin resilientia, de resiliens), définition ensuite étendue à la capacité d’un corps, d’un organisme, d’une espèce, d’un système, d’une structure à surmonter une altération de son environnement.

Pour un site web la résilience serait la capacité à continuer à donner accès à l’information malgré un faible réseau, une attaque extérieure,… la non maintenance dans le temps du système.

## Différents modèles de réaction

Pour cet article, j'ai retenu 2 modèles de réaction d’un système face à une altération :

1.  Le modèle de protection
2.  Le modèle de stabilisation

(Voir le graphique ci-dessus)

Le modèle de protection est un modèle qui va compenser autant qu'il peut une altération mais pas la contenir en totalité. Le modèle de stabilisation semble plutôt un modèle qui compense l’altération quelle que soit la virulence de l’altération.

Le modèle de stabilisation semble permettre au système une meilleur survie dans le temps.

## WordPress VS Sites Statiques

WordPress est un système qui est attaqué de manière permanente étant donnée sa popularité et sa vulnérabilité. Pour protéger WordPress des attaques, il est nécessaire de mettre en place une série de configurations et d’installations de modules.

**Quoiqu’il arrive, votre site ne résistera pas à une attaque massive.**

Un site statique ne demande aucune configuration particulière pour sa protection. Il sert des pages statiques qui sont quasi-inattaquables. Le risque existe toujours un petit peu mais globalement une fois en place, il répondra de la même manière quelle que soit l’altération.

**Votre site résistera (mieux) à des tentatives d’attaques massives.**

## Conclusion

Si vous cherchez à mettre en place une architecture web résiliente. Personnellement, je dirais __oubliez WordPress__ ; plus globalement, je dirais choisissez __des systèmes qui proposent un modèle de stabilisation__.

Les générateurs de sites statiques sont des solutions très adaptées, qui vous permettront d'exposer le moins possible vos données pour une dépense d’énergie moindre.

