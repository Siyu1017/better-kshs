import styles from "@/styles/page.default.module.css";
import Cards from "@/components/cards";
import items from "@/lib/menuItems.js";

const pages = items['faculty-and-staff']?.submenu || {};

export default function Page() {
    return null;
    return (
        <div className={styles.page}>
            <div className={styles.title}>教職專區</div>
            <Cards cards={pages} />
        </div>
    )
}