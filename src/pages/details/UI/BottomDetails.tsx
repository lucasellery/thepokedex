import React from 'react'
import { View } from 'react-native';
import SizeInfo, { SizeInfoProps } from './SizeInfo';
import { usePkmStore } from '../../../mobx/pkmProvider';
import { observer } from 'mobx-react';
// import Ability from './'

type BottomDetailsProsp = {
  sizeInfo: SizeInfoProps;
  // abilities: Ability[];
}

const BottomDetails: React.FC<BottomDetailsProsp> = observer(({ sizeInfo }) => {
  return (
    <View testID="bottom-details">
      <SizeInfo weight={sizeInfo?.weight} height={sizeInfo?.height} baseExperience={sizeInfo?.baseExperience} />
    </View>
  );
})

export default BottomDetails;