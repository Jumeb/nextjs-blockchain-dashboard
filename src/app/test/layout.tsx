import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import TestLayout from '@/components/blocks/TestLayout'

const DashLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <TestLayout>{children}</TestLayout>
      </body>
    </html>
  )
}

export default DashLayout
