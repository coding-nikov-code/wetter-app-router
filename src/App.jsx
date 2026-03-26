import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ThemeContext from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Favoriten from './pages/Favoriten'
import Ueber from './pages/Ueber'
import NotFound from './pages/NotFound'
import WetterDetail from './pages/WetterDetail'

function App() {
  const [istDunkel, setIstDunkel] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : true
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(istDunkel))
  }, [istDunkel])

  const toggleDarkMode = () => setIstDunkel(prev => !prev)

  return (
    <ThemeContext.Provider value={{ istDunkel, toggleDarkMode }}>
      <HashRouter>
        <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
          istDunkel ? 'bg-gray-900 text-gray-100' : 'bg-blue-50 text-gray-900'
        }`}>
          <Navbar />
          <main className="flex-1 px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favoriten" element={<Favoriten />} />
              <Route path="/ueber" element={<Ueber />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/wetter/:city" element={<WetterDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeContext.Provider>
  )
}

export default App
