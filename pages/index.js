// ./pages/index.js

import Head from "next/head";
import SiteLayout from "../layouts/SiteLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Site</title>
        <meta name="description" content="Wow Docs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <header className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="font-extrabold text-7xl">Pagina Inicial</h1>
          <p className="text-2xl">Teste de pagina index</p>
        </header>
      </section>
    </div>
  );
}

// define layout for home page
Home.getLayout = (page) => {
  return <SiteLayout> {page} </SiteLayout>;
};
