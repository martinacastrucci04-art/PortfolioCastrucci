import '../App.css';

import Header from '../Components/Header';

function Modelling() {
  return (
    <div className="site-page">
      <Header />

      <main className="container">
        <section className="modelling-page">
          <div className="modelling-header">
            <span className="modelling-eyebrow">
              3D / PROJECTS
            </span>

            <div className="modelling-title-row">
              <h1>Modelling</h1>

              <p>
                A collection of 3D work exploring objects,
                environments, form and digital spaces.
              </p>
            </div>
          </div>

          <div className="modelling-list">
            <a
              href="/projects/modelling/project-01"
              className="modelling-item"
            >
              <span className="modelling-number">
                01
              </span>

              <div className="modelling-item-name">
                <span>OBJECT DESIGN</span>
                <h2>Project One</h2>
              </div>

              <div className="modelling-preview">
                <span>01</span>
              </div>

              <span className="modelling-arrow">
                ↗
              </span>
            </a>

            <a
              href="/projects/modelling/project-02"
              className="modelling-item"
            >
              <span className="modelling-number">
                02
              </span>

              <div className="modelling-item-name">
                <span>ENVIRONMENT</span>
                <h2>Project Two</h2>
              </div>

              <div className="modelling-preview">
                <span>02</span>
              </div>

              <span className="modelling-arrow">
                ↗
              </span>
            </a>

            <a
              href="/projects/modelling/project-03"
              className="modelling-item"
            >
              <span className="modelling-number">
                03
              </span>

              <div className="modelling-item-name">
                <span>CHARACTER / 3D</span>
                <h2>Project Three</h2>
              </div>

              <div className="modelling-preview">
                <span>03</span>
              </div>

              <span className="modelling-arrow">
                ↗
              </span>
            </a>

            <a
              href="/projects/modelling/project-04"
              className="modelling-item"
            >
              <span className="modelling-number">
                04
              </span>

              <div className="modelling-item-name">
                <span>SCENE DESIGN</span>
                <h2>Project Four</h2>
              </div>

              <div className="modelling-preview">
                <span>04</span>
              </div>

              <span className="modelling-arrow">
                ↗
              </span>
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

export default Modelling;