--- 
altLangPage: "https://conception.canada.ca/pattern-library.html"
date: 2021-05-03
dateModified: 2023-08-19
description: ""
title: "Bibliothèque de modèles et de configurations de conception"
---
<section>
  <p>Ces modèles et configurations de conception ont été testés par les utilisateurs. Ils ont été conçus pour vous aider à développer du contenu numérique axé sur les tâches que les utilisateurs tentent d'accomplir.</p>
  <a href="{{ site.url }}/trouvez-modeles-configurations-conception-contenu-web.html" class="btn btn-default mrgn-bttm-md">Répondez à quelques questions pour trouver la bonne configuration de conception</a>
  <h2 id="modeles">Tous les modèles et toutes les configurations de conception</h2>
  <div class="row mrgn-tp-md">
    <div class="col-md-3 small">
      <details open="open">
        <summary class="bg-primary text-center">Options de filtrage</summary>
        <form class="wb-tables-filter mrgn-lft-md mrgn-rght-md" data-bind-to="design">
          <div class="row mrgn-tp-lg mrgn-bttm-lg">
            <div class="form-group">
              <label for="dt_cat">Configurations, modèles ou styles</label>
              <select class="form-control maxwidth" id="dt_cat" name="dt_cat" data-column="4">
                <option value="">Tout afficher</option>
                <option value="Configuration de conception">Configurations de conception</option>
                <option value="Modèle de page">Modèles de page</option>
                <option value="Style">Styles</option>
              </select>
            </div>
            <div class="form-group">
              <label for="dt_type">Types</label>
              <select class="form-control maxwidth" id="dt_type" name="dt_type" data-column="5">
                <option value="">Tout afficher</option>
                <option value="Destination">Destination</option>
                <option value="Modèle à l'échelle du gouvernement">À l'échelle du gouvernement</option>
                <option value="Institutionnel">Institution</option>
                <option value="Configuration à l'échelle du site">À l'échelle du site</option>
                <option value="Interaction">Interaction</option>
                <option value="Navigation">Navigation</option>
                <option value="Promotion">Promotion</option>
                <option value="Modèle de thème">Thème et sujet</option>
                <option value="Visuel">Visuel</option>
              </select>
            </div>
            <div class="form-group">
              <label for="dt_mand">Obligatoire ou suggéré</label>
              <select class="form-control maxwidth" id="dt_mand" name="dt_mand" data-column="6">
                <option value="">Tout afficher</option>
                <option value="Obligatoire">Obligatoire</option>
                <option value="Non">Suggéré</option>
              </select>
            </div>
            <div class="col-md-12 mrgn-tp-lg">
              <button type="submit" class="btn btn-primary full-width" aria-controls="dataset-filter"><span class="fas fa-filter mrgn-rght-sm"></span> Filtre</button>
            </div>
            <div class="col-md-12 mrgn-tp-md"><a href="bibliotheque-modeles.html" class="btn btn-default full-width">Réinitialiser aux valeurs par défaut</a></div>
          </div>
        </form>
      </details>
    </div>
    <div class="col-md-9">
      <div class="panel panel-default">
        <div class="mrgn-tp-md mrgn-bttm-md">
          <table class="wb-tables table table-striped small" aria-live="polite" id="design" data-page-length="100" data-wb-tables="{
            &quot;bDeferRender&quot;: true,
            &quot;ajaxSource&quot;: &quot;./ajax/patterns-01-fr.json&quot;,
            &quot;order&quot;: [0, &quot;asc&quot;],
            &quot;paging&quot;: false,
            &quot;info&quot;: false,
            &quot;columns&quot;: [
            { &quot;data&quot;: &quot;NAME&quot;, &quot;className&quot;: &quot;&quot; },
            { &quot;data&quot;: &quot;SOURCE&quot;,  &quot;visible&quot;: false },
            { &quot;data&quot;: &quot;DESCRIPTION&quot;,  &quot;visible&quot;: false },
            { &quot;data&quot;: &quot;WHENTOUSE&quot;, &quot;className&quot;: &quot;&quot;, &quot;orderable&quot;: false },
            { &quot;data&quot;: &quot;CATEGORY&quot;, &quot;className&quot;: &quot;&quot; },
            { &quot;data&quot;: &quot;TYPE&quot;, &quot;className&quot;: &quot;&quot; },
            { &quot;data&quot;: &quot;MANDATORY&quot;,  &quot;visible&quot;: false },
            { &quot;data&quot;: &quot;TANDP&quot;,  &quot;visible&quot;: false, &quot;Search&quot;: &quot;1&quot; }
            ], 
            &quot;searchCols&quot;: [
            null,
            null,
            null,
            null,
            null,
            null, 
            null,
            { &quot;sSearch&quot;: &quot;1&quot; }]
            }">
            <thead>
              <tr>
                <th class="col-md-03">Nom</th>
                <th>Source</th>
                <th>Description</th>
                <th class="col-md-05">Quand utiliser ce modèle</th>
                <th class="col-md-02">Catégorie</th>
                <th class="col-md-02">Type</th>
                <th>Obligatoire</th>
                <th>Modèles et configurations</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
