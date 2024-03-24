import React, { FC } from "react"
import styles from "@/styles/Home.module.css"
import Image from "next/image"
import { useSwiper } from "swiper/react"
import { Nunito } from "next/font/google"

const nunito = Nunito({ subsets: ["latin"] })

type Props = {
  title?: React.ReactElement
  subtitle?: React.ReactElement
  text?: React.ReactElement
  slideHeader: React.ReactElement
  slideImage: React.ReactElement
  buttonText: string
  imageFooter?: string
}

export const Slide: FC<Props> = ({
  title,
  subtitle,
  text,
  slideHeader,
  slideImage,
  buttonText,
  imageFooter,
}) => {
  const SwiperButtonNext = ({ children }: any) => {
    const swiper = useSwiper()
    return (
      <button
        className={`${styles.btnSecondary}
         ${nunito.className}
         `}
        onClick={() => swiper.slideNext()}
      >
        {children}
      </button>
    )
  }
  return (
    <div className={styles.swipeCard}>
      {/* <div className={styles.swiperSlide}> */}

      {slideHeader}

      <div className={styles.swipeBody}>
        {slideImage}
        {imageFooter && <p>{imageFooter}</p>}
      </div>
      <div className={styles.continueBtn}>
        <SwiperButtonNext>{buttonText}</SwiperButtonNext>
      </div>
    </div>
  )
}
