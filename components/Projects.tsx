import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Image as ImageIcon } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Projetos Recentes</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-900">
                {project.imageUrl ? (
                  <>
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
                       {project.repoUrl && (
                        <a 
                          href={project.repoUrl} 
                          className="p-3 bg-white dark:bg-slate-900 rounded-full text-slate-900 dark:text-white hover:text-primary transition-colors"
                          title="Ver Código"
                        >
                          <Github size={20} />
                        </a>
                       )}
                       {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          className="p-3 bg-white dark:bg-slate-900 rounded-full text-slate-900 dark:text-white hover:text-primary transition-colors"
                          title="Ver Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                       )}
                    </div>
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 dark:text-slate-600">
                    <ImageIcon size={32} className="mb-2" />
                    <span className="text-xs font-mono">Imagem Indisponível</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 min-h-[60px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-primary dark:text-indigo-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;