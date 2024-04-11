'use client'

import React from 'react'

import styles from '../styles.module.css'
import Button from '@/components/shared/Buttons'
import { useAppDispatch, useAppSelector } from '@/redux/typings'
import { RootState } from '@/redux/store'
import TransactionCard from './transactions_card'
import TransactionsTable from './transactions_table'
import { setTransOffset } from '@/redux/dash/slice/dash.slice'

const TransactionsCardTable: React.FC<{ refreshTransactions: () => void }> = ({
  refreshTransactions,
}) => {
  const { transactions, filteredTransactions, loading, transOffset } = useAppSelector(
    (state: RootState) => state.dashSlice,
  )
  const dispatch = useAppDispatch()
  return (
    <>
      <TransactionsTable
        filteredTransactions={filteredTransactions}
        transactions={transactions}
        loading={loading}
        refreshTransactions={refreshTransactions}
      />

      <TransactionCard
        filteredTransactions={filteredTransactions}
        transactions={transactions}
        loading={loading}
        refreshTransactions={refreshTransactions}
      />

      <div className={styles.buttonWrapper}>
        <Button
          text='Load More'
          onClick={() => dispatch(setTransOffset(transOffset + 5))}
          loading={loading}
          disabled={loading}
        />
      </div>
    </>
  )
}

export default TransactionsCardTable
