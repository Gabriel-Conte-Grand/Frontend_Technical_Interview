import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Alert,
} from "react-native"
import Constants from "expo-constants"
import { Navbar, Steps } from "./src/components"

export default function App() {
  const [progress, setProgress] = useState(1)

  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        backgroundColor: "#0A0A0A",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: 20,
      }}
    >
      <Steps progress={progress} />
      {/* <TouchableWithoutFeedback onPress={() => Alert.alert("Tocaste el")}>
        <Text>Hola Mundoasadadd</Text>
      </TouchableWithoutFeedback> */}
      <StatusBar style='auto' />

      <Navbar />
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: "black",
    color: "#ffffff",

    display: "flex",
    flexDirection: "row",
    gap: 24,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#585858",
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
  },
})
