---
layout: default
title: Pensées d'un écrivain numérique de sites web à Rouen
--- 

<div class="exergue">
  Vous pouvez me payer en Agnel
  <small>La monnaie locale de Rouen</small>
  <a href="/conseil-prestation-formation">Voir la page offre</a>
</div>

<div class="wrapper"> 
  {% assign post = site.posts.first %}
  <section class="post">
    <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
    <p class="post-meta">{{ post.date | date: "%d/%m/%Y" }}</p>
    {{ post.content | markdownify }}
  </section>

  <div class="pagination" role="navigation">
    {% if post.previous %}
    <div class="left">
      <a class="pagination-item" href="{{ post.previous.url }}">
        {{ post.previous.title }}
      </a>
    </div>
    {% endif %}

    {% if post.title == 'Transmutation' %} 
    <div class="left">
      <a class="pagination-item" href="/2015/10/03/parisweb-cest-quoi-les-metiers-du-web">
        ParisWeb - c'est quoi les métiers du web ?
      </a>
    </div>
    {% endif %}

    {% if post.next %}
    <div class="right">
      <a class="pagination-item" href="{{ post.next.url }}">
        {{ post.next.title }}
      </a>
    </div>
    {% endif %}
  </div>
</div>
