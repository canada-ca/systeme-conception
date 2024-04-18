---
altLangPage: https://design.canada.ca/common-design-patterns/latest-news.html
date: "2019-11-28"
dateModified: "2024-04-03"
description: "Orientation sur l’utilisation de la configuration de conception des dernières nouvelles sur Canada.ca."
title: "Dernières nouvelles"
---

<p><strong>Dernière mise à jour</strong>&nbsp;: {{ page.dateModified }}</p>
<p>Les dernières nouvelles sont une configuration de conception visant à afficher les éléments les plus récents de la salle de presse du gouvernement du Canada qui sont directement associés au contenu de la page.</p>
<div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl"><img src="/images/latest-news-fr.png" class="img-responsive" alt="" /></div>
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
  <p>Utilisez la configuration de conception des dernières nouvelles pour offrir des éléments de nouvelles qui sont directement liés au contenu de votre page ou votre organisation.</p>
</section>
<section id="eviter">
  <h2>Quoi éviter</h2>
  <p>N’utilisez pas cette configuration de conception si votre organisation ne publie pas régulièrement de nouvelles.</p>
  <p>N’utilisez pas cette configuration de conception pour afficher des nouvelles d’une autre organisation ou pour du contenu non lié.</p>
  <p>N’utilisez pas cette configuration de conception pour afficher des promotions, qui sont un type de produit promotionnel et non des nouvelles.</p>
  <p>N’utilisez pas cette configuration de conception sur les pages de navigation.</p>
  <p>N’utilisez pas cette configuration de conception lorsque vous souhaitez que les gens restent sur la page et accomplissent leur tâche.</p>
</section>
<section id="contenu">
  <h2>Contenu et conception</h2>
  <p>Trouvez des spécifications de contenu et de conception et des exemples visuels.</p>
  <h3>Spécifications de contenu</h3>
  <p>L’étiquette du titre est &laquo;&nbsp;News&nbsp;&raquo; en anglais et &laquo;&nbsp;Nouvelles&nbsp;&raquo; en français.</p>
  <p>Incluez trois nouvelles, suivies du lien vers &laquo;&nbsp;En savoir plus&nbsp;&raquo;&nbsp;: il dirige les gens vers le fil complet de la salle de presse, par exemple &laquo;&nbsp;En savoir plus&nbsp;: Nouvelles de [Institution]&nbsp;&raquo;. Utilisez du texte de lien descriptif pour que l’utilisateur sache clairement où il ira s’il clique sur le lien.</p>
  <p>Chaque nouvelle est mise en forme de la manière suivante&nbsp;:</p>
  <p>[lien vers le communiqué]<br>
    [AAAA-MM-JJ HH:MM]</p>
  <h3>Spécifications de conception</h3>
  <ul>
    <li>Le texte utilise les styles standards de Canada.ca&nbsp;:
      <ul>
        <li><a href="/styles/typographie.html">Typographie</a></li>
        <li><a href="/styles/couleurs.html">Couleurs</a></li>
        <li>Le titre est codé comme H2, mais le style est H3.</li>
      </ul>
    </li>
    <li>Mise en page&nbsp;:
      <ul>
        <li>Maximum de 3 éléments énumérés à la fois; utilisez le lien &laquo;&nbsp;En savoir plus&nbsp;&raquo; pour mener à d’autres nouvelles.</li>
        <li>Le codage des nouvelles correspond à une liste sans style.</li>
      </ul>
    </li>
  </ul>
  <h3>Exemples visuels</h3>
  <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
      <figcaption><b>Dernières nouvelles</b></figcaption>
      <img src="/images/latest-news-fr.png" class="img-responsive" alt="Configuration de conception des dernières nouvelles. Version texte ci-dessous&nbsp;:" />
      <details>
        <summary class="wb-toggle" data-toggle='{"print":"on"}'>Description de l’image&nbsp;: dernières nouvelles</summary>
        <p>Un en-tête de section, Nouvelles, est suivi de trois liens. Chaque titre de lien est [Titre de la nouvelle]. Sous chaque lien, on trouve un espace réservé pour la date et l’heure, présenté comme AAAA-MM-JJ HH:MM. En dessous de la liste de liens et de dates, on trouve une ligne indiquant En savoir plus&nbsp;: Nouvelles de [Institution].</p>
      </details>
    </figure>
  </div>
</section>
<section id="œuvre">
  <h2>Comment procéder à la mise en œuvre</h2>
  <p>Trouvez des exemples pratiques et de code pour mettre en œuvre la configuration de conception des dernières nouvelles.</p>
  <h3>Référence pour la mise en œuvre du thème GCWeb (BOEW)</h3>
  <ul>
    <li><a href="https://wet-boew.github.io/gcweb-compiled-demos/wetboew-demos/feeds/feeds-fr.html">Exemple : Fil de syndication</a></li>
    <li><a href="https://wet-boew.github.io/wet-boew/docs/ref/feeds/feeds-fr.html">Documentation : Fil de syndication</a></li>
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
              <li><a href="https://drupalwxt.github.io/">Documentation de Drupal WxT</a> (en anglais seulement)</li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="recherche">
  <h2>Recherche et justification</h2>
  <p>La configuration de conception des dernières nouvelles est facultative pour les modèles obligatoires suivants :</p>
  <ul>
    <li><a href="https://conception.canada.ca/modeles-obligatoire/pages-profil-institutionnel.html">Page d’accueil institutionnelle</a></li>
    <li><a href="https://conception.canada.ca/modeles-obligatoire/pages-profil-ministres.html">Pages ministérielles</a></li>
  </ul>
</section>
<section id="changements">
  <h2>Derniers changements</h2>
  <dl class="dl-horizontal">
    <dt>
      <time datetime="2024-04-03" class="link-muted">2024-04-03</time>
    </dt>
    <dd>Mise à jour de l’orientation pour y inclure les spécifications de contenu et de conception, des exemples visuels et une orientation sur la mise en œuvre.</dd>
  </dl>
</section>
