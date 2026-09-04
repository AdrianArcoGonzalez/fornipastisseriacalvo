import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { useTranslations } from "next-intl";
import styles from "./heroSection.module.css";
import ButtonLink from "../buttonBase/ButtonLink";
import heroImg from "../../../../public/crusanchoco.webp";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className={styles.hero}>
      <Image
        alt="Cruasan image"
        className={styles.bgImage}
        fetchPriority="high"
        fill
        priority
        sizes="100vw"
        src={heroImg}
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.kicker}>{t("kicker")}</p>
        <h1 className={playfairDisplay.className}>{t("title")}</h1>
        <div className={styles.actions}>
          <ButtonLink
            baseColor="primary"
            href="/productos"
            text={t("products")}
          />
          <ButtonLink
            baseColor="secondary"
            href="/nuestra-historia"
            text={t("about")}
          />
        </div>
      </div>
    </section>
  );
}
