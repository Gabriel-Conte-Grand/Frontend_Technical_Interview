import Head from "next/head"
import styles from "@/styles/Home.module.css"
import "swiper/css"
import "swiper/css/pagination"
import { useState } from "react"
import { Navbar, Steps, SwiperComponent } from "@/components"

export default function Home() {
  const [progress, setProgress] = useState(1)

  const lastSlideIndex = 5

  return (
    <>
      <Head>
        <title>Win Investments</title>
        <meta
          name='description'
          content='Ya sos hincha, ahora podés ser inversor de los mejores clubs y deportistas del mundo. ¿Estás listo?'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={`${styles.main}`}>
        <div className={styles.mainContainer}>
          {progress !== lastSlideIndex ? (
            <Steps progress={progress} steps={lastSlideIndex} />
          ) : null}

          <SwiperComponent progress={progress} setProgress={setProgress} />
        </div>

        {progress !== lastSlideIndex ? <Navbar /> : null}
      </main>
    </>
  )
}
