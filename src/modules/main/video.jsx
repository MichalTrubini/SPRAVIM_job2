import styles from "./video.module.css";
import videoImage from "../../assets/video@2x.webp";
import ReactPlayer from "react-player";
import { useState } from "react";
import playIcon from "../../assets/play-fill.svg";

const Video = () => {
  const [play, setPlay] = useState(false);

  const videoURL = "https://www.youtube.com/watch?v=ysz5S6PUM-U";

  return (
    <section className={`${styles.video} sitePadding`}>
      <div>
        <h2 className={styles.heading}>
          Ako to <span className={styles.headingFix}>všetko dokážeme</span>
        </h2>
      </div>
      <div>
        <div className={styles.videoWrapper}>
          {!play ? (
            <div
              className={styles.imageContainer}
              onClick={() => {
                setPlay(true);
              }}
            >
              <img src={videoImage} alt="video" />
              <div className={styles.playIcon}>
                <img src={playIcon} alt="play" />
              </div>
            </div>
          ) : null}

          <ReactPlayer url={videoURL} width="100%" height="100%" className={styles.videoPlayer} playing={play} />
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
