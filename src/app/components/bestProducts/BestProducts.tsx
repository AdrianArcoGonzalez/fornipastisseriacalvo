import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import styles from "./BestProducts.module.css";
import pagesImg from "../../../../public/pages-forn-pastisseria-calvo.webp";
import cruasanImg from "../../../../public/crusan-artesanal-forn-calvo-parets.webp";
import sacherImg from "../../../../public/sacher-forn-pastisseria-calvo.webp";
import type { Locale } from "../../../i18n/locales";

const products = [
  {
    name: "Pa de pagès",
    tag: "Tradicional",
    image: pagesImg,
    description: {
      es: "Pan de payés tradicional",
      en: "Traditional country bread",
      ca: "Pa de pagès tradicional",
    },
  },
  {
    name: "Croissants ",
    tag: "Especialitat",
    image: cruasanImg,
    description: {
      es: "Especialidad de croissants artesanales",
      en: "Specialty of artisanal croissants",
      ca: "Especialitat de croissants artesanals",
    },
  },
  {
    name: "Sacher",
    tag: "Popular",
    image: sacherImg,
    description: {
      es: "Popular pastel de chocolate con cobertura de chocolate",
      en: "Popular chocolate cake with chocolate coating",
      ca: "Popular pastís de xocolata amb cobertura de xocolata",
    },
  },
];

export default function BestProducts() {
  const t = useTranslations("bestProducts");
  const locale = useLocale() as Locale;

  return (
    <section className={styles.featured}>
      <div className={styles.heading}>
        <h2>{t("title")}</h2>
        <p>{t("subtitle")}</p>
      </div>
      <div className={styles.grid}>
        {products.map((product) => (
          <article className={styles.card} key={product.name}>
            <div
              aria-label={product.name}
              className={styles.image}
              role="img"
              style={{ backgroundImage: `url(${product.image.src})` }}
            >
              <span>{product.tag}</span>
            </div>
            <div className={styles.copy}>
              <div>
                <h3>{product.name}</h3>
              </div>
              <p>{product.description[locale]}</p>
            </div>
          </article>
        ))}
      </div>
      <Link
        className={`${styles.button} ${styles.secondary}`}
        href="/productes"
      >
        {t("viewMenu")}
      </Link>
    </section>
  );
}
