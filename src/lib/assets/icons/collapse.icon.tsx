import React from 'react'
import { IconsProps } from '@/lib/types/assets.types'

const Collapse: React.FC<IconsProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 -960 960 960'
      width='24'
      className={className}
    >
      <path d='M176-147.692 147.692-176l144-144H160v-40h200v200h-40v-131.692l-144 144Zm608 0-144-144V-160h-40v-200h200v40H668.308l144 144L784-147.692ZM160-600v-40h131.692l-144-144L176-812.308l144 144V-800h40v200H160Zm440 0v-200h40v131.692l144-144L812.308-784l-144 144H800v40H600Z' />
    </svg>
  )
}

export default Collapse
