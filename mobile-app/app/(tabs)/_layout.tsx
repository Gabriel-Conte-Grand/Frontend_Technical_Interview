import { Tabs } from "expo-router"
import { Image, StyleSheet, Text } from "react-native"

export default function TabsLayout() {
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
