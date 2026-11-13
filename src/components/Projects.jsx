import { useState } from 'react';
import { Briefcase, ExternalLink, Eye, Info, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import './Projects.css';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [noticeMessage, setNoticeMessage] = useState(null);

  const filterCategories = ['All', 'Web Application', 'Full Stack Application', 'Agro-Tech'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => 
        p.type.toLowerCase().includes(activeFilter.toLowerCase()) || 
        p.category.toLowerCase().includes(activeFilter.toLowerCase())
      );

  const handleLinkClick = (e, url, type, projectTitle) => {
    e.preventDefault();
    if (!url || url === '#' || url.trim() === '') {
      setNoticeMessage(`The ${type} link for "${projectTitle}" is ready to be configured in src/data/portfolioData.js.`);
      setTimeout(() => setNoticeMessage(null), 5000);
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="portfolio-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-description">
            Showcasing real-world web applications built with modern React, clean architecture, and responsive corporate design.
          </p>
        </div>

        {/* Dynamic Alert Banner for Placeholder URLs */}
        {noticeMessage && (
          <div className="project-toast-banner" role="status">
            <Info size={18} className="toast-icon" />
            <span>{noticeMessage}</span>
          </div>
        )}

        {/* Filter Navigation */}
        <div className="projects-filter-bar">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              className={`p-filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat === 'All' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-cards-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              {/* Card Header */}
              <div className="project-card-header">
                <span className="project-category-badge">{project.category}</span>
                <span className="project-type-chip">{project.type}</span>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-summary">{project.description}</p>

                {/* Key Metric Callout */}
                <div className="project-metric-strip">
                  <Sparkles size={14} className="metric-spark" />
                  <span>{project.metrics}</span>
                </div>

                {/* Technology Badges */}
                <div className="project-tech-badges">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge-pill">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="project-card-footer">
                {/* Specifications Modal Button */}
                <button
                  className="btn btn-primary btn-sm details-action-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  <Eye size={15} />
                  Architecture & Details
                </button>

                {/* GitHub & Live Action Buttons */}
                <div className="project-actions-group">
                  <button
                    className={`btn-github-action ${!project.githubUrl ? 'is-placeholder' : ''}`}
                    onClick={(e) => handleLinkClick(e, project.githubUrl, 'GitHub repository', project.title)}
                    title={project.githubUrl ? `View ${project.title} on GitHub` : "GitHub link configurable in portfolioData.js"}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </button>

                  <button
                    className="icon-action-btn"
                    onClick={(e) => handleLinkClick(e, project.demoUrl, 'Live Demo', project.title)}
                    title={project.demoUrl ? "Open Live Demo" : "Live Demo link configurable in portfolioData.js"}
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Project Modal Specifications Inspector */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
