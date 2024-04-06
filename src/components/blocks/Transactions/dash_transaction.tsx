import React from 'react'

import styles from './styles.module.css'
import Link from 'next/link'
import { Arrow, Chevron } from '@/lib/assets/icons'
import Type from '@/components/shared/Transaction'
import { TypeEnum } from '@/lib/types/components.types'

const DashTransaction: React.FC = () => {
  return (
    <div className={[styles.container, 'dark:bg-cinder'].join(' ')}>
      {/* Dash transaction header */}
      <div className={styles.containerHeader}>
        <h5 className='dark:text-white'>Transactions</h5>
        <Link href={'#'}>View all</Link>
      </div>

      <div className={styles.scrollContainer}>
      {/* Dash transaction table header  */}
      {/* Custom tables are easier to style and manipulate in my experience */}

      <div className={styles.dashTableHeader}>
        <div className={styles.firstTransactionData}>
          <span className='dark:text-white'>Type</span>
          <Chevron className={[styles.filterIcon, 'dark:fill-white'].join(' ')} />
        </div>
        <div className={styles.secondTransactionData}>
          <span className='dark:text-white'>Wallet</span>
          <Chevron className={[styles.filterIcon, 'dark:fill-white'].join(' ')} />
        </div>
        <div className={styles.thirdTransactionData}>
          <span className='dark:text-white'> From</span>
          <Chevron className={[styles.filterIcon, 'dark:fill-white'].join(' ')} />
        </div>
        <div className={styles.fourthTransactionData}></div>
        <div className={styles.fifthTransactionData}>
          <span className='dark:text-white'>To</span>
          <Chevron className={[styles.filterIcon, 'dark:fill-white'].join(' ')} />
        </div>
        <div className={styles.sixthTransactionData}>
          <span className='dark:text-white'>Amount</span>
          <Chevron className={[styles.filterIcon, 'dark:fill-white'].join(' ')} />
        </div>
        <div className={styles.seventhTransactionData}>
          <span className='dark:text-white'>Time</span>
          <Chevron className={[styles.filterIcon, 'dark:fill-white'].join(' ')} />
        </div>
      </div>

      {/* Dash transaction table body */}
      <div className={[styles.dashTableBodyContainer, 'dark:divide-gray-600'].join(' ')}>
        <div className={styles.dashTableBody}>
          <div className={styles.firstTransactionData}><Type type={TypeEnum.CANCELLED} /></div>
          <div className={styles.secondTransactionData}>
            <span className='!font-bold !text-primary'>0x183c09...d7e953b</span>
          </div>
          <div className={styles.thirdTransactionData}>
            <span className='!font-bold !text-primary'>zinqw...a5q</span>
          </div>
          <div className={[styles.fourthTransactionData, '!px-0'].join(' ')}>
            <Arrow className={[styles.transferIcon, 'dark:fill-white'].join(' ')} />
          </div>
          <div className={styles.fifthTransactionData}>
            <span className='!font-bold !text-primary'>serss...a5q</span>
          </div>
          <div className={styles.sixthTransactionData}>
            <span className='dark:text-white'>10 WIL</span>
          </div>
          <div className={styles.seventhTransactionData}>
            <span className='dark:text-white'>4 mins ago</span>
          </div>
        </div>

        <div className={styles.dashTableBody}>
          <div className={styles.firstTransactionData}><Type type={TypeEnum.PENDING} /></div>
          <div className={styles.secondTransactionData}>
            <span className='!font-bold !text-primary'>0x183c09...d7e953b</span>
          </div>
          <div className={styles.thirdTransactionData}>
            <span className='!font-bold !text-primary'>zinqw...a5q</span>
          </div>
          <div className={[styles.fourthTransactionData, '!px-0'].join(' ')}>
            <Arrow className={[styles.transferIcon, 'dark:fill-white'].join(' ')} />
          </div>
          <div className={styles.fifthTransactionData}>
            <span className='!font-bold !text-primary'>serss...a5q</span>
          </div>
          <div className={styles.sixthTransactionData}>
            <span className='dark:text-white'>10 WIL</span>
          </div>
          <div className={styles.seventhTransactionData}>
            <span className='dark:text-white'>4 mins ago</span>
          </div>
        </div>

        <div className={styles.dashTableBody}>
          <div className={styles.firstTransactionData}><Type type={TypeEnum.SUCCESS} /></div>
          <div className={styles.secondTransactionData}>
            <span className='!font-bold !text-primary'>0x183c09...d7e953b</span>
          </div>
          <div className={styles.thirdTransactionData}>
            <span className='!font-bold !text-primary'>zinqw...a5q</span>
          </div>
          <div className={[styles.fourthTransactionData, '!px-0'].join(' ')}>
            <Arrow className={[styles.transferIcon, 'dark:fill-white'].join(' ')} />
          </div>
          <div className={styles.fifthTransactionData}>
            <span className='!font-bold !text-primary'>serss...a5q</span>
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
