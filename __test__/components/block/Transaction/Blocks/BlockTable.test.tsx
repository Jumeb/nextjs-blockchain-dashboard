import { render, screen } from '@testing-library/react'

import { BlocksType } from '@/lib/types/redux.types'
import BlocksTable from '@/components/blocks/Transactions/Blocks/blocks_table'

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

describe('BlocksTable', () => {
  describe('Render', () => {

    it('should render two blocks of data', () => {
      //arrange
      render(
        <BlocksTable blocks={mockBlocks} filteredBlocks={mockFilteredBlocks} loading={false} />,
      )

      //act
      const blocks = screen.getAllByTestId('block')

      //assert
      expect(blocks.length).toBe(2)
    })


    it('should render 2 blocks', () => {
      //arrange
      render(<BlocksTable blocks={[]} filteredBlocks={mockFilteredBlocks} loading={true} />)

      //act
      const blocks = screen.getAllByTestId('block')

      //assert
      expect(blocks.length).toBe(2)
    })

    it('should not render loading element', () => {
      //arrange
      render(<BlocksTable blocks={[]} filteredBlocks={mockFilteredBlocks} loading={false} />)

      //act
      const loading = screen.queryByTestId('loading')

      //assert
      expect(loading).not.toBeInTheDocument()
    })

    it('should render 1 loading element', () => {
      //arrange
      render(<BlocksTable blocks={[]} filteredBlocks={[]} loading={true} />)

      //act
      const loading = screen.getAllByTestId('loading')

      //assert
      expect(loading.length).toBe(1)
    })
  })
})
