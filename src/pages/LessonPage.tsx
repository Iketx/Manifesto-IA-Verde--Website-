import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { LESSONS } from '../constants';
import { ArrowLeft, ArrowRight, BookOpen, Lightbulb, CheckCircle } from 'lucide-react';
import Quiz from '../components/Quiz';
import PromptBuilder from '../components/PromptBuilder';

export default function LessonPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lessonId = parseInt(id || '1');
  const lesson = LESSONS.find(l => l.id === lessonId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!lesson) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-2xl">Aula não encontrada.</h2>
        <Link to="/curso" className="text-olive underline">Voltar ao curso</Link>
      </div>
    );
  }

  const nextLesson = LESSONS.find(l => l.id === lessonId + 1);

  return (
    <div className="pt-20 bg-paper min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/curso" className="inline-flex items-center gap-2 text-olive font-bold mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Voltar ao índice do curso
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Header */}
          <header className="anime-card p-8 bg-white">
            <div className="flex items-center gap-2 text-earth font-bold uppercase tracking-widest text-xs mb-4">
              <BookOpen className="w-4 h-4" /> Aula {lesson.id}
            </div>
            <h1 className="text-3xl md:text-5xl mb-4">{lesson.title}</h1>
            <p className="text-xl text-olive font-serif italic">{lesson.topic}</p>
          </header>

          {/* Objective */}
          <section className="bg-olive/5 p-6 border-l-4 border-olive">
            <h3 className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm mb-2 text-olive">
              <Lightbulb className="w-4 h-4" /> Objetivo de Aprendizagem
            </h3>
            <p className="text-stone-700">{lesson.objective}</p>
          </section>

          {/* Theoretical Content */}
          <section className="space-y-6">
            <h2 className="text-2xl font-serif border-b-2 border-paper-dark pb-2">Explicação Teórica</h2>
            <div className="grid gap-6">
              {lesson.content.map((text, idx) => (
                <div key={idx} className="anime-card p-6 bg-white">
                  <p className="text-stone-800 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Special Miniapp for Lesson 2 */}
          {lesson.id === 2 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-serif border-b-2 border-paper-dark pb-2">Prática: Estruturação de Prompts</h2>
              <PromptBuilder />
            </section>
          )}

          {/* Examples */}
          <section className="space-y-6">
            <h2 className="text-2xl font-serif border-b-2 border-paper-dark pb-2">Exemplos Práticos</h2>
            <div className="space-y-4">
              {lesson.examples.map((ex, idx) => (
                <div key={idx} className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-paper-dark border-2 border-olive/10 rounded-none">
                    <span className="text-[10px] font-bold uppercase text-stone-500 block mb-1">Entrada / Cenário</span>
                    <p className="text-sm italic">"{ex.input}"</p>
                  </div>
                  <div className="p-4 bg-white border-2 border-olive/20 rounded-none">
                    <span className="text-[10px] font-bold uppercase text-olive block mb-1">Saída / Resultado</span>
                    <p className="text-sm">{ex.output}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Summary */}
          <section className="anime-card p-6 bg-earth text-white border-earth shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
            <h3 className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm mb-2">
              <CheckCircle className="w-4 h-4" /> Resumo Rápido
            </h3>
            <p className="text-paper/90">{lesson.summary}</p>
          </section>

          {/* Quiz */}
          <section className="space-y-6">
            <h2 className="text-2xl font-serif border-b-2 border-paper-dark pb-2">Desafio de Conhecimento</h2>
            <Quiz questions={lesson.quiz} />
          </section>

          {/* Navigation */}
          <footer className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t-2 border-paper-dark">
            <Link to="/curso" className="px-6 py-2 border-2 border-olive font-bold uppercase tracking-wider text-center hover:bg-paper-dark transition-colors">
              Voltar ao Índice
            </Link>
            {nextLesson ? (
              <Link to={`/curso/aula/${nextLesson.id}`} className="btn-olive flex items-center justify-center gap-2">
                Próxima Aula: {nextLesson.id} <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <Link to="/voluntariado" className="btn-olive flex items-center justify-center gap-2">
                Concluir e Ajudar <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </footer>
        </motion.div>
      </div>
    </div>
  );
}
