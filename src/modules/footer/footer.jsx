import styles from "./footer.module.css";
import facebookLogo from '../../assets/facebook-circle-line.svg';
import instagramLogo from '../../assets/instagram-line.svg';


const Footer = () => {
  return (
    <footer id='footerID' className={`${styles.footer} sitePadding`}>
      <div className={styles.container}>
        <form noValidate className={styles.form}>
          <h2 className={styles.heading}>Poďte s nami do toho</h2>
          <p className={styles.text}>
            Čoskoro budete môcť využívať Skinekt aj na vlastnej koži. Zadajte svoj mail a buďte prví kto bude mať
            možnosť využívať Skinekt. Vysoké zľavy pre vás.
          </p>
          <input className={styles.input} placeholder="Váš e-mail"/>
          <button className={styles.button}>Potvrdiť</button>
          <p className={styles.text}>Váš e-mail bude u nás v bezpečí.</p>
        </form>
        <div className={styles.social}>
            <img src={facebookLogo} alt='facebook'/>
            <img src={instagramLogo} alt='instagram'/>
        </div>
      </div>
      <p className={styles.copyright}>© 2023 Skinekt - Power of elektronics in textile</p>
    </footer>
  );
};

export default Footer;
