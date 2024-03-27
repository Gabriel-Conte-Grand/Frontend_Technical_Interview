import { View, Text } from "react-native"
import React, { FC } from "react"
import { SlideProps } from "../types"
import { useFonts } from "expo-font"
import { ICarouselInstance } from "react-native-reanimated-carousel"

export default function Slide({
  // slideHeader,
  // slideImage,
  // buttonText,
  // imageFooter,
  // isImageUp = false,
  itemProps,
  index,
  carouselRef,
  progress,
  setProgress,
}: {
  itemProps: SlideProps
  index: number
  carouselRef: React.MutableRefObject<ICarouselInstance>
  progress: number
  setProgress: React.Dispatch<React.SetStateAction<number>>
}) {
  const { slideHeader, slideImage, buttonText, imageFooter, isImageUp } =
    itemProps

  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        flexGrow: 1,
        display: "flex",
        // backgroundColor: "green",
        alignItems: "center",
      }}
    >
      {slideHeader}

      {/* IMAGEN */}
      {slideImage}
      {imageFooter ? imageFooter : null}

      <Text
        style={{
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
          // marginTop: -80,
          borderRadius: 8,
          fontFamily: "NunitoSans_Black",
        }}
        onPress={() => {
          carouselRef.current.next()
          if (progress === 4) {
            setProgress(1)
          } else {
            setProgress(progress + 1)
          }
        }}
      >
        {buttonText}
      </Text>
    </View>
  )
}
