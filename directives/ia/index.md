---
altLangPage: https://design.canada.ca/guidance/ai/index.html
breadcrumbs:
  - link: "https://www.canada.ca/fr/gouvernement/a-propos-de-canada-ca.html"
    title: "À propos de Canada.ca"
  - link: "https://conception.canada.ca"
    title: "Conception"
  - link: "https://conception.canada.ca/directives/index.html"
    title: "Directives"
date: 2026-02-12
dateModified: 2026-02-12
description: Lignes directrices centrales et recherche en matière d’IA, lignes directrices sur la conception et le contenu, protection des renseignements personnels et sécurité, conception itérative, liste de vérification
information:
  - title: Lignes directrices centrales et recherche en matière d’IA
    link: /directives/ia/lignes-directrices-centrales-recherche.html
    description: Vision des applications d’aide utilisant l’IA, Guide sur l’utilisation de l’IA générative, principales personnes-ressources
  - title: Lignes directrices sur la conception
    link: /directives/ia/lignes-directrices-conception.html
    description: Nommer votre application alimentée par l’IA, spécifications de conception
  - title: Lignes directrices sur le contenu pour les applications d'aide à l'IA
    link: /directives/ia/lignes-directrices-contenu.html
    description: Avis, transparence et responsabilité, liens de citation, accessibilité, langue, longueur des réponses
  - title: Protection et sécurité
    link: /directives/ia/protection-securite.html
    description: Assurer la sécurité, le respect et la sûreté des intrants, techniques de rédaction, menaces, conservation et suppression, débridage, conformité avec la cybersécurité organisationnelle
  - title: Conception itérative
    link: /directives/ia/conception-iterative.html
    description: Étapes de la conception, essais par les utilisateurs, étapes de lancement, boucle de rétroaction, mécanismes de rétroaction
  - title: Liste de contrôle de référence pour les applications d'aide à l'IA
    link: /directives/ia/liste-controle-reference.html
    description: Document de référence rapide pour tous les éléments à prendre en compte lors de la création d’une application d’aide utilisant l’IA
title: Lignes directrices pour la conception d’applications d’aide utilisant l’IA sur Canada.ca
---

L’IA offre des possibilités prometteuses pour améliorer la prestation des services publics sur Canada.ca. Les utilisateurs veulent de l’uniformité et de la transparence dans leurs interactions, et ce guide vise à créer une voix unique pour les applications d’aide alimentées par l’IA du gouvernement du Canada. L’objectif est d’aider les équipes gouvernementales à développer des solutions d’IA générative efficaces et conformes aux attentes des utilisateurs en matière d’uniformité, de transparence et de fiabilité.

Des milliers de personnes visitent Canada.ca chaque jour, mais les commentaires indiquent que certains ont du mal à trouver les renseignements dont ils ont besoin ou ont des questions précises sur l’interprétation du contenu. Les applications d’aide utilisant l’IA de Canada.ca visent à appuyer les utilisateurs qui ont des questions sur ces services.

Dans la plupart des cas, les équipes devraient être en mesure de répondre aux besoins des utilisateurs grâce à Réponses IA. Ce service aide les gens à obtenir des réponses à partir de renseignements déjà publiés sur Canada.ca et d’autres sites Web du gouvernement du Canada. Il devrait être lancé au cours de l’exercice financier 2026 à 2027. Cependant, dans certains cas, des sujets précis peuvent encore nécessiter l’utilisation d’une autre application d’aide utilisant l’IA. Utilisez ces lignes directrices au moment de créer des applications d’aide utilisant l’IA orientées vers le public. Elles évolueront au fur et à mesure que nous testerons et affinerons les applications avec les différents ministères. Veillez également à suivre les lignes directrices centrales, notamment les Directives sur les normes au numérique et le Guide sur l’utilisation de l’IA générative.

<section class="gc-srvinfo">
  <h2 class="wb-inv">Services et renseignements</h2>
  <div class="row wb-eqht-grd">
    {%- for info in page.information -%}
    <div class="col-lg-4 col-md-6">
      <h3><a href="{{ site.url }}{{ info.link }}">{{ info.title }}</a></h3>
      <p>{{ info.description }}</p>
    </div>
    {%- endfor -%}
  </div>
</section>
