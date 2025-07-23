import styles from "@/styles/page.default.module.css";
import Cards from "@/components/cards";
import items from "@/lib/menuItems.js";

const pages = items['about-kshs']?.submenu || {};

export const metadata = {
    title: "關於雄中"
}

export default function Page() {
    return null;
    return (
        <div className={styles.page} >
            <div className={styles.title}>關於雄中</div>
            <Cards cards={pages} />
        </div >
    )
}