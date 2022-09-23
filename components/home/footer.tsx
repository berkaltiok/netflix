import styles from '../../styles/home/Footer.module.scss'
import Link from "next/link";

export default function Footer() {
  const links = [
    {text: "FAQ", link: '/support'},
    {text: "Help Center", link: '/'},
    {text: "Account", link: '/'},
    {text: "Media Center", link: '/'},
    {text: "Investor Relations", link: '/'},
    {text: "Jobs", link: '/'},
    {text: "Redeem Gift Cards", link: '/'},
    {text: "Ways to Watch", link: '/'},
    {text: "Terms of Use", link: '/'},
    {text: "Privacy", link: '/'},
    {text: "Cookie Preferences", link: '/'},
    {text: "Corporate Information", link: '/'},
    {text: "Contact Us", link: '/'},
    {text: "Speed Test", link: '/'},
    {text: "Legal Notices", link: '/'},
    {text: "Only on Netflix", link: '/'},
  ]

  return (
    <div className={styles.footer}>
      <div className={styles.footer__top}>
        <span>Questions? Call </span>
        <Link href="tel:0850-390-7444">
          <a>0850-390-7444</a>
        </Link>
      </div>
      <ul className={styles.footer__list}>
        {links.map(((item, key) =>
          <li key={key} className={styles["footer__list-item"]}>
            <Link href={item.link}>
              <a>{item.text}</a>
            </Link>
          </li>
        ))}
      </ul>
      <select className={styles.footer__picker}>
        <option>English</option>
        <option>Türkçe</option>
      </select>
      <p className={styles.footer__country}>Netflix Turkey</p>
    </div>
  )
}