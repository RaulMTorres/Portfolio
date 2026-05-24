import { useEffect, useState } from 'react';
import { personalInfo } from '../data/personalInfo.js';
import './Hero.css';

export default function Hero() {

  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const handler = () => setAnimationKey(k => k + 1);
    window.addEventListener('themechange', handler);
    return () => window.removeEventListener('themechange', handler);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container hero__content">
        <p className="hero__greeting">Hola, soy</p>
        <h1 key={animationKey} className="hero__name">{personalInfo.name}</h1>
        <h2 className="hero__role">{personalInfo.role}</h2>
        <p className="hero__intro">
          Apasionado por construir aplicaciones web limpias y útiles.
          Especializado en Java/Spring Boot y React.
        </p>

        <div className="hero__buttons">
          <a href="#projects" className="btn btn--primary">Ver proyectos</a>
          <a href="#contact" className="btn btn--outline">Contactar</a>
          <a
            href={personalInfo.cvUrl}
            download="CV-Raul-Martinez-Torres.pdf"
            className="btn btn--ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
