
const ICONS = {
  'java':            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'spring boot':     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'jpa / hibernate': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg',
  'maven':           'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg',
  'php':             'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',

  'javascript':      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'react':           'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'html5':           'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'css':             'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'bootstrap':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',

  'postgresql':      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'mysql':           'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',

  'sql':             'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',

  'git':             'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'linux':           'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  'vite':            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
  'json':            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg',

  'filemaker':       'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/claris.svg',
  'claude code':     'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg',
};

export function getSkillIcon(name) {
  if (!name) return null;
  return ICONS[name.trim().toLowerCase()] || null;
}
