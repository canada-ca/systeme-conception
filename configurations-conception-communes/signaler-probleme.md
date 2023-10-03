---
altLangPage: https://design.canada.ca/common-design-patterns/report-problem.html
date: null
dateModified: '2023-10-03'
description: null
section-title: "Configuration de conception de Canada.ca"
title: "Signaler un problème sur cette page"
---

 <section class="alert alert-warning">
  <p>Nous mettons hors service la configuration «&nbsp;Signaler un problème sur cette page&nbsp;». Nous ne vous conseillons pas d’ajouter cette configuration à vos pages.</p>
<p>Si vous souhaitez recueillir de la rétroaction pour des pages Web en particulier, vous pouvez utiliser la configuration <a href="https://test.canada.ca/experimental/feedback-retroaction/outil-retroaction.html">«&nbsp;Outil de rétroaction sur la page (ORP)&nbsp;»</a>. N’ajoutez l’ORP qu’aux pages pour lesquelles vous prévoyez d’assurer un suivi actif et d’exploiter la rétroaction reçue.</p>
</section>

<p class="gc-byline">
 <strong>
  De :
  <a href="https://www.canada.ca/fr/secretariat-conseil-tresor.html">
   Secrétariat du Conseil du Trésor du Canada
  </a>
 </strong>
</p>

<div class="gc-stp-stp">
 <div class="row">
  <ul class="toc lst-spcd col-md-12">
   <li class="col-md-4 col-sm-6">
    <a class="list-group-item" href="pied-page-contenu.html">
     Pied de page de la zone du contenu
    </a>
   </li>
   <li class="col-md-4 col-sm-6">
    <a class="list-group-item active">
     Signaler un problème sur cette page
    </a>
   </li>
   <li class="col-md-4 col-sm-6">
    <a class="list-group-item" href="partagez-page.html">
     Partagez cette page
    </a>
   </li>
   <li class="col-md-4 col-sm-6">
    <a class="list-group-item" href="date-modification.html">
     Date de modification
    </a>
   </li>
  </ul>
 </div>
</div>

<section>
 <p>
  Le modèle « Signaler un problème » permet aux gens de fournir des commentaires par le biais d'un
				formulaire pour tout problème qu'ils rencontrent avec la page Web sur laquelle ils se trouvent.
 </p>
 <p>
  Ce modèle permet d'activer la rétroaction au niveau de la page. Lorsque les gens cliquent sur le bouton
				« Signaler un problème sur cette page », ils se voient présenter des problèmes courants à sélectionner
				à l'aide de cases à cocher. Si aucune de ces questions ne s'applique, ils peuvent choisir « Autre »
				pour fournir plus de détails.
 </p>
</section>

<section>
 <h2>
  Sur cette page
 </h2>
 <ul>
  <li>
   <a href="#quand">
    Quand l'utiliser
   </a>
  </li>
  <li>
   <a href="#eviter">
    Quoi éviter
   </a>
  </li>
  <li>
   <a href="#comment">
    Comment mettre en œuvre
   </a>
  </li>
  <li>
   <a href="#discussion">
    Discussion
   </a>
  </li>
 </ul>
</section>

<section>
 <h2 id="quand">
  Quand l'utiliser
 </h2>
 <p>
  Utilisez ce modèle pour activer la rétroaction au niveau de la page.
 </p>
</section>

<section>
 <h2 id="eviter">
  Quoi éviter
 </h2>
 <p>
  Assurez-vous que la rétroaction reçue est exploitable. Si vous le pouvez, fournissez un formulaire qui permet
				aux utilisateurs de fournir des détails sur les problèmes qu’ils éprouvent.
 </p>
</section>

<section>
 <h2 id="comment">
  Comment mettre en œuvre
 </h2>
 <p>
  Le bouton, l’étiquette, le placement et l’énoncé de protection des renseignements personnels sont obligatoires
				:
 </p>
 <ul>
  <li>
   le modèle est présenté comme un bouton qui utilise la configuration
   <a href="./boutons.html">
    boutons pour
						les actions secondaires
   </a>
   , qui, lorsqu’on clique dessus, ouvre un formulaire de rétroaction;
  </li>
  <li>
   l’étiquette indique : « Signaler un problème sur cette page » ;
  </li>
  <li>
   placement : placée directement sous la zone de contenu principale, alignée à gauche;
  </li>
  <li>
   énoncé de protection des renseignements personnels : placé dans une fenêtre superposée qu’on peut fermer.
  </li>
 </ul>
 <p>
  Le modèle pour les contenus du formulaire de rétroaction est recommandé. Si on ne reçoit pas des données
				significatives, il est possible d’utiliser un lien « mailto » comme solution de rechange.
 </p>
 <p>
  <b>
   Envoyez le formulaire :
  </b>
  assurez-vous de remplacer le paramètre fictif « # » dans la ligne
				action du formulaire par l’emplacement où votre institution peut recueillir les données du formulaire. Envisagez
				la possibilité d’envoyer le formulaire à une boîte de réception générale si vous ne possédez pas de serveur pour
				traiter ce type de formulaire.
 </p>
 <div class="pattern-demo mrgn-bttm-md">
  <div class="row">
   <div class="col-sm-6 col-md-5 col-lg-4">
    <details class="brdr-0" closed="">
     <summary class="btn btn-default text-center">
      Signaler un problème sur cette page
     </summary>
     <div class="well row">
      <div class="gc-rprt-prblm">
       <div class="gc-rprt-prblm-tggl">
        <form action="#" id="gc-rprt-prblm-form" method="post">
         <fieldset>
          <legend>
           <span class="field-name">
            Veuillez cocher toutes les réponses qui s'appliquent :
           </span>
          </legend>
          <div class="checkbox">
           <label for="problem1">
            <input data-reveal="#broken" id="problem1" name="problem" type="checkbox" value="Quelque chose ne fonctionne pas"/>
            Quelque chose ne fonctionne
														pas
           </label>
          </div>
          <div class="form-group hide" id="broken">
           <label for="problem1-detail">
            Fournissez plus de détails (facultatif) :
           </label>
           <input class="form-control full-width" id="problem1-detail" type="text"/>
          </div>
          <div class="checkbox">
           <label for="problem2">
            <input data-reveal="#spelling" id="problem2" name="problem" type="checkbox" value="Il y a une erreur d'orthographe ou de grammaire"/>
            Il y a une erreur
														d'orthographe ou de grammaire
           </label>
          </div>
          <div class="form-group hide" id="spelling">
           <label for="problem2-detail">
            Fournissez plus de détails (facultatif) :
           </label>
           <input class="form-control full-width" id="problem2-detail" type="text"/>
          </div>
          <div class="checkbox">
           <label for="problem3">
            <input data-reveal="#wrong" id="problem3" name="problem" type="checkbox" value="L'information est erronée"/>
            L'information est erronée
           </label>
          </div>
          <div class="form-group hide" id="wrong">
           <label for="problem3-detail">
            Fournissez plus de détails (facultatif) :
           </label>
           <input class="form-control full-width" id="problem3-detail" type="text"/>
          </div>
          <div class="checkbox">
           <label for="problem4">
            <input data-reveal="#outdated" id="problem4" name="problem" type="checkbox" value="L'information n'est plus à jour"/>
            L'information n'est plus à
														jour
           </label>
          </div>
          <div class="form-group hide" id="outdated">
           <label for="problem4-detail">
            Fournissez plus de détails (facultatif) :
           </label>
           <input class="form-control full-width" id="problem4-detail" type="text"/>
          </div>
          <div class="checkbox">
           <label for="problem5">
            <input data-reveal="#find" id="problem5" name="problem" type="checkbox" value="Je ne trouve pas ce que je cherche"/>
            Je ne trouve pas ce que je
														cherche
           </label>
          </div>
          <div class="form-group hide" id="find">
           <label for="problem5-detail">
            Fournissez plus de détails (facultatif) :
           </label>
           <input class="form-control full-width" id="problem5-detail" type="text"/>
          </div>
          <div class="checkbox">
           <label for="problem6">
            <input data-reveal="#confusing" id="problem6" name="problem" type="checkbox" value="Autre"/>
            Autre
           </label>
          </div>
          <div class="form-group hide" id="confusing">
           <label for="problem6-detail">
            Fournissez plus de détails (facultatif) :
           </label>
           <input class="form-control full-width" id="problem6-detail" type="text"/>
          </div>
         </fieldset>
         <p>
          <a class="wb-lbx" href="#privacy-statement">
           Déclaration de confidentialité
          </a>
         </p>
         <section class="mfp-hide modal-dialog modal-content overlay-def" id="privacy-statement">
          <header class="modal-header">
           <h2 class="modal-title">
            Déclaration de confidentialité
           </h2>
          </header>
          <div class="modal-body">
           <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
														ut labore et dolore magna aliqua. Turp is egestas maecenas pharetra convallis posuere morbi
														leo urna.
           </p>
          </div>
         </section>
         <button class="btn btn-primary wb-toggle" data-toggle='{"stateOff": "hide", "stateOn": "show", "selector": ".gc-rprt-prblm-tggl"}' type="submit">
          Envoyer
         </button>
        </form>
       </div>
       <div class="gc-rprt-prblm-thnk gc-rprt-prblm-tggl hide">
        <h3>
         Merci de votre aide!
        </h3>
        <p>
         Vous ne recevrez pas de réponse. Pour toute question,
         <a href="https://www.canada.ca/fr/contact.html">
          communiquez avec nous
         </a>
         .
        </p>
       </div>
      </div>
     </div>
    </details>
   </div>
  </div>
 </div>
 <details>
  <summary>
   Code
  </summary>
  <pre class="prettyprint"><code>&lt;div class="row"&gt;
  &lt;div class="col-sm-6 col-md-5 col-lg-4"&gt;
   &lt;details class="brdr-0" closed&gt;
    &lt;summary class="btn btn-default text-center"&gt;Signaler un problème sur cette page&lt;/summary&gt;
    &lt;div class="well row"&gt;
     &lt;div class="gc-rprt-prblm"&gt;
      &lt;div class="gc-rprt-prblm-tggl"&gt;
       &lt;form id="gc-rprt-prblm-form" action="#" method="post"&gt;
        &lt;fieldset&gt;
         &lt;legend&gt;&lt;span class="field-name"&gt;Veuillez cocher toutes les réponses qui s'appliquent : &lt;/span&gt;&lt;/legend&gt;
         &lt;div class="checkbox"&gt;
          &lt;label for="problem1"&gt;&lt;input type="checkbox" data-reveal="#broken" name="problem" value="Quelque chose ne fonctionne pas" id="problem1"&gt;Quelque chose ne fonctionne pas&lt;/label&gt;
         &lt;/div&gt;
         &lt;div class="form-group hide" id="broken"&gt;
          &lt;label for="problem1-detail"&gt;Fournissez plus de détails (facultatif) :&lt;/label&gt;
          &lt;input type="text" class="form-control full-width" id="problem1-detail"&gt;
         &lt;/div&gt;
         &lt;div class="checkbox"&gt;
          &lt;label for="problem2"&gt;&lt;input type="checkbox" data-reveal="#spelling" name="problem" value="Il y a une erreur d'orthographe ou de grammaire" id="problem2"&gt;Il y a une erreur d'orthographe ou de grammaire&lt;/label&gt;
         &lt;/div&gt;
         &lt;div class="form-group hide" id="spelling"&gt;
          &lt;label for="problem2-detail"&gt;Fournissez plus de détails (facultatif) :&lt;/label&gt;
          &lt;input type="text" class="form-control full-width" id="problem2-detail"&gt;
         &lt;/div&gt;
         &lt;div class="checkbox"&gt;
          &lt;label for="problem3"&gt;&lt;input type="checkbox" data-reveal="#wrong" name="problem" value="L'information est erronée" id="problem3"&gt;L'information est erronée&lt;/label&gt;
         &lt;/div&gt;
         &lt;div class="form-group hide" id="wrong"&gt;
          &lt;label for="problem3-detail"&gt;Fournissez plus de détails (facultatif) :&lt;/label&gt;
          &lt;input type="text" class="form-control full-width" id="problem3-detail"&gt;
         &lt;/div&gt;
         &lt;div class="checkbox"&gt;
          &lt;label for="problem4"&gt;&lt;input type="checkbox" data-reveal="#outdated" name="problem" value="L'information n'est plus à jour" id="problem4"&gt;L'information n'est plus à jour&lt;/label&gt;
         &lt;/div&gt;
         &lt;div class="form-group hide" id="outdated"&gt;
          &lt;label for="problem4-detail"&gt;Fournissez plus de détails (facultatif) :&lt;/label&gt;
          &lt;input type="text" class="form-control full-width" id="problem4-detail"&gt;
         &lt;/div&gt;
         &lt;div class="checkbox"&gt;
          &lt;label for="problem5"&gt;&lt;input type="checkbox" data-reveal="#find" name="problem" value="Je ne trouve pas ce que je cherche" id="problem5"&gt;Je ne trouve pas ce que je cherche&lt;/label&gt;
         &lt;/div&gt;
         &lt;div class="form-group hide" id="find"&gt;
          &lt;label for="problem5-detail"&gt;Fournissez plus de détails (facultatif) :&lt;/label&gt;
          &lt;input type="text" class="form-control full-width" id="problem5-detail"&gt;
         &lt;/div&gt;
         &lt;div class="checkbox"&gt;
          &lt;label for="problem6"&gt;&lt;input type="checkbox" data-reveal="#confusing" name="problem" value="Autre" id="problem6"&gt;Autre&lt;/label&gt;
         &lt;/div&gt;
         &lt;div class="form-group hide" id="confusing"&gt;
          &lt;label for="problem6-detail"&gt;Fournissez plus de détails (facultatif) :&lt;/label&gt;
          &lt;input type="text" class="form-control full-width" id="problem6-detail"&gt;
         &lt;/div&gt;
        &lt;/fieldset&gt;
        &lt;p&gt;&lt;a class="wb-lbx" href="#privacy-statement"&gt;Déclaration de confidentialité&lt;/a&gt;&lt;/p&gt;
        &lt;section class="mfp-hide modal-dialog modal-content overlay-def" id="privacy-statement"&gt;
         &lt;header class="modal-header"&gt;
          &lt;h2 class="modal-title"&gt;Déclaration de confidentialité&lt;/h2&gt;
         &lt;/header&gt;
         &lt;div class="modal-body"&gt;
          &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turp is egestas maecenas pharetra convallis posuere morbi leo urna.&lt;/p&gt;
         &lt;/div&gt;
        &lt;/section&gt;
        &lt;button type="submit" class="btn btn-primary wb-toggle" data-toggle="{&amp;quot;stateOff&amp;quot;: &amp;quot;hide&amp;quot;, &amp;quot;stateOn&amp;quot;: &amp;quot;show&amp;quot;, &amp;quot;selector&amp;quot;: &amp;quot;.gc-rprt-prblm-tggl&amp;quot;}"&gt;Envoyer&lt;/button&gt;
       &lt;/form&gt;
      &lt;/div&gt;
      &lt;div class="gc-rprt-prblm-thnk gc-rprt-prblm-tggl hide"&gt;
       &lt;h3&gt;Merci de votre aide!&lt;/h3&gt;
       &lt;p&gt;Vous ne recevrez pas de réponse. Pour toute question, &lt;a href="https://www.canada.ca/fr/contact.html"&gt;communiquez avec nous&lt;/a&gt;.&lt;/p&gt;
      &lt;/div&gt;
     &lt;/div&gt;
    &lt;/div&gt;
   &lt;/details&gt;
  &lt;/div&gt;
 &lt;/div&gt;</code></pre>
 </details>
</section>





