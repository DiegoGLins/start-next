import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Principal</title>
        <meta name="keyworkds" content="Roupas, calçados, Camisas"></meta>
        <meta
          name="description"
          content="Encontre a melhor roupa para você"
        ></meta>
      </Head>
      <h1 className={styles.title}>Home</h1>
      <div className={styles.center}>
        <Image
          src="/images/cidade-inteligente.jpg"
          width="1300"
          height="720"
          alt="hamburger-frango"
        />
      </div>
    </>
  );
}
