import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-xl rounded-[2rem] border border-border/50 bg-background p-10 text-center shadow-card">
        <p className="font-body text-xs uppercase tracking-[0.24em] text-muted-foreground">
          Błąd 404
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold md:text-6xl">Nie znaleziono strony</h1>
        <p className="mt-4 font-body text-base leading-7 text-muted-foreground">
          Wygląda na to, że ten adres nie istnieje albo strona została przeniesiona.
          Wróć na stronę główną i przejdź do interesującej Cię sekcji.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-full bg-foreground px-6 py-3 font-body text-sm font-medium text-background transition-colors hover:bg-foreground/90"
        >
          Wróć na stronę główną
        </a>
      </div>
    </div>
  );
};

export default NotFound;
