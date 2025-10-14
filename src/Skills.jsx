import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import skills_bg from './assets/skills_bg.jpeg'

const Skills = () => {
  const initials = 'VG'

  // Catalog of skills with external logo URLs (you can swap with local assets anytime)
  const programming = [
    { name: 'C', logo: 'https://cdn.simpleicons.org/c/A8B9CC' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'PHP', logo: 'https://cdn.simpleicons.org/php/777BB4' },
    { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'SQL', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
  ]

  const frameworks = [
    { name: 'HTML5', logo: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Git', logo: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/FFFFFF' },
    { name: 'Redux', logo: 'https://cdn.simpleicons.org/redux/764ABC' },
  ]

  return (
    <div className="skills-page">
      {/* Header same as Profile */}
      <header className="profile-header">
        <div className="logo-left">
          <div className="initials-logo" aria-label="VG logo">{initials}</div>
        </div>
        <nav className="profile-nav">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/skills">SKILLS</Link>
          <Link to="/project">PROJECTS</Link>
          <Link to="/gallery">GALLEERY</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>
      </header>

      {/* Content below header with background */}
      <div className="skills-wrap" style={{ backgroundImage: `url(${skills_bg})` }}>
      {/* Hero Heading */}
      <section className="skills-hero">
        <h1 className="skills-title">MY SKILLS</h1>
        <p className="skills-subtitle">
          Technologies and tools I work with to create amazing digital experiences
        </p>
      </section>

      {/* Skills Grid */}
      <main className="skills-body">
        <div className="skills-section">
          <h2 className="skills-section-title">Programming Languages</h2>
          <div className="skills-grid">
            {programming.map((item) => (
              <div className="skill-card" key={item.name} title={item.name}>
                <div className="skill-card-inner">
                  <div className="skill-logo-wrap">
                    <img src={item.logo} alt={item.name} className="skill-logo" />
                  </div>
                  <div className="skill-name">{item.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h2 className="skills-section-title">Frameworks & Technologies</h2>
          <div className="skills-grid">
            {frameworks.map((item) => (
              <div className="skill-card" key={item.name} title={item.name}>
                <div className="skill-card-inner">
                  <div className="skill-logo-wrap">
                    <img src={item.logo} alt={item.name} className="skill-logo" />
                  </div>
                  <div className="skill-name">{item.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      </div>
    </div>
  )
}

export default Skills
