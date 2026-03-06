# Gabarits expérimentaux

Ce répertoire contient les nouveaux gabarits en cours de développement et de test.

## Structure recommandée pour chaque gabarit

```
nom-du-gabarit/
├── README.md              # Documentation du gabarit
├── exemples/              # Exemples d'implémentation
│   ├── gabarit-base.html
│   ├── avec-navigation.html
│   └── responsive.html
├── assets/                # Ressources du gabarit
│   ├── css/
│   ├── js/
│   └── images/
├── tests/                 # Tests et validation
│   ├── accessibilite.md
│   ├── compatibilite.md
│   └── performance.md
└── versions/              # Historique des versions
    ├── v1.0/
    └── v1.1/
```

## Template de documentation

Chaque gabarit doit inclure :

### Contexte d'utilisation
- Types de sites ou applications
- Secteurs ou ministères ciblés
- Besoins fonctionnels couverts

### Architecture du gabarit
- Structure HTML sémantique
- Zones de contenu principales
- Points d'extension et personnalisation

### Spécifications techniques
- Dépendances et prérequis
- Instructions d'installation
- Configuration et personnalisation

### Tests et conformité
- Validation HTML/CSS
- Tests d'accessibilité WCAG
- Tests multi-navigateurs
- Performance et optimisation

### Documentation d'utilisation
- Guide d'implémentation
- Exemples pratiques
- Bonnes pratiques
- Dépannage courant