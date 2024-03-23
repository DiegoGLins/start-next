import Link from "next/link";
import Head from "next/head";

export default function FaleConosco() {
  return (
    <>
      <Head>
        <title>Fale Conosco</title>
        <meta name="keyworkds" content="atendimento"></meta>
      </Head>
      <h1>Fale Conosco</h1>
      <Link href={"/"}>Voltar</Link>
    </>
  );
}
