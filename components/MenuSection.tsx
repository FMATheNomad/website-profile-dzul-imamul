import { Scissors } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const menuItems = [
  { name: "Classic Pompadour", desc: "Volume di atas, rapi di sisi" },
  { name: "Modern Quiff", desc: "Tinggi terstruktur, tampilan segar" },
  { name: "Buzz Cut", desc: "Praktis, bersih, maskulin" },
  { name: "Undercut Fade", desc: "Fade mulus, gaya urban" },
  { name: "Gentleman's Side Part", desc: "Belahan rapi, elegan" },
  { name: "Textured Crop", desc: "Natural, mudah diatur" },
];

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container relative z-10 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
            <Scissors className="h-3.5 w-3.5" />
            Menu Potongan
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Pilihan Gaya{" "}
            <span className="text-primary">Rambut</span>
          </h2>
          <p className="mt-4 text-muted-foreground/80 max-w-lg mx-auto">
            Setiap potongan dikerjakan dengan presisi, disesuaikan dengan bentuk
            wajah dan kepribadian Anda.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, i) => (
            <Card
              key={item.name}
              className="group border-border/50 bg-card/50 backdrop-blur transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Scissors className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground/70">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
