import styles from './css/Header.module.css'
import { ColorFill } from '@boxicons/react';
import Instagram from '../assets/Instagram.svg'
import GitHub from '../assets/GitHub.svg'
import LinkedIn from '../assets/LinkedIn.svg'

export default function Header(){
    return(
        <>
         <section className={styles.headerSection}>
            <div className={styles.headerBox}>

                <div className={styles.iconBox}>
                    <button className={styles.colorBtn}><ColorFill className={styles.icon}/></button>
                </div>

                <div className={styles.navBox}>
                    <nav>
                        <ul className={styles.navList}>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Works</a></li>
                            <li><a href='#'>Services</a></li>
                            <li><a href='#' className={styles.contactBtn}>Contact</a></li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.socialsBox}>
                    <a href='#'><img src={Instagram} alt='Instagram'/></a>
                    <a href='#'><img src={GitHub} alt='Instagram'/></a>
                    <a href='#'><img src={LinkedIn} alt='Instagram'/></a>
                </div>

            </div>

            
         </section>
        </>
    )
}