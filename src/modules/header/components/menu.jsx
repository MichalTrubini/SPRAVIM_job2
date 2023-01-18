import styles from "./menu.module.css";
import { useHref } from "react-router-dom";

const Menu = (props) => {

  const urlRef = useHref()

  const scrollHandler = (item) => {
    if (urlRef !== '/') return;
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

    if (window.innerWidth < 1025) {
      setTimeout(() => {
        windowScroll();
      }, 500);
    } else windowScroll();
  };
  const close = () => {
    if (window.innerWidth < 1025) {
      props.onClickClose();
    }
  };

  return (
    <div>
      <ul className={styles.list}>
        <li
          className={styles.listItem}
          onClick={() => {
            scrollHandler("heroID");

            close();
          }}
        >
          čo riešime
        </li>
        <li
          className={styles.listItem}
          onClick={() => {
            scrollHandler("introID");
 
            close();
          }}
        >
          ako to robíme
        </li>
        <li
          className={styles.listItem}
          onClick={() => {
            scrollHandler("highlightsID");
 
            close();
          }}
        >
          pre koho
        </li>
        <li
          className={styles.listItem}
          onClick={() => {
            scrollHandler("footerID");

            close();
          }}
        >
          kedy
        </li>
      </ul>
    </div>
  );
};

export default Menu;
