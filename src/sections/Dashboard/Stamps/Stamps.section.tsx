import React from 'react'

import styles from './styles.module.css'
import { Block, Heirachy, Nodes, Time, Transaction, Wallet } from '@/lib/assets/icons'
import { StampProps } from '@/lib/types/components.types'
import Stamp from '@/components/shared/Stamp'

const StampsSection: React.FC = () => {
  const stamps: StampProps[] = [
    { icon: <Wallet className='dark:fill-white' />, title: 'Addresses', value: '2 345 456' },
    { icon: <Block className='dark:fill-white' />, title: 'Block height', value: '2 345 456' },
    {
      icon: <Transaction className='dark:fill-white' />,
      title: 'Transactions',
      value: '2 345 456',
    },
    { icon: <Time className='dark:fill-white' />, title: 'TPS', value: '0.79' },
    { icon: <Nodes className='dark:fill-white' />, title: 'Nodes', value: '2 794' },
    { icon: <Heirachy className='dark:fill-white' />, title: 'DS Height', value: '15 794' },
  ]
  return (
    <section id='stamps_section' className={[styles.stampsContainer, 'dark:sectionide-gray-600'].join(' ')}>
      {stamps.map((stamp, index: number) => (
        <Stamp key={index} stamp={stamp} />
      ))}
    </section>
  )
}

export default StampsSection
