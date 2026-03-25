import { useState, useEffect, useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'

function Home() {
  const { istDunkel } = useContext(ThemeContext)
  const [city, setCity] = useState(() => {
    return localStorage.getItem('lastCity') || ''
  })
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (city) localStorage.setItem('lastCity', city)
  }, [city])

  useEffect(() => {
    async function fetchWeather() {
      if (!city) return
      setLoading(true)
      setError(null)

      try {
        const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=de`
        )
        if (!res.ok) {
          if (res.status === 404) throw new Error('Stadt nicht gefunden')
          if (res.status === 401) throw new Error('API-Key ungueltig')
          throw new Error(`Serverfehler: ${res.status}`)
        }
        const json = await res.json()
        setWeatherData(json)
      } catch (err) {
        setError(err.message)
        setWeatherData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [city])

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        <span className="text-blue-500">Wetter</span> suchen
      </h1>
      <SearchBar onSearch={setCity} />
      {loading && <p className="text-center mt-4 text-blue-500">Laden...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}
      {weatherData && !loading && <WeatherCard data={weatherData} />}
      {!weatherData && !loading && !error && (
        <p className={`text-center mt-12 ${istDunkel ? 'text-gray-500' : 'text-gray-400'}`}>
          Stadt eingeben und suchen
        </p>
      )}
    </div>
  )
}

export default Home
