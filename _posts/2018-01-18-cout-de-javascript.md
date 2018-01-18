---
title: Le coût de JavaScript
image: /assets/site-web-poid.png
---

<div class="center">
	{% twitter https://twitter.com/wycats/status/942908325775077376 %}
</div>

<h2>Je veux un site qui claque</h2>

Selon Yehuda Katz le JavaScript serait plus important en terme de chargement qu'une image. Depuis quelques années déjà, les développeurs d'expérience, comme moi, suivons invariablement le poids de pages augmenter sans cesse.

> Le code JavaScript est beaucoup plus lourd, octet par octet, qu'une image, à cause du temps passé à l'analyser et à le compiler.

Il y a 10 ans, les décorations de nos sites web étaient le fruit d'un découpage minutieux de maquettes Photoshop réalisées au pixel. La méthode fait sourire aujourd’hui puisque nous avions pour mission de réaliser des sites identiques dans des navigateurs qui interprétaient le code de manières différentes.

L'arrivé de CSS3 fut comme une sorte d'aubaine. Nous allions enfin supprimer toutes ces requêtes inutiles et pouvoir baisser le drastiquement le poids de nos CSS. Les décorations seraient définies en CSS.

C'était sans compter sur les polices Web et les héros images (grande images d'entête) intégrées de manière amateure. Le poids moyen des sites augmente encore et encore jusqu'à atteindre celui d'un jeu comme Doom (2Mb).

<h2>JavaScript the evil !</h2>

Mais le chargement d'une page est-il directement proportionnel au poids d’une page ? Est-ce que plus d'éléments se chargent et plus ma page met du temps à s’afficher ?

La réponse est non ! Le poids d'une ressource influe effectivement sur le temps de chargement ; mais toutes des ressources n'ont pas un impact égal. Il reste aussi possible de différer ou de rendre optionnelle certains chargements.

A ce jeu là, c'est JavaScript qui est mis en cause en 2018. La réalisation d'applications web permet mettre en ligne du code plutôt léger, seulement le code présente des temps d'exécution qui peuvent se révéler trop long et ainsi pénaliser l’utilisateur.

<div class="center">
	<br>
	<iframe width="560" height="315" src="https://www.youtube.com/embed/Lx1cYJAVnzA" frameborder="0" allowfullscreen class="yt-embed"></iframe>
</div>

Je vous laisse lire cet article très complet :
[Can You Afford It?: Real-world Web Performance Budgets](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/)

<h2>Ma préférence à moi</h2>

Si on évoque le chargement dans le vrai monde ([Beyond the Bubble: Real world performance](https://building.calibreapp.com/beyond-the-bubble-real-world-performance-9c991dcd5342)), on voit que le chargement d’une page web est bien différent en fonction des pays, mais aussi en fonction du processeur de votre mobile (le mien n'est même pas listé).

![Temps de chargement selon le type de mobile](/assets/temps-chargement-type-mobile.jpeg)

JavaScript a un coût ([The Cost Of JavaScript](https://medium.com/dev-channel/the-cost-of-javascript-84009f51e99e)). Je continue de préférer, tel un vieux développeur que je suis, à construire des coquilles.

Je ne dénigre pas le JavaScript ou les applications, mais quand on code un site qui va être chargé par tous types d’utilisateurs, il est important de prendre en compte les cas de faibles connexions.

Depuis 10 ans, le poids des pages augmente, aussi, parce que la complexité du web augmente. Les équipes de développement connaissent beaucoup de choses mais ne prennent pas assez en compte cette notion. Les objectifs sont souvent business.

Ainsi, je préconise avant tout de réfléchir sur ses méthodes de développement : de rester humble et mesuré.

Je continue d'utiliser des [générateurs de site statique](/generateur-site-statique/) parce que pour servir du contenu statique je garde une complexité la plus basse possible.
