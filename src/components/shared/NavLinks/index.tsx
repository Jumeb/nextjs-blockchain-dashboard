'use client'

import React from 'react'

import styles from './styles.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavLinkProps } from '@/lib/types/components.types'

const NavLinks: React.FC<{ link: NavLinkProps }> = ({ link }) => {
  const pathname = usePathname()

  return (
    <Link
      href={link?.disabled ? '' :link.href}
      className={[
        styles.link,
        'dark:*:fill-white dark:before:bg-cinder-light dark:*:hover:text-off_white dark:*:hover:fill-off_white',
        pathname === link.href
          ? 'bg-primary *:!fill-white *:!text-white *:hover:!fill-white *:hover:!text-white dark:bg-gray-e8/20 dark:before:hover:!bg-transparent dark:before:!bg-transparent'
          : '',
        link.disabled ? styles.linkDisabled : '',
      ].join(' ')}
    >
      {link.icon}
      <span className='dark:text-white'>{link.label}</span>
    </Link>
  )
}

export default NavLinks
