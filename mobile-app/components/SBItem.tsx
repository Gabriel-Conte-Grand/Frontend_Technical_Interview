// import React from "react"
// import {
//   type StyleProp,
//   type ViewStyle,
//   type ViewProps,
//   type ImageSourcePropType,
//   Animated,
//   View,
//   Text,
//   StyleSheet,
// } from "react-native"
// import { LongPressGestureHandler } from "react-native-gesture-handler"

// // import { AnimateProps } from "react-native-reanimated"
// import Constants from "expo-constants"
// import { SBImageItem } from "./SBImageItem"

// interface Props extends AnimateProps<ViewProps> {
//   style?: StyleProp<ViewStyle>
//   index?: number
//   pretty?: boolean
//   showIndex?: boolean
//   img?: ImageSourcePropType
// }

// export const SBItem: React.FC<Props> = (props) => {
//   const {
//     style,
//     showIndex = true,
//     index,
//     pretty,
//     img,
//     testID,
//     ...animatedViewProps
//   } = props
//   const enablePretty = Constants?.expoConfig?.extra?.enablePretty || false
//   const [isPretty, setIsPretty] = React.useState(pretty || enablePretty)
//   return (
//     <LongPressGestureHandler
//       onActivated={() => {
//         setIsPretty(!isPretty)
//       }}
//     >
//       <Animated.View testID={testID} style={{ flex: 1 }} {...animatedViewProps}>
//         {isPretty || img ? (
//           <SBImageItem
//             style={style}
//             index={index}
//             showIndex={typeof index === "number" && showIndex}
//             img={img}
//           />
//         ) : (
//           <SBTextItem style={style} index={index} />
//         )}
//       </Animated.View>
//     </LongPressGestureHandler>
//   )
// }

// interface Props {
//   style?: StyleProp<ViewStyle>
//   index?: number
// }

// export const SBTextItem: React.FC<Props> = ({ style, index }) => {
//   return (
//     <View style={[styles.container, style]}>
//       {typeof index === "number" && (
//         <Text style={{ fontSize: 30, color: "black" }}>{index}</Text>
//       )}
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "red",
//   },
// })
