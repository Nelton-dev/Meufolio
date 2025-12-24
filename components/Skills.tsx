import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Minhas Habilidades</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Um conjunto de tecnologias e ferramentas que domino e utilizo no meu dia a dia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['frontend', 'backend', 'tools'].map((category) => (
            <div key={category} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold capitalize text-slate-800 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
                {category}
              </h3>
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-500 dark:text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
