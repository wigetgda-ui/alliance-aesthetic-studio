import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "1. Administrator danych",
    content:
      "Administratorem danych osobowych jest Alliance Aesthetic. W sprawach dotyczących prywatności możesz skontaktować się mailowo pod adresem kontakt@allianceaesthetic.pl lub telefonicznie pod numerem +48 507 224 100.",
  },
  {
    title: "2. Zakres przetwarzanych danych",
    content:
      "Możemy przetwarzać dane przekazywane podczas kontaktu, rezerwacji wizyty lub wysyłania wiadomości, w szczególności: imię, nazwisko, numer telefonu, adres e-mail oraz informacje niezbędne do obsługi zapytania lub rezerwacji.",
  },
  {
    title: "3. Cele przetwarzania",
    content:
      "Dane przetwarzamy w celu kontaktu z klientem, obsługi rezerwacji, realizacji usług, odpowiedzi na wiadomości, prowadzenia dokumentacji oraz ochrony prawnie uzasadnionych interesów administratora, takich jak dochodzenie lub obrona roszczeń.",
  },
  {
    title: "4. Podstawa prawna",
    content:
      "Podstawą przetwarzania danych może być zgoda użytkownika, niezbędność do wykonania usługi lub podjęcia działań przed jej realizacją, obowiązek prawny oraz prawnie uzasadniony interes administratora.",
  },
  {
    title: "5. Odbiorcy danych",
    content:
      "Dane mogą być przekazywane podmiotom wspierającym obsługę strony, komunikacji oraz systemów rezerwacyjnych, w zakresie niezbędnym do prawidłowego świadczenia usług. Dane nie są sprzedawane osobom trzecim.",
  },
  {
    title: "6. Czas przechowywania",
    content:
      "Dane przechowujemy przez okres niezbędny do realizacji celu, dla którego zostały zebrane, a także przez czas wynikający z przepisów prawa lub potrzeb związanych z dochodzeniem roszczeń.",
  },
  {
    title: "7. Prawa użytkownika",
    content:
      "Masz prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, wniesienia sprzeciwu, przenoszenia danych oraz cofnięcia zgody, jeśli była podstawą przetwarzania. Masz także prawo złożenia skargi do Prezesa UODO.",
  },
  {
    title: "8. Pliki cookies",
    content:
      "Strona może wykorzystywać pliki cookies w celu prawidłowego działania, zapamiętania preferencji użytkownika oraz poprawy jakości korzystania ze strony. Ustawienia cookies można zmienić w przeglądarce internetowej.",
  },
  {
    title: "9. Kontakt",
    content:
      "W przypadku pytań dotyczących prywatności lub przetwarzania danych skontaktuj się z nami pod adresem kontakt@allianceaesthetic.pl.",
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Polityka prywatności | Alliance Aesthetic</title>
        <meta
          name="description"
          content="Polityka prywatności Alliance Aesthetic dotycząca przetwarzania danych osobowych i plików cookies."
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
            <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Polityka prywatności
            </h1>
            <p className="mt-4 font-body text-base leading-7 text-muted-foreground">
              Poniższy dokument ma charakter informacyjny i określa zasady przetwarzania danych
              osobowych oraz korzystania z plików cookies w ramach strony Alliance Aesthetic.
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

export default PrivacyPolicy;
