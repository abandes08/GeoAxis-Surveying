import { useState } from 'react'
import FadeInSection from '../components/FadeInSection'

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  })

  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.fullName || !formData.email || !formData.message) {
      alert('Please fill in required fields.')
      return
    }

    console.log('Form Submitted:', formData)

    setSuccessMessage('Inquiry sent successfully!')

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
    <FadeInSection>
      <section id="contact" className="section contact-section">
        <h2>Get in touch</h2>
        <p>Request a quotation or survey consultation.</p>

        <div className="contact-layout">

          {/* LEFT SIDE - FORM */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>

              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Message / Project Details *"
                rows="6"
                value={formData.message}
                onChange={handleChange}
              />

              <p className="form-hint">
                Please provide project details such as property location, land area (if known), type of survey needed (boundary, topographic, construction, or titling), and your preferred timeline.
              </p>

              <button type="submit" className="hero-btn">
                Send Inquiry
              </button>

              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
            </form>
          </div>

          {/* RIGHT SIDE - MAP + INFO */}
          <div className="contact-info">

            <div className="map-container">
              <iframe
                title="GeoAxis Office Location"
                src="https://www.google.com/maps/embed?pb=!4v1775848904088!6m8!1m7!1siYVYkceaSQe2furFAtW0NA!2m2!1d13.10166798407375!2d123.7417852742272!3f98.95153407646701!4f-2.192737070704567!5f0.7820865974627469"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="company-info">
              <h3>GeoAxis Land Surveying and Digital Mapping Services</h3>

              <p><strong>Location:</strong> Tico-Tico, Homapon, Legazpi City, Albay, Bicol, Philippines, 4500</p>
              <p><strong>Telephone:</strong> (052) 742 ****</p>
              <p><strong>Mobile:</strong> +63 912 *** ****</p>
              <p><strong>Email:</strong> geoaxisinfo@outlook.com</p>
            </div>

          </div>

        </div>
      </section>
    </FadeInSection>
  )
}

export default Contact