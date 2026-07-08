import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialNavigation from "./TestimonialNavigation";

const testimonials = [
  {
    id: 1,
    name: "John Anderson",
    role: "Verified Buyer",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "Outstanding shopping experience. The delivery was incredibly fast, the product quality exceeded my expectations, and customer support was excellent.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Premium Member",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "Beautiful website, premium products, and secure checkout. Everything feels polished and professional. Highly recommended.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Business Customer",
    image:
      "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 4,
    review:
      "Excellent prices, authentic products, and smooth ordering process. I'll definitely continue shopping here.",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative">
      <TestimonialCard
        testimonial={testimonials[current]}
      />

      <div className="mt-8">
        <TestimonialNavigation
          current={current}
          total={testimonials.length}
          onNext={nextSlide}
          onPrevious={prevSlide}
        />
      </div>
    </div>
  );
};

export default TestimonialSlider;