---
title: Les sites sans mise en page font leur grand retour
description: "Dans des cas où il est nécessaire d'échanger immédiatement un contenu simple, on voit des personnes privilégier des sites sans mise en page, avec seulement du contenu texte."
image: /assets/text-only-site-static.png
---

Rappellez vous la citation de mon dernier article à propos de l'[abandon de React.js par Netflix pour leurs landing pages](/2017/11/06/netflix-react-generateur-site-statique/).

> By getting rid of React and moving to plain JavaScript, we saw a 50% reduction in our Time to interactive metric.

D'accord, ils obtiennent 50% de réduction d'un de leur temps de chargement de pages, mais 50% par rapport à quoi ? Hé bien, par rapport à leur page précédemment en ligne.

Mais dans le cas, où leurs pages étaient déjà rapides à charger, on peut dire que le résultat est plutôt intéressant ; mais dans le cas où leur pages étaient assez lentes à charger, même avec 50% d'amélioration les pages peuvent rester, encore et toujours, plutôt lentes à charger (par rapport à ce qu'un utilisateur ressent comme rapide).

## Le ressenti utilisateur

Lorsque l’ont parle de ressenti utilisateur dans les conférences de web, on aura plutôt tendance à vous le présenter sous une forme visuelle. Sur l'illustration ci-desous, on insère une sorte de faux contenu en lieu et place des zones de contenus en attendant que le vrai contenu se charge.

<div class="center" markdown="1">	
{% cloudinary /assets/place-holder-content.gif alt="faux contenu HTML" %}
</div>

L'utilisateur observant cette animation aura moins la sensation d'attendre, donc un meilleur ressenti de rapidité de chargement. Personnellement, je vois cet effet sur nombre d'interfaces JS lentes à charger et j'ai tendance à haïr les services car je préferais qu'ils optimisent leurs pages plutôt que de me faire charger un élément inutile qui me trompe.

Je suis peut-être un étrange utilisateur, intéressé par le texte, le rédactionnel, mais ce qui m'inporte c'est que le contenu s'affiche quelque soit la mise en forme.

Apparement, je ne suis pas le seul.

## Les sites présentants du texte et seulement du texte.

Je vous conseille la lecture de cet article : [Text-only news sites are slowly making a comeback. Here's why.](https://www.poynter.org/news/text-only-news-sites-are-slowly-making-comeback-heres-why). Il vous présente

> Has anyone researched news sites capability to provide low-bandwidth communication of critical info during crisis situations?

Vous pourrez découvrir cette histoire écrite par Melody Kramer dans laquelle CNN créa un site en version text-only (texte seulement - pas d'images, pas de vidéos, pas de publicités ou de tracking) après le passage de l'ouragan Irma : [CNN - Breaking News, Latest News and Videos](http://lite.cnn.io/en). 

Les sites présentants seulement du texte ne sont pas récents, on avait déjà vu l'expérience se concrétiser lors du 11 septembre 2001 ; époque à laquelle le réseau (général) n'était pas aussi rapide qu'aujourd'hui. Ce qui change c'est qu'après une grande prériode de consultation sur écrans de bureau et mobiles en ville. Des utilisateurs consultent des pages web avec des mobiles dans des zones avec un faible réseau et que cela resprésente une grand partie de leur relation avec le monde.

Ces pages peuvent sembler rudimentaires, mais dans l'article que je cite, [Albert Bowden](https://twitter.com/jalbertbowdenii) ne manque pas d'énumérer plusieurs avantages :

1. Couverture de tous les problèmes d'accessibilité (robots, lecteurs d'écrans…)
2. Lecture par tous les périphériques possibles
3. Marche dans le métro
4. Préserve le porte-monnaie.

## Que cela doit-il vous inspirer ?

Le contenu est une des raisons principales pour lesquels les utilisateurs consultent des pages web. Cela peut-être du contenu vidéo ou image bien entendu, mais ceux-ci étant assez lourd en terme de poids, il faut toujours penser à l'alternative texte dans le cas d'un faible débit de données. Les utilisateurs peuvent se contenter d'une mise en forme légère, si le contenu est là.

Si les utilisateurs peuvent se contenter de pages ne contenant que du texte. Si cela vous coûte peu cher à mettre en place et à maintenir au niveau technique ; alors la logique de sites text-only pourrait être l'objectif de base de votre stratégie d'édition sur le web.

Pour clarifier ma pensée, je dirai que l'investissement sur un système technique lourd et contraignant devrait être délaissée (stop CMS) et consacré à la partie rédactionnelle (métier) celle qui est nécessaire pour le lecteur.

En gros, si vous êtes une structure (ou sous structure d'une organisation) qui publie du contenu, vous n'avez pas à vous mettre le boulet d'un système de rédaction techniquement lourd à maintenir et dépendant qu'une DSI. Vous devez vous concentrer sur votre stratégie éditoriale. 

Je pense que les [générateur de site statique](/generateur-site-statique/) répondent à ce besoin et que les groupes qui passeront le cap de leur maîtrise pour imaginer des formes de sites innovantes et correspondants à des besoins à venir.

