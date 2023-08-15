---
altLangPage: https://design.canada.ca/common-design-patterns/latest-news.html
date: null
dateModified: '2019-11-28'
description: null
title: "Nouveautés - Configuration de conception de Canada.ca"
---


<p class="gc-byline">
 <strong>
  De :
  <a href="https://www.canada.ca/fr/secretariat-conseil-tresor.html">
   Secrétariat du Conseil du Trésor du Canada
  </a>
 </strong>
</p>

<section>
 <p>
  Le modèle « Nouveautés » comprend les éléments de nouvelles les plus récents affichés par l’institution, l’organisation ou l’entité.
 </p>
</section>

<section>
 <h2>
  Sur cette page
 </h2>
 <ul>
  <li>
   <a href="#quand">
    Quand l'utiliser
   </a>
  </li>
  <li>
   <a href="#eviter">
    Quoi éviter
   </a>
  </li>
  <li>
   <a href="#code">
    Comment mettre en œuvre
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
  Quand l'utiliser
 </h2>
 <p>
  Utilisez ce modèle dans les gabarits suivants :
 </p>
 <ul>
  <li>
   <a href="../modeles-obligatoire/pages-profil-institutionnel.html">
    Page d'accueil institutionnelle
   </a>
  </li>
  <li>
   <a href="../modeles-obligatoire/pages-profil-ministres.html">
    Page de profil des ministres
   </a>
  </li>
 </ul>
</section>

<h2 id="eviter">
 Quoi éviter
</h2>

<p>
 Assurez-vous que ce modèle n'interfère pas avec le contenu de la tâche principale.
</p>

<section>
 <h2 id="code">
  Comment mettre en œuvre
 </h2>
 <section>
  <p>
   Vous pouvez utiliser soit la version
   <strong>
    bêta
   </strong>
   ou la version
   <strong>
    stable
   </strong>
   de ce modèle.
  </p>
  <h3>
   Nouveautés bêta
  </h3>
  <p>
   La version bêta est utilisée à la page d'accueil institutionnelle. Le code est toujours en révision. Il se peut que des modifications mineures y soient apportées.
  </p>
  <p>
   La version bêta remplacera à terme la version stable.
  </p>
  <div class="pattern-demo mrgn-bttm-md">
   <div class="container">
    <div class="row col-lg-12">
     <section class="col-md-4">
      <h2 class="h3">
       Nouvelles
      </h2>
      <ul class="feeds-cont list-unstyled lst-spcd feed-active">
       <li>
        <a href="#">
         [Titre de nouvelle]
        </a>
        <br/>
        <small class="feeds-date">
         AAAA-MM-JJ HH:MM
        </small>
       </li>
       <li>
        <a href="#">
         [Titre de nouvelle]
        </a>
        <br/>
        <small class="feeds-date">
         AAAA-MM-JJ HH:MM
        </small>
       </li>
       <li>
        <a href="#">
         [Titre de nouvelle]
        </a>
        <br/>
        <small class="feeds-date">
         AAAA-MM-JJ HH:MM
        </small>
       </li>
      </ul>
      <p>
       En savoir plus:
       <a class="admin" href="#">
        Nouvelles de [Institution]
       </a>
      </p>
     </section>
     <section class="col-md-8 gc-prtts">
      <h2 class="h3">
       En vedette
      </h2>
      <div class="row wb-eqht">
       <div class="col-md-6 mrgn-bttm-md">
        <a class="figcaption hght-inhrt" href="#">
         <figure class="well well-sm brdr-rds-0 hght-inhrt">
          <img alt="#" class="img-responsive full-width" src="https://via.placeholder.com/360x203/000000/FFFFFF.png"/>
          <figcaption class="h5">
           [Hyperlien de l'élément]
          </figcaption>
          <p>
           Brève description de l'élément en vedette.
          </p>
         </figure>
        </a>
       </div>
       <div class="col-md-6 mrgn-bttm-md">
        <a class="figcaption hght-inhrt" href="https://www.canada.ca/en/revenue-agency/campaigns/my-benefits-credits.html">
         <figure class="well well-sm brdr-rds-0 hght-inhrt">
          <img alt="#" class="img-responsive full-width" src="https://via.placeholder.com/360x203/000000/FFFFFF.png"/>
          <figcaption class="h5">
           [Hyperlien de l'élément]
          </figcaption>
          <p>
           Brève description de l'élément en vedette.
          </p>
         </figure>
        </a>
       </div>
      </div>
     </section>
    </div>
   </div>
   <details>
    <summary>
     Code
    </summary>
    <pre class="prettyprint"><code>&lt;div class="row col-lg-12"&gt;
	&lt;section class="col-md-4 wb-feeds limit-3 gc-nws"&gt;
	 &lt;h2 class="h3"&gt;Nouvelles&lt;/h2&gt;
	&lt;!-- demonstrate the look - use json feed where applicable --&gt;
	&lt;ul class="feeds-cont list-unstyled lst-spcd feed-active"&gt;
	 &lt;li&gt;&lt;a href="#"&gt;[Titre nouvelle]&lt;/a&gt;&lt;br&gt; &lt;small class="feeds-date"&gt;AAAA-MM-JJ HH:MM&lt;/small&gt;&lt;/li&gt;
	 &lt;li&gt;&lt;a href="#"&gt;[Titre nouvelle]]&lt;/a&gt;&lt;br&gt; &lt;small class="feeds-date"&gt;AAAA-MM-JJ HH:MM&lt;/small&gt;&lt;/li&gt;
	 &lt;li&gt;&lt;a href="#"&gt;[Titre nouvelle]]&lt;/a&gt;&lt;br&gt; &lt;small class="feeds-date"&gt;AAAA-MM-JJ HH:MM&lt;/small&gt;&lt;/li&gt;
	&lt;/ul&gt;
	&lt;!-- json feed for news example
	&lt;ul class="feeds-cont list-unstyled lst-spcd"&gt;
	 &lt;li&gt; &lt;a data-ajax="https://www.canada.ca/content/canadasite/api/nws/fds/en/web-feeds/revenue-agency.json" href="https://www.canada.ca/en/revenue-agency.atom.xml" rel="external"&gt;Canada Revenue Agency news items&lt;/a&gt; &lt;/li&gt;
	 &lt;/ul&gt;
	--&gt;
	&lt;p&gt;En savoir plus: &lt;a href="#" class="admin"&gt;Nouvelles de [Institution]&lt;/a&gt;&lt;/p&gt;
	&lt;/section&gt;
	&lt;section class="col-md-8 gc-prtts"&gt;
	 &lt;h2 class="h3"&gt;En vedette&lt;/h2&gt;
	  &lt;div class="row wb-eqht"&gt;
	   &lt;div class="col-md-6 mrgn-bttm-md"&gt;
	    &lt;a class="figcaption hght-inhrt" href="#"&gt;
	     &lt;figure class="well well-sm brdr-rds-0 hght-inhrt"&gt;&lt;img class="img-responsive full-width" alt="#" src="https://wet-boew.github.io/themes-dist/GCWeb/img/360x203.png"&gt;
	      &lt;figcaption class="h5"&gt;[Hyperlien de l'élément]&lt;/figcaption&gt;
	        &lt;p&gt;Brève description de l'élément en vedette.&lt;/p&gt;
	        &lt;/figure&gt;
	       &lt;/a&gt;
	      &lt;/div&gt;
	    &lt;div class="col-md-6 mrgn-bttm-md"&gt;
	     &lt;a class="figcaption hght-inhrt" href="https://www.canada.ca/en/revenue-agency/campaigns/my-benefits-credits.html"&gt;
	     &lt;figure class="well well-sm brdr-rds-0 hght-inhrt"&gt;&lt;img class="img-responsive full-width" alt="#" src="https://wet-boew.github.io/themes-dist/GCWeb/img/360x203.png"&gt;
	      &lt;figcaption class="h5"&gt;[Hyperlien de l'élément]&lt;/figcaption&gt;
	      &lt;p&gt;Brève description de l'élément en vedette.&lt;/p&gt;
	        &lt;/figure&gt;
	     &lt;/a&gt;
	     &lt;/div&gt;
	    &lt;/div&gt;
	  &lt;/section&gt;
	 &lt;/div&gt;
	&lt;/div&gt;</code></pre>
   </details>
  </div>
  <div class="clearfix">
  </div>
  <h3>
   Nouveautés stable
  </h3>
  <p>
   La version bêta remplacera à terme la version stable.
  </p>
  <details>
   <summary>
    Directives de la version stable pour les nouveautés
   </summary>
   <ul>
    <li>
     Elle présente les éléments de nouvelles les plus récents affichés par l’entité.
    </li>
    <li>
     L’étiquette de l’en-tête est « Nouveautés ».
    </li>
    <li>
     Deux des éléments de nouvelles doivent comprendre une image, un titre assorti d’un hyperlien, des renseignements supplémentaires et un texte descriptif :
     <ul>
      <li>
       Peut comprendre du contenu promotionnel, et être priorisé à la discrétion de l’institution
      </li>
      <li>
       Le texte de la description doit être court et concis.
      </li>
     </ul>
    </li>
    <li>
     Les types de produits liés aux nouvelles affichés comme texte seulement se limitent à ceux affichés sur nouvelles.gc.ca :
     <ul>
      <li>
       Avis aux médias
      </li>
      <li>
       Documents d’information
      </li>
      <li>
       Communiqués de presse
      </li>
      <li>
       Discours
      </li>
      <li>
       Déclarations
      </li>
     </ul>
    </li>
    <li>
     Veuillez consulter la
     <a href="http://wet-boew.github.io/themes-dist/GCWeb/index-fr.html">
      page GitHub sur Canada.ca
     </a>
     pour obtenir des détails sur le redimensionnement d’image.
    </li>
   </ul>
   <h2>
    Exemple concret
   </h2>
   <ul>
    <li>
     <a href="https://wet-boew.github.io/GCWeb/templates/institutional/institution-fr.html">
      Page de profil institutionnel
     </a>
    </li>
   </ul>
   <section class="panel panel-primary">
    <header class="panel-heading">
     <h2 class="panel-title">
      Exemples
     </h2>
    </header>
    <div class="panel-body">
     <div class="row">
      <figure class="mrgn-bttm-sm">
       <figcaption class="text-center">
        <b>
         Modèle des nouveautés avec deux images
        </b>
       </figcaption>
       <img alt="Capture d’écran illustrant le modèle des dernières nouvelles avec deux images dans le site Canada.ca. Plus de détails au sujet de ce graphique se retrouvent dans le texte entourant l’image." class="img-responsive center-block" src="https://www.canada.ca/content/dam/tbs-sct/images/government-communications/canada-content-style-guide/latest-news-pattern-fra.jpg"/>
      </figure>
     </div>
    </div>
   </section>
  </details>
 </section>
</section>
