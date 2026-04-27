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
