function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <nav className="navbar">
      <h2>GeoSurvey</h2>

      <div className="nav-links">
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