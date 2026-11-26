---
altLangPage: "https://design.canada.ca/research-summaries/recalls-safety-alerts-research-summary.html"
date: 2020-08-07
dateModified: 2020-08-07
description: "Aider Santé Canada à se préparer à la mise en œuvre de fonctionnalités de recherche dans une nouvelle infrastructure de publication fondée sur Drupal pour le système de gestion des rappels et des avis de sécurité, fonctionnalités qui seront lancées au cours de l’exercice 2020 à 2021. Date : Automne 2019"
language: fr
title: "Optimisation de la recherche de rappels et d’avis de sécurité (deuxième série)"
---
<p class="post-meta">Le 7 août 2020</p>
<p>En octobre 2019, le Bureau de la transformation numérique (BTN) du Conseil du Trésor a cerné une occasion de donner suite à un précédent projet d’optimisation de 2018, à savoir le Système de gestion des rappels et des avis de sécurité (SGRAS) de Santé Canada.</p>
<p>Pour le premier projet, nous avions créé un prototype de recherche à l’aide du moteur de recherche de Canada.ca. Les résultats de ce projet ont permis de valider bon nombre d’hypothèses qui avaient été utilisées pour la conception du prototype. Cependant, la fonctionnalité de recherche était limitée. Par conséquent, le prototype ne pouvait pas être déployé dans l’environnement du SGRAS qui était en place à ce moment-là.</p>
<p>Pour ce deuxième projet, l’équipe a été en mesure d’expérimenter une solution de recherche à code source ouvert. Un expert en recherche s’est également joint à l’équipe de projet. L’objectif était d’aider Santé Canada à se préparer à la mise en œuvre d’une fonctionnalité de recherche dans la nouvelle infrastructure de publication du SGRAS basée sur Drupal, qui serait lancée au cours de l’exercice 2020-2021.</p>
<p>En ce qui a trait au BTN, l’objectif était d’en apprendre davantage sur la façon d’offrir une recherche spécialisée efficace, de façon à pouvoir fournir des conseils et des orientations à d’autres institutions du GC offrant une fonction de recherche semblable à leurs utilisateurs.</p>
<h2>Raisons pour lesquelles ce projet s’est démarqué</h2>
<h3>Banc d’essai pour la recherche</h3>
<p>Nous avons créé un banc d’essai pour la recherche afin de nous aider à expérimenter les fonctionnalités et les options. Pour obtenir les données de l’index du banc d’essai, nous avons combiné les résultats d’une extraction de bases de données (à partir du SGRAS) et des ensembles de données ouvertes pour les rappels de véhicules publiés par Transports Canada sur <a href="https://ouvert.canada.ca/fr">ouvert.canada.ca</a>. Le banc d’essai a permis à l’équipe de projet d’expérimenter une série d’options pour configurer la solution de recherche et l’interface. Ces options comprenaient notamment des fonctionnalités telles que les facettes et les filtres, les mécanismes d’affinage des résultats et de rétroaction, les suggestions automatiques au fur et à mesure de la saisie, la correction des requêtes et la mise en évidence des termes recherchés. L’application de ces caractéristiques à des données réelles s’est avérée des plus utile.</p>
<h3>Essais d’optimisation versus des essais de produits</h3>
<p>Au début du projet, nous avions prévu un seul cycle d’essais. Nous comptions réutiliser les tâches et les données de référence du premier projet et comparer les résultats de chaque tâche afin de réaliser l’étude. Pour assurer la fiabilité des comparaisons, nos études d’optimisation nécessitent au moins 16 exécutions de chaque tâche.</p>
<p>La mise en œuvre d’une solution de recherche complète dans des délais restreints constitue une tâche complexe. Au fil des essais, nous avons dû mettre en œuvre de nouvelles fonctionnalités, mettre à jour l’index et apporter des modifications importantes au produit. Cela a été extrêmement utile pour l’apprentissage et l’expérimentation. C’est précisément ainsi que devrait se dérouler un processus de développement de produit. L’inconvénient, c’est que nous n’avons pas atteint le seuil minimal de 16 exécutions par tâche. Par conséquent, nous n’avons pas pu utiliser les données issues des essais à des fins de comparaison.</p>
<h2>Définition de la recherche spécialisée</h2>
<p>La recherche spécialisée se distingue de la recherche sur le Web. Elle porte sur l’interrogation d’une base de données structurée précise ou d’un ensemble de contenus connexes pouvant comprendre à la fois des sources de contenu structurées et non structurées.</p>
<p>Contrairement à la recherche sur le Web, tous les éléments du système de recherche devraient relever du contrôle du gestionnaire de produit, ou à tout le moins de sa sphère d’influence. Afin d’aider les institutions à offrir et à conserver une expérience utilisateur efficace, nous voulions définir les différentes composantes de ce système ainsi que les compétences et les activités nécessaires à leur soutien.</p>
<h2>Composantes de la recherche spécialisée</h2>
<p>Une solution de recherche complète combine plusieurs composantes, chacune nécessitant de faire des choix de conception.</p>
<ul>
  <li>Référentiels de contenu
    <ul>
      <li>Sources de contenu structuré à indexer et (ou) de contenu non structuré à explorer et à indexer</li>
      <li>Structure du contenu et des données, ainsi que les modifications et améliorations qui y sont apportées, par exemple l’ajout de résumés pour faciliter le repérage et la compréhension de l’information, ou la création de champs permettant l’utilisation de facettes et de filtres</li>
    </ul>
  </li>
  <li>Traitement du contenu et indexation
    <ul>
      <li>Déterminer ce qui doit être inclus ou exclu de l’index de recherche</li>
      <li>Fonctions pouvant être configurées dans la solution de recherche, telles que la segmentation en unités lexicales (jetonisation), la lemmatisation, la racinisation (indexation par radicaux) et la gestion des mots vides</li>
    </ul>
  </li>
  <li>Traitement des requêtes et fonctionnalités de recherche
    <ul>
      <li>Limiter les résultats selon une date ou d’autres critères</li>
      <li>Classification, facettes, suggestions automatiques, correction des erreurs («&nbsp;Vouliez-vous dire...?&nbsp;»), etc.</li>
    </ul>
  </li>
  <li>Conception de l’interface de recherche et présentation des résultats
    <ul>
      <li>Extraits, ordre de tri, options d’affinage, stratégies de récupération lorsqu’aucun résultat n’est trouvé, etc.</li>
    </ul>
  </li>
  <li>Analyse de l’utilisation de la recherche et mesure du rendement</li>
</ul>
<h2>Favoriser une recherche efficace</h2>
<p>À la fin du projet, nous avons formulé des recommandations à Santé Canada concernant la mise en œuvre de la nouvelle fonction de recherche du SGRAS.</p>
<p>L’expérience acquise dans le cadre du projet SGRAS nous a permis de mieux comprendre la complexité associée à la mise en place d’une recherche spécialisée efficace. Les principales recommandations, résumées ci-dessous, s’appliquent à toute mise en œuvre d’une solution de recherche spécialisée.</p>
<h3>Comprendre les cas d’utilisation de la recherche</h3>
<p>Pour concevoir une solution de recherche spécialisée efficace, il est important d’examiner les données probantes afin de comprendre comment les utilisateurs effectuent leurs recherches.</p>
<p>Par exemple, des recherches antérieures avaient montré que les comportements de recherche dans le SGRAS suivaient des tendances distinctes&nbsp;: </p>
<ul>
  <li> recherche par produit (marque) ou par catégorie de produits (jouets, automobiles)</li>
  <li> recherche par préoccupation liée à la santé (allergies particulières)</li>
  <li> recherche par problème ou incident (rappels liés à une contamination par Listeria ou E. coli d’origine alimentaire)</li>
</ul>
<p> La compréhension de ces tendances peut éclairer les décisions relatives à la structuration du contenu. Par exemple, les données du SGRAS ne comportaient pas de champ distinct pour les noms de marque ou les codes de produit. Cela a nui à la précision des résultats de recherche.</p>
<h3>Corriger les données à la source, avec la participation des bonnes personnes</h3>
<p>Une difficulté importante du SGRAS tenait au fait que le contenu provenait de plusieurs groupes et institutions. Chaque organisation appliquait ses propres processus, modèles et formats pour publier les rappels et autres avis concernant les produits dont elle assurait la surveillance.</p>
<p>Dans le cadre de ce projet, nous disposions d’un ensemble de données statique. Nous avons donc pu effectuer manuellement des ajouts et des suppressions afin de préparer une source de données unique aux fins de l’indexation. Les changements apportés aux données comprenaient&nbsp;:</p>
<ul>
  <li>la séparation des avis portant sur plusieurs produits en avis distincts</li>
  <li>la révision du format des titres de rappel</li>
  <li>l’amélioration de la taxonomie du SGRAS et l’application des valeurs mises à jour</li>
  <li>l’exclusion des entrées désuètes ou redondantes de l’index</li>
</ul>
<p>Ce «&nbsp;post-traitement&nbsp;» des données avant l’indexation a exigé beaucoup de travail. Les incohérences et les problèmes de qualité des données ont également compliqué les choses.</p>
<p>Idéalement, ces problèmes devraient être corrigés à la source plutôt que corrigés après coup. Pour y parvenir, il faut réunir les personnes qui connaissent le mieux les données ou le contenu.</p>
<h3>Consacrer des ressources à la surveillance du rendement et à la curation des données</h3>
<p>Votre solution de recherche est-elle efficace? Pour répondre à cette question, il faut définir des indicateurs de rendement de la recherche et effectuer des analyses régulières.</p>
<p>Ces indicateurs doivent faire l’objet d’un suivi continu. Ils devraient orienter les améliorations apportées aux différentes composantes de la solution de recherche.</p>
<p>Si votre solution de recherche regroupe des données et du contenu provenant de plusieurs sources, la curation des données est essentielle. L’infrastructure de publication (système de gestion du contenu) devrait assurer la cohérence structurelle et imposer certaines contraintes, par exemple au moyen de vocabulaires contrôlés pour le balisage du contenu. La qualité du contenu doit également faire l’objet d’une surveillance continue. Les résultats de cette surveillance devraient servir à améliorer les structures de données, les lignes directrices et les ressources communes, comme les vocabulaires contrôlés.</p>
<h2>La recherche ne s’arrête jamais</h2>
<p>Pour avoir une solution de recherche efficace, il faut y affecter les ressources nécessaires. Sa conception et son maintien requièrent l’apport de spécialistes possédant des compétences variées. Pensons ici aux experts du domaine, aux architectes de l’information, aux concepteurs de contenu, aux développeurs, aux spécialistes des données et des réseaux, aux analystes de la recherche et aux chercheurs en expérience utilisateur.</p>
<p>Comme le résume notre expert en recherche (nous traduisons librement)&nbsp;:
<blockquote>«&nbsp;La recherche est difficile. Une recherche efficace l’est encore plus.&nbsp;»</blockquote>
</p>
<h2>Demander les résultats de recherche</h2>
<p>Si vous souhaitez obtenir les conclusions de recherche de ce projet, écrivez-nous à l’adresse suivante : <a href="mailto:dsd.ceo-bec.dsn@servicecanada.gc.ca">dsd.ceo-bec.dsn@servicecanada.gc.ca</a>.</p>
<h2>Qu’en pensez-vous?</h2>
<p>Envoyez un gazouillis en utilisant le mot-clic #Canadapointca.</p>
<h2>Pour en savoir plus</h2>
<ul>
  <li><a href="{{ '/resumes-recherche/rappels-resume-recherche.html' | absolute_url }}">Résumé de recherche&nbsp;: Rappels et avis de sécurité</a> (Ronde 1)</li>
  <li>Lire des aperçus d’autres <a href="{{ '/partenaires/#projets' | absolute_url }}">projets menés avec nos partenaires</a></li>
</ul>