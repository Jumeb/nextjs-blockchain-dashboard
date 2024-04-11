'use client'

import React from 'react'

import styles from '../styles.module.css'
import Button from '@/components/shared/Buttons'
import { useAppDispatch, useAppSelector } from '@/redux/typings'
import { RootState } from '@/redux/store'
import BlocksTable from './blocks_table'
import BlockCard from './blocks_card'
import { setBlockOffset } from '@/redux/dash/slice/dash.slice'

const BlocksCardTable: React.FC<{refreshBlocks: () => void}> = ({refreshBlocks}) => {
  const { blocks, filteredBlocks, loading, blocksOffset } = useAppSelector((state: RootState) => state.dashSlice)
  const dispatch = useAppDispatch()
  return (
    <>
      <BlocksTable blocks={blocks} filteredBlocks={filteredBlocks} loading={loading} refreshBlocks={refreshBlocks} />

      <BlockCard blocks={blocks} filteredBlocks={filteredBlocks} loading={loading} refreshBlocks={refreshBlocks} />

      <div className={styles.buttonWrapper}>
        <Button
          text='Load More'
          onClick={() => dispatch(setBlockOffset(blocksOffset+5))}
          loading={loading}
          disabled={loading}
        />
      </div>
    </>
  )
}

export default BlocksCardTable
