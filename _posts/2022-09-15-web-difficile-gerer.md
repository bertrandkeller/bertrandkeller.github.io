---
title: "Numrérique responsable, la charge du développeur Front"
categories:
  -  Accessibilité
---

Les manières de faire de l’informatique avancent très vites, nous voyons une explosion des conférences et compétences en **numérique responsable** ou en **GreenIT**, alors qu’il y a 2 ans c’était le grand vide.

Cette évolution est positive, mais il faut rester mesurer. On peut se demander en effet pourquoi on n’observe pas le même phénomène concernant l’accessibilité ? Le **numérique responsable** reste une activité très large qui touche aux matériels, à des pratiques d’entreprises et à la technique directement.

Concernant la technique où en sommes nous ? Je vous traduis cette article de Dave Rupert : [The web is a harsh manager](https://daverupert.com/2022/08/web-is-a-harsh-manager/).

## Les responsabilités du développeur Front ne cessent d’augmenter

### Ce qu’il doit savoir

  *  Connaître les 3 000 propriété-valeur CSS pour faire ressembler le site à la maquette de conception… et comprendre le langage et l’écosystème nécessaire pour interroger une base de données.
  *  Comprendre mille pages pour rendre votre site Web accessible, éviter tout péril juridique… et copie-coller une balise de script pour le marketing invasif.
  *  Configurer les métadonnées des cartes de réseaux sociaux et des résultats de recherche Google… et superviser la qualité et la sécurité des bibliothèques tiers.
  *  Animer les éléments de la page pendant qu’elle défile… créer des graphiques provenant des tableaux aux combinaisons infinies.
  *  Écrire des scripts asynchrones pour contrôler un dessin dynamique… Câbler des contrôles de formulaire interactifs et des messages d’erreur côté client.
  *  Créer un système de jetons et de composants spécifiques pour chaque utilisateur… Coder les mécanismes de cache de la page côté client.

Toutes ces activités pour une même personne !

Je parierais que cela mène conduit à l’épuisement professionnel en raison du changement de contexte permanent. Apprendre de nouvelles compétences est admirable, mais la liste interminable de sujets à apprendre vous mettent dans un état de stress. On sait que le "Full-stack" exacerbe cette situation.

### Une découpe métier ?

Il y a des années, Chris Coyier résumait cette lutte dans son article The [Great Divide](https://css-tricks.com/the-great-divide/) (la grande fracture). Brad Frost a tenté de décrire les deux côtés de la fracture comme “front of the front” (l’avant de l’avant") et “back of the front” (l’arrière de l’avant) : [front-of-the-front-end and back-of-the-front-end web development](https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/). Nous pourrions probablement encore diviser le front-end de plusieurs manières. Certains proposent des rôles de passerelle…

Natalya Shelburne a pensé à un rôle relais qu’elle nomme **"Design Engineering"** (Ingénierie de la conception). Une personne qui agit comme un pont entre la conception et l’ingénierie logicielle. Avec Adekunle Oduye, Kim Williams et Eddie Lou, elle a rédigé un manuel "Design Engineering" qui décrit tous les rôles et responsabilités d’un "Design Engineer" en disant qu’il **« implique la mise en place de flux de travail individuels et de structures organisationnelles qui facilitent la collaboration et la communication »**… à l’intersection de la conception et de l’ingénierie.

Alex Sexton a proposé un rôle **"Front-end Ops"** en tant que **« passerelle entre la définition du besoin d’une application et la réalité d’une application »** gérant : les "builds" et les déploiements, la surveillance des performances et des erreurs et la mise à jour des dépendances. Même à une échelle modeste, cela semble être assez de travail pour un emploi à temps plein. Ce sont toutes des opérations critiques qui sont négligées si elles ne sont pas prioritaires.

Et il y a d’autres rôles de passerelle que nous n’avons pas encore exploré. Personnellement, je vois aussi le besoin de nouvelles spécialisations. Je plaiderais pour un titre **"CSS Engineer"**, quelqu’un qui connaît les tenants et les aboutissants d’une bonne architecture CSS qui peut sauver votre application des milliers de lignes de code superflues. Mais ce titre n’aurait probablement pas de réalité industrielle, il faudrait donc qu’il soit plus officiel comme **"Render Optimization Engineer Level 6"** ou quelque chose comme ça. Ainsi, cela rapportera de l’argent à Amazon.

Je n’ai pas de réponses établies, seulement des questions car je me retrouve à parcourir l’éventail des différents emplois qu’une personne **"front-end"** peut faire. Il est difficile d’être un expert du **"front-end"**. Et je ne suis pas sûr d’aimer la conclusion : "Vous avez besoin de 12 personnes juste pour créer un site Web (sinon vous vous faites crier dessus sur Twitter)"… non plus. C’est franchement beaucoup d’argent et cela conduirait à moins de sites Web. Quel changement pourrions-nous apporter pour éliminer 80 % du travail ?

## Conclusion

Je partage le constat, pas forcément la conclusion.

Cela fait un moment que j’avais identifié le besoin pour des organismes, suffisamment conséquents, d’avoirs des sortes de "responsables architecture CSS". Une équipe intermédiaire qui n’est pas dans le développement, ni dans la conception graphique qui effectivement pourrait avoir à charge la gestion de l’homogénéité (côté Front) du système technique.

C’est exactement la manière dont ont évolué mes compétences au cours de ces 10 dernière années, mais avec une incapacité de ma part de formaliser cela pour la simple au raison que le rôle est de faire passerelle. Performance web, Accessibilité, Architecture CSS, Architecture de contenu, Conception, Scripts de déploiement, Numérique responsable, Gestionnaires de sites statiques… autant de compétences pour lesquelles je ne suis pas assez spécialiste pour être visible professionnellement.

Si on voulait essayer de déterminer le constat de cet article, je dirai qu’il traite de la **verticalité métier** à avoir dans le suivi du développement de services numériques. La **verticalité métier** consiste à avoir une idée de la complexité technique d’un système que ce soit au niveau stratégique (à l’organisme) qu’au niveau de la ligne de code.

Si on schématise, on observe souvent une gestion de la verticalité par silo avec d’un côté le directeur artistique (visuel) et de l’autre le directeur technique (le code). En tant qu’intégrateur, on sait qu’il faut faire rentrer tout cela, en bout de chaîne, dans le navigateur. Quand ça rentre le niveau d’accessibilité est bon, quand ça rentre pas le niveau d’accessibilité est mauvais. Or on observe un niveau d’accessibilité au niveau mondial qui est exécrable.

Il manque peut-être une **verticalité métier** interface, c’est peut-être ça le rôle d’un **référent accessibilité** ou **référent numérique responsable**.

Je pense, à l'inverse de Dave, qu’on devrait peut-être mettre en ligne moins de sites web et qu’un site web demande une bonne connaissance métier (web). Mon expérience sur ces 2 dernières années m’ont montré que pour faire monter en compétence les intervenants sur un projet informatique, la présence d’un spécialiste métier pour fluidifier les relations n’est pas de trop.

(Et pourtant, j’ai l'impression que c’est ce qu'on élimine en premier)
