import React from 'react'

import styles from './styles.module.css'
import TopBar from '@/components/blocks/TopBar'
import Blocks from '@/sections/Block/Blocks'

const BlocksPage: React.FC = () => {
  return (
    <main className={[styles.container, 'dark:bg-cinder-light'].join(' ')}>
      <TopBar />
      <div className={styles.containerContent}>
        <h1 className='dark:text-white'>Blocks</h1>
        <Blocks />
      </div>
    </main>
  )
}

export default BlocksPage
