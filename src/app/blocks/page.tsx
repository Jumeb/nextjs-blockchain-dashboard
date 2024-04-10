'use client'

import React, { useEffect, useState } from 'react'

import styles from './styles.module.css'
import TopBar from '@/components/blocks/TopBar'
import Blocks from '@/sections/Block/Blocks'
import Loading from '@/components/shared/Loading'
import { useAppDispatch, useAppSelector } from '@/redux/typings'
import { RootState } from '@/redux/store'
import { blocksService } from '@/redux/dash/thunk/dash.thunk'
import { resetNotifications } from '@/redux/dash/slice/dash.slice'
import Notification from '@/components/shared/Notification/notification.component'

const BlocksPage: React.FC = () => {
  const [notify, setNotify] = useState(false)
  const { filteredBlocks, loading, success, message, error } = useAppSelector((state: RootState) => state.dashSlice)
  const dispatch = useAppDispatch()
  let blocksQuery = `query MyQuery {
    EVM(network: eth) {
      Blocks(limit: {count: 20}) {
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
    dispatch(blocksService(blocksQuery))
  }, [dispatch, blocksQuery])

  useEffect(() => {
    if (error && !loading && !success) {
      setNotify(true)
    }
    return () => {
      dispatch(resetNotifications())
    }
  }, [error, dispatch, loading, success])

  return (
    <main className={[styles.container, 'dark:bg-cinder-light'].join(' ')}>
      <TopBar />
      <div className={styles.containerContent}>
        <div>
          <h1 className='dark:text-white'>Blocks</h1>
          {filteredBlocks.length != 0 && loading && (
            <div className='scale-[0.6] ml-auto mr-2'>
              <Loading />
            </div>
          )}
        </div>
        <Blocks />
      </div>
      <Notification show={notify} setShow={setNotify} message={message} />
    </main>
  )
}

export default BlocksPage
