import {useState} from "react";
import styles from '../../styles/home/Email.module.scss'
import * as yup from 'yup';

export default function Email({style}: any) {
  let [placeholder, setPlaceholder] = useState(false)
  let [emailValidation, setEmailValidation] = useState("")
  let placeholderClass = {
    fontSize: "13px",
    fontWeight: "600",
    top: '6px',
    transform: "translateY(0)"
  }
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
    //Placeholder
    if (inputValue.length > 0) {
      setPlaceholder(placeholder = true)
    } else {setPlaceholder(placeholder = false)}
  }

  return (
    <form className={styles.email} style={style}>
      <h3 className={styles["email-title"]}>Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className={styles["email-form"]}>
        <label className={styles["email-input"]}>
          <input onChange={(e) => {inputStatues(e)}} style={emailValidation !== "" ? {borderBottom: "2px solid #ffa00a"} : {}} type="text"/>
          <span id="placeholder" className={styles["email-input__placeholder"]} style={placeholder ? placeholderClass : {} }>Email address</span>
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