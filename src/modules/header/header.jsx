import styles from "./header.module.css";
import useWindowDimensions from "../../util/WindowDimensions";
import MobileView from "./mobile/mobileView";
import DesktopView from "./desktopView";
import Hero from "./hero";

const Header = () => {
  const { width } = useWindowDimensions();
  const mobileBreakpoint = 1024;

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>{width < mobileBreakpoint ? <MobileView /> : <DesktopView />}</nav>
        <Hero />
      </div>
    </header>
  );
};

export default Header;
