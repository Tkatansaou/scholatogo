import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveEleve } from '../utils/storage'
import { CYCLES, CLASSES } from '../data/content'

export default function Onboarding() {
  const navigate = useNavigate()
  const [step, setStep]       = useState(0)
  const [cycleId, setCycleId] = useState('')
  const [classeId, setClasseId] = useState('')
  const [prenom, setPrenom]   = useState('')
  const [langue, setLangue]   = useState('fr')

  const classesForCycle = CLASSES.filter(c => c.cycleId === cycleId)

  const next = () => setStep(s => s + 1)
  const back = () => setStep(s => s - 1)

  const finish = () => {
    if (!prenom.trim()) return
    saveEleve({
      id:        Date.now().toString(36),
      prenom:    prenom.trim(),
      classeId,
      cycleId,
      langue,
      createdAt: Date.now(),
    })
    navigate('/dashboard', { replace: true })
  }

  const STEPS = [
    /* ── Step 0 : Bienvenue ── */
    <div key={0} className="fade-in">
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <div className="onboarding-logo">🇹🇬</div>
        <div className="onboarding-title">ScholaTogo</div>
        <p className="onboarding-subtitle" style={{ margin: '10px auto 0' }}>
          Apprends à ton rythme,<br />partout au Togo
        </p>
      </div>

      <div className="onboarding-card">
        <h2>Choisir la langue</h2>
        <p>Dans quelle langue veux-tu apprendre ?</p>

        {[
          { id: 'fr',  flag: '🇫🇷', label: 'Français' },
          { id: 'ewe', flag: '🇹🇬', label: 'Éwé (bientôt)' },
          { id: 'kab', flag: '🇹🇬', label: 'Kabyè (bientôt)' },
        ].map(l => (
          <button
            key={l.id}
            className={`lang-btn${langue === l.id ? ' selected' : ''}`}
            onClick={() => setLangue(l.id)}
            disabled={l.id !== 'fr'}
            style={l.id !== 'fr' ? { opacity: .45 } : {}}
          >
            <span className="lang-flag">{l.flag}</span>
            {l.label}
            {langue === l.id && l.id === 'fr' && <span style={{ marginLeft: 'auto' }}>✓</span>}
          </button>
        ))}

        <button className="btn btn-primary" style={{ marginTop: 8 }} onClick={next}>
          Continuer →
        </button>
      </div>
    </div>,

    /* ── Step 1 : Cycle ── */
    <div key={1} className="fade-in">
      <div className="onboarding-card" style={{ marginTop: 0 }}>
        <h2>Ton niveau scolaire</h2>
        <p>Quel cycle es-tu en train de faire ?</p>
        <div className="grid-2">
          {CYCLES.map(c => (
            <button
              key={c.id}
              className={`select-card${cycleId === c.id ? ' selected' : ''}`}
              onClick={() => { setCycleId(c.id); setClasseId('') }}
            >
              <div className="sc-emoji">{c.emoji}</div>
              <div className="sc-label">{c.nom}</div>
              <div className="sc-sub">{c.desc}</div>
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <button className="btn btn-ghost" style={{ flex: 1 }} onClick={back}>← Retour</button>
          <button className="btn btn-primary" style={{ flex: 2 }} onClick={next} disabled={!cycleId}>
            Continuer →
          </button>
        </div>
      </div>
    </div>,

    /* ── Step 2 : Classe ── */
    <div key={2} className="fade-in">
      <div className="onboarding-card" style={{ marginTop: 0 }}>
        <h2>Ta classe</h2>
        <p>Sélectionne ta classe exacte.</p>
        <div className="grid-3">
          {classesForCycle.map(c => (
            <button
              key={c.id}
              className={`select-card${classeId === c.id ? ' selected' : ''}`}
              onClick={() => setClasseId(c.id)}
            >
              <div className="sc-emoji" style={{ fontSize: '1.2rem' }}>{c.court}</div>
              <div className="sc-sub" style={{ marginTop: 4 }}>{c.nom}</div>
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <button className="btn btn-ghost" style={{ flex: 1 }} onClick={back}>← Retour</button>
          <button className="btn btn-primary" style={{ flex: 2 }} onClick={next} disabled={!classeId}>
            Continuer →
          </button>
        </div>
      </div>
    </div>,

    /* ── Step 3 : Prénom ── */
    <div key={3} className="fade-in">
      <div className="onboarding-card" style={{ marginTop: 0 }}>
        <h2>Comment t'appelles-tu ?</h2>
        <p>Ton prénom pour personnaliser l'expérience.</p>
        <input
          className="input-field"
          type="text"
          placeholder="Ton prénom (ex : Koffi, Ama, Yawa…)"
          value={prenom}
          onChange={e => setPrenom(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && prenom.trim() && finish()}
          autoFocus
          maxLength={30}
        />
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <button className="btn btn-ghost" style={{ flex: 1 }} onClick={back}>← Retour</button>
          <button className="btn btn-primary" style={{ flex: 2 }} onClick={finish} disabled={!prenom.trim()}>
            Commencer 🎉
          </button>
        </div>
      </div>
    </div>,
  ]

  return (
    <div className="onboarding">
      <div className="step-dots" style={{ position: 'absolute', top: 20 }}>
        {STEPS.map((_, i) => (
          <div key={i} className={`dot${step === i ? ' active' : ''}`} />
        ))}
      </div>
      <div style={{ width: '100%', maxWidth: 420 }}>
        {STEPS[step]}
      </div>
    </div>
  )
}
