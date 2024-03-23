import React, { FC, useState } from "react"
import styles from "@/styles/Home.module.css"

type Props = {
  progress: number
}

export const Steps: FC<Props> = ({ progress }) => {
  const [numberOfSteps, setnumberOfSteps] = useState(
    new Array(4).fill(undefined)
  )

  return (
    <div className={styles.progressBar}>
      {/* <span className={styles.progressItem}></span>
      <span className={styles.progressItem}></span>
      <span className={styles.progressItem}></span>
      <span className={styles.progressItem}></span> */}

      {numberOfSteps.map((step, idx) => {
        return (
          <span
            key={idx}
            className={`
         ${styles.progressItem}
          ${idx === progress - 1 && styles.activeStep}`}
          ></span>
        )
      })}
    </div>
  )
}
