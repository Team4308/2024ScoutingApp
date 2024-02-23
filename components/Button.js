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

const buttonWrapper =
  "flex flex-row justify-center items-center px-8 py-2.5 min-h-[36px] bg-slate-950 rounded-[10px]";

const textStyle = "text-sm font-medium text-white text-center";

export default function Button({ children, onPress, ...props }) {
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
            <Text style={tailwind.style(textStyle)}>{children}</Text>
          </Pressable>
        </GestureDetector>
      </Animated.View>
    </View>
  );
}
