import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

function Header() {
  return (
      <header className={styles.header}>
        <nav className='container'>
          <ul className={styles.header__list}>
            <li className={styles.header__list_item}>
              <Link href='/'>
                <Image 
                src='/img/myteam.png' 
                width={159} 
                height={40}
                alt='logo'  />
                </Link>
            </li>
            <li className={styles.header__list_item}>
              <Link href='/'>home</Link>
            </li>
            <li className={styles.header__list_item}>
              <Link href='/about'>about</Link>
            </li>
            <li className={styles.header__list_item}>
              <Link href='/contact'>contact us</Link>
            </li>
          </ul>
      </nav>
    </header>
  )
}

export default Header;