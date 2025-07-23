import styles from "@/styles/page.default.module.css";
import Cards from "@/components/cards";
import items from "@/lib/menuItems.js";

const pages = items['latestevent'].submenu;

export const metadata = {
    title: "最新消息"
}

export default function Page() {
    return (
        <div className={styles.page}>
            <div className={styles.title}>最新消息</div>
            <Cards cards={pages} />
        </div>
    )
}