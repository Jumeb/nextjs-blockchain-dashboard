import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from '@/components/shared/Buttons'

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

const mockClick = jest.fn()

describe("Button", () => {
    describe('Render', () => {
        it('should render the "Load More" text', () => {
            // arrange
            render(<Button text='Load More' onClick={mockClick} />)
    
            //act
            const button = screen.getByRole('button', {
                name: 'Load More'
            })
    
            //assert 
            expect(button).toBeInTheDocument()
        })
    
        it('should render the "Testing" text', () => {
            // arrange
            render(<Button text='Testing' onClick={mockClick} />)
    
            //act
            const button = screen.getByRole('button', {
                name: 'Testing'
            })
    
            //assert 
            expect(button).toBeInTheDocument()
        })
    
        it('should render the "Loading..." text', () => {
            // arrange
            render(<Button text='Loading...' onClick={mockClick} loading={true} />)
    
            //act
            const button = screen.getByRole('button', {
                name: 'Loading...'
            })
    
            //assert 
            expect(button).toBeInTheDocument()
        })
    })

    describe('Behaviour', () => { 
        it('should call onClick when button is clicked', async() => {
            //arrange
            render(<Button text='Test' loading={false} onClick={mockClick} />)

            //act
            const button = screen.getByRole('button')
            await userEvent.click(button)

            //assert
            expect(mockClick).toHaveBeenCalled()
        })

        it('should be disabled when button is clicked', async() => {
            //arrange
            render(<Button text='Test' loading={false} onClick={mockClick} disabled />)

            //act
            const button = screen.getByRole('button')

            //assert
            expect(button).toBeDisabled()
        })
     })
})


