import React from 'react'

import styles from './styles.module.css'
import BlocksCardTable from '@/components/blocks/Transactions/Blocks/blocks'

const Blocks: React.FC = () => {
  return (
    <section id='block' className={styles.container}>
      <BlocksCardTable/>
    </section>
  )
}

export default Blocks
