import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native';
import SizeInfo, { SizeInfoProps } from './SizeInfo';
import { usePkmStore } from '../../../mobx/pkmProvider';
import { observer } from 'mobx-react';
import Abilities, { Ability } from './Abilities';
import Stats from './Stats';

type BottomDetailsProps = {
  sizeInfo: SizeInfoProps
  abilities: Ability[]
  pokemonTypeColor: {
    main: string
  }
  stats: Array<{
    base_stat: number,
    stat: {
      name: string
    }
  }>
}

const BottomDetails: React.FC<BottomDetailsProps> = ({ sizeInfo, abilities, stats, pokemonTypeColor }) => {
  return (
    <View testID="bottom-details" style={styles.wrapper}>
      <SizeInfo weight={sizeInfo?.weight} height={sizeInfo?.height} baseExperience={sizeInfo?.baseExperience} />
      <Abilities abilities={abilities} />
      <Stats pokemonTypeColor={pokemonTypeColor} stats={stats} />
    </View>
  );
}

export default BottomDetails;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius:30,
    marginTop: -30
  }
})
