
import martinaPicture from './assets/MartinaPicture.png';
import './App.css';

import Header from './Components/Header';

import About from './Pages/About';
import Projects from './Pages/Projects';
import Videography from './Pages/Videography';
import Modelling from './Pages/Modelling';
import SwordMaiden from './Pages/SwordMaiden';
import PlantBuddy from './Pages/PlantBuddy';

function App() {
  const path = window.location.pathname;

  if (path === '/about') {
    return <About />;
  }

  if (path === '/projects') {
    return <Projects />;
  }

  if (path === '/projects/Videography') {
    return <Videography />;
  }

  if (path === '/projects/modelling') {
    return <Modelling />;
  }

  if (path === '/projects/plant-buddy') {
    return <PlantBuddy />;
  }

  if (path === '/projects/swordmaiden') {
    return <SwordMaiden />;
  }

  return (
    <div className="site-page">
      <Header />

      <main className="container">
        <section id="hero" className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Martina
                <br />
                Castrucci
              </h1>

              <p className="hero-role">
                Interaction &amp; Experience Designer
              </p>

              <p className="hero-description">
                Graphic designer and creative focused on visual design,
                character design, illustration and interactive experiences.
              </p>

              <a href="/projects" className="hero-button">
                Explore my work
                <span>→</span>
              </a>
            </div>

            <div className="hero-image">
              <div className="hero-image-frame">
                <img
                  src={martinaPicture}
                  alt="Martina Castrucci"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-heading">
            <span className="contact-eyebrow">
              GET IN TOUCH
            </span>

            <h2>
              Let's
              <br />
              Connect
            </h2>

            <p>
              Interested in working together, discussing a project or simply
              getting in touch? You can find me here.
            </p>
          </div>

          <div className="contact-links">
            <a
              href="mailto:martina.castrucci04@gmail.com"
              className="contact-link"
            >
              <span className="contact-number">01</span>

              <span className="contact-link-content">
                <span className="contact-label">Email</span>

                <span className="contact-value">
                  martina.castrucci04@gmail.com
                </span>
              </span>

              <span className="contact-arrow">↗</span>
            </a>

            <a
              href="https://www.instagram.com/martinacastrucci_/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-number">02</span>

              <span className="contact-link-content">
                <span className="contact-label">Instagram</span>

                <span className="contact-value">
                  @martinacastrucci_
                </span>
              </span>

              <span className="contact-arrow">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/martina-castrucci-48967a439/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-number">03</span>

              <span className="contact-link-content">
                <span className="contact-label">LinkedIn</span>

                <span className="contact-value">
                  Martina Castrucci
                </span>
              </span>

              <span className="contact-arrow">↗</span>
            </a>
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

export default App;
