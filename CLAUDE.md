# CLAUDE.md

## Projekt
Wetter App

## Stack
- React 19
- Vite
- Tailwind CSS
- React Router v7
- OpenWeatherMap API

## Ordnerstruktur
- `src/pages/` — [Welche Seiten habt IHR? Schaut nach! z.B. Home.jsx, Favoriten.jsx, NotFound.jsx]
- `src/components/` — [Welche Komponenten habt IHR? z.B. Navbar.jsx, WeatherCard.jsx]
- `src/context/` — [Habt ihr einen ThemeContext? Wenn ja, schreibt es hin]

## API
- OpenWeatherMap Current Weather
- URL: https://api.openweathermap.org/data/2.5/weather
- API Key: `import.meta.env.VITE_WEATHER_API_KEY`
- NIEMALS den API Key hardcoden

## Hooks die wir benutzen
- useState — [Öffnet eure Home.jsx und schaut: wofür benutzt ihr useState?]
- useEffect — [Wofür? z.B. API-Call wenn sich die Stadt ändert]
- useContext — [Wofür? z.B. Dark Mode über ThemeContext]
- useRef — [Habt ihr useRef benutzt? Wenn nicht, lasst die Zeile weg]

## Bekannte Probleme
- [EHRLICH sein. Was funktioniert nicht? Was habt ihr nicht geschafft?]
- 

## Verboten
- Keine API Keys im Code (nur in .env)
- Kein console.log im fertigen Code