import Navigation from "./components/navigation/navigation";
import BestProducts from "./components/bestProducts/BestProducts";
import HeroSection from "./components/heroSection/heroSection";
import OurPassion from "./components/ourPassion/OurPassion";
import VisitUs from "./components/visitUs/VisitUs";

export default function Home() {
  return (
    <Navigation active="inicio">
      <HeroSection />

      <OurPassion />

      <BestProducts />

      <VisitUs />
    </Navigation>
  );
}
