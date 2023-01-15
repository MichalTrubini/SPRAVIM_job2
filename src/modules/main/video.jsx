import styles from "./video.module.css";
import videoImage from "../../assets/video@2x.webp";

const Video = () => {
  return (
    <section className={`${styles.video} sitePadding`}>
      <div>
        <h2 className={styles.heading}>Ako to všetko dokážeme</h2>
      </div>
      <div>
        <div className={styles.imageContainer}>
          <img src={videoImage} alt="video" />
        </div>
        <p className={styles.text}>
          Poskladali ste tím technologických odborníkov a nadšencov a vyvýjame elektroniku, ktorá je súčasťou textílie.
          Aktuálne sa zameriavame predovšetkým na tričko a jeho prvotnú verziu pre uvedenie na trh. Jedná sa o revolučný
          prísup ku získavaniu fyziologických a pohybových dát.
        </p>
      </div>
    </section>
  );
};

export default Video;
