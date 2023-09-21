---
altLangPage: https://design.canada.ca/common-design-patterns/services-information.html
date: "2018-12-19"
dateModified: "2023-09-21"
description: "Orientation sur l’utilisation de la configuration de conception d’un lien en vedette sur Canada.ca."
title: "Lien en vedette"
---
<p><strong>Last updated</strong>: {{ page.dateModified }}</p>
<p>Le lien en vedette est un hyperlien court et descriptif que votre institution doit mettre en évidence.</p>
<div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl">
  <figure class="mrgn-tp-md mrgn-bttm-lg"><img src="/images/featured-link-generic-fr.png" class="img-responsive" alt="" /></figure>
</div>
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
  <p>Utilisez la configuration de conception d’un lien en vedette afin de promouvoir des éléments importants de nature temporaire, tels qu’une déclaration sur le jour du Souvenir.</p>
  <p>Utilisez cette configuration de conception uniquement sur les pages de navigation.</p>
  <p>Vous pouvez gérer plusieurs liens dans l’emplacement du lien en vedette en les rendant aléatoires à chaque visite de la page.</p>
</section>
<section id="eviter">
  <h2>Quoi éviter</h2>
  <p>N’utilisez pas cette configuration de conception lorsque vous souhaitez que les gens restent sur la page et accomplissent leur tâche.</p>
  <p>N’incluez pas d’images dans cette section.</p>
  <p>N’incluez pas plus d’un lien dans la configuration de conception.</p>
  <p>N’incluez pas plus d’une section de lien en vedette sur une page.</p>
</section>
<section id="contenu">
  <h2>Contenu et conception</h2>
  <p>Trouvez des spécifications de contenu et de conception et des exemples visuels.</p>
  <h3>Spécifications de contenu</h3>
  <p>Dans cette configuration de conception, alignez le texte à gauche.</p>
  <p>Utilisez du texte de lien descriptif pour que l’utilisateur sache clairement où il ira s’il clique sur le lien</p>
  <h3>Spécifications de conception</h3>
  <ul>
    <li> Texte&nbsp;:
      <ul>
        <li>Couleur&nbsp;: #FFF</li>
        <li>Couleur&nbsp;: Lato Sans</li>
        <li>Font size&nbsp;: 20px</li>
      </ul>
    </li>
    <li> Arrière-plan&nbsp;:
      <ul>
        <li>Couleur par défaut&nbsp;: #31708F</li>
        <li>Opacité&nbsp;: 0.9</li>
        <li>Marges intérieures (padding)&nbsp;:
          <ul>
            <li>Bas&nbsp;: 15px</li>
            <li>Haut&nbsp;: 15px</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <p>Vous pouvez changer la couleur de fond pour l’adapter à vos besoins.</p>
  <h4>Accessibilité</h4>
  <p>Le titre &laquo;&nbsp;En vedette&nbsp;&raquo; doit avoir la classe wb-inv; ainsi, il ne sera pas visible, mais sera tout de même présent pour le plan sémantique et les lecteurs d’écran.</p>
  <p>Si vous changez la couleur de fond, veillez à ce que le rapport de contraste soit d’au moins 4,5:1.</p>
  <h3>Exemples visuels</h3>
  <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
      <figcaption><b>Lien en vedette - grand écran</b></figcaption>
      <img src="/images/feature-link-fr.png" class="img-responsive" alt="Lien en vedette pour les grands écrans. Version texte ci-dessous :" />
      <details>
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>Description de l’image&nbsp;:</summary>
        <p>Un lien en vedette est affiché dans une bande bleue qui s’étend sur toute la longueur de l’écran. Au-dessus du lien en vedette figure le nom du ministère (Ressources naturelles Canada), suivi d’une brève description du ministère. Sous le lien en vedette se trouve le titre En demande suivi de trois liens.</p>
      </details>
    </figure>
  </div>
</section>
<section>
  <h2 id="œuvre">Comment procéder à la mise en œuvre</h2>
  <p>Trouvez des exemples pratiques et de code pour mettre en œuvre le lien en vedette, y compris la fonctionnalité d’affichage aléatoire.</p>
  <h3>GCWeb</h3>
  <ul>
    <li><a href="https://wet-boew.github.io/GCWeb/components/gc-featured-link/gc-featured-link-fr.html">Lien en vedette - Canada.ca</a></li>
  </ul>
  <h3>Affichage aléatoire dans la BOEW</h3>
  <ul>
    <li><a href="https://wet-boew.github.io/v4.0-ci/demos/wb-randomize/wb-randomize-en.html">Aléatoire</a> - exemples pratiques et code</li>
    <li><a href="https://wet-boew.github.io/GCWeb/docs/implementing-fr.html">Guide de mise en œuvre rapide – thème GCWeb</a></li>
  </ul>
  <h3>Mises en oeuvre</h3>
  <p>Déterminez ce qui convient le mieux au type de page que vous créez.</p>
  <div class="row">
    <div class="col-md-8">
      <div class="wb-tabs mrgn-tp-lg">
        <div class="tabpanels">
          <details id="004" open="open">
            <summary><strong>GC-AEM</strong></summary>
            <p class="mrgn-tp-lg">Pour Adobe Experience Manager (AEM) du gouvernement du Canada (GC)&nbsp;:</p>
            <ul>
              <li><a href="https://www.gcpedia.gc.ca/wiki/Documentation_d%27AEM_sp%C3%A9cifique_au_GC_6.5">Documentation d’AEM et des services Web gérés (accessible uniquement sur le réseau du gouvernement du Canada)</a></li>
            </ul>
          </details>
          <details id="005">
            <summary><strong>CDTS</strong></summary>
            <p class="mrgn-tp-lg">Pour la Solution de gabarits à déploiement centralisé (SGDC)&nbsp;:</p>
            <ul>
              <li><a href="https://cenw-wscoe.github.io/sgdc-cdts/docs/index-fr.html">Documentation de la SGDC</a></li>
            </ul>
          </details>
          <details id="006">
            <summary><strong>Drupal WXT</strong></summary>
            <p class="mrgn-tp-lg">Pour Drupal WXT&nbsp;:</p>
            <ul>
              <li><a href="https://drupalwxt.github.io/en/">Documentation de Drupal WxT (en anglais seulement)</a></li>
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
  <p>Le lien en vedette est un moyen contrôlé d’offrir un espace promotionnel &laquo;&nbsp;au-dessus du pli&nbsp;&raquo; sur les pages d’accueil.</p>
  <h3>Justification stratégique</h3>
  <p>Cette configuration de conception est facultative pour les modèles obligatoires suivants&nbsp;:</p>
  <ul>
    <li>Page d’accueil institutionnelle</li>
    <li>Page d’accueil de Canada.ca</li>
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
