---
title: Déploiement de votre premier site web statique sur IPFS
categories:
- Sites Statiques
---

Traduction de l’article [The Complete Beginner’s Guide to Deploying Your First Static Website to IPFS](https://medium.com/interplanetary-gatsby/the-complete-beginners-guide-to-deploying-your-first-static-website-to-ipfs-103b27e8822e).

Pour cet article ? Parce que le web est centralisé à travers de grandes plateformes ; que cette centralisation permet de contrôler les flux, des contrôler les gens et de les taxer. Le web consiste à permettre le libre échange citoyen.

Vous n'avez besoin de rien savoir sur IPFS ou sur le « web distribué », pas même les générateurs de sites statiques. La première étape consiste à ouvrir votre terminal et à taper ceci dans:

```bash
mkdir -p dwebsite/public
cd dwebsite
echo '<h1>Hello, worlds!</h1>' >> public/index.html

yarn global add @agentofuser/ipfs-deploy
ipd
```

Maintenant, asseyez-vous et observez les logs.

```bash
ℹ 🤔 No path argument specified. Looking for common ones... 
✔ 📂 Found local public directory. Deploying that. 
✔ 🚚 public weighs 24 B. 
✔ 📌 It’s pinned to Infura now with hash: 
ℹ 🔗 QmQzKWGdjjQeTXrruYL2vLkCqRP8TyXnG1a9QEJjDM8WTY 
✔ 📋 Copied HTTP gateway URL to clipboard: 
ℹ 🔗 https://ipfs.infura.io/ipfs/QmQzKWGdjjQeTXrruYL2vLkCqRP8TyXnG1a9QEJjDM8WTY 
✔ 🏄 Opened web browser (call with -O to disable.)
```

Et voilà. Votre propre l33t [#dwebsite](https://twitter.com/search?q=%23dweb) (The Decentralized Web) en ligne sur le réseau [Merkleverse](https://cloudflare-ipfs.com/ipfs/QmQzKWGdjjQeTXrruYL2vLkCqRP8TyXnG1a9QEJjDM8WTY).


## Qu'est-ce qui vient de se passer?

Pas évident à comprendre en une fois. Revenons un peu en arrière et regardons-le au ralenti, avec quelques commentaires :

### 1. Où ça se passe ?

À vrai dire, j’aurais pu appeler `ipd ./public`, en passant le répertoire à déployer (public) explicitement.

Mais alors, vous ne verriez pas l’emoji 🤔 comme une sonde ipfs-deploy pour l’une des nombreuses destinations, souvent non documentées, de [construction habituellement utilisées par les générateurs de sites statiques](https://github.com/agentofuser/ipfs-deploy/blob/8023d82b5df68076ca79bc684f45ea64e5e67c06/index.js#L75).


```bash
ℹ 🤔 No path argument specified. Looking for common ones... 
✔ 📂 Found local public directory. Deploying that.
```

Oui, j'ai en fait passé au peigne fin le site [staticgen.com](https://staticgen.com), installé plusieurs de ces générateurs de sites statiques et créé de petits sites de test afin de pouvoir appliquer ce titre "zéro configuration".

C'est ce que recherche *ipfs-deploy* vous éviter de le taper :

```bash
const guesses = [
  '_site',         // jekyll, hakyll, eleventy
  'site',          // forgot which
  'public',        // gatsby, hugo
  'dist',          // nuxt
  'output',        // pelican
  'out',           // hexo
  'build',         // metalsmith, middleman
  'website/build', // docusaurus
  'docs',          // many others
]
```

Comme vous pouvez le voir avec le nom de cette publication, je suis un fan de Gatsby, mais *ipfs-deploy* sert tous ceux qui en ont besoin. Apportez votre propre SSG (Générateur de site statique), nous lâcherons un jetpack interplanétaire sur notre dos et le ferons voler. 🚀

### 2. Le téléchargement

C’est la raison pour laquelle nous sommes ici, c’est-à-dire placer le site web dans l’espace (au figuré, pour le moment). Donc, quelques secondes plus tard, *ipfs-deploy* fournit:

```bash
✔ 📌 It’s pinned to Infura now with hash:
ℹ 🔗 QmQzKWGdjjQeTXrruYL2vLkCqRP8TyXnG1a9QEJjDM8WTY
```

Victoire !

Cette petite génération/diffusion d’un [hash](https://multiformats.io/multihash/) est le nœud de tout le judo #dweb (The Decentralized Web). La formule magique qui appelle votre site Web depuis les profondeurs caverneuses des donjons connectés, sans se soucier de savoir où il se trouve, mais seulement de savoir de quoi il retourne.

**Un adressage intrinsèque, non lié par la localisation ou la route.**

Bienvenue <attitude grave> dans le futur distribué.

## Attendez une minute, je pensais vous avoir entendu dire “distribué”

Oh, lecteur perspicace.

Vous avez raison : si IPFS est censé être un protocole poste à poste (pair à pair), pourquoi télécharge-t-on tout de même l’ensemble du site, n'est-ce pas ? Pour un serveur !?

Ne devrions-nous pas simplement annoncer au réseau que nous avons le hachage et ensuite attendre de le servir nous-mêmes à d'autres pairs à la demande ?

Oui, vous pouvez faire ça. Ensuite, vous fermez votre ordinateur portable, le wifi diminue, 💩 arrive, et pouf ✨, votre site web disparaît.

Cela ressemble aux torrents : il faut au moins un semeur (personne qui possède une copie complète du fichier partagé sur le réseau torrent.) pour que le contenu soit accessible. Si votre site web compte des tonnes de personnes qui exécutent leur propre nœud IPFS et le ré-servent à d’autres, votre temps de disponibilité sera en moyenne assez élevé.

Mais il n’y a pas encore beaucoup de visiteurs de ce type (espérons-le, [Brave](https://brave.com/) réglera ce problème pour nous) et, en plus, c’est un tout nouveau site web !

Ce serait une autre histoire si les navigateurs avaient un [#asyncUX](https://twitter.com/search?q=%23asyncUX) décent et que les visiteurs pouvaient facilement leur dire de mettre le téléchargement en file d’attente lorsqu’un homologue est disponible, puis de l'avertir lorsqu’il était prêt (comme un flux continu « à lire plus tard »).

Mais dans l’état actuel des choses, s’il n’y a personne pour servir votre contenu au moment où une demande est faite, la situation est en suspend. Vous n’êtes donc pas [prêt pour l'espace](https://interplanetarygatsby.com/foreword/).

Nous avons donc besoin d’un semoir à haute disponibilité de notre côté. Ou, dans le jargon IPFS, un « pinner » (éplinglage garantissant que les objets sont conservés dans le stockage local du noeud).

## Zero-Config Pinning avec Infura.io

L’objectif principal de *ipfs-deploy* est de vous permettre de vivre une première expérience heureuse consistant à voir quelque chose que vous avez créé sur IPFS le plus rapidement possible.

Une façon de le faire consiste à exécuter un démon IPFS local et rendre disponible le contenu vous-même.

Mais comme nous l’avons vu plus haut, ce serait un peu ridicule car cela ne représente pas ce à quoi un déploiement réel que vous pouvez partager avec vos amis pourrait ressembler. Je dois avoir un pinner stable.

Bien épingler avec un temps de disponibilité décent coûte de l’argent, alors la plupart des services d’épinglage exigent naturellement que vous vous inscriviez au moins à un niveau gratuit avant d’accepter d’héberger votre site web.

Pas [Infura.io](https://infura.io/docs/ipfs/get/block_get.md) !

Par magie de la limitation prudente des taux, de la prévention intelligente des abus, du capital de croissance ou de l’abandon téméraire, ils vous permettent de télécharger des éléments à l’abri, [sans authentification](https://community.infura.io/t/how-often-do-you-garbage-collect-files-on-your-ipfs-node-and-how-long-will-a-file-persist-after-upload/44/2), et ils vous le serviront indéfiniment. (Même contre votre volonté semble-t-il, car il n'y a pas de moyen clair de détacher les choses pour le moment.)

Nous devons donc cette possibilité à leur simple générosité : merci à Infura, et continuez comme ça !

De plus, si vous possédez vous-même un service d'épinglage et que vous souhaitez faire partie du paquet de bienvenue de zéro-configuration, envisagez d'ajouter un niveau « encore plus libre » qui ne nécessite pas d'inscription.

Les sites web statiques nouvellement créés ne prennent pas beaucoup de place, ont très peu de trafic et constituent une excellente passerelle pour une consommation accrue d’IPFS.

Vous n’avez pas seulement déployé votre premier site web IPFS, mais vous pouvez maintenant vous vanter de bien comprendre son fonctionnement en agitant les mains et en disant « Oh, c’est un peu comme git + bittorrent »

Alors, [dites-moi ce qui ne va pas](https://github.com/agentofuser/ipfs-deploy/issues/new) et je vais régler le problème pour vous.
