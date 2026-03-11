import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "1. Postanowienia ogólne",
    content:
      "Niniejszy regulamin określa zasady umawiania wizyt, rezerwacji terminów oraz korzystania z usług oferowanych przez Alliance Aesthetic.",
  },
  {
    title: "2. Rezerwacja wizyty",
    content:
      "Rezerwacji można dokonać poprzez Booksy, telefonicznie, mailowo lub za pośrednictwem wiadomości na Instagramie. Rezerwacja terminu oznacza akceptację niniejszego regulaminu.",
  },
  {
    title: "3. Zadatek",
    content:
      "W celu potwierdzenia rezerwacji może być wymagany zadatek w wysokości wskazanej podczas umawiania wizyty. Zadatek należy opłacić w terminie 24 godzin od ustalenia terminu, chyba że ustalono inaczej.",
  },
  {
    title: "4. Zmiana lub odwołanie wizyty",
    content:
      "Prosimy o odwołanie lub zmianę terminu z odpowiednim wyprzedzeniem. Nieobecność lub odwołanie wizyty w zbyt krótkim czasie może skutkować utratą zadatku.",
  },
  {
    title: "5. Kwalifikacja do zabiegu",
    content:
      "Każdy zabieg poprzedzany jest konsultacją i kwalifikacją. Alliance Aesthetic zastrzega sobie prawo odmowy wykonania usługi, jeśli istnieją przeciwwskazania zdrowotne lub bezpieczeństwo zabiegu budzi wątpliwości.",
  },
  {
    title: "6. Przygotowanie do wizyty",
    content:
      "Klient zobowiązany jest do przekazania prawdziwych informacji dotyczących stanu zdrowia, przyjmowanych leków oraz innych istotnych okoliczności mogących wpływać na przebieg lub bezpieczeństwo zabiegu.",
  },
  {
    title: "7. Reklamacje",
    content:
      "W przypadku pytań lub zastrzeżeń dotyczących wykonanej usługi prosimy o kontakt mailowy lub telefoniczny. Każda sprawa rozpatrywana jest indywidualnie.",
  },
  {
    title: "8. Postanowienia końcowe",
    content:
      "Regulamin może być aktualizowany w razie potrzeby. Aktualna wersja dokumentu dostępna jest na stronie internetowej lub przekazywana podczas rezerwacji.",
  },
];

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Regulamin | Alliance Aesthetic</title>
        <meta
          name="description"
          content="Regulamin rezerwacji i korzystania z usług Alliance Aesthetic."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-ivory">
        <div className="container px-4 py-16 md:px-6 md:py-24">
          <Link
            to="/"
            className="font-body text-sm text-muted-foreground underline underline-offset-4"
          >
            Wróć na stronę główną
          </Link>

          <div className="mt-8 max-w-4xl rounded-[2rem] border border-border/50 bg-background/80 p-8 shadow-card md:p-10">
            <p className="font-body text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Dokument
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Regulamin</h1>
            <p className="mt-4 font-body text-base leading-7 text-muted-foreground">
              Poniższy regulamin określa zasady rezerwacji wizyt i korzystania z usług w Alliance
              Aesthetic.
            </p>

            <div className="mt-10 space-y-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-display text-2xl font-semibold">{section.title}</h2>
                  <p className="mt-3 font-body text-sm leading-7 text-foreground/80">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
