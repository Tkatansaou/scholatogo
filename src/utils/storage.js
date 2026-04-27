const K = {
  ELEVE:       'ast-eleve',
  PROGRESSION: 'ast-progression',
  STREAK:      'ast-streak',
  BADGES:      'ast-badges',
  KOMI:        'ast-komi',
}

const parse = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback }
  catch { return fallback }
}

/* ── Élève ───────────────────────────────────────────────── */
export const getEleve    = ()       => parse(K.ELEVE, null)
export const saveEleve   = (eleve)  => localStorage.setItem(K.ELEVE, JSON.stringify(eleve))
export const clearEleve  = ()       => Object.values(K).forEach(k => localStorage.removeItem(k))

/* ── Progression ─────────────────────────────────────────── */
export const getProgression = () => parse(K.PROGRESSION, {})

export const saveLeconProgress = (leconId, data) => {
  const prog = getProgression()
  prog[leconId] = { ...prog[leconId], ...data, updatedAt: Date.now() }
  localStorage.setItem(K.PROGRESSION, JSON.stringify(prog))
}

export const getLeconProgress = (leconId) => {
  return getProgression()[leconId] ?? { statut: 'todo' }
}

/* ── Streak ──────────────────────────────────────────────── */
export const getStreak = () => parse(K.STREAK, { count: 0, lastDate: null })

export const updateStreak = () => {
  const today     = new Date().toDateString()
  const yesterday = new Date(Date.now() - 86_400_000).toDateString()
  const s         = getStreak()
  if (s.lastDate === today) return s
  const newCount  = s.lastDate === yesterday ? s.count + 1 : 1
  const next      = { count: newCount, lastDate: today }
  localStorage.setItem(K.STREAK, JSON.stringify(next))
  return next
}

/* ── Badges ──────────────────────────────────────────────── */
export const getBadges  = () => parse(K.BADGES, [])

export const awardBadge = (id) => {
  const badges = getBadges()
  if (badges.includes(id)) return false
  badges.push(id)
  localStorage.setItem(K.BADGES, JSON.stringify(badges))
  return true
}

/* ── Stats globales ──────────────────────────────────────── */
export const getStats = () => {
  const prog    = Object.values(getProgression())
  const streak  = getStreak()
  return {
    lessonsCompleted : prog.filter(p => p.statut === 'termine').length,
    streak           : streak.count,
    quizPassed       : prog.filter(p => (p.quizScore ?? 0) >= 80).length,
    perfectQuiz      : prog.filter(p => p.quizScore === 100).length,
    badgesCount      : getBadges().length,
    totalTime        : prog.reduce((s, p) => s + (p.tempsPasse ?? 0), 0),
  }
}

export const checkAndAwardBadges = () => {
  const s = getStats()
  const candidates = [
    { id: 'premier-pas',    condition: s.lessonsCompleted >= 1  },
    { id: 'curieux',        condition: s.lessonsCompleted >= 5  },
    { id: 'studieux',       condition: s.lessonsCompleted >= 10 },
    { id: 'semaine-feu',    condition: s.streak >= 7            },
    { id: 'champion-quiz',  condition: s.quizPassed >= 10       },
    { id: 'perfectionniste',condition: s.perfectQuiz >= 1       },
    { id: 'assidu',         condition: s.streak >= 3            },
  ]
  return candidates.filter(c => c.condition && awardBadge(c.id)).map(c => c.id)
}

/* ── Komi chat ───────────────────────────────────────────── */
export const getKomiHistory = () => parse(K.KOMI, [])

export const saveKomiMessage = (msg) => {
  const hist = getKomiHistory()
  hist.push(msg)
  const trimmed = hist.slice(-100)
  localStorage.setItem(K.KOMI, JSON.stringify(trimmed))
}
