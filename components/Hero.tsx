import React from 'react';
import { ArrowRight, Github, Linkedin, Terminal, Shield, User, Ghost } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-secondary/10 rounded-full blur-[120px] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 w-full text-center lg:text-left z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                System Online
              </div>

              <div>
                <h2 className="text-slate-500 dark:text-slate-400 font-mono text-sm md:text-base mb-2">
                  Hello, World! Meu nome é
                </h2>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                  {PERSONAL_INFO.name}
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 font-mono">
                  <span className="text-primary">&lt;</span>
                  <span className="text-slate-800 dark:text-slate-200">{PERSONAL_INFO.role.split(' & ')[0]}</span>
                  <span className="text-primary"> /&gt;</span>
                  <br className="md:hidden" />
                  <span className="text-sm md:text-2xl text-secondary block md:inline md:ml-2">
                     & {PERSONAL_INFO.role.split(' & ')[1]}
                  </span>
                </h2>
              </div>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed border-l-4 border-slate-300 dark:border-slate-800 pl-4">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <a 
                href="#projects" 
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-slate-900 rounded-lg group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative flex items-center">
                  Explorar Projetos <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-transparent border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-primary dark:hover:border-primary hover:text-primary transition-all font-mono"
              >
                <Terminal className="mr-2 w-4 h-4" />
                Contato
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-8">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <div className="h-6 w-px bg-slate-300 dark:bg-slate-800 mx-2"></div>
              <div className="flex gap-3 text-slate-400">
                <div title="Security Focus">
                  <Shield size={20} className="hover:text-secondary transition-colors" />
                </div>
                <div title="Linux User">
                  <Terminal size={20} className="hover:text-primary transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Visual / Avatar Area */}
          <div className="flex-1 w-full flex justify-center lg:justify-end relative mb-8 lg:mb-0">
            {/* Terminal Window Frame */}
            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px]">
              
              {/* Decorative elements behind */}
              <div className="absolute top-0 right-0 w-full h-full border border-slate-200 dark:border-slate-800 rounded-lg transform rotate-6 scale-95 z-0"></div>
              <div className="absolute top-0 right-0 w-full h-full border border-primary/20 rounded-lg transform -rotate-3 scale-105 z-0"></div>

              {/* Main Container */}
              <div className="relative w-full h-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700 z-10 flex flex-col">
                
                {/* Terminal Header */}
                <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-slate-400 font-mono">root@kali:~</span>
                  </div>
                </div>

                {/* Terminal Content (Image Overlay) */}
                <div className="relative flex-1 bg-slate-950 overflow-hidden group flex items-center justify-center">
                  {PERSONAL_INFO.avatarUrl ? (
                    <img 
                      src={PERSONAL_INFO.avatarUrl} 
                      alt={PERSONAL_INFO.name} 
                      className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-600 gap-3 p-6 text-center">
                      <div className="p-6 rounded-full bg-slate-900 border-2 border-primary/30 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                        <Ghost size={48} className="text-primary/70" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-mono text-primary/80 uppercase tracking-widest">Identity Hidden</p>
                        <p className="text-[10px] font-mono text-slate-600">Incognito Mode Active</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Scanline Effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_51%)] bg-[size:100%_4px] pointer-events-none opacity-20"></div>
                  
                  {/* Code Overlay */}
                  <div className="absolute bottom-0 left-0 w-full bg-slate-900/90 backdrop-blur-sm p-4 border-t border-primary/30">
                     <div className="font-mono text-xs text-primary space-y-1">
                        <p><span className="text-green-500">➜</span> <span className="text-blue-400">~</span> nmap -sC -sV target_server</p>
                        <p className="text-slate-300">Starting Nmap 7.94...</p>
                        <p className="text-slate-300">Discovered open port 80/tcp on {PERSONAL_INFO.name.split(' ')[0].toLowerCase()}</p>
                        <p className="animate-pulse">_</p>
                     </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
               <div className="hidden sm:flex absolute -bottom-6 -left-4 md:-left-8 bg-slate-800/90 backdrop-blur border border-secondary/50 p-3 rounded-lg shadow-xl flex items-center gap-3 z-20">
                <div className="bg-secondary/20 p-2 rounded-md">
                   <Shield className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Status</p>
                  <p className="text-xs font-mono text-white font-bold">SEC_LEVEL: HIGH</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;