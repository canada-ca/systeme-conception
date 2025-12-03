---
altLangPage: https://design.canada.ca/common-design-patterns/collapsible-content.html
date: 2020-04-22
dateModified: '2025-11-25'
description: Le modèle développer/réduire (aussi appelé accordéon) permet de masquer le contenu jusqu'à ce qu'il soit demandé.
title: Développer/réduire - Configuration de conception de Canada.ca
---
<span class="wb-prettify lang-html"></span>

<p>Le modèle développer/réduire (aussi appelé accordéon) permet de masquer le contenu jusqu'à ce qu'il soit demandé. Le modèle comprend un lien de déclenchement qui affiche ou masque le contenu.</p>

<div class="pattern-demo mrgn-bttm-md">
 <p>Exemple&nbsp;:</p>
 <details>
  <summary>Vous devez cliquer sur cette zone pour développer ou réduire le contenu</summary>
  <p>Ce texte est masqué jusqu'à ce qu'il soit affiché.</p>
 </details>
</div>

<h2>Sur cette page</h2>
<ul>
 <li><a href="#utiliser">Quand l'utiliser</a></li>
 <li><a href="#eviter">Quoi éviter</a></li>
 <li><a href="#specifications-conception">Spécifications de conception</a></li>
 <li><a href="#comment">Comment mettre en oeuvre</a></li>
 <li><a href="#recherche">Recherche et justification</a></li>
 <li><a href="#changements">Derniers changements</a></li>
</ul>

<section>
 <h2 id="utiliser">Quand l'utiliser</h2>
 <p>Le modèle développer/réduire peut être utilisé dans deux situations&nbsp;:</p>

 <h3>1. Présenter un choix entre des réponses mutuellement exclusives</h3>
 <p>Utilisez ce modèle lorsque les gens doivent obtenir des réponses différentes en fonction de leur situation et lorsque ces réponses sont mutuellement exclusives.</p>
 <p>Cela réduit le risque que les gens pensent à tort qu’ils ont obtenu la réponse qui s’applique à leur situation.</p>

 <h3>2. Présenter des renseignements secondaires</h3>
 <p>Utilisez ce modèle pour éviter que le contenu secondaire n'interfère avec la tâche principale.</p>
 <p>Il peut s'agir d'un contenu qui s'applique à la plupart des gens, mais que seules quelques personnes peuvent avoir besoin d'utiliser (par exemple, une déclaration de confidentialité ou des renseignements supplémentaires qui ne sont pas nécessaires pour accomplir la tâche principale).</p>
 <p>Il peut également s'agir d'un contenu qui ne s'applique qu'à une minorité de personnes (par exemple lorsqu'il existe des renseignements spécifiques destinées à un public spécifique).</p>

  <h3>Utiliser les boutons développer tout/réduire tout</h3>
  <figure>
   <img src="{{ site.url }}/images/configurations-conception-communes/contenu-reductible-developper-reduire-tout.png" alt="Description longue sous l’image">
   <details>
    <summary>Description longue</summary>
    <p>Deux boutons gris positionnés côte à côte. Les deux ont des fonds gris. Le bouton de gauche contient le texte suivant&nbsp;: Développer tout. Le bouton de droite contient le texte suivant&nbsp;: Réduire tout.</p>
   </details>
  </figure>
  <p>L’option développer tout/réduire tout ne doit être employée que lorsqu’il peut être avantageux pour les utilisateurs d’afficher tous les renseignements en même temps. Ce serait notamment le cas d’une page ayant de nombreuses modèles développer/réduire dans lesquelles se trouvent&nbsp;:</p>
  <ul>
    <li>des renseignements secondaires, dont l’affichage complet faciliterait la consultation rapide pour trouver un élément précis, qui n’est pas explicitement mentionné dans l’intertitre accompagnant le modèle développer/réduire.
      <ul>
        <li>par exemple&nbsp;: Une page de mises à jour dont les intertitres correspondent aux dates et dont les mises à jour sont contenues dans le modèle développer/réduire.</li>
      </ul>
    </li>
    <li>des réponses potentielles, dont plusieurs peuvent s’appliquer à l’utilisateur. Dans ce cas, afficher toutes les réponses en même temps peut aider l’utilisateur à consulter rapidement les renseignements et à trouver ce dont il a besoin.</li>
  </ul>
</section>

<section>
  <h2 id="eviter">Quoi éviter</h2>
  <p>N'utilisez pas ce modèle si&nbsp;:</p>
  <ul>
    <li>la majorité des gens ont besoin du contenu pour accomplir la tâche principale de la page (sauf si les réponses sont mutuellement exclusives);</li>
    <li>les gens doivent répondre à plusieurs questions pour obtenir la réponse qui s'applique à eux (utilisez plutôt des <a href="../configurations-conception-communes/questions-interactives.html">questions interactives</a>);</li>
    <li>l'une des réponses mutuellement exclusives comporte plusieurs sous-tâches ou plus d'une page de contenu à l'appui (utilisez plutôt des <a href="../configurations-conception-communes/questions-interactives.html">questions interactives</a>).</li>
  </ul>
</section>

<section>
  <h2 id="specifications-conception">Spécifications de conception</h2>
  <h3>Modèle développer/réduire</h3>
  <p>Par défaut, tous les modèles doivent être fermés.</p>
  <p><a href="#code-modele-contenu-reductible">Copiez le code pour obtenir le modèle développer/réduire.</a></p>

  <h3>Boutons développer tout/réduire tout</h3>
  <p>En cliquant sur chaque bouton&nbsp;:</p>
  <ul>
    <li>développer tout devrait ouvrir tous les modèles, exposant le contenu préalablement masqué;</li>
    <li>réduire tout devrait fermer tous les modèles.</li>
  </ul>
  <p><a href="#code-modele-contenu-reductible">Copiez le code pour obtenir les boutons développer tout/réduire tout.</a></p>
</section>

<section>
<h2 id="comment">Comment mettre en oeuvre</h2>

<h3>Remarques sur la mise en œuvre</h3>
<ul>
  <li>Les renseignements contenus dans les modèles développer/réduire sont retenus lors de recherches sur les navigateurs Web.</li>
  <li>Les navigateurs Web modernes prennent en charge la fonction de recherche dans la page, même si le modèle développer/réduire n’est pas ouvert. Ils affichent automatiquement le contenu pour y trouver des résultats.</li>
  <li>Cliquer pour ouvrir un modèle développer/réduire est aussi accessible que cliquer sur un lien pour les utilisateurs.</li>
</ul>

<h3>Mise en œuvre</h3>
<p>Évaluez ce qui convient le mieux pour la création de votre page.</p>
<ul>
  <li><a href="https://wet-boew.github.io/wet-boew/docs/ref/details-close/details-close-fr.html">Balise détails fermée – Plugiciels – Documentation – Boîte à outils de l’expérience Web</a></li>
  <li><a href="https://systeme-design.alpha.canada.ca/fr/composants/details/">Détails – Système de design GC</a></li>
  <li><a href="https://wet-boew.github.io/GCWeb/common/button/button-fr.html#bghorizontal">Groupes de Bouton (Horizontale) – GCWeb</a></li>
</ul>

<h3>Présenter un choix entre des réponses mutuellement exclusives</h3>
<div class="pattern-demo mrgn-bttm-md">
  <h3>Déterminer si vous êtes dans une situation de garde partagée</h3>
  <p>L'enfant passe-t-il son temps&nbsp;:</p>
  <ul class="list-unstyled">
    <li>
    <details>
      <summary>environ de façon égale avec chaque parent</summary>
      <p>Si l'enfant partage son temps environ de façon égale entre les deux parents, les deux parents sont considérés avoir la <strong>garde partagée</strong> de cet enfant...</p>
    </details>
    </li>
    <li>
    <details>
      <summary>avec vous la plupart du temps</summary>
      <p>Si l'enfant vit avec vous la plupart du temps, vous êtes considéré avoir la <strong>garde principale</strong> pour les besoins de l'Allocation canadienne pour enfants...</p>
    </details>
    </li>
    <li>
    <details>
      <summary>avec l'autre parent la plupart du temps</summary>
      <p>Si l'enfant vit avec l'autre parent la plupart du temps, l'autre parent est considéré avoir la <strong>garde principale</strong> pour les besoins de l'Allocation canadienne pour enfants...</p>
    </details>
    </li>
  </ul>
</div>
<details>
  <summary>Code</summary>
  <pre class="prettyprint lang-html"><code>&lt;h3&gt;Déterminer si vous êtes dans une situation de garde partagée&lt;/h3&gt;
&lt;p&gt;L'enfant passe-t-il son temps&nbsp;:&lt;/p&gt;
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

<h3>Présenter des renseignements secondaires</h3>
<div class="pattern-demo mrgn-bttm-md">
  <h3>Estimer vos paiements</h3>
  <p>Utilisez l'estimateur pour planifier votre budget.</p>
  <p>Par exemple, vous pouvez utiliser le montant que vous pourriez recevoir si&nbsp;:</p>
  <ul>
    <li>vous avez un nouvel enfant</li>
    <li>votre revenu change</li>
    <li>vous débutez ou terminez une situation de garde partagée</li>
  </ul>
  <details>
    <summary>Voir le calcul mathématique sur lequel sont basés les paiements de l'Allocation canadienne pour enfants</summary>
    <h3>Comment sont calculés les paiements</h3>
    <p>Chaque mois, les paiements de l'Allocation canadienne pour enfants est ajusté en fonction&nbsp;:</p>
    <ul>
      <li>du nombre d'enfants dont vous avez la charge</li>
      <li>de l'âge de vos enfants</li>
      <li>de votre situation matrimoniale</li>
      <li>de votre revenu familial net de l'année précédente</li>
    </ul>
    <p>...</p>
  </details>
</div>
<details>
  <summary>Code</summary>
  <pre class="prettyprint lang-html"><code>&lt;h3&gt;Estimer vos paiements&lt;/h3&gt;
&lt;p&gt;Utilisez l'estimateur pour planifier votre budget.&lt;/p&gt;
&lt;p&gt;Par exemple, vous pouvez utiliser le montant que vous pourriez recevoir si&nbsp;:&lt;/p&gt;
&lt;ul&gt;
 &lt;li&gt;vous avez un nouvel enfant&lt;/li&gt;
 &lt;li&gt;votre revenu change&lt;/li&gt;
 &lt;li&gt;vous débutez ou terminez une situation de garde partagée&lt;/li&gt;
&lt;/ul&gt;
&lt;details&gt;
 &lt;summary&gt;Voir le calcul mathématique sur lequel sont basés les paiements de l'Allocation canadienne pour enfants&lt;/summary&gt;
 &lt;h3&gt;Comment sont calculés les paiements&lt;/h3&gt;
 &lt;p&gt;Chaque mois, les paiements de l'Allocation canadienne pour enfants est ajusté en fonction&nbsp;:&lt;/p&gt;
 &lt;ul&gt;
&lt;li&gt;du nombre d'enfants dont vous avez la charge&lt;/li&gt;
&lt;li&gt;de l'âge de vos enfants&lt;/li&gt;
&lt;li&gt;de votre situation matrimoniale&lt;/li&gt;
&lt;li&gt;de votre revenu familial net de l'année précédente&lt;/li&gt;
 &lt;/ul&gt;
 &lt;p&gt;...&lt;/p&gt;
&lt;/details&gt;</code></pre>
</details>

<h3>Grâce aux boutons développer tout/réduire tout</h3>
<div class="pattern-demo mrgn-bttm-md">
  <h4>[Renseignements par catégorie]</h4>
  <div class="btn-group mrgn-bttm-sm mrgn-tp-md">
    <button type="button" class="btn btn-default wb-toggle" data-toggle="{&quot;selector&quot;: &quot;details&quot;, &quot;parent&quot;: &quot;#expand-collapse&quot;, &quot;type&quot;: &quot;on&quot;}">Développer tout</button>
    <button type="button" class="btn btn-default wb-toggle" data-toggle="{&quot;selector&quot;: &quot;details&quot;, &quot;parent&quot;: &quot;#expand-collapse&quot;, &quot;type&quot;: &quot;off&quot;}">Réduire tout</button>
  </div>
  <div id="expand-collapse">
    <details>
      <summary>Sujet 1 qui s’applique à plusieurs</summary>
      <ul>
        <li>[Lien vers la tâche 1]</li>
        <li>[Lien vers la tâche 2]</li>
        <li>[Lien vers la tâche 3]</li>
        <li>[...]</li>
      </ul>
    </details>
    <details>
      <summary>Sujet 2 qui s'applique à plusieurs</summary>
      <ul>
        <li>[Lien vers la tâche 1]</li>
        <li>[Lien vers la tâche 2]</li>
        <li>[Lien vers la tâche 3]</li>
        <li>[...]</li>
      </ul>
    </details>
    <details>
      <summary>Sujet 3 qui s'applique à plusieurs</summary>
      <ul>
        <li>[Lien vers la tâche 1]</li>
        <li>[Lien vers la tâche 2]</li>
        <li>[Lien vers la tâche 3]</li>
        <li>[...]</li>
      </ul>
    </details>
    <details>
      <summary>[...]</summary>
      <p>[...]</p>
    </details>
  </div>
</div>
<details>
  <summary id="code-modele-contenu-reductible">Code</summary>
  <pre class="prettyprint lang-html"><code>&lt;h4&gt;[Information par catégorie ]&lt;/h4&gt;
&lt;div class="btn-group mrgn-bttm-sm mrgn-tp-md"&gt;
  &lt;button type="button" class="btn btn-default wb-toggle" data-toggle="{&amp;quot;selector&amp;quot;: &amp;quot;details&amp;quot;, &amp;quot;parent&amp;quot;: &amp;quot;#expand-collapse&amp;quot;, &amp;quot;type&amp;quot;: &amp;quot;on&amp;quot;}"&gt;/Développer tout&lt;/button&gt;
  &lt;button type="button" class="btn btn-default wb-toggle" data-toggle="{&amp;quot;selector&amp;quot;: &amp;quot;details&amp;quot;, &amp;quot;parent&amp;quot;: &amp;quot;#expand-collapse&amp;quot;, &amp;quot;type&amp;quot;: &amp;quot;off&amp;quot;}"&gt;/Réduire tout&lt;/button&gt;
&lt;/div&gt;
&lt;div id="expand-collapse"&gt;
  &lt;details&gt;
    &lt;summary&gt;Sujet 1 qui s’applique à plusieurs&lt;/summary&gt;
    &lt;ul&gt;
      &lt;li&gt;[Lien vers la tâche 1]&lt;/li&gt;
      &lt;li&gt;[Lien vers la tâche 2]&lt;/li&gt;
      &lt;li&gt;[Lien vers la tâche 3 ]&lt;/li&gt;
      &lt;li&gt;...&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/details&gt;
  &lt;details&gt;
    &lt;summary&gt;Sujet 2 qui s’applique à plusieurs&lt;/summary&gt;
    &lt;ul&gt;
      &lt;li&gt;[Lien vers la tâche 1]&lt;/li&gt;
      &lt;li&gt;[Lien vers la tâche 2]&lt;/li&gt;
      &lt;li&gt;[Lien vers la tâche 3 ]&lt;/li&gt;
      &lt;li&gt;...&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/details&gt;
  &lt;details&gt;
    &lt;summary&gt;Sujet 3 qui s’applique à plusieurs&lt;/summary&gt;
    &lt;ul&gt;
      &lt;li&gt;[Lien vers la tâche 1]&lt;/li&gt;
      &lt;li&gt;[Lien vers la tâche 2]&lt;/li&gt;
      &lt;li&gt;[Lien vers la tâche 3]&lt;/li&gt;
      &lt;li&gt;...&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/details&gt;
  &lt;details&gt;
    &lt;summary&gt;...&lt;/summary&gt;
  &lt;/details&gt;
&lt;/div&gt;</code></pre>
  </details>
</section>

<section>
  <h2 id="recherche">Recherche et justification</h2>
  <p>Nous avons testé avec succès l'utilisation du modèle développer/réduire pour encourager les gens à choisir entre des options mutuellement exclusives lors de deux projets d'optimisation réalisés avec l'Agence de revenu du Canada.</p>
  <ul>
    <li><a href="https://blogue.canada.ca/2020/09/18/afficher-masquer.html">Utiliser le modèle afficher/masquer (développer/réduire) pour faire des choix</a> (blogue)</li>
    <li><a href="{{ site.url }}/resumes-recherche/arc-contactez-nous-resume-recherche.html">Résumé de recherche&nbsp;: Communiquer avec l’ARC</a></li>
  </ul>
</section>

<section>
  <h2 id="changements">Derniers changements</h2>
  <dl class="dl-horizontal">
    <dt><time>2025-11-25</time></dt>
    <dd>Ajout de renseignements sur les contextes justifiant d’employer les boutons développer tout/réduire tout. Ajout de remarques sur la mise en œuvre.</dd>
    <dt><time>2019-11-28</time></dt>
    <dd>Les directives ont été modifiées pour permettre d'afficher/masquer du contenu pour des réponses qui sont mutuellement exclusives.</dd>
  </dl>
</section>
