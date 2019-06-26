---
title: Pourquoi passer au Markdown et se passer d'un WYSIWYG ?
categories:
- Écriture web
---

Parler de [générateurs de site statique](/generateur-site-statique/) c'est forcément tourner autour de la question épineuse de l'édition en format Markdown. Évoquons ce sujet brièvement pour présenter leurs orientations d'usage différentes.

## Markdown sujet de toutes les discordes

Dans une conversation entre développeurs (ou autres personnes), la discussion autour des gestionnaires de site statique débute assez souvent sur les bénéfices de passer à Markdown pour éditer le contenu.

En effet, le Markdown représente la solution pour se passer de contenu stocké en base de données ; et ainsi sortir de toutes les problématiques de maintenance serveur et gestion de base de données. Ce serait un comme prendre un tram pour aller au travail et ne plus prendre la voiture avec tout ce que cela exige comme entretien et temps perdu dans les bouchons.

Seulement vient le problème de l'équation : le client.

Bien entendu, le client lui n'est pas prêt à aller à la déchetterie en bus, à être dépendant des horaires des transports ou encore aller faire ses courses en vélo.

Ceux qui ont tenté l'expérience sans voiture diront que la vie est tellement plus belle sans voiture. Cela demande des ajustements mais c'est vraiment mieux. Ils diront mais pourquoi on a utilisé la voiture à un niveau industriel et poursuivrons par : mais pourquoi a-t-on inventé les éditeurs WYSIWYG ?

## Pourquoi a-t-on inventé les éditeurs WYSIWYG ?

### L'usage du WYSIWYG

Les éditeurs de textes riches (Rich Text editor) sont présents sur la quasi totalité de ce qu'on nomme les CMS. Ces éditeurs prennent lieu et place sur le champ qui permet d'éditer le contenu du corps du texte (le body).

Il y a quelques années la communauté Drupal se prenait la tête à ce sujet en se demandant si le succès de WordPress n'était pas dû à la qualité de leur éditeur de texte riche. En effet, malgré tous les milliards d'heures passées à configurer la machine, une fois le système dans les mains du client on se retrouvait avec du contenu de piètre qualité. L'édition était une vrai plaie.

Quand une logique comme celle du CMS est de dire : “vous avez un besoin technologique quel qu'il soit on va y répondre" ; lorsque le client demande si on peut mettre des images alignées à droite avec du texte à gauche, vous faites tout pour que cela soit possible.

### Mais pourquoi le rédacteur veut-il des images alignées à droite avec du texte à gauche ?

Tout simplement parce que ce rédacteur applique une logique de rédaction pour l'impression sur papier à de la rédaction sur un site web. Rédiger pour de l'impression papier consiste à imaginer que la dimension du document final est fixée (ex : A4) et à vérifier l'affichage du contenu sur son support final (pour correction) avant la publication finale.

Il s'agit de la reproduction d'une pratique d'impression (print). Ce qui n'a absolument aucun sens (au bout du compte) dans le monde du numérique étant donné que le contenu peut s'afficher sur différents services avec différentes feuilles de style.

## L'édition avec le Markdown

Il faut être honnête l'édition de fichiers Markdown est assez simple mais ne permet pas d'insérer facilement des images et autres médias. Tout simplement en raison de l'écriture des chemins de ces médias et de l'ajout de ces médias dans un répertoire dédié.

### Donner au rédacteur le statut de codeur

Lorsqu'un rédacteur utilise la syntaxe Markdown dans un éditeur de texte, l'objectif est de le faire devenir un codeur. J'entends par codeur une personne qui édite du code ; qui est versionnable sur Git au même titre que n'importe quel fichier.

Cela demande évidemment un investissement d'apprentissage pour monter en compétence dans non seulement la rédaction mais aussi pour la synchronisation du code avec un dépôt de code.

Cela semble difficile mais c'est par cette étape qu'on intègre ces rédacteurs ou clients aux notions de processus de déploiement du code et que les équipes peuvent discuter d'égal à égal sur le sujet majeur de la pérénité du code.

Il sera bien entendu difficile de demander à des clients non investis dans leur site de se lancer dans cette démarche.

### Ouvrir la rédaction à différents profils de rédacteurs

Si jamais sur un site, un ou plusieurs rédacteurs de contenu écrivaient du contenu avec un éditeur de code en utilisant le terminal pour synchroniser son dépôt avec Git. Il ne serait pas impossible que l'édition de contenu soit ouverte à des rédacteurs occasionnels.

Ce principe est réalisable sur les CMS avec la gestion de rôles. Mais reste aussi tout à fait envisageable avec du Markdown en ouvrant des interfaces de rédaction spécifiques.

C'est exactement sur ce créneau que se positionnent des entreprises comme : Forestry, Siteleaf, CloudCannon…

## Conclusion

Après réflexion, il n'y a pas vraiment de raison d'éditer du contenu avec un éditeur WYSIWYG. Il s'agit d'une reproduction du monde physique de l'édition à de la rédaction numérique. Cela plait aux rédacteurs qui sont dans cette logique et ne veulent pas en changer.

Pourtant cela ne répond pas aux exigences de chacun en terme de qualité du code, référencement, lisibilité pour les lecteurs…

La rédaction en Markdown n'est pas à opposer à une édition à l'aide d'un WYSIWYG car elles répondent toutes les deux à des nécessités. Pourtant, si on prend en compte les besoins et les contraintes d'un projet web, l'édition Markdown propose de très gros avantages.

Vous pouvez aussi utiliser du Markdown en utilisant des interfaces WYSIWYG, pour essayer d'avoir les avantages du Markdown en ne perturbant pas les rédacteurs, mais sachez que vous n'aurez fait que la moitié du chemin.
