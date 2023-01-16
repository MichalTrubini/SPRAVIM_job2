import styles from "./highlights.module.css";
import zdravieImage from "../../assets/zdravie@2x.webp";
import sportImage from "../../assets/sport@2x.webp";
import lifestyleImage from "../../assets/lifestyle@2x.webp";
import useWindowDimensions from "../../util/WindowDimensions";

const Highlights = () => {
  const { width } = useWindowDimensions();

  const mobileBreakpoint = 1024

  const linkElement = (
    <div className={styles.link}>
      <p className={styles.linkText}>Zaujíma ma to</p>
    </div>
  );
  return (
    <section id='highlightsID' className={`${styles.highlights} sitePadding`}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Pre koho je Skinekt prínosom</h2>
        {width > mobileBreakpoint ? linkElement : null}
      </div>
      <div className={styles.highlight}>
        <div className={styles.imageContainer}>
          <img src={sportImage} alt="sport" />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.textHeading}>šport</h3>
          <p className={styles.text}>
            Veľmi presne monitorujme polohu tela športovca, jeho fyziologické hodnoty a celkový stav. Tieto dáta
            transformujeme na informácie, ktoré pomáhajú športovcom zlepšovať ich výkon a techniku.
          </p>
        </div>
      </div>
      <div className={styles.highlight}>
        <div className={styles.imageContainer}>
          <img src={lifestyleImage} alt="lifestyle" />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.textHeading}>lifestyle</h3>
          <p className={styles.text}>
            Či už pracujete dlhú dobu za počítačom, alebo len chcete vedieť o sebe viac pre zlepšenie zdravia, tak
            Skinekt vám v tomto smere pomáha získavaním dát a ich spracovaním a vyhodnocovaním.
          </p>
        </div>
      </div>
      <div className={styles.highlight}>
        <div className={styles.imageContainer}>
          <img src={zdravieImage} alt="zdravie" />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.textHeading}>zdravie</h3>
          <p className={styles.text}>
            Práve v tejto oblasti má Skinekt obrovské využitie. Lekár vie dokonale vyhodocovať dáta o pacientovi aj na
            veľkú vzdialenosť, viete byť informovaný o stave seniorov a pod.{" "}
          </p>
        </div>
      </div>
      {width < mobileBreakpoint ? linkElement : null}
    </section>
  );
};

export default Highlights;
