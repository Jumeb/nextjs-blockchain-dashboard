import { render, screen } from '@testing-library/react'

import Card from '@/components/shared/Card'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

const mockData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'First dataset',
      data: [33, 53, 85, 41, 44, 65],
      fill: false,
      backgroundColor: 'transparent',
      borderColor: '#077a8f',
      tension: 0.4,
    },
  ],
}

describe('Card', () => {
  describe('Render', () => {
    it('should render a heading ', () => {
      //arrange
      render(<Card title='Card' value='34 344' data={mockData} />)

      //act
      const header = screen.getByRole('heading', {
        name: 'Card',
      })

      //assert
      expect(header).toBeInTheDocument()
    })

    it('should render a paragraph ', () => {
      //arrange
      render(<Card title='Card' value='34 344' data={mockData} />)

      //act
      const paragraph = screen.getByTestId('paragraph')

      //assert
      expect(paragraph).toBeInTheDocument()
    })

    it('should render a button ', () => {
      //arrange
      render(<Card title='Card' value='34 344' data={mockData} />)

      //act
      const button = screen.getByRole('button')

      //assert
      expect(button).toBeInTheDocument()
    })

    it('should render a chart ', () => {
      //arrange
      render(<Card title='Card' value='34 344' data={mockData} />)

      //act
      const chart = screen.getByTestId('chart')

      //assert
      expect(chart).toBeInTheDocument()
    })
  })
  
})
