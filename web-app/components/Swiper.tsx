import React, { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import styles from "@/styles/Home.module.css"
import {
  FirstSlideHeader,
  FourthSlideHeader,
  SecondSlideHeader,
  Slide,
  SuccessHeader,
  ThirdSlideHeader,
} from "."
import Image from "next/image"
import { motion } from "framer-motion"
import { SwiperEvents, SwiperModule, SwiperOptions } from "swiper/types"

type Props = {
  progress: number
  setProgress: Dispatch<SetStateAction<number>>
}

export const SwiperComponent: FC<Props> = ({ setProgress, progress }) => {
  const [isLastSlide, setIsLastSlide] = useState(false)

  return (
    <Swiper
      className={styles.swiperContainer}
      onSlidePrevTransitionStart={() => setProgress(progress - 1)}
      onSlideNextTransitionStart={() => setProgress(progress + 1)}
      parallax={true}
      speed={600}
      pagination={{ type: "progressbar" }}
      allowTouchMove={false}
      onReachEnd={() => setIsLastSlide(true)}
    >
      <SwiperSlide>
        <Slide
          slideHeader={<FirstSlideHeader />}
          slideImage={
            <Image
              src={"primerSlide.svg"}
              alt=''
              width={375}
              height={527}
              className={styles.primerSlide}
              priority={true}
            />
          }
          buttonText='Siguiente'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          slideHeader={<SecondSlideHeader />}
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
        <Slide
          slideHeader={<ThirdSlideHeader />}
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
          slideHeader={<FourthSlideHeader />}
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

      {/* SUCCESS SLIDE */}

      <SwiperSlide>{isLastSlide && <SuccessHeader />}</SwiperSlide>
    </Swiper>
  )
}
