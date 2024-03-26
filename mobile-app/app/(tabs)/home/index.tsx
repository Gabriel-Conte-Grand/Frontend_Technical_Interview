import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { Dimensions, Text, View } from "react-native"
import { Steps } from "../../../components"
import * as Carousel from "react-native-reanimated-carousel"

const { width, height } = Dimensions.get("window")

export default function HomePage() {
  const [progress, setProgress] = useState(1)

  const data = ["1", "2", "3"]

  return (
    <View
      style={{
        backgroundColor: "#0A0A0A",
        flexGrow: 1,
        paddingTop: 16,
        display: "flex",
        paddingHorizontal: 20,
      }}
    >
      {/* <StatusBar style='auto' /> */}
      <Steps progress={progress} />
      {/* <View style={{ flex: 1 }}>
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={data}
          scrollAnimationDuration={1000}
          onSnapToItem={() => console.log("current index:")}
          renderItem={({ index }) => (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: "center",
              }}
            >
              <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
            </View>
          )}
        />
      </View> */}
    </View>
  )
}
