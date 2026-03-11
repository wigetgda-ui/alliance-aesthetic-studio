import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen, HeartHandshake } from "lucide-react";

const features = [
  { icon: Users, text: "Kameralne grupy" },
  { icon: BookOpen, text: "Gotowe protokoły" },
  { icon: GraduationCap, text: "Dużo praktyki" },
  { icon: HeartHandshake, text: "Opieka poszkoleniowa" },
];

const Training = () => {
  return (
    <section id="szkolenia" className="bg-ecru py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Szkolenia
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Nauka oparta na praktyce, estetyce i realnej pracy z klientką
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-muted-foreground">
            Oferujemy szkolenia podstawowe i zaawansowane z makijażu permanentnego oraz
            wybranych terapii estetycznych. Stawiamy na kameralną atmosferę, konkretne
            procedury i wsparcie także po zakończeniu szkolenia.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.text}
              className="flex items-center gap-3 rounded-[1.5rem] border border-border/40 bg-background/70 px-5 py-4 text-left shadow-soft"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory">
                <feature.icon className="h-4 w-4 text-foreground" />
              </div>
              <span className="font-body text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-[2rem] border border-border/40 bg-background/60 p-6 text-center shadow-soft">
          <p className="font-body text-sm leading-7 text-muted-foreground">
            Jeśli chcesz poznać program, terminy albo formę szkolenia 1:1, napisz do nas na
            Instagramie. Dobierzemy format do Twojego poziomu i celu.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 rounded-full bg-foreground px-8 text-background hover:bg-foreground/90"
          >
            <a
              href="https://www.instagram.com/alliance_aesthetic"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zapytaj o termin
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Training;
