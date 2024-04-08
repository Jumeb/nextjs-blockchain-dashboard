'use client'

import React from 'react'

import styles from './styles.module.css'
import { ButtonProps, IconDir } from '@/lib/types/components.types'

const Button: React.FC<ButtonProps> = ({ text, icon, onClick, iconDir = IconDir.RIGHT, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={[styles.button, 'dark:bg-off_white dark:*:fill-cinder', disabled ? styles.disabledButton : ''].join(
        ' ',
      )}
      onClick={onClick}
    >
      {iconDir === IconDir.LEFT && icon}
      <span className={['dark:text-cinder-light', disabled ? 'dark:text-gray-100' : ''].join(' ')}>{text}</span>
      {iconDir === IconDir.RIGHT && icon}
    </button>
  )
}

export default Button
