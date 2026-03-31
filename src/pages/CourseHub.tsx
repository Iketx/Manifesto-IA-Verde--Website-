import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { LESSONS } from '../constants';
import { BookOpen, ArrowRight, Sparkles, GraduationCap } from 'lucide-react';

export default function CourseHub() {
  return (
    <div className="pt-20 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-earth text-white text-xs font-bold uppercase tracking-widest mb-6">
              <GraduationCap className="w-4 h-4" /> Curso Gratuito
            </div>
            <h1 className="text-4xl md:text-6xl mb-6">Engenharia de Prompts</h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Aprenda a conversar melhor com a Inteligência Artificial. Nesta jornada gratuita, você vai dominar os fundamentos, entender como a IA funciona e desenvolver uma postura crítica e responsável.
            </p>
          </motion.div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LESSONS.map((lesson, idx) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="anime-card bg-white p-6 flex flex-col group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-4xl font-serif font-bold text-olive/20 group-hover:text-olive/40 transition-colors">0{lesson.id}</span>
                <div className="w-10 h-10 bg-paper flex items-center justify-center border-2 border-olive/20">
                  <BookOpen className="w-5 h-5 text-olive" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-olive transition-colors">{lesson.title}</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-earth mb-4">{lesson.topic}</p>
              <p className="text-stone-600 text-sm mb-6 flex-grow line-clamp-3">
                {lesson.objective}
              </p>
              <Link 
                to={`/curso/aula/${lesson.id}`} 
                className="btn-olive w-full text-center flex items-center justify-center gap-2"
              >
                Acessar Aula <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}

          {/* Extra Card: Final Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="anime-card bg-olive text-white p-6 flex flex-col border-white"
          >
            <div className="flex justify-between items-start mb-4">
              <Sparkles className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">Hackathon Social</h3>
            <p className="text-sm font-bold uppercase tracking-widest text-paper/60 mb-4">Projeto Final</p>
            <p className="text-paper/80 text-sm mb-6 flex-grow">
              Aplique tudo o que aprendeu em um desafio real para ajudar sua comunidade em Belo Horizonte.
            </p>
            <button className="btn-olive bg-white text-olive border-white shadow-none hover:bg-paper-dark">Em breve</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
