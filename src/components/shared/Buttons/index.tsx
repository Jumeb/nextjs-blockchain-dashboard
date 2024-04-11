'use client'

import React from 'react'

import styles from './styles.module.css'
import { ButtonProps } from '@/lib/types/components.types'

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled, loading }) => {
  return (
    <button
      disabled={disabled}
      className={[
        styles.button,
        'dark:bg-off_white',
        disabled ? styles.disabledButton : '',
      ].join(' ')}
      onClick={onClick}
    >
      <span className={['dark:text-cinder-light', disabled ? 'dark:text-gray-100' : ''].join(' ')}>
        {loading ? 'Loading...' : text}
      </span>
    </button>
  )
}

export default Button
