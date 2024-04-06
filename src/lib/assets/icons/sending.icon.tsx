import React from 'react'
import { IconsProps } from '@/lib/types/assets.types'

const Sending: React.FC<IconsProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 -960 960 960'
      width='24'
      className={className}
    >
      <path d='M160-240v-307.692 19.153V-720v480Zm0-367.693h640v-87.692q0-9.23-7.692-16.923Q784.615-720 775.385-720h-590.77q-9.23 0-16.923 7.692Q160-704.615 160-695.385v87.692ZM450.692-200H184.615Q157-200 138.5-218.5 120-237 120-264.615v-430.77Q120-723 138.5-741.5 157-760 184.615-760h590.77Q803-760 821.5-741.5 840-723 840-695.385v186.847q-30.384-18.847-65.346-29.001-34.962-10.153-73.269-10.153-34.693 0-66.731 9.192-32.039 9.192-59.27 26.193H160v247.692q0 9.23 7.692 16.923Q175.385-240 184.615-240h255.923q2.231 11 4.385 20.616 2.154 9.615 5.769 19.384Zm230.693 72.308-4.308-35.385q-18.923-4.231-35.577-12.807-16.654-8.577-29.961-23.5L578.154-186l-21.539-32.615 27.539-23.077q-6.616-20.693-6.616-41.385 0-20.692 6.616-41.384l-27.539-23.077 21.539-32.616 33.385 13.385q12.538-14.923 29.576-23.5 17.039-8.577 35.962-12.808l4.308-35.385h40l4.308 35.385q18.923 4.231 35.961 12.808t29.577 23.5l33.385-13.385 21.538 32.616-27.538 23.077q6.615 20.692 6.615 41.384t-6.615 41.385l27.538 23.077L824.616-186l-33.385-13.384q-13.308 14.923-29.962 23.5-16.653 8.576-35.576 12.807l-4.308 35.385h-40Zm20-69.231q36.077 0 61.115-25.039 25.039-25.038 25.039-61.115T762.5-344.192q-25.038-25.039-61.115-25.039t-61.116 25.039q-25.038 25.038-25.038 61.115t25.038 61.115q25.039 25.039 61.116 25.039Z' />
    </svg>
  )
}

export default Sending
