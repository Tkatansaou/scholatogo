import { useParams, useNavigate } from 'react-router-dom'
import { getEleve, getProgression } from '../utils/storage'
import { MATIERES, LECONS } from '../data/content'

export default function Lecons() {
  const { matiereId } = useParams()
  const navigate      = useNavigate()
  const eleve         = getEleve()
  const prog          = getProgression()

  if (!eleve) return null

  const matiere = MATIERES.find(m => m.id === matiereId)
  const lecons  = LECONS.filter(l => l.classeId === eleve.classeId && l.matiereId === matiereId)

  const statusOf = (leconId) => prog[leconId]?.statut ?? 'todo'

  const statusIcon = (s) => s === 'termine' ? '✅' : s === 'en_cours' ? '▶' : '○'
  const statusClass = (s) => s === 'termine' ? 'done' : s === 'en_cours' ? 'progress' : 'todo'

  return (
    <div className="page fade-in">
      <div className="page-header" style={{ background: matiere?.couleur ?? 'var(--primary)' }}>
        <button
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6, fontSize: '.85rem', opacity: .85 }}
          onClick={() => navigate('/matieres')}
        >
          ← Retour
        </button>
        <h1>{matiere?.emoji} {matiere?.nom}</h1>
        <p>
          {lecons.length} leçon{lecons.length > 1 ? 's' : ''} ·{' '}
          {lecons.filter(l => statusOf(l.id) === 'termine').length} terminée{lecons.filter(l => statusOf(l.id) === 'termine').length > 1 ? 's' : ''}
        </p>
      </div>

      <div className="page-inner" style={{ paddingTop: 16 }}>
        {lecons.length === 0 && (
          <div className="empty-state" style={{ marginTop: 40 }}>
            <div className="es-emoji">🚧</div>
            <p>Les leçons de {matiere?.nom} pour ta classe arrivent bientôt !</p>
            <button className="btn btn-secondary" style={{ marginTop: 16 }} onClick={() => navigate('/matieres')}>
              ← Retour aux matières
            </button>
          </div>
        )}

        {lecons.map((l, i) => {
          const st  = statusOf(l.id)
          const sc  = prog[l.id]?.quizScore
          return (
            <button
              key={l.id}
              className="lecon-item"
              onClick={() => navigate(`/lecon/${l.id}`)}
            >
              <div className={`lecon-status ${statusClass(st)}`}>
                {statusIcon(st)}
              </div>
              <div className="lecon-info">
                <div className="lecon-title">{i + 1}. {l.titre}</div>
                <div className="lecon-meta">
                  <span>⏱ {l.dureeMin} min</span>
                  {sc != null && <span className="lecon-score">Quiz : {sc}%</span>}
                </div>
              </div>
              <span style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>›</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
