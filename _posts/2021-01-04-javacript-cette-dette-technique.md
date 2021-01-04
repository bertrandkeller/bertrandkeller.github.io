---
title: "JavaScript, cette dette technique"
categories:
  -  Low-Tech
---

Sur les réseaux sociaux, la communication en ligne est un frein au développement d’idées ou des sentiments.

Il y quelques temps, je m'énervais sur un forum en disant texto : "C‘est du JS (plus particulièrement du REACT), JavaScript est une dette technique". Je parlais avec une personne fort respectable et bien au courant des tenants et des aboutissants sur le sujet, pourtant, il ne lui a pas semblé qu’il se cachait derrière ma provocation un raisonnement non dénué de sens.

## Histoire de Stack

En informatique, on utilise le terme de Stack pour désigner la liste des technologies qu'on utilise pour réaliser un programme.

La particularité de ce domaine est que la stack évolue en permanence ; à telle point que s’investir dans une technologie qui ne sera pas demandée fréquemment (même si elle est meilleure) sur le marché peut vous ringardiser, voire ringardiser votre entreprise.

> « pile de technologies » ou « écosystème de données », est une liste de tous les outils technologiques utilisés pour développer et faire fonctionner un programme.

Pour la réalisation d’un site web (et pour être employable sur le marché), on utilise actuellement du JavaScript et pour le mettre en œuvre, on utilise des boîtes à outils (Frameworks) du type : REACT, Vue.js,… (jusqu’à ce qu’elles soient bientôt remplacée par d'autres choses).

Pour être employable, il faut respecter le modèle de pensée des gens qui emploient, ainsi que maîtriser les technologies à la mode. Il faut être hype. Hype même si on ne sait que manipuler une boîte à outils sans comprendre ce que cette boîte à outils fait, Hype même si on ne sait pas comment marche un navigateur.

<br>
<div class="center">
	{% twitter https://twitter.com/ChrisFerdinandi/status/1341153256043626496 %}
</div>
<br>

Ainsi ne vous demandez plus pourquoi un site réalisé par une entreprise côté avec des développeurs bien mieux payés que des agents publics bac+9 met plus de 10 secondes à se charger. Ces développeurs maîtrisent la complexité de la Stack. Stack nécessaire pour répondre à un (ou plusieurs) marchés. Mais ces développeurs ne maîtrisent pas la base du métier (le fonctionnement du navigateur et l‘hétérogénéité des cas de consultations).

## JavaScript et dette technique

Dans une vidéo Houssein Djirdeh et Jason Miller nous présentent [EStimator.dev](http://estimator.dev/) (voir [Transitioning to modern JavaScript](https://www.youtube.com/embed/cLxNdLK--yI>)). Ils travaillent chez Google et Google qui veut référencer le web pour que ça lui coûte le moins possible, s'est rendu compte que les développeurs JavaScript pouvaient faire télécharger plusieurs mégas aux utilisateurs pour garantir de la retro-compatibilité.

Garantir la retro-compatibilité ça sonne bien. Mais plutôt que de ne pas charger une effet un peu lourd (et non indispensable) à un utilisateur, on préférera lui appliquer la double peine : charger l'effet un peu lourd + du code pour que ça marche de manière rétro-compatible.

> The price for pursuing JavaScript for everything has been a monstrosity of modern complexity. Yes, it’s far more powerful than it ever was. But it’s also far more convoluted and time-consuming than is anywhere close to reasonable for the vast majority of web applications.  
**HTML over the wire** - <https://m.signalvnoise.com/html-over-the-wire/>

Sans rentrer dans les détails (c'est un peu plus fin que ça), plutôt que respecter les règles du fonctionnement d’un navigateur, on balance tout le code comme si les terminaux des utilisateurs étaient des bornes intéractives connectées à la fibre.

## JavaScript et éco-conception

Dans les équipes de développement, on n’engage pas d’intégrateurs (HTML et CSS ne sont que des éléments mineurs de la Stack), on n’engage pas développeurs accessibilité… des gens qui connaissent bien le métier.

On engage donc des développeurs Full Stack, des développeurs qui maîtrisent un grand ensemble de la pile technologique de l’entreprise ; des gens qui mettent strictement en pratique ce qu'on leur a appris et ce que font leur voisin de table.

> This is what HTML Over The Wire is all about. It’s a celebration of the simplicity in HTML as the format for carrying data and presentation together, whether this is delivered on the first load or with subsequent dynamic updates. A name for a technique that can radically change the assumptions many people have about how modern web applications have to be built today.  
**HTML over the wire** - <https://m.signalvnoise.com/html-over-the-wire/>

Sauf que cette incompétence à mettre en ligne des interfaces trop lourdes, mais vraiment trop lourdes, Google a commencé à la mesurer et à montrer que ça pèse au niveau de nos émissions.

![Estimated cost of legacy javascript](/assets/estimated-cost-of-legacy-javascript.png)

## Conclusion

JavaScript est la technologie du web d’aujourd’hui et du web de demain. Il n'y a pas de raison de critiquer outre mesure son existence, ni son fonctionnement.

En revanche, dans le cadre d’une réflexion d’éco-conception, l’usage massif de JavaScript de manière complètement décomplexée dans le cadre restreint d’un projet est véritablement néfaste.

Par exemple, maximiser/généraliser du développement avec REACT, une technologie très gourmande en énergie, certainement vouées à disparaître un jour ou l’autre n’est pas une pratique pérenne.

Il est nécessaire de limiter notre impact en développant des interfaces au code le plus simple et le plus viable dans le temps. Cela passe non pas que par de l’optimisation de code déjà trop complexe et de la simple mesure d’impact en surface mais d’abord sur une acceptation que les pratiques actuelles, celle que demandent le marché sont à changer radicalement.


