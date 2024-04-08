import React from 'react'

import styles from './styles.module.css'
import DashTransaction from '@/components/blocks/Transactions/dash_transaction'
import DashBlock from '@/components/blocks/Transactions/dash_blocks'

const TransBlockSection: React.FC = () => {
  return (
    <section id='trans_block_section' className={styles.container}>
      <div className={styles.containerTrans}>
        <DashTransaction />
      </div>
      <div className={styles.containerBlock}>
        <DashBlock />
      </div>
    </section>
  )
}

export default TransBlockSection
