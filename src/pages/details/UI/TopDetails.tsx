import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import addZeros from '../../../utils/addZeros';

type TopDetailsProps = {
  pokedexEntry: number;
  pokemonName: string;
  pokemonTypes:string[];
  pokemonImage: string;
  pokemonTypeColor: {
    main: string;
  }
}

const TopDetails: React.FC<TopDetailsProps> = ({ pokedexEntry, pokemonName, pokemonTypes, pokemonImage, pokemonTypeColor }) => {
  return (
    <View testID="top-details" style={[styles.container, { backgroundColor: pokemonTypeColor?.main }]}>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.entry} testID="pokedex-entry-number">
            {`#${addZeros(pokedexEntry)}`}
          </Text>
          <Text style={styles.pokemonName} testID="pokemon-name">
            {pokemonName}
          </Text>
        </View>

        <View style={styles.badgesWrapper}>
          {pokemonTypes?.map(type => <Text style={styles.badge} key={type} testID="pokemon-type">{type}</Text>)}
        </View>
      </View>

        <Image style={styles.pokemonImage} testID="pokemon-image" source={{ uri: pokemonImage }}/>
    </View>
  );
}

export default TopDetails;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 100
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  entry: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  pokemonName: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: 0,
    top: 35
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 20,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 2.5
  },
  badgesWrapper: {
    flexDirection: 'row',
    alignSelf: 'flex-start'
  }
});