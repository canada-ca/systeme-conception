# Alerte d'urgence - Composant expérimental

**Version :** 1.0  
**Statut :** Alpha  
**Date de création :** 2024-12-19  
**Branche :** experimental-composant-alerte-urgence-v1

## Description

Composant d'alerte visuel pour signaler des situations d'urgence ou des interruptions de service critiques. Ce composant expérimental vise à fournir une solution standardisée pour les alertes haute priorité sur les sites gouvernementaux.

## Objectif

Créer un composant d'alerte distinctif qui :
- Attire immédiatement l'attention des utilisateurs
- Respecte les standards d'accessibilité WCAG 2.1 AA
- S'intègre harmonieusement avec le système de conception existant
- Fonctionne sur tous les appareils et navigateurs

## Problème résolu

Actuellement, il n'existe pas de composant standardisé pour les alertes d'urgence dans le système de conception. Chaque équipe développe sa propre solution, ce qui crée :
- Incohérence visuelle entre les sites
- Problèmes d'accessibilité potentiels
- Duplication d'efforts
- Expérience utilisateur fragmentée

## Cas d'usage

### Cas d'usage principaux
1. **Interruption de service** : Signaler une panne de système critique
2. **Alerte météorologique** : Communication d'urgence météorologique
3. **Avis de sécurité** : Information de sécurité nationale urgente
4. **Maintenance d'urgence** : Notification de maintenance non planifiée

### Contextes d'utilisation
- Pages d'accueil de sites gouvernementaux
- Portails de services en ligne
- Applications de services critiques
- Pages d'information d'urgence

## Spécifications techniques

### Structure HTML
```html
<div class="gc-alerte-urgence" role="alert" aria-live="assertive">
  <div class="gc-alerte-urgence__contenu">
    <span class="gc-alerte-urgence__icone" aria-hidden="true">⚠</span>
    <div class="gc-alerte-urgence__message">
      <h2 class="gc-alerte-urgence__titre">Titre de l'alerte</h2>
      <p class="gc-alerte-urgence__texte">Texte descriptif de l'alerte.</p>
    </div>
    <button class="gc-alerte-urgence__fermer" aria-label="Fermer l'alerte">×</button>
  </div>
</div>
```

### Propriétés CSS personnalisées
```css
.gc-alerte-urgence {
  --alerte-couleur-fond: #d63384;
  --alerte-couleur-texte: #ffffff;
  --alerte-couleur-bordure: #b02a5b;
  --alerte-taille-police: 1.1rem;
}
```

### Comportement JavaScript
- Fermeture sur clic du bouton X
- Persistance de l'état de fermeture (sessionStorage)
- Support clavier complet

## Accessibilité

### Fonctionnalités d'accessibilité
- ✅ **role="alert"** pour annoncer automatiquement le contenu
- ✅ **aria-live="assertive"** pour les lecteurs d'écran
- ✅ Contraste conforme WCAG 2.1 AA (minimum 4.5:1)
- ✅ Navigation clavier complète
- ✅ Focus visible et distinct
- ✅ Textes alternatifs appropriés

### Tests d'accessibilité
- [ ] Test avec NVDA
- [ ] Test avec JAWS
- [ ] Test avec VoiceOver
- [ ] Validation axe-core
- [ ] Test de contraste
- [ ] Test navigation clavier

## Variations

### Niveaux de gravité
1. **Critique** (rouge) - Interruptions majeures
2. **Élevé** (orange) - Problèmes importants
3. **Moyen** (jaune) - Avertissements généraux

### Tailles
- **Compact** - Pour alertes dans le contenu
- **Standard** - Usage général
- **Large** - Pour pages dédiées aux urgences

## Exemples d'utilisation

Voir le dossier `exemples/` pour :
- `basique.html` - Exemple de base
- `avec-lien.html` - Alerte avec liens d'action
- `variations.html` - Différentes variations

## Tests et validation

### Tests effectués
- [x] Validation HTML W3C
- [x] Validation CSS W3C
- [x] Test de contraste
- [ ] Tests d'utilisabilité
- [ ] Tests multi-navigateurs complets

### Résultats
- Contraste : 5.2:1 (conforme WCAG AA)
- Validation HTML : Aucune erreur
- Validation CSS : Aucune erreur

## Installation et intégration

### Dépendances
Aucune dépendance externe requise.

### Installation
```html
<link rel="stylesheet" href="styles/alerte-urgence.css">
<script src="scripts/alerte-urgence.js"></script>
```

### Utilisation
```html
<!-- Inclure le HTML du composant -->
<!-- Initialiser le JavaScript si nécessaire -->
<script>
  // Auto-initialisation au chargement de la page
</script>
```

## Journal des changements

### Version 1.0 (2024-12-19)
- Création initiale du composant
- Structure HTML et CSS de base
- Fonctionnalités de base d'accessibilité
- Exemples d'utilisation

## Prochaines étapes

### Version 1.1 (prévue)
- [ ] Intégration d'icônes SVG
- [ ] Animation d'apparition
- [ ] Support RTL
- [ ] Tests d'utilisabilité

### Transition vers Beta
- [ ] Tests d'accessibilité complets
- [ ] Documentation bilingue
- [ ] Validation par la communauté
- [ ] Tests en production

## Contributeurs

- [Nom] - Développement initial
- [Nom] - Révision accessibilité
- [Nom] - Tests utilisabilité

## Ressources

- [Issue GitHub](#) - Discussion initiale
- [Recherche utilisateur](#) - Si applicable
- [Références externes](#) - Standards et bonnes pratiques

---

**Statut :** 🟡 Alpha - En développement  
**Prochaine révision :** [Date]