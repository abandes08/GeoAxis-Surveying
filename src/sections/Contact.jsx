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

  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqData = [
    {
      question: 'What types of surveying services do you offer?',
      answer:
        'We provide boundary surveys, relocation surveys, topographic surveys, construction staking, subdivision surveys, lot titling assistance, and digital mapping services.'
    },
    {
      question: 'How much does a land survey cost?',
      answer:
        'Survey costs depend on the property size, location, accessibility, and type of survey required. Contact us for a free quotation based on your project details.'
    },
    {
      question: 'How long does the survey process take?',
      answer:
        'Most standard surveys take 3–7 business days depending on the land area, terrain conditions, and document availability.'
    },
    {
      question: 'What documents do I need to provide?',
      answer:
        'Common requirements include a copy of the land title, tax declaration, lot plan, and valid identification. Additional documents may be required depending on the project.'
    },
    {
      question: 'Do you assist with lot titling and subdivision?',
      answer:
        'Yes, we assist with titling requirements, subdivision plans, and technical descriptions needed for legal documentation.'
    }
  ]

  return (
    <FadeInSection>
      <section id="contact" className="section contact-section">
        <div className="contact-wrapper">
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

                <button type="submit" className="contact-btn">
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

          <div className="faq-section">
            <div className="faq-layout">

              {/* LEFT SIDE - IMAGE */}
              <div className="faq-image-container">
                <img
                  src="/images/survey-faq.jpg"
                  alt="Land Surveying Consultation"
                  className="faq-image"
                />

                <div className="faq-image-overlay">
                  <h3>Need Help With Your Survey Project?</h3>
                  <p>
                    Get professional consultation for boundary, topographic,
                    construction, and lot titling surveys.
                  </p>

                  <ul>
                    <li>✔ Free consultation</li>
                    <li>✔ Accurate measurements</li>
                    <li>✔ Fast project turnaround</li>
                  </ul>
                </div>
              </div>

              {/* RIGHT SIDE - FAQ */}
              <div className="faq-content">
                <h2>Frequently Asked Questions</h2>
                <p>Common questions about our land surveying services.</p>

                <div className="faq-container">
                  {faqData.map((faq, index) => (
                    <div key={index} className="faq-item">
                      <button
                        className={`faq-question ${openFAQ === index ? 'active' : ''}`}
                        onClick={() => toggleFAQ(index)}
                      >
                        {faq.question}
                        <span>{openFAQ === index ? '−' : '+'}</span>
                      </button>

                      {openFAQ === index && (
                        <div className="faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </FadeInSection>
  )
}

export default Contact