import React from 'react'

import styles from './styles.module.css'
import ThemeSwitch from '@/components/shared/Theme/theme.component'
import ThemeProvide from '@/components/shared/Theme/ThemeProvider.component'
import Image from 'next/image'
import { Assets } from '@/lib/assets/images'
import NavLinks from '@/components/shared/NavLinks'
import { NavLinkProps } from '@/lib/types/components.types'
import {
  Block,
  Dashboard,
  Nodes,
  Staking,
  Stats,
  Token,
  Transaction,
  Wallet,
} from '@/lib/assets/icons'

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const links: NavLinkProps[] = [
    { href: '/', label: 'Dashboard', icon: <Dashboard />, disabled: false },
    { href: '/transactions', label: 'Transactions', icon: <Transaction />, disabled: false },
    { href: '/blocks', label: 'Blocks', icon: <Block />, disabled: false },
    { href: '/addresses', label: 'Addresses', icon: <Wallet />, disabled: true },
    { href: '/stats', label: 'Stats', icon: <Stats />, disabled: true },
    { href: '/tokens', label: 'Tokens', icon: <Token />, disabled: true },
    { href: '/staking', label: 'Staking', icon: <Staking />, disabled: true },
    { href: '/ecosystem', label: 'Ecosystem', icon: <Nodes />, disabled: true },
  ]


  return (
    <ThemeProvide>
      <div className={styles.container}>
        <input type='checkbox' id='toggler' className={styles.checkToggle} />
        <label htmlFor='toggler' className={[styles.navToggler, 'dark:bg-cinder'].join(' ')}>
          <div
            className={[
              styles.navHamburger,
              'dark:bg-white dark:before:bg-white dark:after:bg-white',
            ].join(' ')}
          />
        </label>
        <div className={[styles.containerLeft, 'dark:bg-cinder/50'].join(' ')}>
          <div className={[styles.sideNav, 'dark:bg-cinder'].join(' ')}>
            <div className={styles.logoContainer}>
              <Image
                src={Assets.logo1}
                alt='Logo'
                width={100}
                height={100}
                className='invert sepia saturate-0 hue-rotate-0 brightness-100 contrast-100 dark:filter-none'
              />
            </div>
            <div className={styles.linksContainer}>
              <div className={styles.appLinks}>
                {links.map((link, index: number) => (
                  <NavLinks key={index} link={link} />
                ))}
              </div>
              <div className={styles.externalLinks}></div>
            </div>
            <div className={styles.switchTheme}>
              <ThemeSwitch />
            </div>
          </div>
        </div>
        <div className={styles.containerRight}>{children}</div>
      </div>
    </ThemeProvide>
  )
}

export default DashboardLayout
