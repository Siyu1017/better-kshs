import styles from "@/styles/page.default.module.css";
import Sidebar from "@/components/sidebar";

export default async function Page({ params }) {
    return (
        <div className={styles.pageWithSidebar}>
            <Sidebar category="student-area" path={`/student-area/school-administration-system`}></Sidebar>
            <div className={styles.content}>
                <>
                    <div className={styles.title}>校務行政系統說明</div>
                    <div>
                        <p style={{ lineHeight: '2' }}>成績缺曠等資料查詢請由學校首頁「<a href="http://highschool.kh.edu.tw/" target="_blank" title="校務行政系統(另開新視窗)" style={{ color: 'rgb(var(--primary-color))', textDecoration: 'underline' }}>校務行政系統</a>」連結進入。(或直接輸入網址：<a href="http://highschool.kh.edu.tw/" target="_blank" title="校務行政系統(另開新視窗)" style={{ color: 'rgb(var(--primary-color))', textDecoration: 'underline' }}>http://highschool.kh.edu.tw</a>&nbsp;)</p><br />
                        <p style={{ lineHeight: '2' }}>行政區點選<span style={{ color: 'rgb(var(--primary-color))', fontWeight: 'bold' }}>三民區</span>，學校點選<span style={{ color: 'rgb(var(--primary-color))', fontWeight: 'bold' }}>高雄中學</span>，學生帳號為學號，家長帳號為學號前方加P(大寫)，預設密碼皆為學生的身分證字號。輸入完按「登入」。</p>
                        <p style={{ lineHeight: '2' }}>(例如：學生學號為000001，則家長帳號為P000001)第一次進入系統會要求修改密碼(請牢記密碼)。</p>
                    </div>
                </>
            </div>
        </div>
    )
}