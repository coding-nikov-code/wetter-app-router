import { useState, useRef, useEffect, useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('')
  const inputRef = useRef(null)
  const { istDunkel } = useContext(ThemeContext)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      onSearch(input.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Stadt eingeben..."
        className={`flex-1 px-4 py-2 rounded-lg border-2 outline-none transition-colors ${
          istDunkel
            ? 'bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-400'
            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
        }`}
      />
      <button type="submit" className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors cursor-pointer">
        Suchen
      </button>
    </form>
  )
}

export default SearchBar
