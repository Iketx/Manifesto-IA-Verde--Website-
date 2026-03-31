import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Heart, MapPin, Github } from 'lucide-react';
import logo from '../assets/logo.jpeg';

export default function Footer() {
  return (
    <footer className="bg-olive text-paper py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden border-2 border-paper bg-white">
                <img src={logo} alt="Logo IA Verde BH" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-serif text-2xl font-bold">IA Verde BH</h3>
            </div>
            <p className="text-paper/80 leading-relaxed">
              Democratizando a Inteligência Artificial para transformar curiosidade em competência e exclusão em oportunidade.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
              <a href="mailto:contato@iaverdebh.org" className="hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-sm text-paper/60">Navegação</h4>
            <ul className="space-y-2">
              <li><Link to="/manifesto" className="hover:underline">O Manifesto</Link></li>
              <li><Link to="/curso" className="hover:underline">Curso de Prompt</Link></li>
              <li><Link to="/voluntariado" className="hover:underline">Seja Voluntário</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-sm text-paper/60">Comunidade</h4>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Belo Horizonte, MG</span>
            </div>
            <a 
              href="https://wa.me/5531999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Grupo de WhatsApp</span>
            </a>
          </div>

          <div className="space-y-6">
            <div className="bg-paper text-olive p-6 anime-card">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 fill-current" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Junte-se a nós</h4>
              </div>
              <p className="text-sm mb-4">Precisamos de tutores e entusiastas para levar este conhecimento às comunidades.</p>
              <Link to="/voluntariado" className="text-sm font-bold underline hover:no-underline">Saiba como ajudar →</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-paper/20 text-center text-sm text-paper/60">
          <p>© {new Date().getFullYear()} Manifesto IA Verde BH. Tecnologia com propósito humano.</p>
        </div>
      </div>
    </footer>
  );
}
