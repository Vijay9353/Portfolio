import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import contact_bg from './assets/contact_bg.jpeg'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(null)
  const initials = 'VG'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const info = {
    location: 'Belgaum, Karnataka',
    email: 'g.vijay9353@gmail.com',
    phone: '+91 9353999418',
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert('Please fill in your name, email, and message.')
      return
    }
    // Save latest message to show under Contact Information > Email
    setSubmitted({ ...form, date: new Date().toISOString() })

    // Try to send directly via EmailJS REST API if env configuration is present
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const templateParams = {
      to_email: info.email,
      from_name: form.name,
      reply_to: form.email,
      message: form.message,
    }

    let sent = false
    if (serviceId && templateId && publicKey) {
      try {
        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey, // public key
            template_params: templateParams,
          }),
        })
        if (!res.ok) throw new Error(`EmailJS error: ${res.status}`)
        sent = true
        alert('Message sent successfully!')
      } catch (err) {
        console.error(err)
        // fall back to mailto below
      }
    }

    if (!sent) {
      // Fallback: open default mail client addressed to Contact Information email
      const subject = `New message from ${form.name || 'Visitor'}`
      const body = `${form.message}\n\nFrom: ${form.name || ''} <${form.email || ''}>`
      const mailto = `mailto:${encodeURIComponent(info.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailto
    }

    // Clear form
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="contact-page">
      {/* Header (same structure as other pages) */}
      <header className="profile-header">
        <div className="logo-left">
          <div className="initials-logo" aria-label="VG logo">{initials}</div>
        </div>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="hamburger" aria-label="Open navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <nav className="profile-nav">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/skills">SKILLS</Link>
          <Link to="/project">PROJECTS</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>
      </header>
      {/* Background for full component below header */}
      <div className="contact-wrap" style={{ backgroundImage: `url(${contact_bg})` }}>
        <div className="contact-hero">
          <h1 className="contact-title">Contact</h1>
          <p className="contact-subtitle">Have a project in mind or want to chat? Reach out using the form below.</p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Information */}
          <section className="contact-card">
            <h2 className="contact-card-title">Contact Information</h2>

            <div className="contact-item">
              <div className="contact-item-icon" aria-hidden>📍</div>
              <div className="contact-item-body">
                <div className="contact-item-label">Location</div>
                <div className="contact-item-value">{info.location}</div>
              </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon" aria-hidden>✉️</div>
            <div className="contact-item-body">
              <div className="contact-item-label">Email</div>
              <div className="contact-item-value">
                <a href={`mailto:${info.email}`} className="contact-link">{info.email}</a>
              </div>
              {submitted?.message && (
                <div className="contact-latest-msg">
                  <div className="contact-latest-msg-label">Latest message:</div>
                  <div className="contact-latest-msg-meta">
                    <span className="meta-name">{submitted.name}</span>
                    <span className="meta-sep">•</span>
                    <span className="meta-email">{submitted.email}</span>
                  </div>
                  <p className="contact-latest-msg-text">{submitted.message}</p>
                </div>
              )}
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon" aria-hidden>📞</div>
            <div className="contact-item-body">
              <div className="contact-item-label">Phone</div>
              <div className="contact-item-value">{info.phone}</div>
            </div>
          </div>
        </section>

        {/* Right: Send Me a Message */}
        <section className="contact-card">
          <h2 className="contact-card-title">Send Me a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="input"
                autoComplete="name"
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="input"
                autoComplete="email"
              />
            </div>
            <div className="form-row">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                className="textarea"
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn-primary">Send Message</button>
              <a
                className="btn-secondary"
                href={`mailto:${info.email}?subject=${encodeURIComponent('New message from ' + (form.name || 'Visitor'))}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + (form.name || '') + ' <' + (form.email || '') + '>')}`}
              >
                Send via Email App
              </a>
            </div>
          </form>
        </section>
      </div>
      </div>
    </div>
  )
}

export default Contact