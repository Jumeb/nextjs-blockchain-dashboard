import React from 'react'

import styles from './styles.module.css'
import Link from 'next/link'
import { useAppSelector } from '@/redux/typings'
import { RootState } from '@/redux/store'
import Loading from '@/components/shared/Loading'
import { ThousandSeparator } from '@/lib/utils/functions'

const DashBlock: React.FC = () => {
  const { blocks, filteredBlocks, loading } = useAppSelector((state: RootState) => state.dashSlice)
  return (
    <>
      <div className={[styles.container, 'dark:bg-cinder hidden md:flex'].join(' ')}>
        {/* Dash Block header */}
        <div className={[styles.containerHeader, 'dark:bg-cinder-light/10'].join(' ')}>
          <h5 className='dark:text-white'>Blocks</h5>
          {filteredBlocks.length != 0 && loading && (
            <div className='scale-[0.6] ml-auto mr-2'>
              <Loading />
            </div>
          )}
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
              <span className='dark:text-white'>Transaction</span>
            </div>
            <div className={styles.thirdBlockData}>
              <span className='dark:text-white'>Gas used</span>
            </div>
            <div className={styles.fourthBlockData}>
              <span className='dark:text-white'>Time</span>
            </div>
          </div>

          {/* Dash transaction table body */}
          <div className={[styles.dashTableBodyContainer, 'dark:divide-gray-600'].join(' ')}>
            {filteredBlocks.length === 0 && blocks.length === 0 && loading && (
              <div className='w-fit mx-auto flex justify-center items-center scale-125 my-14'>
                <Loading />
              </div>
            )}
            {filteredBlocks.slice(0, 15).map((block, index: number) => (
              <div key={index} className={styles.dashTableBody}>
                <div className={styles.firstBlockData}>
                  <span className='!font-bold !text-primary dark:!text-primary-light'>
                    #{block.number}
                  </span>
                </div>
                <div className={styles.secondBlockData}>
                  <span className='dark:text-white'>{block.tx_count} Transaction</span>
                </div>
                <div className={styles.thirdBlockData}>
                  <span className='dark:text-white'>{ThousandSeparator(block.gas_used, ' ')}</span>
                </div>
                <div className={styles.fourthBlockData}>
                  <span className='dark:text-white'>{block.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.cards}>
        <div className={[styles.containerHeader, 'dark:bg-cinder-light/50'].join(' ')}>
          <h5 className='dark:text-white'>Blocks</h5>
          {filteredBlocks.length != 0 && loading && (
            <div className='scale-[0.6] ml-auto mr-2'>
              <Loading />
            </div>
          )}
          <Link href={'/blocks'} className='dark:text-primary-light'>
            View all
          </Link>
        </div>
        {filteredBlocks.length === 0 && blocks.length === 0 && loading && (
          <div className='w-fit mx-auto flex justify-center items-center scale-125 my-14'>
            <Loading />
          </div>
        )}
        {filteredBlocks.slice(0, 15).map((block, index: number) => (
          <div key={index} className={[styles.card, 'dark:bg-cinder'].join(' ')}>
            <div className={styles.cardHeader}>
              <span className='!font-bold dark:text-white'>Time</span>
              <span className='dark:text-white'>{block.time}</span>
            </div>
            <div className={[styles.cardBody, 'dark:divide-gray-300'].join(' ')}>
              <div className={styles.cardBodyData}>
                <span className='dark:text-white'>Number</span>
                <p className='!font-bold !text-primary dark:!text-primary-light'>#{block.number}</p>
              </div>
              <div className={styles.cardBodyData}>
                <span className='dark:text-white'>Amount</span>
                <p className='!text-primary dark:!text-primary-light'>
                  {block.tx_count} Transactions
                </p>
              </div>
              <div className={styles.cardBodyData}>
                <span className='dark:text-white'>Gas used</span>
                <p className='!text-primary dark:!text-primary-light'>
                  {ThousandSeparator(block.gas_used, ' ')}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default DashBlock
