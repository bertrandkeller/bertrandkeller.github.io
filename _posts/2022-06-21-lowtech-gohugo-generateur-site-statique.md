---
title: "4. Préparation conférence - goHugo outil Lowtech"
categories:
  -  Low-Tech
---


Frago est propulsé par le générateur de site statique goHugo. Pourquoi ? Parce que c'est une solution Low-tech, Open Source et décentralisée.

## Générateur de site statique

### Qu'est-ce dont ?

Depuis quelques années, le sujet de la génération statique à petit-à-petit glissé de : 
  * Systèmes qui gèrent des fichiers statiques (`md`, `json`, `yml`…) pour les convertir en fichiers statiques (`html`, `json`, `yml`…);
  * à un système qui (pré)génère des fichiers HTML statiques (`html`).

![Fonctionnement d’un Générateur de sites statiques](/assets/ssg.png)

Alors, je ne vais pas rentrer dans les détails, mais un système, basé sur un Framework JS pour générer des applications, ne valorise pas les mêmes compétences que des systèmes comme Jekyll, goHugo ou EleventyJS.

Les générateurs de site statique ont l’avantage de pouvoir faire baisser drastiquement la compétence d’administration du système. Leur utilisation ressemble à celle qu'on avait au démarrage du web (on codait chaque page à la main), mais en facilitant la séparation entre contenu et gabarit HTML de rendu. De simples compétences en HTML/CSS sont suffisante.

L’utilisation d’un générateur de site statique se justifie dans le cas de sites, orientés contenu, destinés à de la publication simple (le plus souvent sans connexion utilisateur).

*Les systèmes basés sur des FrameWork JS sont souvent difficiles à installer, demande de bonnes compétences pour les manipuler et ont des temps de génération (des fichiers) élevée.*

Je vous laisse lire cet article en anglais : [When an SSG Isn't Just an SSG, What Is It?](https://remotesynthesis.com/blog/what-happened-to-ssgs).

### goHugo, un outil ultime

Dans la pléthore de systèmes pour générer des site statiques, certains ont gagné la bataille sur les autres ; goHugo et EleventyJS en font partie.

GoHugo a évidemment beaucoup de défauts, ses difficultés d’usage… mais attardons nous sur ses gros points forts.

1. Multiplateforme
: goHugo est un simple exécutable (un seul fichier qu'on lance). Il n’y a pas de configuration particulière, il ne dépend d’aucun autre système, il est possible de l’installer sur toutes les plateformes (même un window avec droits administrateurs).

2. Rapidité de génération
: La génération du contenu est (très) rapide, particulièrement, quand le contenu est volumineux. Pour `Frago`, on manipule du `csv`, c’est lourd mais ça passe.

3. Fonctionnalités très développées
: goHugo est bien maintenu, il possède une bibliothèque de fonctionnalités hyper complète et de très intéressantes sont ajoutées, notamment pour la gestion de fichiers (ce qui est utilisé par `Frago`).

4. Existence de Thèmes
: Comme Jekyll, il permet de créer des thèmes. Cela permet de séparer le contenu de la partie code fonctionnel. L'utilisateur ne gère que la partie contenu, sans jamais avoir accès au code fonctionnel. Ainsi la mise à jour pour les usagers est simplifiée car le code est centralisé sur un dépôt unique.

## Architecture de Frago

Ainsi pour utiliser `Frago`, il faut avant tout construire son architecture de contenu ([comme le propose la documentation](https://lowdit.github.io/frago/demarrer/configurer-frago/)) et se connecter au thème ([dépôt du thème](https://github.com/lowdit/frago/))

### Principe

L’idée est que l’utilisateur dispose d’un dépôt ne contenant que des fichiers sous format texte (et ouvert). Comme s’il devait le faire pour archiver les données pour organiser ses projets.

L’arborescence oblige à bien ranger ses fichiers et le faire au même endroit. En le connectant à un dépôt `git`, le contenu est archivé. Le fonctionnement du contenu fonctionne par convention, c’est toujours organisé de la même manière (bête et méchant), il est donc facile pour des personnes qui connaissent goHugo de s’y retrouver.

Avoir un dépôt qui ne contient que le contenu permet aussi de ne pas être dépendant du thème `Frago`. Il est fort possible de connecter ce dépôt avec un autre système concurrent ou de remplacement.

Le site peut fonctionner en local, ou être généré par un script (de génération) en ligne (sur une url web).

![Fonctionnement du thème FRAGO](/assets/ssg-frago.png)

### Avantages

goHugo possède un système de modules (mais qui ne fonctionne que si Go est installé sur la machine donc pas trop sur windows).

Le système de modules fonctionne comme des submodules de `git` (sans les inconvénients), et prend en compte les numéros de version. On télécharge donc le contenu au lancement de goHugo. Sinon, il faut télécharger le thème "à la main", sur son dépôt de contenu.

Au final, on a donc un système pérenne dans le temps, léger et facile à installer quelque soit son environnement. Il faut connaître un peu la ligne de commande, mais l’administration n’est pas dépendante d’une technologie particulière.

Les principes de goHugo ne changent pas dans le temps. Donc le thème principal a une durée de vie plutôt importante. C’est important pour un outil destiné aux administrations publiques. Beaucoup de systèmes demandent des réinstallations et mise à jour en permanence.

GoHugo peut être difficile à prendre en main, mais a priori les utilisateurs n'ont pas à toucher au code. Donc les soucis de montée en compétence sur goHugo n’est pas existant. Le code est transparent.

## Conclusion

Le choix d'un outil n’est pas évident. Cependant, goHugo pour le développement d’un commun numérique se justifie par le fait que goHugo est : Open Source, libre, léger, multiplateforme. **goHugo est déjà en lui même un commun numérique**.

Le principe de thème permet de séparer la notion **d’archivage** de contenu et de génération de **synthèse d’audits**. Il s'agit d’un mode décentralisé. Les dépôts `git` sont transportables. C'est-à-dire que la DINUM peut héberger les audits puis les transférer à une administration une fois qu’elle s'en sera donné les moyens. Tout cela sans aucun blocage technique.

Le métier d’auditeur reste le même qu’avant, on demande juste d’archiver l’audit dans un fichier `csv`.

L’utilisation d’un gestionnaire de site statique permet d'éviter par le passage par une base de données, c'est-à-dire le besoin de gérer des droits administrateurs dans le système de gestion (ici goHugo). Dans l'administration les mouvements et responsabilités changent. On peut gérer les droits au niveau du dépôt `git` (à travers un `gitlab` interne par exemple).

Ainsi, la complexité d’administration système est simplifiée. `Frago` n’est pas une contrainte, il facilite le travail de suivi de l’accessibilité.
