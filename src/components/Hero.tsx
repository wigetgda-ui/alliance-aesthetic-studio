import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, MapPin } from "lucide-react";
import logo from "@/assets/logo-salon.jpeg";
import heroImage from "@/assets/angelika-optimized.jpg";

const highlights = [
  "naturalne efekty",
  "kameralne konsultacje",
  "nowoczesne terapie estetyczne",
];

const trustPoints = [
  { label: "Lokalizacja", value: "Gdańsk, Zaspa" },
  { label: "Rezerwacje", value: "Booksy i Instagram" },
  { label: "Oferta", value: "zabiegi i szkolenia" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-ivory to-ecru">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.85),transparent_32%),linear-gradient(180deg,transparent,rgba(255,255,255,0.35))]" />
      <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-warm-beige/35 blur-3xl" />

      <div className="container relative z-10 grid min-h-[88vh] items-center gap-14 px-4 py-16 md:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex animate-fade-up items-center gap-3 rounded-full border border-border/60 bg-background/80 px-3 py-2 shadow-soft backdrop-blur">
            <img src={logo} alt="Alliance Aesthetic logo" className="h-10 w-10 rounded-full object-cover" />
            <div className="pr-2">
              <p className="font-body text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
                Alliance Aesthetic
              </p>
              <p className="font-body text-xs text-foreground/80">Medycyna estetyczna i PMU</p>
            </div>
          </div>

          <h1 className="mt-6 animate-fade-up font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Subtelna estetyka,
            <br />
            <span className="text-muted-foreground">która wygląda świeżo, elegancko i naturalnie.</span>
          </h1>

          <p className="mt-6 animate-fade-up font-body text-lg leading-relaxed text-muted-foreground md:text-xl [animation-delay:160ms]">
            Łączymy spokój dopracowanego studio beauty z precyzją medycyny estetycznej.
            Pracujemy uważnie, bez pośpiechu i z naciskiem na efekt, który podkreśla urodę,
            a nie ją zmienia.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 animate-fade-up [animation-delay:260ms]">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border/60 bg-background/70 px-4 py-2 font-body text-sm text-foreground/85 shadow-soft"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up [animation-delay:360ms]">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-foreground px-8 text-background hover:bg-foreground/90"
            >
              <a
                href="https://allianceaesthetic.booksy.com/a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Umów wizytę w Booksy
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-foreground/20 bg-background/60 px-8"
            >
              <a
                href="https://www.instagram.com/alliance_aesthetic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram size={18} />
                Zobacz Instagram
              </a>
            </Button>
          </div>
        </div>

        <aside className="animate-fade-in [animation-delay:220ms]">
          <div className="rounded-[2.25rem] border border-white/60 bg-white/70 p-4 shadow-elegant backdrop-blur">
            <div className="grid gap-4 lg:grid-cols-[0.88fr_1.12fr]">
              <div className="overflow-hidden rounded-[1.75rem] bg-card">
                <img
                  src={heroImage}
                  alt="Angelika z Alliance Aesthetic"
                  className="h-full min-h-[420px] w-full object-cover"
                />
              </div>

              <div className="rounded-[1.75rem] border border-border/60 bg-background/80 p-6">
                <p className="font-body text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Pierwsza wizyta
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight">
                  Konsultacja i plan zabiegowy dopasowany do Ciebie
                </h2>
                <p className="mt-4 font-body text-sm leading-6 text-muted-foreground">
                  Zaczynamy od rozmowy, potrzeb skóry i oczekiwanego efektu. Dzięki temu dobieramy
                  zabieg spokojnie, uczciwie i z pełnym wyczuciem.
                </p>

                <div className="mt-8 space-y-3">
                  {trustPoints.map((point) => (
                    <div
                      key={point.label}
                      className="flex items-center justify-between rounded-2xl border border-border/60 bg-card/70 px-4 py-3"
                    >
                      <span className="font-body text-sm text-muted-foreground">{point.label}</span>
                      <span className="font-body text-sm font-medium text-foreground">
                        {point.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-start gap-3 rounded-2xl bg-ecru/70 px-4 py-4">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <p className="font-body text-sm leading-6 text-foreground/80">
                    Studio przy ul. Dywizjonu 303 1 w Gdańsku. Rezerwacja online lub przez
                    wiadomość na Instagramie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-ecru/35 to-transparent" />
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
