import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function FooterContainer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.linksUteis}>
        <p>Links úteis</p>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Produtos</Link>
          </li>
          <li>
            <Link href="/about">Sobre nós</Link>
          </li>
        </ul>
      </div>
      <div>
        <p>Fale Conosco</p>
        <p>(11)5050-5050</p>
        <p>Localização</p>
        <p>Av.Paulista, 1200 - SP</p>
      </div>
    </footer>
  );
}
