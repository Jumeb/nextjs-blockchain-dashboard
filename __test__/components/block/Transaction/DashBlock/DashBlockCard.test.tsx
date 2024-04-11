import { render, screen } from '@testing-library/react'

import DashBlockCard from '@/components/blocks/Transactions/DashBlocks/dash_blocks_card'
import { BlocksType } from '@/lib/types/redux.types'

const mockFilteredBlocks: BlocksType[] = [
  {
    number: 1234323,
    amount: 2342,
    difficulty: 2334,
    bloom: 'sdfsds',
    tx_count: 32,
    hash: 'Fsdfsdf',
    gas_limit: 3234,
    gas_used: 2342,
    time: '2 mins ago',
  },
  {
    number: 1234323,
    amount: 2342,
    difficulty: 2334,
    bloom: 'sdfsds',
    tx_count: 32,
    hash: 'Fsdfsdf',
    gas_limit: 3234,
    gas_used: 2342,
    time: '2 mins ago',
  },
]

const mockBlocks: BlocksType[] = [
  {
    number: 1234323,
    amount: 2342,
    difficulty: 2334,
    bloom: 'sdfsds',
    tx_count: 32,
    hash: 'Fsdfsdf',
    gas_limit: 3234,
    gas_used: 2342,
    time: '2 mins ago',
  },
  {
    number: 1234323,
    amount: 2342,
    difficulty: 2334,
    bloom: 'sdfsds',
    tx_count: 32,
    hash: 'Fsdfsdf',
    gas_limit: 3234,
    gas_used: 2342,
    time: '2 mins ago',
  },
]

describe('DashBlockCard', () => {
  describe('Render', () => {
    it('should have a heading with text "Blocks"', () => {
      //arrange
      render(
        <DashBlockCard blocks={mockBlocks} filteredBlocks={mockFilteredBlocks} loading={false} />,
      )

      //act
      const heading = screen.getByRole('heading', { name: 'Blocks' })

      //assert
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent('Blocks')
    })

    it('should have a link with text "View all"', () => {
      //arrange
      render(
        <DashBlockCard blocks={mockBlocks} filteredBlocks={mockFilteredBlocks} loading={false} />,
      )

      //act
      const link = screen.getByRole('link', { name: 'View all' })

      //assert
      expect(link).toBeInTheDocument()
      expect(link).toHaveTextContent('View all')
    })

    it('should render two blocks of data', () => {
      //arrange
      render(
        <DashBlockCard blocks={mockBlocks} filteredBlocks={mockFilteredBlocks} loading={false} />,
      )

      //act
      const blocks = screen.getAllByTestId('block')

      //assert
      expect(blocks.length).toBe(2)
    })

    it('should render two blocks of data each having a header', () => {
      //arrange
      render(
        <DashBlockCard blocks={mockBlocks} filteredBlocks={mockFilteredBlocks} loading={false} />,
      )

      //act
      const blockHeaders = screen.getAllByTestId('block-header')

      //assert
      expect(blockHeaders.length).toBe(2)
    })

    it('should render text "Time" and "2 mins ago" for the first header', () => {
      //arrange
      render(
        <DashBlockCard blocks={mockBlocks} filteredBlocks={mockFilteredBlocks} loading={false} />,
      )

      //act
      const blockHeaderValue = screen.getAllByTestId('value')[0]
      const blockHeaderLabel = screen.getAllByTestId('label')[0]

      //assert
      expect(blockHeaderValue).toHaveTextContent('Time')
      expect(blockHeaderLabel).toHaveTextContent('2 mins ago')
    })

    it('should render 6 block data', () => {
      //arrange
      render(
        <DashBlockCard blocks={mockBlocks} filteredBlocks={mockFilteredBlocks} loading={false} />,
      )

      //act
      const blockData = screen.getAllByTestId('block-data')

      //assert
      expect(blockData.length).toBe(6)
    })
    
    it('should render 6 block data', () => {
      //arrange
      render(<DashBlockCard blocks={[]} filteredBlocks={mockFilteredBlocks} loading={false} />)

      //act
      const blockData = screen.getAllByTestId('block-data')

      //assert
      expect(blockData.length).toBe(6)
    })

    it('should render 2 blocks', () => {
      //arrange
      render(<DashBlockCard blocks={[]} filteredBlocks={mockFilteredBlocks} loading={true} />)

      //act
      const blocks = screen.getAllByTestId('block')

      //assert
      expect(blocks.length).toBe(2)
    })

    it('should render 1 loading element', () => {
      //arrange
      render(<DashBlockCard blocks={[]} filteredBlocks={mockFilteredBlocks} loading={true} />)

      //act
      const loading = screen.getAllByTestId('loading')

      //assert
      expect(loading.length).toBe(1)
    })

    it('should render 1 loading element', () => {
      //arrange
      render(<DashBlockCard blocks={[]} filteredBlocks={[]} loading={true} />)

      //act
      const loading = screen.getAllByTestId('loading')

      //assert
      expect(loading.length).toBe(1)
    })
  })
})
