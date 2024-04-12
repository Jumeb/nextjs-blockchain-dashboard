'use client'

import styles from './styles.module.css'
import CardSection from '@/sections/Dashboard/Card/Cards.section'
import StampsSection from '@/sections/Dashboard/Stamps/Stamps.section'
import TransBlockSection from '@/sections/Dashboard/TransBlock/TransBlock.section'
import TopBar from '@/components/blocks/TopBar'
import TopButton from '@/components/shared/ScrollTop/Index'
import { useScrollPosition } from '@/lib/hooks/useScrollPosition'
import Footer from '@/sections/Footer/Footer.section'

export default function Home() {
  const position = useScrollPosition();
  
  return (
    <main className={[styles.container, 'dark:bg-cinder-light'].join(' ')}>
      <TopBar />
      <div className={styles.containerContent}>
        <StampsSection />
        <CardSection />
        <TransBlockSection />
        <Footer />
      </div>
      <TopButton show={position > 200} />
    </main>
  )
}
