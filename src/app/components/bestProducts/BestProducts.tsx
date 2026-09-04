import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { useTranslations } from "next-intl";
import styles from "./BestProducts.module.css";
import pagesImg from "../../../../public/pages.webp";
import cruasanImg from "../../../../public/crusan.webp";
import sacherImg from "../../../../public/sacher.webp";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

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
        <h2 className={playfairDisplay.className}>{t("title")}</h2>
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
                <h3 className={playfairDisplay.className}>{product.name}</h3>
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
