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
  const [forecastData, setForecastData] = useState(null)
  const [forecastError, setForecastError] = useState(null)

  useEffect(() => {
    if (city) localStorage.setItem('lastCity', city)
  }, [city])

  useEffect(() => {
    async function fetchWeather() {
      if (!city) return
      setLoading(true)
      setError(null)
      setForecastError(null)

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

        try {
          const forecastRes = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=de`
          )
          if (!forecastRes.ok) throw new Error('Forecast failed')
          const forecastJson = await forecastRes.json()
          const noon = forecastJson.list.filter(entry => entry.dt_txt.includes('12:00:00'))
          setForecastData(noon)
        } catch {
          setForecastError('Vorhersage nicht verfügbar')
          setForecastData(null)
        }
      } catch (err) {
        setError(err.message)
        setWeatherData(null)
        setForecastData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [city])

  return (
    <div>
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

      {forecastError && !error && (
        <p className="text-center mt-4 text-red-500">{forecastError}</p>
      )}

      {forecastData && !loading && (
        <div className="max-w-4xl mx-auto mt-8">
          <div className="flex flex-col md:flex-row gap-4">
            {forecastData.map((entry) => {
              const date = new Date(entry.dt_txt)
              const wochentag = date.toLocaleDateString('de-DE', { weekday: 'long' })
              return (
                <div
                  key={entry.dt}
                  className={`flex-1 p-4 rounded-2xl text-center ${
                    istDunkel ? 'bg-gray-800 text-gray-100' : 'bg-white shadow-lg text-gray-900'
                  }`}
                >
                  <p className="font-semibold">{wochentag}</p>
                  <img
                    src={`https://openweathermap.org/img/wn/${entry.weather[0].icon}@2x.png`}
                    alt={entry.weather[0].description}
                    className="w-16 h-16 mx-auto"
                  />
                  <p className="text-2xl font-bold">{Math.round(entry.main.temp)}°C</p>
                  <p className={`text-sm capitalize ${istDunkel ? 'text-gray-300' : 'text-gray-600'}`}>
                    {entry.weather[0].description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
