import React from 'react'
import { render } from '@testing-library/react-native'

import BottomDetails from '../../src/pages/details/UI/BottomDetails';
import SizeInfo from '../../src/pages/details/UI/SizeInfo';

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
})