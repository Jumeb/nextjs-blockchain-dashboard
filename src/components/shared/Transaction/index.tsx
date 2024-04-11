import React, { memo, useMemo } from 'react'

import styles from './styles.module.css'
import { Close, Sending, Transaction } from '@/lib/assets/icons'
import { TypeEnum, TypeProps } from '@/lib/types/components.types'

const Type: React.FC<TypeProps> = ({ type }) => {
  const getTypeForm = (_type: TypeEnum) => {
    switch (_type) {
      case TypeEnum.SUCCESS:
        return <Transaction className='fill-primary' />
      case TypeEnum.CANCELLED:
        return <Close className='fill-red-500' />
      case TypeEnum.PENDING:
        return <Sending className='fill-gray-600 dark:fill-gray-300' />
      default:
        return <Transaction className='fill-primary' />
    }
  }

  const _getTypeForm = useMemo(() => getTypeForm(type), [type])

  return <div data-testid='type' className={[styles.type, 'dark:bg-white/10'].join(' ')}>{_getTypeForm}</div>
}

export default memo(Type)
