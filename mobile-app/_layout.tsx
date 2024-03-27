import { useFonts } from "expo-font"
import { Stack } from "expo-router"

const StackLayout = () => {
  const [fontsLoaded] = useFonts({
    NunitoSans_Black: require("./assets/fonts/NunitoSans_Black.ttf"),
    NunitoSans_Bold: require("./assets/fonts/NunitoSans_Bold.ttf"),
    NunitoSans_ExtraBold: require("./assets/fonts/NunitoSans_ExtraBold.ttf"),
    IntegralCF_Medium: require("./assets/fonts/IntegralCF_Medium.ttf"),
  })

  return (
    <Stack>
      <Stack.Screen name='(tabs)' />
    </Stack>
  )
}
