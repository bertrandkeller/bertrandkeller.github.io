---
title: Sages Femmes de Haute Normandie
description: "Association des Sages Femmes de Haute normandie"
url: https://sagesfemmes-normandie.fr/
herbergement: Github
---

## Processus éditorial

Le site présente 2 types de contenu :

1. Les activités
2. Les adhérents

### Les activités

Les activités sont des contenus de qui ne changent pas beaucoup dans le temps. Le contenu se trouve dans des fichiers MarkDown présents sur le dépôt.

Ils sont édités sur le dépôt par le client grâce au service [prose.io](https://prose.io). Le client ne m'a remonté aucun souci pour la rédaction et je n'ai observé aucun problème de mon côté.

<div>
{% cloudinary /assets/casestudies/sagesfemmes-prose.png alt="Sages Femmes de Haute normandie" %}
</div>

### Les adhérents

Les Sages Femmes de Haute normandie sont organisées en association. La principale action de cette association est d'inscrire des adhérents et de contrôler le renouvellement de leur cotisation.

La gestion des adhérents se fait traditionnellement dans un tableau de type Excel. Je me suis donc penché vers un tableau google spreadsheet pour l'édition de contenu.

{% cloudinary /assets/casestudies/sagesfemmes-googlespreadsheet.png alt="Sages Femmes de Haute normandie" %}

Sur chacune des lignes figure un membres avec ses informations, dont celle de l'année pour laquelle la cotisation a été payée.

## Affichages des contenus

### Les activités

Sur la page d'acceuil (ex: [Liste des activités](https://sagesfemmes-normandie.fr/)), nous avons les activité regroupées selon leur type. C'est une option sur les listes Jekyll, cela permet de les ranger par type.

{% cloudinary /assets/casestudies/sagesfemmes-activites.png alt="Sages Femmes de Haute normandie" %}

Sur les détails, on peut voir figurer en bas de chaque activité (ex: [Portage en écharpe](https://sagesfemmes-normandie.fr/portage-en-echarpe/)) la liste des Sages Femmes qui pratiquent cette activité.

Il s'agit d'une croisement entre 2 collections (activités et adhérents).

### Les adhérents

Je récupère ces informations sur le dépôt pour générer :

1. Une liste des adhérents (ex: [Annuaire des adhérents](https://sagesfemmes-normandie.fr/annuaire.html))
2. Des fiches adhérents (ex: [Fiche d’un adhérent](https://sagesfemmes-normandie.fr/helene-stevenin/))
3. Une carte des adhérents (ex: [Carte des adhérents](https://sagesfemmes-normandie.fr/carte.html))

Le seul souci de ces affichages réside dans le temps de traitement des informations sur Jekyll. Notamment pour générer chaucune des fiches adhérents.

Sinon, c'est un fonctionnement très puissant. En récupérant une adresse dans le tableau des adhérents, je génère des coordonnées GPS qui me permettent d'afficher une carte sur le détail de chaque Sage Femme. Mais aussi de les placer sur une carte.

{% cloudinary /assets/casestudies/sagesfemmes-carte.png alt="Sages Femmes de Haute normandie" %}

Sur la carte, je gère ma liste d'adhérents pour regrouper celles qui habitent à la même adresse.






