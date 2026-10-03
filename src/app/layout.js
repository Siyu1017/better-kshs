import localFont from "next/font/local";
import { Noto_Serif_TC } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header";
import NextTopLoader from 'nextjs-toploader';

const headerFont = localFont({
  variable: "--font-header",
  src: 'fonts/PlayfairDisplay-Regular.ttf',
  display: 'swap'
})

const defaultFont = Noto_Serif_TC({
  variable: "--font-default",
  weight: '400',
  display: 'swap',
  preload: false
})

export const metadata = {
  title: {
    template: '%s | Better KSHS',
    default: 'Better KSHS'
  },
  description: '更好的高雄中學校網',
  applicationName: 'Better KSHS',
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant-TW">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${headerFont.variable} ${defaultFont.variable}`}>
        <NextTopLoader
          color="rgb(var(--primary-color))"
          showSpinner={false}
          height={3}
        />
        <div className="app">
          <Header title={"Better KSHS"}></Header>
          <main>{children}</main>
          <footer>
            <span>Copyright (c) <a href="https://siyu1017.github.io/" target="_blank" className="author">Siyu</a> {new Date().getFullYear()}</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
