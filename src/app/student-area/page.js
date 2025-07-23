import styles from "@/styles/page.default.module.css";
import Cards from "@/components/cards";
import items from "@/lib/menuItems.js";

const pages = items['student-area'].submenu;

export const metadata = {
    title: "學生專區"
}

export default function Page() {
    return (
        <div className={styles.page}>
            <div className={styles.title}>學生專區</div>
            <Cards cards={pages} />
        </div>
    )
}