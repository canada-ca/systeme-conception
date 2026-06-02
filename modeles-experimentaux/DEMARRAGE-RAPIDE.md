# Guide de démarrage rapide - Modèles expérimentaux

Bienvenue dans le système de contrôle de version pour les modèles expérimentaux de Canada.ca ! Ce guide vous aidera à commencer rapidement.

## 🚀 Démarrage en 5 minutes

### 1. Je veux proposer un nouveau modèle

1. **Ouvrir un issue** avec le template [Proposition de modèle expérimental](.github/ISSUE_TEMPLATE/experimental-model-proposal.md)
2. **Décrire** le problème et votre solution proposée
3. **Attendre** les commentaires de la communauté

### 2. Je veux développer un modèle expérimental

1. **Créer une branche** : `experimental-[type]-[nom]-v1`
2. **Développer** dans le répertoire approprié (`modeles-experimentaux/[type]/[nom]/`)
3. **Suivre** la structure documentée dans le [guide workflow](modeles-experimentaux/guide-workflow.md)
4. **Soumettre** une pull request avec le template approprié

### 3. Je veux réviser un modèle expérimental

1. **Utiliser** les checklists dans les templates de PR
2. **Vérifier** la conformité d'accessibilité
3. **Tester** les exemples fournis
4. **Fournir** des commentaires constructifs

## 📁 Structure rapide

```
modeles-experimentaux/
├── composants/          # Nouveaux composants UI
├── modeles/             # Nouveaux modèles de page
├── gabarits/            # Nouveaux templates
├── configurations/      # Nouvelles configurations
├── versions/            # Archives historiques
├── README.md           # Documentation complète
├── guide-workflow.md   # Guide étape par étape
└── config.yml          # Configuration technique
```

## 🏷️ Conventions de nommage

### Branches
- `experimental-composant-bouton-urgence-v1`
- `experimental-modele-page-evenement-v2`
- `experimental-gabarit-service-v1`

### Répertoires
- `modeles-experimentaux/composants/nom-du-composant/`
- `modeles-experimentaux/modeles/nom-du-modele/`

## ✅ Checklist rapide pour un modèle

- [ ] **Documentation** complète et bilingue
- [ ] **Exemples** HTML fonctionnels
- [ ] **CSS** validé et responsive
- [ ] **JavaScript** si nécessaire
- [ ] **Tests d'accessibilité** WCAG 2.1 AA
- [ ] **Template de PR** complété

## 🔗 Ressources essentielles

### Documentation
- [📘 Documentation complète](modeles-experimentaux/README.md)
- [⚡ Guide workflow détaillé](modeles-experimentaux/guide-workflow.md)
- [🤝 Procédure de contribution](communaute/procedure-contribution.md)

### Templates
- [📝 Issue: Proposition de modèle](.github/ISSUE_TEMPLATE/experimental-model-proposal.md)
- [🔄 PR: Nouveau modèle expérimental](.github/pull_request_template/experimental-model.md)
- [✅ PR: Transition vers approuvé](.github/pull_request_template/experimental-to-approved.md)

### Exemple pratique
- [🚨 Composant Alerte d'urgence](modeles-experimentaux/composants/example-alerte-urgence/)

## 📞 Besoin d'aide ?

1. **Consultez** la documentation complète
2. **Regardez** l'exemple fourni
3. **Ouvrez** un issue avec vos questions
4. **Participez** aux discussions communautaires

## 🎯 Objectifs du système

✅ **Collaboration** - Faciliter le travail d'équipe  
✅ **Transparence** - Processus clairs et ouverts  
✅ **Qualité** - Standards élevés d'accessibilité  
✅ **Évolution** - Transition fluide vers l'approbation

---

**Commencez maintenant :** Ouvrez un [issue de proposition](.github/ISSUE_TEMPLATE/experimental-model-proposal.md) !