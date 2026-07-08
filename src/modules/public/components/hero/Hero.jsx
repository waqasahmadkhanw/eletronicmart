import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroSearch from "./HeroSearch";
import HeroStats from "./HeroStats";
import HeroFeatures from "./HeroFeatures";
import HeroCTA from "./HeroCTA";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-brown from-slate-50 via-white to-blue-50">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <HeroContent />

            <HeroSearch />

            <HeroCTA />

            <HeroStats />
          </div>

          {/* Right Image */}
          <HeroImage />
        </div>

        {/* Bottom Features */}
        <div className="mt-20">
          <HeroFeatures />
        </div>
      </div>
    </section>
  );
};

export default Hero;