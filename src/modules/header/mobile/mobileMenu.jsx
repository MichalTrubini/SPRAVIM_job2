import mobileClose from "../../../assets/close-line.svg";
import useWindowDimensions from "../../../util/WindowDimensions";
import styles from "./mobileMenu.module.css";
import Account from "../components/account";
import Menu from "../components/menu";

const MobileMenu = (props) => {
  const { width } = useWindowDimensions();

  const mobileBreakpoint = 1024;

  return (
    <>
      <div className={styles.mobileMenu}>
        {width < mobileBreakpoint ? (
          <div className={styles.closeContainer}>
            <img src={mobileClose} alt="close mobile menu" onClick={props.onClick} />
          </div>
        ) : null}
        <Menu />
        <Account />
      </div>
    </>
  );
};

export default MobileMenu;