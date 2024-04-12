import React from 'react'

import { BlockProps } from '@/lib/types/components.types'
import styles from '../styles.module.css'
import { ThousandSeparator } from '@/lib/utils/functions'
import Loading from '@/components/shared/Loading'
import Link from 'next/link'
import { Refresh } from '@/lib/assets/icons'
import moment from 'moment'

const DashBlockTable: React.FC<BlockProps> = ({ filteredBlocks, loading, blocks, refreshBlocks = () => {} }) => {
  return (
    <div className={[styles.container, 'dark:bg-cinder hidden md:flex'].join(' ')}>
      {/* Dash Block header */}
      <div className={[styles.containerHeader, 'dark:bg-cinder-light/10'].join(' ')}>
        <h5 className='mr-auto dark:text-white'>Blocks</h5>
        {filteredBlocks.length != 0 && loading && (
          <div className='scale-[0.6] mr-2'>
            <Loading />
          </div>
        )}
        <Link href={'/blocks'} className='mr-2 dark:text-primary-light'>
          View all
        </Link>
        <button onClick={refreshBlocks} className={[styles.headerRefresh, 'dark:bg-cinder-light'].join(' ')}>
          <Refresh className={[styles.headerRefreshIcon, 'dark:fill-white'].join(' ')} />
        </button>
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
            <div data-testid='block' key={index} className={styles.dashTableBody}>
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
                <span className='dark:text-white'>{moment(block.time).fromNow()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashBlockTable
