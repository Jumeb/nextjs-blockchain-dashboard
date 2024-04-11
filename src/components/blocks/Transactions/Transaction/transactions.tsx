'use client'

import React from 'react'

import styles from '../styles.module.css'
import Button from '@/components/shared/Buttons'
import { useAppSelector } from '@/redux/typings'
import { RootState } from '@/redux/store'
import TransactionCard from './transactions_card'
import TransactionsTable from './transactions_table'

const TransactionsCardTable: React.FC = () => {
  const { transactions, filteredTransactions, loading } = useAppSelector(
    (state: RootState) => state.dashSlice,
  )
  return (
    <>
      <TransactionsTable
        filteredTransactions={filteredTransactions}
        transactions={transactions}
        loading={loading}
      />

      <TransactionCard
        filteredTransactions={filteredTransactions}
        transactions={transactions}
        loading={loading}
      />

      <div className={styles.buttonWrapper}>
        <Button text='Prev' onClick={() => console.log(123)} disabled />
        <Button text='Next' onClick={() => console.log(123)} />
      </div>
    </>
  )
}

export default TransactionsCardTable
