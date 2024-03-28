import { useState } from "react"
import { Dimensions, View, Image } from "react-native"
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import React from "react"
import {
  FirstHeader,
  FourthHeader,
  SecondHeader,
  Steps,
  ThirdHeader,
} from "../../../components"
import { SlideProps } from "../../../types"
import Slide from "../../../components/Slide"
import SuccessSlide from "../../../components/SuccessSlide"

export default function HomePage() {
  const [progress, setProgress] = useState(1)

  const { width, height } = Dimensions.get("window")

  const numberOfSlides = SlidersContents.length

  const carouselRef = React.useRef<ICarouselInstance>(null)

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#0A0A0A",
          flexGrow: 1,
          paddingTop: 16,
          display: "flex",
        }}
      >
        {progress !== numberOfSlides ? <Steps progress={progress} /> : null}
        <View style={{ flex: 1 }}>
          <Carousel
            loop
            width={width}
            enabled={false}
            data={SlidersContents}
            ref={carouselRef}
            scrollAnimationDuration={1000}
            renderItem={({ item, index }) => (
              <Slide
                itemProps={item}
                carouselRef={carouselRef}
                progress={progress}
                setProgress={setProgress}
                key={index}
              />
            )}
          />
        </View>
      </View>
    </GestureHandlerRootView>
  )
}

const SlidersContents: SlideProps[] = [
  {
    defaultSlide: {
      slideHeader: <FirstHeader />,
      slideImage: (
        <Image
          style={{
            marginTop: 20,
            width: "100%",
          }}
          resizeMode={"stretch"}
          source={require("../../../assets/primerSlide.png")}
        />
      ),
      buttonText: "Siguiente",
    },
  },
  {
    defaultSlide: {
      slideHeader: <SecondHeader />,
      slideImage: (
        <Image
          style={{
            marginTop: -20,
            width: "100%",
            height: "80%",
          }}
          resizeMode={"stretch"}
          source={require("../../../assets/secondSlide.png")}
        />
      ),
      buttonText: "Siguiente",
    },
  },
  {
    defaultSlide: {
      slideHeader: <ThirdHeader />,
      slideImage: (
        <Image
          style={{
            marginTop: 40,
          }}
          resizeMode={"contain"}
          source={require("../../../assets/iphone.png")}
        />
      ),
      buttonText: "Siguiente",
    },
  },
  {
    defaultSlide: {
      slideHeader: <FourthHeader />,
      slideImage: (
        <Image
          style={{
            marginTop: 40,
          }}
          resizeMode={"contain"}
          source={require("../../../assets/clubList.png")}
        />
      ),
      buttonText: "Finalizar",
      imageFooter: "Y MUCHOS MÁS INGRESANDO AL MERCADO",
    },
  },
  {
    successSlide: <SuccessSlide />,
  },
]
