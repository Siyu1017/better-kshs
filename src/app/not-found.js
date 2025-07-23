import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>404 - 未找到</h1>
            <p className={styles.desc}>很抱歉，您所尋找的頁面並不存在</p>
        </div>
    )
}