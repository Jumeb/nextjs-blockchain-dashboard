import React from 'react'

import styles from './styles.module.css'
import BlocksCardTable from '@/components/blocks/Transactions/Blocks/blocks'

const Blocks: React.FC<{refreshBlocks: () => void}> = ({refreshBlocks}) => {
  return (
    <section id='block' className={styles.container}>
      <BlocksCardTable refreshBlocks={refreshBlocks} />
    </section>
  )
}

export default Blocks
