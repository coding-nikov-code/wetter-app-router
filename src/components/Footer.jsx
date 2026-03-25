import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Footer() {
  const { istDunkel } = useContext(ThemeContext)

  return (
    <footer className={`mt-auto py-6 text-center text-sm ${
      istDunkel ? 'text-gray-500' : 'text-gray-400'
    }`}>
      <p>Wetter-App — React + Tailwind + React Router — Morphos Bootcamp 2026</p>
    </footer>
  )
}

export default Footer
