import React from 'react'
import styles from '../styles/Home.module.css'
export default function Hero() {
  return (
    <div className={styles.hero}>
        <div className={styles.hero__inner}>
            <div className={styles.hero__title}>
                Find the best <span className={styles.hero__talent}>talent</span>
            </div>
            <div className={styles.hero__text}>
            Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
            </div>
        </div>
    </div>
  )
}
