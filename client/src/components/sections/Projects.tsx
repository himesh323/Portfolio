import { Window } from '@/components/ui/Window';
import { projects } from '@/data/portfolio';

export function Projects() {
  return (
    <section id="projects">
      <Window title="PROJECTS.exe">
        <div className="eyebrow">★ PROJECTS</div>
        <h2>Stuff I've built</h2>

        <div>
          {projects.map((p, index) => (
            <div key={index} className="project-card">
              <div className="project-inner">
                <div className="project-thumb">{p.icon}</div>
                <div>
                  <h3>{p.name}</h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--ink-soft)', maxWidth: '60ch' }}>
                    {p.description}
                  </p>
                  <div className="project-meta">
                    {p.tags.map((t, tIndex) => (
                      <span key={tIndex} className={`tag ${p.tagColor === 'purple' ? 'p' : p.tagColor === 'teal' ? 't' : ''}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a href={p.githubUrl} className="btn small alt" target="_blank" rel="noopener noreferrer">
                      🐙 CODE
                    </a>
                    <a href={p.liveUrl} className="btn small" target="_blank" rel="noopener noreferrer">
                      ▶ LIVE DEMO
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Window>
    </section>
  );
}
