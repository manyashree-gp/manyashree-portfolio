import { Award, Trophy, CheckCircle, GraduationCap, Users, Star } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';
import './Achievements.css';

const achievementCategoryIcons = {
  "Leadership & National Innovation": <Trophy size={24} className="icon-trophy" />,
  "Academic Excellence": <GraduationCap size={24} />,
  "Technical Certification": <Award size={24} />,
  "Leadership & Community": <Users size={24} />
};

export default function Achievements() {
  return (
    <section id="achievements" className="portfolio-section alt-bg">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Trophy size={14} />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="section-title">Achievements & Leadership</h2>
          <p className="section-description">
            Recognitions across national hackathons, technical leadership, academic excellence, and developer community contributions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className={`achievement-card ${item.featured ? 'is-featured' : ''}`}
            >
              {/* Top Row */}
              <div className="achievement-top">
                <div className="achievement-icon-wrapper">
                  {achievementCategoryIcons[item.category] || <Award size={24} />}
                </div>

                <div className="badge-wrapper">
                  {item.featured && (
                    <span className="featured-star-pill">
                      <Star size={12} fill="#d97706" color="#d97706" />
                      Featured
                    </span>
                  )}
                  <div className="achievement-badge-pill">{item.badge}</div>
                </div>
              </div>

              {/* Card Main */}
              <div className="achievement-main">
                <span className="achievement-category">{item.category}</span>
                <h3 className="achievement-title">{item.title}</h3>
                
                <div className="achievement-meta">
                  <span className="achievement-issuer">{item.issuer}</span>
                  <span className="meta-separator">•</span>
                  <span className="achievement-date">{item.date}</span>
                </div>

                <p className="achievement-desc">{item.description}</p>

                <div className="achievement-highlights">
                  {item.highlights.map((point, idx) => (
                    <div key={idx} className="highlight-point">
                      <CheckCircle size={15} className="highlight-icon" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
