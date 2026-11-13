import { useState } from 'react';
import { ArrowUp, Mail, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const [footerNotice, setFooterNotice] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProfileClick = (e, url, network) => {
    if (!url || url === '#' || url.trim() === '') {
      e.preventDefault();
      setFooterNotice(`Your ${network} URL can be configured in src/data/portfolioData.js.`);
      setTimeout(() => setFooterNotice(null), 4000);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="corporate-footer">
      <div className="section-container">
        {footerNotice && (
          <div className="footer-toast-notice" role="status">
            <AlertCircle size={15} />
            <span>{footerNotice}</span>
          </div>
        )}

        <div className="footer-top-row">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-monogram">MGP</div>
            <div>
              <h4 className="footer-name">{personalInfo.name}</h4>
              <p className="footer-sub">{personalInfo.title}</p>
            </div>
          </div>

          {/* Quick Links */}
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="footer-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Profiles & Scroll to Top */}
          <div className="footer-social-group">
            {/* GitHub */}
            <a
              href={personalInfo.github || '#'}
              target={personalInfo.github ? "_blank" : undefined}
              rel={personalInfo.github ? "noopener noreferrer" : undefined}
              className={`footer-icon-btn ${!personalInfo.github ? 'is-placeholder' : ''}`}
              onClick={(e) => handleProfileClick(e, personalInfo.github, 'GitHub')}
              title={personalInfo.github ? "GitHub Profile" : "GitHub: Configurable in portfolioData.js"}
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin || '#'}
              target={personalInfo.linkedin ? "_blank" : undefined}
              rel={personalInfo.linkedin ? "noopener noreferrer" : undefined}
              className={`footer-icon-btn ${!personalInfo.linkedin ? 'is-placeholder' : ''}`}
              onClick={(e) => handleProfileClick(e, personalInfo.linkedin, 'LinkedIn')}
              title={personalInfo.linkedin ? "LinkedIn Profile" : "LinkedIn: Configurable in portfolioData.js"}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>

            {/* Email */}
            <a
              href={personalInfo.emailMailto || `mailto:${personalInfo.email}?subject=${encodeURIComponent(personalInfo.emailSubject || "Professional Opportunity - Manyashree GP")}`}
              className="footer-icon-btn"
              title={`Send email to ${personalInfo.email}`}
              aria-label="Contact Email"
            >
              <Mail size={16} />
            </a>

            {/* Scroll to Top */}
            <button
              className="back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer-tagline">
            Corporate Minimalist Design • Clean Architecture • Vercel Ready
          </p>
        </div>
      </div>
    </footer>
  );
}
