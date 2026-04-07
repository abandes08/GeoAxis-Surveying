import FadeInSection from '../components/FadeInSection'

function Projects() {
  return (
    <FadeInSection>
        <section id="projects" className="section">
        <h2>Recent Projects</h2>

        <div className="card-grid">
            <div className="card">
            <h3>Residential Survey</h3>
            <p>Subdivision and lot boundary verification project.</p>
            </div>

            <div className="card">
            <h3>Commercial Site Mapping</h3>
            <p>Topographic survey for commercial building construction.</p>
            </div>

            <div className="card">
            <h3>Road Infrastructure</h3>
            <p>Survey support for highway and road development.</p>
            </div>
        </div>
        </section>
    </FadeInSection>
  )
}

export default Projects