---
altLangPage: https://design.canada.ca/experimental-templates/
date: null
dateModified: '2024-12-19'
description: "Documentation sur les modèles expérimentaux et le contrôle de version pour le système de conception de Canada.ca"
title: "Modèles expérimentaux - Contrôle de version"
---

# Modèles expérimentaux - Contrôle de version

Les modèles expérimentaux permettent à la communauté de développer, tester et itérer sur de nouveaux composants, modèles et gabarits avant qu'ils ne deviennent des modèles approuvés dans le système de conception de Canada.ca.

## Sur cette page

- [Structure des répertoires](#structure)
- [Stratégie de branchement](#branchement)  
- [Conventions de nommage](#conventions)
- [Processus de développement](#processus)
- [Transition vers les modèles approuvés](#transition)

## Structure des répertoires {#structure}

Les modèles expérimentaux sont organisés selon la structure suivante :

```
modeles-experimentaux/
├── README.md (ce fichier)
├── composants/          # Nouveaux composants d'interface
├── modeles/             # Nouveaux modèles de page  
├── gabarits/            # Nouveaux gabarits
├── configurations/      # Nouvelles configurations
└── versions/            # Archive des versions historiques
```

Chaque sous-répertoire contient :
- **Documentation** décrivant le modèle expérimental
- **Code d'exemple** et prototypes
- **Tests et évaluations** d'accessibilité
- **Historique des versions** et justifications des changements

## Stratégie de branchement {#branchement}

### Branches principales

- **`master`** - Modèles approuvés et stables
- **`experimental-staging`** - Intégration des modèles expérimentaux prêts pour révision
- **`experimental-[nom-du-modele]-v[version]`** - Branches de développement pour modèles expérimentaux individuels

### Conventions de nommage des branches

```
experimental-[type]-[nom-descriptif]-v[version]
```

**Types :**
- `composant` - Nouveaux composants d'interface
- `modele` - Nouveaux modèles de page
- `gabarit` - Nouveaux gabarits  
- `configuration` - Nouvelles configurations

**Exemples :**
- `experimental-composant-bouton-urgence-v1`
- `experimental-modele-page-evenement-v2`
- `experimental-gabarit-service-numerique-v1`

## Processus de développement {#processus}

### 1. Création d'un nouveau modèle expérimental

1. **Ouvrir un issue** dans GitHub décrivant le besoin et l'hypothèse
2. **Créer une branche** suivant les conventions de nommage
3. **Développer le prototype** dans le répertoire approprié
4. **Documenter** le modèle selon les standards

### 2. Itération et amélioration

1. **Créer des versions incrémentales** (v1.1, v1.2, etc.) pour les modifications mineures
2. **Créer de nouvelles versions principales** (v2, v3, etc.) pour les changements majeurs  
3. **Archiver les versions précédentes** dans le répertoire `versions/`
4. **Maintenir un journal de changements** détaillé

### 3. Tests et validation

Chaque modèle expérimental doit inclure :

- ✅ **Prototype fonctionnel** avec code d'exemple
- ✅ **Évaluation d'accessibilité** complète
- ✅ **Tests d'utilisabilité** ou justification de conception
- ✅ **Documentation bilingue** (français et anglais)
- ✅ **Instructions d'implémentation** claires

### 4. Demande de révision

1. **Créer une pull request** vers `experimental-staging`
2. **Remplir le template de PR** avec toute la documentation requise
3. **Demander la révision** de la communauté
4. **Répondre aux commentaires** et itérer si nécessaire

## Transition vers les modèles approuvés {#transition}

### Critères d'approbation

Pour qu'un modèle expérimental devienne approuvé, il doit satisfaire :

#### Phase Alpha → Bêta
- [ ] Prototype codé entièrement fonctionnel
- [ ] Évaluation d'accessibilité complète
- [ ] Justification des choix de conception
- [ ] Documentation bilingue

#### Phase Bêta → Stable (Approuvé)
- [ ] Code intégré au cadre de base (BOEW)
- [ ] Code entièrement validé
- [ ] Aucun problème d'accessibilité en suspens
- [ ] Commentaires de la communauté résolus
- [ ] Tests d'utilisation en conditions réelles

### Processus d'approbation

1. **Révision communautaire** sur la branche experimental
2. **Tests pilotes** par les ministères participants
3. **Période de commentaires publics** (minimum 30 jours)
4. **Révision finale** par l'équipe du système de conception
5. **Migration** vers les modèles recommandés ou obligatoires
6. **Archivage** de la version expérimentale

## Récupération et retour en arrière

### Récupération d'une version antérieure

Pour récupérer une version antérieure d'un modèle expérimental :

```bash
# Lister les versions archivées
git tag -l "experimental-[nom-du-modele]-v*"

# Créer une nouvelle branche à partir d'une version antérieure
git checkout -b experimental-[nom-du-modele]-v[nouvelle-version] [tag-version-antérieure]
```

### Rollback en cas de problème

Si un modèle expérimental cause des problèmes :

1. **Créer un issue** décrivant le problème
2. **Créer une branche de correction** : `experimental-[nom]-hotfix-v[version]`
3. **Appliquer les corrections nécessaires**
4. **Tester** et valider les corrections
5. **Soumettre une PR** de correction urgente

## Ressources additionnelles

- [Procédure de contribution générale](../communaute/procedure-contribution.md)
- [Guide de style pour la documentation](../guide-redaction/)
- [Standards d'accessibilité](../specifications/)
- [Modèles de pull request](../.github/pull_request_template/)

---

**Date de modification :** {{ page.dateModified }}