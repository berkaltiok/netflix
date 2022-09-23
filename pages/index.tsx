import type { NextPage } from 'next'
import Header from "../components/home/header";
import Hero from "../components/home/hero";
import styles from '../styles/home/Home.module.scss'
import Footer from "../components/home/footer";
import Faq from "../components/home/faq";

const Home: NextPage = () => {
  const Feature = (props: any) => {
    return (
      <div className={styles.home__feature} style={props?.reverse ? {flexDirection: "row-reverse"} : {}}>
        <div className={styles["home__feature-content"]}>
          <div className={styles["home__feature-title"]}>{props.title}</div>
          <div className={styles["home__feature-description"]}>{props.description}</div>
        </div>
        <div className={styles["home__feature-content"]}>
          {props.children}
        </div>
      </div>
    )
  }
  const list = [
    { component: <Hero /> },
    {
      component:
        <Feature title="Enjoy on your TV." description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.">
          <div>Eh baba</div>
        </Feature>
    },
    {
      component:
        <Feature reverse={true} title="Enjoy on your TV." description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.">
          <div>Eh baba</div>
        </Feature>
    },
    { component: <Faq /> },
  ]

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.home__sections}>
        {list.map((item, key) =>
          <div key={key} className={styles["home__card"]}>
            {item.component}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Home
