---
altLangPage: https://design.canada.ca/experimental-templates/workflow.html
date: null
dateModified: '2024-12-19'
description: "Guide pratique pour utiliser le contrôle de version des modèles expérimentaux"
title: "Guide de workflow - Modèles expérimentaux"
---

# Guide de workflow - Modèles expérimentaux

Ce guide fournit des instructions étape par étape pour utiliser le système de contrôle de version des modèles expérimentaux.

## Sur cette page

- [Démarrage rapide](#demarrage)
- [Créer un nouveau modèle expérimental](#nouveau)
- [Itérer sur un modèle existant](#iterer)
- [Soumettre pour révision](#revision)
- [Transition vers approuvé](#transition)
- [Récupération et rollback](#recuperation)

## Démarrage rapide {#demarrage}

### Prérequis

- Accès en écriture au dépôt ou capacité à créer des forks
- Git installé et configuré
- Connaissance de base de Git et GitHub

### Installation initiale

```bash
# Cloner le dépôt
git clone https://github.com/canada-ca/systeme-conception.git
cd systeme-conception

# Configurer Git si nécessaire
git config user.name "Votre Nom"
git config user.email "votre.email@canada.ca"
```

## Créer un nouveau modèle expérimental {#nouveau}

### Étape 1 : Planification

1. **Ouvrir un issue** décrivant :
   - Le problème à résoudre
   - L'hypothèse de solution
   - Les cas d'usage ciblés

2. **Définir le type et le nom** :
   - Type : `composant`, `modele`, `gabarit`, ou `configuration`
   - Nom descriptif et court
   - Version initiale : `v1`

### Étape 2 : Créer la branche

```bash
# S'assurer d'être sur master et à jour
git checkout master
git pull origin master

# Créer la branche expérimentale
git checkout -b experimental-composant-bouton-urgence-v1

# Ou pour un modèle de page
git checkout -b experimental-modele-page-evenement-v1
```

### Étape 3 : Structure du répertoire

```bash
# Créer la structure de base (exemple pour un composant)
mkdir -p modeles-experimentaux/composants/bouton-urgence
cd modeles-experimentaux/composants/bouton-urgence

# Créer les répertoires standards
mkdir -p {exemples,styles,scripts,tests,versions}

# Créer le README initial
touch README.md
```

### Étape 4 : Développement initial

1. **Créer le README** avec :
   - Description du modèle
   - Objectif et cas d'usage
   - Instructions d'utilisation

2. **Développer le prototype** :
   - Code HTML/CSS/JS
   - Exemples fonctionnels
   - Variations si nécessaire

3. **Documenter les spécifications** :
   - Règles de conception
   - Contraintes techniques
   - Instructions d'intégration

### Étape 5 : Tests et validation

```bash
# Tests d'accessibilité (exemple avec axe-core)
npm install -g axe-core
axe-core exemples/basique.html

# Validation HTML/CSS
# (selon les outils disponibles dans le projet)
```

### Étape 6 : Premier commit

```bash
# Ajouter tous les fichiers
git add modeles-experimentaux/composants/bouton-urgence/

# Commit avec message descriptif
git commit -m "feat: ajout composant expérimental bouton-urgence v1

- Prototype fonctionnel avec exemples
- Évaluation d'accessibilité complétée
- Documentation de base incluse

Issue: #123"

# Pousser la branche
git push origin experimental-composant-bouton-urgence-v1
```

## Itérer sur un modèle existant {#iterer}

### Modifications mineures (v1.0 → v1.1)

```bash
# Basculer sur la branche existante
git checkout experimental-composant-bouton-urgence-v1

# S'assurer d'être à jour
git pull origin experimental-composant-bouton-urgence-v1

# Faire les modifications
# ... développement ...

# Archiver la version précédente si nécessaire
mkdir -p modeles-experimentaux/composants/bouton-urgence/versions/v1.0
cp -r modeles-experimentaux/composants/bouton-urgence/*.html versions/v1.0/

# Mettre à jour la documentation
# Modifier README.md, changelog, etc.

# Commit des changements
git add .
git commit -m "feat: bouton-urgence v1.1 - amélioration du contraste

- Amélioration du contraste selon WCAG 2.1 AA
- Correction bug d'affichage sur mobile
- Mise à jour exemples et documentation"

git push origin experimental-composant-bouton-urgence-v1
```

### Changements majeurs (v1.x → v2.0)

```bash
# Créer une nouvelle branche pour la version majeure
git checkout master
git pull origin master
git checkout -b experimental-composant-bouton-urgence-v2

# Archiver complètement la version précédente
mkdir -p modeles-experimentaux/versions/composants/bouton-urgence-v1.0
git show experimental-composant-bouton-urgence-v1:modeles-experimentaux/composants/bouton-urgence/ > bouton-urgence-v1-archive.tar

# Développer la nouvelle version
# ... changements majeurs ...

git add .
git commit -m "feat: bouton-urgence v2.0 - refonte majeure

BREAKING CHANGES:
- Nouvelle API CSS avec custom properties
- Structure HTML simplifiée
- Support natif du dark mode

Issue: #124"

git push origin experimental-composant-bouton-urgence-v2
```

## Soumettre pour révision {#revision}

### Préparation de la pull request

1. **Vérifier la complétude** :
   ```bash
   # Checklist automatique
   ls modeles-experimentaux/composants/bouton-urgence/
   # Vérifier : README.md, exemples/, tests/, etc.
   ```

2. **Tests finaux** :
   ```bash
   # Tests d'accessibilité
   # Tests de performance
   # Validation du code
   ```

3. **Documentation bilingue** :
   - Traduire README et documentation
   - Vérifier la cohérence terminologique

### Créer la pull request

1. **Sur GitHub** : Ouvrir une PR de la branche expérimentale vers `master`

2. **Utiliser le template** : `.github/pull_request_template/experimental-model.md`

3. **Compléter toutes les sections** :
   - Description du modèle
   - Checklist de conformité
   - Phase de développement
   - Impact et compatibilité

4. **Assigner les réviseurs** appropriés

### Gérer les retours

```bash
# Faire les modifications demandées
# ... corrections ...

# Commit et push des corrections
git add .
git commit -m "fix: corrections suite révision communautaire

- Amélioration contraste bouton focus
- Ajout exemple avec icône
- Correction documentation EN"

git push origin experimental-composant-bouton-urgence-v1
```

## Transition vers approuvé {#transition}

### Quand demander la transition

- Le modèle a été testé en production
- Retours positifs de la communauté
- Tous les critères de stabilité respectés
- Demande d'intégration officielle

### Processus de transition

1. **Créer une nouvelle PR** avec le template `experimental-to-approved.md`

2. **Documenter l'usage en production** :
   - Sites qui utilisent le modèle
   - Métriques d'adoption
   - Retours utilisateurs

3. **Tests de régression complets**

4. **Migration du code** vers `modeles-recommandes/` ou `modeles-obligatoire/`

## Récupération et rollback {#recuperation}

### Récupérer une version archivée

```bash
# Lister les versions disponibles
git tag -l "experimental-bouton-urgence-v*"
# ou regarder dans modeles-experimentaux/versions/

# Créer une branche à partir d'une version archivée
git checkout -b experimental-bouton-urgence-v1.2.1-recovery experimental-bouton-urgence-v1.2

# Ou récupérer depuis l'archive
cp -r modeles-experimentaux/versions/composants/bouton-urgence-v1.0/* modeles-experimentaux/composants/bouton-urgence/
```

### Rollback en cas de problème

```bash
# Revenir à la version précédente
git checkout experimental-composant-bouton-urgence-v1
git revert [commit-hash]

# Ou créer une branche de correction rapide
git checkout -b experimental-composant-bouton-urgence-v1-hotfix
# ... corrections ...
git commit -m "hotfix: correction problème critique"
```

## Bonnes pratiques

### Messages de commit

```bash
# Format recommandé
"[type]: [description courte]

[description détaillée optionnelle]

[BREAKING CHANGES si applicable]

Issue: #numéro"

# Types : feat, fix, docs, style, refactor, test, chore
```

### Gestion des branches

- **Ne jamais** développer directement sur `master`
- **Toujours** partir de `master` pour une nouvelle version
- **Nettoyer** les branches obsolètes après approbation
- **Documenter** les changements breaking

### Tests et qualité

- Tests d'accessibilité **obligatoires**
- Validation HTML/CSS **systématique**
- Tests multi-navigateurs **recommandés**
- Documentation **bilingue** requise

---

**Date de modification :** {{ page.dateModified }}