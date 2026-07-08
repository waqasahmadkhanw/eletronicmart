import {
  FAQHero,
  FAQCategories,
  FAQAccordion,
  FAQCTA,
} from ".";

const FAQSection = () => {
  return (
    <main className="bg-white dark:bg-slate-950">
      <FAQHero />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <FAQCategories />

            <div className="mt-12">
              <FAQAccordion />
            </div>
          </div>
        </div>
      </section>

      <FAQCTA />
    </main>
  );
};

export default FAQSection;