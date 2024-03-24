import Head from "next/head"
import Image from "next/image"
import { Inter, Nunito } from "next/font/google"
import styles from "@/styles/Home.module.css"
import Link from "next/link"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { useState } from "react"
import { Steps } from "@/components/Steps"
import { Slide } from "@/components/Slide"

const inter = Inter({ subsets: ["latin"] })
const nunito = Nunito({ subsets: ["latin"] })

export default function Home() {
  // const SwiperButtonNext = ({ children }) => {
  //   const swiper = useSwiper()
  //   return (
  //     <button
  //       className={`${styles.btnSecondary} ${nunito.className}`}
  //       onClick={() => swiper.slideNext()}
  //     >
  //       {children}
  //     </button>
  //   )
  // }

  const [progress, setProgress] = useState(1)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={`${styles.main} ${nunito.className}`}>
        <div className={styles.mainContainer}>
          {progress !== 5 ? <Steps progress={progress} /> : null}
          <Swiper
            className={styles.swiperContainer}
            // onSlideChange={handleSlideChange}
            onSlidePrevTransitionStart={() => setProgress(progress - 1)}
            onSlideNextTransitionStart={() => setProgress(progress + 1)}
            parallax={true}
            speed={600}
            pagination={{ type: "progressbar" }}
            allowTouchMove={false}
          >
            <SwiperSlide>
              <Slide
                slideHeader={
                  <div className={styles.slideHeader}>
                    <h1>BIENVENIDO A WIN</h1>
                    <h4 className={styles.greenText}>
                      EL ÚNICO MARKETPLACE DE FÚTBOL
                    </h4>
                    <p>
                      INVIERTE EN EL MERCADO DE PASES Y DISFRUTA DE EXPERIENCIAS
                      ÚNICAS
                    </p>
                  </div>
                }
                slideImage={
                  <Image
                    src={"primerSlide.svg"}
                    alt=''
                    width={375}
                    height={527}
                    className={styles.primerSlide}
                  />
                }
                buttonText='Siguiente'
              />
            </SwiperSlide>
            <SwiperSlide>
              {/* <Slide /> */}
              <Slide
                slideHeader={
                  <div className={styles.slideHeader}>
                    <h1>INGRESA AL MERCADO DE PASES</h1>
                    <h4></h4>
                    <p>
                      INVIERTE Y GANA CON LA PRÓXIMA{" "}
                      <span className={styles.goldenText}>
                        <strong> TRANSFERENCIA DEL JUGADOR</strong>
                      </span>
                    </p>
                  </div>
                }
                slideImage={
                  <Image
                    src={"segundoSlide.svg"}
                    alt=''
                    width={375}
                    height={527}
                    className={styles.segundoSlide}
                  />
                }
                buttonText='Siguiente'
              />
            </SwiperSlide>
            <SwiperSlide>
              {/* <Slide /> */}
              <Slide
                slideHeader={
                  <div className={styles.slideHeader}>
                    <h1>VIVE TUS PROPIAS EXPERIENCIAS</h1>
                    <h4></h4>
                    <h4>
                      <span className={styles.greenText}>
                        {" "}
                        VIVE TU PASIÓN DE FORMA ÚNICA
                      </span>{" "}
                      COMO NUNCA LO IMAGINASTE
                    </h4>
                  </div>
                }
                slideImage={
                  <Image
                    src={"tercerSlide.svg"}
                    alt=''
                    width={263}
                    height={100}
                    className={styles.tercerSlide}
                  />
                }
                buttonText='Siguiente'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                slideHeader={
                  <div className={styles.slideHeader}>
                    <h1>DESCUBRE LOS MEJORES CLUBES</h1>
                    {/* <h4></h4> */}
                    {/* <p></p> */}
                  </div>
                }
                slideImage={
                  <Image
                    src={"cuartoSlide.svg"}
                    alt=''
                    width={375}
                    height={527}
                    className={styles.cuartoSlide}
                  />
                }
                imageFooter='Y MUCHOS MÁS INGRESANDO AL MERCADO'
                buttonText='Finalizar'
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.successContainer}>
                <div className={styles.successMsg}>
                  <Image
                    src={"successLogo.svg"}
                    alt=''
                    width={150}
                    height={105}
                  />
                  <div className={styles.successTitle}>
                    <h1>¡felicitaciones!</h1>
                    <h4>Bienvenido a WIN</h4>
                  </div>
                  <p>Ya puedes ser parte del mundo del deporte</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {progress !== 5 ? (
          <nav className={styles.nav}>
            <Link href='#' className={styles.navLinks}>
              <Image src={"/home.svg"} alt='Home' width='24' height='24' />
              <span>Inicio</span>
            </Link>
            <Link href='#' className={styles.navLinks}>
              <Image src={"/search.svg"} alt='Home' width='24' height='24' />
              <span>Buscar</span>
            </Link>
          </nav>
        ) : null}
      </main>
    </>
  )
}
