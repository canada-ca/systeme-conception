# Composants expérimentaux

Ce répertoire contient les nouveaux composants d'interface en cours de développement et de test.

## Structure recommandée pour chaque composant

```
nom-du-composant/
├── README.md              # Documentation du composant
├── exemples/              # Exemples d'utilisation
│   ├── basique.html
│   └── avance.html
├── styles/                # CSS spécifique au composant
│   └── composant.scss
├── scripts/               # JavaScript si nécessaire
│   └── composant.js
├── tests/                 # Tests d'accessibilité et fonctionnels
│   ├── accessibilite.md
│   └── utilisabilite.md
└── versions/              # Historique des versions
    ├── v1.0/
    └── v1.1/
```

## Template de documentation

Chaque composant doit inclure :

### Description
- Objectif et utilisation du composant
- Problème résolu
- Cas d'usage recommandés

### Spécifications techniques
- Dépendances CSS/JavaScript
- Compatibilité navigateur
- Instructions d'intégration

### Tests et validation
- Résultats tests d'accessibilité
- Retours utilisateurs
- Métriques de performance

### Journal de changements
- Versions et modifications
- Justifications des changements
- Migration entre versions