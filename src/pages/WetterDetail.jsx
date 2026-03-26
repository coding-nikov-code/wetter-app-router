// src/pages/WetterDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const API_KEY = "euer-key";

function WetterDetail() {
  const { city } = useParams(); // "Hamburg" aus /wetter/Hamburg
  const [wetter, setWetter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      setError(null);

      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=de`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Fehler beim Laden der Wetterdaten (${response.status})`);
        }

        const data = await response.json();
        setWetter(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (city) {
      fetchWeather();
    }
  }, [city]);

  if (loading) {
    return (
      <div>
        <h2>Wetter für {city}</h2>
        <p>Lade Wetterdaten...</p>
        <Link to="/">Zur Startseite</Link>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>Wetter für {city}</h2>
        <p>Fehler: {error}</p>
        <Link to="/">Zur Startseite</Link>
      </div>
    );
  }

  if (!wetter) {
    return (
      <div>
        <h2>Wetter für {city}</h2>
        <p>Keine Daten gefunden.</p>
        <Link to="/">Zur Startseite</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Wetter für {wetter.name}</h2>
      <p>Temperatur: {wetter.main.temp} °C</p>
      <p>Gefühlt: {wetter.main.feels_like} °C</p>
      <p>Beschreibung: {wetter.weather[0].description}</p>
      <p>Luftfeuchtigkeit: {wetter.main.humidity} %</p>
      <p>Wind: {wetter.wind.speed} m/s</p>

      <Link to="/">Zur Startseite</Link>
    </div>
  );
}

export default WetterDetail;
