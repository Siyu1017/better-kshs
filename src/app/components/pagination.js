"use client";

import styles from "./pagination.module.css";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Pagination({ max = 1, basePath, current = 1 }) {
    const [pagination, setPagination] = useState(current);
    const inputRef = useRef(pagination);
    const router = useRouter();

    function go() {
        let val = Number(inputRef.current.value);
        if (val > max) {
            val = max;
        } else if (val < 1) {
            val = 1
        }
        setPagination(val);
        if (val != 1) {
            router.push(`${basePath}/${val}`);
        } else {
            router.push(basePath);
        }
    }

    return (
        <div className={styles.pagination}>
            <button className={styles.button} aria-label="第一頁" onClick={() => {
                setPagination(1);
                router.push(basePath);
            }} disabled={pagination == 1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.buttonIcon}>
                    <path d="m11 17-5-5 5-5" />
                    <path d="m18 17-5-5 5-5" />
                </svg>
            </button>
            <button className={styles.button} aria-label="上一頁" onClick={() => {
                if (pagination > 1) {
                    setPagination(pagination - 1)
                    router.push(`${basePath}/${pagination - 1}`);
                }
            }} disabled={pagination == 1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.buttonIcon}>
                    <path d="m15 18-6-6 6-6" />
                </svg>
            </button>
            <input className={styles.input} type="number" defaultValue={pagination} min={1} ref={inputRef} onChange={(e) => {
                const val = Number(e.target.value);
                if (val > max) {
                    e.target.value = max;
                } else if (val < 1) {
                    e.target.value = 1
                } else {
                    e.target.value = val;
                }
            }}></input>
            <button className={styles.button} aria-label="前往" onClick={go}>
                <span style={{ padding: '0 .5rem' }}>前往</span>
            </button>
            <button className={styles.button} aria-label="下一頁" onClick={() => {
                if (pagination < max) {
                    setPagination(pagination + 1);
                    router.push(`${basePath}/${pagination + 1}`);
                }
            }} disabled={pagination == max}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.buttonIcon}>
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </button>
            <button className={styles.button} aria-label="最後一頁" onClick={() => {
                setPagination(max);
                router.push(`${basePath}/${max}`);
            }} disabled={pagination == max}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.buttonIcon}>
                    <path d="m6 17 5-5-5-5" />
                    <path d="m13 17 5-5-5-5" />
                </svg>
            </button>
        </div>
    )
}