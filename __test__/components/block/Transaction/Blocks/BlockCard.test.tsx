import { render, screen } from '@testing-library/react'

import { BlocksType } from '@/lib/types/redux.types'
import BlockCard from '@/components/blocks/Transactions/Blocks/blocks_card'

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

describe('BlockCard', () => {
  describe('Render', () => {

    it('should render two blocks of data', () => {
      //arrange
      render(
        <BlockCard blocks={mockBlocks} filteredBlocks={mockFilteredBlocks} loading={false} />,
      )

      //act
      const blocks = screen.getAllByTestId('block')

      //assert
      expect(blocks.length).toBe(2)
    })

    it('should render two blocks of data each having a header', () => {
      //arrange
      render(
        <BlockCard blocks={mockBlocks} filteredBlocks={mockFilteredBlocks} loading={false} />,
      )

      //act
      const blockHeaders = screen.getAllByTestId('block-header')

      //assert
      expect(blockHeaders.length).toBe(2)
    })

    it('should render text "Time" and "2 mins ago" for the first header', () => {
      //arrange
      render(
        <BlockCard blocks={mockBlocks} filteredBlocks={mockFilteredBlocks} loading={false} />,
      )

      //act
      const blockHeaderValue = screen.getAllByTestId('value')[0]
      const blockHeaderLabel = screen.getAllByTestId('label')[0]

      //assert
      expect(blockHeaderValue).toHaveTextContent('Time')
      expect(blockHeaderLabel).toHaveTextContent('2 mins ago')
    })

    it('should render 16 block data', () => {
      //arrange
      render(
        <BlockCard blocks={mockBlocks} filteredBlocks={mockFilteredBlocks} loading={false} />,
      )

      //act
      const blockData = screen.getAllByTestId('block-data')

      //assert
      expect(blockData.length).toBe(16)
    })
    
    it('should render 16 block data', () => {
      //arrange
      render(<BlockCard blocks={[]} filteredBlocks={mockFilteredBlocks} loading={false} />)

      //act
      const blockData = screen.getAllByTestId('block-data')

      //assert
      expect(blockData.length).toBe(16)
    })

    it('should render 2 blocks', () => {
      //arrange
      render(<BlockCard blocks={[]} filteredBlocks={mockFilteredBlocks} loading={true} />)

      //act
      const blocks = screen.getAllByTestId('block')

      //assert
      expect(blocks.length).toBe(2)
    })

    it('should not render loading element', () => {
      //arrange
      render(<BlockCard blocks={[]} filteredBlocks={mockFilteredBlocks} loading={false} />)

      //act
      const loading = screen.queryByTestId('loading')

      //assert
      expect(loading).not.toBeInTheDocument()
    })

    it('should render 1 loading element', () => {
      //arrange
      render(<BlockCard blocks={[]} filteredBlocks={[]} loading={true} />)

      //act
      const loading = screen.getAllByTestId('loading')

      //assert
      expect(loading.length).toBe(1)
    })
  })
})
