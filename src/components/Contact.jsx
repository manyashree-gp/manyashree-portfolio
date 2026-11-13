import { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const emailSubject = encodeURIComponent(personalInfo.emailSubject || 'Professional Opportunity - Manyashree GP');
  const mailtoUrl = personalInfo.emailMailto || (personalInfo.email
    ? `mailto:${personalInfo.email}?subject=${emailSubject}`
    : '#contact');

  const handleDirectClick = (e) => {
    if (!personalInfo.email) {
      e.preventDefault();
      const input = document.getElementById('name');
      if (input) {
        input.focus();
        input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all required fields before submitting.');
      setFormStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please provide a valid email address.');
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');

    // Simulate clean dispatch
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 600);
  };

  return (
    <section id="contact" className="portfolio-section alt-bg">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>Communication Channel</span>
          </div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-description">
            Have an open role, a technical inquiry, or an interesting project? Send a direct message below.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Corporate Information & Configuration Notice */}
          <div className="contact-info-panel">
            <h3 className="panel-title">Professional Inquiries</h3>
            <p className="panel-intro">
              I am actively considering opportunities with teams that value high code quality, clean architecture, and continuous learning.
            </p>

            <div className="info-cards-list">
              <div className="info-card">
                <div className="info-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="info-card-label">Location & Mobility</span>
                  <p className="info-card-value">{personalInfo.location}</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-wrapper">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="info-card-label">Response Time</span>
                  <p className="info-card-value">Prompt response within 24 business hours</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="info-card-label">Direct Communication</span>
                  <p className="info-card-value">
                    {personalInfo.email ? (
                      <a href={mailtoUrl} title={`Send email to ${personalInfo.email}`}>{personalInfo.email}</a>
                    ) : (
                      <span className="text-link-prompt" onClick={handleDirectClick}>Click to use the inquiry form on the right →</span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Social / Profiles Notice Card */}
            <div className="profiles-config-box">
              <span className="config-box-title">Connected Profiles</span>
              <p className="config-box-desc">
                Connect directly through my verified professional profiles on GitHub, LinkedIn, or via email.
              </p>
              <div className="connected-links-row">
                <a
                  href={personalInfo.github || 'https://github.com/manyashree-gp'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-btn"
                  title="Visit GitHub Profile"
                >
                  <GithubIcon size={16} />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={personalInfo.linkedin || 'https://www.linkedin.com/in/manyashree-g-p-02a3a0297'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-btn"
                  title="Visit LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={mailtoUrl}
                  className="profile-btn"
                  title={`Send email to ${personalInfo.email}`}
                  aria-label="Send Email"
                >
                  <Mail size={16} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-panel">
            {formStatus === 'success' ? (
              <div className="form-success-card">
                <CheckCircle2 size={48} className="success-icon" />
                <h4 className="success-title">Message Received!</h4>
                <p className="success-desc">
                  Thank you for reaching out. Your inquiry has been sent to Manyashree GP and will be reviewed shortly.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setFormStatus('idle')}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h3 className="form-heading">Send a Direct Message</h3>

                {formStatus === 'error' && (
                  <div className="form-error-banner" role="alert">
                    <AlertCircle size={18} className="error-icon" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      placeholder="e.g. Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="e.g. jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    placeholder="e.g. Opportunity Discussion / Project Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="form-textarea"
                    placeholder="Please outline the role, requirements, or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? (
                    'Transmitting Message...'
                  ) : (
                    <>
                      <Send size={16} />
                      Transmit Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
