import {NextPage} from "next";
import styles from "../styles/login/Login.module.scss"
import Image from "next/image"
import Link from "next/link";

const Login: NextPage = () => {
  return (
    <div className={styles.login}>
      <div className={styles["login-header"]}>
        <Link href="/">
          <a className={styles["login-header__logo"]}>
            <Image draggable={false} src="/logo.svg" alt="logo" layout="fill" />
          </a>
        </Link>
      </div>
      <form className={styles["login-form"]}>
        <h1 className={styles["login-form__title"]}>Sign In</h1>
        <label  className={styles["login-form__input"]}>
          <input type="text" id="emailornumber"/>
          <span>Email or phone number</span>
        </label>
      </form>
    </div>
  )
}
export default Login