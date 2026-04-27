import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { saveLeconProgress, checkAndAwardBadges, getBadges } from '../utils/storage'
import { LECONS, MATIERES, QUESTIONS, BADGES } from '../data/content'

const LETTERS = ['A', 'B', 'C', 'D']

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Quiz() {
  const { leconId } = useParams()
  const navigate    = useNavigate()

  const lecon   = LECONS.find(l => l.id === leconId)
  const matiere = MATIERES.find(m => m.id === lecon?.matiereId)
  const rawQs   = QUESTIONS[leconId] ?? []

  const [questions]  = useState(() => shuffle(rawQs).slice(0, 5))
  const [current, setCurrent]   = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore]       = useState(0)
  const [finished, setFinished] = useState(false)
  const [newBadges, setNewBadges] = useState([])
  const [showBadge, setShowBadge] = useState(null)

  if (!lecon || !questions.length) {
    navigate(-1)
    return null
  }

  const q   = questions[current]
  const pct = Math.round(((current + (answered ? 1 : 0)) / questions.length) * 100)

  const choose = (idx) => {
    if (answered) return
    setSelected(idx)
    setAnswered(true)
    if (idx === q.correct) setScore(s => s + 1)
  }

  const nextQ = () => {
    if (current + 1 < questions.length) {
      setCurrent(c => c + 1)
      setSelected(null)
      setAnswered(false)
    } else {
      endQuiz()
    }
  }

  const endQuiz = () => {
    const finalScore = Math.round(((score + (selected === q.correct ? 1 : 0)) / questions.length) * 100)
    saveLeconProgress(leconId, { statut: 'termine', quizScore: finalScore })
    const awarded = checkAndAwardBadges()
    if (awarded.length) {
      setNewBadges(awarded)
      const badge = BADGES.find(b => b.id === awarded[0])
      setShowBadge(badge)
      setTimeout(() => setShowBadge(null), 3200)
    }
    setFinished(true)
  }

  const finalScore = finished
    ? Math.round((score / questions.length) * 100)
    : 0

  const getEmoji = (s) => s >= 80 ? '🏆' : s >= 60 ? '👍' : s >= 40 ? '💪' : '📖'
  const getTitle = (s) => s >= 80 ? 'Excellent !' : s >= 60 ? 'Bien joué !' : s >= 40 ? 'Continue !' : 'Courage !'
  const getSub   = (s) => s >= 80 ? 'Tu maîtrises cette leçon.' : s >= 60 ? 'Tu progresses bien !' : s >= 40 ? 'Relis la leçon et réessaie.' : 'Relis la leçon, tu vas y arriver !'

  /* ── Score screen ── */
  if (finished) {
    return (
      <div className="score-screen fade-in">
        {showBadge && (
          <div className="badge-unlock">
            <span className="badge-unlock-emoji">{showBadge.emoji}</span>
            <div className="badge-unlock-text">
              <div className="bu-title">Badge débloqué !</div>
              <div className="bu-name">{showBadge.nom}</div>
            </div>
          </div>
        )}

        <div className="score-emoji">{getEmoji(finalScore)}</div>
        <div className="score-title">{getTitle(finalScore)}</div>
        <div className="score-sub">{getSub(finalScore)}</div>

        <div className="score-circle">
          <div className="score-num">{finalScore}</div>
          <div className="score-pts">/ 100</div>
        </div>

        <div className="score-detail">
          ✅ Bonnes réponses : {score} / {questions.length}<br />
          ⏱ Leçon : {lecon.titre}
          {newBadges.length > 0 && (
            <>
              <br />🏅 {newBadges.length} badge{newBadges.length > 1 ? 's' : ''} débloqué{newBadges.length > 1 ? 's' : ''} !
            </>
          )}
        </div>

        <div className="score-actions">
          <button className="btn btn-white" onClick={() => navigate('/dashboard')}>
            🏠 Accueil
          </button>
          <button className="btn btn-outline-white" onClick={() => navigate(`/lecon/${leconId}`)}>
            📖 Relire la leçon
          </button>
          <button className="btn btn-outline-white" onClick={() => navigate(-2)}>
            ← Retour aux leçons
          </button>
        </div>
      </div>
    )
  }

  /* ── Quiz ── */
  return (
    <div className="quiz-page fade-in">
      <div className="quiz-header">
        <div className="quiz-header-top">
          <button onClick={() => navigate(-1)}>✕</button>
          <h2>{lecon.titre}</h2>
          <span className="quiz-counter">{current + 1}/{questions.length}</span>
        </div>
        <div className="quiz-progress">
          <div className="quiz-progress-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="quiz-body">
        <div className="question-card">
          <div className="question-num">Question {current + 1}</div>
          <div className="question-text">{q.texte}</div>
        </div>

        <div className="choices">
          {q.choix.map((c, i) => {
            let cls = 'choice-btn'
            if (answered) {
              if (i === q.correct)  cls += ' correct'
              else if (i === selected) cls += ' wrong'
            }
            return (
              <button key={i} className={cls} onClick={() => choose(i)} disabled={answered}>
                <span className="choice-letter">{LETTERS[i]}</span>
                {c}
              </button>
            )
          })}
        </div>

        {answered && (
          <div className="explanation fade-in">
            <strong>{selected === q.correct ? '✅ Bonne réponse !' : '❌ Mauvaise réponse'}</strong>
            {q.explication}
          </div>
        )}

        {answered && (
          <button
            className="btn btn-primary fade-in"
            style={{ marginTop: 16 }}
            onClick={nextQ}
          >
            {current + 1 < questions.length ? 'Question suivante →' : 'Voir mon score 🏆'}
          </button>
        )}
      </div>
    </div>
  )
}
