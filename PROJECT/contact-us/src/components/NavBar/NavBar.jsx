import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <img src="/fulllogo.jpg"/>
        </div>
        <div className={styles.list}>
            <ul>
                <a href=""><li>HOME</li></a>
                <a href=""><li>ABOUT</li></a>
                <a href=""><li>CONTACT</li></a>
            </ul>
        </div>
    </div>
  )
}

export default NavBar