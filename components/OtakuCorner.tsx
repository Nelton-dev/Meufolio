import React from 'react';
import { OTAKU_FAVORITES } from '../constants';
import { Flame, Sword, Zap, Image as ImageIcon, Skull } from 'lucide-react';

const OtakuCorner: React.FC = () => {
  return (
    <section id="otaku" className="py-20 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      {/* Decorative Background - darker and more aggressive */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-90"></div>
      
      {/* Japanese Text Background - Red & Ghostly */}
      <div className="absolute top-10 right-0 text-9xl font-black text-red-600 opacity-5 pointer-events-none select-none hidden lg:block font-mono" style={{ writingMode: 'vertical-rl' }}>
        強さ
      </div>
      <div className="absolute bottom-10 left-10 text-9xl font-black text-red-600 opacity-5 pointer-events-none select-none hidden lg:block font-mono">
        攻撃
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3 uppercase tracking-wider">
             <Flame className="text-accent fill-accent animate-pulse" size={32} /> 
             Zona Otaku
             <Flame className="text-accent fill-accent animate-pulse" size={32} />
          </h2>
          <p className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4 font-bold">Inspiração & Poder</p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OTAKU_FAVORITES.map((anime) => (
            <div 
              key={anime.id} 
              className="group relative bg-slate-950 rounded-xl overflow-hidden shadow-2xl border border-slate-800 hover:border-accent transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Banner */}
              <div className="h-48 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                {anime.imageUrl ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-10 opacity-60 sm:opacity-30 md:opacity-80"></div>
                    <img 
                      src={anime.imageUrl} 
                      alt={anime.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-125 relative z-0"
                    />
                    <div className="absolute top-2 right-2 z-20 bg-accent/90 px-2 py-0.5 transform skew-x-[-10deg]">
                      <span className="text-xs text-white font-black uppercase tracking-tighter">Top Tier</span>
                    </div>
                  </>
                ) : (
                   <div className="flex flex-col items-center justify-center text-slate-600 group-hover:text-accent transition-colors">
                      <Skull size={40} strokeWidth={1.5} />
                      <span className="text-xs mt-2 font-mono uppercase tracking-widest">Sem Imagem</span>
                   </div>
                )}
              </div>

              <div className="p-6 relative z-20">
                <h3 className="text-xl font-black text-white mb-3 uppercase italic tracking-wide group-hover:text-accent transition-colors">
                  {anime.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-4 text-xs font-mono text-slate-500">
                   <Sword className="w-3 h-3 text-slate-400" />
                   <span>STATUS: <span className="text-green-500">LENDÁRIO</span></span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4 border-l-4 border-accent pl-3 italic font-medium bg-slate-900/50 py-2">
                  "{anime.quote}"
                </p>
                
                <p className="text-slate-500 text-xs font-mono">
                  {anime.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtakuCorner;