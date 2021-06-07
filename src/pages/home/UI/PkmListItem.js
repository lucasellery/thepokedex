import { observer } from 'mobx-react';
import React, { useCallback } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import addZeros from '../../../utils/addZeros';

const Item = observer(({ item, index }) => {

  const addZerosCb = useCallback(() => {
    const number = `${index + 1}`;
    return addZeros(number);
  }, [index]);

  return (
    <View style={styles.pokemonItem}>
      <Text style={styles.itemText}>
        #{addZerosCb()} {item.name}
      </Text>
      <Image
        resizeMode="contain"
        style={styles.pkmLogo}
        source={{ uri: item.image }}
      />
    </View>
  );
})

const PkmListItem = ({ item, index }) => <Item item={item} index={index} />

export default PkmListItem;

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
  pkmLogo: {
    width: 80, 
    height: 80
  }
});
