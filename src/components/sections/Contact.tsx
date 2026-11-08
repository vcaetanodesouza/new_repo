import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, MessageSquare, Send, Phone } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";
import { Textarea } from "@/src/components/ui/Textarea";
import { useState, type FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(result.message || result.error || "Ocorreu um erro ao enviar.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage("Erro de conexão. Tente novamente mais tarde.");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Conexão</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
            Vamos conversar?
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Interessado em otimizar seus processos ou discutir novos projetos? 
            Estou à disposição para colaborar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl border-0 mt-[10px] space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Contato e Redes
                </h3>
                <p className="text-xs text-slate-400 mt-1">Conecte-se comigo diretamente ou pelas redes sociais.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="mailto:vcaetanodesouza@gmail.com"
                  className="flex items-center gap-3 p-4 glass-subtle rounded-xl border border-[#171c22] hover:glow-sm transition-all duration-300 group min-w-0"
                >
                  <div className="w-10 h-10 glass-subtle rounded-xl flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-muted-foreground font-medium">E-mail</div>
                    <div className="text-sm text-foreground truncate select-all" title="vcaetanodesouza@gmail.com">vcaetanodesouza@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/554899352899"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 glass-subtle rounded-xl border border-[#171c22] hover:glow-sm transition-all duration-300 group min-w-0"
                >
                  <div className="w-10 h-10 glass-subtle rounded-xl flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-muted-foreground font-medium">WhatsApp</div>
                    <div className="text-sm text-foreground truncate">+55 (48) 9935-2899</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/vin%C3%ADcius-caetano-161404199/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 glass-subtle rounded-xl border border-[#171c22] hover:glow-sm transition-all duration-300 group min-w-0"
                >
                  <div className="w-10 h-10 glass-subtle rounded-xl flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-muted-foreground font-medium">LinkedIn</div>
                    <div className="text-sm text-foreground truncate">Vinícius Caetano</div>
                  </div>
                </a>

                <a
                  href="https://github.com/vcaetanodesouza"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 glass-subtle rounded-xl border border-[#171c22] hover:glow-sm transition-all duration-300 group min-w-0"
                >
                  <div className="w-10 h-10 glass-subtle rounded-xl flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-muted-foreground font-medium">GitHub</div>
                    <div className="text-sm text-foreground truncate">@vcaetanodesouza</div>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-4 text-muted-foreground transition-colors group p-4 border border-[#171c22] rounded-[16px] glass-subtle">
                <div className="w-10 h-10 glass-subtle rounded-xl flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-muted-foreground font-medium">Localização</div>
                  <div className="text-sm text-foreground">Santa Catarina, Brasil</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl border-0 mt-[10px] space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" />
                Envie uma mensagem
              </h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest font-semibold ml-1">Nome</label>
                  <Input 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    className="border-[#171c22]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest font-semibold ml-1">E-mail</label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="border-[#171c22]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest font-semibold ml-1">Mensagem</label>
                  <Textarea 
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte-me sobre sua ideia..."
                    className="resize-none border-[#171c22]"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full glow-sm rounded-xl py-6 text-base font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
                <Send className="ml-2 w-4 h-4" />
              </Button>
              {status === "success" && (
                <p className="text-center text-green-400 font-medium animate-in fade-in slide-in-from-top-2">
                  Mensagem enviada com sucesso!
                </p>
              )}
              {status === "error" && (
                <div className="space-y-2">
                  <p className="text-center text-red-400 font-medium">
                    {errorMessage}
                  </p>
                  {errorMessage.includes("RESEND_API_KEY") && (
                    <p className="text-center text-xs text-muted-foreground">
                      Dica: Configure a chave de API no menu de Configurações (Secrets).
                    </p>
                  )}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
