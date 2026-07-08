import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Apple MacBook Pro M4",
    category: "Laptop",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600&auto=format&fit=crop&q=80",
    price: 1999,
    oldPrice: 2199,
    rating: 4.9,
    reviews: 284,
    discount: 10,
    isNew: true,
  },
  {
    id: 2,
    name: "iPhone 16 Pro Max",
    category: "Smartphone",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80",
    price: 1299,
    oldPrice: 1399,
    rating: 4.8,
    reviews: 521,
    discount: 8,
    isNew: true,
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
    price: 349,
    oldPrice: 399,
    rating: 4.9,
    reviews: 198,
    discount: 12,
    isNew: false,
  },
  {
    id: 4,
    name: "Apple Watch Ultra",
    category: "Smart Watch",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=80",
    price: 799,
    oldPrice: 899,
    rating: 4.8,
    reviews: 176,
    discount: 11,
    isNew: false,
  },
  {
    id: 5,
    name: "Nike Air Max",
    category: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
    price: 169,
    oldPrice: 199,
    rating: 4.7,
    reviews: 346,
    discount: 15,
    isNew: true,
  },
  {
    id: 6,
    name: "Gaming Chair",
    category: "Furniture",
    image:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=600&auto=format&fit=crop&q=80",
    price: 299,
    oldPrice: 349,
    rating: 4.8,
    reviews: 123,
    discount: 14,
    isNew: false,
  },
  {
    id: 7,
    name: "Canon EOS R8",
    category: "Camera",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80",
    price: 1499,
    oldPrice: 1699,
    rating: 4.9,
    reviews: 97,
    discount: 12,
    isNew: true,
  },
  {
    id: 8,
    name: "Samsung 4K Monitor",
    category: "Monitor",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80",
    price: 499,
    oldPrice: 599,
    rating: 4.8,
    reviews: 158,
    discount: 17,
    isNew: false,
  },
];

const ProductGrid = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;