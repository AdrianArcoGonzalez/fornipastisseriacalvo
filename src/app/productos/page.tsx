import Navigation from "../components/navigation/navigation";
import ProductsCta from "./components/productsCta/ProductsCta";
import Menu from "./components/productsType/menu/Menu";
import ProductsType from "./components/productsType/ProductsType";
import styles from "./page.module.css";

export default function Productos() {
  return (
    <Navigation active="productos">
      <div className={styles.container}>
        <section className={styles.hero}>
          <span className={styles.eyebrow}>Nuestro obrador</span>
          <h1>Hecho para disfrutar.</h1>
          <p>
            Una selección de elaboraciones que cambia con las estaciones, pero
            conserva siempre nuestro modo de hacer.
          </p>
        </section>
        <ProductsType />
        <Menu />

        <ProductsCta />
      </div>
    </Navigation>
  );
}
