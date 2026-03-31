import React from 'react';
import { motion } from 'motion/react';
import { Heart, Mail, MessageCircle, Users, MapPin, Sparkles } from 'lucide-react';

export default function Voluntariado() {
  return (
    <div className="pt-20 bg-paper min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Heart className="w-16 h-16 text-earth mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-6xl mb-6">Seja um Voluntário</h1>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
              O coração pulsante deste projeto é a solidariedade tecnológica. Precisamos de você para levar o conhecimento de IA para quem mais precisa.
            </p>
          </motion.div>
        </header>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <h2 className="text-3xl font-serif">Como você pode ajudar?</h2>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-olive text-white flex items-center justify-center anime-card">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Tutoria Presencial</h3>
                <p className="text-stone-600">Ministre aulas de Engenharia de Prompt em escolas públicas e associações de moradores de Belo Horizonte.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-earth text-white flex items-center justify-center anime-card border-earth">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Criação de Conteúdo</h3>
                <p className="text-stone-600">Ajude na concepção, design e formatação de materiais educativos multimídia e vídeos explicativos.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-olive text-white flex items-center justify-center anime-card">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Apoio Local</h3>
                <p className="text-stone-600">Auxilie na organização de eventos, hackathons sociais e na logística de recondicionamento de hardware.</p>
              </div>
            </div>
          </div>

          <div className="anime-card p-8 bg-white space-y-6">
            <h3 className="text-2xl font-serif">Entre em contato</h3>
            <p className="text-stone-600">Escolha o canal que preferir para conversar com nossa equipe de coordenação:</p>
            
            <div className="space-y-4">
              <a 
                href="mailto:voluntarios@iaverdebh.org" 
                className="flex items-center gap-4 p-4 border-2 border-paper-dark hover:border-olive transition-colors group"
              >
                <Mail className="w-6 h-6 text-olive group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block font-bold">E-mail</span>
                  <span className="text-sm text-stone-500">voluntarios@iaverdebh.org</span>
                </div>
              </a>

              <a 
                href="https://wa.me/5531999999999" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border-2 border-paper-dark hover:border-olive transition-colors group"
              >
                <MessageCircle className="w-6 h-6 text-olive group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block font-bold">WhatsApp</span>
                  <span className="text-sm text-stone-500">Comunidade IA Verde BH</span>
                </div>
              </a>
            </div>

            <div className="pt-6 border-t-2 border-paper-dark">
              <p className="text-xs text-stone-500 italic">
                "O erguimento de um ecossistema digital equitativo exige o engajamento direto e apaixonado da sociedade civil."
              </p>
            </div>
          </div>
        </div>

        <section className="bg-earth/10 p-12 anime-card border-earth text-center">
          <h2 className="text-3xl mb-4">Impacto do Voluntariado</h2>
          <div className="grid sm:grid-cols-3 gap-8 mt-10">
            <div>
              <span className="block text-4xl font-bold text-earth mb-2">1000+</span>
              <span className="text-sm uppercase tracking-widest font-bold text-stone-500">Alunos Impactados</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-earth mb-2">50+</span>
              <span className="text-sm uppercase tracking-widest font-bold text-stone-500">Tutores Ativos</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-earth mb-2">15</span>
              <span className="text-sm uppercase tracking-widest font-bold text-stone-500">Comunidades em BH</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
