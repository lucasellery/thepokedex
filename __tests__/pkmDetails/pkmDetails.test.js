import React from 'react'
import { render } from '@testing-library/react-native' 
import TopDetails from '../../src/pages/details/UI/TopDetails';

describe('Pokemon details test', () => {
  
  it('Should render TopDetails correctly', () => {
    const { queryByTestId } = render(<TopDetails />)
    const component = queryByTestId('top-details')
    expect(component).toBeTruthy()
  })

  it('should has a pkm pokedex position', () => {
    const { queryByTestId } = render(<TopDetails pokedexEntry={25} />)
    const component = queryByTestId('pokedex-entry-number')
    expect(component.props.children).toBe('#025')
  })

  it('should render pkm name', () => {
    const pokemonName = 'pikachu'

    const { queryByTestId } = render(<TopDetails pokemonName={pokemonName} />)
    const component = queryByTestId('pokemon-name')
    expect(component.props.children).toBe(pokemonName)
  })

  it('should render pkm type badge', () => {
    const pokemonTypes = ['electric', 'normal']

    const { queryAllByTestId } = render(<TopDetails pokemonTypes={pokemonTypes} />)
    const components = queryAllByTestId('pokemon-type')
    
    expect(components.length).toEqual(pokemonTypes.length);

    components.forEach((component, index) => {
      expect(component.props.children).toBe(pokemonTypes[index])
    })
  })

  it('should render pkm image', () => {
    const url = 'url'

    const { queryByTestId } = render(<TopDetails pokemonImage={url} />)
    const component = queryByTestId('pokemon-image')
    expect(component.props.source.uri).toBe(url);
  })

  it('should has a background color prop', () => {
    const pokemonTypeColor = {main: '#1234'};

    const { queryByTestId } = render(<TopDetails pokemonTypeColor={pokemonTypeColor} />)
    const component = queryByTestId('top-details')
    expect(component.props.style[1].backgroundColor).toBe(pokemonTypeColor?.main);
  })

  it('should match snapshot <TopDetails />', () => {
    const pokemonName = 'pikachu'
    const pokedexEntry = 32
    const pokemonTypes = ['electric', 'normal']
    const url = 'url'

    const component = render(<TopDetails 
      pokemonImage={url}
      pokemonName={pokemonName} 
      pokemonTypes={pokemonTypes} 
      pokedexEntry={pokedexEntry} />).toJSON()
    expect(component).toMatchSnapshot()
  })
});