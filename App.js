import React, { useState } from "react";
import { View, Image } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Button from "./components/Button";
import tailwind from "twrnc";
import { StateProvider } from "./StateContext";
import StandsScreen from "./screens/stands";
import { AntDesign } from '@expo/vector-icons';

// Define custom theme
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#f97316",
    background: "#020617",
  },
};

// Stack navigator instance
const Stack = createNativeStackNavigator();

// Home screen component
const HomeScreen = ({ navigation }) => {
  return (
    <View style={tailwind.style("flex-1 items-center px-10")}>
      <Image
        style={tailwind.style("w-full h-74")}
        source={require('./assets/crescendo.png')}
        resizeMode="contain" // Adjusted here
      />
      <Button
        onPress={() => navigation.navigate("Stands")}
        bg={"red"}
        text={"l"}
        style={"px-24 "}
      >
        Stands
      </Button>
    </View>
  );
};

// App component
const App = () => {
  // State variables
  const [penalties, setPenalties] = useState(0);
  const [isChecked, setChecked] = useState(false);

  return (
    <NavigationContainer theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StateProvider value={{ penalties, setPenalties, isChecked, setChecked }}>
          <Stack.Navigator
            screenOptions={{
              headerShadowVisible: false,
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: "#020617",
                },
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
        </StateProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
