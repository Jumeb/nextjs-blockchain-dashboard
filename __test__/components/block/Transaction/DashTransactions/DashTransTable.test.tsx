import DashTransactionTable from '@/components/blocks/Transactions/DashTransactions/dash_transactions_table'
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
    time: "2024-04-11T16:18:35Z",
    fee: 323,
  },
  {
    type: TypeEnum.CANCELLED,
    wallet: 'slkflksdf',
    value: 323,
    from: 'klsdf',
    to: 'lskdfl',
    amount: '234',
    time: "2024-04-11T16:18:35Z",
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
    time: "2024-04-11T16:18:35Z",
    fee: 323,
  },
  {
    type: TypeEnum.CANCELLED,
    wallet: 'slkflksdf',
    value: 323,
    from: 'klsdf',
    to: 'lskdfl',
    amount: '234',
    time: "2024-04-11T16:18:35Z",
    fee: 323,
  },
]

describe('DashTransTable', () => {
  describe('Render', () => {
    it('should render a heading with text "Transactions"', () => {
      //arrange
      render(
        <DashTransactionTable
          filteredTransactions={mockFilteredTransactions}
          transactions={mockTransactions}
          loading={false}
        />,
      )

      //act
      const heading = screen.getByRole('heading', {
        name: 'Transactions',
      })

      //assert
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent('Transactions')
    })

    it('should have a link with text "View all"', () => {
      //arrange
      render(
        <DashTransactionTable
          filteredTransactions={mockFilteredTransactions}
          transactions={mockTransactions}
          loading={false}
        />,
      )

      //act
      const link = screen.getByRole('link', { name: 'View all' })

      //assert
      expect(link).toBeInTheDocument()
      expect(link).toHaveTextContent('View all')
    })

    it('should render two blocks of transactions', () => {
      //arrange
      render(
        <DashTransactionTable
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
        <DashTransactionTable
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
        <DashTransactionTable
          filteredTransactions={mockFilteredTransactions}
          transactions={[]}
          loading={true}
        />,
      )

      //act
      const loading = screen.getAllByTestId('loading')

      //assert
      expect(loading.length).toBe(1)
    })

    it('should render 1 loading element', () => {
      //arrange
      render(
        <DashTransactionTable
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
