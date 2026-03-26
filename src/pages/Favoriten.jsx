// src/pages/Favoriten.jsx
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Favoriten() {
  const navigate = useNavigate();
  const [favoriten, setFavoriten] = useState([]);

  // Favoriten aus localStorage laden
  useEffect(() => {
    const stored = localStorage.getItem("wetter-favoriten");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setFavoriten(parsed);
        }
      } catch (e) {
        console.error("Fehler beim Lesen von wetter-favoriten:", e);
      }
    }
  }, []);

  function handleStadtKlick(city) {
    // Zu "/" navigieren und Stadt im state übergeben
    navigate("/", { state: { city: city } });
  }

  function handleLoeschen(city) {
    const updated = favoriten.filter((c) => c !== city);
    setFavoriten(updated);
    localStorage.setItem("wetter-favoriten", JSON.stringify(updated));
  }

  if (favoriten.length === 0) {
    return (
      <div>
        <h2>Favoriten</h2>
        <p>Keine Favoriten gespeichert.</p>
        {/* Link zurück zur Startseite */}
        <Link to="/">Zur Startseite</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Meine Favoriten</h2>
      <div className="favoriten-grid">
        {favoriten.map((city) => (
          <div
            key={city}
            className="favoriten-karte"
            onClick={() => handleStadtKlick(city)}
          >
            <h3>{city}</h3>
            <button
              onClick={(event) => {
                event.stopPropagation();
                handleLoeschen(city);
              }}
            >
              Löschen
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favoriten;
