import { observer } from 'mobx-react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export type SizeInfoProps = {
  weight: number;
  height: number;
  baseExperience: number;
}

const SizeInfo: React.FC<SizeInfoProps> = observer(({ weight, height, baseExperience }) => {
  return (
    <View style={styles.container} testID="size-info">
      <View>
        <Text style={styles.information} testID="height-info">{height ? `${height / 10}m`.replace('.', ',') : '?'}</Text>
        <Text>Height</Text>
      </View>
      <View>
        <Text style={styles.information} testID="weight">{weight ? `${weight / 10}kg` : '?'}</Text>
        <Text>Weight</Text>
      </View>
      <View>
        <Text style={styles.information} testID="base-experience-info">{baseExperience ? baseExperience : '?'}</Text>
        <Text>Base experience</Text>
      </View>
    </View>
  );
})

export default SizeInfo;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20
  },
  information: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 26,
    textAlign: 'center'
  },
  label: {
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
  }
})
