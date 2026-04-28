import { NavLink } from 'react-router-dom'

const ITEMS = [
  { to: '/dashboard',  icon: '🏠', label: 'Accueil'  },
  { to: '/matieres',   icon: '📚', label: 'Cours'    },
  { to: '/progres',    icon: '📊', label: 'Progrès'  },
  { to: '/komi',       icon: '🤖', label: 'Komi'     },
  { to: '/parametres', icon: '⚙️', label: 'Réglages' },
]

export default function Navbar() {
  return (
    <nav className="navbar">
      {ITEMS.map(({ to, icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
        >
          <span className="nav-icon">{icon}</span>
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
