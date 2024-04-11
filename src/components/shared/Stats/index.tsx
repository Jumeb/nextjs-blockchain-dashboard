import React from 'react'

import styles from './styles.module.css'
import { StatsProps } from '@/lib/types/components.types'

const Stats: React.FC<StatsProps> = ({ title, value }) => {
  return (
    <div data-testid='stats' className={styles.container}>
      <p data-testid='paragraph' className='dark:!text-white'>
        {title}
      </p>
      <p data-testid='paragraph'>{value}</p>
    </div>
  )
}

export default Stats
