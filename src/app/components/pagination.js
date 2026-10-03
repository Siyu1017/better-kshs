"use client";

import styles from "./pagination.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Pagination({ max = 1, basePath, current = 1 }) {
    const router = useRouter();
    const [loading, setLoading] = useState(null);

    const href = (page) => page === 1 ? basePath : `${basePath}/${page}`;

    function go(e) {
        e.preventDefault();
        const val = Math.min(Math.max(Math.trunc(Number(e.currentTarget.page.value)) || 1, 1), max);
        e.currentTarget.page.value = val;
        if (val === current) return;
        setLoading('go');
        router.push(href(val));
    }

    function simpleLoader(n = 8) {
        return <div className={styles.simpleLoader}>
            <div className={styles.simpleLoaderBars}>
                {[...Array(n)].map((_, i) => <div key={i} className={styles.simpleLoaderBar} style={{ animationDelay: `${i / n}s`, transform: `rotate(${i / n * 360}deg) translateY(3px)` }}></div>)}
            </div>
        </div>;
    }

    function navButton(id, page, disabled, label, icon) {
        if (disabled) {
            return <button type="button" className={styles.button} aria-label={label} disabled>
                {simpleLoader()}
                {icon}
            </button>
        }
        return <Link href={href(page)} className={`${styles.button} ${loading === id ? styles.loading : ''}`} aria-label={label} onClick={() => setLoading(id)}>
            {simpleLoader()}
            {icon}
        </Link>
    }

    return (
        <form className={styles.pagination} onSubmit={go}>
            {navButton('first', 1, current <= 1, '第一頁',
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.buttonIcon}>
                    <path d="m11 17-5-5 5-5" />
                    <path d="m18 17-5-5 5-5" />
                </svg>
            )}
            {navButton('prev', current - 1, current <= 1, '上一頁',
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.buttonIcon}>
                    <path d="m15 18-6-6 6-6" />
                </svg>
            )}
            <input className={styles.input} name="page" type="number" defaultValue={current} min={1} max={max}></input>
            <button type="submit" className={`${styles.button} ${loading === 'go' ? styles.loading : ''}`} aria-label="前往">
                {simpleLoader()}
                <span style={{ padding: '0 .5rem' }}>前往</span>
            </button>
            {navButton('next', current + 1, current >= max, '下一頁',
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.buttonIcon}>
                    <path d="m9 18 6-6-6-6" />
                </svg>
            )}
            {navButton('last', max, current >= max, '最後一頁',
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.buttonIcon}>
                    <path d="m6 17 5-5-5-5" />
                    <path d="m13 17 5-5-5-5" />
                </svg>
            )}
        </form>
    )
}
