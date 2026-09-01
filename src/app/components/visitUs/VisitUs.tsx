import { useTranslations } from "next-intl";
import styles from "./VisitUs.module.css";

export default function VisitUs() {
  const t = useTranslations("visitUs");

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.copy}>
          <h2>{t("title")}</h2>
          <p>{t("description")}</p>
          <div className={styles.details}>
            <div className={styles.detail}>
              <span aria-hidden="true" className={styles.pin} />
              <span>{t("address")}</span>
            </div>
            <div className={styles.detail}>
              <span aria-hidden="true" className={styles.clock} />
              <span>
                {t("weekdayHours")}
                <br />
                {t("saturdayHours")}
              </span>
            </div>
          </div>
        </div>
        <div aria-label={t("imageLabel")} className={styles.image} role="img" />
      </div>
    </section>
  );
}
