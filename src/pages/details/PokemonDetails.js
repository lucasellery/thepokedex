import React from 'react';
import { View, Text } from 'react-native';

const PokemonDetails = ({ route }) => {
  const { pokemon } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{`The pokemon selected is ${pokemon.name}`}</Text>
    </View>
  );
}

export default PokemonDetails;