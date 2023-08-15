---
altLangPage: https://design.canada.ca/common-design-patterns/subway-navigation.html
date: null
dateModified: '2023-07-12'
description: null
section-title: "Système de conception de Canada.ca"
title: "Navigation de style métro"
---


<div class="row">
 <div class="col-md-12 pull-left">
  <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only" style="line-height:1.65em">
   <li class="mrgn-rght-lg">
    <span class="label label-info">
     Bêta
    </span>
   </li>
   <li class="mrgn-rght-lg">
    Dernière modification : 2023-07-12
   </li>
  </ul>
 </div>
</div>

<p>
 Diviser du contenu long et complexe en pages qui se concentrent chacune sur une étape ou une réponse spécifique dont les gens ont besoin avant de passer à l'étape ou à la section suivante. Idéal pour présenter un service ou un processus.
</p>


<section>
 <h2>
  Sur cette page
 </h2>
 <ul>
  <li>
   <a href="#quand">
    Quand utiliser cette configuration
   </a>
  </li>
  <li>
   <a href="#eviter">
    Quoi éviter
   </a>
  </li>
  <li>
   <a href="#comment">
    Comment mettre en oeuvre
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
 <h2 id="quand">
  Quand utiliser cette configuration
 </h2>
 <p>
  Utilisez cette configuration pour regrouper des pages de tâches connexes et assurer la navigation entre ces pages.
 </p>
 <p>
  Gardez le nombre de pages liées ensemble à un nombre raisonnable (idéalement 6 ou moins, maximum 8).
 </p>
</section>

<section>
 <h2 id="eviter">
  Quoi éviter
 </h2>
 <p>
  N'utilisez pas de chiffres lorsque vous utilisez ce modèle pour des étapes séquentielles. Des tests ont montré que les Canadiens ont moins de chances d'arriver à la section dont ils ont besoin si les éléments sont numérotés.
 </p>
</section>

<section>
 <h2 id="comment">
  Comment mettre en oeuvre
 </h2>
 <p>
  Cette configuration de conception est toujours en version bêta, et le code est toujours en cours de révision. Utilisez-la avec parcimonue, puisqu'elle peut encore faire l'objet de modifications.
 </p>
 <p>
  Vous devrez utiliser le
  <a href="https://wet-boew.github.io/themes-dist/GCWeb/provisional-en.html">
   CSS provisoire
  </a>
  pour utiliser cette configuration de conception.
 </p>
 <ol>
  <li>
   <a href="#1">
    Page d'index
   </a>
  </li>
  <li>
   <a href="#2">
    Page d'étape
   </a>
  </li>
 </ol>
 <h3 id="1">
  1. Page d'index
 </h3>
 <p>
  <strong>
   Quand utiliser cette variante :
  </strong>
  Utilisez comme page d'accueil pour un ensemble de pages connexes qui utilisent la navigation de style métro.
 </p>
 <iframe class="pattern-demo" frameborder="0" loading="lazy" src="fragments/gc-subway-index.html" title="Exemple de page d'index de navigation métro">
 </iframe>
 <details>
  <summary>
   Code
  </summary>
  <details>
   <summary>
    HTML
   </summary>
   <pre><code>&lt;h1 property="name" id="wb-cont" class="gc-thickline"&gt;[Nom du service]&lt;/h1&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut [...].&lt;/p&gt;
&lt;nav class="provisional gc-subway"&gt;
	&lt;h2&gt;Sections&lt;/h2&gt;
	&lt;dl&gt;
		&lt;dt&gt;
			&lt;a href="#"&gt;[Nom de l'étape ou de la section 1]&lt;/a&gt;
		&lt;/dt&gt;
		&lt;dd&gt;
			Description de la page. Lorem ipsum dolor sit amet, consectetur adipiscing elit
		&lt;/dd&gt;
		&lt;dt&gt;
			&lt;a href="#"&gt;[Nom de l'étape ou de la section 2]&lt;/a&gt;
		&lt;/dt&gt;
		&lt;dd&gt;
			Description de la page. Lorem ipsum dolor sit amet, consectetur adipiscing elit
		&lt;/dd&gt;
		&lt;dt&gt;
			&lt;a href="#"&gt;[Nom de l'étape ou de la section 3]&lt;/a&gt;
		&lt;/dt&gt;
		&lt;dd&gt;
			Description de la page. Lorem ipsum dolor sit amet, consectetur adipiscing elit
		&lt;/dd&gt;
		&lt;dt&gt;
			&lt;a href="#"&gt;[Nom de l'étape ou de la section 4]&lt;/a&gt;
		&lt;/dt&gt;
		&lt;dd&gt;
			Description de la page. Lorem ipsum dolor sit amet, consectetur adipiscing elit
		&lt;/dd&gt;
		&lt;dt&gt;
			&lt;a href="#"&gt;[Nom de l'étape ou de la section 5]&lt;/a&gt;
		&lt;/dt&gt;
		&lt;dd&gt;
			Description de la page. Lorem ipsum dolor sit amet, consectetur adipiscing elit
		&lt;/dd&gt;
		&lt;dt&gt;
			&lt;a href="#"&gt;[Nom de l'étape ou de la section 6]&lt;/a&gt;
		&lt;/dt&gt;
		&lt;dd&gt;
			Description de la page. Lorem ipsum dolor sit amet, consectetur adipiscing elit
		&lt;/dd&gt;
	&lt;/dl&gt;
&lt;/nav&gt;</code></pre>
  </details>
  <details>
   <summary>
    CSS
   </summary>
   <pre><code class="prettyprint lang-css">.provisional.gc-subway {
	border-radius: 0 6px 6px 0;
	border-right: 4px solid #26374a;
	border-top: 4px solid #26374a;
	margin-top: 38px;
}

.provisional.gc-subway dl,
.provisional.gc-subway ul {
	clear: both;
	list-style: none;
	padding-left: 0.57em;
	padding-top: 10px;
	position: relative;
}

.provisional.gc-subway dl dt,
.provisional.gc-subway ul dt {
	border-left: 4px solid #26374a;
	padding: 0 20px 3px 1em;
	font-weight: normal;
}

.provisional.gc-subway dl dt a::before,
.provisional.gc-subway ul dt a::before {
	background-color: #fff;
	border: 3px solid #26374a;
	border-radius: 50%;
	content: "";
	height: 1.2em;
	left: 0;
	position: absolute;
	-webkit-transition: width 0.2s, height 0.2s, left 0.2s, margin-top 0.2s;
	transition: width 0.2s, height 0.2s, left 0.2s, margin-top 0.2s;
	width: 1.3em;
}

.provisional.gc-subway dl dt a.active,
.provisional.gc-subway ul dt a.active {
	color: #333333;
	text-decoration: none;
}

.provisional.gc-subway dl dt a.active::before,
.provisional.gc-subway ul dt a.active::before {
	background-color: #26374a;
}

.provisional.gc-subway dl dt a.active:focus,
.provisional.gc-subway dl dt a.active:hover,
.provisional.gc-subway ul dt a.active:focus,
.provisional.gc-subway ul dt a.active:hover {
	color: #0535d2;
	text-decoration: underline;
}

.provisional.gc-subway dl dt a:not(.active):focus::before,
.provisional.gc-subway dl dt a:not(.active):hover::before,
.provisional.gc-subway ul dt a:not(.active):focus::before,
.provisional.gc-subway ul dt a:not(.active):hover::before {
	height: 1.5em;
	left: -0.1em;
	margin-top: -0.1em;
	width: 1.5em;
}

.provisional.gc-subway dl dt:last-of-type,
.provisional.gc-subway ul dt:last-of-type {
	border-left: 5px solid transparent;
	padding-bottom: 0;
}

.provisional.gc-subway dl dd,
.provisional.gc-subway ul dd {
	border-left: 4px solid #26374a;
	line-height: inherit !important;
	margin-bottom: 0;
	margin-top: -3px;
	padding: 0 20px 20px 1em;
}

.provisional.gc-subway dl dd:last-child,
.provisional.gc-subway ul dd:last-child {
	border-left: 5px solid transparent;
	padding-bottom: 0;
}

.provisional.gc-subway dl li,
.provisional.gc-subway ul li {
	border-left: 4px solid #26374a;
	padding: 0 20px 30px 1em;
}

.provisional.gc-subway dl li a::before,
.provisional.gc-subway ul li a::before {
	background-color: #fff;
	border: 3px solid #26374a;
	border-radius: 50%;
	content: "";
	height: 1.2em;
	left: 0.05em;
	position: absolute;
	-webkit-transition: width 0.2s, height 0.2s, left 0.2s, margin-top 0.2s;
	transition: width 0.2s, height 0.2s, left 0.2s, margin-top 0.2s;
	width: 1.2em;
}

.provisional.gc-subway dl li a.active,
.provisional.gc-subway ul li a.active {
	color: #333333;
	text-decoration: none;
}

.provisional.gc-subway dl li a.active::before,
.provisional.gc-subway ul li a.active::before {
	background-color: #26374a;
}

.provisional.gc-subway dl li a.active:focus,
.provisional.gc-subway dl li a.active:hover,
.provisional.gc-subway ul li a.active:focus,
.provisional.gc-subway ul li a.active:hover {
	color: #0535d2;
	text-decoration: underline;
}

.provisional.gc-subway dl li a:not(.active):focus::before,
.provisional.gc-subway dl li a:not(.active):hover::before,
.provisional.gc-subway ul li a:not(.active):focus::before,
.provisional.gc-subway ul li a:not(.active):hover::before {
	height: 1.5em;
	left: -0.1em;
	margin-top: -0.1em;
	width: 1.5em;
}

.provisional.gc-subway dl li::first-line,
.provisional.gc-subway ul li::first-line {
	line-height: 1 !important;
}

.provisional.gc-subway dl li:last-child,
.provisional.gc-subway ul li:last-child {
	border-bottom: 4px solid #26374a;
	border-bottom-left-radius: 6px;
	border-left: 4px solid #26374a;
}

.provisional.gc-subway dl li ul,
.provisional.gc-subway ul li ul {
	margin-top: 20px;
	padding-left: 0.55em;
}

.provisional.gc-subway dl li ul li:last-child,
.provisional.gc-subway ul li ul li:last-child {
	border-bottom-width: 0;
	padding-bottom: 0;
}

.provisional.gc-subway h1 {
	float: left;
}

.provisional.gc-subway h1,
.provisional.gc-subway-section .gc-subway-h1 {
	background-color: #fff;
	border-bottom-width: 0;
	color: #555;
	font-size: 1.3em;
	margin-right: 20px;
	margin-top: -19px;
	padding: 0 20px 10px 0;
}

h1~.provisional.gc-subway {
	border-right: none;
	border-top: none;
}</code></pre>
  </details>
 </details>
 <h3 id="2">
  2. Page d'étape
 </h3>
 <p>
  <strong>
   Quand utiliser cette variante :
  </strong>
  Utilisez sur chaque page liée par la navigation de style métro.
 </p>
 <iframe class="pattern-demo" frameborder="0" loading="lazy" src="fragments/gc-subway-page.html" title="Exemple de navigation métro">
 </iframe>
 <details class="wb-prettify all-pre">
  <summary>
   Code
  </summary>
  <details>
   <summary>
    HTML
   </summary>
   <pre><code>&lt;nav class="provisional gc-subway"&gt;
	&lt;h1 id="gc-document-nav"&gt;[Nom du service]&lt;/h1&gt;
	&lt;ul&gt;
		&lt;li&gt;&lt;a href="#" class="active" aria-current="page"&gt;[Page 1]&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;
			&lt;a href="#" class="hidden-xs hidden-sm"&gt;[Page 2]&lt;/a&gt;
			&lt;a href="#gc-document-nav" class="visible-xs visible-sm"&gt;[Page 2]&lt;/a&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a href="#" class="hidden-xs hidden-sm"&gt;[Page 3]&lt;/a&gt;
			&lt;a href="#gc-document-nav" class="visible-xs visible-sm"&gt;[Page 3]&lt;/a&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a href="#" class="hidden-xs hidden-sm"&gt;[Page 4]&lt;/a&gt;
			&lt;a href="#gc-document-nav" class="visible-xs visible-sm"&gt;[Page 4]&lt;/a&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a href="#" class="hidden-xs hidden-sm"&gt;[Page 5]&lt;/a&gt;
			&lt;a href="#gc-document-nav" class="visible-xs visible-sm"&gt;[Page 5]&lt;/a&gt;
		&lt;/li&gt;
		&lt;li&gt;
			&lt;a href="#" class="hidden-xs hidden-sm"&gt;[Page 6]&lt;/a&gt;
			&lt;a href="#gc-document-nav" class="visible-xs visible-sm"&gt;[Page 6]&lt;/a&gt;
		&lt;/li&gt;
	&lt;/ul&gt;
&lt;/nav&gt;

&lt;h1 property="name" id="wb-cont" class="gc-thickline"&gt;[Page 1]&lt;/h1&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo elementum est, ac ultrices urna convallis vitae. Nulla nec convallis felis. Ut pretium nisl nisi. Nam gravida gravida aliquet. Morbi tincidunt lorem in purus imperdiet, id rutrum mauris sodales. Vivamus nec mattis tellus. Nunc turpis dolor, malesuada non magna nec, scelerisque tristique velit.&lt;/p&gt;
&lt;p&gt;Sed consectetur eu ligula a molestie. Vivamus convallis libero malesuada pharetra suscipit. In a pulvinar mi, quis aliquet mauris. Duis convallis nunc nunc, in euismod nisi volutpat sit amet. Integer convallis lacus non orci imperdiet, ac convallis massa mollis. Aliquam erat volutpat. Ut maximus euismod auctor. Ut ac gravida nunc. Nam non efficitur neque. Pellentesque tincidunt, libero luctus condimentum laoreet, turpis magna maximus nibh, at cursus lectus tellus in augue. Aenean scelerisque eros dui, at tincidunt eros tristique nec.&lt;/p&gt;

&lt;nav class="mrgn-bttm-lg mrgn-tp-lg"&gt;
	&lt;h3 class="wb-inv"&gt;Navigation du document&lt;/h3&gt;
	&lt;ul class="pager"&gt;
		&lt;li class="next"&gt;&lt;a href="page2-fr.html#wb-cont" rel="next"&gt;&lt;span class="wb-inv"&gt;Suivant: &lt;/span&gt;[Page 2]&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt;
&lt;/nav&gt;</code></pre>
  </details>
  <details>
   <summary>
    CSS
   </summary>
   <pre class="prettyprint lang-css"><code>.provisional.gc-subway {
	border-radius: 0px 6px 6px 0px;
	border-right: 4px solid #26374a;
	border-top: 4px solid #26374a;
	margin-top: 38px;
}
.provisional.gc-subway ul {
	clear: both;
	list-style: none;
	padding-left: .57em;
	padding-top: 10px;
	position: relative;
}
.provisional.gc-subway ul li {
	border-left: 4px solid #26374a;
	padding: 0px 20px 30px 1em;
}
.provisional.gc-subway ul li::first-line {
	line-height: 1 !important;
}
.provisional.gc-subway ul li :first-child::before {
	background-color: #fff;
	border: 3px solid #26374a;
	border-radius: 50%;
	content: "";
	height: 1.2em;
	left: .05em;
	position: absolute;
	-webkit-transition: width .2s, height .2s, left .2s, margin-top .2s;
	transition: width .2s, height .2s, left .2s, margin-top .2s;
	width: 1.2em;
}
.provisional.gc-subway ul li.active &gt; :first-child::before {
	background-color: #26374a;
}
.provisional.gc-subway ul li a[href]:hover::before,
.provisional.gc-subway ul li a[href]:focus::before {
	height: 1.4em;
	left: -.05em;
	margin-top: -.1em;
	width: 1.4em;
}
.provisional.gc-subway ul li:last-child {
	border-bottom: 4px solid #26374a;
	border-bottom-left-radius: 6px;
	border-left: 4px solid #26374a;
}
.provisional.gc-subway ul li ul {
	margin-top: 20px;
	padding-left: .55em;
}
.provisional.gc-subway ul li ul li:last-child {
	border-bottom-width: 0px;
	padding-bottom: 0px;
}
.provisional.gc-subway ul li ul.noline li {
	-o-border-image: none;
	border-image: none;
	border-left: 4px solid transparent;
}
.provisional.gc-subway h1 {
	float: left;
}
.provisional.gc-subway h1,
.provisional.gc-subway-section .gc-subway-h1 {
	background-color: #fff;
	border-bottom-width: 0px;
	color: #555;
	font-size: 1.3em;
	margin-right: 20px;
	margin-top: -19px;
	padding: 0px 20px 10px 0px;
}
@media screen and (min-width: 992px) {
	.provisional.gc-subway {
		border-right: 0;
		border-top: 0;
		display: none;
		margin-top: 25px;
		padding-left: 15px;
	}
	.provisional.gc-subway.no-blink {
		display: block;
	}
	.provisional.gc-subway .gc-subway-menu-nav {
		float: right;
		width: 33.33%;
	}
	.provisional.gc-subway ul li:last-child {
		border-bottom: 0;
		border-left: 4px solid transparent;
	}
	.provisional.gc-subway-section {
		padding-right: 15px;
		width: 66.66%;
	}
	.provisional.gc-subway-section .gc-subway-h1,
	.provisional.gc-subway-section h1 {
		margin-top: 0;
	}
	.provisional.gc-subway-section .gc-subway-h1 {
		font-family: Lato, sans-serif;
		font-weight: inherit;
		margin-bottom: 0;
		margin-right: 0;
		padding-bottom: 0 !important;
		padding-left: 0;
	}
	.wb-disable .provisional.gc-subway {
		display: block;
	}
}</code></pre>
  </details>
  <details>
   <summary>
    JS
   </summary>
   <pre><code>( function( $, window, wb ) {
"use strict";

var $document = wb.doc,
	componentName = "gc-subway",
	selector = ".provisional." + componentName,
	initEvent = "wb-init ." + componentName,
	views = {
		xxs: "xxsmallview",
		xs: "xsmallview",
		sm: "smallview",
		md: "mediumview",
		lg: "largeview",
		xl: "xlargeview"
	},
	mainClass = "gc-subway-section",
	toggleClass = "wb-inv",
	desktopInited = false,
	skipLink = false,
	$html = wb.html,
	$h1, $h2, $h1Copy, $menu, $main,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			h1,
			$elm;

		if ( elm ) {
			$elm = $( elm );
			$h1 = $( "h1", $elm );
			h1 = $h1.get( 0 );

			// Ensure the element have an ID
			if ( !h1.id ) {
				h1.id = wb.getId();
			}

			// Add subway H1 to skip links
			if ( !skipLink ) {
				skipLink = wb.addSkipLink( wb.i18n( "skip-prefix" ) + " " + h1.textContent, { href: "#" + h1.id } );
			}

			// trigger resizing
			onResize( $elm );

			// Identify that initialization has completed
			wb.ready( $elm, componentName );
		}
	},

	/**
	 * Mutate DOM depending on breakpoint
	 * @method onResize
	 * @param {jQuery DOM element | jQuery Event} $elm Element targetted by this plugin, which is the nav | Resizing event
	 */
	onResize = function( $elm ) {

		if ( !$elm.length ) {
			$elm = $( selector );
		}

		// Ensure the page contains at least two heading level 1
		if ( $( "main h1" ).length &lt; 2 ) {
			$document.off( wb.resizeEvents, onResize );
			$elm.addClass( "no-blink p-0" );
			return;
		}

		// Desktop view, setup and mutate H1s
		if ( $html.hasClass( views.md ) || $html.hasClass( views.lg ) ||
			$html.hasClass( views.xl ) ) {

			// Initiate desktop mode only once
			if ( !desktopInited ) {
				initDesktop( $elm );
			}
			$h1.addClass( toggleClass );
			$h1Copy.prependTo( $main );
			$h2.prependTo( $menu );
		} else if ( ( $html.hasClass( views.sm ) || $html.hasClass( views.xs ) || $html.hasClass( views.xxs ) ) &amp;&amp; desktopInited ) {

			// Mobile view, mutate back to mobile first if needed
			$h1.removeClass( toggleClass );
			$h1Copy.remove();
			$( "h2:first-child", $menu ).remove();
		}
	},

	/**
	 * Initate setup for desktop mode
	 * @method initDesktop
	 * @param {jQuery DOM element} $elm Element targetted by this plugin, which is the nav
	 */
	initDesktop = function( $elm ) {
		$h2 = $( "<h2 class="h3 hidden-xs visible-md visible-lg mrgn-tp-0">Sections</h2>" );
		$h1Copy = $( "<div aria-hidden="true" class="gc-subway-h1">" + $h1.text() + "</div>" );
		$( "ul", $elm ).first().wrap( "<div class="gc-subway-menu-nav"></div>" );
		$menu = $( ".gc-subway-menu-nav", $elm );
		$elm.nextUntil( ".pagedetails, .gc-subway-section-end" ).wrapAll( "<section class='provisional " + mainClass + "'>" );
		$main = $elm.next();

		// Prevent on-load blinking on desktop
		$elm.addClass( "no-blink" );

		desktopInited = true;
	};

// Listen for resizing and mutate the DOM accordingly
$document.on( wb.resizeEvents, onResize );

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector + ".provisional", init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );</section></code></pre>
  </details>
 </details>
</section>

<h2 id="recherche">
 Recherche et blogue
</h2>

<p>
 Cette configuration a été développée avec l'ARC dans le cadre d'un projet d'optimisation de la Prestation canadienne pour enfants. Elle fonctionne bien sur les appareils mobiles et elle est un façon efficace de montrer la relation entre des pages liées.
</p>

<h2 id="derniers">
 Derniers changements
</h2>

<section>
 <dl class="dl-horizontal">
  <dt>
   <time class="link-muted" datetime="2023-07-12">
    2023-07-12
   </time>
  </dt>
  <dd>
   La page sur le modèle de navigation de style métro a été mise à jour afin de supprimer la phrase où l’on déconseille l’utilisation de sous-étapes. Il est vrai que, dans le cas de certains processus plus complexes, l’utilisation de sous-étapes peut s’avérer judicieuse.
  </dd>
  <dt>
   <time class="link-muted" datetime="2022-10-26">
    2022-10-26
   </time>
  </dt>
  <dd>
   Clarification que la page d'index est requise
  </dd>
  <dt>
   <time class="link-muted" datetime="2022-05-06">
    2022-05-06
   </time>
  </dt>
  <dd>
   Remplacement du mot « sections » par « pages » dans l'introduction
  </dd>
  <dt>
   <time class="link-muted" datetime="2021-01-20">
    2021-01-20
   </time>
  </dt>
  <dd>
   Lancement du modèle de navigation de style métro en version bêta
  </dd>
 </dl>
</section>
