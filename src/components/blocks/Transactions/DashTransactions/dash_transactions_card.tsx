import React from 'react'

import styles from '../styles.module.css'
import { TransactionProps } from '@/lib/types/components.types'
import Type from '@/components/shared/Transaction'
import Link from 'next/link'
import Loading from '@/components/shared/Loading'
import { shortenData } from '@/lib/utils/cleandata'
import { Refresh } from '@/lib/assets/icons'
import moment from 'moment'

const DashTransactionCard: React.FC<TransactionProps> = ({
  filteredTransactions,
  loading,
  transactions,
  refreshTransactions
}) => {
  return (
    <div className={styles.cards}>
      <div className={[styles.containerHeader, 'dark:bg-cinder-light/50'].join(' ')}>
        <h5 className='mr-auto dark:text-white'>Transactions</h5>
        {filteredTransactions.length != 0 && loading && (
          <div className='scale-[0.6]mr-2'>
            <Loading />
          </div>
        )}
        <Link href={'/transactions'} className='mr-2 dark:text-primary-light'>
          View all
        </Link>
        <button onClick={refreshTransactions} className={[styles.headerRefresh, 'dark:bg-cinder-light'].join(' ')}>
          <Refresh className={[styles.headerRefreshIcon, 'dark:fill-white'].join(' ')} />
        </button>
      </div>
      {filteredTransactions.length === 0 && transactions.length === 0 && loading && (
        <div className='w-full flex justify-center items-center scale-125'>
          <Loading />
        </div>
      )}
      {filteredTransactions.map((transaction, index: number) => (
        <div data-testid="block" key={index} className={[styles.card, 'dark:bg-cinder'].join(' ')}>
          <div data-testid="block-header" className={styles.cardHeader}>
            <Type type={transaction.type} />
            <span data-testid="label" className='dark:text-white'>{moment(transaction.time).fromNow()}</span>
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
          </div>
        </div>
      ))}
    </div>
  )
}

export default DashTransactionCard
