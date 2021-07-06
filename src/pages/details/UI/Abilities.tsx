import React from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { toCaptalize } from "../../../utils/toCaptalize";

export type Ability = {
  ability: {
    name: string;
  };
};

export type AbilityProps = {
  abilities: Ability[];
};

const Abilities: React.FC<AbilityProps> = ({ abilities }) => {
  useEffect(() => {
    abilities?.map(({ ability }) => {
      console.log(toCaptalize(ability?.name))
    });
  }, [])

  return (
    <View style={styles.container} testID="abilities-component">
      <Text style={styles.title}>Abilities</Text>

      <View style={styles.wrapper}>
        {abilities?.map(({ ability }) => (
          <Text style={styles.ability} key={ability?.name} testID="ability">
            {toCaptalize(ability?.name)}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Abilities;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  wrapper: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  ability: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#F7F7F7",
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    marginHorizontal: 5,
  },
});
