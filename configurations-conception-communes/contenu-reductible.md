---
altLangPage: https://design.canada.ca/common-design-patterns/collapsible-content.html
date: null
dateModified: '2020-04-22'
description: null
title: Afficher/masquer - Configuration de conception de Canada.ca
---


<p class="gc-byline">
 <strong>
  De :
  <a href="https://www.canada.ca/fr/secretariat-conseil-tresor.html">
   Secrétariat du Conseil du Trésor du Canada
  </a>
 </strong>
</p>

<p>
 Le modèle afficher/masquer (aussi appelé accordéon) permet de masquer le contenu jusqu'à ce qu'il soit demandé. Le modèle comprend un lien de déclenchement qui affiche ou masque le contenu.
</p>

<div class="pattern-demo mrgn-bttm-md">
 <p>
  Exemple :
 </p>
 <details>
  <summary>
   Vous devez cliquer sur cette zone pour afficher ou masquer le contenu
  </summary>
  <p>
   Ce texte est masqué jusqu'à ce qu'il soit affiché.
  </p>
 </details>
</div>

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
   Comment mettre en oeuvre
  </a>
 </li>
 <li>
  <a href="#recherche">
   Recherche et blogue
  </a>
 </li>
 <li>
  <a href="#changements">
   Derniers changements
  </a>
 </li>
 <li>
  <a href="#discussion">
   Discussion
  </a>
 </li>
</ul>

<section>
 <h2 id="utiliser">
  Quand l'utiliser
 </h2>
 <p>
  Le modèle afficher/masquer peut être utilisé dans 2 situations :
 </p>
 <h3>
  1. Présenter un choix entre des réponses mutuellement exclusives
 </h3>
 <p>
  Utilisez ce modèle lorsque les gens doivent obtenir des réponses différentes en fonction de leur situation et lorsque ces réponses sont mutuellement exclusives.
 </p>
 <p>
  Cela réduit le risque que les gens pensent à tort qu’ils ont obtenu la réponse qui s’applique à leur situation.
 </p>
 <h3>
  2. Présenter des renseignements secondaires
 </h3>
 <p>
  Utilisez ce modèle pour éviter que le contenu secondaire n'interfère avec la tâche principale.
 </p>
 <p>
  Il peut s'agir d'un contenu qui s'applique à la plupart des gens, mais que seules quelques personnes peuvent avoir besoin d'utiliser (par exemple, une déclaration de confidentialité ou des renseignements supplémentaires qui ne sont pas nécessaires pour accomplir la tâche principale).
 </p>
 <p>
  Il peut également s'agir d'un contenu qui ne s'applique qu'à une minorité de personnes (par exemple lorsqu'il existe des renseignements spécifiques destinées à un public spécifique).
 </p>
</section>

<section>
 <h2 id="eviter">
  Quoi éviter
 </h2>
 <p>
  N'utilisez pas ce modèle si:
 </p>
 <ul>
  <li>
   la majorité des gens ont besoin du contenu pour accomplir la tâche principale de la page (sauf si les réponses sont mutuellement exclusives)
  </li>
  <li>
   les gens doivent répondre à plusieurs questions pour obtenir la réponse qui s'applique à eux (utilisez plutôt des
   <a href="../configurations-conception-communes/questions-interactives.html">
    questions interactives
   </a>
   )
  </li>
  <li>
   l'une des réponses mutuellement exclusives comporte plusieurs sous-tâches ou plus d'une page de contenu à l'appui (utilisez plutôt des
   <a href="../configurations-conception-communes/questions-interactives.html">
    questions interactives
   </a>
   )
  </li>
 </ul>
</section>

<section>
 <h2 id="comment">
  Comment mettre en oeuvre
 </h2>
 <h3>
  Présenter un choix entre des réponses mutuellement exclusives
 </h3>
 <div class="pattern-demo mrgn-bttm-md">
  <h3>
   Déterminer si vous êtes dans une situation de garde partagée
  </h3>
  <p>
   L'enfant passe-t-il son temps :
  </p>
  <ul class="list-unstyled">
   <li>
    <details>
     <summary>
      environ de façon égale avec chaque parent
     </summary>
     <p>
      Si l'enfant partage son temps environ de façon égale entre les deux parents, les deux parents sont considérés avoir la
      <strong>
       garde partagée
      </strong>
      de cet enfant...
     </p>
    </details>
   </li>
   <li>
    <details>
     <summary>
      avec vous la plupart du temps
     </summary>
     <p>
      Si l'enfant vit avec vous la plupart du temps, vous êtes considéré avoir la
      <strong>
       garde principale
      </strong>
      pour les besoins de l'Allocation canadienne pour enfants...
     </p>
    </details>
   </li>
   <li>
    <details>
     <summary>
      avec l'autre parent la plupart du temps
     </summary>
     <p>
      Si l'enfant vit avec l'autre parent la plupart du temps, l'autre parent est considéré avoir la
      <strong>
       garde principale
      </strong>
      pour les besoins de l'Allocation canadienne pour enfants...
     </p>
    </details>
   </li>
  </ul>
 </div>
 <details>
  <summary>
   Code
  </summary>
  <pre class="prettyprint"><code>&lt;h3&gt;Déterminer si vous êtes dans une situation de garde partagée&lt;/h3&gt;
&lt;p&gt;L'enfant passe-t-il son temps :&lt;/p&gt;
&lt;ul class="list-unstyled"&gt;
 &lt;li&gt;
  &lt;details&gt;
   &lt;summary&gt;environ de façon égale avec chaque deux parents&lt;/summary&gt;
   &lt;p&gt;Si l'enfant partage son temps environ de façon égale entre les deux parents, les deux parents sont considérés avoir la &lt;strong&gt;garde partagée&lt;/strong&gt; de cet enfant...&lt;/p&gt;
  &lt;/details&gt;
 &lt;/li&gt;
 &lt;li&gt;
  &lt;details&gt;
   &lt;summary&gt;avec vous la plupart du temps&lt;/summary&gt;
   &lt;p&gt;Si l'enfant vit avec vous la plupart du temps, vous êtes considéré avoir la &lt;strong&gt;garde principale&lt;/strong&gt; pour les besoins de l'Allocation canadienne pour enfants...&lt;/p&gt;
  &lt;/details&gt;
 &lt;/li&gt;
 &lt;li&gt;
  &lt;details&gt;
   &lt;summary&gt;avec l'autre parent la plupart du temps&lt;/summary&gt;
   &lt;p&gt;Si l'enfant vit avec l'autre parent la plupart du temps, l'autre parent est considéré avoir la &lt;strong&gt;garde principale&lt;/strong&gt; pour les besoins de l'Allocation canadienne pour enfants...&lt;/p&gt;
  &lt;/details&gt;
 &lt;/li&gt;
&lt;/ul&gt;</code></pre>
 </details>
 <h3>
  Présenter des renseignements secondaires
 </h3>
 <div class="pattern-demo mrgn-bttm-md">
  <h3>
   Estimer vos paiements
  </h3>
  <p>
   Utilisez l'estimateur pour planifier votre budget.
  </p>
  <p>
   Par exemple, vous pouvez utiliser le montant que vous pourriez recevoir si :
  </p>
  <ul>
   <li>
    vous avez un nouvel enfant
   </li>
   <li>
    votre revenu change
   </li>
   <li>
    vous débutez ou terminez une situation de garde partagée
   </li>
  </ul>
  <details>
   <summary>
    Voir le calcul mathématique sur lequel sont basés les paiements de l'Allocation canadienne pour enfants
   </summary>
   <h3>
    Comment sont calculés les paiements
   </h3>
   <p>
    Chaque mois, les paiements de l'Allocation canadienne pour enfants est ajusté en fonction :
   </p>
   <ul>
    <li>
     du nombre d'enfants dont vous avez la charge
    </li>
    <li>
     de l'âge de vos enfants
    </li>
    <li>
     de votre situation matrimoniale
    </li>
    <li>
     de votre revenu familial net de l'année précédente
    </li>
   </ul>
   <p>
    ...
   </p>
  </details>
 </div>
 <details>
  <summary>
   Code
  </summary>
  <pre class="prettyprint"><code>&lt;h3&gt;Estimer vos paiements&lt;/h3&gt;
&lt;p&gt;Utilisez l'estimateur pour planifier votre budget.&lt;/p&gt;
&lt;p&gt;Par exemple, vous pouvez utiliser le montant que vous pourriez recevoir si :&lt;/p&gt;
&lt;ul&gt;
 &lt;li&gt;vous avez un nouvel enfant&lt;/li&gt;
 &lt;li&gt;votre revenu change&lt;/li&gt;
 &lt;li&gt;vous débutez ou terminez une situation de garde partagée&lt;/li&gt;
&lt;/ul&gt;
&lt;details&gt;
 &lt;summary&gt;Voir le calcul mathématique sur lequel sont basés les paiements de l'Allocation canadienne pour enfants&lt;/summary&gt;
 &lt;h3&gt;Comment sont calculés les paiements&lt;/h3&gt;
 &lt;p&gt;Chaque mois, les paiements de l'Allocation canadienne pour enfants est ajusté en fonction :&lt;/p&gt;
 &lt;ul&gt;
  &lt;li&gt;du nombre d'enfants dont vous avez la charge&lt;/li&gt;
  &lt;li&gt;de l'âge de vos enfants&lt;/li&gt;
  &lt;li&gt;de votre situation matrimoniale&lt;/li&gt;
  &lt;li&gt;de votre revenu familial net de l'année précédente&lt;/li&gt;
 &lt;/ul&gt;
 &lt;p&gt;...&lt;/p&gt;
&lt;/details&gt;
        </code></pre>
 </details>
</section>

<section>
 <h2 id="recherche">
  Recherche et blogue
 </h2>
 <p>
  Nous avons testé avec succès l'utilisation du modèle afficher/masquer pour encourager les gens à choisir entre des options mutuellement exclusives lors de 2 projets d'optimisation réalisés avec l'Agence de revenu du Canada.
 </p>
 <ul>
  <li>
   <a href="https://blogue.canada.ca/2020/09/18/afficher-masquer.html">
    Utiliser le modèle afficher/masquer pour faire des choix
   </a>
   (blogue)
  </li>
  <li>
   <a href="https://blogue.canada.ca/resumes-recherche/arc-contactez-nous-resume-recherche.html">
    Résumé de recherche : Communiquer avec l’ARC
   </a>
  </li>
 </ul>
 <h2 id="changements">
  Derniers changements
 </h2>
 <p>
  <strong>
   2019-11-28 :
  </strong>
  les directives ont été modifiées pour permettre d'afficher/masquer du contenu pour des réponses qui sont mutuellement exclusives.
 </p>
</section>




