'use client'

import React from 'react'

import styles from './styles.module.css'
import { Arrow, Chevron } from '@/lib/assets/icons'
import Type from '@/components/shared/Transaction'
import { IconDir, TypeEnum } from '@/lib/types/components.types'
import Button from '@/components/shared/Buttons'

const TransactionTable: React.FC = () => {
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
            <div className={styles.dashTableBody}>
              <div className={styles.firstTransData}>
                <Type type={TypeEnum.CANCELLED} />
              </div>
              <div className={styles.secondTransData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>
                  0x183c09...d7e953b
                </span>
              </div>
              <div className={styles.thirdTransData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>
                  2,345,574 ZIL
                </span>
              </div>
              <div className={styles.fourthTransData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>
                  zinqw...a5q
                </span>
              </div>
              <div className={[styles.fifthTransData, '!px-0'].join(' ')}>
                <Arrow className={[styles.transferIcon, 'dark:fill-white'].join(' ')} />
              </div>
              <div className={styles.sixthTransData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>
                  serss...a5q
                </span>
              </div>
              <div className={styles.seventhTransData}>
                <span className='dark:text-white'>10 WIL</span>
              </div>
              <div className={styles.eighthTransData}>
                <span className='dark:text-white'>4 mins ago</span>
              </div>
              <div className={[styles.ninthTransData, '!justify-start'].join(' ')}>
                <span className='dark:text-white'>2.9 ZIL</span>
              </div>
            </div>

            <div className={styles.dashTableBody}>
              <div className={styles.firstTransData}>
                <Type type={TypeEnum.PENDING} />
              </div>
              <div className={styles.secondTransData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>
                  0x183c09...d7e953b
                </span>
              </div>
              <div className={styles.thirdTransData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>
                  2,345,574 ZIL
                </span>
              </div>
              <div className={styles.fourthTransData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>
                  zinqw...a5q
                </span>
              </div>
              <div className={[styles.fifthTransData, '!px-0'].join(' ')}>
                <Arrow className={[styles.transferIcon, 'dark:fill-white'].join(' ')} />
              </div>
              <div className={styles.sixthTransData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>
                  serss...a5q
                </span>
              </div>
              <div className={styles.seventhTransData}>
                <span className='dark:text-white'>10 WIL</span>
              </div>
              <div className={styles.eighthTransData}>
                <span className='dark:text-white'>4 mins ago</span>
              </div>
              <div className={[styles.ninthTransData, '!justify-start'].join(' ')}>
                <span className='dark:text-white'>2.9 ZIL</span>
              </div>
            </div>

            <div className={styles.dashTableBody}>
              <div className={styles.firstTransData}>
                <Type type={TypeEnum.SUCCESS} />
              </div>
              <div className={styles.secondTransData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>
                  0x183c09...d7e953b
                </span>
              </div>
              <div className={styles.thirdTransData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>
                  2,345,574 ZIL
                </span>
              </div>
              <div className={styles.fourthTransData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>
                  zinqw...a5q
                </span>
              </div>
              <div className={[styles.fifthTransData, '!px-0'].join(' ')}>
                <Arrow className={[styles.transferIcon, 'dark:fill-white'].join(' ')} />
              </div>
              <div className={styles.sixthTransData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>
                  serss...a5q
                </span>
              </div>
              <div className={styles.seventhTransData}>
                <span className='dark:text-white'>10 WIL</span>
              </div>
              <div className={styles.eighthTransData}>
                <span className='dark:text-white'>4 mins ago</span>
              </div>
              <div className={[styles.ninthTransData, '!justify-start'].join(' ')}>
                <span className='dark:text-white'>2.9 ZIL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cards}>
        <div className={[styles.card, 'dark:bg-cinder'].join(' ')}>
          <div className={styles.cardHeader}>
            <Type type={TypeEnum.CANCELLED} />
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
            <div className={styles.cardBodyData}>
              <span className='dark:text-white'>Amount</span>
              <p className='dark:text-white'>1,334,645 ZIL</p>
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

export default TransactionTable
