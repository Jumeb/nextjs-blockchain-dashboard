import React from 'react'

import styles from './styles.module.css'
import ThemeSwitch from '@/components/shared/Theme/theme.component'
import ThemeProvide from '@/components/shared/Theme/ThemeProvider.component'
import Image from 'next/image'
import { Assets } from '@/lib/assets/images'
import NavLinks from '@/components/shared/NavLinks'
import { NavLinkProps } from '@/lib/types/components.types'
import { Block, Heirachy, Light, Nodes, Token, Wallet } from '@/lib/assets/icons'

const TestLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const links: NavLinkProps[] = [
    { href: '#overview', label: 'Stamps', icon: <Wallet />, disabled: false },
    { href: '#theme', label: 'Theme Switcher', icon: <Light />, disabled: false },
    { href: '#cards', label: 'Cards', icon: <Token />, disabled: false },
    { href: '#transactions', label: 'Transactions', icon: <Nodes />, disabled: false },
    { href: '#blocks', label: 'Blocks', icon: <Heirachy />, disabled: false },
    { href: '#stamps', label: 'Stamps', icon: <Block />, disabled: false },
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
              <Image src={Assets.logo1} alt='Logo' width={100} height={100} />
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

export default TestLayout
