import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'O Manifesto', path: '/manifesto' },
    { name: 'Curso de Prompt', path: '/curso' },
    { name: 'Seja Voluntário', path: '/voluntariado' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-md border-b-2 border-olive">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-full overflow-hidden border-2 border-olive transition-transform group-hover:scale-105">
                <img src="/logo.jpeg" alt="Logo IA Verde BH" className="w-full h-full object-cover" />
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-olive hidden sm:block">IA VERDE BH</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest hover:text-olive transition-colors py-2",
                  location.pathname === link.path ? "text-olive border-b-2 border-olive" : "text-stone-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/curso" className="btn-olive text-sm">Começar Agora</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-olive p-2"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-paper border-b-2 border-olive">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-4 text-base font-bold uppercase tracking-widest",
                  location.pathname === link.path ? "text-olive bg-paper-dark" : "text-stone-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-4">
              <Link to="/curso" onClick={() => setIsOpen(false)} className="btn-olive block text-center">Começar Agora</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
