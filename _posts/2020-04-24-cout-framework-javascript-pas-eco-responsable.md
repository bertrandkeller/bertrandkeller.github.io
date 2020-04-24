---
title: Coût des Frameworks JavaScript
categories:
-   Eco-responsable
---

On avait déjà parlé de [la consommation énergétique de ReactJs](/2020/02/12/react-gouffre-energetique/), on avait vu que charger du JavaScript c’est lourd, souvent trop lourd pour l’usage final. Tim Kadlec nous gratifie d’un article résumant le résultat de ses recherches.

## Ça fait quoi le JavaScript sur une page web ?

Pour rappel, avec JavaScript vous payez une taxe sur les performances :

-   Le coût du téléchargement du fichier sur le réseau
-   Le coût de l'analyse et de la compilation du fichier non compressé une fois téléchargé
-   Le coût de l'exécution du JavaScript
-   Le coût de la mémoire

## Le poids de différents FrameWorks JS en front (sur mobile)

En consultant HTTPArchive, il a trouvé des URL de sites avec différents FrameWorks JS et ainsi faire une statistique sur le poids des sites en fonction de leur technologie.

![Coût des Frameworks JavaScript - mobile bytes](https://timkadlec.com/images/cost-of-frameworks-bytes-mobile.png)

> Tout comme avec le 10e centile, les sites axés sur Angular et React ont tendance à se distancier des autres au 90e centile, et pas de manière très flatteuse.

Donc, les sites avec des FrameWorks JavaScript sont plutôt assez lourds, il y a une différences selon la technologie. On remarque l’utilisation de jQuery, dont on se moque pour sa lenteur, affecte bien moins le poids des pages.

## Le temps d’utilisation du CPU (processeur) FrameWorks JS en front (sur mobile)

Le poids c'est ce que vous charger, mais ensuite, il faut que le navigateur interprète (calcul). On connaît plein de moyens d'optimiser le chargement et diminuer le temps processeur, des bouts de code bien compliqués, bien longs à exécuter. Mais en vrai ça donne quoi sur mobile ?

![Coût des Frameworks JavaScript - temps processeur](https://timkadlec.com/images/cost-of-frameworks-cpu-mobile.png)

> Au 10e centile, les sites Angular passent 313% plus de temps sur les appareils mobiles. Les sites React 658% plus de temps. Au 10e centile, les sites avec React dépensent 2,7 secondes pour traiter tout le JavaScript envoyé.

Hmm, c’est pas très bon pour REACT, avec une bonne partie des sites qui n’arrivent pas à se charger en moins de 5 secondes. 658% plus de temps que la moyenne et 431% plus de temps pour REACT à se charger sur mobile que sur Desktop. Faut vraiment avoir un super équipement machine et réseau pour apprécier navigueur dessus.

## Conclusion

Utiliser un Frameworks JavaScript : Ok, mais à quel prix ?

> Si vous utilisez un framework pour construire votre site, vous faites un compromis en termes de performances initiales, même dans le meilleur des scénarios.

La performance est fondamentale pour un site web. On me dit c‘est pas grave ça ne concerne que des personnes du tiers monde. Mais non, ça concerne tout le monde. Le web est un espace où le réseau n’est pas permanent, constant, équivalent pour tout le monde.

On parle de performance, d’efficience, économie d’énergie… pourtant on met en place des sites trop lents.

Pour des soucis d'éco-responsabilité, il est préférable d'adopter la sobriété (voire [Low-Tech](/low-tech-site-web-internet/)), c’est une question de culture.


Lire [The Cost of Javascript Frameworks](https://timkadlec.com/remembers/2020-04-21-the-cost-of-javascript-frameworks/).
