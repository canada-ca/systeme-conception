---
altLangPage: https://design.canada.ca/guidance
breadcrumbs:
  - link: "https://conception.canada.ca/a-propos/"
    title: "À propos de Canada.ca"
  - link: "https://conception.canada.ca"
    title: "Conception"
date: 2025-08-29
dateModified: 2025-08-29
description: Utilisez ces directives pour créer et gérer le contenu Web du gouvernement du Canada
information:
  - title: Programmes ou services fermés
    link: /directives/programmes-fermes.html
    description: Mettez à jour le contenu lorsqu’un programme ou un service prend fin
  - title: Campagnes de publicité ou de marketing
    link: /directives/campagnes.html
    description: Déterminez la meilleure approche pour gérer le contenu publicitaire ou marketing
  - title: Alertes pour les situations urgentes et évolutives
    link: /crise/alertes.html
    description: Communiquez au sujet d’interruptions de service ou de situations urgentes et évolutives
  - title: Guide de rédaction du contenu du site Canada.ca
    link: /guide-redaction/
    description: Principes et techniques de rédaction pour rendre le contenu clair, facile à trouver et simple à comprendre
  - title: Concevoir du contenu pour Canada.ca
    link: /specifications/concevoir-contenu.html
    description: Utilisez des données probantes pour concevoir des expériences axées sur les personnes et les tâches
  - title: Amélioration continue du contenu Web
    link: /amelioration-continue.html
    description: Cernez les domaines à améliorer, menez des recherches, élaborez des prototypes, concevez le contenu et mesurez les résultats
  - title: Architecture de l’information (AI) et trouvabilité
    link: /specifications/information-trouvabilite.html
    description: Organisez le contenu, intégrez des données structurées et rédigez des métadonnées efficaces
  - title: Aide‑mémoire pour la conception du contenu des communications de crise
    link: /crise/contenu.html
    description: Utilisez un style adapté pour mobile, évitez les doublons, ajoutez des dates, formulez les informations sous forme d’instructions, utilisez des listes à puces et rédigez des phrases courtes
  - title: Modèles et configurations de conception
    link: /bibliotheque-modeles.html
    description: Modèles testés par les utilisateurs, exemples de mise en page, configurations de conception, lignes directrices et échantillons de code
title: Directives relatives à la conception pour Canada.ca
---

Utilisez ces directives pour créer et gérer du contenu Web.

<section class="gc-srvinfo">
  <h2 class="wb-inv">Services and information</h2>
  <div class="row wb-eqht-grd">
    {%- for info in page.information -%}
    <div class="col-lg-4 col-md-6">
      <h3><a href="{{ info.link }}">{{ info.title }}</a></h3>
      <p>{{ info.description }}</p>
    </div>
    {%- endfor -%}
  </div>
</section>
