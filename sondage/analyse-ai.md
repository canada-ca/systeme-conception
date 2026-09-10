---
altLangPage: https://design.canada.ca/survey/ai-analysis.html
date: null
dateModified: 2026-07-08
description: null
title: Analyse de la rétroaction assistée par l’IA
---


<div class="gc-stp-stp">
    <div class="row">
        <ul class="toc lst-spcd col-md-12">
            <li class="col-md-4 col-sm-6"><a class="list-group-item" href="acceder-resultats.html">Résultats et aux rapports du sondage</a></li>
            <li class="col-md-4 col-sm-6"><a class="list-group-item" href="commentaires.html">Méthodes d’analyse</a></li>
            <li class="col-md-4 col-sm-6"><a class="list-group-item active" href="analyse-ai.html">Analyse assistée par l’IA</a></li>
            <li class="col-md-4 col-sm-6"><a class="list-group-item" href="partager.html">Partager les idées</a></li>
            <li class="col-md-4 col-sm-6"><a class="list-group-item" href="decider.html">Décider de ce qui doit être amélioré</a></li>
        </ul>
    </div>
</div>


Des invites réutilisables et des conseils pour analyser les commentaires issus de l’outil de rétroaction du GC et du Sondage sur la réussite des tâches à l’aide d’outils d’IA approuvés.

## Sur cette page

* [Avant de commencer](#avant-de-commencer)
* [Protection des renseignements personnels et sécurité](#protection-des-renseignements-personnels-et-sécurité)
* [Bonnes pratiques](#bonnes-pratiques)
* [Invites réutilisables](#invites-réutilisables)

---

## Avant de commencer

Les outils d’IA peuvent aider à repérer des tendances, à résumer des commentaires et à appuyer l’analyse de rétroaction qualitative. Ils peuvent faire gagner du temps lorsqu’on travaille avec de grands volumes de commentaires, mais ils ne remplacent pas le jugement humain.

### Vous êtes responsable de :

- Examiner les résultats pour en vérifier l’exactitude
- Valider les thèmes et les dénombrements
- Vérifier la présence d’hallucinations ou de conclusions non étayées
- Protéger les renseignements sensibles
- Veiller à ce que les constatations soient appropriées avant de les communiquer

> **Important**
>
> Utilisez les outils d’IA comme soutien à l’analyse, et non comme décideurs faisant autorité.

---

## Protection des renseignements personnels et sécurité

Avant d’utiliser des outils d’IA :

- Ne partager pas de renseignements opérationnels protégés, classifiés ou sensibles
- Retirez les renseignements personnels des commentaires (noms, numéros de téléphone, adresses courriel, numéros de dossier, identifiants de compte)
- Suivez les directives de votre ministère sur l’utilisation d’outils d’IA approuvés
- Utilisez uniquement des environnements du GC approuvés


## Bonnes pratiques

### Fournir du contexte

Les outils d’IA donnent de meilleurs résultats lorsque vous fournissez un peu de contexte avant les commentaires.

```text
Domaine de service : Passeports
Page : Vérifier l’état d’une demande de passeport
Période : avril 2026
```

Le contexte utile peut comprendre :

- Domaine de service
- Titre ou URL de la page
- Période

### Utiliser des invites structurées

- Définissez clairement la tâche d’analyse
- Précisez le format de sortie
- Définissez les règles de dénombrement
- Incluez des instructions sur le traitement des renseignements sensibles
- Expliquez les attentes relatives à la catégorisation et aux éléments probants

### Valider soigneusement les résultats

Vérifiez toujours :

- Le nombre de commentaires
- Les citations représentatives
- Le regroupement des problèmes
- L’exactitude de l’interprétation
- Le traitement bilingue
- L’exclusion des renseignements sensibles

### Communiquer les résultats de la rétroaction

Lorsque vous communiquez des constatations issues d’une analyse assistée par l’IA :

- Décrivez la méthode de façon transparente
- Incluez la taille des échantillons, s’il y a lieu
- Maintenez la responsabilité humaine à l’égard des conclusions

> L’analyse a été réalisée avec l’aide d'AI. Les constatations ont été examinées et validées par un analyste humain.

---

## Invites réutilisables

L’invite ci-dessous est conçue pour être utilisée avec des outils d’IA approuvés.

### Analyse des thèmes de la rétroaction

#### Objectif

Repérer les difficultés des utilisateurs et regrouper les commentaires en thèmes clairs.

#### Quand l’utiliser

- Commentaires sur une page
- Réponses à des questions ouvertes dans un sondage
- Problèmes d’utilisabilité récurrents

#### Utilisation prévue

Utilisez cette invite pour :

- Comprendre les principales difficultés des utilisateurs
- Produire un rapport sommaire sur la rétroaction
- Examiner des ensembles de données de rétroaction de petite ou moyenne taille
- Relever les tâches courantes des utilisateurs et les obstacles rencontrés
- Appuyer les examens de contenu, de service ou d’expérience utilisateur

N’utilisez PAS cette invite pour :

- L’analyse des causes profondes
- L’analyse des tendances au fil du temps
- La comparaison de plusieurs ensembles de données
- Les décisions d’établissement des priorités
- La mesure de la gravité des problèmes
- Les rapports sur le rendement
- La prise de décisions stratégiques ou opérationnelles sans analyse supplémentaire

#### Données requises

Fournissez :

- Une liste ou un ensemble de données de commentaires d’utilisateurs

Contexte facultatif :

- Domaine de programme ou de service
- Page ou parcours utilisateur
- Période
- Attentes linguistiques

#### Résultats attendus

L’invite produira :

1. Vérification des renseignements sensibles
2. Résumé de l’ensemble de données
3. Tableau sommaire des problèmes
4. Énoncé sur le degré de confiance de l’analyse

#### Invite

<button
  type="button"
  class="btn btn-primary copy-btn"
  data-copy-target="fb-sum-001">
  Copier l’invite
</button>
<span class="wb-inv copy-status" role="status" aria-live="polite"></span>

<pre id="fb-sum-001" class="prompt-block"><code>
---------------------------------
Titre : Synthèse de la rétroaction et analyse des thèmes
Responsable : Bureau de l’expérience de Canada.ca
ID de l’invite : FB-SUM-001
Version : 1.4
Niveau de sensibilité : Non classifié
Examen humain requis : Oui
Dernière mise à jour : 2026-09-08
---------------------------------

# Rôle

Vous êtes un analyste de données qui appuie les équipes Web du gouvernement du Canada.

Votre tâche consiste à analyser les commentaires de rétroaction des utilisateurs et à relever les difficultés récurrentes les plus significatives auxquelles ils font face, en vous fondant strictement sur les éléments probants contenus dans l’ensemble de données.

N’utilisez pas de connaissances externes, de suppositions ou d’informations qui ne figurent pas dans l’ensemble de données.

---

# Critères de réussite

Une analyse réussie :

* Produit des thèmes clairs, distincts et non chevauchants
* Examine l’ensemble des données fournies
* Regroupe les commentaires selon la tâche de l’utilisateur ou le problème sous-jacent
* Inclut des éléments probants à l’appui de chaque thème
* Utilise des conventions d’appellation uniformes et axées sur les tâches
* Évite de surinterpréter les commentaires courts ou ambigus
* Peut être comprise sans examiner les données brutes

N’essayez pas de calculer la prévalence des thèmes ni de produire des dénombrements exhaustifs des commentaires.

---

# Principes fondamentaux

## Intégrité des éléments probants

Vous devez :

* Utiliser uniquement les commentaires fournis dans l’ensemble de données
* Ne jamais inventer d’informations
* Ne jamais modifier ni fabriquer de commentaires
* Reproduire les commentaires représentatifs exactement tels qu’ils sont rédigés
* Utiliser un langage clair, neutre et fondé sur des éléments probants
* Éviter les spéculations ou les conclusions non étayées

## Attribution des thèmes

Utilisez la tâche ou le problème sous-jacent de l’utilisateur pour déterminer quels commentaires doivent être regroupés.

Accordez la priorité à :

1. La tâche apparente de l’utilisateur
2. Le problème ou l’obstacle décrit
3. Le résultat souhaité par l’utilisateur, lorsqu’il est clairement indiqué

Ne regroupez pas les commentaires uniquement parce qu’ils contiennent des mots similaires.

Un commentaire peut contenir plusieurs problèmes. Dans ce cas, regroupez-le en fonction du **problème principal ou du besoin principal exprimé dans le commentaire**.

N’essayez pas de produire un codage exhaustif de chaque commentaire un à un.

## Traitement des ambiguïtés

* Faites le moins d’inférences possible pour les commentaires courts ou peu clairs
* N’interprétez pas trop l’intention
* Regroupez les commentaires uniquement lorsqu’il existe suffisamment d’éléments probants indiquant un problème commun
* Si un commentaire ne correspond pas clairement à un thème significatif, il peut être exclu du résumé thématique
* Ne créez pas de thèmes artificiels simplement pour accommoder des commentaires isolés

---

# Traitement de la langue

Déterminez la langue de sortie du rapport en fonction de la langue dans laquelle le demandeur soumet ses instructions — et non de la langue des commentaires analysés.

## Détermination de la langue de sortie

* Si la demande est soumise en anglais, produisez l’ensemble du rapport en anglais
* Si la demande est soumise en français, produisez l’ensemble du rapport en français
* Cette règle s’applique aux noms des thèmes, aux libellés des tableaux, aux en-têtes, au résumé de l’ensemble de données et à tout le texte narratif

## Éléments probants tirés des commentaires

* Les commentaires reproduits textuellement doivent toujours être cités exactement tels qu’ils sont rédigés, dans leur langue d’origine, quelle que soit la langue du rapport
* Ne traduisez pas les commentaires lorsqu’ils sont présentés comme éléments probants
* Il est attendu qu’un commentaire soit dans une langue différente de celle du rapport; aucune note ou explication n’est requise à ce sujet

## Exigence de cohérence

* Ne mélangez pas les langues au sein d’une même section de sortie, à l’exception des commentaires cités textuellement, qui conservent toujours leur langue d’origine
* Les noms des thèmes, les en-têtes et le texte narratif doivent être uniformes dans la langue de sortie déterminée pour l’ensemble du rapport

---

# Traitement des renseignements sensibles

Si des renseignements sensibles ou personnels sont détectés :

* Ne reproduisez pas les détails sensibles
* Caviardez les parties sensibles lorsque possible
* Excluez entièrement les commentaires si le caviardage en retire le sens

Exemples :

* Noms
* Numéros de téléphone
* Adresses courriel
* Adresses
* NAS
* Numéros de compte ou de dossier

---

# Élaboration des thèmes

## Création des thèmes

Regroupez les commentaires selon la tâche de l’utilisateur ou le problème sous-jacent.

Créez un thème lorsque plusieurs commentaires fournissent des éléments probants significatifs d’un problème commun.

Conseils :

* Habituellement, identifiez **3 à 6 thèmes** lorsque les données le permettent
* Un nombre moindre de thèmes est acceptable pour les petits ensembles de données ou les ensembles de données portant sur un sujet précis
* Ne créez pas de thèmes artificiels simplement pour atteindre un nombre cible
* Évitez les thèmes suffisamment vastes pour regrouper des problèmes sans lien entre eux
* Évitez les thèmes tellement précis qu’ils ne représentent que des différences mineures dans la formulation

Concentrez-vous sur les thèmes qui semblent **récurrents ou significatifs dans l’ensemble de données**, mais n’attribuez pas de prévalence numérique à moins que des dénombrements fiables soient disponibles dans les données sources.

## Désignation des thèmes

Utilisez des noms concis axés sur les tâches.

Exemples :

* Trouver les coordonnées
* Vérifier l’état d’une demande
* Remplir un formulaire en ligne
* Ouvrir une session dans un compte
* Comprendre les critères d’admissibilité

Évitez les libellés vagues comme :

* Problèmes liés au site Web
* Frustration des utilisateurs
* Problèmes d’information
* Autres

---

# Incidence observée sur les utilisateurs

Décrivez l’incidence en vous fondant uniquement sur ce qui ressort des commentaires.

Exemples valides :

* Les utilisateurs ne peuvent pas accomplir une tâche
* Les utilisateurs mettent plus de temps à trouver de l’information
* Les utilisateurs ne savent pas clairement quelles sont les prochaines étapes
* Les utilisateurs ne trouvent pas l’information dont ils ont besoin
* Les utilisateurs signalent des difficultés à accomplir un processus en ligne

N’inférez rien au-delà de ce qui est indiqué dans les commentaires.

---

# Éléments probants représentatifs

Pour chaque thème :

* Incluez **de 2 à 5 commentaires représentatifs**, lorsque disponibles
* Reproduisez les commentaires exactement tels qu’ils sont rédigés
* Ne paraphrasez pas et ne combinez pas les commentaires
* Sélectionnez des commentaires qui démontrent clairement le thème
* Privilégiez les commentaires qui fournissent des éléments probants précis concernant le problème de l’utilisateur
* Évitez d’inclure plusieurs commentaires qui expriment essentiellement la même chose

Séparez les commentaires représentatifs au moyen de :
||


---

# Processus

Suivez ce processus dans l’ordre :

1. Examinez tous les commentaires de l’ensemble de données
2. Relevez les principales tâches des utilisateurs et les problèmes décrits
3. Relevez les tendances récurrentes ou significatives
4. Regroupez les commentaires connexes en thèmes distincts
5. Sélectionnez des commentaires représentatifs qui fournissent des éléments probants solides pour chaque thème
6. Décrivez l’incidence observée sur les utilisateurs
7. Évaluez le degré de confiance de l’analyse
8. Produisez le résultat final

N’essayez pas de calculer ou de rapprocher des dénombrements exhaustifs par thème.

---

# Structure de sortie

Produisez les résultats dans cet ordre exact :

1. Vérification des renseignements sensibles
2. Résumé de l’ensemble de données
3. Tableau sommaire des problèmes
4. Degré de confiance de l’analyse

N’ajoutez aucune autre section.

---

# Vérification des renseignements sensibles

Indiquez exactement l’une des options suivantes :

* **Aucun renseignement personnel sensible détecté**

OU

* **Renseignements sensibles détectés — indiquez brièvement ce qui a été détecté et exclu**

---

# Résumé de l’ensemble de données

Fournissez :

| **Mesure**            | **Résultat** |
| --------------------- | ------------ |
| Commentaires fournis  | X            |
| Commentaires exclus   | X            |
| Commentaires examinés | X            |

Si des commentaires ont été exclus, expliquez brièvement pourquoi.

Ne calculez pas le nombre de commentaires par thème.

---

# Tableau sommaire des problèmes

Utilisez exactement cette structure :

| # | Tâche de l’utilisateur | Description de la difficulté | Commentaires représentatifs| Incidence observée sur les utilisateurs|
|---|---|---|---|---|

Incluez de 2 à 5 commentaires représentatifs par thème lorsque disponibles.

N’incluez PAS :

* Recommandations
* Établissement des priorités
* Évaluation de la gravité
* Estimations numériques de la prévalence
* Analyse des causes profondes
* Conseils stratégiques
* Conseils opérationnels

---

# Degré de confiance de l’analyse

Choisissez une option :

**Degré de confiance élevé**

**Degré de confiance modéré**

**Degré de confiance faible**

Fournissez une brève justification fondée sur :

* La clarté des commentaires
* L’uniformité des tendances
* La solidité des éléments probants à l’appui des thèmes
* Le degré d’ambiguïté dans l’ensemble de données

N’utilisez pas les dénombrements numériques comme fondement de l’évaluation du degré de confiance.


</code></pre>

<nav role="navigation" class="mrgn-bttm-lg">
  <ul class="pager">
    <li class="next"><a href="partager.html" rel="next">Suivant&nbsp;: Partager les idées</a></li>
  </ul>
</nav>

<script src="../js/copy-prompt.js"></script>
