'use client'

import React from 'react'

import styles from './styles.module.css'
import { Chevron } from '@/lib/assets/icons'
import { IconDir } from '@/lib/types/components.types'
import Button from '@/components/shared/Buttons'
import { useAppSelector } from '@/redux/typings'
import { RootState } from '@/redux/store'
import { shortenData } from '@/lib/utils/cleandata'
import { ThousandSeparator } from '@/lib/utils/functions'
import Loading from '@/components/shared/Loading'

const BlockTable: React.FC = () => {
  const { blocks, filteredBlocks, loading } = useAppSelector((state: RootState) => state.dashSlice)
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
              <div key={index} className={styles.dashTableBody}>
                <div className={styles.firstBlocksData}>
                  <span className='!font-bold !text-primary dark:!text-primary-light'>
                    #{block.number}
                  </span>
                </div>
                <div className={styles.secondBlocksData}>
                  <span className='dark:text-white'>{block.tx_count} Transactions</span>
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

      <div className={styles.cards}>
        {filteredBlocks.length === 0 && blocks.length === 0 && loading && (
          <div className='w-fit mx-auto flex justify-center items-center scale-125 my-14'>
            <Loading />
          </div>
        )}
        {filteredBlocks.map((block, index: number) => (
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
                <span className='dark:text-white'>Hash</span>
                <p className=' !text-primary dark:!text-primary-light'>{shortenData(block.hash)}</p>
              </div>
              <div className={styles.cardBodyData}>
                <span className='dark:text-white'>Amount</span>
                <p className='dark:text-white'>{block.amount}</p>
              </div>
              <div className={styles.cardBodyData}>
                <span className='dark:text-white'>Transactions</span>
                <p className='dark:text-white'>{block.tx_count} Transactions</p>
              </div>
              <div className={styles.cardBodyData}>
                <span className='dark:text-white'>Difficulty</span>
                <p className='dark:text-white'>{block.difficulty}</p>
              </div>
              <div className={styles.cardBodyData}>
                <span className='dark:text-white'>Bloom</span>
                <p className='!text-primary dark:!text-primary-light'>{shortenData(block.bloom)}</p>
              </div>
              <div className={styles.cardBodyData}>
                <span className='dark:text-white'>Gas Used</span>
                <p className='dark:text-white'>{ThousandSeparator(block.gas_used, ' ')}</p>
              </div>
              <div className={styles.cardBodyData}>
                <span className='dark:text-white'>{ThousandSeparator(block.gas_limit, ' ')}</span>
                <p className='dark:text-white'>0</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <Button
          text='Prev'
          icon={<Chevron />}
          onClick={() => console.log(123)}
          iconDir={IconDir.LEFT}
          disabled
        />
        <Button
          text='Next'
          icon={<Chevron className='rotate-180' />}
          onClick={() => console.log(123)}
        />
      </div>
    </>
  )
}

export default BlockTable
