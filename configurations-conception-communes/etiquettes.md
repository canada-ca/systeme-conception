---
altLangPage: https://design.canada.ca/common-design-patterns/labels.html
date: null
dateModified: '2021-02-08'
description: null
section-title: "Système de conception de Canada.ca"
title: "\xC9tiquettes"
---


<div class="row">
 <div class="col-md-12 pull-left">
  <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only" style="line-height:1.65em">
   <li class="mrgn-rght-lg">
    Dernière modification : 2021-02-08
   </li>
  </ul>
 </div>
</div>

<p>
 Les étiquettes sont des indicateurs visuels qui attribuent une étiquette à des items comme des événements, des produits, des programmes ou des services.
</p>

<div class="pattern-demo mrgn-bttm-md">
 <span class="label label-default">
  Défaut
 </span>
 <span class="label label-primary">
  Primaire
 </span>
 <span class="label label-success">
  Succès
 </span>
 <span class="label label-info">
  Information
 </span>
 <span class="label label-warning">
  Avertissement
 </span>
 <span class="label label-danger">
  Danger
 </span>
</div>

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
  Utilisez des étiquettes dans les cas suivants :
  <ul>
   <li>
    Signaler qu'un item appartient à une catégorie (par exemple, pour montrer que certains programmes sont ouverts, que d'autres sont fermés, et que d'autres seront bientôt disponibles).
   </li>
   <li>
    Étiqueter ou étamper des items avec des renseignements supplémentaires, comme la date de la dernière mise à jour, ou la fermeture d'une zone.
   </li>
   <li>
    Indiquer les différents stades d'avancement dans une liste d'items (par exemple, pour montrer quels vaccins sont en cours d'examen et lesquels sont approuvés).
   </li>
  </ul>
  <p>
   Dans votre conception, assurez-vous que l'étiquette soit très proche de l'item auquel elle s'applique.
  </p>
 </p>
</section>

<section>
 <h2 id="eviter">
  Quoi éviter
 </h2>
 <ul>
  <li>
   N'utilisez pas de longues étiquettes ou de phrases complètes - soyez bref.
  </li>
  <li>
   N'utilisez pas d'étiquettes dont la signification se chevauche entre elles.
  </li>
  <li>
   N'utilisez pas d'étiquettes pour ajouter un style à du texte.
  </li>
 </ul>
</section>

<section>
 <h2 id="comment">
  Comment mettre en oeuvre
 </h2>
 <p>
  Utilisez le bon type d'étiquette :
 </p>
 <ol>
  <li>
   <a href="#defaut">
    Défaut
   </a>
  </li>
  <li>
   <a href="#primaire">
    Primaire
   </a>
  </li>
  <li>
   <a href="#succes">
    Succès
   </a>
  </li>
  <li>
   <a href="#info">
    Information
   </a>
  </li>
  <li>
   <a href="#avertissement">
    Avertissement
   </a>
  </li>
  <li>
   <a href="#danger">
    Danger
   </a>
  </li>
 </ol>
 <h3 id="defaut">
  1. Étiquette par défaut
 </h3>
 <p>
  <strong>
   Quand l'utiliser :
  </strong>
  pour donner des renseignements supplémentaires sur un item, commme ajouter des dates à une liste d'items.
 </p>
 <div class="pattern-demo mrgn-bttm-md">
  <a href="#">
   Évaluation du programme de citoyenneté
  </a>
  <span class="label label-default">
   Juillet 2020
  </span>
 </div>
 <details>
  <summary>
   Code
  </summary>
  <pre><code>&lt;a href="#"&gt;Évaluation du programme de citoyenneté&lt;/a&gt; &lt;span class="label label-default"&gt;Juillet 2020&lt;/span&gt;</code></pre>
 </details>
 <h3 id="primaire">
  2. Étiquette primaire
 </h3>
 <p>
  <strong>
   Quand l'utiliser :
  </strong>
  pour transmettre une information importante sur un item, comme lorsqu'un nouveau programme n'est pas encore ouvert mais qu'il le sera bientôt.
 </p>
 <div class="pattern-demo mrgn-bttm-md">
  <h3 class="h5">
   <a href="#">
    Prestation canadienne de la relance économique (PCRE)
   </a>
   <span class="label label-primary">
    Ouvre le 12 octobre
   </span>
  </h3>
 </div>
 <details>
  <summary>
   Code
  </summary>
  <pre><code>&lt;h3 class="h5"&gt;&lt;a href="#"&gt;Prestation canadienne de la relance économique (PCRE)&lt;/a&gt; &lt;span class="label label-primary"&gt;Ouvre le 12 octobre&lt;/span&gt;&lt;/h3&gt;</code></pre>
 </details>
 <h3 id="succes">
  3. Étiquette de succès
 </h3>
 <p>
  <strong>
   Quand l'utiliser :
  </strong>
  pour signaler qu'un item est ouvert, disponible ou approuvé.
 </p>
 <div class="pattern-demo mrgn-bttm-md">
  <p>
   <a href="#">
    Protection de l’eau douce au Canada
   </a>
   <span class="label label-success">
    Ouverte – Avis acceptés
   </span>
  </p>
 </div>
 <details>
  <summary>
   Code
  </summary>
  <pre><code>&lt;p&gt;&lt;a href="#"&gt;Protection de l’eau douce au Canada&lt;/a&gt; &lt;span class="label label-success"&gt;Ouverte – Avis acceptés&lt;/span&gt;&lt;/p&gt;</code></pre>
 </details>
 <h3 id="info">
  4. Étiquette d'information
 </h3>
 <p>
  <strong>
   Quand l'utiliser :
  </strong>
  pour étiquetter un item avec une catégorie, comme pour identifier un nouvel article de blogue. Les étiquettes indiquant qu'un item est nouveau devraient être temporaires.
 </p>
 <div class="pattern-demo mrgn-bttm-md">
  <h3 class="h5">
   <a href="#">
    Étude sur les étiquettes : quels mots fonctionnent le mieux
   </a>
   <span class="label label-info">
    Nouveau
   </span>
  </h3>
 </div>
 <details>
  <summary>
   Code
  </summary>
  <pre><code>&lt;h3 class="h5"&gt;&lt;a href="#"&gt;Étude sur les étiquettes : quels mots fonctionnent le mieux&lt;/a&gt; &lt;span class="label label-info"&gt;Nouveau&lt;/span&gt;&lt;/h3&gt;</code></pre>
 </details>
 <h3 id="avertissement">
  5. Étiquette d'avertissement
 </h3>
 <p>
  <strong>
   Quand l'utiliser :
  </strong>
  lorsque vous voulez attirer l'attention sur un élément pour avertir les gens d'un changement, comme lorsqu'un programme se termine bientôt.
 </p>
 <div class="pattern-demo mrgn-bttm-md">
  <h3 class="h5">
   <a href="#">
    Prestation canadienne d’urgence (PCU)
   </a>
   <span class="label label-warning">
    Bientôt fermée
   </span>
  </h3>
 </div>
 <details>
  <summary>
   Code
  </summary>
  <pre><code>&lt;h3 class="h5"&gt;&lt;a href="#"&gt;Prestation canadienne d’urgence (PCU)&lt;/a&gt; &lt;span class="label label-warning"&gt;Bientôt fermée&lt;/span&gt;&lt;/h3&gt;</code></pre>
 </details>
 <h3 id="danger">
  6. Étiquette de danger
 </h3>
 <p>
  <strong>
   Quand l'utiliser :
  </strong>
  lorsqu'un item n'est plus disponible, comme lorsqu'un programme est terminé ou qu'une zone est fermée.
 </p>
 <div class="pattern-demo mrgn-bttm-md">
  <h3 class="h5">
   <a href="#">
    Prestation canadienne d’urgence (PCU)
   </a>
   <span class="label label-danger">
    Fermée
   </span>
  </h3>
 </div>
 <details>
  <summary>
   Code
  </summary>
  <pre><code>&lt;h3 class="h5"&gt;&lt;a href="#"&gt;Prestation canadienne d’urgence (PCU)&lt;/a&gt; &lt;span class="label label-danger"&gt;Fermée&lt;/span&gt;&lt;/h3&gt;</code></pre>
 </details>
</section>

<h2 id="recherche">
 Recherche et blogue
</h2>

<p>
 Nous avons testé avec succès l'utilisation des étiquettes pendant la période de transition entre la Prestation canadienne d'urgence et les nouvelles prestations qui l'ont remplacée. L'ajout d'étiquettes aux différents programmes sur la page de thème a permis aux gens de comprendre plus facilement ce qui leur était offert.
</p>

<h2 id="derniers">
 Derniers changements
</h2>

<section>
 <dl class="dl-horizontal">
  <dt>
   <time class="link-muted" datetime="2021-02-08">
    2021-02-08
   </time>
  </dt>
  <dd>
   Ajout de la documentation pour les étiquettes dans le système de conception
  </dd>
 </dl>
</section>
