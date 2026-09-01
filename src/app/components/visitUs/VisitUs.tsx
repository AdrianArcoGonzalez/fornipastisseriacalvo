import { Clock, MapPin, Phone } from "lucide-react";
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
              <MapPin
                aria-hidden="true"
                className={styles.contactIcon}
                size={16}
              />
              <span>{t("address")}</span>
            </div>
            <div className={styles.detail}>
              <Phone
                aria-hidden="true"
                className={styles.contactIcon}
                size={16}
              />
              <a href="tel:+34935621217">{t("phone")}</a>
            </div>
            <div className={styles.detail}>
              <Clock
                aria-hidden="true"
                className={styles.contactIcon}
                size={16}
              />
              <span>
                {t("mondayFridayHours")}
                <br />
                {t("saturdayHours")}
                <br />
                {t("sundayHours")}
              </span>
            </div>
          </div>
        </div>
        <div aria-label={t("imageLabel")} className={styles.image} role="img" />
      </div>
    </section>
  );
}
