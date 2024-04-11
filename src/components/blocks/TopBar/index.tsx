'use client'

import React, { useEffect } from 'react'

import styles from './styles.module.css'
import SearchInput from '@/components/shared/SearchInput'
import { useForm } from '@/lib/hooks/useForm'
import Stats from '@/components/shared/Stats'
import DropDown from '@/components/shared/DropDown'
import { TopBarDropList } from '@/lib/static/list'
import { useAppDispatch, useAppSelector } from '@/redux/typings'
import { RootState } from '@/redux/store'
import { filterBlocks, filterTransactions } from '@/redux/dash/slice/dash.slice'

const TopBar: React.FC = () => {
  const dispatch = useAppDispatch()
  const {transactions = [], blocks = []} = useAppSelector((state: RootState) => state.dashSlice)
  const { formdata, clearValue, onChange, updateDropForm } = useForm<{
    search: string
    dropdown: string
  }>({ search: '', dropdown: '' })
  const { search, dropdown } = formdata

  useEffect(() => {
    dispatch(filterTransactions({
      transactions,
      search
    }))
    dispatch(filterBlocks({
      blocks,
      search
    }))
  }, [dispatch, search, transactions, blocks])

  return (
    <div className={[styles.container, 'dark:bg-cinder'].join(' ')}>
      <div className={styles.hackSpace}></div>
      <div className={styles.containerFirst}>
        <DropDown
          label='Mainnet'
          options={TopBarDropList}
          value={dropdown}
          setValue={updateDropForm}
          name='dropdown'
        />
      </div>
      <div className={styles.containerSearch}>
        <SearchInput clearValue={clearValue} value={search} onChange={onChange} />
      </div>
      <div className={styles.containerDetails}>
        <div className={styles.statsContainer}>
          <Stats title='Price' value='$0.101' />
          <Stats title='Market Cap' value='$1,27B' />
          <Stats title='Volume' value='$92,95M' />
        </div>
        <div className={[styles.userProfile, 'dark:bg-cinder-light'].join(' ')}>
          <p data-testid='paragraph' className='dark:text-white'>JB</p>
        </div>
      </div>
    </div>
  )
}

export default TopBar
