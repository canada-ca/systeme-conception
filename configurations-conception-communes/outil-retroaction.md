---
altLangPage: https://design.canada.ca/common-design-patterns/page-feedback.html
date: "2023-10-19"
dateModified: "2023-10-19"
description: "L’outil de rétroaction est une configuration facultative pour recueillir la rétroaction de l’expérience sur une page."
title: "Rétroaction GC"
---
<p class="small">Dernière mise à jour&nbsp;: 2023-10-06</p>
<p>L'outil de rétroaction est une configuration <strong>facultative</strong> pour recueillir la rétroaction de l'expérience sur une page. Lorsqu'il est utilisé, il apparaît en bas de la page, juste avant la date de modification.</p>
<div class="mrgn-tp-md mrgn-bttm-md">
  <figure class="mrgn-tp-md mrgn-bttm-lg"><img src="/images/page-feedback-fr.png" class="img-responsive" alt="" /></figure>
</div>
<h2 id="sur-cette-page">Sur cette page</h2>
<ul>
  <li><a href="#utiliser">Quand l'utiliser</a></li>
  <li><a href="#quoi-eviter">Quoi éviter</a></li>
  <li><a href="#contenu-et-conception">Contenu et conception</a></li>
  <li><a href="#comment-proceder">Comment procéder à la mise en œuvre</a></li>
  <li><a href="#recherche-et-justification">Recherche et justification</a></li>
</ul>
<section id="utiliser">
  <h2>Quand l'utiliser</h2>
  <p>Envisagez d'utiliser Rétroaction GC pour&nbsp;:</p>
  <ul>
    <li>Découvrir des problèmes propres à la page qui modifient votre note sur le sondage sur la réussite des tâches du gouvernement du Canada (GC).</li>
    <li>Rechercher des problèmes sur des pages que vous prévoyez traiter ultérieurement.</li>
    <li>Déterminer si les pages nouvelles ou existantes répondent aux besoins des utilisateurs.</li>
    <li>Déterminer les problèmes émergents.</li>
    <li>Assurer le suivi des améliorations de la page après leur mise en ligne.</li>
  </ul>
</section>
<section id="quoi-eviter">
  <h2>Quoi éviter</h2>
  <p>Évitez d'utiliser Rétroaction GC, dans des pages pour lesquelles vous ne prévoyez pas de surveiller les commentaires et prendre des mesures. Nous vous déconseillons également d'utiliser l'outil dans des environnements sécurisés ou sur des pages contenant des renseignements thématiques sensibles.</p>
  <p><a href="/retroaction/quand.html#comment-ne-pas-utiliser-loutil-de-r%C3%A9troaction">Autres comportements à éviter en analysant une rétroaction</a></p>
</section>
<section id="contenu-et-conception">
  <h2>Contenu et conception</h2>
  <p>Rétroaction GC invite les visiteurs à effectuer les actions suivantes&nbsp;:</p>
  <ul>
    <li>indiquer s'ils ont trouvé ce qu'ils cherchaient (oui ou non);</li>
    <li>fournir leur rétroaction en décrivant le problème.</li>
  </ul>
  <p>Placez l'outil en bas de la page, juste avant la date de modification. Alignez-le à gauche de la page, avant l'élément &laquo;&nbsp;Partagez cette page&nbsp;&raquo;. Vous pouvez choisir d'utiliser Rétroaction GC au lieu de la configuration &laquo;&nbsp;Signaler un problème sur cette page&nbsp;&raquo;. Il n'est pas obligatoire d'ajouter Rétroaction GC lors du retrait de la configuration &laquo;&nbsp;Signaler un problème sur cette page&nbsp;&raquo;.</p>
  <p>Le bloc réutilisable de rétroaction comporte 4 états&nbsp;:</p>
  <ul>
    <li>la question &laquo;&nbsp;Avez-vous trouvé ce que vous cherchiez?&nbsp;&raquo; accompagnée des boutons &laquo;&nbsp;Oui&nbsp;&raquo; et &laquo;&nbsp;Non&nbsp;&raquo;;</li>
    <li>le champ de texte destiné à la rétroaction (avec la possibilité d'ajouter un lien de contact personnalisable);</li>
    <li>Une fenêtre contextuelle lorsque des renseignements personnels sont détectés dans un commentaire;</li>
    <li>le message de remerciement.</li>
  </ul>
  <p>Une documentation détaillée est également disponible pour l'utilisation de cette configuration et pour l'analyse de la rétroaction.</p>
  <p><a href="/retroaction/">Rétroaction GC (Analyses, sondage et commentaires)</a></p>

  <h3>Spécifications de contenu</h3>
  <p>Lorsque vous ajoutez pour la première fois l'outil de rétroaction à votre page, utilisez l'option par défaut, sans le lien de contact.</p>

  <p><strong>Envisagez uniquement d'ajouter un lien de contact si</strong> vous avez essayé de clarifier le contenu de la page concernant la façon de contacter le programme ou service et que les utilisateurs utilisent toujours l'outil de rétroaction pour obtenir une réponse propre à leur situation.</p>

  <p>Le lien peut mener vers une page HTML ou vers une adresse courriel.</p>

  <p>Veillez à ce que le texte du lien soit court. Nous recommandons la formulation &laquo;&nbsp;Contacter [nom du service]&nbsp;&raquo;.</p>

  <h3>Interactions</h3>
  <p>La configuration de rétroaction comporte 4 états&nbsp;:</p>
  <ul>
    <li>une question &laquo;&nbsp;Avez-vous trouvé ce que vous cherchiez?&nbsp;&raquo;;</li>
    <li>un champ de texte où saisir la rétroaction;</li>
    <li>Détection de renseignements personnels</li>
    <li>un message de remerciement.</li>
  </ul>
  <p>Pour tous ces états, l'utilisateur reste sur la même page HTML en interagissant avec la configuration de rétroaction.</p>
  <p><strong>Sur la page</strong>, la configuration affiche la question &laquo;&nbsp;Avez-vous trouvé ce que vous cherchiez?&nbsp;&raquo; et affiche les boutons &laquo;&nbsp;Oui&nbsp;&raquo; et &laquo;&nbsp;Non&nbsp;&raquo;.</p>
  <p><strong>Si l'utilisateur choisit &laquo;&nbsp;Non&nbsp;&raquo;</strong>, il lui est demandé de fournir davantage de renseignements sur son expérience.</p>
  <p>Cela commence par un titre indiquant &laquo;&nbsp;Veuillez fournir plus de détails&nbsp;&raquo;, suivi du texte &laquo;&nbsp;Vous ne recevrez aucune réponse. N'incluez pas de renseignements personnels (téléphone, courriel, NAS, renseignements financiers, médicaux ou professionnels). Maximum de 300 caractères&nbsp;&raquo;. Une fois que l'utilisateur a sélectionné &laquo;&nbsp;Soumettre&nbsp;&raquo;, un message de remerciement s'affiche.</p>
  <p>Vient ensuite un champ de texte ouvert permettant de recueillir la rétroaction.</p>
  <p>Si l'option de contact est utilisée, un lien permettant de contacter le service apparaît dans une configuration de style afficher/masquer intitulée &laquo;&nbsp;Besoin d'aide urgente pour résoudre un problème? Communiquez avec nous&nbsp;&raquo; située juste avant le titre et le champ de texte ouvert.</p>
  <p>Après avoir sélectionné &laquo;&nbsp;Soumettre&nbsp;&raquo;, l'utilisatrice ou l'utilisateur reçoit un message de remerciement avec une coche verte indiquant que son commentaire a été envoyé avec succès ou, si des renseignements personnels ont été détectés dans le commentaire, un message contextuel s'affiche.</p>
  <p><strong>Lorsqu'un commentaire contenant des renseignements personnels est soumis</strong>, un message contextuel remplace l'invite.</p>
  <p>La fenêtre contextuelle est intitulée &laquo;&nbsp;Les renseignements personnels dans votre commentaire ont été supprimés&nbsp;&raquo;.</p>
  <p>On rappelle à l'utilisatrice ou à l'utilisateur qu'aucune réponse n'est envoyée lors de la soumission de commentaires&nbsp;: &laquo;&nbsp;Les commentaires ne sont utilisés que pour améliorer notre site Web. Vous ne recevrez aucune réponse.&nbsp;&raquo;</p>
  <p>Un aperçu du commentaire est affiché et tout renseignement personnel est remplacé par des croisillons&nbsp;: &laquo;&nbsp;Par souci de confidentialité, votre commentaire sera soumis comme suit&nbsp;:&nbsp;&raquo;.</p>
  <p>Il y a un bloc réutilisable afficher/masquer intitulé &laquo;&nbsp;Qu'est-ce qui est considéré comme un renseignement personnel&nbsp;&raquo;. Quand le bloc réutilisable afficher/masquer est ouvert, il y a une liste des types de renseignements personnels qui ne peuvent être inclus dans le formulaire de rétroaction.</p>
  <ul>
    <li>Adresse courriel</li>
    <li>Numéro de téléphone</li>
    <li>Code postal</li>
    <li>Numéro de passeport</li>
    <li>Numéro d'entreprise</li>
    <li>Numéro d'assurance sociale (NAS)</li>
  </ul>
  <p>Il y a deux boutons au bas de la fenêtre contextuelle.</p>
  <p>Un bouton permettant de &laquo;&nbsp;Retourner en arrière et modifier le commentaire&nbsp;&raquo; et un autre permettant de &laquo;&nbsp;Soumettre le commentaire&nbsp;&raquo;</p>
  <p>Si on choisit &laquo;&nbsp;Retourner en arrière et modifier le commentaire&nbsp;&raquo;, l'utilisatrice ou l'utilisateur est réacheminé au champ de texte du commentaire initial.</p>
  <p>Si on choisit &laquo;&nbsp;Soumettre le commentaire&nbsp;&raquo;, le commentaire est soumis et automatiquement censuré, et un message de remerciement apparaît.</p>
  <h3>Spécifications de conception</h3>
  <p>Lorsqu'il est utilisé, Rétroaction GC remplace la configuration &laquo;&nbsp;Signaler un problème sur la page&nbsp;&raquo;.</p>
  <h4>Encadré gris</h4>
  <ul>
    <li>Classe de l'encadré&nbsp;: well mrgn-bttm-0</li>
  </ul>
  <h4>Typographie</h4>
  <ul>
    <li>Titre&nbsp;: taille de police&nbsp;: 16 px</li>
    <li>Corps du texte&nbsp;: petite taille de police&nbsp;: 87 %</li>
  </ul>
  <h4>Boutons</h4>
  <ul>
    <li>Positionnement&nbsp;: Les boutons se situent à droite de la question &laquo;&nbsp;Avez-vous trouvé ce que vous cherchiez?&nbsp;&raquo; Le bouton &laquo;&nbsp;Oui&nbsp;&raquo; se trouve à gauche du bouton &laquo;&nbsp;Non&nbsp;&raquo;.</li>
    <li>Classe de bouton&nbsp;: btn btn-primary</li>
  </ul>
  <h4>Icône coche du message de remerciement</h4>
  <ul>
    <li>Positionnement&nbsp;: À gauche du message &laquo;&nbsp;Merci&nbsp;&raquo;</li>
    <li>Icône coche&nbsp;: glyphicon glyphicon-ok</li>
    <li>Couleur de la coche&nbsp;: success class</li>
  </ul>
  <h3>Exemples visuels</h3>
  <div class="row">
    <div class="col-md-8">
      <div class="mrgn-tp-md mrgn-bttm-md">
        <figure class="mrgn-tp-md mrgn-bttm-lg">
          <figcaption>
            <h4>1. Première vue de l'outil de rétroaction</h4>
          </figcaption>
          <img src="/images/page-feedback-fr.png" class="img-responsive" alt="1. Première vue de l'outil de rétroaction. Version texte ci-dessous&nbsp;:" />
          <details>
            <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l'image&nbsp;: Première vue de l'outil de rétroaction</summary>
            <p class="mrgn-tp-md">Sur la page, la section consacrée à la rétroaction se trouve en bas de la page Web, juste au-dessus de la date de modification. Un petit encadré gris demande &laquo;&nbsp;Avez-vous trouvé ce que vous cherchiez?&nbsp;&raquo; et affiche les boutons &laquo;&nbsp;Oui&nbsp;&raquo; et &laquo;&nbsp;Non&nbsp;&raquo;.</p>
          </details>
        </figure>
      </div>
      <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption>
          <h4>2a. Vue par défaut après avoir sélectionné &laquo;&nbsp;Non&nbsp;&raquo;</h4>
        </figcaption>
        <img src="/images/description-fr.jpg" class="img-responsive" alt="2a. Vue par défaut après avoir sélectionné Non. Version texte ci-dessous&nbsp;:" />
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l'image&nbsp;:  Vue par défaut après avoir sélectionné « Non »</summary>
          <p class="mrgn-tp-md">Après l'interaction avec le bouton &laquo;&nbsp;Non&nbsp;&raquo;, la question est remplacée par un écran comportant un champ de texte. Celui-ci affiche le titre &laquo;&nbsp;Veuillez fournir plus de détails&nbsp;&raquo;, suivi des instructions de ne pas inclure de renseignements personnels&nbsp;: &laquo;&nbsp;Vous ne recevrez aucune réponse. N'incluez pas de renseignements personnels (téléphone, courriel, NAS, renseignements financiers, médicaux ou professionnels). Maximum de 300 caractères&nbsp;&raquo;. Un petit champ de texte est suivi d'un bouton &laquo;&nbsp;Soumettre&nbsp;&raquo;.</p>
        </details>
      </figure>
      <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption>
          <h4>2b. Vue optionnelle après avoir sélectionné &laquo;&nbsp;Non&nbsp;&raquo; avec l'option de contact</h4>
          <p>La configuration de style afficher/masquer &laquo;&nbsp;Besoin d'aide urgente pour résoudre un problème? Communiquez avec nous&nbsp;&raquo; sera réduite par défaut.</p>
        </figcaption>
        <img src="/images/urgent-help-fr.png" class="img-responsive" alt="2b. Vue optionnelle après avoir sélectionné Non avec l'option de contact. Version texte ci-dessous&nbsp;:" />
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l'image&nbsp;: Vue optionnelle après avoir sélectionné « Non » avec l'option de contact</summary>
          <p class="mrgn-tp-md">Après l'interaction avec le bouton &laquo;&nbsp;Non&nbsp;&raquo;, la question est remplacée par un écran comportant un champ de texte.</p>
          <p>Dans l'option de contact, une configuration de style afficher/masquer porte le titre &laquo;&nbsp;Besoin d'aide urgente pour résoudre un problème? Communiquez avec nous.&nbsp;&raquo; Lorsque la configuration afficher/masquer est ouverte, un lien personnalisable permettant de contacter le service s'affiche.</p>
          <p>Après la configuration afficher/masquer vient le titre &laquo;&nbsp;Veuillez fournir plus de détails&nbsp;&raquo;, suivi des instructions de ne pas inclure de renseignements personnels&nbsp;: &laquo;&nbsp;Vous ne recevrez aucune réponse. N'incluez pas de renseignements personnels (téléphone, courriel, NAS, renseignements financiers, médicaux ou professionnels). Maximum de 300 caractères&nbsp;&raquo;. Un petit champ de texte est suivi d'un bouton &laquo;&nbsp;Soumettre&nbsp;&raquo;.</p>
        </details>
      </figure>
      <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption>
          <h4>3. Vue après avoir sélectionné &laquo;&nbsp;Oui&nbsp;&raquo; ou après avoir soumis la rétroaction</h4>
        </figcaption>
        <img src="/images/thank-you-fr.jpg" class="img-responsive" alt="4. Vue après avoir sélectionné Oui ou après avoir soumis la rétroaction. Version texte ci-dessous&nbsp;:" />
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l'image&nbsp;: Vue après avoir sélectionné « Oui » ou après avoir soumis la rétroaction</summary>
          <p class="mrgn-tp-md">Lorsqu'un utilisateur sélectionne &laquo;&nbsp;Oui&nbsp;&raquo; comme réponse à la première question ou lorsqu'il soumet sa rétroaction, un message de remerciement apparaît. Une icône coche verte apparaît, suivie du titre &laquo;&nbsp;Merci de vos commentaires&nbsp;&raquo;</p>
        </details>
      </figure>
      <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption>
          <h4>4. Affichage facultatif lorsque des renseignements personnels sont détectés dans le commentaire</h4>
        </figcaption>
        <img src="/images/message-contextuel.png" class="img-responsive" alt="3. Affichage facultatif lorsque des renseignements personnels sont détectés dans le commentaire. Version texte ci-dessous&nbsp;:" />
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l'image&nbsp;: Affichage facultatif lorsque des renseignements personnels sont détectés dans le commentaire</summary>
          <p>Le modèle de développement/réduction intitulé &laquo;&nbsp;Qu'est-ce qui est considéré comme un renseignement personnel?&nbsp;&raquo; sera fermé par défaut. Si vous cliquez sur le bouton &laquo;&nbsp;Retourner en arrière et modifier le commentaire&nbsp;&raquo;, la vue se fermera automatiquement et affichera la vue 2a. Dans le cas contraire, si l'on clique sur le bouton &laquo;&nbsp;Soumettre le commentaire&nbsp;&raquo;, la vue devient la vue 3.</p>
        </details>
      </figure>
    </div>
  </div>
</section>
<section id="comment-proceder">
  <h2>Comment procéder à la mise en œuvre</h2>
  <p>Ajoutez l'outil de rétroaction au bas d'une page de contenu, après le contenu de la page et avant la date de modification.</p>
  <div class="row">
    <div class="col-md-8">
      <h3>Outil de rétroaction pour les pages du Service Web géré (SWG)</h3>
      <p>Utilisez ces instructions pour toutes les pages hébergées dans le service Web géré par Adobe.</p>
      <details>
        <summary>Instructions pour les pages SWG</summary>
        <h4>Ajout de l’outil de rétroaction</h4>
        <p><a href="https://www.gcpedia.gc.ca/wiki/Documentation_d%27AEM_sp%C3%A9cifique_au_GC_6.5#Chapitre_3_.E2.80.93_Travailler_avec_du_contenu">Comment ajouter l'outil de rétroaction à votre page dans Adobe Experience Manager (AEM).</a> (Contenu interne, uniquement disponible sur GCPedia)</p>
        <h4><span class="label label-warning">Optionnel</span> Ajouter une valeur masquée &laquo;&nbsp;Section&nbsp;&raquo; dans le code de l'outil de rétroaction</h4>
        <p>Ceci peut vous être utile si vous souhaitez télécharger de la rétroaction pour plusieurs pages en même temps.</p>
        <p>Envisagez d'inclure cette valeur lorsque vous ajoutez l'outil de rétroaction à plusieurs pages relatives à un même sujet, comme &laquo;&nbsp;passeports&nbsp;&raquo; ou &laquo;&nbsp;assurance-emploi&nbsp;&raquo;.</p>
        <p>Il s'agit d'une valeur unilingue. Entrez la valeur de section en anglais, tant pour vos pages en anglais que celles en français.</p>
        <p>Si vous souhaitez ajouter une nouvelle valeur &laquo;&nbsp;Section&nbsp;&raquo; qui n'apparaît pas dans la visionneuse de rétroaction, contactez le Bureau de la transformation numérique. Nous l'ajouterons pour vous à la visionneuse de rétroaction.</p>
        <p>Adresse courriel&nbsp;: <a href="maito:{{ site.emails.dto }}">{{ site.emails.dto }}</a></p>
        <h4><span class="label label-warning">Optionnel</span> Lien de contact</h4>
        <p>Envisagez uniquement d'ajouter un lien de contact si vous avez essayé de clarifier le contenu de la page concernant la façon de contacter le programme ou service et que les utilisateurs utilisent toujours l'outil de rétroaction pour obtenir une réponse propre à leur situation.</p>
      </details>
    </div>
  </div>
  <div class="row">
    <div class="col-md-8">
      <h3>Code de l'outil de rétroaction pour les pages en dehors du Service Web géré (SWG)</h3>
      <p>Utilisez ces instructions pour toutes les pages qui ne sont pas hébergées dans le service Web géré par Adobe.</p>
      <details>
        <summary>Instructions pour les pages qui ne sont pas dans SWG</summary>
        <h4>Ajout de l'outil de rétroaction</h4>
        <p>Insérez le code de l'outil de rétroaction à l'endroit où se trouve la configuration &laquo;&nbsp;Signaler un problème sur cette page&nbsp;&raquo; dans le code HTML de votre page.</p>
        <ul>
          <li><a href="https://wet-boew.github.io/GCWeb/sites/feedback/feedback-docs-fr.html">Configuration de Rétroaction GC (par défaut)</a></li>
          <li><a href="https://wet-boew.github.io/GCWeb/sites/feedback/feedback-docs-fr.html">Rétroaction GC avec lien de contact</a></li>
        </ul>
        <h4>Ajout des valeurs masquées obligatoires</h4>
        <p>Mise à jour des données pour les acronymes institutionnels. Il s'agit d'une valeur unilingue. Entrez la valeur en anglais, tant pour vos pages en anglais que celles en français.</p>
        <h5>Acronymes des institutions Canada.ca</h5>
        <ul>
          <li><strong>AAFC</strong> (Agriculture et Agroalimentaire Canada)</li>
          <li><strong>ATSSC</strong> (Service canadien d’appui aux tribunaux administratifs)</li>
          <li><strong>CATSA</strong> (Administration canadienne de la sûreté du transport aérien)</li>
          <li><strong>CFIA</strong> (Agence canadienne d'inspection des aliments)</li>
          <li><strong>CIRNAC</strong> (Relations Couronne-Autochtones et Affaires du Nord Canada)</li>
          <li><strong>NSERC</strong> (Conseil de recherches en sciences naturelles et en génie du Canada)</li>
          <li><strong>CBSA</strong> (Agence des services frontaliers du Canada)</li>
          <li><strong>CCG</strong> (Garde côtière canadienne)</li>
          <li><strong>CGC</strong> (Commission canadienne des grains)</li>
          <li><strong>CIHR</strong> (Instituts de recherche en santé du Canada)</li>
          <li><strong>CIPO</strong> (Office de la propriété intellectuelle du Canada)</li>
          <li><strong>CRA</strong> (Agence du revenu du Canada)</li>
          <li><strong>CRTC</strong> (Conseil de la radiodiffusion et des télécommunications canadiennes)</li>
          <li><strong>CSA</strong> (Agence spatiale canadienne)</li>
          <li><strong>CSEC</strong> (Centre de la sécurité des télécommunications)</li>
          <li><strong>CSPS</strong> (École de la fonction publique du Canada)</li>
          <li><strong>DFO</strong> (Pêches et Océans Canada)</li>
          <li><strong>DND</strong> (Le ministère de la Défense nationale)</li>
          <li><strong>ECCC</strong> (Environnement et Changement climatique Canada)</li>
          <li><strong>ESDC</strong> (Emploi et Développement social Canada)</li>
          <li><strong>FCAC</strong> (Agence de la consommation en matière financière du Canada)</li>
          <li><strong>FIN</strong> (Ministère des Finances Canada)</li>
          <li><strong>GAC</strong> (Affaires mondiales Canada)</li>
          <li><strong>HC</strong> (Santé Canada)</li>
          <li><strong>INFC</strong> (Infrastructure Canada)</li>
          <li><strong>IRCC</strong> (Immigration, Réfugiés et Citoyenneté Canada)</li>
          <li><strong>ISC</strong> (Services aux Autochtones Canada)</li>
          <li><strong>ISED</strong> (Innovation, Sciences et Développement économique Canada)</li>
          <li><strong>JUS</strong> (Ministère de la Justice Canada)</li>
          <li><strong>LAC</strong> (Bibliothèque et Archives Canada)</li>
          <li><strong>NFB</strong> (Office national du film du Canada)</li>
          <li><strong>NRC</strong> (Conseil national de recherches Canada)</li>
          <li><strong>NRCan</strong> (Ressources naturelles Canada)</li>
          <li><strong>OSB</strong> (Bureau du surintendant des faillites)</li>
          <li><strong>PBC</strong> (Commission des libérations conditionnelles du Canada)</li>
          <li><strong>PC</strong> (Parcs Canada)</li>
          <li><strong>PCH</strong> (Patrimoine canadien)</li>
          <li><strong>PCO</strong> (Bureau du Conseil privé)</li>
          <li><strong>PHAC</strong> (Agence de la santé publique du Canada)</li>
          <li><strong>PS</strong> (Sécurité publique Canada)</li>
          <li><strong>PSC</strong> (Commission de la fonction publique du Canada)</li>
          <li><strong>SSC</strong> (Services partagés Canada)</li>
          <li><strong>PSPC</strong> (Services publics et Approvisionnement Canada)</li>
          <li><strong>RCMP</strong> (Gendarmerie royale du Canada)</li>
          <li><strong>StatCan</strong> (Statistique Canada)</li>
          <li><strong>TBS</strong> (Secrétariat du Conseil du Trésor du Canada)</li>
          <li><strong>TC</strong> (Transports Canada)</li>
          <li><strong>VAC</strong> (Anciens Combattants Canada)</li>
          <li><strong>WAGE</strong> (Femmes et Égalité des genres Canada)</li>
          <li><strong>WD</strong> (Diversification de l'économie de l'Ouest Canada)</li>
        </ul>
        <h4><span class="label label-primary">Recommandé</span> Ajouter une valeur masquée d'un &laquo;&nbsp;Thème&nbsp;&raquo; dans le code de l'outil de rétroaction</h4>
        <p>Ceci peut vous être utile si vous souhaitez télécharger de la rétroaction pour des pages de tout un thème en même temps.</p>
        <p>Dans la plupart des cas, vous devriez inclure le thème &laquo;&nbsp;Canada.ca&nbsp;&raquo; pour votre contenu (vous trouverez la liste complète ci-dessous).</p>
        <p>Il s'agit d'une valeur unilingue. Entrez la valeur du thème en anglais, tant pour vos pages en anglais que celles en français.</p>
        <h5>Thèmes Canada.ca</h5>
        <ul>
          <li><strong>AboutGov</strong> (À propos du gouvernement)</li>
          <li><strong>Benefits</strong> (Prestations)</li>
          <li><strong>Business</strong> (Entreprises)</li>
          <li><strong>CanadaTheWorld</strong> (Canada et le monde)</li>
          <li><strong>Culture</strong> (Culture)</li>
          <li><strong>Defense</strong> (Défense)</li>
          <li><strong>Environment</strong> (Environnement)</li>
          <li><strong>Health</strong> (Santé)</li>
          <li><strong>Immigration</strong> (Immigration)</li>
          <li><strong>Indigenous</strong> (Autochtones)</li>
          <li><strong>Jobs</strong> (Emplois)</li>
          <li><strong>Money</strong> (Argent)</li>
          <li><strong>Policing</strong> (Police, justice et urgences)</li>
          <li><strong>PublicService</strong> (Service public)</li>
          <li><strong>Science</strong> (Science)</li>
          <li><strong>Taxes</strong> (Impôts)</li>
          <li><strong>Transport</strong> (Transport)</li>
          <li><strong>Travel</strong> (Voyage)</li>
          <li><strong>Veterans</strong> (Vétérans)</li>
        </ul>
        <p>Si vous souhaitez ajouter un nouveau thème qui n'apparaît pas dans la visionneuse de rétroaction, contactez le Bureau de la transformation numérique. Nous l'ajouterons pour vous à la visionneuse de rétroaction.</p>
        <p>Adresse courriel&nbsp;: <a href="maito:{{ site.emails.dto }}">{{ site.emails.dto }}</a></p>
        <h4><span class="label label-warning">Optional</span> Ajouter une valeur masquée &laquo;&nbsp;Section&nbsp;&raquo; dans le code de l'outil de rétroaction</h4>
        <p>Ceci peut vous être utile si vous souhaitez télécharger de la rétroaction pour plusieurs pages en même temps.</p>
        <p>Envisagez d'inclure cette valeur lorsque vous ajoutez l'outil de rétroaction à plusieurs pages relatives à un même sujet, comme &laquo;&nbsp;passeports&nbsp;&raquo; ou &laquo;&nbsp;assurance-emploi&nbsp;&raquo;.</p>
        <p>Il s'agit d'une valeur unilingue. Entrez la valeur de section en anglais, tant pour vos pages en anglais que celles en français.</p>
        <p>Si vous souhaitez ajouter une nouvelle valeur &laquo;&nbsp;Section&nbsp;&raquo; qui n'apparaît pas dans la visionneuse de rétroaction, contactez le Bureau de la transformation numérique. Nous l'ajouterons pour vous à la visionneuse de rétroaction.</p>
        <p>Adresse courriel&nbsp;: <a href="maito:{{ site.emails.dto }}">{{ site.emails.dto }}</a></p>
        <h4><span class="label label-warning">Optionnel</span> Lien de contact</h4>
        <p><strong>Envisagez uniquement d'ajouter un lien de contact si</strong> vous avez essayé de clarifier le contenu de la page concernant la façon de contacter le programme ou service et que les utilisateurs utilisent toujours l'outil de rétroaction pour obtenir une réponse propre à leur situation.</p>
      </details>
    </div>
  </div>
  <section id="guidance">
    <h3>Accéder à une rétroaction et l'analyser</h3>
    <p>Il est possible d'afficher une rétroaction et de la télécharger en format CSV ou Excel, à tout moment, au moyen du site Web de la visionneuse de rétroactions.</p>
    <p>La visionneuse de rétroactions est un environnement protégé par un mot de passe disponible pour tous ceux et toutes celles qui participent à la rétroaction sur la page. Communiquez avec le BTN afin d'accéder au site.</p>
    <p>Adresse courriel&nbsp;: <a href="maito:{{ site.emails.dto }}">{{ site.emails.dto }}</a></p>
    <p><a href="/retroaction/">Document d'orientation complet sur l'utilisation de Rétroaction GC et l'analyse connexe</a></p>
  </section>
</section>
<section id="recherche-et-justification">
  <h2>Recherche et justification</h2>
  <h3>Constatations découlant de la recherche</h3>
  <p><a href="https://blogue.canada.ca/2020/10/09/recueillir-la-retroaction.html">Billet de blogue&nbsp;: Recueillir la rétroaction, trouver les problèmes</a></p>
  <h3>Justification stratégique</h3>
  <p>La Ligne directrice sur les services et le numérique exige que la <a href="https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/ligne-directrice-services-numerique.html#ToC2_2">rétroaction des clients</a> fasse partie intégrante de la conception des services et des produits. Celle-ci peut prendre plusieurs formes, y compris au moyen de Rétroaction GC.</p>
</section>
