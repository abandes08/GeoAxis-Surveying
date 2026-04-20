import { useState, useEffect } from 'react'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import FadeInSection from '../components/FadeInSection'

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  })

  const [alert, setAlert] = useState({
    show: false,
    type: '',
    message: ''
  })

  const [openFAQ, setOpenFAQ] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.fullName || !formData.email || !formData.message) {
      setAlert({
        show: true,
        type: 'warning',
        message: 'Please fill in required fields.'
      })
      return
    }

    setAlert({
      show: true,
      type: 'info',
      message: 'Sending inquiry...'
    })

    const formDataToSend = new FormData()
    formDataToSend.append(
      'access_key',
      import.meta.env.VITE_WEB3FORM_ACCESS_KEY
    )
    formDataToSend.append('name', formData.fullName)
    formDataToSend.append('email', formData.email)
    formDataToSend.append('phone', formData.phone)
    formDataToSend.append('message', formData.message)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        setAlert({
          show: true,
          type: 'success',
          message: 'Inquiry sent successfully!'
        })

        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        setAlert({
          show: true,
          type: 'error',
          message: 'Something went wrong. Please try again.'
        })
      }
    } catch (error) {
      setAlert({
        show: true,
        type: 'error',
        message: 'Network error. Please try again.'
      })
    }
  }

  // Auto-hide alert after 4 seconds
  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        setAlert({ show: false, type: '', message: '' })
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [alert])

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
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="message"
                  placeholder="Message / Project Details *"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <p className="form-hint">
                  Please provide project details such as property location, land area (if known), type of survey needed (boundary, topographic, construction, or titling), and your preferred timeline.
                </p>

                <button type="submit" className="contact-btn">
                  Send Inquiry
                </button>

                {alert.show && (
                  <Stack sx={{ width: '100%', marginTop: '16px' }} spacing={2}>
                    <Alert severity={alert.type}>
                      {alert.message}
                    </Alert>
                  </Stack>
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

          {/* FAQ SECTION */}
          <div className="faq-section">
            <div className="faq-wrapper">

              <div className="faq-banner">
                <img
                  src="/images/survey-faq.jpg"
                  alt="Land Surveying Consultation"
                  className="faq-banner-image"
                />

                <div className="faq-banner-overlay">
                  <h2>Frequently Asked Questions</h2>
                  <p>
                    Find answers to the most common questions about our land
                    surveying, mapping, and consultation services. We understand that every project begins with important questions.
                  </p>
                </div>
              </div>

              <div className="faq-content">
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