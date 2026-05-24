import { useEffect, useState } from 'react';
import { getSkillIcon } from '../utils/skillIcons.js';


export default function ProjectModal({ project, onClose }) {

  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  const techs = project.technologies
    .split(',')
    .map(t => t.trim())
    .filter(Boolean);

  return (
    <div
      className="project-modal__overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle del proyecto ${project.title}`}
    >
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="project-modal__close"
          aria-label="Cerrar"
          onClick={onClose}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="project-modal__media">
          {project.imageUrl && !imageError ? (
            <img
              src={project.imageUrl}
              alt={`Captura de ${project.title}`}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="project-modal__placeholder">
              <span>{project.title.split(' ').map(w => w[0]).slice(0, 3).join('')}</span>
            </div>
          )}
        </div>

        <div className="project-modal__body">
          <h3 className="project-modal__title">{project.title}</h3>

          <p className="project-modal__description">{project.description}</p>

          <h4 className="project-modal__subtitle">Tecnologías usadas</h4>
          <ul className="project-modal__techs">
            {techs.map(tech => {
              const iconUrl = getSkillIcon(tech);
              return (
                <li key={tech}>
                  {iconUrl && (
                    <img
                      src={iconUrl}
                      alt=""
                      className="project-modal__tech-icon"
                      loading="lazy"
                    />
                  )}
                  {tech}
                </li>
              );
            })}
          </ul>

          <div className="project-modal__actions">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.35.78 1.05.78 2.12v3.14c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                </svg>
                Ver código en GitHub
              </a>
            )}

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="6 3 20 12 6 21 6 3" fill="currentColor" />
                </svg>
                Lanzar proyecto
              </a>
            ) : (
              <button type="button" className="btn btn--primary" disabled title="Demo no disponible">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="6 3 20 12 6 21 6 3" fill="currentColor" />
                </svg>
                Demo no disponible
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
