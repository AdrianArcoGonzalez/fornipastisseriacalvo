import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { useTranslations } from "next-intl";
import styles from "./BestProducts.module.css";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

const products = [
  {
    name: "Hogaza rustica",
    price: "4,50 EUR",
    tag: "Masa madre",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=700",
  },
  {
    name: "Croissant de mantequilla",
    price: "2,20 EUR",
    tag: "Especialidad",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=700",
  },
  {
    name: "Tarta de queso tostada",
    price: "24,00 EUR",
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=700",
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
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <span>{product.tag}</span>
            </div>
            <div className={styles.copy}>
              <div>
                <h3 className={playfairDisplay.className}>{product.name}</h3>
                <strong>{product.price}</strong>
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
