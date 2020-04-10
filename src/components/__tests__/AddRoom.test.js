import React from 'react'
import { createStore } from 'redux'
import { render, fireEvent, screen } from './../test-utils'
import '@testing-library/jest-dom/extend-expect';
import AddRoom from './../AddRoom';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
afterEach(cleanup)
const setup = () => {
    const store = createStore(() => ({
        house: {
            rooms: []
        }
    }));
    const utils = render(<AddRoom />, {
        store,
    })
    const input = utils.getByTestId('inputtext');
    const button = utils.getByTestId('button');
    return {
        input,
        button,
        ...utils,
    }
}
test('can render with redux with custom store', () => {
    // this is a silly store that can never be changed
    const { button } = setup()
    expect(button).toHaveTextContent("Add Room");
});

test('It should keep a $ in front of the input', () => {
    // this is a silly store that can never be changed
    const { input } = setup()
    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('23')
})

