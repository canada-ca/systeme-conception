---
altLangPage: https://design.canada.ca/styles/typography.html
date: 2019-10-01
dateModified: 2026-01-29
description: La typographie et les polices de caractères pour Canada.ca
title: Typographie - Style de Canada.ca
---
<span class="wb-prettify lang-css"></span>

<span class="label label-danger">Obligatoire</span>

Les directives concernant la typographie sont obligatoires pour toutes les pages.

[Éléments obligatoires du système de conception]({{ '/specifications/elements-obligatoires.html' | absolute_url }})

Les polices doivent être harmonisées dans tout le site Canada.ca, et elles doivent être facilement lisibles sur tous les appareils. Utilisez une combinaison de Lato pour les en-têtes et de Noto Sans pour le corps du texte.

## Ordinateurs de bureau et tablettes

- H1&nbsp;: Lato, 41px, caractère gras
- H2&nbsp;: Lato, 39px, caractère gras
- H3&nbsp;: Lato, 29px, caractère gras
- H4&nbsp;: Lato, 27px, caractère gras
- H5&nbsp;: Lato, 24px, caractère gras
- H6&nbsp;: Lato, 22px, caractère gras
- Corps du texte&nbsp;: Noto sans, 20px, texte régulier

## Petits appareils

- H1&nbsp;: Lato, 37px, caractère gras
- H2&nbsp;: Lato, 35px, caractère gras
- H3&nbsp;: Lato, 26px, caractère gras
- H4&nbsp;: Lato, 22px, caractère gras
- H5&nbsp;: Lato, 20px, caractère gras
- H6&nbsp;: Lato, 18px, caractère gras
- Corps du texte&nbsp;: Noto sans, 18px, texte régulier

## Caractères en langues autochtones et les autres langues

Les polices Lato et Noto Sans prennent en charge une grande variété de langues et de caractères non latins. Cependant, Noto Sans dispose d'une plus grande gamme de familles de polices supplémentaires qui peuvent être ajoutées pour prendre en charge des types de caractères additionnels.

La famille de polices Noto Sans Canadian Aboriginal est incluse par défaut dans la typographie de Canada.ca.

Lorsque vous publiez du contenu comportant des types de caractères non pris en charge, vous pouvez choisir d'ajouter un ensemble de polices Noto Sans pour les caractères dont vous avez besoin, tant pour les en-têtes que pour les paragraphes, selon les besoins.

Par défaut, sans cette modification spécifique, le style de Canada.ca indique au navigateur de l'utilisateur d'utiliser une police disponible qui affichera les caractères correctement.

Par exemple&nbsp;:

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
:lang(iu) :is(h1, h2, h3, h4, h5, h6) {
  font-weight: bold;
}
```

Les développeurs devront mettre à disposition le jeu de langues Noto Sans. Dans cet exemple, il s'agirait de&nbsp;:
- [Noto Sans Simplified Chinese (en anglais seulement)](https://fonts.google.com/noto/specimen/Noto+Sans+SC)

Ressources de mise en &oelig;vre&nbsp;:
- [Noto Sans&nbsp;: familles de polices pour les caractères supplémentaires (en anglais seulement)](https://fonts.google.com/noto/fonts)
- [Liste des codes de langue ISO 639](https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639_des_langues)

## Titre principal de la page

Lorsque l'en-tête H1 est le titre principal d'une page, il est souligné d'une barre rouge conformément à l'image de marque de Canada.ca.

Spécifications de la barre rouge (auparavant connue sous le nom de gc-thickline)&nbsp;:

- alignement&nbsp;: gauche
- couleur&nbsp;: #A62A1
- positionnement&nbsp;: .2em (7.6&nbsp;px) sous l'en-tête H1
- taille&nbsp;: 72&nbsp;px de large 6&nbsp;px d'épaisseur

## Longueur de la ligne

Limitez la longueur des lignes de texte à 65 caractères. Cela garantit qu'aucune ligne ne dépasse une longueur de lecture confortable.

Les mises en page peuvent comporter plus de 65 caractères. Cette restriction de longueur de ligne s'applique uniquement aux lignes de texte.

## Liens

Soulignez les liens en utilisant un style de soulignement qui ignore les descendeurs.

## Derniers changements

<dl class="dl-horizontal">
  <dt><time>2026-01-29</time></dt>
  <dd>Mise à jour pour refléter l'ajout de la famille de polices Noto Sans Canadian Aboriginal à la typographie de Canada.ca</dd>
  <dt><time>2025-11-21</time></dt>
  <dd>Mise à jour pour ajouter les instructions sur la manière de personnaliser la typographie afin qu’elle prenne en charge d’autres langues.</dd>
  <dt><time>2025-05-15</time></dt>
  <dd>Mise à jour des caractéristiques typographiques en parallèle avec les activités d'alignement pour GCWeb et le Système de design GC.</dd>
</dl>
