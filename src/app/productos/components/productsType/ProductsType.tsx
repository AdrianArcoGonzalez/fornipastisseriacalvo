import styles from "./ProductsType.module.css";
import { useTranslations } from "next-intl";

const ProductsType = () => {
  const t = useTranslations("productsType");

  return (
    <>
      <section className={styles.grid} aria-label={t("ariaLabel")}>
        <article className={`${styles.product} ${styles.bakery}`}>
          <div className={styles.copy}>
            <span className={styles.tag}>{t("bakery.tag")}</span>
            <h2>{t("bakery.title")}</h2>
            <p>{t("bakery.description")}</p>
          </div>
        </article>
        <article className={`${styles.product} ${styles.pastry}`}>
          <div className={styles.copy}>
            <span className={`${styles.tag} ${styles.tagRed}`}>
              {t("pastry.tag")}
            </span>
            <h2>{t("pastry.title")}</h2>
            <p>{t("pastry.description")}</p>
          </div>
        </article>
        <article className={`${styles.product} ${styles.finePastry}`}>
          <div className={styles.copy}>
            <h2>{t("finePastry.title")}</h2>
            <p>{t("finePastry.description")}</p>
          </div>
        </article>
      </section>
    </>
  );
};

export default ProductsType;
