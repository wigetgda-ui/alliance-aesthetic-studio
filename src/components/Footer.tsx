import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background py-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="font-body text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Alliance Aesthetic
            </p>
            <p className="mt-3 font-display text-2xl font-semibold">
              Estetyka oparta na proporcji, spokoju i jakości.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 font-body text-sm text-muted-foreground">
            <a
              href="https://allianceaesthetic.booksy.com/a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              Rezerwacje Booksy
            </a>
            <a
              href="https://www.instagram.com/alliance_aesthetic"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              Instagram
            </a>
            <a href="mailto:kontakt@allianceaesthetic.pl" className="hover:text-foreground">
              kontakt@allianceaesthetic.pl
            </a>
            <a href="tel:+48507224100" className="hover:text-foreground">
              +48 507 224 100
            </a>
            <Link to="/polityka-prywatnosci" className="hover:text-foreground">
              Polityka prywatności
            </Link>
            <Link to="/regulamin" className="hover:text-foreground">
              Regulamin
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border/50 pt-6 font-body text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Alliance Aesthetic. Wszystkie prawa zastrzeżone.</p>
          <p>Informacje o cookies, regulaminie i zasadach prywatności znajdziesz na stronie.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
