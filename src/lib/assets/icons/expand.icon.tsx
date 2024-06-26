import React from 'react'
import { IconsProps } from '@/lib/types/assets.types'

const Expand: React.FC<IconsProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 -960 960 960'
      width='24'
      className={className}
    >
      <path d='M160-160v-200h40v131.692l144-144L372.308-344l-144 144H360v40H160Zm440 0v-40h131.692l-144-144L616-372.308l144 144V-360h40v200H600ZM344-587.692l-144-144V-600h-40v-200h200v40H228.308l144 144L344-587.692Zm272 0L587.692-616l144-144H600v-40h200v200h-40v-131.692l-144 144Z' />
    </svg>
  )
}

export default Expand
