'use client'

import React, { useEffect, useState } from 'react'

import styles from './styles.module.css'
import TopBar from '@/components/blocks/TopBar'
import Blocks from '@/sections/Block/Blocks'
import Loading from '@/components/shared/Loading'
import { useAppDispatch, useAppSelector } from '@/redux/typings'
import { RootState } from '@/redux/store'
import { blocksService } from '@/redux/dash/thunk/dash.thunk'
import { resetNotifications, setBlockOffset } from '@/redux/dash/slice/dash.slice'
import Notification from '@/components/shared/Notification/notification.component'
import { Refresh } from '@/lib/assets/icons'
import TopButton from '@/components/shared/ScrollTop/Index'
import { useScrollPosition } from '@/lib/hooks/UseScrollPosition'

const BlocksPage: React.FC = () => {
  const position = useScrollPosition();
  const [notify, setNotify] = useState(false)
  const { filteredBlocks, loading, success, message, error, blocksOffset } = useAppSelector(
    (state: RootState) => state.dashSlice,
  )
  const dispatch = useAppDispatch()
  let blocksQuery = `query MyQuery {
    EVM(network: eth) {
      Blocks(limit: {count: ${blocksOffset}}) {
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

  const refreshBlocks = () => {
    dispatch(blocksService(blocksQuery))
    dispatch(setBlockOffset(20))
  }

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
          <button
            onClick={refreshBlocks}
            className={[styles.headerRefresh, 'dark:bg-cinder-light'].join(' ')}
          >
            <Refresh className={[styles.headerRefreshIcon, 'dark:fill-white'].join(' ')} />
          </button>
        </div>
        <Blocks refreshBlocks={refreshBlocks} />
      </div>
      <Notification show={notify} setShow={setNotify} message={message} />
      <TopButton show={position > 200} />
    </main>
  )
}

export default BlocksPage
