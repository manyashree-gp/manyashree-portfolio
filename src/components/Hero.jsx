import { useState } from 'react';
import { ArrowDown, FileText, Send, Trophy, CheckCircle2, ShieldCheck, Camera, Sparkles, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const emailSubject = encodeURIComponent(personalInfo.emailSubject || 'Professional Opportunity - Manyashree GP');
  const mailtoUrl = personalInfo.emailMailto || (personalInfo.email 
    ? `mailto:${personalInfo.email}?subject=${emailSubject}`
    : '#contact');

  return (
    <section id="home" className="hero-section">
      <div className="section-container">
        <div className="hero-grid">
          {/* Left Column: Natural & Personal Introduction */}
          <div className="hero-content">
            {/* Badges Row - KEEP SIH 2025 Team Leader badge beside introduction */}
            <div className="hero-badges-row">
              <div className="hero-status-pill">
                <span className="status-indicator-dot" />
                <span className="status-text">{personalInfo.status}</span>
              </div>

              <div className="hero-sih-badge" title="National Innovation & Leadership Award">
                <Trophy size={14} className="sih-icon" />
                <span>SIH 2025 Team Leader</span>
              </div>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="navy-accent-text">{personalInfo.name}</span>
            </h1>

            <h2 className="hero-role">
              {personalInfo.title}
            </h2>

            <p className="hero-bio">
              {personalInfo.naturalBio}
            </p>

            {/* CTAs */}
            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
                type="button"
              >
                Explore Projects
                <ArrowDown size={16} />
              </button>
              
              <button
                className="btn btn-outline"
                onClick={() => scrollToSection('resume')}
                type="button"
              >
                <FileText size={16} />
                View Resume
              </button>

              <button
                className="btn btn-outline"
                onClick={() => scrollToSection('contact')}
                type="button"
              >
                <Send size={16} />
                Get in Touch
              </button>
            </div>

            {/* Connected Profiles Quick Row with fully functional Email mailto */}
            <div className="hero-social-row">
              <span className="social-row-label">Connect:</span>
              
              {/* GitHub Link */}
              <a
                href={personalInfo.github || 'https://github.com/manyashree-gp'}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                title="Visit GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>

              {/* LinkedIn Link */}
              <a
                href={personalInfo.linkedin || 'https://www.linkedin.com/in/manyashree-g-p-02a3a0297'}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                title="Visit LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>

              {/* Direct Email Link with pre-filled subject */}
              <a
                href={mailtoUrl}
                className="hero-social-btn"
                title={`Send email to ${personalInfo.email}`}
                aria-label="Send Email"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>

            {/* Signals Strip */}
            <div className="hero-signals">
              <div className="signal-item">
                <Trophy size={16} className="signal-icon gold" />
                <span>Smart India Hackathon 2025 Team Leader</span>
              </div>
              <div className="signal-item">
                <CheckCircle2 size={16} className="signal-icon" />
                <span>Modern React & JavaScript ES6+</span>
              </div>
              <div className="signal-item">
                <ShieldCheck size={16} className="signal-icon" />
                <span>Clean & Testable Architecture</span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Circular Profile Photo Container */}
          <div className="hero-visual">
            <div className="profile-circular-wrapper">
              {/* Circular Cropped Photo Container - SIH badge removed from photo as requested */}
              <div className="profile-circle-frame">
                {!imageError ? (
                  <img
                    src={personalInfo.profileImage || "/images/profile.jpg"}
                    alt={personalInfo.name}
                    className="profile-circle-img"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  /* Clean Fallback Placeholder when image is missing */
                  <div className="profile-circle-placeholder" title="Place your photo at public/images/profile.jpg">
                    <div className="placeholder-monogram">MGP</div>
                    <span className="placeholder-name">{personalInfo.name}</span>
                    <span className="placeholder-tag">Software Engineer</span>
                    <div className="placeholder-hint">
                      <Camera size={13} />
                      <span>Add photo in <code>public/images/profile.jpg</code></span>
                    </div>
                  </div>
                )}

                {/* Floating Bottom Badge: Ready for Opportunities */}
                <div className="photo-floating-pill bottom-left">
                  <span className="live-dot" />
                  <span>Open to Roles</span>
                </div>
              </div>

              {/* Identity Details Card under Circular Photo */}
              <div className="profile-details-card">
                <div className="details-header">
                  <h3 className="details-name">{personalInfo.name}</h3>
                  <span className="details-role">{personalInfo.title}</span>
                </div>

                <div className="details-status-row">
                  <span className="details-location">Bangalore, India</span>
                  <span className="details-badge">Verified Profile</span>
                </div>
              </div>
            </div>

            {/* Corporate Metric Pill */}
            <div className="hero-highlight-pill">
              <Sparkles size={16} className="highlight-spark-icon" />
              <span>Full-Stack Development • Responsive UI • Collaborative Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
