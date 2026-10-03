"use client";

import styles from "@/styles/page.default.module.css";

export default function Error() {
    return (
        <div className={styles.content}>
            <div className={styles.error}>錯誤：無法讀取頁面訊息</div>
        </div>
    )
}
