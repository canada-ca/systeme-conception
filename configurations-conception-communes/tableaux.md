---
altLangPage: https://design.canada.ca/common-design-patterns/tables.html
date: '2021-05-21'
dateModified: '2025-07-25'
description: null
script: ../js/plugins/gc-responsive-preview.js
title: Tableaux
---
<div class="row">
 <div class="col-md-12 pull-left">
	<ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only" style="line-height:1.65em">
	 <li class="mrgn-rght-lg">Dernière modification : {{ page.dateModified }}</li>
	</ul>
 </div>
</div>

<p>Les tableaux de données vous permettent de communiquer des données de façon efficace à l’aide de rangées et de colonnes.</p>

<section>
 <h2>Sur cette page</h2>
 <ul>
	<li><a href="#quand">Quand utiliser cette configuration</a></li>
	<li><a href="#eviter">Quoi éviter</a></li>
	<li><a href="#comment">Comment mettre en oeuvre</a></li>
	<li><a href="#recherche">Recherche et blogue</a></li>
	<li><a href="#derniers">Derniers changements</a></li>
 </ul>
</section>

<section>
 <h2 id="quand">Quand utiliser cette configuration</h2>
 <ul>
	<li>Servez-vous de tableaux pour présenter des données de façon visuelle.</li>
	<li>Utilisez des tableaux pour organiser des informations connexes, telles que des coordonnées.</li>
	<li><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/communications-gouvernementales/guide-redaction-contenu-canada.html#wp5-3">Utiliser des tableaux pour organiser des données</a> <cite>(Guide de rédaction du contenu du site Canada.ca)</cite>.</li>
 </ul>
</section>

<section>
 <h2 id="eviter">Quoi éviter</h2>
 <ul>
	<li>N’utilisez pas les tableaux de données pour forcer la disposition du texte.</li>
	<li>Ne présentez jamais un tableau de données sous forme d’image.</li>
	<li><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/communications-gouvernementales/guide-redaction-contenu-canada.html#wp5-3-3">Éviter les cellules texturées ou colorées</a> <cite>(Guide de rédaction du contenu du site Canada.ca)</cite>.</li>
	<li><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/communications-gouvernementales/guide-redaction-contenu-canada.html#wp5-3-4">Éviter les cellules vides</a> <cite>(Guide de rédaction du contenu du site Canada.ca)</cite>.</li>
 </ul>
</section>

<section>
  <h2 id="comment">Comment mettre en oeuvre</h2>
  <p>Vous pouvez utiliser soit la version
    <strong>Bêta</strong>, soit la version
    <strong>stable</strong> de cette configuration de conception. Les tableaux Bêta utilisent du CSS provisoire pour rendre les tableaux adaptatifs sur les petits écrans.</p>
  <p>La version Bêta remplacera éventuellement la version stable.</p>
  <details>
    <summary>Tableaux de données Bêta (adaptatifs)</summary>
    <p>Les tableaux adaptatifs Bêta sont&nbsp;:</p>
    <ul>
    <li>supportés uniquement pour les tableaux simples qui n'ont pas de colonnes ou de rangées combinées</li>
    <li>non pris en charge par IE 11</li>
    </ul>
    <p>Les tableaux adaptatifs créent des cartes pour les vues d'appareil mobile et de petite tablette.</p>
    <p>Comme il s'agit encore d'une version bêta, assurez-vous de tester vos tableaux dans différentes grandeur d'écran, surtout si vous ajoutez beaucoup de personnalisation.</p>
    <div class="pattern-demo pattern-demo-component">
    <div class="component-demo example-frame-bkg" id="basic-demo">
      <div class="layout-demo example-frame-bkg" id="unfiltered-layout">
        <h3 class="h4 hidden-xs hidden-sm">Grandeur d'écran:</h3>
        <div class="btn-group hidden-xs hidden-sm">
          <button class="btn btn-default" id="resize-div-mobile">
            <span class="fas fa-mobile-alt"></span>
            <strong>Petit</strong>
          </button>
          <button class="btn btn-default" id="resize-div-desktop">
            <span class="fas fa-desktop"></span>
            <strong>Grand</strong>
          </button>
        </div>
        <div id="gc-responsive-preview-container" class="gc-responsive-preview-desktop" style="overflow: auto; border: 1px solid #ccc; padding: 1em;">
          {% include configuration-conception-communes/tableaux/exemple-tableaux-adaptatifs.html %}
        </div>
        <div class="gc-responsive-preview" data-gc-responsive-preview='{
                "container": "#gc-responsive-preview-container",
                "cssPath": "../css/gc-responsive-preview-tables.css",
                "buttons": {
                    "mobile": "#resize-div-mobile",
                    "desktop": "#resize-div-desktop"
                }
        }'></div>
        </div>
      </div>
    </div>
    <h3> Modification des tableaux</h3>
    <table class="table">
    <thead>
      <tr>
      <th>Option</th>
      <th>Description</th>
      <th>Comment mettre en oeuvre</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bordures</td>
        <td>Ajoute une bordure pour aider à séparer visuellement les cellules du tableau lorsqu'elles ont beaucoup de contenu.</td>
        <td>Ajouter la classe
          <code>table-bordered</code> au tableau
          (<code>&lt;table&gt;</code>)
        </td>
      </tr>
      <tr>
        <td>Espace condensé</td>
        <td>Réduit la hauteur des cellules du tableau</td>
        <td>Ajouter la classe
          <code>table-condensed</code> au tableau
          (<code>&lt;table&gt;</code>)
        </td>
      </tr>
      <tr>
        <td>Rangées rayées</td>
        <td>Alterne la couleur des rangées du tableau du blanc au gris.</td>
        <td>Ajouter la classe
          <code>table-striped</code> au tableau
          (<code>&lt;table&gt;</code>)
        </td>
      </tr>
      <tr>
      <td>Rangées mises en valeur au pointage</td>
      <td>Assombrit l'arrière-plan lorsque la souris survole une rangée.</td>
      <td>Ajouter la classe
        <code>table-hover</code> au tableau
        (<code>&lt;table&gt;</code>)
      </td>
      </tr>
      <tr>
      <td>Aligné à gauche</td>
      <td>Aligner le texte dans n'importe quelle cellule sur les cartes mobiles</td>
      <td>Ajouter la classe
        <code>text-left</code> à l'élément HTML à l'intérieur du
        <code>&lt;td&gt;</code> que vous voulez aligner à gauche, tel qu'un
        <code>&lt;span&gt;</code> ou un
        <code>&lt;ul&gt;</code>
      </td>
      </tr>
      <tr>
      <td>Filtre simple</td>
      <td>Ajouter un filtre simple à un tableau</td>
      <td>Ajouter la classe
        <code>wb-filter</code> au tableau
        (<code>&lt;table&gt;</code>)
      </td>
      </tr>
      <tr>
      <td>Activer le plugiciel DataTables</td>
      <td>Permet la recherche, le tri, le filtrage, la pagination, etc.
        <a href="https://wet-boew.github.io/v4.0-ci/demos/tables/tables-fr.html">Documentation du plugiciel DataTables</a>
      </td>
      <td>Ajouter la classe
        <code>wb-tables</code> au tableau
        (<code>&lt;table&gt;</code>) et ajouter les valeurs appropriées à
        <code>data-wb-tables=""</code>
      </td>
      </tr>
    </tbody>
    </table>
    <h3>Ressources supplémentaires</h3>
    <p>Pour en savoir plus sur les tableaux adaptatifs, consultez la documentation <a href="https://wet-boew.github.io/GCWeb/components/gc-table/gc-table-fr.html">GCWeb&nbsp;: Tableaux GC</a>. Le code source est disponible sur <a href="https://github.com/wet-boew/GCWeb/blob/master/components/gc-table/gc-table-fr.html">GitHub: gc-table-fr.html</a>.</p>
  </details>
  <details>
    <summary>Tableaux de données stables</summary>
    <ul>
    <li>Servez-vous des catégories de présentation définies pour les tableaux dans la <abbr title="Boîte à outils de l’expérience Web">BOEW</abbr>.</li>
    <li>Veillez à ce que chaque colonne ne présente qu’une facette de données.</li>
    <li>Dans la mesure du possible, utilisez les tableaux de la version 4 de la <abbr title="Boîte à outils de l’expérience Web">BOEW</abbr> qui comprennent des mécanismes de tri et de filtrage.
      <ul>
      <li>Cette façon de procéder est recommandée lorsqu’un tableau compte plus de 12 rangées.</li>
      </ul>
    </li>
    <li>Ajoutez des commandes de pagination facultatives pour les tableaux comptant plus de 12 rangées.</li>
    <li>Ne présentez jamais des données tabulaires sous forme d’images.</li>
    </ul>
    <h2>Exemple concret</h2>
    <ul>
    <li>
      <a href="https://wet-boew.github.io/v4.0-ci/demos/tables/tables-fr.html">BOEW : Tableaux</a>
    </li>
    </ul>
    <section class="panel panel-primary">
      <header class="panel-heading">
        <h3 class="panel-title">Exemple</h3>
      </header>
      <div class="panel-body">
        <figure class="mrgn-bttm-sm">
        <figcaption class="text-center"><b>Modèle de table de données</b></figcaption>
        <img alt="Capture d’écran illustrant le modèle de table de données dans le site Canada.ca. Plus de détails au sujet de ce graphique se retrouvent dans le texte entourant l’image." class="img-responsive center-block" src="https://www.canada.ca/content/dam/tbs-sct/images/government-communications/canada-content-style-guide/data-tables-pattern-fra-02.jpg"/>
        </figure>
      </div>
    </section>
  </details>
  <section>
    <h2 id="recherche">Recherche et blogue</h2>
    <p>Nous avons testé l'utilisation de tableaux adaptatifs avec succès lors de projets d'optimisation avec Santé Canada pour les rappels, avec l'<abbr title="Agence du revenu du Canada">ARC</abbr> pour l'organisation des coordonnées, et pour divers contenus liés à la COVID-19. Les tableaux adaptatifs facilitent l'utilisation par les utilisateurs de petits écrans sans qu'ils aient à faire défiler l'écran sur le côté pour voir tout le contenu.</p>
    <ul>
      <li>
        <a href="{{ site.url }}/resumes-recherche/arc-contactez-nous-resume-recherche.html">Résumé de recherche&nbsp;: Communiquer avec l’ARC</a>
      </li>
      <li>
        <a href="{{ site.url }}/resumes-recherche/rappels-resume-recherche.html">Résumé de projet&nbsp;: Rappels et avis de sécurité</a>
      </li>
    </ul>
</section>
<section>
	<h2 id="derniers">Derniers changements</h2>
  <dl class="dl-horizontal">
    <dt><time>{{ page.dateModified }}</time></dt>
    <dd>Mise à jour de la visionneuse adaptative du tableau adaptatif bêta</dd>
	  <dt><time>2021-05-21</time></dt>
	  <dd>Mise à jour pour inclure le code provisoire pour les cartes adaptatives</dd>
 </dl>
</section>
