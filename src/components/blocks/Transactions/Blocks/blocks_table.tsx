import React from 'react'

import styles from '../styles.module.css'
import { BlockProps } from '@/lib/types/components.types'
import Loading from '@/components/shared/Loading'
import { shortenData } from '@/lib/utils/cleandata'
import { ThousandSeparator } from '@/lib/utils/functions'

const BlocksTable: React.FC<BlockProps> = ({ blocks, filteredBlocks, loading }) => {
  return (
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
            <span className='dark:text-white'>Transaction</span>
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
          {filteredBlocks.length === 0 && blocks.length === 0 && loading && (
            <div className='w-fit mx-auto flex justify-center items-center scale-125 my-14'>
              <Loading />
            </div>
          )}
          {filteredBlocks.map((block, index: number) => (
            <div data-testid='block' key={index} className={styles.dashTableBody}>
              <div className={styles.firstBlocksData}>
                <span className='!font-bold !text-primary dark:!text-primary-light'>
                  #{block.number}
                </span>
              </div>
              <div className={styles.secondBlocksData}>
                <span className='dark:text-white'>{block.amount}</span>
              </div>
              <div className={styles.thirdBlocksData}>
                <span className='dark:text-white'>{block.difficulty}</span>
              </div>
              <div className={styles.fourthBlocksData}>
                <span className='!text-primary dark:!text-primary-light'>
                  {shortenData(block.bloom)}
                </span>
              </div>
              <div className={[styles.fifthBlocksData, '!px-0'].join(' ')}>
                <span className=' !text-primary dark:!text-primary-light'>
                  {shortenData(block.hash, 7)}
                </span>
              </div>
              <div className={styles.sixthBlocksData}>
                <span className=' dark:text-white'>{block.tx_count} Transactions</span>
              </div>
              <div className={styles.seventhBlocksData}>
                <span className='dark:text-white'>{ThousandSeparator(block.gas_used, ' ')}</span>
              </div>
              <div className={styles.eighthBlocksData}>
                <span className='dark:text-white'>{ThousandSeparator(block.gas_limit, ' ')}</span>
              </div>
              <div className={[styles.ninthBlocksData, '!justify-start'].join(' ')}>
                <span className='dark:text-white'>{block.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlocksTable
