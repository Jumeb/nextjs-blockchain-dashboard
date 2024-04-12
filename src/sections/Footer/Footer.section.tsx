'use client'

import React from 'react'

import Link from 'next/link'
import styles from './styles.module.css'
import { Assets } from '@/lib/assets/images'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={[styles.container, 'dark:bg-cinder'].join(' ')}>
      <p className='dark:text-white'>&copy; {new Date().getFullYear()} Just Brilliant Inc</p>
      <div>
        <Link href={Assets.docs} download='Block Chain Docs' target='_blank' rel='noreferrer'>
          Download documentation
        </Link>
        <Link href={'https://arounda.agency/case/xblock'} target='__blank'>
          Link to design
        </Link>
        <Link href={'https://jumeb.github.io/'} target='__blank'>
          <Image
            src={Assets.logo1}
            height={50}
            width={50}
            alt='logo'
            className='invert sepia saturate-0 hue-rotate-0 brightness-100 contrast-100 dark:filter-none'
          />
        </Link>
      </div>
    </div>
  )
}

export default Footer
