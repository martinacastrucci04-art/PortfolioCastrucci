import '../App.css';

import Header from '../Components/Header';
import EasyPixCover from '../assets/EASYPIXpic.png';
import SwordMaidenCover from '../assets/SwordMaidenPic.png';
import PlantBuddyCover from '../assets/PenPoster.png';

type Project = {
  number: string;
  title: string;
  href: string;
  cover?: string;
};

const projects: Project[] = [
  {
    number: '01',
    title: 'Commercial',
    href: '/projects/Videography',
    cover: EasyPixCover,
  },
  {
    number: '02',
    title: 'Plant Buddy',
    href: '/projects/plant-buddy',
    cover: PlantBuddyCover,
  },
  { number: '03', title: 'Project 03', href: '#' },
  { number: '04', title: 'Project 04', href: '#' },
  {
    number: '05',
    title: 'Swordmaiden',
    href: '/projects/swordmaiden',
    cover: SwordMaidenCover,
  },
  { number: '06', title: 'Project 06', href: '#' },
];

function Projects() {
  return (
    <div className="site-page">
      <Header />

      <main className="container">
        <section className="projects-page">
          <div className="projects-heading">
            <span className="projects-eyebrow">
              SELECT A CATEGORY
            </span>

            <h1>Projects</h1>

            <p>
              Explore my work across videography, character design and
              3D modelling.
            </p>
          </div>

          <div className="projects-categories">
            {projects.map((project) => (
              <a
                key={project.number}
                href={project.href}
                className={
                  project.cover
                    ? 'project-category project-category--cover'
                    : 'project-category'
                }
              >
                {project.cover && (
                  <img
                    className="project-category-cover"
                    src={project.cover}
                    alt=""
                  />
                )}

                <span className="project-category-number">
                  {project.number}
                </span>

                <div className="project-category-content">
                  <h2>{project.title}</h2>
                </div>

                <span className="project-category-arrow">
                  ↗
                </span>
              </a>
            ))}
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

export default Projects;