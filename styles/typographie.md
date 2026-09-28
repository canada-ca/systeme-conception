---
altLangPage: https://design.canada.ca/styles/typography.html
date: 2019-10-01
dateModified: 2026-09-29
description: La typographie et les polices de caractères pour Canada.ca
title: Typographie - Style de Canada.ca
---
<span class="wb-prettify lang-css"></span>

<span class="label label-danger">Obligatoire</span>

Les directives concernant la typographie sont obligatoires pour toutes les pages.

[Éléments obligatoires du système de conception]({{ '/specifications/elements-obligatoires.html' | absolute_url }})

Les polices doivent être harmonisées dans tout le site Canada.ca, et elles doivent être facilement lisibles sur tous les appareils. Utilisez une combinaison de Lato pour les en-têtes et de Noto Sans pour le corps du texte.

## Typographie de base de Canada.ca

### Spécifications par défaut – ordinateurs de bureau et grandes tablettes

- H1&nbsp;: Lato, 41&nbsp;px, caractère gras
- H2&nbsp;: Lato, 39&nbsp;px, caractère gras
- H3&nbsp;: Lato, 29&nbsp;px, caractère gras
- H4&nbsp;: Lato, 27&nbsp;px, caractère gras
- H5&nbsp;: Lato, 24&nbsp;px, caractère gras
- H6&nbsp;: Lato, 22&nbsp;px, caractère gras
- Corps du texte&nbsp;: Noto Sans, 20&nbsp;px, texte régulier

### Spécifications par défaut – petits appareils

- H1&nbsp;: Lato, 37&nbsp;px, caractère gras
- H2&nbsp;: Lato, 35&nbsp;px, caractère gras
- H3&nbsp;: Lato, 26&nbsp;px, caractère gras
- H4&nbsp;: Lato, 22&nbsp;px, caractère gras
- H5&nbsp;: Lato, 20&nbsp;px, caractère gras
- H6&nbsp;: Lato, 18&nbsp;px, caractère gras
- Corps du texte&nbsp;: Noto Sans, 18&nbsp;px, texte régulier

## Échelle typographique selon les configurations

Certaines configurations utilisent des tailles de police qui dépassent la typographie de base des pages de contenu. Ces configurations comportent des cas d’utilisation précis, et leurs tailles sont conçues en fonction de ces besoins, notamment&nbsp;:

### Petits éléments textuels

Noto Sans 16&nbsp;px, régulier, non adaptatif

Exemples de configurations utilisant de petits caractères&nbsp;:

- Tableaux de données
- Légendes, sous-titres ou notes de bas de page
- Éléments d’en-tête ou de pied de page
- Menus

Il s’agit de la plus petite taille recommandée sur Canada.ca pour garantir la lisibilité du texte.

### Échelle typographique des pages de navigation

Les pages de navigation sont conçues pour être compactes. Elles aident les utilisateurs à repérer rapidement les liens menant aux renseignements requis pour accomplir une tâche.

Pour faciliter le repérage et permettre d’intégrer un nombre accru d’éléments dans une page, les pages de navigation utilisent une échelle d’en-têtes plus petite. Par exemple, les titres des sections « Services et renseignements », « Communiquez avec nous » et « Fonctions » utilisent le style H3, plutôt que le style H2, utilisé ailleurs sur Canada.ca.

Lorsque vous créez une page de navigation standard Canada.ca, veuillez suivre les directives relatives à la typographie et aux titres de la configuration de conception utilisée.

Exemples de pages de navigation&nbsp;:

- Pages de sujets, pages d’accueil institutionnelles, thèmes à plusieurs niveaux
- Page d’accueil Canada.ca, page des services du gouvernement du Canada

## Caractères en langues autochtones et les autres langues

Les polices Lato et Noto Sans prennent en charge un vaste éventail de langues et de caractères non latins. Toutefois, Noto Sans dispose d’une gamme plus vaste de familles de polices supplémentaires qui peuvent être ajoutées pour prendre en charge des types de caractères supplémentaires.

La famille de polices Noto Sans Canadian Aboriginal est intégrée par défaut dans la typographie de Canada.ca.

Lorsque vous publiez du contenu comportant des types de caractères non pris en charge, vous pouvez choisir d’ajouter un ensemble de polices Noto Sans pour les caractères dont vous avez besoin, tant pour les en-têtes que pour le contenu, selon les besoins.

Si cette modification précise n’est pas apportée, le style de Canada.ca demandera par défaut au navigateur de l’utilisateur d’utiliser une police disponible qui affichera les caractères correctement.

Exemple&nbsp;:

Balise linguistique appliquée à une section ayant du contenu

```html
<section lang="zh-Hans">
  <h2>标题</h2>
  <p>....</p>
</section>
```

Style CSS pour la balise linguistique

```css
:lang(zh-Hans) {
  font-family: 'Noto Sans SC';
}
:lang(zh-Hans) :is(h1, h2, h3, h4, h5, h6) {
  font-weight: bold;
}
```

Les développeurs doivent mettre à disposition le jeu de langues Noto Sans. Dans le présent exemple, il s’agirait de&nbsp;:
- [Noto Sans Simplified Chinese (en anglais seulement)](https://fonts.google.com/noto/specimen/Noto+Sans+SC)

Ressources de mise en &oelig;uvre&nbsp;:
- [Noto Sans&nbsp;: familles de polices pour les caractères supplémentaires (en anglais seulement)](https://fonts.google.com/noto/fonts)
- [Liste des codes de langue ISO 639](https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639_des_langues)

## Titre de la page principale

Lorsque le style H1 est appliqué au titre principal d’une page, il est souligné d’une barre rouge conformément à l’image de marque de Canada.ca.

Spécifications de la barre rouge (anciennement gc-thickline)&nbsp;:

- Alignement&nbsp;: gauche
- Couleur&nbsp;: #A62A1E
- Position&nbsp;: 0,2&nbsp;em (7,6&nbsp;px) sous le H1
- Dimensions&nbsp;: 72&nbsp;px de largeur et 6&nbsp;px d’épaisseur

## Longueur des lignes

Limitez la longueur des lignes de texte à 65 caractères. Cela garantit qu’aucune ligne ne dépasse une longueur adaptée à la lecture.

Les mises en page peuvent dépasser 65 caractères. La restriction s’applique seulement aux lignes de texte.

## Liens

Soulignez les liens au moyen d’un style de soulignement qui évite les jambages.

## Derniers changements

<dl class="dl-horizontal">
  <dt><time>2026-09-29</time></dt>
  <dd>Document mis à jour afin de préciser les différences entre la typographie de base de Canada.ca et la typographie utilisée pour les pages de navigation et les éléments constitutifs.</dd>
  <dt><time>2026-01-29</time></dt>
  <dd>Mise à jour pour refléter l'ajout de la famille de polices Noto Sans Canadian Aboriginal à la typographie de Canada.ca</dd>
  <dt><time>2025-11-21</time></dt>
  <dd>Mise à jour pour ajouter les instructions sur la manière de personnaliser la typographie afin qu’elle prenne en charge d’autres langues.</dd>
  <dt><time>2025-05-15</time></dt>
  <dd>Mise à jour des caractéristiques typographiques en parallèle avec les activités d'alignement pour GCWeb et le Système de design GC.</dd>
</dl>
