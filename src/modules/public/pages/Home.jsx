// Home.jsx

import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import NewArrivals from "../components/NewArrivals";
import PromotionalBanner from "../components/PromotionalBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <NewArrivals />
      <PromotionalBanner />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;