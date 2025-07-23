import styles from "@/styles/page.default.module.css";
import pageStyles from "./page.module.css";

export const metadata = {
    title: '隱私權政策'
}

export default function PrivacyPolicy() {
    return <div className={styles.page}>
        <h1 className={styles.title}>隱私權政策</h1>

        <p className={pageStyles.p}>本隱私權政策說明我們如何蒐集、使用、保護及分享您在使用本服務時所提供的資訊。使用本服務即表示您同意本政策的內容。</p>

        <h2 className={pageStyles.heading2}>一、資料的蒐集方式</h2>
        <p className={pageStyles.p}>我們可能會蒐集以下類型的資訊：</p>
        <ul className={pageStyles.ul}>
            <li className={pageStyles.li}><strong>您提供的資訊：</strong>如您在註冊帳號、填寫表單或聯繫我們時所提供的姓名、電子郵件、電話號碼等。</li>
            <li className={pageStyles.li}><strong>自動蒐集的資訊：</strong>如瀏覽行為、IP 位址、裝置資訊、使用時間等，通常透過 Cookie 或類似技術取得。</li>
            <li className={pageStyles.li}><strong>第三方來源的資訊：</strong>我們可能會從您授權的第三方（如 Google、Facebook）取得您的基本帳號資訊。</li>
        </ul>

        <h2 className={pageStyles.heading2}>二、資料的使用目的</h2>
        <p className={pageStyles.p}>我們蒐集您的資料主要用於：</p>
        <ul className={pageStyles.ul}>
            <li className={pageStyles.li}>提供與改善本服務</li>
            <li className={pageStyles.li}>客戶支援與回覆您的問題</li>
            <li className={pageStyles.li}>推播通知、行銷或促銷活動（您可選擇是否訂閱）</li>
            <li className={pageStyles.li}>防止濫用行為與維護安全</li>
            <li className={pageStyles.li}>遵循法律或主管機關要求</li>
        </ul>

        <h2 className={pageStyles.heading2}>三、資料的分享與第三方服務</h2>
        <p className={pageStyles.p}>我們<strong>不會</strong>任意出售、交換或轉讓您的個人資料予第三方。但在以下情況下，我們可能分享您的資訊：</p>
        <ul className={pageStyles.ul}>
            <li className={pageStyles.li}>為提供服務而必要的合作廠商（如主機、分析或付款服務提供者）</li>
            <li className={pageStyles.li}>法律要求時（如法院命令或政府機關）</li>
            <li className={pageStyles.li}>防止詐騙或保障平台安全</li>
        </ul>

        <h2 className={pageStyles.heading2}>四、Cookie 與追蹤技術</h2>
        <p className={pageStyles.p}>我們可能使用 Cookie 或類似技術來提升使用體驗，例如記住您的偏好或分析使用行為。您可以透過瀏覽器設定停用 Cookie，但可能影響服務功能。</p>

        <h2 className={pageStyles.heading2}>五、資料安全</h2>
        <p className={pageStyles.p}>我們致力於保護您的資料安全，採取合理的技術與管理措施防止資料外洩、未經授權存取或毀損。然而，網路傳輸無法保證絕對安全。</p>

        <h2 className={pageStyles.heading2}>六、隱私政策之變更</h2>
        <p className={pageStyles.p}>我們可能不定期更新本政策。任何變更將公布於本頁面，重大變更將另行通知。請定期查閱以掌握最新政策。</p>

        <h2 className={pageStyles.heading2}>七、聯絡我們</h2>
        <address>
            電子郵件：<a href="mailto:dev.siyu.0919@gmail.com">dev.siyu.0919@gmail.com</a>
        </address>
    </div>
}