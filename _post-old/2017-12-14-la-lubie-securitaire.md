---
title: La lubie sécuritaire
description: La sécurité des données c'est important, mais parfois la meilleure manière d'éviter les soucis c'est éviter de s’exposer.
image: /assets/jon-moore-cadenas.jpg
categories:
- Sécurité
---

Présent à une conférence sur la sécurité, [Netsecure Day](https://www.netsecure-day.fr/), à Rouen. Je fais le tour des hackers adeptes des [bugs bounties](https://fr.wikipedia.org/wiki/Bug_bounty), solutions d'identification et description de la RGPD.

## Les failles

Le sujet est très intéressant car il y a de grand enjeux sur la sécurité. En tant qu'utilisateurs, nous sommes nombreux à nous connecter à divers services au quotidien.

On ne s'en doute pas toujours, mais beaucoup d'entre nous utilisent des mots de passe similaires sur différents sites. Imaginons qu'un de ces sites se fasse hacker, alors il sera possible de tester votre "login/mot de passe" sur un autre site (bancaire par exemple).

## La sécurité

Imaginons maintenant qu'une personne utilise un mot de passe similaire sur un service grand public et un simple blog avec base de données, installé sur un serveur de votre entreprise (WordPress par exemple).

Les cas sont multiples, mais on peut imaginer que suite à la récupération des codes sur le site grand public, l'intrusion sur ce blog entreprise avec connexion est possible. Et donc qu'une personne puisse se servir de ce blog pour pirater des données de l’entreprise. *D'ailleurs, j'ai découvert aujourd'hui que les éditeurs de texte possédaient des [faille XSS](https://github.com/tinymce/tinymce/issues/3118)*.

## Se protéger

Dans les conférences sur la sécurité, on va vous aiguiller vers des solutions pour protéger les connexions ; vous évoquer les plans à mettre en place pour former l'ensemble de vos collaborateurs…

Le problème c'est que vous n'avez pas forcément les épaules, les temps, la taille critique et les compétences pour traiter ce problème de front.

Il existe pourtant une solution simple pour éviter d'être exposé aux problèmes de sécurité : utiliser [générateurs de site statique](/generateur-site-statique/). Vous pouvez le faire quelque soit la taille de vos organisations.

En effet, utiliser des pages statiques pour servir un site web limite énormément les possibilités d'intrusion de votre service. De plus, utiliser cette technologie baisse le temps et donc le coût de gestion de ces pages.

Ainsi, à l'heure des possibilités de pertes de données à grande échelle, d'exposition à des malwares et autres arnaques. L'utilisation de sites statiques est la solution.
