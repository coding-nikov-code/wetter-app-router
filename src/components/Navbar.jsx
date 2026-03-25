import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Navbar() {
  const { istDunkel, toggleDarkMode } = useContext(ThemeContext)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const linkClass = (path) => `text-sm font-medium transition-colors ${
    isActive(path)
      ? 'text-blue-500'
      : istDunkel
        ? 'text-gray-300 hover:text-blue-400'
        : 'text-gray-600 hover:text-blue-600'
  }`

  return (
    <header className={`w-full z-50 transition-colors duration-300 ${
      istDunkel
        ? 'bg-gray-900/95 border-b border-gray-700'
        : 'bg-white/95 border-b border-gray-200'
    } backdrop-blur-sm`}>
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className={`text-xl font-bold ${
          istDunkel ? 'text-white' : 'text-gray-900'
        }`}>
          Wetter-App
        </Link>

        <nav className="flex items-center gap-6">
          <Link to="/" className={linkClass('/')}>Home</Link>
          <Link to="/favoriten" className={linkClass('/favoriten')}>Favoriten</Link>
          <Link to="/ueber" className={linkClass('/ueber')}>Ueber</Link>

          <button
            onClick={toggleDarkMode}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              istDunkel
                ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {istDunkel ? 'Hell' : 'Dunkel'}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
