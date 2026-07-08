import RatingStars from "./RatingStars";
import { Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  const {
    name,
    role,
    image,
    rating,
    review,
  } = testimonial;

  return (
    <article className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl lg:p-12">
      {/* Background Quote */}
      <Quote
        size={140}
        className="absolute right-8 top-8 text-blue-50"
      />

      <div className="relative z-10">
        {/* Rating */}
        <RatingStars rating={rating} />

        {/* Review */}
        <p className="mt-8 text-lg leading-8 text-gray-600 lg:text-xl">
          "{review}"
        </p>

        {/* User */}
        <div className="mt-10 flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="h-16 w-16 rounded-full border-4 border-blue-100 object-cover"
          />

          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900">
              {name}
            </h3>

            <p className="text-sm text-gray-500">
              {role}
            </p>
          </div>

          {/* Verified Badge */}
          <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-600">
            Verified
          </div>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;