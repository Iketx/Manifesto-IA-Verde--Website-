import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, RotateCcw, Trophy } from 'lucide-react';
import { QuizQuestion } from '../constants';
import { cn } from '../lib/utils';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete?: (score: number) => void;
}

export default function Quiz({ questions, onComplete }: QuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === questions[currentStep].correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(s => s + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      onComplete?.(score);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="anime-card bg-white p-8 text-center"
      >
        <Trophy className="w-16 h-16 mx-auto mb-4 text-earth" />
        <h3 className="text-2xl mb-2">Jornada Concluída!</h3>
        <p className="text-lg mb-6">Você acertou {score} de {questions.length} desafios.</p>
        <div className="flex justify-center gap-4">
          <button onClick={resetQuiz} className="btn-olive flex items-center gap-2">
            <RotateCcw className="w-4 h-4" /> Reiniciar
          </button>
        </div>
      </motion.div>
    );
  }

  const q = questions[currentStep];

  return (
    <div className="anime-card bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-bold uppercase tracking-widest text-olive">Desafio {currentStep + 1}/{questions.length}</span>
        <div className="h-2 w-32 bg-paper-dark rounded-full overflow-hidden">
          <div 
            className="h-full bg-olive transition-all duration-500" 
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="text-xl mb-6 font-serif">{q.question}</h3>

      <div className="space-y-3 mb-8">
        {q.options.map((opt, idx) => {
          const isCorrect = idx === q.correctAnswer;
          const isSelected = idx === selectedOption;
          
          return (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={isAnswered}
              className={cn(
                "w-full text-left p-4 border-2 transition-all flex items-center justify-between text-stone-800",
                !isAnswered && "hover:bg-paper-dark border-olive/20",
                isAnswered && isCorrect && "bg-green-100 border-green-600 text-green-900",
                isAnswered && isSelected && !isCorrect && "bg-red-100 border-red-600 text-red-900",
                isAnswered && !isSelected && !isCorrect && "opacity-50 border-transparent"
              )}
            >
              <span>{opt}</span>
              {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5" />}
              {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5" />}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {isAnswered && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={nextQuestion}
            className="btn-olive w-full"
          >
            {currentStep === questions.length - 1 ? "Ver Resultado" : "Próximo Desafio"}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
