import Navigation from "./components/navigation/navigation";
import BestProducts from "./components/bestProducts/BestProducts";
import HeroSection from "./components/heroSection/heroSection";
import OurPassion from "./components/ourPassion/OurPassion";
import VisitUs from "./components/visitUs/VisitUs";

export default function Home() {
  return (
    <Navigation active="inicio">
      <h1 className="sr-only">
        Forn de pa i pastisseria artesanal a Parets del Vallès
      </h1>
      <HeroSection />

      <OurPassion />

      <BestProducts />

      <VisitUs />
    </Navigation>
  );
}
