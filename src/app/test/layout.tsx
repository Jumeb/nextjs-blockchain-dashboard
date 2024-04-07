import React from 'react'

import TestLayout from '@/components/blocks/DashboardLayout'

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <TestLayout>{children}</TestLayout>
}

export default DashboardLayout
