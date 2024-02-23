import * as React from "react";
import { View, Text } from "react-native";
import Button from "../components/Button";
import tailwind from "twrnc";

export default function Stands() {
  const [penalties, setPenalties] = React.useState(0);

  return (
    <View style={tailwind.style("flex-1 items-center justify-center")}>
      <View style={tailwind.style("flex-col items-center gap-y-8 px-12")}>
        <Text style={tailwind.style("text-2xl text-center font-bold")}>
          Penalties
        </Text>
        <View
          style={tailwind.style(
            "flex flex-row items-center justify-center gap-x-4 bg-slate-100 p-2 rounded-lg"
          )}
        >
          <Button
            onPress={() => {
              setPenalties(penalties - 1);
            }}
          >
            -
          </Button>
          <View style={tailwind.style("w-16")}>
            <Text style={tailwind.style("text-2xl text-center px-4")}>
              {penalties}
            </Text>
          </View>
          <Button
            onPress={() => {
              setPenalties(penalties + 1);
            }}
          >
            +
          </Button>
        </View>
      </View>
    </View>
  );
}
