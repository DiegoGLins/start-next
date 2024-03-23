import styles from "../styles/Home.module.css";
import Head from "next/head";

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
      <div className={styles.title}>
        <h1>Home</h1>
      </div>
    </>
  );
}
