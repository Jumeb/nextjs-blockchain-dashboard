import React from 'react'

import styles from './styles.module.css'
import { Close, Search } from '@/lib/assets/icons'
import { SearchInputProps } from '@/lib/types/components.types'

const SearchInput: React.FC<SearchInputProps> = ({ value, clearValue, onChange }) => {
  return (
    <div className={[styles.container, 'dark:border-gray-light'].join(' ')}>
      <Search className={[styles.searchIcon, 'dark:fill-white'].join(' ')} />
      <input placeholder='Search for a tx, address, name or block' className='dark:text-white' onChange={onChange} name='search' value={value} />
      {value.length > 1 && (
        <div onClick={() => clearValue('search')} className='cursor-pointer'>
          <Close className={`${styles.searchIcon} dark:fill-white`} />
        </div>
      )}
    </div>
  )
}

export default SearchInput
