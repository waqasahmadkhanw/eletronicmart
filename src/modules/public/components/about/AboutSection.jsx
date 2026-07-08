import {
  AboutHero,
  AboutStory,
  AboutStats,
  AboutValues,
  AboutCTA,
} from ".";

const AboutSection = () => {
  return (
    <main className="bg-white dark:bg-slate-950">
      <AboutHero />

      <AboutStory />

      <AboutStats />

      <AboutValues />

      <AboutCTA />
    </main>
  );
};

export default AboutSection;