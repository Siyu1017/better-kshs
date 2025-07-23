import styles from "@/styles/page.default.module.css";
import Sidebar from "@/components/sidebar";

export default async function Page({ params }) {
    return (
        <div className={styles.pageWithSidebar}>
            <Sidebar category="student-area" path={`/student-area/educational-resources`}></Sidebar>
            <div className={styles.content}>
                <>
                    <div className={styles.title}>教學資源</div>
                </>
            </div>
        </div>
    )
}