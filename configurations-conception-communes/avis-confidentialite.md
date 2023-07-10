---
altLangPage: https://design.canada.ca/common-design-patterns/privacy-disclaimer.html
breadcrumbs:
- link: https://www.canada.ca/fr/gouvernement/a-propos.html
  title: "\xC0 propos de Canada.ca"
- link: https://www.canada.ca/fr/gouvernement/a-propos/systeme-conception.html
  title: "Syst\xE8me de conception de Canada.ca"
- link: https://www.canada.ca/fr/gouvernement/a-propos/systeme-conception/bibliotheque-modeles.html
  title: "Biblioth\xE8que de mod\xE8les et de configurations de conception"
date: null
dateModified: '2020-01-20'
description: null
section-title: "Syst\xE8me de conception de Canada.ca"
title: "Avis de confidentialit\xE9"
---


<div class="row">
 <div class="col-md-12 pull-left">
  <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only" style="line-height:1.65em">
   <li class="mrgn-rght-lg">
    Dernière modification : 2021-01-20
   </li>
  </ul>
 </div>
</div>

<p>
 La configuration d'avis de confidentialité affichable/masquable garantit que les conditions d’utilisation, les déclarations de confidentialité et les formulaires similaires d’avertissement sont disponibles au besoin, mais n’empêchent pas l’accès au contenu principal de la page.
</p>

<div class="pattern-demo mrgn-bttm-md">
 <details>
  <summary>
   Avis de confidentialité
  </summary>
  <p>
   Les renseignements personnels fournis sont régis conformément à la
   <cite>
    Loi sur la protection des renseignements personnels
   </cite>
   . Ces renseignements personnels sont recueillis dans le cadre de la réponse du gouvernement du Canada...
  </p>
  <p>
   [Incluez l'avis de confidentialité en entier dans la configuration afficher/masquer]
  </p>
 </details>
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
 <ul>
  <li>
   Utilisez cette configuration lorsque des énoncés d’avertissement (déclarations de confidentialité, conditions d’utilisation, entre autres) sont nécessaires.
  </li>
  <li>
   Utilisez cette configuration sur la même page que le contenu soumis à l'avertissement.
  </li>
  <li>
   Étiquetez la configuration Afficher/masquer avec « Conditions d'utilisation », « Avis de confidentialité » ou quelque chose de similaire.
  </li>
 </ul>
</section>

<section>
 <h2 id="eviter">
  Quoi éviter
 </h2>
 <ul>
  <li>
   N'utilisez pas d'avis de confidentialité pour masquer des détails importants sur le contenu de la page elle-même - conservez-les spécifiquement pour les informations juridiques.
  </li>
  <li>
   Ne créez pas de barrière en obligeant les utilisateurs à passer par une page qui contient uniquement l'avis ou l'avertissement avant de pouvoir accéder au contenu de la tâche.
  </li>
  <li>
   Ne créez pas de lien vers une autre page.
  </li>
 </ul>
</section>

<section>
 <h2 id="comment">
  Comment mettre en oeuvre
 </h2>
 <div class="pattern-demo mrgn-bttm-md">
  <details>
   <summary>
    Avis de confidentialité
   </summary>
   <p>
    Les renseignements personnels fournis sont régis conformément à la
    <cite>
     Loi sur la protection des renseignements personnels
    </cite>
    . Ces renseignements personnels sont recueillis dans le cadre de la réponse du gouvernement du Canada...
   </p>
   <p>
    [Incluez l'avis de confidentialité en entier dans la configuration afficher/masquer]
   </p>
  </details>
 </div>
 <details>
  <summary>
   Code
  </summary>
  <pre><code>&lt;details&gt;
 &lt;summary&gt;Avis de confidentialité&lt;/summary&gt;
 &lt;p&gt;[Texte de l'avis]&lt;/p&gt;
&lt;/details&gt;</code></pre>
 </details>
</section>

<h2 id="recherche">
 Recherche et blogue
</h2>

<p>
 En travaillant sur le contenu d'ArriveCAN, nous avons remarqué qu'un long avis de confidentialité au haut de la page a constitué un obstacle pour certains utilisateurs de lecteurs d'écran.
</p>


<h2 id="derniers">
 Derniers changements
</h2>

<section>
 <dl class="dl-horizontal">
  <dt>
   <time class="link-muted" datetime="2021-01-20">
    2021-01-20
   </time>
  </dt>
  <dd>
   Nous avons modifié les lignes directrices sur les avis de confidentialité pour utiliser la composante Afficher/masquer
  </dd>
 </dl>
</section>

<section>
 <h2 id="discussion">
  Discussion
 </h2>
 <p>
  <a href="https://github.com/canada-ca/design-system-systeme-conception/issues">
   Discuter de cette configuration dans GitHub
  </a>
 </p>
</section>






