import React, { useEffect, useLayoutEffect, useState } from "react"
import styles from "@/styles/Home.module.css"
import { motion } from "framer-motion"

export const FirstSlideHeader = () => {
  return (
    <div className={styles.slideHeader}>
      <h1>BIENVENIDO A WIN</h1>
      <h4 className={styles.greenText}>EL ÚNICO MARKETPLACE DE FÚTBOL</h4>
      <p>INVIERTE EN EL MERCADO DE PASES Y DISFRUTA DE EXPERIENCIAS ÚNICAS</p>
    </div>
  )
}

export const SecondSlideHeader = () => {
  return (
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
  )
}

export const ThirdSlideHeader = () => {
  return (
    <div className={styles.slideHeader}>
      <h1>VIVE TUS PROPIAS EXPERIENCIAS</h1>
      <h4></h4>
      <h4>
        <span className={styles.greenText}> VIVE TU PASIÓN DE FORMA ÚNICA</span>{" "}
        COMO NUNCA LO IMAGINASTE
      </h4>
    </div>
  )
}

export const FourthSlideHeader = () => {
  return (
    <div className={styles.slideHeader}>
      <h1>DESCUBRE LOS MEJORES CLUBES</h1>
    </div>
  )
}

export const SuccessHeader = () => {
  const [animate, setAnimate] = useState(false)

  useLayoutEffect(() => {
    setAnimate(true)

    return () => {
      setAnimate(false)
    }
  }, [])

  return (
    <div className={styles.successContainer}>
      <div className={styles.successMsg}>
        {/* SVG ANIMADO */}
        <svg
          width='151'
          height='108'
          viewBox='0 0 151 108'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.path
            d='M118.888 65.3577C118.888 68.4812 114.454 71.0702 113.783 73.9947C113.091 77.0134 115.953 81.269 114.643 83.9943C113.301 86.7615 108.186 87.1703 106.289 89.5496C104.381 91.9395 105.115 97.0232 102.725 98.9308C100.346 100.828 95.5554 98.9937 92.7882 100.325C90.0629 101.635 88.5221 106.541 85.5033 107.232C82.5789 107.893 79.078 104.161 75.9439 104.161C72.8099 104.161 69.3089 107.893 66.3845 107.232C63.3658 106.541 61.8249 101.646 59.0997 100.325C56.3325 98.9833 51.5423 100.828 49.1629 98.9308C46.7731 97.0232 47.5068 91.9395 45.5991 89.5496C43.7019 87.1703 38.5763 86.7615 37.2451 83.9943C35.9349 81.269 38.786 77.0134 38.1046 73.9947C37.4443 71.0702 33 68.4812 33 65.3577C33 62.2341 37.4338 59.6451 38.1046 56.7206C38.7964 53.7019 35.9349 49.4463 37.2451 46.721C38.5868 43.9538 43.7019 43.545 45.5991 41.1657C47.5068 38.7758 46.7731 33.6921 49.1629 31.7845C51.5423 29.8873 56.3325 31.7216 59.0997 30.3904C61.8249 29.0802 63.3658 24.1747 66.3845 23.4829C69.3089 22.8225 72.8099 26.5541 75.9439 26.5541C79.078 26.5541 82.5789 22.8225 85.5033 23.4829C88.5221 24.1747 90.0629 29.0697 92.7882 30.3904C95.5554 31.7321 100.346 29.8873 102.725 31.7845C105.115 33.6921 104.381 38.7758 106.289 41.1657C108.186 43.545 113.312 43.9538 114.643 46.721C115.953 49.4463 113.102 53.7019 113.783 56.7206C114.454 59.6451 118.888 62.2236 118.888 65.3577Z'
            fill='#64C883'
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.2,
                type: "just",
              },
            }}
          />
          <motion.path
            d='M71.8067 78.3102C70.769 78.3102 69.7732 77.87 69.0709 77.0943L59.8889 66.8956C58.956 65.8579 59.0399 64.2646 60.0776 63.3317C61.1152 62.3989 62.7085 62.4827 63.6414 63.5204L71.7648 72.5557L88.1583 53.3426C89.0597 52.2839 90.6634 52.1581 91.7221 53.0596C92.7808 53.961 92.9065 55.5647 92.0051 56.6234L74.5948 77.0315C73.903 77.8386 72.9073 78.3102 71.8486 78.3207C71.8381 78.3102 71.8276 78.3102 71.8067 78.3102Z'
            fill='white'
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 2,
                type: "spring",
                stiffness: 500,
                damping: 10,
              },
            }}
          />
          <svg
            width='151'
            height='46'
            viewBox='0 0 151 46'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M110.385 8.29168C116.811 7.4183 117.519 6.70929 118.392 0.284668C119.267 6.70929 119.976 7.4183 126.4 8.29168C119.976 9.16595 119.267 9.87407 118.392 16.2996C117.519 9.87407 116.811 9.16595 110.385 8.29168Z'
              fill='#64C883'
            />
            <path
              d='M120.686 23.4609C132.849 21.8077 134.189 20.4657 135.842 8.30479C137.497 20.4657 138.839 21.8077 151 23.4609C138.839 25.1158 137.497 26.4562 135.842 38.6187C134.189 26.4562 132.849 25.1158 120.686 23.4609Z'
              fill='#64C883'
            />
            <path
              d='M30.3136 23.1758C21.5933 24.3611 20.6322 25.3233 19.4469 34.0424C18.2604 25.3233 17.2982 24.3611 8.57908 23.1758C17.2982 21.9892 18.2604 21.0282 19.4469 12.3079C20.6322 21.0282 21.5933 21.9892 30.3136 23.1758Z'
              fill='#64C883'
            />
            <path
              d='M5.71955 34.0424C6.34339 38.6321 6.84983 39.1379 11.4388 39.7617C6.84983 40.3862 6.34339 40.8926 5.71955 45.4816C5.09507 40.8926 4.58927 40.3862 -0.000380766 39.7617C4.58927 39.1379 5.09507 38.6321 5.71955 34.0424Z'
              fill='#64C883'
            />
          </svg>
        </svg>

        <div className={styles.successTitle}>
          <h1>¡felicitaciones!</h1>
          <h4>Bienvenido a WIN</h4>
        </div>
        <p>Ya puedes ser parte del mundo del deporte</p>
      </div>
    </div>
  )
}
