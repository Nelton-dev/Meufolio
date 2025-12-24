import React, { useState } from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setStatus('success');
    setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Quer falar sobre código, segurança ou recomendar um anime?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Canais de Comunicação</h3>
              <div className="space-y-6">
                
                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg text-secondary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">WhatsApp</p>
                    <a href={`https://wa.me/258${PERSONAL_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="text-lg font-semibold text-slate-900 dark:text-white hover:text-secondary transition-colors">
                      +258 {PERSONAL_INFO.whatsapp.substring(0, 2)} {PERSONAL_INFO.whatsapp.substring(2, 5)} {PERSONAL_INFO.whatsapp.substring(5)}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Localização</p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 rounded-2xl text-white shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <h3 className="text-xl font-bold mb-4 font-mono text-primary">Student Mode: ON</h3>
              <p className="opacity-90 leading-relaxed mb-6 text-sm">
                Estou sempre buscando aprender e colaborar em projetos open-source ou freelas iniciantes. Se você tem paciência e quer ajudar um dev a crescer, me chame!
              </p>
              <div className="inline-block px-4 py-2 bg-secondary/20 text-secondary border border-secondary/30 rounded-full text-sm font-medium backdrop-blur-sm">
                Aberto a oportunidades
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white resize-none"
                  placeholder="Como posso ajudar?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === 'success'}
                className="w-full flex items-center justify-center py-4 px-6 rounded-xl bg-primary hover:bg-cyan-600 text-white font-bold text-lg shadow-lg hover:shadow-primary/25 transition-all transform active:scale-95"
              >
                {status === 'success' ? 'Mensagem Enviada!' : (
                  <>
                    Enviar Mensagem <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;