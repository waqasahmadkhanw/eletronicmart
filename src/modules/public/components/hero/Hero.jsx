
// import HeroContent from "./HeroContent";
// import HeroImage from "./HeroImage";
// import HeroSearch from "./HeroSearch";
// import HeroStats from "./HeroStats";
// import HeroFeatures from "./HeroFeatures";
// import HeroCTA from "./HeroCTA";
// import bgImage from "../../../../assets/image.png";

// const Hero = () => {
//   return (
//     <section className="relative overflow-hidden text-white">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/95" />

//       {/* Glow Blobs */}
//       <div className="absolute inset-0 pointer-events-none -z-10">
//         <div className="absolute left-[8%] top-[15%] h-56 w-56 md:h-80 md:w-80 rounded-full bg-blue-500/15 blur-3xl" />
//         <div className="absolute bottom-[12%] right-[5%] h-72 w-72 md:h-[28rem] md:w-[28rem] rounded-full bg-purple-500/15 blur-3xl" />
//       </div>

//       {/* Container - YAHAN PADDING NAHI */}
//       <div className="relative mx-auto max-w-7xl">
//         <div className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
//           <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-24">

//             {/* Left Content */}
//             <div className="flex flex-col order-1">
//               <HeroContent />

//               <div className="mt-8">
//                 <HeroSearch />
//               </div>

//               <div className="mt-6">
//                 <HeroCTA />
//               </div>

//               <div className="mt-10">
//                 <HeroStats />
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="order-2 flex items-center justify-center lg:pt-8">
//               <HeroImage />
//             </div>
//           </div>

//           {/* Bottom Features with Separator */}
//           <div className="mt-20 px-4 sm:px-6 lg:px-8 pt-16 border-t border-white/10">
//             <HeroFeatures />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroSearch from "./HeroSearch";
import HeroStats from "./HeroStats";
import HeroFeatures from "./HeroFeatures";
import HeroCTA from "./HeroCTA";
import bgImage from "../../../../assets/image.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-white"> {/* yahan text-white force */}
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Dark Overlay - thora dark kiya */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95" />

      {/* Glow Blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute left-[8%] top-[15%] h-56 w-56 md:h-80 md:w-80 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-[12%] right-[5%] h-72 w-72 md:h-[28rem] md:w-[28rem] rounded-full bg-purple-500/15 blur-3xl" />
      </div>

      {/* Container */}
      <div className="relative mx-auto w-full">
        <div className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-24">

            {/* Left Content - sab children ko white text milega */}
            <div className="flex flex-col order-1 text-white">
              <HeroContent />

              <div className="mt-8">
                <HeroSearch />
              </div>

              <div className="mt-6">
                <HeroCTA />
              </div>

              <div className="mt-10">
                <HeroStats />
              </div>
            </div>

            {/* Right Image */}
            <div className="order-2 flex items-center justify-center lg:pt-8">
              <HeroImage />
            </div>
          </div>

          {/* Bottom Features */}
          <div className="mt-20 px-4 sm:px-6 lg:px-8 pt-16 border-t border-white/10">
            <HeroFeatures />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;