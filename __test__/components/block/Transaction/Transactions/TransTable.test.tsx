import TransactionsTable from '@/components/blocks/Transactions/Transaction/transactions_table'
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

describe('DashTransTable', () => {
  describe('Render', () => {
    it('should render two blocks of transactions', () => {
      //arrange
      render(
        <TransactionsTable
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

    it('should render 2 blocks', () => {
      //arrange
      render(
        <TransactionsTable
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

    it('should not render 1 loading element', () => {
      //arrange
      render(
        <TransactionsTable
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
        <TransactionsTable
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
