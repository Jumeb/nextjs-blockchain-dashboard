'use client'

import React, { useEffect, useState } from 'react'

import styles from './styles.module.css'
import DashTransaction from '@/components/blocks/Transactions/DashTransactions/dash_transaction'
import DashBlock from '@/components/blocks/Transactions/DashBlocks/dash_blocks'
import { RootState } from '@/redux/store'
import { useAppDispatch, useAppSelector } from '@/redux/typings'
import { blocksService, transactionsService } from '@/redux/dash/thunk/dash.thunk'
import Notification from '@/components/shared/Notification/notification.component'
import { resetNotifications } from '@/redux/dash/slice/dash.slice'

const TransBlockSection: React.FC = () => {
  const [notify, setNotify] = useState(false)
  const {
    message,
    error,
    loading,
    success,
    transactions,
    filteredTransactions,
    blocks,
    filteredBlocks,
  } = useAppSelector((state: RootState) => state.dashSlice)
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
  const {} = useAppSelector((state: RootState) => state.dashSlice)

  const refreshBlocks = () => {
    dispatch(blocksService(blocksQuery))
  }

  const refreshTransactions = () => {
    dispatch(transactionsService(transactionsQuery))
  }
  return (
    <section id='trans_block_section' className={styles.container}>
      <div className={styles.containerTrans}>
        <DashTransaction
          loading={loading}
          filteredTransactions={filteredTransactions}
          transactions={transactions}
          refreshTransactions={refreshTransactions}
        />
      </div>
      <div className={styles.containerBlock}>
        <DashBlock
          blocks={blocks}
          filteredBlocks={filteredBlocks}
          loading={loading}
          refreshBlocks={refreshBlocks}
        />
      </div>
      <Notification show={notify} setShow={setNotify} message={message} />
    </section>
  )
}

export default TransBlockSection
