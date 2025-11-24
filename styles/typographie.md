---
altLangPage: https://design.canada.ca/styles/typography.html
date: 2019-10-01
dateModified: 2025-11-21
description: La typographie et les polices de caractères pour Canada.ca
title: Typographie - Style de Canada.ca
---
<span class="wb-prettify lang-css"></span>
<p><span class="label label-danger">Obligatoire</span></p>
<p>Les directives concernant la typographie sont obligatoires pour toutes les pages.</p>
<p><a href="{{ site.url }}/specifications/elements-obligatoires.html">Éléments obligatoires du système de conception</a></p>
<p>Les polices doivent être harmonisées dans tout le site Canada.ca, et elles doivent être facilement lisibles sur tous les appareils. Utilisez une combinaison de Lato pour les en-têtes et de Noto sans pour le corps du texte.</p>
<h2>Ordinateurs de bureau et tablettes</h2>
<ul>
  <li>H1&nbsp;: Lato, 41px, caractère gras</li>
  <li>H2&nbsp;: Lato, 39px, caractère gras</li>
  <li>H3&nbsp;: Lato, 29px, caractère gras</li>
  <li>H4&nbsp;: Lato, 27px, caractère gras</li>
  <li>H5&nbsp;: Lato, 24px, caractère gras</li>
  <li>H6&nbsp;: Lato, 22px, caractère gras</li>
  <li>Corps du texte&nbsp;: Noto sans, 20px, texte régulier</li>
</ul>
<h2>Petits appareils</h2>
<ul>
  <li>H1&nbsp;: Lato, 37px, caractère gras</li>
  <li>H2&nbsp;: Lato, 35px, caractère gras</li>
  <li>H3&nbsp;: Lato, 26px, caractère gras</li>
  <li>H4&nbsp;: Lato, 22px, caractère gras</li>
  <li>H5&nbsp;: Lato, 20px, caractère gras</li>
  <li>H6&nbsp;: Lato, 18px, caractère gras</li>
  <li>Corps du texte&nbsp;: Noto sans, 18px, texte régulier</li>
</ul>

<h2>En‑têtes pour les caractères en langues autochtones et les autres langues</h2>
<p>Les polices Lato et Noto Sans prennent en charge une grande variété de langues et les caractères non latins. La police Noto Sans offre cependant un éventail plus large de caractères et a été conçue en fonction des polices de langues autochtones canadiennes, notamment Noto Sans Canadian Aboriginal.</p>
<p>Si, lorsque vous publiez du contenu dans une autre langue, Lato ne prend pas en charge les caractères des en-têtes, vous pouvez remplacer cette police par une autre qui le fait, comme Noto Sans ou Noto Sans Canadian Aboriginal.</p>
<p>Si cette modification précise n’est pas apportée, le style de Canada.ca demandera par défaut au navigateur de l’utilisateur d’utiliser une police disponible qui affichera les caractères correctement.</p>
<p>Par exemple :</p>
<p>Balise linguistique appliquée à une section ayant du contenu</p>
<pre class="prettyprint linenums lang-html"><code>&lt;section lang="iu"&gt;
  &lt;h2&gt;ᑐᓴᒐᒃᓴᖅ&lt;/h2&gt;
  &lt;p&gt;....&lt;/p&gt;
&lt;/section&gt;</code></pre>

<p>Style CSS pour la balise linguistique</p>
<pre class="prettyprint linenums lang-css"><code>:lang(iu) {
  font-family: 'Noto Sans Canadian Aboriginal';
}
:lang(iu) :is(h1, h2, h3, h4, h5, h6) {
  font-weight: bold;
}</code></pre>

<p>Style</p>
<pre class="prettyprint linenums lang-css"><code>&lt;link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Canadian+Aboriginal:wght@400;700&display=swap" rel="stylesheet"&gt;</code></pre>


<p><a href="https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639_des_langues">Liste des codes de langue ISO 639</a></p>

<h2>Titre principal de la page</h2>
<p>Lorsque l'en-tête H1 est le titre principal d'une page, il est souligné d'une barre rouge conformément à l'image de marque de Canada.ca.</p>
<p>Spécifications de la barre rouge (auparavant connue sous le nom de gc-thickline)&nbsp;:</p>
<ul>
  <li>alignement&nbsp;: gauche</li>
  <li>couleur&nbsp;: #A62A1</li>
  <li>positionnement&nbsp;: .2em (7.6&nbsp;px) sous l'en-tête H1</li>
  <li>taille&nbsp;: 72&nbsp;px de large 6&nbsp;px d'épaisseur</li>
</ul>
<h2>Longueur de la ligne</h2>
<p>Limitez la longueur des lignes de texte à 65 caractères. Cela garantit qu'aucune ligne ne dépasse une longueur de lecture confortable.</p>
<p>Les mises en page peuvent comporter plus de 65 caractères. Cette restriction de longueur de ligne s'applique uniquement aux lignes de texte.</p>
<h2>Liens</h2>
<p>Soulignez les liens en utilisant un style de soulignement qui ignore les descendeurs.</p>
<h2>Derniers changements</h2>
<dl class="dl-horizontal">
  <dt><time>2025-11-21</time></dt>
  <dd>Mise à jour pour ajouter les instructions sur la manière de personnaliser la typographie afin qu’elle prenne en charge d’autres langues.</dd>
  <dt><time>2025-05-15</time></dt>
  <dd>Mise à jour des caractéristiques typographiques en parallèle avec les activités d'alignement pour GCWeb et le Système de design GC.</dd>
</dl>
