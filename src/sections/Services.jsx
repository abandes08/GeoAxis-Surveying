import FadeInSection from '../components/FadeInSection'

function Services() {
  return (
    <FadeInSection>
        <section id="services" className="section">
        <h2>Our Services</h2>

        <div className="card-grid">
          <div className="card">
            <h3>Relocation Survey</h3>
            <p>Accurate re-establishment of property boundaries and corner markers.</p>
          </div>

          <div className="card">
            <h3>Subdivision Survey</h3>
            <p>Professional lot division and survey plans for land subdivision projects.</p>
          </div>

          <div className="card">
            <h3>Consolidation Survey</h3>
            <p>Merging multiple adjacent parcels into a single titled property.</p>
          </div>

          <div className="card">
            <h3>Verification Survey</h3>
            <p>Validation of lot dimensions, boundaries, and existing survey records.</p>
          </div>

          <div className="card">
            <h3>Segregation Survey</h3>
            <p>Separation of a portion of land from an existing titled property.</p>
          </div>

          <div className="card">
            <h3>As-Built Survey</h3>
            <p>Precise measurement of completed structures and site improvements.</p>
          </div>

          <div className="card">
            <h3>Topographic Survey</h3>
            <p>Detailed terrain, elevation, and contour mapping for site development.</p>
          </div>

          <div className="card">
            <h3>DENR & LRA Survey Plan Approval</h3>
            <p>Assistance in securing survey plan approval from DENR and LRA.</p>
          </div>

          <div className="card">
            <h3>Titling Assistance</h3>
            <p>End-to-end support for land title processing and documentation.</p>
          </div>
        </div>
        </section>
    </FadeInSection> 
  )
}

export default Services