import React from "react"
import { View, Text, StyleSheet } from "react-native"

export const FirstHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Bienvenido a win</Text>
      <Text style={styles.subtitle}>EL ÚNICO MARKETPLACE DE FÚTBOL</Text>
      <Text style={styles.text}>
        INVIERTE EN EL MERCADO DE PASES Y DISFRUTA DE EXPERIENCIAS ÚNICAS
      </Text>
    </View>
  )
}

export const SecondHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Ingresa al mercado de pases</Text>
      {/* <Text style={styles.subtitle}></Text> */}
      <Text style={styles.text}>
        INVIERTE Y GANA CON LA PRÓXIMA{" "}
        <Text style={styles.goldenText}>TRANSFERENCIA DEL JUGADOR</Text>
      </Text>
    </View>
  )
}

export const ThirdHeader = () => {
  return (
    <View style={{ ...styles.header, gap: 16 }}>
      <Text style={styles.title}>VIVE TUS PROPIAS EXPERIENCIAS</Text>
      {/* <Text style={styles.subtitle}> </Text> */}
      <Text
        style={{
          fontFamily: "NunitoSans_ExtraBold",
          textAlign: "center",
          textTransform: "uppercase",
          fontSize: 18,
          color: "#64C883",
        }}
      >
        Vive Tu pasión de forma única{" "}
        <Text style={{ fontFamily: "NunitoSans_Bold", color: "white" }}>
          COMO NUNCA LO IMAGINASTE
        </Text>
      </Text>
    </View>
  )
}

export const FourthHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Descubre los mejores clubes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    marginTop: 60,
    gap: 8,
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 28,
    fontFamily: "IntegralCF_Medium",
    letterSpacing: 1,
  },
  subtitle: {
    color: "#64C883",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 18,
    fontFamily: "NunitoSans_ExtraBold",
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 14,
    fontFamily: "NunitoSans_Bold",
  },
  goldenText: {
    color: "#C9A555",
    fontFamily: "NunitoSans_ExtraBold",
  },
  grenText: {
    color: "#64C883",
    fontFamily: "NunitoSans_ExtraBold",
  },
})
