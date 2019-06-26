---
layout: page
title: La Low-Tech appliquée au web et aux sites internet 
navigation: false
type: article
category: Low-Tech
---

La Low-Tech est un mouvement qui gagne du terrain dans les esprits. Il semble de plus en plus parler fortement aux personnes que le principe d’urgence climatique se répand.

Pourquoi cette page ? Pourquoi des articles ? 

Parce que je milite depuis des années (au milieu de plein d’autres personnes) pour un web **accessible** et **durable**. Le web est un moyen extraordinaire d’**émancipation** qui se produit par la circulation des idées (indispensable à l’innovation technologique & sociale).

J'ai travaillé sur des petits sites, mais aussi sur des très grosses machines ; j’approndie l’usage des [générateurs de site statique](/generateur-site-statique/). Quand vous chargez une page web, votre navigateur charge des dizaines, voire des centaines de fichiers (plus ou moins lourds) ; souvent le site peut mettre plusieurs secondes à s’afficher. Est-ce que ces fichiers sont utiles ? Est-ce qu'on peut les optimiser ? Les supprimer ?

Je suis un expert des interfaces, expert de la **performance web**. Si jamais l’idée vous venait d’entamer une démarche durable pour votre site web, vos outils internes… Il y a moyen de réduire par 5, 10, parfois plus, le poids de votre infrastructure numérique par la diminution drastique de fichiers inutiles mais surtout de pratiques inutiles (à l'origine de la génération de ces fichiers).

Oui, c'est possible assez simplement et, pour tout dire, à travers une démarche de **convivialité** car l’idée est de supprimer les lourdeurs en privilégiant les compétences humaines (plutôt que de mettre de la confiance dans la machine).

## Articles sur la Low-Tech
<ul class="posts-list">
  {% for post in site.categories[page.category] reversed %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
