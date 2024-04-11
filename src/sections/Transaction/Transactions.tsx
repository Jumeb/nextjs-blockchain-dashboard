import React from 'react'

import styles from './styles.module.css'
import TransactionsCardTable from '@/components/blocks/Transactions/Transaction/transactions'

const Transactions: React.FC<{refreshTransactions: () => void}> = ({refreshTransactions}) => {
  return (
    <section id='transactions' className={styles.container}>
      <TransactionsCardTable refreshTransactions={refreshTransactions} />
    </section>
  )
}

export default Transactions
