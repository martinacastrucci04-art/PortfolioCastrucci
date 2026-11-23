import '../App.css';

import Header from '../Components/Header';
import PenSketch from '../assets/PlantBuddy-Pen3-web.jpg';
import PenDock from '../assets/PlantBuddy-Pen-web.jpg';
import PenDevice from '../assets/PlantBuddy-Pen1-web.jpg';
import Brainstorm from '../assets/PlantBuddy-Brainstorm-web.jpg';
import Sketches from '../assets/PlantBuddy-Examples-web.jpg';
import AppScreens from '../assets/PlantBuddy-AppPics-web.jpg';
import { projectDetailStyles as styles } from './projectDetailStyles';

// ---- MODIFICA QUI -------------------------------------------------
const project = {
  title: 'Plant Buddy',
  eyebrow: 'INTERACTION DESIGN / PRODUCT & APP',
  quote: 'How might we help plant owners understand what their plants need?',
  description: [
    'Plant Buddy is a plant-health monitoring concept that combines a small, pencil-shaped device placed in the soil with a companion mobile app. It is designed for beginner plant owners who love plants but are not always sure how to look after them.',
    'The device reads soil moisture, temperature and light, while the app turns those readings into a clear status, explains what is wrong and suggests what to do next. We presented the idea through a cardboard prototype of the device and its charging dock, together with hand-drawn app wireframes.',
  ],
  meta: [
    { label: 'Type', value: 'Product & App' },
    { label: 'Year', value: '2026' },
    { label: 'Team', value: '3 designers' },
    { label: 'Prototype', value: 'Low-fidelity' },
    { label: 'Tools', value: 'Sketching & Cardboard' },
  ],
  details: [
    { label: 'Team', value: 'Rohith, Martina, Atharva' },
    { label: 'Course', value: 'CS6431' },
    { label: 'University', value: 'University of Limerick' },
  ],

  // Immagini in alto: con le colonne in proporzione restano alte uguali
  hero: [
    { src: PenSketch, caption: 'Concept sketch', ratio: 721 / 1229 },
    { src: PenDock, caption: 'Prototype in its dock', ratio: 1390 / 1511 },
    { src: PenDevice, caption: 'Cardboard device', ratio: 1335 / 1241 },
  ],

  // Le fasi del lavoro, in ordine
  process: [
    {
      step: 'Brainstorming',
      text: 'Individual ideas, a class mind map and a group session, until a teammate’s struggle with plants gave us our problem.',
    },
    {
      step: 'Sketching',
      text: 'A smart pot, a leaf clip and a soil probe, before settling on a compact, pencil-shaped device.',
    },
    {
      step: 'Prototyping',
      text: 'A cardboard mock-up of the device and its charging dock, to test shape, size and placement.',
    },
    {
      step: 'App design',
      text: 'Hand-drawn wireframes for the full journey: connecting, analysing, the health report and care actions.',
    },
  ],

  exploration: [
    { src: Brainstorm, caption: 'Brainstorming the plant project' },
    { src: Sketches, caption: 'Smart pot, soil probe and leaf clip' },
  ],

  app: {
    src: AppScreens,
    caption: 'Wireframes: onboarding, connection, analysis, health report and care actions',
  },

  next: { label: 'Next project', title: 'Swordmaiden', href: '/projects/swordmaiden' },
};
// -------------------------------------------------------------------

const pad = (n: number) => String(n + 1).padStart(2, '0');

function PlantBuddy() {
  return (
    <div className="site-page">
      <style>{styles}</style>

      <Header />

      <main className="container">
        <section className="videography-page">
          <div className="videography-heading">
            <span className="videography-label">{project.eyebrow}</span>
            <h1>{project.title}</h1>
          </div>

          <div
            className="project-hero-gallery"
            style={{
              gridTemplateColumns: project.hero
                .map((image) => `${image.ratio}fr`)
                .join(' '),
            }}
          >
            {project.hero.map((image) => (
              <figure key={image.caption} className="project-figure">
                <div className="project-figure-frame">
                  <img src={image.src} alt={image.caption} />
                </div>
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>

          <dl className="videography-meta">
            {project.meta.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="videography-intro">
            <p className="videography-quote">{project.quote}</p>

            <div className="videography-about">
              <span className="videography-label">ABOUT THE PROJECT</span>

              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <dl className="videography-credits">
                {project.details.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <section className="videography-section">
            <div className="videography-section-head">
              <div>
                <span className="videography-label">PROCESS / 01</span>
                <h2>From a problem to a prototype</h2>
              </div>
            </div>

            <ol className="videography-process">
              {project.process.map((item, i) => (
                <li key={item.step}>
                  <span className="videography-process-number">{pad(i)}</span>
                  <h3>{item.step}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="videography-section">
            <div className="videography-section-head">
              <div>
                <span className="videography-label">EXPLORATION / 02</span>
                <h2>Ideas and sketches</h2>
              </div>
            </div>

            <div className="project-gallery">
              {project.exploration.map((image) => (
                <figure key={image.caption} className="project-figure">
                  <div className="project-figure-frame">
                    <img src={image.src} alt={image.caption} loading="lazy" />
                  </div>
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="videography-section">
            <div className="videography-section-head">
              <div>
                <span className="videography-label">APP / 03</span>
                <h2>The companion app</h2>
              </div>
            </div>

            <figure className="project-figure">
              <div className="project-figure-frame">
                <img src={project.app.src} alt={project.app.caption} loading="lazy" />
              </div>
              <figcaption>{project.app.caption}</figcaption>
            </figure>
          </section>

          <nav className="videography-nav">
            <a href="/projects">
              <span className="videography-nav-label">← Back</span>
              <span className="videography-nav-title">Projects</span>
            </a>

            <a href={project.next.href}>
              <span className="videography-nav-label">
                {project.next.label} →
              </span>
              <span className="videography-nav-title">
                {project.next.title}
              </span>
            </a>
          </nav>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Martina Castrucci</p>
        <p>Interaction &amp; Experience Design</p>
      </footer>
    </div>
  );
}

export default PlantBuddy;
