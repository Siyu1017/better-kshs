"use client";

import styles from "./cards.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Cards({ cards }) {
    const divRef = useRef(null);
    const [styleVars, setStyleVars] = useState({});

    useEffect(() => {
        if (!divRef.current) return;
        const width = divRef.current.offsetWidth;
        const base = 24 * 16;   // The max width of the card
        const ratio = Math.ceil(width / base);

        const observer = new ResizeObserver(() => {
            if (!divRef.current) return;
            const width = divRef.current.offsetWidth;
            const ratio = Math.ceil(width / base);
            setStyleVars({
                '--rows': ratio,
            });
        })
        observer.observe(divRef.current);

        setStyleVars({
            '--rows': ratio,
        });

        return () => { observer.disconnect(); }
    }, []);

    return (
        <div className={styles.cards} style={styleVars} ref={divRef}>
            {cards.map((card, i) => (<Link href={card.link || '#'} key={i} target={card.target || ''} title={card.title}>
                <div className={styles.card}>
                    <div className={styles.title}>{card.title.replace(/\(.*\)/gi, '')}{
                        card.target == "_blank" ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "translate(4px, -4px)" }}>
                                <path d="M7 7h10v10" />
                                <path d="M7 17 17 7" />
                            </svg>
                            : ''}</div>
                    {card.description ? <div className={styles.description}>{card.description}</div> : ''}
                </div>
            </Link>
            ))}
        </div>
    )
}