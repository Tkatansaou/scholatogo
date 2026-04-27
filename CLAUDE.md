# ScholaTogo — Application d'Aide Scolaire pour le Togo

## Description
Application mobile et web d'aide scolaire destinée aux élèves togolais, de la maternelle à la terminale. Strictement alignée sur le programme officiel togolais, conçue pour fonctionner en mode hors ligne, sur smartphones Android à faible connectivité.

**Tagline :** *"Apprends à ton rythme, partout au Togo"*

## Dépôt GitHub
- **URL** : https://github.com/Tkatansaou/scholatogo *(à renommer)*
- **Compte** : Tkatansaou
- **Branche principale** : `main`

## Stack technique
| Couche | Technologie |
|---|---|
| Mobile | React Native + Expo (Android prioritaire) |
| Web PWA | React + Vite (fallback navigateur) |
| Backend | Node.js + Express |
| Base de données | PostgreSQL + Redis (cache) |
| Médias | Cloudflare R2 (audio, images) |
| IA Tuteur | Claude API (Haiku — faible coût) |
| Sync offline | PouchDB ↔ CouchDB |
| Auth | JWT + OTP SMS (Africa's Talking) |
| SMS | Africa's Talking (couverture Togo, XOF) |

## Structure des fichiers
```
scholatogo/
├── CLAUDE.md                   # Ce fichier
├── .gitignore
├── package.json
├── vite.config.js
├── index.html
│
├── src/
│   ├── main.jsx                # Point d'entrée React
│   ├── App.jsx                 # Routeur principal
│   ├── index.css               # Styles globaux + variables CSS
│   │
│   ├── components/             # Composants réutilisables
│   │   ├── Navbar.jsx
│   │   ├── LessonCard.jsx
│   │   ├── QuizQuestion.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── BadgeDisplay.jsx
│   │   └── KomiChat.jsx        # Tuteur IA
│   │
│   ├── pages/                  # Écrans principaux
│   │   ├── Onboarding.jsx      # Langue → OTP → Classe
│   │   ├── Dashboard.jsx       # Accueil élève
│   │   ├── Matieres.jsx        # Liste des matières
│   │   ├── Lecon.jsx           # Lecteur de leçon
│   │   ├── Quiz.jsx            # Évaluation
│   │   ├── Progres.jsx         # Tableau de bord progrès
│   │   └── Profil.jsx          # Paramètres élève
│   │
│   ├── data/                   # Contenu pédagogique (JSON/Markdown)
│   │   ├── cycles.json         # Maternelle, Primaire, Collège, Lycée
│   │   ├── matieres.json       # Maths, Français, SVT, PC, HG, Anglais...
│   │   ├── primaire/
│   │   │   ├── maths/
│   │   │   └── francais/
│   │   ├── college/
│   │   │   ├── maths/
│   │   │   ├── francais/
│   │   │   ├── svt/
│   │   │   └── physique-chimie/
│   │   └── lycee/
│   │       ├── serie-a/
│   │       ├── serie-c/
│   │       ├── serie-d/
│   │       └── serie-g/
│   │
│   ├── hooks/                  # Hooks React personnalisés
│   │   ├── useProgression.js
│   │   ├── useOffline.js
│   │   └── useKomi.js          # Appels API tuteur IA
│   │
│   └── utils/
│       ├── storage.js          # localStorage / AsyncStorage
│       ├── sync.js             # Synchronisation offline
│       └── formatters.js       # Dates, scores, durées
│
├── public/
│   ├── audio/                  # Narrations MP3 des leçons
│   ├── images/                 # Schémas, illustrations
│   └── icons/                  # Icônes matières + badges
│
└── backend/                    # API Node.js (dossier séparé ou repo distinct)
    ├── src/
    │   ├── routes/
    │   ├── models/
    │   ├── services/
    │   └── middleware/
    └── package.json
```

## Organisation pédagogique

### Cycles et classes
| Cycle | Classes | Examens |
|---|---|---|
| Maternelle | Petite, Moyenne, Grande section | — |
| Primaire | CP, CE1, CE2, CM1, CM2 | CEPD |
| Collège | 6ème, 5ème, 4ème, 3ème | BEPC |
| Lycée | 2nde, 1ère, Terminale (A/C/D/G) | BAC |

### Matières par cycle
| Matière | Primaire | Collège | Lycée |
|---|---|---|---|
| Mathématiques | ✓ | ✓ | ✓ |
| Français | ✓ | ✓ | ✓ |
| SVT | ✓ | ✓ | ✓ (série D) |
| Physique-Chimie | — | ✓ | ✓ (série C/D) |
| Histoire-Géographie | ✓ | ✓ | ✓ |
| Anglais | — | ✓ | ✓ |
| Philosophie | — | — | ✓ |
| Économie/Gestion | — | — | ✓ (série G) |
| EMC | ✓ | ✓ | — |

## Modèle de données

### Leçon
```js
{
  id:          string,        // ex: "maths-4e-pythagore"
  titre:       string,
  classe_id:   string,        // "4eme"
  matiere_id:  string,        // "maths"
  chapitre_id: string,
  ordre:       number,
  contenu_md:  string,        // Markdown enrichi
  audio_url:   string,        // Fichier MP3 narré
  duree_min:   number,        // Durée estimée
  offline_kb:  number,        // Taille téléchargée
  langue:      'fr' | 'ewe' | 'kabiye'
}
```

### Progression élève
```js
{
  eleve_id:    string,
  lecon_id:    string,
  statut:      'non_vu' | 'en_cours' | 'termine',
  score:       number,        // 0-100
  temps_passe: number,        // secondes
  date_vu:     string         // ISO
}
```

### Question quiz
```js
{
  id:          string,
  lecon_id:    string,
  type:        'qcm' | 'vrai_faux' | 'texte_trous' | 'calcul' | 'redaction',
  enonce:      string,
  points:      number,
  choix:       [{ texte, est_correct, explication }],
  difficulte:  1 | 2 | 3
}
```

## Tuteur IA "Komi"

Prompt système :
```
Tu es Komi, un enseignant togolais bienveillant. Tu aides un élève de {classe}
qui étudie "{titre_lecon}" ({matiere}). Programme officiel togolais.
Réponds en {langue} simple, avec des exemples du quotidien togolais.
Maximum 3 phrases. Si hors sujet, rappelle gentiment le sujet de la leçon.
```

- **Modèle :** `claude-haiku-4-5-20251001` (coût ~$0.01/mois/élève actif)
- **Limite :** 5 questions/jour (offre gratuite), illimité (premium)

## Fonctionnalités

### Offre Gratuite
- Toutes les leçons primaire et collège
- 3 quiz par jour
- Tuteur Komi : 5 questions/jour
- Streak + badges de base
- Cache offline : 1 chapitre

### Offre Premium (500 FCFA/mois)
- Contenu lycée + annales BAC/BEPC corrigées
- Quiz et tuteur illimités
- Offline illimité (tout le niveau téléchargeable)
- Rapport hebdomadaire parent (SMS)
- Plan de révision personnalisé (J-60 examen)

**Paiement :** Flooz (Moov), T-Money (Togocel) — sans carte bancaire

## Mode hors ligne
- Compression : images WebP < 50 KB, audio Opus 32 kbps, texte < 5 KB/leçon
- Téléchargement par chapitre (bouton explicite)
- Sync différée : quiz offline uploadés à la prochaine connexion
- Indicateur visuel "hors ligne" dans le header

## Design & UI

### Palette de couleurs
| Variable CSS | Valeur | Usage |
|---|---|---|
| `--primary` | `#1B6CA8` | Bleu institutionnel — confiance |
| `--secondary` | `#F5A623` | Or/Soleil — énergie, accents |
| `--success` | `#27AE60` | Bonne réponse |
| `--error` | `#E74C3C` | Mauvaise réponse |
| `--bg` | `#F8F9FA` | Fond (lisible en plein soleil) |
| `--text` | `#2C3E50` | Texte principal |

- **Police :** Nunito (ronde, accessible aux jeunes)
- **Taille de base :** 16px (petits écrans Android)
- **Mobile-first :** tout conçu pour écran 360px de large

## Gamification

### Badges clés
| Badge | Condition |
|---|---|
| "Premier pas" | Terminer sa 1ère leçon |
| "Semaine de feu" | 7 jours consécutifs |
| "Champion Maths" | 90%+ sur 10 quiz maths |
| "Prêt pour le BAC" | Finir tous les chapitres lycée |
| "Fierté du Togo" | Partager un résultat |

### Niveaux élève
`Débutant → Apprenti → Studieux → Expert → Maître → Légende`

## Innovations contextuelles

- **WhatsApp Bot :** quiz par message, zéro installation requise
- **SMS quotidiens :** leçon du jour à 6h00, via Africa's Talking
- **Bluetooth mesh :** partage de leçons entre élèves sans internet
- **Radio éducative :** émissions synchronisées avec les leçons de l'app

## Feuille de route

### MVP — 3 mois
- [ ] Onboarding (langue → OTP SMS → classe)
- [ ] Lecteur de leçon offline
- [ ] Maths + Français, primaire (10 leçons chacun)
- [ ] Quiz QCM avec score + correction
- [ ] Streak + 5 badges
- [ ] Tuteur Komi (Claude Haiku)
- [ ] APK Android téléchargeable directement

### Version Avancée — 6-12 mois
- [ ] Collège complet + annales BEPC
- [ ] Lycée complet (séries A, C, D, G) + annales BAC
- [ ] Audio narré par voix togolaises
- [ ] Détection de lacunes automatique
- [ ] Plan de révision personnalisé
- [ ] Tableau de bord enseignant
- [ ] Contenus en éwé et kabyè

### Vision Long Terme
- [ ] Expansion CEDEAO (Bénin, Côte d'Ivoire, Ghana)
- [ ] Génération automatique d'exercices par IA
- [ ] Correction automatique des rédactions (NLP)
- [ ] Classe virtuelle enseignant ↔ élèves ruraux

## Conventions de code
- Composants React en **PascalCase**
- Fonctions et variables en **camelCase**
- Constantes globales en **MAJUSCULES**
- IDs de contenu : `{matiere}-{classe}-{slug}` (ex: `maths-4e-pythagore`)
- Texte affiché toujours en **français** (autres langues via fichiers i18n)
- Pas de commentaires sauf logique non évidente

## Serveur de développement
```bash
npm install
npm run dev
# → http://localhost:5173
```
