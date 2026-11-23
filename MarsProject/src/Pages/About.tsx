import Headshot1 from '../assets/Headshot1.jpeg';
import '../App.css';

import Header from '../Components/Header';

function About() {
  return (
    <div className="site-page">
      <Header />

      <main className="container">
        <section className="about-page">
          <div className="about-page-content">
            <div className="about-page-image">
              <div className="about-page-image-frame">
                <img
                  src={Headshot1}
                  alt="Martina Castrucci"
                />
              </div>

              <span className="about-page-image-label">
                DIGITAL DESIGN
              </span>
            </div>

            <div className="about-page-text">
              <span className="about-page-eyebrow">
                PROFILE / 01
              </span>

              <h1>
                About
                <br />
                Me
              </h1>

              <div className="about-page-line"></div>

              <p className="about-page-intro">
                I'm Martina, a Digital Graphic Design student and
                Interaction &amp; Experience Designer interested in visual
                storytelling, videogames and character design.
              </p>

              <p>
                My work combines graphic design, illustration and interactive
                experiences to create visuals with a strong identity and purpose.
              </p>

              <p>
                I'm particularly interested in character design, concept art,
                illustration and videogame design.
              </p>

              <a
                href="/CV%20Martina%20Castrucci.pdf"
                download="Martina-Castrucci-CV.pdf"
                className="hero-button about-page-cv"
              >
                Download CV
                <span>↓</span>
              </a>
            </div>
          </div>

          <div className="about-page-skills">
            <span className="about-page-eyebrow">
              WHAT I DO / 02
            </span>

            <div className="about-page-skills-list">
              <span>Graphic Design</span>
              <span>Character Design</span>
              <span>Illustration</span>
              <span>Interactive Experiences</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Martina Castrucci</p>
        <p>Interaction &amp; Experience Design</p>
      </footer>
    </div>
  );
}

export default About;