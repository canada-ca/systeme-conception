---
altLangPage: https://design.canada.ca/guidance
breadcrumbs:
  - link: "https://www.canada.ca/fr/gouvernement/a-propos-canada-ca.html"
    title: "À propos de Canada.ca"
  - link: "https://conception.canada.ca"
    title: "Conception"
date: 2025-08-29
dateModified: 2026-01-15
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
  - title: Aide‑mémoire pour la conception du contenu des communications de crise
    link: /crise/contenu.html
    description: Utilisez un style adapté pour mobile, évitez les doublons, ajoutez des dates, formulez les informations sous forme d’instructions, utilisez des listes à puces et rédigez des phrases courtes
  - title: Directives pour la conception des applications d’aide à l’IA
    link: /directives/ia/index.html
    description: Lignes directrices centrales et directives de recherche, de conception et de contenu sur l’IA, confidentialité et sécurité, conception itérative, liste de vérification comme références

title: Directives relatives à la conception pour Canada.ca
---

Utilisez ces directives pour créer et gérer du contenu Web.

<section class="gc-srvinfo">
  <h2 class="wb-inv">Services and information</h2>
  <div class="row wb-eqht-grd">
    {%- for info in page.information -%}
    <div class="col-lg-4 col-md-6">
      <h3><a href="{{ info.link | absolute_url }}">{{ info.title }}</a></h3>
      <p>{{ info.description }}</p>
    </div>
    {%- endfor -%}
  </div>
</section>
