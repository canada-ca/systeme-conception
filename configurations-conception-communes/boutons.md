---
altLangPage: https://design.canada.ca/common-design-patterns/buttons.html
date: null
dateModified: '2022-09-23'
description: null
section-title: "Système de conception de Canada.ca"
title: Boutons
---


<div class="row">
 <div class="col-md-12 pull-left">
  <ul class="list-inline small mrgn-bttm-sm" id="list-inline-desktop-only" style="line-height:1.65em">
   <li class="mrgn-rght-lg">
    Dernière modification : 2022-09-23
   </li>
  </ul>
 </div>
</div>

<section>
 <p>
  Les boutons sont des objets cliquables incitant une personne à exécuter une action.
 </p>
 <div class="pattern-demo mrgn-bttm-md">
  <button class="btn btn-call-to-action">
   Bouton de super-tâche
  </button>
  <button class="btn btn-primary">
   Bouton primaire
  </button>
  <button class="btn btn-default">
   Bouton secondaire
  </button>
 </div>
</section>

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
  Utiliser cette configuration pour exécuter des mesures ou des commandes qui modifieront l’état du système en aval ou en amont (par exemple « Ajouter un commentaire », « Soumettre », « Envoyer »).
 </p>
 <p>
  Utiliser des boutons pour :
 </p>
 <ul>
  <li>
   aider une personne à amorcer ou à mener à bien une transaction (un bouton « Se connecter », par exemple);
  </li>
  <li>
   invoquer une fonction, commme « Partager cette page »;
  </li>
  <li>
   offrir un ensemble permanent de commandes d’interface utilisateur dans une série de page, par exemple « précédent », « suivant », ou « retour à la table des matières »
  </li>
 </ul>
</section>

<section>
 <h2 id="eviter">
  Quoi éviter
 </h2>
 <p>
  Ne pas utiliser de bouton lorsqu'un lien de texte ordinaire fera tout autant l’affaire, comme lorsqu’on fournit un simple lien unique vers une autre page.
 </p>
 <p>
  Utiliser les boutons pour activer des commandes de système, ou pour attirer l’attention sur des actions importantes sur la page. Limitez leur utilisation pour éviter que leur efficacité visuelle en soit diminuée.
 </p>
</section>

<section>
 <h2 id="comment">
  Comment mettre en oeuvre
 </h2>
 <p>
  Utiliser le bon type bouton:
 </p>
 <ol>
  <li>
   <a href="#action">
    Super tâche
   </a>
  </li>
  <li>
   <a href="#primaire">
    Primaire
   </a>
  </li>
  <li>
   <a href="#secondaire">
    Secondaire
   </a>
  </li>
  <li>
   <a href="#danger">
    Danger
   </a>
  </li>
  <li>
   <a href="#lien">
    Lien
   </a>
  </li>
  <li>
   <a href="#connecter">
    Se connecter
   </a>
  </li>
 </ol>
 <h3 id="action">
  1. Bouton de super-tâche
 </h3>
 <p>
  <strong>
   Quand l'utiliser :
  </strong>
  utiliser un bouton de super-tâche pour lancer la tâche principale ou l'étape suivante que les personnes tentent d'accomplir à partir d'une page spécifique, par exemple :
 </p>
 <ul>
  <li>
   présenter une demande à un programme ou à un service
  </li>
  <li>
   lancer un calculateur
  </li>
  <li>
   débuter une série de questions interactives
  </li>
  <li>
   trouver un clinique
  </li>
 </ul>
 <p>
  Vous pouvez aussi l'utiliser dans la
  <a href="https://conception.canada.ca/modeles-obligatoire/pages-profil-institutionnel.html">
   Page d'accueil institutionnelle
  </a>
  lorsqu'il existe des preuves qu'une tâche principale particulière (une super-tâche) est clairement la plus importante.
 </p>
 <p>
  <strong>
   Quoi éviter :
  </strong>
  ne pas utiliser de bouton de super-tâche pour promouvoir quelque chose qui n'est pas la tâche principale que les gens recherchent sur cette page. Pour les promotions, utilisez plutôt des
  <a href="https://conception.canada.ca/configurations-conception-communes/vignettes-promotionnelles.html">
   Promotions contextuelles
  </a>
  ou une
  <a href="https://conception.canada.ca/configurations-conception-communes/banniere-promotionnelle.html">
   Bannière promotionnelle
  </a>
  .
 </p>
 <p>
  Ne pas utiliser plus d'un bouton de super-tâche par page.
 </p>
 <div class="pattern-demo mrgn-bttm-md">
  <button class="btn btn-call-to-action">
   Calculer combien vous pourriez recevoir
  </button>
 </div>
 <details>
  <summary>
   Code
  </summary>
  <pre><code>&lt;button class="btn btn-call-to-action"&gt;Calculer combien vous pourriez recevoir&lt;/button&gt;</code></pre>
 </details>
 <h3 id="primaire">
  2. Bouton primaire
 </h3>
 <p>
  <strong>
   Quand l'utiliser :
  </strong>
  utiliser les boutons primaires pour les actions qu'une personne est susceptible d'effectuer sur cette page, comme passer à la page suivante ou pour un bouton de soumission dans un formulaire.
 </p>
 <p>
  <strong>
   Quoi éviter :
  </strong>
  ne pas utiliser plus d'un bouton primaire par page.
 </p>
 <div class="pattern-demo mrgn-bttm-md">
  <button class="btn btn-primary">
   Soumettre
  </button>
 </div>
 <details>
  <summary>
   Code
  </summary>
  <pre><code>&lt;button class="btn btn-primary"&gt;Soumettre&lt;/button&gt;</code></pre>
 </details>
 <h3 id="secondaire">
  3. Bouton secondaire
 </h3>
 <p>
  <strong>
   Quand l'utiliser :
  </strong>
  utiliser des boutons secondaires pour les options alternatives, moins importantes ou moins susceptibles d'être utilisées, comme le bouton "précédent" dans un formulaire.
 </p>
 <div class="pattern-demo mrgn-bttm-md">
  <button class="btn btn-default">
   Précédent
  </button>
 </div>
 <details>
  <summary>
   Code
  </summary>
  <pre><code>&lt;button class="btn btn-default"&gt;Précédent&lt;/button&gt;</code></pre>
 </details>
 <h3 id="danger">
  4. Bouton danger
 </h3>
 <p>
  <strong>
   Quand l'utiliser :
  </strong>
  Utiliser les boutons danger pour attirer l'attention sur une action qui pourrait avoir des conséquences, comme supprimer un formulaire ou quitter une application authentifiée.
 </p>
 <p>
  <strong>
   Quoi éviter :
  </strong>
  ne pas utiliser de bouton danger à moins que ce soit absolument nécessaire.
 </p>
 <div class="pattern-demo mrgn-bttm-md">
  <button class="btn btn-danger">
   Effacer le formulaire
  </button>
 </div>
 <details>
  <summary>
   Code
  </summary>
  <pre><code>&lt;button class="btn btn-danger"&gt;Effacer le formulaire&lt;/button&gt;</code></pre>
 </details>
 <h3 id="lien">
  5. Bouton lien
 </h3>
 <p>
  <strong>
   Quand l'utiliser :
  </strong>
  Utiliser les boutons liens pour les options peu utilisées, par exemple pour redémarrer un assistant ou une calculatrice. Les boutons liens ont une zone cible légèrement plus grande que les liens réguliers.
 </p>
 <div class="pattern-demo mrgn-bttm-md">
  <button class="btn btn-link">
   Redémarrer le calculateur
  </button>
 </div>
 <details>
  <summary>
   Code
  </summary>
  <pre><code>&lt;button class="btn btn-link"&gt;Redémarrer le calculateur&lt;/button&gt;</code></pre>
 </details>
 <h3 id="connecter">
  6. Bouton contextuel « Se connecter »
 </h3>
 <p>
  <strong>
   Quand l'utiliser :
  </strong>
  Le bouton contextuel « Se connecter » est un élément facultatif de
  <a href="en-tete-general.html">
   l’en-tête global
  </a>
  . À utiliser sur les pages où la connexion à un compte est une tâche importante. Utiliser l’étiquette « Se connecter ».
 </p>
 <ul>
  <li>
   <a href="https://blogue.canada.ca/2022/09/23/presentation-bouton-contextuel-se-connecter">
    Présentation du bouton contextuel « Se connecter » (Blogue)
   </a>
  </li>
  <li>
   <a href="connexion-contextuel.html">
    Conseils sur le bouton contextual « Se connecter »
   </a>
  </li>
 </ul>
 <div class="pattern-demo mrgn-bttm-md mrgn-tp-lg">
  <figure>
   <img alt="Un bouton carré bleu en haut à droite de l'écran pour se connecter à un compte" class="img-responsive border" src="../images/sign-in-button-fr.png" width="300">

  </figure>
 </div>
 <h3>
  Modifications des boutons
 </h3>
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
     Comment mettre en oeuvre
    </th>
   </tr>
  </thead>
  <tbody>
   <tr>
    <td>
     Pleine largeur
    </td>
    <td>
     Faire en sorte qu'un bouton occupe toute la largeur de sa colonne.
    </td>
    <td>
     Ajouter la classe
     <code>
      btn-block
     </code>
     au bouton
    </td>
   </tr>
   <tr>
    <td>
     Boutons groupés
    </td>
    <td>
     Grouper les côte à côte pour les contrôles comme les les boutons qui permettent de basculer d'un état à un autre.
    </td>
    <td>
     Entourer les boutons groupés d'un
     <code>
      div
     </code>
     avec la classe
     <code>
      btn-group
     </code>
     .
    </td>
   </tr>
   <tr>
    <td>
     Changer la taille
    </td>
    <td>
     Modifier la taille des boutons pour améliorer la visibilité d'un appel à l'action ou pour gagner de la place dans les conceptions tels que boutons qui permettent de basculer d'un état à un autre.
    </td>
    <td>
     Ajouter les classes suivantes au bouton :
     <ul>
      <li>
       Grand:
       <code>
        btn-lg
       </code>
      </li>
      <li>
       Petit:
       <code>
        btn-sm
       </code>
      </li>
      <li>
       Très petit:
       <code>
        btn-xs
       </code>
      </li>
     </ul>
    </td>
   </tr>
   <tr>
    <td>
     Désactiver le bouton
    </td>
    <td>
     Mettre un bouton en gris pour qu'il ne soit pas cliquable. En général, il est préférable de supprimer le bouton plutôt que de le désactiver.
    </td>
    <td>
     Ajouter la classe
     <code>
      disabled
     </code>
     au button.
    </td>
   </tr>
  </tbody>
 </table>
</section>

<section>
 <h2 id="recherche">
  Recherche et blogue
 </h2>
 <ul>
  <li>
   <a href="https://blogue.canada.ca/2022/09/23/presentation-bouton-contextuel-se-connecter">
    Présentation du bouton contextuel « Se connecter »
   </a>
  </li>
  <li>
   <a href="https://blogue.canada.ca/2020/12/17/choisir-des-boutons.html">
    Choisir le bon bouton pour la réussite des tâches
   </a>
  </li>
 </ul>
</section>

<section>
 <h2 id="derniers">
  Derniers changements
 </h2>
 <dl class="dl-horizontal">
  <dt>
   <time class="link-muted" datetime="2022-08-17">
    2022-08-17
   </time>
  </dt>
  <dd>
   Lignes directrices plus détaillées pour le bouton contextuel « Se connecter »
  </dd>
  <dt>
   <time class="link-muted" datetime="2021-01-20">
    2021-01-20
   </time>
  </dt>
  <dd>
   Ajout d'une nouvelle version bêta du bouton contextuel « Se connecter »
  </dd>
 </dl>
</section>

<section>
