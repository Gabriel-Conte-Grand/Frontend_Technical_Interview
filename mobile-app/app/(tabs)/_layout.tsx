import { useFonts } from "expo-font"
import { Tabs } from "expo-router"
import { Image, StyleSheet, Text } from "react-native"

export default function TabsLayout() {
  const [fontsLoaded] = useFonts({
    IntegralCF_Medium: require("../../assets/fonts/IntegralCF_Medium.ttf"),
    NunitoSans_Black: require("../../assets/fonts/NunitoSans_Black.ttf"),
    NunitoSans_ExtraBold: require("../../assets/fonts/NunitoSans_ExtraBold.ttf"),
    NunitoSans_Bold: require("../../assets/fonts/NunitoSans_Bold.ttf"),
    NunitoSans_SemiBold: require("../../assets/fonts/NunitoSans_SemiBold.ttf"),
    NunitoSans_Regular: require("../../assets/fonts/NunitoSans_Regular.ttf"),
  })

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 68,
          backgroundColor: "black",
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          tabBarActiveTintColor: "#64C883",
          tabBarItemStyle: styles.tabItem,
          tabBarLabelStyle: styles.label,
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/homeIcon.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          tabBarActiveTintColor: "#64C883",
          tabBarItemStyle: styles.tabItem,
          tabBarLabelStyle: styles.label,
          tabBarLabel: "Search",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/search.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  nav: {},
  tabItem: {
    display: "flex",
    gap: -4,
    marginBottom: 4,
    marginTop: 4,
  },
  label: {
    fontSize: 12,
  },
})
