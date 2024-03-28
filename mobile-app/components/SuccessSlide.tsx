import { View, Text, Image, StyleSheet } from "react-native"
import React from "react"

export default function SuccessSlide() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/successIcon.png")} resizeMode='cover' />
      <View style={{ gap: 16, alignItems: "center" }}>
        <Text style={styles.title}>¡felicitaciones!</Text>
        <Text style={styles.subtitle}>Bienvenido a WIN</Text>
      </View>
      <Text
        style={{
          ...styles.subtitle,
          fontSize: 16,
        }}
      >
        Ya puedes ser parte del mundo del deporte
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#F3F3F4",
    gap: 24,
    height: "100%",
  },
  title: {
    fontFamily: "IntegralCF_Medium",
    fontSize: 24,
    color: "#64C883",
  },
  subtitle: {
    color: "#F3F3F4",
    fontFamily: "NunitoSans_Bold",
    fontSize: 18,
  },
})
