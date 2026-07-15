// import { useState } from "react";
// import { Search, SlidersHorizontal } from "lucide-react";

// const categories = [
//   "All Categories",
//   "Electronics",
//   "Fashion",
//   "Furniture",
//   "Beauty",
//   "Sports",
// ];

// const HeroSearch = () => {
//   const [keyword, setKeyword] = useState("");
//   const [category, setCategory] = useState(categories[0]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ keyword, category });
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-3 sm:p-4 shadow-2xl"
//     >
//       <div className="flex flex-col gap-3 lg:flex-row lg:items-center">

//         {/* Search + Category + Filter + Button wrapper */}
//         <div className="flex flex-1 flex-col gap-3 sm:flex-row">

//           {/* Search */}
//           <div className="flex flex-1 items-center rounded-lg sm:rounded-xl border-white/10 bg-white/5 px-3 sm:px-4 focus-within:border-blue-400/50 focus-within:bg-white/10 transition">
//             <Search size={18} className="text-gray-400 flex-shrink-0" />
//             <input
//               type="text"
//               placeholder="Search for products..."
//               value={keyword}
//               onChange={(e) => setKeyword(e.target.value)}
//               className="h-12 sm:h-14 w-full bg-transparent px-3 outline-none text-white placeholder:text-gray-400 text-sm sm:text-base"
//             />
//           </div>

//           {/* Category */}
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="h-12 sm:h-14 rounded-lg sm:rounded-xl border-white/10 bg-white/5 px-3 sm:px-4 outline-none text-white focus:border-blue-400/50 focus:bg-white/10 transition text-sm sm:text-base appearance-none"
//           >
//             {categories.map((item) => (
//               <option key={item} className="bg-slate-900 text-white">
//                 {item}
//               </option>
//             ))}
//           </select>

//           {/* Filter */}
//           <button
//             type="button"
//             className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg sm:rounded-xl border-white/10 bg-white/5 transition hover:bg-white/10 hover:border-white/20 sm:hidden lg:flex"
//           >
//             <SlidersHorizontal size={18} className="text-gray-300" />
//           </button>
//         </div>

//         {/* Search Button - Full width on mobile */}
//         <button
//           type="submit"
//           className="h-12 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 text-sm sm:text-base"
//         >
//           Search
//         </button>
//       </div>
//     </form>
//   );
// };

// export default HeroSearch;
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

const categories = [
  "All Categories",
  "Electronics",
  "Fashion",
  "Furniture",
  "Beauty",
  "Sports",
];

const HeroSearch = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ keyword, category });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-5 shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-3">

        {/* Search + Category + Filter wrapper */}
        <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:gap-3">

          {/* Search */}
          <div className="flex flex-1 items-center rounded-xl border-white/10 bg-white/5 px-4 focus-within:border-blue-400/50 focus-within:bg-white/10 transition-all duration-200">
            <Search size={18} className="text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search for products..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="h-12 sm:h-14 w-full bg-transparent px-3 outline-none text-white placeholder:text-gray-400 text-sm sm:text-base"
            />
          </div>

          {/* Category */}
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-12 sm:h-14 w-full sm:w-[200px] appearance-none rounded-xl border border-white/10 bg-white/5 px-4 pr-10 outline-none text-white focus:border-blue-400/50 focus:bg-white/10 transition-all duration-200 text-sm sm:text-base"
            >
              {categories.map((item) => (
                <option key={item} className="bg-slate-900 text-white">
                  {item}
                </option>
              ))}
            </select>
            <SlidersHorizontal size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none sm:hidden" />
          </div>

          {/* Filter Button - only desktop */}
          <button
            type="button"
            className="hidden lg:flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-200 hover:bg-white/10 hover:border-white/20"
          >
            <SlidersHorizontal size={18} className="text-gray-300" />
          </button>
        </div>

        {/* Search Button - Gradient */}
        <button
          type="submit"
          className="h-12 sm:h-14 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 text-sm sm:text-base flex-shrink-0"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default HeroSearch;