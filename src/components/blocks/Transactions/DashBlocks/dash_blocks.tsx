import React from 'react'

import { BlockProps } from '@/lib/types/components.types'
import DashBlockTable from './dash_blocks_table'
import DashBlockCard from './dash_blocks_card'

const DashBlock: React.FC<BlockProps> = ({loading, filteredBlocks, blocks}) => {
  return (
    <>
      <DashBlockTable loading={loading} filteredBlocks={filteredBlocks} blocks={blocks} />

      <DashBlockCard loading={loading} filteredBlocks={filteredBlocks} blocks={blocks} />
    </>
  )
}

export default DashBlock


/**
 * Tables for larger screens
 * Enough space for clear understanding of the data
 * Less user interactions to reach need data
 * Better user experience
 * 
 * Card for smaller screens
 * Not enough space for tables
 * Data can become crowded in tables
 * User will have to scroll horizontal to view data thus reducing user experience
 */