---
layout: page
title: Développeur avec générateurs de site statique
navigation: false
image: "/assets/bertrandkeller.png"
type: article
category: Sites Statiques
---

Page sur mes articles à propos des générateurs de site statique.

Les générateurs de site statique sont un moyen simple et économique de mettre en ligne des pages web. Les générateurs de site statique sont simples. Ce sont des petits scripts qui permettent de mutualiser du code (Structure HTML des pages, Styles, Scripts divers…).

Ainsi, il est possible de séparer la forme (le code), du fond (les articles). Les articles sont stockés sous forme de fichiers texte (Il n'y a que des caractères de texte). Ils sont éditables directement avec un éditeur (tout simple disponible pour tous) ou bien à travers une interface adaptées (comme sur ce qu'on nomme CMS).

Le fond est donc modifiable par tout le monde (accessible), il est transportable (passer d'un site à un autre). Il demande un faible espace de stockage, il est résilient (durable). IL peut servir à présenter des informations importantes ou de la documentation (utile).

Les générateurs de site statique rendre pleinement dans une logique [Low-Tech](/low-tech-site-web-internet/) pour réaliser des sites web.

## En général
<ul class="posts-list">
  <li><a href="/2013/01/30/gestionnaires-de-fichiers-statiques-principe-et-fonctionnement/">Générateurs de sites statiques - principe et fonctionnement</a></li>
  <li><a href="/2013/02/18/gestionnaires-de-fichiers-statiques-pourquoi-les-utiliser/">Générateurs de sites statiques - pourquoi les utiliser</a></li>
  <li><a href="/2013/02/22/generateurs-de-sites-statiques-templating-rapide-avec-serve/">Générateurs de sites statiques - Templating rapide avec serve</a></li>
  <li><a href="/2013/03/29/generateurs-de-sites-statiques-la-gestion-de-circuits-courts/">Générateurs de sites statiques - la gestion de circuits courts</a></li>
  <li><a href="/2013/04/25/generateurs-de-sites-statiques-la-dynamique-de-projet-web/">Générateurs de sites statiques – la dynamique de projet web</a></li>
  <li><a href="/2013/10/31/pourquoi-un-cms-les-notes-de-luke-wroblewski/">Pourquoi un CMS, les notes de Luke Wroblewski</a></li>
  <li><a href="/2013/12/06/le-piege-des-cms-la-dependance/">Le piège des CMS - La dépendance</a></li>
  <li><a href="/2014/03/04/la-metastabilite/">La métastabilité</a></li>
  <li><a href="/2017/10/23/pourquoi-markdown-place-wysiwyg/">Pourquoi passer au Markdown et se passer d'un WYSIWYG ?</a></li>
  <li><a href="/2017/10/25/markdown-et-autodocumentation/">Markdown et auto-documentation</a></li>
  <li><a href="/2017/11/27/les-utilisateurs-ne-peuvent-pas-editer-le-markdown/">Mes utilisateurs ne peuvent pas éditer de Markdown !</a></li>
    {% for post in site.categories[page.category] reversed %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

## En particulier

<ul class="posts-list">
  <li><a href="/2016/04/29/communaute-jekyll/">La communauté Jekyll</a></li>
  <li><a href="/2017/07/03/jekyll-hugo-sont-bateau/">Jekyll et Hugo sont dans un bateau</a></li>
  <li><a href="/2017/07/26/jekyll-theme-artisan/)">Jekyll - Un thème pour artisans</a></li>
</ul>

## Conférences

<ul class="posts-list">
  <li><a href="https://bertrandkeller.github.io/Agile-pour-petits-projets/">Agile pour petits projets - Kiwi Party</a></li>
  <li><a href="/2016/10/04/ne-passons-pas-cote-choses-simples/">Ne passons pas à côté des choses simples Paris Web 2016</a></li>
  <li><a href="/2017/06/25/conference-paris-web-2017/">Atelier sur les GSS à Paris Web 2017</a></li>
  <li><a href="https://bertrandkeller.github.io/conference-decliner-des-sites-statiques-performants/">Décliner des sites statiques performants avec un GSS (Jekyll, Hugo…) à Paris Web 2018</a></li>
</ul>
