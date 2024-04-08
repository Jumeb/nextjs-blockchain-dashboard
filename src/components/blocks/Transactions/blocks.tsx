'use client'

import React from 'react'

import styles from './styles.module.css'
import { Chevron } from '@/lib/assets/icons'
import { IconDir } from '@/lib/types/components.types'
import Button from '@/components/shared/Buttons'

const BlockTable: React.FC = () => {
  return (
    <>
      <div className={[styles.container, 'dark:bg-cinder hidden md:flex'].join(' ')}>
        <div className={styles.scrollContainer}>
          {/* Dash Block table header  */}
          {/* Custom tables are easier to style and manipulate in my experience */}

          <div className={styles.dashTableHeader}>
            <div className={styles.firstBlocksData}>
              <span className='dark:text-white'>Number</span>
            </div>
            <div className={styles.secondBlocksData}>
              <span className='dark:text-white'>Amount</span>
            </div>
            <div className={styles.thirdBlocksData}>
              <span className='dark:text-white'> Difficulty</span>
            </div>
            <div className={styles.fourthBlocksData}>
              <span className='dark:text-white'>Bloom</span>
            </div>
            <div className={styles.fifthBlocksData}>
              <span className='dark:text-white'>Hash</span>
            </div>
            <div className={styles.sixthBlocksData}>
              <span className='dark:text-white'>Tx Count</span>
            </div>
            <div className={styles.seventhBlocksData}>
              <span className='dark:text-white'>Gas Used</span>
            </div>
            <div className={styles.eighthBlocksData}>
              <span className='dark:text-white'>Gas Limit</span>
            </div>
            <div className={[styles.ninthBlocksData, '!justify-start'].join(' ')}>
              <span className='dark:text-white'>Time</span>
            </div>
          </div>

          {/* Dash Block table body */}
          <div className={[styles.dashTableBodyContainer, 'dark:divide-gray-600'].join(' ')}>
            <div className={styles.dashTableBody}>
              <div className={styles.firstBlocksData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>1232423</span>
              </div>
              <div className={styles.secondBlocksData}>
                <span className='dark:text-white'>112 Transactions</span>
              </div>
              <div className={styles.thirdBlocksData}>
                <span className='dark:text-white'>0</span>
              </div>
              <div className={styles.fourthBlocksData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>
                  zinqw...a5q
                </span>
              </div>
              <div className={[styles.fifthBlocksData, '!px-0'].join(' ')}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>
                  zinqw...a5q
                </span>
              </div>
              <div className={styles.sixthBlocksData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>
                  serss...a5q
                </span>
              </div>
              <div className={styles.seventhBlocksData}>
                <span className='dark:text-white'>2342523</span>
              </div>
              <div className={styles.eighthBlocksData}>
                <span className='dark:text-white'>352352</span>
              </div>
              <div className={[styles.ninthBlocksData, '!justify-start'].join(' ')}>
                <span className='dark:text-white'>4 mins ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cards}>
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
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>Difficulty</span>
              <p className='dark:text-white'>0</p>
            </div>
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>Bloom</span>
              <p className='dark:text-white'>0</p>
            </div>
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>Tx Count</span>
              <p className='dark:text-white'>0</p>
            </div>
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>Gas Used</span>
              <p className='dark:text-white'>0</p>
            </div>
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>Gas limit</span>
              <p className='dark:text-white'>0</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <Button text='Prev' icon={<Chevron />} onClick={() => console.log(123)} iconDir={IconDir.LEFT} disabled />
        <Button text='Next' icon={<Chevron className='rotate-180' />} onClick={() => console.log(123)} />
      </div>
    </>
  )
}

export default BlockTable
