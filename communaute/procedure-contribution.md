---
altLangPage: https://design.canada.ca/community/contribution-process.html
date: null
dateModified: '2024-12-19'
description: null
title: "Procédure de contribution"
---


<p>
 Le système de conception de Canada.ca doit être constamment amélioré. L'objectif de ce cadre est de favoriser l'amélioration continue des directives par l'expérimentation. Il crée un espace permettant aux ministères d'expérimenter et d'innover, et d'apporter leurs conclusions au profit de l'ensemble de la communauté Web du GC.
</p>

<p>
 Ce processus inclut maintenant un <strong>système de contrôle de version pour les modèles expérimentaux</strong> qui permet un développement structuré et collaboratif des nouveaux modèles avant leur approbation officielle.
</p>

<h2 class="h3">
 Sur cette page
</h2>

<ul>
 <li>
  <a href="#identifier">
   Identifier : soumettre une proposition d'amélioration
  </a>
 </li>
 <li>
  <a href="#experimentaux">
   Modèles expérimentaux : développement avec contrôle de version
  </a>
 </li>
 <li>
  <a href="#concevoir">
   Concevoir : du prototype à la version stable
  </a>
 </li>
 <li>
  <a href="#iterer">
   Itérer : retour à la case départ
  </a>
 </li>
</ul>

<h2 id="identifier">
 Identifier : soumettre une proposition d'amélioration
</h2>

<p>
 Lors de la conception de contenu pour les Canadiens ou lors de l'essai de votre conception actuelle, vous pouvez déterminer que :
</p>

<ul>
 <li>
  un élément, un modèle ou un gabarit existant doit être amélioré
 </li>
 <li>
  un nouveau composant, modèle ou gabarit est nécessaire pour combler une lacune dans le système de conception
 </li>
</ul>

<h3>
 Consultez la liste d'améliorations et les expérimentations en cours
</h3>

<p>
 La première étape consiste à déterminer si l'amélioration a déjà été identifiée. Pour ce faire, consultez la liste d'améliorations:
</p>

<ul>
 <li>
  <a href="https://github.com/canada-ca/design-system-systeme-conception/projects/1">
   Liste d'améliorations
  </a>
 </li>
</ul>

<h3>
 Si votre suggestion n'est pas déjà identifiée
</h3>

<p>
 Si le modèle ou le gabarit que vous avez identifié pour amélioration n'est pas déjà dans la liste, vous pouvez soumettre une proposition en ouvrant un
 <a href="https://github.com/canada-ca/design-system-systeme-conception/issues">
  « issue » dans GitHub
 </a>
 .
</p>

<p>
 La proposition doit comprendre au minimum :
</p>

<ul>
 <li>
  une description du problème ou de la lacune identifiée
 </li>
 <li>
  une hypothèse sur la manière de régler la situation
 </li>
</ul>

<p>
 Les suggestions seront examinées au cas par cas par la communauté.
</p>

<h2 id="experimentaux">
 Modèles expérimentaux : développement avec contrôle de version
</h2>

<p>
 Les modèles expérimentaux bénéficient maintenant d'un système de contrôle de version structuré qui facilite la collaboration et le suivi des changements.
</p>

<h3>
 Stratégie de branchement pour les modèles expérimentaux
</h3>

<p>
 Chaque nouveau modèle expérimental ou révision importante est développé dans une branche dédiée suivant la convention :
</p>

<p>
 <code>experimental-[type]-[nom-descriptif]-v[version]</code>
</p>

<p>
 Les types incluent : <strong>composant</strong>, <strong>modele</strong>, <strong>gabarit</strong>, ou <strong>configuration</strong>.
</p>

<h3>
 Processus de développement expérimental
</h3>

<ol>
 <li>
  <strong>Créer une branche expérimentale</strong> à partir de <code>master</code>
 </li>
 <li>
  <strong>Développer dans le répertoire</strong> <a href="../modeles-experimentaux/">modeles-experimentaux/</a>
 </li>
 <li>
  <strong>Documenter</strong> selon les standards établis
 </li>
 <li>
  <strong>Tester et valider</strong> l'accessibilité et la fonctionnalité
 </li>
 <li>
  <strong>Soumettre une pull request</strong> avec le template approprié
 </li>
 <li>
  <strong>Révision communautaire</strong> et itérations
 </li>
 <li>
  <strong>Archivage des versions</strong> dans <code>modeles-experimentaux/versions/</code>
 </li>
</ol>

<h3>
 Avantages du contrôle de version expérimental
</h3>

<ul>
 <li>
  <strong>Traçabilité complète</strong> : Historique détaillé des changements et décisions
 </li>
 <li>
  <strong>Collaboration facilitée</strong> : Révisions structurées et commentaires organisés
 </li>
 <li>
  <strong>Récupération sûre</strong> : Possibilité de revenir à des versions antérieures
 </li>
 <li>
  <strong>Transition claire</strong> : Processus défini pour passer d'expérimental à approuvé
 </li>
</ul>

<p>
 Consultez le <a href="../modeles-experimentaux/">guide complet des modèles expérimentaux</a> pour plus de détails.
</p>

<h2 id="concevoir">
 Concevoir : du prototype à la version stable
</h2>

<p>
 Une fois qu'une idée a été identifiée, n'importe qui peut s'atteler à la tâche.
</p>

<h3>
 Conception initiale et prototype
</h3>

<p>
 Dès qu'un prototype existe, il peut être déplacé de la colonne "À faire" à la colonne "Conception et prototypes" dans la
 <a href="https://github.com/canada-ca/design-system-systeme-conception/projects/1">
  liste d'améliorations
 </a>
 .
</p>

<p>
 Mettez à jour le « issue » correspondant dans GitHub pour partager le prototype avec la communauté.
</p>

<h3>
 Alpha
</h3>

<p>
 Pour passer du premier prototype à alpha, le prototype doit être accompagné d'une documentation qui comprend au minimum :
</p>

<ul>
 <li>
  une hypothèse sur la manière de résoudre le problème
 </li>
 <li>
  une maquette ou un prototype codé
 </li>
</ul>

<p>
 La phase alpha est utilisée pour tester l'hypothèse, mener des recherches, traiter les considérations d'accessibilité et coder un exemple de travail pour les tests.
</p>

<h3>
 Bêta
</h3>

<p>
 Pour passer d'alpha à bêta, vous avez besoin de ce qui suit :
</p>

<ul>
 <li>
  un exemple codé entièrement fonctionnel
 </li>
 <li>
  toute dérogation CSS/JS nécessaire à la mise en œuvre dans le dernier thème BOEW pour Canada.ca
 </li>
 <li>
  une évaluation de l'accessibilité
 </li>
 <li>
  la justification des choix de conception - il peut s'agir de résultats de la recherche ou d'une justification solide
 </li>
 <li>
  quelques conseils sur le "Quand utiliser" cette composante, ce modèle ou ce gabarit
 </li>
 <li>
  la documentation dans les deux langues officielles
 </li>
</ul>

<p>
 Utilisez la phase bêta pour intensifier l'expérience et résoudre les problèmes que vous rencontrez.
</p>

<p>
 Les mises à jour bêta sont disponibles dans la
 <a href="https://www.canada.ca/fr/gouvernement/a-propos/systeme-conception/bibliotheque-modeles.html">
  bibliothèque de modèles du système de conception
 </a>
 , et les ministères peuvent les utiliser, à condition qu'ils considèrent qu'il s'agit d'une expérimentation et qu'ils soient disposés à rendre compte des résultats.
</p>

<h3>
 Stable
</h3>

<p>
 Pour passer de bêta à stable, les critères suivans doivent être respectés :
</p>

<ul>
 <li>
  le code est intégré au cadre de base (BOEW)
 </li>
 <li>
  le code entièrement valide
 </li>
 <li>
  aucun problème d'accessibilité est laissé en suspens
 </li>
 <li>
  les commentaires de la communauté ont été résolus
 </li>
 <li>
  <strong>pour les modèles expérimentaux</strong> : utilisation du template de pull request pour la <a href="../.github/pull_request_template/experimental-to-approved.md">transition vers approuvé</a>
 </li>
</ul>

<h2 id="iterer">
 Itérer : retour à la case départ
</h2>

<p>
 Une fois qu'un modèle nouveau ou mis à jour est devenu stable, il devient la nouvelle directive de base.
</p>

<p>
 Mais cela ne signifie pas qu'il est maintenant parfait. Si cette amélioration n'a pas résolu tous les problèmes, ou si de nouveaux problèmes surviennent, le composant, le modèle ou le gabarit peut être ajouté de nouveau à la liste d'améliorations et faire l'objet d'un nouveau cycle de conception.
</p>



<div class="row pagedetails">
 <div class="datemod col-xs-12 mrgn-tp-lg">
  <dl id="wb-dtmd">
   <dt>
    Date de modification :
   </dt>
   <dd>
    <time property="dateModified">
     2020-11-23
    </time>
   </dd>
  </dl>
 </div>
</div>

