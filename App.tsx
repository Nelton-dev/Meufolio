import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import OtakuCorner from './components/OtakuCorner';
import NewsFeed from './components/NewsFeed';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme based on preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Update HTML class for Tailwind dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero />
        <OtakuCorner />
        <Skills />
        <Projects />
        <Experience />
        <NewsFeed />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;