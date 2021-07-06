import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { toCaptalize } from "../../../utils/toCaptalize";

export type StatsRowProps = {
  label: string;
  value: number;
  pokemonTypeColor: {
    main: string;
  }
}

const REFERENCE_VALUE = 255
const MAX_PERCENTAGE = 100

const StatsRow: React.FC<StatsRowProps> = ({ label, value, pokemonTypeColor }) => {
  
  const lowerPercentage = (value / REFERENCE_VALUE) * MAX_PERCENTAGE
  const higherPercentage = MAX_PERCENTAGE - lowerPercentage
  
  return (
    <View style={styles.wrapper} testID="stats-row">
      <View>
        <View style={styles.labelWrapper}>
          <Text style={styles.label} testID="stats-label">
            {toCaptalize(label)}
          </Text>
        </View>

        <View style={styles.powerWrapper}>
          <View style={[styles.powerRowLeft, { width: `${lowerPercentage}`, backgroundColor: pokemonTypeColor?.main }]} />
          <View />
        </View>
      </View>

      <View style={styles.valueWrapper}>
        <Text style={styles.label} testID="stats-value">
          {value}
        </Text>
      </View>
    </View>
  );
};

export default StatsRow;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    alignItems: 'flex-end'
  },
  labelWrapper: {
    marginBottom: 5
  },
  label: {
    fontSize: 16
  },
  powerWrapper: {
    flexDirection: 'row'
  },
  valueWrapper: {
    alignItems: 'flex-end'
  },
  powerRowLeft: {
    padding: 8,
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: -20,
    zIndex: 1
  }
})
