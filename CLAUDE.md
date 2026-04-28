# ScholaTogo — Application d'Aide Scolaire pour le Togo

## Description
Application web d'aide scolaire pour les élèves togolais, du CP à la Terminale. Strictement offline-first : toutes les données sont stockées dans le localStorage, sans backend ni connexion réseau requise. Installable en tant que PWA.

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
| Styles | CSS3 pur — variables CSS + `[data-theme="dark"]`, mobile-first 360 px |
| Police | Nunito (Google Fonts CDN) |
| Persistance | `localStorage` uniquement — aucun backend |
| Build | `vite build` — `base: './'` pour compatibilité offline |
| PWA | `manifest.json` + Service Worker cache-first (`public/sw.js`) |

## Structure des fichiers
```
Aide_scolaire/
├── CLAUDE.md               # Ce fichier
├── .gitignore              # node_modules/, dist/, .DS_Store, *.local
├── package.json            # name: "scholatogo", React + react-router-dom + Vite
├── vite.config.js          # base: './' (chemins relatifs pour offline)
├── index.html              # Point d'entrée HTML, Nunito, theme-color, PWA meta + SW
│
├── public/
│   ├── manifest.json       # PWA manifest — name, icons, display: standalone
│   └── sw.js               # Service Worker — stratégie cache-first, CACHE_NAME: scholatogo-v2
│
└── src/
    ├── main.jsx            # ReactDOM.render dans HashRouter + applyTheme() au démarrage
    ├── App.jsx             # Routes + RequireAuth + Layout (useLocation) + Navbar conditionnelle
    ├── index.css           # Design system complet + mode sombre [data-theme="dark"]
    │
    ├── components/
    │   └── Navbar.jsx      # Barre de navigation bas — 5 onglets (NavLink)
    │
    ├── pages/
    │   ├── Onboarding.jsx  # Inscription 4 étapes : langue → cycle → classe → prénom
    │   ├── Dashboard.jsx   # Accueil : streak, KPIs, dernière leçon, matières, badges
    │   ├── Matieres.jsx    # Liste des matières avec barres de progression
    │   ├── Lecons.jsx      # Liste des leçons d'une matière (/:matiereId)
    │   ├── Lecon.jsx       # Lecteur de leçon + blocs de contenu (/:leconId)
    │   ├── Quiz.jsx        # QCM 5 questions, score, popup badge (/:leconId)
    │   ├── Progres.jsx     # KPIs, progression par matière, grille badges
    │   ├── Komi.jsx        # Chatbot tuteur — ~30 règles thématiques locales
    │   └── Parametres.jsx  # Thème clair/sombre, profil, à propos, réinitialisation
    │
    ├── data/
    │   └── content.js      # Toutes les données pédagogiques statiques (~38 leçons)
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
| `#/parametres` | `Parametres` | RequireAuth |

`RequireAuth` : si `localStorage` ne contient pas de profil élève → redirect `/onboarding`.

**Important :** La Navbar est rendue dans un composant `Layout` séparé utilisant `useLocation()` (hook réactif React Router). Ne pas utiliser `location.hash` directement — il n'est pas réactif dans React et fait ignorer les re-renders.

## Données pédagogiques (`src/data/content.js`)

### Exports
| Export | Type | Description |
|---|---|---|
| `CYCLES` | Array | 4 cycles : maternelle, primaire, college, lycee |
| `CLASSES` | Array | 15 classes : PS, MS, GS, CP → Terminale |
| `MATIERES` | Array | 8 matières avec couleur et cycles associés |
| `BADGES` | Array | 7 badges avec condition affichée |
| `LECONS` | Array | ~38 leçons réparties du CP à la Terminale |
| `QUESTIONS` | Object | `{ [leconId]: Question[] }` — 5 questions par leçon |

### Leçons disponibles (v2)
| ID | Classe | Matière | Titre |
|---|---|---|---|
| `cp-maths-1` | CP | Maths | Les chiffres de 0 à 5 |
| `cp-maths-2` | CP | Maths | Les chiffres de 6 à 10 |
| `cp-maths-3` | CP | Maths | L'addition simple |
| `cp-fr-1` | CP | Français | Les voyelles : a, e, i, o, u |
| `cp-fr-2` | CP | Français | Former des syllabes |
| `cm1-maths-1` | CM1 | Maths | La multiplication |
| `cm1-maths-2` | CM1 | Maths | La division |
| `cm2-maths-1` | CM2 | Maths | Les fractions simples |
| `6e-maths-1` | 6ème | Maths | Les nombres relatifs |
| `6e-maths-2` | 6ème | Maths | Périmètre et aire |
| `6e-fr-1` | 6ème | Français | Le présent de l'indicatif |
| `6e-svt-1` | 6ème | SVT | Classification des êtres vivants |
| `5e-maths-1` | 5ème | Maths | Les fractions — addition et soustraction |
| `5e-maths-2` | 5ème | Maths | Les angles |
| `5e-svt-1` | 5ème | SVT | La respiration |
| `5e-hist-1` | 5ème | Histoire-Géo | La traite négrière |
| `4e-maths-1` | 4ème | Maths | Le théorème de Pythagore |
| `4e-maths-2` | 4ème | Maths | Les équations du 1er degré |
| `4e-maths-3` | 4ème | Maths | La proportionnalité |
| `4e-svt-1` | 4ème | SVT | La cellule, unité du vivant |
| `4e-svt-2` | 4ème | SVT | La photosynthèse |
| `4e-fr-1` | 4ème | Français | La nature des mots |
| `4e-hist-1` | 4ème | Histoire-Géo | La colonisation et le partage de l'Afrique |
| `4e-phys-1` | 4ème | Physique-Chimie | Les circuits électriques |
| `4e-phys-2` | 4ème | Physique-Chimie | La lumière et l'optique |
| `4e-angl-1` | 4ème | Anglais | Present simple vs present continuous |
| `3e-maths-1` | 3ème | Maths | Statistiques |
| `3e-hist-1` | 3ème | Histoire-Géo | L'indépendance du Togo (1960) |
| `3e-svt-1` | 3ème | SVT | La digestion |
| `3e-phys-1` | 3ème | Physique-Chimie | Les forces et le mouvement |
| `3e-angl-1` | 3ème | Anglais | Past simple |
| `tle-svt-1` | Terminale | SVT | L'ADN et la génétique |
| `tle-svt-3` | Terminale | SVT | Le système immunitaire |
| `tle-maths-1` | Terminale | Maths | Les dérivées |
| `tle-maths-2` | Terminale | Maths | Les suites numériques |
| `tle-maths-3` | Terminale | Maths | Les probabilités |
| `tle-phys-1` | Terminale | Physique-Chimie | La mécanique newtonienne |
| `tle-philo-1` | Terminale | Philosophie | La philosophie Ubuntu |

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
| `ast-theme` | `'light' \| 'dark'` — thème persisté |

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
| `getTheme()` | Retourne `'light'` ou `'dark'` (défaut : `'light'`) |
| `saveTheme(theme)` | Persiste le thème ET applique `data-theme` sur `<html>` |
| `applyTheme()` | Lit le thème sauvegardé et l'applique — appelé dans `main.jsx` au démarrage |

## Mode sombre

Implémenté via l'attribut `data-theme="dark"` sur `document.documentElement`.

- **Activation** : `saveTheme('dark')` met à jour localStorage ET l'attribut HTML
- **Démarrage** : `applyTheme()` est appelé dans `main.jsx` avant le rendu React — évite le flash de thème
- **CSS** : toutes les variables sont redéfinies sous `[data-theme="dark"] { ... }` dans `index.css`

### Variables sombres principales
| Variable | Mode clair | Mode sombre |
|---|---|---|
| `--bg` | `#F8F9FA` | `#0f1923` |
| `--surface` | `#FFFFFF` | `#1a2535` |
| `--text` | `#2C3E50` | `#e8edf4` |
| `--border` | `#E2E8F0` | `#2a3a4e` |
| `--primary` | `#1B6CA8` | `#4a9fd4` |

## PWA (`public/manifest.json` + `public/sw.js`)

### manifest.json
```json
{
  "name": "ScholaTogo",
  "short_name": "ScholaTogo",
  "display": "standalone",
  "start_url": "./",
  "theme_color": "#1B6CA8",
  "background_color": "#1B6CA8",
  "categories": ["education"]
}
```

### Service Worker (`sw.js`)
- Stratégie **cache-first** — toutes les requêtes sont servies depuis le cache si disponible
- Cache nommé `scholatogo-v2` — incrémenter à chaque déploiement pour forcer la mise à jour
- Lors du développement Vite, vider manuellement le cache SW si les fichiers compilés ne se mettent pas à jour (problème connu : le SW peut servir une version stale de l'app)

### Enregistrement (dans `index.html`)
```html
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));
  }
</script>
```

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

- **Mécanisme :** tableau `RULES` avec `{ keys: string[], fn: (eleve) => string[] }` — ~30 règles thématiques
- **Matching :** `lower.includes(k)` après normalisation Unicode NFD (suppression des accents)
- **Fallback :** 3 messages d'invitation à reformuler si aucune règle ne correspond
- **Suggestions :** chips affichés uniquement au 1er chargement (avant tout message)
- **Persistance :** historique dans `localStorage` via `saveKomiMessage` / `getKomiHistory`

### Thèmes couverts par Komi
Mathématiques (multiplication, tables, fractions, angles, suites, probabilités), physique (forces/Newton, circuits électriques, optique/lumière), SVT (digestion, respiration, immunité/vaccin), histoire (colonisation, Berlin, traite négrière), anglais (salutations/greetings), philosophie (Ubuntu), santé (sommeil), motivation générale.

## Navbar (`src/components/Navbar.jsx`)
5 onglets utilisant `<NavLink>` de React Router (classe `active` automatique) :

| Onglet | Route | Icône |
|---|---|---|
| Accueil | `/dashboard` | 🏠 |
| Cours | `/matieres` | 📚 |
| Progrès | `/progres` | 📊 |
| Komi | `/komi` | 🤖 |
| Réglages | `/parametres` | ⚙️ |

La Navbar est cachée sur `/onboarding`, `/lecon/` et `/quiz/`.

## Design system (`src/index.css`)

### Variables CSS principales (mode clair)
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
- `.param-card` / `.param-row` / `.param-icon` / `.param-label` / `.param-sub` — page Paramètres
- `.theme-toggle` / `.theme-toggle.on` / `.thumb` — toggle thème (switch CSS animé)

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
Nom dans `.claude/launch.json` : `scholatogo` (port 4321 en session active).

## Piège connu — Service Worker en développement
Le SW cache les assets compilés par Vite. Si une modification de code n'est pas reflétée après rechargement :
1. Ouvrir DevTools → Application → Service Workers → Unregister
2. Ouvrir DevTools → Application → Cache Storage → supprimer `scholatogo-v2`
3. Recharger la page

Ou depuis la console : `navigator.serviceWorker.getRegistrations().then(rs => rs.forEach(r => r.unregister())); caches.keys().then(ks => ks.forEach(k => caches.delete(k)))`
