import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../pages/home';
import { PokemonDetails } from '../../pages/details';
import { PkmProvider } from '../../mobx/pkmProvider';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <PkmProvider>
      <Stack.Navigator screenOptions={{
        headerTitle: 'Pokédex',
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTitleStyle: {
          color: 'white',
          fontWeight: 'bold'
        }
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={PokemonDetails} />
      </Stack.Navigator>
    </PkmProvider>
  );
}

export default AppNavigator;