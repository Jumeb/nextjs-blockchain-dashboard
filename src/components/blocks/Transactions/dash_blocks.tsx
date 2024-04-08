import React from 'react'

import styles from './styles.module.css'
import Link from 'next/link'

const DashBlock: React.FC = () => {
  return (
    <div className={[styles.container, 'dark:bg-cinder'].join(' ')}>
      {/* Dash Block header */}
      <div className={styles.containerHeader}>
        <h5 className='dark:text-white'>Blocks</h5>
        <Link href={'#'} className='dark:text-primary-light'>
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
  )
}

export default DashBlock
