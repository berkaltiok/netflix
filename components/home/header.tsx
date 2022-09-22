import styles from '../../styles/home/Header.module.scss'
import Image from 'next/image'
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles['header-logo']}>
        <Image src="/logo.svg" layout="fill" objectFit='contain' alt="logo" />
      </div>
      <div className={styles['header-action']}>
        <select className={styles['header-action__picker']}>
          <option>
            English
          </option>
          <option>
            Türkçe
          </option>
        </select>
        <Link href="/login">
          <a className={styles['header-action__link']}>Sign In</a>
        </Link>
      </div>
    </div>
  )
}