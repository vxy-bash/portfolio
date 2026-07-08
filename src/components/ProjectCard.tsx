import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Target, Code2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  itemVariants: any;
  modalText: {
    challenge: string;
    learnings: string;
    tech: string;
    repo: string;
    demo: string;
  };
}

export function ProjectCard({ project, itemVariants, modalText }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Große Grid-Karte für Highlight-Projekte
  const cssKlasse = project.featured ? 'col-full featured-project' : '';

  return (
    <>
      <motion.section
        variants={itemVariants}
        className={`card card-project cursor-pointer ${cssKlasse}`}
        style={{ '--c': project.color } as React.CSSProperties}
        onClick={() => setIsOpen(true)}
      >
        <span className="proj-num">{project.num}</span>
        <h3>{project.title}</h3>
        <p className="body">{project.desc}</p>
        
        <div className="tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </motion.section>

      {/* Detail-Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="modal-backdrop" onClick={() => setIsOpen(false)}>
            <motion.div 
              className="modal-content card"
              style={{ '--c': project.color } as React.CSSProperties}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              
              <button className="modal-close" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
              
              <span className="proj-num">{project.num}</span>
              <h2 className="modal-title">{project.title}</h2>
              
              <div className="modal-body body">
                <p className="mb-6 text-lg">{project.desc}</p>
                
                <div className="grid-case-study mt-6">
                  <div className="case-block">
                    <h4 className="case-heading">
                      <Target size={16} className="inline-block mr-2 text-purple-400" /> 
                      {modalText.challenge}
                    </h4>
                    <p>{project.challenge}</p>
                  </div>
                  
                  <div className="case-block mt-4">
                    <h4 className="case-heading">
                      <CheckCircle2 size={16} className="inline-block mr-2 text-green-400" /> 
                      {modalText.learnings}
                    </h4>
                    <p>{project.learnings}</p>
                  </div>

                  <div className="case-block mt-4">
                    <h4 className="case-heading">
                      <Code2 size={16} className="inline-block mr-2 text-blue-400" /> 
                      {modalText.tech}
                    </h4>
                    <div className="tags mt-2">
                      {project.techStack.map(tech => (
                        <span key={tech} className="tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    <Github size={16} /> {modalText.repo}
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-fill">
                    <ExternalLink size={16} /> {modalText.demo}
                  </a>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
