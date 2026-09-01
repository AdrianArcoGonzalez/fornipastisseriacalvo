import Navigation from "../components/navigation/navigation";
import styles from "./page.module.css";

export default function Productos() {
  return (
    <Navigation active="productos">
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Nuestro obrador</span>
        <h1>Hecho para disfrutar.</h1>
        <p>
          Una selección de elaboraciones que cambia con las estaciones, pero
          conserva siempre nuestro modo de hacer.
        </p>
      </section>
      <section className={styles.grid}>
        <article className={styles.product}>
          <div className={styles.photo} />
          <div className={styles.copy}>
            <h2>Pan artesano</h2>
            <p>
              Masa madre, fermentaciones lentas y harinas seleccionadas cada
              día.
            </p>
          </div>
        </article>
        <article className={styles.product}>
          <div className={styles.photo} />
          <div className={styles.copy}>
            <h2>Bolleria</h2>
            <p>
              Piezas doradas, mantequilla de verdad y el punto justo de dulzor.
            </p>
          </div>
        </article>
        <article className={styles.product}>
          <div className={styles.photo} />
          <div className={styles.copy}>
            <h2>Pasteleria</h2>
            <p>
              Clásicos de siempre y creaciones para celebrar momentos
              especiales.
            </p>
          </div>
        </article>
      </section>
    </Navigation>
  );
}
