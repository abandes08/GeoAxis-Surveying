import FadeInSection from '../components/FadeInSection'
import aboutMain from '../assets/about-main.jpg'
import aboutOverlay from '../assets/about-overlay.jpg'

function About() {
  return (
    <FadeInSection>
      <section id="about" className="about-section">
        <div className="about-left">
          <div className="about-image-wrapper">
            <img
              src={aboutMain}
              alt="Survey site"
              className="about-main-image"
            />

            <img
              src={aboutOverlay}
              alt="Survey engineer"
              className="about-overlay-image"
            />

            {/* <div className="experience-badge">
              <h2>25+</h2>
              <p>Years of Experience</p>
            </div> */}
          </div>
        </div>

        <div className="about-right">
          <p className="about-label">ABOUT GEOAXIS</p>

          <h2>
            We Provide Best Land Survey &
            Digital Mapping Services
          </h2>

          <p className="about-description">
            We provide professional land surveying, relocation,
            subdivision, consolidation, verification, segregation, as-built, topographic surveys, DENR & LRA survey plan approval, and titling assistance. 
            Our expert team delivers accurate, compliant, and cost-effective geospatial 
            solutions for residential, commercial, and government projects.
          </p>

          <div className="about-features">
            <div className="feature-box">
              <h3>✔ Best Quality Service</h3>
              <p>
                Accurate and reliable geodetic engineering solutions.
              </p>
            </div>

            <div className="feature-box">
              <h3>✔ Affordable Pricing</h3>
              <p>
                Professional services with competitive project rates.
              </p>
            </div>
          </div>

          <div className="quote-box">
            <p>
              Delivering precision, compliance, and trust in every
              land surveying project.
            </p>
            <strong>Engr. Arjay A. Nuñez - CEO GeoAxis</strong>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}

export default About