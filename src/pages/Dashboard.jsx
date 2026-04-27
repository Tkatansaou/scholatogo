import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getEleve, getStreak, updateStreak, getStats, getBadges, getProgression } from '../utils/storage'
import { CLASSES, MATIERES, LECONS, BADGES } from '../data/content'

export default function Dashboard() {
  const navigate  = useNavigate()
  const eleve     = getEleve()
  const [streak, setStreak]   = useState(getStreak())
  const [stats, setStats]     = useState(getStats())

  useEffect(() => {
    const s = updateStreak()
    setStreak(s)
    setStats(getStats())
  }, [])

  if (!eleve) { navigate('/onboarding', { replace: true }); return null }

  const classe   = CLASSES.find(c => c.id === eleve.classeId)
  const cycleId  = eleve.cycleId
  const matieres = MATIERES.filter(m => m.cycles.includes(cycleId))
  const prog     = getProgression()
  const badges   = getBadges()

  /* Dernière leçon consultée */
  const allProg  = Object.entries(prog).sort((a, b) => (b[1].updatedAt ?? 0) - (a[1].updatedAt ?? 0))
  const lastId   = allProg[0]?.[0]
  const lastLecon= LECONS.find(l => l.id === lastId)

  /* Taux de complétion par matière */
  const getMatiereProgress = (matiereId) => {
    const lecons = LECONS.filter(l => l.classeId === eleve.classeId && l.matiereId === matiereId)
    if (!lecons.length) return 0
    const done   = lecons.filter(l => prog[l.id]?.statut === 'termine').length
    return Math.round((done / lecons.length) * 100)
  }

  const hour  = new Date().getHours()
  const greet = hour < 12 ? 'Bonjour' : hour < 18 ? 'Bon après-midi' : 'Bonsoir'

  return (
    <div className="page fade-in" style={{ paddingBottom: 80 }}>
      {/* ── Header ── */}
      <div className="dashboard-header">
        <div className="dh-top">
          <div>
            <div className="dh-greeting">{greet} 👋</div>
            <div className="dh-name">{eleve.prenom} !</div>
          </div>
          <button
            className="dh-class-chip"
            onClick={() => navigate('/progres')}
          >
            {classe?.nom ?? eleve.classeId}
          </button>
        </div>

        <div className="streak-pill">
          🔥 {streak.count} jour{streak.count > 1 ? 's' : ''} d'affilée
        </div>

        <div className="kpi-row">
          <div className="kpi-card">
            <div className="kpi-val">{stats.lessonsCompleted}</div>
            <div className="kpi-lbl">Leçons</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-val">{stats.quizPassed}</div>
            <div className="kpi-lbl">Quiz réussis</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-val">{stats.badgesCount}</div>
            <div className="kpi-lbl">Badges</div>
          </div>
        </div>
      </div>

      <div className="content-shifted">

        {/* ── Continuer ── */}
        {lastLecon && (
          <>
            <p className="section-title">Reprendre</p>
            <button
              className="continue-card"
              onClick={() => navigate(`/lecon/${lastLecon.id}`)}
            >
              <span className="continue-icon">
                {MATIERES.find(m => m.id === lastLecon.matiereId)?.emoji ?? '📖'}
              </span>
              <div className="continue-info">
                <div className="continue-label">Dernière leçon</div>
                <div className="continue-title">{lastLecon.titre}</div>
                <div className="continue-sub">
                  {prog[lastLecon.id]?.statut === 'termine' ? '✅ Terminée' : '▶ En cours'} · {lastLecon.dureeMin} min
                </div>
              </div>
              <span className="continue-arrow">›</span>
            </button>
          </>
        )}

        {/* ── Matières ── */}
        <p className="section-title">Mes matières</p>
        <div className="matieres-grid">
          {matieres.map(m => {
            const pct    = getMatiereProgress(m.id)
            const lecons = LECONS.filter(l => l.classeId === eleve.classeId && l.matiereId === m.id)
            return (
              <button
                key={m.id}
                className="matiere-card"
                onClick={() => navigate(`/lecons/${m.id}`)}
                style={{ borderTop: `3px solid ${m.couleur}` }}
              >
                <span className="mc-emoji">{m.emoji}</span>
                <span className="mc-name">{m.nom}</span>
                <span className="mc-count">{lecons.length} leçon{lecons.length !== 1 ? 's' : ''}</span>
                {lecons.length > 0 && (
                  <div className="mc-bar">
                    <div className="progress-wrap">
                      <div className="progress-fill" style={{ width: `${pct}%`, background: m.couleur }} />
                    </div>
                    <span style={{ fontSize: '.7rem', color: 'var(--text-muted)', marginTop: 2, display: 'block' }}>{pct}%</span>
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* ── Badges ── */}
        <p className="section-title">Badges</p>
        <div className="badges-row">
          {BADGES.map(b => (
            <div key={b.id} className={`badge-pill${badges.includes(b.id) ? ' earned' : ' locked'}`}>
              <span className="badge-emoji">{b.emoji}</span>
              <span className="badge-name">{b.nom}</span>
            </div>
          ))}
        </div>

        {/* ── Komi teaser ── */}
        <p className="section-title">Tuteur virtuel</p>
        <button className="card" style={{ width: '100%', textAlign: 'left' }} onClick={() => navigate('/komi')}>
          <div className="card-row">
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: 'var(--primary-light)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.5rem'
            }}>🤖</div>
            <div>
              <div style={{ fontWeight: 700 }}>Komi — ton tuteur IA</div>
              <div style={{ fontSize: '.82rem', color: 'var(--text-muted)', marginTop: 2 }}>
                Une question sur ta leçon ? Demande à Komi !
              </div>
            </div>
            <span style={{ marginLeft: 'auto', color: 'var(--text-light)' }}>›</span>
          </div>
        </button>

      </div>
    </div>
  )
}
