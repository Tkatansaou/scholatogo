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

  /* ===== CM1 — MATHS ===== */
  {
    id: 'cm1-maths-1', classeId: 'cm1', matiereId: 'maths',
    titre: 'La multiplication — tables de 2 à 5', dureeMin: 15,
    contenu: [
      { type: 'intro', texte: 'Multiplier, c\'est additionner plusieurs fois le même nombre. Connaître ses tables est indispensable pour toutes les autres opérations !' },
      { type: 'titre', texte: 'Comprendre la multiplication' },
      { type: 'texte', texte: '3 × 4 veut dire : additionner 4 trois fois. 4 + 4 + 4 = 12. On peut aussi lire : 3 fois 4 égale 12.' },
      { type: 'formule', texte: '3 × 4 = 4 × 3 = 12  (la multiplication est commutative)' },
      { type: 'liste', items: [
        'Table de 2 : 2×1=2, 2×2=4, 2×3=6, 2×4=8, 2×5=10',
        'Table de 3 : 3×1=3, 3×2=6, 3×3=9, 3×4=12, 3×5=15',
        'Table de 4 : 4×1=4, 4×2=8, 4×3=12, 4×4=16, 4×5=20',
        'Table de 5 : 5×1=5, 5×2=10, 5×3=15, 5×4=20, 5×5=25',
      ] },
      { type: 'exemple', titre: 'Au marché de Kpalimé', texte: 'Une vendeuse dispose ses mangues en 3 rangées de 4. Combien de mangues en tout ?\n3 × 4 = 12 mangues 🥭' },
      { type: 'retenir', texte: 'Tout produit avec 0 donne 0. Tout produit avec 1 donne le même nombre. La multiplication est commutative : a × b = b × a.' },
    ],
  },
  {
    id: 'cm1-maths-2', classeId: 'cm1', matiereId: 'maths',
    titre: 'La division euclidienne', dureeMin: 18,
    contenu: [
      { type: 'intro', texte: 'Diviser, c\'est partager en parts égales. La division est l\'opération inverse de la multiplication.' },
      { type: 'definition', titre: 'Division euclidienne', texte: 'Diviser a par b donne un quotient q et un reste r tel que : a = b × q + r, avec 0 ≤ r < b.' },
      { type: 'exemple', titre: 'Partager des oranges', texte: 'On a 17 oranges à partager entre 4 enfants.\n17 ÷ 4 = 4 reste 1\nChaque enfant reçoit 4 oranges, il reste 1 orange.\nVérification : 4 × 4 + 1 = 17 ✓' },
      { type: 'formule', texte: 'Dividende = Diviseur × Quotient + Reste' },
      { type: 'liste', items: [
        'Si le reste = 0, la division est exacte',
        '12 ÷ 3 = 4 (reste 0) — division exacte',
        '13 ÷ 3 = 4 reste 1',
        '14 ÷ 3 = 4 reste 2',
      ] },
      { type: 'retenir', texte: 'Pour vérifier une division : Diviseur × Quotient + Reste doit redonner le Dividende. Le reste est toujours inférieur au diviseur.' },
    ],
  },

  /* ===== CM2 — MATHS ===== */
  {
    id: 'cm2-maths-1', classeId: 'cm2', matiereId: 'maths',
    titre: 'Les fractions simples', dureeMin: 20,
    contenu: [
      { type: 'intro', texte: 'Une fraction représente une partie d\'un tout. On utilise les fractions tous les jours : une demi-part de gâteau, un quart d\'heure…' },
      { type: 'definition', titre: 'Une fraction a/b', texte: 'a est le numérateur (nombre de parts prises). b est le dénominateur (nombre de parts total). b ne peut pas être 0.' },
      { type: 'liste', items: [
        '1/2 = un demi (on partage en 2, on prend 1)',
        '1/4 = un quart (on partage en 4, on prend 1)',
        '3/4 = trois quarts (on partage en 4, on prend 3)',
        '2/2 = 1 (entier) — on a tout pris',
      ] },
      { type: 'exemple', titre: 'Partager une galette', texte: 'Afi partage une galette en 4 parts égales. Elle mange 3 parts. Elle a mangé 3/4 de la galette. Il reste 1/4.' },
      { type: 'titre', texte: 'Fractions égales (équivalentes)' },
      { type: 'texte', texte: '1/2 = 2/4 = 3/6. Ces fractions sont équivalentes : elles représentent la même quantité. On multiplie ou divise numérateur ET dénominateur par le même nombre.' },
      { type: 'retenir', texte: 'Fraction = numérateur / dénominateur. Plus le dénominateur est grand, plus chaque part est petite. 1/2 > 1/4 > 1/8.' },
    ],
  },

  /* ===== 6ème — MATHS ===== */
  {
    id: '6e-maths-1', classeId: '6eme', matiereId: 'maths',
    titre: 'Les nombres entiers relatifs', dureeMin: 20,
    contenu: [
      { type: 'intro', texte: 'Les nombres relatifs permettent de représenter des situations opposées : une dette et un avoir, une température positive et négative, une altitude en dessus et en dessous de la mer.' },
      { type: 'titre', texte: 'Nombres positifs et négatifs' },
      { type: 'texte', texte: 'Les nombres entiers relatifs sont tous les entiers avec leur signe : …, -3, -2, -1, 0, +1, +2, +3, … Le zéro n\'est ni positif ni négatif.' },
      { type: 'exemple', titre: 'Contexte togolais', texte: 'Température à Lomé : +35°C (chaleur). Température dans un réfrigérateur : -4°C. Altitude du golfe de Guinée : 0 m. Altitude du Mont Agou : +986 m.' },
      { type: 'definition', titre: 'Valeur absolue', texte: 'La valeur absolue de n, notée |n|, est sa distance à zéro. |+5| = 5 et |-5| = 5. La valeur absolue est toujours positive.' },
      { type: 'liste', items: [
        'Pour comparer : sur la droite des nombres, les grands nombres sont à droite',
        '-3 < -1 < 0 < +2 < +5',
        'Un nombre négatif est toujours plus petit qu\'un nombre positif',
      ] },
      { type: 'retenir', texte: 'Négatif < 0 < Positif. Sur la droite graduée, les nombres croissent de gauche à droite. |-7| = 7.' },
    ],
  },
  {
    id: '6e-maths-2', classeId: '6eme', matiereId: 'maths',
    titre: 'Périmètre et aire des figures', dureeMin: 22,
    contenu: [
      { type: 'intro', texte: 'Le périmètre mesure le tour d\'une figure (en m, cm…). L\'aire mesure la surface d\'une figure (en m², cm²…). Ces deux notions sont différentes !' },
      { type: 'titre', texte: 'Formules essentielles' },
      { type: 'liste', items: [
        'Rectangle : P = 2×(L+l) | Aire = L × l',
        'Carré : P = 4 × c | Aire = c²',
        'Triangle : P = a + b + c | Aire = (base × hauteur) ÷ 2',
        'Cercle : P = 2πR (périmètre = circonférence) | Aire = πR²',
      ] },
      { type: 'exemple', titre: 'Champ de maïs', texte: 'Un champ rectangulaire mesure 20 m de long et 12 m de large.\nPérimètre = 2×(20+12) = 64 m (longueur de la clôture)\nAire = 20 × 12 = 240 m² (surface cultivée)' },
      { type: 'formule', texte: 'π ≈ 3,14' },
      { type: 'retenir', texte: 'Périmètre = longueur du contour (1D → unité de longueur). Aire = surface intérieure (2D → unité au carré). Ne pas confondre !' },
    ],
  },

  /* ===== 6ème — FRANÇAIS ===== */
  {
    id: '6e-fr-1', classeId: '6eme', matiereId: 'francais',
    titre: 'Le présent de l\'indicatif', dureeMin: 20,
    contenu: [
      { type: 'intro', texte: 'Le présent de l\'indicatif est le temps le plus utilisé en français. Il exprime une action qui se passe maintenant, une vérité générale ou une habitude.' },
      { type: 'titre', texte: 'Les trois groupes de verbes' },
      { type: 'liste', items: [
        '1er groupe (-er) : aimer, parler, manger → radical + e, es, e, ons, ez, ent',
        '2ème groupe (-ir, -issant) : finir, choisir → radical + is, is, it, issons, issez, issent',
        '3ème groupe : verbes irréguliers : être, avoir, aller, venir, faire…',
      ] },
      { type: 'exemple', titre: 'Conjugaison : PARLER (1er groupe)', texte: 'Je parle | Tu parles | Il/Elle parle\nNous parlons | Vous parlez | Ils/Elles parlent' },
      { type: 'exemple', titre: 'Conjugaison : ÊTRE (irrégulier)', texte: 'Je suis | Tu es | Il/Elle est\nNous sommes | Vous êtes | Ils/Elles sont' },
      { type: 'exemple', titre: 'Conjugaison : AVOIR (irrégulier)', texte: 'J\'ai | Tu as | Il/Elle a\nNous avons | Vous avez | Ils/Elles ont' },
      { type: 'retenir', texte: 'Identifier le groupe d\'un verbe : infinitif en -er → 1er groupe. En -ir/-issant → 2ème. Tous les autres → 3ème (irréguliers).' },
    ],
  },

  /* ===== 6ème — SVT ===== */
  {
    id: '6e-svt-1', classeId: '6eme', matiereId: 'svt',
    titre: 'La classification des êtres vivants', dureeMin: 22,
    contenu: [
      { type: 'intro', texte: 'Il existe des millions d\'espèces sur Terre. Les scientifiques les classent selon leurs caractéristiques communes pour mieux les étudier. On appelle cette organisation la classification phylogénétique.' },
      { type: 'titre', texte: 'Les grands groupes du vivant' },
      { type: 'liste', items: [
        'Bactéries : unicellulaires sans noyau (procaryotes) — ex : E. coli',
        'Protistes : unicellulaires avec noyau — ex : plasmodium (paludisme)',
        'Champignons : absorbent leur nourriture — ex : moisissures, champignons de brousse',
        'Plantes : photosynthèse — ex : manioc, cocotier 🌴',
        'Animaux : hétérotrophes et mobiles — ex : humains, crocodiles 🐊',
      ] },
      { type: 'definition', titre: 'Espèce', texte: 'Un ensemble d\'individus qui peuvent se reproduire entre eux et avoir des descendants fertiles. L\'être humain appartient à l\'espèce Homo sapiens.' },
      { type: 'exemple', titre: 'Biodiversité au Togo', texte: 'La forêt de la Kpalimé abrite des centaines d\'espèces : papillons, perroquets, vipères, arbres tropicaux. Le paludisme est causé par un protiste (Plasmodium) transmis par le moustique Anopheles.' },
      { type: 'retenir', texte: 'Les 5 grands règnes : Bactéries, Protistes, Champignons, Plantes, Animaux. L\'humain est un animal vertébré mammifère primate.' },
    ],
  },

  /* ===== 5ème — MATHS ===== */
  {
    id: '5e-maths-1', classeId: '5eme', matiereId: 'maths',
    titre: 'Opérations sur les fractions', dureeMin: 25,
    contenu: [
      { type: 'intro', texte: 'Additionner, soustraire et multiplier des fractions sont des compétences clés du collège. Elles apparaissent en maths, physique et dans la vie quotidienne.' },
      { type: 'titre', texte: 'Addition et soustraction' },
      { type: 'texte', texte: 'Pour additionner ou soustraire des fractions, elles doivent avoir le même dénominateur (dénominateur commun).' },
      { type: 'exemple', titre: 'Même dénominateur', texte: '3/7 + 2/7 = 5/7  (même dénominateur : on additionne les numérateurs)' },
      { type: 'exemple', titre: 'Dénominateurs différents', texte: '1/3 + 1/4 = ?\nOn cherche le PPCM de 3 et 4 = 12\n1/3 = 4/12 | 1/4 = 3/12\n4/12 + 3/12 = 7/12' },
      { type: 'titre', texte: 'Multiplication de fractions' },
      { type: 'formule', texte: '(a/b) × (c/d) = (a×c) / (b×d)' },
      { type: 'exemple', titre: 'Exemple', texte: '2/3 × 3/5 = (2×3)/(3×5) = 6/15 = 2/5 (après simplification)' },
      { type: 'retenir', texte: 'Addition/soustraction : même dénominateur obligatoire. Multiplication : numérateur × numérateur, dénominateur × dénominateur. Toujours simplifier le résultat.' },
    ],
  },
  {
    id: '5e-maths-2', classeId: '5eme', matiereId: 'maths',
    titre: 'Angles et triangles', dureeMin: 22,
    contenu: [
      { type: 'intro', texte: 'La géométrie des angles et des triangles est fondamentale. Elle sert en architecture, en topographie et en navigation — des métiers essentiels au développement du Togo.' },
      { type: 'titre', texte: 'Types d\'angles' },
      { type: 'liste', items: [
        'Angle nul : 0°',
        'Angle aigu : entre 0° et 90°',
        'Angle droit : exactement 90° (symbole □)',
        'Angle obtus : entre 90° et 180°',
        'Angle plat : 180°',
        'Angle rentrant : entre 180° et 360°',
      ] },
      { type: 'definition', titre: 'Somme des angles d\'un triangle', texte: 'La somme des trois angles d\'un triangle est toujours égale à 180°.' },
      { type: 'exemple', titre: 'Application', texte: 'Un triangle a deux angles de 50° et 70°. Quel est le troisième ?\n50 + 70 + x = 180\nx = 180 - 120 = 60°' },
      { type: 'liste', items: [
        'Triangle équilatéral : 3 côtés égaux, 3 angles de 60°',
        'Triangle isocèle : 2 côtés égaux, 2 angles égaux',
        'Triangle rectangle : un angle de 90°',
        'Triangle scalène : aucun côté égal',
      ] },
      { type: 'retenir', texte: 'Somme des angles d\'un triangle = 180°. Triangle rectangle → théorème de Pythagore applicable.' },
    ],
  },

  /* ===== 5ème — SVT ===== */
  {
    id: '5e-svt-1', classeId: '5eme', matiereId: 'svt',
    titre: 'La respiration chez les êtres vivants', dureeMin: 22,
    contenu: [
      { type: 'intro', texte: 'Tous les êtres vivants respirent. La respiration permet de libérer l\'énergie contenue dans les aliments pour faire fonctionner l\'organisme.' },
      { type: 'definition', titre: 'Respiration cellulaire', texte: 'Réaction chimique qui dégrade le glucose en présence d\'oxygène pour produire de l\'énergie (ATP), du CO₂ et de l\'eau.' },
      { type: 'formule', texte: 'Glucose + O₂ → CO₂ + H₂O + Énergie (ATP)' },
      { type: 'titre', texte: 'Organes respiratoires selon les animaux' },
      { type: 'liste', items: [
        'Humains et mammifères → Poumons',
        'Poissons → Branchies',
        'Insectes → Trachées',
        'Vers de terre → Peau (respiration cutanée)',
        'Plantes → Stomates (pour les échanges gazeux)',
      ] },
      { type: 'exemple', titre: 'Respiration humaine', texte: 'Inspiration : l\'air entre dans les poumons, O₂ passe dans le sang.\nExpiration : le CO₂ est rejeté. Le diaphragme se contracte à l\'inspiration.\nFréquence normale : 15-20 respirations/minute au repos.' },
      { type: 'retenir', texte: 'Respiration ≠ Photosynthèse : la respiration consomme O₂ et libère CO₂, la photosynthèse fait l\'inverse. Toute cellule vivante respire en permanence.' },
    ],
  },

  /* ===== 5ème — HISTOIRE ===== */
  {
    id: '5e-hist-1', classeId: '5eme', matiereId: 'histoire',
    titre: 'La traite négrière et l\'esclavage', dureeMin: 25,
    contenu: [
      { type: 'intro', texte: 'Du XVe au XIXe siècle, des millions d\'Africains ont été réduits en esclavage et déportés vers les Amériques. Cette période tragique a profondément marqué l\'histoire de l\'Afrique de l\'Ouest.' },
      { type: 'titre', texte: 'Le commerce triangulaire' },
      { type: 'texte', texte: 'Le commerce triangulaire reliait trois continents :\n1. Europe → Afrique : armes, tissus, alcool échangés contre des esclaves\n2. Afrique → Amériques : les esclaves (la « traite »)\n3. Amériques → Europe : sucre, coton, tabac produits par les esclaves' },
      { type: 'definition', titre: 'La traite atlantique', texte: 'Entre 1500 et 1850, environ 12 millions d\'Africains ont été déportés. La côte du golfe de Bénin (dont le Togo actuel) était appelée la « Côte des esclaves ».' },
      { type: 'exemple', titre: 'Impact au Togo', texte: 'Aného (ancienne Petit-Popo) était un port de traite au Togo. Des notables locaux participaient au commerce en échangeant des prisonniers de guerre. L\'abolition au Togo date de 1848 (côté français).' },
      { type: 'liste', items: [
        '1848 : abolition définitive de l\'esclavage en France (et colonies)',
        '1865 : abolition aux États-Unis (13e amendement)',
        '1888 : dernière abolition officielle au Brésil',
      ] },
      { type: 'retenir', texte: 'Commerce triangulaire : Europe-Afrique-Amériques. ~12 millions d\'Africains déportés. La côte togolaise = « Côte des esclaves ». Abolition française : 1848.' },
    ],
  },

  /* ===== 4ème — HISTOIRE-GÉO ===== */
  {
    id: '4e-hist-1', classeId: '4eme', matiereId: 'histoire',
    titre: 'La colonisation de l\'Afrique et du Togo', dureeMin: 25,
    contenu: [
      { type: 'intro', texte: 'À la fin du XIXe siècle, les puissances européennes se partagent l\'Afrique. Le Togo devient une colonie allemande en 1884, lors de la Conférence de Berlin.' },
      { type: 'titre', texte: 'La Conférence de Berlin (1884–1885)' },
      { type: 'texte', texte: 'Les grandes puissances européennes (Allemagne, France, Angleterre, Belgique…) se réunissent à Berlin pour se partager l\'Afrique sans consulter les Africains. C\'est le « partage de l\'Afrique ».' },
      { type: 'definition', titre: 'Le Togo allemand (Togoland)', texte: 'En 1884, l\'explorateur allemand Gustav Nachtigal signe un traité avec le chef Mlapa III à Togoville, sur les rives du lac Togo. Le Togo devient un protectorat allemand.' },
      { type: 'liste', items: [
        'Construction du chemin de fer Lomé-Atakpamé par les Allemands',
        'Développement des plantations de cacao, café, coton',
        'Première Guerre mondiale (1914) : les Alliés envahissent le Togo',
        '1922 : le Togo est partagé entre France et Grande-Bretagne (mandat SDN)',
      ] },
      { type: 'exemple', titre: 'Résistances à la colonisation', texte: 'Le chef Kouamé de Notsé a résisté à l\'occupation. La résistance populaire s\'exprimait aussi par la fuite, les grèves et les révoltes. La colonisation a laissé des infrastructures mais a aussi exploité les ressources et les hommes.' },
      { type: 'retenir', texte: 'Berlin 1884 = partage de l\'Afrique. Togo allemand : 1884-1914. Puis partage franco-britannique. Indépendance : 27 avril 1960.' },
    ],
  },

  /* ===== 4ème — PHYSIQUE-CHIMIE ===== */
  {
    id: '4e-phys-1', classeId: '4eme', matiereId: 'physique',
    titre: 'Les circuits électriques', dureeMin: 25,
    contenu: [
      { type: 'intro', texte: 'L\'électricité est au cœur de notre vie moderne. Comprendre les circuits électriques est essentiel pour comprendre comment fonctionnent les lampes, téléphones et appareils électroménagers.' },
      { type: 'titre', texte: 'Composants d\'un circuit électrique' },
      { type: 'liste', items: [
        'Générateur (pile, batterie, panneau solaire) : fournit l\'énergie électrique',
        'Conducteurs (fils électriques) : transportent le courant',
        'Récepteurs (lampe, moteur, résistance) : consomment l\'énergie',
        'Interrupteur : ouvre ou ferme le circuit',
      ] },
      { type: 'definition', titre: 'Circuit ouvert / fermé', texte: 'Circuit fermé : le courant circule (la lampe s\'allume). Circuit ouvert : le courant ne circule pas (interrupteur ouvert ou fil coupé).' },
      { type: 'titre', texte: 'Montages série et parallèle' },
      { type: 'texte', texte: 'En série : les composants sont branchés les uns après les autres. Si un s\'éteint, tout s\'éteint. En parallèle : les composants sont branchés côte à côte sur les mêmes bornes. Si un s\'éteint, les autres restent allumés.' },
      { type: 'exemple', titre: 'À la maison au Togo', texte: 'Les prises de ta maison sont en parallèle : si tu débranches un appareil, les autres continuent de fonctionner. Les guirlandes de Noël sont souvent en série : si une ampoule lâche, toute la guirlande s\'éteint.' },
      { type: 'retenir', texte: 'Série : même courant partout, les pannes se cumulent. Parallèle : même tension aux bornes, les pannes sont indépendantes. Les installations domestiques sont en parallèle.' },
    ],
  },
  {
    id: '4e-phys-2', classeId: '4eme', matiereId: 'physique',
    titre: 'Lumière et optique géométrique', dureeMin: 22,
    contenu: [
      { type: 'intro', texte: 'La lumière nous permet de voir. L\'optique étudie la propagation de la lumière et ses interactions avec la matière : réflexion, réfraction, dispersion.' },
      { type: 'definition', titre: 'Propagation rectiligne', texte: 'Dans un milieu homogène et transparent, la lumière se propage en ligne droite. C\'est pourquoi les ombres ont une forme précise et les éclipses sont prévisibles.' },
      { type: 'titre', texte: 'Sources de lumière' },
      { type: 'liste', items: [
        'Sources primaires : produisent leur propre lumière (Soleil ☀️, flamme, ampoule, LED)',
        'Sources secondaires : réfléchissent la lumière (Lune 🌙, objets éclairés)',
      ] },
      { type: 'definition', titre: 'Réflexion', texte: 'Quand la lumière rencontre une surface, elle rebondit. Loi de réflexion : angle d\'incidence = angle de réflexion. Application : miroir, rétroviseur.' },
      { type: 'definition', titre: 'Réfraction', texte: 'Quand la lumière passe d\'un milieu à un autre (air→eau), elle change de direction. C\'est pourquoi une paille dans un verre d\'eau semble brisée.' },
      { type: 'exemple', titre: 'Dispersion de la lumière', texte: 'Un prisme décompose la lumière blanche en arc-en-ciel : rouge, orange, jaune, vert, bleu, indigo, violet. L\'arc-en-ciel naturel est causé par la réfraction dans les gouttes de pluie.' },
      { type: 'retenir', texte: 'Lumière = ligne droite dans un milieu homogène. Réflexion : angle i = angle r. Réfraction : changement de direction au passage entre deux milieux. Dispersion : ROYGBIV.' },
    ],
  },

  /* ===== 4ème — ANGLAIS ===== */
  {
    id: '4e-angl-1', classeId: '4eme', matiereId: 'anglais',
    titre: 'Greetings and the Present Simple', dureeMin: 22,
    contenu: [
      { type: 'intro', texte: 'L\'anglais est la langue des affaires et de la science. Maîtriser les salutations et le présent simple est la base indispensable pour communiquer.' },
      { type: 'titre', texte: 'Greetings — Les salutations' },
      { type: 'liste', items: [
        'Hello / Hi → Bonjour / Salut',
        'Good morning → Bonjour (le matin)',
        'Good afternoon → Bonne après-midi',
        'Good evening → Bonsoir',
        'Goodbye / Bye → Au revoir',
        'How are you? → Comment vas-tu ?',
        'I am fine, thank you → Je vais bien, merci',
        'Nice to meet you → Enchanté(e)',
      ] },
      { type: 'titre', texte: 'Present Simple — Structure' },
      { type: 'texte', texte: 'Le présent simple exprime des habitudes, des vérités générales et des faits permanents.' },
      { type: 'formule', texte: 'Affirmative: I/You/We/They + V | He/She/It + V+s\nNegative: do not (don\'t) / does not (doesn\'t) + V\nInterrogative: Do / Does + Subject + V?' },
      { type: 'exemple', titre: 'Exemples avec contexte togolais', texte: 'Koffi lives in Lomé. (Koffi habite à Lomé.)\nWe study French and English. (Nous étudions le français et l\'anglais.)\nDoes she go to school? Yes, she does.' },
      { type: 'retenir', texte: 'He/She/It → verbe + s (he plays, she eats). Négation : don\'t/doesn\'t. Question : Do/Does devant le sujet. Le présent simple n\'est PAS pour les actions en cours (→ present continuous).' },
    ],
  },

  /* ===== 3ème — SVT ===== */
  {
    id: '3e-svt-1', classeId: '3eme', matiereId: 'svt',
    titre: 'La digestion chez l\'homme', dureeMin: 25,
    contenu: [
      { type: 'intro', texte: 'La digestion transforme les aliments que tu manges en nutriments assimilables par tes cellules. Ce processus implique un long tube digestif et plusieurs organes annexes.' },
      { type: 'titre', texte: 'Le tube digestif' },
      { type: 'liste', items: [
        '1. Bouche : mastication, salive (amylase → amidon)',
        '2. Œsophage : transport des aliments vers l\'estomac',
        '3. Estomac : brassage + suc gastrique (acide, protéases)',
        '4. Intestin grêle : digestion principale + absorption des nutriments',
        '5. Gros intestin : absorption de l\'eau, formation des selles',
        '6. Rectum et anus : élimination des déchets',
      ] },
      { type: 'definition', titre: 'Organes annexes', texte: 'Le foie (bile pour digérer les graisses), le pancréas (suc pancréatique contenant lipase, protéase, amylase), la vésicule biliaire (stocke la bile).' },
      { type: 'exemple', titre: 'Le fufu au Togo', texte: 'Quand tu manges du fufu : la bouche le mâche et le salivise (amidon → sucres), l\'estomac le brasse avec l\'acide, l\'intestin grêle absorbe les nutriments (glucose, acides aminés, acides gras) dans le sang.' },
      { type: 'formule', texte: 'Protides → Acides aminés | Glucides → Glucose | Lipides → Acides gras + Glycérol' },
      { type: 'retenir', texte: 'Digestion = simplification des molécules. Absorption = passage des nutriments dans le sang (intestin grêle, villosités). Transit total : ~24 à 72 heures.' },
    ],
  },

  /* ===== 3ème — PHYSIQUE ===== */
  {
    id: '3e-phys-1', classeId: '3eme', matiereId: 'physique',
    titre: 'Les forces et l\'équilibre', dureeMin: 25,
    contenu: [
      { type: 'intro', texte: 'Une force est une action exercée sur un objet qui peut modifier son état de mouvement ou sa forme. Comprendre les forces, c\'est comprendre pourquoi les objets bougent ou restent immobiles.' },
      { type: 'definition', titre: 'Caractéristiques d\'une force', texte: 'Une force est caractérisée par : son point d\'application, sa direction (droite), son sens (flèche), et son intensité (valeur en Newtons, N).' },
      { type: 'titre', texte: 'Poids et masse' },
      { type: 'texte', texte: 'La masse (kg) est une propriété intrinsèque de l\'objet. Le poids (N) est la force d\'attraction gravitationnelle. Ils sont liés par la relation P = m × g.' },
      { type: 'formule', texte: 'P = m × g  (avec g ≈ 10 N/kg sur Terre)' },
      { type: 'exemple', titre: 'Calcul', texte: 'Un sac de riz de 25 kg. Son poids : P = 25 × 10 = 250 N.' },
      { type: 'definition', titre: 'Équilibre', texte: 'Un objet est en équilibre si la somme des forces qui s\'exercent sur lui est nulle. Les forces se compensent.' },
      { type: 'exemple', titre: 'Livre sur une table', texte: 'Un livre sur une table subit son poids P vers le bas, et la réaction normale N de la table vers le haut. P = N → équilibre.' },
      { type: 'retenir', texte: 'Poids ≠ Masse. P(N) = m(kg) × g(N/kg). Équilibre : somme des forces = 0. Poids = force vers le centre de la Terre.' },
    ],
  },

  /* ===== 3ème — ANGLAIS ===== */
  {
    id: '3e-angl-1', classeId: '3eme', matiereId: 'anglais',
    titre: 'The Past Simple Tense', dureeMin: 22,
    contenu: [
      { type: 'intro', texte: 'Le Past Simple (prétérit) exprime des actions terminées dans le passé à un moment précis. C\'est le temps du récit et de la narration en anglais.' },
      { type: 'titre', texte: 'Formation du Past Simple' },
      { type: 'texte', texte: 'Verbes réguliers : ajouter -ed à l\'infinitif.\nVerbes irréguliers : forme spéciale à mémoriser (liste des verbes irréguliers).' },
      { type: 'formule', texte: 'Regular: V + -ed   (play→played, walk→walked, study→studied)\nIrregular: go→went, eat→ate, have→had, be→was/were, see→saw' },
      { type: 'exemple', titre: 'Phrases au Past Simple', texte: 'Koffi walked to school yesterday. (Koffi a marché jusqu\'à l\'école hier.)\nThe teacher explained the lesson. (Le professeur a expliqué la leçon.)\nWe went to Lomé last week. (Nous sommes allés à Lomé la semaine dernière.)' },
      { type: 'titre', texte: 'Formes négative et interrogative' },
      { type: 'formule', texte: 'Negative: Subject + did not (didn\'t) + V base\nQuestion: Did + Subject + V base?' },
      { type: 'exemple', titre: 'Exemples', texte: 'She didn\'t come to school. (Elle n\'est pas venue à l\'école.)\nDid you eat breakfast? Yes, I did. / No, I didn\'t.' },
      { type: 'retenir', texte: 'Past Simple : verbes réguliers + ed. Irréguliers : à mémoriser. Négation et question → did/didn\'t. Marqueurs temporels : yesterday, last week, ago, in 1960.' },
    ],
  },

  /* ===== Terminale — PHILOSOPHIE ===== */
  {
    id: 'tle-philo-1', classeId: 'terminale', matiereId: 'philo',
    titre: 'Introduction à la philosophie', dureeMin: 30,
    contenu: [
      { type: 'intro', texte: 'La philosophie (du grec philein = aimer, sophia = sagesse) est la discipline qui cherche à comprendre le monde, l\'existence humaine et les valeurs par la raison et l\'argumentation critique.' },
      { type: 'titre', texte: 'Les grandes questions philosophiques' },
      { type: 'liste', items: [
        'Métaphysique : Qu\'est-ce que la réalité ? Dieu existe-t-il ? L\'âme est-elle immortelle ?',
        'Épistémologie : Qu\'est-ce que la connaissance ? Peut-on tout savoir ?',
        'Éthique : Qu\'est-ce que le bien ? Comment doit-on agir ?',
        'Politique : Qu\'est-ce que la justice ? Quel est le meilleur régime ?',
        'Esthétique : Qu\'est-ce que le beau ? L\'art a-t-il une fonction ?',
      ] },
      { type: 'definition', titre: 'La démarche philosophique', texte: 'Philosopher, c\'est questionner l\'évidence, argumenter avec rigueur, et accepter la critique. Socrate disait : « Je sais que je ne sais rien. » C\'est la posture d\'humilité intellectuelle.' },
      { type: 'exemple', titre: 'Grands philosophes', texte: 'Socrate (470-399 av.J.-C.) : la maïeutique, l\'ironie.\nPlaton : le monde des Idées, l\'allégorie de la caverne.\nAristote : logique, éthique, politique.\nDescartes : « Je pense, donc je suis. »\nKant : impératif catégorique, raison pure.' },
      { type: 'exemple', titre: 'Philosophie africaine', texte: 'L\'Ubuntu (philosophie bantoue) : « Je suis parce que nous sommes. » La communauté prime sur l\'individu. Cheikh Anta Diop a montré les racines africaines de la philosophie.' },
      { type: 'retenir', texte: 'Philosophie = amour de la sagesse. 5 branches : métaphysique, épistémologie, éthique, politique, esthétique. Méthode : questionnement + argumentation + esprit critique.' },
    ],
  },

  /* ===== Terminale — MATHS 2 ===== */
  {
    id: 'tle-maths-2', classeId: 'terminale', matiereId: 'maths',
    titre: 'Les suites numériques', dureeMin: 35,
    contenu: [
      { type: 'intro', texte: 'Une suite est une liste ordonnée de nombres. Les suites arithmétiques et géométriques modélisent de nombreux phénomènes : intérêts bancaires, croissance démographique, décroissance radioactive.' },
      { type: 'definition', titre: 'Suite arithmétique', texte: 'Chaque terme s\'obtient en ajoutant une raison constante r au terme précédent. Terme général : uₙ = u₀ + n×r' },
      { type: 'exemple', titre: 'Suite arithmétique', texte: 'Suite : 3, 7, 11, 15, 19… (raison r = 4)\nu₀ = 3 | u₁ = 7 | u₁₀ = 3 + 10×4 = 43' },
      { type: 'definition', titre: 'Suite géométrique', texte: 'Chaque terme s\'obtient en multipliant par une raison constante q ≠ 0. Terme général : uₙ = u₀ × qⁿ' },
      { type: 'exemple', titre: 'Suite géométrique — Intérêts composés', texte: 'Un capital de 100 000 FCFA placé à 5% par an. Après n années :\nuₙ = 100 000 × (1,05)ⁿ\nAprès 10 ans : u₁₀ = 100 000 × 1,05¹⁰ ≈ 162 889 FCFA' },
      { type: 'titre', texte: 'Somme des termes' },
      { type: 'liste', items: [
        'Suite arithmétique : Sₙ = n × (u₀ + uₙ₋₁) / 2',
        'Suite géométrique (q ≠ 1) : Sₙ = u₀ × (1 - qⁿ) / (1 - q)',
      ] },
      { type: 'retenir', texte: 'Arithmétique : +r à chaque terme, uₙ = u₀ + nr. Géométrique : ×q à chaque terme, uₙ = u₀×qⁿ. Applications : intérêts composés (géom.), salaires échelonnés (arith.).' },
    ],
  },

  /* ===== Terminale — PHYSIQUE ===== */
  {
    id: 'tle-phys-1', classeId: 'terminale', matiereId: 'physique',
    titre: 'La mécanique newtonienne', dureeMin: 35,
    contenu: [
      { type: 'intro', texte: 'Isaac Newton (1642-1727) a posé les bases de la mécanique classique. Ses trois lois du mouvement décrivent comment les forces agissent sur les corps.' },
      { type: 'titre', texte: 'Les trois lois de Newton' },
      { type: 'definition', titre: '1ère loi — Principe d\'inertie', texte: 'Un corps au repos reste au repos, et un corps en mouvement uniforme reste en mouvement uniforme, à moins qu\'une force extérieure ne s\'y oppose.' },
      { type: 'definition', titre: '2ème loi — Principe fondamental', texte: 'La somme des forces appliquées sur un corps est égale au produit de sa masse par son accélération.' },
      { type: 'formule', texte: 'ΣF = m × a   (en Newtons, kg, m/s²)' },
      { type: 'definition', titre: '3ème loi — Action-Réaction', texte: 'Si A exerce une force sur B, alors B exerce sur A une force égale, opposée et de même droite d\'action.' },
      { type: 'exemple', titre: 'Applications', texte: 'Une voiture de 1 000 kg accélère avec F = 5 000 N.\na = F/m = 5 000/1 000 = 5 m/s²\n\nPropulsion d\'une fusée : les gaz éjectés vers le bas propulsent la fusée vers le haut (3ème loi). Cette loi s\'applique à la propulsion des engins spatiaux.' },
      { type: 'retenir', texte: '1ère loi : inertie (sans force → pas de changement). 2ème loi : ΣF = ma. 3ème loi : action-réaction, forces opposées. Unité de force : Newton (N) = kg·m/s².' },
    ],
  },

  /* ===== Terminale — MATHS 3 (Probabilités) ===== */
  {
    id: 'tle-maths-3', classeId: 'terminale', matiereId: 'maths',
    titre: 'Probabilités et variables aléatoires', dureeMin: 35,
    contenu: [
      { type: 'intro', texte: 'Les probabilités permettent de quantifier l\'incertitude et le hasard. Elles sont utilisées en médecine, économie, météorologie et dans tous les domaines de la décision.' },
      { type: 'definition', titre: 'Probabilité d\'un événement', texte: 'P(A) = Nombre de cas favorables / Nombre de cas possibles (équiprobabilité). P(A) ∈ [0, 1]. P(∅) = 0, P(Ω) = 1.' },
      { type: 'exemple', titre: 'Lancer d\'un dé', texte: 'Lancer un dé à 6 faces. P(obtenir 4) = 1/6 ≈ 0,167. P(obtenir un nombre pair) = 3/6 = 1/2.' },
      { type: 'titre', texte: 'Probabilités conditionnelles' },
      { type: 'formule', texte: 'P(A|B) = P(A∩B) / P(B)   [probabilité de A sachant B]' },
      { type: 'definition', titre: 'Indépendance', texte: 'A et B sont indépendants si P(A∩B) = P(A) × P(B). Tirer 2 fois une pièce : les tirages sont indépendants.' },
      { type: 'exemple', titre: 'Application médicale', texte: 'Un test de dépistage du paludisme est fiable à 95%. Si 10% de la population est malade, quelle est la probabilité qu\'un test positif corresponde à quelqu\'un de vraiment malade ? → Théorème de Bayes.' },
      { type: 'retenir', texte: 'P(A) ∈ [0,1]. P(A∪B) = P(A) + P(B) - P(A∩B). P(Ā) = 1 - P(A). Indépendance : P(A∩B) = P(A)×P(B). Toujours vérifier si les événements sont compatibles.' },
    ],
  },

  /* ===== Terminale — SVT 3 (Immunologie) ===== */
  {
    id: 'tle-svt-3', classeId: 'terminale', matiereId: 'svt',
    titre: 'Le système immunitaire', dureeMin: 30,
    contenu: [
      { type: 'intro', texte: 'Le système immunitaire est notre armée intérieure. Il nous protège contre les agents pathogènes (bactéries, virus, parasites). Comprendre l\'immunité aide à comprendre les vaccins et les maladies infectieuses.' },
      { type: 'titre', texte: 'Deux lignes de défense' },
      { type: 'definition', titre: 'Immunité innée (non spécifique)', texte: 'Réponse rapide, non spécifique. Comprend les barrières physiques (peau, mucus), la fièvre, et les cellules phagocytaires (macrophages, neutrophiles) qui « mangent » les pathogènes.' },
      { type: 'definition', titre: 'Immunité adaptative (spécifique)', texte: 'Réponse lente mais ciblée et mémorisée. Implique les lymphocytes B (anticorps) et T (cytotoxiques). Elle crée une mémoire immunitaire.' },
      { type: 'liste', items: [
        'Lymphocytes B → produisent des anticorps spécifiques à l\'antigène',
        'Lymphocytes T cytotoxiques → détruisent les cellules infectées',
        'Lymphocytes T auxiliaires → coordonnent la réponse immunitaire',
        'Cellules mémoire → permettent une réponse plus rapide lors d\'une 2ème infection',
      ] },
      { type: 'exemple', titre: 'Vaccination au Togo', texte: 'Le vaccin contre le paludisme (RTS,S) introduit un antigène inoffensif du Plasmodium. Le système immunitaire apprend à le reconnaître. En cas de vraie infection, la réponse est immédiate grâce aux cellules mémoire.' },
      { type: 'retenir', texte: 'Immunité innée = rapide, non spécifique. Immunité adaptative = spécifique, mémorisée. Anticorps = protéines produites par les lymphocytes B. Vaccination = éducation du système immunitaire.' },
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

  'cm1-maths-1': [
    { id: 1, texte: '3 × 4 = ?', choix: ['8','14','12','7'], correct: 2, explication: '3 × 4 = 12. On peut vérifier : 4+4+4 = 12.' },
    { id: 2, texte: '5 × 5 = ?', choix: ['20','25','10','30'], correct: 1, explication: '5 × 5 = 25. La table de 5 se termine toujours par 0 ou 5.' },
    { id: 3, texte: 'Une vendeuse dispose des oranges en 4 rangées de 3. Combien en tout ?', choix: ['7','10','14','12'], correct: 3, explication: '4 × 3 = 12 oranges.' },
    { id: 4, texte: '2 × 7 = ?', choix: ['9','12','14','16'], correct: 2, explication: '2 × 7 = 14. Table de 2 : chaque résultat est un nombre pair.' },
    { id: 5, texte: 'La multiplication est commutative. Cela signifie que :', choix: ['a × b = a + b','a × b = b × a','a × b = a − b','a × b = a ÷ b'], correct: 1, explication: 'Commutativité : a × b = b × a. Exemple : 3×4 = 4×3 = 12.' },
  ],

  'cm1-maths-2': [
    { id: 1, texte: '17 ÷ 4 = ? (quotient et reste)', choix: ['q=3, r=5','q=4, r=1','q=5, r=2','q=4, r=3'], correct: 1, explication: '4×4=16, 17−16=1. Quotient = 4, reste = 1. Vérif : 4×4+1=17 ✓' },
    { id: 2, texte: 'Dans 24 ÷ 6, quel est le reste ?', choix: ['2','1','4','0'], correct: 3, explication: '24 ÷ 6 = 4 exactement. Reste = 0 : division exacte.' },
    { id: 3, texte: 'Dividende = 25, Diviseur = 7. Quel est le quotient ?', choix: ['4','3','5','6'], correct: 1, explication: '7×3=21, 7×4=28 (trop grand). Quotient = 3, reste = 4.' },
    { id: 4, texte: 'Le reste d\'une division est toujours...', choix: ['égal au diviseur','plus grand que le diviseur','inférieur au diviseur','nul'], correct: 2, explication: 'Le reste est toujours STRICTEMENT inférieur au diviseur. Sinon, on peut encore diviser.' },
    { id: 5, texte: 'On répartit 30 élèves en groupes de 7. Combien de groupes complets et combien d\'élèves restants ?', choix: ['4 groupes, 2 restants','5 groupes, 0 restants','4 groupes, 6 restants','3 groupes, 9 restants'], correct: 0, explication: '30 ÷ 7 = 4 reste 2. 4 groupes de 7 = 28 élèves, il reste 2 élèves.' },
  ],

  'cm2-maths-1': [
    { id: 1, texte: 'Dans la fraction 3/5, que représente le 5 ?', choix: ['Le numérateur','Le dénominateur','La valeur totale','Le reste'], correct: 1, explication: 'Le dénominateur (5) indique en combien de parts égales on a divisé le tout.' },
    { id: 2, texte: 'Afi mange 3/4 d\'une galette. Quelle fraction reste-t-il ?', choix: ['3/4','2/4','1/4','4/4'], correct: 2, explication: '4/4 − 3/4 = 1/4. Il reste un quart de la galette.' },
    { id: 3, texte: 'Quelle fraction est équivalente à 1/2 ?', choix: ['2/5','3/4','2/4','1/3'], correct: 2, explication: '2/4 = 1/2. On multiplie numérateur et dénominateur par 2.' },
    { id: 4, texte: 'Quelle fraction est la plus grande : 1/3 ou 1/4 ?', choix: ['1/4','Égales','1/3','Impossible à dire'], correct: 2, explication: '1/3 > 1/4. Plus le dénominateur est petit, plus chaque part est grande.' },
    { id: 5, texte: '2/2 est égal à...', choix: ['0','2','0,5','1'], correct: 3, explication: '2/2 = 1 entier. On a pris toutes les parts du tout.' },
  ],

  '6e-maths-1': [
    { id: 1, texte: 'Quel nombre est le plus grand : -3 ou -1 ?', choix: ['-3','-1','Égaux','Impossible à comparer'], correct: 1, explication: 'Sur la droite des nombres, -1 est à droite de -3. Donc -1 > -3.' },
    { id: 2, texte: 'La valeur absolue de -8 est :', choix: ['-8','0','8','-1/8'], correct: 2, explication: '|-8| = 8. La valeur absolue est la distance au zéro, toujours positive.' },
    { id: 3, texte: 'La température à Sokodé est -2°C. À Lomé, elle est +35°C. Quelle est la différence ?', choix: ['33°C','37°C','23°C','32°C'], correct: 1, explication: '35 − (−2) = 35 + 2 = 37°C de différence.' },
    { id: 4, texte: 'Quel nombre est ni positif ni négatif ?', choix: ['1','-1','0','0,5'], correct: 2, explication: 'Zéro (0) n\'est ni positif ni négatif. C\'est l\'origine de la droite des nombres.' },
    { id: 5, texte: 'Classer dans l\'ordre croissant : -5, +2, 0, -1, +7', choix: ['+7,+2,0,-1,-5','-5,-1,0,+2,+7','0,-1,-5,+2,+7','-1,-5,0,+2,+7'], correct: 1, explication: 'Ordre croissant (du plus petit au plus grand) : -5 < -1 < 0 < +2 < +7.' },
  ],

  '6e-maths-2': [
    { id: 1, texte: 'Un champ rectangulaire mesure 15 m × 8 m. Quelle est son aire ?', choix: ['46 m²','23 m','120 m²','120 m'], correct: 2, explication: 'Aire = longueur × largeur = 15 × 8 = 120 m².' },
    { id: 2, texte: 'Quel est le périmètre d\'un carré de côté 6 cm ?', choix: ['12 cm','36 cm','24 cm','18 cm'], correct: 2, explication: 'P = 4 × côté = 4 × 6 = 24 cm.' },
    { id: 3, texte: 'Un triangle a des côtés de 5 cm, 7 cm et 9 cm. Son périmètre est :', choix: ['21 cm','315 cm²','11 cm','21 cm²'], correct: 0, explication: 'P = 5 + 7 + 9 = 21 cm. Le périmètre est une longueur (pas une surface).' },
    { id: 4, texte: 'L\'unité de l\'aire est :', choix: ['le mètre (m)','le mètre carré (m²)','le mètre cube (m³)','le centimètre (cm)'], correct: 1, explication: 'L\'aire est une surface en 2 dimensions → unité au carré (m², cm², km²…).' },
    { id: 5, texte: 'La circonférence d\'un cercle de rayon 5 cm est (π ≈ 3,14) :', choix: ['15,7 cm','31,4 cm','78,5 cm','10 cm'], correct: 1, explication: 'C = 2πR = 2 × 3,14 × 5 = 31,4 cm.' },
  ],

  '6e-fr-1': [
    { id: 1, texte: 'Quelle est la conjugaison correcte de « parler » à la 1ère personne du singulier ?', choix: ['je parlons','je parle','je parlez','je parlent'], correct: 1, explication: 'Je parle. Les verbes du 1er groupe prennent -e à la 1ère personne du singulier.' },
    { id: 2, texte: 'Conjuguer « être » à la 3ème personne du pluriel :', choix: ['ils est','ils êtes','ils sont','ils avoir'], correct: 2, explication: 'Ils sont. Être est irrégulier : je suis, tu es, il est, nous sommes, vous êtes, ils sont.' },
    { id: 3, texte: 'Finir (2ème groupe) à la 1ère personne du pluriel ?', choix: ['nous finons','nous finissons','nous finons','nous finirons'], correct: 1, explication: 'Nous finissons. Les verbes du 2ème groupe prennent -issons à la 1ère personne du pluriel.' },
    { id: 4, texte: 'Quel verbe est du 1er groupe ?', choix: ['avoir','être','aller','manger'], correct: 3, explication: 'Manger se termine par -er → 1er groupe. Avoir, être et aller sont des verbes irréguliers (3ème groupe).' },
    { id: 5, texte: 'Conjugaison de « avoir » à la 2ème personne du singulier ?', choix: ['tu es','tu avoir','tu avons','tu as'], correct: 3, explication: 'Tu as. Avoir est irrégulier : j\'ai, tu as, il a, nous avons, vous avez, ils ont.' },
  ],

  '6e-svt-1': [
    { id: 1, texte: 'À quel règne appartient le manioc ?', choix: ['Animaux','Champignons','Bactéries','Plantes'], correct: 3, explication: 'Le manioc est une plante (végétal). Il pratique la photosynthèse.' },
    { id: 2, texte: 'Quelle maladie est causée par un protiste ?', choix: ['La tuberculose (bactérie)','Le paludisme (Plasmodium)','La grippe (virus)','Le tétanos (bactérie)'], correct: 1, explication: 'Le paludisme est causé par Plasmodium, un protiste unicellulaire transmis par le moustique Anopheles.' },
    { id: 3, texte: 'Les bactéries sont des organismes...', choix: ['pluricellulaires avec noyau','unicellulaires sans noyau','pluricellulaires sans noyau','unicellulaires avec noyau'], correct: 1, explication: 'Les bactéries sont des procaryotes : unicellulaires SANS noyau délimité par une membrane.' },
    { id: 4, texte: 'L\'être humain appartient au règne des...', choix: ['Plantes','Champignons','Animaux','Bactéries'], correct: 2, explication: 'L\'humain est un animal vertébré mammifère. Espèce : Homo sapiens.' },
    { id: 5, texte: 'Qu\'est-ce qu\'une espèce ?', choix: ['Un groupe d\'individus qui se ressemblent','Des individus pouvant se reproduire et avoir des descendants fertiles','Tous les êtres vivants d\'un même pays','Un groupe de familles'], correct: 1, explication: 'La définition biologique d\'une espèce : individus qui peuvent se reproduire entre eux et avoir une descendance fertile.' },
  ],

  '5e-maths-1': [
    { id: 1, texte: '1/3 + 1/3 = ?', choix: ['2/6','1/6','2/3','1/9'], correct: 2, explication: 'Même dénominateur → on additionne les numérateurs : 1/3 + 1/3 = 2/3.' },
    { id: 2, texte: '1/4 + 1/3 = ? (PPCM de 4 et 3 = 12)', choix: ['2/7','7/12','2/12','5/12'], correct: 1, explication: '1/4 = 3/12 et 1/3 = 4/12. Donc 3/12 + 4/12 = 7/12.' },
    { id: 3, texte: '2/5 × 3/4 = ?', choix: ['5/9','6/20 = 3/10','6/9','5/20'], correct: 1, explication: '(2×3)/(5×4) = 6/20 = 3/10 (après simplification par 2).' },
    { id: 4, texte: 'Afi a mangé 2/3 d\'une pizza. Sa sœur a mangé 1/6. Quelle fraction ont-elles mangée au total ?', choix: ['3/9','3/6','5/6','4/6'], correct: 2, explication: '2/3 = 4/6. 4/6 + 1/6 = 5/6 de la pizza.' },
    { id: 5, texte: 'Pour additionner des fractions de dénominateurs différents, on doit d\'abord :', choix: ['multiplier les numérateurs','trouver le dénominateur commun','additionner les dénominateurs','diviser les fractions'], correct: 1, explication: 'Il faut réduire les fractions au même dénominateur (PPCM) avant d\'additionner.' },
  ],

  '5e-maths-2': [
    { id: 1, texte: 'Un triangle a deux angles de 60° et 80°. Le troisième mesure :', choix: ['140°','40°','60°','120°'], correct: 1, explication: '180 − 60 − 80 = 40°. La somme des angles d\'un triangle = 180°.' },
    { id: 2, texte: 'Un angle de 120° est :', choix: ['Aigu','Droit','Obtus','Nul'], correct: 2, explication: 'Un angle obtus est compris entre 90° et 180°. 120° est obtus.' },
    { id: 3, texte: 'Un triangle équilatéral a trois angles de :', choix: ['90° chacun','45° chacun','60° chacun','120° chacun'], correct: 2, explication: '3 angles égaux, somme = 180°. Chaque angle = 180÷3 = 60°.' },
    { id: 4, texte: 'Combien un triangle a-t-il de côtés ?', choix: ['4','2','3','5'], correct: 2, explication: 'Un triangle a 3 côtés et 3 angles.' },
    { id: 5, texte: 'Un triangle isocèle possède :', choix: ['3 côtés égaux','Aucun côté égal','2 côtés égaux','1 angle droit obligatoirement'], correct: 2, explication: 'Isocèle = 2 côtés égaux (et donc 2 angles égaux). Équilatéral = 3 côtés égaux.' },
  ],

  '5e-svt-1': [
    { id: 1, texte: 'La formule de la respiration cellulaire est :', choix: ['CO₂ + H₂O → glucose + O₂','Glucose + O₂ → CO₂ + H₂O + Énergie','O₂ → CO₂ + H₂O','Glucose → CO₂'], correct: 1, explication: 'Respiration : glucose + O₂ → CO₂ + H₂O + ATP (énergie). C\'est l\'inverse de la photosynthèse.' },
    { id: 2, texte: 'Par quoi les humains respirent-ils ?', choix: ['Les branchies','Les trachées','Les stomates','Les poumons'], correct: 3, explication: 'Les humains (et mammifères) respirent grâce aux poumons.' },
    { id: 3, texte: 'Quel organe joue un rôle dans la respiration chez les poissons ?', choix: ['Les poumons','Les trachées','Les branchies','La peau'], correct: 2, explication: 'Les poissons respirent grâce aux branchies, qui extraient l\'O₂ dissous dans l\'eau.' },
    { id: 4, texte: 'La respiration produit de l\'énergie sous forme de :', choix: ['ADP','Glucose','ATP','ARN'], correct: 2, explication: 'L\'ATP (Adénosine TriPhosphate) est la « monnaie énergétique » des cellules.' },
    { id: 5, texte: 'La respiration et la photosynthèse sont-elles des processus inverses ?', choix: ['Non, elles consomment toutes deux O₂','Oui, les réactifs de l\'une sont les produits de l\'autre','Non, elles se déroulent dans les mêmes cellules','Oui, mais seulement chez les plantes'], correct: 1, explication: 'Photosynthèse : CO₂ + H₂O → glucose + O₂. Respiration : glucose + O₂ → CO₂ + H₂O. Oui, elles sont inverses.' },
  ],

  '5e-hist-1': [
    { id: 1, texte: 'Combien d\'Africains ont été déportés lors de la traite atlantique ?', choix: ['~1 million','~5 millions','~12 millions','~50 millions'], correct: 2, explication: 'Environ 12 millions d\'Africains ont été déportés lors de la traite atlantique entre 1500 et 1850.' },
    { id: 2, texte: 'Le commerce triangulaire reliait :', choix: ['Afrique-Asie-Europe','Europe-Afrique-Amériques','Afrique-Amériques-Asie','Europe-Asie-Amériques'], correct: 1, explication: 'Triangle : Europe (manufactures) → Afrique (esclaves) → Amériques (matières premières) → Europe.' },
    { id: 3, texte: 'Quelle ville togolaise était un port de traite négrière ?', choix: ['Kara','Atakpamé','Sokodé','Aného (Petit-Popo)'], correct: 3, explication: 'Aného (ancienne Petit-Popo) était un port de traite sur la côte togolaise.' },
    { id: 4, texte: 'Quand la France a-t-elle définitivement aboli l\'esclavage dans ses colonies ?', choix: ['1789','1815','1848','1865'], correct: 2, explication: 'L\'abolition définitive de l\'esclavage en France et ses colonies date du 27 avril 1848, sous Victor Schoelcher.' },
    { id: 5, texte: 'Que rapportaient les navires négriers d\'Afrique vers les Amériques ?', choix: ['Du coton et du sucre','Des épices','Des esclaves','Des armes'], correct: 2, explication: 'Le 2ème côté du triangle : les navires transportaient des esclaves africains vers les Amériques (la « traite »).' },
  ],

  '4e-hist-1': [
    { id: 1, texte: 'En quelle année a eu lieu la Conférence de Berlin ?', choix: ['1870','1884','1900','1914'], correct: 1, explication: 'La Conférence de Berlin s\'est tenue de 1884 à 1885 pour organiser le partage de l\'Afrique entre puissances européennes.' },
    { id: 2, texte: 'Quel explorateur allemand a signé le traité faisant du Togo un protectorat allemand ?', choix: ['Bismarck','Nachtigal','Livingstone','Stanley'], correct: 1, explication: 'Gustav Nachtigal a signé le traité avec le chef Mlapa III à Togoville en 1884.' },
    { id: 3, texte: 'Quelle infrastructure ont construite les Allemands au Togo ?', choix: ['Le port de Kpémé','Le chemin de fer Lomé-Atakpamé','Le barrage de Nangbéto','L\'aéroport de Lomé'], correct: 1, explication: 'Les Allemands ont construit le chemin de fer Lomé-Atakpamé pour exploiter les ressources.' },
    { id: 4, texte: 'Après la Première Guerre mondiale, le Togo a été partagé entre :', choix: ['France et Belgique','France et Portugal','Angleterre et Belgique','France et Grande-Bretagne'], correct: 3, explication: 'Le Togo allemand a été divisé entre la France (partie orientale) et la Grande-Bretagne (partie occidentale).' },
    { id: 5, texte: 'La colonisation du Togo a commencé officiellement en :', choix: ['1870','1884','1914','1960'], correct: 1, explication: '1884 : traité de Togoville entre Nachtigal et Mlapa III. Le Togo devient un protectorat allemand.' },
  ],

  '4e-phys-1': [
    { id: 1, texte: 'Quel composant fournit l\'énergie électrique dans un circuit ?', choix: ['La lampe','L\'interrupteur','Le générateur (pile)','Le fil conducteur'], correct: 2, explication: 'Le générateur (pile, batterie, panneau solaire) est la source d\'énergie électrique du circuit.' },
    { id: 2, texte: 'Un circuit ouvert signifie que :', choix: ['La lampe est allumée','Le courant circule librement','Le courant ne peut pas circuler','La pile est pleine'], correct: 2, explication: 'Circuit ouvert = le courant ne circule pas (l\'interrupteur est ouvert ou un fil est coupé).' },
    { id: 3, texte: 'Dans un montage en série, si une lampe grille :', choix: ['Les autres restent allumées','Toutes les lampes s\'éteignent','Rien ne se passe','La pile se recharge'], correct: 1, explication: 'En série, le courant passe par chaque composant l\'un après l\'autre. Si un coupe, tout coupe.' },
    { id: 4, texte: 'Les prises électriques de ta maison sont branchées en :', choix: ['Série','Parallèle','Les deux à la fois','Ni l\'un ni l\'autre'], correct: 1, explication: 'Les installations domestiques sont en parallèle : chaque appareil est indépendant des autres.' },
    { id: 5, texte: 'Quel composant permet d\'ouvrir ou fermer un circuit ?', choix: ['La résistance','L\'ampoule','L\'interrupteur','Le générateur'], correct: 2, explication: 'L\'interrupteur contrôle la circulation du courant : fermé → courant passe, ouvert → courant bloqué.' },
  ],

  '4e-phys-2': [
    { id: 1, texte: 'La lumière se propage en :', choix: ['Zigzag','Ligne droite dans un milieu homogène','Cercles','N\'importe quelle direction aléatoire'], correct: 1, explication: 'Dans un milieu homogène et transparent, la lumière se propage en ligne droite (propagation rectiligne).' },
    { id: 2, texte: 'Le Soleil est une source de lumière :', choix: ['Secondaire','Réfléchie','Artificielle','Primaire'], correct: 3, explication: 'Le Soleil est une source primaire : il produit sa propre lumière. La Lune est une source secondaire (lumière réfléchie).' },
    { id: 3, texte: 'Lors de la réflexion sur un miroir :', choix: ['L\'angle d\'incidence > angle de réflexion','Angle d\'incidence = angle de réflexion','L\'angle d\'incidence < angle de réflexion','Il n\'y a pas d\'angle'], correct: 1, explication: 'Loi de Descartes : angle d\'incidence = angle de réflexion (mesurés par rapport à la normale).' },
    { id: 4, texte: 'Pourquoi une paille dans un verre d\'eau semble brisée ?', choix: ['L\'eau est opaque','La paille se courbe réellement','La lumière change de direction en changeant de milieu (réfraction)','Le verre grossit les objets'], correct: 2, explication: 'C\'est la réfraction : la lumière change de direction en passant de l\'eau à l\'air, créant une illusion.' },
    { id: 5, texte: 'L\'arc-en-ciel est dû à :', choix: ['La réflexion de la lumière sur les nuages','La dispersion de la lumière blanche par les gouttes d\'eau','La lumière de la Lune','L\'effet de la chaleur'], correct: 1, explication: 'L\'arc-en-ciel résulte de la réfraction et dispersion de la lumière blanche dans les gouttelettes d\'eau.' },
  ],

  '4e-angl-1': [
    { id: 1, texte: 'How do you say "Bonjour" in the morning in English?', choix: ['Good evening','Good afternoon','Hello night','Good morning'], correct: 3, explication: '"Good morning" est utilisé le matin. "Good afternoon" l\'après-midi. "Good evening" le soir.' },
    { id: 2, texte: 'Complete: "She ___ in Lomé." (live)', choix: ['live','lived','lives','living'], correct: 2, explication: 'He/She/It → verbe + s au présent simple. She LIVES in Lomé.' },
    { id: 3, texte: 'Make it negative: "I play football."', choix: ['I not play football.','I don\'t play football.','I doesn\'t play football.','I plays not football.'], correct: 1, explication: 'Avec I/You/We/They : don\'t + verbe base. "I don\'t play football."' },
    { id: 4, texte: 'Ask a question: "Koffi speaks English."', choix: ['Do Koffi speaks English?','Does Koffi speak English?','Does Koffi speaks English?','Did Koffi speak English?'], correct: 1, explication: 'He/She/It → Does + sujet + verbe BASE (sans s). "Does Koffi speak English?"' },
    { id: 5, texte: '"Nice to meet you" means :', choix: ['Je suis fatigué','Comment t\'appelles-tu ?','Enchanté(e) de te rencontrer','Où vas-tu ?'], correct: 2, explication: '"Nice to meet you" = "Enchanté(e)" ou "Ravi(e) de te rencontrer". Réponse : "Nice to meet you too!"' },
  ],

  '3e-svt-1': [
    { id: 1, texte: 'Quel organe effectue principalement l\'absorption des nutriments ?', choix: ['L\'estomac','Le gros intestin','L\'intestin grêle','Le foie'], correct: 2, explication: 'L\'intestin grêle est le principal siège de la digestion et de l\'absorption des nutriments dans le sang.' },
    { id: 2, texte: 'Quel organe annexe produit la bile ?', choix: ['Le pancréas','L\'estomac','Le foie','L\'intestin grêle'], correct: 2, explication: 'Le foie produit la bile, qui est stockée dans la vésicule biliaire et déversée dans l\'intestin grêle pour digérer les graisses.' },
    { id: 3, texte: 'Les protides sont dégradés en :', choix: ['Glucose','Glycérol','Acides gras','Acides aminés'], correct: 3, explication: 'Protides (protéines) → acides aminés. Glucides → glucose. Lipides → acides gras + glycérol.' },
    { id: 4, texte: 'Le suc gastrique contenu dans l\'estomac est :', choix: ['Basique','Neutre','Acide','Sucré'], correct: 2, explication: 'L\'estomac contient de l\'acide chlorhydrique (pH ~2). Ce milieu acide permet la digestion des protéines.' },
    { id: 5, texte: 'Dans quelle partie du tube digestif se forment les selles ?', choix: ['L\'intestin grêle','L\'estomac','Le gros intestin','L\'œsophage'], correct: 2, explication: 'Le gros intestin absorbe l\'eau et forme les selles (matières fécales) qui seront éliminées par l\'anus.' },
  ],

  '3e-phys-1': [
    { id: 1, texte: 'Un sac de 50 kg. Quel est son poids (g = 10 N/kg) ?', choix: ['50 N','500 N','5 N','5 000 N'], correct: 1, explication: 'P = m × g = 50 × 10 = 500 N.' },
    { id: 2, texte: 'L\'unité de la force est :', choix: ['Le kilogramme (kg)','Le Newton (N)','Le Joule (J)','Le watt (W)'], correct: 1, explication: 'La force se mesure en Newtons (N), du nom d\'Isaac Newton.' },
    { id: 3, texte: 'Un livre posé sur une table est en équilibre. Cela signifie que :', choix: ['Aucune force n\'agit sur lui','La somme des forces est nulle','Son poids est nul','Il va se mettre en mouvement'], correct: 1, explication: 'Équilibre : la somme vectorielle des forces est nulle. Le poids est compensé par la réaction de la table.' },
    { id: 4, texte: 'La masse et le poids sont :', choix: ['La même chose','Toujours égaux','Différents (masse en kg, poids en N)','Tous deux mesurés en kg'], correct: 2, explication: 'Masse = quantité de matière (kg, invariable). Poids = force gravitationnelle (N, varie selon g).' },
    { id: 5, texte: 'Une force a plusieurs caractéristiques. Laquelle N\'en est PAS une ?', choix: ['Son point d\'application','Sa direction','Sa couleur','Son intensité'], correct: 2, explication: 'Les 4 caractéristiques d\'une force : point d\'application, direction, sens, intensité. La couleur n\'en est pas une.' },
  ],

  '3e-angl-1': [
    { id: 1, texte: 'Which is the Past Simple of "go"?', choix: ['goed','goes','gone','went'], correct: 3, explication: '"Go" est irrégulier. Past Simple = "went". Ex: We went to school yesterday.' },
    { id: 2, texte: 'Make it negative: "She walked to school."', choix: ['She not walked to school.','She didn\'t walked to school.','She didn\'t walk to school.','She don\'t walk to school.'], correct: 2, explication: 'Past Simple négatif : didn\'t + verbe BASE (sans -ed). "She didn\'t walk to school."' },
    { id: 3, texte: '"Yesterday, Koffi ___ his homework." (do)', choix: ['does','do','did','done'], correct: 2, explication: '"Yesterday" indique le passé. Past Simple de "do" = "did". Koffi did his homework.' },
    { id: 4, texte: 'Ask a question: "They visited Lomé."', choix: ['Did they visited Lomé?','Do they visit Lomé?','Did they visit Lomé?','Does they visit Lomé?'], correct: 2, explication: 'Question au Past Simple : Did + sujet + verbe BASE. "Did they visit Lomé?"' },
    { id: 5, texte: 'Which word signals the Past Simple?', choix: ['tomorrow','every day','next week','last year'], correct: 3, explication: '"Last year" est un marqueur du passé. "Tomorrow/next week" → futur. "Every day" → présent habituel.' },
  ],

  'tle-philo-1': [
    { id: 1, texte: 'Que signifie le mot « philosophie » en grec ?', choix: ['Connaissance de la nature','Amour de la sagesse','Science des idées','Art du discours'], correct: 1, explication: 'Philosophie vient du grec : philein (aimer) + sophia (sagesse). Littéralement : amour de la sagesse.' },
    { id: 2, texte: 'Quelle est la célèbre formule de Descartes ?', choix: ['Je crois donc je suis','L\'homme est un roseau pensant','Je pense donc je suis','Connais-toi toi-même'], correct: 2, explication: '"Cogito ergo sum" (Je pense, donc je suis) est le fondement de la philosophie cartésienne. Descartes cherche une vérité indubitable.' },
    { id: 3, texte: 'L\'Ubuntu est une philosophie :', choix: ['Européenne','Chinoise','Africaine (bantoue)','Indienne'], correct: 2, explication: 'L\'Ubuntu est une philosophie d\'Afrique subsaharienne : "Je suis parce que nous sommes." La communauté prime.' },
    { id: 4, texte: 'Socrate disait : "Je sais que je ne sais rien." Quelle attitude cela exprime-t-il ?', choix: ['L\'ignorance totale','L\'humilité intellectuelle et l\'ouverture au questionnement','La certitude scientifique','Le refus de la philosophie'], correct: 1, explication: 'Cette formule exprime l\'humilité intellectuelle : savoir qu\'on ne sait pas, c\'est le point de départ du vrai questionnement philosophique.' },
    { id: 5, texte: 'L\'éthique est la branche de la philosophie qui étudie :', choix: ['La nature de la réalité','La théorie de la connaissance','Le bien, le mal et la morale','La beauté et l\'art'], correct: 2, explication: 'L\'éthique (ou philosophie morale) pose la question : "Comment doit-on agir ? Qu\'est-ce qui est bien ou mal ?"' },
  ],

  'tle-maths-2': [
    { id: 1, texte: 'Suite : 2, 5, 8, 11, 14… Quelle est la raison ?', choix: ['2','4','3','5'], correct: 2, explication: '5-2=3, 8-5=3. La raison est 3. C\'est une suite arithmétique de raison 3.' },
    { id: 2, texte: 'Suite arithmétique : u₀=10, r=−3. Quel est u₄ ?', choix: ['22','-2','10','−2'], correct: 3, explication: 'u₄ = u₀ + 4×r = 10 + 4×(−3) = 10 − 12 = −2.' },
    { id: 3, texte: 'Suite géométrique : u₀=1, q=2. Quel est u₅ ?', choix: ['10','32','16','64'], correct: 1, explication: 'u₅ = u₀ × q⁵ = 1 × 2⁵ = 32.' },
    { id: 4, texte: 'Un capital de 50 000 FCFA est placé à 4% par an (intérêts composés). Après 2 ans :', choix: ['54 000 FCFA','54 080 FCFA','58 000 FCFA','50 080 FCFA'], correct: 1, explication: 'u₂ = 50 000 × (1,04)² = 50 000 × 1,0816 = 54 080 FCFA. Suite géométrique de raison 1,04.' },
    { id: 5, texte: 'Une suite 3, 6, 12, 24… est :', choix: ['Arithmétique de raison 3','Géométrique de raison 2','Arithmétique de raison 6','Géométrique de raison 3'], correct: 1, explication: '6/3=2, 12/6=2, 24/12=2. Raison constante multiplicative = 2. C\'est une suite géométrique de raison 2.' },
  ],

  'tle-phys-1': [
    { id: 1, texte: 'Un objet se déplace à vitesse constante sans force extérieure. C\'est la :', choix: ['2ème loi de Newton','3ème loi de Newton','1ère loi de Newton (inertie)','Loi de gravitation'], correct: 2, explication: '1ère loi (principe d\'inertie) : sans force extérieure, un objet reste dans son état (repos ou MRU).' },
    { id: 2, texte: 'F = m × a. Si m = 2 kg et a = 5 m/s², F = ?', choix: ['0,4 N','10 N','7 N','3 N'], correct: 1, explication: 'F = 2 × 5 = 10 N. Deuxième loi de Newton.' },
    { id: 3, texte: 'Tu pousses un mur. Il ne bouge pas mais il te repousse. C\'est :', choix: ['La 1ère loi de Newton','La 2ème loi de Newton','La 3ème loi (action-réaction)','La loi de Hooke'], correct: 2, explication: '3ème loi d\'action-réaction : si A exerce une force sur B, B exerce une force égale et opposée sur A.' },
    { id: 4, texte: 'L\'unité du Newton (N) équivaut à :', choix: ['kg/m','kg·m/s²','kg·m/s','kg²/m'], correct: 1, explication: 'Depuis F = ma, [N] = [kg] × [m/s²] = kg·m/s².' },
    { id: 5, texte: 'Une fusée est propulsée vers le haut par des gaz rejetés vers le bas. Quelle loi explique cela ?', choix: ['1ère loi (inertie)','2ème loi (F=ma)','3ème loi (action-réaction)','La gravitation universelle'], correct: 2, explication: 'Action : gaz éjectés vers le bas. Réaction (3ème loi) : fusée propulsée vers le haut. Forces égales et opposées.' },
  ],

  'tle-maths-3': [
    { id: 1, texte: 'On lance un dé à 6 faces. P(obtenir 6) = ?', choix: ['1/3','1/2','1/6','6'], correct: 2, explication: '1 seul résultat favorable (6) sur 6 possibles. P(6) = 1/6.' },
    { id: 2, texte: 'P(Ā) si P(A) = 0,3 ?', choix: ['0,3','3','0,7','1,3'], correct: 2, explication: 'P(Ā) = 1 − P(A) = 1 − 0,3 = 0,7. La probabilité de l\'événement contraire.' },
    { id: 3, texte: 'On tire deux cartes d\'un jeu de 52. Les tirages sont indépendants (remise). P(2 as) = ?', choix: ['2/52','4/52 × 4/52 = 1/169','1/52','8/52'], correct: 1, explication: 'Avec remise (indépendance) : P(As)×P(As) = (4/52)² = 1/169.' },
    { id: 4, texte: 'P(A∪B) = P(A) + P(B) − P(A∩B). Si A et B sont incompatibles (P(A∩B)=0) :', choix: ['P(A∪B) = P(A) × P(B)','P(A∪B) = P(A) + P(B)','P(A∪B) = 0','P(A∪B) = 1'], correct: 1, explication: 'Si A et B sont incompatibles (mutuellement exclusifs) : P(A∩B)=0, donc P(A∪B) = P(A) + P(B).' },
    { id: 5, texte: 'La probabilité d\'un événement certain est :', choix: ['0','-1','0,5','1'], correct: 3, explication: 'P(Ω) = 1. Un événement certain a probabilité 1. Un événement impossible a probabilité 0.' },
  ],

  'tle-svt-3': [
    { id: 1, texte: 'Les macrophages appartiennent à quelle ligne de défense ?', choix: ['Immunité adaptative','Immunité innée','Aucune des deux','Les deux à la fois'], correct: 1, explication: 'Les macrophages font partie de l\'immunité innée (non spécifique). Ils phagocytent rapidement les agents pathogènes.' },
    { id: 2, texte: 'Quelle cellule produit les anticorps ?', choix: ['Les lymphocytes T cytotoxiques','Les macrophages','Les lymphocytes B','Les cellules dendritiques'], correct: 2, explication: 'Les lymphocytes B (activés → plasmocytes) produisent des anticorps spécifiques à l\'antigène.' },
    { id: 3, texte: 'La vaccination exploite quel mécanisme immunitaire ?', choix: ['La phagocytose','La mémoire immunitaire','L\'inflammation','La fièvre'], correct: 1, explication: 'Le vaccin entraîne la formation de cellules mémoire. Lors d\'une vraie infection, la réponse est rapide et efficace.' },
    { id: 4, texte: 'Quelle est la différence entre immunité innée et adaptative ?', choix: ['L\'innée est plus lente','L\'adaptative est non spécifique','L\'innée est rapide et non spécifique ; l\'adaptative est lente et spécifique','Elles sont identiques'], correct: 2, explication: 'Innée : rapide, non spécifique. Adaptative : lente (quelques jours), spécifique à l\'antigène, avec mémoire.' },
    { id: 5, texte: 'Le paludisme est causé par Plasmodium. Pour s\'en défendre, le système immunitaire doit :', choix: ['Produire des anticorps anti-Plasmodium','Augmenter la température corporelle uniquement','Ne rien faire','Produire plus de globules rouges'], correct: 0, explication: 'Le système immunitaire adaptatif produit des anticorps spécifiques contre les antigènes du Plasmodium.' },
  ],

  'tle-maths-1': [
    { id: 1, texte: 'Quelle est la dérivée de f(x) = x⁴ ?', choix: ['4x³','x³','4x⁵','4'], correct: 0, explication: 'Règle : (xⁿ)\' = n·xⁿ⁻¹. Donc (x⁴)\' = 4x³.' },
    { id: 2, texte: 'Quelle est la dérivée de f(x) = 7 (constante) ?', choix: ['7','1','0','7x'], correct: 2, explication: 'La dérivée d\'une constante est toujours 0.' },
    { id: 3, texte: 'Si f\'(x) > 0 sur un intervalle, alors f est...', choix: ['Décroissante','Constante','Nulle','Croissante'], correct: 3, explication: 'Une dérivée positive indique que la fonction monte (est croissante) sur cet intervalle.' },
    { id: 4, texte: 'Quelle est la dérivée de f(x) = eˣ ?', choix: ['xe^(x-1)','1/eˣ','eˣ','x·eˣ'], correct: 2, explication: 'La fonction exponentielle eˣ est sa propre dérivée : (eˣ)\' = eˣ.' },
    { id: 5, texte: 'f(x) = 3x² − 6. En quel point f\'(x) = 0 ?', choix: ['x = 3','x = 2','x = 1','x = 0'], correct: 3, explication: 'f\'(x) = 6x. f\'(x) = 0 → 6x = 0 → x = 0.' },
  ],
}
