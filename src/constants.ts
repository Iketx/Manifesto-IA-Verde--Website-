export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Lesson {
  id: number;
  title: string;
  topic: string;
  objective: string;
  content: string[];
  examples: { input: string; output: string }[];
  summary: string;
  quiz: QuizQuestion[];
}

export const LESSONS: Lesson[] = [
  {
    id: 1,
    title: "Lição 1: O Despertar Tecnológico",
    topic: "Desmistificando a Inteligência Artificial",
    objective: "Proporcionar uma compreensão sólida do funcionamento básico da IA Generativa, eliminando medos e preconceitos.",
    content: [
      "A IA não detém consciência, intencionalidade ou sentimentos. Ela é uma entidade estatística e probabilística hiperavançada.",
      "Modelos de Linguagem de Grande Escala (LLMs) funcionam prevendo a próxima palavra com base no contexto.",
      "A qualidade do retorno depende diretamente da qualidade da solicitação (prompt) enviada."
    ],
    examples: [
      { input: "Sistemas de recomendação de vídeos", output: "Aprendem padrões de dados para sugerir o que você pode gostar." },
      { input: "GPS e aplicativos de trânsito", output: "Mapeiam caminhos reconhecendo padrões históricos de velocidade." }
    ],
    summary: "A IA é uma ferramenta, não um oráculo. Entender seu mecanismo estatístico é o primeiro passo para o controle humano.",
    quiz: [
      {
        question: "A IA possui sentimentos ou consciência própria?",
        options: ["Sim, ela sente empatia", "Não, é uma entidade estatística", "Apenas as mais avançadas", "Sim, ela tem intencionalidade"],
        correctAnswer: 1
      },
      {
        question: "Como funciona essencialmente um LLM?",
        options: ["Copiando e colando da internet", "Pensando como um humano", "Prevendo a próxima palavra por probabilidade", "Consultando um banco de dados fixo"],
        correctAnswer: 2
      },
      {
        question: "O que determina a qualidade da resposta da IA?",
        options: ["A velocidade da internet", "A qualidade do prompt enviado", "O humor da máquina", "O horário do dia"],
        correctAnswer: 1
      },
      {
        question: "Qual destes é um exemplo de IA no cotidiano citado na aula?",
        options: ["Geladeiras comuns", "GPS e rotas via satélite", "Televisões de tubo", "Calculadoras simples"],
        correctAnswer: 1
      },
      {
        question: "O termo 'Machine Learning' refere-se a:",
        options: ["Máquinas que ganham vida", "Aprendizado de Máquina através de dados", "Robôs que limpam a casa", "Programação manual linha por linha"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: "Lição 2: A Anatomia do Prompt Eficaz",
    topic: "Conversando com Propósito e Clareza",
    objective: "Dominar os componentes elementares que estruturam um comando de alta precisão.",
    content: [
      "Um prompt eficaz é composto por: Tarefa, Contexto, Instruções e Formato.",
      "Tarefa: A ação primária (ex: 'Escreva um resumo').",
      "Contexto: O cenário e público-alvo (ex: 'Para alunos do 1º ano').",
      "Instruções: Regras e restrições (ex: 'Evite jargões').",
      "Formato: Como a saída deve ser apresentada (ex: 'Lista com marcadores')."
    ],
    examples: [
      { input: "Prompt Ruim: 'Fale sobre urbanização'", output: "Resposta genérica e talvez irrelevante." },
      { input: "Prompt Estruturado: 'Atue como historiador. Explique a urbanização de BH para crianças, em 2 parágrafos.'", output: "Resposta focada, didática e no tamanho certo." }
    ],
    summary: "Fragmentar o comando em blocos vitais elimina a ambiguidade e garante resultados superiores.",
    quiz: [
      {
        question: "Quais são os 4 pilares da Fórmula Estrutural do Prompt?",
        options: ["Início, Meio, Fim, Resumo", "Tarefa, Contexto, Instruções, Formato", "Pergunta, Resposta, Link, Imagem", "Sujeito, Verbo, Predicado, Ponto"],
        correctAnswer: 1
      },
      {
        question: "O que define a 'Tarefa' em um prompt?",
        options: ["O cenário do problema", "A ação primária que a IA deve executar", "O formato da lista", "O público-alvo"],
        correctAnswer: 1
      },
      {
        question: "Para que serve o 'Contexto'?",
        options: ["Para dar cor ao texto", "Para situar a máquina no cenário do problema", "Para definir o número de palavras", "Para escolher o idioma"],
        correctAnswer: 1
      },
      {
        question: "O que são as 'Instruções' no prompt?",
        options: ["O manual da IA", "Regras de conduta e comportamentos a evitar", "O título do texto", "O link de referência"],
        correctAnswer: 1
      },
      {
        question: "O 'Formato' refere-se a:",
        options: ["O tamanho da fonte", "A apresentação visual e arranjo lógico da saída", "O tipo de arquivo", "A cor do botão"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Lição 3: Humanos no Controle na Prática",
    topic: "Letramento, Curadoria e Ceticismo Digital",
    objective: "Cultivar uma postura de extrema vigilância epistêmica em relação aos conteúdos gerados por máquinas.",
    content: [
      "IA pode errar: Alucinações ocorrem quando a IA inventa fatos de forma convincente.",
      "Viés de Dados: A IA reflete preconceitos presentes nos textos históricos usados em seu treino.",
      "Fact-checking: É obrigatório auditar e checar fatos em motores de busca tradicionais."
    ],
    examples: [
      { input: "Texto bonito e fluído", output: "Não é sinônimo de veracidade irrefutável." },
      { input: "Supervisão Humana", output: "Essencial para evitar a perpetuação de injustiças sociais." }
    ],
    summary: "O ser humano é o Revisor Sênior. A tecnologia deve ser um exoesqueleto cognitivo, não um substituto do pensamento crítico.",
    quiz: [
      {
        question: "O que é uma 'Alucinação' na IA?",
        options: ["Quando a IA fica lenta", "Quando a IA inventa fatos fictícios como se fossem reais", "Quando a IA desliga sozinha", "Quando a IA usa cores vibrantes"],
        correctAnswer: 1
      },
      {
        question: "Por que a IA pode apresentar preconceitos?",
        options: ["Porque ela tem vontade própria", "Porque reflete vieses dos dados usados no treinamento", "Porque ela não gosta de humanos", "Porque foi programada para ser má"],
        correctAnswer: 1
      },
      {
        question: "Qual o papel do humano no ciclo HITL?",
        options: ["Apenas observar", "Participante ativo, insubstituível e crítico", "Apenas ligar a máquina", "Nenhum, a IA faz tudo sozinha"],
        correctAnswer: 1
      },
      {
        question: "O que é Fact-Checking?",
        options: ["Checar se a bateria está carregada", "Verificar a veracidade das informações em fontes confiáveis", "Mudar a senha do e-mail", "Comprar um computador novo"],
        correctAnswer: 1
      },
      {
        question: "Fluidez na escrita significa que a informação é verdadeira?",
        options: ["Sim, sempre", "Não, texto bonito pode conter erros ou mentiras", "Apenas se for em inglês", "Sim, se for gerado por IA"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "Lição 4: Técnicas Intermediárias de Condução",
    topic: "Moldando o Raciocínio da Máquina",
    objective: "Aumentar a utilidade e personalização da IA através de Role Prompting e Few-Shot Prompting.",
    content: [
      "Role Prompting: Atribuir uma 'persona' ou papel à IA (ex: 'Atue como um professor paciente').",
      "Few-Shot Prompting: Fornecer exemplos de entrada e saída para a IA seguir o padrão desejado.",
      "Zero-Shot: Quando não fornecemos exemplos, resultando em respostas mais genéricas."
    ],
    examples: [
      { input: "Role: 'Aja como um advogado especialista'", output: "A IA seleciona vocabulário técnico e tom formal adequado." },
      { input: "Few-Shot: 'Exemplo 1: Tema -> Mensagem'", output: "A IA aprende a estrutura e o estilo visual dos exemplos." }
    ],
    summary: "Dar um papel e exemplos à IA transforma uma ferramenta genérica em um assistente especializado.",
    quiz: [
      {
        question: "O que é 'Role Prompting'?",
        options: ["Pedir para a IA rodar um programa", "Atribuir um papel ou persona à IA", "Mudar o nome da IA", "Pedir para a IA contar uma piada"],
        correctAnswer: 1
      },
      {
        question: "Qual a vantagem do 'Few-Shot Prompting'?",
        options: ["Gasta menos energia", "Demonstra o formato desejado através de exemplos", "Faz a IA responder mais rápido", "Não tem vantagem"],
        correctAnswer: 1
      },
      {
        question: "O que acontece no 'Zero-Shot'?",
        options: ["A IA não responde", "A IA responde sem exemplos prévios, de forma mais genérica", "A IA explode", "A IA pede exemplos"],
        correctAnswer: 1
      },
      {
        question: "Como iniciar um Role Prompting?",
        options: ["'Oi, tudo bem?'", "'Atue como [Papel]...'", "'Faça isso agora'", "'1 + 1 = ?'"],
        correctAnswer: 1
      },
      {
        question: "O uso de exemplos reduz as chances de:",
        options: ["A IA desligar", "A IA desviar-se da formatação desejada", "O computador esquentar", "Acabar a luz"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Lição 5: Raciocínio Estruturado e Parâmetros",
    topic: "A Cadeia de Pensamento",
    objective: "Extrair respostas lógicas consistentes e controlar a criatividade da IA.",
    content: [
      "Chain of Thought (Cadeia de Pensamento): Instruir a IA a 'pensar passo a passo'.",
      "Temperatura: Parâmetro que controla a criatividade (Baixa = Precisa, Alta = Criativa).",
      "Raciocínio Sequencial: Evita que a IA tente 'adivinhar' a resposta final de problemas complexos."
    ],
    examples: [
      { input: "Instrução: 'Pense passo a passo'", output: "A IA particiona a resolução em fragmentos lógicos menores." },
      { input: "Temperatura Baixa (0.2)", output: "Ideal para fatos, matemática e pesquisa histórica." }
    ],
    summary: "Estruturar o pensamento da máquina e ajustar sua 'temperatura' garante precisão e inovação controlada.",
    quiz: [
      {
        question: "O que significa 'Chain of Thought'?",
        options: ["Cadeia de comando", "Cadeia de Pensamento (pensar passo a passo)", "Corrente de dados", "Pensamento aleatório"],
        correctAnswer: 1
      },
      {
        question: "Para que serve a instrução 'Pense passo a passo'?",
        options: ["Para a IA demorar mais", "Para particionar a resolução em fragmentos lógicos menores", "Para a IA economizar energia", "Para nada"],
        correctAnswer: 1
      },
      {
        question: "O parâmetro 'Temperatura' controla o quê?",
        options: ["O calor do processador", "O grau de criatividade e aleatoriedade", "A velocidade da resposta", "O brilho da tela"],
        correctAnswer: 1
      },
      {
        question: "Quando usar uma temperatura baixa?",
        options: ["Para escrever poemas", "Para tarefas que exigem rigor e fatos precisos", "Para brainstorming", "Para criar histórias de ficção"],
        correctAnswer: 1
      },
      {
        question: "O que a Cadeia de Pensamento ajuda a evitar?",
        options: ["Que a IA tente 'adivinhar' respostas complexas", "Que a IA use muitas palavras", "Que a IA use emojis", "Que a IA peça desculpas"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 6,
    title: "Lição 6: Sustentabilidade Digital",
    topic: "Prompts Verdes – O Impacto Invisível",
    objective: "Associar o uso eficiente da IA com o letramento ambiental e preservação ecológica.",
    content: [
      "Custo Energético: Cada prompt consome eletricidade e água para resfriar data centers.",
      "Prompt Verde: Um prompt bem arquitetado que evita retrabalho e economiza tokens.",
      "Economia Circular: Recondicionamento de hardware para evitar o lixo eletrônico (e-lixo)."
    ],
    examples: [
      { input: "Prompt Ambíguo", output: "Gera dezenas de regerações inúteis e desperdício de energia." },
      { input: "Prompt Preciso", output: "Minimiza a carga computacional e conserva recursos do planeta." }
    ],
    summary: "Ser um mestre em prompts é também ser um guardião do meio ambiente. Menos tokens, mais impacto.",
    quiz: [
      {
        question: "O que é um 'Prompt Verde'?",
        options: ["Um prompt sobre natureza", "Um prompt bem arquitetado que evita desperdício de energia", "Um prompt escrito em cor verde", "Um prompt que não usa palavras"],
        correctAnswer: 1
      },
      {
        question: "Data centers consomem quais recursos naturais em grande escala?",
        options: ["Apenas vento", "Eletricidade e água para resfriamento", "Madeira e carvão", "Não consomem recursos"],
        correctAnswer: 1
      },
      {
        question: "O que é o 'E-Lixo'?",
        options: ["Lixo de e-mail", "Resíduos de equipamentos eletrônicos descartados", "Papel reciclado", "Lixo orgânico"],
        correctAnswer: 1
      },
      {
        question: "Como a Engenharia de Prompt ajuda o meio ambiente?",
        options: ["Não ajuda", "Reduzindo o número de interações necessárias (menos tokens)", "Fazendo a IA plantar árvores", "Desligando o computador"],
        correctAnswer: 1
      },
      {
        question: "A Economia Circular no hardware foca em:",
        options: ["Comprar sempre o modelo novo", "Manutenção, recondicionamento e reuso", "Jogar fora o que quebrou", "Usar apenas pilhas"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 7,
    title: "Lição 7: Laboratório Comunitário",
    topic: "Hackathon da Responsabilidade Social",
    objective: "Sintetizar e aplicar o repertório técnico e ético na resolução de problemas reais da comunidade.",
    content: [
      "Idealização Cívica: Mapear obstáculos reais na rotina da comunidade.",
      "Construção de Soluções: Usar a IA como co-pilot para criar campanhas, políticas ou materiais de apoio.",
      "Protagonismo: Transformar o aluno de consumidor passivo em criador de soluções."
    ],
    examples: [
      { input: "Problema: Falta de informação sobre saúde", output: "Solução: Campanha educativa gerada com prompts estruturados." },
      { input: "Problema: Acúmulo de e-lixo", output: "Solução: Plano de coleta seletiva comunitária desenhado com IA." }
    ],
    summary: "O curso termina onde a sua ação começa. Use a IA para engrandecer pessoas e preservar o futuro.",
    quiz: [
      {
        question: "Qual o objetivo do Laboratório Comunitário?",
        options: ["Fazer uma prova difícil", "Aplicar o conhecimento em problemas reais da comunidade", "Ganhar um prêmio em dinheiro", "Apenas conversar com a IA"],
        correctAnswer: 1
      },
      {
        question: "O que é um 'Hackathon' neste contexto?",
        options: ["Um ataque hacker", "Um ambiente de desenvolvimento intensivo de projetos sociais", "Uma maratona de corrida", "Um jogo de videogame"],
        correctAnswer: 1
      },
      {
        question: "Como a IA deve ser usada no projeto final?",
        options: ["Para fazer todo o trabalho sozinha", "Como uma parceira instrumental (co-pilot)", "Para substituir os humanos", "Não deve ser usada"],
        correctAnswer: 1
      },
      {
        question: "O que é 'Protagonismo' do aluno?",
        options: ["Ser o ator principal de um filme", "Assumir a postura de criador e curador do saber", "Ficar em silêncio na aula", "Seguir ordens sem questionar"],
        correctAnswer: 1
      },
      {
        question: "O que se espera após a conclusão do curso?",
        options: ["Esquecer tudo", "Continuar como voluntário ou curador do saber na comunidade", "Vender a IA", "Parar de usar tecnologia"],
        correctAnswer: 1
      }
    ]
  }
];
