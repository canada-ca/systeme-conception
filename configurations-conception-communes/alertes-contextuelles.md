---
altLangPage: https://design.canada.ca/common-design-patterns/contextual-alerts.html
date: null
dateModified: '2022-08-24'
description: null
section-title: "Système de conception de Canada.ca"
title: Alertes contextuelles
---


<div class="row">
 <div class="col-md-12 pull-left">
  <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only" style="line-height:1.65em">
   <li class="mrgn-rght-lg">
    Dernière modification : 2022-08-24
   </li>
  </ul>
 </div>
</div>

<section>
 <p>
  Les alertes sont des avis brefs et bien visibles destinés à attirer l'attention sur un message ou un changement important. Elles sont souvent sensibles au facteur temps. L'étiquette, la couleur et l'icône indiquent le type de message et son urgence.
 </p>
 <div class="pattern-demo mrgn-bttm-md">
  <section class="provisional alert alert-danger">
   <h3>
    En-tête de l'alerte
   </h3>
   <p>
    Description de l'alerte
   </p>
  </section>
 </div>
 <section>
  <h2>
   Sur cette page
  </h2>
  <ul>
   <li>
    <a href="#utiliser">
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
    <a href="#recherche">
     Recerche et blogue
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
  <h2 id="utiliser">
   Quand l'utiliser
  </h2>
  <p>
   Utilisez les alertes contextuelles pour :
  </p>
  <ul>
   <li>
    attirer l’attention sur un changement important au niveau de la page ou de la sous-section, comme une interruption de service ou une panne de site;
   </li>
   <li>
    attirer l'attention sur les modifications, récentes ou à venir, apportées à un processus ou à un service;
   </li>
   <li>
    fournir le résultat d'une action de l'utilisateur, par exemple, confirmer le succès ou aviser une personne d'une erreur
   </li>
   <li>
    avertir une personne d'une conséquence d'une action ou d'une inaction liée à sa tâche
   </li>
  </ul>
  <p>
   Pour utiliser des alertes contextuelles lors de perturbations urgentes du service, suivez ces lignes directrices :
  </p>
  <ul>
   <li>
    <a href="../crise/alertes.html">
     Alertes et perturbations de service sur Canada.ca
    </a>
   </li>
  </ul>
 </section>
 <section>
  <h2 id="eviter">
   Quoi éviter
  </h2>
  <p>
   Ne pas utiliser les alertes contextuelles :
  </p>
  <ul>
   <li>
    pour fournir des renseignements à propos d’une étape normale d’un processus ou d’une tâche
   </li>
   <li>
    simplement pour insister sur un élément de contenu
   </li>
   <li>
    dans les cas où un avertissement n’est ni à risque élevé ni fréquent
   </li>
   <li>
    pour créer des étiquettes, utilisez plutôt ce composant:
    <ul>
     <li>
      <a href="https://conception.canada.ca/configurations-conception-communes/etiquettes.html">
       modèles d’étiquettes
      </a>
     </li>
    </ul>
   </li>
  </ul>
 </section>
 <section>
  <h2 id="comment">
   Comment mettre en œuvre
  </h2>
  <p>
   Rédiger le texte de l'alerte pour un auditoire ayant un niveau de scolarité secondaire (pointage de 100 et moins dans
   <a href="http://www.scolarius.com/">
    Scolarius
   </a>
   ).
  </p>
  <p>
   Garder le texte d'alerte très bref. Fournir des détails supplémentaires dans la section ou la page appropriée.
  </p>
  <p>
   Supprimer le texte de l'alerte une fois que le problème est résolu ou qu'il s'est écoulé suffisamment de temps pour que les informations fournies ne soient plus nouvelles.
  </p>
  <p>
   Limiter strictement le nombre d'alertes sur la page pour éviter la lassitude.
  </p>
  <p>
   Situer l’alerte dans le contexte approprié :
  </p>
  <dl class="dl-horizontal">
   <dt>
    Vise l'ensemble du site
   </dt>
   <dd>
    Placer-la en haut de la page, au-dessus de l’en-tête principal.
   </dd>
   <dt>
    Vise la page
   </dt>
   <dd>
    Placez-la en dessous de l’en-tête de la page.
    <br/>
    <br/>
    Dans certains cas, lorsque la preuve indique qu’une alerte a été manquée, reprenez une partie de l’alerte dans la section pertinente du contenu Web.
   </dd>
   <dt>
    Vise une sous-section de la page
   </dt>
   <dd>
    Placer-la à l’endroit qui convient le mieux à l’intérieur de cette sous-section, généralement sous l’en-tête de la sous-section ou entre deux paragraphes.
   </dd>
  </dl>
  <p>
   Utiliser le type d'alerte approprié :
  </p>
  <ol>
   <li>
    <a href="#danger">
     Alerte de danger
    </a>
   </li>
   <li>
    <a href="#avertissement">
     Alerte d'avertissement
    </a>
   </li>
   <li>
    <a href="#information">
     Alerte d’information
    </a>
   </li>
   <li>
    <a href="#succes">
     Alerte de succès
    </a>
   </li>
  </ol>
  <h3 id="danger">
   1. Alerte de danger
  </h3>
  <p>
   <strong>
    Utilisation :
   </strong>
   Utilisez l’alerte de danger pour attirer l’attention sur une situation qui pourrait mettre une personne en danger, comme un avertissement de ne pas voyager. Vous pouvez aussi l'utiliser pour aviser une personne d’un problème technique qui pourrait l’empêcher d’accomplir sa tâche, comme une soumission de données invalide dans un formulaire.
  </p>
  <div class="pattern-demo mrgn-bttm-md">
   <section class="provisional alert alert-danger">
    <h3>
     Si vous êtes enceinte ou envisagez de concevoir un enfant – Avis concernant les deux partenaires
    </h3>
    <p>
     Évitez de voyager au Costa Rica si vous êtes enceinte ou prévoyez concevoir un enfant au cours des trois prochains mois.
    </p>
   </section>
  </div>
  <details>
   <summary>
    Code
   </summary>
   <pre><code>&lt;section class="alert alert-danger"&gt;
  &lt;h3&gt;Si vous êtes enceinte ou envisagez de concevoir un enfant – Avis concernant les deux partenaires&lt;/h3&gt;
  &lt;p&gt;Évitez de voyager au Costa Rica si vous êtes enceinte ou prévoyez concevoir un enfant au cours des trois prochains mois.&lt;/p&gt;
&lt;/section&gt;</code></pre>
  </details>
 </section>
 <section>
  <h3 id="avertissement">
   2. Alerte d’avertissement
  </h3>
  <p>
   <strong>
    Utilisation :
   </strong>
   Utilisez l’alerte d’avertissement pour :
  </p>
  <ul>
   <li>
    attirer l’attention sur une conséquence possible d’une action ou d’une inaction, comme une sanction légale qui pourrait s’appliquer;
   </li>
   <li>
    la date d’un changement à venir à une politique ou à un processus qui touchera un nombre important de personnes, comme un changement aux exigences de voyage.
   </li>
  </ul>
  <div class="pattern-demo mrgn-bttm-md">
   <section class="provisional alert alert-warning">
    <h3>
     Modifications aux lois sur la conduite avec facultés affaiblies et la criminalité liée au cannabis
    </h3>
    <p>
     Les nouvelles peines pour conduite avec facultés affaiblies et infractions liées au cannabis pourraient avoir une incidence sur votre statut d’immigrant au Canada. Si vous commettez l’un de ces crimes, vous ne pourrez peut-être pas venir au Canada ou y rester.
    </p>
    <p>
     <a href="https://www.canada.ca/fr/immigration-refugies-citoyennete/nouvelles/avis/peines-conduite-affaiblies-cannabis-incidence-statut-immigrant.html">
      Nouvelles peines et comment vous pourriez être affectés
     </a>
    </p>
   </section>
  </div>
  <details>
   <summary>
    Code
   </summary>
   <pre><code>&lt;section class="alert alert-warning"&gt;
 &lt;h3&gt;Modifications aux lois sur la conduite avec facultés affaiblies et la criminalité liée au cannabis&lt;/h3&gt;
 &lt;p&gt;Les nouvelles peines pour conduite avec facultés affaiblies et infractions liées au cannabis pourraient avoir une incidence sur votre statut d’immigrant au Canada. Si vous commettez l’un de ces crimes, vous ne pourrez peut-être pas venir au Canada ou y rester.&lt;/p&gt;
 &lt;p&gt;&lt;a href="https://www.canada.ca/fr/immigration-refugies-citoyennete/nouvelles/avis/peines-conduite-affaiblies-cannabis-incidence-statut-immigrant.html"&gt;Nouvelles peines et comment vous pourriez être affectés &lt;/a&gt;&lt;/p&gt;
&lt;/section&gt;</code></pre>
  </details>
  <div class="pattern-demo mrgn-bttm-md mrgn-tp-md">
   <section class="provisional alert alert-warning">
    <p>
     <strong>
      À compter du 1er avril 2022,
     </strong>
     les tests préalables à l’entrée ne seront plus exigés pour les voyageurs entièrement vaccinés qui entrent au Canada par voie terrestre, aérienne ou maritime. Entre-temps, veuillez respecter les exigences relatives aux tests de dépistage avant l’entrée.
    </p>
    <p>
     <a href="https://www.canada.ca/fr/sante-publique/nouvelles/2022/03/le-gouvernement-du-canada-retirera-lexigence-relative-au-depistage-prealable-a-lentree-pour-les-voyageurs-entierement-vaccines-le-1e-avril.html">
      Communiqué de presse
     </a>
    </p>
   </section>
  </div>
  <details>
   <summary>
    Code
   </summary>
   <pre><code>&lt;section class="alert alert-warning"&gt;
			&lt;p&gt;&lt;strong&gt;À compter du 1er avril 2022,&lt;/strong&gt; les tests préalables à l’entrée ne seront plus exigés pour les voyageurs entièrement vaccinés qui entrent au Canada par voie terrestre, aérienne ou maritime. Entre-temps, veuillez respecter les exigences relatives aux tests de dépistage avant l’entrée.&lt;/p&gt;
			&lt;p&gt;&lt;a href="https://www.canada.ca/fr/sante-publique/nouvelles/2022/03/le-gouvernement-du-canada-retirera-lexigence-relative-au-depistage-prealable-a-lentree-pour-les-voyageurs-entierement-vaccines-le-1e-avril.html"&gt;Communiqué de presse&lt;/a&gt;&lt;/p&gt;
			&lt;/section&gt;</code></pre>
  </details>
 </section>
 <section>
  <h3 id="information">
   3. Alerte d’information
  </h3>
  <p>
   <strong>
    Utilisation :
   </strong>
   Utilisez l’alerte d’information pour attirer l’attention sur une précision concernant le contenu environnant, comme le nombre de semaines pour recevoir un remboursement quand une demande est effectuée par courrier ou par téléphone.
  </p>
  <div class="pattern-demo mrgn-bttm-md">
   <section class="provisional alert alert-info">
    <h3>
     État actuel de l’appel de candidatures : Fermé
    </h3>
    <p>
     Nous vous remercions de votre intérêt à l’égard du programme Emplois d’été Canada. L’appel de candidatures est maintenant fermé.
    </p>
   </section>
  </div>
  <details>
   <summary>
    Code
   </summary>
   <pre><code>&lt;section class="alert alert-info"&gt;
  &lt;h3&gt;État actuel de l’appel de candidatures : Fermé&lt;/h3&gt;
  &lt;p&gt;Nous vous remercions de votre intérêt à l’égard du programme Emplois d’été Canada. L’appel de candidatures est maintenant fermé.&lt;/p&gt;
&lt;/section&gt;</code></pre>
  </details>
 </section>
 <section>
  <h3 id="succes">
   4. Alerte de succès
  </h3>
  <p>
   <strong>
    Utilisation :
   </strong>
   Utilisez l’alerte de succès pour attirer l’attention sur une action fructueuse, comme la validation du formulaire ou l'accomplissement d'une tâche.
  </p>
  <div class="pattern-demo mrgn-bttm-md">
   <section class="provisional alert alert-success">
    <h3>
     Votre demande de données accessibles au public à partir de la liste des organismes de bienfaisance a été acceptée.
    </h3>
    <p>
     Le délai de traitement de votre demande peut prendre jusqu’à quatre (4) semaines. Nous communiquerons avec vous si nous avons besoin de plus amples renseignements.
    </p>
   </section>
  </div>
  <details>
   <summary>
    Code
   </summary>
   <pre><code>&lt;section class="alert alert-success"&gt;
  &lt;h3&gt;Votre demande de données accessibles au public à partir de la liste des organismes de bienfaisance a été acceptée.&lt;/h3&gt;
	&lt;p&gt;Le délai de traitement de votre demande peut prendre jusqu’à quatre (4) semaines. Nous communiquerons avec vous si nous avons besoin de plus amples renseignements.&lt;/p&gt;
&lt;/section&gt;</code></pre>
  </details>
 </section>
 <h2 id="recherche">
  Recherche et blogue
 </h2>
 <p>
  Ce style d'alerte a été utilisé avec succès dans le cadre d'un projet visant à améliorer le contenu des conseils aux voyageurs :
 </p>
 <ul>
  <li>
   <a href="https://blogue.canada.ca/2022/07/28/communiques">
    Utilisation d’alertes pour maintenir la synchronisation des communiqués de presse et du contenu Web
   </a>
  </li>
  <li>
   <a href="{{ site.url }}/resumes-recherche/conseils-voyageurs-resume-recherche.html">
    Résumé de recherche&nbsp;: Conseils aux voyageurs et avertissements
   </a>
  </li>
  <li>
   <a href="https://blogue.canada.ca/2020/07/15/fatigue-dalerte">
    La « fatigue d'alerte »
   </a>
  </li>
 </ul>
 <h2 id="derniers">
  Derniers changements
 </h2>
 <section>
  <dl class="dl-horizontal">
   <dt>
    <time class="link-muted" datetime="2022-05-10">
     2022-05-10
    </time>
   </dt>
   <dd>
    Ajout d’un exemple d’avertissement supplémentaire qui comprend une date.
    <br/>
    <br/>
    Ajout d'un lien vers un article de blogue sur la « fatigue d’alerte ».
    <br/>
    <br/>
    Définition et conseils de mise en œuvre ajustés.
   </dd>
  </dl>
  <dl class="dl-horizontal">
   <dt>
    <time class="link-muted" datetime="2020-12-18">
     2020-12-18
    </time>
   </dt>
   <dd>
    Promotion du modèle d'alerte bêta au modèle d'alerte stable.
   </dd>
  </dl>
 </section>
</section>





