import { Github, Linkedin, MessageSquare, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-bold">VC</span>
            </div>
            <span className="font-semibold text-foreground">Vinícius Caetano</span>
          </a>
          <p className="text-xs text-muted-foreground mt-4">© 2026 Vinícius Caetano. Todos os direitos reservados.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/vcaetanodesouza" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/vin%C3%ADcius-caetano-161404199/" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://wa.me/554899352899" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110">
            <MessageSquare className="w-5 h-5" />
          </a>
          <a href="mailto:vcaetanodesouza@gmail.com" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110">
            <Mail className="w-5 h-5" />
          </a>
        </div>


      </div>
    </footer>
  );
}
