import { Phone } from "lucide-react";
import Link from "next/link";
import styles from "./ProductsCta.module.css";

const ProductsCta = () => {
  return (
    <section className={styles.cta} aria-labelledby="products-cta-title">
      <h2 id="products-cta-title">¿Buscas algo especial?</h2>
      <p>
        Preparamos tartas por encargo, caterings para eventos pequeños y panes
        especiales bajo pedido. Habla directamente con nuestro obrador.
      </p>
      <div className={styles.actions}>
        <Link
          className={`${styles.button} ${styles.primary}`}
          href="tel:+34935621217"
        >
          <Phone size={13} aria-hidden="true" />
          Llamar al obrador
        </Link>
        <Link
          className={`${styles.button} ${styles.secondary}`}
          href="/contacto"
        >
          Ver catálogo de eventos
        </Link>
      </div>
    </section>
  );
};

export default ProductsCta;
