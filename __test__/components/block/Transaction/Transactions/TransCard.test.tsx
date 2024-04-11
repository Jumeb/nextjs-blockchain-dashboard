import TransactionCard from '@/components/blocks/Transactions/Transaction/transactions_card'
import { TypeEnum } from '@/lib/types/components.types'
import { TransactionsType } from '@/lib/types/redux.types'
import { render, screen } from '@testing-library/react'

const mockFilteredTransactions: TransactionsType[] = [
  {
    type: TypeEnum.CANCELLED,
    wallet: 'slkflksdf',
    value: 323,
    from: 'klsdf',
    to: 'lskdfl',
    amount: '234',
    time: '4 mins ago',
    fee: 323,
  },
  {
    type: TypeEnum.CANCELLED,
    wallet: 'slkflksdf',
    value: 323,
    from: 'klsdf',
    to: 'lskdfl',
    amount: '234',
    time: '4 mins ago',
    fee: 323,
  },
]

const mockTransactions: TransactionsType[] = [
  {
    type: TypeEnum.CANCELLED,
    wallet: 'slkflksdf',
    value: 323,
    from: 'klsdf',
    to: 'lskdfl',
    amount: '234',
    time: '4 mins ago',
    fee: 323,
  },
  {
    type: TypeEnum.CANCELLED,
    wallet: 'slkflksdf',
    value: 323,
    from: 'klsdf',
    to: 'lskdfl',
    amount: '234',
    time: '4 mins ago',
    fee: 323,
  },
]

describe('TransCard', () => {
  describe('Render', () => {
    it('should render two blocks of transactions', () => {
      //arrange
      render(
        <TransactionCard
          filteredTransactions={mockFilteredTransactions}
          transactions={mockTransactions}
          loading={false}
        />,
      )

      //act
      const blocks = screen.getAllByTestId('block')

      //assert
      expect(blocks.length).toBe(2)
    })
    it('should render two blocks of transactions each having a header', () => {
      //arrange
      render(
        <TransactionCard
          filteredTransactions={mockFilteredTransactions}
          transactions={mockTransactions}
          loading={false}
        />,
      )

      //act
      const blockHeaders = screen.getAllByTestId('block-header')

      //assert
      expect(blockHeaders.length).toBe(2)
    })

    it('should render "Type" and "4 mins ago" for the first header', () => {
      //arrange
      render(
        <TransactionCard
          filteredTransactions={mockFilteredTransactions}
          transactions={mockTransactions}
          loading={false}
        />,
      )

      //act
      const blockHeaderType = screen.getAllByTestId('type')[0]
      const blockHeaderLabel = screen.getAllByTestId('label')[0]

      //assert
      expect(blockHeaderType).toBeInTheDocument()
      expect(blockHeaderLabel).toHaveTextContent('4 mins ago')
    })

    it('should render 2 blocks', () => {
      //arrange
      render(
        <TransactionCard
          filteredTransactions={mockFilteredTransactions}
          transactions={[]}
          loading={false}
        />,
      )

      //act
      const blocks = screen.getAllByTestId('block')

      //assert
      expect(blocks.length).toBe(2)
    })

    it('should render 1 loading element', () => {
      //arrange
      render(
        <TransactionCard
          filteredTransactions={mockFilteredTransactions}
          transactions={[]}
          loading={true}
        />,
      )

      //act
      const loading = screen.queryAllByTestId('loading')

      //assert
      expect(loading.length).not.toBe(1)
    })

    it('should render 1 loading element', () => {
      //arrange
      render(
        <TransactionCard
          filteredTransactions={[]}
          transactions={[]}
          loading={true}
        />,
      )

      //act
      const loading = screen.getAllByTestId('loading')

      //assert
      expect(loading.length).toBe(1)
    })
  })
})
