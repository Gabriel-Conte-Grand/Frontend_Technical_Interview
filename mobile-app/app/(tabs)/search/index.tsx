import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { Stack } from "expo-router"

export default function SearchPage() {
  const [progress, setProgress] = useState(1)

  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Search" }} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View>
          <Text style={{ color: "green" }}>Search Page</Text>
        </View>
        <StatusBar style='auto' />
      </View>
    </>
  )
}
