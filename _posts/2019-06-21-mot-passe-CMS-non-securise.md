---
title: Les CMS les plus populaires ne sont pas assez sécurisés
categories:
- Sécurité
---

J’ai déjà écrit sur le sujet. Les systèmes comportant des interfaces de connexions utilisateurs présentent des portes d’entrés soumises à d’éventuelles failles de sécurités.

> Un groupe de chercheurs a découvert que bon nombre des systèmes de gestion de contenu les plus populaires du Web utilisent des algorithmes non sécurisés pour protéger les mots de passe de leurs utilisateurs.

Cette étude semble assez sérieuse mais révèle un problème assez basique qui concerne la mode d’encryptage des mots de passe utilisateurs. La plupart des CMS utiliseraient encore MD5 ou SHA-1, des systèmes d’encryptage considérés comme obsolètes (on peut les casser).

En gros ça veut dire que même si votre mot de passe est encrypté avec MD5 ou SHA-1, une personne peut découvrir votre mot de passe en clair. L’objectif étant (une fois découvert) de tester ce mot de passe sur d’autres services afin de pirater vos comptes.

Donc si vous utilisez un mot de passe identique sur 2 services différents, même si le premier est sécurisé, le second peut servir à se connecter au premier.

Cela concernerait donc :

 * osCommerce
 * SuiteCRM
 * WordPress
 * X3cms
 * SugarCRM
 * CMS Made simple
 * MantisBT
 * Simple Machines
 * miniBB
 * Phorum
 * MyBB
 * Observium
 * Composr

Voilà donc une bonne raison de ne pas exposer vos utilisateurs à ce genre de mésaventure et vous dirigez vers des générateurs de site statique, si cela est possible.

Donc le cadre d’éco-conception ou de réflexion Low-Tech. Ne pas avoir de formulaire de connexion permet aussi de ne pas recevoir d’attaques permanentes sur votre serveur et donc de diminuer l'empreinte énergétique de votre site.

Tout cela va dans le même sens.

Lire [Pass the salt! Popular CMSs aren’t securing passwords properly](https://nakedsecurity.sophos.com/2019/06/19/popular-content-platforms-putting-passwords-at-risk/).

