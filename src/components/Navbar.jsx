import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)

    if (element) {
      const navbarHeight = 90

      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      })

      setMenuOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <h2>GeoSurvey</h2>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('services')}>Services</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </div>
    </nav>
  )
}

export default Navbar