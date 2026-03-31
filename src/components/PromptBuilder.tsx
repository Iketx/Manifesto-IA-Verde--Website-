import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Sparkles } from 'lucide-react';

export default function PromptBuilder() {
  const [fields, setFields] = useState({
    tarefa: '',
    contexto: '',
    instrucoes: '',
    formato: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const generatedPrompt = `[CONTEXTO]: ${fields.contexto || '...'}
[TAREFA]: ${fields.tarefa || '...'}
[INSTRUÇÕES]: ${fields.instrucoes || '...'}
[FORMATO]: ${fields.formato || '...'}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    alert('Prompt copiado para a área de transferência!');
  };

  return (
    <div className="anime-card p-6 bg-cream">
      <div className="flex items-center gap-2 mb-6 text-olive">
        <Sparkles className="w-6 h-6" />
        <h3 className="text-xl font-serif">Construtor de Prompts Estruturados</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase mb-1 text-earth">Contexto (Cenário)</label>
            <textarea
              name="contexto"
              value={fields.contexto}
              onChange={handleChange}
              placeholder="Ex: Atue como um professor de história para alunos do 5º ano..."
              className="w-full p-3 border-2 border-olive/30 focus:border-olive outline-none min-h-[80px] bg-white text-stone-800"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase mb-1 text-earth">Tarefa (Ação)</label>
            <textarea
              name="tarefa"
              value={fields.tarefa}
              onChange={handleChange}
              placeholder="Ex: Explique o que foi a Revolução Industrial..."
              className="w-full p-3 border-2 border-olive/30 focus:border-olive outline-none min-h-[80px] bg-white text-stone-800"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase mb-1 text-earth">Instruções (Regras)</label>
            <textarea
              name="instrucoes"
              value={fields.instrucoes}
              onChange={handleChange}
              placeholder="Ex: Use linguagem simples, evite termos técnicos, cite 3 invenções..."
              className="w-full p-3 border-2 border-olive/30 focus:border-olive outline-none min-h-[80px] bg-white text-stone-800"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase mb-1 text-earth">Formato (Apresentação)</label>
            <textarea
              name="formato"
              value={fields.formato}
              onChange={handleChange}
              placeholder="Ex: Texto corrido com uma lista de marcadores ao final..."
              className="w-full p-3 border-2 border-olive/30 focus:border-olive outline-none min-h-[80px] bg-white text-stone-800"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="block text-xs font-bold uppercase mb-1 text-earth">Resultado Final</label>
          <div className="flex-1 p-4 border-2 border-dashed border-olive bg-white text-stone-800 font-mono text-sm whitespace-pre-wrap relative group">
            {generatedPrompt}
            <button 
              onClick={copyToClipboard}
              className="absolute top-2 right-2 p-2 bg-paper hover:bg-olive hover:text-white transition-colors border-2 border-olive"
              title="Copiar Prompt"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
          <p className="mt-4 text-xs text-stone-500 italic">
            Preencha os campos à esquerda para ver a estrutura do seu prompt se formando aqui.
          </p>
        </div>
      </div>
    </div>
  );
}
