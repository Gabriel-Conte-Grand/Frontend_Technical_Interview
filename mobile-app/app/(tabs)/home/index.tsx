import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { Dimensions, Text, View, Image, Button } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { useAnimatedRef } from "react-native-reanimated"
import React from "react"
import { Steps } from "../../../components"

import { useFonts } from "expo-font"

export default function HomePage() {
  const [progress, setProgress] = useState(1)

  const { width, height } = Dimensions.get("window")

  const [fontsLoaded] = useFonts({
    NunitoSans_Black: require("../../../assets/fonts/NunitoSans_Black.ttf"),
    NunitoSans_Bold: require("../../../assets/fonts/NunitoSans_Bold.ttf"),
    NunitoSans_ExtraBold: require("../../../assets/fonts/NunitoSans_ExtraBold.ttf"),
    IntegralCF_Medium: require("../../../assets/fonts/IntegralCF_Medium.ttf"),
  })
  const numberOfSteps = 5

  const carouselRef = React.useRef<ICarouselInstance>(null)

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <SafeAreaView
        style={{
          backgroundColor: "#0A0A0A",
          flexGrow: 1,
          paddingTop: 16,
          display: "flex",
          paddingHorizontal: 20,
        }}
      > */}

      <View
        style={{
          backgroundColor: "#0A0A0A",
          flexGrow: 1,
          paddingTop: 16,
          display: "flex",
          paddingHorizontal: 20,
        }}
      >
        <StatusBar style='auto' />
        <Steps progress={progress} />
        <View style={{ flex: 1 }}>
          <Carousel
            loop
            width={width}
            enabled={false}
            data={new Array(numberOfSteps).fill(undefined)}
            ref={carouselRef}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log("current index: " + index)}
            renderItem={({ index }) => (
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  flexGrow: 1,
                  // backgroundColor: "orangered",
                  display: "flex",
                  // justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    marginTop: 60,
                    gap: 8,
                    width: "90%",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      textTransform: "uppercase",
                      fontSize: 28,
                      fontFamily: "IntegralCF_Medium",
                    }}
                  >
                    Bienvenido a win
                  </Text>
                  <Text
                    style={{
                      color: "#64C883",
                      textAlign: "center",
                      textTransform: "uppercase",
                      fontSize: 18,
                      fontFamily: "NunitoSans_ExtraBold",
                    }}
                  >
                    EL ÚNICO MARKETPLACE DE FÚTBOL
                  </Text>
                  <Text
                    style={{
                      color: "#ffffff",
                      textAlign: "center",
                      textTransform: "uppercase",
                      fontSize: 14,
                      fontFamily: "NunitoSans_Bold",
                    }}
                  >
                    INVIERTE EN EL MERCADO DE PASES Y DISFRUTA DE EXPERIENCIAS
                    ÚNICAS
                  </Text>
                </View>
                {/* <Image
                  source={require("../../../assets/primerSlide.png")}
                  width={200}
                  height={200}
                /> */}
                {/* <PrimerSlide width={400} height={500} /> */}
                <Image
                  style={{
                    marginTop: 20,
                    // backgroundColor: "red",
                  }}
                  width={900}
                  height={900}
                  source={require("../../../assets/primerSlide.png")}
                />
                <Text
                  style={{
                    textAlign: "center",
                    width: "90%",
                    fontSize: 16,
                    color: "#64C883",
                    paddingVertical: 16,
                    backgroundColor: "transparent",
                    borderWidth: 2,
                    borderColor: "#64C883",
                    marginTop: -80,
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
                  SIGUIENTE
                </Text>
              </View>
            )}
          />
        </View>
      </View>

      {/* </SafeAreaView> */}
    </GestureHandlerRootView>
  )
}
