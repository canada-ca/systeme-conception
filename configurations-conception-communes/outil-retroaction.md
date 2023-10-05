---
altLangPage: https://design.canada.ca/common-design-patterns/page-feedback.html
date: "2023-10-06"
dateModified: "2023-10-06"
description: "L’outil de rétroaction est une configuration facultative pour recueillir la rétroaction de l’expérience sur une page."
title: "Outil de rétroaction sur la page"
---
<p class="small">Dernière mise à jour : 2023-10-06</p>
<p><span class="label label-warning">Facultatif</span></p>
<p>L’outil de rétroaction est une configuration <strong>facultative</strong> pour recueillir la rétroaction de l’expérience sur une page. Lorsqu’il est utilisé, il apparaît en bas de la page, juste avant la date de modification.</p>
<div class="mrgn-tp-md mrgn-bttm-md">
  <figure class="mrgn-tp-md mrgn-bttm-lg"><img src="/images/page-feedback-fr.png" class="img-responsive" alt="" /></figure>
</div>
<h2 id="sur-cette-page">Sur cette page</h2>
<ul>
  <li><a href="#utiliser">Quand l’utiliser</a></li>
  <li><a href="#quoi-eviter">Quoi éviter</a></li>
  <li><a href="#contenu-et-conception">Contenu et conception</a></li>
  <li><a href="#comment-proceder">Comment procéder à la mise en œuvre</a></li>
  <li><a href="#recherche-et-justification">Recherche et justification</a></li>
</ul>
<section id="utiliser">
  <h2>Quand l’utiliser</h2>
  <p>Envisagez d’utiliser l’outil de rétroaction sur la page pour :</p>
  <ul>
    <li>Découvrir des problèmes propres à la page qui modifient votre note sur le sondage sur la réussite des tâches du gouvernement du Canada (GC).</li>
    <li>Rechercher des problèmes sur des pages que vous prévoyez de traiter ultérieurement.</li>
    <li>Déterminer si les pages nouvelles ou existantes répondent aux besoins des utilisateurs.</li>
    <li>Déterminer les problèmes émergents.</li>
    <li>Assurer le suivi des améliorations de la page après leur mise en ligne.</li>
  </ul>
</section>
<section id="quoi-eviter">
  <h2>Quoi éviter</h2>
  <p>Évitez d’utiliser l’outil de rétroaction sur la page, dans des pages pour lesquelles vous ne prévoyez pas de surveiller les commentaires et prendre des mesures. Nous vous déconseillons également d’utiliser l’outil dans des environnements sécurisés ou sur des pages contenant des renseignements thématiques sensibles.</p>
  <p><a href="/retroaction/quand.html#comment-ne-pas-utiliser-loutil-de-r%C3%A9troaction">Autres comportements à éviter en analysant une rétroaction</a></p>
</section>
<section id="contenu-et-conception">
  <h2>Contenu et conception</h2>
  <p>L’outil de rétroaction sur la page invite les visiteur·se·s à effectuer les actions suivantes :</p>
  <ul>
    <li>Indiquer s’ils ou elles ont trouvé ce qu’ils ou elles cherchaient (oui ou non)</li>
    <li>Fournir leur rétroaction en décrivant le problème</li>
  </ul>
  <p>Placez l’outil en bas de la page, juste avant la date de modification. Alignez-le à gauche de la page, avant l’élément « Partagez cette page ». Vous pouvez choisir d’utiliser l’outil de rétroaction sur la page au lieu de la configuration « Signaler un problème sur cette page ». Il n’est pas obligatoire d’ajouter l’outil de rétroaction sur la page lors du retrait de la configuration « Signaler un problème sur cette page ».</p>
  <p>La configuration de rétroaction comporte trois états :</p>
  <ul>
    <li>La question « Avez-vous trouvé ce que vous cherchiez? » accompagnée des boutons « Oui » et « Non »</li>
    <li>Le champ de texte destiné à la rétroaction (avec la possibilité d’ajouter un lien de contact personnalisable)</li>
    <li>Le message de remerciement</li>
  </ul>
  <p>Une documentation détaillée est également disponible pour l’utilisation de cette configuration et pour l’analyse de la rétroaction.</p>
  <p><a href="/retroaction/">Outil de rétroaction sur la page (Analyses, sondage et commentaires)</a></p>
  <h3>Spécifications de contenu</h3>
  <p>Lorsque vous ajoutez pour la première fois l’outil de rétroaction à votre page, utilisez l’option par défaut, sans le lien de contact.</p>
  <p><strong>Envisagez uniquement d’ajouter un lien de contact si</strong> vous avez essayé de clarifier le contenu de la page concernant la façon de contacter le programme ou service et que les utilisateur·rice·s utilisent toujours l’outil de rétroaction pour obtenir une réponse propre à leur situation.</p>
  <p>Le lien peut mener vers une page HTML ou vers une adresse courriel.</p>
  <p>Veillez à ce que le texte du lien soit court. Nous recommandons la formulation « Contacter [nom du service] ».</p>
  <h3>Interactions</h3>
  <p>La configuration de rétroaction comporte trois états :</p>
  <ul>
    <li>Une question « Avez-vous trouvé ce que vous cherchiez? »</li>
    <li>Un champ de texte où saisir la rétroaction</li>
    <li>Un message de remerciement</li>
  </ul>
  <p>Pour tous ces états, l’utilisateur·rice reste sur la même page HTML en interagissant avec la configuration de rétroaction.</p>
  <p><strong>Sur la page</strong>, la configuration affiche la question « Avez-vous trouvé ce que vous cherchiez? » et affiche les boutons « Oui » et « Non ».</p>
  <p><strong>Si l’utilisateur·rice choisit « Non »</strong>, il lui est demandé de fournir davantage de renseignements sur son expérience.</p>
  <p>Cela commence par un titre indiquant « Veuillez fournir plus de détails », suivi du texte « Vous ne recevrez aucune réponse. N’incluez pas de renseignements personnels (téléphone, courriel, NAS, renseignements financiers, médicaux ou professionnels). Maximum de 300 caractères ». Une fois que l’utilisateur·rice a sélectionné « Soumettre », un message de remerciement s’affiche.</p>
  <p>Vient ensuite un champ de texte ouvert permettant de recueillir la rétroaction.</p>
  <p>Si l’option de contact est utilisée, un lien permettant de contacter le service apparaît dans une configuration de style développer/réduire intitulée « Vous avez besoin d’une aide urgente pour résoudre un problème? Contactez-nous » située juste avant le titre et le champ de texte ouvert.</p>
  <p>L’utilisateur·rice utilise le bouton « Soumettre » pour envoyer sa rétroaction. Une fois que l’utilisateur·rice a sélectionné « Soumettre », un message de remerciement accompagné d’une coche verte s’affiche pour indiquer que la rétroaction a bien été envoyée.</p>
  <p><strong>Si un·e utilisateur·rice sélectionne « Oui »</strong>, seul un message de remerciement s’affiche.</p>
  <h3>Spécifications de conception</h3>
  <p>Lorsqu’il est utilisé, l’outil de rétroaction sur la page remplace la configuration « Signaler un problème sur la page ».</p>
  <h4>Encadré gris</h4>
  <ul>
    <li>Type d’encadré : well mrgn-bttm-0</li>
  </ul>
  <h4>Typographie</h4>
  <ul>
    <li>Titre : taille de police : 16 px</li>
    <li>Corps du texte : petite taille de police : 87 %</li>
  </ul>
  <h4>Boutons</h4>
  <ul>
    <li>Positionnement : Les boutons se situent à droite de la question « Avez-vous trouvé ce que vous cherchiez? » Le bouton « Oui » se trouve à gauche du bouton « Non ».</li>
    <li>Type de bouton : btn btn-primary</li>
  </ul>
  <h4>Icône coche du message de remerciement</h4>
  <ul>
    <li>Positionnement : À gauche du message « Merci »</li>
    <li>Icône coche : glyphicon glyphicon-ok</li>
    <li>Couleur de la coche : success class</li>
  </ul>
  <h3>Exemples visuels</h3>
  <div class="row">
    <div class="col-md-8">
      <div class="mrgn-tp-md mrgn-bttm-md">
        <figure class="mrgn-tp-md mrgn-bttm-lg">
          <figcaption>
            <h4>1. Première vue de l’outil de rétroaction</h4>
          </figcaption>
          <img src="/images/page-feedback-fr.png" class="img-responsive" alt="1. Première vue de l’outil de rétroaction. Version texte ci-dessous :" />
          <details>
            <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l’image :</summary>
            <p class="mrgn-tp-md">Sur la page, la section consacrée à la rétroaction se trouve en bas de la page Web, juste au-dessus de la date de modification. Un petit encadré gris demande « Avez-vous trouvé ce que vous cherchiez? » et affiche les boutons « Oui » et « Non ».</p>
          </details>
        </figure>
      </div>
      <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption>
          <h4>2a. Vue par défaut après avoir sélectionné « Non »</h4>
        </figcaption>
        <img src="/images/description-fr.jpg" class="img-responsive" alt="2a. Vue par défaut après avoir sélectionné Non. Version texte ci-dessous :" />
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l’image :</summary>
          <p class="mrgn-tp-md">Après l’interaction avec le bouton « Non », la question est remplacée par un écran comportant un champ de texte. Celui-ci affiche le titre « Veuillez fournir plus de détails », suivi des instructions de ne pas inclure de renseignements personnels : « Vous ne recevrez aucune réponse. N’incluez pas de renseignements personnels (téléphone, courriel, NAS, renseignements financiers, médicaux ou professionnels). Maximum de 300 caractères ». Un petit champ de texte est suivi d’un bouton « Soumettre ».</p>
        </details>
      </figure>
      <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption>
          <h4>2b. Vue optionnelle après avoir sélectionné « Non » avec l’option de contact</h4>
          <p>La configuration de style développer/réduire « Vous avez besoin d’une aide urgente pour résoudre un problème? Contactez-nous » sera réduite par défaut.La configuration de style développer/réduire « Vous avez besoin d’une aide urgente pour résoudre un problème? Contactez-nous » sera réduite par défaut.</p>
        </figcaption>
        <img src="/images/urgent-help-fr.png" class="img-responsive" alt="2b. Vue optionnelle après avoir sélectionné Non avec l’option de contact. Version texte ci-dessous :" />
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l’image :</summary>
          <p class="mrgn-tp-md">Après l’interaction avec le bouton « Non », la question est remplacée par un écran comportant un champ de texte.</p>
          <p>Dans l’option de contact, une configuration de style développer/réduire porte le titre « Vous avez besoin d’une aide urgente pour résoudre un problème? Contactez-nous. » Lorsque le texte est développé, un lien personnalisable permettant de contacter le service s’affiche.</p>
          <p>Après la configuration développer/réduire vient le titre « Veuillez fournir plus de détails », suivi des instructions de ne pas inclure de renseignements personnels : « Vous ne recevrez aucune réponse. N’incluez pas de renseignements personnels (téléphone, courriel, NAS, renseignements financiers, médicaux ou professionnels). Maximum de 300 caractères ». Un petit champ de texte est suivi d’un bouton « Soumettre ».</p>
        </details>
      </figure>
      <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption>
          <h4>3. Vue après avoir sélectionné « Oui » ou après avoir soumis la rétroaction</h4>
        </figcaption>
        <img src="/images/thank-you-fr.jpg" class="img-responsive" alt="3. Vue après avoir sélectionné Oui ou après avoir soumis la rétroaction. Version texte ci-dessous :" />
        <details>
          <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l’image :</summary>
          <p class="mrgn-tp-md">Lorsqu’un·e utilisateur·rice sélectionne « Yes » comme réponse à la première question ou lorsqu’il ou elle soumet sa rétroaction, un message de remerciement apparaît. Une icône coche verte apparaît, suivie du titre « Merci de vos commentaires »</p>
        </details>
      </figure>
    </div>
  </div>
</section>
<section id="comment-proceder">
  <h2>Comment procéder à la mise en œuvre</h2>
  <p>Ajoutez-le au bas d’une page de contenu, après le contenu de la page et avant la date de modification.</p>
  <div class="row">
    <div class="col-md-8">
      <h3>Outil de rétroaction pour les pages dans Adobe Experience Manager (AEM)</h3>
      <p>Utilisez ces instructions pour toutes les pages hébergées dans le service Web géré par Adobe.</p>
      <details>
        <summary>Instructions pour les pages AEM</summary>
        <h4>Add the feedback component</h4>
        <p><a href="#">Comment ajouter l’outil de rétroaction à votre page dans Adobe Experience Manager (AEM).</a> (Contenu interne, uniquement disponible sur GCPedia)</p>
        <h4><span class="label label-primary">Recommandé</span> Ajouter une valeur masquée « Thème » dans le code de l’outil de rétroaction</h4>
        <p>Ceci peut vous être utile si vous souhaitez télécharger de la rétroaction pour des pages de tout un thème en même temps.</p>
        <p>Dans la plupart des cas, vous devriez inclure le thème « Canada.ca » pour votre contenu (vous trouverez la liste complète ci-dessous).</p>
        <p>Il s’agit d’une valeur unilingue. Entrez la même valeur pour vos pages en anglais et en français.</p>
        <h5>Thèmes Canada.ca</h5>
        <ul>
          <li>About Gov (À propos du gouvernement)</li>
          <li>Benefits (Prestations)</li>
          <li>Business (Entreprises)</li>
          <li>CanadaTheWorld (Canada et le monde)</li>
          <li>Culture (Culture)</li>
          <li>Defense (Défense)</li>
          <li>Environment (Environnement)</li>
          <li>Health (Santé)</li>
          <li>Immigration (Immigration)</li>
          <li>Indigenous (Autochtones)</li>
          <li>Jobs (Emplois)</li>
          <li>Money (Argent)</li>
          <li>Policing (Politique)</li>
          <li>PublicService (Service public)</li>
          <li>Science (Science)</li>
          <li>Taxes (Impôts)</li>
          <li>Transport (Transport)</li>
          <li>Travel (Voyage)</li>
          <li>Veterans (Vétérans)</li>
        </ul>
        <p>Si vous souhaitez ajouter un nouveau thème qui n’apparaît pas dans la visionneuse de rétroaction, contactez le Bureau de la transformation numérique. Nous l’ajouterons pour vous à la visionneuse de rétroaction.</p>
        <p>Adresse courriel : <a href="maito:dto.btn@tbs-sct.gc.ca">dto.btn@tbs-sct.gc.ca</a></p>
        <h4><span class="label label-warning">Optionnel</span> Ajouter une valeur masquée « Section » dans le code de l’outil de rétroaction</h4>
        <p>Ceci peut vous être utile si vous souhaitez télécharger de la rétroaction pour plusieurs pages en même temps.</p>
        <p>Envisagez d’inclure cette valeur lorsque vous ajoutez l’outil de rétroaction à plusieurs pages relatives à un même sujet, comme « passeports » ou « assurance-emploi ».</p>
        <p>Il s’agit d’une valeur unilingue. Entrez la même valeur pour vos pages en anglais et en français.</p>
        <p>Si vous souhaitez ajouter une nouvelle valeur « Section » qui n’apparaît pas dans la visionneuse de rétroaction, contactez le Bureau de la transformation numérique. Nous l’ajouterons pour vous à la visionneuse de rétroaction.</p>
        <p>Adresse courriel : <a href="maito:dto.btn@tbs-sct.gc.ca">dto.btn@tbs-sct.gc.ca</a></p>
        <h4><span class="label label-warning">Optionnel</span> Lien de contact</h4>
        <p>Envisagez uniquement d’ajouter un lien de contact si vous avez essayé de clarifier le contenu de la page concernant la façon de contacter le programme ou service et que les utilisateur·rice·s utilisent toujours l’outil de rétroaction pour obtenir une réponse propre à leur situation.</p>
      </details>
    </div>
  </div>
  <div class="row">
    <div class="col-md-8">
      <h3>Code de l’outil de rétroaction pour les pages qui ne sont pas dans Adobe Experience Manager (AEM)</h3>
      <p>Utilisez ces instructions pour toutes les pages qui ne sont pas hébergées dans le service Web géré par Adobe.</p>
      <details>
        <summary>Instructions pour les pages qui ne sont pas dans AEM</summary>
        <h4>Ajout de l’outil de rétroaction</h4>
        <p>Insérez le code de l’outil de rétroaction à l’endroit où se trouve la configuration « Signaler un problème sur cette page » dans le code HTML de votre page.</p>
        <h4>Ajout des valeurs masquées obligatoires</h4>
        <p>Mise à jour des données pour les acronymes institutionnels (valeur unilingue).</p>
        <h5>Acronymes des institutions Canada.ca</h5>
        <ul>
          <li>AAC</li>
          <li>SCDATA</li>
          <li>ACSTA</li>
          <li>ACIA</li>
          <li>RCAANC</li>
          <li>GRSGC</li>
          <li>ASFC</li>
          <li>GCC</li>
          <li>CCG</li>
          <li>IRSC</li>
          <li>OPIC</li>
          <li>ARC</li>
          <li>CRTC</li>
          <li>ASC</li>
          <li>CSTC</li>
          <li>EFPC</li>
          <li>MPO</li>
          <li>MDN</li>
          <li>ECCC</li>
          <li>EDSC</li>
          <li>ACFC</li>
          <li>FIN</li>
          <li>Affaires mondiales Canada</li>
          <li>Santé Canada</li>
          <li>INFC</li>
          <li>IRCC</li>
          <li>SAC</li>
          <li>ISDE</li>
          <li>JUS</li>
          <li>BAC</li>
          <li>ONF</li>
          <li>CNRC</li>
          <li>RNCan</li>
          <li>BSF</li>
          <li>CLCC</li>
          <li>PC</li>
          <li>PCH</li>
          <li>BCP</li>
          <li>ASPC</li>
          <li>SP</li>
          <li>CFP</li>
          <li>SPC</li>
          <li>SPAC</li>
          <li>Gendarmerie royale du Canada</li>
          <li>StatCan</li>
          <li>SCT</li>
          <li>TC</li>
          <li>ACC</li>
          <li>FEGC</li>
          <li>DEO</li>
        </ul>
        <h4><span class="label label-primary">Recommandé</span> Ajouter une valeur masquée « Thème » dans le code de l’outil de rétroaction</h4>
        <p>Ceci peut vous être utile si vous souhaitez télécharger de la rétroaction pour des pages de tout un thème en même temps.</p>
        <p>Dans la plupart des cas, vous devriez inclure le thème « Canada.ca » pour votre contenu (vous trouverez la liste complète ci-dessous).</p>
        <p>Il s’agit d’une valeur unilingue. Entrez la même valeur pour vos pages en anglais et en français.</p>
        <h5>Thèmes Canada.ca</h5>
        <ul>
          <li>À propos du gouvernement</li>
          <li>Prestations</li>
          <li>Entreprises</li>
          <li>Canada et le monde</li>
          <li>Culture</li>
          <li>Défense</li>
          <li>Environnement</li>
          <li>Santé</li>
          <li>Immigration</li>
          <li>Autochtones</li>
          <li>Emplois</li>
          <li>Argent</li>
          <li>Politique</li>
          <li>Service public</li>
          <li>Science</li>
          <li>Impôts</li>
          <li>Transport</li>
          <li>Voyage</li>
          <li>Vétérans</li>
        </ul>
        <p>Si vous souhaitez ajouter un nouveau thème qui n’apparaît pas dans la visionneuse de rétroaction, contactez le Bureau de la transformation numérique. Nous l’ajouterons pour vous à la visionneuse de rétroaction.</p>
        <p>Adresse courriel : <a href="maito:dto.btn@tbs-sct.gc.ca">dto.btn@tbs-sct.gc.ca</a></p>
        <h4><span class="label label-warning">Optional</span> Ajouter une valeur masquée « Section » dans le code de l’outil de rétroaction</h4>
        <p>Ceci peut vous être utile si vous souhaitez télécharger de la rétroaction pour plusieurs pages en même temps.</p>
        <p>Envisagez d’inclure cette valeur lorsque vous ajoutez l’outil de rétroaction à plusieurs pages relatives à un même sujet, comme « passeports » ou « assurance-emploi ».</p>
        <p>Il s’agit d’une valeur unilingue. Entrez la même valeur pour vos pages en anglais et en français.</p>
        <p>Si vous souhaitez ajouter une nouvelle valeur « Section » qui n’apparaît pas dans la visionneuse de rétroaction, contactez le Bureau de la transformation numérique. Nous l’ajouterons pour vous à la visionneuse de rétroaction.</p>
        <p>Adresse courriel : <a href="maito:dto.btn@tbs-sct.gc.ca">dto.btn@tbs-sct.gc.ca</a></p>
        <h4><span class="label label-warning">Optionnel</span> Lien de contact</h4>
        <p><strong>Envisagez uniquement d’ajouter un lien de contact si</strong> vous avez essayé de clarifier le contenu de la page concernant la façon de contacter le programme ou service et que les utilisateur·rice·s utilisent toujours l’outil de rétroaction pour obtenir une réponse propre à leur situation.</p>
      </details>
      <details>
        <summary>Code pour l'outil de rétroaction sur la page</summary>
        <ul class="mrgn-tp-lg">
          <li><a href="https://wet-boew.github.io/GCWeb/sites/feedback/feedback-docs-fr.html">Configuration de l’outil de rétroaction sur la page (par défaut)</a></li>
          <li><a href="https://wet-boew.github.io/GCWeb/sites/feedback/feedback-docs-fr.html">Outil de rétroaction sur la page avec lien de contact</a></li>
        </ul>
      </details>
    </div>
  </div>
  <section id="guidance">
    <h3>Accéder à une rétroaction et l’analyser</h3>
    <p>Il est possible d’afficher une rétroaction et de la télécharger en format CSV ou Excel, à tout moment, au moyen du site Web de la visionneuse de rétroactions.</p>
    <p>La visionneuse de rétroactions est un environnement protégé par un mot de passe disponible pour tous ceux et toutes celles qui participent à la rétroaction sur la page. Communiquez avec le BTN afin d’accéder au site.</p>
    <p>Adresse courriel : <a href="maito:dto.btn@tbs-sct.gc.ca">dto.btn@tbs-sct.gc.ca</a></p>
    <p><a href="/retroaction/">Document d’orientation complet sur l’utilisation de l’outil de rétroaction sur la page et l’analyse connexe</a></p>
  </section>
</section>
<section id="recherche-et-justification">
  <h2>Recherche et justification</h2>
  <h3>Constatations découlant de la recherche</h3>
  <p><a href="https://blogue.canada.ca/2020/10/09/recueillir-la-retroaction.html">Billet de blogue : Recueillir la rétroaction, trouver les problèmes</a></p>
  <h3>Justification stratégique</h3>
  <p>La Ligne directrice sur les services et le numérique exige que la <a href="https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/ligne-directrice-services-numerique.html">rétroaction des clients</a> fasse partie intégrante de la conception des services et des produits. Celle-ci peut prendre plusieurs formes, y compris au moyen de l’outil de rétroaction sur la page.</p>
</section>
