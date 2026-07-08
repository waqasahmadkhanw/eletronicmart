
import { FeaturedProducts, Header, Hero, Navbar, Newsletter, Testimonials } from "../components";
import { Brands } from "../components/brands";
import { Categories } from "../components/categories";
import { Deals } from "../components/deals";
const Home = () => {
  return (
    <>
    <Header/>
    <Navbar/>
      <Hero />

      <Categories />

      <FeaturedProducts />

      <Deals />

      <Brands />

      <Testimonials />

      <Newsletter />
    </>
  );
};

export default Home;