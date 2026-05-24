import { Camera } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137a2f6?w=600&q=80",
    alt: "Barber sedang memotong rambut",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    alt: "Alat cukur klasik",
  },
  {
    src: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&q=80",
    alt: "Hasil potongan rapi",
  },
  {
    src: "https://images.unsplash.com/photo-1593702288056-99a3b50e1eab?w=600&q=80",
    alt: "Interior barbershop",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
    alt: "Model rambut fade",
  },
  {
    src: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&q=80",
    alt: "Barber sedang bekerja",
  },
  {
    src: "https://images.unsplash.com/photo-1585747860243-d93f1fd4e27a?w=600&q=80",
    alt: "Barbershop pole klasik",
  },
  {
    src: "https://images.unsplash.com/photo-1567894340315-735d7c361db7?w=600&q=80",
    alt: "Kursi barbershop klasik",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container relative z-10 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
            <Camera className="h-3.5 w-3.5" />
            Galeri
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Hasil Potongan{" "}
            <span className="text-primary">Terbaik</span>
          </h2>
          <p className="mt-4 text-muted-foreground/80 max-w-lg mx-auto">
            Beberapa karya potongan ramput yang telah kami buat untuk para
            pelanggan.
          </p>
        </div>

        <div className="mt-14 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <AspectRatio ratio={3 / 4}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-xs text-white/90">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
