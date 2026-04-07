import { motion } from 'framer-motion'
import FadeInSection from '../components/FadeInSection'

function Hero() {
  return (
    <FadeInSection>
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>GeoAxis Land Surveying & Digital Mapping</h1>
          <p>
            Accurate boundary surveys, topographic mapping, drone surveys,
            and GIS solutions for residential, commercial, and infrastructure projects.
          </p>
          <button className="hero-btn">Request a Survey</button>
        </div>
      </section>
    </FadeInSection>
  )
}

export default Hero