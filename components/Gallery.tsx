import { Camera } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Barber sedang memotong rambut" },
  { src: "/images/gallery-2.jpg", alt: "Alat cukur klasik" },
  { src: "/images/gallery-3.jpg", alt: "Hasil potongan rapi" },
  { src: "/images/gallery-4.jpg", alt: "Interior barbershop" },
  { src: "/images/gallery-5.jpg", alt: "Model rambut fade" },
  { src: "/images/gallery-6.jpg", alt: "Barber sedang bekerja" },
  { src: "/images/gallery-7.jpg", alt: "Peralatan barbershop" },
  { src: "/images/gallery-8.jpg", alt: "Suasana barbershop" },
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
