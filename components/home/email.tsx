import {useState} from "react";
import styles from '../../styles/home/Email.module.scss'
import * as yup from 'yup';
import classNames from "classnames";

export default function Email({props}: any) {
  let [placeholder, setPlaceholder] = useState(false)
  let [emailValidation, setEmailValidation] = useState("")
  const inputStatues = (e: any) => {
    let inputValue = e.target.value
    let schema = yup.object().shape({
      email: yup.string().email(),
    });
    schema
      .isValid({
        email: inputValue,
      })
      .then(function (valid) {
        if (!valid) {
          if (inputValue.length >= 1) {
            setEmailValidation(emailValidation = "Email is required!")
          } if (inputValue.length >= 5) {
            setEmailValidation(emailValidation = "Please enter a valid email address")
          }
        } else setEmailValidation(emailValidation = "")
      });
  }
  const onFocus = () => {
    setPlaceholder(placeholder = true)
  }
  const offFocus = (e: any) => {
    if (e.target.value.length === 0) {
      setPlaceholder(placeholder = false)
    }
  }

  return (
    <form className={styles.email} style={props?.style}>
      <h3 className={styles["email-title"]}>Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className={styles["email-form"]}>
        <label className={styles["email-input"]}>
          <input
            onBlur={offFocus}
            onFocus={onFocus}
            onChange={(e) => {inputStatues(e)}}
            className={emailValidation !== "" ? styles.warn : ''}
            type="text"/>
          <span id="placeholder" className={classNames(styles["email-input__placeholder"], placeholder ? styles.active : '')}>Email address</span>
          <div className={styles["email-warn"]}>{emailValidation}</div>
        </label>
        <button type="submit" className={styles["email-submit"]}>
          <span className={styles["email-submit__text"]}>Get Started</span>
          <span className={styles["email-submit__icon"]}>
            <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc><path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" /></svg>
          </span>
        </button>
      </div>
    </form>
  )
}