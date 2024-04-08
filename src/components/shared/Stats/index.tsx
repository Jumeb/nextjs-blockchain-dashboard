import React from 'react'

import styles from './styles.module.css'
import { StatsProps } from '@/lib/types/components.types'

const Stats: React.FC<StatsProps> = ({ title, value }) => {
  return (
    <div className={styles.container}>
      <p className='dark:!text-white'>{title}</p>
      <p>{value}</p>
    </div>
  )
}

export default Stats
