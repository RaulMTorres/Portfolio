import { useState } from 'react';
import { skills } from '../data/portfolioData.js';
import { getSkillIcon } from '../utils/skillIcons.js';
import SkillsModal from './SkillsModal.jsx';
import './Skills.css';

export default function Skills() {
  const [modalOpen, setModalOpen] = useState(false);

  const rows = [[], [], []];
  skills.forEach((s, i) => rows[i % 3].push(s));

  const directions = ['right', 'left', 'right'];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Tecnologías</h2>
        <p className="skills__intro">
        </p>

        <div className="marquees">
          {rows.map((row, idx) =>
            row.length > 0 ? (
              <MarqueeRow
                key={idx}
                skills={row}
                direction={directions[idx]}
                onChipClick={() => setModalOpen(true)}
              />
            ) : null
          )}
        </div>
      </div>

      {modalOpen && (
        <SkillsModal
          skills={skills}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
}

function MarqueeRow({ skills, direction, onChipClick }) {
  const items = [...skills, ...skills, ...skills];
  return (
    <div className={`marquee marquee--${direction}`}>
      <div className="marquee__track">
        {items.map((skill, i) => (
          <SkillChip key={`${skill.id}-${i}`} skill={skill} onClick={onChipClick} />
        ))}
      </div>
    </div>
  );
}

function SkillChip({ skill, onClick }) {
  const iconUrl = getSkillIcon(skill.name);
  return (
    <button type="button" className="skill-chip" onClick={onClick}>
      {iconUrl && (
        <img
          src={iconUrl}
          alt=""
          className="skill-chip__icon"
          loading="lazy"
        />
      )}
      <span>{skill.name}</span>
    </button>
  );
}
