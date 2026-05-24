import { experiences } from '../data/portfolioData.js';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experiencia</h2>

        <ol className="timeline">
          {experiences.map(exp => (
            <li key={exp.id} className="timeline__item">
              <div className="timeline__marker" />
              <div className="timeline__content">
                <span className="timeline__period">{exp.period}</span>
                <h3>{exp.role}</h3>
                <p className="timeline__company">
                  {exp.company}{exp.location ? ` · ${exp.location}` : ''}
                </p>
                <p className="timeline__desc">{exp.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
