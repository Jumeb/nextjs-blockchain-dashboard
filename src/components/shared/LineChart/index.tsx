'use client'

import React from 'react'

// import 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJs, LineElement, CategoryScale, LinearScale, PointElement, Legend } from 'chart.js'
import { ChartProps } from '@/lib/types/assets.types'

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement, Legend)

const LineChart: React.FC<ChartProps> = ({ data }) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        // gridLines: {
        //   display: false,
        //   color: 'transparent',
        // },
      },
      y: {
        position: 'right',
        grid: {
          display: false,
        },
        // position: 'right',
        // gridLines: {
        //   display: false,
        //   color: 'transparent',
        // },
      },
    },
  }

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  )
}

export default LineChart
