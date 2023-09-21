---
altLangPage: https://design.canada.ca/common-design-patterns/most-requested.html
date: "2018-12-19"
dateModified: "2023-09-21"
description: null
title: "En demande"
---
<p><strong>Dernière mise à jour</strong>&nbsp;: {{ page.dateModified }}</p>
<label class="label label-info">Facultatif</label>
<p>Le modèle en demande comprend les principales tâches des pages d’accueil qui offrent de nombreux choix. Les principales tâches sont les choses principales que les utilisateurs essaient de faire dans un contexte donné. </p>
<div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl"><img src="/images/most-requested-en.png" class="img-responsive" alt="" /></div>
<section>
  <h2>Sur cette page</h2>
  <ul>
    <li><a href="#utiliser">Quand l’utiliser</a></li>
    <li><a href="#eviter">Quoi éviter</a></li>
    <li><a href="#contenu">Contenu et conception</a></li>
    <li><a href="#œuvre">Comment procéder à la mise en œuvre</a></li>
    <li><a href="#recherche">Recherche et justification</a></li>
    <li><a href="#changements">Derniers changements</a></li>
  </ul>
</section>
<section id="utiliser">
  <h2>Quand l’utiliser</h2>
  <p>Utilisez ce modèle sur les pages de navigation où les utilisateurs essaient de trouver par où commencer leur tâche, comme une page de sujet ou une page d’accueil institutionnelle.</p>
</section>
<section id="eviter">
  <h2>Quoi éviter</h2>
  <p>N’utilisez pas ce modèle lorsque vous voulez que les gens restent sur la page et fassent leur tâche.</p>
  <p>e l’utilisez pas pour promouvoir les préférences ministérielles. Utilisez des données et des preuves pour déterminer les principales tâches auxquelles les personnes essaient d’accéder.</p>
  <p>Ne présentez pas différentes tâches principales sur les versions anglaise et française de la page d’accueil. Les principales tâches doivent être les mêmes dans les deux langues.</p>
</section>
<section id="contenu">
  <h2>Contenu et conception</h2>
  <p>Trouver des spécifications de contenu et de conception et des exemples visuels.</p>
  <h3>Spécifications de contenu</h3>
  <p>L’en-tête de section est &laquo;&nbsp;En demande&nbsp;&raquo; en français et &laquo;&nbsp;Most requested&nbsp;&raquo; en anglais.</p>
  <p>Incluez des liens vers les principales tâches pertinentes – utilisez des preuves et des données pour déterminer quels liens doivent apparaître.</p>
  <p>Organisez les liens dans une liste à puces.</p>
  <p>Faites en sorte que les puces soient visibles pour que les liens soient faciles à analyser.</p>
  <p>Maximum recommandé de huit liens.</p>
  <p>Utilisez des étiquettes de liens en langage clair et simple, axées sur les tâches (évitez les noms ou les titres de programmes qui pourraient ne pas être connus des gens).</p>
  <p>Sur les grands écrans&nbsp;:</p>
  <ul>
    <li>l’en-tête de section apparaît à gauche des liens;</li>
    <li>la liste des liens apparaît sur deux colonnes maximum.</li>
  </ul>
  <p>Sur les petits écrans&nbsp;:</p>
  <ul>
    <li>l’en-tête de section apparaît au-dessus des liens;</li>
    <li>la liste des liens apparaît dans une seule colonne.</li>
  </ul>
  <h3>Design specifications</h3>
  <ul>
    <li>Mise en page&nbsp;:
      <ul>
        <li>Colonnes&nbsp;: deux colonnes de puces sur les écrans grands et moyens, une seule colonne de puces sur les petits écrans (si vous n’avez que deux ou trois liens, faites une seule colonne pour toutes les tailles d’écran). </li>
        <li>Ordre des onglets&nbsp;: de gauche à droite, puis de haut en bas.</li>
      </ul>
    </li>
    <li> Style&nbsp;:
      <ul>
        <li>Couleur de fond&nbsp;: #f5f5f5</li>
        <li>Famille de police&nbsp;: Noto Sans</li>
        <li>Épaisseur de la police&nbsp;: gras</li>
        <li>Titre: H2, Lato&nbsp;: 1,2 em</li>
        <li>Hauteur de ligne&nbsp;: 2 em (la taille de base est X)</li>
        <li>Taille du texte&nbsp;: 19 px</li>
      </ul>
    </li>
  </ul>
  <h3>Exemples visuels</h3>
  <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
      <figcaption><b>En demande – grand écran</b></figcaption>
      <img src="../images/most-requested-en.png" class="img-responsive" alt="En demande pour les grands écrans. Version texte ci-dessous&nbsp;:" />
      <details>
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>Description de l’image&nbsp;:</summary>
        <p>Les liens en demande apparaissent dans une bande horizontale avec l’en-tête de section &laquo;&nbsp;En demande&nbsp;&raquo;. Les liens sont organisés dans une liste à puces.</p>
      </details>
    </figure>
  </div>
  <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
      <figcaption><b>En demande – petit écran</b></figcaption>
      <img src="/images/most-requested-sm-en.png" class="img-responsive" alt="Most requested pattern for small screens. Text version below:" />
      <details>
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>Description de l’image&nbsp;:</summary>
        <p>Les liens en demande apparaissent dans une liste à puces sous l’en-tête de section &laquo;&nbsp;En demande&nbsp;&raquo;.</p>
      </details>
    </figure>
  </div>
</section>
<section id="œuvre">
  <h2>Comment procéder à la mise en œuvre</h2>
  <p>Trouvez des exemples pratiques et de code pour mettre en œuvre la configuration de conception en demande.</p>
  <h3>Implementations</h3>
  <p>Determine what best suits the type of page you're creating.</p>
  <div class="row">
    <div class="col-md-8">
      <div class="wb-tabs mrgn-tp-lg">
        <div class="tabpanels">
          <details id="004" open="open">
            <summary><strong>GC-AEM</strong></summary>
            <p class="mrgn-tp-lg">For the Government of Canada Adobe Experience Manager (AEM):</p>
            <ul>
              <li><a href="https://www.gcpedia.gc.ca/wiki/AEM_GC-specific_Documentation_6.5">AEM/Managed Web Service documentation (GCPedia link - only available on the Government of Canada network)</a></li>
            </ul>
          </details>
          <details id="005">
            <summary><strong>CDTS</strong></summary>
            <p class="mrgn-tp-lg">For the Centrally Deployed Templates Solution (CDTS):</p>
            <ul>
              <li><a href="https://cenw-wscoe.github.io/sgdc-cdts/docs/index-en.html">CDTS documentation</a></li>
            </ul>
          </details>
          <details id="006">
            <summary><strong>Drupal WxT</strong></summary>
            <p class="mrgn-tp-lg">For Drupal WxT:</p>
            <ul>
              <li><a href="https://drupalwxt.github.io/en/">Drupal WxT documentation</a></li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="recherche">
  <h2>Recherche et justification</h2>
  <h3>Research fidings</h3>
  <p>The banded approach to the most requested pattern was successfully tested on the Canada.ca home page in 2018.</p>
  <p>As part of the Contact the Canada Revenue Agency (CRA) project in 2019, the banded approach was successfully tested on a prototype of the CRA institutional landing page.</p>
  <p>The usefulness of most requested links for navigation pages was reconfirmed as part of the Wayfinding project in 2022.</p>
  <h3>Policy rationale</h3>
  <p>The most requested pattern is required in the following mandatory templates:</p>
  <ul>
    <li><a href="">Institutional landing page</a></li>
    <li><a href="https://design.canada.ca/mandatory-templates/theme-topic.html">Theme and topic page template</a></li>
  </ul>
</section>
<section id="changements">
  <h2>Derniers changements</h2>
  <dl class="dl-horizontal">
    <dt>
      <time datetime="2023-08-20" class="link-muted">2023-08-20</time>
    </dt>
    <dd>Updated guidance to reflect the banded style for the most requested pattern</dd>
    <dt>
      <time datetime="2018-12-19" class="link-muted">2018-12-19</time>
    </dt>
    <dd>Documented the most requested pattern</dd>
  </dl>
</section>
