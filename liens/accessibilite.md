---
title: Des liens sur l’accessibilité
navigation: false
---

**Ce que ce document veut montrer :** L’accessibilité est au centre de la conception web car elle touche à la manière avec laquelle dont on considère les besoins  d’un utilisateur.

> L’accessibilité du web signifie que les personnes handicapées peuvent l'utiliser. Plus spécifiquement, elle signifie que ces gens peuvent percevoir, comprendre, naviguer, interagir avec le web, et y contribuer. L'accessibilité du web bénéficie également à d'autres, notamment les personnes âgées ayant des capacités diminuées dues au vieillissement.

C'est un droit universel, selon l'article 9 de la Convention relative aux droits des personnes handicapées adoptée en 2006 par l'Organisation des Nations unies.

## État de l’art

Il est difficile de dire si une page web ou un site web est accessible. Les difficultés pour interagir avec le web peuvent provenir de plusieurs facteurs. La mesure de l’accessibilité s’attache à des critères objectifs (qualité du code), à des critères subjectifs (pertinences d’intitulés) ; mais ne prend pas en compte des critères connexes, par exemple : une problématique de configuration serveur.

Néanmoins, savoir tester en détail des interfaces permet de mieux connaître les parcours et de pouvoir recenser les diverses blocages possibles auxquels sont confrontés les utilisateurs.

### Études

**Lire :**

 * <https://webaim.org/projects/million/#intro>
 * <https://observatoire.numerique.gouv.fr/observatoire/>

 **Ce qui faut retenir :**

97,4% des pages d'accueil présentent des échecs WCAG 2 !  
Alors que le taux de conformité WCAG est très faible, 21,9 % des pages avaient 5 erreurs détectées ou moins et 29,9 % en avaient 10 ou moins.

### WCAG et RGAA

Web Content Accessibility Guidelines et Référentiel Général d’Amélioration de l’Accessibilité.

  * **Perceptile:** Les utilisateurs doivent pouvoir le percevoir d’une manière ou d’une autre, en utilisant un ou plusieurs de leurs sens.
  * **Opérable:** Les utilisateurs doivent pouvoir contrôler les éléments de l'interface utilisateur (par exemple, les boutons doivent être cliquables d'une manière ou d'une autre - souris, clavier, commande vocale, etc.).
  * **Compréhensible:** Le contenu doit être compréhensible pour ses utilisateurs.
  * **Robuste:** Le contenu doit être développé à l’aide de normes Web bien adoptées qui fonctionneront sur différents navigateurs, maintenant et à l’avenir.

Les _WCAG_ sont des **recommandations** internationales éditées par la Web Accessibility Initiative (WAI) . Il s’agit d’un ensemble de tests individuels sur les interfaces (obtenir : A, AA, AAA). Les _WCAG_ n’ont pas de valeur normative : les "techniques WCAG2" sont indicatives. Elles ne tiennent pas compte des choix technologiques propres à chaque projet Web.

Le _RGAA_ définit une **méthode technique** et propose un cadre opérationnel de vérification de la conformité aux exigences d’accessibilité (obtenir 100%). Le _RGAA_ est orienté explicitement vers des sites dont la base technologique est (X)HTML, même s’il est applicable plus largement.

**Lire :**
  * <https://fr.wikipedia.org/wiki/Accessibilité_du_web>
  * <https://design.numerique.gouv.fr/accessibilite-numerique/rgaa/>
  * <https://forum.alsacreations.com/topic-6-41989-1-Rapport-entre-W3C-WCAG-RGAA-et-AccessiWeb.html>
  * <https://koena.net/app/uploads/2019/08/pyramide_wcag_2-1-964x1024.png>
  * <https://koena.net/rgaa-4-1-derive-administrative/>
  * <https://blog.ipedis.com/rgaa-savoir-referentiel-national>

**Ce qui faut retenir :**

Il existe beaucoup de documentations différentes concernant l’accessibilité. Les _WCAG_ sont des normes recommandations internationales, le _RGAA_ est une méthode qui s’appliquent aux sites français principalement. Le respect du _RGAA_ permet d’améliorer le niveau d’accessibilité d'un service numérique et d’être conforme à la loi si nécessaire.

## Tester l’accessibilité

### Référentiel

Un référentiel est une liste de critères à vérifier pour savoir si un site est conforme. Le _RGAA_ est en version 4. Les questions d‘accessibilité évoluent au cours du temps avec le web.

Pour le _RGAA_, on vérifie si un critère est : conforme (C), non conforme (NC), non applicable (NA).

**Lire :**

  * <https://www.numerique.gouv.fr/publications/rgaa-accessibilite/documentation-rgaa/methodologie-test/#contenu>
  * <https://bertrandkeller.github.io/conference-osxp-outil-accessibilite-open-source-etat/>

**Ce qui faut retenir :**

Un audit _RGAA_ comporte des points de tests majoritairement manuels (non automatisables). Il est possible de réaliser certains tests avec une connaissance faible en accessibilité. Suivre le _RGAA_ est un bon moyen de progresser sur le sujet.

Pour réaliser un audit complet (106 critères) seul un auditeur expérimenté peut garantir le résultat.

Le _RGAA_ est une méthode qui demande à chaque partie prenante de prendre en compte l’accessibilité : design, développement, assistance téléphonique, embauches… Chacun doit apporter sa participation.

### Ressources

Voici une liste de ressources qui montrent comment aborder l’accessibilité

**Lire :**

 * <https://www.marcozehe.de/the-web-accessibility-basics/>
 * <https://www.a11yproject.com/checklist/>
 * <https://moderncss.dev/modern-css-upgrades-to-improve-accessibility/>
 * <https://css-tricks.com/html-inputs-and-labels-a-love-story/>
 * <https://www.smashingmagazine.com/2021/06/complete-guide-accessibility-tooling/>
 * <https://a11y-tools.com/bookmarklets/>
 * <https://choblab.com/gestion-projets/produire-du-contenu-web-accessible-20-regles-faciles-a-appliquer-13389.html>
 * <https://www.accede-web.com/notices/>

### Exemples

**Télécharger :**

  * <https://github.com/DISIC/frago/blob/master/static/grille-criteres-rgaa.csv>
  * <https://chrome.google.com/webstore/detail/assistant-rgaa/cgpmofepeeiaaljkcclfldhaalfpcand?hl=fr>

**Ressources :**

  * <https://www.getstark.co/blog/accessible-contrast-ratios-and-a-levels-explained>
  * <https://html5accessibility.com/stuff/2022/01/10/alt-tag-emptiness/>

**Consulter :**

 * <https://www.htmhell.dev/>
 * <https://design.numerique.gouv.fr/demo/mauvais-exemple/>
 * <https://css-irl.info/dont-forget-the-lang-attribute/>
 * <http://useragentman.com/enable/carousel.php>
 * <https://www.youtube.com/playlist?list=PLTqm2yVMMUKWTr9XWdW5hJ9tk512Ow0SE>
 * <https://css-tricks.com/interaction-media-features-and-their-potential-for-incorrect-assumptions/>

## Conception centrée utilisateurs (UX design)

### Méthode

L’accessibilité est une compétence générale à une équipe chargée de développer un service numérique. Attention, rendre un site accessible est plus une question de posture que de compétence technique. Le plus dur est de dépasser la question de biais cognitifs personnels pour s’intéresser concrètement aux freins que rencontrent les personnes les plus en difficulté.

**Lire :**
  * <https://www.w3.org/WAI/test-evaluate/involving-users/fr>
  * <https://www.24joursdeweb.fr/2021/en-gestion-de-projet-on-ne-laisse-pas-laccessibilite-dans-un-coin/>
  * <https://bertrandkeller.info/2021/11/18/industrialisation-massive-numerique/>

### Design

L’accessibilité concerne souvent particulièrement la validée du code HTML ; les ressources design existent mais ne sont pas forcément fréquente. Pourtant, c’est bien en amont que les sujets d’accessibilité se décident. L’accessibilité doit être intégré au processus de design d’un service web. C'est une compétence qui se forge avec l’expérience.

**Lire :**

* <https://fr.slides.access42.net/uxrennes2017/> - <https://fr.slides.access42.net/uxrennes2017/slides/>
* <https://newflux.fr/2016/11/05/les-bonnes-pratiques-pour-concevoir-pour-laccessibilite/>
* <https://stephaniewalter.design/fr/blog/accessibilite-et-couleurs-outils-et-ressources-pour-concevoir-des-produits-accessible/>
* <https://apf-conseil.com/good-design-playbook/>
* <https://www.pierrelaine.fr/articles-ux-ui-design/design-inclusif-definition-principes.html>
* <https://design-accessible.fr/checklist>
