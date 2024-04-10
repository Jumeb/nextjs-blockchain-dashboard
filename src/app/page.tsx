'use client'

import { useEffect, useState } from 'react'

import CardSection from '@/sections/Dashboard/Card/Cards.section'
import styles from './styles.module.css'
import StampsSection from '@/sections/Dashboard/Stamps/Stamps.section'
import TransBlockSection from '@/sections/Dashboard/TransBlock/TransBlock.section'
import TopBar from '@/components/blocks/TopBar'
import { useAppDispatch, useAppSelector } from '@/redux/typings'
import { blocksService, transactionsService } from '@/redux/dash/thunk/dash.thunk'
import Notification from '@/components/shared/Notification/notification.component'
import { RootState } from '@/redux/store'
import { resetNotifications } from '@/redux/dash/slice/dash.slice'

export default function Home() {
  const [notify, setNotify] = useState(false)
  const { message, error, loading, success } = useAppSelector((state: RootState) => state.dashSlice)
  const dispatch = useAppDispatch()
  let transactionsQuery = `query MyQuery {
    EVM(network: eth) {
      Transactions(limit: {count: 15}) {
        Transaction {
          To
          From
          Cost
          Value
          Type
          ToCode {
            Hash
          }
        }
        Fee {
          SenderFee
        }
        Block {
          Time
        }
      }
    }
  }`

  let blocksQuery = `query MyQuery {
    EVM(network: eth) {
      Blocks(limit: {count: 15}) {
        Block {
          Number
          Time
          GasUsed
          Hash
          Difficulty
          BaseFee
          Bloom
          TxCount
          GasLimit
        }
      }
    }
  }`

  useEffect(() => {
    dispatch(transactionsService(transactionsQuery))
    dispatch(blocksService(blocksQuery))
  }, [dispatch, transactionsQuery, blocksQuery])

  useEffect(() => {
    if (error && !loading && !success) {
      setNotify(true)
    }
    return () => {
      dispatch(resetNotifications())
    }
  }, [error, dispatch, loading, success])

  // const getTrans = await new DashService().transactionService(transactionsQuery)
  // const getBlocks = await new DashService().blockService(blocksQuery)
  return (
    <main className={[styles.container, 'dark:bg-cinder-light'].join(' ')}>
      <TopBar />
      <div className={styles.containerContent}>
        <StampsSection />
        <CardSection />
        <TransBlockSection />
      </div>
      <Notification show={notify} setShow={setNotify} message={message} />
    </main>
  )
}
