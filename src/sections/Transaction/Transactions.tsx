import React from 'react'

import styles from './styles.module.css'
import TransactionsCardTable from '@/components/blocks/Transactions/Transaction/transactions'

const Transactions: React.FC = () => {
  return (
    <section id='transactions' className={styles.container}>
      <TransactionsCardTable />
    </section>
  )
}

export default Transactions
