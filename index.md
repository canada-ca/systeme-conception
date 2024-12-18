---
altLangPage: https://design.canada.ca
date: 2020-12-17
dateModified: 2024-08-26
description: "Le conception de Canada.ca contient des styles, des modèles et des configurations réutilisables qui rendent les services numériques du gouvernement du Canada plus conviviaux, plus cohérents et plus fiables."
layout: "without-h1"
title: "Concevoir pour Canada.ca"
---
<h1 property="name" id="wb-cont" dir="ltr">Concevoir pour Canada.ca</h1>
<p>Éléments obligatoires de Canada.ca, principes de rédaction, comment organiser le contenu pour le rendre facile à trouver, comment optimiser le contenu Web, données probantes sur les choix de conception.</p>
<section>
  <div class="row">
    <section class="wb-eqht gc-drmt">
      <div class="col-md-4">
        <h3 class="h5"><a href="{{ site.url }}/specifications.html">Spécifications de Canada.ca</a></h3>
        <p>Qui doit utiliser la conception de Canada.ca, éléments obligatoires, principes de conception, architecture de l’information et trouvabilité, modèles et configurations</p>
      </div>
      <div class="col-md-4">
        <h3 class="h5"><a href="{{ site.url }}/amelioration-continue.html">Amélioration continue du contenu Web</a></h3>
        <p>Choisir quoi améliorer, organiser et préparer son équipe, recherche et prototypage, concevoir le contenu, suivi et mesure du succès</p>
      </div>
      <div class="col-md-4">
        <h3 class="h5"><a href="{{ site.urlblogue }}">Blogue Canada.ca</a></h3>
        <p>Données probantes et observations relatives à l’amélioration de l’information et des services dans Canada.ca</p>
      </div>
      <div class="col-md-4">
        <h3 class="h5"><a href="{{ site.url }}/resumes-recherche/">Résumés de recherche</a></h3>
        <p>Études menées dans le but de faciliter la recherche et la compréhension des informations et services du gouvernement du Canada</p>
      </div>
      <div class="col-md-4">
        <h3 class="h5"><a href="{{ site.url }}/a-propos/">À propos de Canada.ca</a></h3>
        <p>En demande, analytique de Canada.ca, coordonnées du gouvernement du Canada</p>
      </div>
    </section>
  </div>
</section>
<section>
  <h2>Trouver des directives</h2>
  <div class="row mrgn-tp-md">
    <div class="col-md-3 small">
      <details open>
        <summary class="bg-primary text-center">Sources</summary>
        <form class="wb-tables-filter mrgn-lft-md mrgn-rght-md" data-bind-to="design">
          <div class="row">
            <div class="form-group">
              <fieldset>
                <legend class="wb-inv"><span class="field-name">Sources</span></legend>
                <ul class="list-unstyled">
                  <li class="checkbox">
                    <label for="dt_source1">
                      <input type="checkbox" id="dt_source1" name="dt_source" data-column="1" value="Blogue">
                      Blogue</label>
                  </li>
                  <li class="checkbox">
                    <label for="dt_source2">
                      <input type="checkbox" id="dt_source2" name="dt_source" data-column="1" value="Guide de rédaction du contenu">
                      Guide de rédaction du contenu</label>
                  </li>
                  <li class="checkbox">
                    <label for="dt_source3">
                      <input type="checkbox" id="dt_source3" name="dt_source" data-column="1" value="Spécifications de Canada.ca">
                      Spécifications de Canada.ca</label>
                  </li>
                  <li class="checkbox">
                    <label for="dt_source4">
                      <input type="checkbox" id="dt_source4" name="dt_source" data-column="1" value="Concevoir le contenu">
                      Concevoir le contenu</label>
                  </li>
                  <li class="checkbox">
                    <label for="dt_source5">
                      <input type="checkbox" id="dt_source5" name="dt_source" data-column="1" value="Résumé de recherche">
                      Résumé de recherche</label>
                  </li>
                  <li class="checkbox">
                    <label for="dt_source6">
                      <input type="checkbox" id="dt_source6" name="dt_source" data-column="1" value="Bibliothèque de modèles et de configurations de conception">
                      Bibliothèque de modèles et de configurations de conception</label>
                  </li>
                </ul>
              </fieldset>
            </div>
            <div class="col-md-12">
              <button type="submit" class="btn btn-primary full-width" aria-controls="dataset-filter"><span class="fas fa-filter mrgn-rght-sm"></span> Filtre</button>
            </div>
            <div class="col-md-12 mrgn-tp-md">
              <button type="reset" class="btn btn-default full-width">Réinitialiser aux valeurs par défaut</button>
            </div>
          </div>
        </form>
      </details>
    </div>
    <div class="col-md-9">
      <div class="panel panel-default">
        <div class="mrgn-tp-md mrgn-bttm-md">
          <table class="wb-tables table table-striped small mrgn-tp-lg brdr-tp" aria-live="polite" id="design" data-page-length="25" data-wb-tables="{
            &quot;bDeferRender&quot;: true,
            &quot;ajaxSource&quot;: &quot;./ajax/patterns-01-fr.json&quot;,
            &quot;order&quot;: [0, &quot;asc&quot;],
            &quot;paging&quot;: true,
            &quot;info&quot;: true,
            &quot;columns&quot;: [
            { &quot;data&quot;: &quot;NAME&quot;, &quot;className&quot;: &quot;&quot; },
            { &quot;data&quot;: &quot;SOURCE&quot;, &quot;className&quot;: &quot;&quot; },
            { &quot;data&quot;: &quot;DESCRIPTION&quot;, &quot;className&quot;: &quot;&quot;, &quot;orderable&quot;: false },
            { &quot;data&quot;: &quot;WHENTOUSE&quot;,  &quot;visible&quot;: false },
            { &quot;data&quot;: &quot;CATEGORY&quot;,  &quot;visible&quot;: false },
            { &quot;data&quot;: &quot;TYPE&quot;,  &quot;visible&quot;: false },
            { &quot;data&quot;: &quot;MANDATORY&quot;,  &quot;visible&quot;: false },
            { &quot;data&quot;: &quot;TANDP&quot;,  &quot;visible&quot;: false }
            ]
            }">
            <thead>
              <tr>
                <th class="col-md-05">Nom</th>
                <th class="col-md-02">Source</th>
                <th class="col-md-05">Description</th>
                <th>Quand utiliser ce modèle</th>
                <th>Catégorie</th>
                <th>Type</th>
                <th>Obligatoire</th>
                <th>les modèles</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
