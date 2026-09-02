import styles from "./ProductsType.module.css";
import Menu from "./menu/Menu";

const ProductsType = () => {
  return (
    <>
      <section className={styles.grid} aria-label="Tipos de productos">
        <article className={`${styles.product} ${styles.bakery}`}>
          <div className={styles.copy}>
            <span className={styles.tag}>Artesanal</span>
            <h2>Panadería</h2>
            <p>Masa madre y harinas molidas a la piedra.</p>
          </div>
        </article>
        <article className={`${styles.product} ${styles.pastry}`}>
          <div className={styles.copy}>
            <span className={`${styles.tag} ${styles.tagRed}`}>
              Recién horneado
            </span>
            <h2>Bollería</h2>
            <p>Hojaldres de mantequilla pura.</p>
          </div>
        </article>
        <article className={`${styles.product} ${styles.finePastry}`}>
          <div className={styles.copy}>
            <h2>Pastelería Fina</h2>
            <p>
              Tradición reinterpretada. Tartas de celebración, semifríos y
              clásicos de nuestra repostería para momentos especiales.
            </p>
            <span className={styles.link}>
              Ver catálogo completo <span aria-hidden="true">→</span>
            </span>
          </div>
        </article>
      </section>
    </>
  );
};

export default ProductsType;
