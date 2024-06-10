import Image from "next/image";
import Symbols from "../Assets/Symbols.svg";
import styles from "@/Styles/Home.module.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={styles.home}>
        <div className={styles.name}>
          <Image src={Symbols} alt="" className={styles.Symbol} />
          <div className={styles.welcomeText}>
            <h1 className={styles.nameh1}>WELCOME TO</h1>
            <h1 className={styles.nameh2}>School Of Informatics</h1>
            <h1 className={styles.nameh3}>DIGITAL UNIVERSITY KERALA</h1>
          </div>
        </div>
        {/* <div className={styles.carousel}>
          <MyCarousel />
        </div> */}
      </div>
    </main>
  );
}
