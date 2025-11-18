import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SciencePage from './pages/SciencePage'
import CommercePage from './pages/CommercePage'
import ArtsPage from './pages/ArtsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/science" element={<SciencePage />} />
      <Route path="/commerce" element={<CommercePage />} />
      <Route path="/arts" element={<ArtsPage />} />
    </Routes>
  )
}

export default App

