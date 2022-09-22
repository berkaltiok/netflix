import type { NextPage } from 'next'
import Header from "../components/home/header";
import Hero from "../components/home/hero";
import styles from '../styles/home/Home.module.scss'
import Footer from "../components/home/footer";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.home__sections}>
        <div className={styles["home__sections-card"]}>
          <Hero />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
