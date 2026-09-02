import { Phone } from "lucide-react";
import Link from "next/link";
import styles from "./ProductsCta.module.css";
import { useTranslations } from "next-intl";

const ProductsCta = () => {
  const t = useTranslations("productsCTA");
  return (
    <section className={styles.cta} aria-labelledby="products-cta-title">
      <h2 id="products-cta-title">{t("title")}</h2>
      <p>{t("description")}</p>
      <div className={styles.actions}>
        <Link
          className={`${styles.button} ${styles.primary}`}
          href="tel:+34935621217"
        >
          <Phone size={13} aria-hidden="true" />
          {t("call")}
        </Link>
        <Link
          className={`${styles.button} ${styles.secondary}`}
          href="/contacto"
        >
          {t("events")}
        </Link>
      </div>
    </section>
  );
};

export default ProductsCta;
