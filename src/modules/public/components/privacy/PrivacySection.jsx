import {
  PrivacyHero,
  PrivacySidebar,
  PrivacyContent,
  PrivacyCTA,
} from ".";

const PrivacySection = () => {
  return (
    <main className="bg-white dark:bg-slate-950">
      <PrivacyHero />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <PrivacySidebar />
            </aside>

            <div className="lg:col-span-9">
              <PrivacyContent />
            </div>
          </div>
        </div>
      </section>

      <PrivacyCTA />
    </main>
  );
};

export default PrivacySection;
