import {
  CategoriesHero,
  CategoriesGrid,
  CategoriesBanner,
  CategoriesCTA,
} from ".";

const CategoriesSection = () => {
  return (
    <main className="overflow-hidden bg-slate-950">
      {/* Hero */}
      <CategoriesHero />

      {/* Grid */}
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-red from-transparent via-white/10 to-transparent" />
        <CategoriesGrid />
      </section>

      {/* Banner */}
      <section className="relative bg-gradient-to-blue from-slate-950 to-slate-900">
        <CategoriesBanner />
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-red from-transparent via-white/10 to-transparent" />
        <CategoriesCTA />
      </section>
    </main>
  );
};

export default CategoriesSection;