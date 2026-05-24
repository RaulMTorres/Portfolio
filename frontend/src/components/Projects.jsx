import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/portfolioData.js';
import ProjectModal from './ProjectModal.jsx';
import './Projects.css';

export default function Projects() {
  const scrollerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      setCanScrollLeft(el.scrollLeft > 8);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
    };

    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scrollByCards = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector('.project-card');
    const cardWidth = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  };

  return (
    <>
      <section id="projects" className="projects">
        <div className="container">
          <h2>Proyectos</h2>

          <div className="projects__carousel">
            <div className="projects__grid" ref={scrollerRef}>
              {projects.map(p => (
                <article
                  key={p.id}
                  className="project-card"
                  onClick={() => setSelectedProject(p)}
                  style={{ cursor: 'pointer' }}
                >
                  <h3>{p.title}</h3>
                  <p className="project-card__desc">{p.description}</p>

                  <ul className="project-card__tags">
                    {p.technologies.split(',').map(t => (
                      <li key={t.trim()}>{t.trim()}</li>
                    ))}
                  </ul>

                  <div className="project-card__links">
                    {p.repoUrl && (
                      <a
                        href={p.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                      >
                        Código →
                      </a>
                    )}
                    {p.repoUrl2 && (
                      <a
                        href={p.repoUrl2}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                      >
                        Código Back →
                      </a>
                    )}
                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                      >
                        Demo →
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
