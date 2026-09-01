import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../languageSwitcher/language-switcher";
import styles from "./navigation.module.css";

type NavigationProps = {
  children: ReactNode;
  active: "inicio" | "productos" | "historia" | "contacto";
};

const links = [
  ["inicio", "home", "/"],
  ["productos", "products", "/productos"],
  ["historia", "about", "/nuestra-historia"],
  ["contacto", "contact", "/contacto"],
] as const;

export default function Navigation({ children, active }: NavigationProps) {
  const t = useTranslations("navigation");

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link className={styles.brand} href="/">
            <Image
              src="/logo.png"
              alt="Forn i Pastisseria Calvo"
              width={150}
              height={64}
              priority
            />
          </Link>
          <div className={styles.links}>
            {links.map(([key, label, href]) => (
              <Link
                key={key}
                className={active === key ? styles.active : undefined}
                href={href}
              >
                {t(label)}
              </Link>
            ))}
          </div>
          <LanguageSwitcher />
        </nav>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>Forn i Pastisseria Calvo</footer>
    </div>
  );
}
