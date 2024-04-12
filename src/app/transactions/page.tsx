'use client'

import React, { useEffect, useState } from 'react'

import styles from './styles.module.css'
import TopBar from '@/components/blocks/TopBar'
import Transactions from '@/sections/Transaction/Transactions'
import { RootState } from '@/redux/store'
import { useAppDispatch, useAppSelector } from '@/redux/typings'
import Loading from '@/components/shared/Loading'
import { transactionsService } from '@/redux/dash/thunk/dash.thunk'
import Notification from '@/components/shared/Notification/notification.component'
import { resetNotifications, setTransOffset } from '@/redux/dash/slice/dash.slice'
import { Refresh } from '@/lib/assets/icons'
import { useScrollPosition } from '@/lib/hooks/useScrollPosition'
import TopButton from '@/components/shared/ScrollTop/Index'

const TransactionsPage: React.FC = () => {
  const position = useScrollPosition();
  const [notify, setNotify] = useState(false)
  const { filteredTransactions, loading, error, success, message, transOffset } = useAppSelector(
    (state: RootState) => state.dashSlice,
  )
  const dispatch = useAppDispatch()
  let transactionsQuery = `query MyQuery {
    EVM(network: eth) {
      Transactions(limit: {count: ${transOffset}}) {
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

  useEffect(() => {
    dispatch(transactionsService(transactionsQuery))
  }, [dispatch, transactionsQuery])

  useEffect(() => {
    if (error && !loading && !success) {
      setNotify(true)
    }
    return () => {
      dispatch(resetNotifications())
    }
  }, [error, dispatch, loading, success])

  const refreshTransactions = () => {
    dispatch(transactionsService(transactionsQuery))
    dispatch(setTransOffset(20))
  }

  return (
    <main className={[styles.container, 'dark:bg-cinder-light'].join(' ')}>
      <TopBar />
      <div className={styles.containerContent}>
        <div>
          <h1 className='dark:text-white'>Transactions</h1>
          {filteredTransactions.length != 0 && loading && (
            <div className='scale-[0.6] ml-auto mr-2'>
              <Loading />
            </div>
          )}
          <button
            onClick={refreshTransactions}
            className={[styles.headerRefresh, 'dark:bg-cinder-light'].join(' ')}
          >
            <Refresh className={[styles.headerRefreshIcon, 'dark:fill-white'].join(' ')} />
          </button>
        </div>
        <Transactions refreshTransactions={refreshTransactions} />
      </div>
      <Notification show={notify} setShow={setNotify} message={message} />
      <TopButton show={position > 200} />
    </main>
  )
}

export default TransactionsPage
