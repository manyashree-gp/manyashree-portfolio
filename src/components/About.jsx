import { Code2, Zap, Layout, Users, Award, Compass, Layers, Trophy } from 'lucide-react';
import { aboutData } from '../data/portfolioData';
import './About.css';

const pillarIcons = {
  Code2: <Code2 size={24} />,
  Trophy: <Trophy size={24} />,
  Zap: <Zap size={24} />,
  Layout: <Layout size={24} />,
  Users: <Users size={24} />
};

export default function About() {
  return (
    <section id="about" className="portfolio-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Compass size={14} />
            <span>Profile & Methodology</span>
          </div>
          <h2 className="section-title">{aboutData.heading}</h2>
          <p className="section-description">
            A comprehensive look at my engineering principles, professional focus, and approach to software development.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="about-grid">
          {/* Left Column: Narrative & Stats */}
          <div className="about-narrative">
            <h3 className="narrative-heading">
              Engineering Modern Web Solutions with Purpose
            </h3>
            
            <div className="narrative-paragraphs">
              {aboutData.paragraphs.map((p, idx) => (
                <p key={idx} className="about-text-paragraph">{p}</p>
              ))}
            </div>

            {/* Corporate Stats Strip */}
            <div className="about-stats-grid">
              {aboutData.stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Pillars of Excellence */}
          <div className="about-pillars">
            <div className="pillars-header">
              <Layers size={18} className="pillars-icon" />
              <h4>Core Engineering Principles</h4>
            </div>

            <div className="pillars-cards">
              {aboutData.pillars.map((pillar, idx) => (
                <div key={idx} className="pillar-card">
                  <div className="pillar-icon-box">
                    {pillarIcons[pillar.icon] || <Award size={24} />}
                  </div>
                  <div className="pillar-content">
                    <h5 className="pillar-title">{pillar.title}</h5>
                    <p className="pillar-desc">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
