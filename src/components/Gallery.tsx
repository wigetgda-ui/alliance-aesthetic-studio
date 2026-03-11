import salonMain from "@/assets/salon-main.webp";
import salonCollage from "@/assets/salon-collage.webp";

const images = [
  {
    src: salonMain,
    alt: "Elegancki gabinet zabiegowy Alliance Aesthetic",
    title: "Gabinet zabiegowy",
  },
  {
    src: salonCollage,
    alt: "Wnętrza salonu Alliance Aesthetic",
    title: "Wnętrze salonu",
  },
];

const Gallery = () => {
  return (
    <section id="galeria" className="bg-gradient-to-b from-background to-ivory py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-body text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Galeria
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Przestrzeń, która wycisza i buduje zaufanie
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
            Zadbaliśmy o miejsce, w którym można poczuć spokój, komfort i pełne skupienie na
            zabiegu. Wnętrze jest częścią całego doświadczenia, nie tylko tłem.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {images.map((image, index) => (
            <article
              key={image.title}
              className={`group overflow-hidden rounded-[2rem] border border-border/50 bg-background shadow-card ${
                index === 0 ? "lg:row-span-2" : ""
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    index === 0 ? "h-full min-h-[540px]" : "min-h-[260px]"
                  }`}
                  loading="lazy"
                />
              </div>
              <div className="border-t border-border/50 px-6 py-5">
                <p className="font-body text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Alliance Aesthetic
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{image.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
