import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

function footer() {
  return (
    <footer>
       <div className={`container ${styles.footer__inner}` }>
          <div className={styles.footer__menu}>
          <Link href='/'>
                <Image 
                src='/img/myteam.png' 
                width={159} 
                height={40}
                alt='logo'/>
                </Link>
                <Link href='/'>home</Link>
                <Link href='/about'>about</Link>
          </div>
          <div className={styles.footer__adress}>
            <span>987 Hillcrest Lane</span>
            <span>Irvine, CA</span>
            <span>California 92714</span>
            <span>Call Us : 949-833-7432</span>
          </div>
       <div className={styles.footer__icons}>
          <div className={styles.footer__link}>
          <Link href='/'>
            <Image 
            src='/img/facebook-icon.png'
            width={24}
            height={24}/>
            </Link>
            <Link href='/'>
            <Image 
            src='/img/pinterest.png'
            width={24}
            height={24}/>
            </Link>
          
            <Link href='/'>
            <Image 
            src='/img/twitter-icon.png'
            width={24}
            height={24}/>
            </Link>
          </div>
          <p>Copyright 2020. All Rights Reserved</p>
       </div>
       </div>
    </footer>
  )
}

export default footer