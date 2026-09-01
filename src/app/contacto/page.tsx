import Navigation from "../components/navigation/navigation";
import styles from "./page.module.css";

export default function Contacto() {
  return (
    <Navigation active="contacto">
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Contacto</span>
        <h1>Hablemos.</h1>
        <p>
          Para encargos, celebraciones o cualquier consulta, estamos al otro
          lado.
        </p>
      </section>
      <section className={styles.contact}>
        <div>
          <h2>Ven a vernos</h2>
          <p>
            Estamos preparando el horno cada mañana para que encuentres tu
            favorito.
            <br />
            <br />
            <strong>De lunes a sábado</strong>
            <br />
            07:00 - 14:00 y 17:00 - 20:00
          </p>
        </div>
        <form className={styles.form}>
          <label>
            Nombre
            <input type="text" name="nombre" required />
          </label>
          <label>
            Correo electrónico
            <input type="email" name="correo" required />
          </label>
          <label>
            Mensaje
            <textarea name="mensaje" required />
          </label>
          <button className={styles.button} type="submit">
            Enviar mensaje
          </button>
        </form>
      </section>
    </Navigation>
  );
}
