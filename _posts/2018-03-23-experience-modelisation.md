---
title: Sites statiques expérience de modélisation
---

Ce début d'année, j'ai travaillé sur plusieurs petits projets en statique ; ce qui m’a permis d’aller encore plus loin dans mes connaissances de la modélisation de contenu.

## L’autonomie utilisateur

Récemment, j’ai récupéré un site qui était réalisé en Hugo par un jeune étudiant assez doué. Le site était propre et mettait en place correctement la documentation du CMS. Cependant, pour la refont je n'ai absolument pas utilisé la même logique de gestion de contenu.

Le site présente majoritairement des pages (pas de collections). Pour la rédaction du contenu et la traduction, le développeur précédent était passé par la clefs de traduction (dans lesquelles il y avait même du HTML). Ce n’est pas le système le plus simple pour la maintenance et la rédaction car on ne sait pas exactement ou ces clefs s'affichent.

J'ai modifié le système et j'ai mis le contenu directement dans les pages (métadonnées). Cela permet de lier un contenu à une page spécifique, c'est plus clair pour l'utilisateur. Le petit hic, c’est la possibilité d'avoir du contenu dupliqué (pour un contenu identique présent sur plusieurs pages) mais on peut facilement transférer cette charge au rédacteur.

Ayant énormément de contenu par page, mon travail a été d’uniformiser les modèles de rédaction des métadonnées (TOML). Mon client était très content, il a pris en main les entêtes avec succès.

## Arborescence logique

Une arborescence ne présente que la logique que lui a donné ses concepteurs.

Sur un autre projet, sur lequel je suis depuis plusieurs mois, j’ai construit une arborescence de contenu avec des fiches. J’avais une idée assez précise en tête sur le fonctionnement.

Mon idée est toujours d’avoir des relations logiques entre contenus, mais aussi de prendre un compte le métiers des rédacteurs. Ainsi, le contenu de fichiers pourra être déterminé par la personne qui les rédigera.

Au tout début, il y avait une seule fiche car je voulais que tout soit éditable à un seul endroit. Ensuite, Hugo a sorti la possibilité de ranger des contenus dans des répertoires (stockant des contenus liés : images, pdf, vidéo… autres). J’ai déplacé tous les assets (les fichiers médias) dans ces répertoires, afin que dans le processus, on puisse traiter chaque fiche comme des entités. Et je vais commencé à prendre du contenu de la fiche principale pour le sortir dans des fichiers à part.

Finalement aujourd’hui, une partie du contenu pourrait nous être directement fourni par un service tiers. Ce service possède une modélisation pour son contenu que je voudrais respecter pour ne avoir à gérer un script de transposition.

## Où je veux en venir ?

Pour ces 2 projets, j’ai réalisé un gros travail de réflexion sur la manière dont devait être écrit le contenu. J’ai du comprendre comment fonctionnaient les formats comme YAML ou TOML ; ainsi que la manière dont on pouvait aller appeler de la donnée.

Même si les 2 expériences n'ont rien à voir en terme de structure, dans les 2 cas, je suis toujours partie d’une modélisation simple et qui a évolué par la suite, au fur et à mesure que le projet évoluait.

Si demain, des choses devaient changer, je ne serai absolument pas inquiet sur la possibilité de modifications.

Il y a une vraie satisfaction à travailler de cette manière car le projet peut évoluer en fonction des besoins exprimés par le client.
