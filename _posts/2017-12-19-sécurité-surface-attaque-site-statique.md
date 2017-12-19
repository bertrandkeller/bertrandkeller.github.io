---
title: Sécurité - la surface d'attaque
description: On parle de sécurité, de système qui peuvent être plus sécurisés que les autres ; mais les failles de sécurité sont partout et il s'agit souvent de problème humain. A rigueur égale en sécurité, il est nécessaire de penser à sa surface d'attaque.
image: /assets/massive-brute-force-attack-Dec18.png
---

**Note :** bien entendu, la sécurité n'est pas mon domaine, je manipule des concepts que je ne maîtrise pas complètement.

## Surface d'attaque

En sécurité, la surface d'attaque est en gros le nombre de portes d'entrée possibles que vous laissez à vos potentiels agresseurs.

Si vous avez chez vous une porte principale, une porte dans votre jardin et une porte de garage, vous aurez plus de possibilités d'oublier de fermer chez vous que si vous n'avez qu'une porte principale.

> Il s’agit de tous les points d’entrée et les points de communication qu’un système d’information possède avec l’extérieur.

Ça a l'air simple comme ça, mais comme la sécurité n'est pas la priorité première dans les organisations ; les choix historiques, les contingences, le travail en silo,… laisse pas mal de vide pour des entrées frauduleuses.

Ce n'est souvent qu'après une attaque, un vol, qu'on se soucie de ce problème mais il est souvent trop tard. Vos concurrents partent avec les secrets de votre brevet que vous avez mis tant d'année à développer.

Une des première chose à faire pour réduire les attaques reste de diminuer au maximum sa surface d'attaque.

{% cloudinary /assets/Kaspersky_Lab_Infographic_B2B_1_reducing_attack_surface.png) alt="Kaspersky Lab Infographic Attack surfaceY}" %}

## La cas WordPress

On compare souvent les sites statiques à WordPress en essayant de lister le pour et les contres dans les 2 approches. Ces 2 systèmes sont différents et ne peuvent pas être comparés point à point car ils ne répondent pas toujours aux mêmes besoins.

Pour autant quand un [générateur de site statique](/generateur-site-statique/) répond au besoin, s'il y a bien un avantage en sa faveur, c'est sa faible capacité à se faire pirater.

Il faut savoir que WordPress est très populaire et donc très exposé, il est donc très soumis à des attaques en permanence sur le réseau. 

Aujourd’hui par exemple, il y eu une attaque "brute force" sur tous les WordPress du monde. Cette attaque "brute force", ça ressemble à quoi concrètement ?

* L'attaque a jusqu'ici culminé à 14,1 millions de connexions par heure ;
* le nombre total d'IP impliquées à ce moment-là est supérieur à 10 000 ;
* nous voyons jusqu'à 190 000 sites WordPress ciblés par heure ;
* c'est la campagne la plus agressive que nous ayons jamais vue par le volume d'attaque horaire.

Lire [Breaking: Aggressive WordPress Brute Force Attack Campaign Started Today, 3am UTC](https://www.wordfence.com/blog/2017/12/aggressive-brute-force-wordpress-attack/).

## Solution : décomplexifier son système

Je ne sais pas si l'internet et le web sont devenu des champs de bataille mondial ; mais sachez qu'il est possible de maintenir son activité quotidienne d'édition sans avoir à paniquer de manière permanente.

Parfois, sur les [générateurs de site statique](/generateur-site-statique/), j'entends dire : <q> c'est marrant, avec les pages statiques, on revient 20 ans en arrière.</q>. Ceci n'est pas tout à fait vrai, mais pas tout à fait faux, non plus.

Pour le comprendre, citons le grand Jacques Ellul :

 > Le progrès technique soulève des problèmes plus difficiles qu’il n’en résout effectivement. Atteinte à la vie privée, pouvoir secret, excessif, centralisation, complexité croissante…

Plus, on ajoute de couches techniques pour répondre à des besoins qu'on a pas forcément, plus on compléxifie un système. Et plus on augmente, potentiellement, sa surface d'attaque.

Partir sur du statique, en ayant une bonne culture de la sécurité, est un bon moyen d'aborder sereinement la publication de contenu sur le web sans avoir à se soucier de la sécurité de ses données.