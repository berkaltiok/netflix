import styles from '../../styles/home/Email.module.scss'
import {useState} from "react";

export default function Email() {
  let [placeholder, setPlaceholder] = useState(false)
  let placeholderClass = {
    fontSize: "13px",
    fontWeight: "600",
    top: '6px',
    transform: "translateY(0)"
  }
  const inputStatues = (e: any) => {
    let inputValue = e.target.value
    if (inputValue.length > 0) {
      setPlaceholder(placeholder = true)
    } else {setPlaceholder(placeholder = false)}
  }

  return (
    <form className={styles.email}>
      <h3 className={styles["email-title"]}>Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className={styles["email-form"]}>
        <label className={styles["email-input"]}>
          <input onChange={(e) => {inputStatues(e)}} type="text"/>
          <span id="placeholder" className={styles["email-input__placeholder"]} style={placeholder ? placeholderClass : {} }>Email address</span>
        </label>
        <button type="submit" className={styles["email-submit"]}>
          <span className={styles["email-submit__text"]}>Get Started</span>
          <span className={styles["email-submit__icon"]}>
            <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc><path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fill-rule="evenodd" /></svg>
          </span>
        </button>
      </div>
    </form>
  )
}