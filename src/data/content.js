/* ── Cycles ──────────────────────────────────────────────── */
export const CYCLES = [
  { id: 'maternelle', nom: 'Maternelle', emoji: '🌱', desc: 'Petite, Moyenne, Grande Section' },
  { id: 'primaire',   nom: 'Primaire',   emoji: '📚', desc: 'CP, CE1, CE2, CM1, CM2 — CEPD'  },
  { id: 'college',    nom: 'Collège',    emoji: '🎒', desc: '6ème → 3ème — BEPC'              },
  { id: 'lycee',      nom: 'Lycée',      emoji: '🎓', desc: '2nde → Terminale — BAC'          },
]

/* ── Classes ─────────────────────────────────────────────── */
export const CLASSES = [
  { id: 'ps',        cycleId: 'maternelle', nom: 'Petite Section',  court: 'PS'  },
  { id: 'ms',        cycleId: 'maternelle', nom: 'Moyenne Section', court: 'MS'  },
  { id: 'gs',        cycleId: 'maternelle', nom: 'Grande Section',  court: 'GS'  },
  { id: 'cp',        cycleId: 'primaire',   nom: 'CP',              court: 'CP'  },
  { id: 'ce1',       cycleId: 'primaire',   nom: 'CE1',             court: 'CE1' },
  { id: 'ce2',       cycleId: 'primaire',   nom: 'CE2',             court: 'CE2' },
  { id: 'cm1',       cycleId: 'primaire',   nom: 'CM1',             court: 'CM1' },
  { id: 'cm2',       cycleId: 'primaire',   nom: 'CM2',             court: 'CM2' },
  { id: '6eme',      cycleId: 'college',    nom: '6ème',            court: '6e'  },
  { id: '5eme',      cycleId: 'college',    nom: '5ème',            court: '5e'  },
  { id: '4eme',      cycleId: 'college',    nom: '4ème',            court: '4e'  },
  { id: '3eme',      cycleId: 'college',    nom: '3ème',            court: '3e'  },
  { id: '2nde',      cycleId: 'lycee',      nom: '2nde',            court: '2de' },
  { id: '1ere',      cycleId: 'lycee',      nom: '1ère',            court: '1re' },
  { id: 'terminale', cycleId: 'lycee',      nom: 'Terminale',       court: 'Tle' },
]

/* ── Matières ────────────────────────────────────────────── */
export const MATIERES = [
  { id: 'maths',    nom: 'Mathématiques',    emoji: '📐', couleur: '#3b82f6', cycles: ['maternelle','primaire','college','lycee'] },
  { id: 'francais', nom: 'Français',         emoji: '📖', couleur: '#8b5cf6', cycles: ['maternelle','primaire','college','lycee'] },
  { id: 'svt',      nom: 'SVT',              emoji: '🌿', couleur: '#10b981', cycles: ['primaire','college','lycee']              },
  { id: 'physique', nom: 'Physique-Chimie',  emoji: '⚗️', couleur: '#f59e0b', cycles: ['college','lycee']                        },
  { id: 'histoire', nom: 'Histoire-Géo',     emoji: '🌍', couleur: '#ef4444', cycles: ['primaire','college','lycee']              },
  { id: 'anglais',  nom: 'Anglais',          emoji: '🇬🇧', couleur: '#06b6d4', cycles: ['college','lycee']                        },
  { id: 'philo',    nom: 'Philosophie',      emoji: '💭', couleur: '#6366f1', cycles: ['lycee']                                  },
  { id: 'emc',      nom: 'EMC',              emoji: '🤝', couleur: '#84cc16', cycles: ['primaire','college']                     },
]

/* ── Badges ──────────────────────────────────────────────── */
export const BADGES = [
  { id: 'premier-pas',     emoji: '🌟', nom: 'Premier Pas',      desc: 'Terminer sa 1ère leçon'         },
  { id: 'assidu',          emoji: '📅', nom: 'Assidu',           desc: '3 jours consécutifs'            },
  { id: 'curieux',         emoji: '🔍', nom: 'Curieux',          desc: '5 leçons terminées'             },
  { id: 'studieux',        emoji: '📚', nom: 'Studieux',         desc: '10 leçons terminées'            },
  { id: 'semaine-feu',     emoji: '🔥', nom: 'Semaine de feu',   desc: '7 jours consécutifs'            },
  { id: 'champion-quiz',   emoji: '🏆', nom: 'Champion Quiz',    desc: '10 quiz réussis à 80 %+'        },
  { id: 'perfectionniste', emoji: '💯', nom: 'Perfectionniste',  desc: 'Score parfait sur un quiz'      },
]

/* ── Leçons ──────────────────────────────────────────────── */
export const LECONS = [

  /* ===== CP — MATHS ===== */
  {
    id: 'cp-maths-1', classeId: 'cp', matiereId: 'maths',
    titre: 'Les chiffres de 0 à 5', dureeMin: 12,
    contenu: [
      { type: 'intro', texte: 'Aujourd\'hui, nous allons apprendre à reconnaître et écrire les chiffres de 0 à 5 en nous aidant d\'objets de la vie quotidienne au Togo.' },
      { type: 'titre', texte: 'Les chiffres et leur valeur' },
      { type: 'texte', texte: 'Un chiffre représente une quantité. Voici les 6 premiers chiffres :' },
      { type: 'liste', items: ['0 — zéro : rien du tout 😶', '1 — un : une seule chose 🥭', '2 — deux : une paire 🥭🥭', '3 — trois 🥭🥭🥭', '4 — quatre 🥭🥭🥭🥭', '5 — cinq : les doigts d\'une main ✋'] },
      { type: 'exemple', titre: 'Exemple du marché de Lomé', texte: 'Ama vend des oranges. Elle a 3 oranges sur sa table. Son voisin Koffi a 5 oranges. Qui en a le plus ? Koffi, car 5 est plus grand que 3.' },
      { type: 'retenir', texte: '0 < 1 < 2 < 3 < 4 < 5 — Les chiffres grandissent de gauche à droite. Plus on va vers la droite, plus la quantité est grande.' },
    ],
  },
  {
    id: 'cp-maths-2', classeId: 'cp', matiereId: 'maths',
    titre: 'Les chiffres de 6 à 10', dureeMin: 12,
    contenu: [
      { type: 'intro', texte: 'Maintenant que tu connais les chiffres de 0 à 5, nous allons apprendre les chiffres de 6 à 10. Après 10, on peut tout compter !' },
      { type: 'titre', texte: 'De 6 à 10' },
      { type: 'liste', items: ['6 — six : les doigts d\'une main + un 🖐️☝️', '7 — sept : jours dans une semaine 📅', '8 — huit : pattes d\'une araignée 🕷️', '9 — neuf : un de moins que dix', '10 — dix : tes deux mains ouvertes 🙌'] },
      { type: 'exemple', titre: 'Compter les élèves', texte: 'Dans la classe de Yawa, il y a 10 élèves. 6 filles et 4 garçons. 6 + 4 = 10. Essaie de les compter sur tes doigts !' },
      { type: 'retenir', texte: '6 < 7 < 8 < 9 < 10 — Avec 0 à 10, tu peux déjà compter beaucoup de choses autour de toi !' },
    ],
  },
  {
    id: 'cp-maths-3', classeId: 'cp', matiereId: 'maths',
    titre: 'L\'addition simple', dureeMin: 15,
    contenu: [
      { type: 'intro', texte: 'Additionner, c\'est mettre des quantités ensemble. Quand on additionne, le résultat est toujours plus grand ou égal.' },
      { type: 'titre', texte: 'Le signe + et le signe =' },
      { type: 'texte', texte: 'Le signe + veut dire « ajouter ». Le signe = veut dire « donne ». On lit : 2 plus 3 égal 5.' },
      { type: 'formule', texte: '2 + 3 = 5' },
      { type: 'exemple', titre: 'Au marché', texte: 'Kofi a 2 beignets 🍩🍩. Sa maman lui en donne 3 de plus 🍩🍩🍩. Combien a-t-il maintenant ? 2 + 3 = 5 beignets !' },
      { type: 'liste', items: ['1 + 1 = 2', '2 + 2 = 4', '3 + 2 = 5', '4 + 1 = 5', '3 + 3 = 6'] },
      { type: 'retenir', texte: 'Pour additionner, on peut utiliser ses doigts. Commence par le plus grand chiffre et compte les autres sur tes doigts.' },
    ],
  },

  /* ===== CP — FRANÇAIS ===== */
  {
    id: 'cp-fr-1', classeId: 'cp', matiereId: 'francais',
    titre: 'Les voyelles : a, e, i, o, u', dureeMin: 15,
    contenu: [
      { type: 'intro', texte: 'L\'alphabet français a 26 lettres. Parmi elles, 6 sont des voyelles. Les voyelles sont très importantes : sans elles, on ne peut pas former de mots !' },
      { type: 'titre', texte: 'Les 6 voyelles' },
      { type: 'liste', items: ['A a — comme dans Ama, arbre, ananas 🍍', 'E e — comme dans élève, école 🏫', 'I i — comme dans igname, il 🌿', 'O o — comme dans orange, oiseau 🍊🐦', 'U u — comme dans un, utile', 'Y y — comme dans yeux (semi-voyelle) 👀'] },
      { type: 'exemple', titre: 'Mots togolais avec des voyelles', texte: 'A - ma (prénom), O - ran - ge, Lo - mé (capitale du Togo). Repère les voyelles dans ces mots !' },
      { type: 'retenir', texte: 'Les 5 voyelles principales sont : A, E, I, O, U. Chaque syllabe doit contenir au moins une voyelle.' },
    ],
  },
  {
    id: 'cp-fr-2', classeId: 'cp', matiereId: 'francais',
    titre: 'Former des syllabes', dureeMin: 15,
    contenu: [
      { type: 'intro', texte: 'Une syllabe, c\'est un petit morceau de mot qu\'on prononce d\'un seul souffle. Apprendre les syllabes, c\'est apprendre à lire !' },
      { type: 'titre', texte: 'Consonne + Voyelle = Syllabe' },
      { type: 'texte', texte: 'La plupart des syllabes en français s\'écrivent avec une consonne suivie d\'une voyelle.' },
      { type: 'liste', items: ['M + A = MA (comme dans maman)', 'P + A = PA (comme dans papa)', 'L + O = LO (comme dans Lomé)', 'T + O = TO (comme dans Togo 🇹🇬)', 'K + O = KO (comme dans Koffi)'] },
      { type: 'exemple', titre: 'Découper les mots du Togo', texte: 'To - go = 2 syllabes. Lo - mé = 2 syllabes. A - na - nas = 3 syllabes. Ma - man = 2 syllabes.' },
      { type: 'retenir', texte: 'Pour compter les syllabes d\'un mot, tape dans tes mains à chaque syllabe. « Togo » → To (tape) - go (tape) = 2 syllabes.' },
    ],
  },

  /* ===== 4ème — MATHS ===== */
  {
    id: '4e-maths-1', classeId: '4eme', matiereId: 'maths',
    titre: 'Le théorème de Pythagore', dureeMin: 25,
    contenu: [
      { type: 'intro', texte: 'Le théorème de Pythagore est l\'un des théorèmes les plus célèbres des mathématiques. Il permet de calculer la longueur d\'un côté d\'un triangle rectangle quand on connaît les deux autres.' },
      { type: 'titre', texte: 'Le triangle rectangle' },
      { type: 'texte', texte: 'Un triangle rectangle est un triangle qui possède un angle droit (90°). Le côté opposé à l\'angle droit s\'appelle l\'hypoténuse : c\'est toujours le côté le plus long.' },
      { type: 'definition', titre: 'Théorème de Pythagore', texte: 'Dans un triangle ABC rectangle en A, le carré de l\'hypoténuse est égal à la somme des carrés des deux autres côtés.' },
      { type: 'formule', texte: 'BC² = AB² + AC²' },
      { type: 'exemple', titre: 'Application concrète', texte: 'Un menuisier à Lomé veut vérifier qu\'un cadre est bien rectangulaire. Il mesure : longueur = 3 m, largeur = 4 m. La diagonale doit-elle mesurer 5 m ?\n\n3² + 4² = 9 + 16 = 25\n√25 = 5 ✓ Le cadre est bien rectangulaire !' },
      { type: 'texte', texte: 'La réciproque est aussi vraie : si BC² = AB² + AC², alors le triangle est rectangle en A.' },
      { type: 'retenir', texte: 'Le triplet (3, 4, 5) est le triplet pythagoricien le plus connu. Retiens-le ! D\'autres triplets : (5, 12, 13) et (8, 15, 17).' },
    ],
  },
  {
    id: '4e-maths-2', classeId: '4eme', matiereId: 'maths',
    titre: 'Les équations du 1er degré', dureeMin: 25,
    contenu: [
      { type: 'intro', texte: 'Une équation est une égalité contenant une inconnue (souvent appelée x). Résoudre une équation, c\'est trouver la valeur de x qui rend l\'égalité vraie.' },
      { type: 'titre', texte: 'Principe fondamental' },
      { type: 'texte', texte: 'Pour résoudre une équation, on peut effectuer les mêmes opérations des deux côtés du signe = sans changer l\'égalité. On isole l\'inconnue x.' },
      { type: 'definition', titre: 'Équation du 1er degré', texte: 'C\'est une équation de la forme ax + b = c, où a ≠ 0. On dit du premier degré car x apparaît à la puissance 1.' },
      { type: 'exemple', titre: 'Résolution étape par étape', texte: 'Résoudre : 3x + 5 = 17\n\nÉtape 1 : Soustraire 5 des deux côtés → 3x = 12\nÉtape 2 : Diviser les deux côtés par 3 → x = 4\n\nVérification : 3 × 4 + 5 = 12 + 5 = 17 ✓' },
      { type: 'exemple', titre: 'Problème de la vie réelle', texte: 'Sena achète des cahiers à 500 FCFA pièce et dépense 200 FCFA de transport. Elle dépense 2 700 FCFA en tout. Combien de cahiers a-t-elle achetés ?\n\n500x + 200 = 2700\n500x = 2500\nx = 5 cahiers' },
      { type: 'retenir', texte: 'Pour résoudre ax + b = c : (1) passer b de l\'autre côté, (2) diviser par a. Toujours vérifier ta réponse !' },
    ],
  },
  {
    id: '4e-maths-3', classeId: '4eme', matiereId: 'maths',
    titre: 'La proportionnalité', dureeMin: 20,
    contenu: [
      { type: 'intro', texte: 'La proportionnalité est partout dans la vie quotidienne : recettes de cuisine, taux de change, vitesse... Savoir l\'utiliser est indispensable.' },
      { type: 'definition', titre: 'Deux grandeurs proportionnelles', texte: 'Deux grandeurs sont proportionnelles si leur quotient est constant. Ce quotient constant s\'appelle le coefficient de proportionnalité.' },
      { type: 'exemple', titre: 'Taux de change', texte: '1 euro = 655,957 FCFA. Alors :\n• 2 euros = 1 311,91 FCFA\n• 5 euros = 3 279,79 FCFA\nLe coefficient est 655,957.' },
      { type: 'titre', texte: 'La règle de trois' },
      { type: 'texte', texte: 'Si 3 kg de tomates coûtent 900 FCFA, combien coûtent 5 kg ?\n\n3 kg ──→ 900 FCFA\n5 kg ──→ x FCFA\n\nx = (5 × 900) ÷ 3 = 4 500 ÷ 3 = 1 500 FCFA' },
      { type: 'retenir', texte: 'Règle de trois : si a → b, alors c → (c × b) ÷ a. Vérifie toujours si les grandeurs sont bien proportionnelles avant d\'appliquer.' },
    ],
  },

  /* ===== 4ème — SVT ===== */
  {
    id: '4e-svt-1', classeId: '4eme', matiereId: 'svt',
    titre: 'La cellule, unité du vivant', dureeMin: 25,
    contenu: [
      { type: 'intro', texte: 'Tout être vivant — humain, plante, animal, champignon — est fait de cellules. La cellule est le plus petit élément capable d\'assurer les fonctions de la vie.' },
      { type: 'titre', texte: 'Structure d\'une cellule animale' },
      { type: 'liste', items: ['Membrane plasmique : enveloppe protectrice, laisse entrer et sortir certaines substances', 'Cytoplasme : liquide gélatineux qui remplit la cellule', 'Noyau : centre de contrôle, contient l\'ADN', 'Mitochondries : produisent l\'énergie de la cellule (respiration)'] },
      { type: 'definition', titre: 'Cellule végétale vs animale', texte: 'La cellule végétale possède en plus : une paroi cellulosique (rigide), des chloroplastes (pour la photosynthèse) et une vacuole centrale (réservoir).' },
      { type: 'exemple', titre: 'Analogie avec Lomé', texte: 'Imagine une ville comme Lomé : la mairie = le noyau (décisions), les routes = la membrane (échanges), les usines = les mitochondries (énergie), les maisons = le cytoplasme (espace de vie).' },
      { type: 'retenir', texte: 'Cellule animale : membrane + cytoplasme + noyau + mitochondries. Cellule végétale : idem + paroi + chloroplastes + vacuole.' },
    ],
  },
  {
    id: '4e-svt-2', classeId: '4eme', matiereId: 'svt',
    titre: 'La photosynthèse', dureeMin: 20,
    contenu: [
      { type: 'intro', texte: 'La photosynthèse est le processus par lequel les plantes fabriquent leur propre nourriture grâce à la lumière du soleil. C\'est la base de toute la chaîne alimentaire.' },
      { type: 'titre', texte: 'Les ingrédients de la photosynthèse' },
      { type: 'liste', items: ['Lumière solaire ☀️ (absorbée par la chlorophylle)', 'Dioxyde de carbone CO₂ (absorbé par les stomates des feuilles)', 'Eau H₂O (absorbée par les racines)'] },
      { type: 'formule', texte: 'CO₂ + H₂O + lumière → glucose + O₂' },
      { type: 'texte', texte: 'En clair : les plantes absorbent le CO₂ que nous rejetons et produisent l\'O₂ que nous respirons. C\'est un échange vital !' },
      { type: 'exemple', titre: 'Le manioc au Togo', texte: 'Le manioc (aliment de base du Togo) pratique la photosynthèse chaque matin. Ses grandes feuilles captent le soleil. C\'est pour ça qu\'on plante le manioc en plein soleil ☀️ et pas à l\'ombre.' },
      { type: 'retenir', texte: 'Photosynthèse : CO₂ + H₂O + lumière → glucose (nourriture) + O₂ (oxygène). Lieu : chloroplastes. Condition : lumière indispensable.' },
    ],
  },

  /* ===== 4ème — FRANÇAIS ===== */
  {
    id: '4e-fr-1', classeId: '4eme', matiereId: 'francais',
    titre: 'La nature des mots', dureeMin: 20,
    contenu: [
      { type: 'intro', texte: 'En grammaire, la nature d\'un mot désigne sa catégorie : ce qu\'il est. La fonction désigne son rôle dans la phrase. Ne confonds pas les deux !' },
      { type: 'titre', texte: 'Les principales natures de mots' },
      { type: 'liste', items: [
        'Nom (N) : désigne une personne, un animal, une chose, une idée → élève, fleuve, courage',
        'Verbe (V) : exprime une action ou un état → apprendre, être, manger',
        'Adjectif qualificatif (Adj) : qualifie un nom → grand, beau, difficile',
        'Déterminant (Dét) : précède le nom → le, une, mon, ce, trois',
        'Pronom (Pro) : remplace un nom → il, elle, nous, ce, qui',
        'Adverbe (Adv) : modifie un verbe, un adj → vite, très, souvent',
        'Préposition (Prép) : lie deux éléments → à, de, avec, sur, pour',
        'Conjonction (Conj) : relie des propositions → et, mais, car, parce que',
      ] },
      { type: 'exemple', titre: 'Analyse de la phrase', texte: '« Le jeune élève apprend vite la leçon difficile. »\nLe → Dét | jeune → Adj | élève → N | apprend → V | vite → Adv | la → Dét | leçon → N | difficile → Adj' },
      { type: 'retenir', texte: 'La nature d\'un mot ne change jamais (« livre » est toujours un nom). La fonction, elle, dépend de la phrase.' },
    ],
  },

  /* ===== 3ème — MATHS ===== */
  {
    id: '3e-maths-1', classeId: '3eme', matiereId: 'maths',
    titre: 'Statistiques descriptives', dureeMin: 25,
    contenu: [
      { type: 'intro', texte: 'Les statistiques permettent d\'analyser et de résumer des données chiffrées. Elles sont utilisées en médecine, économie, démographie — des sujets cruciaux pour le développement du Togo.' },
      { type: 'titre', texte: 'Les indicateurs clés' },
      { type: 'definition', titre: 'Moyenne arithmétique', texte: 'Somme de toutes les valeurs divisée par le nombre de valeurs. C\'est le centre d\'équilibre d\'une série.' },
      { type: 'definition', titre: 'Médiane', texte: 'Valeur qui partage la série ordonnée en deux moitiés égales. 50 % des valeurs sont au-dessous, 50 % au-dessus.' },
      { type: 'definition', titre: 'Mode', texte: 'La valeur la plus fréquente dans la série.' },
      { type: 'exemple', titre: 'Notes de classe', texte: 'Notes de 7 élèves au devoir de maths : 8, 12, 14, 10, 12, 15, 9\n\nMoyenne : (8+12+14+10+12+15+9) ÷ 7 = 80 ÷ 7 ≈ 11,4\nSérie ordonnée : 8, 9, 10, 12, 12, 14, 15\nMédiane : 12 (4e valeur)\nMode : 12 (apparaît 2 fois)' },
      { type: 'retenir', texte: 'Moyenne = somme ÷ effectif. Médiane = valeur centrale de la série ordonnée. Mode = valeur la plus fréquente.' },
    ],
  },

  /* ===== 3ème — HISTOIRE ===== */
  {
    id: '3e-hist-1', classeId: '3eme', matiereId: 'histoire',
    titre: 'L\'indépendance du Togo (1960)', dureeMin: 20,
    contenu: [
      { type: 'intro', texte: 'Le 27 avril 1960, le Togo devient le premier pays d\'Afrique noire francophone à accéder à l\'indépendance. Cette date est la fête nationale togolaise.' },
      { type: 'titre', texte: 'Contexte historique' },
      { type: 'texte', texte: 'Le Togo a été successivement colonisé par l\'Allemagne (1884-1914), puis partagé entre la France et la Grande-Bretagne après la Première Guerre mondiale. La partie française devient une tutelle de l\'ONU en 1946.' },
      { type: 'liste', items: [
        '1956 : autonomie interne sous Sylvanus Olympio',
        '27 avril 1960 : indépendance officielle',
        'Sylvanus Olympio : 1er président de la République togolaise',
        'Lomé devient la capitale du nouvel État indépendant',
      ] },
      { type: 'definition', titre: 'Sylvanus Olympio (1902–1963)', texte: 'Économiste et homme politique togolais. Père de l\'indépendance du Togo. Formé à la London School of Economics. Assassiné lors du coup d\'état du 13 janvier 1963.' },
      { type: 'exemple', titre: 'L\'hymne national', texte: 'L\'hymne national du Togo s\'appelle « Terre de nos aïeux ». Il exprime l\'attachement du peuple togolais à sa terre et à sa liberté nouvellement conquise.' },
      { type: 'retenir', texte: 'Indépendance du Togo : 27 avril 1960. 1er président : Sylvanus Olympio. Le Togo est le premier pays d\'Afrique noire francophone indépendant.' },
    ],
  },

  /* ===== Terminale D — SVT ===== */
  {
    id: 'tle-svt-1', classeId: 'terminale', matiereId: 'svt',
    titre: 'L\'ADN et l\'information génétique', dureeMin: 30,
    contenu: [
      { type: 'intro', texte: 'L\'ADN (Acide DésoxyriboNucléique) est la molécule qui contient toutes les instructions nécessaires au développement et au fonctionnement de tout être vivant. C\'est le « programme » du vivant.' },
      { type: 'titre', texte: 'Structure de l\'ADN' },
      { type: 'texte', texte: 'L\'ADN est une double hélice composée de deux brins enroulés l\'un autour de l\'autre (modèle de Watson et Crick, 1953).' },
      { type: 'liste', items: [
        'Chaque brin est une chaîne de nucléotides',
        'Un nucléotide = phosphate + sucre (désoxyribose) + base azotée',
        '4 bases azotées : Adénine (A), Thymine (T), Guanine (G), Cytosine (C)',
        'Règle de complémentarité : A s\'associe à T, G s\'associe à C',
      ] },
      { type: 'definition', titre: 'Gène', texte: 'Un gène est une séquence d\'ADN qui code pour une protéine. L\'être humain possède environ 20 000 gènes, tous logés dans les 46 chromosomes de chaque cellule.' },
      { type: 'exemple', titre: 'Application médicale au Togo', texte: 'La drépanocytose (maladie du sang très répandue en Afrique de l\'Ouest) est causée par une mutation d\'un seul nucléotide dans le gène de l\'hémoglobine. La génétique permet de diagnostiquer et de conseiller les familles.' },
      { type: 'retenir', texte: 'ADN = double hélice de nucléotides. Gène = séquence d\'ADN codant une protéine. Complémentarité : A-T, G-C. L\'ADN est dans le noyau de chaque cellule.' },
    ],
  },
  {
    id: 'tle-svt-2', classeId: 'terminale', matiereId: 'svt',
    titre: 'La mitose — division cellulaire', dureeMin: 30,
    contenu: [
      { type: 'intro', texte: 'La mitose est le type de division cellulaire qui permet à un organisme de croître et de se renouveler. Elle produit deux cellules filles identiques à la cellule mère.' },
      { type: 'titre', texte: 'Les phases de la mitose' },
      { type: 'liste', items: [
        'Prophase : les chromosomes se condensent et deviennent visibles',
        'Métaphase : les chromosomes s\'alignent au centre de la cellule',
        'Anaphase : les chromatides sœurs se séparent et migrent vers les pôles',
        'Télophase : deux noyaux se forment, la cellule se divise',
      ] },
      { type: 'definition', titre: 'Intérêt de la mitose', texte: 'La mitose maintient le nombre de chromosomes constant (2n = 46 chez l\'humain). Elle assure la croissance, la réparation des tissus et la reproduction asexuée.' },
      { type: 'exemple', titre: 'Cicatrisation d\'une plaie', texte: 'Quand tu te blesses, les cellules de la peau se divisent par mitose pour refermer la plaie. Une cellule donne deux cellules identiques, qui en donnent deux autres, etc.' },
      { type: 'retenir', texte: 'Mitose : 1 cellule mère → 2 cellules filles identiques, même nombre de chromosomes. Phases : P-M-A-T (Prophase, Métaphase, Anaphase, Télophase).' },
    ],
  },

  /* ===== Terminale — MATHS (série C) ===== */
  {
    id: 'tle-maths-1', classeId: 'terminale', matiereId: 'maths',
    titre: 'La dérivation — règles de base', dureeMin: 35,
    contenu: [
      { type: 'intro', texte: 'La dérivation est un outil fondamental de l\'analyse mathématique. La dérivée d\'une fonction mesure son taux de variation instantané — c\'est la « vitesse » à laquelle elle change.' },
      { type: 'titre', texte: 'Définition de la dérivée' },
      { type: 'definition', titre: 'Dérivée en un point', texte: 'La dérivée de f en a, notée f\'(a), est la limite du taux de variation [f(a+h) - f(a)] / h quand h tend vers 0. Géométriquement, c\'est le coefficient directeur de la tangente à la courbe en a.' },
      { type: 'titre', texte: 'Formulaire des dérivées usuelles' },
      { type: 'liste', items: [
        'f(x) = k  →  f\'(x) = 0  (constante)',
        'f(x) = xⁿ  →  f\'(x) = n·xⁿ⁻¹',
        'f(x) = eˣ  →  f\'(x) = eˣ',
        'f(x) = ln(x)  →  f\'(x) = 1/x',
        'f(x) = sin(x)  →  f\'(x) = cos(x)',
        '(f+g)\' = f\' + g\'  |  (fg)\' = f\'g + fg\'  |  (f/g)\' = (f\'g - fg\')/g²',
      ] },
      { type: 'exemple', titre: 'Application : étude de variations', texte: 'f(x) = x³ - 3x + 2\nf\'(x) = 3x² - 3 = 3(x²-1) = 3(x-1)(x+1)\n\nf\'(x) = 0 → x = -1 ou x = 1\nf croissante sur ]-∞;-1[ et ]1;+∞[\nf décroissante sur ]-1;1[' },
      { type: 'retenir', texte: 'La dérivée donne le signe de la variation : f\' > 0 → f croissante, f\' < 0 → f décroissante, f\' = 0 → extremum potentiel.' },
    ],
  },
]

/* ── Questions de quiz ───────────────────────────────────── */
export const QUESTIONS = {

  'cp-maths-1': [
    { id: 1, texte: 'Quel chiffre vient juste après 3 ?', choix: ['2','4','5','1'], correct: 1, explication: '3, puis 4. Les chiffres se suivent dans l\'ordre croissant.' },
    { id: 2, texte: 'Koffi a 🥭🥭🥭 mangues. Combien en a-t-il ?', choix: ['2','4','3','5'], correct: 2, explication: 'On compte : une, deux, trois. Koffi a 3 mangues.' },
    { id: 3, texte: 'Quel chiffre est le plus grand : 4 ou 2 ?', choix: ['2','4','Égaux','0'], correct: 1, explication: '4 est plus grand que 2. Sur la droite des chiffres, 4 est à droite de 2.' },
    { id: 4, texte: 'Combien de doigts as-tu sur une main ?', choix: ['4','10','5','3'], correct: 2, explication: 'Une main a 5 doigts. C\'est pour ça que 5 est souvent le premier grand nombre qu\'on apprend.' },
    { id: 5, texte: 'Quel chiffre représente « rien du tout » ?', choix: ['1','5','2','0'], correct: 3, explication: 'Le chiffre 0 (zéro) représente l\'absence de quantité, rien du tout.' },
  ],

  'cp-maths-2': [
    { id: 1, texte: 'Combien y a-t-il de jours dans une semaine ?', choix: ['5','6','7','8'], correct: 2, explication: 'Une semaine a 7 jours : lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche.' },
    { id: 2, texte: 'Quel chiffre vient après 9 ?', choix: ['8','11','10','7'], correct: 2, explication: 'Après 9 vient 10. 10 est un nombre très important car il est la base de notre système numérique.' },
    { id: 3, texte: 'Quel est le plus grand : 6 ou 8 ?', choix: ['6','8','Égaux','Impossible à dire'], correct: 1, explication: '8 est plus grand que 6. Sur la suite des nombres, 8 vient après 6.' },
    { id: 4, texte: 'Yawa a 10 billes. Elle en donne 2. Combien lui en reste-t-il ?', choix: ['12','9','7','8'], correct: 3, explication: '10 - 2 = 8. Yawa a 8 billes.' },
    { id: 5, texte: 'Compte les étoiles : ⭐⭐⭐⭐⭐⭐⭐⭐⭐', choix: ['8','10','9','7'], correct: 2, explication: 'Il y a 9 étoiles. Compter soigneusement une par une est la meilleure méthode.' },
  ],

  'cp-maths-3': [
    { id: 1, texte: '3 + 2 = ?', choix: ['4','6','5','3'], correct: 2, explication: '3 + 2 = 5. Compte sur tes doigts : 3 puis 2 de plus = 5.' },
    { id: 2, texte: 'Koffi a 4 beignets, sa sœur lui en donne 2. Combien a-t-il maintenant ?', choix: ['5','6','7','4'], correct: 1, explication: '4 + 2 = 6 beignets.' },
    { id: 3, texte: '1 + 1 = ?', choix: ['0','1','3','2'], correct: 3, explication: '1 + 1 = 2. C\'est l\'addition la plus simple qui soit !' },
    { id: 4, texte: 'Quel signe utilise-t-on pour additionner ?', choix: ['−','×','+','÷'], correct: 2, explication: 'Le signe + (plus) est le signe de l\'addition.' },
    { id: 5, texte: '2 + 2 = ?', choix: ['5','3','4','6'], correct: 2, explication: '2 + 2 = 4. Deux doigts de chaque main = 4 doigts en tout.' },
  ],

  'cp-fr-1': [
    { id: 1, texte: 'Parmi ces lettres, laquelle est une voyelle ?', choix: ['B','M','A','T'], correct: 2, explication: 'A est une voyelle. Les 5 voyelles principales sont : A, E, I, O, U.' },
    { id: 2, texte: 'Combien y a-t-il de voyelles dans le mot « Togo » ?', choix: ['1','3','2','0'], correct: 2, explication: 'T-O-G-O : les lettres O et O sont les voyelles. Il y a 2 voyelles.' },
    { id: 3, texte: 'Laquelle de ces lettres N\'EST PAS une voyelle ?', choix: ['E','I','P','U'], correct: 2, explication: 'P est une consonne, pas une voyelle. Les voyelles sont A, E, I, O, U (et Y).' },
    { id: 4, texte: 'Quelle est la 1ère voyelle de l\'alphabet ?', choix: ['E','I','U','A'], correct: 3, explication: 'A est la première voyelle et la première lettre de l\'alphabet.' },
    { id: 5, texte: 'Combien y a-t-il de voyelles principales en français ?', choix: ['4','6','5','3'], correct: 2, explication: 'Il y a 5 voyelles principales : A, E, I, O, U. (Y est une semi-voyelle.)' },
  ],

  'cp-fr-2': [
    { id: 1, texte: 'Combien de syllabes dans le mot « Lo-mé » ?', choix: ['1','3','2','4'], correct: 2, explication: 'Lo-mé : on tape deux fois. Il y a 2 syllabes.' },
    { id: 2, texte: 'Quelle syllabe entend-on dans le mot « maman » ?', choix: ['ba','ma','ta','ka'], correct: 1, explication: 'Ma-man contient la syllabe « ma » deux fois : MA-MAN.' },
    { id: 3, texte: 'Combien de syllabes dans « a-na-nas » ?', choix: ['2','4','3','1'], correct: 2, explication: 'A-na-nas : trois syllabes. Tape dans tes mains pour vérifier.' },
    { id: 4, texte: 'Quelle lettre faut-il pour former la syllabe « to » ?', choix: ['T + A','T + O','T + I','T + E'], correct: 1, explication: 'T + O = TO. C\'est la première syllabe de « Togo ».' },
    { id: 5, texte: 'Le mot « papa » a combien de syllabes ?', choix: ['1','3','4','2'], correct: 3, explication: 'Pa-pa : deux syllabes. PA et PA.' },
  ],

  '4e-maths-1': [
    { id: 1, texte: 'Dans un triangle rectangle ABC rectangle en A, quel côté est l\'hypoténuse ?', choix: ['AB','AC','BC','Impossible à savoir'], correct: 2, explication: 'L\'hypoténuse est le côté opposé à l\'angle droit. L\'angle droit est en A, donc l\'hypoténuse est BC.' },
    { id: 2, texte: 'Dans un triangle rectangle, AB = 3 cm et AC = 4 cm. Quelle est la longueur de BC ?', choix: ['5 cm','7 cm','6 cm','25 cm'], correct: 0, explication: 'BC² = AB² + AC² = 9 + 16 = 25. Donc BC = √25 = 5 cm. C\'est le triplet (3,4,5) !' },
    { id: 3, texte: 'Quelle est la formule du théorème de Pythagore (triangle rectangle en A) ?', choix: ['AB² = BC² + AC²','BC² = AB² + AC²','AC² = BC² − AB²','BC = AB + AC'], correct: 1, explication: 'BC² = AB² + AC². Le carré de l\'hypoténuse = somme des carrés des deux autres côtés.' },
    { id: 4, texte: 'Un triangle a des côtés de 5, 12 et 13 cm. Est-il rectangle ?', choix: ['Non','Oui','Impossible à dire','Seulement si 13 est l\'hypoténuse'], correct: 1, explication: '5² + 12² = 25 + 144 = 169 = 13². Oui, c\'est un triangle rectangle (triplet 5-12-13).' },
    { id: 5, texte: 'Dans quel angle est l\'angle droit si BC est l\'hypoténuse ?', choix: ['En B','En C','En A','En dehors du triangle'], correct: 2, explication: 'L\'angle droit est TOUJOURS en face de l\'hypoténuse. BC est l\'hypoténuse, donc l\'angle droit est en A.' },
  ],

  '4e-maths-2': [
    { id: 1, texte: 'Résoudre : x + 5 = 12', choix: ['x = 17','x = 7','x = 6','x = 8'], correct: 1, explication: 'x + 5 = 12 → x = 12 − 5 = 7. Vérification : 7 + 5 = 12 ✓' },
    { id: 2, texte: 'Résoudre : 2x = 10', choix: ['x = 20','x = 8','x = 5','x = 12'], correct: 2, explication: '2x = 10 → x = 10 ÷ 2 = 5. Vérification : 2 × 5 = 10 ✓' },
    { id: 3, texte: 'Résoudre : 3x − 4 = 11', choix: ['x = 5','x = 7','x = 3','x = 9'], correct: 0, explication: '3x − 4 = 11 → 3x = 15 → x = 5. Vérification : 3×5 − 4 = 11 ✓' },
    { id: 4, texte: 'Sena achète des baguettes à 200 FCFA pièce. Elle dépense 1 200 FCFA. Combien de baguettes a-t-elle achetées ?', choix: ['5','7','6','8'], correct: 2, explication: '200x = 1 200 → x = 6 baguettes.' },
    { id: 5, texte: 'Dans l\'équation ax + b = c, que fait-on en premier pour isoler x ?', choix: ['On divise par a','On passe a de l\'autre côté','On soustrait b des deux membres','On multiplie par c'], correct: 2, explication: 'On commence par soustraire b des deux membres pour isoler le terme en x, puis on divise par a.' },
  ],

  '4e-maths-3': [
    { id: 1, texte: '1 euro = 656 FCFA. Combien vaut 3 euros ?', choix: ['1 000 FCFA','2 000 FCFA','1 968 FCFA','3 000 FCFA'], correct: 2, explication: '3 × 656 = 1 968 FCFA. Deux grandeurs proportionnelles.' },
    { id: 2, texte: '4 kg de tomates coûtent 1 200 FCFA. Quel est le prix de 1 kg ?', choix: ['400 FCFA','300 FCFA','500 FCFA','250 FCFA'], correct: 1, explication: '1 200 ÷ 4 = 300 FCFA par kg.' },
    { id: 3, texte: 'Si 2 cahiers coûtent 500 FCFA, combien coûtent 6 cahiers ?', choix: ['1 000 FCFA','750 FCFA','1 500 FCFA','2 000 FCFA'], correct: 2, explication: '(6 × 500) ÷ 2 = 3 000 ÷ 2 = 1 500 FCFA. Règle de trois.' },
    { id: 4, texte: 'Deux grandeurs sont proportionnelles quand...', choix: ['leur somme est constante','leur différence est constante','leur quotient est constant','leur produit est constant'], correct: 2, explication: 'Deux grandeurs sont proportionnelles si leur quotient (rapport) est constant. Ce rapport est le coefficient de proportionnalité.' },
    { id: 5, texte: 'Un robinet remplit un réservoir en 3 heures. Combien de réservoirs remplira-t-il en 9 heures ?', choix: ['6','4','3','2'], correct: 2, explication: '9 ÷ 3 = 3. En 9 heures, le robinet remplit 3 réservoirs.' },
  ],

  '4e-svt-1': [
    { id: 1, texte: 'Quel organite est le « centre de contrôle » de la cellule ?', choix: ['La mitochondrie','La membrane','Le noyau','Le cytoplasme'], correct: 2, explication: 'Le noyau contient l\'ADN et contrôle toutes les activités de la cellule.' },
    { id: 2, texte: 'Quelle structure est présente dans la cellule végétale mais PAS dans la cellule animale ?', choix: ['Le noyau','La membrane plasmique','La paroi cellulosique','Les mitochondries'], correct: 2, explication: 'La paroi cellulosique (rigide) est spécifique aux cellules végétales.' },
    { id: 3, texte: 'À quoi servent les mitochondries ?', choix: ['À la photosynthèse','À la production d\'énergie','Au stockage de l\'eau','À la division cellulaire'], correct: 1, explication: 'Les mitochondries sont les « centrales énergétiques » de la cellule (respiration cellulaire).' },
    { id: 4, texte: 'Où se déroule la photosynthèse dans la cellule végétale ?', choix: ['Dans le noyau','Dans les mitochondries','Dans la vacuole','Dans les chloroplastes'], correct: 3, explication: 'Les chloroplastes contiennent la chlorophylle et sont le siège de la photosynthèse.' },
    { id: 5, texte: 'Qu\'est-ce qu\'une cellule ?', choix: ['Un organe','La plus petite unité du vivant','Un tissu','Une molécule'], correct: 1, explication: 'La cellule est la plus petite unité vivante capable d\'assurer les fonctions de base de la vie.' },
  ],

  '4e-svt-2': [
    { id: 1, texte: 'Quelle molécule les plantes absorbent-elles pour la photosynthèse ?', choix: ['O₂ et eau','CO₂ et eau','O₂ et glucose','Azote et CO₂'], correct: 1, explication: 'Les plantes absorbent le CO₂ (par les stomates) et l\'eau (par les racines).' },
    { id: 2, texte: 'Quel gaz les plantes produisent-elles lors de la photosynthèse ?', choix: ['CO₂','Azote','O₂','Vapeur d\'eau'], correct: 2, explication: 'Les plantes produisent de l\'O₂ (dioxygène), que nous respirons.' },
    { id: 3, texte: 'Où se déroule la photosynthèse ?', choix: ['Dans les racines','Dans les fleurs','Dans les chloroplastes des feuilles','Dans les graines'], correct: 2, explication: 'La photosynthèse a lieu dans les chloroplastes, principalement dans les feuilles.' },
    { id: 4, texte: 'Pourquoi plante-t-on le manioc en plein soleil au Togo ?', choix: ['Pour l\'arroser plus facilement','Car le manioc a besoin de lumière pour la photosynthèse','Car il fait plus chaud au soleil','Pour éviter les insectes'], correct: 1, explication: 'La photosynthèse nécessite la lumière du soleil. Sans lumière, la plante ne peut pas fabriquer sa nourriture.' },
    { id: 5, texte: 'La formule CO₂ + H₂O → glucose + O₂ représente quelle réaction ?', choix: ['La respiration','La digestion','La photosynthèse','La transpiration'], correct: 2, explication: 'C\'est la formule simplifiée de la photosynthèse.' },
  ],

  '4e-fr-1': [
    { id: 1, texte: 'Quelle est la nature du mot « rapide » dans « le coureur rapide » ?', choix: ['Nom','Adverbe','Adjectif qualificatif','Verbe'], correct: 2, explication: '« rapide » qualifie le nom « coureur ». C\'est un adjectif qualificatif.' },
    { id: 2, texte: 'Quelle est la nature du mot « apprendre » ?', choix: ['Nom','Adverbe','Adjectif','Verbe'], correct: 3, explication: '« apprendre » exprime une action. C\'est un verbe.' },
    { id: 3, texte: 'Dans « il mange lentement », quelle est la nature de « lentement » ?', choix: ['Adjectif','Adverbe','Nom','Préposition'], correct: 1, explication: '« lentement » modifie le verbe « mange ». C\'est un adverbe de manière.' },
    { id: 4, texte: 'Quelle est la nature du mot « le » dans « le livre » ?', choix: ['Pronom','Adverbe','Déterminant article','Préposition'], correct: 2, explication: '« le » précède et détermine le nom « livre ». C\'est un déterminant (article défini).' },
    { id: 5, texte: 'Parmi ces mots, lequel est un nom commun ?', choix: ['courir','beau','école','mais'], correct: 2, explication: '« école » désigne une chose. C\'est un nom commun. « courir » = verbe, « beau » = adjectif, « mais » = conjonction.' },
  ],

  '3e-maths-1': [
    { id: 1, texte: 'Notes : 10, 14, 8, 12, 16. Quelle est la moyenne ?', choix: ['11','12','13','10'], correct: 1, explication: '(10+14+8+12+16) ÷ 5 = 60 ÷ 5 = 12.' },
    { id: 2, texte: 'Notes ordonnées : 8, 10, 12, 14, 16. Quelle est la médiane ?', choix: ['10','12','14','11'], correct: 1, explication: 'La médiane est la valeur centrale. Il y a 5 valeurs, la 3e est 12.' },
    { id: 3, texte: 'Série : 5, 7, 7, 9, 11, 7, 3. Quel est le mode ?', choix: ['5','9','3','7'], correct: 3, explication: '7 apparaît 3 fois, c\'est la valeur la plus fréquente. C\'est le mode.' },
    { id: 4, texte: 'La médiane partage une série ordonnée en...', choix: ['3 parties égales','2 moitiés égales','4 quarts','10 déciles'], correct: 1, explication: 'La médiane divise la série en deux moitiés : 50 % en dessous, 50 % au-dessus.' },
    { id: 5, texte: 'Pour calculer la moyenne de 4, 6, 8, 10, on fait :', choix: ['4+6+8+10','(4+6+8+10) ÷ 4','4×6×8×10','(4+10) ÷ 2'], correct: 1, explication: 'Moyenne = somme ÷ nombre de valeurs = 28 ÷ 4 = 7.' },
  ],

  '3e-hist-1': [
    { id: 1, texte: 'Quelle est la date d\'indépendance du Togo ?', choix: ['27 avril 1958','1er janvier 1960','27 avril 1960','14 juillet 1960'], correct: 2, explication: 'Le Togo a accédé à l\'indépendance le 27 avril 1960, aujourd\'hui fête nationale.' },
    { id: 2, texte: 'Qui était le premier président du Togo indépendant ?', choix: ['Étienne Gnassingbé','Sylvanus Olympio','Léopold Sédar Senghor','Félix Houphouët-Boigny'], correct: 1, explication: 'Sylvanus Olympio (1902-1963) fut le premier président du Togo indépendant, père de l\'indépendance.' },
    { id: 3, texte: 'Quelle puissance coloniale administrait le Togo avant l\'indépendance ?', choix: ['La Belgique','L\'Angleterre','La France (et une partie à l\'Angleterre)','Le Portugal'], correct: 2, explication: 'Après la Première Guerre mondiale, le Togo allemand fut partagé entre la France et la Grande-Bretagne.' },
    { id: 4, texte: 'Quel est l\'hymne national du Togo ?', choix: ['La Marseillaise','Terre de nos aïeux','L\'Abidjanaise','Debout Togolais'], correct: 1, explication: 'L\'hymne national du Togo s\'appelle « Terre de nos aïeux ».' },
    { id: 5, texte: 'Quelle est la capitale du Togo ?', choix: ['Kara','Sokodé','Atakpamé','Lomé'], correct: 3, explication: 'Lomé est la capitale et la plus grande ville du Togo, située sur la côte atlantique.' },
  ],

  'tle-svt-1': [
    { id: 1, texte: 'Qu\'est-ce que l\'ADN ?', choix: ['Une protéine','Un sucre','La molécule de l\'information génétique','Un lipide'], correct: 2, explication: 'L\'ADN (Acide DésoxyriboNucléique) porte toute l\'information génétique d\'un organisme.' },
    { id: 2, texte: 'Quelle est la base azotée complémentaire de l\'Adénine ?', choix: ['Cytosine','Guanine','Thymine','Uracile'], correct: 2, explication: 'A s\'associe à T (Thymine) dans l\'ADN selon la règle de complémentarité A-T, G-C.' },
    { id: 3, texte: 'Où se trouve l\'ADN dans la cellule ?', choix: ['Dans le cytoplasme','Dans les mitochondries uniquement','Dans le noyau (et un peu dans les mitochondries)','Sur la membrane'], correct: 2, explication: 'L\'ADN est principalement dans le noyau, regroupé en chromosomes. Il y a aussi un peu d\'ADN dans les mitochondries.' },
    { id: 4, texte: 'Qu\'est-ce qu\'un gène ?', choix: ['Un chromosome entier','Une séquence d\'ADN codant pour une protéine','Une cellule','Un nucléotide'], correct: 1, explication: 'Un gène est une séquence précise d\'ADN qui contient le code pour fabriquer une protéine particulière.' },
    { id: 5, texte: 'Combien de chromosomes possède une cellule humaine normale ?', choix: ['23','92','46','48'], correct: 2, explication: 'Chaque cellule humaine possède 46 chromosomes (23 paires), dont la paire XY ou XX qui détermine le sexe.' },
  ],

  'tle-svt-2': [
    { id: 1, texte: 'Combien de cellules filles produit une mitose ?', choix: ['1','4','2','8'], correct: 2, explication: 'La mitose produit 2 cellules filles identiques à la cellule mère.' },
    { id: 2, texte: 'Durant quelle phase les chromosomes s\'alignent-ils au centre de la cellule ?', choix: ['Prophase','Anaphase','Télophase','Métaphase'], correct: 3, explication: 'C\'est la métaphase. Les chromosomes s\'alignent sur le plan équatorial de la cellule.' },
    { id: 3, texte: 'La mitose maintient...', choix: ['Le nombre de chromosomes constant','La moitié des chromosomes','Le double des chromosomes','Un chromosome unique'], correct: 0, explication: 'Contrairement à la méiose, la mitose conserve le même nombre de chromosomes (2n) dans chaque cellule fille.' },
    { id: 4, texte: 'Quel est l\'ordre correct des phases de la mitose ?', choix: ['M-P-A-T','P-M-A-T','A-P-M-T','T-A-M-P'], correct: 1, explication: 'Prophase → Métaphase → Anaphase → Télophase. Mnémotechnique : PMAT.' },
    { id: 5, texte: 'La mitose est impliquée dans...', choix: ['La reproduction sexuée','La formation des gamètes','La croissance et la cicatrisation','La fécondation'], correct: 2, explication: 'La mitose assure la croissance, le renouvellement et la réparation des tissus (comme la cicatrisation).' },
  ],

  'tle-maths-1': [
    { id: 1, texte: 'Quelle est la dérivée de f(x) = x⁴ ?', choix: ['4x³','x³','4x⁵','4'], correct: 0, explication: 'Règle : (xⁿ)\' = n·xⁿ⁻¹. Donc (x⁴)\' = 4x³.' },
    { id: 2, texte: 'Quelle est la dérivée de f(x) = 7 (constante) ?', choix: ['7','1','0','7x'], correct: 2, explication: 'La dérivée d\'une constante est toujours 0.' },
    { id: 3, texte: 'Si f\'(x) > 0 sur un intervalle, alors f est...', choix: ['Décroissante','Constante','Nulle','Croissante'], correct: 3, explication: 'Une dérivée positive indique que la fonction monte (est croissante) sur cet intervalle.' },
    { id: 4, texte: 'Quelle est la dérivée de f(x) = eˣ ?', choix: ['xe^(x-1)','1/eˣ','eˣ','x·eˣ'], correct: 2, explication: 'La fonction exponentielle eˣ est sa propre dérivée : (eˣ)\' = eˣ.' },
    { id: 5, texte: 'f(x) = 3x² − 6. En quel point f\'(x) = 0 ?', choix: ['x = 3','x = 2','x = 1','x = 0'], correct: 3, explication: 'f\'(x) = 6x. f\'(x) = 0 → 6x = 0 → x = 0.' },
  ],
}
