'use client'
import React, { useState } from 'react'

import styles from './styles.module.css'
import { DropDownProps, OptionsType } from '@/lib/types/components.types'
import { Chevron } from '@/lib/assets/icons'

const DropDown: React.FC<DropDownProps> = ({
  options,
  value,
  label,
  setValue,
  name,
  disabled = false,
}) => {
  const [drop, setDrop] = useState(false)
  const handleSelect = (option: OptionsType) => {
    setValue(option, name)
    setDrop(!drop)
  }
  return (
    <div
      data-testid='drop-down'
      className={[styles.dropdown, disabled ? 'cursor-not-allowed' : 'cursor-pointer'].join(' ')}
    >
      <button
        data-testid='drop-button'
        className={[styles.dropdownSelect, 'dark:bg-cinder-light'].join(' ')}
        onClick={() => setDrop(!drop)}
      >
        <span className='dark:text-white' data-testid='button-value'>
          {options.find((opt) => opt.value === value)?.label || label}
        </span>
        <div className={styles.dropdownIconContainer} onClick={() => setDrop(!drop)}>
          <Chevron
            className={[
              styles.dropdownIcon,
              drop ? 'rotate-90' : '-rotate-90',
              'dark:fill-white',
            ].join(' ')}
          />
        </div>
      </button>
      <div
        className={[
          styles.dropdownList,
          drop ? styles.dropList : styles.rollList,
          'dark:bg-cinder',
        ].join(' ')}
      >
        {options.map((option, index: number) => (
          <button
            data-testid='select-button'
            key={index + option.value.toString()}
            className={[
              styles.dropdownItem,
              value === option.value
                ? '!bg-off_white !text-cinder dark:!bg-gray-e8/20 dark:!text-white'
                : '',
              'dark:hover:bg-cinder-light dark:bg-transparent dark:text-white',
            ].join(' ')}
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default DropDown
