import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getEleve, getKomiHistory, saveKomiMessage } from '../utils/storage'
import { LECONS, MATIERES } from '../data/content'

/* ── Base de connaissances de Komi ───────────────────────── */
const RULES = [
  {
    keys: ['bonjour','salut','bonsoir','allo','hello','coucou'],
    fn: (e) => [
      `Bonjour ${e.prenom} ! Je suis Komi, ton tuteur virtuel. Pose-moi une question sur tes leçons, je suis là pour t'aider ! 😊`,
      `Salut ${e.prenom} ! Prêt(e) à apprendre ? Quelle matière t'intéresse aujourd'hui ?`,
    ],
  },
  {
    keys: ['merci','super','génial','parfait','excellent'],
    fn: () => [
      'Avec plaisir ! C\'est pour ça que je suis là. Continue comme ça ! 💪',
      'De rien ! Ton succès est ma récompense. Continue à travailler dur ! 🌟',
    ],
  },
  {
    keys: ['pythagore','hypoténuse','triangle rectangle'],
    fn: () => [
      'Le théorème de Pythagore : dans un triangle rectangle en A, BC² = AB² + AC². Le triplet magique à retenir : (3, 4, 5) ! Tu as besoin d\'un exemple ?',
      'Pythagore dit : le carré de l\'hypoténuse = somme des carrés des deux autres côtés. Exemple : 3² + 4² = 25 = 5².',
    ],
  },
  {
    keys: ['équation','inconnue','résoudre','trouver x'],
    fn: () => [
      'Pour résoudre une équation : (1) passe les nombres de l\'autre côté du = en changeant le signe, (2) divise par le coefficient de x. Vérification obligatoire !',
      'Méthode : isole x. Ex : 2x + 4 = 10 → 2x = 6 → x = 3. Vérifie : 2×3+4 = 10 ✓',
    ],
  },
  {
    keys: ['fraction','numérateur','dénominateur','diviser'],
    fn: () => [
      'Une fraction a/b : a est le numérateur (en haut), b est le dénominateur (en bas). Pour additionner des fractions, il faut le même dénominateur !',
      'Ex : 1/4 + 2/4 = 3/4. Si les dénominateurs sont différents, cherche le PPCM.',
    ],
  },
  {
    keys: ['photosynthèse','chlorophylle','co2','plante','feuille'],
    fn: () => [
      'Photosynthèse : CO₂ + H₂O + lumière → glucose + O₂. Les plantes absorbent le CO₂ et rejettent l\'O₂. C\'est pour ça que les forêts sont nos poumons ! 🌿',
      'La formule simplifiée : CO₂ + H₂O → glucose + O₂. Lieu : chloroplastes. Condition : lumière solaire indispensable.',
    ],
  },
  {
    keys: ['cellule','noyau','membrane','mitochondrie'],
    fn: () => [
      'La cellule animale = membrane + cytoplasme + noyau + mitochondries. La cellule végétale ajoute : paroi + chloroplastes + vacuole.',
      'Le noyau = le cerveau de la cellule (contient l\'ADN). Les mitochondries = les usines à énergie.',
    ],
  },
  {
    keys: ['adn','gène','chromosome','génétique'],
    fn: () => [
      'L\'ADN = double hélice de nucléotides. Règle : A-T et G-C. Un gène = séquence d\'ADN codant une protéine. Chaque cellule humaine a 46 chromosomes.',
      'Mnémotechnique : ADN = « Archives Des Noyaux ». Les 4 bases : Adénine, Thymine, Guanine, Cytosine.',
    ],
  },
  {
    keys: ['mitose','division','prophase','métaphase','anaphase'],
    fn: () => [
      'Mitose = PMAT : Prophase (chromosomes visibles), Métaphase (alignement), Anaphase (séparation), Télophase (2 noyaux). Résultat : 2 cellules filles identiques.',
      'La mitose conserve le nombre de chromosomes (2n=46). La méiose le divise par 2 (n=23, pour les gamètes).',
    ],
  },
  {
    keys: ['dérivée','dériver','f prime','taux de variation'],
    fn: () => [
      'Dérivées usuelles : (xⁿ)\' = nxⁿ⁻¹, (eˣ)\' = eˣ, (ln x)\' = 1/x. f\' > 0 → f croissante. f\' < 0 → f décroissante.',
      'La dérivée = pente de la tangente à la courbe. f\' = 0 peut indiquer un maximum ou minimum.',
    ],
  },
  {
    keys: ['statistique','moyenne','médiane','mode'],
    fn: () => [
      'Moyenne = somme ÷ effectif. Médiane = valeur centrale de la série ordonnée. Mode = valeur la plus fréquente.',
      'Ex : série 4,6,6,8,10. Moy = 34÷5 = 6,8. Médiane = 6 (3e valeur). Mode = 6 (apparaît 2 fois).',
    ],
  },
  {
    keys: ['togo','lomé','indépendance','histoire','olympio'],
    fn: () => [
      'Le Togo a accédé à l\'indépendance le 27 avril 1960. Premier président : Sylvanus Olympio. C\'est la fête nationale du Togo 🇹🇬 !',
      'Sylvanus Olympio (1902-1963) = père de l\'indépendance togolaise. Économiste formé à la London School of Economics.',
    ],
  },
  {
    keys: ['voyelle','consonne','syllabe','alphabet','lettre'],
    fn: () => [
      'Les 5 voyelles : A, E, I, O, U. Les consonnes sont toutes les autres lettres. Chaque syllabe contient au moins une voyelle !',
      'Pour compter les syllabes, tape dans tes mains. Ex : To-go = 2 syllabes, Lo-mé = 2 syllabes.',
    ],
  },
  {
    keys: ['chiffre','nombre','compter','addition','additionner'],
    fn: () => [
      'Pour additionner, commence par le plus grand nombre et compte les autres sur tes doigts. Ex : 7+3 → commence à 7, compte 8,9,10. Résultat : 10 !',
      'Les chiffres de 0 à 9 permettent d\'écrire tous les nombres. L\'addition met des quantités ensemble (+). La soustraction en enlève (-).',
    ],
  },
  {
    keys: ['aide','comprends pas','comprendre','difficile','explication','expliquer'],
    fn: (e) => [
      `Je vais t'aider ${e.prenom} ! Dis-moi précisément quelle notion te pose problème, et je t'expliquerai autrement 😊`,
      `Pas de souci ! Reformule ta question en indiquant la matière et le sujet. Je ferai de mon mieux pour t'aider.`,
    ],
  },
  {
    keys: ['bepc','bac','examen','concours','réviser'],
    fn: () => [
      'Pour préparer le BEPC/BAC : 1) Fais toutes les leçons, 2) Refais les quiz, 3) Concentre-toi sur tes points faibles, 4) Dors bien avant l\'examen. Tu peux le faire ! 💪',
      'Conseil de révision : révise par matière, 45 min avec 10 min de pause. La régularité vaut mieux que les nuits blanches !',
    ],
  },
  {
    keys: ['multiplication','table','multiplier','fois'],
    fn: () => [
      'Tables : table de 5 → toujours 0 ou 5. Table de 9 → somme des chiffres = 9 (18→1+8=9). Astuce 7×8=56 : "5-6-7-8". La multiplication est commutative : 3×7 = 7×3 = 21.',
      'Pour mémoriser, répète à voix haute en rythme. 1×1=1, 2×2=4, 3×3=9, 4×4=16, 5×5=25, 6×6=36, 7×7=49, 8×8=64, 9×9=81, 10×10=100. Les carrés parfaits sont importants en maths !',
    ],
  },
  {
    keys: ['force','newton','poids','masse','inertie','accélération'],
    fn: () => [
      '3 lois de Newton : 1) Inertie (sans force → rien ne change), 2) F=m×a (Newton = kg×m/s²), 3) Action-Réaction (forces égales et opposées). Poids P = m × g (g ≈ 10 N/kg sur Terre).',
      'Masse ≠ Poids ! Masse (kg) = quantité de matière, invariable. Poids (N) = force gravitationnelle, varie selon g. Un objet de 10 kg a un poids de 100 N sur Terre mais 16 N sur la Lune (g=1,6).',
    ],
  },
  {
    keys: ['circuit','électrique','courant','pile','lampe','série','parallèle'],
    fn: () => [
      'Circuit électrique = Générateur + Conducteurs + Récepteurs + Interrupteur. En série : si un composant lâche, tout s\'éteint. En parallèle : chaque composant est indépendant. Tes prises sont en parallèle !',
      'Circuit fermé → courant circule → lampe allumée. Circuit ouvert → courant bloqué → lampe éteinte. L\'interrupteur ouvre ou ferme le circuit.',
    ],
  },
  {
    keys: ['lumière','optique','réflexion','réfraction','arc-en-ciel'],
    fn: () => [
      'Lumière = ligne droite dans milieu homogène. Réflexion : angle i = angle r (miroir). Réfraction : changement de direction en changeant de milieu (paille dans l\'eau). Dispersion : lumière blanche → ROYGBIV.',
      'L\'arc-en-ciel est causé par la réfraction de la lumière dans les gouttes de pluie. Rouge à l\'extérieur, violet à l\'intérieur. Mnémotechnique : Richard Of York Gave Battle In Vain.',
    ],
  },
  {
    keys: ['digestion','estomac','intestin','foie','nutriment'],
    fn: () => [
      'Tube digestif : Bouche→Œsophage→Estomac→Intestin grêle→Gros intestin→Anus. L\'intestin grêle absorbe. Protides→Acides aminés. Glucides→Glucose. Lipides→Acides gras + Glycérol.',
      'Le foie produit la bile pour digérer les graisses. La salive contient l\'amylase (amidon→sucres). L\'estomac est acide (HCl). La digestion complète dure 24 à 72 heures.',
    ],
  },
  {
    keys: ['respiration','poumon','oxygène','bronche','alvéole'],
    fn: () => [
      'Respiration cellulaire : Glucose + O₂ → CO₂ + H₂O + Énergie(ATP). Organes : humains→poumons, poissons→branchies, insectes→trachées. 15-20 respirations/min au repos.',
      'Inspiration : diaphragme se contracte, poumons se dilatent, air entre. Expiration : diaphragme se relâche, air sort. L\'O₂ passe dans le sang via les alvéoles pulmonaires.',
    ],
  },
  {
    keys: ['immunité','anticorps','vaccin','virus','lymphocyte'],
    fn: () => [
      'Système immunitaire : Innée (rapide, non spécifique : macrophages, fièvre) + Adaptative (spécifique : lymphocytes B→anticorps, lymphocytes T→destruction). Les vaccins créent une mémoire immunitaire.',
      'Un anticorps reconnaît un antigène spécifique. La vaccination injecte des antigènes inoffensifs → ton corps apprend à se défendre. En cas de vraie infection, la réponse est immédiate grâce aux cellules mémoire.',
    ],
  },
  {
    keys: ['english','anglais','present simple','past simple','verb','hello','greeting'],
    fn: () => [
      'Present Simple : He/She/It + V+s. Don\'t/doesn\'t pour la négation. Do/Does pour les questions. Past Simple réguliers : +ed (played, walked). Irréguliers : go→went, eat→ate, be→was/were, have→had.',
      'Salutations : Hello/Hi (Salut), Good morning (Bonjour matin), Good evening (Bonsoir), How are you? → I\'m fine, thank you. Nice to meet you → Enchanté ! See you → À bientôt !',
    ],
  },
  {
    keys: ['philosophie','socrate','platon','descartes','ubuntu','éthique'],
    fn: () => [
      'Philosophie = amour de la sagesse. 5 branches : Métaphysique, Épistémologie, Éthique, Politique, Esthétique. Descartes : "Je pense, donc je suis." Socrate : "Je sais que je ne sais rien."',
      'Ubuntu (philosophie africaine) : "Je suis parce que nous sommes." La communauté prime. Platon : allégorie de la caverne. Kant : impératif catégorique ("Agis selon une maxime universalisable").',
    ],
  },
  {
    keys: ['suite','arithmétique','géométrique','raison','terme','séquence'],
    fn: () => [
      'Suite arithmétique : uₙ = u₀ + n×r (raison r constante). Suite géométrique : uₙ = u₀×qⁿ (raison q constante). Exemple : 2,5,8,11 → arithmétique, r=3. 1,2,4,8 → géométrique, q=2.',
      'Application : intérêts composés → suite géométrique. Capital × (1+taux)ⁿ. 100 000 FCFA à 5%/an → après 10 ans : 100 000 × 1,05¹⁰ ≈ 162 889 FCFA !',
    ],
  },
  {
    keys: ['probabilité','chance','hasard','aléatoire','dé'],
    fn: () => [
      'Probabilité = Cas favorables ÷ Cas possibles. P(A) ∈ [0,1]. P(Ā) = 1−P(A). Dé à 6 faces : P(6)=1/6, P(pair)=3/6=1/2. Indépendance : P(A∩B)=P(A)×P(B).',
      'Pile ou face : P(pile)=1/2. P(2 fois pile de suite)=1/4. P(événement certain)=1. P(événement impossible)=0. La somme de toutes les probabilités = 1.',
    ],
  },
  {
    keys: ['colonisation','berlin','togoland','nachtigal','partage afrique'],
    fn: () => [
      'Conférence de Berlin (1884-85) : partage de l\'Afrique entre puissances européennes sans consulter les Africains. Togo = protectorat allemand depuis 1884 (traité Nachtigal-Mlapa III à Togoville).',
      'Après 1914 (WWI), le Togo allemand est partagé entre France et Grande-Bretagne. La partie française devient le Togo indépendant en 1960. Sylvanus Olympio = 1er président.',
    ],
  },
  {
    keys: ['traite','esclavage','esclaves','commerce triangulaire'],
    fn: () => [
      'Commerce triangulaire : Europe (manufactures) ↔ Afrique (esclaves) ↔ Amériques (matières premières). ~12 millions d\'Africains déportés. Abolition française : 27 avril 1848 (Victor Schoelcher).',
      'La côte togolaise était la "Côte des esclaves". Aného (Petit-Popo) était un port de traite. La traite a duré du XVe au XIXe siècle. Abolition américaine : 1865 (13e amendement).',
    ],
  },
  {
    keys: ['motivation','découragement','peur','stress','courage','difficile'],
    fn: (e) => [
      `${e.prenom}, chaque expert a commencé comme débutant ! Si tu te sens découragé(e), revois les leçons que tu maîtrises pour reprendre confiance. Chaque leçon terminée te rapproche de ton objectif. 💪`,
      `Le stress avant un exam, c\'est normal — c\'est ton cerveau qui se prépare ! Respire, dors bien, mange équilibré. Travaille régulièrement plutôt qu\'une seule nuit blanche. Tu peux réussir ! 🌟`,
    ],
  },
  {
    keys: ['santé','dormir','manger','sport','eau','hygiène','concentration'],
    fn: () => [
      'Pour bien apprendre : dors 8-9h/nuit (le cerveau consolide les souvenirs pendant le sommeil !), bois 1,5L d\'eau/jour, mange des glucides (énergie) + protéines (concentration) + légumes (vitamines).',
      'Astuce : évite le téléphone après 21h (lumière bleue perturbe le sommeil). Fais 30 min d\'activité physique par jour — ça améliore la mémoire et réduit le stress. Un cerveau bien reposé apprend 2× mieux !',
    ],
  },
]

const FALLBACKS = [
  'Je n\'ai pas bien compris ta question. Peux-tu préciser la matière ou le sujet (ex : « explique-moi Pythagore ») ?',
  'Hmm, reformule ta question en indiquant la matière. Je connais les maths, le français, la SVT, l\'histoire et plus encore !',
  'Je suis là pour t\'aider sur tes cours. Pose-moi une question précise sur une leçon 😊',
]

function komiReply(input, eleve) {
  const lower = input.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  for (const rule of RULES) {
    if (rule.keys.some(k => lower.includes(k.normalize('NFD').replace(/[̀-ͯ]/g, '')))) {
      const responses = rule.fn(eleve)
      return responses[Math.floor(Math.random() * responses.length)]
    }
  }
  return FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)]
}

const SUGGESTIONS = [
  'Explique-moi Pythagore',
  'Comment résoudre une équation ?',
  'C\'est quoi la photosynthèse ?',
  'Les voyelles en français',
  'Comment calculer une moyenne ?',
  'Préparer le BEPC',
]

const now = () => new Date().toLocaleTimeString('fr-TG', { hour: '2-digit', minute: '2-digit' })

export default function Komi() {
  const eleve   = getEleve()
  const messagesRef = useRef(null)
  const inputRef    = useRef(null)

  const [messages, setMessages] = useState(() => {
    const hist = getKomiHistory()
    if (hist.length) return hist
    return [{
      role: 'komi',
      text: `Bonjour ${eleve?.prenom ?? ''} ! Je suis Komi, ton tuteur virtuel 🤖\nPose-moi une question sur tes cours et je t'aiderai du mieux que je peux !`,
      time: now(),
    }]
  })
  const [input, setInput]   = useState('')
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    messagesRef.current?.scrollTo({ top: 9999, behavior: 'smooth' })
  }, [messages, typing])

  const send = () => {
    if (!input.trim()) return
    const userMsg = { role: 'user', text: input.trim(), time: now() }
    const next    = [...messages, userMsg]
    setMessages(next)
    saveKomiMessage(userMsg)
    setInput('')
    setTyping(true)

    const delay = 600 + Math.random() * 800
    setTimeout(() => {
      const reply = { role: 'komi', text: komiReply(input, eleve), time: now() }
      setMessages(m => [...m, reply])
      saveKomiMessage(reply)
      setTyping(false)
    }, delay)
  }

  const suggest = (s) => { setInput(s); inputRef.current?.focus() }

  return (
    <div className="komi-page">
      {/* Header */}
      <div className="komi-header">
        <div className="komi-avatar">🤖</div>
        <div>
          <h2>Komi</h2>
          <p>Tuteur virtuel · toujours disponible</p>
        </div>
        <div className="komi-online" title="En ligne" />
      </div>

      {/* Suggestions */}
      {messages.length <= 1 && (
        <div className="komi-suggestions" style={{ paddingTop: 10, background: 'var(--bg)' }}>
          {SUGGESTIONS.map(s => (
            <button key={s} className="komi-sugg-btn" onClick={() => suggest(s)}>{s}</button>
          ))}
        </div>
      )}

      {/* Messages */}
      <div className="komi-messages" ref={messagesRef}>
        {messages.map((m, i) => (
          <div key={i} className={`msg msg-${m.role}`}>
            <span style={{ whiteSpace: 'pre-line' }}>{m.text}</span>
            <span className="msg-time">{m.time}</span>
          </div>
        ))}
        {typing && (
          <div className="msg msg-komi" style={{ fontStyle: 'italic', opacity: .7 }}>
            Komi écrit… ✍️
          </div>
        )}
      </div>

      {/* Input */}
      <div className="komi-input-bar">
        <textarea
          ref={inputRef}
          className="komi-input"
          placeholder="Pose ta question à Komi…"
          rows={1}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
          }}
        />
        <button className="komi-send" onClick={send} disabled={!input.trim() || typing}>
          ➤
        </button>
      </div>
    </div>
  )
}
