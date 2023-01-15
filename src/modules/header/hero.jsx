import styles from "./hero.module.css";
import shirtIMGMobile from "../../assets/tricko-header-mobil@2x.webp";
import shirtIMGDesktop from "../../assets/tricko-header@2x.webp";
import pattern from "../../assets/pattern-header.svg";
import useWindowDimensions from "../../util/WindowDimensions";

const Hero = () => {
  const { width } = useWindowDimensions();
  const mobileBreakpoint = 1024;

  return (
    <div className={`${styles.hero} sitePadding`}>
      <div className={styles.imageContainer}>
        {width < mobileBreakpoint ? (
          <img src={shirtIMGMobile} alt="heroImage" />
        ) : (
          <img src={shirtIMGDesktop} alt="heroImage" />
        )}
        <img src={pattern} alt="heroPattern" className={styles.pattern} />
      </div>
      <h1 className={styles.heading}>
        <span className={styles.wordFix}>prepájame</span> elektroniku{" "}
        <span className={styles.wordFix}>a textílie pre </span>lepšie pochopenie{" "}
        <span className={styles.wordFix}>našej fyziológie</span>
      </h1>
      <p className={styles.link}>Aké problémy riešime?</p>
    </div>
  );
};

export default Hero;
