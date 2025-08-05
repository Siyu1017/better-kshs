import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "@/components/header";
import NextTopLoader from 'nextjs-toploader';
import SizeFixer from "./components/sizeFixer";

const headerFont = localFont({
  variable: "--font-header",
  src: 'fonts/PlayfairDisplay-Regular.ttf',
  display: 'swap'
})

const defaultFont = localFont({
  variable: "--font-default",
  src: 'fonts/NotoSerifTC-Regular.ttf',
  display: 'swap'
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
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${headerFont.variable} ${defaultFont.variable}`}>
        <SizeFixer />
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
