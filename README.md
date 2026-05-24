# Portfolio - Raúl Martínez Torres

Plantilla de portfolio personal para desarrollador Full Stack Junior, construida con:

- **Backend:** Spring Boot 3 + Spring Data JPA + PostgreSQL
- **Frontend:** React 18 + Vite
- **Base de datos:** PostgreSQL 16

> Pensada para ser **simple, limpia y fácil de personalizar**. Es una buena base para enseñar en entrevistas porque cubre lo esencial de un stack Java/React profesional sin sobre-ingeniería.

---

## Estructura

```
Portfolio_cc/
├── backend/                   # API REST con Spring Boot
│   ├── src/main/java/com/raul/portfolio/
│   │   ├── PortfolioApplication.java
│   │   ├── config/            # CORS
│   │   ├── controller/        # Endpoints REST
│   │   ├── model/             # Entidades JPA
│   │   ├── repository/        # Spring Data
│   │   ├── service/           # Lógica de negocio
│   │   └── dto/               # Objetos de transferencia
│   ├── src/main/resources/
│   │   ├── application.properties
│   │   └── data.sql           # Datos iniciales (personalízame)
│   └── pom.xml
├── frontend/                  # SPA con React + Vite
│   ├── src/
│   │   ├── components/        # Componentes por sección
│   │   ├── api/               # Cliente HTTP
│   │   └── App.jsx
│   └── package.json
├── docker-compose.yml         # PostgreSQL listo para arrancar
└── README.md
```

---

## Requisitos

- Java 17 o superior
- Maven 3.9+
- Node.js 18+ y npm
- Docker (opcional, para levantar PostgreSQL fácilmente) **o** PostgreSQL 14+ instalado

---

## Cómo arrancar el proyecto

### 1. Base de datos PostgreSQL

**Opción A — Con Docker (recomendado):**

```bash
docker-compose up -d
```

Esto levanta PostgreSQL en `localhost:5432` con:
- Base de datos: `portfolio_db`
- Usuario: `portfolio_user`
- Contraseña: `portfolio_pass`

**Opción B — PostgreSQL local:**

Crea manualmente la base de datos y el usuario:

```sql
CREATE DATABASE portfolio_db;
CREATE USER portfolio_user WITH PASSWORD 'portfolio_pass';
GRANT ALL PRIVILEGES ON DATABASE portfolio_db TO portfolio_user;
```

### 2. Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run        # Linux/Mac
mvnw.cmd spring-boot:run      # Windows
```

La API queda disponible en `http://localhost:8080`.

Endpoints principales:

| Método | Endpoint            | Descripción                       |
|--------|---------------------|-----------------------------------|
| GET    | `/api/projects`     | Lista de proyectos                |
| GET    | `/api/skills`       | Lista de habilidades por categoría|
| GET    | `/api/experiences`  | Lista de experiencias laborales   |
| POST   | `/api/contact`      | Envío de mensaje de contacto      |

### 3. Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

La aplicación queda en `http://localhost:5173`.

---

## Cómo personalizarlo

Casi todo lo que tienes que cambiar está en dos sitios:

1. **`frontend/src/data/personalInfo.js`** — Tus datos personales (nombre, email, teléfono, redes, texto del "sobre mí").
2. **`backend/src/main/resources/data.sql`** — Proyectos, habilidades y experiencias que se cargan en la base de datos.

Para añadir un nuevo proyecto basta con añadir una fila más en `data.sql` (o crear un panel de admin más adelante).

---

## Buenas prácticas que aplica esta plantilla

- Separación por capas (controller → service → repository → entity).
- DTOs para los datos que entran por la API (validación con `@Valid`).
- Configuración CORS centralizada.
- Variables sensibles en `application.properties` (puedes pasarlas por variables de entorno en producción).
- React modular: un componente por sección.
- Cliente HTTP centralizado en `src/api/api.js`.

---

## Siguientes pasos (ideas para ir ampliando)

- Añadir tests con JUnit + Mockito en el backend y React Testing Library en el frontend.
- Autenticación con Spring Security + JWT para un panel de administración.
- Despliegue: backend en Render/Railway, frontend en Vercel/Netlify, base de datos en Supabase/Neon.
- Internacionalización (i18n) para español/inglés.
- Subida de un PDF del CV.
