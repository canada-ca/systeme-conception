---
altLangPage: "https://design.canada.ca/common-design-patterns/language-toggle.html"
dateModified: 2023-05-17
description: "Orientation sur l’utilisation de la fonction de changement de langue sur le site Canada.ca Le contenu du gouvernement du Canada est offert dans les deux langues officielles. Un lien permettant de changer de langue, situé dans l’En-tête général du site, donne à la personne accès à la page correspondante dans l’autre langue officielle."
title: "Lien pour changer de langue"
---
<div class="row">
  <div class="col-md-12 pull-left">
    <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only">
      <li class="mrgn-rght-lg">Dernière mise à jour&nbsp;: {{ page.dateModified }}</li>
    </ul>
  </div>
</div>
<p><span class="label label-danger">Obligatoire</span></p>
<p>Tout le contenu du gouvernement du Canada destiné au public est accessible dans les deux langues officielles. Un lien permettant de changer de langue, situé dans l’En-tête général du site, donne à la personne accès à la page correspondante dans l’autre langue officielle.</p>
<div class="pattern-demo mrgn-tp-lg">
  <figure class="mrgn-bttm-sm"><img src="../images/01-lang-toggle-fr.png" class="img-responsive" alt=""></figure>
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
<p>La présence du lien pour changer la langue est obligatoire sur toutes les pages.</p>
<p>Les nouvelles pages transactionnelles des applications Web doivent permettre aux utilisateurs de basculer entre les langues officielles. Les anciennes applications Web qui ne permettent pas de basculer d’une langue à l’autre doivent être mises à jour ou remplacées. En attendant, vous pouvez omettre le basculement entre les langues si son utilisation entraîne une perte de données.</p>

<h2 id="eviter">Quoi éviter</h2>
<p>Ne mettez pas d’autres options de langue dans le lien pour changer la langue. Ce n’est que pour l’anglais et le français. Les liens vers le contenu dans les autres langues doivent apparaître dans la zone de contenu de la page.</p>
<p>N’utilisez pas le lien pour changer la langue afin de pointer vers autre chose que la page correspondante dans la langue équivalente.</p>

<h2 id="contenu">Contenu et conception</h2>
<p>Trouver des spécifications du contenu et de conception et des exemples visuels.</p>

<h3>Spécifications de contenu</h3>
<p>Assurez-vous que le lien pour changer la langue renvoie à la page correspondante dans l’autre langue.</p>

<h4>Grands écrans</h4>
<ul>
  <li>Sur les pages en anglais, le texte de l’étiquette du lien est &laquo;&nbsp;Français&nbsp;&raquo;.</li>
  <li>Sur les pages en français, le texte de l’étiquette du lien est &laquo;&nbsp;English&nbsp;&raquo;.</li>
</ul>
<h4>Petits écrans</h4>
<p>Pour les petits écrans, la bascule des langues utilise une abréviation de deux lettres pour chaque langue&nbsp;:</p>
<ul>
  <li>Sur les pages en anglais, le texte de l’étiquette du lien est &laquo;&nbsp;FR&nbsp;&raquo; en majuscules.</li>
  <li>Sur les pages en français, le texte de l’étiquette du lien est &laquo;&nbsp;EN&nbsp;&raquo; en majuscules.</li>
</ul>
<h4>Accessibilité</h4>
<ul>
  <li>Ajouter le nom complet de la langue dans l’attribut du titre du lien abrégé pour changer la langue.
    <ul>
      <li>Le titre de l’abréviation EN est &laquo;&nbsp;English&nbsp;&raquo;.</li>
      <li>Le titre de l’abréviation FR est &laquo;&nbsp;Français&nbsp;&raquo;.</li>
    </ul>
  </li>
</ul>
<h4>Interactions</h4>
<ul>
  <li>Lorsqu’il est sélectionné, le lien pour changer la langue permet à l’utilisateur d’accéder à la version dans l’autre langue de la page sur laquelle il se trouvait.</li>
</ul>
<h3>Spécifications de conception</h3>
<ul>
  <li>Type&nbsp;: lien</li>
  <li>Position&nbsp;: coin supérieur droit</li>
  <li>Police&nbsp;: Lato</li>
  <li>Taille&nbsp;: 1,2 em</li>
  <li>Couleur du texte&nbsp;:
    <ul>
      <li>lien par défaut&nbsp;: #284162</li>
      <li>lien sélectionné (passé par-dessus ou mis au point)&nbsp;: #0535d2</li>
      <li>lien visité&nbsp;: #284162</li>
    </ul>
  </li>
</ul>
<h4>Accessibilité</h4>
<ul>
  <li>Étiquetez le code du lien pour changer la langue de manière à ce qu’il soit prononcé dans la bonne langue s’il est lu à haute voix par des technologies d’assistance.</li>
  <li>Assurez-vous que l’étiquette du texte du lien pour changer la langue n’est pas traduite par les outils de traduction du navigateur.</li>
</ul>
<h3>Exemples visuels</h3>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Changer la langue (Page anglaise) – grand écran</b></figcaption>
    <img src="../images/01-lang-toggle-en.png" class="img-responsive" alt="">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l’image&nbsp;:  Changer la langue – grand écran (Page anglaise)</summary>
      <p class="mrgn-tp-lg">En-tête standard d’une page Canada.ca en anglais avec mise en surbrillance du mot lié Français dans le coin supérieur droit.</p>
    </details>
  </figure>
</div>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Changer la langue (Page française) – grand écran </b></figcaption>
    <img src="../../images/01-lang-toggle-fr.png" class="img-responsive" alt="">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l’image&nbsp;: Changer la langue (Page française) – grand écran</summary>
      <p class="mrgn-tp-lg">En-tête standard d’une page Canada.ca en français avec mise en surbrillance du mot lié English dans le coin supérieur droit.</p>
    </details>
  </figure>
</div>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Changer la langue (Page anglaise) – petit écran</b></figcaption>
    <img src="../../images/01-lang-toggle-sm-en.png" class="img-responsive" alt="">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l’image&nbsp;: Changer la langue (Page anglaise) – petit écran</summary>
      <p class="mrgn-tp-lg">En-tête standard d’une page Canada.ca en anglais avec mise en surbrillance de l’abréviation liée FR dans le coin supérieur droit.</p>
    </details>
  </figure>
</div>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Changer la langue (Page française) – petit écran</b></figcaption>
    <img src="../../images/01-lang-toggle-sm-fr.png" class="img-responsive" alt="">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l’image&nbsp;: Changer la langue (Page française) – petit écran</summary>
      <p class="mrgn-tp-lg">En-tête standard d’une page Canada.ca en français avec mise en surbrillance de l’abréviation liée EN dans le coin supérieur droit.</p>
    </details>
  </figure>
</div>
<h2 id="implementation">Comment procéder à la mise en oeuvre</h2>
<p>Trouver des exemples fonctionnels de l’implémentation du lien pour changer de langue.</p>
<h3>Référence pour la mise en œuvre du thème GCWeb (BOEW)</h3>
<p>La référence à l’implémentation comprend la façon de configurer chaque élément de l’en-tête.</p>
<ul>
  <li><a href="https://wet-boew.github.io/GCWeb/sites/header/header-docs-fr.html">Documentation de l’en-tête GCWeb (Boîte à outils de l’expérience Web)</a></li>
</ul>
<h3>Mises en oeuvre</h3>
<p>Déterminez ce qui convient le mieux au type de page que vous créez.</p>
<div class="row">
  <div class="col-md-8">
    <div class="wb-tabs mrgn-tp-lg">
      <div class="tabpanels">
        <details id="004" open="open">
          <summary><strong>AEM-GC</strong></summary>
          <p class="mrgn-tp-lg">Pour Adobe Experience Manager (AEM) du gouvernement du Canada (GC)&nbsp;:</p>
          <ul>
            <li><a href="https://www.gcpedia.gc.ca/wiki/Documentation_d%27AEM_sp%C3%A9cifique_au_GC_6.5">Documentation d’AEM et des services Web gérés (lien GCpédia – uniquement accessible sur le réseau du gouvernement du Canada)</a></li>
          </ul>
        </details>
        <details id="005">
          <summary><strong>Solution de gabarits à déploiement centralisé (SGDC)</strong></summary>
          <p class="mrgn-tp-lg">Pour la Solution de gabarits à déploiement centralisé (SGDC)&nbsp;:</p>
          <ul>
            <li><a href="https://drupalwxt.github.io/fr/">Documentation de la SGDC</a></li>
          </ul>
        </details>
        <details id="006">
          <summary><strong>Drupal WxT</strong></summary>
          <p class="mrgn-tp-lg">Pour Drupal WxT&nbsp;:</p>
          <ul>
            <li><a href="https://drupalwxt.github.io/fr/">Documentation de Drupal WxT</a></li>
          </ul>
        </details>
      </div>
    </div>
  </div>
</div>
<h2 id="recherche">Recherche et justification</h2>
<p>Consulter la justification stratégique.</p>
<h3>Justification stratégique</h3>
<p>Le lien pour changer la langue fait partie de l’En-tête général et est un élément obligatoire de la <cite>spécification du contenu et de l’architecture de l’information</cite>.</p>
<ul>
  <li><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/communications-gouvernementales/specifications-contenu-architecture-information-canada/elements-obligatoires.html">Éléments obligatoires du système de conception</a></li>
</ul>
<p>Toutes les communications du gouvernement du Canada doivent être accessibles dans les deux langues officielles.</p>
<ul>
  <li><a href="https://www.tbs-sct.canada.ca/pol/doc-fra.aspx?id=26160">Politique sur les langues officielles</a></li>
</ul>
<h2 id="changements">Derniers changements</h2>
<dl class="dl-horizontal">
  <dt>
    <time datetime="2023-MM-DD" class="link-muted">2023-MM-DD</time>
  </dt>
  <dd>Mise à jour de l’orientation pour y inclure des conseils sur quoi éviter, les spécifications du contenu et de conception, des exemples visuels, une orientation sur la mise en œuvre, et les justifications stratégiques</dd>
</dl>
