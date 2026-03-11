# Alliance Aesthetic Studio

Strona internetowa salonu `Alliance Aesthetic` zbudowana w oparciu o `Vite`, `React`, `TypeScript` i `Tailwind CSS`.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

## Build produkcyjny

```bash
npm run build
```

## GitHub Pages

Projekt jest przygotowany do publikacji na GitHub Pages z repozytorium `alliance-aesthetic-studio`.

1. Wrzuć projekt do repozytorium GitHub.
2. Upewnij się, że domyślna gałąź to `main`.
3. W ustawieniach repozytorium wejdź w `Settings -> Pages`.
4. W sekcji `Build and deployment` wybierz `GitHub Actions`.
5. Po każdym pushu na `main` workflow z folderu `.github/workflows/deploy-pages.yml` zbuduje i opublikuje stronę.

Lokalny build pod GitHub Pages:

```bash
npm run build:pages
```

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Struktura

- `src/components` - sekcje strony i komponenty interfejsu
- `src/pages` - widoki routingu
- `src/assets` - obrazy i logo

## Uwagi

- Rezerwacje prowadzone są przez Booksy.
- Kontakt i aktualności prowadzone są również przez Instagram.
- W projekcie nadal znajdują się wygenerowane komponenty `shadcn/ui`, z których nie wszystkie są obecnie używane.
