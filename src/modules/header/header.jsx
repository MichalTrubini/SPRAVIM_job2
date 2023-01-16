import styles from "./header.module.css";
import useWindowDimensions from "../../util/WindowDimensions";
import MobileView from "./mobile/mobileView";
import DesktopView from "./desktopView";
import Hero from "./hero";
import { useEffect } from "react";

const Header = () => {
  const { width } = useWindowDimensions();
  const mobileBreakpoint = 1024;

  useEffect(() => {
    const siteMainNav = document.getElementById("siteMainNav");
    let baseScrollTop = 0;

    function onScroll() {
      let currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition > baseScrollTop) {
        siteMainNav.classList.add("siteMainNav__fix");
      } else {
        siteMainNav.classList.remove("siteMainNav__fix");
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className="container">
        <nav id='siteMainNav' className={styles.nav}>{width < mobileBreakpoint ? <MobileView /> : <DesktopView />}</nav>
        <Hero />
      </div>
    </header>
  );
};

export default Header;
