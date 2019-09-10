---
title: Moins de données ne signifie pas une expérience moindre
description: "Tim Kadlec nous communique un petit message pour nous dire que vouloir afficher moins de données aux utilisateurs n’est pas synonyme d’une moins bonne expérience pour l’usager."
categories:
- Performance
---

Voilà donc la liste des éléments d’éléments que Tim Kadlec pense qu’il est possible d’optimiser sans pour autant diminuer l’expérience.

## Images de résolution inférieure

Optimiser le poids des images ne crée par forcément une baisse qualitative pour l’œil humain. Exemple :

<div class="center">
<img src="https://timkadlec.com/images/shopify-comparison.png" loading="lazy">
</div>

La plupart des images du web sont de l’illustration, pourquoi afficher une résolution plus importante que nécessaire ?

## Moins d’images

> J'ai enlevé les vignettes des listes d'’articles (sans toucher aux vignettes des vidéos) et obtenu un gain total de 966 Ko.

### Avant
<div class="center">
<img src="https://timkadlec.com/images/cnn-with-thumbs.jpg" loading="lazy">
</div>

### Après
<div class="center">
<img src="https://timkadlec.com/images/cnn-wo-thumbs.jpg" loading="lazy">
</div>


## Supprimer les polices spéciales

Charger des polices, ça peut être un apport qualitatif important, seulement leur usage demande de charger des fichiers assez lourds. Il convient de ne pas trop abuser des appels à la police.

> Prenons, par exemple, le site de CNN. Sur la page d’accueil, CNN charge 6 fichiers différents pour leur police pour un total de 251ko.

<img src="https://timkadlec.com/images/cnnwebfonts2.png" loading="lazy">

## Réduire les publicités

Bon, le nerf de la guerre, l’usage de publicité dépend de votre modèle économique. Seulement, on sait que la tendance à charger tout et n’importe quoi pour tracker l’utilisateur au cas où est monnaie courante.

> Quelqu'un a profilé un exemple de page peu de temps après l’application de la GDPR et a constaté que le site qui chargeait initialement 5,2 Mo de données en charge désormais seulement 500 kb.

Ah quand même, c’est pas rien.

## Amélioration progressive sans amélioration

Il est possible d’appliquer une vraie politique d’amélioration progressive. Se servir de fonctions navigateurs pour charger des données en fonction du réseau…

Seulement, imaginez que vous soyez capable de mettre en place cette méthodologie de développement ; alors la version du site sans amélioration serait déjà optimisée et pourrait se suffire à elle-même (et ne pas avoir besoin d’une amélioration coûteuse).

## Moins ne veut pas dire cassé

> Si vous considérez les données comme une ressource précieuse, à ne pas gaspiller ; je ne pense pas que quiconque se plaindra si votre site affiche moins de données.

## Conclusion

Hmm, voilà une liste d’améliorations qu'on se tue, les intégrateurs, à promouvoir depuis des années à nos clients, à nos supérieurs. Pourquoi en 2019, ce besoin deviendrait-il pressant ?

La masse des internautes est-elle composée de plus de personnes avec un bas débit ? Google a-t-il enfin réussi à mettre en place des règles incitatives pour les développeurs ?

Je ne sais pas. Toujours est-il qu’éviter l’obésité des pages est possible, mais cela demande que ce soit un sujet de discussions dans les équipes.


Lire l’article de Tim [Less Data Doesn't Mean a Lesser Experience](https://timkadlec.com/remembers/2019-08-30-less-data-doesnt-mean-a-lesser-experience/?utm_source=CSS-Weekly&utm_campaign=Issue-376&utm_medium=email).
