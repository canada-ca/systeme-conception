---
altLangPage: https://design.canada.ca/common-design-patterns/ministers-block.html
date: "2018-12-19"
dateModified: "2024-04-03"
description: "La configuration de conception pour un ministre ou un chef d’institution fournit des liens vers le(s) ministre(s) d’une institution, y compris son ou ses ministre(s) associé(s), ou vers son chef d’institution."
title: "Ministre ou chef d’institution"
---
<style>
  h1#wb-cont::after {
    content: "";
    display: n;
    width: 0;
    padding-bottom: 0px;
    border-bottom: 0;
}
</style>
<p><strong>Dernière mise à jour</strong>&nbsp;: {{ page.dateModified }}</p>
<p>La configuration de conception d’un ministre ou d’un chef d’institution indique le(s) ministre(s) ou chef(s) d’institution concernés d’un ministère, d’un organisme ou d’une organisation. Elle fournit des liens vers la biographie officielle du ou des ministres, ministres associés ou chefs d’institution, et elle peut également inclure un portrait ou des liens vers des lettres de mandat et des documents d’information.</p>
<div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl"><img src="/images/ministers-block-fr.png" class="img-responsive" alt="" /></div>
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
  <p>La configuration de conception d’un ministre ou d’un chef d’institution est obligatoire sur les pages d’accueil institutionnelles.</p>
</section>
<section id="eviter">
  <h2>Quoi éviter</h2>
  <p>Ne pas utiliser cette configuration de conception sur les pages où elle n’est pas pertinente pour la ou les tâche(s) principale(s) de la page.</p>
</section>
<section id="contenu">
  <h2>Contenu et conception</h2>
  <p>Trouver des spécifications de contenu et de conception et des exemples visuels.</p>
  <h3>Spécifications de contenu</h3>
  <p>Utiliser le titre approprié pour la section, par exemple&nbsp;:</p>
  <ul>
    <li>Ministre</li>
    <li>Présidente</li>
    <li>Secrétaire parlementaire</li>
    <li>Ministre associé</li>
    <li>Ombudsman</li>
    <li>Direction</li>
  </ul>
  <p>Les éléments suivants sont obligatoires pour chaque chef d’institution&nbsp;:</p>
  <ul>
    <li>Le titre honorifique (&laquo;&nbsp;L’honorable&nbsp;&raquo;), le prénom et le nom de famille du ministre ou du chef d’institution
      <ul>
        <li>On y trouvera un lien vers une page de profil des ministres (voir <a href="/modeles-obligatoire/pages-profil-ministres.html">Pages de profil des ministres</a>)</li>
      </ul>
    </li>
    <li>Le titre officiel du chef d’institution</li>
  </ul>
  <p>Les éléments suivants sont facultatifs pour chaque chef d’institution&nbsp;:</p>
  <ul>
    <li>Image</li>
    <li>Liens&nbsp;:
      <ul>
        <li>Lettre de mandat</li>
        <li>Dossier d’information</li>
        <li>Documents pertinents pour le chef d’institution</li>
      </ul>
    </li>
  </ul>
  <h3>Spécifications de conception</h3>
  <ul>
    <li>Arrière-plan&nbsp;: blanc</li>
    <li> Nom et titre du chef d’institution (en hyperlien)&nbsp;:
      <ul>
        <li><a href="/styles/couleurs.html">Couleurs standards des liens de Canada.ca</a></li>
        <li><a href="/styles/typographie.html">Famille et taille de police standards pour le corps de texte de Canada.ca</a></li>
      </ul>
    </li>
    <li> Titre du chef d’institution
      <ul>
        <li><a href="/styles/couleurs.html">Couleurs standards des liens de Canada.ca</a></li>
        <li><a href="https://conception.canada.ca/styles/typographie.html">Famille et taille de police standards de Canada.ca</a>. La classe est petite et constitue 87 % de la taille de la police (celle du corps du texte est de 20 px)</li>
      </ul>
    </li>
    <li>Liens facultatifs
      <ul>
        <li>Le texte utilise les styles standards de Canada.ca
          <ul>
            <li><a href="/styles/typographie.html">Typographie</a></li>
            <li><a href="/styles/couleurs.html">Couleurs</a></li>
          </ul>
        </li>
        <li>Les liens sont disposés en liste
          <ul>
            <li>La classe est petite et constitue 87&nbsp;% de la taille standard du corps du texte</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Images&nbsp;: 200&nbsp;px par 250&nbsp;px</li>
    <li>Mise en page&nbsp;: Deux colonnes avec image à gauche et puces à droite sur les grands et les moyens écrans, ou une seule colonne sur les petits écrans</li>
  </ul>
  <h3>Exemples visuels</h3>
  <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
      <figcaption><b>Ministre ou chef d’institution – grand écran</b></figcaption>
      <img src="/images/ministers-block-fr.png" class="img-responsive" alt="Configuration de conception pour un ministre ou chef d’institution pour les grands écrans. Version texte ci-dessous&nbsp;:" />
      <details>
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>Description de l’image&nbsp;: ministre ou chef d’institution - grand écran</summary>
        <p>La configuration de conception du ministre s’affiche dans deux colonnes avec l’en-tête &laquo;&nbsp; Ministre(s)&nbsp;&raquo;.</p>
        <p>La première colonne présente un espace réservé à l’image d’un chef d’institution, à gauche. Les dimensions de l’image sont de 200 x 250 pixels. Les renseignements inclus à droite comprennent les suivants&nbsp;:</p>
        <ul>
          <li>L’honorable [nom du ou de la ministre] (lien)</li>
          <li>[Titre officiel] (texte)</li>
          <li>Élément de liste&nbsp;: Lettre de mandat [facultatif] (lien)</li>
          <li>Élément de liste&nbsp;: Dossier d’information [facultatif] (lien) </li>
        </ul>
        <p>La deuxième colonne présente un espace réservé à l’image d’un chef d’institution, à gauche. Les dimensions de l’image sont de 200&nbsp;x&nbsp;250 pixels. Les renseignements inclus à droite comprennent les suivants :</p>
        <ul>
          <li>L’honorable [nom du ou de la ministre] (lien)</li>
          <li>[Titre officiel] (texte)</li>
          <li>Élément de liste&nbsp;: Lettre de mandat [facultatif – un seul élément] (lien)</li>
        </ul>
      </details>
    </figure>
  </div>
  <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
      <figcaption><b>Ministre ou chef d’institution – petit écran</b></figcaption>
      <img src="/images/ministers-block-sm-fr.png" class="img-responsive" alt="Configuration de conception pour un ministre ou chef d’institution pour les petits écrans. Version texte ci-dessous&nbsp;:" />
      <details>
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>Description de l’image&nbsp;: ministre ou chef d’institution - petit écran</summary>
        <p>La configuration de conception s’affiche dans une colonne et deux éléments avec l’en-tête &laquo;&nbsp;Ministre(s)&nbsp;&raquo;.</p>
        <p>Le premier élément commence par un titre avec lien &laquo;&nbsp;L’honorable [nom du ou de la ministre] » suivi d’un espace réservé pour l’image aux dimensions prescrites de 200 x 250 pixels. Sous l’image se trouve le texte [Titre officiel]. Il est suivi d’une liste à puces avec les deux éléments avec lien suivants&nbsp;:</p>
        <ul>
          <li>Lettre de mandat [facultatif]</li>
          <li>Dossier d’information [facultatif]</li>
        </ul>
        <p>Le deuxième élément commence par un titre avec lien &laquo;&nbsp;L’honorable [nom du ministre]&nbsp;&raquo; suivi d’un espace réservé pour l’image aux dimensions prescrites de 200&nbsp;x&nbsp;250 pixels. Sous l’image se trouve le texte [Titre officiel]. Il est suivi de l’élément avec lien suivant&nbsp;:</p>
        <ul>
          <li>Lettre de mandat [facultatif – élément unique]</li>
        </ul>
      </details>
    </figure>
  </div>
</section>
<section id="œuvre">
  <h2>Comment procéder à la mise en œuvre</h2>
  <p>Trouvez des exemples pratiques et de code pour mettre en oeuvre la configuration de conception d’un ministre ou d’un chef d’institution.</p>
  <h3>Référence pour la mise en œuvre du thème GCWeb (BOEW)</h3>
  <p>La référence à l’implémentation comprend la façon de configurer le thème de Canada.ca et ses divers composants.</p>
  <ul>
    <li><a href="https://wet-boew.github.io/GCWeb/docs/implementing-fr.html">Guide de mise en œuvre rapide – thème GCWeb</a></li>
  </ul>
  <h3>Mises en œuvre</h3>
  <p>Déterminez ce qui convient le mieux au type de page que vous créez.</p>
  <div class="row">
    <div class="col-md-8">
      <div class="wb-tabs mrgn-tp-lg">
        <div class="tabpanels">
          <details id="004" open="open">
            <summary><strong>GC-AEM</strong></summary>
            <p class="mrgn-tp-lg">Pour Adobe Experience Manager (AEM) du gouvernement du Canada (GC)&nbsp;:</p>
            <ul>
              <li><a href="https://www.gcpedia.gc.ca/wiki/Documentation_d%27AEM_sp%C3%A9cifique_au_GC_6.5">Documentation d’AEM et des services Web gérés (lien GCpédia – accessible uniquement sur le réseau du gouvernement du Canada)</a></li>
            </ul>
          </details>
          <details id="005">
            <summary><strong>SGDC</strong></summary>
            <p class="mrgn-tp-lg">Pour la Solution de gabarits à déploiement centralisé (SGDC)&nbsp;:</p>
            <ul>
              <li><a href="https://cenw-wscoe.github.io/sgdc-cdts/docs/index-fr.html">Documentation de la SGDC</a></li>
            </ul>
          </details>
          <details id="006">
            <summary><strong>Drupal WxT</strong></summary>
            <p class="mrgn-tp-lg">Pour Drupal WxT&nbsp;:</p>
            <ul>
              <li><a href="https://drupalwxt.github.io/">Documentation de Drupal WxT (en anglais seulement)</a></li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="recherche">
  <h2>Recherche et justification</h2>
  <p>Consultez la justification de la politique.</p>
  <h3>Justification stratégique</h3>
  <p>La configuration de conception pour un ministre ou un chef d’institution est requise dans le modèle obligatoire suivant&nbsp;:</p>
  <ul>
    <li><a href="https://conception.canada.ca/modeles-obligatoire/pages-profil-institutionnel.html">Page d’accueil institutionnelle</a></li>
  </ul>
</section>
<section id="changements">
  <h2>Derniers changements</h2>
  <dl class="dl-horizontal">
    <dt>
      <time datetime="2024-04-03" class="link-muted">2024-04-03</time>
    </dt>
    <dd>Ajout d’une orientation à l’appui des mises à jour de la page d’accueil institutionnelle</dd>
  </dl>
</section>
