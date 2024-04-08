import React from 'react'

import styles from './styles.module.css'
import Card from '@/components/shared/Card'

const CardSection: React.FC = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'First dataset',
        data: [33, 53, 85, 41, 44, 65],
        fill: false,
        backgroundColor: 'transparent',
        borderColor: '#077a8f',
        tension: 0.4,
      },
    ],
  }
  return (
    <section id='card_section' className={styles.cardsContainer}>
      <Card title='Transactions' value='46 323' data={data} />
      <Card title='Address Growth' value='4 234' data={data} />
      <Card title='Blocks' value='5 234' data={data} />
    </section>
  )
}

export default CardSection
