---
altLangPage: "https://design.canada.ca/common-design-patterns/global-header.html"
breadcrumbs:
  - title: "À propos de Canada.ca"
    link:  "https://www.canada.ca/fr/gouvernement/a-propos.html"
  - title: "Système de conception de Canada.ca"
    link: "https://www.canada.ca/fr/gouvernement/a-propos/systeme-conception.html"
  - title: "Bibliothèque de modèles et de configurations de conception"
    link: "https://www.canada.ca/fr/gouvernement/a-propos/systeme-conception/bibliotheque-modeles.html"
date: 2017-10-05
dateModified: 2023-05-17
description: "Orientation sur l’utilisation de l’en-tête général sur les pages Canada.ca. L’en-tête général se trouve dans la partie supérieure de chaque page Web du gouvernement du Canada."
layout: default
title: "En-tête global"
---
<div class="cnt-wdth-lmtd">
  <div class="row">
    <div class="col-md-12 pull-left">
      <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only">
        <li class="mrgn-rght-lg">Dernière mise à jour&nbsp;: AAAA-MM-JJ</li>
      </ul>
    </div>
  </div>
  <p><span class="label label-danger">Obligatoire</span></p>
  <p>L’en-tête global se trouve au haut de chaque page Web du gouvernement du Canada.</p>
  <p>Le fait d’avoir le même en-tête global sur toutes les pages&nbsp;:</p>
  <ul>
    <li>renforce la marque Canada.ca;</li>
    <li>favorise la confiance;</li>
    <li>offre une expérience unifiée de la présence du gouvernement du Canada sur le Web;</li>
    <li>permet de naviguer dans le large éventail de services et de renseignements proposés.</li>
  </ul>
  <p><strong>Mise à jour de la conception en 2023</strong>&nbsp;: nous avons récemment mis à jour ce modèle dans le cadre d’une nouvelle stratégie de navigation issue du projet de recherche Orientation. Pour en savoir plus sur ce projet, consultez la section <a href="#recherche">Recherche et justification</a>.</p>
  <div class="pattern-demo mrgn-tp-lg">
    <figure class="mrgn-bttm-sm"><img src="../images/01-signin-button-lg-fr.png" class="img-responsive" alt=""></figure>
  </div>
  <section>
    <h2>Sur cette page</h2>
    <ul>
      <li><a href="#quand">Quand l’utiliser</a></li>
      <li><a href="#eviter">Ce qu’il faut éviter</a></li>
      <li><a href="#contenu">Contenu et conception</a></li>
      <li><a href="#implementation">Comment procéder à la mise en œuvre</a></li>
      <li><a href="#recherche">Recherche et justification</a></li>
      <li><a href="#changements">Derniers changements</a></li>
    </ul>
  </section>
  <h2 id="quand">Quand l’utiliser</h2>
  <p>Inclure l’en-tête global sur toutes les pages Web du gouvernement du Canada. Déterminez les éléments d’en-tête à utiliser en fonction du type de page que vous créez.</p>
</div>
<div class="row">
  <div class="col-md-8">
    <div class="wb-tabs mrgn-tp-lg">
      <div class="tabpanels">
        <details id="001" open="open">
          <summary><strong>Pages régulières</strong></summary>
          <p class="mrgn-tp-lg"><strong>Les pages régulières</strong> sont celles que les gens peuvent abandonner sans perdre de données, déclencher des erreurs ou mettre fin à leur session.</p>
          <h3>Exigences pour l’entête globale sur une page régulière</h3>
          <div class="panel panel-default mrgn-tp-md">
            <table class="table table-striped" id="mandatory-01" aria-live="polite">
              <caption class="wb-inv">
              Exigences pour l’entête globale sur une page régulière
              </caption>
              <thead>
                <tr>
                  <th class="col-md-8">Élément de l’en-tête</th>
                  <th class="col-md-4">Obligatoire</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="en-tete-general.html">Signature du gouvernement du Canada (liée à la page d'accueil de Canada.ca)</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Obligatoire</span></td>
                </tr>
                <tr>
                  <td><a href="changer-langue.html">Lien pour changer de langue</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Obligatoire</span></td>
                </tr>
                <tr>
                  <td><a href="connexion-contextuel.html">Champ de recherche du site</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Obligatoire</span></td>
                </tr>
                <tr>
                  <td><a href="connexion-contextuel.html">Bouton &laquo;&nbsp;Se connecter&nbsp;&raquo;</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Facultatif</span></td>
                </tr>
                <tr>
                  <td>Ligne de separation</td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
                <tr>
                  <td><a href="menu-site.html">Menu thématique</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span> <span class="small">(<a href="#smenu-note" id="smenu">Nota</a>)</span></td>
                </tr>
                <tr>
                  <td><a href="fil-ariane.html">Fil d'Ariane</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Obligatoire</span></td>
                </tr>
                <tr>
                  <td>Couleur d'arrière-plan (blanc)</td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Obligatoire</span></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2"><div class="fn-rtn small mrgn-tp-md" id="smenu-note">
                      <p><a href="#smenu"><span class="wb-inv">Retour à la note </span>Nota<span class="wb-inv"> referrer</span></a>&nbsp;: Vous devez appliquer le menu thématique sur toutes les pages utilisant le menu thématique. Cependant, vous pouvez le supprimer des autres pages régulières si les analyses montrent qu’il est utilisé dans moins de 1 % des visites.</p>
                    </div></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </details>
        <details id="002">
          <summary><strong>Pages transactionnelles</strong></summary>
          <p class="mrgn-tp-lg">Les <strong>pages transactionnelles</strong> sont des pages où les gens sont engagés dans un processus transactionnel, et le fait de suivre par erreur d’autres liens entraînerait des erreurs, une perte de données ou une interruption accidentelle de la session.</p>
          <h3>Exigences pour l’entête globale sur une page transactionnelle</h3>
          <div class="panel panel-default mrgn-tp-md">
            <table class="table table-striped" id="mandatory-02" aria-live="polite">
              <caption class="wb-inv">
              Exigences pour l’entête globale 
              </caption>
              <thead>
                <tr>
                  <th class="col-md-8">Élément de l’en-tête</th>
                  <th class="col-md-4">Obligatoire</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="en-tete-general.html">Signature du gouvernement du Canada (liée à la page d'accueil de Canada.ca)</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Obligatoire</span> (Le lien vers la page d'accueil de Canada.ca est facultatif)</td>
                </tr>
                <tr>
                  <td><a href="changer-langue.html">Lien pour changer de langue</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span> <span class="small">(<a href="#tmenu-note" id="tmenu">Nota</a>)</span></td>
                </tr>
                <tr>
                  <td><a href="connexion-contextuel.html">Champ de recherche du site</a></td>
                  <td>Facultatif</td>
                </tr>
                <tr>
                  <td><a href="connexion-contextuel.html">Bouton &laquo;&nbsp;Se connecter&nbsp;&raquo;</a></td>
                  <td>Facultatif</td>
                </tr>
                <tr>
                  <td>Ligne de separation</td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
                <tr>
                  <td><a href="menu-site.html">Menu thématique</a></td>
                  <td>Facultatif</td>
                </tr>
                <tr>
                  <td><a href="fil-ariane.html">Fil d'Ariane</a></td>
                  <td>Facultatif</td>
                </tr>
                <tr>
                  <td>Couleur d'arrière-plan (blanc)</td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv">Obligatoire</span></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2"><div class="fn-rtn small mrgn-tp-md" id="tmenu-note">
                      <p><a href="#tmenu"><span class="wb-inv">Retour à la note</span>Nota<span class="wb-inv"> referrer</span></a>&nbsp;: Les nouvelles pages transactionnelles des applications Web doivent permettre aux utilisateurs de basculer entre les langues officielles. Les anciennes applications Web qui ne permettent pas de basculer d’une langue à l’autre doivent être mises à jour ou remplacées. En attendant, vous pouvez omettre le basculement entre les langues si son utilisation entraîne une perte de données.</p>
                    </div></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </details>
        <details id="003">
          <summary><strong>Pages de campagne</strong></summary>
          <p class="mrgn-tp-lg">Les <strong>Pages de campagne</strong> sont des pages d'accueil pour les campagnes de marketing ou de publicité externes. La flexibilité de la présentation permet aux institutions de faire correspondre des éléments de leur campagne externe avec cette page d'accueil.</p>
          <h3>Exigences pour l’entête globale sur une page de campagne</h3>
          <div class="panel panel-default mrgn-tp-md">
            <table class="table table-striped" id="mandatory-03" aria-live="polite">
              <caption class="wb-inv">
              Exigences pour l’entête globale 
              </caption>
              <thead>
                <tr>
                  <th class="col-md-8">Élément de l’en-tête</th>
                  <th class="col-md-4">Obligatoire</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="en-tete-general.html">Signature du gouvernement du Canada (liée à la page d'accueil de Canada.ca)</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Obligatoire</span></td>
                </tr>
                <tr>
                  <td><a href="changer-langue.html">Lien pour changer de langue</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Obligatoire</span></td>
                </tr>
                <tr>
                  <td><a href="connexion-contextuel.html">Champ de recherche du site</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Obligatoire</span></td>
                </tr>
                <tr>
                  <td><a href="connexion-contextuel.html">Bouton &laquo;&nbsp;Se connecter&nbsp;&raquo;</a></td>
                  <td>Facultatif</td>
                </tr>
                <tr>
                  <td>Ligne de separation</td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Mandatory</span></td>
                </tr>
                <tr>
                  <td><a href="menu-site.html">Menu thématique</a></td>
                  <td>Facultatif</td>
                </tr>
                <tr>
                  <td><a href="fil-ariane.html">Fil d'Ariane</a></td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Obligatoire</span></td>
                </tr>
                <tr>
                  <td>Couleur d'arrière-plan (blanc)</td>
                  <td><span class="far fa-check-circle text-success"></span><span class="wb-inv"> Obligatoire</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </div>
  </div>
</div>
<div class="cnt-wdth-lmtd">
  <h2 id="eviter">Ce qu’il faut éviter</h2>
  <p>Ne personnalisez pas les éléments obligatoires de l’en-tête global au-delà de ce qui est recommandé dans les instructions pour chacun d’entre eux. La cohérence dans cet espace est essentielle pour renforcer la notoriété de la marque et la confiance des utilisateurs.</p>
  <p>Par exemple, le symbole du drapeau dans la signature du gouvernement du Canada devrait toujours être du ton de rouge approprié. Le premier lien du fil d’Ariane devrait toujours être intitulé &laquo;&nbsp;Canada.ca&nbsp;&raquo; et pointer vers la page d’accueil de Canada.ca.</p>
  <h2 id="contenu">Contenu et conception</h2>
  <p>Trouver des spécifications du contenu et de conception et des exemples visuels.</p>
  <ul>
    <li><a href="https://conception.canada.ca/configurations-conception-communes/en-tete-general.html">Signature du gouvernement du Canada</a></li>
    <li><a href="https://conception.canada.ca/configurations-conception-communes/changer-langue.html">Lien pour changer de langue</a></li>
    <li><a href="https://conception.canada.ca/configurations-conception-communes/connexion-contextuel.html">Champ de recherche du site</a></li>
    <li><a href="https://conception.canada.ca/configurations-conception-communes/connexion-contextuel.html">Bouton &laquo;&nbsp;Se connecter&nbsp;&raquo;</a></li>
    <li><a href="https://conception.canada.ca/configurations-conception-communes/menu-site.html">Menu thématique</a></li>
    <li><a href="https://conception.canada.ca/configurations-conception-communes/fil-ariane.html">Fil d’Ariane</a></li>
  </ul>
  <h3>Exemples visuels</h3>
  <details>
    <summary class="bg-info">Pages régulières</summary>
    <div class="pattern-demo mrgn-tp-lg">
      <figure>
        <figcaption><b>En-tête global : pages régulières, grand écran</b></figcaption>
        <img src="../images/01-signin-button-lg-fr.png" class="img-responsive" alt="">
        <details class="mrgn-tp-md">
          <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Texte de remplacement&nbsp;: schéma de l’en-tête global pour les grands écrans.</summary>
          <p class="mrgn-tp-lg">Sur les grands écrans, l’en-tête global sur une page régulière comporte 4 lignes&nbsp;:</p>
          <ol>
            <li>Lien pour changer de langue à l’extrême droite;</li>
            <li>Signature du gouvernement du Canada à gauche, champ de recherche du site à droite;</li>
            <li>Sous une ligne de séparation, le menu thématique se trouve à gauche, le bouton facultatif &laquo;&nbsp;Se connecter&nbsp;&raquo; se trouve à droite;</li>
            <li>Fil d’Ariane à gauche.</li>
          </ol>
        </details>
      </figure>
    </div>
    <div class="pattern-demo mrgn-tp-lg">
      <figure>
        <figcaption><b>En-tête global : pages régulières, petit écran</b></figcaption>
        <img src="../images/01-signin-button-sm-fr.png" class="img-responsive" alt="">
        <details class="mrgn-tp-md">
          <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Texte de remplacement&nbsp;: schéma de l’en-tête global pour les petits écrans.</summary>
          <p class="mrgn-tp-lg">Sur les petits écrans, l’en-tête global sur une page régulière comporte 4 lignes&nbsp;:</p>
          <ol>
            <li>Signature du gouvernement du Canada à gauche, lien pour changer de langue à l’extrême droite;</li>
            <li>Le champ de recherche du site couvre toute la ligne;</li>
            <li>Sous une ligne de séparation, le menu thématique se trouve à gauche, le bouton facultatif &laquo;&nbsp;Se connecter&nbsp;&raquo; se trouve à droite;</li>
            <li>Fil d’Ariane à gauche.</li>
          </ol>
        </details>
      </figure>
    </div>
  </details>
  <details>
    <summary class="bg-info">Pages transactionnelles</summary>
    <div class="pattern-demo mrgn-tp-lg">
      <figure>
        <figcaption><b>En-tête global minimum&nbsp;: pages transactionnelles, grand écran</b></figcaption>
        <img src="../images/01-global-header-transactional-lg-fr.png" class="img-responsive" alt="">
        <details class="mrgn-tp-md">
          <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Texte de remplacement&nbsp;: schéma de l’en-tête global minimum sur un grand écran</summary>
          <p class="mrgn-tp-lg">Sur les grands écrans, l’en-tête global minimum sur une page régulière comporte 2 lignes&nbsp;:</p>
          <ol>
            <li>Lien pour changer de langue à l’extrême droite;</li>
            <li>Signature du gouvernement du Canada à gauche avec une ligne de séparation en dessous.</li>
          </ol>
        </details>
      </figure>
    </div>
    <div class="pattern-demo mrgn-tp-lg">
      <figure>
        <figcaption><b>En-tête global minimum&nbsp;: pages transactionnelles, petit écran</b></figcaption>
        <img src="../images/01-global-header-transactional-sm-fr.png" class="img-responsive" alt="">
        <details class="mrgn-tp-md">
          <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Texte de remplacement&nbsp;: schéma de l’en-tête global minimum sur un petit écran</summary>
          <p class="mrgn-tp-lg">Sur les petits écrans, l’en-tête global minimum sur une page régulière comporte une seule ligne&nbsp;:</p>
          <ol>
            <li>Signature du gouvernement du Canada à gauche, lien pour changer de langue à droite, avec une ligne de séparation en dessous.</li>
          </ol>
        </details>
      </figure>
    </div>
  </details>
  <details>
    <summary class="bg-info">Pages de campagne</summary>
    <div class="pattern-demo mrgn-tp-lg">
      <figure>
        <figcaption><b>En-tête global minimum&nbsp;: pages de campagne, grand écran</b></figcaption>
        <img src="../images/01-global-header-campaign-lg-fr.png" class="img-responsive" alt="">
        <details class="mrgn-tp-md">
          <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Texte de remplacement&nbsp;: schéma de l’en-tête global minimum sur un grand écran</summary>
          <p class="mrgn-tp-lg">Sur les grands écrans, l’en-tête global minimum sur une page de campagne comporte 3 lignes&nbsp;:</p>
          <ol>
            <li>Lien pour changer de langue à l’extrême droite;</li>
            <li>Signature du gouvernement du Canada à gauche, champ de recherche du site à droite;</li>
            <li>Sous une ligne de séparation, le fil d’Ariane est à gauche.</li>
          </ol>
        </details>
      </figure>
    </div>
    <div class="pattern-demo mrgn-tp-lg">
      <figure>
        <figcaption><b>En-tête global minimum&nbsp;: pages de campagne, petit écran</b></figcaption>
        <img src="../images/01-global-header-campaign-sm-fr.png" class="img-responsive" alt="">
        <details class="mrgn-tp-md">
          <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Texte de remplacement&nbsp;: schéma de l’en-tête global minimum sur un petit écran</summary>
          <p class="mrgn-tp-lg">Sur les petits écrans, l’en-tête global minimum sur une page de campagne comporte 3 lignes&nbsp;:</p>
          <ol>
            <li>Signature du gouvernement du Canada à gauche, lien pour changer de langue à l’extrême droite;</li>
            <li>Le champ de recherche du site couvre toute la ligne;</li>
            <li>Sous une ligne de séparation, le fil d’Ariane est à gauche.</li>
          </ol>
        </details>
      </figure>
    </div>
  </details>
  <h2 id="implementation">Comment procéder à la mise en œuvre</h2>
  <p>Voyez des exemples concrets et accédez au code pour mettre l’en-tête en œuvre.</p>
  <h3>Référence pour la mise en œuvre du thème GCWeb (BOEW)</h3>
  <p>La référence à l’implémentation comprend la façon de configurer chaque élément de l’en-tête.</p>
  <ul>
    <li><a href="https://wet-boew.github.io/GCWeb/sites/header/header-docs-fr.html">Documentation de l’en-tête GCWeb (Boîte à outils de l’expérience Web)</a></li>
    <li><a href="https://wet-boew.github.io/GCWeb/docs/implementing-fr.html">Guide d’implémentation rapide — thème GCWeb</a></li>
  </ul>
  <h3>Mises en œuvre</h3>
  <p>Déterminez ce qui convient le mieux au type de page que vous créez. Consultez les instructions applicables à votre implémentation si vous souhaitez exclure les fils d’Ariane.</p>
</div>
<div class="row">
  <div class="col-md-8">
    <div class="wb-tabs mrgn-tp-lg">
      <div class="tabpanels">
        <details id="004" open="open">
          <summary><strong>AEM-GC</strong></summary>
          <p class="mrgn-tp-lg">Pour Adobe Experience Manager (AEM) du gouvernement du Canada (GC)&nbsp;:</p>
          <ul>
            <li><a href="https://www.gcpedia.gc.ca/wiki/AEM_GC-specific_Documentation_6.5?setlang=fr&uselang=fr">Documentation d’AEM et des services Web gérés (lien GCpédia – uniquement accessible sur le réseau du gouvernement du Canada)</a></li>
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
<div class="cnt-wdth-lmtd">
  <h2 id="recherche">Recherche et justification</h2>
  <p>Consultez les conclusions des recherches et la justification de la politique.</p>
  <h3>Constatations découlant des recherches</h3>
  <p>Deux projets de recherche sont à la base des dernières mises à jour des directives relatives à l’en-tête.</p>
  <h4>Étude sur la confiance du Canada.ca</h4>
  <p>Notre étude sur la confiance du Canada.ca et des recherches antérieures montrent qu’un en-tête cohérent est nécessaire pour maintenir une marque de confiance.</p>
  <p>À ce titre, les gens font plus confiance, par exemple :</p>
  <ul>
    <li>au drapeau dans la signature du gouvernement du Canada quand il est rouge;</li>
    <li>à un fond blanc plus qu’à un mode sombre.</li>
  </ul>
  <p>Si vous souhaitez en savoir plus au sujet de cette recherche, communiquez avec le Bureau de la transformation numérique à <a href="mailto:dto.btn@tbs-sct.gc.ca">dto.btn@tbs-sct.gc.ca</a>.</p>
  <h4>Projet Orientation dans Canada.ca</h4>
  <p>Nous avons mis à jour l’en-tête global de Canada.ca pour l’harmoniser à une nouvelle stratégie de navigation globale issue du projet de recherche Orientation.</p>
  <ul>
    <li><a href="https://blogue.canada.ca/resumes-recherche/orientation-dans-canada-ca.html">Résumé de recherche : Orientation dans Canada.ca</a><br>
      Ce résumé explique le contexte de la recherche et les idées qui ont motivé les mises à jour de la conception.</li>
    <li><a href="https://blogue.canada.ca/2022/12/21/le-projet-orientation.html">Le projet de recherche Orientation améliore notre approche de la navigation dans Canada.ca</a><br>
      Ce billet de blogue explique les changements apportés à la conception de Canada.ca et comment ils sont mis en œuvre.</li>
  </ul>
  <h3>Justification stratégique</h3>
  <p>Ce modèle est un élément obligatoire des spécifications du contenu et de l’architecture de l’information pour Canada.ca.</p>
  <ul>
    <li><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/communications-gouvernementales/specifications-contenu-architecture-information-canada/elements-obligatoires.html#header-footer">Éléments obligatoires du système de conception</a></li>
  </ul>
  <h2 id="changes">Derniers changements</h2>
  <dl class="dl-horizontal">
    <dt>
      <time datetime="YYYY-MM-DD" class="link-muted">YYYY-MM-DD</time>
    </dt>
    <dd>Mise à jour du modèle pour refléter les changements de la conception en fonction de l’étude sur la confiance et du projet Orientation, ajout d’exemples visuels pour les différents types de pages et ajout de liens vers des projets de recherche qui servent à éclairer les directives relatives à l’en-tête</dd>
    <dt>
      <time datetime="2022-08-17" class="link-muted">2022-08-17</time>
    </dt>
    <dd>Mise à jour de la conception du contenu pour plus de clarté, ajout d’un bouton contextuel de connexion et ajout de ressources de mise en œuvre</dd>
    <dt>
      <time datetime="2020-06-25" class="link-muted">2020-06-25</time>
    </dt>
    <dd>La version pour petits écrans a été modifiée pour être plus mince </dd>
  </dl>
</div>
