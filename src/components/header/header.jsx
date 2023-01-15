import styles from "./header.module.css";
import useWindowDimensions from "../../util/WindowDimensions";
import MobileView from "./mobileView";
import DesktopView from "./desktopView";

const Header = () => {
  const { width } = useWindowDimensions();
  const mobileBreakpoint = 768;

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>{width < mobileBreakpoint ? <MobileView /> : <DesktopView />}</nav>
      </div>
    </header>
  );
};

export default Header;
