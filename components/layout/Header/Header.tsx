"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

const LINKS = [
  { href: "/", label: "Главная" },
  //   { href: "/devices", label: "Устройства" },
  { href: "/messages", label: "Сообщения" },
  { href: "/privacy", label: "Политика" },
  { href: "/test-plasma", label: "test-plasma" },
  { href: "/test-font", label: "test-font" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        logo
      </Link>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.link} ${
                  pathname === link.href ? styles.active : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.right}>123</div>
    </header>
  );
}
