import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/src/components/ui/Button";

export default function Hero() {
  const profileImage = "/images/profile_dev_1779202367995.png";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[#0a0a0b]" />
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 opacity-20"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">Disponível para novos projetos</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Vinícius Caetano
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium tracking-tight">
              Analista de Projetos de TI
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed text-pretty">
              Analista de Projetos de TI com base técnica em desenvolvimento de software, 
              atuando no alinhamento de demandas, acompanhamento de entregas e organização de 
              fluxos utilizando metodologias ágeis.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="px-8 rounded-xl font-semibold bg-primary hover:bg-primary/90 text-[#0a0a0b] shadow-lg shadow-primary/20 transition-all" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
              Ver Projetos
            </Button>
            <Button variant="outline" size="lg" className="px-8 rounded-xl border-white/10 bg-transparent hover:bg-white/5 hover:text-primary transition-all" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
              Entrar em Contato
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center gap-4 pt-8 pb-[10px]"
          >
            {[
              { icon: Github, href: "https://github.com/vcaetanodesouza", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/vin%C3%ADcius-caetano-161404199/", label: "LinkedIn" },
              { icon: MessageSquare, href: "https://wa.me/554899352899", label: "WhatsApp" },
              { icon: Mail, href: "mailto:vcaetanodesouza@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 glass-subtle rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
