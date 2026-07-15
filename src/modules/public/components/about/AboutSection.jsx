import {
  AboutHero,
  AboutStory,
  AboutStats,
  AboutValues,
  AboutCTA,
} from ".";

const AboutSection = () => {
  return (
    <main className="overflow-hidden bg-white ">
      {/* Hero */}
      <AboutHero />

      {/* Story */}
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-red from-transparent via-slate-200 to-transparent" />
        <AboutStory />
      </section>

      {/* Stats */}
      <section className="relative bg-gradient-to-blue from-slate-50 to-white">
        <AboutStats />
      </section>

      {/* Values */}
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-red from-transparent via-slate-200 to-transparent" />
        <AboutValues />
      </section>

      {/* CTA */}
      <section className="relative">
        <AboutCTA />
      </section>
    </main>
  );
};

export default AboutSection;