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

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.message
    ) {
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
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Request a quotation or survey consultation.</p>

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
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message / Project Details *"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="hero-btn">
            Send Inquiry
          </button>

          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </form>
      </section>
    </FadeInSection>
  )
}

export default Contact