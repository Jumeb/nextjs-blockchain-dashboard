import React from 'react'

import styles from './styles.module.css'
import TopBar from '@/components/blocks/TopBar'
import Transactions from '@/sections/Transaction/Transactions'

const TransactionsPage: React.FC = () => {
  return (
    <main className={[styles.container, 'dark:bg-cinder-light'].join(' ')}>
      <TopBar />
      <div className={styles.containerContent}>
        <h1 className='dark:text-white'>Transactions</h1>
        <Transactions />
      </div>
    </main>
  )
}

export default TransactionsPage
