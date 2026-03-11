import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, ArrowRight } from "lucide-react";
import logo from "@/assets/logo-salon.jpeg";

const contactItems = [
  {
    icon: MapPin,
    label: "Adres",
    value: (
      <>
        Dywizjonu 303 1
        <br />
        80-465 Gdańsk
      </>
    ),
  },
  {
    icon: Phone,
    label: "Telefon",
    value: (
      <a href="tel:+48507224100" className="hover:text-foreground">
        +48 507 224 100
      </a>
    ),
  },
  {
    icon: Mail,
    label: "E-mail",
    value: (
      <a href="mailto:kontakt@allianceaesthetic.pl" className="hover:text-foreground">
        kontakt@allianceaesthetic.pl
      </a>
    ),
  },
  {
    icon: Clock,
    label: "Godziny",
    value: "pn-pt 10:00-19:00 (elastycznie na zapisy)",
  },
];

const Contact = () => {
  return (
    <section id="kontakt" className="bg-ivory py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-body text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Kontakt
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Umów wizytę lub napisz, jeśli chcesz dobrać zabieg
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
            Najszybciej zarezerwujesz termin przez Booksy. Jeśli wolisz najpierw zapytać o
            zabieg, szkolenie albo plan działania, skontaktuj się z nami bezpośrednio.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="rounded-[2rem] border border-border/50 bg-background p-6 shadow-card md:p-8">
            <div className="rounded-[1.5rem] border border-border/50 bg-card/50 p-6">
              <div className="flex items-center gap-4">
                <img
                  src={logo}
                  alt="Logo Alliance Aesthetic"
                  className="h-14 w-14 rounded-full object-cover shadow-soft"
                />
                <div>
                  <p className="font-body text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Alliance Aesthetic
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-semibold">Studio beauty i estetyki</h3>
                </div>
              </div>

              <p className="mt-5 font-body text-sm leading-7 text-muted-foreground">
                Kameralne studio medycyny estetycznej i PMU. Stawiamy na spokojny proces,
                precyzyjną konsultację i efekt dopasowany do twarzy, nie do chwilowej mody.
              </p>

              <div className="mt-8 space-y-4">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background/80 px-4 py-4"
                  >
                    <item.icon className="mt-1 h-4 w-4 shrink-0 text-foreground" />
                    <div className="font-body text-sm text-muted-foreground">
                      <p className="mb-1 text-xs uppercase tracking-[0.18em]">{item.label}</p>
                      <div className="leading-6 text-foreground/85">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-foreground px-6 text-background hover:bg-foreground/90"
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
                  className="rounded-full border-foreground/20 px-6"
                >
                  <a
                    href="https://www.instagram.com/alliance_aesthetic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border/50 bg-background shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.8392!2d18.4897!3d54.4052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd0b7e9f0e8c1f%3A0x0!2sDywizjonu%20303%201%2C%2080-465%20Gda%C5%84sk!5e0!3m2!1spl!2spl!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja Alliance Aesthetic"
              className="min-h-[460px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
