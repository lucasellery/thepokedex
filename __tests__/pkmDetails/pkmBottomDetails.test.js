import React from 'react'
import { render } from '@testing-library/react-native'

import BottomDetails from '../../src/pages/details/UI/BottomDetails';
import SizeInfo from '../../src/pages/details/UI/SizeInfo';
import Abilities from '../../src/pages/details/UI/Abilities';
import { toCaptalize } from '../../src/utils/toCaptalize';

describe("Pkm Details Bottom Tests", () => {
    
	it('Should render bottom correcly', () => {
		const { queryByTestId } = render(<BottomDetails />)
		const component = queryByTestId('bottom-details')
		expect(component).toBeTruthy()
	})

	it('Should render SizeInfo correctly', () => {
		const { queryByTestId } = render(<SizeInfo />)
		const component = queryByTestId('size-info')
		expect(component).toBeTruthy()
	})

	it('Should render SizeInfo weight correcly', () => {
		const weight = 60

		const { queryByTestId } = render(<SizeInfo weight={weight} />)
		const component = queryByTestId('weight')
		expect(component.props.children).toBe('6kg')
	})

	it('should render SizeInfo height correctly', async ()=> {
		const height = 70

		const { queryByTestId } = render(<SizeInfo height={height} />)
		const heightProp = queryByTestId('height-info')
		expect(heightProp.props.children).toBe('7m')
	})

	it('should render SizeInfo height correctly', async () => {
		const baseExperience = 112

		const { queryByTestId } = render(<SizeInfo baseExperience={baseExperience} />)
		const baseXpProp = queryByTestId('base-experience-info')
		expect(baseXpProp.props.children).toBe(baseExperience)
	})

	it('should match snapshot <SizeInfo />', () => {
    const weight = 60
    const height = 70
    const baseExpericence = 112
    const component = render(
      <SizeInfo
        baseExpericence={baseExpericence}
        height={height}
        weight={weight} />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })

	// Abilities

	it('should render Abilities correctly', async () => {
		const { queryByTestId } = render(<Abilities />)
		const component = queryByTestId('abilities-component')
		expect(component).toBeTruthy()
	})

	it('should render an array of abilities', () => {
		const abilities = [
			{
				ability: {
					name: 'static'
				}
			},
			{
				ability: {
					name: 'poison pin'
				}
			},
		]

		const { queryAllByTestId } = render(<Abilities abilities={abilities} />)
		const componentArray = queryAllByTestId('ability')
		expect(componentArray.length).toBeGreaterThan(0)

		componentArray.forEach((comp, index) => {
			expect(comp.props.children).toBe(toCaptalize(abilities[index].ability.name))
		})

	})


})