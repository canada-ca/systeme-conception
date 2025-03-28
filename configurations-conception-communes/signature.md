---
altLangPage: "https://design.canada.ca/common-design-patterns/signature.html"
date: 2017-10-05
dateModified: 2025-03-28
description: "Orientation sur l’utilisation de la signature du gouvernement du Canada sur Canada.ca. La signature est un symbole officiel du gouvernement du Canada. Elle s’affiche toujours dans l’en-tête général sur Canada.ca."
title: "Signature du gouvernement du Canada"
---
<div class="row">
  <div class="col-md-12 pull-left">
    <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only">
      <li class="mrgn-rght-lg">Dernière mise à jour&nbsp;:  {{ page.dateModified }}</li>
    </ul>
  </div>
</div>
<p><span class="label label-danger">Obligatoire sur toutes les pages</span></p>
<p>La signature du gouvernement du Canada est un élément obligatoire de l’en-tête général. Elle est un symbole officiel du gouvernement du Canada et combine le symbole du drapeau et &laquo;&nbsp;Gouvernement du Canada&nbsp;&raquo; dans les deux langues officielles.</p>
<p>La signature du gouvernement du Canada aide les utilisateurs à réaliser que la page sur laquelle ils se trouvent appartient au gouvernement du Canada.</p>
<div class="pattern-demo mrgn-tp-lg">
  <figure class="mrgn-bttm-sm"><img src="../images/01-sig-fr.png" class="img-responsive" alt=""></figure>
</div>

<section>
  <h2>Sur cette page</h2>
  <ul>
    <li><a href="#quand">Quand l’utiliser</a></li>
    <li><a href="#eviter">Quoi éviter</a></li>
    <li><a href="#contenu">Contenu et conception</a></li>
    <li><a href="#implementation">Comment procéder à la mise en œuvre</a></li>
    <li><a href="#recherche">Recherche et justification</a></li>
    <li><a href="#changements">Derniers changements</a></li>
  </ul>
</section>

<h2 id="quand">Quand l’utiliser</h2>
<p>La signature du gouvernement du Canada est obligatoire sur toutes les pages.</p>

<h2 id="eviter">Quoi éviter</h2>
<p>Ne modifiez pas la signature.</p>
<p>Ne changez pas la couleur du drapeau. Il doit être en couleur (rouge) et non en noir et blanc.</p>
<p>Ne modifiez pas le texte (Government of Canada Gouvernement du Canada) ou la police.</p>

<h2 id="contenu">Contenu et conception</h2>
<p>Trouver des exemples visuels ainsi que des spécifications du contenu et de conception.</p>

<h3>Spécifications du contenu</h3>
<p>La signature du gouvernement du Canada se trouve dans le coin supérieur gauche de la page.</p>
<p>La signature est composée du symbole du drapeau en rouge du Programme fédéral de l’image de marque (PFIM), suivi des termes &laquo;&nbsp;Gouvernement du Canada&nbsp;&raquo; en français et &laquo;&nbsp;Government of Canada&nbsp;&raquo; en anglais, les deux étant écrits en noir.</p>
<p>La signature doit, en premier lieu, être affichée en anglais sur les pages anglaises et en français sur les pages françaises.</p>

<h4>Accessibilité</h4>
<p>Ajoutez &laquo;&nbsp;Government of Canada&nbsp;&raquo; en guise de texte de remplacement sur les pages anglaises et &laquo;&nbsp;Gouvernement du Canada&nbsp;&raquo; en guise de texte de remplacement sur les pages françaises.</p>

<h4>Interactions</h4>
<p>Lorsque l’utilisateur sélectionne la signature, cela lui permet d’accéder à la page d’accueil de Canada.ca.</p>

<h3>Spécifications de conception</h3>
<ul>
  <li>Type&nbsp;: image</li>
  <li>Position&nbsp;: en haut à gauche</li>
  <li>Couleur du symbole du drapeau&nbsp;: rouge du PFIM (#eb2d37)</li>
  <li>Couleur du texte&nbsp;: noir (#000000)</li>
  <li>Texte de remplacement&nbsp;: Gouvernement du Canada</li>
</ul>
<p>La signature est un fichier SVG (graphique vectoriel adaptable), configuré pour s’adapter automatiquement à la taille de l’écran. </p>
<p>La signature est un fichier image qui doit être formaté conformément à la <a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/communications-gouvernementales/norme-graphique.html)">Norme graphique du Programme fédéral de l’image de marque</a>.</p>

<h3>Exemples visuels</h3>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Signature du gouvernement du Canada - grand écran</b></figcaption>
    <img src="../images/01-sig-fr.png" class="img-responsive" alt="">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l’image&nbsp;: Signature du gouvernement du Canada - grand écran</summary>
      <p class="mrgn-tp-lg">La signature du gouvernement du Canada se trouve dans le coin supérieur gauche du site Web. Elle est composée du symbole du drapeau en rouge, suivi des termes &laquo;&nbsp;<strong>Government of Canada</strong>&nbsp;&raquo; en anglais et &laquo;&nbsp;<strong>Gouvernement du Canada</strong>&nbsp;&raquo; en français, les deux étant écrits en noir.</p>
    </details>
  </figure>
</div>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Signature du gouvernement du Canada - petit écran</b></figcaption>
    <img src="../images/01-sig-sm-fr.png" class="img-responsive" alt="">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l’image&nbsp;: Signature du gouvernement du Canada - petit écran</summary>
      <p class="mrgn-tp-lg">La signature du gouvernement du Canada se trouve dans le coin supérieur gauche de la page. Elle est composée du symbole du drapeau en rouge, suivi des termes &laquo;&nbsp;<strong>Government of Canada</strong>&nbsp;&raquo; en anglais et &laquo;&nbsp;<strong>Gouvernement du Canada</strong>&nbsp;&raquo; en français, les deux étant écrits en noir.</p>
    </details>
  </figure>
</div>

<h2 id="implementation">Comment procéder à la mise en œuvre</h2>
<p>Trouver des exemples concrets de mise en œuvre de la signature du gouvernement du Canada, un élément de l’en-tête général.</p>

<h3>Référence pour la mise en oeuvre du thème GCWeb (BOEW)</h3>
<p>La référence pour l’implémentation explique la façon de configurer chaque élément de l’en-tête.</p>
<ul>
  <li><a href="https://wet-boew.github.io/GCWeb/sites/header/header-docs-fr.html">Documentation relative à l’en-tête GCWeb (WET)</a></li>
</ul>

<h3>Mises en oeuvre</h3>
<p>Déterminez ce qui convient le mieux au type de page que vous créez.</p>
<div class="row">
  <div class="col-md-8">
    <div class="wb-tabs mrgn-tp-lg">
      <div class="tabpanels">
        <details id="004" open="open">
          <summary><strong>AEM du GC</strong></summary>
          <p class="mrgn-tp-lg">Pour l’Adobe Experience Manager (AEM) du gouvernement du Canada&nbsp;:</p>
          <ul>
            <li><a href="https://www.gcpedia.gc.ca/wiki/Documentation_d%27AEM_sp%C3%A9cifique_au_GC_6.5">Documentation d’AEM/Service Web géré (lien GCPédia - accessible uniquement sur le réseau du gouvernement du Canada)</a></li>
          </ul>
        </details>
        <details id="0041" open="open">
          <summary><strong>Système de design GC</strong></summary>
          <p class="mrgn-tp-lg">Pour le Système de design GC&nbsp;:</p>
          <ul>
            <li><a href="https://systeme-design.alpha.canada.ca/fr/composants/signature/">Conseils pour le composant de signature</a></li>
          </ul>
        </details>
        <details id="005">
          <summary><strong>SGDC</strong></summary>
          <p class="mrgn-tp-lg">Pour la solution de gabarits à déploiement centralisé (SGDC)&nbsp;:</p>
          <ul>
            <li><a href="https://cenw-wscoe.github.io/sgdc-cdts/docs/index-fr.html">Documentation de la SGDC</a></li>
          </ul>
        </details>
        <details id="006">
          <summary><strong>Drupal</strong></summary>
          <p class="mrgn-tp-lg">Pour Drupal&nbsp;:</p>
          <ul>
            <li><a href="https://drupalwxt.github.io/">Documentation de Drupal WxT (en anglais seulement)</a></li>
            <li><a href="https://www.drupal.org/project/gcds">Drupal : Système de design GC (en anglais seulement)</a></li>
          </ul>
        </details>
      </div>
    </div>
  </div>
</div>

<h2 id="recherche">Recherche et justification</h2>
<p>Consultez les conclusions des recherches et la justification de la politique.</p>

<h3>Constatations découlant des recherches</h3>
<p>La confiance et la cohérence sont essentielles. Notre étude sur la confiance du Canada.ca et des recherches antérieures montrent qu’un en-tête cohérent est nécessaire pour maintenir une marque de confiance.</p>
<p>Par exemple, les gens font davantage confiance à la page lorsque le symbole du drapeau dans la signature du gouvernement du Canada est rouge.</p>
<p>Si vous souhaitez en savoir plus au sujet de cette recherche, communiquez avec le Bureau de la transformation numérique à <a href="mailto:{{ site.emails.dto }}">{{ site.emails.dto }}</a>.</p>

<h3>Justification stratégique</h3>
<p>La signature du gouvernement du Canada est définie par le Programme fédéral de l’image de marque. En tant que partie de l’en-tête général, il s’agit d’un élément obligatoire de la <cite>spécification du contenu et de l’architecture de l’information.</cite></p>
<ul>
  <li><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/communications-gouvernementales/norme-graphique/couleurs-norme-graphique-pfim.html">Norme graphique du Programme fédéral de l’image de marque</a></li>
  <li><a href="https://conception.canada.ca/specifications/elements-obligatoires.html">Éléments obligatoires du système de conception</a></li>
</ul>

<h2 id="changements">Derniers changements</h2>
<dl class="dl-horizontal">
  <dt>
    <time>2023-06-26</time>
  </dt>
  <dd>Mise à jour de l'orientation pour y inclure des conseils sur ce qui est à éviter, la précision que le drapeau doit être en couleur, les spécifications en matière de contenu et de conception, des exemples visuels, une orientation sur la mise en œuvre, les conclusions des recherches et la justification stratégique</dd>
</dl>
