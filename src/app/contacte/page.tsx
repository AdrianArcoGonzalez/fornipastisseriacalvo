import { Camera, Clock3, MapIcon, MapPin, Phone } from "lucide-react";
import Navigation from "../components/navigation/navigation";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Contacto() {
  const t = useTranslations("contact");
  return (
    <Navigation active="contacte">
      <section className={styles.page}>
        <header className={styles.header}>
          <h1>{t("heading")}</h1>
          <p>{t("description")}</p>
        </header>

        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            <article className={styles.infoCard}>
              <div className={styles.cardTitle}>
                <MapIcon size={16} />
                <span>{t("visitUs")}</span>
              </div>

              <div className={styles.cardContent}>
                <p className={styles.addressLine}>
                  <MapPin size={14} />
                  <span>Forn i Pastisseria Calvo</span>
                </p>
                <p>Avinguda Catalunya 96</p>
                <p>Parets del Vallès, 08150, Barcelona</p>
              </div>

              <div className={styles.contactRow}>
                <Phone size={15} />
                <span>935 621 217</span>
              </div>

              <div className={styles.contactRow}>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className={styles.instagramLink}
                  href="https://www.instagram.com/fornipastisseriacalvo/"
                  title="Instagram"
                >
                  <Camera aria-hidden="true" size={18} />
                  <span>Instagram</span>
                </Link>
              </div>
            </article>

            <article className={styles.infoCard}>
              <div className={styles.cardTitle}>
                <Clock3 size={16} />
                <span>{t("hours")}</span>
              </div>

              <div className={styles.scheduleList}>
                <div className={styles.scheduleRow}>
                  <span>{t("mondayToFriday")}</span>
                  <span>6:00 - 14:30, 16:30 - 20:30</span>
                </div>
                <div className={styles.scheduleRow}>
                  <span>{t("weekendHours")}</span>
                  <span>7:00 - 14:30</span>
                </div>
              </div>
            </article>
          </div>
          <div className={styles.mapWrapper}>
            <iframe
              className={styles.mapFrame}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.356919988049!2d2.2257580765726006!3d41.56151928517531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b8b033bcf7e9%3A0xda76743789558ec4!2sPanader%C3%ADa%20Pasteler%C3%ADa%20Calvo!5e0!3m2!1ses!2ses!4v1788342329735!5m2!1ses!2ses"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </Navigation>
  );
}
