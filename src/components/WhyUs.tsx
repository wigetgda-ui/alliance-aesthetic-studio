import { Sparkles, Shield, Heart } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Naturalny efekt",
    description:
      "Podkreślamy rysy, nie zmieniamy tożsamości. Subtelność i harmonia są dla nas ważniejsze niż chwilowe trendy.",
  },
  {
    icon: Shield,
    title: "Bezpieczeństwo",
    description:
      "Pracujemy na certyfikowanych preparatach, nowoczesnych urządzeniach i przejrzystych protokołach zabiegowych.",
  },
  {
    icon: Heart,
    title: "Komfort",
    description:
      "Uważna konsultacja, spokojna przestrzeń i troska o każdy detal od pierwszego kontaktu po opiekę pozabiegową.",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-body text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Dlaczego my
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Estetyka oparta na zaufaniu, nie na pośpiechu
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
            Każda decyzja zabiegowa wynika z konsultacji, anatomii i oczekiwanego efektu.
            Dzięki temu pracujemy spokojnie, precyzyjnie i bez przesady.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="group rounded-[1.75rem] border border-border/50 bg-background p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ecru transition-colors group-hover:bg-warm-beige">
                <feature.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
