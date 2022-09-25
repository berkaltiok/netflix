import styles from '../../styles/home/Hero.module.scss'
import Image from 'next/image'

export default function Hero() {
  return (
   <div className={styles.hero}>
     <div className={styles.hero__background}>
       <Image src="/../public/home/hero.jpg" objectFit="cover" layout="fill" alt="background image"/>
       <div className={styles["hero__background-filter"]} />
     </div>
     <div className={styles.hero__content}>
       <h1 className={styles["hero__content-title"]}>Unlimited movies, TV shows, and more.</h1>
       <h2 className={styles["hero__content-description"]}>Watch anywhere. Cancel anytime.</h2>
     </div>
   </div>
  )
}