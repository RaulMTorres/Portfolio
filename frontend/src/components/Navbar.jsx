import { useState, useEffect } from 'react';
import { personalInfo } from '../data/personalInfo.js';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: 'Sobre mí' },
    { href: '#skills', label: 'Tecnologías' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__logo">
          RMT
        </a>

        <button
          className="navbar__toggle"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}>
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ThemeSwitcher />
      </div>
    </header>
  );
}
