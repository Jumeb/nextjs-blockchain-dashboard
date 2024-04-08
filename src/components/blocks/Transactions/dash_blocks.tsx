import React from 'react'

import styles from './styles.module.css'
import Link from 'next/link'

const DashBlock: React.FC = () => {
  return (
    <>
      <div className={[styles.container, 'dark:bg-cinder hidden md:flex'].join(' ')}>
        {/* Dash Block header */}
        <div className={[styles.containerHeader, 'dark:bg-cinder-light/10'].join(' ')}>
          <h5 className='dark:text-white'>Blocks</h5>
          <Link href={'/blocks'} className='dark:text-primary-light'>
            View all
          </Link>
        </div>

        <div className={styles.scrollContainer}>
          {/* Dash Block table header  */}
          {/* Custom tables are easier to style and manipulate in my experience */}

          <div className={styles.dashTableHeader}>
            <div className={styles.firstBlockData}>
              <span className='dark:text-white'>Number</span>
            </div>
            <div className={styles.secondBlockData}>
              <span className='dark:text-white'>Amount</span>
            </div>
            <div className={styles.thirdBlockData}>
              <span className='dark:text-white'>Reward</span>
            </div>
            <div className={styles.fourthBlockData}>
              <span className='dark:text-white'>Time</span>
            </div>
          </div>

          {/* Dash transaction table body */}
          <div className={[styles.dashTableBodyContainer, 'dark:divide-gray-600'].join(' ')}>
            <div className={styles.dashTableBody}>
              <div className={styles.firstBlockData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>#1544968</span>
              </div>
              <div className={styles.secondBlockData}>
                <span className='dark:text-white'>11 Transaction</span>
              </div>
              <div className={styles.thirdBlockData}>
                <span className='dark:text-white'>Reward 100</span>
              </div>
              <div className={styles.fourthBlockData}>
                <span className='dark:text-white'>4 mins ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={[styles.containerHeader, 'dark:bg-cinder-light/50'].join(' ')}>
          <h5>Blocks</h5>
          <Link href={'/blocks'} className='dark:text-primary-light'>
            View all
          </Link>
        </div>
        <div className={[styles.card, 'dark:bg-cinder'].join(' ')}>
          <div className={styles.cardHeader}>
            <span className='!font-bold dark:text-white'>Time</span>
            <span className='dark:text-white'>10 mins</span>
          </div>
          <div className={[styles.cardBody, 'dark:divide-gray-300'].join(' ')}>
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>Number</span>
              <p className='!font-bold !text-primary dark:!text-primary-light'>
                0x183c09...d7e953b
              </p>
            </div>
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>Amount</span>
              <p className='!text-primary dark:!text-primary-light'>zinqw...a5q</p>
            </div>
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>Reward</span>
              <p className='!text-primary dark:!text-primary-light'>serss...a5q</p>
            </div>
          </div>
        </div>
        <div className={[styles.card, 'dark:bg-cinder'].join(' ')}>
          <div className={styles.cardHeader}>
              <span className='dark:text-white'>Wallet</span>
            <span className='dark:text-white'>10 mins</span>
          </div>
          <div className={[styles.cardBody, 'dark:divide-gray-300'].join(' ')}>
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>Wallet</span>
              <p className='!font-bold !text-primary dark:!text-primary-light'>
                0x183c09...d7e953b
              </p>
            </div>
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>From</span>
              <p className='!text-primary dark:!text-primary-light'>zinqw...a5q</p>
            </div>
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>To</span>
              <p className='!text-primary dark:!text-primary-light'>serss...a5q</p>
            </div>
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>Value</span>
              <p className='dark:text-white'>1,334,645 ZIL</p>
            </div>
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>Fee</span>
              <p className='dark:text-white'>2,81 ZIL</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBlock
