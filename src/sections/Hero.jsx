import { motion } from 'framer-motion'
import FadeInSection from '../components/FadeInSection'
import heroBg from '../assets/hero-survey-bg.jpg'

function Hero() {
  return (
    <FadeInSection>
      <section id="home" className="hero-section"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.45),
            rgba(0, 0, 0, 0.45)
          ), url(${heroBg})`
        }}
      >
        <div className="hero-content">
          <h1>GeoAxis Land Surveying & Digital Mapping</h1>
          <p>
            Accurate boundary surveys, topographic mapping, drone surveys,
            and GIS solutions for residential, commercial, and infrastructure projects.
          </p>
          <button
            className="hero-btn"
            onClick={() =>
              document.getElementById('contact').scrollIntoView({
                behavior: 'smooth'
              })
            }
          >
            Request a Survey
          </button>
        </div>
      </section>
    </FadeInSection>
  )
}

export default Hero