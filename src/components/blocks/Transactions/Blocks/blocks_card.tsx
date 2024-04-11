import React from 'react'

import styles from '../styles.module.css'
import { BlockProps } from '@/lib/types/components.types'
import Loading from '@/components/shared/Loading'
import { shortenData } from '@/lib/utils/cleandata'
import { ThousandSeparator } from '@/lib/utils/functions'

const BlockCard: React.FC<BlockProps> = ({ filteredBlocks, blocks, loading }) => {
  return (
    <div className={styles.cards}>
      {filteredBlocks.length === 0 && blocks.length === 0 && loading && (
        <div className='w-fit mx-auto flex justify-center items-center scale-125 my-14'>
          <Loading />
        </div>
      )}
      {filteredBlocks.map((block, index: number) => (
        <div data-testid='block' key={index} className={[styles.card, 'dark:bg-cinder'].join(' ')}>
          <div data-testid='block-header' className={styles.cardHeader}>
            <span data-testid='value' className='!font-bold dark:text-white'>
              Time
            </span>
            <span data-testid='label' className='dark:text-white'>
              {block.time}
            </span>
          </div>
          <div className={[styles.cardBody, 'dark:divide-gray-300'].join(' ')}>
            <div data-testid='block-data' className={styles.cardBodyData}>
              <span className='dark:text-white'>Number</span>
              <p className='!font-bold !text-primary dark:!text-primary-light'>#{block.number}</p>
            </div>
            <div data-testid='block-data' className={styles.cardBodyData}>
              <span className='dark:text-white'>Hash</span>
              <p className=' !text-primary dark:!text-primary-light'>{shortenData(block.hash)}</p>
            </div>
            <div data-testid='block-data' className={styles.cardBodyData}>
              <span className='dark:text-white'>Amount</span>
              <p className='dark:text-white'>{block.amount}</p>
            </div>
            <div data-testid='block-data' className={styles.cardBodyData}>
              <span className='dark:text-white'>Transactions</span>
              <p className='dark:text-white'>{block.tx_count} Transactions</p>
            </div>
            <div data-testid='block-data' className={styles.cardBodyData}>
              <span className='dark:text-white'>Difficulty</span>
              <p className='dark:text-white'>{block.difficulty}</p>
            </div>
            <div data-testid='block-data' className={styles.cardBodyData}>
              <span className='dark:text-white'>Bloom</span>
              <p className='!text-primary dark:!text-primary-light'>{shortenData(block.bloom)}</p>
            </div>
            <div data-testid='block-data' className={styles.cardBodyData}>
              <span className='dark:text-white'>Gas Used</span>
              <p className='dark:text-white'>{ThousandSeparator(block.gas_used, ' ')}</p>
            </div>
            <div data-testid='block-data' className={styles.cardBodyData}>
              <span className='dark:text-white'>{ThousandSeparator(block.gas_limit, ' ')}</span>
              <p className='dark:text-white'>0</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlockCard
