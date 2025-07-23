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
  applicationName: 'Better KSHS'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
            Copyright (c) <a href="https://siyu1017.github.io/" target="_blank">Siyu</a> {new Date().getFullYear()}</footer>
        </div>
      </body>
    </html>
  );
}
