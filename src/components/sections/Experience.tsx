import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, LayoutGrid, GraduationCap, Dna } from "lucide-react";

const experiences = [
  {
    title: "Gestor de Projetos",
    company: "InfinityWorks",
    location: "Remoto",
    period: "Ago/2023 – Atual",
    description: "Liderança estratégica de produtos, orquestrando o ciclo de vida de desenvolvimento de software (SDLC) via Scrum/Kanban. Atuação direta com stakeholders para garantir o alinhamento técnico, a previsibilidade e a alta qualidade das entregas.",
    tags: ["Liderança", "SDLC", "Scrum / Kanban", "Stakeholders", "Previsibilidade"],
  },
  {
    title: "Desenvolvedor de Software",
    company: "InfinityWorks",
    location: "Remoto",
    period: "Jun/2023 – Ago/2023",
    description: "Atuação técnica direta no desenvolvimento de soluções digitais modernas, focando em arquitetura e metodologias ágeis. Essa vivência prática no desenvolvimento de código, depuração e entregas pavimentou e impulsionou minha transição de carreira natural rumo à gestão de TI na empresa.",
    tags: ["Desenvolvimento", "React", "Python", "Engenharia Técnica", "Metodologias Ágeis"],
  },
];

const mainSkills = ["Gestão de Stakeholders", "Planejamento de Metas", "Resolução de Problemas", "React", "Python", "Engenharia de Software"];
const otherSkills = ["Jira / ClickUp", "Trello / Notion", "Qualidade e Testes (QA)", "Git / GitHub", "DevOps Básico", "Organização de Fluxos"];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Carreira</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Experiência & Competências
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Experience & Diferenciais */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Trajetória Profissional
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-8 border-l border-white/5"
                  >
                    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    <div className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                        <div>
                          <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{exp.title}</h4>
                          <div className="text-sm text-primary font-medium">{exp.company}</div>
                        </div>
                        <div className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded-full h-fit w-fit">
                          {exp.period}
                        </div>
                      </div>
                      <p className="text-sm text-slate-400 mb-4 leading-relaxed italic">
                        "{exp.description}"
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-slate-500">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <Dna className="w-5 h-5 text-primary" />
                Diferenciais & Resultados
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Experiência em projetos web completos",
                  "Ponte entre área técnica e stakeholders",
                  "Organização de fluxos e processos",
                  "Background técnico em desenvolvimento",
                  "Foco em qualidade e testes",
                  "Visão estratégica de entrega"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs text-slate-300 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Skills */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Formação Acadêmica
              </h3>
              <div className="space-y-6">
                {[
                  { curso: "Tecnólogo em Análise e Desenvolvimento de Sistemas", escola: "UNISUL", concluido: "Concluído em 2024" },
                  { curso: "Curso Técnico em Desenvolvimento de Sistemas", escola: "SENAI/SC", concluido: "Concluído em 2021" },
                  { curso: "Curso de Desenvolvimento Web", escola: "IFSC", concluido: "Concluído em 2019" }
                ].map((edu, index) => (
                  <motion.div
                    key={edu.curso}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-8 border-l border-white/5"
                  >
                    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary/60 shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
                    <div className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">{edu.curso}</h4>
                          <span className="text-xs text-primary font-medium">{edu.escola}</span>
                        </div>
                        <span className="text-xs font-mono text-slate-500 bg-white/5 px-2.5 py-1 rounded-full h-fit w-fit">
                          {edu.concluido}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-primary" />
                Habilidades & Metodologias
              </h3>
              <div className="glass p-6 rounded-2xl border border-white/5 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Metodologias Ágeis
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["Scrum", "Kanban", "Agile", "Lean"].map((met) => (
                      <div
                        key={met}
                        className="text-center p-2.5 rounded-xl bg-primary/5 border border-primary/10 text-xs font-bold text-primary"
                      >
                        {met}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Ferramentas & Qualidade
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {otherSkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-white/5 border border-white/5 px-3 py-1.5 rounded-xl text-slate-300 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Competências
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {mainSkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-xl text-primary font-bold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
