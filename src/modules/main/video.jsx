import styles from "./video.module.css";
import videoImage from "../../assets/video@2x.webp";
import YouTube from "react-youtube";

const Video = () => {
  const videoID = "3176Sw8A0EE";

  const opts = {
    height: "290",
    width: "350",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <section className={`${styles.video} sitePadding`}>
      <div>
        <h2 className={styles.heading}>
          Ako to <span className={styles.headingFix}>všetko dokážeme</span>
        </h2>
      </div>
      <div>
        <div className={styles.videoWrapper}>
          <div className={styles.imageContainer}>
            <img src={videoImage} alt="video" />
          </div>
          <YouTube
            videoId={videoID}
            className={styles.videoItem}
            opts={opts}
          />
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
