
export const projects = [
  {
    id: 1,
    title: 'Portfolio',
    description:
      'Web personal full stack para mostrar mi perfil profesional, proyectos y experiencia.',
    technologies: 'React, Vite, CSS',
    repoUrl: 'https://github.com/RaulMTorres/portfolio',
    demoUrl: null,
    imageUrl: '/projects/portfolio.jpg',
  },
  {
    id: 2,
    title: 'Gestión de Inventarios',
    description:
      'TFG del FP de Desarrollo Web en Cesur. Aplicación CRUD de gestión de inventarios para empresas.',
    technologies: 'Java, Spring Boot, PostgreSQL, React',
    repoUrl: 'https://github.com/RaulMTorres/tfg_daw_front',
    repoUrl2: 'https://github.com/RaulMTorres/tfg_daw_back',
    demoUrl: null,
    imageUrl: '/loquehay.png',
  },
  {
    id: 3,
    title: 'Forja tu Héroe — D&D',
    description:
      'Aplicación web interactiva donde el usuario crea su propio héroe de Dungeons & Dragons a través de un flujo guiado: nombre, raza asignada al azar, clase basada en sus respuestas, selección de habilidades y ficha final del personaje.',
    technologies: 'PHP, HTML5, CSS, JavaScript',
    repoUrl: 'https://github.com/RaulMTorres/Portfolio',
    demoUrl: null,
    imageUrl: '/Forja-tu-heroe.jpg',
  },
];

export const skills = [
  // Backend
  { id: 1,  name: 'Java',           category: 'Backend',          level: 4 },
  { id: 2,  name: 'Spring Boot',    category: 'Backend',          level: 3 },
  { id: 3,  name: 'JPA / Hibernate',category: 'Backend',          level: 3 },
  { id: 4,  name: 'Maven',          category: 'Backend',          level: 3 },
  { id: 5,  name: 'PHP',            category: 'Backend',          level: 2 },
  // Frontend
  { id: 6,  name: 'JavaScript',     category: 'Frontend',         level: 4 },
  { id: 7,  name: 'React',          category: 'Frontend',         level: 3 },
  { id: 8,  name: 'HTML5',          category: 'Frontend',         level: 4 },
  { id: 9,  name: 'CSS',            category: 'Frontend',         level: 4 },
  { id: 10, name: 'Bootstrap',      category: 'Frontend',         level: 3 },
  // Bases de datos
  { id: 11, name: 'PostgreSQL',     category: 'Bases de datos',   level: 3 },
  { id: 12, name: 'MySQL',          category: 'Bases de datos',   level: 3 },
  { id: 13, name: 'SQL',            category: 'Bases de datos',   level: 4 },
  // Herramientas
  { id: 14, name: 'Git',            category: 'Herramientas',     level: 4 },
  { id: 15, name: 'Claude Code',    category: 'Herramientas',     level: 3 },
  { id: 16, name: 'Filemaker',      category: 'Herramientas',     level: 4 },
  { id: 17, name: 'Linux',          category: 'Herramientas',     level: 3 },
];

export const experiences = [
  {
    id: 1,
    role: 'Developer Intern',
    company: 'MrHouston (Bitwok)',
    location: 'Madrid',
    period: 'Septiembre 2025 - Mayo 2026',
    description:
      'Desarrollo y mantenimiento de herramientas internas, creando componentes visuales con React y programando APIs REST en Java (Spring Boot) conectadas a bases de datos PostgreSQL. También he participado en la integración de funcionalidades de inteligencia artificial en aplicaciones FileMaker.',
  },
  {
    id: 2,
    role: 'Auxiliar de IT',
    company: 'Fincas Cima',
    location: 'Madrid',
    period: 'Abril 2024 - Julio 2024',
    description:
      'Prácticas de FP Grado Medio. Desarrollo web con HTML y CSS, y soporte a empleados con Microsoft Office y Windows.',
  },
  {
    id: 3,
    role: 'Jefe de Montaje',
    company: 'Espais Vius Mobiliari SL',
    location: 'Tarragona',
    period: 'Mayo 2018 - Octubre 2022',
    description:
      'Organización de las rutas semanales de reparto, responsable de almacén y de los pagos cliente-empresa, conductor y responsable del camión. Aporté habilidades de liderazgo, organización y responsabilidad.',
  },
  {
    id: 4,
    role: 'Montador – Fábrica',
    company: 'Tegar',
    location: 'Tarragona',
    period: 'Noviembre 2017 - Enero 2018',
    description:
      'Preparación y montaje de mobiliario en la cadena de montaje de la fábrica.',
  },
];
