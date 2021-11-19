---
title: "Les FrameWork JS ce n’est pas (forcément) pour tout le monde"
---

ReactJS, AngularJS, VueJS, SvelteJS… ce sont les technologies à la mode. Souvent, ces technologies sont adoptées sans savoir pourquoi elles ont été choisies.

## Un site gouvernemental

Lors d’un audit d’accessibilité, et qu’un site réalisé avec un FrameWork JS se présente, on sait que la journée va être rude. Pourquoi parce que souvent énormément d’anomalies d'accessibilité sont présentes dans le code car l’équipe de développement n’a pas pris en compte ce sujet ; mais aussi parce que la navigation de type "application" demande de tester des parcours complexes avec des modifications permanentes de contexte. Ces FrameWorks permettent de mettre à jour des composants dans la page, alors on s’en sert un peu partout puisque c’est possible, mais sans prendre en compte la notion d’accessibilité.

Pour l’accessibilité, nous avons la possibilité de mettre en place ce qu'on appelle des alternatives. Si pas de JavaScript (mise à jour d'un composant trop complexe), on peut mettre en place un code qui fonctionne sans JavaScript. Si JavaScript ne fonctionne pas, met du temps à se charger ou autre… on peut se servir de cette alternative ou un fonctionnement dégradé et permettre aux usagers de faire aboutir leur navigation.

Avec un FrameWork JS, on a pas vraiment d’alternative, pas de fonctionnement dégradé, puisque si pas de JavaScript : le site fonctionne pas du tout. On a un message : "activez JavaScript pour accéder au site". On peut proposer quand même parfois une alternative, mais ce serait plus ou moins un autre site avec un fonctionnement différent (donc un double circuit de conception/développement).

Pour garantir un taux de conformité en accessibilité convenable, pour une simple démarche gouvernementale, où on remplit une succession de champs dans un formulaire, l’utilisation de PHP semblerait souvent plus adaptée.

PHP permet de réaliser des pages HTML avec une relation serveur de manière plutôt classique, libre à l’équipe d’ajouter une surcouche JavaScript si nécessaire. On a l’avantage des 2 technologies sans forcement la complexité.

## La réalité des Framework JS

### Apprendre à maîtriser une technologie non indispensable ?

> "Nous avons des développeurs front-end très talentueux, cependant, ce ne sont pas des experts de React - et ils ne devraient pas avoir besoin de l‘être. [..] le front-end doit être construit en HTML/CSS conforme aux normes avec JavaScript utilisé pour enrichir les fonctionnalités si nécessaire et approprié."

Que tweet une référence du monde du HTML/CSS Sara Soueidan ? Un article présent sur le site du W3C, qui explique pourquoi ils n’ont pas utilisé de FrameWork JS pour la refonte du site du W3C.

Introduire une nouvelle dimension technique dans leur équipe n’apporte pas grand chose en terme de capacité à répondre au besoin ; demanderait de former les personnes, d’en embaucher d’autres, voire de se retrouver face à des impasses techniques (notamment pour l’accessibilité).

<div class="center">
	{% twitter https://twitter.com/SaraSoueidan/status/1454878797686132736 %}
</div><br>

### Choisir la bonne architecture

> Les solutions proposées par les ingénieurs de Netflix, LinkedIn ou Facebook ne sont pas destinées à la grande majorité des besoins d’organismes plus restreints : elles sont souvent les meilleures pour les grandes entreprises qui peuvent se permettre de mettre la barre haut en ingénierie, qui peuvent se permettre de grandes équipes infrastructure et opérationnel.

Et alors, si ReactJs n’est pas adapté au besoin du W3C, il pourrait l’être pour mon besoin à moi. Hé bien, pas si sûr.

Il y a un écart entre ce que les développeurs-influenceurs écrivent et la réalité quotidienne de la plupart des développeurs. En effet, dans une conférence, dans une démo, le monde est merveilleux et cadré. Mais dans la réalité, est-ce que ce que les bénéfices annoncés se valident ?


<div class="center">
	{% twitter https://twitter.com/jeanqasaur/status/1455589141299675139 %}
</div><br>

### La performance des FrameWorks JS

J’avais déjà relayé des tests de performances sur les FrameWorks JS : [Coût des Frameworks JavaScript](/2020/04/24/cout-framework-javascript-pas-eco-responsable/). Le résultat n’était pas très joyeux.

Dans tweet récent Zach Leatherman pointait une moyenne de performance assez basse pour Next.js et GatsbyJS. Un rapport de Google insistait sur le mieux en termes de performance pour ces technologies, mais ça reste en deça de ce qu'un usager voudrait, mais aussi une épine énorme pour un organisme qui voudrait appliquer des notions de numérique responsable.

<div class="center">
	{% twitter https://twitter.com/zachleat/status/1456383520335613955 %}
</div><br>


## Bienvenue dans la bêtise et la monoculture

Le discours commercial fonctionne à tous les niveaux. La promesse d’un conférencier sur scène qui vous vend la qualité de sa solution clef en main fait rêver l’utilisateur moyen qui ne sait pas trop dans quelle direction aller pour éviter de s’échouer sur les rochers d’un marché vorace.

Si on analyse la situation générale de manière pragmatique. On désire avoir des services numériques simples, efficients, accessibles, sûrs qui consomment le moins d’énergie possible et qui en font consommer le moins possible aux périphériques qui viennent le visiter.

L’utilisation des FrameWorks JS n’apportent vraiment satisfaction que dans un nombre réduit de cas. Et dans un nombre de cas quasi nul, si on prend en compte les contraintes présentes dans la phrase précédente.

Pour éviter de courir après la dette technique et des services conçus avec une démarche industrielle, une approche globale est nécessaire pour embrasser un ensemble de sujets et choisir des architectures adaptées pour un service (et pas seulement adaptées aux personnes qui la code).

Nous avons une question fondamentale sur la complexité de nos systèmes techniques et l’énergie nécessaire pour les maintenir dans le temps dans un avenir proche. Pour les 10 années à venir, les choix que nous faisons aujourd’hui sont cruciaux, mais à condition de bien comprendre ce que sera la réalité de la disponibilité énergétique du monde de demain.
