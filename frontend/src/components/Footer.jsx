import { personalInfo } from '../data/personalInfo.js';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {year} {personalInfo.name}. Construido con Spring Boot, PostgreSQL y React.</p>
        <div className="footer__links">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
