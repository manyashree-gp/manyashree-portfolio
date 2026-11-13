import { useEffect } from 'react';
import { X, CheckCircle2, Layers, Cpu, TrendingUp, Info } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="project-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="project-modal-header">
          <div className="modal-header-info">
            <span className="modal-category-badge">{project.category}</span>
            <h3 className="modal-title">{project.title}</h3>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close details">
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="project-modal-body">
          {/* Overview */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Info size={18} className="modal-icon" />
              Project Overview
            </h4>
            <p className="modal-text">{project.description}</p>
          </div>

          {/* Problem vs Solution */}
          <div className="problem-solution-grid">
            <div className="ps-box challenge-box">
              <span className="ps-label">The Challenge</span>
              <p className="ps-text">{project.challenge}</p>
            </div>
            <div className="ps-box solution-box">
              <span className="ps-label">The Engineering Solution</span>
              <p className="ps-text">{project.solution}</p>
            </div>
          </div>

          {/* Key Architectural Features */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Layers size={18} className="modal-icon" />
              Key Features & Architectural Highlights
            </h4>
            <ul className="modal-features-list">
              {project.features.map((feature, idx) => (
                <li key={idx} className="modal-feature-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Cpu size={18} className="modal-icon" />
              Technology Stack
            </h4>
            <div className="modal-tech-stack">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          {/* Key Metric / Impact */}
          {project.metrics && (
            <div className="modal-metric-card">
              <TrendingUp size={20} className="metric-icon" />
              <div>
                <span className="metric-title">Performance & Impact</span>
                <p className="metric-desc">{project.metrics}</p>
              </div>
            </div>
          )}

          {/* Repository & Demo Note */}
          <div className="modal-config-notice">
            <Info size={16} />
            <span>
              Repository and deployment links can be customized anytime in <code>src/data/portfolioData.js</code>.
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="project-modal-footer">
          <button className="btn btn-primary" onClick={onClose}>
            Close Specifications
          </button>
        </div>
      </div>
    </div>
  );
}
