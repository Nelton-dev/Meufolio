import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Experiência Profissional</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-700"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-[-8px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-slate-900 z-10 mt-1.5"></div>

                <div className="flex-1 md:w-1/2"></div>
                
                <div className="flex-1 md:w-1/2 pl-8 md:pl-0">
                  <div className={`p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 relative hover:border-primary/50 transition-colors ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="flex items-center gap-2 mb-2 text-primary font-semibold text-sm">
                      <Briefcase size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <h4 className="text-lg text-slate-600 dark:text-slate-300 mb-3">{exp.company}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Arrow for Desktop */}
                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white dark:bg-slate-800 border-t border-l border-slate-100 dark:border-slate-700 transform rotate-45 ${index % 2 === 0 ? '-right-2.5 border-r border-b border-t-0 border-l-0' : '-left-2.5'}`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
