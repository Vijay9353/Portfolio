import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import profileVideo from './assets/profile_bg.mp4'
import profileImage from './assets/vijay_photo.jpeg'

const Profile = () => {
  // External placeholder assets. Replace with your local images if desired.
  const initials = 'VG'

  const contactEmail = 'g.vijay9353@gmail.com'
  // TODO: replace with your actual profiles
  const linkedinUrl = 'www.linkedin.com/in/vijay-gomanache-58926b26b'
  const githubUrl = 'https://github.com/your-username'

  // Social icons (external SVGs) and links
  const icons = {
    // Official colored logos
    email: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png',
    linkedin: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    github: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg',
    instagram: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/instagram.svg',
    download: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M5 20h14v-2H5v2zm7-18l-5.5 5.5 1.42 1.42L11 7.83V16h2V7.83l3.08 3.09 1.42-1.42L12 2z"/></svg>'
  }

  // Replace with your actual resume image path (e.g., from public/ or src/assets/)
  const resumeImageUrl =
    'https://drive.google.com/file/d/19Md2suk7ddOHBHQhBIIZ37po-byqtZNA/view?usp=sharing'

  return (
    <div className="profile">
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

      {/* Background Video */}
      <div className="profile-video-wrap" aria-hidden="true">
        <video className="profile-video" src={profileVideo} autoPlay loop muted playsInline />
        <div className="profile-video-overlay" />
      </div>

      <main className="profile-body" id="home">
        <div className="center-content">
          <img src={profileImage} alt="Profile" className="profile-avatar" />
          <h1 className="profile-name">VIJAY GOMANACHE</h1>
          <a href={`mailto:${contactEmail}`} className="profile-email">{contactEmail}</a>
          <div className="profile-social-inline">
            
          </div>
        </div>
      </main>

      <footer className="profile-footer">
        <div className="socials">
          <a className="email" href={`mailto:${contactEmail}`} aria-label="Email" title="Email">
            <img src={icons.email} alt="email" />
          </a>

          <a href="https://www.linkedin.com/in/vijay-gomanache-58926b26b/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <img src={icons.linkedin} alt="linkedin" />
            </a>
          <a className="github" href="https://github.com/Vijay9353" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
            <img src={icons.github} alt="github" />
          </a>
          <a className="instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
            <img src={icons.instagram} alt="instagram" />
          </a>
          <a className="download" href={resumeImageUrl} download="Vijay_Gomanache_Resume.png" target="_blank" rel="noreferrer" aria-label="Download Resume" title="Download Resume">
            <img src={icons.download} alt="download resume" />
          </a>
        </div>
        <p> {new Date().getFullYear()} Vijay Gomanache</p>
      </footer>
    </div>
  )
}

export default Profile
