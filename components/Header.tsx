import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Terminal } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Terminal', href: '#about' },
    { name: 'Cantinho Otaku', href: '#otaku' }, // New Link
    { name: 'Skills', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-lg border-slate-200 dark:border-slate-800 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="bg-slate-900 dark:bg-slate-800 border border-slate-700 p-2 rounded-lg group-hover:border-primary transition-colors">
                <Terminal className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white font-mono">
                nelton<span className="text-primary">@dev</span>:~$
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium font-mono transition-colors ${link.name === 'Cantinho Otaku' ? 'text-accent hover:text-pink-400' : 'text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary'}`}
              >
                <span className={`${link.name === 'Cantinho Otaku' ? 'text-accent' : 'text-primary'} mr-1`}>{link.name === 'Cantinho Otaku' ? '★' : '>'}</span>{link.name}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-transparent dark:border-slate-700"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 shadow-xl border-t border-slate-200 dark:border-slate-800">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-medium font-mono hover:bg-slate-50 dark:hover:bg-slate-900 border-l-2 border-transparent hover:border-primary ${link.name === 'Cantinho Otaku' ? 'text-accent' : 'text-slate-700 dark:text-slate-300'}`}
              >
                <span className={`${link.name === 'Cantinho Otaku' ? 'text-accent' : 'text-primary'} mr-2`}>{link.name === 'Cantinho Otaku' ? '★' : './'}</span>{link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;