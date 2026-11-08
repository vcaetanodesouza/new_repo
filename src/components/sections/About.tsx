import { motion } from "motion/react";
import { CheckCircle2, ClipboardList, Rocket, Users } from "lucide-react";

const stats = [
  { icon: ClipboardList, label: "Demandas gerenciadas", value: "200+" },
  { icon: Rocket, label: "Projetos entregues", value: "50+" },
  { icon: CheckCircle2, label: "Sprints concluídas", value: "100+" },
  { icon: Users, label: "Stakeholders alinhados", value: "50+" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Sobre mim</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Transformando planejamento em resultados
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl border border-white/5 space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                Atuo na organização e acompanhamento de projetos tecnológicos, auxiliando equipes 
                no planejamento, priorização de tarefas e cumprimento de entregas.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Possuo <span className="font-medium text-slate-300">base técnica</span> em desenvolvimento web, 
                o que facilita a comunicação fluida com times de tecnologia e a compreensão profunda de requisitos técnicos.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Meu foco é garantir que objetivos de negócio sejam traduzidos em entregas claras, organizadas e alinhadas às necessidades dos stakeholders.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ icon: Icon, label, value }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl text-center hover:glow-sm transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">{value}</div>
                <div className="text-sm text-muted-foreground mt-1">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
