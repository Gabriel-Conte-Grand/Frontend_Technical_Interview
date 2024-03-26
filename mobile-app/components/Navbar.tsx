import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

export const Navbar = () => {
  return (
    <View style={styles.nav}>
      <View style={styles.navItem}>
        <Image
          source={require("../assets/homeIcon.png")}
          style={{ width: 25, height: 25 }}
        />

        <Text style={styles.text}>Home</Text>
      </View>
      <View style={styles.navItem}>
        <Image
          source={require("../assets/search.png")}
          style={{ width: 25, height: 25 }}
        />
        <Text style={styles.text}>Buscar</Text>
      </View>
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
