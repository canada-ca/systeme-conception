---
altLangPage: https://design.canada.ca/common-design-patterns/contributors.html
date: '2024-09-24'
dateModified: '2025-12-03'
description: Utilisez la configuration collaborateurs pour lier les institutions, organismes ou encore les entités similaires responsables ou celles qui soutiennent le contenu de la page.
title: Collaborateurs
---
<p><strong>Dernière modification</strong>&nbsp;: {{ page.dateModified }}</p>
<div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl">
  <img src="../images/contributors-fr.png" class="img-responsive" alt="" />
</div>
<p>Utilisez la configuration collaborateurs pour lier les institutions, organismes ou encore les entités similaires responsables ou celles qui soutiennent le contenu de la page.</p>

<section>
  <h2>Sur cette page&nbsp;:</h2>
  <ul>
    <li><a href="#utilisation">Quand l'utiliser</a></li>
    <li><a href="#contenu">Spécifications du contenu</a></li>
    <li><a href="#conception">Spécifications de conception</a></li>
    <li><a href="#visuel">Exemple visuel</a></li>
    <li><a href="#implementation">Comment mettre en œuvre</a></li>
    <li><a href="#changements">Derniers changements</a></li>
  </ul>
</section>
<section>
  <h2 id="utilisation">Quand l'utiliser </h2>
  <p>N’utilisez le modèle des collaborateurs que si l’un des scénarios suivants s’applique à votre contenu&nbsp;:</p>
  <ul>
    <li>plusieurs ministères, organisations ou agences ont contribué au contenu de la page;</li>
    <li>une seule organisation a contribué au contenu d’une page, mais il est difficile de savoir qui gère ce contenu (p. ex. lorsqu’il n’y a pas de pied de page contextuel ou de fil d’Ariane avec le nom du Ministère).</li>
  </ul>
</section>
<section>
  <h2 id="contenu">Spécifications du contenu</h2>
  <p>Le lien vers l’institution ou l’organisme est précédé par le mot &laquo;&nbsp;De&nbsp;:&nbsp;&raquo;.</p>
  <p>Énumérez les institutions ou organismes contributeurs. Les liens doivent diriger vers la page d’accueil principale de l’organisme.</p>
  <p>Le texte de l’hyperlien doit correspondre au nom apparaissant sur la page du profil de l’institution ou de l’organisation auquel il revoit.</p>
</section>
<section>
  <h2 id="conception">Spécifications de conception</h2>
  <p>La configuration collaborateurs est placée en dessous de tout le contenu de la page, mais au-dessus du champ &laquo;&nbsp;Date de modification&nbsp;&raquo;.</p>
  <p>N’alignez pas le texte figurant dans ce bloc avec d’autres blocs de texte ou d’autres éléments de mise en page.</p>
  <p>Justifiez à gauche le titre et les liens.</p>
  <p>Utilisez les couleurs standard de paragraphe, de titre et de lien. Consultez les directives se trouvant sur le site <a href="https://canada-ca.github.io/systeme-conception/styles/couleurs.html">Couleurs – Style de Canada.ca.</a>.</p>
  <p>Le titre est un titre H2 dont la taille de police est&nbsp;: 87 % (ou 17 px).</p>
  <p>Les éléments de la liste sont en gras et ont une taille de police de 87 % (ou 17 px).</p>
  <p>Les liens se trouvent à droite du titre H2 et sont codés dans une liste horizontale. Le premier élément de la liste n’est pas stylisé (pas de puce).</p>

  <h3 id="visuel">Exemple visuel</h3>
  <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
      <figcaption><b>Configuration collaborateurs</b></figcaption>
      <img src="../images/contributors-fr.png" class="img-responsive" alt="Configuration collaborateurs. Version texte ci-dessous." />
      <details>
        <summary>Description de l’image&nbsp;: collaborateurs</summary>
        <p>Le titre &laquo;&nbsp;De&nbsp;:&nbsp;&raquo; est justifié à gauche. Deux liens fictifs apparaissent dans une liste alignée horizontalement avec le titre. Le texte du premier lien fictif est [Ministère ou organisme 1]. Il est suivi d’une puce, puis d’un autre lien fictif intitulé [Ministère ou organisme 2].</p>
      </details>
    </figure>
  </div>
</section>
<section>
  <h2 id="implementation">Comment procéder à la mise en œuvre</h2>
  <p>Trouvez des exemples pratiques et du code pour mettre en œuvre la configuration de conception du bloc d’introduction.</p>
  <h3>Référence pour la mise en œuvre du thème GCWeb (BOEW)</h3>
  <ul>
    <li><a href="https://wet-boew.github.io/GCWeb/components/gc-contributors/gc-contributors-doc-fr.html">Collaborateurs - GCWeb</a></li>
  </ul>
</section>
<section>
  <h2 id="changements">Derniers changements</h2>
  <dl class="dl-horizontal">
    <dt><time>2025-12-03</time></dt>
    <dd>Les directives ont été mises à jour afin de donner des précisions quant au moment où il est pertinent d’utiliser le modèle des collaborateurs.</dd>
  </dl>
</section>
