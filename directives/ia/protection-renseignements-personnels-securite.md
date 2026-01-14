---
altLangPage: https://design.canada.ca/guidance/ai/privacy-security.html
date: 2026-01-15
dateModified: 2026-01-15
description: Suivez ces directives pour protéger les renseignements personnels et assurer la sécurité lors de la création d'applications d'IA générative.
title: Protection des renseignements personnels et sécurité
---

## Sur cette page

- [Protéger les renseignements personnels dès le début](#proteger)
- [Limiter la collecte de renseignements personnels](#limiter)
- [Caviarder les renseignements personnels dans le champ de saisie de l’utilisateur](#caviarder-renseignements-personnels)
- [Caviarder les menaces, les blasphèmes et les tentatives de manipulation de l’IA](#caviarder-menaces)
- [Gérer les menaces perçues](#gerer-menaces)
- [Établir un calendrier de conservation et de suppression](#conservation)
- [Journaux d’audit et surveillance](#audit)
- [Prévenir le débridage et la manipulation](#prevenir)
- [Respecter la Stratégie intégrée de cybersécurité du gouvernement du Canada](#respecter)

## Protéger les renseignements personnels dès le début {#proteger}

Si votre application d’IA doit recueillir des renseignements personnels, ou est susceptible de le faire par inadvertance, il faut repérer et atténuer les risques en demandant au bureau de la protection des renseignements personnels de votre institution de remplir une liste de vérification de la protection des renseignements personnels dès le début du développement de l’application. La Directive sur les pratiques relatives à la protection de la vie privée du SCT (annexe C.2.2.6) exige une liste de vérification pour déterminer si une Évaluation des facteurs relatifs à la vie privée est nécessaire avant de déployer votre technologie d’IA générative.

- [Directive sur les pratiques relatives à la protection de la vie privée](https://www.tbs-sct.canada.ca/pol/doc-fra.aspx?id=18309)

## Limiter la collecte de renseignements personnels {#limiter}

Ne recueillez que les renseignements personnels nécessaires au fonctionnement de l’IA. Par exemple, si une application d’aide alimentée par l’IA est conçue pour aider le service à la clientèle, il faut limiter la collecte aux détails pertinents.

Évitez de recueillir des détails inutiles, tels que des renseignements sur la localisation ou l’appareil, à moins que cela ne soit essentiel. Un exemple qui justifie la collecte de renseignements sur la localisation est si l’IA doit fournir des renseignements géolocalisés, tels que la météo ou des mises à jour sur les incendies de forêt.

Les renseignements personnels contenus dans les conversations ne doivent pas être conservés, utilisés à des fins secondaires, ni divulgués.

Consultez votre équipe chargée de la protection des renseignements personnels pour discuter des options possibles si vous n’êtes pas sûr de savoir comment minimiser ou traiter la collecte de renseignements personnels par votre application.

## Caviarder les renseignements personnels {#caviarder-renseignements-personnels}

Supprimez et caviardez autant que possible les renseignements personnels dans le champ de saisie de l’utilisateur, plutôt que de les envoyer au service d’IA ou de les stocker de quelque manière que ce soit.

Les renseignements personnels sont définis dans la [*Loi sur la protection des renseignements personnels*](https://laws-lois.justice.gc.ca/fra/lois/p-21/index.html) comme des renseignements, quels que soient leur forme et leur support, concernant un individu identifiable. Il peut s’agir de renseignements tels que&nbsp;:

- son nom
- ses coordonnées
- tout numéro pouvant l’identifier.

Ils peuvent également inclure des renseignements dépersonnalisés (par exemple, lorsque les noms ou les numéros d’identification ont été supprimés) s’il existe une possibilité sérieuse qu’une personne puisse être identifiée, seule ou en combinaison avec d’autres renseignements disponibles. Consultez l’Avis de mise en œuvre de la protection des renseignements personnels du Secrétariat du Conseil du Trésor&nbsp;:

- [Avis de mise en œuvre de la protection des renseignements personnels 2023-01&nbsp;: Dépersonnalisation](https://www.canada.ca/fr/secretariat-conseil-tresor/services/acces-information-protection-reseignements-personnels/avis-mise-acces-information-protection-renseignements-personnels/2023-01-depersonnalisation.html)

Vous devez informer l’utilisateur que ses données caviardées ne seront stockées nulle part.

La plupart des questions caviardées des renseignements personnels n’auront plus de sens. Au lieu d’envoyer le message caviardé au service d’IA, montrez à l’utilisateur le résultat du caviardage des renseignements personnels et demandez-lui de reformuler la question sans détails personnels. Par exemple, afficher un message comme celui-ci&nbsp;:

&laquo;&nbsp;Votre question contenait des renseignements personnels. Ceux-ci ont été remplacés par les symboles XXX. Afin de protéger vos renseignements personnels, votre question n’a pas été envoyée au service d’intelligence artificielle. Veuillez reposer votre question sans inclure de renseignements personnels&nbsp;&raquo;.

N’oubliez pas que, malgré le caviardage, il est toujours possible que certains renseignements personnels finissent par être recueillis/stockés (c’est-à-dire qu’ils ne sont pas caviardés avec succès). Pour tenir compte de cette possibilité, veillez à consulter les exigences de la&nbsp;:

- [*Loi sur la protection des renseignements personnels*](https://laws-lois.justice.gc.ca/fra/lois/p-21/)
- [Politique sur la protection de la vie privée](https://www.tbs-sct.canada.ca/pol/doc-fra.aspx?id=12510)
- [Politique sur la sécurité du gouvernement](https://www.tbs-sct.canada.ca/pol/doc-fra.aspx?id=16578)
- [Politique sur les services et le numérique](https://www.tbs-sct.canada.ca/pol/doc-fra.aspx?id=32603)
- [Directive sur les services et le numérique](https://www.tbs-sct.canada.ca/pol/doc-fra.aspx?id=32601)

Pour vous assurer que votre technologie d’IA générative est responsable, digne de confiance et qu’elle protège la vie privée, consultez le site&nbsp;:

- [Guide du Secrétariat du Conseil du Trésor sur l’utilisation de l’intelligence artificielle générative, autres lignes](https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/innovations-gouvernementales-numeriques/utilisation-responsable-ai/guide-utilisation-intelligence-artificielle-generative.html)
- [Principes du Commissariat à la protection de la vie privée pour des technologies d’IA générative responsables, dignes de confiance et respectueuses de la vie privée](https://www.priv.gc.ca/fr/sujets-lies-a-la-protection-de-la-vie-privee/technologie/intelligence-artificielle/gd_principes_ia/).

Vous pouvez également communiquer avec le bureau de l’accès à l’information et protection des renseignements personnels de votre ministère pour obtenir davantage d’information sur vos responsabilités en matière de protection des renseignements personnels.

- [Liste des coordonnateurs de l’accès à l’information et de la protection des renseignements personnels par institution](https://www.tbs-sct.canada.ca/ap/atip-aiprp/coord-fra.asp)

### Caviarder les menaces, les blasphèmes et les tentatives de manipulation de l’IA {#caviarder-menaces}

Appliquez des modèles de caviardage dans le code pour les blasphèmes, les menaces et les manipulations.

Les trois types de caviardage doivent afficher un message d’utilisateur identique et caviarder avec des caractères &laquo;&nbsp;\#&nbsp;&raquo;. Un message d’erreur doit être affiché pour informer les utilisateurs. Par exemple, afficher un message comme celui-ci&nbsp;:

&laquo;&nbsp;Votre question n’a pas été envoyée au service d’IA et contient des mots qui ne sont pas acceptés. Veuillez essayer de poser la question différemment&nbsp;&raquo;.

Cette méthode empêche quiconque de tenter de communiquer avec le gouvernement en proférant des menaces et de tenter de manipuler ou de débrider le service d’IA. Il convient de noter que les menaces doivent être traitées en temps réel, ce qui n’est pas le rôle d’une application d’aide utilisant l’IA.

Notez que le message de l’utilisateur incite les gens à poser une question plutôt qu’à faire un commentaire.

Assurez-vous de caviarder des mots entiers, et non des parties de mots, sous peine de voir des mots tels que &laquo;&nbsp;dynamique&nbsp;&raquo; ou &laquo;&nbsp;attention&nbsp;&raquo; rejetés.

Il existe trois séries de fichiers de mots et de phrases, en anglais et en français, qui peuvent être utilisés. Communiquez avec nous si vous souhaitez accéder à ces fichiers&nbsp;:

- [cds.dto-btn.snc@servicecanada.gc.ca](mailto:cds.dto-btn.snc@servicecanada.gc.ca)

## Gérer les menaces perçues {#gerer-menaces}

Avant de mettre en œuvre une application d’aide utilisant l’IA, assurez-vous que votre organisation a mis en place un processus pour traiter les messages menaçants. Un processus semblable peut déjà exister pour traiter les menaces reçues par courriel, par les médias sociaux et/ou par les centres d’appel.

Ce qu’il faut faire&nbsp;:

- Suivre les mêmes procédures que celles mises en place par votre organisation pour les menaces reçues par courriel, par les médias sociaux et/ou par les centres d’appel.

## Établir un calendrier de conservation et de suppression {#conservation}

Établissez des périodes de conservation par défaut pour toutes les données recueillies. Une fois la période terminée, toutes les données doivent être supprimées. Cette façon de procéder permet d’éviter l’accumulation inutile de données, de réaliser des économies sur les coûts de stockage et de réduire l’impact des menaces possibles sur la vie privée. Communiquez avec le service de gestion de l’information de votre ministère pour obtenir de l’aide dans l’établissement et l’application d’un calendrier de conservation et d’élimination.

## Journaux d’audit et surveillance {#audit}

Surveillez et signalez aux développeurs ou aux fournisseurs les utilisations inappropriées ou les résultats biaisés qui n'ont pas été identifiés comme une limitation potentielle du système. Les journaux d’audit conservent des enregistrements détaillés de tous les accès et de toutes les activités, ce qui permet de s’y référer plus facilement.

Les journaux d’audit doivent mettre en place des contrôles d’accès basés sur les rôles, de sorte que seules les personnes ayant &laquo;&nbsp;besoin de savoir&nbsp;&raquo; puissent y accéder, protégeant ainsi contre tout accès non autorisé.

Il faut se tenir informé en permanence des menaces particulièrement préoccupantes lors de l’utilisation de l’IA générative, notamment les attaques par injection d’invite, les attaques par inversion de modèle et le débridage, et appliquer des mesures d’atténuation contre ces menaces.

## Prévenir le débridage et la manipulation {#prevenir}

Débrider une application d’aide utilisant l’IA signifie la manipuler pour qu’elle fasse des choses qu’elle n’est pas censée faire, comme fournir des réponses contenant des renseignements personnels, préjudiciables ou hors du champ d’application. Voici quelques mesures clés à mettre en œuvre pour atténuer ces risques&nbsp;:

- Limiter à 300 le nombre de caractères dans le champ de saisie.
  - examinez vos données d’utilisation au fil du temps pour évaluer la possibilité de réduire ou d’augmenter cette valeur
  - utilisez un message d’erreur lorsque la limite est dépassée pour avertir l’utilisateur du nombre de caractères excédentaire et lui conseiller de raccourcir sa question&nbsp;: &laquo;&nbsp;Votre message comporte \[nombre\] caractères de trop. Veuillez simplifier votre question&nbsp;&raquo;.
- Limiter la conversation à un maximum de trois questions, car les conversations plus longues augmentent la probabilité de réponses inexactes.
  - prévenez les utilisateurs que leur conversation sera limitée à trois questions
  - Affichez un bouton Rafraîchir et un message lorsque la limite de conversation est atteinte \- à noter que seuls les messages envoyés au service d’IA doivent être pris en compte dans cette limite.
  - Rafraîchissez le texte du message&nbsp;: &laquo;&nbsp;Vous avez atteint la limite de trois questions par conversation. Rafraîchir pour entamer une nouvelle conversation&nbsp;&raquo;.
- Contraindre le comportement du modèle<sup id="fn1-0-rf"><a class="fn-lnk" href="#fn1"><span class="wb-inv">Note de bas de page </span>1</a></sup>&nbsp;:
  - Présentez des instructions précises sur le rôle, les capacités et les limites du modèle dans l’invite du système. Veillez à ce que le contexte soit strictement respecté, limitez les réponses à des tâches ou à des sujets précis et demandez au modèle d’ignorer les tentatives de modification des instructions de base.

## Respecter la Stratégie intégrée de cybersécurité du gouvernement du Canada {#respecter}

Assurez la conformité aux règles de cybersécurité du gouvernement du Canada.

[Stratégie intégrée de cybersécurité du gouvernement du Canada](https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/securite-confidentialite-ligne/strategie-integree-cybersecurite.html)&nbsp;: Les Canadiens comptent sur le gouvernement du Canada pour fournir des programmes et des services, dont beaucoup deviennent de plus en plus numériques en cette ère moderne. À l’instar de nombreuses institutions publiques dans le monde, le gouvernement a été la cible de cyberattaques, qui peuvent avoir un effet important sur les opérations du gouvernement et la sécurité des Canadiens. Nous adaptons constamment les mesures de sécurité et mettons en place des outils pour aider à protéger nos systèmes et les renseignements personnels des Canadiens. Par conséquent, les événements liés à la cybersécurité peuvent avoir un effet significatif sur les opérations gouvernementales, soit par l’interruption de services critiques et essentiels, soit par l’exposition de renseignements classifiés ou personnels. Ces répercussions importantes peuvent exposer les gens au risque d’usurpation d’identité ou à d’autres types de fraude, ce qui peut potentiellement éroder la confiance dans les institutions gouvernementales et avoir un impact négatif sur l’ensemble de l’économie et de la société canadiennes.

<aside class="wb-fnote" role="note">
  <h2 id="fn">Notes de bas de page</h2>
  <dl>
    <dt>Note de bas de page 1</dt>
    <dd id="fn1">
      <p><a href="https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/" rel="nofollow">OWASP Top 10 for LLM Applications 2025</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode" rel="nofollow">https://creativecommons.org/licenses/by-sa/4.0/legalcode</a> [en anglais seulement]</p>
      <p class="fn-rtn small">
        <a href="#fn1-0-rf"><span class="wb-inv">Retour à la note de bas de page </span>1</a>
      </p>
    </dd>
  </dl>
</aside>
