---
title: Carte relation entre pesticide et vote aux élections européennes en Saône-et-Loire
image: https://res.cloudinary.com/dou0m7u5s/image/upload/v1562860043/carto-pesticide-glyphosate-bourgogne.png
description: 'En ce moment, je me suis lancé dans la cartographie. Exercice que j’aime beaucoup mais qui est cependant assez prenant en temps'
categories:
- Cartographie
---

La cartographie est quand même un métier compliqué, on pense pouvoir faire une belle représentation avant de se rendre compte que les données qu’on possède ne sont pas exploitables dans l’état.

## Mon exercice

Je voulais savoir si finalement les élections n'était pas souvent l’occasion d’affirmer une sorte de défense des acquis. Alors bien évidemment, c’est sûrement en partie le cas, c‘est un truisme.

Mediapart vient de publier une carte de l'utilisation des pesticides en France. [Quantités de substances pesticides achetées par des professionnels en 2017](https://mediapart.carto.com/viz/bc7dc11b-7e49-44db-91c7-c966da09c437/embed_map). Ce qu'ils notent c'est que le gouvernement ne joue pas le jeu, car il ne publie pas la liste (complète ?) des organismes qui achètent ce genre de substance (surtour qu'ils n'indique pas leur nom). Alors ils ont trouvé des données, je ne sais pas vraiment où, mais ils ont trouvé.

Sur le site data.gouv, on trouve aussi des données, mais le fichier est assez succinct et pas vraiment optimisé (date de 2017). Il liste les communes où ont été acheté des produits pas où ils ont été utilisés. Je m’en suis quand même servi juste pour optimiser mon script.

## Ma méthodologie

C'est la première fois que j'utilisais des fichiers geojson. Ce sont des fichiers qui répertorient les contours de zones géographiques officielles. L'affichage de zones géographiques peut être plus pertinent que des points (marqueurs) car il permet de voir s'il y a des continuités entre territoires.

Donc pour faire le rapprochement entre les eléctions européennes 2019 et la carte des pesticides, c’est un peu lourd.

En effet, il faut compiler plusieurs fichiers de dizaines de milliers de villes : les résultats des élections par communes, le fichier geojson par communes, un 2ème geojson au cas où la commune n'existe pas dans le premier, la position du centre d‘une zone par commune… et le fichier listant la vente de pesticides.

Pour que ça marche, il faut utiliser une référence identique du type le "code insee" mais qui n'est pas forcément indiqué dans tous les fichiers.

Pour compilé tout ça j'ai utilisé [goHugo](https://gohugo.io/). Et bien quand on dit que Hugo est puissant, c'est le cas de le dire. Je mets moins de 2 minutes à compiler ces milliers de données. C'est beaucoup, mais faut voir la masse.

Je suis plutôt content du résultat car le temps de compilation reste correct par rapport au nombre de points que je peux afficher sur une page web (Si trop de points, la carte devient trop lourde à charger pour l’utilisateur)

## Résultat

Le résultat c’est cette carte.

<img src="https://res.cloudinary.com/dou0m7u5s/image/upload/v1562860044/carto-election-pesticide-saone-loire.png" alt="carte pesticide Saone et Loire" />


Tout d'abord, je ne sais pas si mon fichier sur l’achat de pesticides est complet. Ensuite, je ne sais où sont répandu les pesticides.

On devine vaguement que les zones avec un contour plus fort (communes qui ont acheté des pesticides) ont le plus souvent un fond bleu (très fort vote à droite). Mais il y en a aussi avec un fond vert clair.

Cette carte ne prouve pas grand chose. Mais c’est instructif.

## Conclusion

Je me suis amusé à mettre en place de la cartographie très puissante avec goHugo. Cet outil est vraiment pratique pour manipuler des JSON avec beaucoup d’entrées.

Quand je vois les cartes pondues par les services presses de différents journaux, je me dis que ce que j'ai fait est quand même plus lisible.

Sur la carte de Mediapart, on peut voir des zones colorées par code postal (pas par commune) et on ne peut pas voir vraiment où on se situe en France (il n'y a pas de carte de fond). Du coup je ne vois pas à quoi ça sert pour de l’analyse un peu poussée.

Les journalistes ont utilisé un service en ligne pratique, certes, mais qui ne permet pas d’analyser la données qu'ils ont mis tant de temps à collecter.
