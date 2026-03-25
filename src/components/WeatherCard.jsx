import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function WeatherCard({ data }) {
  const { istDunkel } = useContext(ThemeContext)

  return (
    <div className={`mt-8 p-6 rounded-2xl shadow-lg ${
      istDunkel ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'
    }`}>
      <h2 className="text-2xl font-bold mb-2">{data.name}, {data.sys.country}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
        className="w-24 h-24 mx-auto"
      />
      <p className="text-5xl font-bold text-center my-2">{Math.round(data.main.temp)}°C</p>
      <p className={`text-lg capitalize text-center mb-4 ${
        istDunkel ? 'text-gray-300' : 'text-gray-600'
      }`}>
        {data.weather[0].description}
      </p>
      <div className={`flex justify-around pt-4 border-t ${
        istDunkel ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <div className="text-center">
          <p className={`text-sm ${istDunkel ? 'text-gray-400' : 'text-gray-500'}`}>Feuchte</p>
          <p className="text-xl font-semibold">{data.main.humidity}%</p>
        </div>
        <div className="text-center">
          <p className={`text-sm ${istDunkel ? 'text-gray-400' : 'text-gray-500'}`}>Wind</p>
          <p className="text-xl font-semibold">{Math.round(data.wind.speed * 3.6)} km/h</p>
        </div>
        <div className="text-center">
          <p className={`text-sm ${istDunkel ? 'text-gray-400' : 'text-gray-500'}`}>Gefuehlt</p>
          <p className="text-xl font-semibold">{Math.round(data.main.feels_like)}°C</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
