import { motion } from "motion/react";

const projects = [
  {
    title: "Plataforma de Aceleração de Vendas",
    description: "Liderança no desenvolvimento de ferramenta para automação de leads e conversão de negócios, visando ampliar a escalabilidade da prospecção por meio da captação de leads em múltiplos canais.",
    responsibilities: [
      "Automação e pipeline de captação de leads",
      "Escalabilidade da prospecção multicanal",
      "Liderança estratégica da equipe técnica",
      "Sprints focadas em conversão de negócios"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: ["Liderança", "Automação", "Processos Ágeis", "Escalabilidade"],
    github: "https://github.com/vcaetanodesouza",
    live: "#",
  },
  {
    title: "Startup Setor Health & Fitness",
    description: "Gestão de cronograma e escalabilidade do produto focado em experiência do usuário, garantindo a entrega do MVP funcional em apenas 10 semanas.",
    responsibilities: [
      "Gestão de cronograma e metas de sprint",
      "Priorização de escopo complexo para MVP",
      "Garantia de escalabilidade do produto",
      "Foco total na experiência de uso (UX)"
    ],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop",
    tags: ["MVP", "Cronograma", "Health & Fitness", "UX Core"],
    github: "https://github.com/vcaetanodesouza",
    live: "#",
  },
  {
    title: "Marketplace B2B de Polos Empresariais",
    description: "Gestão de complexidade técnica e integração de fluxos e APIs para conexão estratégica de diversos polos empresariais.",
    responsibilities: [
      "Gerenciamento de complexidade técnica",
      "Definição e alinhamento de integrações complexas",
      "Gestão de expectativas dos stakeholders",
      "Coordenação de arquitetura e segurança das APIs"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    tags: ["B2B Marketplace", "Integrações", "Arquitetura", "Conexão"],
    github: "https://github.com/vcaetanodesouza",
    live: "#",
  },
  {
    title: "Gestão de Projetos para Construção Civil (International)",
    description: "Administrando o ciclo de desenvolvimento de software para o mercado internacional, focando na precisão de requisitos e na excelência técnica em conformidade com padrões estrangeiros.",
    responsibilities: [
      "Gestão de Stakeholders internacionais e comunicação estratégica",
      "Monitoramento rigoroso de entregáveis e prazos (SDLC)",
      "Governança de Qualidade (QA) e detecção preventiva de gargalos",
      "Alinhamento de cronogramas"
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    tags: ["GESTÃO INTERNACIONAL", "CONSTRUÇÃO CIVIL", "CROSS-BORDER"],
    github: "https://github.com/vcaetanodesouza",
    live: "#",
  },
  {
    title: "ERP para Gestão de Varejo Óptico",
    description: "Liderança na entrega de um sistema de gestão voltado à otimização operacional e suporte contínuo ao fluxo de desenvolvimento e estabilidade da plataforma.",
    responsibilities: [
      "Facilitação técnica entre requisitos de negócio e engenharia",
      "Suporte consultivo no desenvolvimento de funcionalidades críticas",
      "Identificação e priorização de melhorias técnicas e correções",
      "Garantia da continuidade e integridade sistêmica"
    ],
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=2070&auto=format&fit=crop",
    tags: ["VAREJO ÓPTICO", "ESTABILIDADE", "SUPORTE TÉCNICO"],
    github: "https://github.com/vcaetanodesouza",
    live: "#",
  },
  {
    title: "Sistema de Gestão de Saúde Ocupacional",
    description: "Gerenciamento contínuo de uma solução voltada à saúde e segurança no trabalho, assegurando a confiabilidade dos dados e a fluidez técnica das entregas.",
    responsibilities: [
      "Monitoramento de KPIs de progresso e qualidade da entrega",
      "Resolução proativa de bloqueios técnicos e problemas críticos",
      "Validação contínua do roadmap frente à necessidades legais",
      "Garantia de conformidade em processos de Saúde Ocupacional"
    ],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
    tags: ["HEALTHCARE", "SAÚDE", "SOLUÇÃO DE PROBLEMAS"],
    github: "https://github.com/vcaetanodesouza",
    live: "#",
  },
  {
    title: "Solução de ADs para Marketing em Veículos",
    description: "Coordenação operacional do pipeline de entrega de uma plataforma inovadora de marketing em tempo real para veículos de aplicativo.",
    responsibilities: [
      "Alinhamento constante entre entregas técnicas e metas comerciais",
      "Acompanhamento estratégico de progresso e cadência de Sprints",
      "Gestão de comunicação interna para garantir transparência",
      "Supervisão do roadmap de funcionalidades inovadoras"
    ],
    image: "/images/car_door_ad_promo_1780423932883.png",
    tags: ["MOBILIDADE", "MARKETING DIGITAL"],
    github: "https://github.com/vcaetanodesouza",
    live: "#",
  },
  {
    title: "Plataforma de Consultoria e Jornada de Liderança",
    description: "Liderança na implementação de uma plataforma focada em processos de mentoria, aprimorando fluxos de jornada do usuário e maturidade de liderança corporativa.",
    responsibilities: [
      "Identificação estratégica e resolução de incidentes (bug hunting)",
      "Refinamento de UX/UI em conjunto com o time de tecnologia",
      "Acompanhamento próximo do desenvolvimento de métricas de liderança",
      "Garantia da experiência de jornada do aluno e tutor"
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    tags: ["CONSULTORIA", "GOVERNANÇA DE PROCESSOS"],
    github: "https://github.com/vcaetanodesouza",
    live: "#",
  },
  {
    title: "Marketplace de Talentos e Contratação",
    description: "Gestão do ciclo final de projeto para uma plataforma que conecta freelancers e contratantes, focando na entrega pontual do ecossistema de serviço.",
    responsibilities: [
      "Liderança das reuniões de status e encerramento de metas",
      "Controle de qualidade e validação final da plataforma para lançamento",
      "Coordenação entre os polos de demanda (contratantes) e oferta (freelas)",
      "Garantia da finalização total do backlog previsto"
    ],
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop",
    tags: ["MARKETPLACE", "GESTÃO"],
    github: "https://github.com/vcaetanodesouza",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0b]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Casos de Estudo</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
            Experiência & Projetos
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Projetos onde apliquei visão técnica e metodologias de gestão.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500 h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
                </div>

                <div className="p-8 space-y-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 underline underline-offset-4">Responsabilidades</h4>
                    <ul className="space-y-2">
                      {project.responsibilities.map((resp, i) => (
                        <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] uppercase font-bold tracking-wider bg-white/5 text-slate-400 rounded border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Removing the bottom button section as requested */}
      </div>
    </section>
  );
}
