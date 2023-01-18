import siteLogoIMG from "../../../assets/skinekt-logo-header.svg";
import styles from './siteLogo.module.css'

const SiteLogo = () => {
  const scrollHandler = (item) => {
    const element = document.getElementById(item);
    const siteMainNav = document.getElementById("siteMainNav");

    let headerOffset = siteMainNav.offsetHeight;
    let elementPosition = element.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    function windowScroll(item) {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    windowScroll();
  };

  return (
    <div className={styles.siteLogo}>
      <img
        src={siteLogoIMG}
        alt="skinext"
        onClick={() => {
          scrollHandler("heroID");
        }}
      />
    </div>
  );
};

export default SiteLogo;
