import { personalInfo } from '../data/personalInfo.js';
import './About.css';

function parseBold(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Sobre mí</h2>
        <div className="about__grid">
          <div className="about__text">
            <div className="about__intro">
              {personalInfo.photoUrl && (
                <img
                  src={personalInfo.photoUrl}
                  alt={`Retrato de ${personalInfo.name}`}
                  className="about__photo"
                />
              )}
              <div>
                {personalInfo.about.split('\n\n').map((p, i) => (
                  <p key={i}>{parseBold(p)}</p>
                ))}
              </div>
            </div>
          </div>

          <aside className="about__sidebar">
            <div className="info-card">
              <h3>Idiomas</h3>
              <ul>
                {personalInfo.languages.map(lang => (
                  <li key={lang.name}>
                    <span>{lang.name}</span>
                    <strong>{lang.level}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="info-card">
              <h3>Certificaciones</h3>
              <ul className="cert-list">
                {personalInfo.certifications.map((c, i) => (
                  <li key={i}>{parseBold(c)}
                  <span>{c.name}</span>
                  <strong>{c.level}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
