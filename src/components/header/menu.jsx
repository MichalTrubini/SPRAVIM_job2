import styles from "./menu.module.css";
import mobileClose from "../../assets/close-line.svg";
import useWindowDimensions from "../../util/WindowDimensions";
import Account from "./account";

const Menu = (props) => {
  const { width } = useWindowDimensions();

  const mobileBreakpoint = 768;

  return (
    <div className={styles.menu}>
      {width < mobileBreakpoint ? (
        <div className={styles.closeContainer}>
          <img src={mobileClose} alt="close mobile menu" onClick={props.onClick} />
        </div>
      ) : null}
      <ul className={styles.list}>
        <li className={styles.listItem}>čo riešime</li>
        <li className={styles.listItem}>pre koho</li>
        <li className={styles.listItem}>ako to robíme</li>
        <li className={styles.listItem}>kedy</li>
      </ul>
      <Account />
    </div>
  );
};

export default Menu;
