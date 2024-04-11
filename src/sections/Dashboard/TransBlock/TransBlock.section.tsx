import React from 'react'

import styles from './styles.module.css'
import DashTransaction from '@/components/blocks/Transactions/DashTransactions/dash_transaction'
import DashBlock from '@/components/blocks/Transactions/DashBlocks/dash_blocks'
import { RootState } from '@/redux/store'
import { useAppSelector } from '@/redux/typings'

const TransBlockSection: React.FC = () => {
  const { transactions, filteredTransactions, loading, blocks, filteredBlocks } = useAppSelector(
    (state: RootState) => state.dashSlice,
  )
  return (
    <section id='trans_block_section' className={styles.container}>
      <div className={styles.containerTrans}>
        <DashTransaction
          loading={loading}
          filteredTransactions={filteredTransactions}
          transactions={transactions}
        />
      </div>
      <div className={styles.containerBlock}>
        <DashBlock blocks={blocks} filteredBlocks={filteredBlocks} loading={loading} />
      </div>
    </section>
  )
}

export default TransBlockSection
