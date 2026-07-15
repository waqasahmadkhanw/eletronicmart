const CategoriesBanner = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="rounded-3xl border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-8 backdrop-blur-xl md:p-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="text-2xl font-bold text-white">New Arrivals Every Week</h3>
            <p className="mt-2 text-gray-400">Check back often for the latest products in every category</p>
          </div>
          <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold text-white transition hover:shadow-lg hover:shadow-blue-500/30">
            Explore New
          </button>
        </div>
      </div>
    </div>
  );
};
export default CategoriesBanner;