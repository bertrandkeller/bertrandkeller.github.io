---
title: Passer au statique en utilisant Next.JS et GraphQL
description: "Retour d'expérience sur l'utilisation de Next.JS et GraphCMS pour la génération d’un site statique."
image: /assets/schema-static-graphql.png
---

Dans l'article [The Emerging GraphQL and Serverless Stack for Building Static Web Sites](https://thenewstack.io/emerging-graphql-serverless-stack-building-static-web-sites/), Hugo Meissner remarque que la capacité de préchargement (prefetch) est un besoin important pour les sites à grand trafic. Il s'agit de précharger d'autres pages que celle appelée par l'utilisateur, de sorte que les futures pages du site soient délivrées instantanément.

C'est ce besoin qui incite des structures à abandonner des bons vieux sites avec base de données (type Wordpress) pour passer à des architectures statiques. ainsi Hugo Meissner ajoute :

> Le temps de chargement est vraiment important (l'idéal, c'est le chargement instantané) mais le poids des ressources et la compression des photos ne sont pas faciles à faire avec plus de 60 000 articles ; l'automatisation est donc un problème en soi. À l'heure actuelle, nous sommes liés à WordPress, qui est lié à son langage de templating et nous voulions passer à une stack moderne. WordPress nous coûte, et nous devons encore prendre en compte les montées en charge du site Web et la gestion de la base de données SQL. Avec notre nouveau modèle d'architecture, nous l'exportons en tant que site statique et nous aurons juste un point de terminaison API, c'est la seule chose qui va évoluer.

Les avantages des architectures statiques ne concernent pas que les gros sites. C'est aussi un souci en moins pour la maintenance d'un système avec base de données et une solution aux problématiques de montée en charge.
