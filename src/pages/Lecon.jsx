import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { saveLeconProgress, getLeconProgress, updateStreak } from '../utils/storage'
import { LECONS, MATIERES, QUESTIONS } from '../data/content'

function Block({ b }) {
  switch (b.type) {
    case 'intro':
      return (
        <div className="block block-intro">
          {b.texte}
        </div>
      )
    case 'titre':
      return <h3 className="block block-titre">{b.texte}</h3>
    case 'texte':
      return (
        <p className="block block-texte" style={{ whiteSpace: 'pre-line' }}>
          {b.texte}
        </p>
      )
    case 'definition':
      return (
        <div className="block block-definition">
          <strong>{b.titre}</strong>
          <p>{b.texte}</p>
        </div>
      )
    case 'exemple':
      return (
        <div className="block block-exemple">
          <span className="tag">Exemple</span>
          <p style={{ whiteSpace: 'pre-line' }}>{b.texte}</p>
        </div>
      )
    case 'retenir':
      return (
        <div className="block block-retenir">
          <div className="retenir-label">📌 À retenir</div>
          <p>{b.texte}</p>
        </div>
      )
    case 'formule':
      return <div className="block block-formule">{b.texte}</div>
    case 'liste':
      return (
        <ul className="block block-liste">
          {b.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )
    case 'image':
      return <div className="block block-image">{b.emoji}</div>
    default:
      return null
  }
}

export default function Lecon() {
  const { leconId } = useParams()
  const navigate    = useNavigate()
  const startTime   = useRef(Date.now())

  const lecon   = LECONS.find(l => l.id === leconId)
  const matiere = MATIERES.find(m => m.id === lecon?.matiereId)
  const hasQuiz = !!(QUESTIONS[leconId]?.length)

  const [read, setRead] = useState(false)

  useEffect(() => {
    if (!lecon) { navigate('/dashboard'); return }
    saveLeconProgress(leconId, { statut: 'en_cours' })
    updateStreak()
    return () => {
      const secs = Math.round((Date.now() - startTime.current) / 1000)
      saveLeconProgress(leconId, { tempsPasse: secs })
    }
  }, [leconId])

  useEffect(() => {
    const onScroll = () => {
      const el  = document.documentElement
      const pct = (el.scrollTop + el.clientHeight) / el.scrollHeight
      if (pct > 0.85) setRead(true)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const markDone = () => {
    saveLeconProgress(leconId, { statut: 'termine' })
    if (hasQuiz) {
      navigate(`/quiz/${leconId}`)
    } else {
      navigate(-1)
    }
  }

  if (!lecon) return null

  const prog       = getLeconProgress(leconId)
  const alreadyDone = prog.statut === 'termine'
  const totalBlocks = lecon.contenu.length
  const readFrac    = read ? 1 : .3

  return (
    <div className="lecon-reader">
      {/* ── Top ── */}
      <div className="lecon-top">
        <button className="lecon-top-back" onClick={() => navigate(-1)}>
          ← Retour
        </button>
        <div className="lecon-matiere-chip">
          {matiere?.emoji} {matiere?.nom}
        </div>
        <h1>{lecon.titre}</h1>
        <div className="lecon-top-meta">
          <span>⏱ {lecon.dureeMin} min</span>
          {alreadyDone && <span>✅ Leçon terminée</span>}
        </div>
        <div className="lecon-progress-bar">
          <div className="lecon-progress-fill" style={{ width: `${readFrac * 100}%` }} />
        </div>
      </div>

      {/* ── Corps ── */}
      <div className="lecon-body">
        {lecon.contenu.map((b, i) => <Block key={i} b={b} />)}

        {/* Espace pour le footer */}
        <div style={{ height: 20 }} />
      </div>

      {/* ── Footer fixe ── */}
      <div className="lecon-footer">
        <button className="btn btn-secondary" style={{ flex: 1 }} onClick={() => navigate(-1)}>
          ← Retour
        </button>
        <button
          className="btn btn-primary"
          style={{ flex: 2 }}
          onClick={markDone}
        >
          {alreadyDone
            ? (hasQuiz ? '🔄 Refaire le quiz' : '✅ Terminé')
            : (hasQuiz ? '📝 Faire le quiz →' : '✅ Marquer terminé')
          }
        </button>
      </div>
    </div>
  )
}
