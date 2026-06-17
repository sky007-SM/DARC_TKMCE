import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Team from './pages/Team'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      {/* handles scroll reset + hash navigation */}
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App