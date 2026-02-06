---
altLangPage: "https://design.canada.ca/common-design-patterns/breadcrumb-trail.html"
date: 2017-10-05
dateModified: 2026-02-06
description: "Directives concernant la mise en œuvre des fils d’Ariane pour les sites web du gouvernement du Canada."
title: "Fil d'Ariane"
---
<span class="small">Dernière mise à jour&nbsp;:  {{ page.dateModified }}</span>

<span class="label label-danger">Obligatoire sur les pages standards et de campagne</span>

Le fil d’Ariane est une suite horizontale de liens indiquant aux utilisateurs leur position dans la structure du site de Canada.ca. Il représente l’emplacement d’une page par rapport à son parent et permet de naviguer aisément vers les niveaux supérieurs de la structure du site.

<div class="pattern-demo mrgn-tp-lg">
  <figure class="mrgn-bttm-sm"><img src="{{ '/images/01-breadcrumbs-main-fr.png' | absolute_url }}" class="img-responsive" alt=""></figure>
</div>

## Sur cette page
- [Quand l’utiliser](#quand-lutilser)
- [Quoi éviter](#quoi-eviter)
- [Contenu et conception](#contenu-et-conception)
- [Comment procéder à la mise en œuvre](#comment-proceder-a-la-mise-en-oeuvre)
- [Recherche et justification](#recherche-et-justification)
- [Derniers changements](#derniers-changements)

## Quand l’utiliser

Le fil d’Ariane est un élément de l’en-tête général. Il est obligatoire sur toutes les pages, à l’exception des pages transactionnelles, des pages d'erreur, et des pages dont le contenu est rédigé en français et en anglais.

## Quoi éviter

Ne programmez pas le fil d’Ariane pour qu’il soit généré dynamiquement en fonction de la manière dont le visiteur arrive sur une page. Il doit représenter l’emplacement d’une page par rapport au modèle de navigation du site.

Évitez les longues étiquettes de liens. Utilisez une version abrégée du titre de la page, au besoin.

N’affichez pas la page actuelle à la fin du fil d’Ariane (avec ou sans lien). Cela augmente inutilement la longueur du fil d’Ariane, surtout sur les appareils mobiles. L’en-tête de la page est suffisant pour indiquer aux internautes où ils se trouvent.

## Contenu et conception

Trouver des spécifications de contenu et de conception et des exemples visuels.

### Spécifications du contenu

Utilisez &laquo;&nbsp;Canada.ca&nbsp;&raquo; comme texte du premier lien du fil d’Ariane sur les pages **standards** et les pages de **campagne**.

- Créez un lien vers la page d’accueil du site Canada.ca dans la langue de la page actuelle.

Vous pouvez utiliser &laquo;&nbsp;Accueil&nbsp;&raquo; ou le nom du processus ou de l’application comme texte du premier lien du fil d’Ariane sur les pages transactionnelles qui utilisent un fil d’Ariane.

- Présentez un lien vers la page de départ du processus ou la page de renvoi de la demande.

Utilisez un GLYPHICON de chevron droit simple pour séparer chaque lien du fil d’Ariane.

Incluez les liens de la page parent dans l’ordre de leur niveau correspondant à partir de la page actuelle.

Incluez le titre de chaque page dans l’étiquette du fil d’Ariane, mais abrégez l’étiquette dans la mesure du possible pour améliorer la lisibilité et réduire l’espace occupé.

Par exemple, les étiquettes de ce fil d’Ariane&nbsp;:

<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> Immigration et citoyenneté <span class="glyphicon glyphicon-chevron-right small"></span> Citoyenneté canadienne <span class="glyphicon glyphicon-chevron-right small"></span> Présenter une demande de citoyenneté canadienne <span class="glyphicon glyphicon-chevron-right small"></span> Se préparer à l’examen pour la citoyenneté et à l’entrevue</p>
</div>

Peuvent être abrégés comme suit&nbsp;:

<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> Immigration et citoyenneté <span class="glyphicon glyphicon-chevron-right small"></span> Citoyenneté canadienne <span class="glyphicon glyphicon-chevron-right small"></span> Présenter une demande <span class="glyphicon glyphicon-chevron-right small"></span> Se préparer pour l’examen et l’entrevue</p>
</div>

#### Accessibilité

Incluez le texte d’aide invisible &laquo;&nbsp;Vous êtes ici&nbsp;:&nbsp;&raquo;.

#### Interactions

Lorsqu’il est sélectionné, chaque lien du fil d’Ariane doit amener l’utilisateur à une page unique.

#### Spécifications de conception

Alignez le fil d’Ariane à gauche, directement sous le bouton de menu ou la ligne de séparation s’il n’y a pas de bouton de menu.

- Spécification de la police de caractères : Noto Sans, 16px
- Utilisez des couleurs normalisées pour les liens du fil d’Ariane
  - [Reportez-vous aux directives concernant les couleurs]({{ '/styles/coleurs.html' | absolute_url }}) pour obtenir les codes de couleur exacts.
- Espaces&nbsp;:
  - Marges intérieures (<i lang="en">padding</i>) verticales&nbsp;: 13&nbsp;px
  - Marges intérieures (<i lang="en">padding</i>) horizontales&nbsp;: 2&nbsp;px
  - Marge du haut&nbsp;: 15&nbsp;px
  - Hauteur des lignes&nbsp;: 23&nbsp;px
- Icône&nbsp;: glyphicon-chevron-right

#### Accessibilité

Programmez le fil d’Ariane en tant que liste ordonnée.

#### Structure du fil d’Ariane

Voici des exemples de fils d’Ariane dans différents endroits sur le site Canada.ca.

##### Pages thématiques, institutionnelles et organisationnelles
<div class="container">
  <p class="breadcrumb">Canada.ca</p>
</div>

##### Pages de sujet de premier niveau
<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> [Thème parent]</p>
</div>

##### Pages de sujet de deuxième niveau
<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> [Thème parent] <span class="glyphicon glyphicon-chevron-right small"></span> [Sujet parent]</p>
</div>

##### Pages de contenu ministériel et lié aux programmes ou aux politiques
<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> [Page de renvoi de l’institution]</p>
</div>

##### Pages de profils de partenariats et d’ententes de collaboration
<div class="container">
  <p class="breadcrumb">Canada.ca</p>
</div>

##### Pages de recherche de base
<div class="container">
  <p class="breadcrumb">Canada.ca</p>
</div>

##### Pages de recherche avancée
<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> [Recherche de base]</p>
</div>

##### Campagnes publicitaires ou promotionnelles

Le fil d’Ariane peut renvoyer à l’arborescence du sujet, à la page de renvoi d’une campagne, à la page de renvoi d’une institution ou simplement à la page d’accueil du site Canada.ca.

##### Nouvelles
<div class="container">
  <p class="breadcrumb">Canada.ca <span class="glyphicon glyphicon-chevron-right small"></span> [Page de renvoi d’une institution]</p>
</div>

##### Application
<div class="container">
  <p class="breadcrumb">Accueil</p>
</div>

##### Pages d’erreur

Dans le cas d’une page d’erreur d'erreur, telle qu'une page d'erreur 404 (page introuvable), n'incluez pas de fil d'Ariane car&nbsp;:
- Les pages d'erreur ne sont généralement pas consultées et ne font pas partie du modèle de navigation du site.
- Ces pages sont des pages système (qui peuvent être considérées comme transactionnelles).
- Les liens d'erreur doivent comporter un autre chemin de retour vers la page d'accueil, tel qu'un lien.

### Exemples visuels
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>En-tête général avec fil d’Ariane – grand écran</b></figcaption>
    <img src="{{ '/images/01-breadcrumbs-main-fr.png' | absolute_url }}" class="img-responsive" alt=" ">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l’image&nbsp;: en-tête général avec fil d’Ariane – grand écran</summary>
      <p class="mrgn-tp-lg">Le fil d’Ariane apparaît sous le bouton de menu sur une ligne horizontale.</p>
    </details>
  </figure>
</div>
<div class="pattern-demo mrgn-tp-lg">
  <figure>
    <figcaption><b>En-tête général avec fil d’Ariane – petit écran</b></figcaption>
    <img src="{{ '/images/01-breadcrumbs-sm-fr.png' | absolute_url }}" class="img-responsive" alt=" ">
    <details class="mrgn-tp-md">
      <summary class="wb-toggle small" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l’image&nbsp;: en-tête général avec fil d’Ariane – petit écran</summary>
      <p class="mrgn-tp-lg">Le fil d’Ariane apparaît sous le bouton de menu.</p>
    </details>
  </figure>
</div>

## Comment procéder à la mise en œuvre

Trouver des exemples fonctionnels de l’implémentation du fil d’Ariane.

### Référence pour la mise en œuvre du thème GCWeb (BOEW)

La référence à l’implémentation comprend la façon de configurer chaque élément de l’en-tête.

- [Fil d’Ariane – Documentation de GCWeb (Boîte à outils de l’expérience Web)](https://wet-boew.github.io/GCWeb/sites/breadcrumbs/breadcrumbs-fr.html)
- [Documentation de l’en-tête GCWeb (Boîte à outils de l’expérience Web)](https://wet-boew.github.io/GCWeb/sites/header/header-docs-fr.html)

### Mises en œuvre

Déterminez ce qui convient le mieux au type de page que vous créez. Consultez les instructions applicables à votre implémentation si vous souhaitez exclure les fils d’Ariane.

<div class="wb-tabs mrgn-tp-lg">
  <div class="tabpanels">
    <details id="003" open="open">
      <summary><strong>AEM-GC</strong></summary>
      <p class="mrgn-tp-lg">Pour Adobe Experience Manager (AEM) du gouvernement du Canada (GC)&nbsp;:</p>
      <ul>
        <li><a href="https://www.gcpedia.gc.ca/gcwiki/images/d/d8/Documentation-AEM-6.5-Unite-3-7-Modifier-le-fil-d%27Ariane-par-d%C3%A9faut.pdf">Changer le fil d’Ariane par défaut (PDF - lien GCpédia – uniquement accessible sur le réseau du gouvernement du Canada)</a></li>
        <li><a href="https://www.gcpedia.gc.ca/wiki/Documentation_d%27AEM_sp%C3%A9cifique_au_GC_6.5">Documentation d’AEM et des services Web gérés (lien GCpédia – uniquement accessible sur le réseau du gouvernement du Canada)</a></li>
      </ul>
    </details>
    <details id="004" open="open">
      <summary><strong>Système de design GC</strong></summary>
      <p class="mrgn-tp-lg">Pour le Système de design du GC&nbsp;:</p>
      <ul>
        <li><a href="https://systeme-design.alpha.canada.ca/fr/composants/chemin-de-navigation/">Documentation de Système de design GC</a></li>
      </ul>
    </details>
    <details id="005">
      <summary><strong>SGDC</strong></summary>
      <p class="mrgn-tp-lg">Pour la Solution de gabarits à déploiement centralisé (SGDC)&nbsp;:</p>
      <ul>
        <li><a href="https://cdts.service.canada.ca/app/cls/WET/gcweb/v4_0_47/cdts/samples/breadcrumbs-fr.html">Fil d’Ariane - Documentation de la SGDC</a></li>
        <li><a href="https://cenw-wscoe.github.io/sgdc-cdts/docs/index-fr.html">Documentation de la SGDC</a></li>
      </ul>
    </details>
    <details id="006">
      <summary><strong>Drupal WxT</strong></summary>
      <p class="mrgn-tp-lg">Pour Drupal WxT&nbsp;:</p>
      <ul>
        <li><a href="https://drupalwxt.github.io/">Documentation de Drupal WxT (en anglais seulement)</a></li>
      </ul>
    </details>
  </div>
</div>

## Recherche et justification

Consulter les conclusions des recherches et la justification stratégique.

### Constatations découlant des recherches

- [Canada.ca est une source fiable](https://blogue.canada.ca/2020/08/10/canadapointca-source-fiable)
Explique la décision d’utiliser &laquo;&nbsp;Canada.ca&nbsp;&raquo; comme étiquette du premier lien du fil d’Ariane.
- [Résumé de recherche – Orientation dans Canada.ca]({{'/resumes-recherche/orientation-dans-canada-ca.html' | absolute_url }})
La recherche montre que les personnes qui naviguent sur le site utilisent les liens du fil d’Ariane près de deux fois plus souvent que le menu des thèmes et des sujets.

### Justification stratégique

Les spécifications relatives aux espaces dans les liens du fils d’Ariane sont conçues de façon à ce que les cibles tactiles respectent les règles AAA pour l’accessibilité des contenus Web.

Le fil d’Ariane fait partie de l’en-tête général et est un élément obligatoire de la <cite>spécification du contenu et de l’architecture de l’information</cite>.

- [Éléments obligatoires du système de conception]({{ '/specifications/elements-obligatoires.html' | absolute_url }})

## Derniers changements

<dl class="dl-horizontal">
  <dt><time>2026-02-06</time></dt>
  <dd>Révision de certaines formulations dans la section Contenu et conception, afin de donner des précisions sur les liens des pages à inclure. Mise à jour de la sous section expliquant la structure du fil d’Ariane pour y inclure un exemple révisé pour les pages de campagne et des exemples pour les pages d’erreur.</dd>
  <dt><time>2023-06-26</time></dt>
  <dd>Mise à jour de l’orientation pour y inclure des conseils sur quoi éviter, les spécifications du contenu et de conception, des exemples visuels, une orientation sur l’implémentation, les conclusions des recherches et la justification stratégique</dd>
</dl>
