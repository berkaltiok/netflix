import styles from '../../../styles/home/Faq.module.scss'
import { useRef } from "react";

export default function faqItem({ item, onToggle, active }: any) {
  const { question, answer } = item;
  const contentEl: any = useRef();

  return (
    <div className={styles["faq-item"]}>
      <button onClick={onToggle} className={styles["faq-item__question"]}>
        {question}
        <svg viewBox="0 0 20.5 20.5" focusable="true" style={
          active
            ? { rotate: '180deg' }
            : { rotate: '45deg' }
        }>
          <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z" />
        </svg>
      </button>
      <div ref={contentEl} className={styles["faq-item__wrapper"]} style={
        active
        ? { height: contentEl.current.scrollHeight }
        : { height: "0px" }}>
        <span className={styles["faq-item__answer"]}>{answer}</span>
      </div>
    </div>
  )
}