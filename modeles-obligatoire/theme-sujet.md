---
altLangPage: https://design.canada.ca/mandatory-templates/theme-topic.html
breadcrumbs:
- link: https://www.canada.ca/fr/gouvernement/a-propos.html
  title: "À propos de Canada.ca"
- link: https://www.canada.ca/fr/gouvernement/a-propos/systeme-conception.html
  title: "Système de conception de Canada.ca"
- link: https://www.canada.ca/fr/gouvernement/a-propos/systeme-conception/bibliotheque-modeles.html
  title: "Bibliothèque de modèles et de configurations de conception"
- link: https://conception.canada.ca/modeles-obligatoire/pages-profil-institutionnel.html
  title: Page d'accueil institutionnelle
date: null
dateModified: '2020-06-30'
description: null
title: "Page de thème et de sujet"
---



<p class="gc-byline">
 <strong>
  De :
  <a href="https://www.canada.ca/fr/secretariat-conseil-tresor.html">
   Secrétariat du Conseil du Trésor du Canada
  </a>
 </strong>
</p>

<p>
 <span class="label label-danger">
  Obligatoire
 </span>
</p>

<p>
 Les pages de thème et les pages de sujet fournissent un accès aux sujets et aux pages de destination qui appuient l’achèvement des tâches.
</p>

<p>
 Les pages de thème et les pages de sujet :
</p>

<ul>
 <li>
  supportent la navigation par thème plutôt que par institution pour accéder au contenu à l’échelle du gouvernement (voir
  <a href="{{ site.url }}/architecture/organiser-contenu.html#toc1">
   Comment les gens trouvent leurs tâches : navigation par thèmes et navigation institutionnelle
  </a>
  );
 </li>
 <li>
  organisent le contenu et la navigation par ordre de priorité en présentant d’abord les renseignements et les services les plus consultés.
 </li>
</ul>


<h2>
 Sur cette page
</h2>

<ul>
 <li>
  <a href="#utiliser">
   Quand l'utiliser
  </a>
 </li>
 <li>
  <a href="#eviter">
   Quoi éviter
  </a>
 </li>
 <li>
  <a href="#comment">
   Comment mettre en œuvre
  </a>
 </li>
 <li>
  <a href="#recherche">
   Recherche
  </a>
 </li>
 <li>
  <a href="#changements">
   Derniers changements
  </a>
 </li>
 <li>
  <a href="#discussion">
   Discussion
  </a>
 </li>
</ul>


<section>
 <h2 id="utiliser">
  Quand l'utiliser
 </h2>
 <p>
  Ce modèle doit être utilisé pour la page de thème et les 2 premiers niveaux de sujets de l'
  <a href="https://www.canada.ca/fr/gouvernement/a-propos/systeme-conception/arborescence-thematique-types-contenu.html#arborescence">
   arborescence thématique de Canada.ca
  </a>
  .
 </p>
 <p>
  Il est facultatif pour les sujets de niveau inférieur.
 </p>
</section>

<section>
 <h2 id="eviter">
  Quoi éviter
 </h2>
 <p>
  Les pages où les personnes peuvent lancer une tâche devraient être considérées comme du contenu de destination et ne devraient pas utiliser le modèle de page de thème et de sujet.
 </p>
 <p>
  Le modèle de la page de sujet ne doit pas être utilisé pour faire de la promotion; utilisez plutôt consulter les
  <a href="../modeles-recommandes/pages-evenements-promotionnels.html">
   pages d’événements promotionnels
  </a>
  ou les
  <a href="../modeles-recommandes/pages-campagnes.html">
   pages de campagnes
  </a>
  .
 </p>
</section>

<section>
 <h2 id="comment">
  Comment mettre en œuvre
 </h2>
</section>

<section>
 <p>
  Vous pouvez utiliser la version
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
  Version bêta de la page de thème et de sujet
 </h3>
 <p>
  La version bêta est une amélioration par rapport à la version stable. Le code est toujours en révision. Il se peut que des modifications y soient apportées.
 </p>
 <p>
  La version bêta remplacera éventuellement la version stable.
 </p>
 <p>
  Vous devrez utiliser un CSS distinct pour mettre en œuvre la version bêta de ce modèle.
 </p>
 <div class="row mrgn-tp-lg mrgn-bttm-lg">
  <div class="col-xs-10 col-md-8 col-lg-8">
   <div class="gc-dwnld">
    <div class="row">
     <div class="col-xs-10 col-sm-3 col-lg-2">
      <p>
       <a class="gc-dwnld-lnk" href="../mise-en-page/theme-sujet_directives.html">
        <img alt="" class="thumbnail gc-dwnld-img" height="142" src="../images/theme-topic-img-fr-cropped.jpg" width="110"/>
        <span class="wb-inv">
         Modèle avec directives
        </span>
       </a>
      </p>
     </div>
     <div class="col-xs-12 col-sm-9 col-lg-10">
      <p class="mrgn-tp-md lead">
       Version bêta de la page de thème et de sujet
      </p>
      <p>
       <a class="btn btn-call-to-action" href="../mise-en-page/theme-sujet_directives.html">
        Modèle bêta avec directives
       </a>
      </p>
     </div>
    </div>
   </div>
  </div>
 </div>
 <details>
  <summary>
   Code
  </summary>
  <span id="code">
  </span>
  <div class="wb-tabs">
   <div class="tabpanels">
    <details id="details-panel1">
     <summary>
      HTML
     </summary>
     <pre>
                      <code>
&lt;div class="container"&gt;
&lt;div class="row"&gt;
  &lt;div class="col-md-6"&gt;
    &lt;h1 property="name" id="wb-cont"&gt;[Titre du thème ou du sujet]&lt;/h1&gt;
    &lt;p&gt;1 ou 2 phrases d’introduction qui définissent les sous-sujets et les tâches principales qui peuvent être consultés sur cette page.&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class="col-md-6 mrgn-tp-sm hidden-sm hidden-xs provisional gc-topic-bg"&gt;
    &lt;div data-bgimg="img/825x200.jpg"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;section class="well well-sm provisional gc-most-requested"&gt;
&lt;div class="container"&gt;
  &lt;div class="row"&gt;
    &lt;div class="col-md-2"&gt;
      &lt;h2&gt;En demande&lt;/h2&gt;
    &lt;/div&gt;
    &lt;div class="col-md-10"&gt;
      &lt;ul class="colcount-md-2"&gt;
        &lt;li&gt;&lt;a href="#"&gt;[Lien à une tâche principale]&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;[Lien à une tâche principale]&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;[Lien à une tâche principale]&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;[Lien à une tâche principale]&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;[Lien à une tâche principale]&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;[Lien à une tâche principale]&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;[Lien à une tâche principale]&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;/section&gt;
&lt;div class="container"&gt;
&lt;section class="gc-srvinfo"&gt;
  &lt;h2 class="wb-inv"&gt;Services et renseignements&lt;/h2&gt;
  &lt;div class="row wb-eqht-grd"&gt;
    &lt;div class="col-md-4"&gt;
      &lt;h3&gt;&lt;a href="#"&gt;[Lien à un sous-sujet avec action]&lt;/a&gt;&lt;/h3&gt;
      &lt;p&gt;Résumé des renseignements disponibles ou des tâches pouvant être accomplies sur la page. Choisissez une option dans le menu déroulant suivant afin de naviguer vers une autre page.&lt;/p&gt;
      &lt;div class="wb-fieldflow" data-wb-fieldflow='{"inline": true, "defaultselectedlabel": false, "i18n": { "btn": "Go"} }'&gt;
        &lt;p&gt;[Naviguer vers une autre page]&lt;/p&gt;
        &lt;ul&gt;
          &lt;li&gt;&lt;a href="../service-fr.html"&gt;Page de service&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="../institutional/institution-fr.html"&gt;Page institutionnelle&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="../content-fr.html"&gt;Page de contenu&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-md-4"&gt;
      &lt;h3&gt;&lt;a href="#"&gt;[Lien à un sous-sujet]&lt;/a&gt;&lt;/h3&gt;
      &lt;p&gt;Résumé des renseignements disponibles ou des tâches pouvant être accomplies sur la page. Supprimez les longs libellés et les messages promotionnels. Utilisez une formulation basée sur l'action.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="col-md-4"&gt;
      &lt;h3&gt;&lt;a href="#"&gt;[Lien à un sous-sujet]&lt;/a&gt;&lt;/h3&gt;
      &lt;p&gt;Résumé des renseignements disponibles ou des tâches pouvant être accomplies sur la page. Supprimez les longs libellés et les messages promotionnels. Utilisez une formulation basée sur l'action.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="col-md-4"&gt;
      &lt;h3&gt;&lt;a href="#"&gt;[Lien à un sous-sujet]&lt;/a&gt;&lt;/h3&gt;
      &lt;p&gt;Résumé des renseignements disponibles ou des tâches pouvant être accomplies sur la page. Supprimez les longs libellés et les messages promotionnels. Utilisez une formulation basée sur l'action.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="col-md-4"&gt;
      &lt;h3&gt;&lt;a href="#"&gt;[Lien à un sous-sujet]&lt;/a&gt;&lt;/h3&gt;
      &lt;p&gt;Résumé des renseignements disponibles ou des tâches pouvant être accomplies sur la page. Supprimez les longs libellés et les messages promotionnels. Utilisez une formulation basée sur l'action.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="col-md-4"&gt;
      &lt;h3&gt;&lt;a href="#"&gt;[Lien à un sous-sujet]&lt;/a&gt;&lt;/h3&gt;
      &lt;p&gt;Résumé des renseignements disponibles ou des tâches pouvant être accomplies sur la page. Supprimez les longs libellés et les messages promotionnels. Utilisez une formulation basée sur l'action.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="col-md-4"&gt;
      &lt;h3&gt;&lt;a href="#"&gt;[Lien à un sous-sujet]&lt;/a&gt;&lt;/h3&gt;
      &lt;p&gt;Résumé des renseignements disponibles ou des tâches pouvant être accomplies sur la page. Supprimez les longs libellés et les messages promotionnels. Utilisez une formulation basée sur l'action.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="col-md-4"&gt;
      &lt;h3&gt;&lt;a href="#"&gt;[Lien à un sous-sujet]&lt;/a&gt;&lt;/h3&gt;
      &lt;p&gt;Résumé des renseignements disponibles ou des tâches pouvant être accomplies sur la page. Supprimez les longs libellés et les messages promotionnels. Utilisez une formulation basée sur l'action.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="col-md-4"&gt;
      &lt;h3&gt;&lt;a href="#"&gt;[Lien à un sous-sujet]&lt;/a&gt;&lt;/h3&gt;
      &lt;p&gt;Résumé des renseignements disponibles ou des tâches pouvant être accomplies sur la page. Supprimez les longs libellés et les messages promotionnels. Utilisez une formulation basée sur l'action.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="col-md-4"&gt;
      &lt;h3&gt;&lt;a href="#"&gt;[Lien à un sous-sujet]&lt;/a&gt;&lt;/h3&gt;
      &lt;p&gt;Résumé des renseignements disponibles ou des tâches pouvant être accomplies sur la page. Supprimez les longs libellés et les messages promotionnels. Utilisez une formulation basée sur l'action.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="col-md-4"&gt;
      &lt;h3&gt;&lt;a href="#"&gt;[Lien à un sous-sujet]&lt;/a&gt;&lt;/h3&gt;
      &lt;p&gt;Résumé des renseignements disponibles ou des tâches pouvant être accomplies sur la page. Supprimez les longs libellés et les messages promotionnels. Utilisez une formulation basée sur l'action.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="col-md-4"&gt;
      &lt;h3&gt;&lt;a href="#"&gt;[Lien à un sous-sujet]&lt;/a&gt;&lt;/h3&gt;
      &lt;p&gt;Résumé des renseignements disponibles ou des tâches pouvant être accomplies sur la page. Supprimez les longs libellés et les messages promotionnels. Utilisez une formulation basée sur l'action.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/section&gt;
&lt;div class="row mrgn-tp-xl"&gt;
  &lt;div class="col-md-8"&gt;
    &lt;section class="gc-features"&gt;
      &lt;h2 class="wb-inv"&gt;En vedette&lt;/h2&gt;
      &lt;div class="row"&gt;
        &lt;div class="col-md-6"&gt;
          &lt;img class="img-responsive thumbnail mrgn-bttm-sm" src="../../components/gc-features/img/feature-360x203.png" alt=""/&gt;
        &lt;/div&gt;
        &lt;div class="col-md-6"&gt;
          &lt;h3 class="h5"&gt;&lt;a class="stretched-link" href="#"&gt;[Lien à l’élément en vedette]&lt;/a&gt;&lt;/h3&gt;
          &lt;p&gt;Brève description de l’élément en vedette.&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  &lt;/div&gt;
  &lt;div class="col-md-4"&gt;
    &lt;section class="provisional gc-followus"&gt;
&lt;h2&gt;Dans les médias sociaux&lt;/h2&gt;
&lt;ul&gt;
  &lt;li&gt;
    &lt;a href="#facebook" class="facebook wb-lbx"&gt;&lt;span class="wb-inv"&gt;Facebook : &lt;/span&gt;NomPageFacebook&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href="#" rel="external" class="twitter"&gt;&lt;span class="wb-inv"&gt;Twitter : &lt;/span&gt;@CompteTwitter&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href="#" rel="external" class="youtube"&gt;&lt;span class="wb-inv"&gt;Youtube : &lt;/span&gt;NomYouTube&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href="#" rel="external" class="instagram"&gt;&lt;span class="wb-inv"&gt;Instagram : &lt;/span&gt;NomInstagram&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href="#" rel="external" class="linkedin"&gt;&lt;span class="wb-inv"&gt;LinkedIn : &lt;/span&gt;NomLinkedIn&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;
&lt;/section&gt;
&lt;section id="facebook" class="modal-dialog modal-content overlay-def mfp-hide"&gt;
&lt;header class="modal-header"&gt;
  &lt;h2 class="modal-title" id="lbx-title"&gt;Facebook&lt;/h2&gt;
&lt;/header&gt;
&lt;div class="modal-body"&gt;
  &lt;ul class="list-unstyled lst-spcd"&gt;
    &lt;li&gt;
      &lt;a href="#" rel="external"&gt;[Titre du premier compte Facebook]&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;a href="#" rel="external"&gt;[Titre du deuxième compte Facebook]&lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
&lt;div class="modal-footer"&gt;
  &lt;button type="button" class="btn btn-sm btn-primary pull-left popup-modal-dismiss"&gt;Fermer&lt;span class="wb-inv"&gt;Fermer la fenêtre superposée&lt;/span&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;/section&gt;

  &lt;/div&gt;
&lt;/div&gt;
&lt;section class="provisional gc-contributors"&gt;
  &lt;h2&gt;De :&lt;/h2&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#"&gt;[Ministère ou agence]&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;[Ministère ou agence]&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/section&gt;
&lt;/div&gt;
</code>
</pre>
    </details>
    <details id="details-panel2">
     <summary>
      CSS
     </summary>
     <pre>
<code>
.provisional.gc-topic-bg div {
	background: no-repeat;
	margin-left: -15px;
	min-height: 200px;
	overflow: hidden;
	width: calc(50vw - 15px);
}

.provisional.gc-most-requested {
  border: none;
}

.provisional.gc-most-requested h2 {
  font-size: 1.1em;
  margin-top: 15px;
}

.provisional.gc-most-requested ul {
  margin-bottom: 15px;
  margin-top: 15px;
}

.provisional.gc-most-requested ul li {
  font-family: Lato,sans-serif;
  font-size: 87%;
  font-weight: 700;
  line-height: 1.5em;
}

.provisional.gc-followus .facebook::before,.provisional.gc-followus .instagram::before,.provisional.gc-followus .linkedin::before,.provisional.gc-followus .twitter::before,.provisional.gc-followus .youtube::before {
  background-repeat: no-repeat;
  background-size: cover;
  content: "";
  height: 38px;
  margin-right: 10px;
  min-width: 38px
}

.provisional.gc-followus h2 {
  font-size: 1.1em
}

.provisional.gc-followus ul {
  display: block;
  font-size: 87%;
  font-weight: 700;
  list-style: none;
  -webkit-margin-before: 1em;
  margin-block-start:1em;-webkit-padding-start: calc(1em + 6px);
  padding-inline-start:calc(1em + 6px)}

.provisional.gc-followus ul li {
  margin-bottom: 21px
}

.provisional.gc-followus ul li:last-child {
  margin-bottom: 15px
}

.provisional.gc-followus ul li a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  line-height: 1.54;
  max-width: -webkit-max-content;
  max-width: -moz-max-content;
  max-width: max-content;
  text-decoration: none
}

.provisional.gc-followus ul li a::before {
  margin-right: 10px;
  margin-top: -6px
}

.provisional.gc-followus ul li a:active,.provisional.gc-followus ul li a:focus,.provisional.gc-followus ul li a:hover {
  text-decoration: underline
}

.provisional.gc-followus ul.list-inline {
  -webkit-padding-start: 0;
  padding-inline-start:0}

.provisional.gc-followus ul.list-inline li {
  display: inline-block;
  padding-right: 0
}

.provisional.gc-followus ul.list-inline li a {
  height: 38px;
  overflow: hidden;
  width: 38px
}

.provisional.gc-followus ul.list-inline li a::before {
  margin-top: 0
}

.provisional.gc-followus ul.list-inline li a:active,.provisional.gc-followus ul.list-inline li a:focus,.provisional.gc-followus ul.list-inline li a:hover {
  outline: solid 2px #0535d2
}

.provisional.gc-followus .facebook::before {
  background-image: url(../assets/gc-follow-us/facebook.svg)
}

.provisional.gc-followus .twitter::before {
  background-image: url(../assets/gc-follow-us/twitter.svg)
}

.provisional.gc-followus .youtube::before {
  background-image: url(../assets/gc-follow-us/youtube.svg)
}

.provisional.gc-followus .instagram::before {
  background-image: url(../assets/gc-follow-us/instagram.svg)
}

.provisional.gc-followus .linkedin::before {
  background-image: url(../assets/gc-follow-us/linkedin.svg)
}

.provisional.gc-contributors {
  margin-top: 38px
}

.provisional.gc-contributors h2,.provisional.gc-contributors ul {
  display: inline;
  font-size: 87%;
  margin-top: 0
}

.provisional.gc-contributors ul {
  -webkit-padding-start: 0;
  padding-inline-start:0}

.provisional.gc-contributors ul li {
  display: inline-block;
  font-weight: 700;
  margin-right: .7em
}

@media screen and (max-width: 991px)
.provisional.gc-contributors ul {
  -webkit-padding-start: 20px;
  padding-inline-start: 20px;
}

@media screen and (max-width: 991px)
.provisional.gc-contributors h2, .provisional.gc-contributors ul {
  display: block;
}

@media screen and (max-width: 991px)
.provisional.gc-contributors ul li {
  display: list-item;
  margin-right: 0;
}
</code>
</pre>
    </details>
   </div>
  </div>
 </details>
 <div class="clearfix">
 </div>
</section>

<section>
 <h3>
  Version stable de la page de thème et de la page de sujet
 </h3>
 <p>
  La version stable sera éventuellement remplacée par la version bêta.
 </p>
 <details>
  <summary>
   Directives pour la version stable de la page de thème
  </summary>
  <div class="btn-group mrgn-bttm-sm">
   <button class="btn btn-default wb-toggle" data-toggle='{"selector": "details", "parent": "#template-elements", "type": "on"}' type="button">
    Développer tout
   </button>
   <button class="btn btn-default wb-toggle" data-toggle='{"selector": "details", "parent": "#template-elements", "type": "off"}' type="button">
    Réduire tout
   </button>
  </div>
  <div class="row">
   <div class="col-lg-6 pull-right">
    <figure class="mrgn-bttm-lg">
     <figcaption class="text-center">
      <b>
       Modèle de page de thème
      </b>
     </figcaption>
     <img alt="Modèle de page de thème indiquant les parties qui composent sa structure. Lire de haut en bas et de gauche à droite. Plus de détails au sujet de ce graphique se retrouvent dans le texte entourant l’image." class="full-width" src="../images/theme-page-fr.jpg"/>
    </figure>
   </div>
   <div class="col-lg-6 pull-left">
    <section id="template-elements">
     <section>
      <h3>
       1 : Titre du thème
      </h3>
      <p>
       <span class="label label-danger">
        Obligatoire
       </span>
      </p>
      <p>
       Décrit le thème et le contenu de la page
      </p>
      <ul class="list-unstyled">
       <li id="element2">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Présentation
          </strong>
         </summary>
         <ul>
          <li>
           Le titre du thème doit être une balise H1 unique.
          </li>
          <li>
           Il doit être la première composante de la page.
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       2 : Paragraphe d’introduction du thème
      </h3>
      <p>
       <span class="label label-danger">
        Obligatoire
       </span>
      </p>
      <p>
       Décrit les tâches principales (services et renseignements) et les sujets accessibles sur cette page
      </p>
      <ul class="list-unstyled">
       <li id="element3">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Contenu
          </strong>
         </summary>
         <ul>
          <li>
           Elle donne un aperçu de l’ensemble des tâches principales pouvant être accomplies sur un thème donné.
          </li>
          <li>
           Le texte doit être court et concis.
          </li>
          <li>
           Le contenu est rédigé pour un niveau de scolarité secondaire (pointage de 100 et moins dans
           <a href="http://www.scolarius.com/">
            Scolarius
           </a>
           ).
          </li>
         </ul>
        </details>
       </li>
       <li id="element4">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Présentation
          </strong>
         </summary>
         <ul>
          <li>
           Cette composante figure sous le titre du thème.
          </li>
          <li>
           Elle se trouve à la gauche du carrousel du thème.
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       3 : Carrousel du thème
      </h3>
      <p>
       <span class="label label-info">
        Facultative
       </span>
      </p>
      <p>
       Présente les tâches principales et les renseignements pertinents propres au thème en temps opportun
      </p>
      <ul class="list-unstyled">
       <li id="element5">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Contenu
          </strong>
         </summary>
         <ul>
          <li>
           Utilisez la configuration
           <a href="../configurations-conception-communes/carrousels.html">
            Carrousels
           </a>
           .
          </li>
         </ul>
        </details>
       </li>
       <li id="element6">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Présentation
          </strong>
         </summary>
         <ul>
          <li>
           Le carrousel du thème figure en haut de la page.
          </li>
          <li>
           Il se trouve à droite du paragraphe d’introduction du thème.
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       4 : Réseaux de médias sociaux du thème
      </h3>
      <p>
       <span class="label label-warning">
        Conditionnelle
       </span>
      </p>
      <p>
       Présente les réseaux de médias sociaux propres au thème
      </p>
      <ul class="list-unstyled">
       <li id="element7">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Contenu
          </strong>
         </summary>
         <ul>
          <li>
           Cette composante est obligatoire lorsqu’il y a un ou plusieurs réseaux de médias sociaux liés au thème qui existent.
          </li>
          <li>
           Utilisez la configuration
           <a href="../configurations-conception-communes/bloc-medias-sociaux.html">
            Bloc des réseaux de médias sociaux (fenêtre « Suivez »)
           </a>
           .
          </li>
         </ul>
        </details>
       </li>
       <li id="element8">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Présentation
          </strong>
         </summary>
         <ul>
          <li>
           Cette composante figure sous le paragraphe d’introduction du thème.
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       5 : Services et renseignements
      </h3>
      <p>
       <span class="label label-danger">
        Obligatoire
       </span>
      </p>
      <p>
       Présente les sujets propres au thème
      </p>
      <ul class="list-unstyled">
       <li id="element9">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Contenu
          </strong>
         </summary>
         <ul>
          <li>
           Utilisez la configuration
           <a href="../configurations-conception-communes/services-renseignements.html">
            Services et renseignements
           </a>
           .
          </li>
         </ul>
        </details>
       </li>
       <li id="element10">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Présentation
          </strong>
         </summary>
         <ul>
          <li>
           Cette composante figure sous les réseaux de médias sociaux propres au thème et à gauche de la section « En demande ».
          </li>
          <li>
           L’étiquette de l’en-tête est « Services et renseignements ».
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       6 : En demande
      </h3>
      <p>
       <span class="label label-danger">
        Obligatoire
       </span>
      </p>
      <p>
       Présente les services et renseignements les plus demandés propres au thème
      </p>
      <ul class="list-unstyled">
       <li id="element11">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Contenu
          </strong>
         </summary>
         <ul>
          <li>
           Utilisez la configuration
           <a href="../configurations-conception-communes/en-demande.html">
            En demande
           </a>
           .
          </li>
         </ul>
        </details>
       </li>
       <li id="element12">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Présentation
          </strong>
         </summary>
         <ul>
          <li>
           Cette composante se trouve à droite de « Services et renseignements ».
          </li>
          <li>
           L’étiquette de l’en-tête est « En demande ».
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       7 : Autres renseignements pour les
      </h3>
      <p>
       <span class="label label-warning">
        Conditionnelle
       </span>
      </p>
      <p>
       Liens menant à des renseignements intéressant les publics cibles à l’échelle du gouvernement
      </p>
      <ul class="list-unstyled">
       <li id="element13">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Contenu
          </strong>
         </summary>
         <ul>
          <li>
           Cette composante est obligatoire lorsqu’il y a une ou plusieurs pages de public cible à l’échelle du gouvernement ou de pages de sujets liées au thème qui existent.
          </li>
          <li>
           Utilisez la configuration
           <a href="../configurations-conception-communes/autres-renseignements.html">
            Autres renseignements pour les
           </a>
           .
          </li>
         </ul>
        </details>
       </li>
       <li id="element14">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Présentation
          </strong>
         </summary>
         <ul>
          <li>
           Cette composante se trouve sous la section « En demande ».
          </li>
          <li>
           L’étiquette de l’en-tête est « Autres renseignements pour les ».
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
     <section>
      <h3>
       8 : Section « En vedette » du thème
      </h3>
      <p>
       <span class="label label-danger">
        Obligatoire
       </span>
      </p>
      <p>
       Fait la promotion des activités en cours propres au thème, menées par les ministères et organismes à l’échelle du
       <abbr title="Gouvernement du Canada">
        GC
       </abbr>
      </p>
      <ul class="list-unstyled">
       <li id="element15">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Contenu
          </strong>
         </summary>
         <ul>
          <li>
           Utilisez la configuration
           <a href="../configurations-conception-communes/vignettes-promotionnelles.html">
            Promotions contextuelles
           </a>
           .
          </li>
         </ul>
        </details>
       </li>
       <li id="element16">
        <details class="mrgn-bttm-sm">
         <summary class="wb-toggle" data-toggle='{"print":"on"}'>
          <strong>
           Présentation
          </strong>
         </summary>
         <ul>
          <li>
           Cette composante se trouve en dessous de « Services et renseignements ».
          </li>
         </ul>
        </details>
       </li>
      </ul>
     </section>
    </section>
   </div>
  </div>
  <h2 id="exemples">
   Exemples concrets
  </h2>
  <ul>
   <li>
    <a href="http://wet-boew.github.io/themes-dist/GCWeb/theme-fr.html">
     Exemple concret en français
    </a>
    (sur GitHub)
   </li>
   <li>
    <a href="http://wet-boew.github.io/themes-dist/GCWeb/theme-en.html">
     Exemple concret en anglais
    </a>
    (sur GitHub)
   </li>
  </ul>
  <h2 id="navigation">
   Navigation de l’utilisateur
  </h2>
  <p>
   Le site Canada.ca s’articule autour de 15 thèmes fondés sur une analyse des tâches principales (renseignements et services les plus demandés) à l’échelle du gouvernement du Canada.
  </p>
  <p>
   S’ils mettent l’accent sur les tâches principales liées aux renseignements et à la prestation des services, les thèmes donnent également un aperçu des activités du gouvernement du Canada menées à bien pour contribuer à la prestation des programmes et services (par exemple, recherches, consultations, élaboration de politiques).
  </p>
  <figure class="mrgn-bttm-lg">
   <figcaption class="text-center">
    <b>
     Diagramme de la façon de naviguer
    </b>
   </figcaption>
   <img alt="Diagramme de la façon de naviguer vers les pages de thème dans le site Canada.ca. La version textuelle se trouve ci-dessous :" class="img-responsive center-block" src="https://www.canada.ca/content/dam/tbs-sct/images/government-communications/canada-content-style-guide/theme-pages-ia-fra.png"/>
   <details>
    <summary class="wb-toggle" data-toggle='{"print":"on"}'>
     Version textuelle
    </summary>
    <p>
     On peut accéder aux pages de thème à partir de la page d’accueil du site Canada.ca.
    </p>
   </details>
  </figure>
 </details>
</section>




<details>
 <summary>
  Directives pour la version stable de la page de sujet
 </summary>
 <div class="btn-group mrgn-bttm-sm">
  <button class="btn btn-default wb-toggle" data-toggle='{"selector": "details", "parent": "#template-elements", "type": "on"}' type="button">
   Développer tout
  </button>
  <button class="btn btn-default wb-toggle" data-toggle='{"selector": "details", "parent": "#template-elements", "type": "off"}' type="button">
   Réduire tout
  </button>
 </div>
 <div class="row">
  <div class="col-lg-6 pull-right">
   <figure class="mrgn-bttm-lg">
    <figcaption class="text-center">
     <b>
      Modèle de page de sujets
     </b>
    </figcaption>
    <img alt="Modèle de page de sujets indiquant les parties qui composent sa structure. Lire de haut en bas et de gauche à droite. Plus de détails au sujet de ce graphique se retrouvent dans le texte entourant l’image." class="full-width" src="https://www.canada.ca/content/dam/tbs-sct/images/government-communications/canada-content-style-guide/topic-page-fra-02.jpg"/>
   </figure>
  </div>
  <div class="col-lg-6 pull-left">
   <section id="template-elements">
    <section>
     <h3>
      1 : Titre du sujet
     </h3>
     <p>
      <span class="label label-danger">
       Obligatoire
      </span>
     </p>
     <p>
      Décrit le sujet et le contenu de la page
     </p>
     <ul class="list-unstyled">
      <li id="element1">
       <details class="mrgn-bttm-sm">
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>
         <strong>
          Présentation
         </strong>
        </summary>
        <ul>
         <li>
          Le titre du sujet doit être une balise H1 unique.
         </li>
         <li>
          Il doit être la première composante de la page.
         </li>
        </ul>
       </details>
      </li>
     </ul>
    </section>
    <section>
     <h3>
      2 : Paragraphe d’introduction sur le sujet
     </h3>
     <p>
      <span class="label label-danger">
       Obligatoire
      </span>
     </p>
     <p>
      Décrit la page de sujets actuelle
     </p>
     <ul class="list-unstyled">
      <li id="element2">
       <details class="mrgn-bttm-sm">
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>
         <strong>
          Contenu
         </strong>
        </summary>
        <ul>
         <li>
          Fournit un aperçu des tâches principales ou des sous-sujets auxquels on peut accéder à partir du sujet actuel
         </li>
         <li>
          Le texte doit être court et concis.
         </li>
         <li>
          Le contenu est rédigé pour un niveau de scolarité secondaire (pointage de 100 et moins dans
          <a href="http://www.scolarius.com/">
           Scolarius
          </a>
          ).
         </li>
        </ul>
       </details>
      </li>
      <li id="element3">
       <details class="mrgn-bttm-sm">
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>
         <strong>
          Présentation
         </strong>
        </summary>
        <ul>
         <li>
          Cette composante figure sous le titre du sujet.
         </li>
         <li>
          Elle se trouve à la gauche de l’image du sujet.
         </li>
        </ul>
       </details>
      </li>
     </ul>
    </section>
    <section>
     <h3>
      3 : Image du sujet
     </h3>
     <p>
      <span class="label label-info">
       Facultative
      </span>
     </p>
     <p>
      Appuie et renforce les messages clés fournis sur la page de sujet
     </p>
     <ul class="list-unstyled">
      <li id="element4">
       <details class="mrgn-bttm-sm">
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>
         <strong>
          Contenu
         </strong>
        </summary>
        <ul>
         <li>
          L’image doit correspondre aux messages clés se rapportant au sujet.
         </li>
         <li>
          L’image peut être affichée ailleurs sur le site.
         </li>
         <li>
          Les carrousels ne sont pas permis sur les pages de sujets.
         </li>
         <li>
          Utilisez la configuration
          <a href="../configurations-conception-communes/images.html">
           Images
          </a>
          .
         </li>
        </ul>
       </details>
      </li>
      <li id="element5">
       <details class="mrgn-bttm-sm">
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>
         <strong>
          Présentation
         </strong>
        </summary>
        <ul>
         <li>
          L’image du sujet figure en haut de la page.
         </li>
         <li>
          Elle se trouve à la droite du paragraphe d’introduction.
         </li>
         <li>
          L’image n’est pas assortie d’un hyperlien.
         </li>
         <li>
          Consultez la
          <a href="http://wet-boew.github.io/themes-dist/GCWeb/index-fr.html">
           page GitHub sur Canada.ca
          </a>
          pour obtenir des détails sur la taille des images.
         </li>
        </ul>
       </details>
      </li>
     </ul>
    </section>
    <section>
     <h3>
      4 : Réseaux de médias sociaux du sujet
     </h3>
     <p>
      <span class="label label-info">
       Facultative
      </span>
     </p>
     <p>
      Présente les réseaux de médias sociaux propres au sujet
     </p>
     <ul class="list-unstyled">
      <li id="element6">
       <details class="mrgn-bttm-sm">
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>
         <strong>
          Contenu
         </strong>
        </summary>
        <ul>
         <li>
          Utilisez la configuration
          <a href="../configurations-conception-communes/bloc-medias-sociaux.html">
           Bloc des réseaux de médias sociaux (fenêtre « Suivez »)
          </a>
          .
         </li>
        </ul>
       </details>
      </li>
      <li id="element7">
       <details class="mrgn-bttm-sm">
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>
         <strong>
          Présentation
         </strong>
        </summary>
        <ul>
         <li>
          Cette composante se trouve sous le paragraphe d’introduction du sujet.
         </li>
        </ul>
       </details>
      </li>
     </ul>
    </section>
    <section>
     <h3>
      5 : Services et renseignements
     </h3>
     <p>
      <span class="label label-danger">
       Obligatoire
      </span>
     </p>
     <p>
      Énumère les sous-sujets et le contenu de destination liés au sujet actuel
     </p>
     <ul class="list-unstyled">
      <li id="element8">
       <details class="mrgn-bttm-sm">
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>
         <strong>
          Contenu
         </strong>
        </summary>
        <ul>
         <li>
          Utilisez la configuration
          <a href="../configurations-conception-communes/services-renseignements.html">
           Services et renseignements
          </a>
          .
         </li>
        </ul>
       </details>
      </li>
      <li id="element9">
       <details class="mrgn-bttm-sm">
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>
         <strong>
          Présentation
         </strong>
        </summary>
        <ul>
         <li>
          Cette composante se trouve sous les réseaux de médias sociaux liées au sujet et à gauche de « En demande ».
         </li>
        </ul>
       </details>
      </li>
     </ul>
    </section>
    <section>
     <h3>
      6 : En demande
     </h3>
     <p>
      <span class="label label-danger">
       Obligatoire
      </span>
      sur les pages de thème et les pages de sujet du premier niveau
     </p>
     <p>
      Comprend des tâches principales pour le sujet actuel
     </p>
     <ul class="list-unstyled">
      <li id="element10">
       <details class="mrgn-bttm-sm">
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>
         <strong>
          Contenu
         </strong>
        </summary>
        <ul>
         <li>
          Utilisez la configuration
          <a href="../configurations-conception-communes/en-demande.html">
           En demande
          </a>
          .
         </li>
        </ul>
       </details>
      </li>
      <li id="element11">
       <details class="mrgn-bttm-sm">
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>
         <strong>
          Présentation
         </strong>
        </summary>
        <ul>
         <li>
          Cette composante se trouve à droite de « Services et renseignements ».
         </li>
        </ul>
       </details>
      </li>
     </ul>
    </section>
    <section>
     <h3>
      7 : Collaborateurs
     </h3>
     <p>
      <span class="label label-danger">
       Obligatoire
      </span>
     </p>
     <p>
      Liens menant aux institutions qui soutiennent le sujet
     </p>
     <ul class="list-unstyled">
      <li id="element12">
       <details class="mrgn-bttm-sm">
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>
         <strong>
          Contenu
         </strong>
        </summary>
        <ul>
         <li>
          Utilisez la configuration
          <a href="../configurations-conception-communes/collaborateurs.html">
           Collaborateurs
          </a>
          .
         </li>
        </ul>
       </details>
      </li>
      <li id="element13">
       <details class="mrgn-bttm-sm">
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>
         <strong>
          Présentation
         </strong>
        </summary>
        <ul>
         <li>
          Cette composante se trouve sous la section « En demande ».
         </li>
        </ul>
       </details>
      </li>
     </ul>
    </section>
    <section>
     <h3>
      8 : Autres renseignements pour les
     </h3>
     <p>
      <span class="label label-warning">
       Conditionnelle
      </span>
     </p>
     <p>
      Fournit des liens aux renseignements destinés au public à l’échelle du gouvernement
     </p>
     <ul class="list-unstyled">
      <li id="element14">
       <details class="mrgn-bttm-sm">
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>
         <strong>
          Contenu
         </strong>
        </summary>
        <ul>
         <li>
          Ce composant est obligatoire lorsqu’il y un ou plusieurs [sujets] liés aux pages destinées aux publics à l’échelle du gouvernement.
         </li>
         <li>
          Utilisez la configuration
          <a href="../configurations-conception-communes/autres-renseignements.html">
           Autres renseignements pour les
          </a>
          .
         </li>
        </ul>
       </details>
      </li>
      <li id="element15">
       <details class="mrgn-bttm-sm">
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>
         <strong>
          Présentation
         </strong>
        </summary>
        <ul>
         <li>
          Cette composante figure sous la section « Collaborateurs ».
         </li>
        </ul>
       </details>
      </li>
     </ul>
    </section>
    <section>
     <h3>
      9 : Ce que nous faisons
     </h3>
     <p>
      <span class="label label-warning">
       Conditionnelle
      </span>
     </p>
     <p>
      Fournit des liens vers le contenu relatif à l’élaboration de politiques et programmes qui est le plus pertinent pour le sujet actuel
     </p>
     <ul class="list-unstyled">
      <li id="element16">
       <details class="mrgn-bttm-sm">
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>
         <strong>
          Contenu
         </strong>
        </summary>
        <ul>
         <li>
          Cette composante est obligatoire lorsqu’il existe un contenu relatif à l’élaboration de politiques et programmes liés au sujet actuel.
         </li>
         <li>
          Utilisez la configuration
          <a href="../configurations-conception-communes/ce-que-nous-faisons.html">
           Ce que nous faisons
          </a>
          .
         </li>
        </ul>
       </details>
      </li>
      <li id="element17">
       <details class="mrgn-bttm-sm">
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>
         <strong>
          Présentation
         </strong>
        </summary>
        <ul>
         <li>
          Cette composante se trouve sous les sections « Services et renseignements » et « En demande ».
         </li>
        </ul>
       </details>
      </li>
     </ul>
    </section>
    <section>
     <h3>
      10 : Section « En vedette » du sujet
     </h3>
     <p>
      <span class="label label-info">
       Facultative
      </span>
     </p>
     <p>
      Fait la promotion des activités actuelles menées par les ministères et les organismes dans l’ensemble du
      <abbr title="Gouvernement du Canada">
       GC
      </abbr>
      qui sont liées au sujet actuel
     </p>
     <ul class="list-unstyled">
      <li id="element18">
       <details class="mrgn-bttm-sm">
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>
         <strong>
          Contenu
         </strong>
        </summary>
        <ul>
         <li>
          Utilisez la configuration
          <a href="../configurations-conception-communes/vignettes-promotionnelles.html">
           Promotions contextuelles
          </a>
          .
         </li>
        </ul>
       </details>
      </li>
      <li id="element19">
       <details class="mrgn-bttm-sm">
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>
         <strong>
          Présentation
         </strong>
        </summary>
        <ul>
         <li>
          Cette composante se trouve en dessous de « Ce que nous faisons ».
         </li>
        </ul>
       </details>
      </li>
     </ul>
    </section>
   </section>
  </div>
 </div>
 <h2 id="exemples">
  Exemples concrets
 </h2>
 <ul>
  <li>
   <a href="http://wet-boew.github.io/themes-dist/GCWeb/topic-fr.html">
    Exemple concret en français
   </a>
   (sur GitHub)
  </li>
  <li>
   <a href="http://wet-boew.github.io/themes-dist/GCWeb/topic-en.html">
    Exemple concret en anglais
   </a>
   (sur GitHub)
  </li>
 </ul>
 <h2 id="navigation">
  Navigation de l’utilisateur
 </h2>
 <p>
  Chacun des 15 thèmes consiste en un certain nombre de sujets qui traitent de toute la gamme de renseignements et de services ayant trait à ce thème qui sont offerts à l’échelle du gouvernement.
 </p>
 <p>
  Une page de sujet comprend :
 </p>
 <ul>
  <li>
   des liens menant aux renseignements et services les plus demandés ainsi que vers les politiques, les lois et règlements, les publications, les formulaires, les nouvelles, les consultations et les initiatives les plus pertinents;
  </li>
  <li>
   des liens d’entrée menant aux sujets secondaires connexes ainsi que des renvois croisés vers d’autres thèmes;
  </li>
  <li>
   des liens menant aux pages destinées aux publics cibles, le cas échéant.
  </li>
 </ul>
 <p>
  Le modèle pour les pages de sujet inclut un certain nombre de composantes obligatoires et facultatives afin de pouvoir s’adapter à la multitude de domaines possibles liés aux sujets se rapportant au
  <abbr title="Gouvernement du Canada">
   GC
  </abbr>
  .
 </p>
 <figure class="mrgn-bttm-lg">
  <figcaption class="text-center">
   <b>
    Diagramme de la façon de naviguer
   </b>
  </figcaption>
  <img alt="Diagramme de la façon de naviguer vers les pages de sujets dans le site Canada.ca. La version textuelle se trouve ci-dessous :" class="img-responsive center-block" src="https://www.canada.ca/content/dam/tbs-sct/images/government-communications/canada-content-style-guide/topic-pages-ia-fra.png"/>
  <details>
   <summary class="wb-toggle" data-toggle='{"print":"on"}'>
    Version textuelle
   </summary>
   <p>
    Navigation vers une page de sujets suit un des deux chemins :
   </p>
   <ul>
    <li>
     De la page d’accueil à une page thématique à une page de sujets
    </li>
    <li>
     De la page d’accueil à la page des ministères et organismes, à un profil institutionnel, à une page de sujets.
    </li>
   </ul>
  </details>
 </figure>
</details>


<section>
 <h2 id="recherche">
  Recherche
 </h2>
 <p>
  Nous avons testé avec succès la version bêta de la page de thème et de sujet durant un projet d'optimisation mené de concert avec Services publics et Approvisionnement Canada (résumé de recherche à venir).
 </p>
</section>

<section>
 <h2 id="changements">
  Derniers changements
 </h2>
 <p>
  <strong>
   2020-07-10 :
  </strong>
 </p>
 <ul>
  <li>
   Modifications à la disposition des colonnes de la section Services et renseignements pour les tabelettes
  </li>
  <li>
   Clarification des directives pour les comptes de médias sociaux
  </li>
 </ul>
 <p>
  <strong>
   2020-06-30 :
  </strong>
  une nouvelle version bêta de ce modèle a été ajoutée.
 </p>
</section>
