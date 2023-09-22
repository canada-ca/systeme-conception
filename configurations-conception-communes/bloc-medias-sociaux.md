---
altLangPage: https://design.canada.ca/common-design-patterns/social-media-channels.html
date: "2018-12-19"
dateModified: "2023-09-23"
description: null
title: "Chaînes de médias sociaux"
---
<p><strong>Dernière mise à jour</strong>&nbsp;: {{ page.dateModified }}</p>
<p>La configuration de conception des chaînes de médias sociaux fournit des liens vers les comptes de médias sociaux officiels du gouvernement du Canada (GC).</p>
<div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl"><img src="/images/social-media-vertical-mask-fr.png" class="img-responsive" alt="" /></div>
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
  <p>Utilisez la configuration de conception des chaînes de médias sociaux sur les pages afin de promouvoir les comptes de médias sociaux officiels du gouvernement du Canada (GC) qui sont pertinents par rapport à la page.</p>
  <p>Exemples :</p>
  <ul>
    <li>Page d’accueil institutionnelle</li>
    <li>Blogue</li>
    <li>Page de sujet</li>
  </ul>
</section>
<section id="eviter">
  <h2>Quoi éviter</h2>
  <p>N’utilisez pas la configuration de conception des chaînes de médias sociaux lorsque le flux d’un utilisateur ne doit pas être interrompu, par exemple pendant un processus transactionnel.</p>
</section>
<section id="contenu">
  <h2>Contenu et conception</h2>
  <p>Trouvez des spécifications de contenu et de conception et des exemples visuels.</p>
  <h3>Spécifications de contenu</h3>
  <p>La configuration de conception des chaînes de médias sociaux est composée du titre « Sur les médias sociaux » et d’icônes renvoyant aux comptes de médias sociaux officiels du gouvernement du Canada.</p>
  <p>Les comptes mentionnés dans la configuration de conception doivent être entièrement conformes à la Directive sur la gestion des communications.</p>
  <p>Afficher un maximum de sept (7) icônes alignées dans une colonne verticale ou une rangée horizontale :</p>
  <ul>
    <li>L’affichage vertical comprend une étiquette à côté de chaque icône.</li>
    <li>L’affichage horizontal ne comprend que les icônes.</li>
  </ul>
  <p>S’il y a plus d’un compte pour une plateforme :</p>
  <ul>
    <li>Indiquez le nom de la plateforme à côté de son icône (affichage vertical seulement).</li>
    <li>Utilisez une fenêtre contextuelle modale pour afficher le nom de chaque compte sur cette plateforme.
      <ul>
        <li>La fenêtre contextuelle modale peut avoir jusqu’à huit (8) liens de texte.</li>
        <li>Utilisez les noms des comptes en tant qu’étiquettes.</li>
      </ul>
    </li>
  </ul>
  <p>Placez les chaînes de médias sociaux après la tâche et le contenu de navigation.</p>
  <h3>Spécifications de conception</h3>
  <ul>
    <li>Spécifications de conception de la fenêtre contextuelle modale
      <ul>
        <li>Couleur de fond de l’en-tête modal : #2e5274</li>
        <li>Titre : H2, Lato, le style de la taille de police est de 1.15 em</li>
      </ul>
    </li>
    <li>Liens :
      <ul>
        <li>Police : Noto Sans, 16 px, couleurs de lien standards</li>
      </ul>
    </li>
    <li>Le style du bouton est celui d’un bouton principal.</li>
  </ul>
  <p>Les classes de lien pour les médias sociaux et les icônes associés sont disponibles.</p>
  <div class="row mrgn-tp-lg">
    <div class="col-md-8">
      <div class="panel panel-default">
        <table class="table table-striped" id="social-media" aria-live="polite">
          <caption class="wb-inv">
          Social media link classes and associated icons
          </caption>
          <thead>
            <tr>
              <th class="col-md-5">Plateforme de médias sociaux</th>
              <th class="col-md-6">Classe CSS</th>
              <th class="col-md-1">Lien vers le fichier SVG (GitHub)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Facebook</td>
              <td><p>facebook</p></td>
              <td class="text-center"><div class="provisional gc-followus"><a href="https://github.com/wet-boew/GCWeb/blob/master/components/gc-follow-us/assets/facebook.svg" class="facebook wb-lbx"><span class="wb-inv">Facebook</span></a><div></td>
            </tr>
            <tr>
              <td>Twitter</td>
              <td><p>twitter</p></td>
              <td class="text-center"><a href="https://github.com/wet-boew/GCWeb/blob/master/components/gc-follow-us/assets/twitter.svg"><img src="/images/social-media/twitter.svg" alt="Twitter"  class="img-responsive" /></a></td>
            </tr>
            <tr>
              <td>YouTube</td>
              <td><p>youtube</p></td>
              <td class="text-center"><a href="https://github.com/wet-boew/GCWeb/blob/master/components/gc-follow-us/assets/youtube.svg"><img src="/images/social-media/youtube.svg" alt="YouTube"  class="img-responsive" /></a></td>
            </tr>
            <tr>
              <td>Instagram</td>
              <td>instagram</td>
              <td class="text-center"><a href="https://github.com/wet-boew/GCWeb/blob/master/components/gc-follow-us/assets/linkedin.svg"><img src="/images/social-media/instagram.svg" alt="Instagram"  class="img-responsive" /></a></td>
            </tr>
            <tr>
              <td>LinkedIn</td>
              <td><p>linkedin</p></td>
              <td class="text-center"><a href="https://github.com/wet-boew/GCWeb/blob/master/components/gc-follow-us/assets/instagram.svg"><img src="/images/social-media/linkedin.svg" alt="LinkedIn"  class="img-responsive" /></a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <p><a href="/contactez-nous/">Communiquez avec le Bureau de la transformation numérique (BTN)</a> si vous voulez inclure une plateforme qui n’est pas représentée ici.</p>
  <h3>Exemples visuels</h3>
  <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
      <figcaption><b>Chaînes de médias sociaux (affichage vertical avec étiquettes) — grand écran</b></figcaption>
      <img src="/images/social-media-vertical-mask-fr.png" class="img-responsive" alt="Chaînes de médias sociaux (affichage vertical avec étiquettes) pour les grands écrans. Version texte ci-dessous&nbsp;:" />
      <details>
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>Description de l’image&nbsp;:</summary>
        <p>Les liens vers les chaînes de médias sociaux apparaissent avec le titre « Sur les médias sociaux ». On trouve sous le titre une liste verticale avec les icônes et les étiquettes associées :</p>
        <ul>
          <li>Icône de Facebook suivie du texte de l’espace réservé NomPageFacebook</li>
          <li>Icône de Twitter suivie du texte de l’espace réservé @CompteTwitter</li>
          <li>Icône de YouTube suivie du texte de l’espace réservé NomYouTube</li>
          <li>Icône d’Instagram suivie du texte de l’espace réservé NomInstagram</li>
          <li>Icône de LinkedIn suivie du texte de l’espace réservé NomLinkedIn</li>
        </ul>
      </details>
    </figure>
  </div>
  <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
      <figcaption><b>Social media channels (horizontal view) - large screen</b></figcaption>
      <img src="../images/social-media-horizontal-mask-en.png" class="img-responsive" alt="Chaînes de médias sociaux (affichage horizontal) — grand écran pour les grands écrans. Version texte ci-dessous&nbsp;:" />
      <details>
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>Description de l’image&nbsp;:</summary>
        <p>Les liens vers les chaînes de médias sociaux apparaissent avec le titre « Sur les médias sociaux ».  On trouve sous le titre une liste horizontale avec les icônes associées, mais sans les étiquettes :</p>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Youtube</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
        </ul>
      </details>
    </figure>
  </div>
  <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
      <figcaption><b>Chaînes de médias sociaux (conception verticale avec étiquettes) – petit écran</b></figcaption>
      <img src="../images/social-media-vertical-en-sm.png" class="img-responsive" alt="Chaînes de médias sociaux (conception verticale avec étiquettes) pour les petits écrans. Version texte ci-dessous&nbsp;:" />
      <details>
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>Description de l’image&nbsp;:</summary>
        <p>Les liens vers les chaînes de médias sociaux apparaissent avec le titre « Sur les médias sociaux ». Les liens sont organisés dans une liste à puces avec les icônes et les étiquettes associées :</p>
        <ul>
          <li>Facebook icon followed by the placeholder text FacebookPageName</li>
          <li>Twitter icon followed by the placeholder text @TwitterAccount</li>
          <li>Youtube icon followed by the placeholder text YouTubeName</li>
          <li>Instagram icon followed by the placeholder text InstagramName</li>
          <li>LinkedIn icon followed by the placeholder text LinkedInName</li>
        </ul>
      </details>
    </figure>
  </div>
  <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
      <figcaption><b>Fenêtre contextuelle modale de médias sociaux pour comptes multiples</b></figcaption>
      <img src="../images/social-media-lightbox-fr.png" class="img-responsive" alt="Fenêtre contextuelle modale de médias sociaux pour comptes multiples.  Version texte ci-dessous&nbsp;:" />
      <details>
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>Description de l’image&nbsp;:</summary>
        <p>Une fenêtre contextuelle superposée pour afficher de multiples comptes Facebook. Un titre indique la plateforme de médias sociaux, tandis que deux liens intitulés [Titre du premier compte Facebook] et [Titre du deuxième compte Facebook] se trouvent en dessous. La fenêtre modale est dotée d’un bouton de fermeture et d’un X dans le coin pour fermer la composante modale.</p>
      </details>
    </figure>
  </div>
</section>
<section id="œuvre">
  <h2>Comment procéder à la mise en œuvre</h2>
  <p>Find working examples and code for implementing the contact us band pattern.</p>
  <h3>GCweb (WET) theme implementation reference</h3>
  <p>The implementation reference includes how to configure elements of the design system.</p>
  <ul>
    <li><a href="">Social media channels - GCWeb</a></li>
    <li><a href="https://wet-boew.github.io/GCWeb/docs/implementing-en.html">Quick implementation guide - GCWeb theme</a></li>
  </ul>
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
  <p>Consult the policy rationale.</p>
  <h3>Policy rationale</h3>
  <p>The content within the social media channels section must follow the <a href="https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=30682">Directive on the Management of Communications</a>.</p>
  <p>This is an optional pattern for the following mandatory templates:</p>
  <ul>
    <li><a href="">Institutional landing page</a></li>
    <li><a href="https://design.canada.ca/mandatory-templates/theme-topic.html">Theme and topic page template</a></li>
    <li><a href="https://design.canada.ca/mandatory-templates/ministerial-profile-pages.html">Ministerial pages</a></li>
  </ul>
</section>
<section id="changements">
  <h2>Derniers changements</h2>
  <dl class="dl-horizontal">
    <dt>
      <time datetime="2023-08-13" class="link-muted">2023-08-20</time>
    </dt>
    <dd>Updated the guidance to include content and design specifications, visual examples and implementation guidance.</dd>
  </dl>
</section>
