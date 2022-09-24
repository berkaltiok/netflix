import styles from "../../styles/home/Features.module.scss"
import Image from "next/image"

export function TV() {
  return (
    <div className={styles["tv"]}>
      <div className={styles["tv__image"]}>
        <Image src="/../public/home/feature/tv/tv.png" width={640} height={480} objectFit="cover" alt="tv image" />
      </div>
      <div className={styles["tv__video"]}>
        <video autoPlay playsInline muted loop>
          <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
export function Mobile() {
  return (
    <div className={styles["mobile"]}>
      <Image className={styles["mobile__image"]} src="/../public/home/feature/mobile/mobile.jpg" width={640} height={480} objectFit="cover" alt="tv image" />
      <div className={styles["mobile__card"]}>
        <div className={styles["mobile__card-image"]}>
          <Image src="/../public/home/feature/mobile/boxshot.png" width={58} height={80} objectFit="cover" alt="tv image" />
        </div>
        <div className={styles["mobile__card-content"]}>
          <span className={styles["mobile__card-title"]}>Stranger Things</span>
          <span className={styles["mobile__card-status"]}>Downloading...</span>
        </div>
        <div className={styles["mobile__card-animation"]} />
      </div>
    </div>
  )
}
export function Devices() {
  return (
    <div className={styles["devices"]}>
      <div className={styles["devices__image"]}>
        <Image src="/../public/home/feature/devices/device-pile.png" width={640} height={480} alt="tv image" />
      </div>
      <div className={styles["devices__video"]}>
        <video autoPlay playsInline muted loop>
          <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
export function Kids() {
  return (
    <div className={styles["kids"]}>
      <Image className={styles["kids__image"]} src="/../public/home/feature/kids.png" width={640} height={480} objectFit="cover" alt="tv image" />
    </div>
  )
}