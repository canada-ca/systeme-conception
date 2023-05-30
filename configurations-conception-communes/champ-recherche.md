---
altLangPage: "https://design.canada.ca/common-design-patterns/signature.html"
breadcrumbs:
  - title: "À propos de Canada.ca"
    link:  "https://www.canada.ca/fr/gouvernement/a-propos.html"
  - title: "Système de conception de Canada.ca"
    link: "https://www.canada.ca/fr/gouvernement/a-propos/systeme-conception.html"
  - title: "Bibliothèque de modèles et de configurations de conception"
    link: "https://conception.canada.ca/configurations-conception-communes/connexion-contextuel.html"
date: 2017-10-05
dateModified: 2023-05-17
description: "Directives sur l’utilisation du champ de recherche du site dans Canada.ca. Ce champ de recherche du site permet aux gens de lancer une recherche sur le contenu produit par le gouvernement du Canada. On le trouve dans l’en-tête général de toutes les pages du site Canada.ca."
layout: default
title: "Champ de recherche du site"
---
<div class="row">
  <div class="col-md-12 pull-left">
    <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only">
      <li class="mrgn-rght-lg">Dernière mise à jour&nbsp;: 2023-MM-JJ</li>
    </ul>
  </div>
</div>
</section>
<h2 id="quand">Quand l’utiliser</h2>
<p>Le champ de recherche du site est obligatoire sur toutes les pages, sauf pour les pages transactionnelles.</p>
<h2 id="eviter">Quoi éviter</h2>
<p>Ne pas utiliser le champ de recherche du site pour rechercher un contenu autre que celui indexé par GC Recherche. Placer le champ de recherche d’autres jeux de données dans la zone de contenu de la page.</p>
<h2 id="contenu">Contenu et conception</h2>
<p>Trouver des spécifications de contenu et de conception ainsi que des exemples visuels.</p>
<h3>Spécifications du contenu</h3>
<p>Le champ de recherche du site est composé de trois éléments visuels&nbsp;:</p>
<ul>
  <li>un champ de saisie de texte (170 caractères tout au plus);</li>
  <li>un texte réservé pour le champ de saisie;</li>
  <li>un bouton de recherche et une icône de loupe.</li>
</ul>
<p>Dans le champ de saisie de texte, l’étiquette de l’espace réservé est la suivante&nbsp;:</p>
<ul>
  <li>&laquo;&nbsp;Search Canada.ca&nbsp;&raquo; en anglais</li>
  <li>&laquo;&nbsp;Rechercher dans Canada.ca&nbsp;&raquo; en français</li>
</ul>
<p>L’étiquette de l’espace réservé dans un champ de recherche personnalisé est la suivante&nbsp;:</p>
<ul>
  <li>&laquo;&nbsp;Search [institution]&nbsp;&raquo; en anglais</li>
  <li>&laquo;&nbsp;Rechercher dans [institution]&nbsp;&raquo; en français</li>
</ul>
<h4>Interactions</h4>
<ul>
  <li>Les recherches interrogent l’index de GC Recherche. Lorsque l’on saisit un terme de recherche dans le champ de saisie et que l’on sélectionne l’icône de recherche, une page de résultats s’ouvre.</li>
</ul>
<h3>Spécifications de conception</h3>
<p>Les spécifications de conception pour le champ de recherche du site sont les suivantes&nbsp;:</p>
<ul>
  <li>Position&nbsp;: coin supérieur droit de la zone de l’en-tête général, sous le lien qui permet de changer de langue</li>
  <li>Catégorie de formulaire&nbsp;: form-inline</li>
  <li>Icône de bouton&nbsp;: glyphicon-search glyphicon</li>
  <li>Catégorie de bouton&nbsp;: btn btn-primary btn-small</li>
  <li>Couleur&nbsp;: n<sup>o</sup>&nbsp;26374a</li>
  <li>Longueur du champ de saisie&nbsp;: longueur maximale&nbsp;=&nbsp;170</li>
  <li>Taille de valeur&nbsp;: 34</li>
</ul>
<p>Les éléments de recherche sont réactifs. Ils s’adaptent à la taille de l’écran.</p>
<h3>Exemples visuels</h3>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Champ de recherche du site – grand écran</b></figcaption>
    <img src="../images/01-site-search-fr.png" class="img-responsive" alt=" ">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l’image&nbsp;: Champ de recherche du site – grand écran</summary>
      <p class="mrgn-tp-lg">Le champ de recherche s’affiche dans le coin supérieur droit, sous le lien qui permet de changer de langue et directement à l’opposé de la signature du gouvernement du Canada.</p>
      <p>La barre de recherche du site est un rectangle défini par un contour gris clair. Dans le rectangle, on peut lire les mots &laquo;&nbsp;Rechercher dans Canada.ca&nbsp;&raquo;. À la droite du rectangle se trouve un carré bleu dans lequel il y a une icône de loupe blanche.</p>
    </details>
  </figure>
</div>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>Champ de recherche du site – Petit écran</b></figcaption>
    <img src="../images/01-site-search-sm-fr.png" class="img-responsive" alt="">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l’image&nbsp;: Champ de recherche du site – Petit écran</summary>
      <p class="mrgn-tp-lg">Le champ de recherche s’affiche dans l’en-tête, directement sous la signature du gouvernement du Canada et le lien qui permet de changer de langue. Il couvre la largeur de l’écran.</p>
      <p>La barre de recherche du site est un rectangle défini par un contour gris clair. Dans le rectangle, on peut lire les mots &laquo;&nbsp;Rechercher dans Canada.ca&nbsp;&raquo;. À la droite du rectangle se trouve un carré bleu dans lequel il y a une icône de loupe blanche.</p>
    </details>
  </figure>
</div>
<h2 id="implementation">Comment procéder à la mise en œuvre</h2>
<p>Trouver des exemples fonctionnels de la mise en œuvre du champ de recherche du site.</p>
<h3>Référence pour la mise en œuvre du thème GCWeb (BOEW)</h3>
<p>La référence à la mise en œuvre comprend la façon de configurer chaque élément de l’en-tête.</p>
<ul>
<li>Une recherche de base comprend 2 éléments&nbsp;: un champ de texte pour saisir le mot-clé et un bouton pour lancer la requête.</li>
<li>Sur les grans écrans, le champ de recherche de base se trouve à la droite, dans l’en-tête général</li>
<li>Sur les petits écrans, le champ est situé sous la signature du gouvernement du Canada.</li>
<li>La recherche de base est configurée pour se redimensionner automatiquement en fonction de la taille de l'écran pour permettre
conception réactive.</li>
<li>La fonction de recherche de base permet d’utiliser les opérateurs booléens dans le champ de texte afin de soumettre au moteur de recherche des requêtes beaucoup plus précises.</li>
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
							value="https://conception.canada.ca/configurations-conception-communes/champ-recherche.html">
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
										Je ne peux pas <strong>trouver</strong> l’information
									</label>
								</div>
								<div class="radio">
									<label for="problem2">
										<input name="problem" id="problem2" type="radio"
											value="L'information est difficile à comprendre"
											data-gc-analytics-wtph-value="The information is hard to understand-J'ai trouvé l'information difficile à comprendre"
											data-gc-analytics-collect="notPrivate">
										L'information est difficile à <strong>comprendre</strong>
									</label>
								</div>
								<div class="radio">
									<label for="problem3">
										<input name="problem" id="problem3" type="radio"
											value="Il y avait une erreur / quelque chose ne fonctionnait pas"
											data-gc-analytics-wtph-value="There was an error or something didn't work-Il y avait une erreur our quelque chose ne fonctionnait pas"
											data-gc-analytics-collect="notPrivate">
										Il y avait une erreur / quelque chose <strong>ne fonctionnait pas</strong>
									</label>
								</div>
								<div class="radio">
									<label for="problem4">
										<input name="problem" id="problem4" type="radio" value="Other reason"
											data-gc-analytics-wtph-value="Other reason-Autre raison"
											data-gc-analytics-collect="notPrivate">
										Autre raison
									</label>
								</div>
							</fieldset>
							<label for="problem6" class="mrgn-bttm-0">Veuillez fournir plus de détails</label>
							<p class="small">
								<strong>Vous ne recevrez aucune réponse. Les numéros de téléphone et les adresses
									électroniques seront supprimés.</strong>
								<br>
								<span class="small">Maximum de 300 caractères</span>
							</p>
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
				data-wb-share="{&quot;pnlId&quot;:&quot;pnlShrPg&quot;, &quot;lnkClass&quot;: &quot;btn btn-default btn-block mrgn-tp-md&quot;}">
			</div>
		</div>
	</div>
	<!-- END PAGE FEEDBACK WIDGET --><div class="pagedetails">
		<dl id="wb-dtmd">
<dt>Date de modification :</dt>
<dd><time property="dateModified">2018-12-19</time></dd>
		</dl>
	</div>
</main>{% include footer-fr.html %}
	<!--[if gte IE 9 | !IE ]><!-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.js"></script>
	<script src="https://wet-boew.github.io/themes-dist/GCWeb/wet-boew/js/wet-boew.min.js"></script>
	<!--<![endif]-->
	<!--[if lt IE 9]>
			<script src="./wet-boew/js/ie8-wet-boew2.min.js"></script>

			<![endif]-->
	<script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/theme.min.js"></script>      <script>
         document.getElementById('submissionPage').value = location.href;
      </script>
	  <!-- START SCRIPT PAGE FEEDBACK WIDGET -->

			<script>
				$(document).on("wb-ready.wb", function () {
					$("#btnno").click(function (e) {
						$(".gc-pg-hlpfl-no").removeClass("nojs-show");
						$(".gc-pg-hlpfl-btn").addClass("hide");
						$("#helpful").val("No");
					});
					$("#gc-pg-hlpfl-frm").submit(function (e) {
						e.preventDefault();
						$(".gc-pg-hlpfl-thnk").removeClass("hide");
						$("#gc-pg-hlpfl-frm").addClass("hide nojs-show");
						$.ajax({
							url: 'https://pagesuccessemailqueue.azurewebsites.net/api/QueueProblemForm',
							type: 'POST',
							dataType: 'text',
							data: $('form#gc-pg-hlpfl-frm').serialize(),
							success: function (data) { },
							error: function (xhr, status, err) {
								console.log(xhr.responseText);
							}
						});
					});
				});
			</script>
			<!-- END SCRIPT PAGE FEEDBACK WIDGET --></body>
	</html>
