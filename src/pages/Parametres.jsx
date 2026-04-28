import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getEleve, getTheme, saveTheme } from '../utils/storage'

export default function Parametres() {
  const navigate = useNavigate()
  const eleve    = getEleve()
  const [theme, setTheme] = useState(getTheme)

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    saveTheme(next)
    setTheme(next)
  }

  return (
    <div className="page fade-in">
      <div className="page-header">
        <h1>⚙️ Paramètres</h1>
        <p>{eleve?.prenom} · {eleve?.classeId}</p>
      </div>

      <div className="page-inner" style={{ paddingTop: 20 }}>

        {/* Thème */}
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

        {/* Profil */}
        <p className="section-title" style={{ marginTop: 24 }}>Profil</p>
        <div className="param-card">
          <div className="param-row">
            <span className="param-icon">👤</span>
            <div className="param-info">
              <div className="param-label">{eleve?.prenom}</div>
              <div className="param-sub">Classe {eleve?.classeId} · Cycle {eleve?.cycleId}</div>
            </div>
          </div>
        </div>

        {/* À propos */}
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

        {/* Réinitialisation */}
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
