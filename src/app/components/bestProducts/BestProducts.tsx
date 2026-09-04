import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./BestProducts.module.css";
import pagesImg from "../../../../public/pages-forn-pastisseria-calvo.webp";
import cruasanImg from "../../../../public/crusan-artesanal-forn-calvo-parets.webp";
import sacherImg from "../../../../public/sacher-forn-pastisseria-calvo.webp";

const products = [
  {
    name: "Pa de pagès",
    tag: "Tradicional",
    image: pagesImg,
  },
  {
    name: "Croissants ",
    tag: "Especialitat",
    image: cruasanImg,
  },
  {
    name: "Sacher",
    tag: "Popular",
    image: sacherImg,
  },
];

export default function BestProducts() {
  const t = useTranslations("bestProducts");

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
              <p>{t("description")}</p>
            </div>
          </article>
        ))}
      </div>
      <Link
        className={`${styles.button} ${styles.secondary}`}
        href="/productos"
      >
        {t("viewMenu")}
      </Link>
    </section>
  );
}
