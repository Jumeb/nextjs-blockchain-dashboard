import React from 'react'

import styles from '../styles.module.css'
import { TransactionProps } from '@/lib/types/components.types'
import Loading from '@/components/shared/Loading'
import Type from '@/components/shared/Transaction'
import Link from 'next/link'
import { shortenData } from '@/lib/utils/cleandata'
import { Arrow } from '@/lib/assets/icons'

const DashTransactionTable: React.FC<TransactionProps> = ({
  loading,
  filteredTransactions,
  transactions,
}) => {
  return (
    <div className={[styles.container, 'dark:bg-cinder hidden md:flex'].join(' ')}>
      {/* Dash transaction header */}
      <div className={[styles.containerHeader, 'dark:bg-cinder-light/10'].join(' ')}>
        <h5 className='dark:text-white'>Transactions</h5>
        {filteredTransactions.length != 0 && loading && (
          <div className='scale-[0.6] ml-auto mr-2'>
            <Loading />
          </div>
        )}
        <Link href={'/transactions'} className='dark:text-primary-light'>
          View all
        </Link>
      </div>

      <div className={styles.scrollContainer}>
        {/* Dash transaction table header  */}
        {/* Custom tables are easier to style and manipulate in my experience */}

        <div className={styles.dashTableHeader}>
          <div className={styles.firstTransactionData}>
            <span className='dark:text-white'>Type</span>
          </div>
          <div className={styles.secondTransactionData}>
            <span className='dark:text-white'>Wallet</span>
          </div>
          <div className={styles.thirdTransactionData}>
            <span className='dark:text-white'> From</span>
          </div>
          <div className={styles.fourthTransactionData}></div>
          <div className={styles.fifthTransactionData}>
            <span className='dark:text-white'>To</span>
          </div>
          <div className={styles.sixthTransactionData}>
            <span className='dark:text-white'>Amount</span>
          </div>
          <div className={styles.seventhTransactionData}>
            <span className='dark:text-white'>Time</span>
          </div>
        </div>

        {/* Dash transaction table body */}
        <div className={[styles.dashTableBodyContainer, 'dark:divide-gray-600'].join(' ')}>
          {filteredTransactions.length === 0 && transactions.length === 0 && loading && (
            <div className='w-fit mx-auto flex justify-center items-center scale-125 my-14'>
              <Loading />
            </div>
          )}
          {filteredTransactions.map((transaction, index: number) => (
            <div data-testid='block' key={index} className={styles.dashTableBody}>
              <div className={styles.firstTransactionData}>
                <Type type={transaction.type} />
              </div>
              <div className={styles.secondTransactionData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>
                  {shortenData(transaction.wallet)}
                </span>
              </div>
              <div className={styles.thirdTransactionData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>
                  {shortenData(transaction.from, 4)}
                </span>
              </div>
              <div className={[styles.fourthTransactionData, '!px-0'].join(' ')}>
                <Arrow className={[styles.transferIcon, 'dark:fill-white'].join(' ')} />
              </div>
              <div className={styles.fifthTransactionData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>
                  {shortenData(transaction.to, 4)}
                </span>
              </div>
              <div className={styles.sixthTransactionData}>
                <span className='dark:text-white'>{transaction.amount}</span>
              </div>
              <div className={styles.seventhTransactionData}>
                <span className='dark:text-white'>{transaction.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashTransactionTable
