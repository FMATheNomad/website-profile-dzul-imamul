import { MapPin, Phone, Scissors } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="relative border-t border-border/40">
      <div className="container px-4 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="#home" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                <Scissors className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Dzul<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground/70 max-w-xs leading-relaxed">
              Gentleman&apos;s Grooming. Potongan elegan untuk pria modern
              dengan sentuhan klasik.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Kontak
            </h4>
            <div className="flex items-center gap-3 text-sm text-muted-foreground/80">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span>Bandung, Jawa Barat</span>
            </div>
            <a
              href="https://wa.me/6289661330005"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground/80 transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <span>0896-6133-0005</span>
            </a>
            <div className="mt-2">
              <WhatsAppButton size="default" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Navigasi
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "#home", label: "Home" },
                { href: "#menu", label: "Menu Potongan" },
                { href: "#gallery", label: "Galeri" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground/70 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-border/40 py-6">
        <div className="container px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground/60">
          <p>&copy; {year} Dzul Imamul Hakim. All rights reserved.</p>
          <p>
            Dibuat dengan gaya untuk pria modern
          </p>
        </div>
      </div>
    </footer>
  );
}
