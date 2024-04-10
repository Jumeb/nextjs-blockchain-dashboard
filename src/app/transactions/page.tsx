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
import { resetNotifications } from '@/redux/dash/slice/dash.slice'

const TransactionsPage: React.FC = () => {
  const [notify, setNotify] = useState(false)
  const { filteredTransactions, loading, error, success, message } = useAppSelector((state: RootState) => state.dashSlice)
  const dispatch = useAppDispatch()
  let transactionsQuery = `query MyQuery {
    EVM(network: eth) {
      Transactions(limit: {count: 20}) {
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
        </div>
        <Transactions />
      </div>
      <Notification show={notify} setShow={setNotify} message={message} />
    </main>
  )
}

export default TransactionsPage
