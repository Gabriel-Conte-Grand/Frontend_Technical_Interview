import React, { FC, useState } from "react"
import { StyleSheet, View } from "react-native"

type Props = {
  progress: number
}

export const Steps: FC<Props> = ({ progress }) => {
  const [numberOfSteps, setnumberOfSteps] = useState(
    new Array(4).fill(undefined)
  ) // el ultimo slide no es un step

  return (
    <View style={styles.progressBar}>
      {numberOfSteps.map((step, idx) => {
        return (
          <View
            key={idx}
            style={[
              styles.progressItem,
              idx === progress - 1 && styles.activeStep,
            ]}
          ></View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  progressBar: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    // gap: 4,
  },
  progressItem: {
    paddingTop: 8,
    backgroundColor: "#aaaaaa",
    width: 82,
    borderRadius: 4,
  },
  activeStep: {
    backgroundColor: "#64C883",
  },
})
