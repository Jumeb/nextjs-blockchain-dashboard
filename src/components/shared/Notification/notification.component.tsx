import React, { useEffect } from 'react'

import styles from './styles.module.css'
import { NotificationProps } from '@/lib/types/components.types'

const Notification: React.FC<NotificationProps> = ({ message, show, setShow }) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      setShow(false)
    }, 6000)

    return () => {
      clearTimeout(timer)
    }
  }, [show, setShow])

  return (
    <div
      data-testid='hide-notify'
      onClick={() => setShow(!show)}
      className={[
        styles.notify,
        show ? styles.notify__active : styles.notify__inactive,
        'dark:bg-cinder-light dark:text-white',
      ].join(' ')}
    >
      <h2>{message}</h2>
    </div>
  )
}

export default Notification
