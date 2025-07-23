import styles from "@/styles/page.default.module.css";
import Cards from "@/components/cards";
import items from "@/lib/menuItems.js";

const pages = items['links']?.submenu || {};

export const metadata = {
    title: "相關連結"
}

export default function Page() {
    return null;
    return (
        <div className={styles.page}>
            <div className={styles.title}>相關連結</div>
            <Cards cards={pages} />
        </div>
    )
}