---
title: Web Low Tech
---

Étrangement, je n’ai jamais abordé le sujet de la Low Tech sur ce blog. Plus précisément, je n’ai jamais vraiment utilisé ce mot qui me semble s’opposer à des High Tech que je trouve ni bien, ni mal en soit. Pour moi, juste l'efficience est importante. Pourtant, je me résous à utiliser ce terme pour rejoindre un mouvement dont je ne suis pas éloigné.

Je crois que le concept de Web Low Tech n’est pas vraiment très clair. On s’imagine que c’est un site qui s’affiche rapidement sans charger des "assets" trop importantes.

## Internet Low tech, c’est quoi ?

Internet Low Tech, on imagine à peu près de quoi ça recouvre. Ce sont des réseaux de communications simples : Réseaux longue distance basés sur WiFi (voir le [réseau écossais Tegola .](http://www.tegola.org.uk/hebnet/) par ex..). Avec des serveurs de données miniatures de type : Arduino.

Il est possible de mettre ça en place, on peut accéder à n’importe quel site. Il est très facile de mesurer l'impact énergétique du matériel. Mais pour un site web on mesure quoi ?

## Web Low Tech, c’est quoi ?

Le web Low Tech se serait un site web qui ne présente que des pages HTML avec des images en faible résolution, pas de JS et avec pas mal de cache ?

D’accord, mais en réalité mesurer l’impact d’un site énergétique d’un site web c’est compliqué si on ne prend en compte que la page d’accueil au premier chargement. Ok, c’est indicatif, mais ça ne dit pas grand chose.

En effet, il est possible de mettre en cache pas mal d’éléments de la page (comme les polices, les styles, les JS… un peu tout) et de charger ces éléments à partir de son cache navigateur aux chargement suivants.

On peut même s’arranger pour qu‘un site fonctionne en mode déconnecté (offline). Sauf que le mode déconnecté, provient des dernières innovations donc de la High Tech. Mon site est-il Low Tech si j’utilise des Services Workers ou des Web Workers ?

Et quel est le coût énergétique du développement du site ? Quelle est la consommation des machines des développeurs ? Où est hébergé la base de code ? Combien consomme un build (génération) de mon site ?

Définir à peu près la consommation de l’objet technique site web, c’est à peu près possible. Mais juger de l‘impact global de l'ensemble de l‘énergie consommée pour mettre en ligne un site web est plus compliqué.

D’autant plus que le meilleur moyen qu’un site ne consomme pas beaucoup d’énergie est de ne pas mettre en ligne de contenu inutile.

## La logique de l’efficience

Je tombais récemment sur une agence web qui mettait en avant ses compétences en eco-conception avec un beau site vitrine rempli de jQuery.

La Low Tech est une belle tendance pour réfléchir au sujet de la consommation énérgétique. Seulement, avoir une volonté d’un web responsable qui pose des questions chargement de page, d’utilité des l'information publiée, du sens… et de la gouvernance des données, c’est mieux.

Ce qui serait bien ce serait de continuer ce parcours concernant un site web Low Tech et d’arborder pas mal de questions connexes comme celle de la confidentialité des données
