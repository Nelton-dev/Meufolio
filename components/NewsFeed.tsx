import React, { useState, useEffect } from 'react';
    import { Radio, RefreshCw, ExternalLink, ShieldAlert, Newspaper } from 'lucide-react';
    import { fetchLatestNews } from '../services/geminiService';
    
    const NewsFeed: React.FC = () => {
      const [news, setNews] = useState<string>('');
      const [sources, setSources] = useState<string[]>([]);
      const [loading, setLoading] = useState(true);
    
      const getNews = async () => {
        setLoading(true);
        const data = await fetchLatestNews();
        setNews(data.content);
        setSources(data.sources as string[]);
        setLoading(false);
      };
    
      useEffect(() => {
        getNews();
      }, []);
    
      return (
        <section className="bg-slate-950 border-t border-slate-900 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg overflow-hidden">
              
              {/* Header do Feed */}
              <div className="bg-slate-900 p-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                     <Radio className={`w-5 h-5 ${loading ? 'text-red-500 animate-pulse' : 'text-secondary'}`} />
                     {loading && <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>}
                  </div>
                  <div>
                    <h3 className="text-white font-mono font-bold text-sm uppercase tracking-wider">Intel Feed</h3>
                    <p className="text-xs text-slate-500 font-mono">Google News Protocol // Live Updates</p>
                  </div>
                </div>
                <button 
                  onClick={getNews} 
                  disabled={loading}
                  className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white disabled:opacity-50"
                  title="Atualizar Intel"
                >
                  <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
                </button>
              </div>
    
              {/* Conteúdo */}
              <div className="p-6 min-h-[200px]">
                {loading ? (
                  <div className="space-y-4 animate-pulse">
                    <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-800 rounded w-full"></div>
                    <div className="h-4 bg-slate-800 rounded w-5/6"></div>
                    <div className="h-4 bg-slate-800 rounded w-1/2"></div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="prose prose-invert prose-sm max-w-none font-mono text-slate-300">
                       <div className="whitespace-pre-line leading-relaxed">
                        {/* Render simple markdown-like structure */}
                        {news.split('\n').map((line, i) => {
                          if (line.startsWith('**') || line.startsWith('#')) return <strong key={i} className="block text-white mt-4 mb-2 text-base">{line.replace(/\*\*/g, '')}</strong>;
                          if (line.startsWith('*') || line.startsWith('-')) return <div key={i} className="flex gap-2 ml-2 mb-2"><span className="text-accent">•</span><span>{line.replace(/^[\*\-]\s*/, '')}</span></div>;
                          return <p key={i}>{line}</p>;
                        })}
                       </div>
                    </div>
    
                    {sources.length > 0 && (
                      <div className="mt-8 pt-4 border-t border-slate-800">
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                           <ShieldAlert size={12} /> Fontes Detectadas
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {sources.slice(0, 3).map((url, idx) => (
                            <a 
                              key={idx}
                              href={url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs text-blue-400 hover:text-blue-300 transition-colors truncate max-w-[200px]"
                            >
                              <ExternalLink size={10} />
                              {new URL(url).hostname.replace('www.', '')}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
    
              <div className="bg-slate-950 px-4 py-2 text-[10px] text-slate-600 font-mono text-right border-t border-slate-800">
                SECURE_CONNECTION_ESTABLISHED_V1.0
              </div>
            </div>
          </div>
        </section>
      );
    };
    
    export default NewsFeed;