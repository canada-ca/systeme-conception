---
altLangPage: https://design.canada.ca/common-design-patterns/date-modified.html
date: null
dateModified: '2022-11-30'
description: null
section-title: Configuration de conception de Canada.ca
title: Date de modification
---


<p class="gc-byline">
 <strong>
  De :
  <a href="https://www.canada.ca/fr/secretariat-conseil-tresor.html">
   Secrétariat du
					Conseil du Trésor du Canada
  </a>
 </strong>
</p>

<div class="gc-stp-stp">
 <div class="row">
  <ul class="toc lst-spcd col-md-12">
   <li class="col-md-4 col-sm-6">
    <a class="list-group-item" href="pied-page-contenu.html">
     Pied de page de la zone du contenu
    </a>
   </li>
   <li class="col-md-4 col-sm-6">
    <a class="list-group-item" href="signaler-probleme.html">
     Signaler un
					problème sur cette page
    </a>
   </li>
   <li class="col-md-4 col-sm-6">
    <a class="list-group-item" href="partagez-page.html">
     Partagez cette page
    </a>
   </li>
   <li class="col-md-4 col-sm-6">
    <a class="list-group-item active">
     Date de
					modification
    </a>
   </li>
  </ul>
 </div>
</div>

<section>
 <p>
  <span class="label label-danger">
   Obligatoire sur toutes les pages
  </span>
 </p>
 <p>
  La composante de date de modification indique la date de la dernière mise à jour d'une page Web.
 </p>
 <figure>
  <figcaption>
   <b>
    Date de modification
   </b>
  </figcaption>
  <img alt="Capture d'écran d'une page Web: le bouton intitulé «Signaler un problème sur cette page» apparaît à gauche. «Partager cette page» apparaît à droite, et «Date de modification : 2017-12-05» apparaît en surbrillance en-dessous." src="../images/datemod-fr.png"/>
 </figure>
</section>

<section>
 <h2>
  Objectifs
 </h2>
 <p>
  Utilisez la composante « Date de modification » pour fournir à aux gens la date où le contenu a été
				mis à jour en dernier.
 </p>
</section>

<section>
 <h2>
  Quand utiliser la date de modification
 </h2>
 <p>
  La date de modification est obligatoire sur toutes les pages. Dans les applications, elle peut être remplacée
				par une numéro de version. Pour en savoir plus, allez à
  <a href="{{ site.url }}/architecture/elements-obligatoires.html#entete-piedpage">
   Éléments
					obligatoires du système de conception
  </a>
  .
 </p>
</section>

<section>
 <h2>
  Quand mettre à jour la date de modification
 </h2>
 <p>
  Cette composante :
 </p>
 <ul>
  <li>
   ne devrait généralement être mise à jour que lorsque d’importants changements au contenu se produisent;
  </li>
  <li>
   ne devrait généralement pas être mise à jour lors de corrections aux erreurs typographiques ou de
					changements au code HTML sous-jacent;
  </li>
  <li>
   peut être mise à jour manuellement pour signifier que le contenu a été entièrement revu et qu’il est encore
					valide à cette date.
  </li>
 </ul>
 <p>
  Dans les scénarios transactionnels, il est possible de remplacer la composante par un « Numéro de
				version », au besoin;
 </p>
</section>

<section>
 <h2>
  Comment mettre en œuvre la date de modification
 </h2>
 <ul>
  <li>
   Cette composante commence toujours par les mots « Date de modification : » suivis d’une date.
  </li>
  <li>
   La date s’affiche à l’aide de la méthode numérique commune, c’est-à-dire 2016-10-04.
  </li>
  <li>
   Placement : alignée à gauche, sous le contenu général. Si elle est utilisée conjointement avec la
					composante, « Signaler un problème sur cette page », elle est placée sous le bouton qui sert à
					signaler un problème.
  </li>
 </ul>
</section>




