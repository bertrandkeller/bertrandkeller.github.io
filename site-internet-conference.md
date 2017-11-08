---
layout: default
title: Portfolio
description: Intégrateur générateur de site internet statique et déclinaison HTML/CSS à Rouen
navigation: true
image: "/assets/bertrandkeller.png"
type: article
permalink: /site-internet-conference-rouen/
---

<style type="text/css">
    {% capture include_to_scssify %}
      {% include onepage.scss %}
    {% endcapture %}
    {{ include_to_scssify | scssify }}
</style>

<section class="panel panel-first bg-black">
  <a href="/" class="nav-back">Accueil</a>
  <h1>bertrandkeller<br><small>Sites Web à Rouen</small></h1>
  <p>bertrand.keller(@)gmail.com</p>
  <p class="anchor"><a href="#id-portfolio">Références</a></p>
  <p class="anchor"><a href="#id-presentation">Conférences</a></p>
  <p class="anchor arrow"><a href="#id-portfolio">
    Accéder aux panneaux<br>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
    <g id="ARROW__x2F__DOWN_1_" enable-background="new    ">
        <g id="ARROW__x2F__DOWN">
            <g>
                <path d="M53,23c0-1.657-1.343-3-3-3c-0.809,0-1.542,0.321-2.082,0.841l-0.001-0.001L31.993,36.764L16.275,21.046
                    C15.725,20.406,14.91,20,14,20c-1.657,0-3,1.343-3,3c0,0.805,0.318,1.536,0.835,2.075l-0.008,0.008l18,18l0.001-0.001
                    C30.374,43.648,31.139,44,31.987,44c0.002,0,0.004,0,0.007,0c0.002,0,0.004,0,0.007,0c0.849,0,1.612-0.352,2.159-0.918
                    l0.001,0.001l18-18l-0.001-0.001C52.68,24.543,53,23.809,53,23z"/>
            </g>
        </g>
    </g>
    </svg></a></p>
</section>

<section id="id-portfolio" class="panel bg-black">
  <h2><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
        <g id="VOLUME_2_1_" enable-background="new    ">
            <g id="VOLUME_2">
                <g>
                    <path d="M50.701,10.128l-2.848,2.848C52.292,18.07,55,24.712,55,32s-2.708,13.93-7.146,19.023l2.848,2.849
                        C55.861,48.049,59,40.393,59,32C59,23.607,55.861,15.951,50.701,10.128z M31,15c-0.721,0-1.374,0.265-1.891,0.689L29.1,15.678
                        l-10.162,8.315H8.992v0.008C7.339,24.006,6,25.346,6,27v10c0,1.657,1.343,3,3,3h10.024l10.211,7.426l0.005-0.007
                        C29.736,47.781,30.34,48,31,48c1.657,0,3-1.343,3-3V18C34,16.343,32.657,15,31,15z M42.902,17.926l-2.846,2.847
                        C42.52,23.852,44,27.75,44,32s-1.48,8.148-3.943,11.227l2.846,2.848C46.083,42.26,48,37.355,48,32
                        C48,26.645,46.083,21.74,42.902,17.926z"/>
                </g>
            </g>
        </g>
        </svg>
        Références</h2>
  <p>Exemples de sites réalisés sous Drupal, TYPO3, WordPress ou Symfony. J'y ai toujours codé l'interface et souvent dirigé la coordination des différents métiers.</p>
  <br>
  <div class="gallery">
    {% for project in site.data.projects %}
      <div class="gallery-module">
        <h3><a href="{{ project.url }}">{{ project.name }} - {{ project.techno }}</a></h3>
        <a class="venobox" href="{{ site.baseurl }}/assets/{{ project.image }}">
        {% if site.environment != 'development' %}
        {% cloudinary /assets/{{ project.image }} alt="{{ project.name }}" %}
        {% else %}
        <img src="/assets/{{ project.image }}" alt="{{ project.name }}">
        {% endif %}
        </a>
      </div>
    {% endfor %}
  </div>
</section>

<section id="id-presentation" class="panel">
  <h2>
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
    <g id="POLAROID_1_" enable-background="new    ">
        <g id="POLAROID">
            <g>
                <path d="M53,6H11C9.343,6,8,7.343,8,9v46c0,1.657,1.343,3,3,3h42c1.657,0,3-1.343,3-3V9C56,7.343,54.657,6,53,6z M50,43H14V12h36
                    V43z"/>
            </g>
        </g>
    </g>
    </svg>
    Présentations</h2>
  <p>Présentations que j'ai pu donner lors de conférences francophones aux 4 coins de France.</p>
  <br>
  <div class="gallery">
    {% for project in site.data.talks %}
      <div class="gallery-module">
        <h3>{{ project.name }}</h3>
        <p>{% if project.url %}<a href="{{ project.url }}">Slides</a>{% endif %}{% if project.video %} <a href="{{ project.video }}">Vidéo</a>{% endif %}</p>
        <a class="venobox" href="{{ project.url }}">
        {% if site.environment != 'development' %}
        {% cloudinary /assets/{{ project.image }} alt="{{ project.name }}" %}
        {% else %}
        <img src="/assets/{{ project.image }}" alt="{{ project.name }}">
        {% endif %}
        </a>
      </div>
    {% endfor %}
  </div>
</section>

<script>
  /*
 * - autoSmoothScroll -
 * Licence MIT
 * Written by Gabriel Delépine
 * Current version  1.3.1 (2014-10-22)
 * Previous version 1.3.0 (2014-07-23)
 * Previous version 1.2.0 (2014-02-13)
 * Previous version 1.0.1 (2013-11-08)
 * Previous version 1.0.0 (2013-10-27)
 * Requirement : No one, it is a framework-free fonction (ie : You do not need to include any other file in your page such as jQuery)
 * Fork-me in github :
 * */
(function(window, undefined) // Code in a function to create an isolate scope
{
    'use strict';
    var height_fixed_header = 0, // For layout with header with position:fixed. Write here the height of your header for your anchor don't be hiden behind
        speed = 500,
        moving_frequency = 15, // Affects performance ! High number makes scroll more smooth
        links = document.getElementsByTagName('a'),
        href;

    for(var i=0; i<links.length; i++)
    {
        href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
        if(href !== null && href.length > 1 && href.indexOf('#') != -1) // href.substr(0, 1) == '#'
        {
            links[i].onclick = function()
            {
                var element,
                    href = this.attributes.href.nodeValue.toString(),
                    url = href.substr(0, href.indexOf('#')),
                    id = href.substr(href.indexOf('#')+1);
                if(element = document.getElementById(id))
                {

                    var hop_count = (speed - (speed % moving_frequency)) / moving_frequency, // Always make an integer
                        getScrollTopDocumentAtBegin = getScrollTopDocument(),
                        gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

                    if(window.history && typeof window.history.pushState == 'function')
                        window.history.pushState({}, undefined, url+'#'+id);// Change URL for modern browser

                    for(var i = 1; i <= hop_count; i++)
                    {
                        (function()
                        {
                            var hop_top_position = gap*i;
                            setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*i);
                        })();
                    }

                    return false;
                }
            };
        }
    }

    var getScrollTopElement =  function(e)
    {
        var top = height_fixed_header * -1;

        while (e.offsetParent != undefined && e.offsetParent != null)
        {
            top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
            e = e.offsetParent;
        }

        return top;
    };

    var getScrollTopDocument = function()
    {
        return window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop !== undefined ? document.documentElement.scrollTop : document.body.scrollTop;
    };
})(window);

</script>
