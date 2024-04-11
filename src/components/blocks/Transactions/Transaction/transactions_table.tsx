import React from 'react';

import styles from '../styles.module.css'
import { TransactionProps } from '@/lib/types/components.types';
import { shortenData } from '@/lib/utils/cleandata';
import Type from '@/components/shared/Transaction'
import Loading from '@/components/shared/Loading';
import { Arrow } from '@/lib/assets/icons';
import moment from 'moment';

const TransactionsTable:React.FC<TransactionProps> = ({filteredTransactions, transactions, loading}) => {
    return (
        <div className={[styles.container, 'dark:bg-cinder hidden md:flex'].join(' ')}>
        <div className={styles.scrollContainer}>
          {/* Dash transaction table header  */}
          {/* Custom tables are easier to style and manipulate in my experience */}

          <div className={styles.dashTableHeader}>
            <div className={styles.firstTransData}>
              <span className='dark:text-white'>Type</span>
            </div>
            <div className={styles.secondTransData}>
              <span className='dark:text-white'>Wallet</span>
            </div>
            <div className={styles.thirdTransData}>
              <span className='dark:text-white'>Value</span>
            </div>
            <div className={styles.fourthTransData}>
              <span className='dark:text-white'> From</span>
            </div>
            <div className={styles.fifthTransData}></div>
            <div className={styles.sixthTransData}>
              <span className='dark:text-white'>To</span>
            </div>
            <div className={styles.seventhTransData}>
              <span className='dark:text-white'>Amount</span>
            </div>
            <div className={styles.eighthTransData}>
              <span className='dark:text-white'>Time</span>
            </div>
            <div className={[styles.ninthTransData, '!justify-start'].join(' ')}>
              <span className='dark:text-white'>Fee</span>
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
                <div className={styles.firstTransData}>
                  <Type type={transaction.type} />
                </div>
                <div className={styles.secondTransData}>
                  <span className='!font-bold !text-primary dark:!text-primary-light'>
                    {shortenData(transaction.wallet)}
                  </span>
                </div>
                <div className={styles.thirdTransData}>
                  <span className='!font-bold !text-primary dark:!text-primary-light'>
                    {transaction.value}
                  </span>
                </div>
                <div className={styles.fourthTransData}>
                  <span className='!font-bold !text-primary dark:!text-primary-light'>
                    {shortenData(transaction.from, 5)}
                  </span>
                </div>
                <div className={[styles.fifthTransData, '!px-0'].join(' ')}>
                  <Arrow className={[styles.transferIcon, 'dark:fill-white'].join(' ')} />
                </div>
                <div className={styles.sixthTransData}>
                  <span className='!font-bold !text-primary dark:!text-primary-light'>
                    {shortenData(transaction.to, 5)}
                  </span>
                </div>
                <div className={styles.seventhTransData}>
                  <span className='dark:text-white'>{transaction.amount}</span>
                </div>
                <div className={styles.eighthTransData}>
                  <span className='dark:text-white'>{moment(transaction.time).fromNow()}</span>
                </div>
                <div className={[styles.ninthTransData, '!justify-start'].join(' ')}>
                  <span className='dark:text-white'>{transaction.fee}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default TransactionsTable