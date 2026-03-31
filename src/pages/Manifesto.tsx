import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Printer, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Manifesto() {
  return (
    <div className="pt-20 bg-paper min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-olive font-bold mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Voltar ao início
        </Link>

        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-16 anime-card shadow-[8px_8px_0px_0px_rgba(90,90,64,1)]"
        >
          <header className="mb-12 border-b-2 border-paper-dark pb-8">
            <h1 className="text-4xl md:text-6xl mb-6 leading-tight">
              Manifesto IA Verde BH: Conectando Pessoas, Promovendo a Inclusão Digital e a Soberania Tecnológica
            </h1>
            <div className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-widest text-stone-500">
              <span>Belo Horizonte, MG</span>
              <span>•</span>
              <span>Março de 2026</span>
            </div>
          </header>

          <div className="prose prose-stone lg:prose-xl max-w-none space-y-8 text-stone-800 leading-relaxed font-serif">
            <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-olive first-letter:mr-3 first-letter:float-left">
              O advento da Inteligência Artificial (IA) representa um dos marcos mais transformadores e definidores da história humana contemporânea. No entanto, a verdadeira revolução não reside de forma isolada na capacidade computacional das máquinas ou no processamento maciço de dados, mas sim na forma como a sociedade decide empregar essa tecnologia para moldar o seu próprio futuro.
            </p>

            <p>
              O projeto "Manifesto IA Verde BH" nasce da urgência absoluta em democratizar o acesso à Ciência de Dados e à Inteligência Artificial, estabelecendo pontes de conhecimento em vez de muros de exclusão, com um olhar especialmente direcionado para as comunidades em situação de vulnerabilidade na cidade de Belo Horizonte e em todo o território nacional.
            </p>

            <p>
              Este documento constitui uma declaração profunda de princípios e um convite aberto para a construção coletiva de um ecossistema digital que valorize a soberania comunitária, a educação emancipadora, a ética algorítmica e a sustentabilidade ambiental.
            </p>

            <h2 id="pilares" className="text-3xl font-bold text-olive mt-12 mb-6">Soberania Digital e Ética</h2>
            <p>
              A tecnologia nunca é um fenômeno neutro; ela carrega os valores, as prioridades e os vieses de quem a constrói e de quem a controla. Vivemos em um cenário de profunda desigualdade informacional, onde o domínio sobre as novas tecnologias de ponta está frequentemente concentrado nas mãos de corporações globais e de uma parcela restrita da população.
            </p>

            <p>
              A verdadeira soberania digital exige que as tecnologias e os dados que as alimentam estejam sob uma governança democrática, servindo aos interesses da coletividade e não apenas à lógica de acumulação financeira. A Inteligência Artificial não deve ser encarada como uma caixa preta inatingível ou um oráculo insondável, mas sim como uma ferramenta de emancipação social.
            </p>

            <h2 className="text-3xl font-bold text-olive mt-12 mb-6">Humanos no Controle</h2>
            <p>
              A automação desenfreada e a delegação excessiva de decisões a sistemas computacionais geram temores legítimos de obsolescência humana. Contrapondo-se veementemente a essa visão distópica e alienante, este manifesto defende o princípio inegociável de "Humanos no Controle".
            </p>

            <p>
              Este conceito é a tradução prática e comunitária da abordagem arquitetural e técnica conhecida como Human-in-the-Loop (HITL). Esta metodologia estabelece de forma categórica que o ser humano não é um elemento descartável do processo, mas um participante ativo, insubstituível e crítico nas etapas de aprendizado, análise e tomada de decisão dos modelos de inteligência artificial.
            </p>

            <h2 className="text-3xl font-bold text-olive mt-12 mb-6">IA Verde e Sustentabilidade</h2>
            <p>
              A revolução digital, frequentemente vendida como imaterial por habitar a "nuvem", impõe um custo físico, material e ambiental estarrecedor. A vasta infraestrutura de processamento que sustenta a Inteligência Artificial depende de enormes data centers que demandam milhões de litros de água e um gasto energético colossal.
            </p>

            <p>
              Diante dessa realidade inegável, a "IA Verde" ergue-se não apenas como uma escolha arquitetural, mas como um pilar essencial e um imperativo ético para a sobrevivência do planeta. Preconizamos a redução do desperdício computacional através do uso consciente dos algoritmos e do fomento a práticas de economia circular no hardware.
            </p>

            <blockquote className="border-l-4 border-olive pl-6 italic text-stone-600 my-12">
              "A verdadeira inclusão digital transcende a mera distribuição de hardwares; ela exige que o cidadão detenha o conhecimento intelectual necessário para extrair o melhor valor dessas inovações."
            </blockquote>

            <h2 className="text-3xl font-bold text-olive mt-12 mb-6">O Chamado à Ação</h2>
            <p>
              Convocamos a comunidade a integrar e nutrir uma rede sólida de solidariedade tecnológica, rompendo o ciclo de exclusão. Convidamos estudantes, profissionais, educadores e empresas a participarem ativamente de nossa iniciativa, atuando como Tutores de IA ou colaborando na criação de materiais educativos.
            </p>
          </div>

          <footer className="mt-16 pt-8 border-t-2 border-paper-dark flex justify-between items-center">
            <div className="flex gap-4">
              <button className="p-2 hover:bg-paper-dark transition-colors rounded-full" title="Imprimir">
                <Printer className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-paper-dark transition-colors rounded-full" title="Compartilhar">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
            <Link to="/curso" className="btn-olive">Começar o Curso</Link>
          </footer>
        </motion.article>
      </div>
    </div>
  );
}
