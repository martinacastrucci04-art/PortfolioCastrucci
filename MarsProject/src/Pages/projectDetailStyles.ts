export const projectDetailStyles = `
.videography-page {
  width: 100%;
  max-width: 1500px;
  min-height: calc(100vh - 105px);
  min-height: calc(100dvh - 105px);
  margin: 0 auto;
  padding: 100px 46px 120px;
}

.videography-label {
  display: block;
  margin-bottom: 22px;
  color: var(--burgundy-light);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
}

/* ---------- Heading ---------- */

.videography-heading {
  margin-bottom: 60px;
}

.videography-heading h1 {
  margin: 0;
  color: var(--text);
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(64px, 9vw, 130px);
  font-weight: 600;
  line-height: 0.85;
  letter-spacing: -0.03em;
}

/* ---------- Player ---------- */

.videography-player {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: #000;
}

.videography-player video,
.videography-player iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  background: #000;
  object-fit: contain;
}

.videography-empty {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.videography-empty-play {
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 6px;
  border: 1px solid var(--burgundy);
  border-radius: 50%;
  color: var(--burgundy-light);
  font-size: 28px;
}

.videography-empty-text {
  color: var(--text-muted);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
}

/* ---------- Meta strip ---------- */

.videography-meta {
  margin: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 1px solid var(--line);
}

.videography-meta div {
  padding: 26px 24px 26px 0;
}

.videography-meta div + div {
  padding-left: 24px;
  border-left: 1px solid var(--line);
}

.videography-meta dt,
.videography-credits dt {
  color: var(--text-muted);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 2.5px;
  text-transform: uppercase;
}

.videography-meta dt {
  margin-bottom: 10px;
}

.videography-meta dd {
  margin: 0;
  color: var(--text);
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.15;
}

/* ---------- Intro ---------- */

.videography-intro {
  margin-top: 120px;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 100px;
  align-items: start;
}

.videography-quote {
  position: relative;
  margin: 0;
  padding-top: 40px;
  color: var(--text);
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(40px, 4.4vw, 66px);
  font-style: italic;
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.01em;
}

.videography-quote::before {
  content: '“';
  position: absolute;
  top: -20px;
  left: -6px;
  color: var(--burgundy);
  font-size: 140px;
  font-style: normal;
  line-height: 1;
  opacity: 0.6;
}

.videography-about p {
  margin: 0 0 20px;
  color: var(--text-muted);
  font-size: 15px;
  font-weight: 300;
  line-height: 1.95;
}

.videography-about p:first-of-type {
  color: var(--text);
  font-size: 17px;
  line-height: 1.8;
}

.videography-credits {
  margin: 45px 0 0;
}

.videography-credits div {
  padding: 15px 0;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
  border-top: 1px solid var(--line);
}

.videography-credits div:last-child {
  border-bottom: 1px solid var(--line);
}

.videography-credits dd {
  margin: 0;
  color: var(--text);
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 600;
  text-align: right;
}

/* ---------- Sections ---------- */

.videography-section {
  margin-top: 140px;
}

.videography-section-head {
  margin-bottom: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 60px;
}

.videography-section-head .videography-label {
  margin-bottom: 14px;
}

.videography-section-head h2 {
  margin: 0;
  color: var(--text);
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(44px, 5vw, 72px);
  font-weight: 600;
  line-height: 0.95;
}

.videography-section-head p {
  max-width: 360px;
  margin: 0 0 6px;
  color: var(--text-muted);
  font-size: 13px;
  font-weight: 300;
  line-height: 1.9;
}

/* ---------- Process timeline ---------- */

.videography-process {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.videography-process li {
  position: relative;
  padding-top: 34px;
}

.videography-process li::before {
  content: '';
  position: absolute;
  top: 5px;
  left: 0;
  right: -30px;
  height: 1px;
  background: var(--line);
}

.videography-process li:last-child::before {
  right: 0;
}

.videography-process li::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 11px;
  height: 11px;
  border: 1px solid var(--burgundy);
  border-radius: 50%;
  background: var(--background);
}

.videography-process-number {
  display: block;
  margin-bottom: 10px;
  color: var(--text-muted);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2.5px;
}

.videography-process h3 {
  margin: 0 0 12px;
  color: var(--text);
  font-family: 'Cormorant Garamond', serif;
  font-size: 30px;
  font-weight: 600;
  line-height: 1;
}

.videography-process p {
  margin: 0;
  max-width: 280px;
  color: var(--text-muted);
  font-size: 13px;
  font-weight: 300;
  line-height: 1.8;
}

/* ---------- Nav ---------- */

.videography-nav {
  margin-top: 140px;
  padding-top: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 30px;
  border-top: 1px solid var(--line);
}

.videography-nav a {
  display: block;
  text-decoration: none;
  color: var(--text);
}

.videography-nav-label {
  display: block;
  margin-bottom: 8px;
  color: var(--burgundy-light);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 2.5px;
  text-transform: uppercase;
}

.videography-nav-title {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(34px, 4vw, 52px);
  font-weight: 600;
  line-height: 1;
  transition: color 0.3s ease;
}

.videography-nav a:last-child {
  text-align: right;
}

.videography-nav a:hover .videography-nav-title {
  color: var(--burgundy-light);
}

/* ---------- Responsive ---------- */

@media (max-width: 900px) {
  .videography-page {
    padding: 75px 30px 110px;
  }

  .videography-heading {
    margin-bottom: 50px;
  }

  .videography-meta {
    grid-template-columns: repeat(3, 1fr);
  }

  .videography-meta div:nth-child(4) {
    padding-left: 0;
    border-left: 0;
  }

  .videography-meta div:nth-child(n + 4) {
    border-top: 1px solid var(--line);
  }

  .videography-intro {
    margin-top: 90px;
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .videography-section,
  .videography-nav {
    margin-top: 100px;
  }

  .videography-section-head {
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
  }

  .videography-process {
    grid-template-columns: 1fr 1fr;
    row-gap: 50px;
  }

  .videography-process li:nth-child(2)::before {
    right: 0;
  }
}

@media (max-width: 600px) {
  .videography-page {
    min-height: auto;
    padding: 65px 22px 80px;
  }

  .videography-heading h1 {
    font-size: clamp(56px, 16vw, 95px);
  }

  .videography-player {
    border-radius: 12px;
  }

  .videography-meta {
    grid-template-columns: 1fr 1fr;
  }

  .videography-meta div,
  .videography-meta div + div {
    padding: 20px 16px 20px 0;
    border-left: 0;
  }

  .videography-meta div:nth-child(even) {
    padding-left: 16px;
    border-left: 1px solid var(--line);
  }

  .videography-meta div:nth-child(n + 3) {
    border-top: 1px solid var(--line);
  }

  .videography-meta dd {
    font-size: 21px;
  }

  .videography-intro {
    margin-top: 70px;
  }

  .videography-section,
  .videography-nav {
    margin-top: 80px;
  }

  .videography-process {
    grid-template-columns: 1fr;
    row-gap: 36px;
  }

  .videography-process li::before {
    right: 0;
  }
}
.videography-hero-image {
  width: 100%;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--background-soft);
}

.videography-hero-image img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 600px) {
  .videography-hero-image {
    border-radius: 12px;
  }
}

/* ---------- Image galleries ---------- */

.project-hero-gallery {
  display: grid;
  gap: 18px;
  align-items: start;
}

.project-hero-gallery + .videography-meta {
  margin-top: 16px;
  border-top: 1px solid var(--line);
}

.project-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  align-items: start;
}

.project-figure {
  margin: 0;
}

.project-figure-frame {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--background-soft);
}

.project-figure-frame img {
  width: 100%;
  height: auto;
  display: block;
}

.project-hero-gallery .project-figure-frame img {
  height: clamp(280px, 38vw, 560px);
  object-fit: cover;
}

.project-figure figcaption {
  padding: 12px 4px 0;
  color: var(--text-muted);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 2.5px;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .project-hero-gallery .project-figure-frame img {
    height: clamp(220px, 40vw, 360px);
  }
}

@media (max-width: 600px) {
  .project-hero-gallery,
  .project-gallery {
    grid-template-columns: 1fr !important;
    gap: 16px;
  }

  .project-hero-gallery .project-figure-frame img {
    height: auto;
  }

  .project-figure-frame {
    border-radius: 12px;
  }
}
`;
