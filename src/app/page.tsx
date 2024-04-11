import CardSection from '@/sections/Dashboard/Card/Cards.section'
import styles from './styles.module.css'
import StampsSection from '@/sections/Dashboard/Stamps/Stamps.section'
import TransBlockSection from '@/sections/Dashboard/TransBlock/TransBlock.section'
import TopBar from '@/components/blocks/TopBar'

export default function Home() {
  
  return (
    <main className={[styles.container, 'dark:bg-cinder-light'].join(' ')}>
      <TopBar />
      <div className={styles.containerContent}>
        <StampsSection />
        <CardSection />
        <TransBlockSection />
      </div>
    </main>
  )
}
