import { BookOpen } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import styles from "./Menu.module.css";
import products from "./data";
const menuSections = ["sourdough", "pastry", "finePastry", "temporal"] as const;

const Menu = () => {
  const locale = useLocale();
  const t = useTranslations("productsMenu");
  const productLocale = locale === "ca" || locale === "en" ? locale : "es";

  return (
    <section className={styles.menu} aria-label={t("ariaLabel")}>
      <header className={styles.heading}>
        <BookOpen size={17} strokeWidth={1.8} aria-hidden="true" />
        <h2>{t("title")}</h2>
        <p>{t("description")}</p>
      </header>
      <div className={styles.sheet}>
        {menuSections.map((section) => (
          <section className={styles.category} key={section}>
            <h3>{t(`sections.${section}.title`)}</h3>
            <ul>
              {products[section].map((product, productIndex) => (
                <li key={`${product[productLocale]}-${productIndex}`}>
                  <span>{product[productLocale]}</span>
                  {product.tag && <small>{product.tag[productLocale]}</small>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Menu;
