import styles from "./intro.module.css";
import imageShirt from "../../assets/ake-problemy-riesime@2x.webp";

const Intro = () => {
  return (
    <section id="introID" className={`${styles.intro} sitePadding`}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <img src={imageShirt} alt="Ake problemy riesime" />
        </div>
        <div>
          <h2 className={styles.heading}>Aké problémy riešime</h2>
          <p className={styles.text}>
            Tvoríme technológie integrované v odevoch, ktoré analyzujú všetko, čo človeku pomáha robiť lepšie
            rozhodnutia v rámci svojho zdravia.
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.listItemNumber}>01.</span>
            <h3 className={styles.listItemText}>Analyzovanie polohy vášho tela</h3>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listItemNumber}>02.</span>
            <h3 className={styles.listItemText}>Analyzovanie rôznych pohybových dát</h3>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listItemNumber}>03.</span>
            <h3 className={styles.listItemText}>Analyzovanie fyziologických procesov</h3>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listItemNumber}>04.</span>
            <div>
              <h3 className={styles.listItemText}>Vyhodnocovanie získaných dát</h3>
              <p className={styles.note}>A mnoho ďalšieho...</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Intro;
