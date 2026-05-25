import { useEffect, useState } from 'react';
import './ThemeSwitcher.css';

const THEMES = [
  { id: 'light',   label: 'Modo claro',   ariaLabel: 'Activar modo claro' },
  { id: 'classic', label: 'Modo normal',  ariaLabel: 'Activar modo normal (azul)' },
  { id: 'dark',    label: 'Modo oscuro',  ariaLabel: 'Activar modo oscuro' },
];

const STORAGE_KEY = 'portfolio-theme';

function applyTheme(id) {
  const html = document.documentElement;
  html.classList.remove('light', 'dark', 'classic');
  if (id === 'light')   html.classList.add('light');
  if (id === 'dark')    html.classList.add('dark');
  if (id === 'classic') html.classList.add('classic');
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) || 'light';
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const handleSelect = (id) => {
    setTheme(id);
    applyTheme(id);
    localStorage.setItem(STORAGE_KEY, id);
    window.dispatchEvent(new CustomEvent('themechange', { detail: id }));
  };

  return (
    <div className="theme-switcher" role="group" aria-label="Selector de tema">
      {THEMES.map(t => (
        <button
          key={t.id}
          type="button"
          className={`theme-switcher__btn ${theme === t.id ? 'is-active' : ''}`}
          aria-label={t.ariaLabel}
          aria-pressed={theme === t.id}
          title={t.label}
          onClick={() => handleSelect(t.id)}
        >
          <ThemeIcon id={t.id} />
        </button>
      ))}
    </div>
  );
}

function ThemeIcon({ id }) {
  if (id === 'light') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    );
  }

  if (id === 'classic') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );
  }

  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
