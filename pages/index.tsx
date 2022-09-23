import type { NextPage } from 'next'
import Header from "../components/home/header";
import Hero from "../components/home/hero";
import styles from '../styles/home/Home.module.scss'
import Footer from "../components/home/footer";
import Faq from "../components/home/faq";

const Home: NextPage = () => {
  const sections = [
    {component: <Hero />},
    {component: <Faq />}
  ]

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.home__sections}>
        {sections.map((item, key) =>
          <div key={key} className={styles["home__sections-card"]}>
            {item.component}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Home
