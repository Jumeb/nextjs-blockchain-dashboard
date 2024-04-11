'use client'

import React from 'react'

import styles from '../styles.module.css'
import Button from '@/components/shared/Buttons'
import { useAppSelector } from '@/redux/typings'
import { RootState } from '@/redux/store'
import BlocksTable from './blocks_table'
import BlockCard from './blocks_card'

const BlocksCardTable: React.FC = () => {
  const { blocks, filteredBlocks, loading } = useAppSelector((state: RootState) => state.dashSlice)
  return (
    <>
      <BlocksTable blocks={blocks} filteredBlocks={filteredBlocks} loading={loading} />

      <BlockCard blocks={blocks} filteredBlocks={filteredBlocks} loading={loading} />

      <div className={styles.buttonWrapper}>
        <Button
          text='Prev'
          onClick={() => console.log(123)}
          disabled
          loading={loading}
        />
        <Button
          text='Next'
          onClick={() => console.log(123)}
          loading={loading}
        />
      </div>
    </>
  )
}

export default BlocksCardTable
