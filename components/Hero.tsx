import { Scissors, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";

const profileImg = "/images/profile.png";
const logoImg = "/images/logo.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            <div className="mb-6 flex items-center gap-2">
              <img
                src={logoImg}
                alt="Barbershop"
                className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover ring-2 ring-primary/30"
              />
              <div className="h-px w-12 bg-primary/40 hidden sm:block" />
              <span className="text-xs uppercase tracking-[0.2em] text-primary/70 hidden sm:block">
                Barbershop
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              Dzul Imamul
              <br />
              <span className="text-primary">Hakim</span>
            </h1>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Master Barber & Gentleman Stylist</span>
            </div>

            <p className="mt-6 max-w-lg text-lg text-muted-foreground/90 leading-relaxed">
              Gentleman&apos;s Grooming, Potongan Elegan untuk Pria Modern
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <WhatsAppButton size="xl" />
              <Button
                variant="outline"
                size="xl"
                className="gap-2 border-primary/30 text-primary hover:bg-primary/10"
                asChild
              >
                <a href="#gallery">
                  <Scissors className="h-5 w-5" />
                  Lihat Hasil
                </a>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <span className="text-primary font-bold text-lg">5+</span>
                <span>Tahun</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-1.5">
                <span className="text-primary font-bold text-lg">1000+</span>
                <span>Klien</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-1.5">
                <span className="text-primary font-bold text-lg">50+</span>
                <span>Gaya</span>
              </div>
            </div>
          </div>

          {/* Right: Profile Photo */}
          <div className="relative flex justify-center order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -inset-1 rounded-full border border-primary/20" />
              <img
                src={profileImg}
                alt="Dzul Imamul Hakim - Master Barber"
                className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full object-cover shadow-2xl ring-2 ring-primary/20"
              />
              <div className="absolute -bottom-2 -right-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg">
                <Scissors className="h-7 w-7 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
