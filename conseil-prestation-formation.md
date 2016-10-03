---
layout: default
title: L'offre
navigation: true
---

<style>

  body {
    margin: 0;
    padding: 0;
  }

  .page {
    padding: 0;
  }

  .site-header {
    display: none;
    min-height: 14vh;
  }

  .wrapper {
    margin: 0;
    padding: 0;
    max-width: 200rem !important;
  }

  .nav-back {
    position: absolute;
    top: 0.5em;
    left: 0.5em;
    padding: 0 0.2em;
    font-size: 2em;
    font-weight: bold;
    text-decoration: none;
    color: #000 !important;
    background: white;

  }

  .panel {
    padding: 1em 2vw 3em;
  }

  .panel-first {
    min-height: 100vh;
    text-align: center;
  }

  .panel-first h1 {
    font-size: 10vw;
    margin-top: 15vh;
    margin-bottom: 10vh;
  }

  .panel-first h2 {
    margin: 0 0 0.5rem;
    font-size: 5vw;
  }

  .bg-black {
    color: #fff;
    background: #000;

  }

  .bg-black a {
      color: #fff;
  }

  .gallery {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .gallery-module {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    flex-direction: column;
    flex: 0 0 48%;
    margin-bottom: 1rem;
  }

  .gallery-module h3 {
    order: 3;
    font-size: 1.225rem;
  }

  .gallery-module > a {
    margin: 0 auto;
    display: block;
    width: 100%;
    text-align: center;
  }

  .gallery img {
    margin: 0 auto;
    width: 100%;
    max-height: 370px;
    object-fit: cover;
    border: 1px solid #ccc;
  }

  @media screen and (min-width: 60.063em) {
    .panel-first h1 {
      font-size: 6.5vw
    }
    .panel-first h2 {
      font-size: 2.5vw;
    }
    .gallery-module {
      flex: 0 0 22%;
    }
    .gallery img {
      max-height: 185px;
    }
  }

</style>

<section class="panel panel-first bg-black">
  <a href="/" class="nav-back">Accueil</a>
  <h1>bertrandkeller<br><small>From Rouen</small></h1>
  <h2><a href="#id-conseil">Conseil Stratégique</a></h2>
  <h2><a href="#id-integration">Intégration web</a></h2>
  <h2><a href="#id-jekyll">Formation Jekyll</a></h2>
  <p>-</p>
  <h2><a href="#id-benevolat">Bénévolat</a></h2>
  <h2><a href="#id-presentation">Présentations</a></h2>
  <h2><a href="#id-portfolio">Portfolio</a></h2>
</section>

<section id="id-conseil" class="panel">
    <div class="gallery-module">
        <h2>Conseil Stratégique</h2>
        <p>Ma formation d'ingénieur à l‘Université de Technologie de Compiègne et une large expérience de plus de 10 années m'ont permis de développer de sérieuses compétences en assistance de réalisation de sites web.</p>
        <p>Le web est devenu l‘outil de travail d'une entreprise et de ses équipes. L‘enjeu du web n'est pas tant de mettre en ligne des interfaces mais surtout de mettre en place des méthodes de travail en développant une culture numérique innovante.</p>
        <p>L‘intérêt de faire appel à mes services est que je suis au quotidien les innovations des domaines du web et que je peux mettre en place une stratégie à long terme pour optimiser l‘utilisation de différentes ressources.</p>
    </div>
</section>

<section id="id-integration" class="panel bg-black">
  <div class="gallery-module">
        <h2>Intégration web</h2>
        <p>L‘intégration web est mon cœur de métier. Il est indispensable pour moi de la pratiquer afin d'avoir une vision claire des évolutions et tendances en cours.</p>
        <p>Je manipule les dernières méthodologies HTML et CSS pour avoir un site le plus lisible et le plus rapide à charger possible.</p>
        <p>Plus que simplement décliner des pages, l‘objectif est de péreniser une charte graphique afin de garantir un coût de maintenance raisonnable.</p>
        <p>C‘est pour ça que j'interviens auprès d'équipes de développement afin de les aider à améliorer leur manière d'entrevoir le code.</p>
  </div>
</section>

<section id="id-jekyll" class="panel">
  <div class="gallery-module">
      <h2>Formation Jekyll</h2>
      <p>Depuis 3 années, j‘enseigne Jekyll dans différentes structures et notamment à des élèves de licence à l'IUT d'Elbeuf près de Rouen.</p>
      <p>Jekyll, et les générateurs de contenu statique, sont en train de devenir des plateformes de documentation pour la réalisation et le suivi de projets.</p>
      <p>A très peu de frais, ils permettent d'éditer sous forme de fichiers textes aussi bien du contenu que des données qui peuvent être publiés sous différents formats : HTML, PDF…</p>
      <p>Apprendre Jekyll, c‘est devenir autonome, avoir une souplesse pour éditer des données sur le web ou tout autre support de communication.</p>
      <p><strong>=> Voir la page d‘offre de <a href="/formation-jekyll">formations à Jekyll</a>.</strong></p>
  </div>
</section>

<section id="id-benevolat" class="panel bg-black">
    <div class="gallery-module">
        <h2>Actions bénévoles</h2>
        <p>Agir fait partie de mon quotidien. Je participe tout d'abord à l'organisation de 2 conférences web importantes au niveau national : <a href="http://codeursenseine.com">http://codeursenseine.com</a> et <a href="http://sudweb.fr">Sud-Web</a>. Cette action permet de rester au plus près des problématiques technologiques, mais aussi de préserver les valeurs de partage propres au web.</p>
        <p>Je m'implique dans des projets citoyens comme <a href="http://hopdurable.fr">Hop!Durable</a> qui promeut une culture de l’aménagement durable par des lieux de référence à pédagogie active.</p>
        <p>En plus de cela, je pratique des activités manuelles de manière régulière que ce soit par de la réparation de vélo à l'association <a href="http://www.guidoline.com/">Guidoline</a> ou avec la réfection de fauteuils avec l'association <a href="activitesaintnicaise.org">Activités Saint Nicaise.</a></p>
    </div>
</section>
<!-- <section class="panel">
    <div class="gallery-module">
        <h2>Au quotidien</h2>
        <p>Je travaille sur l'amélioration des méthodes de réalisation d'interfaces web (UX design). Depuis 2005, les occasions se sont multipliées pour maîtriser les multiples paramètres qui permettent de mettre en ligne un site de qualité : méthodes Agiles, accessibilité, Responsive Web Design, performance web,…</p>
        <p>Organiser le chaos, maîtriser la complexité, valoriser la marginalité. J'élabore ces stratégies innovantes de conception de projets web. Expert en développement d'interfaces, je suis les préceptes du management par la joie.</p>
        <p>Aujourd'hui, je pratique ce métier en freelance afin de m'investir dans une relation client plus honnête et plus franche : s'engager ensemble dans une réussite partagée. Magnifier la valeur et optimiser l'effort.</p>
        <p>Vous pouvez me contacter
            <br />par mail en remplaçant par les valeurs adéquates <strong>monprenom.monnom@gmail.com</strong>
            <br />ou sur twitter sur <a href="http://twitter.com/bertrandkeller">twitter.com/bertrandkeller</a>.
        </p>
    </div>
</section> -->
<!-- <section class="panel bg-black">
    <div class="gallery-module">
        <h2>Profil et offres</h2>
        <p>Voir le profil LinkedIn de <a href="http://www.linkedin.com/in/bertrandkeller">bertrandkeller</a></p>
        <p>Je propose des prestations de définition du besoin, d'audit qualité et d'assistance à maîtrise d'ouvrage mais aussi de la déclinaisons CSS, de l'optimisation de performance et mise en place de processus de conformité accessibilité RGAA.</p>
        <p>Je réalise de petits sites avec hébergement gratuit avec Jekyll et Wordpress.</p>
        <p>Je travaille en collaboration avec <a href="http://apollonet.fr/">Apollonet</a> pour le développement Drupal, <a href="http://ziopod.com/">Ziopod</a> pour du développement applicatif et <a href="http://piapandelakis.com/">Pia Pandelakis</a> pour le graphisme.</p>
    </div>
</section> -->
<section id="id-presentation" class="panel">
  <h2>Présentations</h2>
  <p>Présentations que j'ai pu donner lors de conférences francophones au 4 coins de France.</p>
  <br>
  <div class="gallery">
    <div class="gallery-module">
        <h3><a href="http://frank.taillandier.me/presentations/ne-passons-pas-a-cote-des-choses-simples/">Ne passons pas à côté des choses simples - Présentation 2016 - Paris Web</a></h3>
        <a href="https://http://frank.taillandier.me/presentations/ne-passons-pas-a-cote-des-choses-simples/"><img src="/assets/bertrandkeller-simple.png" alt="Ne passons pas à côté des choses simples - Présentation 2016 - Paris Web" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="https://bertrandkeller.github.io/Agile-pour-petits-projets/">Agile pour petits projets - Présentation 2016 - Kiwi Party</a></h3>
        <a href="https://bertrandkeller.github.io/Agile-pour-petits-projets/"><img src="/assets/presentation-agile-pour-petits-projets.png" alt="Agile pour petits projets avec Jekyll" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://bertrandkeller.github.io/collaboration-pour-meilleur-business/">Réunions collaboratives pour un meilleur business plan - Présentation 2015 - NWX Summer festival</a></h3>
        <a href="http://bertrandkeller.github.io/collaboration-pour-meilleur-business/"><img src="/assets/collaboration-pour-meilleur-business.png" alt="Réunions collaboratives pour un meilleur business plan" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://bertrandkeller.github.io/pas-de-vue-pas-de-prix/">Pas de vue — pas de prix - Présentation Sud-Web 2015</a></h3>
        <a href="http://bertrandkeller.github.io/pas-de-vue-pas-de-prix/"><img src="/assets/presentation-pas-de-vue-pas-de-prix.png" alt="Conférence pas de vue — pas de prix pour sudweb 2015" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://bertrandkeller.github.io/choisir-sa-grille-css/">Choisir sa grille CSS - Présentation - NWX design 2015</a></h3>
        <a href="http://bertrandkeller.github.io/choisir-sa-grille-css/"><img src="/assets/presentation-choisir-sa-grille-css.png" alt="conférence choisir sa grille CSS pour NWX design" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://bertrandkeller.github.io/hacker-lespace/">Hacker l'espace - Présentation - Rencontres intéractives de Cæn 2014</a></h3>
        <a href="http://bertrandkeller.github.io/hacker-lespace/"><img src="/assets/hackdesk-presentation.jpg" alt="hackdesk presentation" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://bertrandkeller.github.io/conference-moteurs-templating/">Les moteurs de templates - Présentation - NWX Tech 2014</a>
        </h3>
        <a href="http://bertrandkeller.github.io/conference-moteurs-templating/"><img src="{{ site.baseurl }}/assets/les-moteurs-de-template.png" alt="bertrandkeller les moteurs de templates" width="750" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://bertrandkeller.github.io/Le-dessous-des-grilles/">Le dessous des grilles - Atelier - Paris Web 2013</a></h3>
        <a href="{{ site.baseurl }}/assets/bertrandkeller-lesdessous-des-grilles-parisweb.jpg"><img src="{{ site.baseurl }}/assets/bertrandkeller-lesdessous-des-grilles-parisweb.jpg" alt="bertrandkeller-lesdessous-des-grilles-parisweb" width="750" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://bertrandkeller.github.io/mesure-emoi/">Mesure Émoi - Présentation - NWX Tech 2013</a>
        </h3>
        <a href="{{ site.baseurl }}/assets/bertrandkeller-mesure-emoi.jpg"><img src="{{ site.baseurl }}/assets/bertrandkeller-mesure-emoi.jpg" alt="bertrandkeller-mesure-emoi" width="750" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://vimeo.com/51941103">Intégrateur lève toi et conçois - Présentation - Sud-Web 2012</a></h3>
        <a class="venobox" href="{{ site.baseurl }}/assets/bertrandkeller-integrateur-leve-toi-et-concois.jpg"><img src="{{ site.baseurl }}/assets/bertrandkeller-integrateur-leve-toi-et-concois.jpg" alt="bertrandkeller-integrateur-leve-toi-et-concois" width="960" /></a>
    </div>
  </div>
</section>

<section id="id-portfolio" class="panel bg-black">
  <h2>Références</h2>
  <p>Exemples de sites réalisés sous Drupal, TYPO3, WordPress ou Symfony. J'y ai toujours codé l'interface et souvent dirigé la coordination des différents métiers.</p>
  <br>
  <div class="gallery">
    <div class="gallery-module">
        <h3><a href="http://www.alterecoplus.fr/">Alterecoplus - Ipad & Android - Drupal</a></h3>
        <a class="venobox" href="{{ site.baseurl }}/assets/bertrand-keller-alterecoplus-hebdo.jpg"><img src="{{ site.baseurl }}/assets/bertrand-keller-alterecoplus-hebdo.jpg" alt="bertrand-keller-alterecoplus-hebdo" width="960" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://www.fondationdefrance.org/fs/ra2013/">Fondation de France - Rapport annuel - Jekyll</a></h3>
        <a class="venobox" href="{{ site.baseurl }}/assets/bertrand-keller-fondation-de-france.jpg"><img src="{{ site.baseurl }}/assets/bertrand-keller-fondation-de-france.jpg" alt="bertrand-keller-fondation-de-france" width="960" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://corporate.airfrance.com/fr/le-voyage/">Air France - Compagnie aérienne - TYPO3</a></h3>
        <a class="venobox" href="{{ site.baseurl }}/assets/bertrand-keller-airfrance.jpg"><img src="{{ site.baseurl }}/assets/bertrand-keller-airfrance.jpg" alt="bertrand-keller-airfrance" width="960" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://www.beecitiz.com/">Beecitiz - Service de voirie - Symfony</a></h3>
        <a class="venobox" href="{{ site.baseurl }}/assets/bertrand-keller-beecitiz.jpg"><img src="{{ site.baseurl }}/assets/bertrand-keller-beecitiz.jpg" alt="bertrand-keller-beecitiz" width="960" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://nomadmusic.fr/fr">NoMadMusic - Label de musique - Drupal</a></h3>
        <a class="venobox" href="{{ site.baseurl }}/assets/bertrand-keller-nomadmusic.jpg"><img src="{{ site.baseurl }}/assets/bertrand-keller-nomadmusic.jpg" alt="bertrand-keller-nomadmusic" width="960" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://www.quaibranly.fr/">Quai Branly - Musée des arts primitifs - TYPO3</a></h3>
        <a class="venobox" href="{{ site.baseurl }}/assets/bertrand-keller-quai-branly.jpg"><img src="{{ site.baseurl }}/assets/bertrand-keller-quai-branly.jpg" alt="bertrand-keller-quai-branly" width="960" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://metropole.rennes.fr/actualites/">Rennes - Site de la ville - TYPO3</a></h3>
        <a class="venobox" href="{{ site.baseurl }}/assets/bertrand-keller-rennes.jpg"><img src="{{ site.baseurl }}/assets/bertrand-keller-rennes.jpg" alt="bertrand-keller-rennes" width="960" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://www.leem.org/">Le Leem - Groupe d'influence - Drupal</a></h3>
        <a class="venobox" href="{{ site.baseurl }}/assets/bertrand-keller-leem.jpg"><img src="{{ site.baseurl }}/assets/bertrand-keller-leem.jpg" alt="bertrand-keller-leem" width="960" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://www.wise-qatar.org/">Wise Qatar - Conférence éducation - Drupal</a></h3>
        <a class="venobox" href="{{ site.baseurl }}/assets/bertrand-keller-wise-qatar.jpg"><img src="{{ site.baseurl }}/assets/bertrand-keller-wise-qatar.jpg" alt="bertrand-keller-wise-qatar" width="960" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://activitesaintnicaise.org/">Activité Saint Nicaise - Association - Jekyll</a></h3>
        <a class="venobox" href="{{ site.baseurl }}/assets/bertrandkeller-Activite-Saint-Nicaise.jpg"><img src="{{ site.baseurl }}/assets/bertrandkeller-Activite-Saint-Nicaise.jpg" alt="bertrandkeller-Activite-Saint-Nicaise" width="750" class="aligncenter size-full wp-image-3786" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://www.bouyguestelecom-entreprises.fr/">Bouygues Tel Entreprise - Telecom - Drupal</a></h3>
        <a class="venobox" href="{{ site.baseurl }}/assets/bertrandkeller-bouygues-telecom-entreprise.jpg"><img src="{{ site.baseurl }}/assets/bertrandkeller-bouygues-telecom-entreprise.jpg" alt="bertrandkeller-bouygues-telecom-entreprise" width="750" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://proximeetiz.sncf.fr/">SNCF - Réseau social - Symfony</a></h3>
        <a class="venobox" href="{{ site.baseurl }}/assets/bertrandkeller-proximeetiz.jpg"><img src="{{ site.baseurl }}/assets/bertrandkeller-proximeetiz.jpg" alt="bertrandkeller-proximeetiz" width="750" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="http://sagesfemmes-normandie.asso.fr/">Sages femmes libérales - Gdrive - Jekyll - Netlify</a></h3>
        <a class="venobox" href="{{ site.baseurl }}/assets/bertrandkeller-sages-femmes-liberales-haute-nomandie.png"><img src="{{ site.baseurl }}/assets/bertrandkeller-sages-femmes-liberales-haute-nomandie.png" alt="sages-femmes libérales de Normandie" width="750" /></a>
    </div>
    <div class="gallery-module">
        <h3><a href="https://www.service-public.fr/">Service Public - Thymleaf - Java</a></h3>
        <a class="venobox" href="{{ site.baseurl }}/assets/bertrandkeller-service-public.png"><img src="{{ site.baseurl }}/assets/bertrandkeller-service-public.png" alt="Service-public.fr" width="750" /></a>
    </div>
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
