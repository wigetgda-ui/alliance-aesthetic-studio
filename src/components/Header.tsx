import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-salon.jpeg";

const navLinks = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#cennik", label: "Cennik" },
  { href: "#o-nas", label: "O nas" },
  { href: "#szkolenia", label: "Szkolenia" },
  { href: "#galeria", label: "Galeria" },
  { href: "#kontakt", label: "Kontakt" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md backdrop-saturate-150">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-3" aria-label="Przejdź na początek strony">
          <img src={logo} alt="Alliance Aesthetic" className="h-11 w-auto rounded-full" />
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button asChild variant="outline" className="rounded-full border-foreground/20 px-6">
            <a
              href="https://allianceaesthetic.booksy.com/a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rezerwuj w Booksy
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Otwórz menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="absolute left-0 right-0 top-16 border-b border-border bg-background p-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild variant="outline" className="w-full rounded-full">
              <a
                href="https://allianceaesthetic.booksy.com/a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rezerwuj w Booksy
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
