import { BookOpen } from "lucide-react";
import styles from "./Menu.module.css";

const menuSections = [
  {
    title: "Panes de Masa Madre",
    items: [
      "Hogaza Rústica (1kg)",
      "Baguette Tradicional",
      "Pan de Centeno 100%",
    ],
  },
  {
    title: "Bollería Artesana",
    items: [
      "Croissant de Mantequilla",
      "Pain au Chocolat",
      "Ensaimada Individual",
    ],
  },
  {
    title: "Pastelería Fina",
    items: ["Tarta de Frutas", "Éclair de Chocolate", "Macarons Variados"],
  },
];

const Menu = () => {
  return (
    <section className={styles.menu} aria-labelledby="menu-title">
      <header className={styles.heading}>
        <BookOpen size={17} strokeWidth={1.8} aria-hidden="true" />
        <h2 id="menu-title">Nuestra Carta</h2>
        <p>Elige tus favoritos de nuestro obrador.</p>
      </header>
      <div className={styles.sheet}>
        {menuSections.map((section) => (
          <section className={styles.category} key={section.title}>
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item, index) => (
                <li key={item}>
                  <span>{item}</span>
                  {index === 2 && <small>Especial</small>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Menu;
