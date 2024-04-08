import React from 'react'

import styles from './styles.module.css'
import Link from 'next/link'
import { Arrow } from '@/lib/assets/icons'
import Type from '@/components/shared/Transaction'
import { TypeEnum } from '@/lib/types/components.types'

const DashTransaction: React.FC = () => {
  return (
    <div className={[styles.container, 'dark:bg-cinder'].join(' ')}>
      {/* Dash transaction header */}
      <div className={styles.containerHeader}>
        <h5 className='dark:text-white'>Transactions</h5>
        <Link href={'#'} className='dark:text-primary-light'>
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
          <div className={styles.dashTableBody}>
            <div className={styles.firstTransactionData}>
              <Type type={TypeEnum.CANCELLED} />
            </div>
            <div className={styles.secondTransactionData}>
              <span className='!font-bold !text-primary dark:!text-primary-light'>
                0x183c09...d7e953b
              </span>
            </div>
            <div className={styles.thirdTransactionData}>
              <span className='!font-bold !text-primary dark:!text-primary-light'>zinqw...a5q</span>
            </div>
            <div className={[styles.fourthTransactionData, '!px-0'].join(' ')}>
              <Arrow className={[styles.transferIcon, 'dark:fill-white'].join(' ')} />
            </div>
            <div className={styles.fifthTransactionData}>
              <span className='!font-bold !text-primary dark:!text-primary-light'>serss...a5q</span>
            </div>
            <div className={styles.sixthTransactionData}>
              <span className='dark:text-white'>10 WIL</span>
            </div>
            <div className={styles.seventhTransactionData}>
              <span className='dark:text-white'>4 mins ago</span>
            </div>
          </div>

          <div className={styles.dashTableBody}>
            <div className={styles.firstTransactionData}>
              <Type type={TypeEnum.PENDING} />
            </div>
            <div className={styles.secondTransactionData}>
              <span className='!font-bold !text-primary dark:!text-primary-light'>
                0x183c09...d7e953b
              </span>
            </div>
            <div className={styles.thirdTransactionData}>
              <span className='!font-bold !text-primary dark:!text-primary-light'>zinqw...a5q</span>
            </div>
            <div className={[styles.fourthTransactionData, '!px-0'].join(' ')}>
              <Arrow className={[styles.transferIcon, 'dark:fill-white'].join(' ')} />
            </div>
            <div className={styles.fifthTransactionData}>
              <span className='!font-bold !text-primary dark:!text-primary-light'>serss...a5q</span>
            </div>
            <div className={styles.sixthTransactionData}>
              <span className='dark:text-white'>10 WIL</span>
            </div>
            <div className={styles.seventhTransactionData}>
              <span className='dark:text-white'>4 mins ago</span>
            </div>
          </div>

          <div className={styles.dashTableBody}>
            <div className={styles.firstTransactionData}>
              <Type type={TypeEnum.SUCCESS} />
            </div>
            <div className={styles.secondTransactionData}>
              <span className='!font-bold !text-primary dark:!text-primary-light'>
                0x183c09...d7e953b
              </span>
            </div>
            <div className={styles.thirdTransactionData}>
              <span className='!font-bold !text-primary dark:!text-primary-light'>zinqw...a5q</span>
            </div>
            <div className={[styles.fourthTransactionData, '!px-0'].join(' ')}>
              <Arrow className={[styles.transferIcon, 'dark:fill-white'].join(' ')} />
            </div>
            <div className={styles.fifthTransactionData}>
              <span className='!font-bold !text-primary dark:!text-primary-light'>serss...a5q</span>
            </div>
            <div className={styles.sixthTransactionData}>
              <span className='dark:text-white'>10 WIL</span>
            </div>
            <div className={styles.seventhTransactionData}>
              <span className='dark:text-white'>4 mins ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashTransaction