import React from "react"
import { View, Text, StyleSheet } from "react-native"

export const FirstHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Bienvenido a win</Text>
      <Text style={styles.text}>EL ÚNICO MARKETPLACE DE FÚTBOL</Text>
      <Text style={styles.text}>
        INVIERTE EN EL MERCADO DE PASES Y DISFRUTA DE EXPERIENCIAS ÚNICAS
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    display: "flex",
    gap: 8,
    textAlign: "center",
    marginTop: 8,
  },
  header: {
    marginTop: 80,
  },
})
