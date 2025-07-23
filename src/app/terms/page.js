import styles from "@/styles/page.default.module.css";
import pageStyles from "./page.module.css";

export const metadata = {
    title: '服務條款'
}

export default function PrivacyPolicy() {
    return <div className={styles.page}>
        <h1 className={styles.title}>服務條款</h1>

        <p className={pageStyles.p}>歡迎使用本服務！為了保障您的權益，請您詳細閱讀下列服務條款（以下簡稱「本條款」）。當您使用本網站或相關應用程式，即表示您已閱讀、瞭解並同意遵守本條款。</p>

        <h2 className={pageStyles.heading2}>一、接受條款</h2>
        <p className={pageStyles.p}>當您使用本服務，即表示您同意受本條款的拘束。如果您不同意本條款全部或部分內容，請勿使用本服務。</p>

        <h2 className={pageStyles.heading2}>二、服務內容</h2>
        <p className={pageStyles.p}>本服務由我們提供，包括但不限於：</p>
        <ul className={pageStyles.ul}>
            <li className={pageStyles.li}>（請在此列出你的具體服務，例如：註冊會員、檢視文章、使用互動功能等）</li>
        </ul>
        <p className={pageStyles.p}>我們保留隨時新增、變更、刪除或終止部分或全部服務的權利，恕不另行通知。</p>

        <h2 className={pageStyles.heading2}>三、使用者義務與帳號安全</h2>
        <ol className={pageStyles.ul}>
            <li className={pageStyles.li}>您同意不會以任何違法或侵犯他人權益的方式使用本服務。</li>
            <li className={pageStyles.li}>若您註冊帳號，應妥善保管帳號與密碼，並對所有使用行為負責。</li>
            <li className={pageStyles.li}>若帳號有未經授權使用之情形，應立即通知我們。</li>
        </ol>

        <h2 className={pageStyles.heading2}>四、使用限制</h2>
        <ul className={pageStyles.ul}>
            <li className={pageStyles.li}>發布或傳送任何誹謗、猥褻、騷擾、侵權、或違反公共秩序善良風俗的內容；</li>
            <li className={pageStyles.li}>以自動程式、大量請求干擾本服務的正常運作；</li>
            <li className={pageStyles.li}>未經授權使用、改作、重製或散布本平台內容。</li>
        </ul>

        <h2 className={pageStyles.heading2}>五、智慧財產權</h2>
        <p className={pageStyles.p}>除非另有標示，本網站/應用上的所有內容，包括文字、圖片、圖示、程式碼與商標等，其智慧財產權均為我們或合法權利人所有。未經授權，不得以任何形式使用、重製或公開播送。</p>

        <h2 className={pageStyles.heading2}>六、第三方連結與服務</h2>
        <p className={pageStyles.p}>本服務可能包含第三方網站或服務的連結，該等連結僅為方便使用者之目的，並不代表我們對其內容或行為負責。使用第三方服務時，請遵守其各自的條款與政策。</p>

        <h2 className={pageStyles.heading2}>七、責任限制</h2>
        <p className={pageStyles.p}>在適用法律允許的最大範圍內，我們不對因使用或無法使用本服務所造成的任何損失或損害負責。包括但不限於資料遺失、系統中斷、營業損失等。</p>

        <h2 className={pageStyles.heading2}>八、條款修訂</h2>
        <p className={pageStyles.p}>我們保留隨時修訂本條款的權利。條款變更後，會公布於本頁面，建議您定期查閱。如您在條款修訂後仍繼續使用本服務，即視為您同意該等變更。</p>

        <h2 className={pageStyles.heading2}>九、準據法與管轄法院</h2>
        <p className={pageStyles.p}>本條款依照台灣法律解釋與適用。如有任何爭議，雙方同意以臺灣臺北地方法院為第一審管轄法院。</p>

        <h2 className={pageStyles.heading2}>十、第三方內容與資料來源</h2>
        <p className={pageStyles.p}>本網站部分頁面之內容、圖片或數據可能來自第三方資料來源（例如開放 API、外部網站或內容提供者）。這些內容僅為資訊展示或功能提供之用途，並不代表我們對其完整性、正確性或即時性做出任何保證。</p>
        <p className={pageStyles.p}>如您認為某些第三方內容涉及權利問題，請立即與我們聯繫，我們將儘速處理。</p>
        <p className={pageStyles.p}>本網站不對第三方內容所引發之任何損害或法律責任負責，使用者應自行判斷與承擔風險。</p>

        <h2 className={pageStyles.heading2}>十一、聯絡我們</h2>
        <address>
            電子郵件：<a href="mailto:dev.siyu.0919@gmail.com">dev.siyu.0919@gmail.com</a>
        </address>
    </div>
}