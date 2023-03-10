import styles from "./highlights.module.css";
import zdravieImage from "../../../assets/zdravie@2x.webp";
import sportImage from "../../../assets/sport@2x.webp";
import lifestyleImage from "../../../assets/lifestyle@2x.webp";
import { useEffect, useState } from "react";

const Highlights = () => {
  const [tresholdImageOne, setThresholdImageOne] = useState(false);
  const [tresholdImageTwo, setThresholdImageTwo] = useState(false);

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

  useEffect(() => {
    const imageOne = document.getElementById("imageContainerOne");
    const imageTwo = document.getElementById("imageContainerTwo");

    //set header height

    const headerHeight = 74;

    //get threshold of elements

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    function handleScroll() {
      const imageOneTop =
        imageOne.getBoundingClientRect().top + imageOne.getBoundingClientRect().height / 2 - headerHeight;
      const imageTwoTop = imageTwo.getBoundingClientRect().top +headerHeight;

      if (imageOneTop < 0) setThresholdImageOne(true);
      else setThresholdImageOne(false);
      if (imageTwoTop < 0) setThresholdImageTwo(true);
      else setThresholdImageTwo(false);
    }
  }, []);

  useEffect(() => {
    //logic that controls animation in the highlights section on scroll

    const sliderElements = document.querySelectorAll('[data-act="animate"]');

    if (tresholdImageOne === false) sliderElements[0].classList.add("isActive");
    else {
      sliderElements[0].classList.remove("isActive");
    }

    if (sliderElements[1].previousElementSibling.classList.contains("isActive"))
      sliderElements[1].classList.remove("isActive");
    else if (tresholdImageTwo === false) sliderElements[1].classList.add("isActive");
    else sliderElements[1].classList.remove("isActive");

    if (tresholdImageTwo === true) sliderElements[2].classList.add("isActive");
    else sliderElements[2].classList.remove("isActive");
  }, [tresholdImageOne, tresholdImageTwo]);

  const paragraphOne = (
    <>
      <h3 className={styles.textHeading}>??port</h3>
      <p className={styles.text}>
        Ve??mi presne monitorujme polohu tela ??portovca, jeho fyziologick?? hodnoty a celkov?? stav. Tieto d??ta
        transformujeme na inform??cie, ktor?? pom??haj?? ??portovcom zlep??ova?? ich v??kon a techniku.
      </p>
    </>
  );

  const paragraphTwo = (
    <>
      <h3 className={styles.textHeading}>lifestyle</h3>
      <p className={styles.text}>
        ??i u?? pracujete dlh?? dobu za po????ta??om, alebo len chcete vedie?? o sebe viac pre zlep??enie zdravia, tak Skinekt
        v??m v tomto smere pom??ha z??skavan??m d??t a ich spracovan??m a vyhodnocovan??m.
      </p>
    </>
  );

  const paragraphThree = (
    <>
      <h3 className={styles.textHeading}>zdravie</h3>
      <p className={styles.text}>
        Pr??ve v tejto oblasti m?? Skinekt obrovsk?? vyu??itie. Lek??r vie dokonale vyhodocova?? d??ta o pacientovi aj na ve??k??
        vzdialenos??, viete by?? informovan?? o stave seniorov a pod.
      </p>
    </>
  );
  return (
    <section id="highlightsID" className={styles.section}>
      <div className={`${styles.sectionWrapper} sitePadding`}>
        <div className={styles.leftWrapper}>
          <div className={styles.description}>
            <div>
              <h2 className={styles.heading}>Pre koho je Skinekt pr??nosom</h2>
              <div
                className={`${styles.link} ${styles.linkDesktop}`}
                onClick={() => {
                  scrollHandler("footerID");
                }}
              >
                <p className={styles.linkText}>Zauj??ma ma to</p>
              </div>
            </div>
            <div className={styles.animatedContent}>
              <div className={`${styles.textContainer} ${styles.textContainerDT}`} data-act="animate">
                {paragraphOne}
              </div>
              <div className={`${styles.textContainer} ${styles.textContainerDT}`} data-act="animate">
                {paragraphTwo}
              </div>
              <div className={`${styles.textContainer} ${styles.textContainerDT}`} data-act="animate">
                {paragraphThree}
              </div>
            </div>
          </div>
        </div>
        <div id="scrollID" className={styles.highlights}>
          <div className={styles.container}>
            <div className={styles.headerMobile}>
              <h2 className={styles.heading}>Pre koho je Skinekt pr??nosom</h2>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.highlight}>
                <div id="imageContainerOne" className={styles.imageContainer}>
                  <img src={sportImage} alt="sport" />
                </div>
                <div className={styles.textContainer}>{paragraphOne}</div>
              </div>
              <div className={styles.highlight}>
                <div id="imageContainerTwo" className={styles.imageContainer}>
                  <img src={lifestyleImage} alt="lifestyle" />
                </div>
                <div className={styles.textContainer}>{paragraphTwo}</div>
              </div>
              <div className={styles.highlight}>
                <div id="imageContainerThree" className={styles.imageContainer}>
                  <img src={zdravieImage} alt="zdravie" />
                </div>
                <div className={styles.textContainer}>{paragraphThree}</div>
              </div>
            </div>

            <div
              className={`${styles.link} ${styles.linkMobile}`}
              onClick={() => {
                scrollHandler("footerID");
              }}
            >
              <p className={styles.linkText}>Zauj??ma ma to</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
