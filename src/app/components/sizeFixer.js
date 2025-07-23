"use client";

import { useEffect } from "react";

export default function SizeFixer() {
    useEffect(() => {
        const setSize = () => {
            const vw = window.innerWidth * 0.01;
            document.documentElement.style.setProperty('--vw', `${vw}px`);

            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        setSize();
        window.addEventListener('resize', setSize);
        return () => window.removeEventListener('resize', setSize);
    }, []);

    return null;
}