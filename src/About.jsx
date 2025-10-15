import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import about_bg from './assets/about_bg.jpeg'
import profileImage from './assets/vijay_photo.jpeg'

const About = () => {
  // Header initials logo text
  const initials = 'VG'

  // Left-side image (you can replace with a local asset path later)
  const aboutImage =
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2069&auto=format&fit=crop'

  return (
    <div className="about">
      {/* Header same as Profile component */}
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
          <Link to="/gallery">GALLEERY</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>
      </header>

      {/* Main About Content */}
      <main
        className="about-body"
        style={{ backgroundImage: `url(${about_bg})` }}
      >
        
        <div className="about-content">
          <div className="about-left">
            <img src={profileImage} alt="About" className="about-image" />
          </div>
          <div className="about-right">
            <h1 className="about-name">VIJAY GOMANACHE</h1>
            <p className="about-description">
            BCA fresher with a strong foundation in computer applications, programming languages, and technical skills. A quick
learner and team player, eager to contribute to an organization's success by leveraging my knowledge and passion for
technology. Motivated to learn and grow, seeking a challenging opportunity to apply my skills and gain practical
experience in the field of computer science.

            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
