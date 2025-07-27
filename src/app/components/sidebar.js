'use client';

import styles from "./sidebar.module.css";
import Link from "next/link";
import MediaQuery from 'react-responsive';
import sidebarItems from "@/lib/menuItems.js";

export default function Sidebar({ category, path }) {
    const data = sidebarItems[category]
    if (!data) return <></>;

    return (
        <MediaQuery minWidth={992}>
            <div className={styles.sidebar}>
                <div className={styles.sidebarTitle}>{data.title}</div>
                <div className={styles.sidebarItems}>
                    {data.submenu.map((pg, i) => {
                        return (
                            <Link href={pg.link} key={i} target={pg.target || ''}>
                                <div className={[styles.sidebarItem, path == pg.link ? styles.active : ''].join(' ')}>{pg.title}{
                                    pg.target == "_blank" ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "translate(4px, -4px)" }}>
                                            <path d="M7 7h10v10" />
                                            <path d="M7 17 17 7" />
                                        </svg>
                                        : ''}</div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </MediaQuery>
    )
}