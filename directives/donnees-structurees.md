---
altLangPage: https://design.canada.ca/guidance/structured-data.html
breadcrumbs:
- link: https://www.canada.ca/fr/gouvernement/a-propos.html
  title: "\xC0 propos de Canada.ca"
- link: https://www.canada.ca/fr/gouvernement/a-propos/systeme-conception.html
  title: "Syst\xE8me de conception de Canada.ca"
date: null
dateModified: '2020-03-16'
description: null
title: "Ajout de donn\xE9es structur\xE9es sur les pages de Canada.ca\n"
---


<div>
 <p>
  L'ajout de données structurées à une page web peut aider à fournir de meilleures réponses aux gens.
 </p>
 <section>
  <h2 class="h3">
   Sur cette page
  </h2>
  <ul>
   <li>
    <a href="#quoi">
     Que sont les données structurées
    </a>
   </li>
   <li>
    <a href="#comment">
     Comment ajouter des données structurées
    </a>
   </li>
   <li>
    <a href="#impact">
     Comment mesurer les retombées des données structurées
    </a>
   </li>
   <li>
    <a href="#schemas">
     Code et exemples de schémas
    </a>
   </li>
   <li>
    <a href="#ressources">
     Ressources supplémentaires
    </a>
   </li>
  </ul>
 </section>
 <section>
  <h2 id="quoi">
   Que sont les données structurées
  </h2>
  <p>
   Les données structurées sont un moyen d'étiqueter le contenu de manière à ce qu'il soit lisible par une machine.
  </p>
  <p>
   Elles aident les moteurs de recherche à donner une signification à la page en vous permettant d'ajouter des informations qui clarifient le sens du contenu.
  </p>
  <p>
   Cela devrait aider à créer :
  </p>
  <ul>
   <li>
    des résultats de recherche meilleurs et plus informatifs (souvent dans Google et Bing)
   </li>
   <li>
    de meilleurs résultats de recherche vocale (pour des services comme Alexa et Google Home)
   </li>
  </ul>
  <p>
   Les moteurs de recherche contrôlent la façon dont les résultats de recherche apparaissent et ce qui est présenté dans les extraits en vedette. L'ajout de données structurées peut modifier ou non les résultats de la recherche.
  </p>
  <h3>
   Exemple of d'un extrait enrichi
  </h3>
  <figure>
   <img alt="Une longue description se trouve après l'image." class="img-responsive border" src="../images/extrait-vedette.png" title="Exampel of a rich snippet" width="700">
   </img>
  </figure>
  <details>
   <summary>
    Exemple of d'un extrait enrichi : recherche de « prestations covid »
   </summary>
   <p>
    Quand on cherche « prestations covid » dans le moteur de recherche Google, il est possible qu'on nous présente un extrait enrichi qui montre les différentes sections qui peuvent être affichées et fournir des liens spécifiques. Afficher « Pour les entreprises » révèle 4 liens :
   </p>
   <ul>
    <li>
     Compte d'urgence pour les entreprises canadiennes
    </li>
    <li>
     Subvention salariale d'urgence
    </li>
    <li>
     Répondez à quelques questions pour une liste de soutien personnalisé
    </li>
    <li>
     Voir tout le soutien aux entreprises
    </li>
   </ul>
  </details>
  <p>
   <br/>
   <figure>
    <p>
     Les données structurées doivent être une « représentation fidèle » de la page. Vous ne pouvez pas ajouter de données structurées pour un contenu qui n'est pas abordé dans la page.
    </p>
    <p>
     L'ajout de données structurées n'est qu'une des techniques que vous pouvez utiliser pour optimiser votre contenu pour la recherche. La première étape consiste à améliorer le contenu réel de la page.
    </p>
    <ul>
     <li>
      <a href="https://developers.google.com/search/docs/guides/intro-structured-data">
       Google : Comprendre le fonctionnement des données structurées
      </a>
     </li>
     <li>
      <a href="https://developers.google.com/search/docs/guides/sd-policies">
       Google : Suivre les consignes relatives aux données structurées
      </a>
     </li>
     <li>
      <a href="https://blogue.canada.ca/2020/01/28/optimisation-recherche-vocale.html">
       Optimiser votre contenu pour la recherche vocale
      </a>
     </li>
    </ul>
    <h2 id="comment">
     Comment ajouter des données structurées
    </h2>
    <h3>
     Étape 1 : Choisir un schéma
    </h3>
    <p>
     Un schéma de données structurées est un ensemble de paires de champs et de valeurs que vous pouvez utiliser pour ajouter du sens à votre page.
    </p>
    <p>
     Vous pouvez choisir parmi plusieurs schémas.
    </p>
    <p>
     Consultez la liste des schémas sur Schema.org ou Google, ou regardez les exemples fournis sur cette page.
    </p>
    <ul>
     <li>
      <a href="https://schema.org/docs/full.html">
       Schémas Schema.org
      </a>
      (en anglais seulement)
     </li>
     <li>
      <a href="https://developers.google.com/search/docs/data-types/article">
       Données structurées Google
      </a>
     </li>
     <li>
      <a href="#schemas">
       Code et exemples de schémas pour Canada.ca
      </a>
     </li>
    </ul>
    <h3>
     Étape 2 : Rédiger le code JSON-LD
    </h3>
    <p>
     Bien que les données structurées puissent être codées en RDFa, nous suggérons d'utiliser plutôt le langage JSON-LD. JSON-LD est en train de devenir le langage de données structurées préféré des moteurs de recherche. Il offre également un peu plus de flexibilité, en permettant par exemple d'injecter du HTML dans des extraits riches des résultats de recherche.
    </p>
    <p>
     JSON-LD existe séparément du contenu réel. Si vous mettez à jour le contenu, n'oubliez pas d'ajuster le code JSON-LD en conséquence.
    </p>
    <p>
     Comme certains éléments peuvent déjà être codés en RDFa dans vos modèles, assurez-vous qu'il n'y a pas de collision entre les deux.
    </p>
    <p>
     Utilisez un validateur, tel que
     <a href="https://jsonlint.com/">
      JSONLint
     </a>
     (en anglais), pour vous assurer que votre code JSON-LD est valide.
    </p>
    <h4>
     Ajouter du code JSON-LD dans Adobe Experience Manager (AEM)
    </h4>
    <p>
     Si votre page est publiée dans AEM, vous pouvez ajouter des données structurées dans JSON-LD en utilisant le composant de données structurées dans les propriétés de la page.
    </p>
    <p>
     Suivez les
     <a href="https://www.gcpedia.gc.ca/wiki/AEM_GC-specific_Documentation_6.5">
      instructions dans GCPedia
     </a>
     (uniquement disponible sur le réseau GC).
    </p>
    <h3>
     Étape 3 : Tester le code de données structurées
    </h3>
    <p>
     Vous pouvez copier des extraits de code ou des URL complètes pour tester le code avec
     <a href="https://search.google.com/test/rich-results">
      l'outil de tests de résultats de recherche riches
     </a>
     (en anglais seulement).
    </p>
    <p>
     Il indique les types de résultats riches (pris en charge par Google) qui ont été trouvés sur la page, ainsi que les erreurs ou suggestions concernant vos données structurées.
    </p>
    <p>
     En copiant l'URL ou le code de la page, vous pouvez voir si elle est valide et si les valeurs attribuées aux différents champs sont correctes.
    </p>
    <h3>
     Étape 4 : Valider le code HTML et vérifier l'accessibilité
    </h3>
    <p>
     Avant de publier la page avec des données structurées, assurez-vous que le HTML est valide et que la page est accessible. Vous pouvez utiliser des validateurs en ligne pour vous aider à cet effet :
    </p>
    <ul>
     <li>
      <a href="https://validator.w3.org/">
       HTML Validateur HTML W3C
      </a>
      (en anglais seulement)
     </li>
     <li>
      <a href="https://wave.webaim.org/">
       WAVE Web Accessibility Evaluation Tool
      </a>
      (en anglais seulement)
     </li>
    </ul>
    <h3>
     Étape 5 : Publier la page, réindexer et suivre les résultats
    </h3>
    <p>
     Une fois vos données structurées publiées, Google et Bing devraient réindexer la page dans les jours qui suivent.
    </p>
    <p>
     Vérifiez l'état de votre code dans la console de recherche Google de Canada.ca.
    </p>
    <h2 id="impact">
     Comment mesurer les répercussions des données structurées
    </h2>
    <p>
     Vous pouvez mesurer l'impact des données structurées en consultant la console de recherche Google. Vous pouvez obtenir des statistiques sur les performances de l'extrait riche telles que :
    </p>
    <ul>
     <li>
      la proportion de clics sur une page générée à partir d'un extrait riche
     </li>
     <li>
      les requêtes de recherche qui génèrent des extraits riches
     </li>
     <li>
      si le taux de clics est différent avec un extrait riche
     </li>
    </ul>
    <p>
     L'ajout de codes de suivi (UTM) aux hyperliens dans les données riches peut également vous aider à comprendre quand les gens cliquent sur les liens dans les extraits riches.
    </p>
    <ul>
     <li>
      <a href="https://www.gcpedia.gc.ca/gcwiki/images/2/26/UTM_Code_Guidelines.pdf">
       Directives concernant les codes UTM
      </a>
      (uniquement disponibles sur le réseau GC)
     </li>
    </ul>
    <h2 id="schemas">
     Code et exemples de schémas
    </h2>
    <details>
     <summary>
      <h3 class="h4">
       SpecialAnnouncement
      </h3>
     </summary>
     <h4>
      Quand l'utiliser
     </h4>
     <p>
      Le schéma SpecialAnnouncement est un nouveau schéma expérimental développé pour les annonces liées à la COVID-19. Il est destiné principalement aux informations liées à la santé (symptômes, quarantaine, tests, etc.), mais aussi aux fermetures, aux réouvertures et aux prestations spéciales du gouvernement.
     </p>
     <h4>
      Directives officielles
     </h4>
     <ul>
      <li>
       <a href="https://schema.org/SpecialAnnouncement">
        Directives de Schema.org pour SpecialAnnouncement
       </a>
       (en anglais seulement)
      </li>
      <li>
       <a href="https://developers.google.com/search/docs/data-types/special-announcements">
        Directives de Google pour SpecialAnnouncement
       </a>
      </li>
     </ul>
     <div class="pattern-demo mrgn-bttm-md">
      <div class="mrgn-rght-md mrgn-lft-md">
       <h4>
        Code
       </h4>
       <div class="wb-tabs">
        <div class="tabpanels">
         <details>
          <summary>
           JSON-LD
          </summary>
          <ul>
           <li>
            Ajouter l'attribut
            <code>
             id
            </code>
            à l'élément de script HTML JSON-LD nommé "wb-script".
           </li>
           <li>
            Utilisez la même ancre d'identification de la racine JSON-LD que celle du contenu principal de la page. Les deux utiliseront "#wb-main" pour spécifier sémantiquement qu'ils décrivent le même sujet.
           </li>
          </ul>
          <pre class="prettyprint"><code>&lt;script id="wb-script"
type="application/ld+json"&gt;
 {
  "@context":"http://schema.org",
  "@type":"SpecialAnnouncement",
  "@id": "#wb-main",
  "mainEntityOfPage":{
   "@type":"WebPage",
   "@id":"https://www.canada.ca/fr/sante-publique/services/maladies/maladie-coronavirus-covid-19.html"
   },
  "name":"Maladie à coronavirus (COVID-19) : renseignements du gouvernement du Canada",
  "text":"Informations sur la COVID-19 destinées aux Canadiens, y compris des liens vers des mises à jour sur les maladies, des conseils aux voyageurs, la façon de se préparer, les symptômes, la prévention, les risques, la réponse du Canada, le nombre de cas actuels, des réponses aux questions et des liens vers des ressources imprimables.",
  "spatialCoverage": {
   "@type": "Country",
   "name": "Canada"
   },
  "publisher":{
   "@type":"GovernmentOrganization",
   "@id":"#wb-publisher",
   "name":"Gouvernment du Canada",
   "url":"https://www.canada.ca/fr.html"
   },
  "category":"https://www.wikidata.org/wiki/Q81068910",
  "datePosted":"2020-05-09",
  "diseasePreventionInfo":"https://www.canada.ca/fr/sante-publique/services/maladies/2019-nouveau-coronavirus/prevention-risques.html",
  "diseaseSpreadStatistics":"https://www.canada.ca/fr/sante-publique/services/maladies/2019-nouveau-coronavirus.html",
  "newsUpdatesAndGuidelines":"https://www.canada.ca/fr/sante-publique/services/maladies/maladie-coronavirus-covid-19.html",
  "quarantineGuidelines":"https://www.canada.ca/fr/sante-publique/services/maladies/2019-nouveau-coronavirus/prevention-risques.html",
  "travelBans":"https://www.canada.ca/fr/sante-publique/services/maladies/2019-nouveau-coronavirus/derniers-conseils-sante-voyageurs.html",
  "governmentBenefitsInfo": {
   "@type": "GovernmentService",
   "name": "Plan d'intervention économique du Canada pour répondre à la COVID-19",
   "url":  "https://www.canada.ca/fr/ministere-finances/plan-intervention-economique.html",
   "provider": {
    "@id": "#wb-publisher"
    },
   "serviceType": "Aide d'urgence",
   "audience": {
   "@type": "Audience",
   "name": "Canadiens touchés par la COVID-19"
   }
  }
 }
&lt;/script&gt;
&lt;body vocab="http://schema.org/" typeof="WebPage"&gt;
 &lt;div typeof="Organisation" resource="#wb-publisher"&gt;
  &lt;img src="/link/to/a/logo" alt="Publisher name" property="logo" /&gt;
  &lt;meta property="name" content="Publisher name" /&gt;
 &lt;/div&gt;
 &lt;main property="mainContentOfPage" typeof="WebPageElement" resource="#wb-main"&gt;
 &lt;/main&gt;
&lt;/body&gt;</code></pre>
         </details>
         <details>
          <summary>
           AEM
          </summary>
          <p>
           Ajouter le code dans le composant Données structurées dans les propriétés de la page.
          </p>
          <pre class="prettyprint"><code>{
  "@context":"http://schema.org",
  "@type":"SpecialAnnouncement",
  "@id": "#wb-main",
  "mainEntityOfPage":{
   "@type":"WebPage",
	 "@id":"https://www.canada.ca/fr/sante-publique/services/maladies/maladie-coronavirus-covid-19.html"
   },
  "name":"Maladie à coronavirus (COVID-19) : renseignements du gouvernement du Canada",
  "text":"Informations sur la COVID-19 destinées aux Canadiens, y compris des liens vers des mises à jour sur les maladies, des conseils aux voyageurs, la façon de se préparer, les symptômes, la prévention, les risques, la réponse du Canada, le nombre de cas actuels, des réponses aux questions et des liens vers des ressources imprimables.",
  "spatialCoverage": {
   "@type": "Country",
   "name": "Canada"
   },
  "publisher":{
   "@type":"GovernmentOrganization",
   "@id":"#wb-publisher",
   "name":"Gouvernment du Canada",
   "url":"https://www.canada.ca/fr.html"
   },
  "category":"https://www.wikidata.org/wiki/Q81068910",
  "datePosted":"2020-05-09",
  "diseasePreventionInfo":"https://www.canada.ca/fr/sante-publique/services/maladies/2019-nouveau-coronavirus/prevention-risques.html",
  "diseaseSpreadStatistics":"https://www.canada.ca/fr/sante-publique/services/maladies/2019-nouveau-coronavirus.html",
  "newsUpdatesAndGuidelines":"https://www.canada.ca/fr/sante-publique/services/maladies/maladie-coronavirus-covid-19.html",
  "quarantineGuidelines":"https://www.canada.ca/fr/sante-publique/services/maladies/2019-nouveau-coronavirus/prevention-risques.html",
  "travelBans":"https://www.canada.ca/fr/sante-publique/services/maladies/2019-nouveau-coronavirus/derniers-conseils-sante-voyageurs.html",
  "governmentBenefitsInfo": {
   "@type": "GovernmentService",
   "name": "Plan d'intervention économique du Canada pour répondre à la COVID-19",
   "url":  "https://www.canada.ca/fr/ministere-finances/plan-intervention-economique.html",
   "provider": {
    "@id": "#wb-publisher"
    },
   "serviceType": "Aide d'urgence",
   "audience": {
   "@type": "Audience",
   "name": "Canadiens touchés par la COVID-19"
   }
  }
 }</code></pre>
         </details>
        </div>
       </div>
      </div>
     </div>
    </details>
    <details>
     <summary>
      <h3 class="h4">
       FAQPage
      </h3>
     </summary>
     <h4>
      Quand l'utiliser
     </h4>
     <p>
      Permet d'ajouter un ensemble de rubriques et leur contenu respectif qui fournissent des réponses aux questions importantes liées à une page.
     </p>
     <p>
      À utiliser sur les pages suivantes :
     </p>
     <ul>
      <li>
       page de lancement de service
      </li>
      <li>
       documents de directive
      </li>
      <li>
       foires aux questions (FAQ)
      </li>
     </ul>
     Les foires aux questions sont fortement déconseillées sur Canada.ca dans la plupart des cas.
    </details>
   </figure>
  </p>
  <ul>
   <li>
    <a href="https://blogue.canada.ca/2020/05/25/eviter-les-faq.html">
     Éviter les
     <abbr title="foire qux questions">
      FAQ
     </abbr>
     , à une exception près
    </a>
    (blogue)
   </li>
  </ul>
  <h4>
   Directives officielles
  </h4>
  <ul>
   <li>
    <a href="https://schema.org/FAQPage">
     Directives Schema.org pour FAQPage
    </a>
    (en anglais seulement)
   </li>
   <li>
    <a href="https://developers.google.com/search/docs/data-types/faqpage">
     Directives Google pour FAQPage
    </a>
   </li>
  </ul>
  <div class="pattern-demo mrgn-bttm-md">
   <div class="mrgn-rght-md mrgn-lft-md">
    <h4>
     Code
    </h4>
    <div class="wb-tabs">
     <div class="tabpanels">
      <details>
       <summary>
        JSON-LD
       </summary>
       <ul>
        <li>
         Ajouter l'attribut
         <code>
          id
         </code>
         à l'élément de script HTML JSON-LD nommé "wb-script".
        </li>
        <li>
         Utilisez la même ancre d'identification de la racine JSON-LD que celle du contenu principal de la page. Les deux utiliseront "#wb-main" pour spécifier sémantiquement qu'ils décrivent le même sujet.
        </li>
       </ul>
       <pre class="prettyprint"><code>&lt;script id="wb-script"
type="application/ld+json"&gt;
 {
  "@context":"http://schema.org",
  "@id": "#wb-main",
  "@type": "FAQPage",
  "publisher":{
   "@type":"GovernmentOrganization",
   "@id":"#wb-publisher",
   "name":"Gouvernment du Canada",
   "url":"https://www.canada.ca/fr.html"
   },
  "headline": "Combien vous pourriez recevoir",
  "description":"Calcul des versements, garde partagée et vos versements, recalcul des versements en juillet, prestations provinciales et territoriales connexes, enfants handicapés, remboursement d'un versement en trop",
  "mainEntity": [{
   "@type": "Question",
   "name": "Calcul des versements",
   "url": "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu/allocation-canadienne-enfants-comment-calculons-nous-votre-ace.html",
   "acceptedAnswer": {
    "@type": "Answer",
    "url": "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu/allocation-canadienne-enfants-comment-calculons-nous-votre-ace.html",
    "text": "&lt;p&gt;Utilisez le Calculateur de prestations pour enfants et familles pour mieux planifier votre budget et connaître le montant que vous pourriez recevoir.&lt;/p&gt;
     &lt;p&gt;&lt;a href='https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/calculateur-prestations-enfants-familles.html?utm_source=google&amp;utm_medium=organic&amp;utm_campaign=faq-data&amp;utm_content=ccbhowmuch-fr-q1-001'&gt;  Calculer combien vous pourriez recevoir&lt;/a&gt;&lt;/p&gt;

     &lt;p&gt;&lt;a href='https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/calculateur-prestations-enfants-familles.html?utm_source=google&amp;utm_medium=organic&amp;utm_campaign=faq-data&amp;utm_content=ccbhowmuch-fr-q1-002#math'&gt;Voyez comment l'Agence du revenu du Canada calcule les versements de l'allocation canadienne pour enfants (ACE)&lt;/a&gt;&lt;/p&gt;"
     }
	  },
 {
   "@type": "Question",
   "name": "Garde partagée et vos versements",
   "url": "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu/allocation-canadienne-enfants-comment-calculons-nous-votre-ace.html",
   "acceptedAnswer": {
    "@type": "Answer",
    "url": "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu/allocation-canadienne-enfants-comment-calculons-nous-votre-ace.html",
    "text": "
     &lt;p&gt;En situation de garde partagée, chaque parent reçoit 50 % du montant lié à son revenu familial net rajusté qu'il recevrait s'il avait la garde complète de son enfant.&lt;/li&gt;
     &lt;p&gt;Si l'Agence du revenu du Canada (ARC) considère que votre enfant est en garde partagée, l'ARC ne fractionne pas ce montant selon d'autres pourcentages, et elle n'accorde pas le montant complet à un seul des parents.&lt;/li&gt;
     &lt;p&gt;Si un enfant vit avec vous &lt;strong&gt;à temps partiel&lt;/strong&gt;, allez à  &lt;a href='https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu/allocation-canadienne-enfants-avant-faire-demande.html?utm_source=google&amp;utm_medium=organic&amp;utm_campaign=faq-data&amp;utm_content=ccbhowmuch-fr-q2-001#shared'&gt;Ententes de garde et vos prestations&lt;/a&gt; pour déterminer s'il s'agit d'une situation de garde partagée.&lt;/p&gt;"
    }
  }]
 }
&lt;/script&gt;
&lt;body vocab="http://schema.org/" typeof="WebPage"&gt;
 &lt;div typeof="Organisation" resource="#wb-publisher"&gt;
  &lt;img src="/link/to/a/logo" alt="Publisher name" property="logo" /&gt;
  &lt;meta property="name" content="Publisher name" /&gt;
 &lt;/div&gt;
 &lt;main property="mainContentOfPage" typeof="WebPageElement" resource="#wb-main"&gt;
 &lt;/main&gt;
&lt;/body&gt;</code></pre>
      </details>
      <details>
       <summary>
        AEM
       </summary>
       <ul>
        <p>
         Ajouter le code dans le composant Données structurées dans les propriétés de la page.
        </p>
       </ul>
       <pre class="prettyprint"><code>{
  "@context":"http://schema.org",
  "@id": "#wb-main",
  "@type": "FAQPage",
  "publisher":{
   "@type":"GovernmentOrganization",
   "@id":"#wb-publisher",
   "name":"Government of Canada",
	 "url":"https://www.canada.ca/fr.html"
   },
  "headline": "Combien vous pourriez recevoir",
  "description":"Calcul des versements, garde partagée et vos versements, recalcul des versements en juillet, prestations provinciales et territoriales connexes, enfants handicapés, remboursement d'un versement en trop",
  "mainEntity": [{
   "@type": "Question",
   "name": "Calcul des versements",
   "url": "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu/allocation-canadienne-enfants-comment-calculons-nous-votre-ace.html",
   "acceptedAnswer": {
    "@type": "Answer",
    "url": "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu/allocation-canadienne-enfants-comment-calculons-nous-votre-ace.html",
    "text": "&lt;p&gt;Utilisez le Calculateur de prestations pour enfants et familles pour mieux planifier votre budget et connaître le montant que vous pourriez recevoir.&lt;/p&gt;
     &lt;p&gt;&lt;a href='https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/calculateur-prestations-enfants-familles.html?utm_source=google&amp;utm_medium=organic&amp;utm_campaign=faq-data&amp;utm_content=ccbhowmuch-fr-q1-001'&gt;  Calculer combien vous pourriez recevoir&lt;/a&gt;&lt;/p&gt;

     &lt;p&gt;&lt;a href='https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/calculateur-prestations-enfants-familles.html?utm_source=google&amp;utm_medium=organic&amp;utm_campaign=faq-data&amp;utm_content=ccbhowmuch-fr-q1-002#math'&gt;Voyez comment l'Agence du revenu du Canada calcule les versements de l'allocation canadienne pour enfants (ACE)&lt;/a&gt;&lt;/p&gt;"
     }
	  },
 {
   "@type": "Question",
   "name": "Garde partagée et vos versements",
   "url": "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu/allocation-canadienne-enfants-comment-calculons-nous-votre-ace.html",
   "acceptedAnswer": {
    "@type": "Answer",
    "url": "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu/allocation-canadienne-enfants-comment-calculons-nous-votre-ace.html",
    "text": "
     &lt;p&gt;En situation de garde partagée, chaque parent reçoit 50 % du montant lié à son revenu familial net rajusté qu'il recevrait s'il avait la garde complète de son enfant.&lt;/li&gt;
     &lt;p&gt;Si l'Agence du revenu du Canada (ARC) considère que votre enfant est en garde partagée, l'ARC ne fractionne pas ce montant selon d'autres pourcentages, et elle n'accorde pas le montant complet à un seul des parents.&lt;/li&gt;
     &lt;p&gt;Si un enfant vit avec vous &lt;strong&gt;à temps partiel&lt;/strong&gt;, allez à  &lt;a href='https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu/allocation-canadienne-enfants-avant-faire-demande.html?utm_source=google&amp;utm_medium=organic&amp;utm_campaign=faq-data&amp;utm_content=ccbhowmuch-fr-q2-001#shared'&gt;Ententes de garde et vos prestations&lt;/a&gt; pour déterminer s'il s'agit d'une situation de garde partagée.&lt;/p&gt;"
    }
  }]
 }</code></pre>
      </details>
     </div>
    </div>
   </div>
  </div>
  <details>
   <summary>
    <h3 class="h4">
     HowTo
    </h3>
   </summary>
   <h4>
    Quand l'utiliser
   </h4>
   <p>
    Utilisez-le pour les tâches qui nécessitent une approche étape par étape très claire.
   </p>
   <h4>
    Directives officielles
   </h4>
   <ul>
    <li>
     <a href="https://schema.org/HowTo">
      Directives Schema.org pour HowTo
     </a>
     (en anglais seulement)
    </li>
    <li>
     <a href="https://developers.google.com/search/docs/data-types/how-to">
      Directives Google pour HowTo
     </a>
    </li>
   </ul>
   <div class="pattern-demo mrgn-bttm-md">
    <div class="mrgn-rght-md mrgn-lft-md">
     <h4>
      Code
     </h4>
     <div class="wb-tabs">
      <div class="tabpanels">
       <details>
        <summary>
         JSON-LD
        </summary>
        <ul>
         <li>
          Ajouter l'attribut
          <code>
           id
          </code>
          à l'élément de script HTML JSON-LD nommé "wb-script".
         </li>
         <li>
          Utilisez la même ancre d'identification de la racine JSON-LD que celle du contenu principal de la page. Les deux utiliseront "#wb-main" pour spécifier sémantiquement qu'ils décrivent le même sujet.
         </li>
        </ul>
        <pre class="prettyprint"><code>&lt;script id="wb-script"
type="application/ld+json"&gt;
 {
  "@context":"http://schema.org",
  "@id": "#wb-main",
  "@type":"HowTo",
  "publisher":{
   "@type":"GovernmentOrganization",
   "@id":"#wb-publisher",
   "name":"Governement du Canada",
   "url":"https://www.canada.ca/fr.html"
   },
  "description":"La prestation canadienne pour enfants (CCB) est un paiement mensuel non imposable versé aux familles admissibles pour les aider à assumer les coûts liés à l'éducation des enfants de moins de 18 ans. ",
  "name":"Allocation canadienne pour enfants",
  "step":[{
   "@type":"HowToStep",
   "image":"http://test.canada.ca/covid-19-guidance/proto/structured_data/step_1.svg",
   "name":"Qui peut faire une demande",
   "url":"https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu/allocation-canadienne-enfants-avant-faire-demande.html",
   "Position":1,
   "text":"Qui peut obtenir l’ACE, qui est le principal responsable des soins et de l’éducation d’un enfant, et l'entente d’une garde partagée sur vos prestations"
   },
   {"@type":"HowToStep",
   "image":"http://test.canada.ca/covid-19-guidance/proto/structured_data/step_2.svg",
   "name":"Faire une demande",
   "url":"https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu/allocation-canadienne-enfants-comment-faire-demande.html",
   "position":2,
   "text":"Quand et comment faire une demande, et quand fournir des documents supplémentaires"
   }
  ]}
&lt;/script&gt;
&lt;body vocab="http://schema.org/" typeof="WebPage"&gt;
 &lt;div typeof="Organisation" resource="#wb-publisher"&gt;
  &lt;img src="/link/to/a/logo" alt="Publisher name" property="logo" /&gt;
  &lt;meta property="name" content="Publisher name" /&gt;
 &lt;/div&gt;
 &lt;main property="mainContentOfPage" typeof="WebPageElement" resource="#wb-main"&gt;
 &lt;/main&gt;
&lt;/body&gt;</code></pre>
       </details>
       <details>
        <summary>
         AEM
        </summary>
        <p>
         Ajouter le code dans le composant Données structurées dans les propriétés de la page.
        </p>
        <pre class="prettyprint"><code>{
  "@context":"http://schema.org",
  "@id": "#wb-main",
  "@type":"HowTo",
  "publisher":{
   "@type":"GovernmentOrganization",
   "@id":"#wb-publisher",
   "name":"Government of Canada",
	 "url":"https://www.canada.ca/fr.html"
   },
  "description":"La prestation canadienne pour enfants (CCB) est un paiement mensuel non imposable versé aux familles admissibles pour les aider à assumer les coûts liés à l'éducation des enfants de moins de 18 ans. ",
  "name":"Allocation canadienne pour enfants",
  "step":[{
   "@type":"HowToStep",
   "image":"http://test.canada.ca/covid-19-guidance/proto/structured_data/step_1.svg",
   "name":"Qui peut faire une demande",
   "url":"https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu/allocation-canadienne-enfants-avant-faire-demande.html",
   "Position":1,
   "text":"Qui peut obtenir l’ACE, qui est le principal responsable des soins et de l’éducation d’un enfant, et l'entente d’une garde partagée sur vos prestations"
   },
   {"@type":"HowToStep",
   "image":"http://test.canada.ca/covid-19-guidance/proto/structured_data/step_2.svg",
   "name":"Faire une demande",
   "url":"https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu/allocation-canadienne-enfants-comment-faire-demande.html",
   "position":2,
   "text":"Quand et comment faire une demande, et quand fournir des documents supplémentaires"
   }
  ]}</code></pre>
       </details>
      </div>
     </div>
    </div>
   </div>
  </details>
  <details>
   <summary>
    <h3 class="h4">
     Speakable
    </h3>
   </summary>
   <h4>
    Quand l'utiliser
   </h4>
   <p>
    Utilisez-le pour identifier toute section de contenu qui conviendrait le mieux à la synthèse vocale : la partie de la page qui résume la chose la plus importante que les gens recherchent sur cette page.
   </p>
   <p>
    Vous pouvez utilise ce schéma sur n'importe quelle page.
   </p>
   <h4>
    Directives officielles
   </h4>
   <ul>
    <li>
     <a href="https://schema.org/SpeakableSpecification">
      Directives Schema.org pour Speakable
     </a>
     (en anglais seulement)
    </li>
    <li>
     <a href="https://developers.google.com/search/docs/data-types/speakable">
      Directives Google pour Speakable
     </a>
    </li>
   </ul>
   <div class="pattern-demo mrgn-bttm-md">
    <div class="mrgn-rght-md mrgn-lft-md">
     <h4>
      Code
     </h4>
     <div class="wb-tabs">
      <div class="tabpanels">
       <details>
        <summary>
         JSON-LD
        </summary>
        <ul>
         <li>
          Ajouter l'attribut
          <code>
           id
          </code>
          à l'élément de script HTML JSON-LD nommé "wb-script".
         </li>
         <li>
          Utilisez la même ancre d'identification de la racine JSON-LD que celle du contenu principal de la page. Les deux utiliseront "#wb-main" pour spécifier sémantiquement qu'ils décrivent le même sujet.
         </li>
        </ul>
        <pre class="prettyprint"><code>&lt;script id="wb-script"
type="application/ld+json"&gt;
 {
  "@context":"http://schema.org",
  "@id": "#wb-main",
  "@type": "WebPage",
  "name": "Quel versement d'Alloation canadienne pour enfants vous pourriez recevoir",
  "speakable":{
   "@type": "SpeakableSpecification","cssSelector": [".speakable1"]
   },
  "url":"https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu/allocation-canadienne-enfants-comment-calculons-nous-votre-ace.html"}
&lt;/script&gt;
&lt;body vocab="http://schema.org/" typeof="WebPage"&gt;
 &lt;div typeof="Organisation" resource="#wb-publisher"&gt;
  &lt;img src="/link/to/a/logo" alt="Publisher name" property="logo" /&gt;
  &lt;meta property="name" content="Publisher name" /&gt;
 &lt;/div&gt;
 &lt;main property="mainContentOfPage" typeof="WebPageElement" resource="#wb-main"&gt;
  &lt;p class="speakable1	"&gt;Le montant maximal de l’allocation canadienne pour enfants que vouz pouvez recevoir est 6 639 $ par année pour un enfant moins de 6 ans, et 5 602 $ par année pour un enfant entre 6 et 17 ans.&lt;/p&gt;
 &lt;/main&gt;
&lt;/body&gt;</code></pre>
       </details>
       <details>
        <summary>
         AEM
        </summary>
        <p>
         Ajouter le code dans le composant Données structurées dans les propriétés de la page.
        </p>
        <pre class="prettyprint"><code>{
  "@context":"http://schema.org",
  "@id": "#wb-main",
  "@type": "WebPage",
	"name": "Quel versement d'Alloation canadienne pour enfants vous pourriez recevoir",
  "speakable":{
   "@type": "SpeakableSpecification","cssSelector": [".speakable1"]
   },
  "url":"https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu/allocation-canadienne-enfants-comment-calculons-nous-votre-ace.html"}</code></pre>
       </details>
      </div>
     </div>
    </div>
   </div>
  </details>
  <details>
   <summary>
    <h3 class="h4">
     Event
    </h3>
   </summary>
   <h4>
    Quand l'utiliser
   </h4>
   <p>
    Utilisez-le pour les événements.
   </p>
   <h4>
    Directives officielles
   </h4>
   <ul>
    <li>
     <a href="https://schema.org/Event">
      Directives Schema.org pour Event
     </a>
     (en anglais seulement)
    </li>
    <li>
     <a href="https://developers.google.com/search/docs/data-types/event">
      Directives Google pour Event
     </a>
    </li>
   </ul>
   <div class="pattern-demo mrgn-bttm-md">
    <div class="mrgn-rght-md mrgn-lft-md">
     <h4>
      Code
     </h4>
     <div class="wb-tabs">
      <div class="tabpanels">
       <details>
        <summary>
         JSON-LD
        </summary>
        <ul>
         <li>
          Ajouter l'attribut
          <code>
           id
          </code>
          à l'élément de script HTML JSON-LD nommé "wb-script".
         </li>
         <li>
          Utilisez la même ancre d'identification de la racine JSON-LD que celle du contenu principal de la page. Les deux utiliseront "#wb-main" pour spécifier sémantiquement qu'ils décrivent le même sujet.
         </li>
        </ul>
        <pre class="prettyprint"><code>&lt;script
type="application/ld+json"&gt;
 {
  "@context": "http://schema.org",
  "@type": "Event",
  "name": "Grande fête sous le soleil",
  "startDate": "2020-07-15",
  "location": {
   "@type": "Place",
   "name": "Colline du Parlement",
    "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ottawa",
    "addressRegion": "ON",
    "postalCode": "K1A 0A9",
    "streetAddress": "Rue Wellington"
    }
   },
  "image": "./canada-day.jpg",
  "description": "Célébrons le soleil dans la capitale nationale."
 }
&lt;/script&gt;
&lt;body vocab="http://schema.org/" typeof="WebPage"&gt;
 &lt;div typeof="Organisation" resource="#wb-publisher"&gt;
  &lt;img src="/link/to/a/logo" alt="Publisher name" property="logo" /&gt;
  &lt;meta property="name" content="Publisher name" /&gt;
 &lt;/div&gt;
 &lt;main property="mainContentOfPage" typeof="WebPageElement" resource="#wb-main"&gt;
 &lt;/main&gt;
&lt;/body&gt;</code></pre>
       </details>
       <details>
        <summary>
         AEM
        </summary>
        <p>
         Ajouter le code dans le composant Données structurées dans les propriétés de la page.
        </p>
        <pre class="prettyprint"><code>{
 "@context": "http://schema.org",
 "@type": "Event",
 "name": "Grande fête sous le soleil",
 "@id": "#wb-main",
 "startDate": "2020-07-15",
 "location": {
 "@type": "Place",
 "name": "Colline du Parlement",
 "address": {
 "@type": "PostalAddress",
 "addressLocality": "Ottawa",
 "addressRegion": "ON",
 "postalCode": "K1A 0A9",
 "streetAddress": "Rue Wellington"
	}
},
 "image": "./canada-day.jpg",
 "description": "Célébrons le soleil dans la capitale nationale."
}</code></pre>
       </details>
      </div>
     </div>
    </div>
   </div>
  </details>
  <h2 id="ressources">
   Ressources supplémentaires
  </h2>
  <ul>
   <li>
    <a href="https://blogue.canada.ca/2020/01/28/optimisation-recherche-vocale.html">
     Optimiser votre contenu pour la recherche vocale
    </a>
   </li>
   <li>
    <a href="https://gds.blog.gov.uk/2019/12/19/making-gov-uk-more-than-a-website/">
     Making GOV.UK more than a website
    </a>
    (en anglais seulement)
   </li>
   <li>
    <a href="https://docs.publishing.service.gov.uk/manual/schemas.html">
     What data GOV.UK exposes as schema.org structured data
    </a>
    (en anglais seulement)
   </li>
   <li>
    <a href="https://digital.gov/2020/05/11/experimenting-with-specialannouncement-markup/">
     USA.gov: Experimenting with SpecialAnnouncement Markup
    </a>
    (en anglais seulement)
   </li>
   <li>
    <a href="https://www.searchenginejournal.com/google-structured-data-preference/297479/">
     Google On Which Structured Data it Prefers: JSON-LD or Microdata?
    </a>
    (en anglais seulement)
   </li>
   <li>
    <a href="https://www.w3.org/TR/rdf11-primer/">
     W3C RDF 1.1 primer (en anglais seulement)
    </a>
   </li>
   <li>
    <a href="	https://www.schemaapp.com/newsletter/measuring-results-schema-org-markup/">
     Measuring results from Schema.org markup JSON-LD
    </a>
    (en anglais seulement)
   </li>
  </ul>
 </section>
</div>


