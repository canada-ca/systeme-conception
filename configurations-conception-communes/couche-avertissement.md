---
altLangPage: https://design.canada.ca/common-design-patterns/disclaimer-overlay.html
date: null
dateModified: '2018-12-19'
description: null
title: "Avertissement superposé - Configuration de conception de Canada.ca"
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
  Le motif d’avertissement superposé garantit que les conditions d’utilisation, les déclarations de confidentialité et les formulaires similaires d’avertissement sont disponibles au besoin, mais n’empêche pas l’accès au contenu principal de la page. Elle comprend un lien déclencheur qui active une fenêtre qu’on peut ignorer lorsque le texte d’avertissement s’affiche.
 </p>
 <section>
  <h2>
   Quand utiliser cette configuration
  </h2>
  <ul>
   <li>
    Utilisez la fenêtre superposée lorsque des énoncés d’avertissement (déclarations de confidentialité, conditions d’utilisation, entre autres) sont nécessaires, pour éviter de fournir des liens vers l’extérieur de la page en cours.
   </li>
   <li>
    Ne l’utilisez jamais pour un contenu qui est essentiel pour achever la tâche principale de la page.
   </li>
  </ul>
 </section>
 <section>
  <h2>
   Comment utiliser cette configuration
  </h2>
  <ul>
   <li>
    Étiquetez le lien déclencheur avec « Avis », « Déclaration de confidentialité », ou autre.
   </li>
   <li>
    Une fois déclenchée, la fenêtre affiche le contenu d’avertissement dans une fenêtre secondaire (dialogue modal).
   </li>
   <li>
    Les fenêtres d’avertissement doivent comprendre une seule action, qui est de fermer la fenêtre – cette action est activée par un « X » sur lequel on peut cliquer dans le coin supérieur droit et un bouton étiqueté « Fermer » en bas de la fenêtre.
   </li>
   <li>
    La fermeture de la fenêtre retourne la personne à la page contenant le lien qui a été utilisé pour l’activer.
   </li>
   <li>
    Jusqu’à la fermeture de la fenêtre d’avertissement, la fenêtre sous la fenêtre d’avertissement est inerte; les personnes ne peuvent pas interagir avec le contenu à l’extérieur de la fenêtre d’avertissement (pour éviter des problèmes d’interprétation du contenu affiché avec la technologie d’assistance).
   </li>
   <li>
    Utilisez seulement le
    <a href="http://wet-boew.github.io/wet-boew/demos/overlay/overlay-fr.html">
     contenu superposé centré (Lightbox) de la
     <abbr title="Boîte à outils de l’expérience Web">
      BOEW
     </abbr>
    </a>
    pour ce modèle.
   </li>
  </ul>
 </section>
 <section>
  <h2>
   Exemple concret
  </h2>
  <ul>
   <li>
    <a href="http://wet-boew.github.io/themes-dist/GCWeb/demos/lightbox/lightbox-fr.html">
     BOEW : Lightbox
    </a>
   </li>
  </ul>
 </section>
 <section class="panel panel-primary">
  <header class="panel-heading">
   <h3 class="panel-title">
    Exemple
   </h3>
  </header>
  <div class="panel-body">
   <figure class="mrgn-bttm-sm">
    <figcaption class="text-center">
     <b>
      Graphique 13. Modèle d’avertissement superposé
     </b>
    </figcaption>
    <img alt="Capture d’écran illustrant le contenu superposé centré de la Boîte à outils de l’expérience Web (BOEW), utilisé pour afficher des avertissements et des renseignements juridiques sur le site Canada.ca. Plus de détails au sujet de ce graphique se retrouvent dans le texte entourant l’image." class="img-responsive center-block" src="https://www.canada.ca/content/dam/tbs-sct/images/government-communications/canada-content-style-guide/disclaimer-overlay-pattern-fra.jpg"/>
   </figure>
  </div>
 </section>
</section>




