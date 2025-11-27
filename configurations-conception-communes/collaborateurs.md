---
altLangPage: https://design.canada.ca/common-design-patterns/contributors.html
date: null
dateModified: '2024-09-24'
description: null
title: Collaborateurs
---

<p><strong>Dernière modification</strong>&nbsp;: {{ page.dateModified }}</p>
<div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl"><img src="../images/contributors-fr.png" class="img-responsive" alt="" /></div>
<p>Utilisez la configuration collaborateurs pour mettre en évidence les institutions ou organismes ayant contribué au contenu d’une page Web.</p>

<section>
    <h2>Sur cette page&nbsp;:</h2>
    <ul>
        <li><a href="#use">Quand l'utiliser</a></li>
        <li><a href="#design">Contenu et conception</a></li>
        <li><a href="#implement">Comment procéder à la mise en œuvre</a></li>
    </ul>
</section>
<section>
    <h2 id="use">
        Quand l'utiliser
    </h2>
    <p>
        Utilisez la configuration collaborateurs pour fournir des liens vers les institutions, les organismes ou les entités similaires qui sont chargés du contenu de la page ou qui y contribuent. Vous pouvez lister un ou plusieurs collaborateurs.
    </p>
</section>
<section>
    <h2 id="design">
        Contenu et conception 
    </h2>
    <p>Trouvez ici des spécifications sur le contenu et la conception ainsi que des exemples visuels.</p>
    <h3>Spécifications de contenu</h3>
    <p>Le lien vers l’institution ou l’organisme est précédé par le mot «&nbsp;De&nbsp;:&nbsp;».</p>
    <p>Énumérez les institutions ou organismes contributeurs. Les liens doivent diriger vers la page d’accueil principale de l’organisme. Si possible, utilisez&nbsp;:</p>
    <ul>
        <li>
            la page d’accueil institutionnelle
        </li>
        <li>
            la page de profil de partenariat ou d’entente de collaboration
        </li>
    </ul>
    <p>Le texte de l’hyperlien doit correspondre au nom apparaissant sur la page liée.</p>
    <h3>Spécifications de conception</h3>
    <p>La configuration collaborateurs doit être placée en dessous de tout le contenu de la page, mais au-dessus du champ «&nbsp;Date de modification&nbsp;».</p>
    <p>N’alignez pas ce bloc avec d’autres blocs de texte ou d’autres éléments de mise en page; il doit être seul.</p>
    <p>Justifiez à gauche le titre et les liens.</p>
    <p>Utilisez les <a href="https://conception.canada.ca/styles/couleurs.html">couleurs standard</a> de paragraphe, de titre et de lien.</p>
    <p>Le titre est un titre H2 dont la taille de police est : 87 % (ou 17 px).</p>
    <p>Les éléments de la liste sont en gras et ont une taille de police de 87 % (ou 17 px).</p>
    <p>Les liens se trouvent à droite du titre H2 et sont codés dans une liste horizontale sur un grand écran avec des barres verticales entre les éléments de la liste. La liste devient une liste à puces empilées sur mobile. Le premier élément de la liste n’est pas stylisé (pas de barre verticale ni de puce).</p>
    <h3>Exemple visuel</h3>
    <div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
        <figure class="mrgn-tp-md mrgn-bttm-lg">
            <figcaption><b>Configuration collaborateurs</b></figcaption>
            <img src="../images/contributors-fr.png" class="img-responsive" alt="Configuration collaborateurs. Version texte ci-dessous." />
            <details>
                <summary>Description de l’image&nbsp;: collaborateurs</summary>
                <p>
                    Le titre « De : » est justifié à gauche. Deux liens fictifs apparaissent dans une liste alignée horizontalement avec le titre. Le texte du premier lien fictif est [Ministère ou organisme 1]. Il est suivi d’une puce, puis d’un autre lien fictif intitulé [Ministère ou organisme 2].
                </p>
            </details>
        </figure>
    </div>
</section>
<section>
    <h2 id="implement">Comment procéder à la mise en œuvre</h2>
    <p>Trouvez des exemples pratiques et du code pour mettre en œuvre la configuration de conception du bloc d’introduction.</p>
    <h3>Référence pour la mise en œuvre du thème GCWeb (BOEW)</h3>
    <ul>
        <li><a href="https://wet-boew.github.io/GCWeb/components/gc-contributors/gc-contributors-doc-fr.html">Collaborateurs - GCWeb</a></li>
    </ul>
</section>
