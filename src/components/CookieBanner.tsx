import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const COOKIE_CONSENT_KEY = "alliance-cookie-consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const storedConsent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!storedConsent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-4xl rounded-[1.75rem] border border-border/60 bg-background/95 p-5 shadow-elegant backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="font-body text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Pliki cookies
          </p>
          <p className="mt-2 font-body text-sm leading-6 text-foreground/85">
            Ta strona korzysta z plików cookies niezbędnych do jej prawidłowego działania oraz
            poprawy wygody korzystania. Szczegóły znajdziesz w{" "}
            <Link to="/polityka-prywatnosci" className="underline underline-offset-4">
              polityce prywatności
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline" className="rounded-full border-foreground/20 px-6">
            <Link to="/polityka-prywatnosci">Dowiedz się więcej</Link>
          </Button>
          <Button onClick={acceptCookies} className="rounded-full px-6">
            Akceptuję
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
