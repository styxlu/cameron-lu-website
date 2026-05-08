const profile = {
  name: 'Cameron Lu',
  email: 'cameronlu2009@gmail.com',
  location: 'Online or in St Ives',
  hero: 'A Sydney-based pianist, chamber musician, and teacher shaped by classical tradition, chamber dialogue, and thoughtful musical craft.',
  biography:
    'Cameron Lu is a Sydney-based pianist, chamber musician, and teacher whose musical journey began at the age of five. From those earliest steps at the keyboard, he has been mentored by the distinguished Russian pianist and pedagogue Katya Makarova, a teacher renowned for her commitment to the great Russian piano tradition.',
  qualifications: ['LMusA in Piano', 'AMusA with Distinction in Piano'],
  competitions: ['Multiple eisteddfod wins and placings']
};

const routes = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'teaching', label: 'Tuition' },
  { id: 'theory', label: 'Theory' },
  { id: 'contact', label: 'Contact' }
];

const meta = {
  home: ['Cameron Lu | Pianist, Chamber Musician & Music Teacher', 'Sydney pianist and teacher offering piano, theory, musicianship, and practice coaching.'],
  about: ['About Cameron Lu | Sydney Pianist', 'Cameron Lu studied from age five with Katya Makarova and performs as a pianist and chamber musician.'],
  achievements: ['Achievements | Cameron Lu', 'Qualifications, scholarships, and eisteddfod achievements for Sydney pianist Cameron Lu.'],
  teaching: ['Tuition | Cameron Lu', 'Piano, practice coaching, music theory, and musicianship lessons online or in St Ives.'],
  theory: ['Theory Lessons | Cameron Lu', 'AMEB Musicianship and Theory classes for Beginner, Intermediate, and Advanced students.'],
  contact: ['Contact | Cameron Lu', 'Contact Cameron Lu for piano, practice coaching, music theory, and musicianship lessons.']
};

const teaching = [
  ['piano', 'Piano Lessons', 'Private piano lessons from preliminary grade to advanced, shaped around tone, technique, interpretation, and confident musical communication.'],
  ['book', 'Music Theory & Musicianship', 'Clear, structured support for theory and musicianship, AMEB Grades 1-6, available online or in St Ives for students who want stronger musical understanding.'],
  ['spark', 'Practice Coaching', 'Focused coaching for practice habits, exam preparation, recital polish, and making weekly work at the piano more productive.']
];

const achievements = [
  'Sydney private school scholarship recipient',
  'Multiple eisteddfod competition winner',
  'Licentiate in Music, Australia in Piano',
  'Associate in Music, Australia with Distinction in Piano',
  'Chamber music performer and solo pianist'
];

const pillars = [
  ['Tradition', 'Rooted in the Russian school of piano playing.'],
  ['Curiosity', 'An evolving repertoire across periods and styles.'],
  ['Collaboration', 'Chamber music as a form of conversation.'],
  ['Generosity', 'Mentorship as the natural continuation of learning.']
];

const theoryLevels = [
  ['Beginner', 'No prior knowledge required. Start from scratch: master basic notation, rhythms, and single-line melodies. Build confidence in sight-reading and ear training through fun, interactive exercises. Ideal for young students or complete beginners.'],
  ['Intermediate', 'Basic theory and dictation skills assumed. Dive deeper into musical harmony, compound time, and multi-line melodic dictation. Learn to analyse chords, progressions, and notate complex rhythms with accuracy, essential for AMEB Grade 3-5.'],
  ['Advanced', 'Strong theory foundation required. Tackle complex harmonic sequences, modulations, and advanced aural analysis. Develop the ability to resolve progressions, notate full textures, and prepare for AMEB Grade 6+ and Associate-level exams.']
];

const musicianshipGrades = [
  ['1st Grade', 'Basic theory, introduction to keys and scales, intervals and chords, time and rhythm, signs and terms.'],
  ['2nd Grade', 'Basic theory, recognition and writing of scales, intervals and chords, times and rhythms, signs, terms and general knowledge topics.'],
  ['3rd Grade', 'Basics of four-part chord writing and study of simple musical forms.'],
  ['4th Grade', 'Aural training, harmonising cadences, history and general knowledge topics.'],
  ['5th Grade', 'Aural training, four-part harmony and melody writing, history and general knowledge topics.'],
  ['6th Grade', 'Aural training, four-part harmony and melody writing, history and general knowledge topics.']
];

const theoryGrades = [
  ['1st Grade', 'Basic theory, introduction to keys and scales, intervals and chords, time and rhythm, and terminology.'],
  ['2nd Grade', 'Basic theory, recognition and writing of scales, intervals and chords, times and rhythms, terminology and general knowledge topics.'],
  ['3rd Grade', 'Basics of four-part chord writing, harmonising cadences and study of simple musical forms.'],
  ['4th Grade', 'Four-part harmony and melody writing, history and general knowledge topics.'],
  ['5th Grade', 'Four-part harmony and melody writing, history and general knowledge topics.'],
  ['6th Grade', 'Advanced four-part harmony and melody writing, history and general knowledge topics.']
];

function icon(name) {
  const paths = {
    mail: '<path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/>',
    arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    award: '<circle cx="12" cy="8" r="5"/><path d="m8.5 12.5-2 7 5.5-3 5.5 3-2-7"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21z"/><path d="M4 5.5V21"/>',
    cap: '<path d="m3 8 9-4 9 4-9 4z"/><path d="M7 10.5V15c2.5 2 7.5 2 10 0v-4.5"/>',
    map: '<path d="M12 21s7-5.4 7-12a7 7 0 0 0-14 0c0 6.6 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/>',
    music: '<path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/>',
    piano: '<path d="M4 7h16v10H4z"/><path d="M8 7v10M12 7v10M16 7v10"/><path d="M6 7v5M10 7v5M14 7v5M18 7v5"/>',
    spark: '<path d="M12 2 14.8 9.2 22 12l-7.2 2.8L12 22l-2.8-7.2L2 12l7.2-2.8z"/>',
    trophy: '<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4a3 3 0 0 0 3 3M17 6h3a3 3 0 0 1-3 3"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-8 0v2"/><circle cx="12" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.music}</svg>`;
}

function shell(content) {
  return `
    <header class="site-header">
      <a class="brand" href="#home" aria-label="Cameron Lu home"><span>Cameron Lu</span><small>Pianist · Teacher</small></a>
      <nav class="nav" aria-label="Main navigation">
        ${routes.map((route) => `<a data-route="${route.id}" href="#${route.id}">${route.label}</a>`).join('')}
      </nav>
      <a class="header-contact" href="mailto:${profile.email}" aria-label="Email Cameron Lu">${icon('mail')}<span>Enquire</span></a>
    </header>
    <main>${content}</main>
    <footer class="site-footer">
      <div><strong>Cameron Lu</strong><span>Pianist · Chamber Musician · Teacher</span></div>
      <a href="mailto:${profile.email}">${profile.email}</a>
    </footer>
  `;
}

function pageHero(label, title, text, image = '') {
  return `
    <section class="page-hero section-dark ${image ? '' : 'no-image'}">
      ${image ? `<img src="${image}" alt="${label} - Cameron Lu at the piano">` : ''}
      <div>
        <p class="section-label">${label}</p>
        <h1>${title}</h1>
        <span class="gold-rule"></span>
        <p>${text}</p>
      </div>
    </section>
  `;
}

const pages = {
  home: () => `
    <section class="hero section-dark">
      <img class="hero-bg" src="cameron%202.png" alt="Cameron Lu performing piano in the Utzon Room at the Sydney Opera House">
      <div class="hero-copy">
        <p class="hero-role">Pianist · Chamber Musician · Teacher</p>
        <h1>Cameron Lu</h1>
        <p>${profile.hero}</p>
        <div class="hero-actions">
          <a class="button primary" href="#about">The Artist</a>
          <a class="button secondary" href="#contact">Enquire</a>
        </div>
      </div>
    </section>
    <section class="intro-band">
      ${stat('cap', 'Qualifications', 'LMusA, AMusA Distinction')}
      ${stat('trophy', 'Eisteddfods', 'Sydney, National, Ryde, Wollongong, Bathurst')}
      ${stat('map', 'Lessons', 'Online or in St Ives')}
    </section>
    <section class="split-section">
      <div>
        <h2>A musical journey</h2>
        <p class="large-text">${profile.biography}</p>
        <a class="text-link" href="#about">Read Cameron's story ${icon('arrow')}</a>
      </div>
      <figure class="portrait-frame">
        <img src="cameron%203.png" alt="Cameron Lu seated at the piano in performance">
        <figcaption>Sydney Opera House · Utzon Room</figcaption>
      </figure>
    </section>
    ${teachingPreview()}
  `,
  about: () => `
    ${pageHero('Biography', 'The making of a <em>musician</em>', 'A pianist shaped by early discipline, performance experience, and a deep respect for classical musicianship.')}
    <section class="split-section about-story">
      <figure class="portrait-frame"><img src="cameron%201.png" alt="Cameron Lu performing at the Sydney Opera House Utzon Room"></figure>
      <div>
        <p class="large-text">${profile.biography}</p>
        <p>Cameron holds the Licentiate in Music, Australia (LMusA) in Piano and the Associate in Music, Australia (AMusA) with Distinction in Piano — two of the highest performance diplomas awarded by the AMEB.</p>
        <p>He is a scholarship recipient at one of Sydney's leading private schools, where his musicianship is recognised alongside broader academic excellence. He performs regularly as a soloist and chamber partner, drawn to the intimate dialogue of small ensemble playing.</p>
        <p>Beyond the stage, Cameron is a dedicated teacher of piano, music theory, and musicianship — sharing his love of the craft with students of all levels.</p>
      </div>
    </section>
    ${pillarsSection()}
  `,
  achievements: () => `
    ${pageHero('Honours', 'Recognition <em>on stage</em>', 'A selection of awards, scholarships, and competition results earned across years of dedicated study and performance.')}
    <section class="achievement-grid">
      ${achievements.map((item) => `<article class="achievement-card">${icon('award')}<h2>${item}</h2></article>`).join('')}
    </section>
    <section class="split-section compact">
      <div><h2>Qualifications</h2>${list(profile.qualifications)}</div>
      <div><h2>Eisteddfod Recognition</h2>${list(profile.competitions)}</div>
    </section>
  `,
  teaching: () => `
    ${pageHero('Studio', 'Tuition & <em>mentorship</em>', 'Piano, practice coaching, music theory, and musicianship lessons for students seeking thoughtful musical progress.', 'cameron%203.png')}
    <section class="teaching-list">
      ${teaching.map(([iconName, title, text]) => `<article class="teaching-row">${icon(iconName)}<div><h2>${title}</h2><p>${text}</p></div></article>`).join('')}
    </section>
    <section class="theory-note">
      <div>
        <p class="section-label">Theory pathway</p>
        <h2>AMEB theory and musicianship support</h2>
      </div>
      <p>Lessons can support AMEB Grades 1-6, from notation, rhythm, keys, scales, intervals and chords through to harmony, melody writing, aural training, history and general knowledge.</p>
      <a class="text-link" href="#theory">View theory classes ${icon('arrow')}</a>
    </section>
    <section class="lesson-band section-dark">
      <h2>Lessons are available online or in St Ives.</h2>
      <p>Suitable for students from preliminary grade through to advanced level.</p>
      <a class="button primary" href="#contact">Make an enquiry ${icon('arrow')}</a>
    </section>
  `,
  theory: () => `
    ${pageHero('Theory', 'AMEB Exams — <em>Musicianship & Theory</em>', 'One-to-one and small-group lessons for students who want a clearer, stronger understanding of music beyond the keyboard.')}
    <section class="theory-intro">
      <div>
        <h2>What is music theory?</h2>
        <p>Music theory is the language behind the sound: notation, rhythm, scales, keys, intervals, chords, harmony, form, aural awareness and musical terminology. It helps students read more confidently, practise more intelligently, and understand why music moves the way it does.</p>
      </div>
      <div>
        <h2>Class format</h2>
        <p>Theory lessons are available one-to-one or in small groups, allowing students to receive personalised attention while progressing at the right pace. Three levels are available — Beginner, Intermediate and Advanced — aligned with AMEB Musicianship and Theory syllabuses. Lessons are available in St Ives or online, with flexible scheduling to suit school timetables.</p>
      </div>
    </section>
    <section class="level-grid">
      ${theoryLevels.map(([title, text]) => `<article><p class="section-label">${title}</p><p>${text}</p></article>`).join('')}
    </section>
    <section class="syllabus-section">
      <div class="syllabus-heading">
        <p class="section-label">Available classes</p>
        <h2>AMEB grade pathways</h2>
      </div>
      ${gradeTable('AMEB Exams Musicianship', musicianshipGrades)}
      ${gradeTable('AMEB Exams Theory', theoryGrades)}
    </section>
  `,
  contact: () => `
    <section class="contact-hero section-dark">
      <div>
        <p class="section-label">Get in touch</p>
        <h1>Begin a <em>conversation</em></h1>
        <span class="gold-rule"></span>
        <p>For performance bookings, chamber collaborations, or enquiries about piano, music theory, musicianship, and practice coaching, email Cameron directly.</p>
      </div>
      <div class="contact-card">
        <span>Email</span>
        <a href="mailto:${profile.email}">${profile.email}</a>
        <small>Based in Sydney · Available online or in St Ives</small>
      </div>
    </section>
    <section class="contact-details">
      <div>${icon('map')}<h2>Location</h2><p>Online or in St Ives</p></div>
      <div>${icon('users')}<h2>Students</h2><p>Preliminary grade to advanced piano students</p></div>
      <div>${icon('book')}<h2>Subjects</h2><p>Piano, practice coaching, music theory, and musicianship</p></div>
    </section>
  `
};

function stat(iconName, label, value) {
  return `<article>${icon(iconName)}<span>${label}</span><strong>${value}</strong></article>`;
}

function list(items) {
  return `<ul class="lined-list">${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function teachingPreview() {
  return `
    <section class="teaching-preview section-dark">
      <div><h2>Tuition with musical clarity</h2><p>Piano lessons, musicianship, theory, and focused practice coaching, online or in St Ives.</p></div>
      <div class="mini-grid">
        ${teaching.map(([iconName, title]) => `<article>${icon(iconName)}<h3>${title}</h3></article>`).join('')}
      </div>
    </section>
  `;
}

function pillarsSection() {
  return `
    <section class="pillars-section">
      <h2>Pillars of practice</h2>
      <div class="pillar-grid">
        ${pillars.map(([title, text]) => `<article><span>·</span><h3>${title}</h3><p>${text}</p></article>`).join('')}
      </div>
    </section>
  `;
}

function gradeTable(title, rows) {
  return `
    <article class="grade-table">
      <h3>${title}</h3>
      <div>
        ${rows.map(([grade, text]) => `<div class="grade-row"><strong>${grade}</strong><p>${text}</p></div>`).join('')}
      </div>
    </article>
  `;
}

function getRoute() {
  const route = window.location.hash.replace('#', '');
  return pages[route] ? route : 'home';
}

function render() {
  const route = getRoute();
  const [title, description] = meta[route];
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  document.getElementById('root').innerHTML = shell(pages[route]());
  document.querySelectorAll('[data-route]').forEach((link) => {
    link.classList.toggle('active', link.dataset.route === route);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('hashchange', render);
render();
