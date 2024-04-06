import {render, screen} from '@testing-library/react'

import Test from '@/app/test/page'

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

it('Should have Stamps', () => {
    render(<Test />)

    const myElem = screen.getByText('Stamps')

    expect(myElem).toBeInTheDocument()
})