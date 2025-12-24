import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Todos os direitos reservados.
        </p>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
          Feito com React, TailwindCSS e Gemini AI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
