import React, { useContext } from "react";
import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";
import Button from "../components/Button";
import StateContext from "../StateContext";
import tailwind from "twrnc";

export default function Stands() {
  const { penalties, setPenalties, isChecked, setChecked } =
    useContext(StateContext);

  return (
    <View style={tailwind.style("flex-1 items-center pt-8")}>
      <View style={tailwind.style("flex-col items-center gap-y-8 px-12")}>
        <View style={tailwind.style("flex flex-row gap-8")}>
          <Text style={tailwind.style("text-center font-medium")}>Match #</Text>
          <View style={tailwind.style("flex flex-row gap-2")}>
            <Checkbox value={isChecked} onValueChange={setChecked} />
            <Text style={tailwind.style("text-center font-medium")}>
              Playoffs
            </Text>
          </View>
        </View>
        <Text style={tailwind.style("text-xl text-center font-bold")}>
          Penalties
        </Text>
        <View style={tailwind.style("flex items-start justify-start gap-2")}>
          <View
            style={tailwind.style(
              "flex flex-row items-center justify-center gap-x-4 bg-slate-100 p-2 rounded-lg"
            )}
          >
            <Button
              onPress={() => {
                penalties > 0 ? setPenalties(penalties - 1) : null;
              }}
            >
              -
            </Button>
            <View style={tailwind.style("w-20")}>
              <Text
                style={tailwind.style("text-2xl font-medium text-center px-4")}
              >
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
          <Button
            onPress={() => {
              setPenalties(0);
            }}
            style={"px-4 py-2"}
            textStyle={"text-xs"}
          >
            RESET
          </Button>
        </View>
      </View>
    </View>
  );
}
