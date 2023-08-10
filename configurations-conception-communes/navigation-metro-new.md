---
altLangPage: https://design.canada.ca/common-design-patterns/contextual-alerts.html
date: null
dateModified: '2020-04-24'
description: null
section-title: "Système de conception de Canada.ca"
title: "Navigation de style métro"
---


<div class="row">
 <div class="col-md-12 pull-left">
  <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only" style="line-height:1.65em">
   <li class="mrgn-rght-lg">
    <span class="label label-info">
     Bêta
    </span>
   </li>
   <li class="mrgn-rght-lg">
    Dernière modification : 2020-12-17
   </li>
  </ul>
 </div>
</div>

<p>
 Diviser un service ou un contenu en sections qui se concentrent chacune sur une étape ou une réponse spécifique que les gens doivent consulter avant de passer à l'étape ou à la section suivante.
</p>

<div class="pattern-demo mrgn-bttm-md">
 <p>
  [Image ou exemple codé de la configuration afin qu'il puisse être identifié visuellement rapidement - Facultatif]
 </p>
</div>

<section>
 <h2>
  Sur cette page
 </h2>
 <ul>
  <li>
   <a href="#quand">
    Quand utiliser cette configuration
   </a>
  </li>
  <li>
   <a href="#eviter">
    Quoi éviter
   </a>
  </li>
  <li>
   <a href="#comment">
    Comment mettre en oeuvre
   </a>
  </li>
  <li>
   <a href="#recherche">
    Recerche et blogue
   </a>
  </li>
  <li>
   <a href="#derniers">
    Derniers changements
   </a>
  </li>
  <li>
   <a href="#discussion">
    Discussion
   </a>
  </li>
 </ul>
</section>

<section>
 <h2 id="quand">
  Quand utiliser cette configuration
 </h2>
 <p>
  Utilisez cette configurtion pour regrouper des pages de tâches connexes et assurer la navigation entre ces pages.
 </p>
 <p>
  Gardez le nombre de pages liées ensemble à un nombre raisonnable (maximum 6).
 </p>
</section>

<section>
 <h2 id="eviter">
  Quoi éviter
 </h2>
 <p>
  N'utilisez pas de chiffres lorsque vous utilisez ce modèle pour des étapes séquentielles. Des tests ont montré que les Canadiens ont moins de chances d'arriver à la section dont ils ont besoin si les éléments sont numérotés.
 </p>
 <p>
  Les sous-étapes n'ont pas encore été testées correctement - évitez de les utiliser.
 </p>
</section>

<section>
 <h2 id="comment">
  Comment mettre en oeuvre
 </h2>
 <p>
  Cette configuration de conception est toujours en version bêta, et le code est toujours en cours de révision. Utilisez-la avec parcimonue, puisqu'elle peut encore faire l'objet de modifications.
 </p>
 <p>
  Vous devrez utiliser le
  <a href="https://wet-boew.github.io/themes-dist/GCWeb/provisional-en.html">
   CSS provisoire
  </a>
  pour utiliser cette configuration de conception.
 </p>
 <ol>
  <li>
   <a href="#1">
    Page d'index
   </a>
  </li>
  <li>
   <a href="#2">
    Page d'étape
   </a>
  </li>
 </ol>
 <h3 id="1">
  1. Page d'index
 </h3>
 <p>
  <strong>
   Quand utiliser cette variante :
  </strong>
  Utilisez comme page d'accueil pour un ensemble de pages connexes qui utilisent la navigation de style métro.
 </p>
 <div class="pattern-demo mrgn-bttm-md">
  <p>
   [Exemple codé de la variante 1]
  </p>
 </div>
 <details>
  <summary>
   Code
  </summary>
  <pre>
<code>&lt;p&gt;[Exemple codé de la variante 1]&lt;/p&gt;
</code></pre>
 </details>
 <h3 id="primary">
  2. Page d'étape
 </h3>
 <p>
  <strong>
   Quand utiliser cette variante :
  </strong>
  Utilisez sur chaque page liée par la navigation de style métro.
 </p>
 <div class="pattern-demo pattern-demo-component no-pddng" id="demo-tabs">
  <div class="component-demo mrgn-rght-lg mrgn-lft-lg mrgn-tp-lg mrgn-bttm-lg" id="tabs-demo">
   <nav class="provisional gc-subway">
    <h1>
     [Nom du service]
    </h1>
    <ul class="gc-subway-steps">
     <li>
      <a href="#">
       [Nom de l'étape ou de la section 1]
       <span class="wb-inv">
        : Nom du service
       </span>
      </a>
     </li>
     <li>
      <a href="#">
       [Nom de l'étape ou de la section 1]
       <span class="wb-inv">
        : Nom du service
       </span>
      </a>
     </li>
     <li>
      <a href="#">
       [Nom de l'étape ou de la section 2]
       <span class="wb-inv">
        : Nom du service
       </span>
      </a>
     </li>
     <li class="active">
      <a aria-current="page">
       [Nom de l'étape ou de la section 3]
       <span class="wb-inv">
        : Nom du service
       </span>
      </a>
     </li>
     <li>
      <a href="#">
       [Nom de l'étape ou de la section 4]
       <span class="wb-inv">
        : Nom du service
       </span>
      </a>
     </li>
     <li>
      <a href="#">
       [Nom de l'étape ou de la section 5]
       <span class="wb-inv">
        : Nom du service
       </span>
      </a>
     </li>
    </ul>
   </nav>
   <h1 class="provisional gc-thickline" id="wb-cont-demo" property="name">
    [Nom de l'étape ou de la section 3]
   </h1>
   <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo elementum est, ac ultrices urna convallis vitae. Nulla nec convallis felis. Ut pretium nisl nisi. Nam gravida gravida aliquet. Morbi tincidunt lorem in purus imperdiet, id rutrum mauris sodales. Vivamus nec mattis tellus. Nunc turpis dolor, malesuada non magna nec, scelerisque tristique velit.
   </p>
   <p>
    Sed consectetur eu ligula a molestie. Vivamus convallis libero malesuada pharetra suscipit. In a pulvinar mi, quis aliquet mauris. Duis convallis nunc nunc, in euismod nisi volutpat sit amet. Integer convallis lacus non orci imperdiet, ac convallis massa mollis.
   </p>
   <p>
    Sed consectetur eu ligula a molestie. Vivamus convallis libero malesuada pharetra suscipit. In a pulvinar mi, quis aliquet mauris. Duis convallis nunc nunc, in euismod nisi volutpat sit amet. Integer convallis lacus non orci imperdiet, ac convallis massa mollis.
   </p>
  </div>
 </div>
 <div class="col-md-12 mrgn-tp-lg">
  <details class="wb-prettify all-pre">
   <summary>
    Code
   </summary>
   <details>
    <summary>
     HTML
    </summary>
    <pre>
<code>
&lt;nav class="provisional gc-subway"&gt;
  &lt;h1&gt;[Nom du service]&lt;/h1&gt;
  &lt;ul class="gc-subway-steps"&gt;
    &lt;li&gt;&lt;a href="#"&gt;[Nom de l'étape ou de la section 1]&lt;span class="wb-inv"&gt;: [Nom du service]&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;[Nom de l'étape ou de la section 1]&lt;span class="wb-inv"&gt;: [Nom du service]&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;[Nom de l'étape ou de la section 2]&lt;span class="wb-inv"&gt;: [Nom du service]&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li class="active"&gt;&lt;a aria-current="page"&gt;[Nom de l'étape ou de la section 3]&lt;span class="wb-inv"&gt;: [Nom du service]&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;[Nom de l'étape ou de la section 4]&lt;span class="wb-inv"&gt;: [Nom du service]&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;[Nom de l'étape ou de la section 5]&lt;span class="wb-inv"&gt;: [Nom du service]&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;
&lt;h1 property="name" id="wb-cont" class="provisional gc-thickline"&gt;[Nom de l'étape ou de la section 3]&lt;/h1&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo elementum est, ac ultrices urna convallis vitae. Nulla nec convallis felis. Ut pretium nisl nisi. Nam gravida gravida aliquet. Morbi tincidunt lorem in purus imperdiet, id rutrum mauris sodales. Vivamus nec mattis tellus. Nunc turpis dolor, malesuada non magna nec, scelerisque tristique velit.&lt;/p&gt;
&lt;p&gt;Sed consectetur eu ligula a molestie. Vivamus convallis libero malesuada pharetra suscipit. In a pulvinar mi, quis aliquet mauris. Duis convallis nunc nunc, in euismod nisi volutpat sit amet. Integer convallis lacus non orci imperdiet, ac convallis massa mollis.&lt;/p&gt;
&lt;p&gt;Sed consectetur eu ligula a molestie. Vivamus convallis libero malesuada pharetra suscipit. In a pulvinar mi, quis aliquet mauris. Duis convallis nunc nunc, in euismod nisi volutpat sit amet. Integer convallis lacus non orci imperdiet, ac convallis massa mollis.&lt;/p&gt;
</code>
</pre>
   </details>
   <details>
    <summary>
     CSS
    </summary>
    <pre class="prettyprint lang-css">
<code>
.provisional.gc-subway {
  border-radius: 0px 6px 6px 0px;
  border-right: 4px solid #26374a;
  border-top: 4px solid #26374a;
  margin-top: 38px;
}
.provisional.gc-subway ul {
  clear: both;
  list-style: none;
  padding-left: .57em;
  padding-top: 10px;
  position: relative;
}
.provisional.gc-subway ul li {
  border-left: 4px solid #26374a;
  padding: 0px 20px 30px 1em;
}
.provisional.gc-subway ul li::first-line {
  line-height: 1 !important;
}
.provisional.gc-subway ul li :first-child::before {
  background-color: #fff;
  border: 3px solid #26374a;
  border-radius: 50%;
  content: "";
  height: 1.2em;
  left: .05em;
  position: absolute;
  -webkit-transition: width .2s, height .2s, left .2s, margin-top .2s;
  transition: width .2s, height .2s, left .2s, margin-top .2s;
  width: 1.2em;
}
.provisional.gc-subway ul li.active &gt; :first-child::before {
  background-color: #26374a;
}
.provisional.gc-subway ul li a[href]:hover::before,
.provisional.gc-subway ul li a[href]:focus::before {
  height: 1.4em;
  left: -.05em;
  margin-top: -.1em;
  width: 1.4em;
}
.provisional.gc-subway ul li:last-child {
  border-bottom: 4px solid #26374a;
  border-bottom-left-radius: 6px;
  border-left: 4px solid #26374a;
}
.provisional.gc-subway ul li ul {
  margin-top: 20px;
  padding-left: .55em;
}
.provisional.gc-subway ul li ul li:last-child {
  border-bottom-width: 0px;
  padding-bottom: 0px;
}
.provisional.gc-subway ul li ul.noline li {
  -o-border-image: none;
  border-image: none;
  border-left: 4px solid transparent;
}
.provisional.gc-subway h1 {
  float: left;
}
.provisional.gc-subway h1,
.provisional.gc-subway-section .gc-subway-h1 {
  background-color: #fff;
  border-bottom-width: 0px;
  color: #555;
  font-size: 1.3em;
  margin-right: 20px;
  margin-top: -19px;
  padding: 0px 20px 10px 0px;
}
@media screen and (min-width: 992px) {
  .provisional.gc-subway {
    border-right: 0;
    border-top: 0;
    display: none;
    margin-top: 25px;
    padding-left: 15px;
  }
  .provisional.gc-subway.no-blink {
    display: block;
  }
  .provisional.gc-subway .gc-subway-menu-nav {
    float: right;
    width: 33.33%;
  }
  .provisional.gc-subway ul li:last-child {
    border-bottom: 0;
    border-left: 4px solid transparent;
  }
  .provisional.gc-subway-section {
    padding-right: 15px;
    width: 66.66%;
  }
  .provisional.gc-subway-section .gc-subway-h1,
  .provisional.gc-subway-section h1 {
    margin-top: 0;
  }
  .provisional.gc-subway-section .gc-subway-h1 {
    font-family: Lato, sans-serif;
    font-weight: inherit;
    margin-bottom: 0;
    margin-right: 0;
    padding-bottom: 0 !important;
    padding-left: 0;
  }
  .wb-disable .provisional.gc-subway {
    display: block;
  }
}
</code>
</pre>
   </details>
   <details>
    <summary>
     JS
    </summary>
    <pre>
<code>
( function( $, window, wb ) {
  "use strict";

  var $document = wb.doc,
    componentName = "gc-subway",
    selector = ".provisional." + componentName,
    initEvent = "wb-init ." + componentName,
    views = {
      xxs: "xxsmallview",
      xs: "xsmallview",
      sm: "smallview",
      md: "mediumview",
      lg: "largeview",
      xl: "xlargeview"
    },
    mainClass = "gc-subway-section",
    toggleClass = "wb-inv",
    desktopInited = false,
    $html = wb.html,
    $h1, $h2, $h1Copy, $menu, $main,

    /**
      * @method init
      * @param {jQuery Event} événement Event qui déclenche l'appel de la fonction
      */
    init = function( event ) {

      // Start initialization
      // returns DOM object = proceed with init
      // returns undefined = do not proceed with init (e.g., already initialized)
      var elm = wb.init( event, componentName, selector ),
        $elm;

      if ( elm ) {
        $elm = $( elm );

        // trigger resizing
        onResize( $elm );

        // Identify that initialization has completed
        wb.ready( $elm, componentName );
      }
    },

    /**
      * Mutation du DOM en fonction du point d'arrêt (breakpoint)
      * @method onResize
      * @param {jQuery DOM element | jQuery Event} $elm Élément ciblé par ce plugin, qui est la balise nav | Événement de redimensionnement
      */
    onResize = function( $elm ) {

      if ( !$elm.length ) {
        $elm = $( selector );
      }

      // Desktop view, setup and mutate H1s
      if ( $html.hasClass( views.md ) || $html.hasClass( views.lg ) ||
        $html.hasClass( views.xl ) ) {

        // Initiate desktop mode only once
        if ( !desktopInited ) {
          initDesktop( $elm );
        }
        $h1.addClass( toggleClass );
        $h1Copy.prependTo( $main );
        $h2.prependTo( $menu );
      } else if ( ( $html.hasClass( views.sm ) || $html.hasClass( views.xs ) || $html.hasClass( views.xxs ) ) &amp;&amp; desktopInited ) {

        // Mobile view, mutate back to mobile first if needed
        $h1.removeClass( toggleClass );
        $h1Copy.remove();
        $( "h2:first-child", $menu ).remove();
      }
    },

    /**
      * Lancer la configuration pour le mode bureau
      * @method initDesktop
      * @param {jQuery DOM element} $elm Élément ciblé par ce plugin, qui est la balise nav
      */
    initDesktop = function( $elm ) {
      $h1 = $( "h1", $elm );
      $h2 = $( "<h2 class="h3 hidden-xs visible-md visible-lg mrgn-tp-0">Sections</h2>" );
      $h1Copy = $( "<p aria-hidden="true" class="gc-subway-h1">" + $h1.text() + "</p>" );
      $( "ul", $elm ).first().wrap( "<div class="gc-subway-menu-nav"></div>" );
      $menu = $( ".gc-subway-menu-nav", $elm );
      $elm.nextUntil( ".pagedetails, .gc-subway-section-end" ).wrapAll( "<section class='provisional " + mainClass + "'>" );
      $main = $elm.next();

      // Prevent on-load blinking on desktop
      $elm.addClass( "no-blink" );

      desktopInited = true;
    };

  // Écoute le redimensionnement et modifie le DOM en conséquence
  $document.on( wb.resizeEvents, onResize );

  // Lie l'événement init du plugin
  $document.on( "timerpoke.wb " + initEvent, selector + ".provisional", init );

  // Ajoute le minuteur pour initialiser le plugin
  wb.add( selector );

  } )( jQuery, window, wb );
</code>
</pre>
</section>
   </details>
  </details>
 </div>
</section>

<h2 id="recherche">
 Recherche et blogue
</h2>

<p>
 Cette configuration a été développée avec l'ARC dans le cadre d'un projet d'optimisation de la Prestation canadienne pour enfants. Elle s'est avérée efficace pour montrer la relation entre des pages liées et elle fonctionne bien sur les appareils mobiles.
</p>

<h2 id="derniers">
 Derniers changements
</h2>

<section>
 <dl class="dl-horizontal">
  <dt>
   <time class="link-muted" datetime="2020-12-27">
    2020-12-17
   </time>
  </dt>
  <dd>
   Lancé la navigation de style métro en bêta
  </dd>
 </dl>
</section>
