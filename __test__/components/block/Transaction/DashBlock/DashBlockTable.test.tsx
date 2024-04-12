import { render, screen } from '@testing-library/react'

import DashBlockTable from '@/components/blocks/Transactions/DashBlocks/dash_blocks_table'
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
    time: "2024-04-11T16:18:35Z",
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
    time: "2024-04-11T16:18:35Z",
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
    time: "2024-04-11T16:18:35Z",
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
    time: "2024-04-11T16:18:35Z",
  },
]

describe('DashBlockTable', () => {
  describe('Render', () => {
    it('should have a heading with text "Blocks"', () => {
      //arrange
      render(
        <DashBlockTable blocks={mockBlocks} filteredBlocks={mockFilteredBlocks} loading={false} />,
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
        <DashBlockTable blocks={mockBlocks} filteredBlocks={mockFilteredBlocks} loading={false} />,
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
        <DashBlockTable blocks={mockBlocks} filteredBlocks={mockFilteredBlocks} loading={false} />,
      )

      //act
      const blocks = screen.getAllByTestId('block')

      //assert
      expect(blocks.length).toBe(2)
    })

    it('should render 2 blocks', () => {
      //arrange
      render(<DashBlockTable blocks={[]} filteredBlocks={mockFilteredBlocks} loading={true} />)

      //act
      const blocks = screen.getAllByTestId('block')

      //assert
      expect(blocks.length).toBe(2)
    })

    it('should render 1 loading element', () => {
      //arrange
      render(<DashBlockTable blocks={[]} filteredBlocks={mockFilteredBlocks} loading={true} />)

      //act
      const loading = screen.getAllByTestId('loading')

      //assert
      expect(loading.length).toBe(1)
    })

    it('should render 1 loading element', () => {
      //arrange
      render(<DashBlockTable blocks={[]} filteredBlocks={[]} loading={true} />)

      //act
      const loading = screen.getAllByTestId('loading')

      //assert
      expect(loading.length).toBe(1)
    })
  })
})
