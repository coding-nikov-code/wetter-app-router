# Spec: 5-Tage-Wettervorhersage

## Ziel
Unter den aktuellen Wetterdaten werden 5 Tage Vorhersage angezeigt.

## API
- OpenWeatherMap 5-Day Forecast
- URL: https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={key}&units=metric
- Gibt 40 Einträge zurück (8 pro Tag, alle 3 Stunden)
- Wir nehmen nur die 12:00-Einträge (5 Stück)

## Was gebaut wird
- Neuen fetch-Call zur Forecast-API (im gleichen useEffect oder daneben)
- API-Response filtern: nur Einträge wo dt_txt "12:00:00" enthält
- 5 Karten unter den aktuellen Wetterdaten rendern
- Jede Karte zeigt: Wochentag, Temperatur (°C), Wetter-Icon, Beschreibung
- Responsive: auf Mobile untereinander (flex-col), auf Desktop nebeneinander (flex-row)

## Edge Cases
- Stadt nicht gefunden → bestehende Fehlermeldung nutzen
- API-Fehler → "Vorhersage nicht verfügbar" anzeigen

## Nicht-Ziele
- Kein Graph / Chart
- Kein stündliches Wetter
- Kein neuer Custom Hook
- Kein Caching