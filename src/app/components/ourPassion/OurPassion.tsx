import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./OurPassion.module.css";

const OurPassion = () => {
  const t = useTranslations("ourPassion");

  return (
    <section className={styles.passion}>
      <div className={styles.inner}>
        <div className={styles.passionCopy}>
          <p className={styles.eyebrow}>{t("eyebrow")}</p>
          <h2>{t("title")}</h2>
          <p>{t("description")}</p>
          <Link className={styles.textLink} href="/nuestra-historia">
            {t("link")} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div
          aria-label={t("imageLabel")}
          className={styles.passionImage}
          role="img"
        >
          <div className={styles.freshNote}>{t("freshNote")}</div>
        </div>
      </div>
    </section>
  );
};
export default OurPassion;
