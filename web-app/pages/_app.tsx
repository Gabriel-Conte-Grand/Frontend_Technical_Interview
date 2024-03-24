import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Nunito, Nunito_Sans } from "next/font/google"

const nunito_sans = Nunito_Sans({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nunito_sans.className}>
      <Component {...pageProps} />
    </main>
  )
}
