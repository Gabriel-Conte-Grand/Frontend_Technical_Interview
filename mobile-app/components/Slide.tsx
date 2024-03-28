import { View, Text, StyleSheet } from "react-native"
import React, { FC } from "react"
import { SlideProps } from "../types"
import { ICarouselInstance } from "react-native-reanimated-carousel"

export default function Slide({
  itemProps,
  carouselRef,
  progress,
  setProgress,
}: {
  itemProps: SlideProps
  carouselRef: React.MutableRefObject<ICarouselInstance>
  progress: number
  setProgress: React.Dispatch<React.SetStateAction<number>>
}) {
  const { defaultSlide, successSlide = false } = itemProps

  if (successSlide) {
    return successSlide
  } else {
    return (
      <View style={styles.containter}>
        {defaultSlide.slideHeader}

        {/* IMAGEN */}
        {defaultSlide.slideImage}

        {defaultSlide.imageFooter ? (
          <Text style={styles.footer}>{defaultSlide.imageFooter}</Text>
        ) : null}

        {defaultSlide.buttonText && (
          <Text
            style={styles.button}
            onPress={() => {
              setProgress(progress + 1)
              carouselRef.current.next()
            }}
          >
            {defaultSlide.buttonText}
          </Text>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    borderWidth: 1,
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  footer: {
    fontFamily: "NunitoSans_SemiBold",
    color: "#AAAAAA",
    marginTop: 24,
    fontSize: 12,
  },
  button: {
    position: "absolute",
    bottom: 40,
    textAlign: "center",
    width: "90%",
    fontSize: 16,
    color: "#64C883",
    paddingVertical: 16,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#64C883",
    textTransform: "uppercase",
    borderRadius: 8,
    fontFamily: "NunitoSans_Black",
  },
})
