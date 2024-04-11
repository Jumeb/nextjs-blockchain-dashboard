import DropDown from '@/components/shared/DropDown'
import { OptionsType } from '@/lib/types/components.types'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const mockClick = jest.fn()

const mockValue = 'Mainnet'

const mockOptions: OptionsType[] = [
  {
    value: 1,
    label: 'Mainnet',
  },
  {
    value: 2,
    label: 'Testnet',
  },
]

describe('DropDown', () => {
  describe('Render', () => {
    it('should render a button to drop down', () => {
      //arrange
      render(
        <DropDown
          name='dropdown'
          options={mockOptions}
          label='Test Drop Down'
          value={mockValue}
          setValue={mockClick}
        />,
      )

      //act
      const button = screen.getByTestId('drop-button')

      //assert
      expect(button).toBeInTheDocument()
    })

    it('should render a button to select an item', () => {
      //arrange
      render(
        <DropDown
          name='dropdown'
          options={mockOptions}
          label='Test Drop Down'
          value={mockValue}
          setValue={mockClick}
        />,
      )

      //act
      const button = screen.getByTestId('drop-button')

      //assert
      expect(button).toBeInTheDocument()
    })

    it('should render at least 1 button', () => {
      //arrange
      render(
        <DropDown
          name='dropdown'
          options={mockOptions}
          label='Test Drop Down'
          value={mockValue}
          setValue={mockClick}
        />,
      )

      //act
      const buttons = screen.getAllByRole('button')

      //assert
      expect(buttons.length).toBeGreaterThanOrEqual(1)
    })

    it('should render at least 2 select button', () => {
      //arrange
      render(
        <DropDown
          name='dropdown'
          options={mockOptions}
          label='Test Drop Down'
          value={mockValue}
          setValue={mockClick}
        />,
      )

      //act
      const buttons = screen.getAllByTestId('select-button')

      //assert
      expect(buttons.length).toBe(2)
    })

    it('should render select buttons in correct order', () => {
      //arrange
      render(
        <DropDown
          name='dropdown'
          options={mockOptions}
          label='Test Drop Down'
          value={mockValue}
          setValue={mockClick}
        />,
      )

      //act
      const firstSelectButton = screen.getAllByTestId('select-button')[0]

      //assert
      expect(firstSelectButton).toHaveTextContent('Mainnet')
    })
  })

//   describe('Behaviour', () => {
//     it('should display selected button text in drop-down button', async() => {
//       //arrange
//       render(
//         <DropDown
//           name='dropdown'
//           options={mockOptions}
//           label='Test Drop Down'
//           value={mockValue}
//           setValue={mockClick}
//         />,
//       )

//       //act 
//       const button = screen.getAllByTestId('select-button')[1]
//       await userEvent.click(button)
//       const dropButton = screen.getByTestId('button-value');

//       console.log(dropButton)

//       //assert
//       expect(mockClick).toHaveBeenCalled();
//       expect(dropButton).toHaveTextContent('Testnet')
//     })
//   })
})
