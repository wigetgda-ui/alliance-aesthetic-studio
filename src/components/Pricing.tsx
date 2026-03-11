import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  pricingCategories,
  pricingFootnote,
  pricingHighlights,
} from "@/data/pricing";

const Pricing = () => {
  return (
    <section id="cennik" className="bg-gradient-to-b from-background to-ivory py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-body text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Cennik
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Transparentna oferta bez ukrytych kosztów
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
            Każdy zabieg poprzedzamy konsultacją i doborem odpowiedniej procedury. Ceny pomagają
            w orientacji, ale ostateczny plan zawsze ustalamy indywidualnie.
          </p>
        </div>

        <div className="mx-auto mb-10 grid max-w-4xl gap-4 md:grid-cols-3">
          {pricingHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] border border-border/50 bg-background/80 p-5 shadow-soft"
            >
              <p className="font-body text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-2 font-display text-3xl font-semibold">{item.value}</p>
              <p className="mt-2 font-body text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-3">
            {pricingCategories.map((category, index) => (
              <AccordionItem
                key={category.title}
                value={`item-${index}`}
                className="overflow-hidden rounded-[1.5rem] border border-border/50 bg-background px-6 shadow-soft data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="font-display text-lg font-semibold hover:no-underline">
                  {category.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pb-4">
                    {category.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center justify-between gap-4 border-b border-dashed border-border/50 pb-3 last:border-0"
                      >
                        <span className="font-body text-sm leading-6 text-foreground">
                          {item.name}
                        </span>
                        <span className="shrink-0 rounded-full bg-ecru px-3 py-1 font-body text-sm font-medium text-foreground">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center font-body text-xs leading-6 text-muted-foreground">
          {pricingFootnote}
        </p>
      </div>
    </section>
  );
};

export default Pricing;
