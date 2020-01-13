---
title: Conférence NetSecureDay 2019 - surface d’attaque et complexité
image: /assets/netsecure-day-site-map-surface.png
categories:
- Sécurité
---

## Conférence NetSecureDay

La conférence NetSecureDay est organisée tous les ans à Rouen, elle réunie un groupe de personnes aux activités hétérogènes qui parlent plus ou moins de sécurité.

C’est en tant que développeur de site web que je suis venu présenter mon point de vue sur la sécurité.

## La sécurité

Je ne connais pas très précisément le domaine de la sécurité, chaque année j'en découvre un peu plus. Dans la sécurité, on fonctionne beaucoup par scénario de test, scénario d’intrusion.

On essaye de casser le système et on voit s’il tient. On rédige des procédures, on essaye de faire d’un côté de la prévention (éviter que ça arrive) et de la protection (éviter que ça se propage).

Je suis intervenu avec une idée sur la prévention, qui consiste grosso-modo à faire du code moins complexe pour éviter les ouvertures pour des attaques possibles.

## Sites critiques Vs non critiques

J’ai fait le parti pris de parler non pas des sites dit **critiques** (applications complexes à forte valeur économique, le truc noble), mais des sites considérés comme **non critique** (le truc pour les non dev) mais qui, s'ils tombent, peuvent nuire à l’image de l'entreprise (par exemple)..

Pour moi un site **non critique** va être ce site WordPress laissé à la Comm parce qu'elle connaît bien l’outil. La vision sécurité, (essayer de minimiser le risque) ne comprends pas ce principe car les WordPress mis en place sont des sources de dépense d’énergie.

Pourquoi on laisse les WordPress ? Pour la bonne et simple raison que la Comm ou n'importe quel autre service a quand même le droit d’être autonome sur ses outils. Et que si on rentre sur ce terrain de discussion, la Comm ne voudra jamais perdre cet avantage ; et elle a raison.

## Tout le monde gagnant ?

On peut gagner sur tous les tableaux en supprimant cette pratique d’un autre âge (pour le coup, on peut dire ça je pense) en passant sur des (gestionnaires de) sites statiques.

Les sites statiques font quasiment tout ce que peux faire un site dynamique. Ce qu'il ne fait n’est que très peu utilisé par les utilisateurs des sites dynamiques.

Les gens pensent qu'un site statique doit être édité à la main par un développeur. Euh… en fait non, on a déjà de très belles interfaces magnifiques qui font la taf.

Mais bon c'est vrai le changement culturel ne s’opère pas, seuls certains dev sont convaincus, y a encore du taf. Faut peut-être arrêter de prendre les gens de la Comm pour des neuneus et répondre à leurs besoins tech.

(En plus les sites statiques sont réplicables et rendent indépendant d’un service IT, les services Comm travaillent souvent sur des landing pages, les gestionnaires de sites statiques pourraient tellement améliorer leur processus.)

## Se poser les bonnes questions

Pour la baisse de complexité des outils, une moins grande dépendance technique, une meilleur durabilité un moins grande exposition aux attaques : posez vous les bonnes questions.

Si vous avez besoin de pages statiques, générez directement des pages statiques. Cela aura un effet immédiat sur votre marge brut.

Voir les slides de la conférence : [Construire un site Low-Tech](https://bertrandkeller.github.io/conference-netsecure-day-surface-attaque-site-low-tech/).
