import { useNavigate } from 'react-router-dom'
import { getEleve, getProgression } from '../utils/storage'
import { MATIERES, LECONS } from '../data/content'

export default function Matieres() {
  const navigate = useNavigate()
  const eleve    = getEleve()
  const prog     = getProgression()

  if (!eleve) return null

  const matieres = MATIERES.filter(m => m.cycles.includes(eleve.cycleId))

  const getProgress = (matiereId) => {
    const lecons = LECONS.filter(l => l.classeId === eleve.classeId && l.matiereId === matiereId)
    const done   = lecons.filter(l => prog[l.id]?.statut === 'termine').length
    return { done, total: lecons.length, pct: lecons.length ? Math.round((done / lecons.length) * 100) : 0 }
  }

  return (
    <div className="page fade-in">
      <div className="page-header">
        <h1>📚 Mes Matières</h1>
        <p>{matieres.length} matières disponibles</p>
      </div>

      <div className="page-inner" style={{ paddingTop: 16 }}>
        {matieres.map(m => {
          const { done, total, pct } = getProgress(m.id)
          return (
            <button
              key={m.id}
              style={{
                width: '100%', textAlign: 'left', display: 'block',
                background: 'var(--surface)',
                borderRadius: 'var(--radius)',
                padding: '16px',
                border: `1px solid var(--border)`,
                borderLeft: `4px solid ${m.couleur}`,
                marginBottom: 10,
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer',
                transition: 'transform .12s',
              }}
              onClick={() => navigate(`/lecons/${m.id}`)}
              onMouseDown={e => e.currentTarget.style.transform = 'scale(.98)'}
              onMouseUp={e   => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div className="card-row" style={{ marginBottom: 12 }}>
                <span style={{ fontSize: '1.8rem' }}>{m.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>{m.nom}</div>
                  <div style={{ fontSize: '.8rem', color: 'var(--text-muted)', marginTop: 2 }}>
                    {total > 0 ? `${done}/${total} leçon${total > 1 ? 's' : ''} terminée${done > 1 ? 's' : ''}` : 'Bientôt disponible'}
                  </div>
                </div>
                {pct === 100
                  ? <span style={{ fontSize: '1.2rem' }}>✅</span>
                  : <span style={{ fontWeight: 700, color: m.couleur }}>{pct}%</span>
                }
              </div>
              {total > 0 && (
                <div className="progress-wrap">
                  <div className="progress-fill" style={{ width: `${pct}%`, background: m.couleur }} />
                </div>
              )}
            </button>
          )
        })}

        {matieres.length === 0 && (
          <div className="empty-state">
            <div className="es-emoji">📚</div>
            <p>Aucune matière disponible pour ton niveau pour l'instant. Reviens bientôt !</p>
          </div>
        )}
      </div>
    </div>
  )
}
