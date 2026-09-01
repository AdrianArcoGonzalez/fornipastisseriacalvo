"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import Footer from "../footer/Footer";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <button
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className={styles.menuButton}
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" />
            ) : (
              <Menu aria-hidden="true" />
            )}
          </button>
          <div
            className={`${styles.menuPanel} ${isMenuOpen ? styles.menuOpen : ""}`}
            id="primary-navigation"
          >
            <div className={styles.links}>
              {links.map(([key, label, href]) => (
                <Link
                  key={key}
                  className={active === key ? styles.active : undefined}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(label)}
                </Link>
              ))}
            </div>
            <LanguageSwitcher />
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
