import React from 'react'
import { IconsProps } from '@/lib/types/assets.types'

const Dashboard: React.FC<IconsProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 -960 960 960'
      width='24'
      className={className}
    >
      <path d='M224.615-160Q197-160 178.5-178.5 160-197 160-224.615v-510.77Q160-763 178.5-781.5 197-800 224.615-800h510.77Q763-800 781.5-781.5 800-763 800-735.385v510.77Q800-197 781.5-178.5 763-160 735.385-160h-510.77Zm0-40H460v-560H224.615q-9.23 0-16.923 7.692Q200-744.615 200-735.385v510.77q0 9.23 7.692 16.923Q215.385-200 224.615-200ZM500-200h235.385q9.23 0 16.923-7.692Q760-215.385 760-224.615V-480H500v280Zm0-320h260v-215.385q0-9.23-7.692-16.923Q744.615-760 735.385-760H500v240Z' />
    </svg>
  )
}

export default Dashboard
