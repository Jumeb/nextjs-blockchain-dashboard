import React, { Dispatch, SetStateAction, useEffect } from 'react'

import styles from './styles.module.css'

const Notification: React.FC<Props> = ({ message, show, setShow }) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      setShow(false)
    }, 10000)

    return () => {
      clearTimeout(timer)
    }
  }, [show, setShow])

  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className={[
          styles.notify,
          show ? styles.notify__active : styles.notify__inactive,
          'dark:bg-cinder-light dark:text-white',
        ].join(' ')}
      >
        <h2>{message}</h2>
      </div>
    </>
  )
}

export default Notification

type Props = {
  message: string
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}
