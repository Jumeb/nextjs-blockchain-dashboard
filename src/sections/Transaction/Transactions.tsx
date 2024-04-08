import React from 'react'

import styles from './styles.module.css'
import TransactionTable from '@/components/blocks/Transactions/transactions'

const Transactions: React.FC = () => {
  return (
    <section id='transactions' className={styles.container}>
      <TransactionTable />
    </section>
  )
}

export default Transactions
