---
title: Mon processus d’édition
categories:
- Sites Statiques
---

Ce site a vu sa fréquence d'édition baisser depuis presque 2 ans. La vérité c'est que mon changement de statut et de vie m'a peu laissé de temps et de raisons d'écrire. Comment vais-je essayer de mettre à jour ma pratique ?

## Changement de vie

Depuis maintenant 3 ans, je ne travaille plus dans une entreprise. Je n'ai plus de poste fixe avec une pratique exécutive récurrente et déterminée.

La pratique professionnelle est toujours présente mais reste comprise dans un tout qui est la gestion d'un quotidien qui comporte bien d'autres choses.

À changement de vie, changement de pratique éditoriale. C'est pour ça que je suis passé d'un site wordpress éditorialisé autour de l'intégration web à un site beaucoup plus personnel basé sur l'affichage de notes.

## La prise de notes

Si les moteurs de blog et autres CMS ont permis la mise en ligne de nombreux blogs et sites d'actualités, l'utilisation d'une base de données et d'un site multifonctions se révèle trop complexe pour la simple prise de notes.

La consultation mobile a eu pour effet de modifier la manière d'accéder au contenu. Alors qu'il y a encore peu la presque totalité de la lecture se faisait sur des écrans assis à un bureau (comme on le faisait pour un journal). Désormais, les journaux s'affichent sur des interfaces plus petites sur lesquelles les lecteurs ne désirent pas être perturbés par des informations secondaires.

Il y aurait donc un désir à la fois d'accéder à du contenu clair et précis, mais aussi un besoin de pouvoir soi-même éditer des idées ou des observations qu'on aurait eu en situation nomade.

C'est pour ces raisons que je travaille sur des méthodologies de mise en ligne de notes mais aussi que je me lance dans la mise en ligne de mes propres réflexions.

## Le processus actuel d'édition

Au niveau technique, j'ai migré le contenu de mon blog sur Jekyll. 

J'ai plus ou moins archivé mes anciens billets. Le principe a été de générer des pages HTML et de les générer ensuite directement en tant que page HTML plutôt que les générer en tant que billets (gain de rapidité de génération). Le désavantage est que si les menus du site changent, je dois tout régénérer pour mettre à jour les header et footer.
Mais ces billets n'ont plus pour beaucoup qu'une utilité historique, que pratique car passés de mode.

Ensuite, j'ai décidé de cloner le répertoire de notes sur une Dropbox pour être sûr de ne pas les perdre en cas de vol matériel. L'utilisation d'un lien symbolique vers le répertoire de travail permet cette manipulation.

Les répertoires des billets comportent toutes mes notes. J'utilise Nvalt sur macosx. Celui-ci me permet d'éditer des fichiers .md et de les synchroniser avec Simplenote. 
L'application Simplenote va me permettre d'éditer mes notes sur mon mobile ou sur ma tablette, ou sur n'importe quel ordinateur sur le service en ligne.

Jekyll ne compile les billets de blogs qu'en fonction de leur nommage (date+titre:YYYY-MM-JJ-titre-de-mon-billet). Si j'édite une note avec un titre lambda, il n'est pas compilé. Si je rédige un article avec le bon titre, il sera compilé.

Pour finir, si je veux héberger le site sur github (par exemple), j'indique dans le .gitignore de ne pas versionner les notes dont le titre ne commence pas un chiffre. Ainsi, mes notes personnelles ne seront pas disponibles à tout le monde (mais seront bien sauvegardées grâce à Dropbox).
 
## En pratique

Le système que j'ai mis en place n'est pas forcément des plus propres. Je mélange des billets à compiler et des billets à ne pas compiler. Mais on peut considérer que pour un usage personnel c'est acceptable.

Simplenote n'enregistre pas directement les billets en .md. Cependant, Nvalt modifie l'extension lors de son édition. De plus, je suis obligé de passer par mon ordinateur principal pour mettre en ligne les billets. Je ne peux pas passer par Simplenote directement. 
On ne peut pas tout avoir.

Autre avantage, je peux partager des notes sur simplenote et donc soit rédiger un article à quatre mains soit publier une proposition d'article d'une autre personne. C'est une option intéressante pour l'écriture collaborative.





