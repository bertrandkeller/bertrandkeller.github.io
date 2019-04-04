---
title: Sud Web - Le site de conférence le plus rapide du monde
image: /assets/winner.jpg
---

Peut-être avez vu ce billet de Malte Ubl : [How we built the fastest conference website in the world](https://2019.jsconf.eu/news/how-we-built-the-fastest-conference-website-in-the-world/) (comment mettre en ligne le site le plus rapide du monde) ? Le texte est très intéressant mais le titre est mensongé car [https://2019.jsconf.eu](https://2019.jsconf.eu) n’est pas le site le plus rapide du monde.

*Malte Ubl thinks he produced the fastest conference website in the world in the world, but he doesn't the Sud Web conference*

Je tenais à faire ce billet ; j'organise la conférence Sud Web et on entend parfois (de loin) des railleries disant que Sud Web n'est pas une conférence technique. C’est vrai quand on regarde le programme (et encore quand on le survole), on ne présente pas de sujets en mode "c’est moi qui ait la plus grosse" (comme aux states).

Et pourtant, ceux qui sont venus et viendront à Sud Web savent que nos orateurs et notre public sont constitué de gens doués. Personnellement, je ne sais pas si je suis doué, mais c'est bien moi ait la plus grosse.

## The fastest

![Le site de conférence le plus rapide du monde](/assets/performance-sudweb-jsconf.png)

Si nous comparons la courbe de rafraichissement des 2 sites, pour un test réalisé avec des serveurs hébergés en France, le site de Sud Web éclate grave le site de le JSConf.

*The test was made from France (server ip test) with [Dareboost compare tools](https://www.dareboost.com/en/comparison). Sud Web website is not the real fastest website in the world because we decided to keep a french hosting with our Friends of [Alwaysdata](https://www.alwaysdata.com/).*

### LoadTime

![Le site de conférence le plus rapide du monde](/assets/performance-sudweb-jsconf-loadtime.png)

Notre hébergement n’est pas le meilleur, mais en ce qui concerne le chargement, je crois que les courbes parlent d’elles même. A 750 ms, Sud Web est chargé à 100% ; alors que JSConf charge encore pas mal d’images grand format.

### Weight by resources type

![Le site de conférence le plus rapide du monde](/assets/perfomance-sudweb-jsconf-weight.png)

Où se situe la différence ? Pour écrire cet article et me la péter, j'ai appliqué du lazyloading sans mettre d’image par défaut dans ma balise `<img>`. C'est pas très correct, mais l’image n'est qu'une illustration, elle n'est pas indispensable. Néanmoins, elles sont plus légères, suffisament grandes pour une bonne comprehension de la page.

Mais si on enlève les images, j’ai moins de scripts, moins de CSS et un peu de "other" avec un bon gros SVG. (Merci Matthieu Bué alias @twikito).

### And the winner is 

Pour consulter le rapport complet : [Web Quality and Performance Comparison : JSConf Vs Sud Web](https://www.dareboost.com/en/comparison/d_5ca60429e967904c6f32e56c/d_5ca60429e967904c6f32e56e/).

Vous aurez la preuve que Sud Web est une conférence qui promeut des valeurs pour un web respecteux, certes, mais qui est en capacité de faire de la mise en pratique.

Cette article est évidemment ridicule, il n'a pas pour fonction d‘affirmer qui serait le meilleur pour le chargement d’une page web car cela dépend de beaucoup de paramètres. En revanche, il essaye de montrer que le plus rapide n’est pas qui veut.

Que le monde du web est submergé de FrameWork JS, de nouveauté JS,… que chacun essaye de suivre ce mouvement. Mais que l’efficience se construit ailleurs que dans les outils, elle tient parfois à d'autres choses.

Mais avez-vous envie de les développer ?


