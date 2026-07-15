// import { ArrowUpRight, Play } from "lucide-react";

// const HeroImage = () => {
//   return (
//     <div className="relative">
//       {/* Background Decoration - mobile pe chote */}
//       <div className="absolute -left-10 top-10 h-24 w-24 md:h-32 md:w-32 rounded-full bg-blue-500/20 blur-3xl" />
//       <div className="absolute -right-8 bottom-10 h-32 w-32 md:h-40 md:w-40 rounded-full bg-purple-500/20 blur-3xl" />

//       {/* Main Image Card */}
//       <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-3 sm:p-5 shadow-2xl">
//         <img
//           src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=900&auto=format&fit=crop&q=80"
//           alt="Hero Banner"
//           className="h-[300px] sm:h-[400px] lg:h-[550px] w-full rounded-xl sm:rounded-2xl object-cover"
//         />

//         {/* Floating Offer Card - Mobile pe hide kar do ya chota karo */}
//         <div className="absolute left-3 top-3 sm:left-6 sm:top-6 rounded-xl sm:rounded-2xl bg-white/10 p-3 sm:p-5 shadow-xl backdrop-blur-md border border-white/10 hidden sm:block">
//           <p className="text-xs sm:text-sm text-gray-300">
//             Exclusive Offer
//           </p>
//           <h3 className="mt-1 text-2xl sm:text-3xl font-bold bg-gradient-to-red from-blue-400 to-purple-400 bg-clip-text text-transparent">
//             50% OFF
//           </h3>
//           <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-400">
//             Premium Collection
//           </p>
//         </div>

//         {/* Play Button */}
//         <button
//           className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 flex items-center gap-2 sm:gap-3 rounded-full bg-white/10 backdrop-blur-md px-3 py-2 sm:px-5 sm:py-3 shadow-lg border border-white/10 transition hover:scale-105 hover:bg-white/20"
//         >
//           <span className="flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white">
//             <Play size={14} className="sm:w-5 sm:h-5" fill="currentColor" />
//           </span>
//           <span className="font-semibold text-white text-sm sm:text-base hidden sm:inline">
//             Watch Video
//           </span>
//         </button>

//         {/* Floating Product Card - Mobile pe full width neeche */}
//         <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 w-[calc(100%-1.5rem)] sm:w-64 rounded-xl sm:rounded-2xl bg-white/10 p-3 sm:p-4 shadow-xl backdrop-blur-md border border-white/10">
//           <div className="flex items-center gap-3 sm:gap-4">
//             <img
//               src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&auto=format&fit=crop&q=80"
//               alt="Featured Product"
//               className="h-14 w-14 sm:h-20 sm:w-20 rounded-lg sm:rounded-xl object-cover"
//             />
//             <div className="flex-1 min-w-0">
//               <h4 className="font-semibold text-white text-sm sm:text-base truncate">
//                 Running Shoes
//               </h4>
//               <p className="mt-0.5 text-xs sm:text-sm text-gray-400">
//                 Nike Collection
//               </p>
//               <div className="mt-1.5 sm:mt-2 flex items-center justify-between">
//                 <span className="font-bold text-blue-300 text-sm sm:text-base">
//                   $129
//                 </span>
//                 <button className="rounded-full bg-gradient-to-brown from-blue-500 to-purple-600 p-1.5 sm:p-2 text-white transition hover:scale-110">
//                   <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroImage;
import { ArrowUpRight, Play } from "lucide-react";

const HeroImage = () => {
  return (
    <div className="relative w-full max-w-md lg:max-w-lg mx-auto">
      {/* Background Decoration - chote glow */}
      <div className="absolute -left-6 top-6 -z-10 h-20 w-20 md:h-24 md:w-24 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-4 bottom-6 -z-10 h-24 w-24 md:h-32 md:w-32 rounded-full bg-purple-500/20 blur-3xl" />

      {/* Main Image Card */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-2 sm:p-3 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
        <img
          src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=900&auto=format&fit=crop&q=80"
          alt="Hero Banner"
          className="h-[240px] sm:h-[320px] lg:h-[420px] w-full rounded-xl object-cover"
        />

        {/* Floating Offer Card - Mobile pe hidden */}
        <div className="absolute left-3 top-3 hidden sm:flex flex-col gap-0.5 rounded-lg border-white/10 bg-white/5 backdrop-blur-md p-2.5 shadow-xl">
          <p className="text- font-medium text-gray-400">Exclusive Offer</p>
          <p className="text-xs font-semibold text-white">Premium Collection</p>
        </div>

        {/* Play Button */}
        <button className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-3 py-2 text-xs font-medium text-white shadow-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 sm:bottom-4 sm:left-4 sm:gap-2.5 sm:px-4 sm:py-2.5 sm:text-sm">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30 sm:h-9 sm:w-9">
            <Play size={14} className="fill-white sm:h-4 sm:w-4" />
          </div>
          <span className="hidden sm:inline">Watch Video</span>
        </button>

        {/* Floating Product Card */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-2.5 shadow-xl transition-all duration-300 hover:bg-white/10 sm:bottom-4 sm:right-4 sm:gap-3 sm:p-3">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100"
            alt="Product"
            className="h-10 w-10 flex-shrink-0 rounded-lg object-cover sm:h-12 sm:w-12"
          />
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-white">Running Shoes</p>
            <p className="text- text-gray-400">Nike Collection</p>
            <p className="text-sm font-bold text-blue-400">$129</p>
          </div>
          <ArrowUpRight size={14} className="flex-shrink-0 text-gray-400 transition group-hover:text-white sm:h-4 sm:w-4" />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;