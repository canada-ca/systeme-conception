---
altLangPage: https://design.canada.ca/common-design-patterns/contact-band.html
date: "2023-09-23"
dateModified: "2023-09-23"
description: Orientation sur l’utilisation de la bande de coordonnées sur Canada.ca
title: Bande de coordonnées
---
<p><strong>Dernière mise à jour</strong>&nbsp;: {{ page.dateModified }}</p>
<div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl"><img src="/images/contact-band-fr.png" class="img-responsive" alt="" /></div>
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
  <p>Utilisez la bande de coordonnées sur les pages pour&nbsp;:</p>
  <ul>
    <li>présenter les coordonnées de manière cohérente dans divers contextes;</li>
    <li>donner accès à plusieurs options de contact</li>
  </ul>
</section>
<section id="eviter">
  <h2>Quoi éviter</h2>
  <p>N’ajoutez pas de bordures à cette bande.</p>
  <p>N’ajoutez pas de liens vers autre chose que des coordonnées dans une bande de coordonnées.</p>
</section>
<section id="contenu">
  <h2>Contenu et conception</h2>
  <p>Trouvez des spécifications de contenu et de conception et des exemples visuels</p>
  <h3>Spécifications de contenu</h3>
  <p>Utilisez un titre descriptif commençant par &laquo;&nbsp;Communiquer avec&nbsp;&raquo; ou &laquo;&nbsp;Coordonnées&nbsp;&raquo;.</p>
  <p>Utilisez un texte de lien descriptif afin que les coordonnées auxquelles l’utilisateur est mené soient claires.</p>
  <p>Le nombre optimal de liens est de trois.</p>
  <p>Si vous utilisez un pied de page contextuel contenant les mêmes liens de coordonnées, veillez à utiliser les mêmes étiquettes de lien.</p>
  <h3>Spécifications de conception</h3>
  <ul>
    <li>Le texte utilise les styles standards de Canada.ca&nbsp;:
      <ul>
        <li><a href="/styles/typographie.html">Typographie</a></li>
        <li><a href="/styles/couleurs.html">Couleurs</a></li>
        <li>Codez le titre comme H2, mais avec le style H3.</li>
        <li>Mettez les liens en gras et disposez-les dans une liste horizontale sans puce.</li>
      </ul>
    </li>
    <li>Arrière-plan&nbsp;:
      <ul>
        <li>Couleur par défaut&nbsp;: #f5f5f5</li>
        <li>Marges intérieures (padding)&nbsp;:
          <ul>
            <li>Bas&nbsp;: 15&nbsp;px</li>
            <li>Haut&nbsp;: 15&nbsp;px</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Mise en page&nbsp;:
      <ul>
        <li>Si vous avez plusieurs séries de liens à présenter sur la même page, vous pouvez utiliser plus d’une bande de coordonnées sur la page dans des couleurs de fond alternant entre le blanc et le gris (rayures zébrées).</li>
      </ul>
    </li>
  </ul>
  <h3>Visual examples</h3>
  <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
      <figcaption><b>Bande de coordonnées standard – grand écran</b></figcaption>
      <img src="/images/contact-band-fr.png" class="img-responsive" alt="Bande de coordonnées standard pour les grands écrans. Version texte ci-dessous&nbsp;:" />
      <details>
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>Description de l’image&nbsp;:</summary>
        <p>Une bande grise horizontale avec le titre Coordonnées suivie de trois liens sur une seule rangée. Le premier lien est Communiquer avec [Institution]; les liens suivants sont des espaces réservés pour les tâches principales liées aux contacts.</p>
      </details>
    </figure>
  </div>
  <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
      <figcaption><b>Bande de coordonnées standard – petit écran</b></figcaption>
      <img src="/images/contact-band-sm-fr.png" class="img-responsive" alt="Bande de coordonnées pour les petits écrans. Version texte ci-dessous&nbsp;:" />
      <details>
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>Description de l’image&nbsp;:</summary>
        <p>Une seule colonne avec un ombrage gris clair en arrière-plan. Le titre Coordonnées est suivi de trois liens. Le premier lien est Communiquer avec [Institution]; les liens suivants sont des espaces réservés pour les tâches principales liées aux contacts.</p>
      </details>
    </figure>
  </div>
  <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
      <figcaption><b>Plusieurs bandes de coordonnées – grand écran</b></figcaption>
      <img src="/images/contact-band-multi-fr.png" class="img-responsive" alt="Plusieurs bandes de coordonnées pour les grands écrans. Version texte ci-dessous&nbsp;:" />
      <details>
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>Description de l’image&nbsp;:</summary>
        <p>Une bande blanche horizontale avec le titre Coordonnées pour [sujet] suivi de six liens. Les liens sont présentés sur deux rangées avec trois liens par rangée.</p>
        <p>La bande blanche est suivie d’une bande grise horizontale avec le titre Coordonnées pour [sujet] suivi de six liens. Les liens sont présentés sur deux rangées avec trois liens par rangée.</p>
      </details>
    </figure>
  </div>
  <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
      <figcaption><b>Plusieurs bandes de coordonnées – petit écran</b></figcaption>
      <img src="/images/contact-band-multi-sm-fr.png" class="img-responsive" alt="Bande de coordonnées pour les petits écrans. Version texte ci-dessous&nbsp;:" />
      <details>
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>Description de l’image&nbsp;:</summary>
        <p>Une seule colonne avec un ombrage blanc contient le titre Coordonnées pour [sujet] suivi de six liens.</p>
        <p>Cette colonne est suivie d’une seule colonne avec un ombrage contenant le titre Coordonnées pour [sujet] suivi de six liens.</p>
      </details>
    </figure>
  </div>
</section>
<section id="œuvre">
  <h2>Comment procéder à la mise en œuvre</h2>
  <p>Trouvez des exemples pratiques et de code pour mettre en œuvre la configuration de conception bande de coordonnées.</p>
  <h3>GCweb (WET) theme implementation reference</h3>
  <p>The implementation reference includes how to configure elements of the design system.</p>
  <ul>
    <li><a href="https://wet-boew.github.io/GCWeb/docs/implementing-en.html">Quick implementation guide - GCWeb theme</a></li>
  </ul>
  <h3>Référence pour la mise en œuvre du thème GCWeb (BOEW)</h3>
  <p>La référence à l’implémentation comprend la façon de configurer chaque élément de la page d’accueil institutionnelle.</p>
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
              <li><a href="https://drupalwxt.github.io/en/">Documentation de Drupal WxT</a> (en anglais seulement)</li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="recherche">
  <h2>Recherche et justification</h2>
  <h3>Constatations découlant de la recherche</h3>
  <p>L’Agence du revenu du Canada (ARC) et le Bureau de la transformation numérique ont mis au point des bandes de coordonnées dans le cadre du projet d’optimisation des coordonnées de l’ARC. Nous avons déterminé que les bandes de coordonnées sont utiles pour donner accès à des coordonnées précises pour différents services.</p>
  <h3>Justification stratégique</h3>
  <p>La bande de coordonnées est requise dans les modèles obligatoires suivants&nbsp;:</p>
  <ul>
    <li><a href="/modeles-obligatoire/pages-profil-institutionnel.html">Page d’accueil institutionnelle</a></li>
  </ul>
</section>
<section id="changements">
  <h2>Derniers changements</h2>
  <dl class="dl-horizontal">
    <dt>
      <time datetime="2023-09-21" class="link-muted">2023-09-21</time>
    </dt>
    <dd>Mise à jour de l’orientation pour y inclure les spécifications de contenu et de conception, des exemples visuels et une orientation sur la mise en œuvre.</dd>
  </dl>
</section>
