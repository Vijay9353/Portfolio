import React, { useRef, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import image5 from './assets/image5.jpg'
import image6 from './assets/image6.jpg'
import image7 from './assets/image7.jpg'
import image8 from './assets/image8.jpg'
import bg_video from './assets/bg_video.mp4'

const Gallery = () => {
  const initials = 'VG'

  // Background music player (user-initiated to comply with autoplay policies)
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const musicSrc = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Ignore play errors (e.g., if the browser blocks autoplay without user gesture)
        })
    }
  }

  // Eight achievement images. Replace URLs with your own images.
  const achievements = [
    {
      title: 'Subject Topper',
      url: image1,
    },
    {
      title: 'Sports',
      url: image2,
    },
    {
      title: 'Coding Event',
      url: image3,
    },
    {
      title: 'Winner',
      url: image4,
    },
    {
      title: 'Valunteering',
      url: image5,
    },
    {
      title: 'Award Ceremony',
      url: image6,
    },
    {
      title: 'Team Milestone',
      url: image7,
    },
    {
      title: 'Graduation',        
      url: image8,                  
    },
  ]

  // Mouse-based 3D tilt interaction
  const handleMouseMove = (e) => {
    const inner = e.currentTarget.querySelector('.gallery-card-inner')
    if (!inner) return
    const rect = inner.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    const rotateX = ((y - midY) / midY) * -10 // invert for natural tilt
    const rotateY = ((x - midX) / midX) * 10
    inner.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`
    inner.style.boxShadow = '0 22px 48px rgba(0,0,0,0.6)'
  }

  const handleMouseLeave = (e) => {
    const inner = e.currentTarget.querySelector('.gallery-card-inner')
    if (!inner) return
    inner.style.transform = 'rotateX(0) rotateY(0) translateY(0)'
    inner.style.boxShadow = '0 12px 28px rgba(0,0,0,0.45)'
  }

  return (
    <div className="gallery-page">
      {/* Background Music (user-initiated) */}
      <audio ref={audioRef} src={musicSrc} loop preload="none" />
      <button
        type="button"
        className="audio-fab"
        onClick={toggleMusic}
        aria-pressed={isPlaying}
        title={isPlaying ? 'Pause background music' : 'Play background music'}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>
      {/* Header same as Profile */}
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

      {/* Background Video */}
      <div className="gallery-video-wrap" aria-hidden="true">
        <video className="gallery-video" src={bg_video} autoPlay loop playsInline controls />
        <div className="gallery-video-overlay" />
      </div>

      {/* 3D Image Grid overlay */}
      <main className="gallery-body">
        <h2 className="gallery-section-title">ACHIEVEMENTS</h2>
        <div className="gallery-grid">
          {achievements.map((item) => (
            <div
              className="gallery-card"
              key={item.title}
              title={item.title}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="gallery-card-inner">
                <img src={item.url} alt={item.title} className="gallery-img" />
                <div className="gallery-caption">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Gallery
