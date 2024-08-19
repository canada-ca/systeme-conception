---
altLangPage: "https://design.canada.ca/"
date: 2024-02-23
dateModified: 2024-07-02
description: "Instructions relatives aux métadonnées visant à améliorer la trouvabilité d’informations sur les pages Web Canada.ca"
keywords: "métadonnées, que sont les métadonnées, mots-clés, recherche de mots-clés, trouvabilité"
section-title: "Architecture de l’information et trouvabilité"
title: "Améliorer les titres et les métadonnées à des fins de trouvabilité"
---
<style>
  pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */      
    word-break: keep-all;  /* Internet Explorer 5.5+ */

}
</style>
<p>Utilisez ces instructions pour écrire des titres et métadonnées efficaces. Cela peut permettre aux gens de trouver plus facilement le contenu du gouvernement du Canada, que ce soit par le biais des moteurs de recherche sur Internet (comme Google ou Bing) ou par celui du moteur de recherche du site Web Canada.ca.</p>
<h2>Sur cette page</h2>
<ul>
    <li><a href="#m1">Métadonnées et trouvabilité pour Canada.ca</a></li>
    <li><a href="#m2">Rédaction de contenu efficace pour les éléments  &lt;title&gt; et &lt;h1&gt; elements</a></li>
    <li><a href="#m3">Rédaction de métadonnées de description efficaces</a></li>
    <li><a href="#m4">Ajout de &lt;keywords&gt; pour la recherche sur le site Canada.ca</a></li>
    <li><a href="#m5">Établissement de priorités concernant les efforts d’optimisation pour la recherche</a></li>
</ul>
<section id="m1">
    <h2>Métadonnées et trouvabilité pour Canada.ca</h2>
    <p>
        Les <strong>métadonnées</strong> sont des données décrivant les données. Ce sont des renseignements sur le contenu de votre page. On peut comparer cela à la fiche d’un livre dans le catalogue d’une bibliothèque, qui fournirait les données clés sur l’ouvrage, comme le nom de l’auteur, le titre, la description ou encore la date de publication. Les métadonnées permettent de décrire chaque page Web de manière unique, mais selon une méthode uniforme. 
    </p>
    <p>Tous les éléments compris dans la balise d’en-tête d’un document HTML sont des métadonnées et sont invisibles sur la page Web elle-même. Seul le contenu de la balise &lt;body&gt; du document s’affiche dans un navigateur.</p>
    <p>
        Le contenu de certaines métadonnées est utilisé par les moteurs de recherche pour classer les résultats et pour déterminer quel contenu afficher sur une page de résultats des moteurs de recherche. L’amélioration de vos métadonnées contribue aux efforts d’optimisation pour les moteurs de recherche. Les présentes instructions mettent l’accent sur la rédaction efficace de ces métadonnées.
    </p>
    <p>
        La <strong>trouvabilité</strong> est la facilité avec laquelle une personne peut trouver ce qu’elle cherche en ligne. C’est la qualité d’un élément d’être localisable ou navigable; la facilité à trouver une ressource (une page Web) et la façon dont un système (un site Web) prend en charge la navigation et la recherche.
    </p>
    <p>
        Il est nécessaire de bien comprendre les objectifs des utilisateurs et utilisatrices pour optimiser le contenu et les métadonnées en vue de leur trouvabilité. Cela inclut de savoir quels termes les gens utilisent pour trouver votre contenu. Vous devriez intégrer ces mots-clés au contenu et aux métadonnées de la page. Si vous avez accès à des sources primaires (entrevues, études sur l’utilisabilité, tickets de soutien, courriels, transcriptions de centres d’appels, etc.), utilisez ces sources pour déterminer vos mots-clés. Vous pouvez également utiliser des outils de recherche de mots-clés en ligne. 
    </p>
    <p>Les instructions de cette page vous aideront à comprendre comment utiliser au mieux vos mots-clés dans les métadonnées.</p>
</section>
<section id="m2">
    <h2>Rédaction de contenu efficace pour les éléments &lt;title&gt; et &lt;h1&gt;</h2>
    <p>Dans l’en-tête de la page, la métadonnée &lt;title&gt;  (également appelée titre HTML ou balise de titre) ressemble à ceci&nbsp;:</p>
    <div class="row">
        <div class="col-md-8 mrgn-bttm-md">
            <pre><code>
   &lt;title&gt;Possibilités de commercialisation et de délivrance de licences&lt;/title&gt;

</code></pre>
        </div>
    </div>
    <p>Vous pouvez également inclure&nbsp;:</p>
    <div class="row">
        <div class="col-md-8">
            <pre><code>
   &lt;meta name="dcterms.title" content="Possibilités de commercialisation et de délivrance de licences"&gt;

</code></pre>
        </div>
    </div>
    <p>Si vous utilisez ces deux options, le contenu devrait être le même. En utilisant les deux options, vous vous assurez que votre page est optimisée pour la visibilité sur les moteurs de recherche tout en respectant les normes établies en matière de métadonnées.</p>
    <h3>La balise &lt;title&gt;</h3>
    <p>La balise &lt;title&gt; est obligatoire sur toutes les pages. Son objectif premier est de définir le titre de la page s’affichant dans l’onglet du navigateur.</p>
    <p>
        La balise &lt;title&gt; est le champ le plus important pour le classement des résultats de recherche. Les moteurs de recherche peuvent afficher le contenu de la balise &lt;title&gt; sous la forme d’un lien bleu cliquable sur la page de résultats des moteurs de recherche. Selon la façon dont ils interprètent l’objectif de l’utilisateur, Google et les autres moteurs de recherche peuvent inclure, dans le texte du lien affiché dans la page de résultats, d’autres éléments de contenu de la page. Le moteur de recherche de Canada.ca obtiendra toujours le lien à partir de la balise &lt;title&gt;.
    </p>
    <p>Le contenu des balises &lt;title&gt; est également utilisé dans les publications de médias sociaux, les onglets de navigateur et les signets.
</p>
    <p>
        <strong>Remarque&nbsp;</strong> Lorsque vous créez une page dans AEM, la mention « - Canada.ca » est automatiquement ajoutée à la fin de votre balise de titre. Cela aide les gens à déterminer rapidement d’où vient le contenu lorsqu’une page leur est transmise. Si votre contenu n’est pas dans AEM, vous pouvez ajouter manuellement cette balise à votre champ de titre.
    </p>
    <div class="row">
        <div class="col-md-8">
            <pre><code>
   &lt;title&gt;Amélioration continue du contenu Web - Canada.ca&lt;/title&gt;

</code></pre>
        </div>
    </div>
    <h3>Le titre dcterms</h3>
    <p>
        Le titre dcterms est optionnel. Ce champ de métadonnées fait partie de la Dublin Core Metadata Initiative (projet de métadonnées du Dublin Core). Il permet de fournir des métadonnées supplémentaires pouvant être utilisées par certains systèmes pour cataloguer et indexer votre page. Si vous utilisez ce champ, son contenu doit être identique à votre champ &lt;title&gt;.
    </p>
    <h3>Coordination du contenu des balises &lt;title&gt; et &lt;h1&gt;</h3>
    <p>
        Les pages Web exigent à la fois une métadonnée &lt;title&gt; et un titre visible, généralement un titre &lt;h1&gt;. Il est utile de penser à ces deux titres dès le début du processus de création. Ils sont souvent identiques, mais n’ont pas nécessairement à l’être. Dans certains cas, il est important que le texte de ces deux titres soit différent.
    </p>
    <p>Exemple&nbsp;:</p>
    <div class="row">
        <div class="col-md-8">
            <pre><code>&lt;head&gt;
   &lt;title&gt;Technologies gouvernementales : Possibilités de commercialisation et de délivrance de licences&lt;/title&gt;
&lt;/head&gt;
  
  &lt;body&gt;
  &lt;h1&gt;Possibilités de commercialisation et de délivrance de licences&lt;/h1&gt;
</code></pre>
        </div>
    </div>
    <h3>Conseils pour des titres efficaces</h3>
    <ul>
        <li>Créez le contenu de vos balises &lt;title&gt; content et &lt;h1&gt; au même moment.</li>
        <li>Décrivez le contenu de la page de manière aussi succincte que possible.</li>
        <li>Placez les mots-clés en début de phrase.</li>
        <li>Limitez vos titres à 60 caractères, espaces comprises.
          <ul>
          <li>Les titres plus longs sont plus susceptibles d’être tronqués sur la page de résultats des moteurs de recherche, en particulier sur mobile.</li>
          </ul>
        </li>
        <li>N’incluez des acronymes que s’ils sont répandus et définissez-les.</li>
        <li>Prévisualisez vos titres.
          <ul>
          <li>Utilisez un outil en ligne comme le <a href="https://moz.com/learn/seo/title-tag">testeur de balise de titre</a> de Moz (en anglais seulement), qui est gratuit. Cela vous donnera une idée de l’apparence de vos balises de titre au sein de résultats de recherche.</li>
          </ul>
        </li>
        <li>Évitez les doublons de titres.</li>
    </ul>
    <h3>Évitement des doublons de titres dans les résultats de recherche</h3>
    <ul>
        <li>
            Il existe de nombreux doublons de balises &lt;title&gt; dans le contenu Canada.ca. Le contenu de la balise &lt;title&gt; peut s’afficher comme un lien cliquable sur une page de résultats de recherche. Les doublons de titre peuvent donc rendre difficile la distinction entre différentes pages pour les utilisateurs et utilisatrices.
        </li>
        <li>
           Les doublons de titres se produisent parce qu’il existe des pages communes à la plupart des institutions du GC. Utilisez la recherche sur le site de Canada.ca pour vérifier si le titre de la page que vous êtes en train de créer est déjà utilisé.
            <ul>
                <li>Lors de votre recherche, saisissez le texte du titre entre des guillemets anglais (“titre de votre page“). Cela indique au moteur de recherche de chercher ces mots exacts, dans l’ordre.</li>
            </ul>
        </li>
        <li>Le contenu de la balise &lt;title&gt; est utilisé pour préciser ce que les utilisateurs et utilisatrices verront sur la page de résultats des moteurs de recherche. Le texte de la balise &lt;h1&gt; n’a pas besoin d’être modifié, car d’autres indices contextuels seront visibles sur la page elle-même.</li>
        <li>
            Voici des techniques recommandées pour différents types de pages présentant souvent des doublons de titres&nbsp;:
            <ul>
                <li>
                    Les titres de pages courants ou ambigus pour le contenu d’organismes, comme « Contactez-nous », « Transparence » ou toute autre publication standard que les ministères ont l’obligation de créer doivent inclure le nom du ministère dans les balises de titres.
                    <table class="table table-condensed table-bordered small">
                        <tr>
                            <th>Au lieu de&nbsp;:</th>
                            <th>Utilisez&nbsp;:</th>
                        </tr>
                        <tr>
                            <td>
                                Contactez-nous<br />
                                <div>
            <pre><code>&lt;title&gt;Contactez-nous&lt;/title&gt;
</code></pre>
    </div>
                            </td>
                              <td>
                                Contactez Agriculture et Agroalimentaire Canada<br />
                                <div>
            <pre><code>&lt;title&gt;Contactez Agriculture et Agroalimentaire Canada&lt;/title&gt;
</code></pre>
    </div>
                            </td>
                        </tr>
                        <tr>
                             <td>
                                Plan ministériel 2022-2023<br />
                                <div>
            <pre><code>&lt;title&gt;Plan ministériel 2022-2023&lt;/title&gt;
</code></pre>
    </div>
                            </td>
                            <td>
                                Agence du revenu du Canada&nbsp;: Plan ministériel 2022-2023<br />
                                <div>
            <pre><code>&lt;title&gt;Agence du revenu du Canada : Plan ministériel 2022-2023&lt;/title&gt;
</code></pre>
    </div>
                            </td>
                        </tr>
                    </table>
                </li>
                <li>
                    Les titres classiques utilisés dans le cadre de publications doivent comprendre le nom de la publication avant le titre de la page.
                    <table class="table table-condensed table-bordered small">
                        <tr>
                            <th>Au lieu de&nbsp;:</th>
                            <th>Utilisez&nbsp;:</th>
                        </tr>
                        <tr>
                            <td>
                                Introduction<br />
                                 <div>
            <pre><code>&lt;title&gt;Introduction&lt;/title&gt;
</code></pre>
    </div>
                            </td>
                            <td>
                                Mesures fédérales pour une croissance économique propre&nbsp;: Introduction<br />
                                 <div>
            <pre><code>&lt;title&gt;Mesures fédérales pour une croissance économique propre : Introduction&lt;/title&gt;
</code></pre>
    </div>
                            </td>
                        </tr>
                    </table>
                </li>
                <li>
                    Common service pages should have the name of the service preceding the page title
                    <table class="table table-condensed table-bordered small">
                        <tr>
                            <th>Au lieu de&nbsp;:</th>
                            <th>Utilisez&nbsp;:</th>
                        </tr>
                        <tr>
                            <td>
                                Comment présenter une demande<br />
                                <div>
            <pre><code>&lt;title&gt;Comment présenter une demande&lt;/title&gt;
</code></pre>
    </div>
                            </td>
                            <td>
                                Permis d’études&nbsp;: Comment présenter une demande<br />
                                <div>
            <pre><code>&lt;title&gt;Permis d’études : Comment présenter une demande&lt;/title&gt;
</code></pre>
    </div>
                            </td>
                        </tr>
                    </table>
                </li>
            </ul>
        </li>
    </ul>
</section>
<section id="m3">
    <h2>Rédaction de métadonnées de description efficaces</h2>
    <p>Dans l’en-tête de la page, l’élément &lt;description&gt; ressemble à ceci&nbsp;:</p>
    <mark><div class="row">
        <div class="col-md-8">
            <pre><code>
   &lt;meta name="description" content="Apply to travel, study, work or immigrate to Canada. Seek citizenship, permanent residency, or refugee protection."&gt;

</code></pre>
        </div>
    </div>
    <p>Vous pouvez également inclure&nbsp;:</p>
    <div class="row">
        <div class="col-md-8">
            <pre><code>
   &lt;meta name="dcterms.description" content="Apply to travel, study, work or immigrate to Canada. Seek citizenship, permanent residency, or refugee protection."&gt;

</code></pre>
        </div>
    </div></mark>
    <p>Si vous utilisez ces deux options, le contenu devrait être le même. En utilisant les deux options, vous vous assurez que votre page est optimisée pour la visibilité sur les moteurs de recherche tout en respectant les normes établies en matière de métadonnées.</p>
    <p>
        La métadonnée de description doit résumer avec exactitude le contenu de votre page et indiquer aux utilisateurs et utilisatrices les renseignements qu’ils et elles y trouveront ou les actions qu’ils et elles pourront y effectuer. Une bonne description a plus de chances d’être affichée sur une page de résultats des moteurs de recherche, où elle pourra aider les utilisateurs et utilisatrices à déterminer si le contenu est pertinent. Comme pour la balise &lt;title&gt;, si Google ou d’autres moteurs de recherche déterminent que du contenu sur la page correspond mieux à l’objectif de l’utilisateur ou utilisatrice, ils afficheront ce contenu. 
    </p>
    <h3>Instructions pour la rédaction des métadonnées de description</h3>
    <p>La métadonnée de description DOIT&nbsp;:</p>
    <ul>
        <li>Inclure une ou deux phrases faciles à lire qui résument le thème de la page et la façon dont ce contenu peut aider les gens;</li>
        <li>Inclure des mots-clés utilisés par votre public;</li>
        <li>Être brève (pas plus de 130 caractères). Les conseils relatifs à l’optimisation pour les moteurs de recherche recommandent généralement une longueur de 160 caractères. Une description plus brève permet de prévoir l’espace nécessaire aux traductions en français;</li>
        <li>N’inclure des acronymes et des abréviations que si ces éléments sont répandus, et inclure leur signification.</li>
    </ul>
    <p>La métadonnée de description NE DOIT PAS&nbsp;:</p>
    <ul>
        <li>Répéter le texte du titre;</li>
        <li>Utiliser une liste de mots-clés comme description;</li>
        <li>Être la même sur plusieurs pages.</li>
    </ul>
    <p>Pour en savoir plus&nbsp;:</p>
    <ul>
        <li>
            <a href="https://www.digitalprofession.gov.au/content-strategy/search-engine-optimisation/on-page-seo">Improve on-page SEO | Australian Government</a> (en anglais)&nbsp;: Un guide pratique de techniques de référencement éprouvées, expliquant notamment comment écrire de bonnes métadescriptions. 
        </li>
    </ul>
</section>
<section id="m4">
    <h2>Ajout de &lt;keywords&gt; pour la recherche sur le site Canada.ca</h2>
    <p>Le moteur de recherche de Canada.ca utilise un troisième élément de métadonnées&nbsp:; &lt;keywords&gt;. Cet élément n’est pas utilisé par Google ou les autres moteurs de recherche. Il ressemble à ceci&nbsp;:</p>
    <div class="row">
        <div class="col-md-8">
            <pre><code>
   &lt;meta name="keywords" content="impôts, paiement, impôt sur le revenu, taxes et impôts d’entreprise, faire un paiement, paiements à l’ARC, payer l’impôt sur le revenu"&gt;

</code></pre>
        </div>
    </div>
    <h3>Instructions pour l’ajout de mots-clés</h3>
    <ul>
        <li>Ne saisissez pas des mots se trouvant déjà dans le texte, car cela n’améliorera pas le classement de la page.</li>
        <li>
            Ajoutez les termes courants que les gens utilisent pour leurs recherches, mais que vous n’utilisez peut-être pas dans votre contenu.
            <ul>
                <li>Exemple : « taxe sur le carbone » pour « tarification du carbone ».</li>
            </ul>
        </li>
        <li>Ajoutez des variantes courantes aux termes, comme d’anciens noms de ministères ou de programme, des abréviations et des acronymes.</li>
        <li>Choisissez des termes spécifiques au contenu de la page : n’incluez pas de concepts généraux qui pourraient s’appliquer à de nombreuses autres pages.</li>
        <li>Vous pouvez inclure des mots-clés d’un seul mot ou de plusieurs mots.</li>
        <li>Dans AEM, vos mots-clés ne doivent pas dépasser 400 caractères en tout. La limite peut être différente dans d’autres systèmes de gestion de contenu. Vous devriez inclure 5 à 10 mots-clés.</li>
    </ul>
</section>
<section id="m5">
    <h2>Établissement de priorités concernant les efforts d’optimisation pour la recherche</h2>
    <p>
        Vous pouvez rendre vos pages Web plus faciles à trouver en concentrant vos efforts sur les pages les plus importantes pour les personnes visitant Canada.ca. Examinez à la fois les analyses de vos pages et les analyses des recherches pour déterminer quelles pages sont les plus visitées et définir ainsi vos priorités en matière d’amélioration de métadonnées.
    </p>
    <p>Nous vous recommandons d’optimiser les métadonnées sur les types de pages suivants&nbsp;:</p>
    <ul>
        <li>Page des thèmes et des sujets</li>
        <li>Pages permettant de réaliser des tâches principales</li>
        <li>Pages de connexion</li>
        <li>Pages d’accueil institutionnelles</li>
        <li>Pages contactez-nous</li>
    </ul>
</section>
