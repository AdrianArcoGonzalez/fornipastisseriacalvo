import { useTranslations } from "next-intl";
import styles from "./Origin.module.css";

const Origin = () => {
  const t = useTranslations("origin");
  return (
    <section className={styles.story}>
      <div className={styles.photoWrap}>
        <div
          className={styles.image}
          role="img"
          aria-label={t("photoCaption")}
        />
        <div className={styles.photoCaption}>{t("photoCaption")}</div>
      </div>

      <div className={styles.copy}>
        <h2>{t("title")}</h2>
        <p>{t("firstDescription")}</p>
        <p>{t("secondDescription")}</p>

        <p>{t("thirdDescription")}</p>
      </div>
    </section>
  );
};

export default Origin;
