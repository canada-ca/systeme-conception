---
altLangPage: "https://design.canada.ca/specifications/usage-canadaca-design/institutions-list.html"
breadcrumbs:
  -  title: "À propos de Canada.ca"
     link: "https://www.canada.ca/fr/gouvernement/a-propos-canada-ca.html"
  -  title: "Conception"
     link: "https://conception.canada.ca/"
  -  title: "Spécifications"
     link: "https://conception.canada.ca/specifications.html"
  -  title: "Utilisation de la conception de Canada.ca"
     link: "https://conception.canada.ca/specifications/utilisation-concept-canadaca.html"
date: 2020-01-16
dateModified: 2026-06-22
description: "Liste d'institutions du gouvernement du Canada assujetties au système de conception de Canada.ca."
title: "Liste d'institutions de Canada.ca"
---
Les institutions assujetties à l'&laquo;&nbsp;Annexe D&nbsp;: Procédure obligatoire relative à l'utilisation des médias sociaux et aux communications sur le Web&nbsp;&raquo; de la Directive sur la gestion des communications doivent mettre en œuvre les exigences des Spécifications du contenu et de l'architecture de l'information pour Canada.ca.

Ces institutions doivent appliquer les exigences en matière de conception de Canada.ca pour tous leurs sites Web ou tous les services numériques accessibles au public, sans égard à la technologie, au nom de domaine (à la fois canada.ca et gc.ca) ou à la plateforme de publication utilisée pour les publier.

<table class="wb-tables table table-striped table-hover small" data-wb-tables="{ &quot;paging&quot; : false }">
  <caption>Liste d'institutions du gouvernement du Canada assujetties au système de conception de Canada.ca.</caption>
  <thead>
    <tr class="active">
      <th scope="col">Titre à afficher</th>
      <th scope="col"><span lang="en">Display name</span></th>
      <th scope="col">Catégorie</th>
      <th scope="col">Acronyme</th>
      <th scope="col"><span lang="en">Acronym</span></th>
      <th scope="col">Modèle de page d'accueil</th>
      <th scope="col">Institution responsable</th>
    </tr>
  </thead>
  <tbody>
    {% assign institutions = site.data.institutions | sort: "display_name_fr" %}
    {% for institution in institutions %}
    {% assign template_url = '' %}
    {% assign parent_match = nil %}

      {% if institution.parent_institution and institution.parent_institution != '' %}
        {% assign parent_match = institutions | where: "acronym_fr", institution.parent_institution | first %}
        {% if parent_match == nil %}
          {% assign parent_match = institutions | where: "acronym_en", institution.parent_institution | first %}
        {% endif %}
      {% endif %}

      {% case institution.landing_page_template %}
        {% when "Page d'accueil institutionnelle" %}
          {% assign template_url = '/modeles-obligatoire/pages-profil-institutionnel.html' %}
        {% when "Profil d’entente de partenariat ou de collaboration" %}
          {% assign template_url = '/modeles-recommandes/profil-partenariat-entente-collaboration.html' %}
        {% endcase %}
      {% if institution.status != "hidden" %}
      <tr>
        <td>{{ institution.display_name_fr }}</td>
        <td>{{ institution.display_name_en }}</td>
        <td>{{ institution.category }}</td>
        <td>
        {% unless institution.acronym_fr == blank %}
          <abbr title="{{ institution.display_name_fr }}">{{ institution.acronym_fr }}</abbr>
        {% else %}
          &nbsp;
        {% endunless %}
        </td>
        <td>
        {% unless institution.acronym_en == blank %}
          <abbr title="{{ institution.display_name_en }}">{{ institution.acronym_en }}</abbr>
        {% else %}
          &nbsp;
        {% endunless %}
        </td>
        <td>
        {% if template_url != '' %}
          <a href="{{ template_url }}">
            {{ institution.landing_page_template }}
          </a>
        {% else %}
          {{ institution.landing_page_template }}
        {% endif %}
        </td>
        <td>
        {% if institution.parent_institution and institution.parent_institution != '' and parent_match != nil %}
          <abbr title="{{ parent_match.display_name_fr }}">{{ institution.parent_institution }}</abbr>
        {% else %}
          {{ institution.parent_institution }}
        {% endif %}
        </td>
      </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>
