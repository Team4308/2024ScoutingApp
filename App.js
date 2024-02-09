import * as React from "react";
import { View, Text, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StandsScreen from "./screens/stands";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Pressable
        className="bg-orange-500 active:bg-orange-600 rounded-md text-sm h-10 px-4 py-2 inline-flex items-center justify-center"
        onPress={() => navigation.navigate("Stands")}
      >
        <Text className="text-white">Go to Stands</Text>
      </Pressable>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Stands" component={StandsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
