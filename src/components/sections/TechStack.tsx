import { motion } from "motion/react";

const categories = [
  {
    title: "Gestão e Estratégia",
    items: [
      "Metodologias Ágeis Scrum / Kanban",
      "Gestão de Expectativas / Stakeholders",
      "Planejamento de Prazos / Metas",
      "Resolução de problemas"
    ],
  },
  {
    title: "Conhecimento Técnico",
    items: [
      "Desenvolvimento (React, Python)",
      "Arquitetura e Engenharia de Software",
      "Qualidade e Testes (QA)",
      "Git / DevOps Básico"
    ],
  },
  {
    title: "Ferramentas",
    items: ["Jira", "ClickUp", "Trello", "Notion"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Habilidades</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Competências e Ferramentas
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-pretty">
            As metodologias, ferramentas e tecnologias que utilizo para garantir a excelência técnica e de gestão nos projetos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300 group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                {category.title}
                <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent ml-2" />
              </h3>
              
              <div className="flex flex-col gap-3">
                {category.items.map((item) => (
                  <div 
                    key={item}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-sm text-slate-300 group-hover:border-primary/10 transition-all flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
