import { BookOpen } from "lucide-react";
import { useTranslations } from "next-intl";
import styles from "./Menu.module.css";

const menuSections = ["sourdough", "pastry", "finePastry"] as const;

const Menu = () => {
  const t = useTranslations("productsMenu");

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
              {[0, 1, 2].map((itemIndex) => (
                <li key={itemIndex}>
                  <span>{t(`sections.${section}.items.${itemIndex}`)}</span>
                  {itemIndex === 2 && <small>{t("special")}</small>}
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
