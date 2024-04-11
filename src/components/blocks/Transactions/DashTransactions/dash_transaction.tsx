import React from 'react'

import { TransactionProps } from '@/lib/types/components.types'
import DashTransactionTable from './dash_transactions_table'
import DashTransactionCard from './dash_transactions_card'

const DashTransaction: React.FC<TransactionProps> = ({
  transactions,
  filteredTransactions,
  loading,
}) => {
  return (
    <>
      <DashTransactionTable
        loading={loading}
        filteredTransactions={filteredTransactions}
        transactions={transactions}
      />
      <DashTransactionCard
        loading={loading}
        filteredTransactions={filteredTransactions}
        transactions={transactions}
      />
    </>
  )
}

export default DashTransaction
