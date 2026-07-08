import DealBanner from "./DealBanner";
import DealCard from "./DealCard";

const deals = [
  {
    id: 1,
    name: "Apple MacBook Pro M4",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600&auto=format&fit=crop&q=80",
    price: 1899,
    oldPrice: 2199,
    endDate: "2026-12-31T23:59:59",
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
    price: 329,
    oldPrice: 399,
    endDate: "2026-12-31T23:59:59",
  },
];

const Deals = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12">
          <DealBanner />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {deals.map((deal) => (
            <DealCard
              key={deal.id}
              deal={deal}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;