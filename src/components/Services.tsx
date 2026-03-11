import { Brush, Heart, Sparkles, Zap } from "lucide-react";

const services = [
  {
    icon: Brush,
    title: "Makijaż permanentny",
    description: "Soft Ombré, włos maszynowy, metoda hybrydowa i usta Satin Lips.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
  },
  {
    icon: Heart,
    title: "Modelowanie ust i wolumetria",
    description: "Delikatne modelowanie konturów twarzy i ust z zachowaniem proporcji.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
  },
  {
    icon: Sparkles,
    title: "Biostymulatory i mezoterapia",
    description: "Regeneracja, zagęszczenie i zdrowy blask skóry.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
  },
  {
    icon: Zap,
    title: "Morpheus8",
    description: "Ujędrnienie, wygładzenie, zwężenie porów i redukcja blizn.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
  },
];

const Services = () => {
  return (
    <section id="uslugi" className="bg-background py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-body text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Oferta
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Zabiegi, które wspierają rysy, jakość skóry i pewność siebie
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
            Skupiamy się na usługach, które dają elegancki efekt i mają realne uzasadnienie
            estetyczne. Bez przesytu, bez przypadkowych trendów.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-border/50 bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 font-body text-xs uppercase tracking-[0.2em] text-foreground shadow-soft">
                  Alliance
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-ecru">
                  <service.icon className="h-4 w-4 text-foreground" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
