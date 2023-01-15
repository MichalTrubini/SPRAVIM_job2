import styles from "./intro.module.css";
import imageShirt from "../../assets/ake-problemy-riesime@2x.webp";

const Intro = () => {
  return (
    <section className={`${styles.intro} sitePadding`}>
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
            <span className={styles.listItemText}>Analyzovanie polohy vášho tela</span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listItemNumber}>02.</span>
            <span className={styles.listItemText}>Analyzovanie rôznych pohybových dát</span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listItemNumber}>03.</span>
            <span className={styles.listItemText}>Analyzovanie fyziologických procesov</span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listItemNumber}>04.</span>
            <span className={styles.listItemText}>Vyhodnocovanie získaných dát</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Intro;
