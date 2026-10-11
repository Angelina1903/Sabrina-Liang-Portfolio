const stats = [
  { label: '10M+', value: 'VIEWS' },
  { label: '110K+', value: 'COMMUNITY' },
  { label: '9', value: 'YEARS FENCING' },
];

const buildPoints = [
  'Automated Can Crusher',
  'CO2 Car Prototype',
  'Pneumatics + robotics fabrication',
];

const creatorHighlights = [
  'Self-taught dance, filming, editing, and account management',
  '2.5+ years of consistent content creation',
  'Bilibili • Xiaohongshu • TikTok • Shipinhao',
];

const academicList = [
  'Engineering Concepts',
  'AP Calculus BC',
  'AP World History',
  'Honors Chemistry',
  'Honors Literature and Composition II',
  'Spanish II',
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand">Sabrina Liang</div>

        <nav className="nav" aria-label="Section navigation">
          <a href="#background">About</a>
          <a href="#build">Projects</a>
          <a href="#create">Create</a>
          <a href="#move">Activities</a>
          <a href="#school-stuff">Academics</a>
        </nav>

        <button className="resume-button" type="button">
          Resume
        </button>
      </header>

      <section className="hero" id="about">
        <div className="hero-copy">
          <p className="intro-line">Hi, welcome to</p>
          <h1>
            <span className="hero-name">Sabrina</span> Liang&apos;s
          </h1>
          <p className="hero-subtitle">Portfolio</p>
        </div>

        <div className="hero-visual" aria-label="Portrait photo">
          <img
            src="/assets/headshot.jpg"
            alt="Sabrina Liang portrait"
            className="hero-photo"
          />
        </div>
      </section>

      <section className="section-grid">
        <article id="build" className="panel panel-strong">
          <p className="eyebrow">01 / PROJECTS</p>
          <h2>Engineering</h2>
          <div className="project-feature">
            <div className="project-block">
              <span className="note">AUTOMATED</span>
              <h3>CAN CRUSHER</h3>
              <p>
                Design, fabrication, programming, and testing of an automated can crusher using a Pegasus robotic arm,
                pneumatic systems, and structural assembly.
              </p>
              <ul>
                {buildPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="diagram" aria-hidden="true">
              <span>ARM</span>
              <span>PNEUMATICS</span>
              <span>CRUSH!</span>
            </div>
          </div>
        </article>

        <article id="create" className="panel panel-light">
          <p className="eyebrow">02 / CREATE</p>
          <h2>Digital Creator</h2>
          <div className="creator-panel">
            <div className="big-number">10M+</div>
            <p>views across self-taught dance content, video shooting, and editing.</p>
            <ul>
              {creatorHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className="feature-strip">
        <article id="move" className="panel panel-fencing">
          <p className="eyebrow">03 / ACTIVITIES</p>
          <h2>Fencing</h2>
          <div className="fencing-line">
            <span className="years">9</span>
            <div>
              <p>YEARS OF FENCING</p>
              <div className="weapon-list">
                <span>FOIL — 7 years</span>
                <span>ÉPÉE — 2 years</span>
              </div>
            </div>
          </div>
          <div className="community-block">
            <p className="eyebrow">CLUBS & COMMUNITY</p>
            <ul>
              <li>Member of TSA and Science Olympiad</li>
              <li>Volunteer with Happy to Help</li>
              <li>Cross-cultural communication and community support</li>
            </ul>
          </div>
        </article>

        <article id="school-stuff" className="panel panel-academic">
          <p className="eyebrow">04 / ACADEMICS</p>
          <h2>Academics</h2>
          <div className="school-header">
            <span>Northview High School</span>
            <span>10th Grade</span>
          </div>
          <ul className="academic-list">
            {academicList.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
          <div className="score-row">
            <div>
              <strong>5</strong>
              <span>AP Precalculus</span>
            </div>
            <div>
              <strong>5</strong>
              <span>AP Government</span>
            </div>
            <div>
              <strong>1450</strong>
              <span>SAT</span>
            </div>
          </div>
        </article>
      </section>

      <section className="bottom-grid full-width">
        <article id="background" className="panel panel-small full-panel">
          <p className="eyebrow">05 / BACKGROUND</p>
          <ul>
            <li>Bilingual in English and Mandarin</li>
            <li>Global experience across Guangzhou, Hong Kong, and Georgia</li>
            <li>Adaptability and cross-cultural perspective</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
