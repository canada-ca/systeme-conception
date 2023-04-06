---
altLangPage: "https://design.canada.ca/common-design-patterns/site-footer.html"
breadcrumbs:
  - title: À propos de Canada.ca
    link: "https://www.canada.ca/fr/gouvernement/a-propos.html"
  - title: Système de conception de Canada.ca
    link: "https://www.canada.ca/fr/gouvernement/a-propos/systeme-conception.html"
date: 2019-01-08
dateModified: 2023-04-06
description: "Le pied de page général (à l’échelle du site) qui se trouve au bas de chaque page. Il comprend la bande principale, une bande contextuelle et une bande sous pied de page. Il s’agit d’un modèle obligatoire avec des éléments facultatifs."
layout: default
title: "Pied de page général"
---
<p><strong>Dernière mise à jour</strong>&nbsp;:&nbsp;2023-04-06</p>
<section>
  <p><span class="label label-danger">Obligatoire</span></p>
  <p>Le pied de page général (à l’échelle du site) situé au bas de chaque page Web contient jusqu’à 3 bandes&nbsp;:</p>
  <ul>
    <li>Bande contextuelle</li>
    <li>Bande principale</li>
    <li>Bande sous pied de page</li>
  </ul>
  <p><strong>Mise à jour de conception en 2022</strong>&nbsp;: Nous avons récemment mis à jour ce modèle dans le cadre d’une nouvelle stratégie de navigation issue du projet de recherche Orientation dans Canada.ca. Pour en savoir plus, consultez la section <a href="#recherches">Recherches et justification</a> de cette page.</p>
  <div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl"><img src="../images/footer-fr-crop.png" class="img-responsive" alt=""> </div>
  <p><a href="pied-page-contenu.html">Consulter le modèle Pied de page de la zone du contenu</a> pour obtenir des conseils sur la manière d'appliquer les composantes Date de modification, Partager cette page, et Signaler un problème ou l'outil de rétroaction sur la page.</p>
  <section>
    <h2>Sur cette page</h2>
    <ul>
      <li><a href="#utiliser">Quand utiliser</a></li>
      <li><a href="#eviter">Quoi éviter</a></li>
      <li><a href="#conception">Contenu et conception</a></li>
      <li><a href="#comment">Comment mettre en œuvre</a></li>
      <li><a href="#recherches">Recherches et justification</a></li>
      <li><a href="#modifications">Dernières modifications</a></li>
      <li><a href="#discussion">Discussion</a></li>
    </ul>
  </section>
  <section>
    <h2 id="utiliser">Quand utiliser</h2>
    <p>Le pied de page fait office de dépannage pour les utilisateurs. Ils le consultent s’ils ne trouvent pas ce qu’ils
      cherchent dans le contenu principal de la page.</p>
    <p>Chaque élément du pied de page général fournit un accès direct et centralisé à des types de contenu précis (par exemple,
      Coordonnées, Ministères et organismes, Confidentialité). </p>
    <p>Déterminez les éléments de pied de page à utiliser en fonction du type de page que vous créez.</p>
    <div class="wb-tabs">
      <div class="tabpanels">
        <details id="001" open="open">
          <summary><strong>Pages régulières</strong></summary>
          <div class="col-md-9">
            <p class="mrgn-tp-lg">Les <strong>pages régulières</strong> sont des pages dans lesquelles les utilisateurs peuvent naviguer sans perdre de données, déclencher des erreurs ou
              mettre fin à leur session.</p>
          </div>
          <div class="col-md-12">
            <h3>Exigences générales pour le pied de page d’une page régulière</h3>
            <div class="panel panel-default mrgn-tp-md">
              <table class="table table-striped table-condensed" id="mandatory-01" aria-live="polite">
                <caption class="wb-inv">
                Exigences générales pour le pied de page
                </caption>
                <thead>
                  <tr>
                    <th class="col-md-4">Élément de pied de page</th>
                    <th class="col-md-3">Obligatoire</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1. <a href="pied-page-contextuelle.html">Bande contextuelle</a></td>
                    <td>Optionnel</td>
                  </tr>
                  <tr>
                    <td>2. <a href="pied-page-principale.html">Bande principale</a></td>
                    <td><span class="far fa-check-circle text-success"></span><span class="wb-inv">Obligatoire</span></td>
                  </tr>
                  <tr>
                    <td>3. <a href="pied-page-sous.html">Bande sous pied de page avec le mot-symbole Canada
                      <p></p>
                      </a></td>
                    <td><span class="far fa-check-circle text-success"></span><span class="wb-inv">Obligatoire</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </details>
        <details id="002">
          <summary><strong>Pages transactionnelles</strong></summary>
          <div class="col-md-9">
            <p class="mrgn-tp-lg">Les <strong>pages transactionnelles</strong> sont des pages avec une tâche d’interaction où les personnes risquent de perdre des données, de déclencher des erreurs ou de mettre fin à leur session si elles quittent la page.</p>
          </div>
          <div class="col-md-12">
            <h3>Exigences générales pour le pied de page d’une page transactionnelle</h3>
            <div class="panel panel-default mrgn-tp-md">
              <table class="table table-striped table-condensed" id="mandatory-02" aria-live="polite">
                <caption class="wb-inv">
                Exigences générales pour le pied de page
                </caption>
                <thead>
                  <tr>
                    <th class="col-md-4">Élément de pied de page</th>
                    <th class="col-md-3">Obligatoire</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1. <a href="pied-page-contextuelle.html">Bande contextuelle</a></td>
                    <td>Optionnel</td>
                  </tr>
                  <tr>
                    <td>2. <a href="pied-page-principale.html">Bande principale</a></td>
                    <td>Optionnel</td>
                  </tr>
                  <tr>
                    <td>3. <a href="pied-page-sous.html">Bande sous pied de page avec le mot-symbole Canada
                      <p></p>
                      </a></td>
                    <td><span class="far fa-check-circle text-success"></span><span class="wb-inv">Obligatoire</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </details>
        <details id="003">
          <summary><strong>Pages de campagne</strong></summary>
          <div class="col-md-9">
            <p class="mrgn-tp-lg">Les <strong>pages de campagne</strong> sont des pages de renvoi pour des campagnes de marketing ou de publicité externes. La flexibilité de la mise en page
              permet aux institutions d’inclure des éléments de leur campagne externe dans la page.</p>
          </div>
          <div class="col-md-12">
            <h3>Exigences générales pour le pied de page d’une page de campagne</h3>
            <div class="panel panel-default mrgn-tp-md">
              <table class="table table-striped table-condensed" id="mandatory-03" aria-live="polite">
                <caption class="wb-inv">
                Exigences générales pour le pied de page
                </caption>
                <thead>
                  <tr>
                    <th class="col-md-4">Élément de pied de page</th>
                    <th class="col-md-3">Obligatoire</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1. <a href="pied-page-contextuelle.html">Bande contextuelle</a></td>
                    <td>Optionnel</td>
                  </tr>
                  <tr>
                    <td>2. <a href="pied-page-principale.html">Bande principale</a></td>
                    <td>Optionnel</td>
                  </tr>
                  <tr>
                    <td>3. <a href="pied-page-sous.html">Bande sous pied de page avec le mot-symbole Canada
                      <p></p>
                      </a></td>
                    <td><span class="far fa-check-circle text-success"></span><span class="wb-inv">Obligatoire</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </details>
      </div>
    </div>
  </section>
  <section>
    <h2 id="eviter">Quoi éviter</h2>
    <p>Ne personnalisez pas les éléments obligatoires du pied de page général, au-delà de ce qui est recommandé dans les conseils pour chacun. La cohérence dans cet espace est essentielle pour consolider la reconnaissance de la marque et la confiance
      des utilisateurs.</p>
    <p>Par exemple, le mot-symbole Canada doit toujours apparaître dans le coin inférieur droit et les liens dans la bande
      principale ne doivent jamais changer.</p>
  </section>
  <section>
    <h2 id="conception">Contenu et conception</h2>
    <p>Spécifications détaillées de contenu et de conception pour chaque élément du pied de page&nbsp;:</p>
    <ol>
      <li><a href="pied-page-contextuelle.html">Bande contextuelle</a></li>
      <li><a href="pied-page-principale.html">Bande principale</a></li>
      <li><a href="pied-page-sous.html">Bande sous pied de page</a></li>
    </ol>
    <h3>Exemples visuels</h3>
    <details>
      <summary class="bg-info">Pages régulières</summary>
      <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
        <figure class="mrgn-tp-md mrgn-bttm-lg">
          <figcaption><b>Pied de page général – grand écran</b></figcaption>
          <img src="../images/footer-fr.png" class="img-responsive"
					alt="Schéma du pied de page général pour les grands écrans. Version texte ci-dessous :">
          <details>
            <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Version texte</summary>
            <p>Sur les grands écrans, le pied de page général comprend 3 bandes distinctes de liens. La première est la bande
              contextuelle. Elle contient un titre et 3 liens contextuels sur une seule ligne. La seconde est la bande principale.
              Elle est disposée en 3 colonnes et contient des liens vers &laquo;&nbsp;Toutes les personnes-ressources&nbsp;&raquo;, &laquo;&nbsp;Ministères et
              organismes&nbsp;&raquo; et &laquo;&nbsp;À propos du gouvernement&nbsp;&raquo;. Une petite ligne décorative sert de pause avant de poursuivre avec des
              liens vers tous les thèmes et publics. La bande sous pied de page se trouve au bas de la page et contient des liens vers
              &laquo;&nbsp;Médias sociaux&nbsp;&raquo;, &laquo;&nbsp;Applications mobiles&nbsp;&raquo;, &laquo;&nbsp;À propos de Canada.ca&nbsp;&raquo;, &laquo;&nbsp;Avis&nbsp;&raquo; et &laquo;&nbsp;Confidentialité&nbsp;&raquo;. Ils sont tous alignés à gauche sur une seule ligne. Elle comprend également le mot-symbole Canada sur la même ligne, aligné à droite.</p>
          </details>
        </figure>
      </div>
      <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
        <figure class="mrgn-tp-md mrgn-bttm-lg">
          <figcaption><b>Pied de page général – petit écran</b></figcaption>
          <img src="../images/footer-mobile-fr.png" class="img-responsive" alt="Schéma du pied de page général pour les petits écrans. Version texte ci-dessous :">
          <details>
            <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Version texte</summary>
            <p>Sur les petits écrans, le pied de page général comprend 3 bandes distinctes de liens. La première est la bande
              contextuelle. Elle contient un titre et 3 liens contextuels sur une seule ligne. La seconde est la bande principale.
              Elle est disposée en une seule colonne et contient des liens vers &laquo;&nbsp;Toutes les personnes-ressources&nbsp;&raquo;, &laquo;&nbsp;Ministères et
              organismes&nbsp;&raquo; et &laquo;&nbsp;À propos du gouvernement&nbsp;&raquo;. Une petite ligne décorative sert de pause avant de poursuivre avec des
              liens vers tous les thèmes et publics. La bande sous pied de page se trouve au bas de la page et contient des liens vers
              &laquo;&nbsp;Médias sociaux&nbsp;&raquo;, &laquo;&nbsp;Applications mobiles&nbsp;&raquo;, &laquo;&nbsp;À propos de Canada.ca&nbsp;&raquo;, &laquo;&nbsp;Avis&nbsp;&raquo; et &laquo;&nbsp;Confidentialité&nbsp;&raquo;. Sous ces liens se trouve une dernière rangée avec le mot-symbole Canada aligné à droite.</p>
          </details>
        </figure>
      </div>
    </details>
    <details>
      <summary class="bg-info">Pages transactionnelles et de campagne</summary>
      <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
        <figure class="mrgn-tp-md mrgn-bttm-lg">
          <figcaption><b>Pied de page général minimum – grand écran</b></figcaption>
          <img src="../images/footer-min-fr.png" class="img-responsive"
					alt="Schéma du pied de page général minimum pour les grands écrans. Version texte ci-dessous :">
          <details>
            <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Version texte</summary>
            <p>Sur les grands écrans, le pied de page général minimum pour les pages transactionnelles et de campagne comprend seulement la bande
              sous pied de page avec les liens vers « Avis » et « Confidentialité ». Ils
              sont tous alignés à gauche sur une seule ligne. Elle comprend également le mot-symbole Canada sur la même ligne, aligné
              à droite.</p>
          </details>
        </figure>
      </div>
      <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
        <figure class="mrgn-tp-md mrgn-bttm-lg">
          <figcaption><b>Pied de page général minimum – petit écran</b></figcaption>
          <img src="../images/footer-min-mobile-fr.png" class="img-responsive" alt="Schéma du pied de page général minimum pour les petits écrans. Version texte ci-dessous :">
          <details>
            <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Version texte</summary>
            <p>Sur les petits écrans, le pied de page général minimum pour les pages transactionnelles et de campagne comprend seulement la bande
              sous pied de page avec les liens vers &laquo;&nbsp;Avis&nbsp;&raquo; et &laquo;&nbsp;Confidentialité&nbsp;&raquo;, disposés en une seule colonne. Sous ces liens se trouve le mot-symbole Canada aligné à droite.</p>
          </details>
        </figure>
      </div>
    </details>
  </section>
  <section>
    <h2 id="comment">Comment mettre en œuvre</h2>
    <p>Trouvez des exemples pratiques et du code pour mettre en œuvre le pied de page.</p>
    <h3>Référence de mise en oeuvre du thème GCWeb</h3>
    <h4>Norme</h4>
    <ul>
      <li><a href="https://wet-boew.github.io/GCWeb/sites/footers/no-footer-contextual-fr.html">Bande principale et bande sous pied de page</a></li>
    </ul>
    <h4>Mise en œuvre alternée pour les pages régulières</h4>
    <ul>
      <li><a href="https://wet-boew.github.io/GCWeb/sites/footers/footers-fr.html">Pied de page complet (bande contextuelle, bande principale et bande sous de pied de page)</a></li>
    </ul>
    <h4>Mises en œuvre alternatives pour les pages transactionnelles et les pages de campagne</h4>
    <ul>
      <li><a href="https://wet-boew.github.io/GCWeb/sites/footers/footers-fr.html">Pied de page complet (bande contextuelle, bande principale et bande sous de pied de page)</a></li>
      <li><a href="https://wet-boew.github.io/GCWeb/sites/footers/only-footer-main-fr.html">Bande principale et bande sous pied de page sans les liens facultatifs</a></li>
      <li><a href="https://wet-boew.github.io/GCWeb/sites/footers/no-footer-main-fr.html">Bande contextuelle et bande sous pied de page</a></li>
      <li><a href="https://wet-boew.github.io/GCWeb/sites/footers/only-footer-contextual-fr.html">Bande contextuelle et bande sous pied de page sans les liens facultatifs</a></li>
      <li><a href="https://wet-boew.github.io/GCWeb/sites/footers/only-footer-corporate-fr.html">Uniquement la bande sous pied de page</a></li>
      <li><a href="https://wet-boew.github.io/GCWeb/sites/footers/no-footers-fr.html">Uniquement la bande sous pied de page sans liens facultatifs</a></li>
    </ul>
  </section>
  <section>
    <h3>Mises en œuvre</h3>
    <p>Déterminez la configuration du pied de page qui répond le mieux à vos besoins pour le type de page que vous créez. Consultez les conseils de votre mise en œuvre pour personnaliser les liens de la bande contextuelle ou de la bande de sous-pied.</p>
    <div class="wb-tabs">
      <div class="tabpanels">
        <details id="004" open="open">
          <summary><strong>AEM du GC</strong></summary>
          <p class="mrgn-tp-lg">Pour l'Adobe Experience Manager du Gouvernement du Canada (AEM) :</p>
          <ul>
            <li><a href="https://www.gcpedia.gc.ca/gcwiki/images/8/8c/Documentation-AEM-6.5-Unite-3-1-1-Personnaliser_le_pied_de_page_general.pdf">Personnaliser le pied de page général (PDF - disponible uniquement sur le réseau du gouvernement du Canada)</a></li>
            <li><a href="https://www.gcpedia.gc.ca/wiki/Documentation_d%27AEM_sp%C3%A9cifique_au_GC_6.5">Documentation d'AEM / Service Web Géré (disponible uniquement sur le réseau du gouvernement du Canada)</a></li>
          </ul>
        </details>
        <details id="005">
          <summary><strong>SGDC</strong></summary>
          <p class="mrgn-tp-lg">Pour la Solution de gabarits à déploiement centralisé (SGDC) :</p>
          <ul>
            <li><a href="https://cdts.service.canada.ca/app/cls/WET/gcweb/v4_0_47/cdts/samples/footer-fr.html">Pied de page complet (les bandes contextuelle, principale, et sous pied de page)</a></li>
            <li><a href="https://cenw-wscoe.github.io/sgdc-cdts/docs/index-fr.html">Documentation SGDC documentation</a></li>
          </ul>
        </details>
        <details id="006">
          <summary><strong>Drupal WxT</strong></summary>
          <p class="mrgn-tp-lg">Pour Drupal WxT&nbsp;:</p>
          <ul>
            <li><a href="https://drupalwxt.github.io/en/">Documentation Drupal WxT (en anglais seulement)</a></li>
          </ul>
          <p class="mrgn-tp-lg">Mise à jour du pied de page de 2023&nbsp;:</p>
          <ul>
            <li><a href="https://github.com/drupalwxt/wxt/releases/tag/4.4.1">Les notes de version Drupal WxT (4.4.1) (en anglais seulement)</a></li>
            <li><a href="https://drupalwxt.github.io/en/docs/general/update/">Le processus de mise à jour Drupal WxT (en anglais seulement)</a></li>
          </ul>
        </details>
      </div>
    </div>
  </section>
  <section>
    <h2 id="recherches">Recherches et justification</h2>
    <p>Nous avons mis à jour le pied de page général de Canada.ca pour le faire correspondre à une nouvelle stratégie de
      navigation générale issue du projet de recherche Orientation dans Canada.ca.</p>
    <ul>
      <li><a href="https://blogue.canada.ca/resumes-recherche/orientation-dans-canada-ca">Résumé de la recherche sur l’orientation dans Canada.ca</a><br>
        Ce résumé explique le contexte de la recherche et les constatations qui ont mené aux mises à jour de la conception.</li>
      <li><a href="https://blogue.canada.ca/2022/12/21/le-projet-orientation.html">Le projet Orientation dans Canada.ca améliore notre approche en matière de la navigation</a><br>
        Ce billet de blogue explique les changements proposés à la conception de Canada.ca et comment ils seront mis en œuvre.</li>
    </ul>
  </section>
  <section>
    <h2 id="modifications">Dernières modifications</h2>
    <dl class="dl-horizontal">
      <dt>
        <time datetime="2023-02-08" class="link-muted">2023-02-08</time>
      </dt>
      <dd>Ajout des liens vers les conseils de mise en œuvre de l'AEM du GC, la SGDC et le Drupal WxT</dd>
      <dt>
        <time datetime="2022-12-23" class="link-muted">2022-12-23</time>
      </dt>
      <dd>Ajout des liens pour le résumé de recherche et le billet de blogue pour le projet Orientation dans Canada.ca</dd>
      <dt>
        <time datetime="2022-11-30" class="link-muted">2022-11-30</time>
      </dt>
      <dd>Mise à jour du modèle pour tenir compte des changements de conception du projet de recherche Orientation dans Canada.ca, déplacement des
        spécifications détaillées vers des sous-pages propres aux bandes individuelles</dd>
    </dl>
  </section>
  <section>
    <h2 id="discussion">Discussion</h2>
    <ul>
      <li><a href="https://github.com/canada-ca/design-system-systeme-conception/issues">Discuter du modèle dans les questions GitHub</a></li>
      <li><a
				href="https://design-gc-conception.slack.com/join/shared_invite/enQtODE1OTc5Mzg5NzQ4LWQ3MjZjMTdjMjk2ZTZmMTJjYWQ3ZmRiNDYwYjRmN2NjYzQyNjFlNDBlY2FkNWE1ODg2YjExY2QwZmVjN2MwMGM">Se joindre à la conversation dans Slack</a></li>
      <li><a href="mailto:dto.btn@tbs-sct.gc.ca">Envoyer un courriel au Bureau de la transformation numérique</a></li>
    </ul>
  </section>
</section>

<!-- START PAGE FEEDBACK WIDGET -->
<div class="row row-no-gutters mrgn-tp-xl">
  <div class="col-sm-7 col-lg-6">
    <section class="gc-pg-hlpfl provisional">
      <div class="well mrgn-bttm-0">
        <form id="gc-pg-hlpfl-frm" action="#" method="post" autocomplete="off">
          <input type="hidden" name="institutionopt" value="tbs">
          <input type="hidden" name="themeopt" value="Policies">
          <input type="hidden" name="language" value="FR">
          <input type="hidden" name="pageTitle" value="Concevoir du contenu pour Canada.ca">
          <input type="hidden" name="submissionPage"
							value="https://conception.canada.ca/configurations-conception-communes/pied-page.html">
          <input type="hidden" name="sectionopt" value="Design system">
          <input type="hidden" id="helpful" name="helpful" value="Yes">
          <div class="gc-pg-hlpfl-btn">
            <div class="row row-no-gutters">
              <div class="col-xs-12 col-sm-7 mrgn-tp-sm">
                <h2 class="mrgn-tp-sm h5">Avez-vous trouvé ce que vous cherchiez?</h2>
              </div>
              <div class="col-xs-8 col-sm-5 text-right">
                <button id="btnyes" type="submit" value="Yes" class="btn btn-primary">Oui</button>
                <button id="btnno" type="button"
										class="btn btn-primary mrgn-lft-sm nojs-hide">Non</button>
              </div>
            </div>
          </div>
          <p class="h3 hidden nojs-show">Sinon, dites nous pourquoi&nbsp;:</p>
          <div class="gc-pg-hlpfl-no nojs-show">
            <fieldset>
              <legend class="h4 mrgn-tp-0 mrgn-bttm-md">Qu’est-ce qui n’allait pas?</legend>
              <div class="radio">
                <label for="problem1">
                  <input name="problem" id="problem1" type="radio"
											value="Je ne peux pas trouver l’information"
											data-gc-analytics-wtph-value="I can't find the information-Je ne peux pas trouver l'information"
											data-gc-analytics-collect="notPrivate">
                  Je ne peux pas <strong>trouver</strong> l’information </label>
              </div>
              <div class="radio">
                <label for="problem2">
                  <input name="problem" id="problem2" type="radio"
											value="L'information est difficile à comprendre"
											data-gc-analytics-wtph-value="The information is hard to understand-J'ai trouvé l'information difficile à comprendre"
											data-gc-analytics-collect="notPrivate">
                  L'information est difficile à <strong>comprendre</strong> </label>
              </div>
              <div class="radio">
                <label for="problem3">
                  <input name="problem" id="problem3" type="radio"
											value="Il y avait une erreur / quelque chose ne fonctionnait pas"
											data-gc-analytics-wtph-value="There was an error or something didn't work-Il y avait une erreur our quelque chose ne fonctionnait pas"
											data-gc-analytics-collect="notPrivate">
                  Il y avait une erreur / quelque chose <strong>ne fonctionnait pas</strong> </label>
              </div>
              <div class="radio">
                <label for="problem4">
                  <input name="problem" id="problem4" type="radio" value="Other reason"
											data-gc-analytics-wtph-value="Other reason-Autre raison"
											data-gc-analytics-collect="notPrivate">
                  Autre raison </label>
              </div>
            </fieldset>
            <label for="problem6" class="mrgn-bttm-0">Veuillez fournir plus de détails</label>
            <p class="small"> <strong>Vous ne recevrez aucune réponse. Les numéros de téléphone et les adresses
              électroniques seront supprimés.</strong> <br>
              <span class="small">Maximum de 300 caractères</span> </p>
            <textarea id="problem6" name="details" class="full-width" maxlength="300"></textarea>
            <button type="submit" value="No"
								class="btn btn-primary mrgn-tp-md mrgn-bttm-sm">Soumettre</button>
          </div>
        </form>
        <div class="gc-pg-hlpfl-thnk hide">
          <p class="h6 mrgn-tp-sm mrgn-bttm-sm"><span class="far fa-check-circle text-success mrgn-rght-sm"
								aria-hidden="true"></span> Merci de vos commentaires</p>
        </div>
      </div>
    </section>
  </div>
  <div class="col-sm-3 col-sm-offset-1 col-lg-offset-3">
    <div class="wb-share"
				data-wb-share="{&quot;pnlId&quot;:&quot;pnlShrPg&quot;, &quot;lnkClass&quot;: &quot;btn btn-default btn-block mrgn-tp-md&quot;}"> </div>
  </div>
</div>
<!-- END PAGE FEEDBACK WIDGET -->
