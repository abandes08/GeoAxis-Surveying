import FadeInSection from '../components/FadeInSection'
import relocationImg from '../assets/services/service-relocation.jpg'
import subdivisionImg from '../assets/services/service-subdivision.jpg'
import consolidationImg from '../assets/services/service-consolidation.jpg'
import originalImg from '../assets/services/service-original.jpg'
import approvalImg from '../assets/services/service-approval.jpg'
import constructionImg from '../assets/services/service-construction.jpg'
import titlingImg from '../assets/services/service-titling.jpg'
import treeImg from '../assets/services/service-tree.jpg'
import topoImg from '../assets/services/service-topographic.jpg'
import hydrographicImg from '../assets/services/service-hydrographic.jpg'
import asBuiltImg from '../assets/services/service-asBuilt.jpg'
import resurveyImg from '../assets/services/service-resurvey.jpg'
import zspiImg from '../assets/services/service-zone.jpg'



function Services() {
  const services = [
    {
      title: 'Relocation Survey',
      description: 'Accurate re-establishment of property boundaries, corner markers, and lot line verification.',
      image: relocationImg,
      variant: 'dark',
      icon: '📍'
    },
    {
      title: 'Subdivision Survey',
      description: 'Preparation of subdivision plans for land development, including lot partitioning and road layouts.',
      image: subdivisionImg,
      variant: 'accent',
      icon: '📐'
    },
    {
      title: 'Consolidation Survey',
      description: 'Combining multiple adjacent parcels of land into a single title for legal and development purposes.',
      image: consolidationImg,
      variant: 'dark',
      icon: '🧩'
    },
    {
      title: 'Original Survey',
      description: 'Initial survey of untitled land to establish technical descriptions for registration.',
      image: originalImg,
      variant: 'accent',
      icon: '🗺️'
    },
    {
      title: 'Approval of Plan Survey',
      description: 'Processing and securing government approval for survey plans from relevant agencies.',
      image: approvalImg,
      variant: 'dark',
      icon: '🏛️'
    },
    {
      title: 'Construction Survey',
      description: 'Precise layout, staking, and positioning for construction and engineering projects.',
      image: constructionImg,
      variant: 'accent',
      icon: '🏗️'
    },
    {
      title: 'Titling Assistance',
      description: 'End-to-end support for land title processing, transfer, and legal documentation.',
      image: titlingImg,
      variant: 'dark',
      icon: '📄'
    },
    {
      title: 'Tree Tagging',
      description: 'Identification, tagging, and documentation of trees for environmental compliance and permits.',
      image: treeImg,
      variant: 'accent',
      icon: '🌳'
    },
    {
      title: 'Topographic Survey',
      description: 'Detailed terrain, contour, and elevation mapping for engineering and site development.',
      image: topoImg,
      variant: 'dark',
      icon: '🗺️'
    },
    {
      title: 'Hydrographic Survey',
      description: 'Surveying of bodies of water to measure depth, seabed features, and underwater conditions.',
      image: hydrographicImg,
      variant: 'accent',
      icon: '🌊'
    },
    {
      title: 'As-Built Survey',
      description: 'Documentation of completed construction to verify actual structure dimensions and locations.',
      image: asBuiltImg,
      variant: 'dark',
      icon: '📏'
    },
    {
      title: 'Resurvey',
      description: 'Re-evaluation and verification of existing survey data for accuracy and boundary confirmation.',
      image: resurveyImg,
      variant: 'accent',
      icon: '🔄'
    },
    {
      title: 'Zone of Significant Port Interest',
      description: 'Survey and mapping services for designated port zones and high-impact development areas.',
      image: zspiImg,
      variant: 'dark',
      icon: '⚓'
    }
  ]

  return (
    <FadeInSection>
      <section id="services" className="services-section">
        <p className="services-label">OUR SERVICES</p>

        <h2 className="services-heading">
          What Service We Provide
        </h2>

        <p className="services-subtext">
          Professional geodetic engineering and land surveying solutions
          for residential, commercial, and government projects.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${service.variant}`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />

              <div className="service-content">
                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                {/* <button className="read-more-btn">
                  READ MORE →
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>
  )
}

export default Services