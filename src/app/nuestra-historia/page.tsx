import Navigation from "../components/navigation/navigation";
import styles from "./page.module.css";

export default function NuestraHistoria() {
  return (
    <Navigation active="historia">
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Nuestra historia</span>
        <h1>Un horno, muchas memorias.</h1>
        <p>
          Forn i pastisseria Calvo es un obrador de barrio construido alrededor
          del placer de compartir la mesa.
        </p>
      </section>
      <section className={styles.story}>
        <div
          className={styles.image}
          role="img"
          aria-label="Pan recien elaborado"
        />
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Tradicion viva</span>
          <h2>El mismo cuidado desde el primer día.</h2>
          <p>
            Comenzamos con un pequeño horno y una idea clara: ofrecer al barrio
            pan de calidad, recién hecho y con alma. Generación tras generación,
            seguimos llegando antes que el amanecer para mantener esa promesa.
          </p>
        </div>
      </section>
    </Navigation>
  );
}
