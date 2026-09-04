import { useTranslations } from "next-intl";
import { Clock3, HandHeart, Leaf } from "lucide-react";
import styles from "./CardsSection.module.css";

const CardsSection = () => {
  const t = useTranslations("cardsSection");

  const values = [
    {
      icon: Leaf,
      title: t("items.natural.title"),
      text: t("items.natural.text"),
    },
    {
      icon: Clock3,
      title: t("items.slow.title"),
      text: t("items.slow.text"),
    },
    {
      icon: HandHeart,
      title: t("items.family.title"),
      text: t("items.family.text"),
    },
  ];

  return (
    <section className={styles.valuesSection}>
      <div className={styles.valuesHeader}>
        <h2>{t("title")}</h2>
      </div>

      <div className={styles.valuesGrid}>
        {values.map(({ icon: Icon, title, text }) => (
          <article key={title} className={styles.valueCard}>
            <div className={styles.iconCircle} aria-hidden="true">
              <Icon size={30} strokeWidth={1.8} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
export default CardsSection;
