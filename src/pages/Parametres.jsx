import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getEleve, saveEleve, getTheme, saveTheme } from '../utils/storage'
import { CYCLES, CLASSES } from '../data/content'

export default function Parametres() {
  const navigate  = useNavigate()
  const [eleve, setEleve]             = useState(getEleve)
  const [theme, setTheme]             = useState(getTheme)
  const [editingClasse, setEditingClasse] = useState(false)
  const [newCycleId,  setNewCycleId]  = useState(eleve?.cycleId  || '')
  const [newClasseId, setNewClasseId] = useState(eleve?.classeId || '')

  const classesForCycle = CLASSES.filter(c => c.cycleId === newCycleId)
  const cycleLabel  = CYCLES.find(c => c.id === eleve?.cycleId)?.nom   || eleve?.cycleId
  const classeLabel = CLASSES.find(c => c.id === eleve?.classeId)?.nom  || eleve?.classeId

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    saveTheme(next)
    setTheme(next)
  }

  const saveClasse = () => {
    if (!newCycleId || !newClasseId) return
    const updated = { ...eleve, cycleId: newCycleId, classeId: newClasseId }
    saveEleve(updated)
    setEleve(updated)
    setEditingClasse(false)
  }

  const cancelEdit = () => {
    setNewCycleId(eleve?.cycleId  || '')
    setNewClasseId(eleve?.classeId || '')
    setEditingClasse(false)
  }

  return (
    <div className="page fade-in">
      <div className="page-header">
        <h1>⚙️ Paramètres</h1>
        <p>{eleve?.prenom} · {classeLabel}</p>
      </div>

      <div className="page-inner" style={{ paddingTop: 20 }}>

        {/* ── Thème ── */}
        <p className="section-title">Apparence</p>
        <div className="param-card" onClick={toggleTheme} style={{ cursor: 'pointer' }}>
          <div className="param-row">
            <span className="param-icon">{theme === 'dark' ? '🌙' : '☀️'}</span>
            <div className="param-info">
              <div className="param-label">Mode {theme === 'dark' ? 'sombre' : 'clair'}</div>
              <div className="param-sub">Bascule entre le thème clair et sombre</div>
            </div>
            <div className={`theme-toggle ${theme === 'dark' ? 'on' : ''}`}>
              <div className="thumb" />
            </div>
          </div>
        </div>

        {/* ── Profil ── */}
        <p className="section-title" style={{ marginTop: 24 }}>Profil</p>

        {!editingClasse ? (
          <div className="param-card">
            <div className="param-row">
              <span className="param-icon">👤</span>
              <div className="param-info">
                <div className="param-label">{eleve?.prenom}</div>
                <div className="param-sub">{classeLabel} · {cycleLabel}</div>
              </div>
              <button className="btn-change-classe" onClick={() => setEditingClasse(true)}>
                Changer
              </button>
            </div>
          </div>
        ) : (
          <div className="param-card" style={{ padding: '16px' }}>
            <div className="param-label" style={{ marginBottom: 14 }}>📚 Choisir un autre niveau</div>

            <p className="param-sub" style={{ marginBottom: 8, fontWeight: 600 }}>Cycle</p>
            <div className="grid-2" style={{ gap: 8, marginBottom: 14 }}>
              {CYCLES.map(c => (
                <button
                  key={c.id}
                  className={`select-card compact${newCycleId === c.id ? ' selected' : ''}`}
                  onClick={() => { setNewCycleId(c.id); setNewClasseId('') }}
                >
                  <div className="sc-emoji" style={{ fontSize: '1.2rem' }}>{c.emoji}</div>
                  <div className="sc-label" style={{ fontSize: '0.78rem' }}>{c.nom}</div>
                </button>
              ))}
            </div>

            {newCycleId && (
              <>
                <p className="param-sub" style={{ marginBottom: 8, fontWeight: 600 }}>Classe</p>
                <div className="grid-3" style={{ gap: 8, marginBottom: 16 }}>
                  {classesForCycle.map(c => (
                    <button
                      key={c.id}
                      className={`select-card compact${newClasseId === c.id ? ' selected' : ''}`}
                      onClick={() => setNewClasseId(c.id)}
                    >
                      <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{c.court}</div>
                      <div className="sc-sub" style={{ fontSize: '0.68rem', marginTop: 2 }}>{c.nom}</div>
                    </button>
                  ))}
                </div>
              </>
            )}

            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-ghost" style={{ flex: 1 }} onClick={cancelEdit}>Annuler</button>
              <button
                className="btn btn-primary"
                style={{ flex: 2 }}
                disabled={!newCycleId || !newClasseId}
                onClick={saveClasse}
              >
                ✓ Enregistrer
              </button>
            </div>
          </div>
        )}

        {/* ── À propos ── */}
        <p className="section-title" style={{ marginTop: 24 }}>À propos</p>
        <div className="param-card">
          <div className="param-row">
            <span className="param-icon">📱</span>
            <div className="param-info">
              <div className="param-label">ScholaTogo v2.0</div>
              <div className="param-sub">Application offline · Données sauvegardées localement</div>
            </div>
          </div>
        </div>
        <div className="param-card" style={{ marginTop: 10 }}>
          <div className="param-row">
            <span className="param-icon">🇹🇬</span>
            <div className="param-info">
              <div className="param-label">Fait pour les élèves du Togo</div>
              <div className="param-sub">CP → Terminale · Programmes officiels togolais</div>
            </div>
          </div>
        </div>

        {/* ── Zone de danger ── */}
        <p className="section-title" style={{ marginTop: 24, color: 'var(--error)' }}>Zone de danger</p>
        <button
          className="danger-btn"
          onClick={() => {
            if (window.confirm('Réinitialiser toutes tes données ? Cette action est irréversible.')) {
              localStorage.clear()
              navigate('/onboarding', { replace: true })
            }
          }}
        >
          ⚠️ Réinitialiser mes données
        </button>

      </div>
    </div>
  )
}
