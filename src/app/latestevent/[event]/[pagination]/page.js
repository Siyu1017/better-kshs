import LatestEvent from "../latestEvent";
import Pagination from "@/components/pagination";
import { pageDatas } from "../pageDatas";
import getLatestEvent from "@/api/getLatestEvent";
import styles from "@/styles/page.default.module.css";
import Sidebar from "@/components/sidebar";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const resolvedParams = await params;
    const pageData = pageDatas[resolvedParams.event];
    if (!pageData) {
        return notFound();
    }

    const pagination = Number(resolvedParams.pagination || 1);
    const { items, range } = await getLatestEvent(pageData.url + ',,,,,,,,' + (pagination - 1));

    return (
        <div className={styles.pageWithSidebar}>
            <Sidebar category="latestevent" path={`/latestevent/${resolvedParams.event}`}></Sidebar>
            <div className={styles.content}>
                <LatestEvent items={items} pageData={pageData} url={pageData.url + ',,,,,,,,' + (pagination - 1)} />
                <Pagination basePath={`/latestevent/${resolvedParams.event}`} max={range[1]} current={pagination}></Pagination>
            </div>
        </div>
    )
}