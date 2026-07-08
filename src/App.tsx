import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Mail, Briefcase, MapPin, MessageCircle, Github, HelpCircle, Activity, Send } from 'lucide-react';

import { Language, TRANSLATIONS, SKILL_CATEGORIES, PROJECTS } from './data/portfolioData';
import { VideoBackground } from './components/VideoBackground';
import { SkillBar } from './components/SkillBar';
import { ProjectCard } from './components/ProjectCard';
import { Dock } from './components/Dock';
import { LanguageSwitch } from './components/LanguageSwitch';
import './App.css';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4';

const pageAnimation: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const itemAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function App() {
  const [tab, setTab] = useState('home');
  const [lang, setLang] = useState<Language>('de');

  // Formular-State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMsg, setFormMsg] = useState('');

  const t = TRANSLATIONS[lang];
  const projects = PROJECTS[lang];
  const skillCategories = SKILL_CATEGORIES[lang];

  const TABS = [
    { id: 'home', label: t.nav.home },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Daten verarbeiten und E-Mail mit den Eingaben vorbereiten
    const subject = encodeURIComponent(`Portfolio Kontakt: ${formName}`);
    const body = encodeURIComponent(`${formMsg}\n\n---\nGesendet von:\n${formName}\n${formEmail}`);
    
    // Öffnet den Mail-Client mit den vorausgefüllten Formulardaten
    window.location.href = `mailto:gabriel.knauder@itlabs.at?subject=${subject}&body=${body}`;
    
    // Formular leeren nach dem Absenden
    setFormName('');
    setFormEmail('');
    setFormMsg('');
  };

  return (
    <div className="root">
      <VideoBackground videoUrl={VIDEO_URL} />
      <LanguageSwitch currentLang={lang} onLanguageChange={setLang} />

      <div className="wrap">
        <AnimatePresence mode="wait">
          
          {/* HOME TAB */}
          {tab === 'home' && (
            <motion.div key="home" className="grid" variants={pageAnimation} initial="hidden" animate="show" exit="exit">
              
              <motion.section variants={itemAnimation} className="card hero col-full">
                <span className="eyebrow">{t.hero.eyebrow}</span>
                <h1>{t.hero.title}<br />{t.hero.title2}<br />{t.hero.title3}</h1>
                <div className="status-pill">
                  <span className="live-dot" />
                  <span>{t.hero.statusAvailable}</span>
                  <span className="muted">{t.hero.statusSub}</span>
                </div>
              </motion.section>

              <motion.section variants={itemAnimation} className="card col-span-2">
                <span className="eyebrow">{t.about.eyebrow}</span>
                <p className="body text-lg mt-2">
                  {t.about.content1}<strong>{t.about.name}</strong>{t.about.content2}
                </p>
              </motion.section>

              <motion.section variants={itemAnimation} className="card">
                <span className="eyebrow">{t.timeline.eyebrow}</span>
                <div className="timeline mt-4">
                  {t.timeline.items.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-dot" />
                      <div className="timeline-content">
                        <span className="timeline-year">{item.year}</span>
                        <h4 className="timeline-title">{item.title}</h4>
                        <p className="muted sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {skillCategories.map((category, index) => (
                <motion.section key={index} variants={itemAnimation} className="card">
                  <span className="eyebrow">{category.title}</span>
                  <div className="skill-list mt-4">
                    {category.skills.map(skill => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </motion.section>
              ))}

              <motion.section variants={itemAnimation} className="card card-focus col-full mt-2 mb-4">
                <div className="cta-inner flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <span className="eyebrow">{t.cta.eyebrow}</span>
                    <h2 className="mt-2 text-2xl font-bold">{t.cta.title}</h2>
                    <p className="body max-w-2xl mt-2">{t.cta.desc}</p>
                  </div>
                  <button onClick={() => setTab('contact')} className="btn-fill mt-6 md:mt-0 whitespace-nowrap">
                    <MessageCircle size={18} className="mr-2 inline-block" /> {t.cta.btn}
                  </button>
                </div>
              </motion.section>

            </motion.div>
          )}

          {/* PROJECTS TAB */}
          {tab === 'projects' && (
            <motion.div key="projects" className="grid" variants={pageAnimation} initial="hidden" animate="show" exit="exit">
              
              <motion.section variants={itemAnimation} className="card col-span-2">
                <span className="eyebrow">{t.projectsTab.introEyebrow}</span>
                <h2 className="mt-2 text-2xl font-bold">{t.projectsTab.introTitle}</h2>
                <p className="body text-lg mt-4">{t.projectsTab.introDesc}</p>
              </motion.section>

              <motion.section variants={itemAnimation} className="card card-focus">
                <span className="eyebrow">
                  <Activity size={12} className="inline-block mr-1" /> {t.projectsTab.githubStats}
                </span>
                <h3 className="mt-2 text-xl font-bold">Continuous Integration</h3>
                <p className="body mt-2">{t.projectsTab.githubStatsDesc}</p>
                <div className="mt-4 flex gap-4">
                  <div className="stats-box">
                    <span className="block text-2xl font-bold text-green-400">25+</span>
                    <span className="text-xs muted uppercase tracking-wider">Commits / Month</span>
                  </div>
                </div>
              </motion.section>

              {projects.map(project => (
                <ProjectCard key={project.num} project={project} itemVariants={itemAnimation} modalText={t.modal} />
              ))}

            </motion.div>
          )}

          {/* CONTACT TAB */}
          {tab === 'contact' && (
            <motion.div key="contact" className="grid" variants={pageAnimation} initial="hidden" animate="show" exit="exit">
              
              <motion.section variants={itemAnimation} className="card col-full hero" style={{ padding: '42px', background: 'linear-gradient(142deg, rgba(56, 189, 248, 0.1), rgba(6, 4, 16, 0.35))', borderColor: 'rgba(56, 189, 248, 0.22)' }}>
                <span className="eyebrow text-blue-400">{t.contactTab.heroEyebrow}</span>
                <h1 className="contact-h text-4xl mt-2 mb-4" style={{ WebkitTextFillColor: '#fff' }}>{t.contactTab.heroTitle}</h1>
                <p className="body text-lg max-w-2xl">{t.contactTab.heroDesc}</p>
              </motion.section>

              {/* Kontaktformular */}
              <motion.section variants={itemAnimation} className="card col-span-2">
                <h2 className="text-2xl font-bold mb-6">{t.contactTab.formTitle}</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>{t.contactTab.formName}</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>{t.contactTab.formEmail}</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>{t.contactTab.formMessage}</label>
                    <textarea 
                      rows={4} 
                      placeholder="..." 
                      value={formMsg}
                      onChange={(e) => setFormMsg(e.target.value)}
                      required 
                    />
                  </div>
                  <button type="submit" className="btn-fill mt-2">
                    <Send size={16} className="mr-2 inline-block" /> {t.contactTab.formSubmit}
                  </button>
                </form>
              </motion.section>

              <div className="flex flex-col gap-14px">
                <motion.section variants={itemAnimation} className="card">
                  <span className="eyebrow">{t.contact.eyebrow}</span>
                  
                  <strong className="card-title mt-2"><Github size={18} className="inline-block mr-2" />{t.contact.github}</strong>
                  <a href={t.contact.githubUrl} target="_blank" rel="noopener noreferrer" className="ghost-link mt-2">
                    {t.contact.githubLink}
                  </a>
                  
                  <div className="mt-6">
                    <strong className="card-title"><Mail size={18} className="inline-block mr-2 text-purple-400" /> E-Mail</strong>
                    <a href="mailto:gabriel.knauder@itlabs.at" className="ghost-link mt-2 text-sm lowercase">
                      gabriel.knauder@itlabs.at
                    </a>
                  </div>

                  <div className="mt-6">
                    <strong className="card-title"><MapPin size={18} className="inline-block mr-2 text-green-400" /> {t.contact.location}</strong>
                    <p className="muted sm mt-2">{t.contact.locationDesc}</p>
                  </div>
                </motion.section>
              </div>

              <motion.section variants={itemAnimation} className="card col-full mt-2 mb-8">
                <span className="eyebrow">
                  <HelpCircle size={14} className="inline-block mr-2" />{t.contactTab.faqEyebrow}
                </span>
                <h2 className="text-2xl font-bold mt-2 mb-6">{t.contactTab.faqTitle}</h2>
                <div className="faq-grid">
                  {t.contactTab.faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                      <h4 className="font-bold mb-2">{faq.q}</h4>
                      <p className="body">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Dock tabs={TABS} activeTab={tab} onTabChange={setTab} />
    </div>
  );
}
