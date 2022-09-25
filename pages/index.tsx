import type { NextPage } from 'next'
import Header from "../components/home/header";
import Hero from "../components/home/hero";
import styles from '../styles/home/Home.module.scss'
import Footer from "../components/home/footer";
import Faq from "../components/home/faq";
import {TV, Devices, Kids, Mobile} from "../components/home/features"
import classNames from "classnames";

const Home: NextPage = () => {
  const Feature = (props: any) => {
    return (
      <div className={styles.home__feature} style={props?.reverse ? {flexDirection: "row-reverse"} : {}}>
        <div className={styles["home__feature-content"]} style={props?.reverse ? {paddingLeft: "48px"} : {paddingRight: "48px"}}>
          <h1 className={styles["home__feature-title"]}>{props.title}</h1>
          <h2 className={styles["home__feature-description"]}>{props.description}</h2>
        </div>
        <div className={styles["home__feature-card"]}>
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
          <TV />
        </Feature>
    },
    {
      component:
        <Feature reverse={true} title="Download your shows to watch offline." description="Save your favorites easily and always have something to watch.">
          <Mobile />
        </Feature>
    },
    {
      component:
        <Feature title="Watch everywhere." description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.">
          <Devices />
        </Feature>
    },
    {
      component:
        <Feature reverse={true} title="Create profiles for kids." description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership.">
          <Kids />
        </Feature>
    },
    { component: <Faq />, additionalClass: styles['home__card-faq'] },
  ]

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.home__sections}>
        {list.map((item, key) =>
          <div key={key} className={classNames(styles["home__card"], item?.additionalClass)}>
            {item.component}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Home
