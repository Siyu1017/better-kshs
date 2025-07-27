import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.title}>Better KSHS</div>
        <hr className={styles.sep}></hr>
        <div className={styles.desc}>
          <div>給予您更好的高雄中學校網瀏覽體驗</div>
          <div style={{ marginTop: '.5rem', fontSize: '.875rem', color: 'var(--text-color-2)' }}>繼續使用即代表您已詳閱「<Link className={styles.link} href="/privacy">隱私權政策</Link>」以及「<Link className={styles.link} href="/terms">服務條款</Link>」</div>
        </div>
      </div>
    </div>
  );
}
