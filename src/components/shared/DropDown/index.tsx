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
    <div className={`${styles.dropdown} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
      <div className={`${styles.dropdownSelect}`} onClick={() => setDrop(!drop)}>
        <span>{options.find((opt) => opt.value === value)?.label || label}</span>
        <div className={styles.dropdownIconContainer} onClick={() => setDrop(!drop)}>
          <Chevron className={[styles.dropdownIcon, drop ? '-rotate-90' : 'rotate-90'].join(' ')} />
        </div>
      </div>
      <div className={[styles.dropdownList, drop ? styles.dropList : styles.rollList].join(' ')}>
        {options.map((option, index: number) => (
          <button
            key={index + option.value.toString()}
            className={[
              styles.dropdownItem,
              value === option.value ? '!bg-off_white !text-cinder' : '',
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
