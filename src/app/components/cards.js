import styles from "./cards.module.css";
import Link from "next/link";

export default function Cards({ cards }) {
    return (
        <div className={styles.container}>
            <div className={styles.cards}>
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
        </div>
    )
}