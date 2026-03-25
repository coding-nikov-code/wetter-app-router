import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Favoriten() {
  const { istDunkel } = useContext(ThemeContext)

  return (
    <div className="max-w-md mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">
        Meine <span className="text-blue-500">Favoriten</span>
      </h1>
      <p className={`${istDunkel ? 'text-gray-400' : 'text-gray-500'}`}>
        Hier werden gespeicherte Staedte angezeigt.
      </p>
      {/* TODO: Favoriten-Liste aus localStorage laden und anzeigen */}
      {/* TODO: Klick auf Favorit navigiert zu / mit der Stadt */}
    </div>
  )
}

export default Favoriten
