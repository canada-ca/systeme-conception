---
altLangPage: https://design.canada.ca/common-design-patterns/share-page.html
date: null
dateModified: '2018-12-19'
description: null
section-title: "Configuration de conception de Canada.ca"
title: Partagez cette page
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
    <a class="list-group-item active">
     Partagez cette page
    </a>
   </li>
   <li class="col-md-4 col-sm-6">
    <a class="list-group-item" href="date-modification.html">
     Date de
							modification
    </a>
   </li>
  </ul>
 </div>
</div>

<p>
 La composante « Partagez cette page » est destinée à permettre aux gens de partager le contenu de la
			page à d’autres personnes.
</p>

<section>
 <h2>
  Objectifs
 </h2>
 <p>
  La composante « Partagez cette page » permet aux gens de partager la page Web actuelle à l’aide de
				plates-formes de partage et de services de livraison.
 </p>
</section>

<section>
 <h2>
  Quand utiliser la configuration « Partagez cette page »
 </h2>
 <p>
  La configuration « Partagez cette page » est facultative sur toutes les pages. Pour en savoir plus,
				allez à
  <a href="{{ site.url }}/architecture/elements-obligatoires.html#entete-piedpage">
   Éléments
					obligatoires du système de conception
  </a>
  .
 </p>
</section>

<section>
 <h2>
  Comment mettre en œuvre « Partagez cette page »
 </h2>
 <ul>
  <li>
   La composante est présentée comme un bouton à l’aide du style de la
   <abbr title="Boîte à outil de l'expérience Web">
    BOEW
   </abbr>
   pour les actions secondaires.
  </li>
  <li>
   L’étiquette indique : « Partagez cette page », précédée par l’icône de partage dans
					l’ensemble d’icônes défini inclus dans la
   <abbr title="Boîte à outil de l'expérience Web">
    BOEW
   </abbr>
   .
  </li>
  <li>
   Placement : cette composante est située sous le contenu principal, alignée à droite.
  </li>
  <li>
   Lorsqu’on clique dessus, une fenêtre révocable s’ouvre.
   <ul>
    <li>
     La fenêtre est intitulée « Partagez cette page » et comprend des boutons pour une sélection
							des plates-formes de partage et des services de livraison, et le message « Aucun appui n’est accordé,
							soit de façon expresse ou tacite, à aucun produit ou service ».
    </li>
    <li>
     Dans de grands écrans, les boutons s’affichent en deux colonnes.
    </li>
    <li>
     Dans de petits écrans, la personne voit une seule colonne de boutons.
    </li>
   </ul>
  </li>
  <li>
   Dans la fenêtre, le bouton de chaque plate-forme de partage ou service de livraison utilise le style de
   <abbr title="Boîte à outil de l'expérience Web">
    BOEW
   </abbr>
   pour les actions secondaires.
  </li>
  <li>
   L’étiquette pour chaque bouton dans la fenêtre comprend le nom de la plate-forme de partage ou du service de
					livraison, précédé par une icône ou un logo pertinent.
  </li>
  <li>
   Lorsqu’on clique dessus, chaque bouton de la fenêtre déclenche un lien vers cette plate-forme ou ce service,
					y compris les paramètres appropriés, comme l’URL ou le titre de la page partagée.
   <ul>
    <li>
     Ces liens s’ouvrent dans de nouveaux onglets du navigateur ou de nouvelles fenêtres, dans la mesure du
							possible.
    </li>
   </ul>
  </li>
 </ul>
 <figure class="mrgn-bttm-lg">
  <figcaption>
   <b>
    Fenêtre « Partagez cette page » (version grand écran)
   </b>
  </figcaption>
  <img alt="Diagramme de la fenêtre « Partagez cette page » pour les grands écrans. La version textuelle se trouve ci-dessous :" class="img-responsive center-block" src="https://www.canada.ca/content/dam/tbs-sct/images/government-communications/canada-content-style-guide/share-this-page-overlay-fra.jpg"/>
  <details>
   <summary class="wb-toggle" data-toggle='{"print":"on"}'>
    Version textuelle
   </summary>
   <p>
    Cet exemple de grand écran de « Partagez cette page » contient des liens vers diverses
						plates-formes de médias sociaux qui sont organisés en 2 colonnes.
   </p>
  </details>
 </figure>
 <figure class="mrgn-bttm-lg">
  <figcaption>
   <b>
    Fenêtre « Partagez cette page » (version petit écran)
   </b>
  </figcaption>
  <img alt="Diagramme de la fenêtre « Partagez cette page » pour les petits écrans. La version textuelle se trouve ci-dessous :" class="img-responsive" src="https://www.canada.ca/content/dam/tbs-sct/images/government-communications/canada-content-style-guide/share-this-page-overlay-small-screen-fra.jpg"/>
  <details>
   <summary class="wb-toggle" data-toggle='{"print":"on"}'>
    Version textuelle
   </summary>
   <p>
    Cet exemple de grand écran de « Partagez cette page » contient des liens vers diverses
						plates-formes de médias sociaux qui sont organisés en une seule colonne.
   </p>
  </details>
 </figure>
</section>





