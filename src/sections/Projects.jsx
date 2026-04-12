import { useState, useEffect } from 'react'
import FadeInSection from '../components/FadeInSection'

function Projects() {
  const galleryImages = [
    {
      image: '/images/project1.jpg',
      title: 'Residential Boundary Survey',
      description: `Precision boundary verification and subdivision mapping services conducted for residential properties,
      ensuring accurate lot dimensions, clear property lines, and compliance with legal land documentation requirements.
      This project supports homeowners, developers, and property buyers in securing reliable land measurements for construction, titling, and dispute prevention.`
    },
    {
      image: '/images/project2.jpg',
      title: 'Commercial Site Mapping',
      description: `Comprehensive topographic and site mapping survey performed for commercial development projects,
      providing detailed land data, elevation points, and boundary references essential for planning, design, and construction.
      This service helps architects, engineers, and developers make informed decisions for efficient project execution and site utilization.`
    },
    {
      image: '/images/project3.jpg',
      title: 'Road Infrastructure Survey',
      description: `End-to-end survey support for road and highway infrastructure projects,
      including alignment verification, elevation profiling, and boundary control points.
      This project ensures accurate field measurements for safe, compliant, and efficient road design, expansion, and construction activities.`
    },
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <FadeInSection>
      <section id="projects" className="section projects-section">
        <h2>Highlights</h2>

        <div className="projects-layout">

          {/* LEFT SIDE CAROUSEL */}
          <div className="project-gallery">
            <img
              src={galleryImages[currentImage].image}
              alt={galleryImages[currentImage].title}
              className="gallery-image"
            />

            <div className="gallery-dots">
              {galleryImages.map((_, index) => (
                <span
                  key={index}
                  className={currentImage === index ? 'dot active' : 'dot'}
                  onClick={() => setCurrentImage(index)}
                ></span>
              ))}
            </div>

            <h3>{galleryImages[currentImage].title}</h3>
            <p>{galleryImages[currentImage].description}</p>
          </div>

          {/* RIGHT SIDE GRID */}
          <div className="project-grid-wrapper">
            <h3 className="grid-title">Featured Projects</h3>
            
            <div className="project-grid">
              <div className="project-item">
                <img src="/images/project1.jpg" alt="Residential Survey" />
                <div className="project-info">
                  <h3>Residential Survey</h3>
                  <p>
                    This project involved subdivision planning and lot boundary verification
                    for a residential property. Accurate measurements were conducted to
                    confirm legal boundaries and prevent future property disputes. The
                    survey results provided the client with reliable documentation for
                    development and ownership reference.
                  </p>
                </div>
              </div>

              <div className="project-item">
                <img src="/images/project2.jpg" alt="Commercial Mapping" />
                <div className="project-info">
                  <h3>Commercial Site Mapping</h3>
                  <p>
                    A detailed topographic survey was performed for a planned commercial
                    building development. The mapping included elevation data, existing
                    site features, and boundary references. This information served as a
                    critical basis for architectural and engineering design.
                  </p>
                </div>
              </div>

              <div className="project-item">
                <img src="/images/project3.jpg" alt="Road Infrastructure" />
                <div className="project-info">
                  <h3>Road Infrastructure</h3>
                  <p>
                    This survey supported highway and road development works by providing
                    precise alignment and terrain data. Measurements were used for route
                    planning, grading, and construction layout. The project ensured
                    accurate implementation of infrastructure design standards.
                  </p>
                </div>
              </div>

              <div className="project-item">
                <img src="/images/project4.jpg" alt="Subdivision Development" />
                <div className="project-info">
                  <h3>Subdivision Development Survey</h3>
                  <p>
                    The project focused on land segmentation and lot plotting for a
                    residential subdivision. Each parcel was carefully measured and mapped
                    according to development plans. The output supported legal
                    documentation, lot allocation, and future construction activities.
                  </p>
                </div>
              </div>

              <div className="project-item">
                <img src="/images/project5.jpg" alt="Topographic Survey" />
                <div className="project-info">
                  <h3>Topographic Elevation Survey</h3>
                  <p>
                    This survey provided detailed contour lines and elevation mapping of
                    the terrain. The collected data helped engineers assess slope,
                    drainage, and land suitability for construction. It was essential for
                    safe and efficient site planning.
                  </p>
                </div>
              </div>

              <div className="project-item">
                <img src="/images/project6.jpg" alt="Construction Layout" />
                <div className="project-info">
                  <h3>Construction Layout Survey</h3>
                  <p>
                    Precision site staking and structural layout marking were completed
                    for this construction project. Key reference points were established to
                    guide foundation and structural works. This ensured that all building
                    elements followed the approved design plan accurately.
                  </p>
                </div>
              </div>

              <div className="project-item">
                <img src="/images/project7.jpg" alt="Land Titling" />
                <div className="project-info">
                  <h3>Land Titling and Relocation Survey</h3>
                  <p>
                    This project involved boundary verification and relocation survey for
                    land titling requirements. Existing property corners were identified
                    and re-established using precise measurements. The results supported
                    legal ownership documentation and registration processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}

export default Projects