import Navigation from "./components/navigation/navigation";
import Link from "next/link";
import styles from "./page.module.css";

const products = [
  {
    name: "Hogaza rustica",
    price: "4,50 EUR",
    tag: "Masa madre",
    image:
      "https://images.unsplash.com/photo-1585478282223-f39a399478f7?auto=format&fit=crop&q=80&w=700",
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

export default function Home() {
  return (
    <Navigation active="inicio">
      <section className={styles.hero}>
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <p className={styles.kicker}>
            El sabor de siempre, en el corazon de tu barrio
          </p>
          <h1>
            Artesania diaria, ingredientes puros y el tiempo necesario para
            lograr el pan perfecto.
          </h1>
          <div className={styles.actions}>
            <Link
              className={`${styles.button} ${styles.primary}`}
              href="/productos"
            >
              Ver productos
            </Link>
            <Link
              className={`${styles.button} ${styles.secondary}`}
              href="/nuestra-historia"
            >
              Conocenos
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.passion}>
        <div className={styles.passionCopy}>
          <p className={styles.eyebrow}>Nuestra pasion</p>
          <h2>Masa madre, paciencia y dedicacion.</h2>
          <p>
            En Forn i Pastisseria Calvo, no hay atajos. Creemos que el buen pan
            requiere tiempo, respeto por los ingredientes y unas manos expertas
            que entiendan la masa. Cada manana, nuestro obrador cobra vida con
            el aroma a harina tostada y mantequilla.
          </p>
          <Link className={styles.textLink} href="/nuestra-historia">
            Descubre nuestra historia <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className={styles.passionImage}>
          <div className={styles.freshNote}>Horneado diario</div>
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.heading}>
          <h2>Recien salido del horno</h2>
          <p>
            Nuestras especialidades, elaboradas cada dia con los mejores
            ingredientes.
          </p>
        </div>
        <div className={styles.grid}>
          {products.map((product) => (
            <article className={styles.card} key={product.name}>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${product.image})` }}
                role="img"
                aria-label={product.name}
              >
                <span>{product.tag}</span>
              </div>
              <div className={styles.copy}>
                <div>
                  <h3>{product.name}</h3>
                  <strong>{product.price}</strong>
                </div>
                <p>
                  Elaborado con procesos tradicionales y fermentacion lenta para
                  un sabor unico.
                </p>
              </div>
            </article>
          ))}
        </div>
        <Link
          className={`${styles.button} ${styles.secondary} ${styles.menuLink}`}
          href="/productos"
        >
          Ver menu completo
        </Link>
      </section>

      <section className={styles.visit}>
        <div className={styles.visitCopy}>
          <h2>Ven a vernos.</h2>
          <p>
            El olor a pan recien hecho no se puede enviar por internet. Te
            esperamos en nuestra tienda para ofrecerte lo mejor de nuestro
            obrador.
          </p>
          <div className={styles.details}>
            <p>
              <strong>Direccion</strong>
              <br />
              Av. de Catalunya, 96, 08150 Parets del Vallès, Barcelona
            </p>
            <p>
              <strong>Horario</strong>
              <br />
              Lunes a viernes: 6:00 - 14:30, 16:30 - 20:30
              <br />
              Sabados: 7:00 - 14:30
              <br />
              Domingos: 7:00 - 14:30
            </p>
          </div>
        </div>
        <div
          className={styles.visitImage}
          role="img"
          aria-label="Interior de la panaderia Forn i Pastisseria Calvo"
        />
      </section>
    </Navigation>
  );
}
