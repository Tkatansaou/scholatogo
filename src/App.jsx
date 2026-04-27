import { Routes, Route, Navigate } from 'react-router-dom'
import { getEleve } from './utils/storage'
import Navbar      from './components/Navbar'
import Onboarding  from './pages/Onboarding'
import Dashboard   from './pages/Dashboard'
import Matieres    from './pages/Matieres'
import Lecons      from './pages/Lecons'
import Lecon       from './pages/Lecon'
import Quiz        from './pages/Quiz'
import Progres     from './pages/Progres'
import Komi        from './pages/Komi'

const PROTECTED = ['/dashboard', '/matieres', '/lecons', '/lecon', '/quiz', '/progres', '/komi']

function RequireAuth({ children }) {
  return getEleve() ? children : <Navigate to="/onboarding" replace />
}

export default function App() {
  const hasProfile = !!getEleve()

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={hasProfile ? '/dashboard' : '/onboarding'} replace />} />
        <Route path="/onboarding" element={<Onboarding />} />

        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path="/matieres"  element={<RequireAuth><Matieres /></RequireAuth>} />
        <Route path="/lecons/:matiereId" element={<RequireAuth><Lecons /></RequireAuth>} />
        <Route path="/lecon/:leconId"    element={<RequireAuth><Lecon /></RequireAuth>} />
        <Route path="/quiz/:leconId"     element={<RequireAuth><Quiz /></RequireAuth>} />
        <Route path="/progres"  element={<RequireAuth><Progres /></RequireAuth>} />
        <Route path="/komi"     element={<RequireAuth><Komi /></RequireAuth>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {PROTECTED.some(p => location.hash.includes(p)) && <Navbar />}
    </>
  )
}
