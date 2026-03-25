import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Ueber() {
  const { istDunkel } = useContext(ThemeContext)

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Ueber die <span className="text-blue-500">App</span>
      </h1>
      <div className={`p-6 rounded-2xl ${istDunkel ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
        <p className="mb-4">
          Diese Wetter-App wurde im Morphos Bootcamp gebaut, um React Hooks und React Router zu lernen.
        </p>
        <h2 className="text-xl font-bold mb-2">Tech Stack</h2>
        <ul className={`list-disc list-inside space-y-1 ${istDunkel ? 'text-gray-300' : 'text-gray-600'}`}>
          <li>React (Vite)</li>
          <li>Tailwind CSS</li>
          <li>React Router</li>
          <li>OpenWeatherMap API</li>
        </ul>
        <h2 className="text-xl font-bold mt-4 mb-2">Hooks die benutzt werden</h2>
        <ul className={`list-disc list-inside space-y-1 ${istDunkel ? 'text-gray-300' : 'text-gray-600'}`}>
          <li>useState — State Management</li>
          <li>useEffect — API Fetch, localStorage</li>
          <li>useRef — Auto-Focus</li>
          <li>useContext — Dark Mode</li>
        </ul>
      </div>
    </div>
  )
}

export default Ueber
