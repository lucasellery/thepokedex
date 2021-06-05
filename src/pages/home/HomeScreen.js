import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';
import { Button } from '@somapay/storybook-somapay-mobile';

const LIMIT = 10;

let currentOffset = 0;

const HomeScreen = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    updatePokemonList();
  }, []);

  async function fetchPokemons(offset = 0) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`);
    const pokemonJson = await response.json();
    
    let pokemons = pokemonJson.results.map(async (pkm) => {
      const pokemonDetail = await getPokemonDetail(pkm.name);
      pkm.detail = pokemonDetail;
      return pkm;
    })

    pokemons = await Promise.all(pokemons);
    return pokemons;
  }

  async function getPokemonDetail(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const detail = await response.json();
    return detail;
  }

  async function updatePokemonList(offset) {
    const pokemonJson = await fetchPokemons(offset);
    setPokemons((oldList) => [...oldList, ...pokemonJson]);
  }

  function onGoToDetails() {
    navigation.navigate('Details', { pokemon });
  }

  function onReachEndList() {
    currentOffset += LIMIT;
    updatePokemonList(currentOffset);
  }

  function renderItem({ item, index }) {
    return (
      <View style={styles.pokemonItem}>
        <Text style={styles.itemText}>
          #{index + 1} {item.name}
        </Text>
        <Image
          resizeMode="contain"
          style={{ width: 80, height: 80 }}
          source={{ uri: item.detail.sprites.front_default }}
        />
      </View>
    )
  }

  return (
    <>
      <View style={styles.bgTop} />
      <View style={styles.bgBottom} />
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.name}
        renderItem={renderItem}
        onEndReached={onReachEndList}
      />
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  pokemonItem: {
    margin: 10,
    marginLeft: 0,
    marginRight: 20,
    backgroundColor: 'white',
    paddingLeft: 20,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  bgTop: {
    position: 'absolute',
    backgroundColor: 'black',
    top: 0,
    left: 0,
    width: '100%',
    height: '40%',
  },
  bgBottom: {
    position: 'absolute',
    backgroundColor: 'red',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    marginTop: '60%'
  }
})