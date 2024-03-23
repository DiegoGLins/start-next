import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Produtos</Link>
        </li>
        <li>
          <Link href="/about">Sobre nós</Link>
        </li>
        <li>
          <Link href="/contacts">Fale Conosco</Link>
        </li>
      </ul>
    </div>
  );
}