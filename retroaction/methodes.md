---
altLangPage: https://design.canada.ca/feedback/analyze-feedback.html
breadcrumbs:
  - title: À propos de Canada.ca
    link: https://www.canada.ca/fr/gouvernement/a-propos.html
  - title: Analyses, sondage et commentaires
    link: https://www.canada.ca/fr/analytique.html
  - title: Outil de rétroaction
    link: https://conception.canada.ca/retroaction/index.html
dateModified: 2023-02-28
layout: default
title: Méthodes d’analyse de la rétroaction
---
<div class="gc-stp-stp">
<div class="row">
<ul class="toc lst-spcd col-md-12">
<li class="col-md-4 col-sm-6"><a class="list-group-item" href="acces.html">Accéder à la rétroaction</a></li>
<li class="col-md-4 col-sm-6"><a class="list-group-item active" href="methodes.html">Analyser la rétroaction</a></li>
<li class="col-md-4 col-sm-6"><a class="list-group-item" href="communiquer.html">Partager des idées</a></li>
<li class="col-md-4 col-sm-6"><a class="list-group-item" href="decider.html">Décider de ce qu’il faut améliorer</a></li>
</ul>
</div>
</div>
			    
## Sur cette page

*   [Qui devrait lire et analyser la rétroaction?](#qui-devrait-lire-et-analyser-la-rétroaction)
*   [Niveau de rétroaction requis](#niveau-de-rétroaction-requis)
*   [Les questions de recherche façonnent l’analyse](#questions)
*   [Méthodes d’analyse manuelle](#méthodes)
*   [Outils d’analyse](#outils)
*   [Pilote d’apprentissage automatique](#pilote)
*   [Intégrer d’autres sources de données complémentaires](#intégrer)

## Qui devrait lire et analyser la rétroaction?

Cela devrait être fait par des gens qui connaissent très bien le sujet.

Les gens devraient être habiles à repérer les régularités et les thèmes dans les données.

Il est préférable d’avoir quelqu’un qui soit bilingue.

Si plus d’une personne est chargée de lire les commentaires, il est très important d’avoir une compréhension commune des problèmes (et du modèle de classification).

Il est bon de prendre l’habitude d’examiner régulièrement la rétroaction des utilisateurs afin de déterminer tout problème émergent ou persistant qui nuit à la réussite de la tâche.

## Niveau de rétroaction requis

Il n’y a pas de chiffre magique pour le nombre de commentaires dont vous avez besoin.

Avec la rétroaction, vous cherchez suffisamment de commentaires pour décrire suffisamment un problème ou répondre à une question de recherche. Il y a un point de rendement décroissant où le fait de collecter plus de rétroaction ne donne pas plus de perspectives. C’est ce qu’on appelle la « saturation ».

Si la rétroaction montre que quelque chose ne fonctionne pas, vous n’avez pas besoin de centaines de commentaires pour déterminer si vous devrez intervenir.

Lors de la détermination des problèmes, ne vous fiez pas uniquement au volume de commentaires pour hiérarchiser les améliorations. Les commentaires soumis peuvent provenir de personnes confrontées à des obstacles culturels, linguistiques, géographiques, de handicap, technologiques, socio-économiques ou autres.

Vous pouvez chercher à confirmer les idées de rétroaction en utilisant d’autres sources de données comme les analyses Web, le volume d’appels, les tendances des médias sociaux et les résultats du sondage sur la réussite des tâches du GC.

Bien qu’il soit préférable de lire l’ensemble des données de rétroaction, l’échantillonnage d’un plus petit ensemble de commentaires peut aider à déterminer des tendances lorsque vous êtes confronté à un nombre de commentaires supérieur à ce que vous pouvez lire. Si vous continuez à recevoir plus de commentaires que vous ne pouvez en lire, il est préférable de ne plus utiliser l’outil jusqu’à ce que vous ayez terminé vos mises à jour.

<a id="questions"></a>
## Les questions de recherche façonnent l’analyse

Commencez par réfléchir aux questions de recherche et aux personnes avec lesquelles vous allez partager vos résultats. Cette réflexion à l’avance peut aider à clarifier la façon de regrouper la rétroaction lors de l’analyse manuelle.

Questions de recherche courantes :

*   Quelles pages reçoivent le plus de rétroaction?
*   Quels sont les principaux problèmes signalés? Combien?
*   Quels sont les problèmes signalés sur une page spécifique?
*   La rétroaction a-t-elle augmenté ou diminué après une mise à jour de la page?
*   Quels types de problèmes étaient les plus courants (capacité de recherche, compréhension, technique)?

<a id="méthodes"></a>
## Méthodes d’analyse manuelle

Le regroupement des commentaires ayant des problèmes similaires avec des étiquettes est utile pour les petits et les grands ensembles de données. Cela vous aide à accroître votre efficacité pour ce qui est de l’analyse en vous permettant d’analyser des ensembles de données de moindre taille.

Dans le cas d’un petit ensemble de données, un petit nombre d’étiquettes peut suffire pour éclairer la rétroaction. Un ensemble de données volumineux peut nécessiter des étiquettes à deux niveaux pour mettre en lumière des problèmes de contenu spécifiques.

### Pratiques exemplaires pour choisir des étiquettes				
					    

<details>
<summary>Familiarisez-vous avec vos données</summary>
<p>Lisez d’abord un échantillon de données de rétroaction et essayez de repérer des régularités. Notez-les pour avoir une vue d’ensemble des tâches, sujets ou questions dont les gens parlent.</p>
<p>Pas tous les commentaires seront utiles. Parfois ils ne seront pas suffisamment clairs, vous rencontrerez parfois des pourriels, une entrée double, ou des commentaires portant sur un autre sujet complètement.</p>
</details>

<details>
<summary>Envisagez des étiquettes en fonction d’une tâche ou d’un problème</summary>
<p><strong>Les étiquettes basées sur des tâches</strong>  sont recommandées lors de l’analyse de la rétroaction pour un groupe de pages où les tâches concernent plusieurs utilisateurs.</p>
<p>Pour identifier les tâches, demandez-vous pourquoi l’utilisateur est venu sur le site. Qu’essaie-t-il de faire ou à quelle question essayait-il de répondre?  </p>
<p><strong>	Les étiquettes basées sur des problèmes</strong> peuvent être une meilleure stratégie pour recueillir de la rétroaction sur une seule page, un seul sujet, ou une seule tâche.</p>
<p><strong>Pour les grands ensembles de données</strong>, il se peut qu’un deuxième niveau d’étiquettes soit nécessaire pour ajouter de la précision. Vous pouvez faire cela en même temps que vous étiquetez la rétroaction OU lorsque vous êtes prêt à analyser un plus petit ensemble de commentaires.</p>

<h3>Exemple d’étiquettes utilisées pour la rétroaction sur les pages consacrées aux vaccins</h3>

<table class="provisional gc-table table table-striped" id="myTable1">
<caption class="wb-inv">Example feedback tagging model </caption>
<thead>
<tr>
   <th scope="col">Étiquette</th>
   <th scope="col">Tâche ou problème de l’utilisateur</th>
   <th scope="col">Sujets</th>
</tr>
</thead>

<tbody>
   <tr>
     <td data-label="Tag"><span class="text-left">Innocuité des vaccins</span></td>
     <td data-label="User task"><span class="text-left"> Le vaccin est-il sûr pour moi?</span></td>
     <td data-label="Topics included"><span class="text-left"> Conditions préexistantes, ingrédients/allergies, effets secondaires</span></td>
   </tr>

   <tr>
     <td data-label="Tag"><span class="text-left">Se faire vacciner</span></td>
     <td data-label="User task"><span class="text-left">Comment puis-je me faire vacciner?</span></td>
     <td data-label="Topics included"><span class="text-left">Admissibilité, quand, où et comment s’inscrire</span></td>
   </tr>

   <tr>
     <td data-label="Tag"><span class="text-left">Preuve de vaccination</span></td>
     <td data-label="User task"><span class="text-left">Comment puis-je obtenir une copie de mon dossier de vaccination?</span></td>
     <td data-label="Topics included"><span class="text-left">Dossiers de vaccination, applications provinciales, preuve de vaccination fédérale</span></td>
   </tr>

 </tbody>
 </table>
</details>

<details>
<summary>Réduire le nombre d’étiquettes</summary>
<p>Commencez par des étiquettes larges et n’incluez que celles pour lesquelles vous avez plusieurs exemples. Votre objectif étant d’identifier les améliorations, il est plus utile d’étiqueter des sujets et des problèmes récurrents que de créer des étiquettes uniques et ponctuelles.</p>
<p>Visez à garder votre ensemble d’étiquettes à moins de 15 pour la page ou l’ensemble de pages. Limiter le nombre d’étiquettes aidera à afficher les tâches qui en ont le plus besoin.</p>
<p>« Autre » est aussi une étiquette! Étiquetez les commentaires uniques ou peu fréquents comme « Autres » jusqu’à ce qu’il y en ait suffisamment pour qu’ils aient leur propre étiquette.</p>
</details>
							
<details>
<summary>Évitez d’utiliser des étiquettes ambiguës ou qui se chevauchent </summary>
<p>Assurez-vous que chaque étiquette se différencie clairement des autres. Votre objectif est de réduire les doutes au sujet de l’étiquette devant être attribuée à un commentaire.</p>
</details>

<details>
<summary>Soyez prêt à ajuster votre choix d’étiquettes</summary>
<p>Passez en revue vos choix initiaux. Are they clear and unambiguous? Sont-ils clairs et sans ambiguïté? Est-ce qu’une seule étiquette couvre la majorité des commentaires? Avez-vous besoin de les diviser en deux étiquettes?</p>
<p>Il n’y a pas de stratégie universelle. </p>
<p>À mesure que vous recueillez des commentaires ou que vous ajoutez l’outil de rétroaction à plus de pages, vous aurez besoin d’ajuster votre choix d’étiquettes.</p>
</details>

<details>
<summary>Documenter et tester votre stratégie d’étiquetage</summary>
<p>Documentez votre choix d’étiquettes avec des exemples. Cela est particulièrement utile si plus d’une personne partage la responsabilité d’examiner la rétroaction.</p>
<p>Demandez à d’autres personnes de revoir vos choix d’étiquettes pour s’assurer qu’elles sont claires pour les autres personnes. Cela est particulièrement important si plus d’une personne aide à analyser la rétroaction. En convenant d’un ensemble
	    commun d’étiquettes au début (et lors de l’ajustement des étiquettes), on évite que la rétroaction soit mal étiquetée d’une personne à une autre.</p>

<h3>Exemple d’étiquettes utilisées pour la rétroaction sur les pages consacrées aux vaccins</h3>

<table class="provisional gc-table table table-striped" id="myTable1">
  <caption class="wb-inv">Example feedback tagging model </caption>
  <thead>
    <tr>
      <th scope="col">Étiquette</th>
      <th scope="col">Tâche ou problème de l’utilisateur</th>
      <th scope="col">Sujets</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Tag"><span class="text-left">Innocuité des vaccins</span></td>
      <td data-label="User task"><span class="text-left"> Le vaccin est-il sûr pour moi?</span></td>
      <td data-label="Topics included"><span class="text-left"> Conditions préexistantes, ingrédients/allergies, effets secondaires</span></td>
    </tr>

    <tr>
      <td data-label="Tag"><span class="text-left">Se faire vacciner</span></td>
      <td data-label="User task"><span class="text-left">Comment puis-je me faire vacciner?</span></td>
      <td data-label="Topics included"><span class="text-left">Admissibilité, quand, où et comment s’inscrire</span></td>
    </tr>

    <tr>
      <td data-label="Tag"><span class="text-left">Preuve de vaccination</span></td>
      <td data-label="User task"><span class="text-left">Comment puis-je obtenir une copie de mon dossier de vaccination?</span></td>
      <td data-label="Topics included"><span class="text-left">Dossiers de vaccination, applications provinciales, preuve de vaccination fédérale</span></td>
    </tr>

  </tbody>
</table>


<a class="btn btn-primary" href="images/feedback-tagging-template.xlsx" role="button"><span class="fa fa-download" aria-hidden="true"></span> Télécharger un modèle de stratégie d’étiquetage (Excel, 61 Ko)</a>
							  
</details>


<h3>Choses à éviter lors de l’étiquetage des commentaires</h3>

<details>
<summary>Mélange les types d’étiquettes</summary>
<p>Si vous voulez ajouter d’autres façons d’analyser votre ensemble de données, il est préférable de créer de nouvelles colonnes dans votre feuille de calcul pour noter différents aspects. </p>
<p>Par exemple, il peut s’agir de l’ajout d’un statut ou de la spécification d’une sous-question particulière.</p>
</details>

<details>
<summary>Essayer d’être trop précis</summary>
<p>Le but de l’étiquetage est de vous aider à trouver des façons d’améliorer votre contenu Web. L’étiquetage doit être suffisant à cette fin. Une approche « assez bonne » de la définition et de l’assignation des étiquettes permettra de le faire.</p>
<p>Si vos pages recueillent plus de commentaires que vous ne pouvez examiner, classer et analyser, ajustez votre stratégie : concentrez-vous sur une tâche, limitez le nombre de pages sur lesquelles l’outil est déployé ou limitez la période de collecte de données.</p>
</details>

<a id="outils"></a>							
## Outils d’analyse

Pour les petits ensembles de données, n’importe quel logiciel de tableur devrait convenir pour regrouper et trier les commentaires (Excel, Google Sheets, etc.).

Pour les plus grands ensembles de données, il est utile d’utiliser un outil doté de fonctionnalités plus avancées de tri, de filtrage et d’étiquetage. Si vous comptez sur les services d’un spécialiste de la science des données, celui-ci préférera peut-être utiliser des outils plus spécialisés.

*   [Télécharger un modèle de stratégie d’étiquetage](images/feedback-tagging-template.xlsx) (Excel, 61 Ko)
*   [Télécharger un modèle pour analyser la rétroaction sur des pages ou la rétroaction sur le sondage sur la réussite des tâches du GC](https://docs.google.com/spreadsheets/d/1pcQgee6lN6P30EIMRb3o6RxcTPBiUFtsZAmbeVNpDW4/edit?usp=sharing) (Google Sheets)

<a id="pilote"></a>
## Pilote d’apprentissage automatique

Pour les institutions qui reçoivent de la rétroaction en grandes quantités, sachez que nous pilotons d’autres méthodes pour accéder à la rétroaction et l’analyser en utilisant des outils de science des données.

Communiquez avec le bureau de la transformation numérique si vous recevez plus de rétroaction que vous ne pouvez gérer par une analyse manuelle.

Adresse courriel : [dto.btn@tbs-sct.gc.ca](mailto:dto.btn@tbs-sct.gc.ca)

<a id="intégrer"></a>
## Intégrer d’autres sources de données complémentaires

Intégrez d’autres sources de données dans vos rapports afin de dresser un tableau plus complet, de confirmer vos idées ou d’ajouter une urgence à partir de sources comme les suivantes :

*   Résultats du sondage sur la réussite des tâches du GC et rétroaction
*   Analytique
*   Volumes des centres d’appels
*   Tendances de recherche
*   Résultats de l’étude sur la convivialité
*   Questions reçues par les médias sociaux


<nav role="navigation" class="mrgn-bttm-lg">
	  <ul class="pager">
	    <li class="next"><a href="communiquer.html" rel="next">Suivant : Partage des idées</a></li>
	  </ul>
</nav>