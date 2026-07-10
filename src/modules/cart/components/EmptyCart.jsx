import { Link } from "react-router-dom";
import { FiShoppingCart, FiArrowRight } from "react-icons/fi";

const EmptyCart = ({
  title = "Your cart is empty",
  description = "Looks like you haven't added any products to your cart yet. Start shopping and discover great products.",
  buttonText = "Continue Shopping",
  buttonLink = "/products",
}) => {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-lg transition-all dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30">
          <FiShoppingCart className="h-12 w-12 text-primary-600" />
        </div>

        <h2 className="mt-8 text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-md text-gray-600 dark:text-gray-400">
          {description}
        </p>

        <Link
          to={buttonLink}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-primary-700 hover:shadow-lg"
        >
          {buttonText}
          <FiArrowRight className="text-lg" />
        </Link>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Fast Delivery
            </h4>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Get your order delivered quickly and safely.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Secure Payment
            </h4>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Trusted payment methods with secure checkout.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Easy Returns
            </h4>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Hassle-free returns for eligible products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmptyCart;