---
altLangPage: https://design.canada.ca/recommended-templates/404-error-page.html
date: 2026-02-05
dateModified: 2026-07-06
description: Une erreur 404 est générée lorsqu'un utilisateur tente d'accéder à une page introuvable.
title: Modèle de page d'erreur 404
---
Une erreur 404 est générée lorsque l'on tente d'accéder à une page non trouvée.

Ce modèle de page d'erreur 404 fournit à l'utilisateur des suggestions pour régler le cas d'erreur et contient des liens vers des sections clés qui peuvent être utiles. Il existe deux versions de ce modèle&nbsp;:

- une page unilingue avec une option de changement de langue pour les utilisateurs dont la préférence linguistique est connue;
- une page bilingue pour les utilisateurs dont la préférence linguistique n'est pas connue.

<div class="pattern-demo mrgn-tp-lg mrgn-bttm-xl">
  <img src="../images/404/page-erreur-404-bilingue.png" class="img-responsive" alt="" />
</div>

## Sur cette page

- [Quand l'utiliser](#quand-lutiliser)
- [Quoi éviter](#quoi-%C3%A9viter)
- [Contenu et conception](#contenu-et-conception)
- [Comment mettre en œuvre](#comment-mettre-en-%C5%93uvre)

## Quand l'utiliser

Utilisez ce modèle pour créer un emplacement normalisé où les utilisateurs peuvent se rendre lorsqu'ils obtiennent un message d'erreur 404.

## Quoi éviter

Ce modèle doit être utilisé seulement pour signaler une erreur 404.

Assurez-vous que la page comprend au moins un lien de renvoi (par exemple, vers la page d'accueil Canada.ca). Ne fournissez pas de liens non pertinents qui n'aident pas l'utilisateur à revenir au contenu Web du gouvernement du Canada.

Pour la version bilingue, n'utilisez pas le français et l'anglais dans le même bloc de contenu, le même paragraphe ou la même phrase.

## Contenu et conception

Trouvez des spécifications de contenu et de conception et des exemples visuels.

### Spécifications de contenu

Utilisez «&nbsp;Page non trouvée&nbsp;» pour l'en-tête H1, ou le titre de la page.

Ajoutez une phrase pour indiquer que la page recherchée par l'utilisateur a peut-être été déplacée ou supprimée.

Proposez à l'utilisateur des façons de résoudre le cas d'erreur, notamment en&nbsp;:

- lui suggérant de vérifier l'orthographe de l'adresse Web (URL);
- lui indiquant de supprimer les caractères spéciaux ou les espaces dans l'URL;
- lui fournissant un moyen de signaler le lien rompu, le cas échéant.

Ajoutez le texte «&nbsp;Vous cherchez peut-être l'une des pages suivantes&nbsp;:&nbsp;» suivi d'une liste à puces d'au plus 10 liens. En haut de la liste, ajoutez les trois pages les plus recherchées sur Canada.ca suivantes&nbsp;:

- [Accueil](https://www.canada.ca/fr.html)
- [Services du gouvernement du Canada](https://www.canada.ca/fr/services.html)
- [Coordonnées du gouvernement du Canada](https://www.canada.ca/fr/contact.html)

Après avoir ajouté les liens vers ces trois pages, vous pouvez énumérer certaines des pages les plus «&nbsp;en demande&nbsp;» pour votre institution. Voici quelques-unes des pages les plus demandées sur Canada.ca que vous pouvez également inclure&nbsp;:

- [Se connecter à un dossier ou un compte en ligne](https://www.canada.ca/fr/gouvernement/ouvrir-session-dossier-compte-en-ligne.html)
- [Prestations](https://www.canada.ca/fr/services/prestations.html)
- [Impôts](https://www.canada.ca/fr/services/impots.html)
- [Immigration ou citoyenneté Canada](https://www.canada.ca/fr/services/immigration-citoyennete.html)

**Note**&nbsp;: AEM ne supporte pas actuellement les pages personnalisées 404 car elles sont gérées par la plateforme par défaut.

#### Spécifications de contenu supplémentaires pour la version bilingue

En plus du contenu présenté dans les spécifications générales, la page bilingue doit comprendre deux liens d'ancrage qui apparaîtront au-dessus de chaque langue lorsque la page sera redimensionnée pour les écrans d'appareils mobiles.

- Pour le lien au-dessus du contenu anglais, utilisez le texte «&nbsp;Aller à la version française&nbsp;».
- Pour le lien au-dessus du contenu français, utilisez le texte «&nbsp;<span lang="en">Go to the English version</span>&nbsp;».

#### Interactions

- Lorsque la préférence linguistique de l'utilisateur **est connue**, ce dernier doit être dirigé vers la page d'erreur 404 dans la langue de son choix.
- Lorsque la préférence linguistique de l'utilisateur **n'est pas connue**, ce dernier doit être dirigé vers la page d'erreur 404 bilingue.

### Spécifications de conception

- Il faut inclure une étiquette de danger directement sous l'en‑tête H1 pour signaler une «&nbsp;erreur 404&nbsp;».
  - [Suivez les directives de mise en œuvre pour une étiquette de danger](../configurations-conception-communes/etiquettes.html#danger).
- Tous les liens doivent être présentés selon les styles de Canada.ca.
  - [Typographie](../styles/typographie.html)
  - [Couleurs](../styles/couleurs.html)
- Vous pouvez inclure une barre de recherche facultative sous la liste des liens suggérés.
  - [Suivez les instructions pour le Champ de recherche du site](../configurations-conception-communes/champ-recherche.html).

#### Spécifications de conception supplémentaires pour la version bilingue

Utilisez les types de mise en page suivants pour la version bilingue&nbsp;:

- deux colonnes avec tout le contenu anglais à gauche et tout le contenu français à droite pour l'affichage sur un grand ou moyen écran;
- une seule colonne avec tout le contenu empilé pour l'affichage sur un petit écran.

Étant donné que la préférence linguistique n'est pas connue, limitez les éléments de l'en-tête et du pied de page à ce qui suit&nbsp;:

- dans l'en-tête, n'incluez que la signature du gouvernement du Canada avec un lien vers la page d'accueil Canada.ca;
- dans le pied de page, n'incluez que le mot-symbole «&nbsp;Canada&nbsp;».

#### Interactions

Lorsque la version bilingue de la page est redimensionnée pour les écrans d'appareils mobiles, les contenus anglais et français seront empilés. Lorsque le contenu est empilé, un lien de saut doit apparaître au-dessus de chaque langue pour permettre à l'utilisateur de passer d'une langue à l'autre.

### Exemples visuels

<div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Page d'erreur 404 unilingue – grand écran</b></figcaption>
        <img src="../images/404/page-erreur-404-unilingue.png" class="img-responsive" alt="Page d'erreur 404 unilingue – grand écran. Version textuelle ci-dessous&nbsp;:" />
        <details>
            <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l'image&nbsp;: Page d'erreur 404 unilingue – grand écran</summary>
            <p>En haut de la page se trouve l'en-tête H1 intitulé «&nbsp;Page non trouvée&nbsp;», souligné d'un trait rouge court et épais. Sous l'en‑tête H1 se trouve une étiquette de danger indiquant «&nbsp;erreur 404&nbsp;».</p>
            <p>Après l'étiquette se trouve un paragraphe fournissant à l'utilisateur des instructions sur la façon de trouver la page qu'il cherche.</p>
            <p>Sous le paragraphe se trouve la phrase «&nbsp;Vous cherchez peut-être l'une des pages suivantes&nbsp;:&nbsp;» avec une liste à puces située sous ce dernier.</p>
        </details>
    </figure>
</div>
<div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Page d'erreur 404 bilingue – grand écran</b></figcaption>
        <img src="../images/404/page-erreur-404-bilingue.png" class="img-responsive" alt="Page d'erreur 404 bilingue – grand écran. Version textuelle ci-dessous&nbsp;:" />
        <details>
            <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l'image&nbsp;: Page d'erreur 404 bilingue – grand écran</summary>
              <p>La version bilingue de la page d'erreur 404 s'affiche en deux colonnes.</p>
              <p>La première colonne porte l'en-tête H2 intitulé <span lang="en">«&nbsp;Page not found&nbsp;»</span>. Sous l'en-tête H2 se trouve une étiquette de danger assortie du texte <span lang="en">«&nbsp;404 error&nbsp;»</span>.</p>
              <p>Après l'étiquette se trouve un paragraphe fournissant à l'utilisateur des instructions sur la façon de trouver la page qu'il cherche.</p>
              <p>Sous le paragraphe se trouve la phrase d'introduction <span lang="en">«&nbsp;You may be looking for:&nbsp;»</span> avec une liste à puces des liens vers les pages les plus demandées sur Canada.ca située sous ce dernier.</p>
              <p>Après la liste des liens, il y a une courte barre de recherche dans laquelle figure la mention <span lang="en">«&nbsp;Search Canada.ca&nbsp;»</span> dans l'espace réservé pour le texte. Il y a un bouton de recherche illustré à l'aide d'une icône de loupe à côté de la barre de recherche.</p>
              <p>La deuxième colonne porte l'en-tête H2 intitulé «&nbsp;Page non trouvée&nbsp;». Sous l'en-tête H2 se trouve une étiquette de danger assortie du texte «&nbsp;Erreur 404&nbsp;».</p>
              <p>Après l'étiquette se trouve un paragraphe fournissant à l'utilisateur des instructions sur la façon de trouver la page qu'il cherche.</p>
              <p>Sous le paragraphe se trouve la phrase d'introduction «&nbsp;Vous cherchez peut-être l'une des pages suivantes&nbsp;:&nbsp;» avec une liste à puces des liens vers les pages les plus demandées sur Canada.ca située sous ce dernier.</p>
              <p>Après la liste des liens, il y a une courte barre de recherche dans laquelle figure la mention «&nbsp;Rechercher dans Canada.ca&nbsp;» dans l'espace réservé pour le texte. Il y a un bouton de recherche illustré à l'aide d'une icône de loupe à côté de la barre de recherche.</p>
        </details>
    </figure>
</div>
<div class="pattern-demo mrgn-tp-md mrgn-bttm-md">
    <figure class="mrgn-tp-md mrgn-bttm-lg">
        <figcaption><b>Page d'erreur 404 bilingue – petit écran</b></figcaption>
        <img src="../images/404/page-erreur-404-bilingue-petit.png" class="img-responsive" alt="Page d'erreur 404 bilingue – petit écran. Version textuelle ci-dessous&nbsp;:" />
        <details>
            <summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Description de l'image&nbsp;: Page d'erreur 404 bilingue – petit écran</summary>
            <p>La version bilingue de la page d'erreur 404 s'affiche dans une seule colonne.</p>
            <p>En haut de la page se trouve l'en-tête H2 intitulé <span lang="en">«&nbsp;Page not found&nbsp;»</span>. Sous l'en-tête H2 se trouve une étiquette de danger assortie du texte <span lang="en">«&nbsp;404 error&nbsp;»</span>.</p>
            <p>Sous l'étiquette se trouve le lien <span lang="en">«&nbsp;Aller à la version française&nbsp;»</span>.</p>
            <p>Après le lien se trouve un paragraphe fournissant à l'utilisateur des instructions sur la façon de trouver la page qu'il cherche.</p>
            <p>Sous le paragraphe se trouve la phrase d'introduction <span lang="en">«&nbsp;You may be looking for:&nbsp;»</span> avec une liste à puces des liens vers les pages les plus demandées sur Canada.ca située sous ce dernier.</p>
            <p>Après la liste des liens, il y a une courte barre de recherche dans laquelle figure la mention <span lang="en">«&nbsp;Search Canada.ca&nbsp;»</span> dans l'espace réservé pour le texte. Il y a un bouton de recherche illustré à l'aide d'une icône de loupe à côté de la barre de recherche.</p>
            <p>Ensuite, il y a un deuxième en-tête H2 intitulé «&nbsp;Page non trouvée&nbsp;». Sous cet en-tête H2 se trouve une étiquette de danger assortie du texte «&nbsp;Erreur 404&nbsp;».</p>
            <p>Sous l'étiquette se trouve le lien <span lang="en">«&nbsp;Go to the English version&nbsp;»</span>.</p>
            <p>Après le lien se trouve un paragraphe fournissant à l'utilisateur des instructions sur la façon de trouver la page qu'il cherche.</p>
            <p>Sous le paragraphe se trouve la phrase d'introduction «&nbsp;Vous cherchez peut-être l'une des pages suivantes&nbsp;:&nbsp;» avec une liste à puces des liens vers les pages les plus demandées sur Canada.ca située sous ce dernier.</p>
            <p>Après la liste des liens, il y a une courte barre de recherche dans laquelle figure la mention «&nbsp;Rechercher dans Canada.ca&nbsp;» dans l'espace réservé pour le texte. Il y a un bouton de recherche illustré à l'aide d'une icône de loupe à côté de la barre de recherche.</p>
        </details>
    </figure>
</div>

## Comment mettre en œuvre

Trouvez des exemples pratiques et saisissez le code pour la mise en œuvre de la page d'erreur 404.

### Référence pour la mise en œuvre du thème GCWeb (WET)

La référence de mise en œuvre explique comment configurer la page d'erreur 404.

- [Documentation des messages d'erreur du serveur - GCWeb (WET)](https://wet-boew.github.io/GCWeb/templates/servermessage/servermessage-doc-fr.html)
