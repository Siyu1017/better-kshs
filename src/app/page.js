import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.title}>Better KSHS</div>
        <hr className={styles.sep}></hr>
        <div className={styles.desc}>給予您更好的高雄中學校網瀏覽體驗</div>
      </div>
    </div>
  );
}
