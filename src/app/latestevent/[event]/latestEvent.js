import Link from "next/link";
import styles from "@/styles/page.default.module.css";

export default async function LatestEvent({ range, currentPage, items, pageData, url }) {
    try {
        return (
            <>
                <div className={styles.title}>{pageData.title}</div>
                <div className={styles.list}>
                    <div className={[styles.listHead, styles.listItem].join(' ')}>
                        <div className={[styles.titleCell, styles.listItemCell].join(' ')}>標題</div>
                        <div className={[styles.dateCell, styles.listItemCell].join(' ')}>日期</div>
                    </div>
                    {items.map((item, i) => {
                        return (<Link href={item.link} key={i} target="_blank" className={styles.listItem}>
                            <div className={[styles.titleCell, styles.listItemCell].join(' ')}>{item.title}{item.pinned == true ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.pinnedIcon}><path d="M12 17v5" /><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" /></svg> : ''}</div>
                            <div className={[styles.dateCell, styles.listItemCell].join(' ')}>{item.date}</div>
                        </Link>)
                    })}
                </div>
                <div className={styles.origin}>
                    資料來源：<Link href={url} target="_blank" style={{ textDecoration: 'underline' }}>高雄市立高雄高級中學</Link>
                </div >
            </>
        )
    } catch (err) {
        return (
            <>
                <div className={styles.title}>{pageData.title}</div>
                <div className={styles.error}>錯誤：無法讀取頁面訊息</div>
            </>
        )
    }
}