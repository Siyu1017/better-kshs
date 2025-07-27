"use client";

import { usePathname } from 'next/navigation';
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import { useMediaQuery } from 'react-responsive';
import items from "@/lib/menuItems.js";

const menuItems = Object.values(items).filter(item => ['/privacy', '/terms'].includes(item.link) ? false : true);

export default function Header({ title, onOpenMenu }) {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const useMobileMenu = useMediaQuery({ query: '(max-width: 992px)' });
    const [menuOpened, setMenuOpened] = useState(false);
    const [openIndexes, setOpenIndexes] = useState(() => {
        return menuItems.map(item => pathname.startsWith(item.link));
    });

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        const app = document.querySelector(".app");
        if (!app) return console.log('app not found');

        const handler = () => {
            setScrolled(app.scrollTop > 0);
        }

        app.addEventListener('scroll', handler, { passive: true });
        return () => app.removeEventListener('scroll', handler);
    }, []);

    if (!isClient) return null;

    const toggleOpen = (index) => {
        setOpenIndexes(prev => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const header = <header className={scrolled ? styles.scrolled : ''}>
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <Link href="/" onClick={() => setMenuOpened(false)}>
                    <div className={styles.headerTitle}>{title}</div>
                </Link>
                {useMobileMenu
                    ? <div className={[styles.mobileMenu, menuOpened ? styles.show : ''].join(' ')}>
                        {menuItems.map((item, index) => {
                            const isActive = pathname.startsWith(item.link);
                            const isOpen = openIndexes[index];
                            return item.submenu ? (
                                <div className={styles.mobileMenuItemWithSubmenu} key={index}>
                                    <div className={[styles.mobileMenuItemSubmenuTrigger, isActive ? styles.active : '', isOpen ? styles.opened : ''].join(' ')} onClick={() => toggleOpen(index)}>
                                        <div className={styles.mobileMenuItemTitle}>
                                            <span>{item.title}</span>
                                        </div>
                                        <div className={styles.mobileMenuItemExpand}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.mobileMenuItemExpandIcon}>
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={[styles.mobileMenuItemSubmenu, isOpen ? styles.show : ''].join(' ')}>
                                        {item.submenu.map((subItem, subIndex) => {
                                            const isActive = pathname.startsWith(subItem.link);
                                            return <Link href={subItem.link || '#'} key={subIndex} onClick={() => setMenuOpened(false)} target={subItem.target || ''}>
                                                <div className={[styles.mobileMenuItem, isActive ? styles.active : ''].filter(Boolean).join(' ')}>
                                                    <div className={styles.mobileMenuItemTitle}>
                                                        <span>{subItem.title}</span>
                                                        {subItem.target == "_blank" ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "translate(4px, -4px)" }}>
                                                                <path d="M7 7h10v10" />
                                                                <path d="M7 17 17 7" />
                                                            </svg>
                                                            : ''}
                                                    </div>
                                                </div>
                                            </Link>
                                        })}
                                    </div>
                                </div>
                            ) : <Link href={item.link || '#'} key={index} onClick={() => setMenuOpened(false)} target={item.target || ''}>
                                <div className={[styles.mobileMenuItem, isActive ? styles.active : ''].filter(Boolean).join(' ')}>
                                    <div className={styles.mobileMenuItemTitle}>{item.title}{
                                        item.target == "_blank" ?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "translate(4px, -4px)" }}>
                                                <path d="M7 7h10v10" />
                                                <path d="M7 17 17 7" />
                                            </svg>
                                            : ''}</div>
                                </div>
                            </Link>
                        })}
                    </div>
                    : <div className={styles.headerMenu}>
                        {menuItems.map((item, index) => {
                            const isActive = pathname.startsWith(item.link);
                            return (
                                <Link href={item.link || '#'} key={index}>
                                    <div className={[styles.menuItem, isActive ? styles.active : ''].filter(Boolean).join(' ')}>
                                        <div className={styles.menuItemTitle}>{item.title}</div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                }
            </div>
            <div className={styles.headerRight}>
                <Link href="https://github.com/Siyu1017/better-kshs" target="_blank" aria-label="Github Repo">
                    <div className={styles.github}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                        </svg>
                    </div>
                </Link>
                <div className={styles.hamburger} onClick={() => {
                    setMenuOpened(!menuOpened);
                }}>
                    {menuOpened ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12h16" />
                        <path d="M4 18h16" />
                        <path d="M4 6h16" />
                    </svg>
                    }
                </div>
            </div>
        </div>
    </header>

    return header;
}