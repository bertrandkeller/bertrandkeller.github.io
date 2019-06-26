---
layout: default
title: Pensées d’un écrivain numérique sur les sites statiques et la Low Tech
image: "/assets/bertrandkeller.png"
type: website
---

<div class="wrapper">
  {% assign post = site.posts.first %}
  <section class="post">
    <h1><a href="{{ post.url }}" class="text-bg-fx">{{ post.title }}</a></h1>
    <p class="post-meta">{% include date.html date=post.date %}</p>
    {% if post.description %}
      <p><strong>{{ post.description }}</strong></p>
    {% endif %}
    {% if post.image %}
    {% if site.environment != 'development' %}
    {% cloudinary {{post.image}} alt="{{post.title}}" %}
    {% else %}
    <img src="{{ post.image }}" alt="{{ post.title }}">
    {% endif %}
    {% endif %}
    {{ post.content | markdownify }}
  </section>

  <div class="pagination--prevnext" role="navigation">
    {% if post.previous %}
    <div class="pagination--prev">
      <a class="pagination--item" href="{{ post.previous.url }}">
        {{ post.previous.title }}
      </a>
    </div>
    {% endif %}
    {% if post.title == 'Transmutation' %}
    <div class="pagination--prev">
      <a class="pagination--item" href="/2015/10/03/parisweb-cest-quoi-les-metiers-du-web">
        ParisWeb - c'est quoi les métiers du web ?
      </a>
    </div>
    {% endif %}
    {% if post.next %}
    <div class="pagination--next">
      <a class="pagination--item" href="{{ post.next.url }}">
        {{ post.next.title }}
      </a>
    </div>
    {% endif %}
  </div>
  <section class="posts">
    <h2>Derniers articles</h2>
    <ul class="posts-list">
    {% for post in site.posts offset:1 limit:5 %}
      <li><a href="{{ post.url }}">{{ post.title }}</a>{% if post.categories %} <span class="categorie">{{ post.categories | array_to_sentence_string: '/'}}</span>{% endif %}</li>
    {% endfor %}
    </ul><!--/posts-archive-last-->
  </section>
</div>

