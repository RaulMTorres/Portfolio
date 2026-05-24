import { useState } from 'react';
import { personalInfo } from '../data/personalInfo.js';
import './Contact.css';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto desde portfolio — ${form.name}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <h2>Contacto</h2>
          <p>
            En búsqueda activa de empleo. <br />
          </p>

          <ul className="contact__list">
            <li>
              <strong>Email:</strong>{' '}
              <a className="contact__link" href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </li>
            <li>
              <strong>Teléfono:</strong> <a className="contact__link" > {personalInfo.phone} </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{' '}
              <a className="contact__link" href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                {personalInfo.linkedin.replace(/^https?:\/\//, '')}
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{' '}
              <a className="contact__link" href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                {personalInfo.github.replace(/^https?:\/\//, '')}
              </a>
            </li>
             {personalInfo.address && (
              <li>
                <strong>Ubicación:</strong> {personalInfo.address}
              </li>
            )}
          </ul>

          {personalInfo.address && (
            <div className="contact__map">
              <iframe
                title="Mapa de Alcorcón, Madrid"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24326.993734139476!2d-3.835850554515214!3d40.345136226053945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41892d0db41ee3%3A0x56cefdbd91fdc2cf!2sAlcorc%C3%B3n%2C%20Madrid!5e0!3m2!1ses!2ses!4v1779098002487!5m2!1ses!2ses"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          )}
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <label>
            Nombre
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={100}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              maxLength={150}
            />
          </label>

          <label>
            Mensaje
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              minLength={1}
              maxLength={2000}
            />
          </label>

          <button
            type="submit"
            className="btn btn--primary"
          >
            Enviar mensaje
          </button>

        </form>
      </div>
    </section>
  );
}
