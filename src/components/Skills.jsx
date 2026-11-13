import { useState } from 'react';
import { Cpu, Code, Server, Database, Terminal, Layers } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import './Skills.css';

const categoryIcons = {
  "Frontend Development": <Code size={20} />,
  "Backend & System Integration": <Server size={20} />,
  "Databases, Tools & Platforms": <Database size={20} />,
  "Core Engineering & Methodologies": <Terminal size={20} />
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.categories.map(c => c.name)];

  const filteredCategories = selectedCategory === 'All' 
    ? skillsData.categories 
    : skillsData.categories.filter(c => c.name === selectedCategory);

  return (
    <section id="skills" className="portfolio-section alt-bg">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Technical Skills & Proficiencies</h2>
          <p className="section-description">
            Organized across frontend development, system integration, developer tooling, and core computer science methodologies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'All' ? 'All Competencies' : cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="skills-categories-grid">
          {filteredCategories.map((category) => (
            <div key={category.name} className="category-card">
              <div className="category-header">
                <div className="category-icon-wrapper">
                  {categoryIcons[category.name] || <Layers size={20} />}
                </div>
                <div className="category-meta">
                  <h3 className="category-title">{category.name}</h3>
                  <p className="category-desc">{category.description}</p>
                </div>
                <span className="category-count">{category.skills.length} Skills</span>
              </div>

              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-meta-tags">
                        <span className="skill-badge">{skill.level}</span>
                        <span className="skill-percent">{skill.proficiency}%</span>
                      </div>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
