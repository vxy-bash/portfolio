export type Language = 'de' | 'en';

export interface Project {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  color: string;
  challenge: string;
  learnings: string;
  techStack: string[];
  repoUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const SKILL_CATEGORIES: Record<Language, SkillCategory[]> = {
  de: [
    {
      title: 'Frontend & UI',
      skills: [
        { name: 'React', level: 75 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 70 },
        { name: 'Tailwind CSS', level: 80 },
      ]
    },
    {
      title: 'Backend & Logic',
      skills: [
        { name: 'C#', level: 85 },
        { name: '.NET', level: 45 },
        { name: 'OOP', level: 80 },
        { name: 'SQL', level: 50 },
      ]
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git & GitHub', level: 75 },
        { name: 'Visual Studio', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Figma', level: 60 },
      ]
    }
  ],
  en: [
    {
      title: 'Frontend & UI',
      skills: [
        { name: 'React', level: 75 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 70 },
        { name: 'Tailwind CSS', level: 80 },
      ]
    },
    {
      title: 'Backend & Logic',
      skills: [
        { name: 'C#', level: 85 },
        { name: '.NET', level: 45 },
        { name: 'OOP', level: 80 },
        { name: 'SQL', level: 50 },
      ]
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git & GitHub', level: 75 },
        { name: 'Visual Studio', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Figma', level: 60 },
      ]
    }
  ]
};

export const PROJECTS: Record<Language, Project[]> = {
  de: [
    {
      num: '01',
      title: 'Portfolio 2026 (V2)',
      desc: 'Mein persönliches Webportfolio. Entwickelt mit React und fortschrittlichem CSS. Nutzt komplexe Liquid-Glass-Effekte, performante Animationen und eine modulare TypeScript-Architektur.',
      tags: ['React', 'TypeScript', 'Framer Motion'],
      color: '#ec4899',
      challenge: 'Ein Design zu entwickeln, das modern (Glassmorphismus) und gleichzeitig hochperformant und zugänglich ist, ohne auf schwere UI-Bibliotheken zurückzugreifen.',
      learnings: 'Umfangreiches Wissen im Bereich Frontend-Architektur, Zustandverwaltung in React, Animationen mit Framer Motion und Einsatz von modernem, semantischem HTML/CSS aufgebaut.',
      techStack: ['React 19', 'TypeScript', 'Vite', 'Framer Motion', 'Lucide React'],
      repoUrl: 'https://github.com/vxy-bash',
      featured: true, // Markiert als großes Projekt
    },
    {
      num: '02',
      title: 'Blackjack WPF',
      desc: 'Implementierung des klassischen Blackjack-Spiels mit WPF und strikter Anwendung von Objektorientierter Programmierung zur Trennung von Spiellogik und UI.',
      tags: ['C#', 'WPF', 'OOP'],
      color: '#38bdf8',
      challenge: 'Die strikte Trennung von Geschäftslogik (Kartenwerte, Gewinnbedingungen) und der Benutzeroberfläche (WPF-XAML) war anfangs komplex, speziell beim Daten-Binding.',
      learnings: 'Dieses Projekt hat mir die Augen für Architektur-Patterns und sauberes Code-Design geöffnet. Die Bedeutung von Klassen, Vererbung und lose gekoppelten Komponenten wurde hier zur Praxis.',
      techStack: ['C#', 'WPF', 'XAML', 'MVVM-Basics'],
      repoUrl: 'https://github.com/vxy-bash',
    },
    {
      num: '03',
      title: '64 Aufgaben in C#',
      desc: 'Konsolenanwendung zur praktischen Anwendung von C#-Kernkonzepten. Implementierung von Algorithmen unter Verwendung von Datenstrukturen und Kontrollstrukturen.',
      tags: ['C#', 'Console', 'Algorithms'],
      color: '#a855f7',
      challenge: 'Die Herausforderung bestand darin, 64 unterschiedliche, isolierte Problemstellungen algorithmisch sauber und effizient zu lösen, ohne dabei den Überblick in der Code-Basis zu verlieren.',
      learnings: 'Ich habe tiefes Verständnis für Arrays, Enums, Schleifen und grundlegende objektorientierte Konzepte erlangt. Ebenso verbesserte sich mein analytisches Denken beim Debugging massiv.',
      techStack: ['C# 12', '.NET 8', 'Visual Studio'],
      repoUrl: 'https://github.com/vxy-bash',
    },
  ],
  en: [
    {
      num: '01',
      title: 'Portfolio 2026 (V2)',
      desc: 'My personal web portfolio. Built with React and advanced CSS, featuring custom liquid-glass effects, performant animations, and a modular TypeScript architecture.',
      tags: ['React', 'TypeScript', 'Framer Motion'],
      color: '#ec4899',
      challenge: 'Designing a UI that is highly modern (glassmorphism) while remaining performant and accessible, without relying on heavy UI frameworks.',
      learnings: 'Built extensive knowledge in frontend architecture, state management in React, fluid animations via Framer Motion, and modern semantic HTML/CSS.',
      techStack: ['React 19', 'TypeScript', 'Vite', 'Framer Motion', 'Lucide React'],
      repoUrl: 'https://github.com/vxy-bash',
      featured: true,
    },
    {
      num: '02',
      title: 'Blackjack WPF',
      desc: 'Implementation of the classic Blackjack game using WPF. Focus on object-oriented programming (OOP) to cleanly separate game logic and UI components.',
      tags: ['C#', 'WPF', 'OOP'],
      color: '#38bdf8',
      challenge: 'Strictly separating business logic (card values, win conditions) from the user interface (WPF XAML) and mastering data binding.',
      learnings: 'Opened my eyes to architectural patterns and clean code design. The importance of classes, inheritance, and loosely coupled components became very clear.',
      techStack: ['C#', 'WPF', 'XAML', 'MVVM Basics'],
      repoUrl: 'https://github.com/vxy-bash',
    },
    {
      num: '03',
      title: '64 Tasks in C#',
      desc: 'A console-based project focusing on mastering C# fundamentals including arrays, enums, variables, loops, and basic OOP principles.',
      tags: ['C#', 'Console', 'Algorithms'],
      color: '#a855f7',
      challenge: 'The main challenge was solving 64 distinct, isolated problems cleanly and efficiently without losing oversight in a growing codebase.',
      learnings: 'Gained a deep understanding of core C# constructs, algorithms, and debugging. Significantly improved my analytical problem-solving skills.',
      techStack: ['C# 12', '.NET 8', 'Visual Studio'],
      repoUrl: 'https://github.com/vxy-bash',
    },
  ],
};

export const TRANSLATIONS = {
  de: {
    nav: {
      home: 'Home',
      projects: 'Projekte',
      contact: 'Kontakt',
    },
    hero: {
      eyebrow: 'Portfolio 2026',
      title: 'Code.',
      title2: 'Passion.',
      title3: 'Future.',
      statusAvailable: 'Offen für Firmen',
      statusSub: ' · Suche Praktika ab sofort.',
    },
    about: {
      eyebrow: 'Über mich',
      content1: 'Hallo, ich bin ',
      name: 'Gabriel Knauder',
      content2: '. Ich liebe es, Probleme durch eleganten Code zu lösen. Mein Fokus liegt auf klaren Strukturen im Backend und beeindruckenden Erlebnissen im Frontend. Ich lerne jeden Tag dazu und suche stets nach der nächsten großen Herausforderung, um echten Mehrwert in realen Projekten zu schaffen.',
    },
    timeline: {
      eyebrow: 'Werdegang',
      items: [
        { year: 'Ab Okt 2025', title: 'Lehrling Applikationsentwicklung', desc: 'Start im It-L@b Villach. Fokus auf Coding & Architektur.' },
        { year: 'Zukunft', title: 'Praktikum & Spezialisierung', desc: 'Suche nach Firmen, um Produktivcode zu schreiben.' }
      ]
    },
    skills: {
      eyebrow: 'Kompetenzen',
      note: '*Kontinuierliche Weiterbildung ist für mich essenziell.',
    },
    cta: {
      eyebrow: 'Warum ich?',
      title: 'Lernbereit & Motiviert',
      desc: 'Ich bringe nicht nur technisches Grundverständnis mit, sondern vor allem die Leidenschaft, mich schnell in neue Stacks einzuarbeiten und im Team zu wachsen.',
      btn: 'Lass uns sprechen'
    },
    projectsTab: {
      introEyebrow: 'Meine Arbeiten',
      introTitle: 'Projekte & Philosophie',
      introDesc: 'Jedes Projekt ist für mich mehr als nur Code – es ist eine Möglichkeit, Architektur-Patterns zu verstehen, saubere Benutzeroberflächen zu designen und neue Technologien zu beherrschen. Hier ist ein Auszug meiner bisherigen Meilensteine.',
      githubStats: 'GitHub Aktivität',
      githubStatsDesc: 'Ich committe fast täglich und arbeite kontinuierlich an meinen Skills. Mein Profil zeigt meine Lernkurve.',
    },
    contactTab: {
      heroEyebrow: 'Lass uns starten',
      heroTitle: 'Bereit für die nächste Herausforderung',
      heroDesc: 'Egal ob für ein Praktikum, eine technische Frage oder ein gemeinsames Projekt – ich bin immer offen für ein Gespräch. Schreib mir einfach!',
      formTitle: 'Nachricht senden',
      formName: 'Dein Name',
      formEmail: 'Deine E-Mail',
      formMessage: 'Deine Nachricht',
      formSubmit: 'Senden',
      faqEyebrow: 'Wissenswertes',
      faqTitle: 'Häufig gestellte Fragen',
      faqs: [
        { q: 'Ab wann bist du für ein Praktikum verfügbar?', a: 'Ich suche ab sofort nach Möglichkeiten, um echte Projekterfahrung zu sammeln.' },
        { q: 'Was sind deine bevorzugten Technologien?', a: 'Im Backend fühle ich mich mit C# (.NET) am wohlsten, im Frontend liebe ich React und modernes CSS.' },
      ]
    },
    contact: {
      eyebrow: 'Connect',
      title: 'Netzwerk',
      desc: 'Finde mich auf diesen Plattformen.',
      location: 'Standort',
      locationDesc: '9524 St. Magdalen / Villach',
      github: 'Codebase',
      githubDesc: 'Mein GitHub Profil',
      githubLink: 'github.com/vxy-bash →',
      githubUrl: 'https://github.com/vxy-bash',
    },
    modal: {
      challenge: 'Die Herausforderung',
      learnings: 'Was ich gelernt habe',
      tech: 'Technologien',
      repo: 'Repository',
      demo: 'Live Demo'
    }
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Portfolio 2026',
      title: 'Code.',
      title2: 'Passion.',
      title3: 'Future.',
      statusAvailable: 'Open for Business',
      statusSub: ' · Seeking internships immediately.',
    },
    about: {
      eyebrow: 'About me',
      content1: 'Hi, I am ',
      name: 'Gabriel Knauder',
      content2: ". I love solving problems through elegant code. My focus is on clear backend architectures and stunning frontend experiences. I'm learning daily and constantly seeking the next big challenge to create real value in production projects.",
    },
    timeline: {
      eyebrow: 'Journey',
      items: [
        { year: 'Oct 2025 - Present', title: 'Apprentice Application Developer', desc: 'Started at It-L@b Villach. Focused on coding & architecture.' },
        { year: 'Future', title: 'Internship & Specialization', desc: 'Looking for companies to write production code.' }
      ]
    },
    skills: {
      eyebrow: 'Expertise',
      note: '*Continuous learning is essential to me.',
    },
    cta: {
      eyebrow: 'Why hire me?',
      title: 'Driven & Adaptable',
      desc: 'I bring not only foundational technical skills but, more importantly, the passion to quickly adapt to new tech stacks and thrive in a team environment.',
      btn: 'Let\'s talk'
    },
    projectsTab: {
      introEyebrow: 'My Work',
      introTitle: 'Projects & Philosophy',
      introDesc: 'Every project is more than just code to me – it is an opportunity to understand architecture patterns, design clean interfaces, and master new technologies. Here is an overview of my milestones.',
      githubStats: 'GitHub Activity',
      githubStatsDesc: 'I commit almost daily and continuously work on improving my skills. My profile showcases my learning curve.',
    },
    contactTab: {
      heroEyebrow: 'Let\'s collaborate',
      heroTitle: 'Ready for the next challenge',
      heroDesc: 'Whether it is an internship opportunity, a technical question, or a collaborative project – I am always open to chat. Drop me a line!',
      formTitle: 'Send a Message',
      formName: 'Your Name',
      formEmail: 'Your Email',
      formMessage: 'Your Message',
      formSubmit: 'Send',
      faqEyebrow: 'Good to know',
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { q: 'When are you available for an internship?', a: 'I am looking for opportunities immediately to gain real-world project experience.' },
        { q: 'What are your preferred technologies?', a: 'On the backend, I am most comfortable with C# (.NET). On the frontend, I love React and modern CSS.' },
      ]
    },
    contact: {
      eyebrow: 'Connect',
      title: 'Network',
      desc: 'Find me on these platforms.',
      location: 'Location',
      locationDesc: '9524 St. Magdalen / Villach, Austria',
      github: 'Codebase',
      githubDesc: 'My GitHub Profile',
      githubLink: 'github.com/vxy-bash →',
      githubUrl: 'https://github.com/vxy-bash',
    },
    modal: {
      challenge: 'The Challenge',
      learnings: 'Key Learnings',
      tech: 'Tech Stack',
      repo: 'Repository',
      demo: 'Live Demo'
    }
  },
};
