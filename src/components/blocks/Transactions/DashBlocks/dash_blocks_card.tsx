import React from 'react'

import styles from '../styles.module.css'
import { BlockProps } from '@/lib/types/components.types'
import Loading from '@/components/shared/Loading'
import Link from 'next/link'
import { ThousandSeparator } from '@/lib/utils/functions'
import { Refresh } from '@/lib/assets/icons'

const DashBlockCard: React.FC<BlockProps> = ({ loading, filteredBlocks, blocks, refreshBlocks }) => {
  return (
    <div className={styles.cards}>
      <div className={[styles.containerHeader, 'dark:bg-cinder-light/50'].join(' ')}>
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
      {filteredBlocks.length === 0 && blocks.length === 0 && loading && (
        <div className='w-fit mx-auto flex justify-center items-center scale-125 my-14'>
          <Loading />
        </div>
      )}
      {filteredBlocks.slice(0, 15).map((block, index: number) => (
        <div key={index} data-testid='block' className={[styles.card, 'dark:bg-cinder'].join(' ')}>
          <div className={styles.cardHeader} data-testid='block-header'>
            <span data-testid="value" className='!font-bold dark:text-white'>Time</span>
            <span data-testid="label" className='dark:text-white'>{block.time}</span>
          </div>
          <div className={[styles.cardBody, 'dark:divide-gray-300'].join(' ')}>
            <div data-testid='block-data' className={styles.cardBodyData}>
              <span className='dark:text-white'>Number</span>
              <p className='!font-bold !text-primary dark:!text-primary-light'>#{block.number}</p>
            </div>
            <div data-testid='block-data' className={styles.cardBodyData}>
              <span className='dark:text-white'>Amount</span>
              <p className='!text-primary dark:!text-primary-light'>
                {block.tx_count} Transactions
              </p>
            </div>
            <div data-testid='block-data' className={styles.cardBodyData}>
              <span className='dark:text-white'>Gas used</span>
              <p className='!text-primary dark:!text-primary-light'>
                {ThousandSeparator(block.gas_used, ' ')}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DashBlockCard

// I designed cards for smaller devices as tables become crowded or the user has to scroll sideways which decreases UX
