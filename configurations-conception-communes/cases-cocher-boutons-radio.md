---
altLangPage: https://design.canada.ca/common-design-patterns/checkboxes-radio-buttons.html
date: null
dateModified: '2021-04-22'
description: null
section-title: "Système de conception de Canada.ca"
title: "Cases à cocher et boutons radio"
---

<div class="row">
 <div class="col-md-12 pull-left">
  <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only" style="line-height:1.65em">
   <li class="mrgn-rght-lg">
    Dernière modification : 2020-10-21
   </li>
  </ul>
 </div>
</div>

<p>
 Les cases à cocher et les boutons radio servent de contrôle de formulaire. Ils permettent aux gens de sélectionner une réponse à une question ou de confirmer des réponses.
</p>

<p>
 Les cases à cocher et les boutons radio en grand format sont plus faciles à sélectionner et à utiliser, en particulier sur un appareil mobile.
</p>

<section>
 <h2>
  Sur cette page
 </h2>
 <ul>
  <li>
   <a href="#utilisation">
    Utilisation
   </a>
  </li>
  <li>
   <a href="#eviter">
    Quoi éviter
   </a>
  </li>
  <li>
   <a href="#mise-en-oeuvre">
    Mise en œuvre
   </a>
  </li>
  <li>
   <a href="#recherche">
    Recherche et blogue
   </a>
  </li>
  <li>
   <a href="#derniers">
    Derniers changements
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
 <h2 id="utilisation">
  Utilisation
 </h2>
 <p>
  Les cases à cocher et les boutons radio doivent être utilisés pour les questions interactives, comme les formulaires de demande ou les assistants:
 </p>
 <ul>
  <li>
   <a href="./questions-interactives.html">
    Questions interactives
   </a>
  </li>
 </ul>
</section>

<section>
 <h2 id="eviter">
  Quoi éviter
 </h2>
 <p>
  N'utilisez pas de cases à cocher ou de boutons radio si les options présentées ne sont pas facilement comparables. Dans ces cas, utilisez plutôt la configuration « Services et renseignements » (lien et description).
 </p>
 <ul>
  <li>
   <a href="./services-renseignements.html">
    Services et renseignements (lien et description)
   </a>
  </li>
 </ul>
 <p>
  Pour une question autonome comportant peu d’options et une quantité gérable de contenu par option qui n’exige pas de pages distinctes, utilisez plutôt du contenu affichable/masquable ou une interface à onglets :
 </p>
 <ul>
  <li>
   <a href="./contenu-reductible.html">
    Afficher/masquer
   </a>
  </li>
  <li>
   <a href="./interface-onglets.html">
    Interface à onglets
   </a>
  </li>
 </ul>
</section>

<section>
 <h2 id="mise-en-oeuvre">
  Mise en œuvre
 </h2>
 <h3 id="grandes-cases-a-cocher">
  Grandes cases à cocher
 </h3>
 <p>
  <b>
   Utilisation :
  </b>
  Les grandes cases à cocher sont la conception recommandée pour les cases à cocher. À utiliser particulièrement lorsque l’utilisateur peut faire une ou plusieurs sélections pour répondre à une question.
 </p>
 <p>
  <b>
   Quoi éviter :
  </b>
  Ne pas utiliser de grandes cases à cocher pour une liste de contrôle ayant des éléments qui nécessitent un saut de ligne, ou lorsqu’il y a un seul élément à cocher. Pour ces situations, utilisez plutôt les petites cases à cocher.
 </p>
 <section>
  <h4>
   Grandes cases à cocher avec étiquettes explicites
  </h4>
  <div class="panel panel-default pattern-demo">
   <div class="panel-body">
    <fieldset class="provisional gc-chckbxrdio">
     <legend>
      Choisissez vos condiments :
     </legend>
     <ul class="list-unstyled lst-spcd-2">
      <li class="checkbox">
       <input id="cond1" type="checkbox"/>
       <label for="cond1">
        Ketchup
       </label>
      </li>
      <li class="checkbox">
       <input id="cond2" type="checkbox"/>
       <label for="cond2">
        Relish
       </label>
      </li>
      <li class="checkbox">
       <input id="cond3" type="checkbox"/>
       <label for="cond3">
        Moutarde
       </label>
      </li>
     </ul>
    </fieldset>
   </div>
  </div>
  <details>
   <summary>
    Code
   </summary>
   <details>
    <summary>
     HTML
    </summary>
    <pre><code>&lt;fieldset class="provisional gc-chckbxrdio"&gt;
	&lt;legend&gt;Choisissez vos condiments :&lt;/legend&gt;
	&lt;ul class="list-unstyled lst-spcd-2"&gt;
		&lt;li class="checkbox"&gt;
			&lt;input type="checkbox" id="cond1"&gt;
			&lt;label for="cond1"&gt;Ketchup&lt;/label&gt;
		&lt;/li&gt;
		&lt;li class="checkbox"&gt;
			&lt;input type="checkbox" id="cond2"&gt;
			&lt;label for="cond2"&gt;Relish&lt;/label&gt;
		&lt;/li&gt;
		&lt;li class="checkbox"&gt;
			&lt;input type="checkbox" id="cond3"&gt;
			&lt;label for="cond3"&gt;Moutarde&lt;/label&gt;
		&lt;/li&gt;
	&lt;/ul&gt;
&lt;/fieldset&gt;</code></pre>
   </details>
   <details>
    <summary>
     CSS
    </summary>
    <pre><code>.provisional.gc-chckbxrdio label {
	cursor: pointer;
	display: block;
	font-size: 20px;
}
.provisional.gc-chckbxrdio legend {
	float: none;
	font-size: 22px;
	font-weight: 700;
	margin-bottom: 15px;
	margin-top: 0;
}
.provisional.gc-chckbxrdio input[type="checkbox"] {
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
}
.provisional.gc-chckbxrdio input[type="checkbox"][disabled] + label {
	cursor: not-allowed;
	opacity: .5;
}
.provisional.gc-chckbxrdio input[type="checkbox"] + label {
	display: inline-block;
	line-height: 2;
	margin-left: 36px;
	width: auto;
}
.provisional.gc-chckbxrdio input[type="checkbox"] + label::before {
	border: 4px solid #fff;
	-webkit-box-shadow: 0 0 0 2px #000;
	box-shadow: 0 0 0 2px #000;
	content: "";
	display: inline-block;
	height: 36px;
	left: 0;
	position: absolute;
	top: 2px;
	width: 36px;
}
.provisional.gc-chckbxrdio input[type="checkbox"] + label:hover::before {
	background-image: -webkit-gradient(linear, left top, left bottom, from(#e6e5e5), color-stop(50%, white));
	background-image: linear-gradient(to bottom, #e6e5e5, white 50%);
}
.provisional.gc-chckbxrdio input[type="checkbox"]:focus + label::before {
	-webkit-box-shadow: 0 0 0 2px #000, 0 0 8px 4px #3b99fc;
	box-shadow: 0 0 0 2px #000, 0 0 8px 4px #3b99fc;
}
.provisional.gc-chckbxrdio input[type="checkbox"]:checked + label::after {
	border-color: #333;
	border-style: solid;
	border-width: 0 5px 5px 0;
	content: "";
	display: inline-block;
	height: 26px;
	left: 12px;
	position: absolute;
	top: 4px;
	-webkit-transform: rotate(45deg);
	transform: rotate(45deg);
	width: 13px;
}</code></pre>
   </details>
  </details>
  <h4>
   Grandes cases à cocher désactivées avec étiquettes explicites
  </h4>
  <div class="panel panel-default pattern-demo">
   <div class="panel-body">
    <fieldset class="provisional gc-chckbxrdio">
     <legend>
      Choisissez vos condiments :
     </legend>
     <ul class="list-unstyled lst-spcd-2">
      <li class="checkbox">
       <input disabled="" id="cond4" type="checkbox"/>
       <label for="cond4">
        Ketchup
       </label>
      </li>
      <li class="checkbox">
       <input id="cond5" type="checkbox"/>
       <label for="cond5">
        Relish
       </label>
      </li>
      <li class="checkbox">
       <input disabled="" id="cond6" type="checkbox"/>
       <label for="cond6">
        Moutarde
       </label>
      </li>
     </ul>
    </fieldset>
   </div>
  </div>
  <details>
   <summary>
    Code
   </summary>
   <details>
    <summary>
     HTML
    </summary>
    <pre><code>&lt;fieldset class="provisional gc-chckbxrdio"&gt;
	&lt;legend&gt;Choisissez vos condiments :&lt;/legend&gt;
	&lt;ul class="list-unstyled lst-spcd-2"&gt;
		&lt;li class="checkbox"&gt;
			&lt;input type="checkbox" id="cond4" disabled&gt;
			&lt;label for="cond1"&gt;Ketchup&lt;/label&gt;
		&lt;/li&gt;
		&lt;li class="checkbox"&gt;
			&lt;input type="checkbox" id="cond5"&gt;
			&lt;label for="cond2"&gt;Relish&lt;/label&gt;
		&lt;/li&gt;
		&lt;li class="checkbox"&gt;
			&lt;input type="checkbox" id="cond6" disabled&gt;
			&lt;label for="cond3"&gt;Moutarde&lt;/label&gt;
		&lt;/li&gt;
	&lt;/ul&gt;
&lt;/fieldset&gt;</code></pre>
   </details>
   <details>
    <summary>
     CSS
    </summary>
    <pre><code>.provisional.gc-chckbxrdio label {
	cursor: pointer;
	display: block;
	font-size: 20px;
}
.provisional.gc-chckbxrdio legend {
	float: none;
	font-size: 22px;
	font-weight: 700;
	margin-bottom: 15px;
	margin-top: 0;
}
.provisional.gc-chckbxrdio input[type="checkbox"] {
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
}
.provisional.gc-chckbxrdio input[type="checkbox"][disabled] + label {
	cursor: not-allowed;
	opacity: .5;
}
.provisional.gc-chckbxrdio input[type="checkbox"] + label {
	display: inline-block;
	line-height: 2;
	margin-left: 36px;
	width: auto;
}
.provisional.gc-chckbxrdio input[type="checkbox"] + label::before {
	border: 4px solid #fff;
	-webkit-box-shadow: 0 0 0 2px #000;
	box-shadow: 0 0 0 2px #000;
	content: "";
	display: inline-block;
	height: 36px;
	left: 0;
	position: absolute;
	top: 2px;
	width: 36px;
}
.provisional.gc-chckbxrdio input[type="checkbox"] + label:hover::before {
	background-image: -webkit-gradient(linear, left top, left bottom, from(#e6e5e5), color-stop(50%, white));
	background-image: linear-gradient(to bottom, #e6e5e5, white 50%);
}
.provisional.gc-chckbxrdio input[type="checkbox"]:focus + label::before {
	-webkit-box-shadow: 0 0 0 2px #000, 0 0 8px 4px #3b99fc;
	box-shadow: 0 0 0 2px #000, 0 0 8px 4px #3b99fc;
}
.provisional.gc-chckbxrdio input[type="checkbox"]:checked + label::after {
	border-color: #333;
	border-style: solid;
	border-width: 0 5px 5px 0;
	content: "";
	display: inline-block;
	height: 26px;
	left: 12px;
	position: absolute;
	top: 4px;
	-webkit-transform: rotate(45deg);
	transform: rotate(45deg);
	width: 13px;
}</code></pre>
   </details>
  </details>
 </section>
 <section>
  <h3 id="small-checkboxes">
   Petites cases à cocher
  </h3>
  <p>
   <b>
    Utilisation :
   </b>
   Utiliser les petites cases à cocher uniquement lorsqu’il y a un seul élément à cocher, comme dans le cas d’une confirmation.
  </p>
  <p>
   <b>
    Quoi éviter :
   </b>
   Ne pas utiliser de petites cases à cocher pour les réponses à une question ou les listes de contrôle. Pour ces situations, utilisez plutôt les grandes cases à cocher :
  </p>
  <ul>
   <li>
    <a href="#grandes-cases-a-cocher">
     Grandes cases à cocher
    </a>
   </li>
  </ul>
  <p>
   Utilisez un bouton plutôt qu’une case à cocher lorsqu’il n'y a qu'un seul élément à cocher, particulièrement lorsqu’il s’agit de l’action principale de la page ou d’un élément permettant de passer à l’étape suivante.
  </p>
  <ul>
   <li>
    <a href="./boutons.html">
     Boutons
    </a>
   </li>
  </ul>
  <h4>
   Élément unique avec étiquette explicite dans un formulaire horizontal
  </h4>
  <div class="panel panel-default pattern-demo">
   <div class="panel-body">
    <form action="#" class="form-inline" method="get">
     <div class="form-group">
      <label class="wb-inv" for="exampleInputEmail2">
       Courriel
      </label>
      <input class="form-control" id="exampleInputEmail2" placeholder="Entrez votre courriel" type="email">
     </div>
     <div class="form-group">
      <label class="wb-inv" for="exampleInputPassword2">
       Mot de passe
      </label>
      <input class="form-control" id="exampleInputPassword2" placeholder="Mot de passe" type="password">
     </div>
     <div class="checkbox provisional gc-chckbxrdio">
      <input id="remember2" type="checkbox">
       <label for="remember2">
        Se souvenir de moi
       </label>
     </div>
     <button class="btn btn-default" type="submit">
      Se connecter
     </button>
    </form>
   </div>
  </div>
  <details>
   <summary>
    Code
   </summary>
   <details>
    <summary>
     HTML
    </summary>
    <pre class="mrgn-tp-md"><code>&lt;form class="form-inline" method="get" action="#"&gt;
	&lt;div class="form-group"&gt;
		&lt;label class="wb-inv" for="exampleInputEmail2"&gt;Courriel&lt;/label&gt;
		&lt;input type="email" class="form-control" id="exampleInputEmail2" placeholder="Entrez votre courriel" /&gt;
	&lt;/div&gt;
	&lt;div class="form-group"&gt;
		&lt;label class="wb-inv" for="exampleInputPassword2"&gt;Mot de passe&lt;/label&gt;
		&lt;input type="password" class="form-control" id="exampleInputPassword2" placeholder="Mot de passe" /&gt;
	&lt;/div&gt;
	&lt;div class="checkbox provisional gc-chckbxrdio"&gt;
		&lt;input id="remember2" type="checkbox" /&gt;
		&lt;label for="remember2"&gt;Se souvenir de moi&lt;/label&gt;
	&lt;/div&gt;
	&lt;button type="submit" class="btn btn-default"&gt;Se connecter&lt;/button&gt;
&lt;/form&gt;</code></pre>
   </details>
   <details>
    <summary>
     CSS
    </summary>
    <pre><code>.provisional.gc-chckbxrdio label {
	cursor: pointer;
	display: block;
	font-size: 20px;
}
.provisional.gc-chckbxrdio legend {
	float: none;
	font-size: 22px;
	font-weight: 700;
	margin-bottom: 15px;
	margin-top: 0;
}
.provisional.gc-chckbxrdio input[type="checkbox"] {
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
}
.provisional.gc-chckbxrdio input[type="checkbox"][disabled] + label {
	cursor: not-allowed;
	opacity: .5;
}
.provisional.gc-chckbxrdio input[type="checkbox"] + label {
	display: inline-block;
	line-height: 2;
	margin-left: 36px;
	width: auto;
}
.provisional.gc-chckbxrdio input[type="checkbox"] + label::before {
	border: 4px solid #fff;
	-webkit-box-shadow: 0 0 0 2px #000;
	box-shadow: 0 0 0 2px #000;
	content: "";
	display: inline-block;
	height: 36px;
	left: 0;
	position: absolute;
	top: 2px;
	width: 36px;
}
.provisional.gc-chckbxrdio input[type="checkbox"] + label:hover::before {
	background-image: -webkit-gradient(linear, left top, left bottom, from(#e6e5e5), color-stop(50%, white));
	background-image: linear-gradient(to bottom, #e6e5e5, white 50%);
}
.provisional.gc-chckbxrdio input[type="checkbox"]:focus + label::before {
	-webkit-box-shadow: 0 0 0 2px #000, 0 0 8px 4px #3b99fc;
	box-shadow: 0 0 0 2px #000, 0 0 8px 4px #3b99fc;
}
.provisional.gc-chckbxrdio.checkbox input[type="checkbox"] + label,
.provisional.gc-chckbxrdio.checkbox input[type="checkbox"] + label + ul {
	font-size: 17px;
	min-height: 23px;
}
.provisional.gc-chckbxrdio.checkbox input[type="checkbox"] + label::before {
	height: 24px;
	left: 6px;
	top: 4px;
	width: 24px;
}
.provisional.gc-chckbxrdio.checkbox input[type="checkbox"]:checked + label::after {
	border-width: 0 3px 3px 0;
	height: 16px;
	left: 14px;
	top: 6px;
	width: 9px;
}
.provisional.gc-chckbxrdio input[type="checkbox"]:checked + label::after {
	border-color: #333;
	border-style: solid;
	border-width: 0 5px 5px 0;
	content: "";
	display: inline-block;
	height: 26px;
	left: 12px;
	position: absolute;
	top: 4px;
	-webkit-transform: rotate(45deg);
	transform: rotate(45deg);
	width: 13px;
}</code></pre>
   </details>
  </details>
 </section>
 <section>
  <h3>
   Boutons radio
  </h3>
  <h4>
   Grands boutons radio avec étiquettes explicites
  </h4>
  <p>
   <b>
    Utilisation :
   </b>
   Utiliser des boutons radio lorsqu’une seule sélection peut être faite dans une liste.
  </p>
  <div class="panel panel-default pattern-demo">
   <div class="panel-body">
    <fieldset class="provisional gc-chckbxrdio">
     <legend>
      Quel est votre animal favori? :
     </legend>
     <ul class="list-unstyled lst-spcd-2">
      <li class="radio">
       <input id="animal-1" name="animal" type="radio"/>
       <label for="animal-1">
        Les chiens
       </label>
      </li>
      <li class="radio">
       <input id="animal-2" name="animal" type="radio"/>
       <label for="animal-2">
        Les chats
       </label>
      </li>
      <li class="radio">
       <input id="animal-3" name="animal" type="radio"/>
       <label for="animal-3">
        Les rats
       </label>
      </li>
     </ul>
    </fieldset>
   </div>
  </div>
  <details>
   <summary>
    Code
   </summary>
   <details>
    <summary>
     HTML
    </summary>
    <pre><code>&lt;fieldset class="gc-chckbxrio"&gt;
	&lt;legend&gt;Quel est votre animal favori? &lt;small class="text-muted"&gt;(cases à cocher + explicit label, grande case)&lt;/small&gt;&lt;/legend&gt;
	&lt;ul class="list-unstyled lst-spcd-2"&gt;
		&lt;li class="radio"&gt;
			&lt;input type="radio" name="animal" id="animal-1"&gt;
			&lt;label for="animal-1"&gt;Les chiens&lt;/label&gt;
		&lt;/li&gt;
		&lt;li class="radio"&gt;
			&lt;input type="radio" name="animal" id="animal-2"&gt;
			&lt;label for="animal-2"&gt;Les chats&lt;/label&gt;
		&lt;/li&gt;
		&lt;li class="radio"&gt;
			&lt;input type="radio" name="animal" id="animal-3"&gt;
			&lt;label for="animal-3"&gt;Les rats&lt;/label&gt;
		&lt;/li&gt;
	&lt;/ul&gt;
&lt;/fieldset&gt;</code></pre>
   </details>
   <details>
    <summary>
     CSS
    </summary>
    <pre><code>.provisional.gc-chckbxrdio label {
	cursor: pointer;
	display: block;
	font-size: 20px;
}
.provisional.gc-chckbxrdio legend {
	float: none;
	font-size: 22px;
	font-weight: 700;
	margin-bottom: 15px;
	margin-top: 0;
}
.provisional.gc-chckbxrdio input[type="radio"] {
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
}
.provisional.gc-chckbxrdio input[type="radio"][disabled] + label {
	cursor: not-allowed;
	opacity: .5;
}
.provisional.gc-chckbxrdio input[type="radio"] + label {
	display: inline-block;
	line-height: 2;
	margin-left: 36px;
	width: auto;
}
.provisional.gc-chckbxrdio input[type="radio"] + label::before {
	border: 4px solid #fff;
	-webkit-box-shadow: 0 0 0 2px #000;
	box-shadow: 0 0 0 2px #000;
	content: "";
	display: inline-block;
	height: 36px;
	left: 0;
	position: absolute;
	top: 2px;
	width: 36px;
}
.provisional.gc-chckbxrdio input[type="radio"] + label:hover::before {
	background-image: -webkit-gradient(linear, left top, left bottom, from(#e6e5e5), color-stop(50%, white));
	background-image: linear-gradient(to bottom, #e6e5e5, white 50%);
}
.provisional.gc-chckbxrdio input[type="radio"]:focus + label::before {
	-webkit-box-shadow: 0 0 0 2px #000, 0 0 8px 4px #3b99fc;
	box-shadow: 0 0 0 2px #000, 0 0 8px 4px #3b99fc;
}
.provisional.gc-chckbxrdio input[type="radio"] + label::before {
	border-radius: 50%;
}
.provisional.gc-chckbxrdio input[type="radio"]:checked + label::before {
	background: #444;
}</code></pre>
   </details>
  </details>
  <h4>
   Grands boutons radio avec étiquettes explicites dans un formulaire horizontal
  </h4>
  <div class="panel panel-default pattern-demo">
   <div class="panel-body">
    <fieldset class="provisional gc-chckbxrdio form-inline">
     <legend>
      Veuillez choisir une option :
     </legend>
     <div class="label-inline">
      <input id="inlineRadio1" name="optradio" type="radio"/>
      <label for="inlineRadio1">
       Option 1
      </label>
     </div>
     <div class="label-inline">
      <input id="inlineRadio2" name="optradio" type="radio"/>
      <label for="inlineRadio2">
       Option 2
      </label>
     </div>
     <div class="label-inline">
      <input id="inlineRadio3" name="optradio" type="radio"/>
      <label for="inlineRadio3">
       Option 3
      </label>
     </div>
    </fieldset>
   </div>
  </div>
 </section>
</section>

<details>
 <summary>
  Code
 </summary>
 <details>
  <summary>
   HTML
  </summary>
  <pre><code>&lt;fieldset class="provisional gc-chckbxrdio form-inline"&gt;
	&lt;legend&gt;Veuillez choisir une option :&lt;/legend&gt;
	&lt;div class="label-inline"&gt;
		&lt;input type="radio" id="inlineRadio1" name="optradio"&gt;
		&lt;label for="inlineRadio1"&gt;Option 1&lt;/label&gt;
	&lt;/div&gt;
	&lt;div class="label-inline"&gt;
		&lt;input type="radio" id="inlineRadio2" name="optradio"&gt;
		&lt;label for="inlineRadio2"&gt;Option 2&lt;/label&gt;
	&lt;/div&gt;
	&lt;div class="label-inline"&gt;
		&lt;input type="radio" id="inlineRadio3" name="optradio"&gt;
		&lt;label for="inlineRadio3"&gt;Option 3&lt;/label&gt;
	&lt;/div&gt;
&lt;/fieldset&gt;</code></pre>
 </details>
 <details>
  <summary>
   CSS
  </summary>
  <pre><code>.provisional.gc-chckbxrdio label {
	cursor: pointer;
	display: block;
	font-size: 20px;
}
.provisional.gc-chckbxrdio legend {
	float: none;
	font-size: 22px;
	font-weight: 700;
	margin-bottom: 15px;
	margin-top: 0;
}
.provisional.gc-chckbxrdio input[type="radio"] {
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
}
.provisional.gc-chckbxrdio input[type="radio"][disabled] + label {
	cursor: not-allowed;
	opacity: .5;
}
.provisional.gc-chckbxrdio input[type="radio"] + label {
	display: inline-block;
	line-height: 2;
	margin-left: 36px;
	width: auto;
}
.provisional.gc-chckbxrdio input[type="radio"] + label::before {
	border: 4px solid #fff;
	-webkit-box-shadow: 0 0 0 2px #000;
	box-shadow: 0 0 0 2px #000;
	content: "";
	display: inline-block;
	height: 36px;
	left: 0;
	position: absolute;
	top: 2px;
	width: 36px;
}
.provisional.gc-chckbxrdio input[type="radio"] + label:hover::before {
	background-image: -webkit-gradient(linear, left top, left bottom, from(#e6e5e5), color-stop(50%, white));
	background-image: linear-gradient(to bottom, #e6e5e5, white 50%);
}
.provisional.gc-chckbxrdio input[type="radio"]:focus + label::before {
	-webkit-box-shadow: 0 0 0 2px #000, 0 0 8px 4px #3b99fc;
	box-shadow: 0 0 0 2px #000, 0 0 8px 4px #3b99fc;
}
.provisional.gc-chckbxrdio input[type="radio"] + label::before {
	border-radius: 50%;
}
.provisional.gc-chckbxrdio input[type="radio"]:checked + label::before {
	background: #444;
}
.provisional.gc-chckbxrdio.form-inline .label-inline {
	padding-right: 20px;
}
.provisional.gc-chckbxrdio.form-inline .label-inline label {
	padding-left: 10px;
}</code></pre>
 </details>
</details>

<section>
 <h2 id="configurations">
  Options de configuration
 </h2>
 <table class="table">
  <thead>
   <tr>
    <th>
     Option
    </th>
    <th>
     Description
    </th>
    <th>
     Mode d’emploi de la configuration
    </th>
   </tr>
  </thead>
  <tbody>
   <tr>
    <td>
     Grandes cases à cocher
    </td>
    <td>
     Conception des grandes cases à cocher et des boutons radio
    </td>
    <td>
     Ajouter la classe
     <code>
      gc-chckbxrdio
     </code>
     à l'élément
     <code>
      fieldset
     </code>
     ou l'élément parent qui contient toutes les zones d'entrée de type checkbox/radio
    </td>
   </tr>
   <tr>
    <td>
     Petites case à cocher
    </td>
    <td>
     Utiliser les petites cases à cocher lorsqu’il n'y a qu'un seul élément à cocher, comme dans le cas d’une confirmation.
    </td>
    <td>
     <p>
      Pour des cases à cocher plus compactes, la classe
      <code>
       gc-chckbxrdio
      </code>
      doit être présente dans l'élément parent de la case à cocher avec la classe
      <code>
       checkbox
      </code>
     </p>
    </td>
   </tr>
   <tr>
    <td>
     État de désactivation
    </td>
    <td>
     Les entrées désactivées ne seront pas cliquables. Les indications visuelles comprennent le grisage de la commande et l’ajout d’une icône d’arrêt lorsque le pointeur de la souris est placé au-dessus de la commande.
    </td>
    <td>
     Pour ajouter un état de désactivation, ajouter un attribut
     <code>
      disabled
     </code>
     à la zone d’entrée
    </td>
   </tr>
   <tr>
    <td>
     Format horizontal
    </td>
    <td>
     Les boutons radio ou les cases à cocher en ligne s’affichent côte à côte sur un écran plus grand et se poursuivent sur de nouvelles lignes, plutôt que d’être alignés verticalement.
    </td>
    <td>
     Ajouter la classe
     <code>
      form-inline
     </code>
     à l'élément qui contient l'ensemble des cases à coher ou des boutons radio. Aussi ajouter la classe
     <code>
      label-inline
     </code>
     à chaque élément parent de case à cocher ou de bouton radio.
    </td>
   </tr>
  </tbody>
 </table>
</section>

<h2 id="recherche">
 Recherche et blogue
</h2>

<p>
 Nous avons testé avec succès l'utilisation listes à cocher interactives lors d'un projet d'optimisation avec l'Agence du revenu du Canada et pour la création de listes concernant les restrictions de voyage dues à la COVID-19.
</p>

<ul>
 <li>
  <a href="https://blogue.canada.ca/2020/11/12/listes-de-verification-interactives.html">
   Utilisation de listes de vérification interactives pour simplifier les critères d’admissibilité
  </a>
  (blogue)
 </li>
 <li>
  <a href="{{ site.url }}/resumes-recherche/arc-contactez-nous-resume-recherche.html">
   Résumé de recherche : Communiquer avec l’ARC
  </a>
 </li>
</ul>

<section>
 <h2 id="derniers">
  Derniers changements
 </h2>
 <dl class="dl-horizontal">
  <dt>
   Version 0.1:
   <br/>
   <small>
    <time class="link-muted" datetime="2020-10-19">
     21 octobre 2020
    </time>
   </small>
  </dt>
  <dd>
   Lancé la version bêta des cases à cocher et boutons radio.
  </dd>
 </dl>
</section>
