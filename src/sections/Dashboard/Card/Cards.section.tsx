'use client'
import React, { useEffect, useRef } from 'react'

import styles from './styles.module.css'
import Card from '@/components/shared/Card'
import { useAppSelector } from '@/redux/typings'
import { RootState } from '@/redux/store'
import { groupBlocksByTime, sumData } from '@/lib/utils/cleandata'
import { ThousandSeparator } from '@/lib/utils/functions'

const CardSection: React.FC = () => {
  const { blocks } = useAppSelector((state: RootState) => state.dashSlice)
  const data = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        label: 'First dataset',
        data: [0, 0, 0, 0, 0, 0],
        fill: false,
        backgroundColor: 'transparent',
        borderColor: '#077a8f',
        tension: 0.4,
      },
    ],
  }

  let blockData = useRef({
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        label: 'First dataset',
        data: [0, 0, 0, 0, 0, 0],
        fill: false,
        backgroundColor: 'transparent',
        borderColor: '#077a8f',
        tension: 0.4,
      },
    ],
  })

  let transData = useRef({
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        label: 'First dataset',
        data: [0, 0, 0, 0, 0, 0],
        fill: false,
        backgroundColor: 'transparent',
        borderColor: '#077a8f',
        tension: 0.4,
      },
    ],
  })

  useEffect(() => {
    if (blocks.length > 0) {
     blockData.current = groupBlocksByTime([...blocks])[0]
     transData.current = groupBlocksByTime([...blocks])[1]
    }
  }, [blocks])
  return (
    <section id='card_section' className={styles.cardsContainer}>
      <Card title='Transactions' value={ThousandSeparator(sumData(transData.current.datasets[0]?.data), ' ')} data={transData.current} />
      <Card title='Blocks' value={ThousandSeparator(sumData(blockData.current.datasets[0]?.data), ' ')}  data={blockData.current} />
      <Card title='Address Growth' value='- ---' data={data} />
    </section>
  )
}

export default CardSection
