---
altLangPage: https://design.canada.ca/crisis/alerts.html
date: null
dateModified: '2020-07-13'
description: null
title: Alertes et perturbations de service sur Canada.ca
---




<p>
 Ces recommandations contribueront à uniformiser les communications de chaque ministère sur les interruptions de service en cas de crise.
</p>

<section>
 <h2>
  Sur cette page
 </h2>
 <ul>
  <li>
   <a href="#alertes">
    Comment utiliser les alertes en temps de crise
   </a>
  </li>
  <li>
   <a href="#exemples">
    Exemples et code
   </a>
  </li>
  <li>
   <a href="#multiple">
    Alertes répétées sur plusieurs pages
   </a>
  </li>
 </ul>
</section>

<section>
 <h2 id="alertes">
  Comment utiliser les alertes en temps de crise
 </h2>
 <p>
  Les alertes sont destinées à attirer l'attention sur les changements au contenu régulier de 2 façons :
 </p>
 <ol>
  <li>
   une modification du contenu de la page sur laquelle le signalement apparaît : dans ce cas, placez le signalement à côté du contenu mis à jour
  </li>
  <li>
   un changement qui a été effectué ailleurs, comme la publication de nouveaux renseignements : dans ce cas, un lien vers les nouveaux renseignements placé dans l’alerte elle-même
  </li>
 </ol>
 <h3>
  Quoi inclure dans les alertes
 </h3>
 <p>
  Le contenu des alertes devrait :
 </p>
 <ul>
  <li>
   être court et simple
  </li>
  <li>
   décrire les conséquences pour l'utilisateur
  </li>
  <li>
   être adapté à la page sur laquelle il figure
  </li>
  <li>
   inclure les dates (si elles sont connues) auxquelles la perturbation aura lieu
  </li>
  <li>
   utiliser le temps de verbe approprié pour refléter le moment où le changement est effectué
  </li>
  <li>
   limiter le nombre de liens - si un lien est nécessaire, en inclure un seul
  </li>
 </ul>
 <h3>
  Limiter l'utilisation des alertes
 </h3>
 <p>
  Gardez à l'esprit que la fatigue d'alerte réduit l'efficacité de l'alerte au fil du temps. Plus les gens voient les alertes et les messages d'avertissement, moins ils y sont réceptifs.
		Pour éviter cela, suivez ces lignes directrices :
 </p>
 <ul>
  <li>
   utiliser les alertes de façon temporaire uniquement (le temps d'intégrer l'information ou de résoudre la situation)
  </li>
  <li>
   limiter le nombre d'alertes sur chaque page
  </li>
  <li>
   limiter le nombre d'alertes utilisées d'une page à l'autre
  </li>
  <ul>
   <li>
    utiliser les alertes aux points de prestation des services concernés, tels que les pages de lancement de service, les pages de contact, etc.
   </li>
   <li>
    éviter d'aller au-delà des points de prestation de services ou d'information - sur les pages thématiques et les pages de sujets, envisager plutôt d'utiliser un nouveau sujet
   </li>
  </ul>
  <li>
   conserver les alertes pour les situations importantes qui touchent la plupart des utilisateurs :
  </li>
  <ul>
   <li>
    sur la page d'accueil de Canada.ca, n'utiliser que lorsque plus de 50 % de la population est touchée
   </li>
   <li>
    sur les pages d'accueil des institutions, à n'utiliser que lorsque plus de 40 % des utilisateurs sont concernés
   </li>
  </ul>
  <li>
   éviter d'utiliser des alertes uniquement pour styliser du contenu régulier (pour mettre en valeur ou souligner)
  </li>
 </ul>
 <p>
  Consultez notre billet de blogue sur
  <a href="https://blogue.canada.ca/2020/07/15/fatigue-d'alerte.html">
   la fatigue d'alerte pendant la COVID-19
  </a>
  .
 </p>
 <section>
  <h3>
   Quelle alerte utiliser
  </h3>
  <dl class="dl-horizontal">
   <dt>
    Alerte de danger (rouge)
   </dt>
   <dd>
    À n'utiliser que si le service est annulé ou si l'exécution d'une activité présente un risque pour la santé ou la sécurité des Canadiens.
   </dd>
   <dt>
    Alerte d'avertissement (jaune)
   </dt>
   <dd>
    Utiliser pour les retards, les fermetures à certains endroits et d'autres types d'interruptions de service.
   </dd>
   <dt>
    Alerte d'information (bleu)
   </dt>
   <dd>
    Utiliser pour la durée d'une méthode de demande, les changements de temps d'attente sur une ligne téléphonique, les messages indiquant qu'il n'y a pas d'interruption de service pour un service particulier si celui-ci génère des demandes de renseignements.
   </dd>
   <dt>
    Alerte de succès (vert)
   </dt>
   <dd>
    Utiliser lorsqu'une interruption de service est résolue.
   </dd>
  </dl>
 </section>
 <h2 id="exemples">
  Exemples et code
 </h2>
 <div class="well">
  <section class="alert alert-warning">
   <h3>
    Perturbation de service
   </h3>
   <p>
    Ce service est touché par l'épidémie de coronavirus (COVID-19).
   </p>
   <a href="#">
    Consulter les mises à jour de l'état du service
   </a>
  </section>
 </div>
 <details>
  <summary>
   HTML pour coder une alerte
  </summary>
  <p>
   Code:
  </p>
  <pre class="prettyprint"><code>&lt;section class="alert alert-warning"&gt;
 &lt;h3&gt;Perturbation de service&lt;/h3&gt;
 &lt;p&gt;Ce service est touché par l'épidémie de coronavirus (COVID-19).&lt;/p&gt;
 &lt;a href="#"&gt;Consulter les mises à jour de l'état du service&lt;/a&gt;&lt;/p&gt;
&lt;/section&gt;</code></pre>
  <p>
   Changer la classe "alert-warning" pour la classe "alert-info", "alert-danger" ou "alert-success", en fonction du type d'alerte.
  </p>
 </details>
 <p>
  Utilisez le
  <a href="https://conception.canada.ca/configurations-conception-communes/alertes-contextuelles.html">
   modèle d'alertes contextuelles
  </a>
 </p>
 <h3>
  Exemples supplémentaires
 </h3>
 <p>
  Exemples d'alertes sur des types de page spécifiques :
 </p>
 <ul>
  <li>
   <a href="https://conception.canada.ca/alertes/alertes-lds.html">
    Page de lancement de service
   </a>
  </li>
  <li>
   <a href="https://conception.canada.ca/alertes/alertes-contact.html">
    Page de contact
   </a>
  </li>
  <li>
   <a href="https://conception.canada.ca/alertes/alertes-pai.html">
    Page d'accueil institutionnelle bêta
   </a>
  </li>
  <li>
   <a href="https://conception.canada.ca/alertes/alertes-profil-inst-stable.html">
    Page de profil institutionnel
   </a>
  </li>
 </ul>
 <section>
  <h2 id="multiple">
   Alertes répétées sur plusieurs pages
  </h2>
  <p>
   Si vous devez ajouter la même alerte sur plusieurs pages différentes, il peut être judicieux de créer une seule page vers laquelle toutes ces alertes peuvent être liées.
  </p>
  <p>
   La page centrale devrait :
  </p>
  <ul>
   <li>
    résumer les services concernés dans un langage simple
   </li>
   <li>
    expliquez les conséquenes sur les utilisateurs des services concernés
   </li>
   <li>
    être mis à jour dès que de nouvelles informations sont disponibles
   </li>
  </ul>
  <p>
   Le fil d'Ariane de cette page centrale devrait mener vers la page de la réponse globable du gouvernement du Canada à la crise.
  </p>
  <h3>
   Comment cela peut-il aider
  </h3>
  <ul>
   <li>
    éviter les pages éparpillées sur les crises et les pertubations de service
   </li>
   <li>
    encourager une approche coordonnée au sein de chaque ministère et dans l'ensemble du gouvernement du Canada
   </li>
   <li>
    réduire le travail nécessaire pour maintenir les différentes alertes et les mises à jour correspondantes
   </li>
  </ul>
 </section>
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
    Ajout d'une recommandation visant à inclure des dates dans l'alerte et à utiliser le bon temps de verbe.
   </dd>
  </dl>
 </section>
</section>
