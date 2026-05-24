import { useEffect } from 'react';
import { getSkillIcon } from '../utils/skillIcons.js';

export default function SkillsModal({ skills, onClose }) {
  const byCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryOrder = ['Backend', 'Bases de datos', 'Frontend', 'Herramientas'];
  const categories = categoryOrder.filter(c => byCategory[c]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="skills-modal__overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Lista completa de tecnologías"
    >
      <div className="skills-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="skills-modal__close"
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
        
        <div className="skills-modal__sections">
          {categories.map(category => (
            <section key={category} className="skills-modal__section">
              <h4>{category}</h4>
              <ul className="skills-modal__row">
                {byCategory[category].map(skill => {
                  const iconUrl = getSkillIcon(skill.name);
                  return (
                    <li key={skill.id} className="skills-modal__item">
                      {iconUrl && (
                        <img
                          src={iconUrl}
                          alt=""
                          className="skills-modal__icon"
                          loading="lazy"
                        />
                      )}
                      <span className="skills-modal__item-name">{skill.name}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
