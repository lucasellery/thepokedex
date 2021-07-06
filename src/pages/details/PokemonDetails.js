import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { usePkmStore } from '../../mobx/pkmProvider';
import { Container, Content } from '@somapay/storybook-somapay-mobile';
import TopDetails from './UI/TopDetails';
import { colorTypes } from '../../utils/pkmTypesColor';
import BottomDetails from './UI/BottomDetails';

const DEFAULT_COLOR = 'red';

const PokemonDetails = observer(({ route, navigation }) => {
  const { pokemon } = route.params;
  const { pkmStore } = usePkmStore();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: colorTypes[pkmStore.pokemonDetail?.types?.[0]?.type?.name]?.main || DEFAULT_COLOR,
        elevation: 0,
        shadowOpacity: 0
      },
    })
  }, [navigation, pkmStore.pokemonDetail?.types]);

  useLayoutEffect(() => {
    pkmStore.updatePokemonDetail(pokemon.name)
  }, []);

  const types = pkmStore?.pokemonDetail?.types?.map(({ type }) => type.name);

  return (
    <Container>
      <Content>
        <TopDetails
          pokemonImage={pokemon.image}
          pokedexEntry={pkmStore.pokemonDetail.order}
          pokemonName={pokemon.name}
          pokemonTypeColor={colorTypes[pkmStore.pokemonDetail?.types?.[0]?.type?.name]}
          pokemonTypes={types}
        />
        <BottomDetails
          sizeInfo={{
            baseExperience: pkmStore.pokemonDetail.base_experience,
            weight: pkmStore.pokemonDetail.weight,
            height: pkmStore.pokemonDetail.height,
          }}
          abilites={pkmStore?.pokemonDetail?.abilities}
          pokemonTypeColor={colorTypes[pkmStore.pokemonDetail?.types?.[0]?.type?.name]}
          stats={pkmStore?.pokemonDetail?.stats}
        />
      </Content>
    </Container>
  );
})

export default PokemonDetails;