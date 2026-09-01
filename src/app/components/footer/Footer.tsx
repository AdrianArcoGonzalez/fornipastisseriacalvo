import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./Footer.module.css";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link aria-label="Forn i Pastisseria Calvo" href="/">
            <Image
              alt="Forn i Pastisseria Calvo"
              className={styles.logo}
              height={64}
              src="/logo.png"
              width={150}
            />
          </Link>
          <p>{t("copyright")}</p>
        </div>
        <div className={styles.column}>
          <h2>{t("information")}</h2>
          <p>{t("hours")}</p>
          <p>{t("address")}</p>
        </div>
        <div className={styles.column}>
          <h2>{t("follow")}</h2>
          <a href="https://www.instagram.com/">Instagram</a>
          <a href="https://www.facebook.com/">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
