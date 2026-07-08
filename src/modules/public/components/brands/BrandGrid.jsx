import BrandCard from "./BrandCard";

const brands = [
  {
    id: 1,
    name: "Apple",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    products: 245,
  },
  {
    id: 2,
    name: "Samsung",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    products: 198,
  },
  {
    id: 3,
    name: "Sony",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
    products: 156,
  },
  {
    id: 4,
    name: "Nike",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    products: 182,
  },
  {
    id: 5,
    name: "Adidas",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    products: 164,
  },
  {
    id: 6,
    name: "Dell",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
    products: 118,
  },
  {
    id: 7,
    name: "HP",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
    products: 104,
  },
  {
    id: 8,
    name: "Canon",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/Canon_wordmark.svg",
    products: 86,
  },
];

const BrandGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {brands.map((brand) => (
        <BrandCard
          key={brand.id}
          brand={brand}
        />
      ))}
    </div>
  );
};

export default BrandGrid;