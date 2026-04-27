import { useNavigate } from 'react-router-dom'
import { getEleve, getProgression, getStats, getBadges, getStreak } from '../utils/storage'
import { MATIERES, LECONS, BADGES, CLASSES } from '../data/content'

export default function Progres() {
  const navigate = useNavigate()
  const eleve    = getEleve()
  const prog     = getProgression()
  const stats    = getStats()
  const badges   = getBadges()
  const streak   = getStreak()

  if (!eleve) return null

  const classe  = CLASSES.find(c => c.id === eleve.classeId)
  const matieres = MATIERES.filter(m => m.cycles.includes(eleve.cycleId))

  const getMatiereData = (matiereId) => {
    const lecons = LECONS.filter(l => l.classeId === eleve.classeId && l.matiereId === matiereId)
    const done   = lecons.filter(l => prog[l.id]?.statut === 'termine').length
    const scores = lecons.map(l => prog[l.id]?.quizScore).filter(s => s != null)
    const avg    = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null
    return { total: lecons.length, done, pct: lecons.length ? Math.round((done / lecons.length) * 100) : 0, avg }
  }

  const totalMin = Math.round(stats.totalTime / 60)

  return (
    <div className="page fade-in">
      <div className="page-header">
        <h1>📊 Mes Progrès</h1>
        <p>{eleve.prenom} · {classe?.nom}</p>
      </div>

      <div className="page-inner" style={{ paddingTop: 16 }}>

        {/* KPIs */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-val">🔥 {streak.count}</div>
            <div className="stat-lbl">Jours consécutifs</div>
          </div>
          <div className="stat-card">
            <div className="stat-val">{stats.lessonsCompleted}</div>
            <div className="stat-lbl">Leçons terminées</div>
          </div>
          <div className="stat-card">
            <div className="stat-val">{stats.quizPassed}</div>
            <div className="stat-lbl">Quiz réussis (80%+)</div>
          </div>
          <div className="stat-card">
            <div className="stat-val">{totalMin}<span style={{ fontSize: '1rem' }}>min</span></div>
            <div className="stat-lbl">Temps d'étude</div>
          </div>
        </div>

        {/* Progression par matière */}
        <p className="section-title">Progression par matière</p>
        {matieres.map(m => {
          const { total, done, pct, avg } = getMatiereData(m.id)
          if (total === 0) return null
          return (
            <div key={m.id} className="matiere-progress-item">
              <div className="mpi-top">
                <div className="mpi-name">
                  <span>{m.emoji}</span>
                  {m.nom}
                </div>
                <span className="mpi-pct">{pct}%</span>
              </div>
              <div className="progress-wrap">
                <div className="progress-fill" style={{ width: `${pct}%`, background: m.couleur }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: '.78rem', color: 'var(--text-muted)' }}>
                <span>{done}/{total} leçons</span>
                {avg != null && <span>Moy. quiz : {avg}%</span>}
              </div>
            </div>
          )
        })}

        {/* Badges */}
        <p className="section-title">Badges ({badges.length}/{BADGES.length})</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
          {BADGES.map(b => {
            const earned = badges.includes(b.id)
            return (
              <div
                key={b.id}
                style={{
                  background: earned ? 'var(--secondary-light)' : 'var(--surface)',
                  border: `1px solid ${earned ? 'var(--secondary)' : 'var(--border)'}`,
                  borderRadius: 'var(--radius)',
                  padding: '12px',
                  display: 'flex', alignItems: 'center', gap: 10,
                  opacity: earned ? 1 : .45,
                  filter: earned ? 'none' : 'grayscale(1)',
                }}
              >
                <span style={{ fontSize: '1.8rem' }}>{b.emoji}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '.85rem' }}>{b.nom}</div>
                  <div style={{ fontSize: '.72rem', color: 'var(--text-muted)', marginTop: 2 }}>{b.desc}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Actions */}
        <button
          className="btn btn-secondary"
          style={{ marginBottom: 10 }}
          onClick={() => navigate('/matieres')}
        >
          📚 Continuer à apprendre
        </button>

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
