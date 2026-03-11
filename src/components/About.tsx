import dariaImage from "@/assets/daria-optimized.jpg";
import angelikaImage from "@/assets/angelika-optimized.jpg";

const teamMembers = [
  {
    name: "Angelika",
    role: "Medycyna estetyczna",
    emphasis: "Naturalne modelowanie i terapie rewitalizujące",
    description:
      "Jestem specjalistką w dziedzinie medycyny estetycznej. W codziennej pracy łączę precyzję, estetykę i uważność na każdy detal, dbając o to, aby efekt był subtelny, harmonijny i dopasowany do urody pacjentki.",
    note:
      "Specjalizuję się w modelowaniu ust, biostymulacji skóry oraz terapiach rewitalizujących. Regularnie biorę udział w szkoleniach i kongresach medycyny estetycznej, aby oferować nowoczesne, bezpieczne i sprawdzone rozwiązania.",
    image: angelikaImage,
  },
  {
    name: "Daria",
    role: "PMU i laser",
    emphasis: "Doświadczenie, edukacja i precyzja",
    description:
      "Od ponad 10 lat jestem związana z branżą beauty, a od ponad 5 lat specjalizuję się w makijażu permanentnym oraz usuwaniu laserowym. Łączę precyzję z estetyką, pomagając klientkom podkreślać naturalne piękno i odzyskiwać komfort oraz pewność siebie.",
    note:
      "Poza pracą z klientkami prowadzę także szkolenia od podstaw i zaawansowane warsztaty dla osób, które chcą rozwijać się w makijażu permanentnym. Stale podnoszę kwalifikacje, by dostarczać najwyższą jakość usług i edukacji.",
    image: dariaImage,
  },
];

const About = () => {
  return (
    <section id="o-nas" className="bg-background py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="font-body text-xs uppercase tracking-[0.24em] text-muted-foreground">
            O nas
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Dwie specjalizacje, jedno podejście: estetyka z wyczuciem
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
            Alliance Aesthetic stworzyłyśmy z myślą o kobietach, które szukają jakości,
            bezpieczeństwa i naturalnych efektów. Łączymy doświadczenie, profesjonalizm i
            spokojną atmosferę, w której można poczuć się naprawdę zaopiekowaną.
          </p>
        </div>

        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className={`grid items-center gap-8 lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.1fr)] lg:gap-14 ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden rounded-[2rem] border border-border/50 bg-card shadow-elegant ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="absolute left-5 top-5 z-10 rounded-full bg-background/85 px-3 py-1 font-body text-xs uppercase tracking-[0.18em] text-foreground shadow-soft">
                  Alliance Team
                </div>
                <img
                  src={member.image}
                  alt={`${member.name} - specjalistka ${member.role}`}
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="inline-flex rounded-full border border-border/60 bg-ivory px-4 py-2 font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {member.role}
                </div>
                <h3 className="mt-5 font-display text-3xl font-semibold md:text-4xl">
                  {member.name}
                </h3>
                <p className="mt-3 font-body text-sm font-medium uppercase tracking-[0.18em] text-foreground/75">
                  {member.emphasis}
                </p>
                <p className="mt-6 font-body text-base leading-8 text-muted-foreground">
                  {member.description}
                </p>
                <div className="mt-6 rounded-[1.5rem] border border-border/50 bg-card/70 p-5">
                  <p className="font-body text-sm leading-7 text-foreground/80">{member.note}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
