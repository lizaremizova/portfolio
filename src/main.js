const projects = [
  {
    id: 'launchlab',
    number: '01',
    name: 'LaunchLab',
    descriptor: 'A place for independent talent to find their next opportunity.',
    type: 'Freelance marketplace',
    year: 'Product interface',
    cover: './projects/launchlab-website.png',
    coverAlt: 'LaunchLab landing page with a monochrome editorial hero and lime accents',
    theme: 'lime',
    images: [
      { src: './projects/launchlab-website.png', alt: 'LaunchLab marketplace landing page, desktop' },
      { src: './projects/launchlab-dashboard.png', alt: 'LaunchLab latest applications dashboard' },
    ],
    overview: 'A marketplace concept connecting independent professionals with companies and projects. The supplied screens show both the public-facing introduction and a signed-in dashboard for managing applications, posts, and recommended jobs.',
    highlights: ['Marketplace landing page', 'Applications dashboard', 'Project and job cards'],
  },
  {
    id: 'forge',
    number: '02',
    name: 'Forge',
    descriptor: 'A fitness companion built around progress, plans, and community.',
    type: 'Fitness product',
    year: 'Responsive interface',
    cover: './projects/forge-desktop-current.png',
    coverAlt: 'Forge fitness product desktop page with purple accents on black',
    theme: 'violet',
    images: [
      { src: './projects/forge-desktop-current.png', alt: 'Forge fitness product landing page, desktop' },
      { src: './projects/forge-mobile.png', alt: 'Forge fitness product landing page, mobile' },
    ],
    overview: 'A fitness product experience spanning progress tracking, workout plans, challenges, reviews, and an onboarding guide. The supplied desktop and mobile screens establish a consistent, high-contrast visual system across viewports.',
    highlights: ['Progress and workout plans', 'Challenges and reviews', 'Desktop and mobile layouts'],
  },
];

const arrow = (diagonal = false) => `<span aria-hidden="true" class="arrow">${diagonal ? '↗' : '↘'}</span>`;

function projectCard(project) {
  return `
    <button class="project-card ${project.theme}" data-open="${project.id}" aria-label="Open ${project.name} case study">
      <span class="project-meta"><span>${project.number} / ${project.type}</span><span>${project.year}</span></span>
      <span class="project-image-wrap"><img src="${project.cover}" alt="${project.coverAlt}" loading="lazy"></span>
      <span class="project-caption">
        <span><strong>${project.name}</strong><small>${project.descriptor}</small></span>
        <span class="round-arrow">${arrow(true)}</span>
      </span>
    </button>`;
}

function caseStudy(project) {
  const images = project.images.map((image, index) => `
    <figure class="${image.src.includes('mobile') ? 'mobile-preview' : ''}">
      <img src="${image.src}" alt="${image.alt}" loading="lazy">
      <figcaption>${project.name} / 0${index + 1}</figcaption>
    </figure>`).join('');
  const highlights = project.highlights.map((item, index) => `
    <div><span>0${index + 1}</span><strong>${item}</strong></div>`).join('');

  return `
    <div class="case-overlay" role="presentation">
      <article class="case-sheet" role="dialog" aria-modal="true" aria-labelledby="case-title">
        <button class="case-close" data-close aria-label="Close case study">×</button>
        <div class="case-intro ${project.theme}">
          <p class="eyebrow">CASE STUDY / ${project.number}</p>
          <h2 id="case-title">${project.name}<span>.</span></h2>
          <p class="case-deck">${project.descriptor}</p>
          <div class="case-facts"><span>${project.type}</span><span>${project.year}</span></div>
        </div>
        <div class="case-copy">
          <p class="eyebrow">OVERVIEW</p>
          <p class="case-overview">${project.overview}</p>
          <div class="case-highlights">${highlights}</div>
        </div>
        <div class="case-gallery">${images}</div>
      </article>
    </div>`;
}

document.querySelector('#root').innerHTML = `
  <header class="site-header">
    <a class="home-pill" href="#top">ELIZAVETA REMIZOVA</a>
    <nav aria-label="Main navigation"><a href="#about">About</a><a class="nav-active" href="#work">Work</a><a href="#process">Process</a><a href="#contact">Contact</a></nav>
  </header>

  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-kicker"><span>INDEPENDENT DIGITAL DESIGNER</span><span>RIGA / LATVIA · 2026</span></div>
      <div class="hero-layout">
        <h1 id="hero-title">ELIZAVETA<br /><em>REMIZOVA</em><span class="hero-index">(01)</span></h1>
        <div class="hero-copy"><p>Digital designer<br />&amp; frontend developer</p><a class="scroll-orb" href="#about" aria-label="Scroll to about"><span>↓</span><small>SCROLL<br />TO EXPLORE</small></a></div>
      </div>
      <div class="hero-bottom"><p>I turn early ideas into distinctive, responsive websites—from the first sketch to the final detail.</p><a class="text-link" href="#work">Explore selected work ${arrow()}</a></div>
    </section>

    <section class="about-section" id="about">
      <div class="about-marker"><span>ABOUT<br>ELIZAVETA</span><span class="marker-cross">✳</span></div>
      <div class="about-main"><p class="eyebrow">A FEW WORDS ABOUT ME</p><h2>From first idea<br />to <em>finished website.</em></h2><p class="about-text">I'm Elizaveta Remizova, a digital designer and frontend developer. I shape ideas into clear, distinctive web experiences—from the first structure and visual direction to a responsive build.</p><a class="text-link" href="#process">How I work ${arrow()}</a></div>
      <div class="about-side"><span>DESIGN / FIGMA</span><span>VISUAL / AFFINITY</span><span>BUILD / WEB</span><p>I bring design and development together, so the finished site feels as considered as the original idea.</p></div>
    </section>

    <section class="work-section" id="work" aria-labelledby="work-title">
      <div class="section-heading"><div><p class="eyebrow">SELECTED PROJECTS / 2026</p><h2 id="work-title">Selected work<span> (02)</span></h2></div><p class="section-note">Digital products, shaped<br />from screen to screen.</p></div>
      <div class="projects-grid">${projects.map(projectCard).join('')}</div>
    </section>

    <section class="skills-section" aria-labelledby="skills-title">
      <div class="skills-heading"><p class="eyebrow">TOOLS & CAPABILITIES</p><h2 id="skills-title">Design sense.<br /><em>Developer hands.</em></h2></div>
      <div class="skills-groups">
        <div class="skill-group"><span>01 / DESIGN</span><h3>Shape the experience</h3><p>Visual direction, interface design, layouts, and prototypes.</p><ul><li>Figma</li><li>Affinity Designer</li></ul></div>
        <div class="skill-group"><span>02 / FRONTEND</span><h3>Build for the browser</h3><p>Responsive, accessible interfaces with clean structure and thoughtful detail.</p><ul><li>HTML</li><li>CSS</li><li>React</li><li>Vue</li></ul></div>
      </div>
    </section>

    <section class="process-section" id="process" aria-labelledby="process-title">
      <div class="process-heading"><p class="eyebrow">A CLEAR PATH FROM CONCEPT TO LAUNCH</p><h2 id="process-title">How I bring<br /><em>websites to life.</em></h2><p>Each step turns an early idea into a useful, polished digital product.</p></div>
      <div class="process-list">
        <article><span>01</span><div><h3>Understand the idea</h3><p>Clarify the goal, audience, content, and constraints. Gather references and align on what success should feel like.</p></div><b>DISCOVER</b></article>
        <article><span>02</span><div><h3>Plan the experience</h3><p>Organize the information, map the key user journeys, and sketch wireframes for the important screens.</p></div><b>STRUCTURE</b></article>
        <article><span>03</span><div><h3>Design the direction</h3><p>Develop the visual language in Figma, refine layouts, and shape the responsive states before development.</p></div><b>DESIGN</b></article>
        <article><span>04</span><div><h3>Build the website</h3><p>Turn the approved design into responsive interfaces with HTML, CSS, React, or Vue.</p></div><b>DEVELOP</b></article>
        <article><span>05</span><div><h3>Refine and launch</h3><p>Check the experience across screen sizes, polish interactions and accessibility, then prepare the finished site for launch.</p></div><b>DELIVER</b></article>
      </div>
    </section>

    <section class="contact-section" id="contact"><p class="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let’s make<br /><em>it happen.</em></h2><p>Available for thoughtful design and web projects.</p><div class="contact-links"><a href="mailto:lizaremizovads@gmail.com">lizaremizovads@gmail.com ${arrow(true)}</a><a href="tel:+37120099655">+371 20099655 ${arrow(true)}</a></div><span class="contact-orbit" aria-hidden="true">✳</span></section>
  </main>

  <footer class="site-footer"><a class="wordmark" href="#top">ER<span>.</span></a><span>ELIZAVETA REMIZOVA / DIGITAL DESIGN & FRONTEND</span><a href="#top">BACK TO TOP ↑</a></footer>
  <div id="case-root"></div>
`;

const caseRoot = document.querySelector('#case-root');
function closeCase() {
  caseRoot.innerHTML = '';
  document.body.style.overflow = '';
}

document.addEventListener('click', (event) => {
  const openButton = event.target.closest('[data-open]');
  if (openButton) {
    const project = projects.find((item) => item.id === openButton.dataset.open);
    caseRoot.innerHTML = caseStudy(project);
    document.body.style.overflow = 'hidden';
    caseRoot.querySelector('[data-close]').focus();
    return;
  }
  if (event.target.closest('[data-close]') || event.target.classList.contains('case-overlay')) closeCase();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && caseRoot.firstElementChild) closeCase();
});
