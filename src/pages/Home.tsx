import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, ShieldCheck } from 'lucide-react';
import logo from '../assets/logo.jpeg';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 bg-olive text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Belo Horizonte • Brasil
              </div>
              <h1 className="text-5xl lg:text-7xl mb-6 leading-tight">
                Tecnologia com <span className="text-olive italic">propósito</span>, aprendizado com autonomia.
              </h1>
              <p className="text-xl text-stone-600 mb-10 max-w-xl leading-relaxed">
                Democratizamos o acesso à Inteligência Artificial para transformar curiosidade em competência, exclusão em oportunidade e tecnologia em ferramenta de cidadania.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/voluntariado" className="btn-olive">Seja um voluntário</Link>
                <Link to="/curso" className="px-6 py-2 border-2 border-olive font-bold uppercase tracking-wider hover:bg-paper-dark transition-colors">Curso de Prompt</Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="anime-card p-4 bg-white rotate-3">
                <img 
                  src={logo} 
                  alt="Manifesto IA Verde BH Logo" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-olive/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-earth/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Slides/Cards */}
      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Slide 1: Manifesto */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="anime-card p-8 flex flex-col h-full bg-white"
            >
              <div className="w-12 h-12 bg-olive/10 flex items-center justify-center mb-6">
                <ShieldCheck className="text-olive w-6 h-6" />
              </div>
              <h3 className="text-2xl mb-4">O Manifesto</h3>
              <p className="text-stone-600 mb-8 flex-grow">
                Uma declaração profunda de princípios para um ecossistema digital que valoriza a soberania comunitária e a ética algorítmica.
              </p>
              <Link to="/manifesto" className="flex items-center gap-2 font-bold text-olive hover:underline">
                Ler o manifesto na íntegra <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Slide 2: Pilares */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="anime-card p-8 flex flex-col h-full bg-cream border-earth shadow-[4px_4px_0px_0px_rgba(140,115,85,1)]"
            >
              <div className="w-12 h-12 bg-earth/10 flex items-center justify-center mb-6">
                <Users className="text-earth w-6 h-6" />
              </div>
              <h3 className="text-2xl mb-4">Humanos no Controle</h3>
              <p className="text-stone-600 mb-8 flex-grow">
                Defendemos a IA Verde e a inclusão digital real, onde o cidadão detém o conhecimento para extrair valor das inovações.
              </p>
              <Link to="/manifesto#pilares" className="flex items-center gap-2 font-bold text-earth hover:underline">
                Conhecer nossos pilares <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Slide 3: Curso */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="anime-card p-8 flex flex-col h-full bg-white"
            >
              <div className="w-12 h-12 bg-olive/10 flex items-center justify-center mb-6">
                <BookOpen className="text-olive w-6 h-6" />
              </div>
              <h3 className="text-2xl mb-4">Curso de Prompt</h3>
              <p className="text-stone-600 mb-8 flex-grow">
                Capacitação gratuita focada em Engenharia de Prompts para cidadania e autonomia digital. 7 aulas práticas e acessíveis.
              </p>
              <Link to="/curso" className="flex items-center gap-2 font-bold text-olive hover:underline">
                Conhecer as 7 aulas <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-olive text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">Pronto para começar sua jornada?</h2>
          <p className="text-xl mb-10 text-paper/80">
            Junte-se a centenas de pessoas que estão aprendendo a usar a IA de forma ética, produtiva e consciente.
          </p>
          <Link to="/curso" className="btn-olive bg-paper text-olive border-paper shadow-none hover:bg-white">
            Acessar curso gratuito
          </Link>
        </div>
      </section>
    </div>
  );
}
