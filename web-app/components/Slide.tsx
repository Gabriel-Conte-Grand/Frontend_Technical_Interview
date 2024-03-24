import React, { FC } from "react"
import styles from "@/styles/Home.module.css"
import { useSwiper } from "swiper/react"

type Props = {
  slideHeader: React.ReactElement
  slideImage: React.ReactElement
  buttonText: string
  imageFooter?: string
}

export const Slide: FC<Props> = ({
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
        `}
        // ${nunito_sans.className}
        onClick={() => swiper.slideNext()}
      >
        {children}
      </button>
    )
  }
  return (
    <div className={styles.swipeCard}>
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
