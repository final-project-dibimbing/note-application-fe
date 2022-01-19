import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <Header />
      <div className={styles.contentcontainer}>
        <div className={styles.contentwrapper}>
          <p>Ini Adalah HOME, berisi saved Note</p>
        </div>
      </div>
    </div>
  );
}
