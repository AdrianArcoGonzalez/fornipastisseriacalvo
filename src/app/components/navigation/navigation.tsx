"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
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
  const navigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (!navigationRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isMenuOpen]);

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <nav className={styles.nav} ref={navigationRef}>
          <div className={styles.mobileLanguage}>
            <LanguageSwitcher />
          </div>
          <Link className={styles.brand} href="/">
            <Image
              src="/logo-calvo-parets.png"
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
            <div className={styles.desktopLanguage}>
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
