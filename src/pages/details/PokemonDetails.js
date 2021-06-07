import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { usePkmStore } from '../../mobx/pkmProvider';

const PokemonDetails = observer(({ route }) => {
  const { pokemon } = route.params;
  const { pkmStore } = usePkmStore();

  useLayoutEffect(() => {
    pkmStore.updatePokemonDetail(pokemon.name);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{`The pokemon selected is ${pkmStore.pokemonDetail?.name}`}</Text>
    </View>
  );
})

export default PokemonDetails;