import Navigation from "../components/navigation/navigation";
import ProductsCta from "./components/productsCta/ProductsCta";
import Menu from "./components/productsType/menu/Menu";
import ProductsType from "./components/productsType/ProductsType";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";

export default function Productos() {
  const t = useTranslations("productsPage");

  return (
    <Navigation active="productos">
      <div className={styles.container}>
        <section className={styles.hero}>
          <span className={styles.eyebrow}>{t("eyebrow")}</span>
          <h1>{t("title")}</h1>
          <p>{t("description")}</p>
        </section>
        <ProductsType />
        <Menu />

        <ProductsCta />
      </div>
    </Navigation>
  );
}
