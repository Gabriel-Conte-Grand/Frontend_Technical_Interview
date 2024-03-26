import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { Redirect } from "expo-router"

export default function App() {
  const [progress, setProgress] = useState(1)

  return <Redirect href={"/(tabs)/home"} />
}
