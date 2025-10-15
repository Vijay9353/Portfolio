import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.png'
import project4 from './assets/project4.png'
import project5 from './assets/project5.png'

// Optional: use local images as preview backgrounds (fallback to gradients if not found)


const Project = () => {
  const initials = 'VG'

  const projects = [
    {
      key: 'result-analysis',
      name: 'Result Analysis System',
      preview: project1,
      stack: ['Html', 'Bootstrap', 'MySql','Php','js'],
      demo: '#',
      repo: '#',
    },
    {
      key: 'netflix',
      name: 'Netflix GPT',
      preview: project2,
      stack: ['React', 'TMDB API', 'Firebase','jsx','Tailwind','Gemini API','Redux'],
      demo: '#',
      repo: 'https://github.com/Vijay9353/netflix-GPT',
    },
    {
      key: 'Cars Hub',
      name: 'Cars Hub',
      preview: project3,
      stack: ['Html', 'css', 'javascript'],
      demo: '#',
      repo: '#',
    },
    {
      key: 'tictactoe',
      name: 'Tic Tac Toe',
      preview: project4,
      stack: ['Html', 'css', 'javascript'],
      demo: '#',
      repo: '#',
    },
    {
      key: 'Portfolio',
      name: 'Portfolio',
      preview: project5,
      stack: ['Html', 'css', 'javascript','React','Redux'],
      demo: '#',
      repo: '#',
    },
  ]

  return (
    <div className="projects-page">
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

      <section className="projects-hero">
        <h1 className="projects-title">PROJECTS</h1>
        <p className="projects-subtitle">Some of my featured work and practice builds</p>
      </section>

      <main className="projects-body">
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.key}>
              <div
                className="project-preview"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.5)), url(${p.preview})` }}
                aria-label={`${p.name} home page preview`}
              >
                <div className="project-preview-bar">
                  {/* <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" /> */}
                </div>
                <div className="project-home">
                  <div className="project-home-title">{p.name}</div>
                  <div className="project-home-cta">Get Started ▸</div>
                </div>
              </div>
              <div className="project-meta">
                <div className="project-name">{p.name}</div>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span className="stack-pill" key={s}>{s}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a className="btn-secondary" href={p.demo} target="_blank" rel="noreferrer">View Demo</a>
                  <a className="btn-secondary" href={p.repo} target="_blank" rel="noreferrer">View Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Project
