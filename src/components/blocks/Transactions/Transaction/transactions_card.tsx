import React from 'react'

import styles from '../styles.module.css'
import Type from '@/components/shared/Transaction'
import { TransactionProps } from '@/lib/types/components.types'
import Loading from '@/components/shared/Loading'
import { shortenData } from '@/lib/utils/cleandata'

const TransactionCard: React.FC<TransactionProps> = ({filteredTransactions, transactions, loading}) => {
  return (
    <div className={styles.cards}>
      {filteredTransactions.length === 0 && transactions.length === 0 && loading && (
        <div className='w-fit mx-auto flex justify-center items-center scale-125 my-14'>
          <Loading />
        </div>
      )}
      {filteredTransactions.map((transaction, index: number) => (
        <div data-testid='block' key={index} className={[styles.card, 'dark:bg-cinder'].join(' ')}>
          <div data-testid='block-header' className={styles.cardHeader}>
            <Type type={transaction.type} />
            <span data-testid='label' className='dark:text-white'>{transaction.time}</span>
          </div>
          <div className={[styles.cardBody, 'dark:divide-gray-300'].join(' ')}>
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>Wallet</span>
              <p className='!font-bold !text-primary dark:!text-primary-light'>
                {shortenData(transaction.wallet)}
              </p>
            </div>
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>From</span>
              <p className='!text-primary dark:!text-primary-light'>
                {shortenData(transaction.from, 5)}
              </p>
            </div>
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>To</span>
              <p className='!text-primary dark:!text-primary-light'>
                {shortenData(transaction.to, 5)}
              </p>
            </div>
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>Value</span>
              <p className='dark:text-white'>{transaction.value}</p>
            </div>
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>Fee</span>
              <p className='dark:text-white'>{transaction.fee}</p>
            </div>
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>Amount</span>
              <p className='dark:text-white'>{transaction.amount}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TransactionCard
