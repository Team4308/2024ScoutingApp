import * as React from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StandsScreen from "./screens/stands";
import Button from "./components/Button";
import tailwind from "twrnc";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#f97316",
    background: "white",
  },
};

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={tailwind.style("flex-1 items-center justify-center")}>
      <Button
        onPress={() => {
          navigation.navigate("Stands");
        }}
      >
        Go to Stands
      </Button>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack.Navigator
          screenOptions={{
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerLargeTitle: true,
              headerTitle: "Scouting",
            }}
          />
          <Stack.Screen
            name="Stands"
            component={StandsScreen}
            options={{
              headerShown: true,
              headerLargeTitle: true,
            }}
          />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
