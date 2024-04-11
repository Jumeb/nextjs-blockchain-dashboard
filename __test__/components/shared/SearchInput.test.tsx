import SearchInput from '@/components/shared/SearchInput'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const mockClick = jest.fn()
const mockClick1 = jest.fn()

describe('SearchInput', () => {
  describe('Render', () => {
    it('should render input', () => {
      //arrange
      render(<SearchInput value='' clearValue={mockClick} onChange={mockClick1} />)

      //act
      const input = screen.getByPlaceholderText('Search for a tx, address, name or block')

      //assert
      expect(input).toBeInTheDocument()
    })

    describe('Behaviour', () => {
      it('should be able to clear value', async () => {
        //arrange
        render(<SearchInput value={'sfsdf'} clearValue={mockClick} onChange={mockClick1} />)

        //act
        const clearButton = screen.getByTestId('clear-button')
        await userEvent.click(clearButton)

        //assert
        expect(mockClick).toHaveBeenCalled()
      })

      it('should be able to enter value', async () => {
        //arrange
        render(<SearchInput value={'sfsdf'} clearValue={mockClick} onChange={mockClick1} />)

        //act
        const input = screen.getByPlaceholderText('Search for a tx, address, name or block')
        await userEvent.type(input, 'hey there')

        //assert
        expect(mockClick1).toHaveBeenCalledTimes(9)
      })
    })
  })
})
