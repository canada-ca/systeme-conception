# Archive des versions

Ce répertoire contient l'archive des versions historiques des modèles expérimentaux.

## Organisation des archives

```
versions/
├── composants/
│   ├── nom-composant-v1.0/
│   ├── nom-composant-v1.1/
│   └── nom-composant-v2.0/
├── modeles/
│   ├── nom-modele-v1.0/
│   └── nom-modele-v2.0/
├── gabarits/
│   └── nom-gabarit-v1.0/
└── configurations/
    └── nom-config-v1.0/
```

## Convention de nommage

Les archives suivent le format :
`[nom-du-modele]-v[version-majeure].[version-mineure].[correctif]`

Exemples :
- `bouton-urgence-v1.0.0`
- `page-evenement-v2.1.0`
- `navigation-mobile-v1.2.3`

## Contenu de chaque archive

Chaque version archivée inclut :

### Documentation complète
- README avec état de la version
- Spécifications techniques
- Journal des changements
- Justifications des décisions

### Code et assets
- Fichiers HTML/CSS/JS
- Images et ressources
- Exemples fonctionnels
- Tests automatisés

### Métadonnées de version
- Date de création/archivage
- Contributeurs principaux
- Statut de la version (alpha, bêta, archivée)
- Raison de l'archivage

## Politique de rétention

- **Versions actives** : conservées indéfiniment
- **Versions remplacées** : conservées 2 ans minimum
- **Versions abandonnées** : conservées 1 an minimum
- **Versions approuvées** : migrées vers le système principal

## Récupération d'une version

Pour récupérer une version archivée :

1. Identifier la version dans ce répertoire
2. Copier le contenu vers un nouveau répertoire de travail
3. Créer une nouvelle branche pour les modifications
4. Suivre le processus standard de développement