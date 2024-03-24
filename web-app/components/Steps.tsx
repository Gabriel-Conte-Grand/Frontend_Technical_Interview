import React, { FC, useState } from "react"
import styles from "@/styles/Home.module.css"

type Props = {
  progress: number
  steps: number
}

export const Steps: FC<Props> = ({ progress, steps }) => {
  const [numberOfSteps, setnumberOfSteps] = useState(
    new Array(steps - 1).fill(undefined)
  ) // el ultimo slide no es un step

  return (
    <div className={styles.progressBar}>
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
