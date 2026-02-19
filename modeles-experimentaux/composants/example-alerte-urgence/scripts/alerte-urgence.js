/**
 * Composant Alerte d'urgence
 * Version expérimentale 1.0
 * Canada.ca Design System
 */

(function() {
    'use strict';

    class AlerteUrgence {
        constructor(element) {
            this.element = element;
            this.boutonFermer = element.querySelector('.gc-alerte-urgence__fermer');
            this.storageKey = 'alerte-urgence-fermee-' + this.getId();
            
            this.init();
        }

        init() {
            // Vérifier si l'alerte a déjà été fermée
            if (this.estFermee()) {
                this.cacher();
                return;
            }

            // Ajouter les gestionnaires d'événements
            if (this.boutonFermer) {
                this.boutonFermer.addEventListener('click', () => this.fermer());
                this.boutonFermer.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.fermer();
                    }
                });
            }

            // Support ESC pour fermer
            this.element.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.fermer();
                }
            });

            // Annoncer l'alerte aux lecteurs d'écran après un court délai
            setTimeout(() => {
                this.annoncerAlerte();
            }, 100);
        }

        fermer() {
            // Marquer comme fermée dans le stockage de session
            this.marquerCommeFermee();
            
            // Cacher l'alerte avec animation
            this.element.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
            this.element.style.opacity = '0';
            this.element.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                this.cacher();
            }, 300);
        }

        cacher() {
            this.element.setAttribute('aria-hidden', 'true');
            this.element.style.display = 'none';
        }

        estFermee() {
            return sessionStorage.getItem(this.storageKey) === 'true';
        }

        marquerCommeFermee() {
            sessionStorage.setItem(this.storageKey, 'true');
        }

        getId() {
            // Créer un ID basé sur le contenu de l'alerte
            const titre = this.element.querySelector('.gc-alerte-urgence__titre');
            const texte = this.element.querySelector('.gc-alerte-urgence__texte');
            
            const contenu = (titre ? titre.textContent : '') + (texte ? texte.textContent : '');
            return btoa(contenu).replace(/[^a-zA-Z0-9]/g, '').substring(0, 8);
        }

        annoncerAlerte() {
            // S'assurer que l'alerte est bien annoncée aux lecteurs d'écran
            this.element.setAttribute('aria-live', 'assertive');
            this.element.setAttribute('role', 'alert');
        }

        // Méthode statique pour réinitialiser toutes les alertes
        static reinitialiserTout() {
            const keys = Object.keys(sessionStorage);
            keys.forEach(key => {
                if (key.startsWith('alerte-urgence-fermee-')) {
                    sessionStorage.removeItem(key);
                }
            });
            
            // Recharger la page pour afficher toutes les alertes
            window.location.reload();
        }
    }

    // Auto-initialisation quand le DOM est prêt
    function initialiser() {
        const alertes = document.querySelectorAll('.gc-alerte-urgence');
        alertes.forEach(alerte => {
            if (!alerte.hasAttribute('data-gc-alerte-init')) {
                new AlerteUrgence(alerte);
                alerte.setAttribute('data-gc-alerte-init', 'true');
            }
        });
    }

    // Initialiser au chargement de la page
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialiser);
    } else {
        initialiser();
    }

    // Initialiser pour les éléments ajoutés dynamiquement
    if (window.MutationObserver) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        if (node.classList && node.classList.contains('gc-alerte-urgence')) {
                            if (!node.hasAttribute('data-gc-alerte-init')) {
                                new AlerteUrgence(node);
                                node.setAttribute('data-gc-alerte-init', 'true');
                            }
                        }
                        
                        // Vérifier les enfants aussi
                        const alertesEnfants = node.querySelectorAll('.gc-alerte-urgence');
                        alertesEnfants.forEach(alerte => {
                            if (!alerte.hasAttribute('data-gc-alerte-init')) {
                                new AlerteUrgence(alerte);
                                alerte.setAttribute('data-gc-alerte-init', 'true');
                            }
                        });
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Exposer la classe pour usage externe
    window.AlerteUrgence = AlerteUrgence;

})();