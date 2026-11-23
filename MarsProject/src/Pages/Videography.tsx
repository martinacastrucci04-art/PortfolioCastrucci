import '../App.css';

import Header from '../Components/Header';
import EasyPixPoster from '../assets/EASYPIXpic.png';
import { projectDetailStyles as styles } from './projectDetailStyles';

// ---- MODIFICA QUI -------------------------------------------------
const project = {
  title: 'Film Camera Ad',
  quote: 'Capturing the feeling of looking back at memories.',
  description: [
    'A commercial for a film camera, built around a nostalgic mood: the warmth of memories, the imperfection of analog images and the feeling of looking back.',
    'It was a team project. I helped develop the original idea and I was fully responsible for the editing.',
  ],
  meta: [
    { label: 'Type', value: 'Commercial' },
    { label: 'Mood', value: 'Nostalgic' },
    { label: 'My role', value: 'Concept & Editing' },
    { label: 'Tools', value: 'CapCut' },
    { label: 'Length', value: '2:00' },
  ],
  credits: [
    { role: 'Director', name: "Eva O'Connor" },
    { role: 'Filmmaker', name: 'Abigail Elliott' },
    { role: 'Actress', name: 'Lea Moeller' },
    { role: 'Storyboard', name: 'Sayonil Daspoddar' },
  ],
  // File locale: mettilo in public/videos e scrivi '/videos/nome.mp4'
  video: '/videos/EasyPixAdv.mp4',
  // Oppure YouTube/Vimeo: 'https://www.youtube.com/embed/ID'
  embed: '',
  // Copertina opzionale
  poster: EasyPixPoster,

  // Le fasi del lavoro, in ordine
  process: [
    {
      step: 'Brainstorming',
      text: 'A couple of hours of discussion before settling on the film camera concept.',
    },
    {
      step: 'Filming',
      text: 'The first and last scenes in Lea’s room, the rest a few days later.',
    },
    {
      step: 'Editing',
      text: 'Raw footage in hand the next day, edited in CapCut.',
    },
    {
      step: 'Final report',
      text: 'Script and storyboard collected to document the project.',
    },
  ],

  next: { label: 'Next project', title: 'Modelling', href: '/projects/modelling' },
};
// -------------------------------------------------------------------


function Player() {
  if (project.embed) {
    return (
      <iframe
        src={project.embed}
        title={project.title}
        allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
      />
    );
  }

  if (project.video) {
    return (
      <video
        controls
        playsInline
        preload="metadata"
        poster={project.poster || undefined}
        src={project.video}
      >
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <div className="videography-empty">
      <span className="videography-empty-play">▶</span>
      <span className="videography-empty-text">Video coming soon</span>
    </div>
  );
}

const pad = (n: number) => String(n + 1).padStart(2, '0');

function Videography() {
  return (
    <div className="site-page">
      <style>{styles}</style>

      <Header />

      <main className="container">
        <section className="videography-page">
          <div className="videography-heading">
            <span className="videography-label">VIDEOGRAPHY / COMMERCIAL</span>
            <h1>{project.title}</h1>
          </div>

          <div className="videography-player">
            <Player />
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
                {project.credits.map((credit) => (
                  <div key={credit.role}>
                    <dt>{credit.role}</dt>
                    <dd>{credit.name}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <section className="videography-section">
            <div className="videography-section-head">
              <div>
                <span className="videography-label">PROCESS / 01</span>
                <h2>How it came together</h2>
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

export default Videography;
