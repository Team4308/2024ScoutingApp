import * as React from "react";
import * as Haptics from "expo-haptics";
import { View, Text, Pressable } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import tailwind from "twrnc";

const colors = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  gray: "bg-gray-500",
  sky: "bg-sky-500",
  teal: "bg-teal-500",
  emerald: "bg-emerald-500",
  white: "bg-white",
}

const texts = {
  "sm": "text-sm",
  "md": "text-md",
  "lg": "text-lg",
  "xl": "text-xl px-6",
  "2xl": "text-2xl px-8",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
}

export default function Button({ children, onPress, style, textStyle, bg, text }) {

  const bgColor = colors[bg] || colors.blue;
  const textSize = texts[text] || texts.md;

  const buttonWrapper = `flex rounded-full flex-row justify-center items-center px-8 py-2.5 min-h-[36px] ${style} ${bgColor}`;

  const textWrapper = `text-sm font-medium text-white text-center ${textStyle} ${textSize} ${bg == "white" ? "text-black" : ""}`;

  const scaleDownAnimation = useSharedValue(1);
  const scaleHandler = Gesture.Tap()
    .onBegin(() => {
      "worklet";
      scaleDownAnimation.value = withSpring(0.95);
    })
    .onFinalize(() => {
      "worklet";
      scaleDownAnimation.value = withSpring(1);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleDownAnimation.value }],
  }));

  return (
    <View style={tailwind.style("flex items-center justify-center")}>
      <Animated.View style={animatedStyle}>
        <GestureDetector gesture={scaleHandler}>
          <Pressable
            style={tailwind.style(buttonWrapper)}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              onPress && onPress(); // Call the onPress prop if it exists
            }}
          >
            <Text style={tailwind.style(textWrapper)}>{children}</Text>
          </Pressable>
        </GestureDetector>
      </Animated.View>
    </View>
  );
}
