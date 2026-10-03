import LatestEvent from "./latestEvent";
import Pagination from "@/components/pagination";
import { pageDatas } from "./pageDatas";
import getLatestEvent from "@/api/getLatestEvent";
import styles from "@/styles/page.default.module.css";
import Sidebar from "@/components/sidebar";
import { notFound } from "next/navigation";

export const revalidate = 300;
export const maxDuration = 15;

export function generateStaticParams() {
    return [];
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const pageData = pageDatas[resolvedParams.event];
    if (!pageData) return {};
    return { title: pageData.title };
}

export default async function Page({ params }) {
    const resolvedParams = await params;
    const pageData = pageDatas[resolvedParams.event];
    if (!pageData) {
        return notFound();
    }

    const rawPagination = resolvedParams.pagination ?? '1';
    if (!/^[1-9]\d{0,3}$/.test(rawPagination)) {
        return notFound();
    }
    const pagination = Number(rawPagination);
    const { items, range } = await getLatestEvent(pageData.url + ',,,,,,,,' + (pagination - 1));
    if (pagination > range[1]) {
        return notFound();
    }

    return (
        <div className={styles.pageWithSidebar}>
            <Sidebar category="latestevent" path={`/latestevent/${resolvedParams.event}`}></Sidebar>
            <div className={styles.content}>
                <LatestEvent items={items} pageData={pageData} url={pageData.url + ',,,,,,,,' + (pagination - 1)} />
                <Pagination key={pagination} basePath={`/latestevent/${resolvedParams.event}`} max={range[1]} current={pagination}></Pagination>
            </div>
        </div>
    )
}