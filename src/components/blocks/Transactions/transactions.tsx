'use client'

import React from 'react'

import styles from './styles.module.css'
import { Arrow, Chevron } from '@/lib/assets/icons'
import Type from '@/components/shared/Transaction'
import { IconDir, TypeEnum } from '@/lib/types/components.types'
import Button from '@/components/shared/Buttons'
import { useAppSelector } from '@/redux/typings'
import { RootState } from '@/redux/store'
import { shortenData } from '@/lib/utils/cleandata'
import Loading from '@/components/shared/Loading'

const TransactionTable: React.FC = () => {
  const { transactions, filteredTransactions, loading } = useAppSelector(
    (state: RootState) => state.dashSlice,
  )
  return (
    <>
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
              <div key={index} className={styles.dashTableBody}>
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
                  <span className='dark:text-white'>{transaction.time}</span>
                </div>
                <div className={[styles.ninthTransData, '!justify-start'].join(' ')}>
                  <span className='dark:text-white'>{transaction.fee}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.cards}>
        {filteredTransactions.length === 0 && transactions.length === 0 && loading && (
          <div className='w-fit mx-auto flex justify-center items-center scale-125 my-14'>
            <Loading />
          </div>
        )}
        {filteredTransactions.map((transaction, index: number) => (
          <div key={index} className={[styles.card, 'dark:bg-cinder'].join(' ')}>
            <div className={styles.cardHeader}>
              <Type type={transaction.type} />
              <span className='dark:text-white'>{transaction.time}</span>
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

      <div className={styles.buttonWrapper}>
        <Button
          text='Prev'
          icon={<Chevron />}
          onClick={() => console.log(123)}
          iconDir={IconDir.LEFT}
          disabled
        />
        <Button
          text='Next'
          icon={<Chevron className='rotate-180' />}
          onClick={() => console.log(123)}
        />
      </div>
    </>
  )
}

export default TransactionTable
