import React from 'react'

import styles from './styles.module.css'
import BlockTable from '@/components/blocks/Transactions/blocks'

const Blocks: React.FC = () => {
  return (
    <section id='block' className={styles.container}>
      <BlockTable />
    </section>
  )
}

export default Blocks
