---
title: Quel est le rapport entre les sites nus et les sites statiques
---

On m'a posé la question sur Twitter de savoir quel était le rapport entre les sites statiques et les sites nus. J'accorde que le rapport (que je voulais montrer) n'est pas si évident alors je vais le détailler.

## Offline First

L'arrivée des services workers dans les navigateurs change la donne en terme de réalisation de sites web. Il est désormais possible de consulter des pages "hors ligne" ; des pages sauvegardées par votre navigateur et que vous pouvez consulter sans connexion (elles se mettent à jour à chaque connexion).

Ces technologies sont poussées par des grands acteurs du web, surtout Google, pour inonder le marché du contenu web en très forte croissance mais avec un faible réseau et des périphériques peu puissants : Inde, Nigéria…

Les services workers permettent de consulter des pages "hors lignes", mais plus que cela, ils permettent de pouvoir réaliser des actions "hors lignes", c'est-à-dire de se servir d'un site web comme d'une application.

Le type de sites qu'on peut réaliser ne se limite donc pas à des sites de contenus mais aussi à des applications (ex: une site de vente en ligne).

## Le réseau

Dans mon dernier article, je montrais que lors de l'ouragan Irma, des personnes consultaient des sites nus (très légers), car ils avaient une très faible connexion à ce moment là.

Les exemples que j'ai montré sont de grands journaux à fort trafic qui ne se situent pas sur la zone où s'est déroulée la catastrophe. Les rédacteurs n'ont à priori pas de soucis de connexion. Le site nus n'est qu'une simple visualisation sans images, vidéos ou styles.

Imaginons maintenant que des personnes au milieu de la catastrophe veulent éditer un sites pour informer les personnes aux alentours, alors elles auront une faible connexion pour éditer leurs pages.

Dans ce cas là, ce qui me semble le plus robuste, le plus simple et qui demande le moins de ressources réseaux, c'est d'écrire des fichiers textes (de type Markdown) et de les envoyer (ou les corriger) en réalisant un commit sur un dépôt (pas besoin d'interface CMS).

## Le nomadisme

A ce stade on pourrait dire que ce n'est pas tous les jours qu'un ouragan frappe mon village et que ces problématiques de faible réseau ne s'appliquent que très rarement sous nos tropiques.

Les sites statiques ne sont pas qu'un outil technique pour générer des pages. Ils sont un des moyen les plus simples et les moins chers pour répondre aux nouvelles manières de naviguer sur le web.

Les utilisateurs ne sont plus cantonnées sur leur machine puissante. Ils consultent plusieurs périphériques et sont souvent en condition de nomadisme : ascenseur, voyage, zone peu couverte… Ils désirent être connectés en permanence mais ne disposent pas tout le temps du réseau adéquate. Un utilisateur n'est pas forcément une personne bien assise dans un fauteuil, c'est aussi désormais un commercial qui parcours des zones rurales très importantes.

## Le rapport entre sites nus et les sites statiques

Les utilisateurs ont désormais des pratiques de consultation nomades. On voit avec les sites nus, qu'en situation ou le réseau est faible, peu importe la mise en forme et la décoration.

Le futur du web est à des utilisateurs nomades qui sont assez fréquemments dans des situations dans lesquelles le réseau peut être coupé ou faible. Ils veulent consulter du contenu mais aussi agir dessus.

La logique des générateurs de sites statiques (JAMStack) rentre dans cette mouvance car elle demande un coût très faible d'entrée avec une robustesse excellente.

