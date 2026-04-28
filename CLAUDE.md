# ScholaTogo — Application d'Aide Scolaire pour le Togo

## Description
Application web d'aide scolaire pour les élèves togolais, du CP à la Terminale. Strictement offline-first : toutes les données sont stockées dans le localStorage, sans backend ni connexion réseau requise.

**Tagline :** *"Apprends à ton rythme, partout au Togo"*

## Dépôt GitHub
- **URL** : https://github.com/Tkatansaou/scholatogo
- **Compte** : Tkatansaou
- **Branche principale** : `main`

## Stack technique
| Couche | Technologie |
|---|---|
| Framework | React 18 + Vite 5 |
| Routeur | react-router-dom v6 — **HashRouter** (offline, sans serveur) |
| Styles | CSS3 pur — variables CSS, mobile-first 360 px |
| Police | Nunito (Google Fonts CDN) |
| Persistance | `localStorage` uniquement — aucun backend |
| Build | `vite build` — `base: './'` pour compatibilité offline |

## Structure des fichiers
```
Aide_scolaire/
├── CLAUDE.md               # Ce fichier
├── .gitignore              # node_modules/, dist/, .DS_Store, *.local
├── package.json            # name: "scholatogo", React + react-router-dom + Vite
├── vite.config.js          # base: './' (chemins relatifs pour offline)
├── index.html              # Point d'entrée HTML, Nunito, theme-color
│
└── src/
    ├── main.jsx            # ReactDOM.render dans HashRouter
    ├── App.jsx             # Routes + RequireAuth + Navbar conditionnelle
    ├── index.css           # Design system complet (~500 lignes)
    │
    ├── components/
    │   └── Navbar.jsx      # Barre de navigation bas — 4 onglets
    │
    ├── pages/
    │   ├── Onboarding.jsx  # Inscription 4 étapes : langue → cycle → classe → prénom
    │   ├── Dashboard.jsx   # Accueil : streak, KPIs, dernière leçon, matières, badges
    │   ├── Matieres.jsx    # Liste des matières avec barres de progression
    │   ├── Lecons.jsx      # Liste des leçons d'une matière (/:matiereId)
    │   ├── Lecon.jsx       # Lecteur de leçon + blocs de contenu (/:leconId)
    │   ├── Quiz.jsx        # QCM 5 questions, score, popup badge (/:leconId)
    │   ├── Progres.jsx     # KPIs, progression par matière, grille badges
    │   └── Komi.jsx        # Chatbot tuteur IA — base de règles locale
    │
    ├── data/
    │   └── content.js      # Toutes les données pédagogiques statiques
    │
    └── utils/
        └── storage.js      # Toutes les opérations localStorage
```

## Routes (HashRouter)
| Hash | Composant | Guard |
|---|---|---|
| `#/` | → redirect | — |
| `#/onboarding` | `Onboarding` | public |
| `#/dashboard` | `Dashboard` | RequireAuth |
| `#/matieres` | `Matieres` | RequireAuth |
| `#/lecons/:matiereId` | `Lecons` | RequireAuth |
| `#/lecon/:leconId` | `Lecon` | RequireAuth |
| `#/quiz/:leconId` | `Quiz` | RequireAuth |
| `#/progres` | `Progres` | RequireAuth |
| `#/komi` | `Komi` | RequireAuth |

`RequireAuth` : si `localStorage` ne contient pas de profil élève → redirect `/onboarding`.

## Données pédagogiques (`src/data/content.js`)

### Exports
| Export | Type | Description |
|---|---|---|
| `CYCLES` | Array | 4 cycles : maternelle, primaire, college, lycee |
| `CLASSES` | Array | 15 classes : PS, MS, GS, CP → Terminale |
| `MATIERES` | Array | 8 matières avec couleur et cycles associés |
| `BADGES` | Array | 7 badges avec condition affichée |
| `LECONS` | Array | 15 leçons réparties sur CP, 4ème, 3ème, Terminale |
| `QUESTIONS` | Object | `{ [leconId]: Question[] }` — 5 questions par leçon |

### Leçons disponibles
| ID | Classe | Matière | Titre |
|---|---|---|---|
| `cp-maths-1` | CP | Maths | Les chiffres de 0 à 5 |
| `cp-maths-2` | CP | Maths | Les chiffres de 6 à 10 |
| `cp-maths-3` | CP | Maths | L'addition simple |
| `cp-fr-1` | CP | Français | Les voyelles : a, e, i, o, u |
| `cp-fr-2` | CP | Français | Former des syllabes |
| `4e-maths-1` | 4ème | Maths | Le théorème de Pythagore |
| `4e-maths-2` | 4ème | Maths | Les équations du 1er degré |
| `4e-maths-3` | 4ème | Maths | La proportionnalité |
| `4e-svt-1` | 4ème | SVT | La cellule, unité du vivant |
| `4e-svt-2` | 4ème | SVT | La photosynthèse |
| `4e-fr-1` | 4ème | Français | La nature des mots |
| `3e-maths-1` | 3ème | Maths | Statistiques |
| `3e-hist-1` | 3ème | Histoire-Géo | L'indépendance du Togo (1960) |
| `tle-svt-1` | Terminale | SVT | L'ADN et la génétique |
| `tle-maths-1` | Terminale | Maths | Les dérivées |

### Blocs de contenu d'une leçon
Chaque leçon est un tableau `contenu: Block[]`. Types disponibles :

| `type` | Rendu | Champs |
|---|---|---|
| `intro` | Encadré bleu — accroche | `texte` |
| `titre` | `<h3>` | `texte` |
| `texte` | Paragraphe (`pre-line`) | `texte` |
| `definition` | Encadré gris, titre en bleu | `titre`, `texte` |
| `exemple` | Encadré vert, badge "Exemple" | `texte` |
| `retenir` | Encadré orange, icône 📌 | `texte` |
| `formule` | Bloc sombre, police monospace | `texte` |
| `liste` | `<ul>` | `items: string[]` |

### Format d'une question quiz
```js
{
  id:          number,
  texte:       string,
  choix:       string[4],   // 4 choix A/B/C/D
  correct:     number,      // index (0-3) de la bonne réponse
  explication: string,      // affiché après réponse
}
```

## Persistance localStorage (`src/utils/storage.js`)

### Clés
| Clé | Contenu |
|---|---|
| `ast-eleve` | Profil élève `{ prenom, langue, cycleId, classeId, createdAt }` |
| `ast-progression` | `{ [leconId]: { statut, quizScore, tempsPasse, updatedAt } }` |
| `ast-streak` | `{ count, lastDate }` — lastDate = `Date.toDateString()` |
| `ast-badges` | `string[]` — IDs des badges débloqués |
| `ast-komi` | `Message[]` — historique du chat (max 100 messages) |

### Fonctions exportées
| Fonction | Description |
|---|---|
| `getEleve() / saveEleve() / clearEleve()` | CRUD profil ; `clearEleve` supprime toutes les clés |
| `getProgression()` | Objet complet `{ [leconId]: données }` |
| `saveLeconProgress(leconId, data)` | Merge partiel dans la progression |
| `getLeconProgress(leconId)` | Retourne `{ statut: 'todo' }` par défaut |
| `getStreak() / updateStreak()` | Streak quotidien — +1 si hier, reset sinon |
| `getBadges() / awardBadge(id)` | `awardBadge` retourne `false` si déjà possédé |
| `getStats()` | Calcule `lessonsCompleted, quizPassed, perfectQuiz, totalTime` |
| `checkAndAwardBadges()` | Évalue les 7 conditions, retourne les nouveaux IDs |
| `getKomiHistory() / saveKomiMessage(msg)` | Historique chat, trimé à 100 entrées |

## Gamification

### Badges (7 total)
| ID | Emoji | Condition |
|---|---|---|
| `premier-pas` | 🌟 | 1 leçon terminée |
| `assidu` | 📅 | 3 jours consécutifs |
| `curieux` | 🔍 | 5 leçons terminées |
| `studieux` | 📚 | 10 leçons terminées |
| `semaine-feu` | 🔥 | 7 jours consécutifs |
| `champion-quiz` | 🏆 | 10 quiz réussis à 80%+ |
| `perfectionniste` | 💯 | 1 quiz parfait (100%) |

### Streak
La fonction `updateStreak()` compare `Date().toDateString()` à la date sauvegardée :
- Même jour → pas de changement
- Hier → `count + 1`
- Autre → reset à `1`

## Tuteur Komi (`src/pages/Komi.jsx`)
Chatbot purement local — aucun appel API. Fonctionne offline.

- **Mécanisme :** tableau `RULES` avec `{ keys: string[], fn: (eleve) => string[] }` — 15 règles thématiques
- **Matching :** `lower.includes(k)` après normalisation Unicode (suppression des accents)
- **Fallback :** 3 messages d'invitation à reformuler si aucune règle ne correspond
- **Suggestions :** chips affichés uniquement au 1er chargement (avant tout message)
- **Persistance :** historique dans `localStorage` via `saveKomiMessage` / `getKomiHistory`

## Design system (`src/index.css`)

### Variables CSS principales
| Variable | Valeur | Usage |
|---|---|---|
| `--primary` | `#1B6CA8` | Bleu institutionnel — headers, boutons |
| `--secondary` | `#F5A623` | Jaune/or — accents, cartes "reprendre" |
| `--success` | `#27AE60` | Bonne réponse, leçon terminée |
| `--error` | `#E74C3C` | Mauvaise réponse |
| `--bg` | `#F8F9FA` | Fond de page |
| `--surface` | `#FFFFFF` | Fond des cartes |
| `--text` | `#2C3E50` | Texte principal |
| `--text-muted` | `#8492A6` | Texte secondaire |
| `--radius` | `12px` | Arrondi par défaut |

### Classes utilitaires notables
- `.page` / `.page-header` / `.page-inner` — layout page standard
- `.btn.btn-primary` / `.btn.btn-secondary` — boutons
- `.block-intro` / `.block-retenir` / `.block-formule` / `.block-definition` — blocs leçon
- `.choice-btn` / `.choice-btn.correct` / `.choice-btn.wrong` — boutons quiz
- `.lecon-reader` / `.lecon-top` / `.lecon-body` / `.lecon-footer` — lecteur leçon
- `.komi-page` / `.komi-header` / `.komi-messages` / `.msg.msg-komi` / `.msg.msg-user` — chat

## Matières disponibles par cycle
| Matière | Couleur | Cycles |
|---|---|---|
| Mathématiques | `#3b82f6` | maternelle, primaire, college, lycee |
| Français | `#8b5cf6` | maternelle, primaire, college, lycee |
| SVT | `#10b981` | primaire, college, lycee |
| Physique-Chimie | `#f59e0b` | college, lycee |
| Histoire-Géo | `#ef4444` | primaire, college, lycee |
| Anglais | `#06b6d4` | college, lycee |
| Philosophie | `#6366f1` | lycee |
| EMC | `#84cc16` | primaire, college |

## Conventions de code
- Composants React en **PascalCase** — ex : `Dashboard.jsx`, `Navbar.jsx`
- Fonctions et variables en **camelCase** — ex : `getEleve()`, `saveLeconProgress()`
- Constantes globales en **MAJUSCULES** — ex : `LECONS`, `MATIERES`, `BADGES`
- IDs de leçon : `{classe}-{matiere}-{n}` — ex : `4e-maths-1`, `cp-fr-2`
- Tout le texte affiché en **français**
- Pas de commentaires sauf logique non évidente

## Serveur de développement
```bash
npm install
npm run dev
# → http://localhost:5173
```
Nom dans `.claude/launch.json` : `scholatogo` (port 5173).
