---
title: Jekyll et Hugo sont dans un bateau
---

Les générateurs de sites statiques sont géniaux, ils font le thé et le café en étant super rapides ; mais des GSS, il y en a la dose ; se lancer dans la maîtrise d'un en particulier demande du temps. Alors, on revoit fleurir, comme pour toutes les technologies, des oppositions entre les avantages de tel ou tel GSS.

## Hugo en mode Turbo

Actuellement le développement de Jekyll n'apporte plus de grandes fonctionnalités, il correspond aux besoins de Github (Avec github Pages) ; c'est-à-dire permettre d'éditer un site simple à partir d'un vulgaire dépôt de contenu (Chargement d'une thème avec 1 fichier de configuration).

Grandement limité par sa vitesse d'exécution, les themers de GSS se tourne vers Hugo qui propose des performances ahurissantes (de la seconde pour Jekyll à la milliseconde pour Hugo). Le langage Go va bien plus vite que Ruby, mais c'est oublier aussi que Hugo n'a ni les même objectifs, ni la même largeur de spectre que Jekyll.

## La compilation Sass

Sass est un preprocesseur CSS (encore utilisé par les développeurs d'un certain âge) permettant d'ajouter des règles et variables dans ses fichiers de mise en forme (CSS).

### Jekyll
Jekyll inclut nativement la compilation de fichier Sass. Un simple fichier (.scss) peut appeler un thème entier et sera compilé avec le même nom de fichier en ajoutant l'extension .css.

### Hugo
Quand vous passez à Hugo, pas de compilation native de Sass. Que faire ? Soit passer par un software sur votre machine pour compiler, soit lancer une commande dans votre terminal (type node-sass), soit installer Gulp (Node.js).

Ne cherchez pas, Hugo n'intègre pas et n'intégra pas la compilation de Sass car c'est un besoin spécifique qui ne sera peut-être plus nécessaire à long terme. Il est logique que cette fonctionnalité ne soit pas prise en compte par le cœur de Hugo et qu'elle soit déléguée à un autre outil.

## Les images responsives

Un site qui se veut performant se doit de permettre la mise en place d'un code pour le chargement d'images responsives (sizes ou srcset).

### Jekyll
Jekyll propose de multiples plugins pour afficher des images responsives. Il suffit d'installer le plugin et d'intégrer les bouts de codes nécessaires pour généraliser la présence de ces images sur votre site. Le problème reste que la génération des formats d'images reste assez longue et plombe la compilation de votre site (il n'est pas facile de désactiver tout cela dans un contexte de développement).

Le plugin le plus performant reste celui de fantastique Nicolas Hoizey ([Jekyll cloudinary](https://nhoizey.github.io/jekyll-cloudinary/)) ; son seul défaut est de devoir se créer un compte sur un service externe.

### Hugo
Hugo, lui, propose la possibilité d'insérer le code pour sizes ou srcset, mais je n'ai rien trouvé pour la génération (on-the-fly) des images aux différents formats. 

Pour le moment, j'ai ajouté le module [gulp-gm](https://www.npmjs.com/package/gulp-gm) à mon fichier Gulp général avec les règles de génération dans trois formats de mon choix. Encore une fois, Hugo délègue une tâche automatisé à un script externe.

## Le moteur de recherche Algolia

Algolia est un service externe permettant d'ajouter un moteur de recherche performant sur son site. Pour fonctionner, il nécessite de nourrir un index qui se trouve chez lui (chez Algolia). Il est donc nécessaire de pouvoir aussi mettre à jour l'index à la volée à chaque mise à jour du dépôt.

### Jekyll
Pour Jekyll, pas de souci, un plugin existe : [algoliasearch-jekyll](https://github.com/algolia/algoliasearch-jekyll), développé par notre dévoué Tim Carry. On suit laborieusement le fichier de configuration et, une fois mis en place, l'index sera mis à jour à chaque génération du site.

### Hugo
Pas de plugin algoliasearch-hugo. Ce serait tellement génial d'avoir ce plugin pour Hugo, comme pour Jekyll. Mais hugo étant codé en Go, cela demande pas mal de ressources à Algolia pour développer un plugin qui ne présente pas pour le moment de besoin commercial fort.

Personnellement, je ne me suis pas embêté, j'installe le plugin Jekyll sur mon dépôt, je configure un petit hook pour modifier le chemin des collections et de la metadonnées "url" (nécessaire pour générer des liens) pour l'index Algolia et je configure mon dépôt pour la mise à jour de l'index Algolia à chaque modification du dépôt.

## Conclusion
Les tutoriaux "hello world" semblent toujours présenter des technologies sous leur jour le plus prometteur. Jekyll et Hugo sont 2 outils très puissant mais qui n'ont pas les mêmes philosophies.

Ainsi passer à Hugo peut présenter certaines déconvenues dans le cas où l'ont désire mettre en place des choses précises (et qu'on vient d'une autre techno qu'on maîtrisait). De plus il demande de passer par du Node.js pour le scripting, là ou Jekyll utilise Ruby c'est-à-dire le même langage avec lequel il est codé.

Cet article montre que, parfois, il faut savoir utiliser des solutions hybrides pour avancer. 

Si Jekyll, Hugo et tous les autres étaient donc dans un bateau et bien je pense qu'il faudrait savoir donner sa chance à chacun de ces petits outils car ils peuvent répondre rapidement à des besoins simples.