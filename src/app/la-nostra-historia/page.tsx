import Navigation from "../components/navigation/navigation";
import Origin from "./components/origin/Origin";
import CardsSection from "./components/cardsSection/CardsSection";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";

export default function NuestraHistoria() {
  const t = useTranslations("history");
  return (
    <Navigation active="la-nostra-historia">
      <section className={styles.hero}>
        <span className={styles.eyebrow}>{t("preTitle")}</span>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </section>

      <Origin />
      <CardsSection />
    </Navigation>
  );
}
