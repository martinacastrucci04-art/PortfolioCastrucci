import '../App.css';

import Header from '../Components/Header';
import Turnaround from '../assets/SwordmaidenTurnaround-web.jpg';
import { projectDetailStyles as styles } from './projectDetailStyles';

const project = {
  title: 'Swordmaiden',
  eyebrow: '3D MODELLING / CHARACTER',
  description: [
    'A stylised fantasy character sculpted in ZBrush: a young swordmaiden halfway between a village girl and a fighter, with soft fabrics and a few pieces of polished armour.',
    'I took the character from blockout to final sculpt, focusing on readable shapes, believable cloth folds and a face that feels calm but determined.',
  ],
  meta: [
    { label: 'Type', value: '3D Character' },
    { label: 'Year', value: '2024' },
    { label: 'Software', value: 'ZBrush' },
    { label: 'My role', value: 'Sculpting' },
    { label: 'Style', value: 'Stylised fantasy' },
  ],
  details: [
    { label: 'Artist', value: 'Martina Castrucci' },
    { label: 'School', value: 'Istituto Pantheon' },
    { label: 'Views', value: 'Front, ¾, back' },
  ],

  image: {
    src: Turnaround,
    alt: 'Swordmaiden turnaround: front, three-quarter and back views',
  },

  process: [
    {
      step: 'References',
      text: 'Collecting fantasy costumes, medieval clothing and armour references to define the character.',
    },
    {
      step: 'Blockout',
      text: 'Building the base body and the main volumes to get proportions and silhouette right.',
    },
    {
      step: 'Sculpting',
      text: 'Refining the face, hair and clothing, from the cloth folds to the corset lacing.',
    },
    {
      step: 'Presentation',
      text: 'Posing the final renders in a turnaround to show the model from every side.',
    },
  ],

  next: { label: 'Next project', title: 'Commercial', href: '/projects/Videography' },
};
// -------------------------------------------------------------------

const pad = (n: number) => String(n + 1).padStart(2, '0');

function SwordMaiden() {
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

          <div className="videography-hero-image">
            <img src={project.image.src} alt={project.image.alt} />
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
                <h2>From blockout to sculpt</h2>
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

export default SwordMaiden;
