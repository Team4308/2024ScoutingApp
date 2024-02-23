import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Button from "./components/Button";
import tailwind from "twrnc";
import { useState } from "react";
import { StateProvider } from "./StateContext";
import StandsScreen from "./screens/stands";

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
  const [penalties, setPenalties] = useState(0);
  const [isChecked, setChecked] = useState(false);

  return (
    <NavigationContainer theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StateProvider
          value={{ penalties, setPenalties, isChecked, setChecked }}
        >
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
        </StateProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
