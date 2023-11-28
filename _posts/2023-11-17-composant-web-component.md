---
title: "Antagonisme sur les composants web"
categories:
  -  Accessibilité
---


Un petit article pour parler des antagonismes du web à des personnes qui ne codent pas. Différence en "Composant web HTML" et "Composant Web JS".

"Si votre élément personnalisé est vide, il ne s'agit pas d'un composant web HTML. Mais si vous utilisez un élément personnalisé pour étendre un balisage existant, c'est un composant web HTML."

Étendre un balisage existant, mais qu'est-ce que ça veut dire ?

Des composants ce sont comme des boîtes qu'on mettrait dans des boîtes. Des éléments graphiques indépendants, qu'on mettrait dans des pages.

ReactJS a introduit la conception de composants de telle manière que si le JavaScript (code événementiel) ne s'exécute pas, alors pas de composant = > Page vide (bloqué).

Les standards du web ne sont pas réfléchis de cette façon. Le web est conçu de telle manière qu'un ancien navigateur va pouvoir interpréter une page (rétro-compatibilité) => Page pas vide (accès au contenu).

Vous pensez que l’accessibilité c'est pour combler les déficiences, Mais nan ! Quand on parle accessibilité, on parle d'une manière de concevoir et pratiquer le web qui respecte de cette logique d’amélioration (enhancement). On code selon les règles et on rend les sites "accessibles" (techniquement) parce que les standards du web le prévoient. Ce n'est pas de la sur-qualite, ni de l'ésotérisme. Ce sont les règles de l'art.

Cette opposition est une bataille larvée chez les professionnelles du web. Mais vous ne la voyez pas. 

Ceux qui savent pleurent de voir d'autre ignorer ce qui constitue la base du web. Ceux qui ne savent pas privilégient l'employabilité en suivant les modes.
Au milieu, les utilisateurs sont bloqués.

Au final, on espère que la RGAA ou le RGESN vont obliger les "devs" à considérer l’essence du web. Pour cela faut former les ignorants, mais à conditions qu'ils soient d'accord.

A qui profite le crime ?

Lire [HTML Web Components](https://blog.jim-nielsen.com/2023/html-web-components/).
